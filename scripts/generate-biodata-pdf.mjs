import { spawn } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import puppeteer from "puppeteer-core";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "public", "biodata");

const PORT = process.env.BIODATA_PDF_PORT ?? "3258";
const BASE_URL = process.env.BIODATA_PDF_BASE_URL ?? `http://127.0.0.1:${PORT}`;
const LOCALES = ["en", "hi"];

/** Resolve a Chrome/Chromium executable from env or the puppeteer cache. */
async function resolveChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;

  const cacheRoot = join(process.env.HOME ?? "", ".cache", "puppeteer");
  const candidates = [
    join(cacheRoot, "chrome-headless-shell"),
    join(cacheRoot, "chrome"),
  ];

  for (const base of candidates) {
    if (!existsSync(base)) continue;
    for (const build of await readdir(base)) {
      const exec = join(
        base,
        build,
        build.startsWith("linux") ? "chrome-headless-shell-linux64" : "chrome-linux64",
        build.startsWith("linux") ? "chrome-headless-shell" : "chrome",
      );
      if (existsSync(exec)) return exec;
    }
  }

  throw new Error(
    "No Chrome executable found. Set CHROME_PATH or run `npx puppeteer browsers install chrome-headless-shell`.",
  );
}

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // not ready yet
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server did not become ready at ${url}`);
}

/** Count pages by parsing the generated PDF's /Type /Page objects. */
function countPdfPages(buffer) {
  const text = buffer.toString("latin1");
  const matches = text.match(/\/Type\s*\/Page[^s]/g);
  return matches ? matches.length : 0;
}

async function main() {
  const skipServer = process.env.BIODATA_PDF_SKIP_SERVER === "1";
  const executablePath = await resolveChrome();

  mkdirSync(outDir, { recursive: true });

  let server;
  if (!skipServer) {
    server = spawn(
      process.execPath,
      [join("node_modules", "next", "dist", "bin", "next"), "start", "-p", PORT],
      { cwd: root, stdio: "inherit", env: { ...process.env, PORT } },
    );
    await waitForServer(`${BASE_URL}/en/biodata`);
  }

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });

  try {
    for (const locale of LOCALES) {
      const page = await browser.newPage();
      await page.goto(`${BASE_URL}/${locale}/biodata`, {
        waitUntil: "networkidle0",
      });
      await page.emulateMediaType("print");
      // Ensure webfonts (Devanagari) are fully loaded before printing.
      await page.evaluate(() => document.fonts.ready);

      const outFile = join(outDir, `ranjan-yadav-biodata-${locale}.pdf`);
      const pdf = await page.pdf({
        path: outFile,
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
        margin: { top: "0", bottom: "0", left: "0", right: "0" },
      });

      const pages = countPdfPages(Buffer.isBuffer(pdf) ? pdf : Buffer.from(pdf));
      console.log(`  → ${outFile} (${pages} page${pages === 1 ? "" : "s"})`);
      await page.close();
    }
  } finally {
    await browser.close();
    if (server) server.kill("SIGTERM");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
