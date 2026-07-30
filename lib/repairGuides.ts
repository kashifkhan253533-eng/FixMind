// lib/repairGuides.ts
export interface RepairGuide {
  id: number;
  deviceId: number;
  title: string;
  category: "Software" | "Hardware" | "Maintenance";
  difficulty: "Easy" | "Medium" | "Hard";
  time: string;
  parts: string[];
  steps: number;
  tools: string[];
  guideSteps: string[];
  problem: string;
}

// ============================================================
// 📌 سافٹ ویئر: WiFi / Bluetooth Issues (تفصیلی)
// ============================================================
const softwareConnectivitySteps: string[] = [
  "Step 1: Toggle WiFi/Bluetooth off/on.\n📍 Go to Settings → Connections → Wi-Fi. Toggle the switch to turn it OFF. Wait 5 seconds, then toggle it back ON. For Bluetooth, go to Settings → Connections → Bluetooth and do the same.",

  "Step 2: Restart your router.\n📍 Unplug your router from the power outlet. Wait 30 seconds, then plug it back in. Wait 2 minutes for it to fully restart before connecting again.",

  "Step 3: Forget and reconnect to network.\n📍 Go to Settings → Connections → Wi-Fi. Tap on your network name, select 'Forget' or 'Remove'. Then scan for networks again, select your network, enter the password, and connect.",

  "Step 4: Reset network settings.\n📍 Go to Settings → General Management → Reset → Reset Network Settings. This will reset all Wi-Fi, Bluetooth, and mobile data settings. You will need to reconnect to Wi-Fi and pair Bluetooth devices again.",

  "Step 5: Check for system updates.\n📍 Go to Settings → Software Update → Download and Install. If an update is available, install it. Updates often fix connectivity issues.",

  "Step 6: Check other devices.\n📍 Check if other devices can connect to the same network. If they can't, the issue is with the router. If they can, the issue is with your device.",

  "Step 7: Factory reset as last resort.\n📍 Backup your data first. Go to Settings → General Management → Reset → Factory Data Reset. This will erase all data and restore your device to factory settings."
];

// ============================================================
// 📌 سافٹ ویئر: Device Slowness (تفصیلی)
// ============================================================
const softwareSlowSteps: string[] = [
  "Step 1: Close all background apps.\n📍 Tap the recent apps button (square icon) and swipe away all open apps. This frees up RAM and reduces CPU load.",

  "Step 2: Clear app cache and temporary files.\n📍 Go to Settings → Storage → Cached Data. Tap to clear. This removes temporary files that slow down your device.",

  "Step 3: Restart your device.\n📍 Press and hold the power button, then select 'Restart' or 'Reboot'. This clears system memory and refreshes the operating system.",

  "Step 4: Check for system updates.\n📍 Go to Settings → Software Update → Download and Install. Install any available updates for performance improvements.",

  "Step 5: Uninstall unused apps.\n📍 Go to Settings → Apps → Select apps you don't use → Uninstall. Removing bloatware frees up storage and resources.",

  "Step 6: Factory reset (backup first).\n📍 Backup your data to Google Drive or a computer. Go to Settings → General Management → Reset → Factory Data Reset.",

  "Step 7: Restore from backup.\n📍 After reset, restore your apps and data from backup to start fresh."
];

// ============================================================
// 📌 سافٹ ویئر: Battery Drain (تفصیلی)
// ============================================================
const softwareBatteryDrainSteps: string[] = [
  "Step 1: Check battery usage.\n📍 Go to Settings → Battery → Battery Usage. Identify apps that use the most battery.",

  "Step 2: Reduce screen brightness and timeout.\n📍 Go to Settings → Display → Brightness and lower it. Set Screen Timeout to 15-30 seconds.",

  "Step 3: Turn off unused connections.\n📍 Go to Settings → Connections and turn off Wi-Fi, Bluetooth, and GPS when not in use. These drain battery constantly.",

  "Step 4: Enable power-saving mode.\n📍 Go to Settings → Battery → Power Saving Mode and turn it on. This limits background activity.",

  "Step 5: Update apps and OS.\n📍 Go to Play Store/App Store → Update All. Go to Settings → Software Update and install any updates.",

  "Step 6: Reset battery settings.\n📍 Go to Settings → General Management → Reset → Reset Battery Settings. This recalibrates battery usage.",

  "Step 7: Factory reset if needed.\n📍 Backup data, then go to Settings → General Management → Reset → Factory Data Reset."
];

