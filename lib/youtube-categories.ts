// lib/youtube-categories.ts

// ============================================================
// 📌 YouTube Bulk Fetch کے لیے تمام کیٹیگریز
// اس فائل کو اپ ڈیٹ کریں اور Bulk Fetch چلائیں
// ============================================================

export const YOUTUBE_CATEGORIES = {
  // ============================================================
  // 1. عمومی الیکٹرانکس (General Electronics)
  // ============================================================
  general: [
    "Electronics repair",
    "Electronics DIY",
    "Electronics tutorial",
    "Circuit board repair",
    "Soldering tutorial",
    "PCB repair",
    "Electronics components",
    "Multimeter tutorial",
    "Oscilloscope tutorial",
    "Power supply repair",
  ],

  // ============================================================
  // 2. اسمارٹ فونز (Smartphones)
  // ============================================================
  smartphones: [
    "Smartphone repair",
    "iPhone repair",
    "Samsung repair",
    "OnePlus repair",
    "Google Pixel repair",
    "Xiaomi repair",
    "Smartphone screen replacement",
    "Smartphone battery replacement",
    "Smartphone charging port repair",
    "Smartphone water damage repair",
    "Smartphone camera repair",
    "Smartphone speaker repair",
    "Smartphone microphone repair",
    "Phone disassembly",
    "Phone motherboard repair",
  ],

  // ============================================================
  // 3. لیپ ٹاپ (Laptops)
  // ============================================================
  laptops: [
    "Laptop repair",
    "MacBook repair",
    "Dell laptop repair",
    "HP laptop repair",
    "Lenovo laptop repair",
    "Asus laptop repair",
    "Acer laptop repair",
    "Laptop screen replacement",
    "Laptop battery replacement",
    "Laptop keyboard repair",
    "Laptop trackpad repair",
    "Laptop motherboard repair",
    "Laptop fan replacement",
    "Laptop thermal paste",
    "Laptop disassembly",
  ],

  // ============================================================
  // 4. ٹیبلٹ (Tablets)
  // ============================================================
  tablets: [
    "Tablet repair",
    "iPad repair",
    "Samsung tablet repair",
    "Tablet screen replacement",
    "Tablet battery replacement",
    "Tablet charging port repair",
    "Tablet disassembly",
  ],

  // ============================================================
  // 5. گیمنگ (Gaming)
  // ============================================================
  gaming: [
    "PS5 repair",
    "Xbox repair",
    "Nintendo Switch repair",
    "Steam Deck repair",
    "Gaming console repair",
    "Gaming console overheating fix",
    "Gaming controller repair",
    "Gaming headset repair",
  ],

  // ============================================================
  // 6. وئیر ایبلز (Wearables)
  // ============================================================
  wearables: [
    "Smartwatch repair",
    "Apple Watch repair",
    "Samsung Watch repair",
    "AirPods repair",
    "Galaxy Buds repair",
    "Fitness tracker repair",
    "Smartwatch screen replacement",
    "Smartwatch battery replacement",
  ],

  // ============================================================
  // 7. آڈیو (Audio)
  // ============================================================
  audio: [
    "Headphone repair",
    "Speaker repair",
    "Bluetooth speaker repair",
    "Soundbar repair",
    "Earbuds repair",
    "Audio amplifier repair",
    "Microphone repair",
    "Headphone driver replacement",
  ],

  // ============================================================
  // 8. کمپیوٹر ہارڈویئر (Computer Hardware)
  // ============================================================
  hardware: [
    "Motherboard repair",
    "Graphics card repair",
    "RAM upgrade",
    "SSD upgrade",
    "Hard drive replacement",
    "Power supply repair",
    "CPU installation",
    "Computer hardware tutorial",
    "Desktop PC repair",
    "PC building tutorial",
    "Data recovery",
  ],

  // ============================================================
  // 9. ڈسپلے / مانیٹر (Display / Monitor)
  // ============================================================
  display: [
    "Monitor repair",
    "LCD screen repair",
    "OLED screen repair",
    "Touch screen repair",
    "Display cable repair",
    "Screen flickering fix",
    "Dead pixel fix",
  ],

  // ============================================================
  // 10. نیٹ ورکنگ (Networking)
  // ============================================================
  networking: [
    "Router repair",
    "Switch repair",
    "Modem repair",
    "Network cable repair",
    "WiFi extender repair",
    "Server repair",
  ],

  // ============================================================
  // 11. پرنٹرز اور اسکینرز (Printers & Scanners)
  // ============================================================
  printing: [
    "Printer repair",
    "Scanner repair",
    "3D printer repair",
    "Laser printer repair",
    "Inkjet printer repair",
    "Printer error fix",
  ],

  // ============================================================
  // 12. کیمروں (Cameras)
  // ============================================================
  cameras: [
    "Camera repair",
    "DSLR repair",
    "Mirrorless camera repair",
    "Lens repair",
    "Camera sensor cleaning",
    "Action camera repair",
    "Drone camera repair",
  ],

  // ============================================================
  // 13. گھریلو آلات (Home Appliances)
  // ============================================================
  appliances: [
    "TV repair",
    "Projector repair",
    "Monitor repair",
    "Home theater repair",
    "Smart TV repair",
    "TV motherboard repair",
    "TV power supply repair",
    "TV screen replacement",
  ],

  // ============================================================
  // 14. موٹرز اور ڈرونز (Motors & Drones)
  // ============================================================
  motors: [
    "Drone repair",
    "RC car repair",
    "Electric motor repair",
    "Robotics repair",
    "Drone motor replacement",
    "Drone camera repair",
  ],

  // ============================================================
  // 15. بیٹریاں اور چارجنگ (Battery & Charging)
  // ============================================================
  battery: [
    "Battery replacement",
    "Charging port repair",
    "Battery calibration",
    "Power bank repair",
    "Battery health check",
    "Fast charging repair",
    "Wireless charging repair",
  ],

  // ============================================================
  // 16. ایڈوانسڈ / پیشہ ورانہ (Advanced / Professional)
  // ============================================================
  advanced: [
    "BGA reballing",
    "IC replacement",
    "Capacitor replacement",
    "Resistor replacement",
    "Fuse replacement",
    "Connector repair",
    "Flex cable repair",
    "Microscope soldering",
    "Chip level repair",
    "Component level repair",
  ],

  // ============================================================
  // 17. سمارٹ ہوم (Smart Home)
  // ============================================================
  smarthome: [
    "Smart home device repair",
    "Smart bulb repair",
    "Smart plug repair",
    "Smart lock repair",
    "Smart thermostat repair",
    "Voice assistant repair",
  ],
};

