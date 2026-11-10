/**
 * MOBILEHUB - MODERN FLAGSHIP SMARTPHONE STORE
 * Pure Vanilla JavaScript (ES6+)
 * Features: Live Search, Category Filter, Price Range Filter, Sorting,
 * LocalStorage Cart & Wishlist, Quick View Modal, Live Checkout Simulation,
 * Countdown Timer, Mobile Drawer, Dynamic Pricing & Toasts.
 */

// ==========================================================================
// 1. COMPREHENSIVE PRODUCT CATALOG
// ==========================================================================
const PRODUCTS = [
  {
    id: "iphone-17-pro-max",
    name: "Apple iPhone 17 Pro Max",
    brand: "apple",
    category: "smartphones",
    price: 134900,
    originalPrice: 144900,
    discount: 7,
    rating: 4.9,
    ratingCount: 1840,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop&q=80",
    tag: "Flagship 2026",
    is5G: true,
    specs: ["A19 Pro Bionic", "256GB / 512GB", "48MP Triple Pro", "33h Battery"],
    colors: [
      { name: "Natural Titanium", hex: "#9da1a5" },
      { name: "Deep Blue", hex: "#233348" },
      { name: "Space Black", hex: "#1c1c1e" },
      { name: "Desert Gold", hex: "#d8c4b6" }
    ],
    storageVariants: [
      { label: "256GB", priceAdd: 0 },
      { label: "512GB", priceAdd: 15000 },
      { label: "1TB", priceAdd: 35000 }
    ],
    description: "The ultimate iPhone. Forged in aerospace-grade Grade 5 titanium with the groundbreaking 3nm A19 Pro silicon, customized Camera Control, and an advanced 48MP periscope telephoto system.",
    detailedSpecs: {
      display: "6.9-inch Super Retina XDR OLED, 120Hz ProMotion, 2000 nits",
      processor: "Apple A19 Pro (3nm) with 6-core GPU & Hardware Ray Tracing",
      rearCamera: "48MP Fusion (OIS) + 48MP Ultra-Wide + 48MP 5x Telephoto",
      frontCamera: "12MP TrueDepth with Autofocus & 4K ProRes 60fps",
      battery: "4852 mAh with 30W Fast Charging & Qi2 Wireless",
      os: "iOS 19 with Apple Intelligence"
    }
  },
  {
    id: "samsung-galaxy-s25-ultra",
    name: "Samsung Galaxy S25 Ultra 5G",
    brand: "samsung",
    category: "smartphones",
    price: 129999,
    originalPrice: 144999,
    discount: 10,
    rating: 4.9,
    ratingCount: 1620,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=80",
    tag: "Galaxy AI",
    is5G: true,
    specs: ["Snapdragon 8 Elite", "200MP Quad Cam", "S-Pen Built-in", "5000mAh"],
    colors: [
      { name: "Titanium Silver", hex: "#b8bcc4" },
      { name: "Titanium Black", hex: "#22252a" },
      { name: "Titanium Jade Green", hex: "#475953" },
      { name: "Titanium Blue", hex: "#3b5375" }
    ],
    storageVariants: [
      { label: "256GB", priceAdd: 0 },
      { label: "512GB", priceAdd: 12000 },
      { label: "1TB", priceAdd: 30000 }
    ],
    description: "Meet Galaxy S25 Ultra with next-generation Galaxy AI, an embedded S-Pen, a titanium frame with anti-reflective Gorilla Armor glass, and a record-breaking 200MP camera system.",
    detailedSpecs: {
      display: "6.8-inch Dynamic AMOLED 2X, QHD+, 1-120Hz, 2600 nits peak",
      processor: "Qualcomm Snapdragon 8 Elite for Galaxy (3nm)",
      rearCamera: "200MP Primary (OIS) + 50MP Periscope (5x) + 50MP Ultra-Wide + 10MP (3x)",
      frontCamera: "12MP Dual Pixel AF with 4K 60fps",
      battery: "5000 mAh with 45W Fast Charging & Fast Wireless 2.0",
      os: "One UI 7 based on Android 15 (7 Years OS Updates)"
    }
  },
  {
    id: "oneplus-13-5g",
    name: "OnePlus 13 5G",
    brand: "oneplus",
    category: "smartphones",
    price: 69999,
    originalPrice: 74999,
    discount: 7,
    rating: 4.8,
    ratingCount: 1140,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80",
    tag: "100W SUPERVOOC",
    is5G: true,
    specs: ["Snapdragon 8 Elite", "50MP Triple Hasselblad", "6000mAh Glacier", "2K Oriental OLED"],
    colors: [
      { name: "Midnight Black", hex: "#1f1f21" },
      { name: "Emerald Green", hex: "#2e4c3e" },
      { name: "Arctic White", hex: "#e5e7eb" }
    ],
    storageVariants: [
      { label: "256GB (12GB RAM)", priceAdd: 0 },
      { label: "512GB (16GB RAM)", priceAdd: 7000 },
      { label: "1TB (24GB RAM)", priceAdd: 18000 }
    ],
    description: "Peak power meets Hasselblad artistry. OnePlus 13 packs a massive 6000mAh silicon-carbon Glacier battery, Snapdragon 8 Elite, and a blazing 100W wired + 50W wireless charger in box.",
    detailedSpecs: {
      display: "6.82-inch 2K Oriental AMOLED, 120Hz LTPO, 4500 nits peak",
      processor: "Snapdragon 8 Elite (3nm, up to 4.32GHz)",
      rearCamera: "50MP Sony LYT-808 (OIS) + 50MP Periscope (3x) + 50MP Ultra-Wide",
      frontCamera: "32MP Sony IMX615 with 4K recording",
      battery: "6000 mAh with 100W SUPERVOOC & 50W AIRVOOC",
      os: "OxygenOS 15 based on Android 15"
    }
  },
  {
    id: "google-pixel-10-pro",
    name: "Google Pixel 10 Pro 5G",
    brand: "google",
    category: "smartphones",
    price: 99999,
    originalPrice: 109999,
    discount: 9,
    rating: 4.8,
    ratingCount: 920,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&auto=format&fit=crop&q=80",
    tag: "Gemini Nano AI",
    is5G: true,
    specs: ["Google Tensor G5", "Pro AI Triple Cam", "Super Actua OLED", "16GB RAM"],
    colors: [
      { name: "Obsidian", hex: "#202124" },
      { name: "Porcelain", hex: "#f1f3f4" },
      { name: "Hazel", hex: "#878a84" },
      { name: "Rose", hex: "#e8c5c8" }
    ],
    storageVariants: [
      { label: "128GB", priceAdd: 0 },
      { label: "256GB", priceAdd: 9000 },
      { label: "512GB", priceAdd: 22000 }
    ],
    description: "The cleanest Android flagship with custom TSMC-built Tensor G5, on-device Gemini AI Multimodal assistants, and unmatched computational astrophotography.",
    detailedSpecs: {
      display: "6.7-inch Super Actua LTPO OLED, 1-120Hz, 3000 nits",
      processor: "Google Tensor G5 with Titan M2 security coprocessor",
      rearCamera: "50MP Octa PD Primary + 48MP Quad PD 5x Telephoto + 48MP Ultra-Wide",
      frontCamera: "42MP Dual PD Selfie with 103° ultrawide FOV",
      battery: "5060 mAh with 37W Fast Wired & 23W Wireless",
      os: "Android 16 with 7 Years OS & Security Drops"
    }
  },
  {
    id: "xiaomi-15-ultra",
    name: "Xiaomi 15 Ultra 5G",
    brand: "xiaomi",
    category: "smartphones",
    price: 79999,
    originalPrice: 89999,
    discount: 11,
    rating: 4.7,
    ratingCount: 780,
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=800&auto=format&fit=crop&q=80",
    tag: "Leica Quad Cam",
    is5G: true,
    specs: ["1-inch Sony Sensor", "Leica Summilux", "Snapdragon 8 Elite", "90W HyperCharge"],
    colors: [
      { name: "Titanium Gray", hex: "#63676c" },
      { name: "Ceramic Black", hex: "#141518" },
      { name: "Ceramic White", hex: "#f8f9fa" }
    ],
    storageVariants: [
      { label: "256GB (16GB RAM)", priceAdd: 0 },
      { label: "512GB (16GB RAM)", priceAdd: 8000 }
    ],
    description: "Engineered in partnership with Leica. Features a massive 1-inch sensor, stepless variable aperture, dual telephoto zoom lenses, and cinematic 8K Dolby Vision HDR recording.",
    detailedSpecs: {
      display: "6.73-inch WQHD+ AMOLED, 120Hz LTPO, Dolby Vision, 3000 nits",
      processor: "Snapdragon 8 Elite (3nm)",
      rearCamera: "50MP 1-inch LYT-900 + 50MP 3.2x Telephoto + 50MP 5x Periscope + 50MP Ultra-Wide",
      frontCamera: "32MP In-display Selfie",
      battery: "5300 mAh with 90W Wired HyperCharge & 80W Wireless",
      os: "Xiaomi HyperOS 2 based on Android 15"
    }
  },
  {
    id: "vivo-x200-pro",
    name: "Vivo X200 Pro 5G",
    brand: "vivo",
    category: "smartphones",
    price: 94999,
    originalPrice: 102999,
    discount: 8,
    rating: 4.8,
    ratingCount: 890,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=80",
    tag: "ZEISS 200MP APO",
    is5G: true,
    specs: ["Dimensity 9400", "200MP ZEISS Telephoto", "6000mAh BlueVolt", "90W FlashCharge"],
    colors: [
      { name: "Ocean Blue", hex: "#1a446c" },
      { name: "Titanium Gray", hex: "#7a8288" },
      { name: "Carbon Black", hex: "#1f2326" }
    ],
    storageVariants: [
      { label: "256GB", priceAdd: 0 },
      { label: "512GB", priceAdd: 9000 },
      { label: "1TB", priceAdd: 20000 }
    ],
    description: "The portrait master. Groundbreaking 200MP ZEISS APO Floating Telephoto camera with industry-leading stage zoom and Dimensity 9400 3nm silicon.",
    detailedSpecs: {
      display: "6.78-inch 1.5K 8T LTPO Eye-Care AMOLED, 120Hz, 4500 nits",
      processor: "MediaTek Dimensity 9400 (3nm, All Big-Core)",
      rearCamera: "50MP Sony LYT-818 + 200MP ZEISS APO Telephoto + 50MP Ultra-Wide",
      frontCamera: "32MP ZEISS Portrait Camera",
      battery: "6000 mAh BlueVolt Silicon Anode with 90W FlashCharge",
      os: "Funtouch OS 15 based on Android 15"
    }
  },
  {
    id: "oppo-find-x8-pro",
    name: "Oppo Find X8 Pro 5G",
    brand: "oppo",
    category: "smartphones",
    price: 89999,
    originalPrice: 99999,
    discount: 10,
    rating: 4.7,
    ratingCount: 640,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80",
    tag: "Dual Periscope",
    is5G: true,
    specs: ["Hasselblad Quad 50MP", "Dual Periscope Zoom", "Dimensity 9400", "5910mAh Battery"],
    colors: [
      { name: "Space Black", hex: "#18191d" },
      { name: "Pearl White", hex: "#f0f2f5" }
    ],
    storageVariants: [
      { label: "256GB", priceAdd: 0 },
      { label: "512GB", priceAdd: 8000 }
    ],
    description: "The only smartphone with dual periscope telephoto cameras (3x and 6x optical), Hasselblad Master Mode, and a dedicated AI Quick Button.",
    detailedSpecs: {
      display: "6.78-inch Quad-Curved AMOLED, 1-120Hz, Dolby Vision, 4500 nits",
      processor: "MediaTek Dimensity 9400 (3nm)",
      rearCamera: "50MP Primary + 50MP 3x Periscope + 50MP 6x Periscope + 50MP Ultra-Wide",
      frontCamera: "32MP Sony with 4K recording",
      battery: "5910 mAh Glacier with 80W SUPERVOOC & 50W AIRVOOC",
      os: "ColorOS 15 with AI Toolbox"
    }
  },
  {
    id: "redmi-note-14-pro-plus",
    name: "Redmi Note 14 Pro+ 5G",
    brand: "xiaomi",
    category: "smartphones",
    price: 29999,
    originalPrice: 34999,
    discount: 14,
    rating: 4.6,
    ratingCount: 2450,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80",
    tag: "Budget Champion",
    is5G: true,
    specs: ["200MP OIS Camera", "120W HyperCharge", "Curved AMOLED", "6200mAh"],
    colors: [
      { name: "Aurora Purple", hex: "#4a3b63" },
      { name: "Midnight Black", hex: "#212124" },
      { name: "Mirror White", hex: "#f3f4f6" }
    ],
    storageVariants: [
      { label: "128GB (8GB RAM)", priceAdd: 0 },
      { label: "256GB (12GB RAM)", priceAdd: 3000 },
      { label: "512GB (12GB RAM)", priceAdd: 6000 }
    ],
    description: "India's highest value mid-ranger. Features 120W HyperCharge that fills the 6200mAh battery in under 20 minutes, plus an IP68 waterproof rating.",
    detailedSpecs: {
      display: "6.67-inch 1.5K Curved AMOLED, 120Hz, Dolby Vision, Gorilla Glass Victus 2",
      processor: "Snapdragon 7s Gen 3 (4nm)",
      rearCamera: "200MP Samsung ISOCELL HP3 (OIS) + 8MP Ultra-Wide + 2MP Macro",
      frontCamera: "20MP In-display Selfie",
      battery: "6200 mAh Silicon-Carbon with 120W In-Box HyperCharge",
      os: "Xiaomi HyperOS based on Android 14"
    }
  },
  {
    id: "vivo-v40-pro-5g",
    name: "Vivo V40 Pro 5G",
    brand: "vivo",
    category: "smartphones",
    price: 49999,
    originalPrice: 54999,
    discount: 9,
    rating: 4.7,
    ratingCount: 1350,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&auto=format&fit=crop&q=80",
    tag: "Studio Portrait",
    is5G: true,
    specs: ["50MP ZEISS Portrait", "Aura Light 2.0", "Dimensity 9200+", "5500mAh Slim"],
    colors: [
      { name: "Ganges Blue", hex: "#2a5298" },
      { name: "Titanium Gray", hex: "#6c757d" }
    ],
    storageVariants: [
      { label: "256GB (8GB RAM)", priceAdd: 0 },
      { label: "512GB (12GB RAM)", priceAdd: 5000 }
    ],
    description: "Designed for cinematic mobile photography with ZEISS optics on all cameras, intelligent Studio Aura Light, and an ultra-slim 7.58mm curved body.",
    detailedSpecs: {
      display: "6.78-inch 1.5K 3D Curved AMOLED, 120Hz, 4500 nits peak",
      processor: "MediaTek Dimensity 9200+ (4nm, up to 3.35GHz)",
      rearCamera: "50MP Sony IMX921 (OIS) + 50MP Sony IMX816 Telephoto + 50MP Ultra-Wide",
      frontCamera: "50MP ZEISS Group Selfie with Autofocus",
      battery: "5500 mAh BlueVolt with 80W FlashCharge",
      os: "Funtouch OS 14 based on Android 14"
    }
  },
  {
    id: "iphone-16",
    name: "Apple iPhone 16",
    brand: "apple",
    category: "smartphones",
    price: 74900,
    originalPrice: 79900,
    discount: 6,
    rating: 4.8,
    ratingCount: 2100,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&auto=format&fit=crop&q=80",
    tag: "Apple Intelligence",
    is5G: true,
    specs: ["A18 Chip", "Camera Control", "48MP Fusion Cam", "Action Button"],
    colors: [
      { name: "Ultramarine", hex: "#3b5ba5" },
      { name: "Teal", hex: "#4b8b8b" },
      { name: "Pink", hex: "#d88a99" },
      { name: "Black", hex: "#222325" }
    ],
    storageVariants: [
      { label: "128GB", priceAdd: 0 },
      { label: "256GB", priceAdd: 10000 },
      { label: "512GB", priceAdd: 30000 }
    ],
    description: "Built for Apple Intelligence. Packed with the superfast A18 chip, Camera Control button, 48MP Fusion 2-in-1 camera, and vibrant aerospace-grade aluminum finishes.",
    detailedSpecs: {
      display: "6.1-inch Super Retina XDR OLED, Dynamic Island, 2000 nits",
      processor: "Apple A18 (3nm) with 5-core GPU",
      rearCamera: "48MP Fusion with 2x Telephoto + 12MP Ultra-Wide with Macro",
      frontCamera: "12MP TrueDepth with Autofocus",
      battery: "Up to 22 hours video playback with MagSafe wireless",
      os: "iOS 18 with Apple Intelligence ready"
    }
  },
  {
    id: "samsung-galaxy-s24-fe",
    name: "Samsung Galaxy S24 FE 5G",
    brand: "samsung",
    category: "smartphones",
    price: 54999,
    originalPrice: 59999,
    discount: 8,
    rating: 4.7,
    ratingCount: 1100,
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&auto=format&fit=crop&q=80",
    tag: "Fan Edition",
    is5G: true,
    specs: ["Galaxy AI", "Exynos 2400e", "50MP Triple Cam", "120Hz Dynamic AMOLED"],
    colors: [
      { name: "Blue", hex: "#7ba4c2" },
      { name: "Graphite", hex: "#373a40" },
      { name: "Mint", hex: "#a4cfb7" },
      { name: "Yellow", hex: "#ebd57b" }
    ],
    storageVariants: [
      { label: "128GB", priceAdd: 0 },
      { label: "256GB", priceAdd: 6000 }
    ],
    description: "Everything you love about Galaxy S24 at a friendlier price. Full Galaxy AI suite (Circle to Search, Live Translate, Photo Assist) with 7 years of Android updates.",
    detailedSpecs: {
      display: "6.7-inch Dynamic AMOLED 2X, FHD+, 120Hz, 1900 nits",
      processor: "Samsung Exynos 2400e (4nm 10-core)",
      rearCamera: "50MP (OIS) + 8MP 3x Telephoto + 12MP Ultra-Wide",
      frontCamera: "10MP Dual Pixel AF",
      battery: "4700 mAh with 25W Fast Charging & Wireless PowerShare",
      os: "One UI 6.1 based on Android 14 (7 OS Upgrades)"
    }
  },
  {
    id: "oppo-reno-12-pro",
    name: "Oppo Reno 12 Pro 5G",
    brand: "oppo",
    category: "smartphones",
    price: 36999,
    originalPrice: 41999,
    discount: 12,
    rating: 4.6,
    ratingCount: 880,
    image: "https://images.unsplash.com/photo-1596742578443-7682ef5251cd?w=800&auto=format&fit=crop&q=80",
    tag: "AI Portrait Pro",
    is5G: true,
    specs: ["AI Eraser 2.0", "50MP Telephoto Portrait", "80W SUPERVOOC", "Gorilla Glass 7i"],
    colors: [
      { name: "Sunset Gold", hex: "#d8a66f" },
      { name: "Space Brown", hex: "#46362e" }
    ],
    storageVariants: [
      { label: "256GB (12GB RAM)", priceAdd: 0 },
      { label: "512GB (12GB RAM)", priceAdd: 4000 }
    ],
    description: "Supercharged with GenAI photo tools including AI Eraser 2.0, AI Best Face, and AI Clear Face. Features an aerospace-grade High-Strength Alloy Shield body.",
    detailedSpecs: {
      display: "6.7-inch Quad-Micro Curved AMOLED, 120Hz, 1200 nits, Gorilla Glass 7i",
      processor: "MediaTek Dimensity 7300-Energy (4nm)",
      rearCamera: "50MP Sony LYT-600 (OIS) + 50MP 2x Telephoto + 8MP Ultra-Wide",
      frontCamera: "50MP Eye AF Selfie Camera",
      battery: "5000 mAh with 80W SUPERVOOC",
      os: "ColorOS 14.1 with AI Features"
    }
  },
  // --- PREMIUM ACCESSORIES ---
  {
    id: "apple-airpods-pro-2",
    name: "Apple AirPods Pro (2nd Gen USB-C)",
    brand: "accessories",
    category: "accessories",
    price: 20999,
    originalPrice: 24900,
    discount: 16,
    rating: 4.9,
    ratingCount: 3200,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&auto=format&fit=crop&q=80",
    tag: "Spatial Audio",
    is5G: false,
    specs: ["Active Noise Cancelling", "Apple H2 Silicon", "MagSafe Case (USB-C)", "30h Total Battery"],
    colors: [{ name: "Glossy White", hex: "#ffffff" }],
    storageVariants: [{ label: "Standard Case", priceAdd: 0 }],
    description: "Up to 2x more Active Noise Cancellation, Adaptive Audio, Conversation Awareness, and Personalized Spatial Audio with dynamic head tracking.",
    detailedSpecs: {
      display: "N/A (True Wireless Audio)",
      processor: "Apple H2 Headphone Chip + U1 Chip in MagSafe Case",
      rearCamera: "Touch controls for volume & ANC switching",
      frontCamera: "Beamforming dual microphones with wind-mesh",
      battery: "Up to 6 hours listening (30 hours total with Case)",
      os: "Compatible with iOS, Android, macOS & Windows"
    }
  },
  {
    id: "samsung-galaxy-watch-ultra",
    name: "Samsung Galaxy Watch Ultra (LTE)",
    brand: "accessories",
    category: "accessories",
    price: 54999,
    originalPrice: 59999,
    discount: 8,
    rating: 4.8,
    ratingCount: 650,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80",
    tag: "Titanium Rugged",
    is5G: false,
    specs: ["Grade 4 Titanium", "10ATM + IP68", "Dual-Frequency GPS", "100h Battery Mode"],
    colors: [
      { name: "Titanium Gray", hex: "#4b4f56" },
      { name: "Titanium Silver", hex: "#bdc3c7" },
      { name: "Titanium White", hex: "#f5f6fa" }
    ],
    storageVariants: [{ label: "47mm (LTE + BT)", priceAdd: 0 }],
    description: "Designed for extremes. Titanium cushion frame, Sapphire Crystal glass, 100-hour battery saver, Dual-Frequency L1+L5 GPS, and 100m water resistance.",
    detailedSpecs: {
      display: "1.5-inch Super AMOLED, 480x480, Sapphire Glass, 3000 nits",
      processor: "Exynos W1000 (3nm 5-core)",
      rearCamera: "BioActive Sensor (ECG, Heart Rate, BIA, Sleep Apnea)",
      frontCamera: "N/A",
      battery: "590 mAh with WPC Wireless Fast Charging",
      os: "Wear OS Powered by Samsung (One UI 6 Watch)"
    }
  },
  {
    id: "oneplus-100w-gan-charger",
    name: "OnePlus 100W Dual-Port GaN Charger",
    brand: "accessories",
    category: "accessories",
    price: 2999,
    originalPrice: 3999,
    discount: 25,
    rating: 4.8,
    ratingCount: 1420,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80",
    tag: "GaN Fast Charge",
    is5G: false,
    specs: ["Dual Port (Type-C + A)", "SUPERVOOC & PD 3.0", "Gallium Nitride", "Ultra Compact"],
    colors: [{ name: "Arctic White", hex: "#ffffff" }],
    storageVariants: [{ label: "With 1m 10A Cable", priceAdd: 0 }],
    description: "High-efficiency GaN power architecture. Powers OnePlus 13 to 100% in 25 minutes, and also charges MacBook Pro, iPads, and iPhones at top speed.",
    detailedSpecs: {
      display: "N/A (Power Adapter)",
      processor: "Smart Power Distribution Chip",
      rearCamera: "Over-voltage, short-circuit & thermal safeguards",
      frontCamera: "N/A",
      battery: "Input: 100-240V ~ 50/60Hz, Max Output: 100W",
      os: "Supports PD, PPS, QC, SUPERVOOC protocols"
    }
  },
  {
    id: "anker-maggo-qi2-powerbank",
    name: "Anker MagGo Qi2 10,000mAh Power Bank",
    brand: "accessories",
    category: "accessories",
    price: 4499,
    originalPrice: 5999,
    discount: 25,
    rating: 4.7,
    ratingCount: 910,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80",
    tag: "Qi2 15W Wireless",
    is5G: false,
    specs: ["Certified Qi2 15W", "10,000mAh Battery", "Smart Color Display", "Foldable Kickstand"],
    colors: [
      { name: "Black", hex: "#1d1d1f" },
      { name: "White", hex: "#f0f2f5" }
    ],
    storageVariants: [{ label: "10,000mAh", priceAdd: 0 }],
    description: "Certified Qi2 15W ultra-fast magnetic wireless charging. Features an intelligent LCD screen showing battery percentage and remaining recharge time.",
    detailedSpecs: {
      display: "Smart Digital LCD display",
      processor: "ActiveShield 2.0 temperature monitoring",
      rearCamera: "Foldable hands-free kickstand",
      frontCamera: "N/A",
      battery: "10,000 mAh Li-ion (charges iPhone 16/17 nearly 2 times)",
      os: "Compatible with MagSafe iPhone and Qi2 devices"
    }
  }
];

