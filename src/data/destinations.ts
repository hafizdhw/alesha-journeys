import { Destination } from "@/types";

// Placeholder images reused from existing packages — replace with real photos before launch
const IMG_TEMPLE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDsZi9sB_aDsymIfnWKrIHBkWYqQzQXXJvYV_72ngLzk1ckbOL8OpsS1q9sTngIX2vYWMImYEf4Bl0TOYtljzjL4KlaujlfJkeJ1hp9wr1phyWey6p9t8Q2vfTYnkDQNl0KOPB4lU2Z69I3UBotUi2eH_EoXBvnXmE6cH0TpcHgsqIpH80FiBc93cCfE9atFJ8mUZ6mAMz1m57S-q9ltjZcrwQeaWryNXN99UoqSlKH0gvEL3iO6jA1Bi7jW7t_FIVJjYxMkTSrvQw";
const IMG_HINDU =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAMyJ3f1yoLuB2nfcBAYeYi6yKxu5Tb9t_iuVMHzH_qntJiX55kCOCZbwiRreFjQSmVXrlKrMLU2ku2uE6w7Fe5PqT0zFFqScE7nKu-8AFuJBNxQl2MOTJsdZSfwXEoo9Hjc8D2Av31e2V6JywUp8qJMUvwpgT8HEoBrcfSvV2r1hVaYDVZW3y16WnPQDXcEy5kezJsoXoMr8J6MeYs3DF0ncPdTEhyBuQBv_t77YGFArE-onbIbmPknU1lBpBUV4fTmZeRCCt-l_Y";
const IMG_NATURE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCfje4U3yQNdWEiDMXeipWpgqxaCSKyk8C6hgs5NQaS4R92bJrWdm82573LFQKQY13SU4Ty7cHSshuuxyrlLHKMxJFO4g-7Zuo105Le5_rPmWSdM9o9cM-FaYp67tJEPUwN9mP2E3r8eyXY-zIDW9Yj84Rk0JKrzxbhzAW0NcQt3Id7_FO3BtPZtpOIGXwTJaa7JBK1hLAIzZEXa2CAZjuHMM6RWJPPjD9JZDEx758fjbOMuMIrg3UPwydMeFD7ML7i-LP4Bh5hzr0";

