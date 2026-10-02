// ─────────────────────────────────────────────────────────────
//  KitabGhar — shop settings and book list
//  Edit this file to change books, prices and contact details.
// ─────────────────────────────────────────────────────────────

export const SHOP = {
  // WhatsApp number that receives orders, with country code and no "+" or spaces.
  // Example: "919876543210". Leave empty to show an on-page confirmation instead.
  whatsapp: "",
  email: "hello@kitabghar.example",
  city: "India",
};

// PICTURES: put a cover photo in the "images" folder, named after the book's id.
//   id "godan"  →  images/godan.jpg   (.jpeg, .png and .webp also work)
// Books without a picture get a designed cover in their `color` automatically.
// To use any other file name, add:  image: "my-photo.jpg"  (a file inside images/)

export const CATEGORIES = [
  { key: "novel", label: "उपन्यास", sub: "Novels" },
  { key: "poetry", label: "कविता", sub: "Poetry" },
  { key: "english", label: "English", sub: "Indian writing" },
  { key: "kids", label: "बाल साहित्य", sub: "Children" },
];

export const BOOKS = [
  {
    id: "godan", title: "गोदान", titleEn: "Godan", author: "मुंशी प्रेमचंद",
    category: "novel", price: 199, mrp: 250, color: "#b4492f", featured: true,
    blurb: "होरी और धनिया की कहानी — भारतीय किसान जीवन का महाकाव्य।",
  },
  {
    id: "gunahon-ka-devta", title: "गुनाहों का देवता", titleEn: "Gunahon Ka Devta", author: "धर्मवीर भारती",
    category: "novel", price: 225, mrp: 299, color: "#2c4a6e", featured: true,
    blurb: "चंदर और सुधा की अमर प्रेम कथा, इलाहाबाद की पृष्ठभूमि में।",
  },
  {
    id: "madhushala", title: "मधुशाला", titleEn: "Madhushala", author: "हरिवंश राय बच्चन",
    category: "poetry", price: 150, mrp: 195, color: "#c08a2b", featured: true,
    blurb: "रुबाइयों का वह संग्रह जो पीढ़ियों की ज़ुबान पर है।",
  },
  {
    id: "raag-darbari", title: "राग दरबारी", titleEn: "Raag Darbari", author: "श्रीलाल शुक्ल",
    category: "novel", price: 299, mrp: 399, color: "#3f6b57", featured: true,
    blurb: "शिवपालगंज के बहाने गाँव, राजनीति और व्यवस्था पर तीखा व्यंग्य।",
  },
  {
    id: "rashmirathi", title: "रश्मिरथी", titleEn: "Rashmirathi", author: "रामधारी सिंह 'दिनकर'",
    category: "poetry", price: 125, mrp: 160, color: "#a33b2a", featured: true,
    blurb: "कर्ण के जीवन पर लिखा गया ओजस्वी खंडकाव्य।",
  },
  {
    id: "maila-aanchal", title: "मैला आँचल", titleEn: "Maila Aanchal", author: "फणीश्वरनाथ 'रेणु'",
    category: "novel", price: 275, mrp: 350, color: "#8a6d3b",
    blurb: "पूर्णिया के एक गाँव की धड़कन — हिंदी का पहला आंचलिक उपन्यास।",
  },
  {
    id: "nirmala", title: "निर्मला", titleEn: "Nirmala", author: "मुंशी प्रेमचंद",
    category: "novel", price: 140, mrp: 175, color: "#96506b",
    blurb: "दहेज और अनमेल विवाह की त्रासदी पर मार्मिक उपन्यास।",
  },
  {
    id: "tamas", title: "तमस", titleEn: "Tamas", author: "भीष्म साहनी",
    category: "novel", price: 250, mrp: 325, color: "#33363f",
    blurb: "विभाजन के दिनों की आँखों देखी, साहित्य अकादमी से सम्मानित।",
  },
  {
    id: "kamayani", title: "कामायनी", titleEn: "Kamayani", author: "जयशंकर प्रसाद",
    category: "poetry", price: 160, mrp: 200, color: "#2f6f7a",
    blurb: "मनु, श्रद्धा और इड़ा की कथा — छायावाद का शिखर महाकाव्य।",
  },
  {
    id: "chandrakanta", title: "चंद्रकांता", titleEn: "Chandrakanta", author: "देवकीनंदन खत्री",
    category: "novel", price: 199, mrp: 260, color: "#574a85", featured: true,
    blurb: "तिलिस्म और ऐयारी की वह दास्तान जिसके लिए लोगों ने हिंदी सीखी।",
  },
  {
    id: "malgudi-days", title: "Malgudi Days", titleEn: "Malgudi Days", author: "R. K. Narayan",
    category: "english", price: 249, mrp: 299, color: "#c9762f", featured: true,
    blurb: "Short stories from the small town everyone in India somehow grew up in.",
  },
  {
    id: "train-to-pakistan", title: "Train to Pakistan", titleEn: "Train to Pakistan", author: "Khushwant Singh",
    category: "english", price: 220, mrp: 299, color: "#6b3f2a",
    blurb: "A border village in the summer of 1947, and the train that changes it.",
  },
  {
    id: "the-guide", title: "The Guide", titleEn: "The Guide", author: "R. K. Narayan",
    category: "english", price: 210, mrp: 275, color: "#3d7a70",
    blurb: "Railway Raju's journey from tour guide to reluctant holy man.",
  },
  {
    id: "gitanjali", title: "Gitanjali", titleEn: "Gitanjali", author: "Rabindranath Tagore",
    category: "english", price: 125, mrp: 150, color: "#3e4a8c",
    blurb: "The song offerings that won Tagore the Nobel Prize in 1913.",
  },
  {
    id: "panchatantra", title: "पंचतंत्र की कहानियाँ", titleEn: "Panchatantra", author: "विष्णु शर्मा",
    category: "kids", price: 175, mrp: 225, color: "#cf5c36", featured: true,
    blurb: "जानवरों की ज़ुबानी समझदारी की कहानियाँ, हर उम्र के लिए।",
  },
  {
    id: "akbar-birbal", title: "अकबर-बीरबल के क़िस्से", titleEn: "Akbar-Birbal Ke Qisse", author: "लोक कथाएँ",
    category: "kids", price: 120, mrp: 150, color: "#4c7a3f",
    blurb: "बीरबल की हाज़िरजवाबी के चुने हुए मज़ेदार क़िस्से।",
  },
];