// Hero device showcase configurations
const HERO_SHOWCASE = {
  iphone: {
    name: "Apple iPhone 17 Pro Max",
    price: "₹1,34,900",
    original: "₹1,44,900",
    discount: "7% OFF",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=900&auto=format&fit=crop&q=80",
    badge1: { title: "Apple A19 Pro", sub: "3nm Flagship Silicon" },
    badge2: { title: "48MP Triple Pro", sub: "120mm 5x Telephoto" },
    badge3: { title: "All-Day Battery", sub: "33h Video Playback" },
    productId: "iphone-17-pro-max"
  },
  s25: {
    name: "Samsung Galaxy S25 Ultra 5G",
    price: "₹1,29,999",
    original: "₹1,44,999",
    discount: "10% OFF",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
    badge1: { title: "Snapdragon 8 Elite", sub: "Galaxy AI Integrated" },
    badge2: { title: "200MP Quad Pro", sub: "100x Space Zoom" },
    badge3: { title: "Embedded S-Pen", sub: "Low-latency Precision" },
    productId: "samsung-galaxy-s25-ultra"
  },
  op13: {
    name: "OnePlus 13 5G Flagship",
    price: "₹69,999",
    original: "₹74,999",
    discount: "7% OFF",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&auto=format&fit=crop&q=80",
    badge1: { title: "100W SUPERVOOC", sub: "Full Charge in 25 Min" },
    badge2: { title: "Hasselblad Optics", sub: "Triple 50MP System" },
    badge3: { title: "6000mAh Glacier", sub: "Silicon-Carbon Tech" },
    productId: "oneplus-13-5g"
  }
};

