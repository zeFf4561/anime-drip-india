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
  isAnime?: boolean;
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
    description: "Sung Jin-Woo was humanity's weakest hunter, barely surviving each dungeon raid. But after a deadly double dungeon nearly killed him, he awakened to a mysterious system that allowed him to level up - something no hunter had ever done before. From the weakest to the Shadow Monarch, he commands an army of the dead with one word: 'Arise.' This is his ascension.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    isAnime: true
  },
  {
    id: "2", 
    name: "Naruto Shadow Clone Tee",
    price: 1199,
    image: narutoSilhouette,
    category: "naruto",
    description: "When Naruto trained with the toads at Mount Myōboku, he unlocked a power beyond the Nine-Tails - Sage Mode. This ancient technique allows mastery of natural energy. The Shadow Clone jutsu became his signature move, multiplying his determination across the battlefield. Wear this and channel the shinobi who never gave up on his ninja way.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    isAnime: true
  },
  {
    id: "3",
    name: "Demon Slayer Squad Tee", 
    price: 1399,
    image: demonSlayerGroup,
    category: "demon-slayer",
    description: "After tragedy struck on a snowy mountain, Tanjiro Kamado embarked on a journey with unlikely companions. Zenitsu's thunder breathing, Inosuke's beast instincts, and Nezuko's demon blood - together they form an unbreakable bond. This adorable chibi design celebrates the squad that faces demons with compassion and unwavering determination.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    isAnime: true
  },
  {
    id: "4",
    name: "One Piece Straw Hat Tee",
    price: 1249,
    image: onePieceProduct,
    category: "one-piece", 
    description: "In a world of endless oceans and impossible dreams, Monkey D. Luffy set sail with nothing but a straw hat and an unshakeable promise - to become the Pirate King. That hat, passed down from Shanks, represents freedom, friendship, and the courage to chase your dreams no matter the odds. Join the crew on their journey to find the One Piece!",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    isAnime: true
  },
  {
    id: "5",
    name: "Attack on Titan Scout Tee",
    price: 1349,
    image: narutoSilhouette,
    category: "attack-on-titan",
    description: "When humanity was pushed to extinction by Titans, only the bravest ventured beyond the walls. The Survey Corps, bearing the Wings of Freedom, sacrificed everything to uncover the truth. This emblem represents those who chose to fight rather than hide, who soared toward freedom even when death seemed certain. Dedicate your heart!",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    isAnime: true
  },
  {
    id: "6",
    name: "My Hero Academia Plus Ultra Tee",
    price: 1199,
    image: demonSlayerGroup,
    category: "my-hero-academia",
    description: "'I am here!' - the words that brought hope to millions. All Might, the Symbol of Peace, taught us that a true hero always smiles in the face of danger. Even as his power faded, he passed the torch to Izuku Midoriya, proving that heroism isn't just about strength, but about inspiring others to go Plus Ultra! Anyone can be a hero.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    isAnime: true
  },
  {
    id: "7",
    name: "Jujutsu Kaisen Cursed Energy Tee",
    price: 1399,
    image: soloLevelingDesign,
    category: "jujutsu-kaisen",
    description: "Gojo Satoru stands as the strongest sorcerer, blessed with the Six Eyes and Limitless technique. His Domain Expansion - Infinite Void - overwhelms opponents with infinite information. Behind those blindfolds lies power that reshapes the jujutsu world. This design channels the cursed energy of a man who single-handedly changed everything.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    isAnime: true
  },
  {
    id: "8",
    name: "Tokyo Revengers Gang Tee",
    price: 1249,
    image: onePieceProduct,
    category: "tokyo-revengers",
    description: "Takemichi discovers he can leap through time to his middle school days, given one mission: save Hinata by changing the future. The Tokyo Manji Gang emblem represents brotherhood, loyalty, and the fight to rewrite a tragic destiny. Every time leap brings him closer to saving those he loves. Ride or die with Toman.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    isAnime: true
  },
  {
    id: "9",
    name: "Chainsaw Man Devil Hunter Tee",
    price: 1399,
    image: narutoSilhouette,
    category: "chainsaw-man",
    description: "Denji had simple dreams - eat good food, live comfortably, maybe fall in love. After merging with Pochita, his devil dog, he became Chainsaw Man - a devil hunter with chainsaws bursting from his body. In a world of public safety and devil contracts, he fights not for justice, but for the simple pleasures life denied him.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    isAnime: true
  },
  {
    id: "10",
    name: "Spy x Family Mission Tee",
    price: 1199,
    image: demonSlayerGroup,
    category: "spy-x-family",
    description: "Operation Strix requires a family. Twilight, a master spy, never expected his fake wife to be an assassin or his adopted daughter to read minds. The Forgers are the most dysfunctional functional family in espionage - each hiding secrets while genuinely learning to care. This tee celebrates the mission that became so much more than pretend.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    isAnime: true
  },
  {
    id: "11",
    name: "Fullmetal Alchemist Brotherhood Tee",
    price: 1349,
    image: soloLevelingDesign,
    category: "fullmetal-alchemist",
    description: "Two brothers attempted the forbidden - human transmutation - and paid the ultimate price. Edward lost his arm and leg, Alphonse his entire body. Bound by automail and armor, they search for the Philosopher's Stone to restore what they lost. The transmutation circle represents their journey and the law of Equivalent Exchange.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    isAnime: true
  },
  {
    id: "12",
    name: "Hunter x Hunter Nen Ability Tee",
    price: 1299,
    image: onePieceProduct,
    category: "hunter-x-hunter",
    description: "Gon Freecss left Whale Island with one goal: find his father, the legendary Hunter Ging. Along the way, he discovered friendship with Killua and mastered Nen. But when pushed to his limits, even the brightest soul can embrace darkness. This celebrates the duo whose potential and bond knew no bounds, exploring a world of hunters and hidden power.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt',
    isAnime: true
  },
  {
    id: "13",
    name: "Naruto Akatsuki Hoodie",
    price: 2299,
    image: narutoSilhouette,
    category: "naruto",
    description: "The Akatsuki - rogue ninjas bearing red clouds on black cloaks, each a legend from their village. Itachi, Kisame, Pain, and others hunt the Tailed Beasts with power that shakes nations. This iconic design represents the organization that challenged the entire shinobi world, where every member carries a tragic past and overwhelming strength.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'hoodie',
    isAnime: true
  },
  {
    id: "14",
    name: "One Piece Wanted Poster Hoodie",
    price: 2199,
    image: onePieceProduct,
    category: "one-piece",
    description: "Every bounty tells a story. From 30 million berries after Arlong Park to over 3 billion after Wano, Luffy's wanted poster tracks his journey from East Blue rookie to Yonko. The World Government fears him not just for strength, but for the ability to turn enemies into allies. Wear the bounty of the future Pirate King.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'hoodie',
    isAnime: true
  },
  {
    id: "15",
    name: "Attack on Titan Wings of Freedom Hoodie",
    price: 2399,
    image: demonSlayerGroup,
    category: "attack-on-titan",
    description: "The Wings of Freedom - a symbol that haunts and inspires. Every Scout who wears it knows they'll likely die beyond the walls, yet they ride out anyway. Erwin's gambles, Levi's strength, and the truth they uncovered changed everything. This premium hoodie honors those who chose freedom over fear, who gave their hearts for humanity.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'hoodie',
    isAnime: true
  },
  {
    id: "16",
    name: "Demon Slayer Hashira Sweatshirt",
    price: 1899,
    image: demonSlayerGroup,
    category: "demon-slayer",
    description: "The Hashira - nine pillars standing between humanity and demon extinction. Each master of their unique Breathing Style, from Flame to Water to Insect. Rengoku's unyielding spirit, Shinobu's deadly grace, Giyu's quiet strength - they bear the weight of protecting all. This sweatshirt honors the strongest demon slayers who inspire generations.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'sweatshirt',
    isAnime: true
  },
  {
    id: "17",
    name: "Jujutsu Kaisen Domain Expansion Hoodie",
    price: 2499,
    image: soloLevelingDesign,
    category: "jujutsu-kaisen",
    description: "Domain Expansion represents a sorcerer's pinnacle - a separate space where their technique is guaranteed to hit. Gojo's Infinite Void floods victims with infinite information, paralyzing them completely. This premium hoodie captures the overwhelming power of the strongest sorcerer, the one who rewrote the rules of jujutsu society itself.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'hoodie',
    isAnime: true
  },
  {
    id: "18",
    name: "My Hero Academia UA Jacket",
    price: 2899,
    image: narutoSilhouette,
    category: "my-hero-academia",
    description: "UA High School - the premier hero academy where legends are forged. Within these walls, students like Deku, Bakugo, and Todoroki push beyond their limits under All Might's legacy. This varsity jacket represents the institution that shapes ordinary kids with extraordinary Quirks into the heroes society needs. Plus Ultra starts here.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'jacket',
    isAnime: true
  },
  // Meme Culture Products
  {
    id: "19",
    name: "Stonks Only Go Up Tee",
    price: 999,
    image: soloLevelingDesign,
    category: "meme-culture",
    description: "From a 2017 meme poking fun at financial illiteracy, 'Stonks' became the rallying cry of retail investors everywhere. The deliberately misspelled word and surreal meme man represent every optimistic trader watching their portfolio climb. Whether you're riding GME to the moon or HODLing crypto, this tee says: market crashes are temporary, stonks are forever.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt',
    isAnime: false
  },
  {
    id: "20",
    name: "This Is Fine Dog Tee",
    price: 1099,
    image: demonSlayerGroup,
    category: "meme-culture",
    description: "Sitting in a room engulfed in flames, sipping coffee with a smile - 'This is fine.' KC Green's comic became the perfect metaphor for modern life, where we convince ourselves everything's okay while chaos burns around us. This tee is for everyone who's ever smiled through the absurdity and pretended it's all under control.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt',
    isAnime: false
  },
  {
    id: "21",
    name: "Distracted Boyfriend Meme Tee",
    price: 1049,
    image: onePieceProduct,
    category: "meme-culture",
    description: "One stock photo became the universal symbol for temptation, choices, and regret. The boyfriend looks back at another woman while his girlfriend stares in disbelief - a moment that launched a thousand memes. This tee immortalizes the internet's favorite relationship drama, perfect for anyone who's ever been distracted by the next shiny thing.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt',
    isAnime: false
  },
  // Minimalist Products
  {
    id: "22",
    name: "Abstract Line Art Tee",
    price: 1299,
    image: narutoSilhouette,
    category: "minimalist",
    description: "A single continuous line flows across the fabric, creating complex forms from the simplest gesture. This minimalist philosophy - that less is more, that beauty exists in restraint - speaks to those who appreciate the subtle over the loud. Perfect for the modern aesthete who finds power in simplicity and elegance in the essential.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    type: 'tshirt',
    isAnime: false
  },
  {
    id: "23",
    name: "Geometric Mountain Tee",
    price: 1199,
    image: soloLevelingDesign,
    category: "minimalist",
    description: "Mountains reduced to their geometric essence - clean polygons climbing toward the sky. This design strips away detail to reveal fundamental shapes, celebrating the intersection of nature and mathematics. For those who find beauty in structure, who see the world through angles and planes, who appreciate that sometimes clarity comes from reduction.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt',
    isAnime: false
  },
  {
    id: "24",
    name: "Zen Circle Tee",
    price: 1149,
    image: demonSlayerGroup,
    category: "minimalist",
    description: "The Enso - a sacred symbol in Zen Buddhism painted in one fluid, uninhibited brushstroke. It represents enlightenment, strength, elegance, the universe, and the void all at once. The circle is incomplete, embracing imperfection as perfection. Wear this symbol of letting go, of finding peace in the moment, of accepting what is.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt',
    isAnime: false
  },
  // Vintage Streetwear Products
  {
    id: "25",
    name: "80s Neon Wave Tee",
    price: 1399,
    image: onePieceProduct,
    category: "vintage-streetwear",
    description: "The 1980s gave us more than just music - it gave us an aesthetic dream. Neon grids stretching to infinity, chrome sunsets over digital horizons, the birth of the cyber age. Synthwave captures that retro-futuristic nostalgia, when tomorrow looked bright and fast. This tee channels the era of arcade cabinets, VHS tapes, and endless possibility.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt',
    isAnime: false
  },
  {
    id: "26",
    name: "Retro Boombox Tee",
    price: 1299,
    image: narutoSilhouette,
    category: "vintage-streetwear",
    description: "Before streaming, before MP3s, there was the boombox - carried on shoulders through city streets, blasting beats that birthed hip-hop culture. B-boys breakdancing to fresh tracks, DJ battles in the park, the golden age when music was physical and community was everything. This tee honors the sound system that powered a revolution.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt',
    isAnime: false
  },
  {
    id: "27",
    name: "Vintage Arcade Hoodie",
    price: 2499,
    image: soloLevelingDesign,
    category: "vintage-streetwear",
    description: "Quarters clinked, joysticks clicked, and pixel heroes fought dragons in dimly lit arcades. Before home consoles dominated, the arcade was a temple where legends were born - high scores etched in glory, crowds gathering around the skilled player. This hoodie resurrects that era when gaming meant community, competition, and the sweet sound of 'Insert Coin'.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'hoodie',
    isAnime: false
  },
  // Motivational Products
  {
    id: "28",
    name: "Hustle Hard Tee",
    price: 1099,
    image: demonSlayerGroup,
    category: "motivational",
    description: "Success doesn't come from comfort zones. Every champion, every breakthrough, every dream realized started with someone who refused to quit when it got hard. This bold statement is for the grinders, the dreamers putting in overtime, those building empires one step at a time. Your hustle is your superpower - wear it loud, wear it proud.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt',
    isAnime: false
  },
  {
    id: "29",
    name: "Dream Big Tee",
    price: 1149,
    image: onePieceProduct,
    category: "motivational",
    description: "The size of your dreams should scare you a little. Safe dreams don't change lives, don't move mountains, don't create legacies. This isn't about reckless fantasy - it's about having the courage to reach for what seems impossible. Because every innovation, every revolution started with someone brave enough to dream bigger than reality allowed.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt',
    isAnime: false
  },
  {
    id: "30",
    name: "Stay Focused Hoodie",
    price: 2199,
    image: narutoSilhouette,
    category: "motivational",
    description: "Distractions are everywhere - notifications, doubts, people telling you it's impossible. But champions develop tunnel vision, blocking out the noise to see only the goal. This hoodie is your armor against distraction, a reminder that focus is a superpower in a world designed to scatter your attention. Lock in. Execute. Achieve.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'hoodie',
    isAnime: false
  },
  // Retro Gaming Products
  {
    id: "31",
    name: "Pixel Heart Tee",
    price: 1099,
    image: soloLevelingDesign,
    category: "retro-gaming",
    description: "Every gamer knows the panic when your health drops to that last pixelated heart. Whether it's Link in a dungeon, Mario facing Bowser, or any hero on their last life - that flashing indicator meant everything. This 8-bit design celebrates classic gaming when graphics were simple but emotions ran deep. One hit left. Make it count.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt',
    isAnime: false
  },
  {
    id: "32",
    name: "Game Over Tee",
    price: 1149,
    image: demonSlayerGroup,
    category: "retro-gaming",
    description: "Those two words used to mean everything - the end of your run, your quarter gone, someone else's turn. But then you'd hit Continue, feed another coin, and try again. Game Over wasn't defeat, it was just a checkpoint. This classic screen reminds us that every ending is just another beginning. Insert coin to retry?",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'tshirt',
    isAnime: false
  },
  {
    id: "33",
    name: "Retro Console Controller Hoodie",
    price: 2299,
    image: onePieceProduct,
    category: "retro-gaming",
    description: "Before wireless, before analog sticks, there was this - a simple rectangle with a D-pad and two buttons that changed entertainment forever. The NES controller design is iconic: clean, functional, revolutionary. Holding it meant adventure awaited. This hoodie honors the input device that launched a million memories and established gaming as an art form.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    type: 'hoodie',
    isAnime: false
  }
];