export const destinations: Destination[] = [
  {
    slug: "borobudur",
    name: "Borobudur Temple",
    area: "Magelang, Central Java",
    category: "Temple",
    categoryIcon: "account_balance",
    shortDescription:
      "The world's largest Buddhist monument — nine stacked platforms of ancient stone rising above the mist-covered Kedu Plain.",
    description:
      "Built in the 9th century during the Sailendra dynasty, Borobudur is the world's largest Buddhist temple and one of the greatest monuments on earth. Its nine stacked platforms are adorned with 2,672 relief panels and 504 Buddha statues, representing the Buddhist path from earthly life to enlightenment. Watching the sunrise from the upper terraces as mist lifts from the surrounding rice paddies and Mount Merapi looms on the horizon is an experience that stays with visitors forever.",
    heroImage: IMG_TEMPLE,
    cardImage: IMG_TEMPLE,
    highlights: [
      "2,672 relief panels narrating Buddhist teachings across the gallery walls",
      "72 stupas housing Buddha statues on the three circular upper terraces",
      "Sunrise views over Mount Merapi and the mist-covered Kedu Plain",
      "UNESCO World Heritage Site since 1991",
      "Surrounding village walk through the rural Kedu Plain countryside",
    ],
    tips: [
      "Arrive before 5 AM for sunrise access — the most magical time to visit",
      "Wear comfortable shoes; the temple involves significant climbing on uneven stone",
      "Bring or rent a sarong on-site (required for entry)",
      "Sunrise tickets sell out fast — book through a tour operator in advance",
      "Beat the midday crowds by visiting in early morning or late afternoon",
    ],
    entryFee: "Rp 350.000 (foreign adults) · Rp 50.000 (domestic)",
    openingHours: "Daily 6:00 AM – 5:00 PM · Sunrise access from 4:00 AM",
  },
  {
    slug: "prambanan",
    name: "Prambanan Temple",
    area: "Sleman, Yogyakarta",
    category: "Temple",
    categoryIcon: "account_balance",
    shortDescription:
      "The tallest Hindu temple in Southeast Asia — a breathtaking 9th-century compound dedicated to the Trimurti, glowing amber at sunset.",
    description:
      "Rising from the plains of Central Java, Prambanan is Indonesia's finest example of Hindu architecture. Built around 850 CE by the Sanjaya dynasty, the compound's three soaring central towers are dedicated to Brahma, Vishnu, and Shiva — the Shiva tower reaching 47 meters into the sky. The outer walls are covered in intricate Ramayana relief carvings, and on full moon nights from May to October, the legendary open-air Ramayana Ballet is performed with the illuminated temples as its backdrop.",
    heroImage: IMG_HINDU,
    cardImage: IMG_HINDU,
    highlights: [
      "Three central towers reaching 47 meters — the tallest Hindu structure in Southeast Asia",
      "Ramayana epic narrative carved in relief panels around the main galleries",
      "Dramatic golden-hour light that turns the stone a warm amber",
      "UNESCO World Heritage Site since 1991",
      "Open-air Ramayana Ballet on full moon nights (May–October)",
    ],
    tips: [
      "Visit in the late afternoon (3–5 PM) for the best photography light",
      "The site is large — wear comfortable, closed-toe shoes",
      "Combining with the Ramayana Ballet makes for an unforgettable evening",
      "Hire an in-complex guide to fully understand the Ramayana reliefs",
      "Separate tickets required for Ramayana Ballet performances",
    ],
    entryFee: "Rp 350.000 (foreign adults) · Rp 50.000 (domestic)",
    openingHours: "Daily 6:00 AM – 5:00 PM",
  },
  {
    slug: "parangtritis",
    name: "Parangtritis Beach",
    area: "Bantul, Yogyakarta",
    category: "Beach",
    categoryIcon: "waves",
    shortDescription:
      "Yogyakarta's most iconic beach — dramatic black volcanic sand, rare inland sand dunes, and deep Javanese spiritual significance.",
    description:
      "Parangtritis is far more than a beach. This dramatic stretch of black volcanic sand along the Indian Ocean is one of the most spiritually significant places in Javanese culture — believed to be the domain of Nyai Roro Kidul, the mystical Queen of the Southern Sea. It is also the gateway to Gumuk Pasir, a rare field of inland volcanic sand dunes and the only ones of their kind in Southeast Asia. The combination of cultural depth, dramatic scenery, horse riding, and sandboarding makes Parangtritis a full-day experience.",
    heroImage: IMG_NATURE,
    cardImage: IMG_NATURE,
    highlights: [
      "Gumuk Pasir — Southeast Asia's only inland volcanic sand dunes",
      "Dramatic black sand beach stretching along the Indian Ocean",
      "Deep spiritual significance in Javanese cosmology (Queen of the Southern Sea)",
      "Horse riding and sandboarding activities available on the dunes",
      "Legendary sunsets over the Indian Ocean",
    ],
    tips: [
      "Avoid wearing green clothing — a deep-rooted local taboo at this beach",
      "The ocean current is very strong; swimming is not recommended",
      "Visit the sand dunes in the morning before the midday heat sets in",
      "Horse riding on the beach is available for an additional fee",
      "The drive from Yogyakarta (45 min) passes through scenic countryside",
    ],
    entryFee: "Rp 10.000 per person",
    openingHours: "Open 24 hours · Best visited at sunrise or sunset",
  },
  {
    slug: "taman-sari",
    name: "Taman Sari Water Castle",
    area: "Yogyakarta City",
    category: "Heritage",
    categoryIcon: "fort",
    shortDescription:
      "The 18th-century royal pleasure garden of the Yogyakarta Sultanate — bathing pools, underground tunnels, and labyrinthine courtyards hidden in the city's oldest kampung.",
    description:
      "Built in 1758 on the orders of Sultan Hamengkubuwono I, Taman Sari ('Fragrant Garden') served as a royal bathing complex and retreat for the Yogyakarta court. Hidden within the dense kampung south of the Kraton, its beautifully restored pools, fountains, and underground passageways were once exclusively for the Sultan and his household. The surrounding village is a living center of batik artistry, where you can watch craftsmen at work and buy directly from family workshops.",
    heroImage: IMG_TEMPLE,
    cardImage: IMG_TEMPLE,
    highlights: [
      "Umbul Binangun — the beautifully restored royal bathing pools",
      "Underground tunnels and chambers connecting the complex",
      "Sumur Gumuling — the hidden circular underground mosque",
      "Surrounding batik village with working artisan workshops",
      "Atmospheric 18th-century stone architecture",
    ],
    tips: [
      "Visit early morning (before 9 AM) to avoid tour groups and get the best light",
      "Wear modest clothing and be prepared to remove shoes in some areas",
      "Hiring a local guide helps decode the labyrinthine layout",
      "The surrounding kampung is great to wander for authentic local life",
      "Combine with a Kraton visit — both are within easy walking distance",
    ],
    entryFee: "Rp 15.000 (domestic) · Rp 25.000 (foreign)",
    openingHours: "Daily 9:00 AM – 3:00 PM",
  },
  {
    slug: "kraton",
    name: "Kraton Yogyakarta",
    area: "Yogyakarta City",
    category: "Heritage",
    categoryIcon: "castle",
    shortDescription:
      "A living palace — the 18th-century seat of the Yogyakarta Sultanate, still home to the Sultan and his court, where Javanese royal culture remains fully alive.",
    description:
      "The Kraton Yogyakarta is not a museum — it is a living palace. Built in 1755 by Sultan Hamengkubuwono I, it remains the official residence of the Sultan and the epicenter of Javanese cultural life. The complex of pavilions, courtyards, and ceremonial halls is oriented along a sacred north-south axis between Mount Merapi and the Southern Sea. Regular gamelan performances, wayang (shadow puppet) shows, and classical Javanese court dances take place within its walls. Walking the Kraton is a direct encounter with a civilization still very much alive.",
    heroImage: IMG_TEMPLE,
    cardImage: IMG_TEMPLE,
    highlights: [
      "Sri Manganti and Kencono pendopo — the great ceremonial pavilions",
      "Museum of royal regalia, antique carriages, and court weapons",
      "Weekly gamelan, wayang kulit, and classical dance performances",
      "The Sultanate's sacred cosmic north-south axis layout",
      "The outer alun-alun (royal square) with its sacred banyan trees",
    ],
    tips: [
      "Visit on Sundays when free gamelan or dance performances often take place",
      "Dress modestly — no shorts; shoulders should be covered",
      "Guided tours (included in ticket) are highly recommended",
      "The Kraton grounds are large — allow at least 2 hours",
      "Combine with Taman Sari, just a 10-minute walk south",
    ],
    entryFee: "Rp 15.000 · Camera permit: Rp 2.000",
    openingHours: "Sat–Thu 8:30 AM – 2:00 PM · Closed Friday",
  },
  {
    slug: "malioboro",
    name: "Malioboro Street",
    area: "Yogyakarta City",
    category: "Culture",
    categoryIcon: "storefront",
    shortDescription:
      "Yogyakarta's legendary boulevard — a sensory feast of batik boutiques, street food vendors, horse-drawn carriages, and the living pulse of Javanese urban culture.",
    description:
      "Malioboro Street is the beating heart of Yogyakarta — a famous 1-kilometer stretch at the center of the city's commercial and cultural life for centuries. Lined with hundreds of vendors selling batik, leather goods, silver jewelry, and local snacks, Malioboro is best experienced by simply wandering slowly. Street food stalls serve gudeg, bakso, and sate late into the night. The iconic becak (pedicab) and andong (horse cart) still move alongside motorcycles. At the southern end lies Pasar Beringharjo, Yogyakarta's oldest and most atmospheric traditional market.",
    heroImage: IMG_HINDU,
    cardImage: IMG_HINDU,
    highlights: [
      "Endless street shopping for batik, leather, silver jewelry, and local crafts",
      "Night food stalls serving authentic Yogyakarta street food",
      "Pasar Beringharjo — the city's oldest and most vibrant traditional market",
      "Fort Vredeburg Dutch colonial fortress overlooking the boulevard",
      "Iconic becak and andong rides along the full length of the street",
    ],
    tips: [
      "Bargaining is expected at street stalls — start at 50–60% of the asking price",
      "Visit in the evening when street food vendors set up for dinner",
      "Pasar Beringharjo is best in the morning when fresh produce arrives",
      "Beware of 'free gift' batik tour touts — these lead to high-pressure sales",
      "Store valuables securely; the street is crowded, especially on weekends",
    ],
    entryFee: "Free",
    openingHours: "Open 24 hours · Shops: 9:00 AM – 9:00 PM",
  },
  {
    slug: "mount-merapi",
    name: "Mount Merapi",
    area: "Sleman, Yogyakarta",
    category: "Nature",
    categoryIcon: "landscape",
    shortDescription:
      "One of Indonesia's most active volcanoes — a brooding, powerful presence that has shaped the landscape, culture, and spirit of the Javanese for centuries.",
    description:
      "Standing at 2,930 meters, Mount Merapi ('Mountain of Fire') is Indonesia's most active volcano. Its last major eruption in 2010 reshaped the landscape and left behind a haunting trail of lava flows that have since become one of the region's most visited sites. The Kaliurang resort area on its southern slopes offers jeep tours through the 2010 lava fields, the preserved Sisa Hartaku Museum, and trekking trails with sweeping views. The mountain also holds deep spiritual significance for the Javanese — it represents the northern pillar of the sacred Merapi–Kraton–Parangtritis cosmic axis.",
    heroImage: IMG_NATURE,
    cardImage: IMG_NATURE,
    highlights: [
      "Jeep tours through the dramatic 2010 volcanic lava flow landscape",
      "Sisa Hartaku Museum — preserved ruins from the 2010 eruption",
      "Trekking to Lava Tour viewpoints on the lush southern slopes",
      "Kaliurang Hill resort area with Merapi panorama cafes",
      "Summit trekking at midnight to reach the peak at dawn (with guide)",
    ],
    tips: [
      "Jeep lava tours depart from Kaliurang village — book in advance",
      "Never trek independently; always use a registered local guide",
      "Check current volcanic activity status at PVMBG Indonesia before visiting",
      "The best summit treks depart at midnight to arrive at the peak at dawn",
      "Kaliurang is about 45 minutes north of Yogyakarta city center",
    ],
    entryFee: "Rp 10.000 (Kaliurang reserve) · Jeep tours from Rp 350.000",
    openingHours: "Kaliurang: Daily 6:00 AM – 6:00 PM · Summit treks depart midnight",
  },
  {
    slug: "kotagede",
    name: "Kotagede Silver District",
    area: "Yogyakarta City",
    category: "Culture",
    categoryIcon: "diamond",
    shortDescription:
      "The ancient capital of the Mataram Kingdom and Yogyakarta's silversmithing heartland — a maze of 16th-century alleyways, royal tombs, and working family silver workshops.",
    description:
      "Kotagede is the oldest neighborhood in Yogyakarta — once the capital of the Islamic Mataram Kingdom in the late 16th century. Walking its narrow alleyways feels like stepping back 400 years, past Dutch-era merchants' houses, colonial shophouses, and the mossy ruins of the original royal palace. The Royal Tomb of Sultan Panembahan Senopati still draws pilgrims today. But Kotagede is equally famous as Yogyakarta's silversmithing center — dozens of family workshops line the streets producing some of Indonesia's finest filigree silverwork, and you can watch craftsmen at work and buy directly from the makers.",
    heroImage: IMG_TEMPLE,
    cardImage: IMG_TEMPLE,
    highlights: [
      "Royal Tomb of the Mataram Kingdom's founding sultan (active pilgrimage site)",
      "Dozens of family silver workshops producing traditional filigree work",
      "Remarkably preserved 16th-century alleyway streetscapes",
      "The ruins of the original Mataram Kingdom palace walls",
      "Authentic local bird market and traditional warungs",
    ],
    tips: [
      "Visit the silver workshops in the morning when artisans are most active",
      "Ask workshop owners for a demonstration — most are happy to show their craft",
      "The Royal Tomb requires modest dress and a local guide for entry",
      "Try kipo — a local coconut-filled rice cake snack sold roadside",
      "Rent a bicycle from the city center — Kotagede is a pleasant 15-minute ride",
    ],
    entryFee: "Royal Tomb: Rp 5.000 (donation) · Workshops: Free",
    openingHours: "Daily 8:00 AM – 5:00 PM · Royal Tomb closed Friday morning",
  },
  {
    slug: "ullen-sentalu",
    name: "Ullen Sentalu Museum",
    area: "Sleman, Yogyakarta",
    category: "Museum",
    categoryIcon: "museum",
    shortDescription:
      "Java's finest private museum — a labyrinthine hillside complex housing an extraordinary collection of Javanese royal court art, batik, and portrait paintings.",
    description:
      "Hidden in the wooded slopes of Mount Merapi near Kaliurang, Ullen Sentalu ('The light of life always glows') is widely regarded as the best museum in Java. Opened in 1997, the museum occupies dramatically lit underground rooms and garden pavilions, each exploring the culture of the four Javanese royal courts of Yogyakarta and Solo. The collection includes royal batik, court costumes, unique portrait paintings, personal letters, and ceremonial objects spanning the 17th–20th centuries. Entry is by guided tour only — and the guides are exceptionally knowledgeable.",
    heroImage: IMG_HINDU,
    cardImage: IMG_HINDU,
    highlights: [
      "Royal batik collection spanning four Javanese court traditions",
      "Unique portrait paintings of Javanese royal family members (rarely seen elsewhere)",
      "Mandatory guided tour with deeply knowledgeable local guides",
      "Architecture blending Javanese and Dutch colonial styles into the hillside",
      "The underground gallery Ruang Syair Untuk Tineke — poetry of the royal court",
    ],
    tips: [
      "Entry is by guided tour ONLY — no independent browsing allowed",
      "Tours run at fixed times; book in advance especially on weekends",
      "Photography is not permitted inside most gallery spaces",
      "Allow 90 minutes for the full tour — it is dense with history",
      "Combine with a Merapi jeep tour or Kaliurang visit on the same day",
    ],
    entryFee: "Rp 100.000 (foreign) · Rp 50.000 (domestic)",
    openingHours: "Tue–Sun 9:00 AM – 4:00 PM · Closed Monday",
  },
  {
    slug: "dieng-plateau",
    name: "Dieng Plateau",
    area: "Wonosobo, Central Java",
    category: "Nature",
    categoryIcon: "volcano",
    shortDescription:
      "An ancient volcanic plateau at 2,000 meters — home to Java's oldest Hindu temples, ethereal colored crater lakes, and some of the most dramatic sunrise views in the archipelago.",
    description:
      "The Dieng Plateau is one of Java's most mystical destinations. Sitting at over 2,000 meters above sea level, Dieng ('abode of the gods') is a high volcanic landscape of sulfurous vents, colored crater lakes, and dense morning mist. The plateau is home to the Arjuna Complex — small Hindu temples dating from the 7th–8th century, the oldest surviving stone monuments in Java, predating both Borobudur and Prambanan. Dieng's Telaga Warna crater lake changes color between emerald, turquoise, and milky white depending on sulfur levels, and the sunrise from Batu Pandang viewpoint is among the most spectacular in Indonesia.",
    heroImage: IMG_NATURE,
    cardImage: IMG_NATURE,
    highlights: [
      "Arjuna Temple Complex — Java's oldest surviving Hindu monuments (7th century)",
      "Telaga Warna and Telaga Pengilon — the legendary colored crater lakes",
      "Batu Pandang Ratapan Angin — the sunrise panorama viewpoint",
      "Kawah Sikidang — a bubbling accessible sulfurous volcanic crater",
      "The famous gembel (dreadlocked) children of Dieng village",
    ],
    tips: [
      "Stay overnight in Dieng to catch the sunrise — it is too far for a Yogyakarta day trip",
      "Bring warm layers — the plateau can drop to 10°C at night",
      "The drive from Yogyakarta takes 2.5–3 hours through mountain scenery",
      "Visit Telaga Warna early morning before the mist lifts for best colors",
      "Hire a local guide — the sites are spread out across the plateau",
    ],
    entryFee: "Rp 20.000 per attraction",
    openingHours: "Daily 6:00 AM – 5:00 PM · Best visited at dawn",
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