// ============================================================
// 📌 سافٹ ویئر: Boot Issues (تفصیلی)
// ============================================================
const softwareBootSteps: string[] = [
  "Step 1: Force restart.\n📍 Press and hold the Power button + Volume Down button for 10-15 seconds until the device reboots. This forces a hardware restart.",

  "Step 2: Try safe mode.\n📍 Press the Power button, then press and hold 'Power Off' until 'Safe Mode' appears. Tap OK. This loads only essential apps.",

  "Step 3: Check physical buttons.\n📍 Make sure the Power button and Volume buttons are not stuck. If stuck, gently press and release them.",

  "Step 4: Charge the device.\n📍 Plug the device into a charger for at least 15 minutes. A dead battery can prevent booting.",

  "Step 5: Try recovery mode.\n📍 Turn off the device. Press Power + Volume Up until the recovery menu appears. Select 'Reboot' or 'Wipe Cache'.",

  "Step 6: Factory reset via recovery.\n📍 In recovery mode, select 'Wipe Data/Factory Reset'. This is the last software solution.",

  "Step 7: Seek professional help.\n📍 If none of the above works, the issue may be hardware-related. Take it to a service center."
];

// ============================================================
// 📌 ہارڈویئر: Screen Replacement (تفصیلی)
// ============================================================
const hardwareScreenSteps: string[] = [
  "Step 1: Power off device completely.\n📍 Press and hold the Power button, then select 'Power Off'. Wait for the device to completely shut down.",

  "Step 2: Remove screws and separate screen.\n📍 Use a Pentalobe screwdriver to remove the two screws next to the charging port. Gently insert a spudger to create a gap between the screen and frame.",

  "Step 3: Disconnect display flex cables.\n📍 Use a spudger to carefully disconnect the display cables from the motherboard. Be gentle to avoid damaging the connectors.",

  "Step 4: Remove broken screen.\n📍 Carefully lift the broken screen assembly away from the device frame. Do not force it.",

  "Step 5: Transfer components.\n📍 Remove the camera, home button, and other components from the old screen and attach them to the new screen assembly.",

  "Step 6: Install new screen.\n📍 Place the new screen assembly onto the frame and press gently to secure it.",

  "Step 7: Reconnect flex cables.\n📍 Connect the display cables back to the motherboard. Ensure they are fully seated.",

  "Step 8: Secure with screws.\n📍 Replace the screws to secure the screen to the frame.",

  "Step 9: Power on and test.\n📍 Press the Power button to turn on the device. Test touch, display, and all functions.",

  "Step 10: Seal edges with adhesive.\n📍 Apply adhesive around the edges to seal the screen and protect against dust and water."
];

// ============================================================
// 📌 ہارڈویئر: Battery Replacement (تفصیلی)
// ============================================================
const hardwareBatterySteps: string[] = [
  "Step 1: Power off device.\n📍 Press and hold the Power button and select 'Power Off' to shut down the device.",

  "Step 2: Open device and disconnect battery.\n📍 Use a screwdriver to open the back cover or screen. Locate the battery connector and disconnect it using a spudger.",

  "Step 3: Remove battery (heat if glued).\n📍 If the battery is glued, use a heat gun to soften the adhesive. Gently pry the battery out with a spudger.",

  "Step 4: Install new battery.\n📍 Place the new battery in the same position. Press down firmly to secure it.",

  "Step 5: Reconnect battery.\n📍 Reconnect the battery connector to the motherboard. Ensure it is fully seated.",

  "Step 6: Close device.\n📍 Reattach the back cover or screen and secure it with screws.",

  "Step 7: Power on and test.\n📍 Press the Power button to turn on the device. Check if the battery charges and holds charge."
];

