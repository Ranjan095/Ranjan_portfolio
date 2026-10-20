
import type { LocalizedText } from "@/types/profile";

/** A section heading plus any extra sub-labels that section needs. */
export type SectionCopy = Record<string, LocalizedText | undefined> & {
  readonly eyebrow: LocalizedText;
  readonly title: LocalizedText;
};

/**
 * Headings and field labels for every content section. Kept beside the profile
 * data (not inside components) so all visible copy is translatable in Phase 6.
 */
export const sectionCopy = {
  about: {
    eyebrow: { en: "About Me", hi: "मेरे बारे में" },
    title: {
      en: "A Little More About Me",
      hi: "मेरे बारे में कुछ और बातें",
    },
    subtitle: {
      en: "A glimpse into my personality, values, interests, and the everyday life I hope to share with my life partner.",
      hi: "मेरे व्यक्तित्व, मूल्यों, रुचियों और उस रोज़मर्रा की ज़िंदगी की एक झलक जिसे मैं अपनी जीवनसाथी के साथ साझा करना चाहता हूँ।",
    },
    detailsTitle: { en: "At a Glance", hi: "एक नज़र में" },
    introductionTitle: { en: "A Little Introduction", hi: "मेरा संक्षिप्त परिचय" },
    interestsTitle: { en: "Hobbies & Interests", hi: "शौक और रुचियाँ" },
    valuesTitle: { en: "My Lifestyle & Values", hi: "मेरी जीवनशैली और मूल्य" },
  },
  education: {
    eyebrow: { en: "Education", hi: "शिक्षा" },
    title: { en: "My Educational Background", hi: "मेरी शैक्षणिक पृष्ठभूमि" },
    subtitle: {
      en: "My educational journey reflects my interest in learning, personal growth, and developing new skills.",
      hi: "मेरी शैक्षणिक यात्रा सीखने, व्यक्तिगत विकास और नए कौशल हासिल करने में मेरी रुचि को दर्शाती है।",
    },
  },
  family: {
    eyebrow: { en: "Family", hi: "परिवार" },
    title: { en: "My Family & Roots", hi: "मेरा परिवार और हमारी जड़ें" },
    subtitle: {
      en: "My family has played an important role in shaping my values, with mutual respect, understanding, and togetherness at the heart of our lives.",
      hi: "मेरे परिवार ने मेरे मूल्यों को आकार देने में महत्वपूर्ण भूमिका निभाई है। आपसी सम्मान, समझ और एकजुटता हमारे जीवन का अहम हिस्सा हैं।",
    },
    parentsTitle: { en: "My Parents", hi: "मेरे माता-पिता" },
    siblingsTitle: { en: "My Brothers & Sisters", hi: "मेरे भाई-बहन" },
    valuesTitle: { en: "Our Family Values", hi: "हमारे पारिवारिक मूल्य" },
    hometownTitle: { en: "Family Hometown", hi: "परिवार का गृहनगर" },
    ageLabel: { en: "Age", hi: "आयु" },
    occupationLabel: { en: "Occupation", hi: "व्यवसाय" },
  },
  contact: {
    eyebrow: { en: "Get in Touch", hi: "संपर्क करें" },
    title: {
      en: "Let's Take the Next Step Together",
      hi: "आइए, आगे की बातचीत शुरू करें",
    },
    message: {
      en: "Thank you for taking the time to read my profile. If you feel our values and expectations align, please connect with my family through the person who shared this profile.",
      hi: "मेरा परिचय पढ़ने के लिए समय निकालने के लिए धन्यवाद। यदि आपको लगता है कि हमारे मूल्य और अपेक्षाएँ एक-दूसरे से मेल खाते हैं, तो कृपया यह परिचय साझा करने वाले व्यक्ति के माध्यम से मेरे परिवार से संपर्क करें।",
    },
    familyTitle: {
      en: "Connecting with My Family",
      hi: "मेरे परिवार से संपर्क",
    },
    responseTitle: { en: "What to Expect", hi: "आगे की प्रक्रिया" },
    callLabel: { en: "Call", hi: "कॉल करें" },
    whatsappFallback: { en: "Message on WhatsApp", hi: "व्हाट्सएप पर संदेश भेजें" },
    emailFallback: { en: "Send an Email", hi: "ईमेल भेजें" },
    pdfNote: {
      en: "Download or print a concise, one-page biodata for your reference.",
      hi: "अपनी सुविधा के लिए एक पृष्ठ का संक्षिप्त बायोडाटा डाउनलोड करें या प्रिंट करें।",
    },
  },
  gallery: {
    eyebrow: { en: "Gallery", hi: "तस्वीरें" },
    title: { en: "Moments from My Life", hi: "मेरी ज़िंदगी के कुछ पल" },
    subtitle: {
      en: "A glimpse of the places, experiences, and everyday moments that make life meaningful.",
      hi: "उन जगहों, अनुभवों और रोज़मर्रा के पलों की एक झलक जो जीवन को खास बनाते हैं।",
    },
    note: {
      en: "Photographs are shared with the consent of everyone shown.",
      hi: "तस्वीरें उनमें दिखाई देने वाले सभी लोगों की सहमति से साझा की जाती हैं।",
    },
  },
  partner: {
    eyebrow: { en: "Life Partner", hi: "जीवनसाथी" },
    title: {
      en: "The Life I Hope to Build Together",
      hi: "साथ मिलकर एक खूबसूरत जीवन की शुरुआत",
    },
    subtitle: {
      en: "I hope to find a kind, loyal, and family-oriented life partner with whom I can build a relationship based on mutual respect, trust, and understanding.",
      hi: "मैं एक ऐसी जीवनसाथी की तलाश में हूँ जो दयालु, वफ़ादार और परिवार को महत्व देने वाली हो। मैं आपसी सम्मान, विश्वास और समझ पर आधारित रिश्ता बनाना चाहता हूँ।",
    },
    detailsTitle: { en: "What Matters to Me", hi: "मेरे लिए क्या मायने रखता है" },
    valuesTitle: { en: "Values We Can Share", hi: "हमारे साझा मूल्य" },
    expectationsTitle: { en: "Our Everyday Life Together", hi: "हमारी साझा रोज़मर्रा की ज़िंदगी" },
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
      en: "I work in software development, where I enjoy solving problems, building useful solutions, and continuing to learn and grow professionally.",
      hi: "मैं सॉफ़्टवेयर डेवलपमेंट के क्षेत्र में काम करता हूँ, जहाँ मुझे समस्याओं को सुलझाना, उपयोगी समाधान बनाना और लगातार सीखते हुए आगे बढ़ना पसंद है।",
    },
    highlightsTitle: { en: "My Work & Skills", hi: "मेरा काम और कौशल" },
    milestonesTitle: { en: "Career Milestones", hi: "करियर की उपलब्धियाँ" },
  },
} as const satisfies Record<string, SectionCopy>;

