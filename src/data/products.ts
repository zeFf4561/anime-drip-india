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
  type?: 'tshirt' | 'hoodie' | 'sweatshirt' | 'jacket';
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
    featured: false,
    type: 'tshirt'
  },
  {
    id: "13",
    name: "Naruto Akatsuki Hoodie",
    price: 2299,
    image: narutoSilhouette,
    category: "naruto",
    description: "Premium black hoodie with red cloud pattern. Stay warm with Akatsuki style.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'hoodie'
  },
  {
    id: "14",
    name: "One Piece Wanted Poster Hoodie",
    price: 2199,
    image: onePieceProduct,
    category: "one-piece",
    description: "Luffy's bounty poster design hoodie. Show your pirate pride.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'hoodie'
  },
  {
    id: "15",
    name: "Attack on Titan Wings of Freedom Hoodie",
    price: 2399,
    image: demonSlayerGroup,
    category: "attack-on-titan",
    description: "Survey Corps wings embroidered hoodie. Fight for humanity in comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'hoodie'
  },
  {
    id: "16",
    name: "Demon Slayer Hashira Sweatshirt",
    price: 1899,
    image: demonSlayerGroup,
    category: "demon-slayer",
    description: "Pillars insignia crewneck sweatshirt. Represent the strongest demon slayers.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'sweatshirt'
  },
  {
    id: "17",
    name: "Jujutsu Kaisen Domain Expansion Hoodie",
    price: 2499,
    image: soloLevelingDesign,
    category: "jujutsu-kaisen",
    description: "Gojo's infinite void design premium hoodie. Ultimate sorcerer style.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'hoodie'
  },
  {
    id: "18",
    name: "My Hero Academia UA Jacket",
    price: 2899,
    image: narutoSilhouette,
    category: "my-hero-academia",
    description: "UA High School varsity jacket. Train to become the number one hero.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'jacket'
  },
  // Meme Culture Products
  {
    id: "19",
    name: "Stonks Only Go Up Tee",
    price: 999,
    image: soloLevelingDesign,
    category: "meme-culture",
    description: "When your portfolio is green. Classic internet meme in wearable form.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt'
  },
  {
    id: "20",
    name: "This Is Fine Dog Tee",
    price: 1099,
    image: demonSlayerGroup,
    category: "meme-culture",
    description: "Everything is on fire but we're staying calm. Iconic meme culture.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt'
  },
  {
    id: "21",
    name: "Distracted Boyfriend Meme Tee",
    price: 1049,
    image: onePieceProduct,
    category: "meme-culture",
    description: "The legendary meme that started it all. Premium quality print.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt'
  },
  // Minimalist Products
  {
    id: "22",
    name: "Abstract Line Art Tee",
    price: 1299,
    image: narutoSilhouette,
    category: "minimalist",
    description: "Single continuous line creates beauty. Minimalist elegance at its finest.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    type: 'tshirt'
  },
  {
    id: "23",
    name: "Geometric Mountain Tee",
    price: 1199,
    image: soloLevelingDesign,
    category: "minimalist",
    description: "Simple polygonal mountain design. Clean and modern aesthetic.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt'
  },
  {
    id: "24",
    name: "Zen Circle Tee",
    price: 1149,
    image: demonSlayerGroup,
    category: "minimalist",
    description: "Japanese enso circle symbolizing enlightenment. Pure minimalism.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt'
  },
  // Vintage Streetwear Products
  {
    id: "25",
    name: "80s Neon Wave Tee",
    price: 1399,
    image: onePieceProduct,
    category: "vintage-streetwear",
    description: "Synthwave aesthetic meets streetwear. Retro vibes from the 80s.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt'
  },
  {
    id: "26",
    name: "Retro Boombox Tee",
    price: 1299,
    image: narutoSilhouette,
    category: "vintage-streetwear",
    description: "Classic cassette player design. Old school hip-hop culture.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt'
  },
  {
    id: "27",
    name: "Vintage Arcade Hoodie",
    price: 2499,
    image: soloLevelingDesign,
    category: "vintage-streetwear",
    description: "Classic arcade cabinet graphics. Gaming meets fashion.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'hoodie'
  },
  // Motivational Products
  {
    id: "28",
    name: "Hustle Hard Tee",
    price: 1099,
    image: demonSlayerGroup,
    category: "motivational",
    description: "Bold typography for go-getters. Wear your ambition proudly.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt'
  },
  {
    id: "29",
    name: "Dream Big Tee",
    price: 1149,
    image: onePieceProduct,
    category: "motivational",
    description: "Inspiring message in elegant design. Fuel your dreams daily.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt'
  },
  {
    id: "30",
    name: "Stay Focused Hoodie",
    price: 2199,
    image: narutoSilhouette,
    category: "motivational",
    description: "Keep your eyes on the prize. Motivational streetwear at its best.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'hoodie'
  },
  // Retro Gaming Products
  {
    id: "31",
    name: "Pixel Heart Tee",
    price: 1099,
    image: soloLevelingDesign,
    category: "retro-gaming",
    description: "8-bit life meter design. Gamers know the struggle.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt'
  },
  {
    id: "32",
    name: "Game Over Tee",
    price: 1149,
    image: demonSlayerGroup,
    category: "retro-gaming",
    description: "Classic arcade game over screen. Nostalgic gaming vibes.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt'
  },
  {
    id: "33",
    name: "Retro Console Controller Hoodie",
    price: 2299,
    image: onePieceProduct,
    category: "retro-gaming",
    description: "Vintage gaming controller design. Perfect for retro gamers.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'hoodie'
  }
];