// ==========================================================================
// 2. APPLICATION STATE
// ==========================================================================
const AppState = {
  products: PRODUCTS,
  filteredProducts: [...PRODUCTS],
  cart: JSON.parse(localStorage.getItem("mobilehub_cart")) || [],
  wishlist: JSON.parse(localStorage.getItem("mobilehub_wishlist")) || [],
  appliedCoupon: JSON.parse(localStorage.getItem("mobilehub_coupon")) || null,
  activeFilter: "all",
  searchQuery: "",
  maxPrice: 150000,
  sortBy: "featured",
  activeHeroDevice: "iphone"
};

// Save state helpers
function saveCartToStorage() {
  localStorage.setItem("mobilehub_cart", JSON.stringify(AppState.cart));
  updateCartCounters();
}

function saveWishlistToStorage() {
  localStorage.setItem("mobilehub_wishlist", JSON.stringify(AppState.wishlist));
  updateWishlistCounters();
}

function formatINR(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

// ==========================================================================
// 3. DOM ELEMENT REFERENCES
// ==========================================================================
const DOM = {
  // Navigation & Search
  header: document.getElementById("header"),
  searchInput: document.getElementById("searchInput"),
  clearSearchBtn: document.getElementById("clearSearchBtn"),
  searchSuggestions: document.getElementById("searchSuggestions"),
  suggestionsList: document.getElementById("suggestionsList"),
  mobileSearchInput: document.getElementById("mobileSearchInput"),
  hamburgerBtn: document.getElementById("hamburgerBtn"),
  drawerCloseBtn: document.getElementById("drawerCloseBtn"),
  mobileDrawer: document.getElementById("mobileDrawer"),
  drawerOverlay: document.getElementById("drawerOverlay"),

  // Counters & Badges
  cartCount: document.getElementById("cartCount"),
  cartBtnTotal: document.getElementById("cartBtnTotal"),
  wishlistCount: document.getElementById("wishlistCount"),
  cartToggleBtn: document.getElementById("cartToggleBtn"),
  wishlistToggleBtn: document.getElementById("wishlistToggleBtn"),

  // Hero Section
  heroPhoneImg: document.getElementById("heroPhoneImg"),
  heroDeviceName: document.getElementById("heroDeviceName"),
  heroDevicePrice: document.getElementById("heroDevicePrice"),
  heroDeviceOriginal: document.getElementById("heroDeviceOriginal"),
  heroDeviceDiscount: document.getElementById("heroDeviceDiscount"),
  heroBadge1: document.getElementById("heroBadge1"),
  heroBadge2: document.getElementById("heroBadge2"),
  heroBadge3: document.getElementById("heroBadge3"),
  heroOrderBtn: document.getElementById("heroOrderBtn"),
  heroSwitchers: document.querySelectorAll(".switcher-pill"),

  // Flash Deals Countdown
  timerHours: document.getElementById("timerHours"),
  timerMins: document.getElementById("timerMins"),
  timerSecs: document.getElementById("timerSecs"),
  couponCopyBtn: document.getElementById("couponCopyBtn"),
  copyAlert: document.getElementById("copyAlert"),
  flashShopNowBtn: document.getElementById("flashShopNowBtn"),
  copyTopPromo: document.getElementById("copyTopPromo"),

  // Catalog Filters & Grid
  filterTabs: document.getElementById("filterTabs"),
  sortSelect: document.getElementById("sortSelect"),
  priceRange: document.getElementById("priceRange"),
  priceRangeVal: document.getElementById("priceRangeVal"),
  productResultsCount: document.getElementById("productResultsCount"),
  resetFiltersBtn: document.getElementById("resetFiltersBtn"),
  productsGrid: document.getElementById("productsGrid"),
  emptyState: document.getElementById("emptyState"),
  clearAllFiltersBtn: document.getElementById("clearAllFiltersBtn"),
  categoryCards: document.querySelectorAll(".category-card"),

  // Cart Drawer Elements
  cartBackdrop: document.getElementById("cartBackdrop"),
  cartDrawer: document.getElementById("cartDrawer"),
  cartCloseBtn: document.getElementById("cartCloseBtn"),
  cartItemCountHeader: document.getElementById("cartItemCountHeader"),
  deliveryProgressText: document.getElementById("deliveryProgressText"),
  deliveryProgressFill: document.getElementById("deliveryProgressFill"),
  cartItemsList: document.getElementById("cartItemsList"),
  cartCouponInput: document.getElementById("cartCouponInput"),
  cartApplyCouponBtn: document.getElementById("cartApplyCouponBtn"),
  couponFeedback: document.getElementById("couponFeedback"),
  cartSubtotal: document.getElementById("cartSubtotal"),
  discountLine: document.getElementById("discountLine"),
  discountCodeName: document.getElementById("discountCodeName"),
  cartDiscount: document.getElementById("cartDiscount"),
  cartDeliveryFee: document.getElementById("cartDeliveryFee"),
  cartGrandTotal: document.getElementById("cartGrandTotal"),
  proceedToCheckoutBtn: document.getElementById("proceedToCheckoutBtn"),
  clearCartBtn: document.getElementById("clearCartBtn"),

  // Wishlist Drawer
  wishlistBackdrop: document.getElementById("wishlistBackdrop"),
  wishlistDrawer: document.getElementById("wishlistDrawer"),
  wishlistCloseBtn: document.getElementById("wishlistCloseBtn"),
  wishlistCountHeader: document.getElementById("wishlistCountHeader"),
  wishlistItemsList: document.getElementById("wishlistItemsList"),
  moveAllWishlistToCartBtn: document.getElementById("moveAllWishlistToCartBtn"),

  // Quick View Modal
  quickViewBackdrop: document.getElementById("quickViewBackdrop"),
  quickViewModal: document.getElementById("quickViewModal"),
  quickViewCloseBtn: document.getElementById("quickViewCloseBtn"),
  quickViewContent: document.getElementById("quickViewContent"),

  // Checkout Simulation Modal
  checkoutBackdrop: document.getElementById("checkoutBackdrop"),
  checkoutModal: document.getElementById("checkoutModal"),
  checkoutCloseBtn: document.getElementById("checkoutCloseBtn"),
  checkoutFormView: document.getElementById("checkoutFormView"),
  checkoutSuccessView: document.getElementById("checkoutSuccessView"),
  checkoutForm: document.getElementById("checkoutForm"),
  checkoutSubtotal: document.getElementById("checkoutSubtotal"),
  checkoutDiscountRow: document.getElementById("checkoutDiscountRow"),
  checkoutDiscountVal: document.getElementById("checkoutDiscountVal"),
  checkoutFinalAmount: document.getElementById("checkoutFinalAmount"),
  receiptOrderId: document.getElementById("receiptOrderId"),
  receiptDeliveryDate: document.getElementById("receiptDeliveryDate"),
  receiptPaymentMode: document.getElementById("receiptPaymentMode"),
  receiptAmount: document.getElementById("receiptAmount"),
  receiptCustomerInfo: document.getElementById("receiptCustomerInfo"),
  continueShoppingBtn: document.getElementById("continueShoppingBtn"),
  printReceiptBtn: document.getElementById("printReceiptBtn"),

  // Accessories Promo Button
  viewAccessoriesBtn: document.getElementById("viewAccessoriesBtn"),

  // FAQ Accordion
  faqAccordion: document.getElementById("faqAccordion"),

  // Newsletter
  newsletterForm: document.getElementById("newsletterForm"),
  newsletterEmail: document.getElementById("newsletterEmail"),

  // Back To Top & Toast
  backToTopBtn: document.getElementById("backToTopBtn"),
  toastContainer: document.getElementById("toastContainer")
};

// ==========================================================================
// 4. TOAST NOTIFICATION SYSTEM
// ==========================================================================
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  let iconHtml = '<i class="fa-solid fa-circle-check toast-icon"></i>';
  if (type === "error") {
    iconHtml = '<i class="fa-solid fa-circle-exclamation toast-icon"></i>';
  } else if (type === "info") {
    iconHtml = '<i class="fa-solid fa-circle-info toast-icon"></i>';
  }

  toast.innerHTML = `
    ${iconHtml}
    <div class="toast-message">${message}</div>
  `;

  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("hiding");
    toast.addEventListener("animationend", () => toast.remove());
  }, 3200);
}