/** Labels for key/value rows. English and Hindi variants supplied. */
export const fieldLabels = {
  dateOfBirth: { en: "Date of Birth", hi: "जन्म तिथि" },
  age: { en: "Age", hi: "आयु" },
  height: { en: "Height", hi: "ऊँचाई" },
  motherTongue: { en: "Mother Tongue", hi: "मातृभाषा" },
  currentCity: { en: "Current City", hi: "वर्तमान निवास" },
  hometown: { en: "Hometown", hi: "गृहनगर" },
  languages: { en: "Languages", hi: "भाषाएँ" },
  religion: { en: "Religion", hi: "धर्म" },
  community: { en: "Community", hi: "समुदाय" },
  maritalStatus: { en: "Marital Status", hi: "वैवाहिक स्थिति" },
  diet: { en: "Diet", hi: "आहार" },
  profession: { en: "Profession", hi: "व्यवसाय" },
  currentRole: { en: "Current Role", hi: "वर्तमान पद" },
  industry: { en: "Industry", hi: "उद्योग" },
  organisation: { en: "Organisation", hi: "संस्थान" },
  experience: { en: "Work Experience", hi: "कार्य अनुभव" },
  specialization: { en: "Specialization", hi: "विशेषज्ञता" },
  institution: { en: "Institution", hi: "संस्थान" },
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