// Import category banners
import onePieceBanner from "@/assets/one-piece-banner.jpg";
import bleachBanner from "@/assets/bleach-banner.jpg";

export const categories = [
  // Anime Categories
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
  },
  {
    name: "Solo Leveling",
    slug: "solo-leveling",
    image: soloLevelingDesign,
    description: "Arise and level up your wardrobe"
  },
  {
    name: "Attack on Titan",
    slug: "attack-on-titan",
    image: narutoSilhouette,
    description: "Freedom fighters collection"
  },
  {
    name: "Jujutsu Kaisen",
    slug: "jujutsu-kaisen",
    image: soloLevelingDesign,
    description: "Cursed techniques in fashion"
  },
  {
    name: "My Hero Academia",
    slug: "my-hero-academia",
    image: demonSlayerGroup,
    description: "Plus Ultra hero gear"
  },
  {
    name: "Hunter x Hunter",
    slug: "hunter-x-hunter",
    image: onePieceProduct,
    description: "Master your Nen ability"
  },
  // New Non-Anime Categories
  {
    name: "Meme Culture",
    slug: "meme-culture",
    image: demonSlayerGroup,
    description: "Internet humor you can wear"
  },
  {
    name: "Minimalist",
    slug: "minimalist",
    image: narutoSilhouette,
    description: "Less is more in design"
  },
  {
    name: "Vintage Streetwear",
    slug: "vintage-streetwear",
    image: soloLevelingDesign,
    description: "Classic urban style"
  },
  {
    name: "Motivational",
    slug: "motivational",
    image: onePieceBanner,
    description: "Wear your inspiration daily"
  },
  {
    name: "Retro Gaming",
    slug: "retro-gaming",
    image: bleachBanner,
    description: "Level up your wardrobe"
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
  { name: "Muzan Demon King Tee", category: "Demon Slayer", comingSoon: true },
  
  // New Categories
  { name: "Stonks Only Go Up Tee", category: "Meme Culture", comingSoon: true },
  { name: "Distracted Boyfriend Tee", category: "Meme Culture", comingSoon: true },
  { name: "This Is Fine Dog Tee", category: "Meme Culture", comingSoon: true },
  { name: "Geometric Mountain Tee", category: "Minimalist", comingSoon: true },
  { name: "Abstract Line Art Tee", category: "Minimalist", comingSoon: true },
  { name: "80s Neon Wave Tee", category: "Vintage Streetwear", comingSoon: true },
  { name: "Retro Boombox Tee", category: "Vintage Streetwear", comingSoon: true }
];