// ==========================================================================
// 5. PRODUCTS RENDERING & FILTERING
// ==========================================================================
function filterAndSortProducts() {
  let list = [...AppState.products];

  // 1. Category filter
  if (AppState.activeFilter !== "all") {
    list = list.filter(p => p.brand === AppState.activeFilter);
  }

  // 2. Search query
  if (AppState.searchQuery.trim() !== "") {
    const q = AppState.searchQuery.toLowerCase().trim();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.specs.some(s => s.toLowerCase().includes(q))
    );
  }

  // 3. Price Range
  list = list.filter(p => p.price <= AppState.maxPrice);

  // 4. Sorting
  switch (AppState.sortBy) {
    case "price-low":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      list.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      list.sort((a, b) => b.rating - a.rating);
      break;
    case "discount":
      list.sort((a, b) => b.discount - a.discount);
      break;
    case "featured":
    default:
      // Keep initial curated order
      break;
  }

  AppState.filteredProducts = list;
  renderProductGrid();
}

function renderProductGrid() {
  const list = AppState.filteredProducts;
  DOM.productResultsCount.textContent = `Showing ${list.length} ${list.length === 1 ? "device" : "devices"}`;

  // Check if any filters are modified from defaults
  const isFiltered = AppState.activeFilter !== "all" || 
                     AppState.searchQuery !== "" || 
                     AppState.maxPrice < 150000 || 
                     AppState.sortBy !== "featured";
  DOM.resetFiltersBtn.style.display = isFiltered ? "inline-flex" : "none";

  if (list.length === 0) {
    DOM.productsGrid.innerHTML = "";
    DOM.emptyState.style.display = "block";
    return;
  }

  DOM.emptyState.style.display = "none";

  DOM.productsGrid.innerHTML = list.map(product => {
    const isWishlisted = AppState.wishlist.includes(product.id);
    const emiPerMonth = Math.round(product.price / 24);

    return `
      <article class="product-card" data-id="${product.id}">
        <!-- Image & Badges -->
        <div class="card-image-wrap">
          <div class="card-badges">
            <span class="badge-discount">${product.discount}% OFF</span>
            ${product.tag ? `<span class="badge-featured">${product.tag}</span>` : ""}
          </div>
          
          <button 
            class="card-wishlist-btn ${isWishlisted ? "active" : ""}" 
            data-id="${product.id}" 
            title="${isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}"
            aria-label="Wishlist toggle"
          >
            <i class="fa-regular fa-heart"></i>
          </button>

          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="card-img" 
            loading="lazy"
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80';"
          >
        </div>

        <!-- Body Details -->
        <div class="card-body">
          <div class="card-meta-row">
            <span class="card-brand">${product.brand}</span>
            <div class="card-rating">
              <i class="fa-solid fa-star"></i>
              <span>${product.rating}</span>
              <span class="card-rating-count">(${product.ratingCount})</span>
            </div>
          </div>

          <h3 class="card-title" data-view-id="${product.id}" title="Click to view details">${product.name}</h3>

          <div class="card-specs-bar">
            ${product.specs.slice(0, 3).map(s => `<span class="spec-chip">${s}</span>`).join("")}
          </div>

          <!-- Price & Actions -->
          <div class="card-price-box">
            <div class="card-price-row">
              <span class="current-price">${formatINR(product.price)}</span>
              <span class="original-price">${formatINR(product.originalPrice)}</span>
            </div>
            <div class="card-emi-note">
              <i class="fa-solid fa-credit-card"></i> No-Cost EMI from ${formatINR(emiPerMonth)}/mo
            </div>
          </div>

          <div class="card-actions">
            <button class="card-cart-btn" data-cart-id="${product.id}">
              <i class="fa-solid fa-bag-shopping"></i> Add to Cart
            </button>
            <button class="card-view-btn" data-view-id="${product.id}" title="Quick View & Specs">
              <i class="fa-regular fa-eye"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  attachProductCardListeners();
}

function attachProductCardListeners() {
  // Wishlist clicks
  DOM.productsGrid.querySelectorAll(".card-wishlist-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      toggleWishlist(id);
    });
  });

  // Add to cart buttons
  DOM.productsGrid.querySelectorAll(".card-cart-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.cartId;
      addToCart(id);
    });
  });

  // Quick view triggers
  DOM.productsGrid.querySelectorAll("[data-view-id]").forEach(el => {
    el.addEventListener("click", () => {
      const id = el.dataset.viewId;
      openQuickView(id);
    });
  });
}

// ==========================================================================
// 6. SHOPPING CART FUNCTIONALITY
// ==========================================================================
function addToCart(productId, selectedStorage = null, selectedColor = null, quantity = 1) {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;

  // Determine variant storage & color defaults
  const storageLabel = selectedStorage || (product.storageVariants && product.storageVariants[0] ? product.storageVariants[0].label : "Default");
  const colorName = selectedColor || (product.colors && product.colors[0] ? product.colors[0].name : "Standard");

  // Determine price including variant addition
  let itemPrice = product.price;
  if (product.storageVariants) {
    const variantObj = product.storageVariants.find(v => v.label === storageLabel);
    if (variantObj) {
      itemPrice += variantObj.priceAdd;
    }
  }

  // Check if item with identical variant exists in cart
  const existingIndex = AppState.cart.findIndex(
    item => item.productId === productId && item.storage === storageLabel && item.color === colorName
  );

  if (existingIndex > -1) {
    AppState.cart[existingIndex].quantity += quantity;
  } else {
    AppState.cart.push({
      cartItemId: `${productId}-${storageLabel}-${colorName}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      brand: product.brand,
      image: product.image,
      price: itemPrice,
      originalPrice: product.originalPrice,
      storage: storageLabel,
      color: colorName,
      quantity: quantity
    });
  }

  saveCartToStorage();
  renderCartDrawer();
  showToast(`Added <strong>${product.name}</strong> to your shopping cart!`, "success");
}

