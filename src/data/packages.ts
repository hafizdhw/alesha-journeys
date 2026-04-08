import { Package } from "@/types";

export const packages: Package[] = [
  {
    slug: "borobudur-sunrise",
    title: "Borobudur Sunrise",
    location: "Magelang",
    duration: "Full Day",
    groupType: "Private",
    pickup: "Hotel",
    price: 85,
    priceLabel: "From $85",
    description:
      "Witness the spiritual majesty of Borobudur at its most tranquil hour. This curated journey takes you through the morning mist to see the first light touch the ancient stupas, followed by an authentic glimpse into local Javanese life.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsZi9sB_aDsymIfnWKrIHBkWYqQzQXXJvYV_72ngLzk1ckbOL8OpsS1q9sTngIX2vYWMImYEf4Bl0TOYtljzjL4KlaujlfJkeJ1hp9wr1phyWey6p9t8Q2vfTYnkDQNl0KOPB4lU2Z69I3UBotUi2eH_EoXBvnXmE6cH0TpcHgsqIpH80FiBc93cCfE9atFJ8mUZ6mAMz1m57S-q9ltjZcrwQeaWryNXN99UoqSlKH0gvEL3iO6jA1Bi7jW7t_FIVJjYxMkTSrvQw",
    cardImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGehkCrJz4fMasA2iVsEiD9G9Ql1WSnW7fFIFDFnVfroQi7rYZ8kJLZZkcnJgsC39sB9A5BQwNHdLdNDEBwJ8QeQQ5ia8j8A6Izdow0PlK9D0j-H3d4Y58AR0cU1VDavgWDUCofBGRxrIF-7tpjI1bf78_L0WhkmiUf_cPe0ymDSRpPGyksGlGIczXa1xLmesmFcZSCBLOn4j5CrNTjl05zqNEx4FCr5UuiSmoKV2pnToMVhCrO97-1orYfMD5YFVlQ9_1Olg4W2U",
    badge: "BESTSELLER",
    highlights: [
      { icon: "sunny", label: "Sunrise at Borobudur" },
      { icon: "restaurant", label: "Local breakfast at village" },
      { icon: "hail", label: "Expert local guide" },
      { icon: "directions_car", label: "Private transport included" },
    ],
    itinerary: [
      {
        time: "04:00",
        title: "Hotel pickup",
        description:
          "Early morning departure from your accommodation in Yogyakarta via private vehicle.",
      },
      {
        time: "05:00",
        title: "Borobudur sunrise",
        description:
          "Witness the sun rising over Mount Merapi and the ancient temple complex.",
      },
      {
        time: "07:30",
        title: "Local breakfast",
        description:
          "Enjoy a traditional Javanese breakfast set in a nearby rural village.",
      },
      {
        time: "09:00",
        title: "Temple exploration",
        description:
          "Deep dive into the history and relief carvings with our expert storyteller.",
      },
      {
        time: "12:00",
        title: "Drop-off",
        description:
          "Return to your hotel with stories to tell and a full heart.",
      },
    ],
    included: [
      "Private AC vehicle",
      "All entry tickets & parking",
      "Traditional village breakfast",
      "English-speaking guide",
      "Mineral water",
    ],
    notIncluded: [
      "Personal expenses",
      "Lunch",
      "Tipping for guide/driver",
      "Travel insurance",
    ],
    featureIcons: [
      { icon: "wb_sunny", label: "Magically spiritual sunrise at the temple" },
      {
        icon: "account_balance",
        label: "Deep dive into the temple complex history",
      },
      {
        icon: "restaurant",
        label: "Authentic local breakfast with valley views",
      },
    ],
  },
  {
    slug: "prambanan-sunset",
    title: "Prambanan Sunset",
    location: "Sleman",
    duration: "Half Day",
    groupType: "Private",
    pickup: "Hotel",
    price: 65,
    priceLabel: "From $65",
    description:
      "A spiritual journey through the 9th-century Hindu temples ending with a mesmerizing traditional ballet performance under the stars.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMyJ3f1yoLuB2nfcBAYeYi6yKxu5Tb9t_iuVMHzH_qntJiX55kCOCZbwiRreFjQSmVXrlKrMLU2ku2uE6w7Fe5PqT0zFFqScE7nKu-8AFuJBNxQl2MOTJsdZSfwXEoo9Hjc8D2Av31e2V6JywUp8qJMUvwpgT8HEoBrcfSvV2r1hVaYDVZW3y16WnPQDXcEy5kezJsoXoMr8J6MeYs3DF0ncPdTEhyBuQBv_t77YGFArE-onbIbmPknU1lBpBUV4fTmZeRCCt-l_Y",
    cardImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMyJ3f1yoLuB2nfcBAYeYi6yKxu5Tb9t_iuVMHzH_qntJiX55kCOCZbwiRreFjQSmVXrlKrMLU2ku2uE6w7Fe5PqT0zFFqScE7nKu-8AFuJBNxQl2MOTJsdZSfwXEoo9Hjc8D2Av31e2V6JywUp8qJMUvwpgT8HEoBrcfSvV2r1hVaYDVZW3y16WnPQDXcEy5kezJsoXoMr8J6MeYs3DF0ncPdTEhyBuQBv_t77YGFArE-onbIbmPknU1lBpBUV4fTmZeRCCt-l_Y",
    highlights: [
      { icon: "brightness_6", label: "Golden hour photography at Hindu temples" },
      { icon: "directions_walk", label: "Curated cultural walk through the ruins" },
      { icon: "hail", label: "Expert local guide" },
      { icon: "directions_car", label: "Private transport included" },
    ],
    itinerary: [
      {
        time: "14:00",
        title: "Hotel pickup",
        description: "Afternoon departure from your hotel.",
      },
      {
        time: "15:00",
        title: "Prambanan exploration",
        description:
          "Guided walk through the majestic Hindu temple complex.",
      },
      {
        time: "17:30",
        title: "Sunset viewing",
        description:
          "Golden hour photography at the temple with dramatic silhouettes.",
      },
      {
        time: "19:00",
        title: "Drop-off",
        description: "Return to your hotel.",
      },
    ],
    included: [
      "Private AC vehicle",
      "All entry tickets & parking",
      "English-speaking guide",
      "Mineral water",
    ],
    notIncluded: [
      "Personal expenses",
      "Dinner",
      "Tipping for guide/driver",
      "Travel insurance",
    ],
    featureIcons: [
      {
        icon: "brightness_6",
        label: "Golden hour photography at Hindu temples",
      },
      {
        icon: "directions_walk",
        label: "Curated cultural walk through the ruins",
      },
      {
        icon: "history_edu",
        label: "Ancient epic storytelling of Ramayana",
      },
    ],
  },
  {
    slug: "parangtritis-beach",
    title: "Parangtritis Beach & Sand Dunes",
    location: "Bantul",
    duration: "Full Day",
    groupType: "Private",
    pickup: "Hotel",
    price: 75,
    priceLabel: "From $75",
    description:
      "Adventure through the rare Gumuk Pasir sand dunes followed by a magical sunset horse ride on the shore of the Indian Ocean.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfje4U3yQNdWEiDMXeipWpgqxaCSKyk8C6hgs5NQaS4R92bJrWdm82573LFQKQY13SU4Ty7cHSshuuxyrlLHKMxJFO4g-7Zuo105Le5_rPmWSdM9o9cM-FaYp67tJEPUwN9mP2E3r8eyXY-zIDW9Yj84Rk0JKrzxbhzAW0NcQt3Id7_FO3BtPZtpOIGXwTJaa7JBK1hLAIzZEXa2CAZjuHMM6RWJPPjD9JZDEx758fjbOMuMIrg3UPwydMeFD7ML7i-LP4Bh5hzr0",
    cardImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfje4U3yQNdWEiDMXeipWpgqxaCSKyk8C6hgs5NQaS4R92bJrWdm82573LFQKQY13SU4Ty7cHSshuuxyrlLHKMxJFO4g-7Zuo105Le5_rPmWSdM9o9cM-FaYp67tJEPUwN9mP2E3r8eyXY-zIDW9Yj84Rk0JKrzxbhzAW0NcQt3Id7_FO3BtPZtpOIGXwTJaa7JBK1hLAIzZEXa2CAZjuHMM6RWJPPjD9JZDEx758fjbOMuMIrg3UPwydMeFD7ML7i-LP4Bh5hzr0",
    highlights: [
      { icon: "waves", label: "Dramatic black sand beach" },
      { icon: "landscape", label: "Rare volcanic sand dunes" },
      { icon: "hail", label: "Expert local guide" },
      { icon: "directions_car", label: "Private transport included" },
    ],
    itinerary: [
      {
        time: "08:00",
        title: "Hotel pickup",
        description: "Morning departure from your hotel.",
      },
      {
        time: "09:30",
        title: "Sand dunes exploration",
        description:
          "Explore the rare Gumuk Pasir volcanic sand dunes.",
      },
      {
        time: "12:00",
        title: "Seafood lunch",
        description:
          "Fresh grilled seafood at a beachside warung.",
      },
      {
        time: "15:00",
        title: "Beach & sunset",
        description:
          "Walk along Parangtritis beach and enjoy the sunset over the Indian Ocean.",
      },
      {
        time: "17:30",
        title: "Drop-off",
        description: "Return to your hotel.",
      },
    ],
    included: [
      "Private AC vehicle",
      "All entry tickets & parking",
      "Seafood lunch",
      "English-speaking guide",
      "Mineral water",
    ],
    notIncluded: [
      "Personal expenses",
      "Horse riding fee",
      "Tipping for guide/driver",
      "Travel insurance",
    ],
    featureIcons: [
      {
        icon: "waves",
        label: "Scenic walk on the dramatic black sand beach",
      },
      {
        icon: "landscape",
        label: "Explore rare volcanic sand dunes (Gumuk Pasir)",
      },
      { icon: "set_meal", label: "Fresh grilled seafood lunch by the coast" },
    ],
  },
];

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find((p) => p.slug === slug);
}