// ============================================================
// 📌 ہارڈویئر: Charging Port Fix (تفصیلی)
// ============================================================
const hardwareChargingPortSteps: string[] = [
  "Step 1: Power off device.\n📍 Shut down the device completely.",

  "Step 2: Open device and locate port.\n📍 Open the device and locate the charging port at the bottom.",

  "Step 3: Clean port gently.\n📍 Use a soft brush or toothpick to carefully remove dust and lint from the port. Do not use metal objects.",

  "Step 4: If damaged, disconnect flex cable.\n📍 If cleaning doesn't work, disconnect the port flex cable from the motherboard using a spudger.",

  "Step 5: Replace with new port.\n📍 Attach the new charging port to the flex cable and secure it in place.",

  "Step 6: Reconnect flex cable.\n📍 Reconnect the flex cable to the motherboard.",

  "Step 7: Close device and test charging.\n📍 Reassemble the device. Plug in the charger and check if charging works."
];

// ============================================================
// 📌 لیپ ٹاپ کی بیٹری (تفصیلی)
// ============================================================
const laptopBatterySteps: string[] = [
  "Step 1: Power off and unplug.\n📍 Shut down the laptop and unplug the charger.",

  "Step 2: Remove bottom panel screws.\n📍 Flip the laptop over. Use a Phillips screwdriver to remove all screws on the bottom panel.",

  "Step 3: Remove bottom panel.\n📍 Use a spudger or plastic tool to gently pry off the bottom panel.",

  "Step 4: Disconnect battery cable.\n📍 Locate the battery and disconnect its cable from the motherboard.",

  "Step 5: Remove battery screws.\n📍 Remove the screws holding the battery in place.",

  "Step 6: Lift old battery out.\n📍 Gently lift the old battery out of the laptop.",

  "Step 7: Insert new battery and secure.\n📍 Place the new battery in the same position and secure it with screws.",

  "Step 8: Reconnect battery cable.\n📍 Reconnect the battery cable to the motherboard.",

  "Step 9: Put panel back and test.\n📍 Reattach the bottom panel and secure it with screws. Power on and test battery performance."
];

// ============================================================
// 📌 ٹیبلٹ کی اسکرین (تفصیلی)
// ============================================================
const tabletScreenSteps: string[] = [
  "Step 1: Power off tablet.\n📍 Shut down the tablet completely.",

  "Step 2: Heat edges with heat gun.\n📍 Use a heat gun to gently heat the edges of the screen for 1-2 minutes to soften the adhesive.",

  "Step 3: Use suction cup to lift.\n📍 Attach a suction cup to the screen and gently pull to create a gap.",

  "Step 4: Cut through adhesive.\n📍 Insert a spudger into the gap and carefully cut through the adhesive around the edges.",

  "Step 5: Carefully lift screen.\n📍 Gently lift the screen from the frame. Be careful not to damage the flex cables.",

  "Step 6: Disconnect digitizer and display.\n📍 Disconnect the digitizer and display cables from the motherboard.",

  "Step 7: Transfer components.\n📍 Transfer any components (camera, buttons) to the new screen.",

  "Step 8: Attach new screen and reconnect.\n📍 Connect the new screen cables and attach the screen to the frame.",

  "Step 9: Press firmly to seal.\n📍 Press the screen firmly around the edges to seal the adhesive.",

  "Step 10: Test touch and display.\n📍 Power on and test the touch screen and display functionality."
];

// ============================================================
// 📌 وئیر ایبل بیٹری (تفصیلی)
// ============================================================
const wearableBatterySteps: string[] = [
  "Step 1: Power off watch.\n📍 Swipe down and tap 'Power Off' or press and hold the button to shut down.",

  "Step 2: Remove strap.\n📍 Remove the watch strap to access the back cover.",

  "Step 3: Heat back cover adhesive.\n📍 Use a heat gun to gently heat the back cover for 30 seconds.",

  "Step 4: Remove back cover.\n📍 Use a spudger to carefully remove the back cover.",

  "Step 5: Disconnect battery.\n📍 Locate the battery connector and disconnect it.",

  "Step 6: Remove old battery.\n📍 Gently lift and remove the old battery.",

  "Step 7: Install new battery and reconnect.\n📍 Place the new battery and reconnect the connector.",

  "Step 8: Reattach back cover.\n📍 Press the back cover firmly to seal it.",

  "Step 9: Power on and test.\n📍 Turn on the watch and check battery performance."
];