function updateCartItemQuantity(cartItemId, delta) {
  const index = AppState.cart.findIndex(item => item.cartItemId === cartItemId);
  if (index === -1) return;

  AppState.cart[index].quantity += delta;
  if (AppState.cart[index].quantity <= 0) {
    AppState.cart.splice(index, 1);
    showToast("Item removed from cart", "info");
  }

  saveCartToStorage();
  renderCartDrawer();
}

function removeCartItem(cartItemId) {
  AppState.cart = AppState.cart.filter(item => item.cartItemId !== cartItemId);
  saveCartToStorage();
  renderCartDrawer();
  showToast("Item removed from cart", "info");
}

function clearCart() {
  if (AppState.cart.length === 0) return;
  if (confirm("Are you sure you want to empty your entire shopping cart?")) {
    AppState.cart = [];
    AppState.appliedCoupon = null;
    localStorage.removeItem("mobilehub_coupon");
    saveCartToStorage();
    renderCartDrawer();
    showToast("Your cart has been cleared", "info");
  }
}

function calculateCartTotals() {
  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  let discountAmount = 0;
  if (AppState.appliedCoupon && subtotal > 0) {
    if (AppState.appliedCoupon.percent) {
      discountAmount = Math.round((subtotal * AppState.appliedCoupon.percent) / 100);
    } else if (AppState.appliedCoupon.flat) {
      discountAmount = Math.min(AppState.appliedCoupon.flat, subtotal);
    }
  }

  // Free delivery threshold: ₹999
  const isFreeDelivery = subtotal >= 999 || subtotal === 0;
  const deliveryFee = isFreeDelivery ? 0 : 199;
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  return { subtotal, discountAmount, isFreeDelivery, deliveryFee, grandTotal };
}

function updateCartCounters() {
  const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const { grandTotal } = calculateCartTotals();

  DOM.cartCount.textContent = totalCount;
  DOM.cartItemCountHeader.textContent = totalCount;
  DOM.cartBtnTotal.textContent = formatINR(grandTotal);
}

function renderCartDrawer() {
  updateCartCounters();
  const { subtotal, discountAmount, isFreeDelivery, deliveryFee, grandTotal } = calculateCartTotals();

  // Delivery progress bar calculation
  const freeThreshold = 999;
  const progressPercent = Math.min(100, Math.round((subtotal / freeThreshold) * 100));
  DOM.deliveryProgressFill.style.width = `${progressPercent}%`;

  if (subtotal >= freeThreshold) {
    DOM.deliveryProgressText.innerHTML = '<i class="fa-solid fa-truck-fast text-success"></i> Free Express Delivery Unlocked!';
  } else {
    const diff = freeThreshold - subtotal;
    DOM.deliveryProgressText.innerHTML = `<i class="fa-solid fa-truck-fast"></i> Add ${formatINR(diff)} more for FREE Express Delivery`;
  }

  // Render items list
  if (AppState.cart.length === 0) {
    DOM.cartItemsList.innerHTML = `
      <div class="cart-empty-view">
        <i class="fa-solid fa-bag-shopping"></i>
        <h4>Your Cart is Empty</h4>
        <p>Explore our premium flagship smartphones and accessories to find your next daily companion.</p>
        <button class="btn btn-primary" onclick="closeCart(); document.getElementById('products').scrollIntoView({behavior:'smooth'});">
          <i class="fa-solid fa-sparkles"></i> Start Shopping
        </button>
      </div>
    `;
    DOM.proceedToCheckoutBtn.disabled = true;
    DOM.proceedToCheckoutBtn.style.opacity = "0.5";
  } else {
    DOM.proceedToCheckoutBtn.disabled = false;
    DOM.proceedToCheckoutBtn.style.opacity = "1";

    DOM.cartItemsList.innerHTML = AppState.cart.map(item => `
      <div class="cart-item-card">
        <button class="cart-item-remove" onclick="removeCartItem('${item.cartItemId}')" title="Remove item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.name}</h4>
          <div class="cart-item-variant">${item.storage} • ${item.color}</div>
          <div class="cart-item-bottom">
            <span class="cart-item-price">${formatINR(item.price * item.quantity)}</span>
            <div class="cart-qty-controls">
              <button class="qty-btn" onclick="updateCartItemQuantity('${item.cartItemId}', -1)">-</button>
              <span class="qty-num">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartItemQuantity('${item.cartItemId}', 1)">+</button>
            </div>
          </div>
        </div>
      </div>
    `).join("");
  }

  // Summary lines
  DOM.cartSubtotal.textContent = formatINR(subtotal);

  if (discountAmount > 0) {
    DOM.discountLine.style.display = "flex";
    DOM.discountCodeName.textContent = AppState.appliedCoupon ? AppState.appliedCoupon.code : "";
    DOM.cartDiscount.textContent = `-${formatINR(discountAmount)}`;
  } else {
    DOM.discountLine.style.display = "none";
  }

  DOM.cartDeliveryFee.textContent = isFreeDelivery ? "FREE" : formatINR(deliveryFee);
  DOM.cartGrandTotal.textContent = formatINR(grandTotal);
}

