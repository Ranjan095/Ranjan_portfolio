import type { LocalizedText } from "@/types/profile";

/** A section heading plus any extra sub-labels that section needs. */
export type SectionCopy = Record<string, LocalizedText | undefined> & {
  readonly eyebrow: LocalizedText;
  readonly title: LocalizedText;
};

/**
 * Headings and field labels for every content section.
 * All visible copy is maintained here so it can be translated consistently.
 */
export const sectionCopy = {
  about: {
    eyebrow: { en: "About Me", hi: "मेरे बारे में" },
    title: {
      en: "A Little More About Me",
      hi: "मेरे बारे में कुछ और बातें",
    },
    subtitle: {
      en: "Get to know my interests, outlook on life, and the values I hope to bring to a meaningful relationship.",
      hi: "मेरी रुचियों, जीवन के प्रति सोच और उन मूल्यों को जानें जिन्हें मैं एक सार्थक रिश्ते में महत्व देता हूँ।",
    },
    detailsTitle: { en: "Personal Details", hi: "व्यक्तिगत जानकारी" },
    introductionTitle: { en: "A Little Introduction", hi: "मेरा परिचय" },
    interestsTitle: { en: "Hobbies & Interests", hi: "शौक और रुचियाँ" },
    valuesTitle: { en: "My Values", hi: "मेरे मूल्य" },
  },

  education: {
    eyebrow: { en: "Education", hi: "शिक्षा" },
    title: { en: "My Educational Background", hi: "मेरी शैक्षणिक पृष्ठभूमि" },
    subtitle: {
      en: "My education reflects an ongoing commitment to learning and personal development, alongside my professional journey.",
      hi: "मेरी शिक्षा सीखने और व्यक्तिगत विकास के प्रति मेरी निरंतर प्रतिबद्धता को दर्शाती है, जिसे मैं अपने पेशेवर जीवन के साथ आगे बढ़ा रहा हूँ।",
    },
  },

  family: {
    eyebrow: { en: "Family", hi: "परिवार" },
    title: { en: "My Family & Roots", hi: "मेरा परिवार और मेरी जड़ें" },
    subtitle: {
      en: "A little about my family background, our roots in Madhubani, Bihar, and the values I consider important in family relationships.",
      hi: "मेरे परिवार, मधुबनी, बिहार से हमारे जुड़ाव और पारिवारिक रिश्तों में मेरे लिए महत्वपूर्ण मूल्यों की एक झलक।",
    },
    parentsTitle: { en: "My Parents", hi: "मेरे माता-पिता" },
    siblingsTitle: { en: "My Brothers & Sisters", hi: "मेरे भाई-बहन" },
    valuesTitle: { en: "Values That Matter to Us", hi: "हमारे लिए महत्वपूर्ण मूल्य" },
    hometownTitle: { en: "Family Hometown", hi: "परिवार का गृहनगर" },
    ageLabel: { en: "Age", hi: "आयु" },
    occupationLabel: { en: "Occupation", hi: "व्यवसाय" },
  },

  contact: {
    eyebrow: { en: "Get in Touch", hi: "संपर्क करें" },
    title: {
      en: "Let's Start a Conversation",
      hi: "आइए, बातचीत की शुरुआत करें",
    },
    message: {
      en: "Thank you for taking the time to read my profile. If you would like to take things forward, please contact my family through the person who shared this profile.",
      hi: "मेरा परिचय पढ़ने के लिए समय निकालने के लिए धन्यवाद। यदि आप आगे बातचीत करना चाहें, तो कृपया यह परिचय साझा करने वाले व्यक्ति के माध्यम से मेरे परिवार से संपर्क करें।",
    },
    familyTitle: {
      en: "Family Contact",
      hi: "परिवार से संपर्क",
    },
    responseTitle: { en: "Next Steps", hi: "आगे की प्रक्रिया" },
    familyPhonesLabel: { en: "Mobile", hi: "मोबाइल" },
    callLabel: { en: "Call", hi: "कॉल करें" },
    whatsappFallback: { en: "Message on WhatsApp", hi: "व्हाट्सऐप पर संदेश भेजें" },
    emailFallback: { en: "Send an Email", hi: "ईमेल भेजें" },
    pdfNote: {
      en: "Save or print a concise, one-page biodata for easy reference.",
      hi: "आसानी से देखने के लिए एक पृष्ठ का संक्षिप्त बायोडाटा सेव करें या प्रिंट करें।",
    },
  },

  gallery: {
    eyebrow: { en: "Gallery", hi: "तस्वीरें" },
    title: { en: "A Glimpse of My Life", hi: "मेरी ज़िंदगी की एक झलक" },
    subtitle: {
      en: "A collection of photographs that offer a more personal glimpse beyond the details on this page.",
      hi: "इस पृष्ठ पर दी गई जानकारी से आगे, मेरे व्यक्तित्व की एक व्यक्तिगत झलक देती कुछ तस्वीरें।",
    },
    note: {
      en: "Photographs are shared with the permission of the people shown.",
      hi: "तस्वीरों में दिखाई देने वाले लोगों की अनुमति से ही उन्हें साझा किया जाता है।",
    },
  },

  partner: {
    eyebrow: { en: "Life Partner", hi: "जीवनसाथी" },
    title: {
      en: "The Partnership I Hope to Build",
      hi: "एक ऐसे रिश्ते की उम्मीद जो साथ आगे बढ़े",
    },
    subtitle: {
      en: "I hope to meet someone kind, loyal, and family-oriented, with whom I can build a relationship grounded in respect, trust, and understanding.",
      hi: "मैं ऐसी जीवनसाथी से मिलना चाहता हूँ जो दयालु, वफ़ादार और परिवार को महत्व देने वाली हो, और जिसके साथ सम्मान, विश्वास और समझ पर आधारित रिश्ता बनाया जा सके।",
    },
    detailsTitle: { en: "Partner Preferences", hi: "जीवनसाथी से जुड़ी प्राथमिकताएँ" },
    valuesTitle: { en: "What Matters in a Relationship", hi: "रिश्ते में क्या महत्वपूर्ण है" },
    expectationsTitle: { en: "A Balanced Life Together", hi: "साथ मिलकर संतुलित जीवन" },
    ageLabel: { en: "Age", hi: "आयु" },
    educationLabel: { en: "Education", hi: "शिक्षा" },
    careerLabel: { en: "Profession", hi: "व्यवसाय" },
    lifestyleLabel: { en: "Lifestyle", hi: "जीवनशैली" },
    locationLabel: { en: "Location", hi: "स्थान" },
  },

  career: {
    eyebrow: { en: "Career", hi: "व्यावसायिक जीवन" },
    title: {
      en: "My Professional Journey",
      hi: "मेरी व्यावसायिक यात्रा",
    },
    subtitle: {
      en: "A look at my work in software development and the professional experience I have gained over the years.",
      hi: "सॉफ़्टवेयर डेवलपमेंट के क्षेत्र में मेरे काम और वर्षों के दौरान प्राप्त पेशेवर अनुभव की एक झलक।",
    },
    highlightsTitle: { en: "Work & Expertise", hi: "काम और विशेषज्ञता" },
    milestonesTitle: { en: "Career Milestones", hi: "करियर के प्रमुख पड़ाव" },
  },
} as const satisfies Record<string, SectionCopy>;

