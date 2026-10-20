import type { MetadataRoute } from "next";

/**
 * This is a personal matrimonial profile shared by link. It asks search
 * engines not to index it.
 *
 * Be aware: `robots.txt` is a *request*, not access control. Anyone who has the
 * link — or who guesses the URL — can still open the page. See the privacy
 * notes in README.md.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
  };
}