// Import category banners
import onePieceBanner from "@/assets/one-piece-banner.jpg";
import bleachBanner from "@/assets/bleach-banner.jpg";

export interface Category {
  name: string;
  slug: string;
  image: string;
  description: string;
  isAnime?: boolean;
}

export const categories: Category[] = [
  // Anime Categories
  {
    name: "One Piece",
    slug: "one-piece", 
    image: onePieceBanner,
    description: "Sail with the Straw Hat Pirates",
    isAnime: true
  },
  {
    name: "Naruto",
    slug: "naruto",
    image: narutoSilhouette, 
    description: "Ninja way of the Hidden Leaf",
    isAnime: true
  },
  {
    name: "Bleach",
    slug: "bleach",
    image: bleachBanner,
    description: "Soul Reaper battles await",
    isAnime: true
  },
  {
    name: "Demon Slayer", 
    slug: "demon-slayer",
    image: demonSlayerGroup,
    description: "Slay demons with style",
    isAnime: true
  },
  {
    name: "Solo Leveling",
    slug: "solo-leveling",
    image: soloLevelingDesign,
    description: "Arise and level up your wardrobe",
    isAnime: true
  },
  {
    name: "Attack on Titan",
    slug: "attack-on-titan",
    image: narutoSilhouette,
    description: "Freedom fighters collection",
    isAnime: true
  },
  {
    name: "Jujutsu Kaisen",
    slug: "jujutsu-kaisen",
    image: soloLevelingDesign,
    description: "Cursed techniques in fashion",
    isAnime: true
  },
  {
    name: "My Hero Academia",
    slug: "my-hero-academia",
    image: demonSlayerGroup,
    description: "Plus Ultra hero gear",
    isAnime: true
  },
  {
    name: "Hunter x Hunter",
    slug: "hunter-x-hunter",
    image: onePieceProduct,
    description: "Master your Nen ability",
    isAnime: true
  },
  // New Non-Anime Categories
  {
    name: "Meme Culture",
    slug: "meme-culture",
    image: demonSlayerGroup,
    description: "Internet humor you can wear",
    isAnime: false
  },
  {
    name: "Minimalist",
    slug: "minimalist",
    image: narutoSilhouette,
    description: "Less is more in design",
    isAnime: false
  },
  {
    name: "Vintage Streetwear",
    slug: "vintage-streetwear",
    image: soloLevelingDesign,
    description: "Classic urban style",
    isAnime: false
  },
  {
    name: "Motivational",
    slug: "motivational",
    image: onePieceBanner,
    description: "Wear your inspiration daily",
    isAnime: false
  },
  {
    name: "Retro Gaming",
    slug: "retro-gaming",
    image: bleachBanner,
    description: "Level up your wardrobe",
    isAnime: false
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