// ============================================================
// 📊 تمام کیٹیگریز کو ایک فلیٹ Array میں تبدیل کریں
// ============================================================

export const getAllCategories = (): string[] => {
  const all: string[] = [];
  for (const key in YOUTUBE_CATEGORIES) {
    const category = YOUTUBE_CATEGORIES[key as keyof typeof YOUTUBE_CATEGORIES];
    all.push(...category);
  }
  return all;
};

// ============================================================
// 📊 کیٹیگری کا نام واپس کریں (Stats کے لیے)
// ============================================================

export const getCategoryName = (key: string): string => {
  const names: Record<string, string> = {
    general: "General Electronics",
    smartphones: "Smartphones",
    laptops: "Laptops",
    tablets: "Tablets",
    gaming: "Gaming",
    wearables: "Wearables",
    audio: "Audio",
    hardware: "Computer Hardware",
    display: "Display / Monitor",
    networking: "Networking",
    printing: "Printers & Scanners",
    cameras: "Cameras",
    appliances: "Home Appliances",
    motors: "Motors & Drones",
    battery: "Battery & Charging",
    advanced: "Advanced / Professional",
    smarthome: "Smart Home",
  };
  return names[key] || key;
};

// ============================================================
// 📊 اعداد و شمار (Statistics)
// ============================================================

export const getCategoryStats = () => {
  const stats: { category: string; count: number; name: string }[] = [];
  for (const key in YOUTUBE_CATEGORIES) {
    const category = YOUTUBE_CATEGORIES[key as keyof typeof YOUTUBE_CATEGORIES];
    stats.push({
      category: key,
      name: getCategoryName(key),
      count: category.length,
    });
  }
  return stats;
};

// ============================================================
// 📋 کل اعداد و شمار
// ============================================================

export const getTotalCategories = () => {
  const all = getAllCategories();
  return {
    totalCategories: Object.keys(YOUTUBE_CATEGORIES).length,
    totalQueries: all.length,
    categories: getCategoryStats(),
  };
};

// ============================================================
// ✅ ڈیفالٹ ایکسپورٹ (آسانی کے لیے)
// ============================================================

export default YOUTUBE_CATEGORIES;