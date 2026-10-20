import type { Profile } from "@/types/profile";

/**
 * ============================================================================
 * SINGLE SOURCE OF TRUTH FOR ALL PROFILE CONTENT
 * ============================================================================
 *
 * Everything a visitor reads is configured here — never inside a component.
 *
 * Confirmed profile data:
 * - B.Com completed; MCA currently in progress at Manipal University Jaipur.
 * - Senior Software Engineer at Protean, with 4+ years of experience.
 * - Family details and partner preferences are based on information provided.
 *
 * Intentionally omitted:
 * - Date of birth, community/caste, salary and compensation.
 * - Family members' ages and individual sibling details.
 * - Partner values and additional relationship expectations.
 * - Direct phone numbers, WhatsApp numbers and email addresses.
 * - B.Com institution and other unconfirmed education details.
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
      en: "Hello, I’m Ranjan Yadav. I work as a Senior Software Engineer at Protean and have over four years of professional experience. I’m also pursuing my MCA at Manipal University Jaipur. Originally from Madhubani, Bihar, I’m currently based in Noida.",
      hi: "नमस्कार, मैं रंजन यादव हूँ। मैं Protean में सीनियर सॉफ़्टवेयर इंजीनियर के रूप में कार्यरत हूँ और मुझे चार वर्ष से अधिक का पेशेवर अनुभव है। वर्तमान में मैं मणिपाल यूनिवर्सिटी, जयपुर से MCA भी कर रहा हूँ। मेरा मूल निवास मधुबनी, बिहार है और फिलहाल मैं नोएडा में रहता हूँ।",
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
      en: "I enjoy learning, exploring new ideas, and growing through new experiences. I have completed my B.Com and am currently pursuing my MCA alongside my professional career. In my free time, I enjoy technology, travelling, long walks, and cooking. I value mutual respect, honesty, and understanding. I hope to build a meaningful relationship with a kind and loyal life partner, sharing life’s experiences and supporting each other’s growth.",
      hi: "मुझे नई चीज़ें सीखना, नए विचारों को जानना और जीवन के अनुभवों से आगे बढ़ना पसंद है। मैंने B.Com पूरा किया है और वर्तमान में अपने पेशेवर जीवन के साथ MCA की पढ़ाई कर रहा हूँ। खाली समय में मुझे टेक्नोलॉजी, घूमना-फिरना, लंबी सैर करना और खाना बनाना पसंद है। मैं आपसी सम्मान, ईमानदारी और एक-दूसरे को समझने को महत्व देता हूँ। मेरी इच्छा है कि मुझे एक दयालु और वफ़ादार जीवनसाथी मिले, जिसके साथ जीवन के अनुभव साझा करते हुए हम एक-दूसरे की प्रगति में सहयोग करें।",
    },
    values: [
      {
        en: "Mutual respect",
        hi: "आपसी सम्मान",
      },
      {
        en: "Honesty",
        hi: "ईमानदारी",
      },
      {
        en: "Understanding",
        hi: "आपसी समझ",
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
      en: "My professional journey is in software development, where I enjoy solving problems and building useful digital solutions. I work as a Senior Software Engineer at Protean. Alongside my work, I’m pursuing my MCA to continue strengthening my knowledge and skills.",
      hi: "मेरा पेशेवर क्षेत्र सॉफ़्टवेयर डेवलपमेंट है, जहाँ मुझे समस्याओं को हल करना और उपयोगी डिजिटल समाधान बनाना पसंद है। मैं Protean में सीनियर सॉफ़्टवेयर इंजीनियर के रूप में कार्यरत हूँ। अपने काम के साथ-साथ MCA की पढ़ाई करके मैं अपने ज्ञान और कौशल को लगातार बेहतर बनाने का प्रयास कर रहा हूँ।",
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
      en: "My family is originally from Madhubani, Bihar. My father is a farmer, and my mother is a homemaker. We are five siblings in total, including me, and all my siblings are married. I believe honesty, mutual respect, and understanding are important in family relationships.",
      hi: "मेरा परिवार मूल रूप से मधुबनी, बिहार से है। मेरे पिता किसान हैं और मेरी माता गृहिणी हैं। हम कुल पाँच भाई-बहन हैं, जिनमें मैं भी शामिल हूँ। मेरे सभी भाई-बहन विवाहित हैं। मेरा मानना है कि पारिवारिक रिश्तों में ईमानदारी, आपसी सम्मान और एक-दूसरे को समझना महत्वपूर्ण है।",
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
          en: "We are five siblings, including me. I have three sisters and one brother, and all of them are married.",
          hi: "हम कुल पाँच भाई-बहन हैं, जिनमें मैं भी शामिल हूँ। मेरी तीन बहनें और एक भाई हैं, और सभी विवाहित हैं।",
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
      en: "I hope to meet someone who is kind, loyal, and family-oriented. I value a relationship built on mutual respect, trust, open communication, and understanding. I believe both partners should support each other’s growth while building a balanced life together.",
      hi: "मैं ऐसी जीवनसाथी से मिलना चाहता हूँ जो दयालु, वफ़ादार और परिवार को महत्व देने वाली हो। मेरे लिए आपसी सम्मान, विश्वास, खुलकर बातचीत करना और एक-दूसरे को समझना महत्वपूर्ण है। मेरा मानना है कि दोनों जीवनसाथियों को एक-दूसरे की प्रगति में सहयोग करते हुए मिलकर संतुलित जीवन बनाना चाहिए।",
    },
    ageRange: "22 – 28",
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
      {
        en: "Travelling",
        hi: "घूमना-फिरना",
      },
      {
        en: "Long walks",
        hi: "लंबी सैर करना",
      },
    ],
  },

  photos: [
    // Keep image paths and dimensions aligned with the actual files in public/images.
    {
      // `photos[0]` is the portrait shown at the top of the page.
      src: "/images/portrait.png",
      alt: {
        en: "Portrait of Ranjan Yadav",
        hi: "रंजन यादव का चित्र",
      },
      caption: { en: "Portrait", hi: "चित्र" },
      width: 1200,
      height: 2000,
    },
    {
      src: "/images/gallery-01.jpg",
      alt: {
        en: "Photograph of Ranjan Yadav",
        hi: "रंजन यादव की तस्वीर",
      },
      caption: {
        en: "Gallery photograph",
        hi: "गैलरी की तस्वीर",
      },
      width: 1200,
      height: 1500,
    },

    {
      src: "/images/gallery-02.jpg",
      alt: {
        en: "Photograph from the gallery",
        hi: "गैलरी की तस्वीर",
      },
      caption: {
        en: "Gallery photograph",
        hi: "गैलरी की तस्वीर",
      },
      width: 3464,
      height: 4618,
    },
    {
      src: "/images/gallery-03.jpg",
      alt: {
        en: "Photograph from the gallery",
        hi: "गैलरी की तस्वीर",
      },
      caption: {
        en: "Gallery photograph",
        hi: "गैलरी की तस्वीर",
      },
      width: 1200,
      height: 2000,
    },
    {
      src: "/images/gallery-04.jpg",
      alt: {
        en: "Photograph from the gallery",
        hi: "गैलरी की तस्वीर",
      },
      caption: {
        en: "Gallery photograph",
        hi: "गैलरी की तस्वीर",
      },
      width: 3072,
      height: 4096,
    },
    {
      src: "/images/gallery-05.png",
      alt: {
        en: "Photograph from the gallery",
        hi: "गैलरी की तस्वीर",
      },
      caption: {
        en: "Gallery photograph",
        hi: "गैलरी की तस्वीर",
      },
      width: 1200,
      height: 1500,
    },
    {
      src: "/images/gallery-06.png",
      alt: {
        en: "Photograph from the gallery",
        hi: "गैलरी की तस्वीर",
      },
      caption: {
        en: "Photograph from the gallery",
        hi: "गैलरी की तस्वीर",
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
      en: "My family will be happy to help with further communication.",
      hi: "आगे की बातचीत के लिए मेरा परिवार संपर्क में सहयोग करने के लिए उपलब्ध है।",
    },
  },

  availableLocales: ["en", "hi"],
  defaultLocale: "en",
};