function openCart() {
  renderCartDrawer();
  DOM.cartDrawer.classList.add("active");
  DOM.cartBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  DOM.cartDrawer.classList.remove("active");
  DOM.cartBackdrop.classList.remove("active");
  document.body.style.overflow = "";
}

// Coupon validation
function applyCouponCode() {
  const code = DOM.cartCouponInput.value.trim().toUpperCase();
  if (!code) {
    DOM.couponFeedback.className = "coupon-feedback error";
    DOM.couponFeedback.textContent = "Please enter a coupon code.";
    return;
  }

  if (code === "MOBHUB10") {
    AppState.appliedCoupon = { code: "MOBHUB10", percent: 10 };
    localStorage.setItem("mobilehub_coupon", JSON.stringify(AppState.appliedCoupon));
    DOM.couponFeedback.className = "coupon-feedback success";
    DOM.couponFeedback.textContent = "Coupon 'MOBHUB10' applied! 10% discount added.";
    showToast("🎉 Coupon applied: 10% Instant Discount!", "success");
    renderCartDrawer();
  } else if (code === "SAVE500") {
    AppState.appliedCoupon = { code: "SAVE500", flat: 500 };
    localStorage.setItem("mobilehub_coupon", JSON.stringify(AppState.appliedCoupon));
    DOM.couponFeedback.className = "coupon-feedback success";
    DOM.couponFeedback.textContent = "Coupon 'SAVE500' applied! ₹500 flat discount added.";
    showToast("🎉 Coupon applied: ₹500 Flat Discount!", "success");
    renderCartDrawer();
  } else if (code === "WELCOME") {
    AppState.appliedCoupon = { code: "WELCOME", flat: 1000 };
    localStorage.setItem("mobilehub_coupon", JSON.stringify(AppState.appliedCoupon));
    DOM.couponFeedback.className = "coupon-feedback success";
    DOM.couponFeedback.textContent = "VIP Code applied! ₹1,000 flat discount added.";
    showToast("🎉 VIP Coupon applied: ₹1,000 Flat Discount!", "success");
    renderCartDrawer();
  } else {
    DOM.couponFeedback.className = "coupon-feedback error";
    DOM.couponFeedback.textContent = "Invalid or expired coupon code. Try 'MOBHUB10'.";
  }
}

// ==========================================================================
// 7. WISHLIST FUNCTIONALITY
// ==========================================================================
function toggleWishlist(productId) {
  const index = AppState.wishlist.indexOf(productId);
  const product = AppState.products.find(p => p.id === productId);

  if (index > -1) {
    AppState.wishlist.splice(index, 1);
    showToast(`Removed <strong>${product ? product.name : "Device"}</strong> from Wishlist`, "info");
  } else {
    AppState.wishlist.push(productId);
    showToast(`Saved <strong>${product ? product.name : "Device"}</strong> to your Wishlist!`, "success");
  }

  saveWishlistToStorage();
  renderProductGrid();
  renderWishlistDrawer();
}

function updateWishlistCounters() {
  const count = AppState.wishlist.length;
  DOM.wishlistCount.textContent = count;
  DOM.wishlistCountHeader.textContent = count;
}

function renderWishlistDrawer() {
  updateWishlistCounters();
  const wishlistedProducts = AppState.products.filter(p => AppState.wishlist.includes(p.id));

  if (wishlistedProducts.length === 0) {
    DOM.wishlistItemsList.innerHTML = `
      <div class="cart-empty-view">
        <i class="fa-regular fa-heart"></i>
        <h4>Your Wishlist is Empty</h4>
        <p>Save items you are interested in by tapping the heart icon on any smartphone.</p>
        <button class="btn btn-outline" onclick="closeWishlist(); document.getElementById('products').scrollIntoView({behavior:'smooth'});">
          Explore Phones
        </button>
      </div>
    `;
    DOM.moveAllWishlistToCartBtn.style.display = "none";
  } else {
    DOM.moveAllWishlistToCartBtn.style.display = "block";
    DOM.wishlistItemsList.innerHTML = wishlistedProducts.map(product => `
      <div class="cart-item-card">
        <button class="cart-item-remove" onclick="toggleWishlist('${product.id}')" title="Remove from wishlist">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <img src="${product.image}" alt="${product.name}" class="cart-item-thumb">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${product.name}</h4>
          <div class="cart-item-variant">${product.brand.toUpperCase()} • ${product.rating}★</div>
          <div class="cart-item-bottom">
            <span class="cart-item-price">${formatINR(product.price)}</span>
            <button class="btn btn-primary btn-sm" onclick="addToCart('${product.id}'); toggleWishlist('${product.id}');" style="padding:4px 10px; font-size:0.75rem;">
              <i class="fa-solid fa-bag-shopping"></i> Move
            </button>
          </div>
        </div>
      </div>
    `).join("");
  }
}

function moveAllWishlistToCart() {
  AppState.wishlist.forEach(id => {
    addToCart(id);
  });
  AppState.wishlist = [];
  saveWishlistToStorage();
  renderWishlistDrawer();
  closeWishlist();
  openCart();
  showToast("All wishlist items moved to your Cart!", "success");
}