// ============================================================
// 📌 گیمنگ کنسول کی صفائی (تفصیلی)
// ============================================================
const gamingCleaningSteps: string[] = [
  "Step 1: Power off and unplug.\n📍 Shut down the console and unplug all cables.",

  "Step 2: Place on flat surface.\n📍 Place the console on a flat, stable surface.",

  "Step 3: Remove outer shell panels.\n📍 Use a Torx screwdriver to remove the screws and carefully remove the outer panels.",

  "Step 4: Use compressed air.\n📍 Use compressed air to blow dust out of the heatsink and fan.",

  "Step 5: Remove fan and clean thoroughly.\n📍 Remove the fan to clean it thoroughly. Wipe it with a microfiber cloth.",

  "Step 6: Reinstall fan and secure.\n📍 Reinstall the fan and secure all connections.",

  "Step 7: Snap panels back on.\n📍 Reattach the outer panels and secure them with screws.",

  "Step 8: Test for noise and overheating.\n📍 Plug in and test the console. Check for unusual noise or overheating."
];

// ============================================================
// 📌 سمارٹ ہوم کی صفائی (تفصیلی)
// ============================================================
const smartHomeCleaningSteps: string[] = [
  "Step 1: Power off and unplug.\n📍 Turn off the device and unplug it from the power source.",

  "Step 2: Blow dust from vents.\n📍 Use compressed air to blow dust out of all vents.",

  "Step 3: Wipe exterior.\n📍 Use a microfiber cloth to wipe the exterior of the device.",

  "Step 4: Clean ports with soft brush.\n📍 Use a soft brush to clean out dust from ports and connectors.",

  "Step 5: Reconnect and power on.\n📍 Plug the device back in and power it on."
];

// ============================================================
// 🚀 گائیڈز جنریشن (بالکل ویسا ہی جیسا پہلے تھا)
// ============================================================

export const repairGuides: RepairGuide[] = [];

const addGuide = (
  deviceId: number,
  title: string,
  category: "Software" | "Hardware" | "Maintenance",
  difficulty: "Easy" | "Medium" | "Hard",
  time: string,
  parts: string[],
  tools: string[],
  stepsArray: string[],
  problem: string
) => {
  repairGuides.push({
    id: repairGuides.length + 1,
    deviceId,
    title,
    category,
    difficulty,
    time,
    parts,
    steps: stepsArray.length,
    tools,
    guideSteps: stepsArray,
    problem,
  });
};

// ========== 1. Smartphones (IDs 1-20) ==========
for (let i = 1; i <= 20; i++) {
  addGuide(i, "Screen Replacement", "Hardware", "Medium", "30-45 min",
    ["Replacement Screen", "Adhesive", "Screwdriver Set"],
    ["Pentalobe Screwdriver", "Phillips Screwdriver", "Suction Cup", "Spudger"],
    hardwareScreenSteps, "Cracked or broken screen");
  addGuide(i, "Battery Replacement", "Hardware", "Medium", "20-30 min",
    ["Replacement Battery", "Adhesive", "Screwdriver Set"],
    ["Pentalobe Screwdriver", "Spudger", "Heat Gun"],
    hardwareBatterySteps, "Battery draining quickly or not charging");
  addGuide(i, "Fix Device Slowness", "Software", "Easy", "15-20 min",
    ["None"], ["Internet Connection"],
    softwareSlowSteps, "Device running slow or freezing");
  addGuide(i, "Fix Battery Drain", "Software", "Easy", "10-15 min",
    ["None"], ["Internet Connection"],
    softwareBatteryDrainSteps, "Battery draining too fast");
  addGuide(i, "Fix WiFi / Bluetooth Issues", "Software", "Easy", "10-15 min",
    ["None"], ["Internet Connection"],
    softwareConnectivitySteps, "WiFi or Bluetooth not connecting");
}

