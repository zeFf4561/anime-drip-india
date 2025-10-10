// Mock product data for the prototype
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
  featured?: boolean;
}

// Import images
import soloLevelingDesign from "@/assets/solo-leveling-design.jpg";
import narutoSilhouette from "@/assets/naruto-silhouette.jpg";
import demonSlayerGroup from "@/assets/demon-slayer-group.jpg";
import onePieceProduct from "@/assets/one-piece-product.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Solo Leveling Arise Tee",
    price: 1299,
    image: soloLevelingDesign,
    category: "solo-leveling",
    description: "100% premium cotton oversized tee featuring Sung Jin-Woo in his iconic pose. Perfect for true Solo Leveling fans.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true
  },
  {
    id: "2", 
    name: "Naruto Shadow Clone Tee",
    price: 1199,
    image: narutoSilhouette,
    category: "naruto",
    description: "Minimalist silhouette design capturing the essence of Naruto's journey. Premium quality cotton with anime-inspired graphics.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true
  },
  {
    id: "3",
    name: "Demon Slayer Squad Tee", 
    price: 1399,
    image: demonSlayerGroup,
    category: "demon-slayer",
    description: "Chibi-style group design featuring Tanjiro, Nezuko, Zenitsu, and Inosuke. Adorable and authentic anime artwork.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false
  },
  {
    id: "4",
    name: "One Piece Straw Hat Tee",
    price: 1249,
    image: onePieceProduct,
    category: "one-piece", 
    description: "Classic Straw Hat Pirates design with vintage anime aesthetics. Show your loyalty to Luffy's crew.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true
  },
  {
    id: "5",
    name: "Attack on Titan Scout Tee",
    price: 1349,
    image: narutoSilhouette,
    category: "attack-on-titan",
    description: "Survey Corps insignia with premium embroidery. For those who fight for humanity's freedom.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false
  },
  {
    id: "6",
    name: "My Hero Academia Plus Ultra Tee",
    price: 1199,
    image: demonSlayerGroup,
    category: "my-hero-academia",
    description: "All Might inspired design with bold typography. Show your hero spirit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false
  },
  {
    id: "7",
    name: "Jujutsu Kaisen Cursed Energy Tee",
    price: 1399,
    image: soloLevelingDesign,
    category: "jujutsu-kaisen",
    description: "Gojo Satoru's domain expansion design. Unleash your cursed technique.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false
  },
  {
    id: "8",
    name: "Tokyo Revengers Gang Tee",
    price: 1249,
    image: onePieceProduct,
    category: "tokyo-revengers",
    description: "Toman gang emblem with vintage wash finish. Time to ride with the crew.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false
  },
  {
    id: "9",
    name: "Chainsaw Man Devil Hunter Tee",
    price: 1399,
    image: narutoSilhouette,
    category: "chainsaw-man",
    description: "Denji's chainsaw design with distressed graphics. Hunt devils in style.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false
  },
  {
    id: "10",
    name: "Spy x Family Mission Tee",
    price: 1199,
    image: demonSlayerGroup,
    category: "spy-x-family",
    description: "Operation Strix themed design. Perfect for undercover family missions.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false
  },
  {
    id: "11",
    name: "Fullmetal Alchemist Brotherhood Tee",
    price: 1349,
    image: soloLevelingDesign,
    category: "fullmetal-alchemist",
    description: "Transmutation circle design with metallic print. The law of equivalent exchange.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false
  },
  {
    id: "12",
    name: "Hunter x Hunter Nen Ability Tee",
    price: 1299,
    image: onePieceProduct,
    category: "hunter-x-hunter",
    description: "Gon and Killua duo design. Master your Nen with this exclusive tee.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false
  }
];

// Import category banners
import onePieceBanner from "@/assets/one-piece-banner.jpg";
import bleachBanner from "@/assets/bleach-banner.jpg";

export const categories = [
  {
    name: "One Piece",
    slug: "one-piece", 
    image: onePieceBanner,
    description: "Sail with the Straw Hat Pirates"
  },
  {
    name: "Naruto",
    slug: "naruto",
    image: narutoSilhouette, 
    description: "Ninja way of the Hidden Leaf"
  },
  {
    name: "Bleach",
    slug: "bleach",
    image: bleachBanner,
    description: "Soul Reaper battles await"
  },
  {
    name: "Demon Slayer", 
    slug: "demon-slayer",
    image: demonSlayerGroup,
    description: "Slay demons with style"
  }
];

export const upcomingProducts = [
  // One Piece upcoming
  { name: "Gear 5 Luffy Tee", category: "One Piece", comingSoon: true },
  { name: "Zoro Three Sword Style Tee", category: "One Piece", comingSoon: true },
  { name: "Sanji Vinsmoke Tee", category: "One Piece", comingSoon: true },
  { name: "Nami Navigator Tee", category: "One Piece", comingSoon: true },
  { name: "Chopper Doctor Tee", category: "One Piece", comingSoon: true },
  
  // Naruto upcoming
  { name: "Sasuke Sharingan Tee", category: "Naruto", comingSoon: true },
  { name: "Kakashi Sensei Tee", category: "Naruto", comingSoon: true },
  { name: "Akatsuki Cloud Tee", category: "Naruto", comingSoon: true },
  { name: "Nine Tails Chakra Tee", category: "Naruto", comingSoon: true },
  { name: "Hokage Legacy Tee", category: "Naruto", comingSoon: true },
  
  // Bleach upcoming  
  { name: "Ichigo Bankai Tee", category: "Bleach", comingSoon: true },
  { name: "Rukia Kuchiki Tee", category: "Bleach", comingSoon: true },
  { name: "Zanpakuto Spirit Tee", category: "Bleach", comingSoon: true },
  { name: "Soul Society Tee", category: "Bleach", comingSoon: true },
  { name: "Hollow Mask Tee", category: "Bleach", comingSoon: true },
  
  // Demon Slayer upcoming
  { name: "Tanjiro Breath of Water Tee", category: "Demon Slayer", comingSoon: true },
  { name: "Zenitsu Thunder Form Tee", category: "Demon Slayer", comingSoon: true },
  { name: "Inosuke Beast Breathing Tee", category: "Demon Slayer", comingSoon: true },
  { name: "Hashira Pillars Tee", category: "Demon Slayer", comingSoon: true },
  { name: "Muzan Demon King Tee", category: "Demon Slayer", comingSoon: true }
];