/** Labels for key/value rows. English and Hindi variants supplied. */
export const fieldLabels = {
  dateOfBirth: { en: "Date of Birth", hi: "जन्म तिथि" },
  age: { en: "Age", hi: "आयु" },
  height: { en: "Height", hi: "कद" },
  motherTongue: { en: "Mother Tongue", hi: "मातृभाषा" },
  currentCity: { en: "Current City", hi: "वर्तमान निवास" },
  hometown: { en: "Hometown", hi: "गृहनगर" },
  languages: { en: "Languages", hi: "भाषाएँ" },
  religion: { en: "Religion", hi: "धर्म" },
  community: { en: "Community", hi: "समुदाय" },
  maritalStatus: { en: "Marital Status", hi: "वैवाहिक स्थिति" },
  diet: { en: "Diet", hi: "खान-पान की पसंद" },
  profession: { en: "Profession", hi: "पेशा" },
  currentRole: { en: "Current Role", hi: "वर्तमान पद" },
  industry: { en: "Industry", hi: "कार्य क्षेत्र" },
  organisation: { en: "Organisation", hi: "संस्थान" },
  experience: { en: "Work Experience", hi: "कार्य अनुभव" },
  specialization: { en: "Specialization", hi: "विशेषज्ञता" },
  institution: { en: "Institution", hi: "शैक्षणिक संस्थान" },
  year: { en: "Year", hi: "वर्ष" },
  compensation: { en: "Compensation", hi: "वेतन" },
  years: { en: "{n} years", hi: "{n} वर्ष" },
} as const satisfies Record<string, LocalizedText>;

/** Copy shown when a section exists but its details are not added yet. */
export const pendingCopy = {
  label: { en: "Coming Soon", hi: "जल्द जोड़ा जाएगा" },
  family: {
    en: "Family details will be available here soon.",
    hi: "परिवार से जुड़ी जानकारी यहाँ जल्द उपलब्ध होगी।",
  },
  partner: {
    en: "Life partner preferences will be available here soon.",
    hi: "जीवनसाथी से जुड़ी प्राथमिकताओं की जानकारी यहाँ जल्द उपलब्ध होगी।",
  },
} as const satisfies Readonly<Record<string, LocalizedText>>;

/** Copy for the 404 page. */
export const notFoundCopy = {
  title: { en: "Page Not Found", hi: "पृष्ठ नहीं मिला" },
  description: {
    en: "The page you're looking for may have been moved or is no longer available.",
    hi: "आप जिस पृष्ठ को खोज रहे हैं, हो सकता है वह स्थानांतरित हो गया हो या अब उपलब्ध न हो।",
  },
  action: { en: "Back to My Profile", hi: "मेरे परिचय पर वापस जाएँ" },
} as const satisfies Readonly<Record<string, LocalizedText>>;

export type FieldLabelKey = keyof typeof fieldLabels;