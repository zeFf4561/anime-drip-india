// Mock product data for the prototype
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
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
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "2", 
    name: "Naruto Shadow Clone Tee",
    price: 1199,
    image: narutoSilhouette,
    category: "naruto",
    description: "Minimalist silhouette design capturing the essence of Naruto's journey. Premium quality cotton with anime-inspired graphics.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "3",
    name: "Demon Slayer Squad Tee", 
    price: 1399,
    image: demonSlayerGroup,
    category: "demon-slayer",
    description: "Chibi-style group design featuring Tanjiro, Nezuko, Zenitsu, and Inosuke. Adorable and authentic anime artwork.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "4",
    name: "One Piece Straw Hat Tee",
    price: 1249,
    image: onePieceProduct,
    category: "one-piece", 
    description: "Classic Straw Hat Pirates design with vintage anime aesthetics. Show your loyalty to Luffy's crew.",
    sizes: ["S", "M", "L", "XL", "XXL"]
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