function openWishlist() {
  renderWishlistDrawer();
  DOM.wishlistDrawer.classList.add("active");
  DOM.wishlistBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeWishlist() {
  DOM.wishlistDrawer.classList.remove("active");
  DOM.wishlistBackdrop.classList.remove("active");
  document.body.style.overflow = "";
}

// ==========================================================================
// 8. PRODUCT DETAILS QUICK VIEW MODAL
// ==========================================================================
let quickViewActiveProduct = null;
let quickViewSelectedStorage = null;
let quickViewSelectedColor = null;

function openQuickView(productId) {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;

  quickViewActiveProduct = product;
  quickViewSelectedStorage = product.storageVariants && product.storageVariants[0] ? product.storageVariants[0].label : "Standard";
  quickViewSelectedColor = product.colors && product.colors[0] ? product.colors[0].name : "Standard";

  renderQuickViewModal();

  DOM.quickViewModal.classList.add("active");
  DOM.quickViewBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeQuickView() {
  DOM.quickViewModal.classList.remove("active");
  DOM.quickViewBackdrop.classList.remove("active");
  document.body.style.overflow = "";
}

function renderQuickViewModal() {
  const p = quickViewActiveProduct;
  if (!p) return;

  // Calculate price based on selected storage variant
  let currentPrice = p.price;
  if (p.storageVariants) {
    const v = p.storageVariants.find(sv => sv.label === quickViewSelectedStorage);
    if (v) currentPrice += v.priceAdd;
  }
  const emi = Math.round(currentPrice / 24);

  DOM.quickViewContent.innerHTML = `
    <!-- Left: Gallery & Key Hardware Highlights -->
    <div class="modal-gallery-col">
      <div class="modal-main-img-box">
        <img 
          src="${p.image}" 
          alt="${p.name}" 
          class="modal-main-img" 
          id="modalMainImg"
        >
      </div>
      <div class="modal-specs-pills">
        <div class="modal-spec-chip">
          <i class="fa-solid fa-microchip"></i>
          <span>${p.detailedSpecs.processor.split("(")[0]}</span>
        </div>
        <div class="modal-spec-chip">
          <i class="fa-solid fa-camera"></i>
          <span>${p.detailedSpecs.rearCamera.split("+")[0]}</span>
        </div>
        <div class="modal-spec-chip">
          <i class="fa-solid fa-battery-full"></i>
          <span>${p.detailedSpecs.battery.split("with")[0]}</span>
        </div>
        <div class="modal-spec-chip">
          <i class="fa-solid fa-shield-halved"></i>
          <span>1 Year Official Warranty</span>
        </div>
      </div>
    </div>

    <!-- Right: Product Configuration & Actions -->
    <div class="modal-info-col">
      <span class="modal-brand-tag">${p.brand} Official</span>
      <h2 class="modal-phone-title" id="modalPhoneTitle">${p.name}</h2>
      
      <div class="modal-rating-row">
        <div class="stars-row">
          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        </div>
        <span class="text-accent font-weight-bold">${p.rating} / 5.0</span>
        <span class="text-muted">(${p.ratingCount} Verified Reviews)</span>
      </div>

      <div class="modal-pricing-box">
        <div class="modal-price-row">
          <span class="modal-current-price" id="modalPriceDisplay">${formatINR(currentPrice)}</span>
          <span class="modal-original-price">${formatINR(p.originalPrice)}</span>
          <span class="modal-discount-pill">${p.discount}% OFF</span>
        </div>
        <div class="modal-emi-text">
          <i class="fa-solid fa-credit-card"></i> Instant ₹5,000 bank discount + No-Cost EMI starting at ${formatINR(emi)}/month
        </div>
      </div>

      <!-- Storage Selector -->
      ${p.storageVariants ? `
        <div class="variant-block">
          <label class="variant-label">Choose Storage Variant:</label>
          <div class="storage-pills-row">
            ${p.storageVariants.map(sv => `
              <button 
                class="storage-pill ${sv.label === quickViewSelectedStorage ? "active" : ""}" 
                onclick="setQuickViewStorage('${sv.label}')"
              >
                ${sv.label} ${sv.priceAdd > 0 ? `(+${formatINR(sv.priceAdd)})` : ""}
              </button>
            `).join("")}
          </div>
        </div>
      ` : ""}

      <!-- Color Swatches -->
      ${p.colors ? `
        <div class="variant-block">
          <label class="variant-label">Color: <strong class="text-white" id="modalColorLabel">${quickViewSelectedColor}</strong></label>
          <div class="color-swatches-row">
            ${p.colors.map(c => `
              <button 
                class="color-swatch ${c.name === quickViewSelectedColor ? "active" : ""}" 
                style="background-color: ${c.hex};"
                title="${c.name}"
                onclick="setQuickViewColor('${c.name}')"
              ></button>
            `).join("")}
          </div>
        </div>
      ` : ""}

      <!-- Pincode Checker -->
      <div class="variant-block">
        <label class="variant-label">Check Delivery & COD:</label>
        <div class="pincode-checker">
          <input type="text" id="modalPincodeInput" placeholder="Enter 6-digit PIN Code" maxlength="6">
          <button type="button" onclick="checkPincodeDelivery()">Check</button>
        </div>
        <div class="pincode-feedback" id="modalPincodeFeedback"></div>
      </div>

      <!-- Actions -->
      <div class="modal-actions-row">
        <button class="btn btn-primary" onclick="quickViewAddToCart()">
          <i class="fa-solid fa-cart-plus"></i> Add to Cart
        </button>
        <button class="btn btn-outline" onclick="quickViewBuyNow()">
          <i class="fa-solid fa-bolt-lightning"></i> Buy Now
        </button>
      </div>
    </div>
  `;
}

function setQuickViewStorage(storageLabel) {
  quickViewSelectedStorage = storageLabel;
  renderQuickViewModal();
}

function setQuickViewColor(colorName) {
  quickViewSelectedColor = colorName;
  const labelEl = document.getElementById("modalColorLabel");
  if (labelEl) labelEl.textContent = colorName;
  document.querySelectorAll(".color-swatch").forEach(sw => {
    sw.classList.toggle("active", sw.title === colorName);
  });
}

function checkPincodeDelivery() {
  const pinInput = document.getElementById("modalPincodeInput");
  const feedback = document.getElementById("modalPincodeFeedback");
  const val = pinInput ? pinInput.value.trim() : "";

  if (val.length === 6 && /^\d+$/.test(val)) {
    feedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> Express 24-48h Delivery and COD available for <strong>${val}</strong>!`;
    feedback.style.color = "var(--success)";
  } else {
    feedback.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Please enter a valid 6-digit Indian PIN code.`;
    feedback.style.color = "var(--danger)";
  }
}

function quickViewAddToCart() {
  if (!quickViewActiveProduct) return;
  addToCart(quickViewActiveProduct.id, quickViewSelectedStorage, quickViewSelectedColor, 1);
  closeQuickView();
  openCart();
}

function quickViewBuyNow() {
  if (!quickViewActiveProduct) return;
  addToCart(quickViewActiveProduct.id, quickViewSelectedStorage, quickViewSelectedColor, 1);
  closeQuickView();
  openCheckout();
}

// ==========================================================================
// 9. CHECKOUT SIMULATION SYSTEM
// ==========================================================================
function openCheckout() {
  if (AppState.cart.length === 0) {
    showToast("Your cart is empty! Add a phone first.", "error");
    return;
  }

  closeCart();
  const { subtotal, discountAmount, grandTotal } = calculateCartTotals();

  DOM.checkoutSubtotal.textContent = formatINR(subtotal);
  if (discountAmount > 0) {
    DOM.checkoutDiscountRow.style.display = "flex";
    DOM.checkoutDiscountVal.textContent = `-${formatINR(discountAmount)}`;
  } else {
    DOM.checkoutDiscountRow.style.display = "none";
  }
  DOM.checkoutFinalAmount.textContent = formatINR(grandTotal);

  DOM.checkoutFormView.style.display = "block";
  DOM.checkoutSuccessView.style.display = "none";

  DOM.checkoutModal.classList.add("active");
  DOM.checkoutBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckout() {
  DOM.checkoutModal.classList.remove("active");
  DOM.checkoutBackdrop.classList.remove("active");
  document.body.style.overflow = "";
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const email = document.getElementById("custEmail").value.trim();
  const address = document.getElementById("custAddress").value.trim();
  const city = document.getElementById("custCity").value.trim();
  const pincode = document.getElementById("custPincode").value.trim();
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

  const submitBtn = document.getElementById("submitOrderBtn");
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Secure Payment...';

  const { grandTotal } = calculateCartTotals();
  const randomOrderNum = "MH-" + Math.floor(100000 + Math.random() * 900000);

  // Simulated gateway delay
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fa-solid fa-lock"></i> Confirm & Place Order';

    // Populate order confirmation view
    DOM.receiptOrderId.textContent = randomOrderNum;
    DOM.receiptDeliveryDate.textContent = "Estimated Delivery: Within 24-48 Hours";
    
    let payText = "Instant UPI (Confirmed)";
    if (paymentMethod === "card") payText = "Credit Card (No-Cost EMI Active)";
    if (paymentMethod === "cod") payText = "Cash on Delivery (Pay upon delivery)";
    DOM.receiptPaymentMode.textContent = payText;
    
    DOM.receiptAmount.textContent = formatINR(grandTotal);
    DOM.receiptCustomerInfo.textContent = `${name}, ${address}, ${city} - ${pincode} (Ph: ${phone})`;

    DOM.checkoutFormView.style.display = "none";
    DOM.checkoutSuccessView.style.display = "block";

    // Clear cart after successful order
    AppState.cart = [];
    AppState.appliedCoupon = null;
    localStorage.removeItem("mobilehub_coupon");
    saveCartToStorage();

    showToast(`🎉 Order ${randomOrderNum} placed successfully!`, "success");
  }, 1200);
}

// ==========================================================================
// 10. HERO INTERACTIVE SWITCHER
// ==========================================================================
function setHeroDevice(key) {
  const data = HERO_SHOWCASE[key];
  if (!data) return;

  AppState.activeHeroDevice = key;

  // Update tabs
  DOM.heroSwitchers.forEach(tab => {
    tab.classList.toggle("active", tab.dataset.hero === key);
  });

  // Fade out image smoothly and fade back in
  DOM.heroPhoneImg.style.opacity = "0";
  setTimeout(() => {
    DOM.heroPhoneImg.src = data.image;
    DOM.heroPhoneImg.style.opacity = "1";
  }, 150);

  DOM.heroDeviceName.textContent = data.name;
  DOM.heroDevicePrice.textContent = data.price;
  DOM.heroDeviceOriginal.textContent = data.original;
  DOM.heroDeviceDiscount.textContent = data.discount;

  // Badges
  DOM.heroBadge1.querySelector(".tb-title").textContent = data.badge1.title;
  DOM.heroBadge1.querySelector(".tb-sub").textContent = data.badge1.sub;

  DOM.heroBadge2.querySelector(".tb-title").textContent = data.badge2.title;
  DOM.heroBadge2.querySelector(".tb-sub").textContent = data.badge2.sub;

  DOM.heroBadge3.querySelector(".tb-title").textContent = data.badge3.title;
  DOM.heroBadge3.querySelector(".tb-sub").textContent = data.badge3.sub;

  // Order button click handler
  DOM.heroOrderBtn.onclick = () => openQuickView(data.productId);
}

// ==========================================================================
// 11. FLASH SALE COUNTDOWN TIMER
// ==========================================================================
function startFlashCountdown() {
  // Set sale target to midnight or 8 hours from now
  const now = new Date();
  let target = new Date();
  target.setHours(23, 59, 59, 999);

  if (target.getTime() <= now.getTime()) {
    target.setDate(target.getDate() + 1);
  }

  function update() {
    const current = new Date().getTime();
    const diff = target.getTime() - current;

    if (diff <= 0) {
      target.setDate(target.getDate() + 1);
      return;
    }

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    DOM.timerHours.textContent = String(hours).padStart(2, "0");
    DOM.timerMins.textContent = String(mins).padStart(2, "0");
    DOM.timerSecs.textContent = String(secs).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

// One-click coupon copy
function copyFlashCoupon(code = "MOBHUB10") {
  navigator.clipboard.writeText(code).then(() => {
    DOM.copyAlert.classList.add("show");
    showToast(`Copied coupon code: <strong>${code}</strong>!`, "info");
    setTimeout(() => DOM.copyAlert.classList.remove("show"), 2500);
  }).catch(() => {
    showToast(`Coupon code is: ${code}`, "info");
  });
}

// ==========================================================================
// 12. LIVE SEARCH & SUGGESTIONS POPUP
// ==========================================================================
function handleSearchInput(e) {
  const query = e.target.value;
  AppState.searchQuery = query;

  if (query.trim().length > 0) {
    DOM.clearSearchBtn.style.display = "block";
    renderSearchSuggestions(query);
  } else {
    DOM.clearSearchBtn.style.display = "none";
    DOM.searchSuggestions.classList.remove("active");
  }

  filterAndSortProducts();
}

function renderSearchSuggestions(query) {
  const q = query.toLowerCase().trim();
  const matches = AppState.products.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.brand.toLowerCase().includes(q)
  ).slice(0, 5);

  if (matches.length === 0) {
    DOM.suggestionsList.innerHTML = `<div class="suggestion-empty">No smartphones found for "${query}"</div>`;
  } else {
    DOM.suggestionsList.innerHTML = matches.map(p => `
      <div class="suggestion-item" onclick="openQuickView('${p.id}'); DOM.searchSuggestions.classList.remove('active');">
        <img src="${p.image}" alt="${p.name}" class="suggestion-thumb">
        <div class="suggestion-details">
          <div class="suggestion-title">${p.name}</div>
          <div class="suggestion-meta">
            <span class="suggestion-price">${formatINR(p.price)}</span>
            <span>•</span>
            <span>${p.rating}★ (${p.ratingCount})</span>
          </div>
        </div>
      </div>
    `).join("");
  }

  DOM.searchSuggestions.classList.add("active");
}

function clearSearch() {
  DOM.searchInput.value = "";
  DOM.clearSearchBtn.style.display = "none";
  DOM.searchSuggestions.classList.remove("active");
  AppState.searchQuery = "";
  filterAndSortProducts();
}

// ==========================================================================
// 13. FAQ ACCORDION HANDLERS
// ==========================================================================
function setupFaqAccordion() {
  const faqItems = DOM.faqAccordion.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all others
      faqItems.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });

      // Toggle current
      if (!isActive) {
        item.classList.add("active");
        questionBtn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

// ==========================================================================
// 14. EVENT LISTENERS INITIALIZATION
// ==========================================================================
function initEventListeners() {
  // Window scroll for sticky header and Back to Top
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      DOM.header.classList.add("scrolled");
    } else {
      DOM.header.classList.remove("scrolled");
    }

    if (window.scrollY > 400) {
      DOM.backToTopBtn.classList.add("visible");
    } else {
      DOM.backToTopBtn.classList.remove("visible");
    }
  });

  DOM.backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Live Search
  DOM.searchInput.addEventListener("input", handleSearchInput);
  DOM.clearSearchBtn.addEventListener("click", clearSearch);

  // Close search suggestions on click outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".header-search")) {
      DOM.searchSuggestions.classList.remove("active");
    }
  });

  // Mobile Drawer Toggle
  DOM.hamburgerBtn.addEventListener("click", () => {
    DOM.mobileDrawer.classList.add("active");
    DOM.drawerOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  function closeMobileDrawer() {
    DOM.mobileDrawer.classList.remove("active");
    DOM.drawerOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  DOM.drawerCloseBtn.addEventListener("click", closeMobileDrawer);
  DOM.drawerOverlay.addEventListener("click", closeMobileDrawer);
  document.querySelectorAll(".drawer-link").forEach(link => {
    link.addEventListener("click", closeMobileDrawer);
  });

  // Mobile Search Sync
  DOM.mobileSearchInput.addEventListener("input", (e) => {
    AppState.searchQuery = e.target.value;
    filterAndSortProducts();
  });

  // Hero Switchers
  DOM.heroSwitchers.forEach(pill => {
    pill.addEventListener("click", () => {
      setHeroDevice(pill.dataset.hero);
    });
  });

  // Flash Deals Coupon Copy
  DOM.couponCopyBtn.addEventListener("click", () => copyFlashCoupon("MOBHUB10"));
  DOM.copyTopPromo.addEventListener("click", () => copyFlashCoupon("MOBHUB10"));
  DOM.flashShopNowBtn.addEventListener("click", () => {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  });

  // Category Grid Cards Click -> Filter
  DOM.categoryCards.forEach(card => {
    card.addEventListener("click", () => {
      const cat = card.dataset.category;
      setCategoryFilter(cat);
      document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    });
  });

  // Filter Tabs
  DOM.filterTabs.querySelectorAll(".filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      setCategoryFilter(tab.dataset.filter);
    });
  });

  function setCategoryFilter(filterName) {
    AppState.activeFilter = filterName;
    DOM.filterTabs.querySelectorAll(".filter-tab").forEach(t => {
      t.classList.toggle("active", t.dataset.filter === filterName);
    });
    filterAndSortProducts();
  }

  // Sort Select
  DOM.sortSelect.addEventListener("change", (e) => {
    AppState.sortBy = e.target.value;
    filterAndSortProducts();
  });

  // Price Range
  DOM.priceRange.addEventListener("input", (e) => {
    const val = Number(e.target.value);
    AppState.maxPrice = val;
    DOM.priceRangeVal.textContent = formatINR(val);
    filterAndSortProducts();
  });

  // Reset Filters
  function resetAllFilters() {
    AppState.activeFilter = "all";
    AppState.searchQuery = "";
    AppState.maxPrice = 150000;
    AppState.sortBy = "featured";

    DOM.searchInput.value = "";
    DOM.mobileSearchInput.value = "";
    DOM.priceRange.value = 150000;
    DOM.priceRangeVal.textContent = formatINR(150000);
    DOM.sortSelect.value = "featured";
    DOM.filterTabs.querySelectorAll(".filter-tab").forEach(t => {
      t.classList.toggle("active", t.dataset.filter === "all");
    });

    filterAndSortProducts();
    showToast("Filters reset to default", "info");
  }

  DOM.resetFiltersBtn.addEventListener("click", resetAllFilters);
  DOM.clearAllFiltersBtn.addEventListener("click", resetAllFilters);

  // Accessories Banner CTA
  DOM.viewAccessoriesBtn.addEventListener("click", () => {
    setCategoryFilter("accessories");
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  });

  // Footer Filter Links
  document.querySelectorAll("[data-footer-filter]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      setCategoryFilter(link.dataset.footerFilter);
      document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    });
  });

  // Cart Drawer open/close
  DOM.cartToggleBtn.addEventListener("click", openCart);
  DOM.cartCloseBtn.addEventListener("click", closeCart);
  DOM.cartBackdrop.addEventListener("click", closeCart);
  DOM.clearCartBtn.addEventListener("click", clearCart);
  DOM.cartApplyCouponBtn.addEventListener("click", applyCouponCode);
  DOM.proceedToCheckoutBtn.addEventListener("click", openCheckout);

  // Wishlist Drawer open/close
  DOM.wishlistToggleBtn.addEventListener("click", openWishlist);
  DOM.wishlistCloseBtn.addEventListener("click", closeWishlist);
  DOM.wishlistBackdrop.addEventListener("click", closeWishlist);
  DOM.moveAllWishlistToCartBtn.addEventListener("click", moveAllWishlistToCart);

  // Quick View Modal
  DOM.quickViewCloseBtn.addEventListener("click", closeQuickView);
  DOM.quickViewBackdrop.addEventListener("click", closeQuickView);

  // Checkout Modal
  DOM.checkoutCloseBtn.addEventListener("click", closeCheckout);
  DOM.checkoutBackdrop.addEventListener("click", closeCheckout);
  DOM.checkoutForm.addEventListener("submit", handleCheckoutSubmit);
  DOM.continueShoppingBtn.addEventListener("click", () => {
    closeCheckout();
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  });
  DOM.printReceiptBtn.addEventListener("click", () => {
    window.print();
  });

  // Newsletter Form
  DOM.newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = DOM.newsletterEmail.value.trim();
    if (email) {
      showToast(`🎉 Welcome to VIP Club! Your ₹1,000 voucher code is <strong>WELCOME</strong>. Check your email ${email}!`, "success");
      DOM.newsletterEmail.value = "";
    }
  });

  // Escape key closes modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCart();
      closeWishlist();
      closeQuickView();
      closeCheckout();
      closeMobileDrawer();
    }
  });
}

