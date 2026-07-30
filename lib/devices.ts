// lib/devices.ts
export interface Device {
  id: number;
  name: string;
  brand: string;
  category: string;
  image: string;
  description?: string;
  price?: string;
  releaseYear?: number;
  specs?: string[];
}

export const devicesData: Device[] = [
  // ==================== APPLE iPHONES ====================
  { id: 1, name: "iPhone 11", brand: "Apple", category: "Smartphone", image: "📱", description: "6.1-inch LCD, A13 Bionic, Dual 12MP camera.", price: "$499", releaseYear: 2019, specs: ["6.1-inch LCD", "A13 Bionic", "Dual 12MP", "3110mAh"] },
  { id: 2, name: "iPhone 12", brand: "Apple", category: "Smartphone", image: "📱", description: "6.1-inch OLED, A14 Bionic, 5G support.", price: "$599", releaseYear: 2020, specs: ["6.1-inch OLED", "A14 Bionic", "Dual 12MP", "2815mAh"] },
  { id: 3, name: "iPhone 13", brand: "Apple", category: "Smartphone", image: "📱", description: "6.1-inch OLED, A15 Bionic, advanced dual-camera system.", price: "$699", releaseYear: 2021, specs: ["6.1-inch OLED", "A15 Bionic", "Dual 12MP", "3095mAh"] },
  { id: 4, name: "iPhone 14 Pro", brand: "Apple", category: "Smartphone", image: "📱", description: "Dynamic Island, Always-On display, 48MP main camera.", price: "$999", releaseYear: 2022, specs: ["6.1-inch OLED 120Hz", "A16 Bionic", "48MP Main", "3200mAh"] },
  { id: 5, name: "iPhone 15 Pro Max", brand: "Apple", category: "Smartphone", image: "📱", description: "Titanium design, 5x optical zoom, USB-C port.", price: "$1199", releaseYear: 2023, specs: ["6.7-inch OLED 120Hz", "A17 Pro", "48MP Main", "4422mAh"] },
  { id: 6, name: "iPhone 16", brand: "Apple", category: "Smartphone", image: "📱", description: "A18 chip, new camera layout, Action Button.", price: "$799", releaseYear: 2024, specs: ["6.1-inch OLED", "A18", "Dual 48MP", "3561mAh"] },

  // ==================== SAMSUNG GALAXY ====================
  { id: 7, name: "Samsung Galaxy S21", brand: "Samsung", category: "Smartphone", image: "📱", description: "6.2-inch AMOLED, Snapdragon 888, 64MP camera.", price: "$699", releaseYear: 2021, specs: ["6.2-inch AMOLED", "Snapdragon 888", "64MP", "4000mAh"] },
  { id: 8, name: "Samsung Galaxy S22", brand: "Samsung", category: "Smartphone", image: "📱", description: "6.1-inch AMOLED, Snapdragon 8 Gen 1, pro-grade camera.", price: "$799", releaseYear: 2022, specs: ["6.1-inch AMOLED", "Snapdragon 8 Gen 1", "50MP", "3700mAh"] },
  { id: 9, name: "Samsung Galaxy S23 Ultra", brand: "Samsung", category: "Smartphone", image: "📱", description: "6.8-inch AMOLED, 200MP camera, built-in S Pen.", price: "$1199", releaseYear: 2023, specs: ["6.8-inch AMOLED 120Hz", "Snapdragon 8 Gen 2", "200MP", "5000mAh"] },
  { id: 10, name: "Samsung Galaxy S24 Ultra", brand: "Samsung", category: "Smartphone", image: "📱", description: "Galaxy AI, Titanium frame, 200MP camera.", price: "$1299", releaseYear: 2024, specs: ["6.8-inch AMOLED", "Snapdragon 8 Gen 3", "200MP", "5000mAh"] },
  { id: 11, name: "Samsung Galaxy Z Fold 5", brand: "Samsung", category: "Smartphone", image: "📱", description: "Foldable 7.6-inch display, multitasking powerhouse.", price: "$1799", releaseYear: 2023, specs: ["7.6-inch Foldable", "Snapdragon 8 Gen 2", "50MP", "4400mAh"] },
  { id: 12, name: "Samsung Galaxy Z Flip 5", brand: "Samsung", category: "Smartphone", image: "📱", description: "Compact foldable, large cover screen, stylish design.", price: "$999", releaseYear: 2023, specs: ["6.7-inch Foldable", "Snapdragon 8 Gen 2", "12MP", "3700mAh"] },

  // ==================== GOOGLE PIXEL ====================
  { id: 13, name: "Google Pixel 6", brand: "Google", category: "Smartphone", image: "📱", description: "Google Tensor chip, 50MP camera, pure Android experience.", price: "$599", releaseYear: 2021, specs: ["6.4-inch OLED", "Google Tensor", "50MP", "4614mAh"] },
  { id: 14, name: "Google Pixel 7 Pro", brand: "Google", category: "Smartphone", image: "📱", description: "48MP telephoto, macro focus, Titan M2 security.", price: "$899", releaseYear: 2022, specs: ["6.7-inch OLED 120Hz", "Google Tensor G2", "50MP", "5000mAh"] },
  { id: 15, name: "Google Pixel 8 Pro", brand: "Google", category: "Smartphone", image: "📱", description: "AI-powered camera, 7 years of updates, temperature sensor.", price: "$999", releaseYear: 2023, specs: ["6.7-inch OLED", "Google Tensor G3", "50MP", "5050mAh"] },

  // ==================== ONEPLUS ====================
  { id: 16, name: "OnePlus 11", brand: "OnePlus", category: "Smartphone", image: "📱", description: "Snapdragon 8 Gen 2, Hasselblad camera, fast charging.", price: "$699", releaseYear: 2023, specs: ["6.7-inch AMOLED", "Snapdragon 8 Gen 2", "50MP", "5000mAh"] },
  { id: 17, name: "OnePlus 12", brand: "OnePlus", category: "Smartphone", image: "📱", description: "Brightest display, 64MP periscope camera.", price: "$799", releaseYear: 2024, specs: ["6.82-inch AMOLED", "Snapdragon 8 Gen 3", "50MP", "5400mAh"] },

  // ==================== XIAOMI / POCO ====================
  { id: 18, name: "Xiaomi 13 Pro", brand: "Xiaomi", category: "Smartphone", image: "📱", description: "Leica camera, 1-inch sensor, Snapdragon 8 Gen 2.", price: "$999", releaseYear: 2023, specs: ["6.73-inch AMOLED", "Snapdragon 8 Gen 2", "50MP (1-inch)", "4820mAh"] },
  { id: 19, name: "Xiaomi 14 Ultra", brand: "Xiaomi", category: "Smartphone", image: "📱", description: "Leica optics, 50MP ultra-wide, professional photography.", price: "$1499", releaseYear: 2024, specs: ["6.73-inch AMOLED", "Snapdragon 8 Gen 3", "50MP", "5000mAh"] },
  { id: 20, name: "Poco X5 Pro", brand: "Poco", category: "Smartphone", image: "📱", description: "Budget-friendly performance, 120Hz display.", price: "$299", releaseYear: 2023, specs: ["6.67-inch AMOLED", "Snapdragon 778G", "108MP", "5000mAh"] },

  // ==================== MACBOOKS ====================
  { id: 21, name: "MacBook Air M1", brand: "Apple", category: "Laptop", image: "💻", description: "Fanless design, 18-hour battery, Retina display.", price: "$999", releaseYear: 2020, specs: ["13.3-inch Retina", "M1 Chip", "8GB RAM", "256GB SSD"] },
  { id: 22, name: "MacBook Air M2", brand: "Apple", category: "Laptop", image: "💻", description: "Ultra-thin, 1080p camera, MagSafe charging.", price: "$1099", releaseYear: 2022, specs: ["13.6-inch Liquid Retina", "M2 Chip", "8GB RAM", "256GB SSD"] },
  { id: 23, name: "MacBook Air M3", brand: "Apple", category: "Laptop", image: "💻", description: "Next-gen performance, supports dual external displays.", price: "$1199", releaseYear: 2024, specs: ["13.6-inch Liquid Retina", "M3 Chip", "8GB RAM", "256GB SSD"] },
  { id: 24, name: "MacBook Pro 14", brand: "Apple", category: "Laptop", image: "💻", description: "M2 Pro chip, 12-core CPU, Liquid Retina XDR display.", price: "$1999", releaseYear: 2023, specs: ["14-inch Mini-LED", "M2 Pro", "16GB RAM", "512GB SSD"] },
  { id: 25, name: "MacBook Pro 16", brand: "Apple", category: "Laptop", image: "💻", description: "M2 Max, 38-core GPU, ultimate performance.", price: "$2499", releaseYear: 2023, specs: ["16-inch Mini-LED", "M2 Max", "32GB RAM", "1TB SSD"] },

  // ==================== DELL & WINDOWS ====================
  { id: 26, name: "Dell XPS 13", brand: "Dell", category: "Laptop", image: "💻", description: "InfinityEdge display, Intel Core i7, premium build.", price: "$1299", releaseYear: 2023, specs: ["13.4-inch OLED", "Intel Core i7", "16GB RAM", "512GB SSD"] },
  { id: 27, name: "Dell XPS 15", brand: "Dell", category: "Laptop", image: "💻", description: "15-inch OLED, NVIDIA RTX graphics, creator laptop.", price: "$1999", releaseYear: 2023, specs: ["15.6-inch OLED", "Intel Core i9", "32GB RAM", "1TB SSD"] },
  { id: 28, name: "HP Spectre x360", brand: "HP", category: "Laptop", image: "💻", description: "2-in-1 convertible, OLED touchscreen, stylus support.", price: "$1499", releaseYear: 2023, specs: ["13.5-inch OLED", "Intel Core i7", "16GB RAM", "512GB SSD"] },
  { id: 29, name: "Lenovo ThinkPad X1", brand: "Lenovo", category: "Laptop", image: "💻", description: "Business laptop, robust build, spill-resistant keyboard.", price: "$1799", releaseYear: 2023, specs: ["14-inch IPS", "Intel Core i7", "16GB RAM", "512GB SSD"] },
  { id: 30, name: "Asus ROG Zephyrus", brand: "Asus", category: "Laptop", image: "💻", description: "Gaming laptop, NVIDIA RTX 40-series, high refresh rate.", price: "$2199", releaseYear: 2024, specs: ["16-inch 240Hz", "Intel Core i9", "32GB RAM", "1TB SSD"] },

  // ==================== TABLETS ====================
  { id: 31, name: "iPad 10th Gen", brand: "Apple", category: "Tablet", image: "📋", description: "10.9-inch Liquid Retina, A14 Bionic, USB-C.", price: "$349", releaseYear: 2022, specs: ["10.9-inch Liquid Retina", "A14 Bionic", "64GB Storage"] },
  { id: 32, name: "iPad Air M1", brand: "Apple", category: "Tablet", image: "📋", description: "Powerful M1 chip, 10.9-inch display, 5G support.", price: "$599", releaseYear: 2022, specs: ["10.9-inch Liquid Retina", "M1 Chip", "64GB Storage"] },
  { id: 33, name: "iPad Pro M4", brand: "Apple", category: "Tablet", image: "📋", description: "Ultra Retina XDR display, M4 chip, OLED display.", price: "$1099", releaseYear: 2024, specs: ["13-inch OLED", "M4 Chip", "256GB Storage"] },
  { id: 34, name: "Samsung Galaxy Tab S9", brand: "Samsung", category: "Tablet", image: "📋", description: "Dynamic AMOLED 2X, IP68 water resistance, S Pen included.", price: "$799", releaseYear: 2023, specs: ["11-inch AMOLED", "Snapdragon 8 Gen 2", "128GB Storage"] },
  { id: 35, name: "Samsung Galaxy Tab S9 Ultra", brand: "Samsung", category: "Tablet", image: "📋", description: "14.6-inch AMOLED, massive screen, multitasking beast.", price: "$1199", releaseYear: 2023, specs: ["14.6-inch AMOLED", "Snapdragon 8 Gen 2", "512GB Storage"] },

  // ==================== WEARABLES ====================
  { id: 36, name: "AirPods Pro 2", brand: "Apple", category: "Accessories", image: "🎧", description: "Active Noise Cancellation, H2 chip, Personalized Spatial Audio.", price: "$249", releaseYear: 2022, specs: ["ANC", "H2 Chip", "6 hours battery", "MagSafe"] },
  { id: 37, name: "AirPods Max", brand: "Apple", category: "Accessories", image: "🎧", description: "Over-ear headphones, premium sound, computational audio.", price: "$549", releaseYear: 2020, specs: ["Over-ear", "ANC", "20 hours battery", "Digital Crown"] },
  { id: 38, name: "Samsung Galaxy Buds 2", brand: "Samsung", category: "Accessories", image: "🎧", description: "Lightweight, AKG tuned, active noise cancellation.", price: "$149", releaseYear: 2021, specs: ["ANC", "AKG Sound", "5 hours battery", "Wireless Charging"] },
  { id: 39, name: "Samsung Galaxy Buds 3", brand: "Samsung", category: "Accessories", image: "🎧", description: "AI-based noise control, water resistant, premium sound.", price: "$179", releaseYear: 2024, specs: ["AI ANC", "360 Audio", "6 hours battery", "IP57"] },
  { id: 40, name: "Sony WH-1000XM5", brand: "Sony", category: "Accessories", image: "🎧", description: "Industry-leading noise cancellation, exceptional sound quality.", price: "$399", releaseYear: 2022, specs: ["Ultimate ANC", "30 hours battery", "Quick Charging"] },

  // ==================== SMARTWATCHES ====================
  { id: 41, name: "Apple Watch Series 9", brand: "Apple", category: "Smartwatch", image: "⌚", description: "S9 chip, Double Tap gesture, brighter display.", price: "$399", releaseYear: 2023, specs: ["S9 Chip", "Always-On OLED", "GPS", "18 hours battery"] },
  { id: 42, name: "Apple Watch Ultra 2", brand: "Apple", category: "Smartwatch", image: "⌚", description: "Titanium case, 3000 nits, diving and hiking features.", price: "$799", releaseYear: 2023, specs: ["Titanium", "3000 nits", "Precision GPS", "36 hours battery"] },
  { id: 43, name: "Samsung Galaxy Watch 6", brand: "Samsung", category: "Smartwatch", image: "⌚", description: "Body composition analysis, sleep tracking, rotating bezel.", price: "$299", releaseYear: 2023, specs: ["Super AMOLED", "Body Analysis", "GPS", "40 hours battery"] },
  { id: 44, name: "Samsung Galaxy Watch 6 Classic", brand: "Samsung", category: "Smartwatch", image: "⌚", description: "Classic design with physical rotating bezel.", price: "$399", releaseYear: 2023, specs: ["Rotating Bezel", "Super AMOLED", "GPS", "40 hours battery"] },

  // ==================== GAMING & OTHER ====================
  { id: 45, name: "PlayStation 5", brand: "Sony", category: "Gaming", image: "🎮", description: "Next-gen gaming, DualSense controller, ultra-fast SSD.", price: "$499", releaseYear: 2020, specs: ["8K output", "Custom AMD GPU", "825GB SSD"] },
  { id: 46, name: "Xbox Series X", brand: "Microsoft", category: "Gaming", image: "🎮", description: "Fastest Xbox, 12 teraflops, 4K gaming at 60fps.", price: "$499", releaseYear: 2020, specs: ["4K 60fps", "1TB SSD", "Ray Tracing"] },
  { id: 47, name: "Nintendo Switch OLED", brand: "Nintendo", category: "Gaming", image: "🎮", description: "7-inch OLED screen, enhanced audio, versatile gaming.", price: "$349", releaseYear: 2021, specs: ["7-inch OLED", "64GB Storage", "3.5-9 hours battery"] },
  { id: 48, name: "Steam Deck OLED", brand: "Valve", category: "Gaming", image: "🎮", description: "Handheld PC gaming, OLED display, powerful AMD APU.", price: "$549", releaseYear: 2023, specs: ["7.4-inch OLED", "AMD APU", "16GB RAM", "512GB SSD"] },
  
  // ==================== NETWORKING & ACCESSORIES ====================
  { id: 49, name: "Google Nest Hub", brand: "Google", category: "Smart Home", image: "🏠", description: "Smart display, Google Assistant, visual controls for smart devices.", price: "$99", releaseYear: 2021, specs: ["7-inch Display", "Google Assistant", "Smart Home Hub"] },
  { id: 50, name: "Amazon Echo Show 8", brand: "Amazon", category: "Smart Home", image: "🏠", description: "Alexa smart display, video calling, entertainment hub.", price: "$139", releaseYear: 2023, specs: ["8-inch HD", "Alexa", "Smart Hub"] },
  { id: 51, name: "TP-Link Archer AX55", brand: "TP-Link", category: "Networking", image: "📶", description: "Wi-Fi 6 router, fast speeds, 4 Gigabit LAN ports.", price: "$129", releaseYear: 2022, specs: ["Wi-Fi 6", "Dual-Band", "4 LAN Ports", "VPN"] },
];