// ========== 2. Laptops (IDs 21-30) ==========
for (let i = 21; i <= 30; i++) {
  addGuide(i, "Battery Replacement", "Hardware", "Medium", "25-35 min",
    ["Replacement Battery", "Screwdriver Set"],
    ["Phillips Screwdriver", "Spudger", "Plastic Pry Tool"],
    laptopBatterySteps, "Battery not holding charge");
  addGuide(i, "Fix Laptop Slowness", "Software", "Easy", "20-30 min",
    ["None"], ["Internet Connection"],
    softwareSlowSteps, "Laptop running slow");
  addGuide(i, "Fix WiFi Issues", "Software", "Easy", "10-15 min",
    ["None"], ["Internet Connection"],
    softwareConnectivitySteps, "WiFi not connecting");
  addGuide(i, "Fix Boot Issues", "Software", "Medium", "20-30 min",
    ["USB Drive"], ["Another Computer"],
    softwareBootSteps, "Laptop not booting");
}

// ========== 3. Tablets (IDs 31-35) ==========
for (let i = 31; i <= 35; i++) {
  addGuide(i, "Screen Replacement", "Hardware", "Hard", "45-60 min",
    ["Replacement Screen", "Adhesive", "Heat Gun"],
    ["Heat Gun", "Suction Cup", "Spudger"],
    tabletScreenSteps, "Cracked or broken screen");
  addGuide(i, "Battery Replacement", "Hardware", "Medium", "25-35 min",
    ["Replacement Battery", "Adhesive"],
    ["Heat Gun", "Spudger"],
    hardwareBatterySteps, "Battery not holding charge");
  addGuide(i, "Fix Tablet Slowness", "Software", "Easy", "15-20 min",
    ["None"], ["Internet Connection"],
    softwareSlowSteps, "Tablet running slow");
  addGuide(i, "Fix Charging Port", "Hardware", "Medium", "15-20 min",
    ["Replacement Port", "Screwdriver Set"],
    ["Phillips Screwdriver", "Spudger"],
    hardwareChargingPortSteps, "Charging port not working");
}

// ========== 4. Wearables (IDs 36-44) ==========
for (let i = 36; i <= 44; i++) {
  addGuide(i, "Battery Replacement", "Hardware", "Easy", "10-15 min",
    ["Replacement Battery", "Adhesive"],
    ["Heat Gun", "Spudger"],
    wearableBatterySteps, "Battery draining quickly");
  addGuide(i, "Fix Bluetooth Issues", "Software", "Easy", "5-10 min",
    ["None"], ["Phone"],
    softwareConnectivitySteps, "Bluetooth not connecting");
  addGuide(i, "Fix Device Lag", "Software", "Easy", "5-10 min",
    ["None"], ["Phone"],
    softwareSlowSteps, "Watch lagging or freezing");
}

// ========== 5. Gaming Consoles (IDs 45-48) ==========
for (let i = 45; i <= 48; i++) {
  addGuide(i, "Fan & Overheating Fix", "Hardware", "Easy", "20-30 min",
    ["Compressed Air", "Screwdriver Set"],
    ["Torx Screwdriver", "Compressed Air"],
    gamingCleaningSteps, "Console overheating or loud fan");
  addGuide(i, "Fix Network Issues", "Software", "Easy", "10-15 min",
    ["None"], ["Internet Connection"],
    softwareConnectivitySteps, "Network / WiFi not connecting");
  addGuide(i, "Fix System Lag", "Software", "Easy", "15-20 min",
    ["None"], ["Internet Connection"],
    softwareSlowSteps, "Console lagging or freezing");
}

// ========== 6. Smart Home (IDs 49-51) ==========
for (let i = 49; i <= 51; i++) {
  addGuide(i, "Cleaning & Maintenance", "Maintenance", "Easy", "10-15 min",
    ["Microfiber Cloth", "Compressed Air"],
    ["Cleaning Brush", "Compressed Air"],
    smartHomeCleaningSteps, "Device dusty or not working properly");
  addGuide(i, "Fix Connectivity Issues", "Software", "Easy", "5-10 min",
    ["None"], ["Internet Connection"],
    softwareConnectivitySteps, "Device not connecting to network");
}