// ==========================================================================
// 15. BOOTSTRAP INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Hero
  setHeroDevice("iphone");

  // Start Countdown
  startFlashCountdown();

  // Render Catalog
  filterAndSortProducts();

  // Sync Badges
  updateCartCounters();
  updateWishlistCounters();

  // Setup Accordion & Listeners
  setupFaqAccordion();
  initEventListeners();

  console.log("MobileHub initialized successfully with 16 flagship products & accessories!");
});

// Explicitly expose functions to window for inline onclick attributes
window.removeCartItem = removeCartItem;
window.updateCartItemQuantity = updateCartItemQuantity;
window.closeCart = closeCart;
window.openCart = openCart;
window.toggleWishlist = toggleWishlist;
window.closeWishlist = closeWishlist;
window.openWishlist = openWishlist;
window.addToCart = addToCart;
window.setQuickViewStorage = setQuickViewStorage;
window.setQuickViewColor = setQuickViewColor;
window.checkPincodeDelivery = checkPincodeDelivery;
window.quickViewAddToCart = quickViewAddToCart;
window.quickViewBuyNow = quickViewBuyNow;
window.openQuickView = openQuickView;
window.closeQuickView = closeQuickView;
window.openCheckout = openCheckout;
window.closeCheckout = closeCheckout;
window.copyFlashCoupon = copyFlashCoupon;

