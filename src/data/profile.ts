import type { Profile } from "@/types/profile";

/**
 * ============================================================================
 * SINGLE SOURCE OF TRUTH FOR ALL PROFILE CONTENT
 * ============================================================================
 *
 * Everything a visitor reads is configured here — never inside a component.
 *
 * Confirmed profile data:
 * - Personal details, education, career, family and partner preferences.
 * - B.Com completed; MCA currently in progress at Manipal University Jaipur.
 * - Senior Software Engineer at Protean, with 4+ years of experience.
 * - Family details and partner preferences are based on information provided.
 *
 * Intentionally omitted:
 * - Date of birth, community/caste, salary and compensation.
 * - Family members' ages and individual sibling details.
 * - Partner values and additional relationship expectations.
 * - Direct phone numbers, WhatsApp numbers and email addresses.
 * - B.Com institution and MCA year/semester, which have not been provided.
 *
 * Photos:
 * - Current images are decorative placeholders, not personal photographs.
 * - Replace them with approved personal photographs when available.
 *
 * Editing guide:
 * - `en` — English copy, `hi` — Hindi (Devanagari) copy.
 * - Leave unknown fields out rather than inventing information.
 * - Contact is arranged through the family; no direct contact details
 *   are published.
 * ============================================================================
 */

export const profile: Profile = {
  meta: {
    title: {
      en: "Ranjan Yadav — Matrimonial Profile",
      hi: "रंजन यादव — वैवाहिक परिचय",
    },
    description: {
      en: "Matrimonial profile of Ranjan Yadav, a Senior Software Engineer based in Noida and originally from Madhubani, Bihar.",
      hi: "रंजन यादव का वैवाहिक परिचय। वे नोएडा में रहते हैं और मूल रूप से मधुबनी, बिहार से हैं। वे सीनियर सॉफ़्टवेयर इंजीनियर हैं।",
    },
  },

  hero: {
    eyebrow: {
      en: "Matrimonial Profile",
      hi: "वैवाहिक परिचय",
    },
    headline: {
      en: "A Little About Me, and the Future I Hope to Build",
      hi: "मेरे बारे में कुछ बातें और साथ मिलकर भविष्य बनाने की उम्मीद",
    },
    intro: {
      en: "Hello, I am Ranjan Yadav. I work as a Senior Software Engineer and have over four years of professional experience. I am currently pursuing my MCA at Manipal University Jaipur. I live in Noida, and my family is originally from Madhubani, Bihar.",
      hi: "नमस्कार, मेरा नाम रंजन यादव है। मैं सीनियर सॉफ़्टवेयर इंजीनियर के रूप में कार्यरत हूँ और मुझे चार वर्ष से अधिक का कार्य अनुभव है। वर्तमान में मैं मणिपाल यूनिवर्सिटी, जयपुर से MCA कर रहा हूँ। मैं नोएडा में रहता हूँ और मेरा परिवार मूल रूप से मधुबनी, बिहार से है।",
    },
    primaryAction: {
      en: "Get to Know Me",
      hi: "मेरे बारे में जानें",
    },
    secondaryAction: {
      en: "View My Gallery",
      hi: "गैलरी देखें",
    },
    primaryActionHref: "#about",
    secondaryActionHref: "#gallery",
  },

  personal: {
    fullName: {
      en: "Ranjan Yadav",
      hi: "रंजन यादव",
    },
    shortName: {
      en: "Ranjan Yadav",
      hi: "रंजन यादव",
    },
    // Date of birth and age are intentionally not shared.
    heightCm: 168,
    motherTongue: {
      en: "Maithili",
      hi: "मैथिली",
    },
    currentCity: {
      en: "Noida",
      hi: "नोएडा",
    },
    hometown: {
      en: "Madhubani, Bihar",
      hi: "मधुबनी, बिहार",
    },
    languages: ["Maithili", "Hindi", "English"],
    religion: {
      en: "Hindu",
      hi: "हिन्दू",
    },
    // Community / caste is intentionally not shared.
    maritalStatus: {
      en: "Unmarried",
      hi: "अविवाहित",
    },
    diet: {
      en: "Non-vegetarian",
      hi: "मांसाहारी",
    },
    about: {
      en: "Hello, I am Ranjan Yadav. I work as a Senior Software Engineer and have over four years of professional experience. I completed my B.Com and am currently pursuing my MCA at Manipal University Jaipur. I live in Noida, and my family is originally from Madhubani, Bihar.\n\nI enjoy technology, learning new things, and cooking. I value mutual respect, understanding, and family values. I hope to build a meaningful relationship with a life partner based on trust, companionship, and shared growth.",
      hi: "नमस्कार, मेरा नाम रंजन यादव है। मैं सीनियर सॉफ़्टवेयर इंजीनियर के रूप में कार्यरत हूँ और मुझे चार वर्ष से अधिक का कार्य अनुभव है। मैंने B.Com की पढ़ाई पूरी की है और वर्तमान में मणिपाल यूनिवर्सिटी, जयपुर से MCA कर रहा हूँ। मैं नोएडा में रहता हूँ और मेरा परिवार मूल रूप से मधुबनी, बिहार से है।\n\nमुझे टेक्नोलॉजी, नई चीज़ें सीखना और खाना बनाना पसंद है। मैं आपसी सम्मान, समझ और पारिवारिक मूल्यों को महत्व देता हूँ। मैं ऐसे जीवनसाथी के साथ विश्वास, साथ और एक-दूसरे की प्रगति पर आधारित सार्थक रिश्ता बनाना चाहता हूँ।",
    },
    values: [
      {
        en: "Mutual respect",
        hi: "आपसी सम्मान",
      },
      {
        en: "Understanding",
        hi: "समझ",
      },
      {
        en: "Family values",
        hi: "पारिवारिक मूल्य",
      },
    ],
  },

  career: {
    profession: {
      en: "Software Developer",
      hi: "सॉफ़्टवेयर डेवलपर",
    },
    currentRole: {
      en: "Senior Software Engineer",
      hi: "वरिष्ठ सॉफ़्टवेयर इंजीनियर",
    },
    industry: {
      en: "Information Technology",
      hi: "सूचना प्रौद्योगिकी",
    },
    organisation: "Protean",
    experienceYears: 4,
    introduction: {
      en: "I work as a Senior Software Engineer at Protean and have over four years of professional experience in software development. My work involves building and improving software, solving technical problems, and continuing to learn as technology evolves. Alongside my professional work, I am pursuing my MCA at Manipal University Jaipur.",
      hi: "मैं Protean में वरिष्ठ सॉफ़्टवेयर इंजीनियर के रूप में कार्यरत हूँ और मुझे सॉफ़्टवेयर डेवलपमेंट में चार वर्ष से अधिक का अनुभव है। मेरा काम सॉफ़्टवेयर बनाने और उसे बेहतर बनाने, तकनीकी समस्याओं को सुलझाने तथा नई तकनीकों के साथ सीखते रहने से जुड़ा है। अपने पेशेवर काम के साथ-साथ मैं मणिपाल यूनिवर्सिटी, जयपुर से MCA की पढ़ाई कर रहा हूँ।",
    },
    // Career highlights, milestones and compensation are intentionally omitted.
  },

  education: {
    items: [
      {
        degree: {
          en: "MCA (Master of Computer Applications)",
          hi: "एम.सी.ए. (मास्टर ऑफ कंप्यूटर एप्लिकेशंस)",
        },
        institution: "Manipal University Jaipur",
        note: {
          en: "Currently pursuing (2025 - 2027)",
          hi: "वर्तमान में अध्ययनरत (2025 - 2027)",
        },
      },
      {
        degree: {
          en: "B.Com (Bachelor of Commerce)",
          hi: "बी.कॉम. (बैचलर ऑफ कॉमर्स)",
        },
        note: {
          en: "Completed (2018)",
          hi: "पूरा किया (2018)",
        },
      },
    ],
  },

  family: {
    about: {
      en: "Our family is based in Madhubani, Bihar. My father is a farmer, and my mother is a homemaker. We value mutual respect, family unity, and understanding.",
      hi: "हमारा परिवार मधुबनी, बिहार में रहता है। मेरे पिता किसान हैं और मेरी माता गृहिणी हैं। हम आपसी सम्मान, पारिवारिक एकता और समझ को महत्व देते हैं।",
    },
    father: {
      relation: {
        en: "Father",
        hi: "पिता",
      },
      occupation: {
        en: "Farmer",
        hi: "किसान",
      },
    },
    mother: {
      relation: {
        en: "Mother",
        hi: "माता",
      },
      occupation: {
        en: "Homemaker",
        hi: "गृहिणी",
      },
    },
    // A single summary entry is used; individual sibling details are omitted.
    siblings: [
      {
        relation: {
          en: "Siblings",
          hi: "भाई-बहन",
        },
        note: {
          en: "There are five of us siblings, including me. I have three sisters and one brother, and all my siblings are married.",
          hi: "हम कुल पाँच भाई-बहन हैं। मेरी तीन बहनें और एक भाई हैं, और मेरे सभी भाई-बहन विवाहित हैं।",
        },
      },
    ],
    hometown: {
      en: "Madhubani, Bihar",
      hi: "मधुबनी, बिहार",
    },
    values: [
      {
        en: "Mutual respect",
        hi: "आपसी सम्मान",
      },
      {
        en: "Honesty and trust",
        hi: "ईमानदारी और विश्वास",
      },
      {
        en: "Understanding and empathy",
        hi: "समझ और संवेदनशीलता",
      },
    ],
  },

  partnerPreferences: {
    about: {
      en: "I hope to find a kind, loyal, and family-oriented life partner with whom I can build a relationship based on mutual respect and understanding.",
      hi: "मैं एक ऐसी जीवनसाथी की तलाश में हूँ जो दयालु, वफ़ादार और परिवार को महत्व देने वाली हो। मैं चाहता हूँ कि हमारा रिश्ता आपसी सम्मान और समझ पर आधारित हो।",
    },
    ageRange: "22 – 27",
    education: {
      en: "Graduate",
      hi: "स्नातक",
    },
    career: {
      en: "Any profession",
      hi: "कोई भी पेशा",
    },
    lifestyle: {
      en: "Family-oriented and balanced",
      hi: "परिवार को महत्व देने वाली और संतुलित जीवनशैली",
    },
    location: {
      en: "No location preference",
      hi: "किसी विशेष स्थान की प्राथमिकता नहीं",
    },
    // Partner values and additional expectations have not been provided.
  },

  interests: {
    items: [
      {
        en: "Technology",
        hi: "प्रौद्योगिकी",
      },
      {
        en: "Learning new things",
        hi: "नई चीज़ें सीखना",
      },
      {
        en: "Cooking",
        hi: "खाना बनाना",
      },
    ],
  },

  photos: [
    // Decorative placeholders only — these are not personal photographs.
    // Replace with approved photographs when available. `photos[0]` is also
    // used as the hero portrait. Keep dimensions in sync with each image.
    {
      // `photos[0]` is the portrait shown at the top of the page.
      src: "/images/portrait.jpg",
      alt: {
        en: "Recent portrait",
        hi: "हालिया चित्र",
      },
      caption: { en: "Recent portrait", hi: "हालिया चित्र" },
      width: 1200,
      height: 2000,
    },
    {
      src: "/images/gallery-01.jpg",
      alt: {
        en: "Gallery photograph — add a description",
        hi: "गैलरी तस्वीर — विवरण जोड़ें",
      },
      caption: {
        en: "A recent photograph",
        hi: "हालिया तस्वीर",
      },
      width: 1200,
      height: 1500,
    },
    {
      src: "/images/gallery-02.png",
      alt: {
        en: "Decorative placeholder panel — personal photograph not added yet",
        hi: "डिज़ाइन का नमूना — अभी व्यक्तिगत तस्वीर नहीं जोड़ी गई है",
      },
      width: 1200,
      height: 1500,
    },
    {
      src: "/images/gallery-03.png",
      alt: {
        en: "Decorative placeholder panel — personal photograph not added yet",
        hi: "डिज़ाइन का नमूना — अभी व्यक्तिगत तस्वीर नहीं जोड़ी गई है",
      },
      width: 1200,
      height: 1200,
    },
    {
      src: "/images/gallery-04.png",
      alt: {
        en: "Decorative placeholder panel — personal photograph not added yet",
        hi: "डिज़ाइन का नमूना — अभी व्यक्तिगत तस्वीर नहीं जोड़ी गई है",
      },
      width: 1200,
      height: 900,
    },
    {
      src: "/images/gallery-05.png",
      alt: {
        en: "Decorative placeholder panel — personal photograph not added yet",
        hi: "डिज़ाइन का नमूना — अभी व्यक्तिगत तस्वीर नहीं जोड़ी गई है",
      },
      width: 1200,
      height: 1500,
    },
    {
      src: "/images/gallery-06.png",
      alt: {
        en: "Decorative placeholder panel — personal photograph not added yet",
        hi: "डिज़ाइन का नमूना — अभी व्यक्तिगत तस्वीर नहीं जोड़ी गई है",
      },
      width: 1200,
      height: 900,
    },
  ],

  contact: {
    // No phone number, WhatsApp number or email address is published.
    // Contact is arranged through the family.
    familyContact: {
      relation: {
        en: "Contact through family",
        hi: "परिवार के माध्यम से संपर्क करें",
      },
      showOnPage: true,
      note: {
        en: "For further discussions, please connect with my family through the person who shared this profile.",
        hi: "आगे की बातचीत के लिए कृपया यह परिचय साझा करने वाले व्यक्ति के माध्यम से मेरे परिवार से संपर्क करें।",
      },
    },
    note: {
      en: "For any further conversation, please contact my family.",
      hi: "आगे की बातचीत के लिए कृपया मेरे परिवार से संपर्क करें।",
    },
  },

  availableLocales: ["en", "hi"],
  defaultLocale: "en",
};