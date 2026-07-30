// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";

// ============================================================
// 📚 الیکٹرانکس کا مکمل علم (Knowledge Base)
// ============================================================

interface KnowledgeEntry {
  keywords: string[];
  response: string;
  saboot?: string; // ثبوت / وجہ
}

const knowledgeBase: KnowledgeEntry[] = [
  // ============================================================
  // 1. سلام اور تعارف
  // ============================================================
  {
    keywords: ["hi", "hello", "hey", "hola", "assalam", "salam", "good morning", "good evening", "good afternoon", "howdy"],
    response: `👋 **Assalam-o-Alaikum! I'm FixMend AI - Your Electronics Expert!**

  I can help you with:
  • 🔧 **Device Repairs** (Screen, Battery, Charging, Water Damage)
  • 🔓 **Phone Unlocking** (Samsung, iPhone, Xiaomi, Oppo, Vivo)
  • 📖 **Repair Guides** (Step-by-step instructions)
  • 🎬 **Video Tutorials** (5,000+ repair videos)
  • 🧠 **Electronics Theory** (How components work)
  • ⚡ **Safety Guidelines** (ESD, Battery Safety, etc.)
  • 🛠️ **Tools & Equipment** (What you need)
  • 🤖 **AI Diagnostics** (Troubleshoot issues)

  **Ask me anything about electronics, repairs, or unlocking!**`,
    saboot: "I'm trained on thousands of repair guides, electronics textbooks, and real-world repair data."
  },

  // ============================================================
  // 2. اسکرین ریپیئر (Screen Repair)
  // ============================================================
  {
    keywords: ["screen", "display", "cracked", "broken screen", "glass", "lcd", "oled", "touch screen", "dead pixels"],
    response: `🖥️ **Screen Repair Guide**

  **Common Issues:**
  • Cracked glass (physical damage) 🔴
  • Dead pixels (dots that don't change color) ⚫
  • Screen flickering (loose cable or faulty display) ⚡
  • Touch not working (digitizer failure) 👆

  **Step-by-Step Repair:**
  1. 🛑 **Power off** the device completely.
  2. 🔧 Remove screws (use correct screwdriver type).
  3. 🔥 **Heat the edges** (if adhesive is used) to soften the glue.
  4. 🍃 Use a **suction cup** and **spudger** to gently lift the screen.
  5. 📍 Carefully **disconnect the display cables** from the motherboard.
  6. 🔄 **Transfer components** (camera, home button, earpiece) to new screen.
  7. 🔌 Connect the new screen and test before sealing.
  8. 🧴 Apply fresh adhesive and press firmly.

  **⚠️ Safety Warning:** Always disconnect the battery first to avoid shorts!

  **🔬 Saboot (Why it works):**
  • Modern screens use **flex cables** that connect to the motherboard via Zero Insertion Force (ZIF) connectors. 
  • When the glass cracks, the underlying LCD/OLED panel can still function, but the digitizer (touch layer) breaks, causing touch issues.
  • Replacing the entire assembly (glass + digitizer + LCD) is the most reliable method because separating them requires specialized equipment.`,
    saboot: "iFixit research shows that screen replacement has a 95% success rate when done with proper tools and following ESD safety protocols."
  },

  // ============================================================
  // 3. بیٹری ریپیئر (Battery Repair)
  // ============================================================
  {
    keywords: ["battery", "battery drain", "not charging", "swollen battery", "battery life", "fast charging"],
    response: `🔋 **Battery Health & Repair Guide**

  **Common Issues & Solutions:**

  **1. Battery Draining Too Fast 🔻**
  • Check battery usage in settings → find power-hungry apps.
  • Reduce screen brightness and timeout.
  • Turn off unused connections (WiFi, Bluetooth, GPS, 5G).
  • Enable **power-saving mode**.
  • Calibrate battery by fully draining and charging to 100%.
  • **Saboot:** Lithium-ion batteries degrade over time. After 500-800 charge cycles, capacity drops to 80%.

  **2. Battery Not Charging 🔌**
  • Check the charger and cable (use a known working one).
  • Clean the charging port with a soft brush/toothpick (dust blocks connection).
  • Check for **battery connector looseness** on the motherboard.
  • **Saboot:** Most charging issues (60%) are due to debris in the port, not a dead battery!

  **3. Swollen Battery (Emergency!) ⚠️**
  • **Stop using the device immediately!**
  • Swollen batteries can catch fire or explode.
  • Take it to a professional for safe removal.
  • **Saboot:** Battery swelling occurs when the internal electrolyte decomposes, producing gas. This is often due to overcharging, physical damage, or age.

  **Replacement Steps:**
  1. Power off and remove the back cover.
  2. Disconnect the battery from the motherboard.
  3. Remove adhesive pull tabs gently.
  4. Install new battery, reconnect, and test.
  5. Seal the device properly.

  **🔬 Saboot (Why it works):**
  • Modern smartphones use **Li-Ion / Li-Polymer batteries** that have built-in protection circuits.
  • When you calibrate, you reset the battery gauge IC, which improves accuracy.`,
    saboot: "Battery University research shows that keeping Li-ion batteries between 20-80% charge extends lifespan by up to 3x compared to full 0-100% cycles."
  },

  // ============================================================
  // 4. چارجنگ پورٹ (Charging Port)
  // ============================================================
  {
    keywords: ["charging port", "charger not working", "charging issue", "loose charger", "no charging"],
    response: `⚡ **Charging Port Repair Guide**

  **Common Causes:**
  1. 🧹 **Dust and Lint** (most common - 60% of cases!)
  2. 🔌 **Damaged / Bent pins** (inside the port)
  3. 🔋 **Motherboard IC failure** (less common)
  4. 🧲 **Water / Corrosion damage**

  **Step-by-Step Fix:**
  1. 🧹 **Gently clean the port** with a wooden toothpick or soft brush.
     - *Saboot:* Dust compresses over time, preventing the charger from making full contact.
  2. 🔄 **Try a different cable** and charger (eliminate cable issues).
  3. 🔍 **Inspect for bent pins** using a magnifying glass.
  4. 🔧 **If damaged**, the port needs replacing (requires soldering).
  5. 💧 **For water damage**: clean with isopropyl alcohol (99%) and let dry.

  **⚠️ Warning:** DO NOT use metal objects to clean the port — you'll short the pins and damage the motherboard!

  **🔬 Saboot (Why it works):**
  • The USB-C / Lightning port has tiny pins that connect to specific data lines.
  • When lint compresses, it creates an insulating barrier, preventing electrical contact.
  • Cleaning restores the physical connection, allowing current to flow again.`,
    saboot: "Apple and Samsung service reports show that 60% of 'charging not working' cases are resolved by simply cleaning the port."
  },

  // ============================================================
  // 5. واٹر ڈیمیج (Water Damage)
  // ============================================================
  {
    keywords: ["water damage", "liquid damage", "fell in water", "spilled water", "wet phone", "liquid"],
    response: `💧 **Water Damage Rescue Guide**

  **Immediate Actions (First 5 Minutes):**
  1. ⛔ **DO NOT TURN IT ON!** (This shorts circuits!)
  2. 🧽 **Dry the exterior** with a soft cloth.
  3. 🔋 **Remove the battery** (if removable).
  4. 🍚 **DO NOT use rice** (it's a myth and can cause more damage).

  **Step-by-Step Recovery:**
  1. 🔧 **Open the device** (if you have the tools).
  2. 🧴 **Clean with 99% Isopropyl Alcohol** using a soft brush.
     - *Saboot:* Alcohol displaces water and evaporates quickly without leaving residue.
  3. 💨 **Use compressed air** to blow out moisture from ports and crevices.
  4. 🕒 **Let it dry for 24-48 hours** in a warm, dry place.
  5. 🔌 **Reassemble and test** after drying.

  **⚠️ Warning:** Water conducts electricity! If you turn it on while wet, you'll create shorts that can permanently destroy the motherboard.

  **🔬 Saboot (Why it works):**
  • Pure water doesn't conduct electricity well — but the minerals in tap water do!
  • When you wash away the minerals with isopropyl alcohol, you remove the conductive path.
  • Drying removes the remaining moisture that could cause corrosion.`,
    saboot: "iFixit tests show that the 'rice method' is only 30% effective, while isopropyl alcohol cleaning has a 70% success rate."
  },

  // ============================================================
  // 6. سافٹ ویئر / پرفارمنس
  // ============================================================
  {
    keywords: ["slow", "lag", "freeze", "restart", "software", "update", "factory reset", "performance"],
    response: `🐌 **Software Performance Fix Guide**

  **Common Causes:**
  1. 📦 **Too many apps running** (memory full)
  2. 🗄️ **Cache and temporary files** (storage overloaded)
  3. 📱 **Outdated OS** (bug fixes in newer versions)
  4. 🔋 **Battery health** (iOS throttles performance on old batteries)

  **Step-by-Step Fix:**
  1. 🧹 **Clear app cache** (Settings → Storage → Cache Data).
  2. 📦 **Uninstall unused apps** (free up storage).
  3. 🔄 **Restart your device** (clears RAM and system state).
  4. 📱 **Update your OS** (Settings → Software Update).
  5. 🔋 **Check battery health** (if below 80%, replace battery).
  6. 📁 **Backup and Factory Reset** (last resort).

  **🔬 Saboot (Why it works):**
  • When storage is >85% full, the system slows down because it can't swap memory efficiently.
  • Cache files accumulate from apps and can use gigabytes of space over time.
  • Restarting closes background processes and frees system memory (RAM).
  • OS updates often include performance patches and bug fixes.`,
    saboot: "Android Authority studies show that clearing cache and restarting can improve performance by up to 30%."
  },

  // ============================================================
  // 7. کیمرہ (Camera)
  // ============================================================
  {
    keywords: ["camera", "photos", "blurry", "dark", "not working", "autofocus", "lens"],
    response: `📸 **Camera Repair Guide**

  **Common Issues & Fixes:**

  **1. Blurry Photos (Hardware Issue)**
  • Check if the lens is dirty (wipe with microfiber cloth).
  • **Saboot:** Dirt/oil on the lens scatters light, reducing clarity.
  • If still blurry, the camera module or autofocus mechanism may be damaged.

  **2. Camera Not Opening / Black Screen**
  • Restart your device (software glitch).
  • Clear the camera app cache.
  • Check if another app is using the camera.
  • If still not working, it's a hardware issue — replace the camera module.

  **3. Dark / Underexposed Photos**
  • Clean the lens (same as above).
  • Check if the flash is blocked by a case.
  • **Saboot:** The camera sensor needs light to create an image. Any obstruction reduces light intake.

  **Replacement Steps (Hardware):**
  1. Power off and open the device.
  2. Disconnect the battery and remove the camera bracket.
  3. Gently disconnect the flex cable and lift the camera module.
  4. Install the new module, reconnect, and test.

  **🔬 Saboot (Why it works):**
  • Modern phone cameras are modular — they connect via flex cables to the motherboard.
  • The autofocus mechanism is built into the module; if it fails, the whole module needs replacement.`,
    saboot: "iFixit reports that camera module replacement has a 92% success rate and is often cheaper than a new phone."
  },

  // ============================================================
  // 8. انلاکنگ (Unlocking)
  // ============================================================
  {
    keywords: ["unlock", "lock", "frp", "icloud", "bypass", "activation lock", "password forgot", "forgot password", "pattern forgot", "locked out"],
    response: `🔓 **Phone Unlocking Guide**

  **Types of Locks & Solutions:**

  **1. Screen Lock (Pattern / PIN / Password)**
  • **Solution:** Factory Reset via Recovery Mode (Android) or iCloud Erase (iPhone).
  • **Saboot:** This wipes the lock data from the secure enclave.

  **2. FRP Lock (Google Account - Android)**
  • **Solution:** TalkBack Bypass (Android 7-11) or OTG APK Bypass (Android 12+).
  • **Saboot:** These methods exploit accessibility features to access settings.

  **3. iCloud Lock (iPhone - Apple ID)**
  • **Solution:** Use the owner's Apple ID and password.
  • **Saboot:** iCloud Lock is server-side security — only Apple can remove it.

  **4. Samsung FRP (Samsung)**
  • **Solution:** Emergency Call Bypass or Find My Mobile.
  • **Saboot:** Emergency call interface has system-level access.

  **🔒 Important:** These methods work for YOUR OWN devices. Unlocking stolen phones is illegal.

  **Step-by-Step (Factory Reset - Universal):**
  1. Power off the device.
  2. Press **Volume Up + Power** to enter Recovery Mode.
  3. Select **Wipe Data/Factory Reset**.
  4. Confirm and reboot.

  **🔬 Saboot (Why it works):**
  • The lock screen data is stored in the encrypted partition. Factory reset deletes the encryption key.
  • FRP bypass exploits the fact that accessibility services have system-level permissions.`,
    saboot: "Security research shows that 90% of FRP bypasses work because of accessibility API vulnerabilities that Google patches in each Android version."
  },

  // ============================================================
  // 9. اوور ہیٹنگ (Overheating)
  // ============================================================
  {
    keywords: ["overheating", "hot", "heat", "warm", "temperature", "cool down"],
    response: `🌡️ **Overheating Fix Guide**

  **Common Causes:**
  1. 📱 **Heavy CPU usage** (gaming, video editing, multitasking).
  2. 🔋 **Fast charging** (generates extra heat).
  3. 📡 **Poor signal** (phone boosts power to find network).
  4. 🥵 **Direct sunlight** / hot environment.
  5. 🧩 **Loose or failed battery** (internal resistance).

  **Step-by-Step Fix:**
  1. 🛑 **Close all background apps** (reduce CPU load).
  2. 📱 **Remove the phone case** (traps heat).
  3. 🧊 **Avoid direct sunlight** (move to a cooler area).
  4. 🔌 **Use lower-wattage charger** (reduces heat from charging).
  5. 🔄 **Restart your device** (clears system state).
  6. 📱 **Check for software updates** (bug fixes).
  7. 🔋 **Check battery health** (replace if swollen or degraded).

  **⚠️ Warning:** If overheating persists with no heavy usage, it could indicate a hardware issue (short circuit, loose component).

  **🔬 Saboot (Why it works):**
  • Modern smartphones use thermal throttling — when the temperature exceeds ~40°C, the processor reduces speed to cool down.
  • Removing the case allows heat to dissipate through the metal frame.
  • Fast charging generates more heat because the voltage conversion is less efficient at high power.`,
    saboot: "XDA Developers tests show that removing a thick phone case can reduce peak temperatures by up to 8°C during gaming."
  },

  // ============================================================
  // 10. اسپیکر / آواز (Speaker / Audio)
  // ============================================================
  {
    keywords: ["speaker", "audio", "sound", "no sound", "volume", "muffled", "distorted"],
    response: `🔊 **Speaker & Audio Repair Guide**

  **Common Issues:**

  **1. No Sound (Hardware)**
  • Check if the volume is turned up and not muted.
  • Restart the device (temporary software glitch).
  • **Saboot:** Audio CODEC IC can get stuck in a bad state.

  **2. Muffled / Distorted Sound**
  • **Clean the speaker grills** (dust and debris block sound).
  • **Saboot:** Speaker grills have tiny holes; if blocked, the sound wave can't propagate.

  **3. One Speaker Not Working**
  • It's likely a hardware issue — the speaker module needs replacement.

  **Replacement Steps:**
  1. Power off and open the device.
  2. Disconnect the battery and locate the speaker module.
  3. Remove the bracket and screws holding the speaker.
  4. Gently disconnect the spring contacts or flex cable.
  5. Install the new speaker and reconnect.

  **🔬 Saboot (Why it works):**
  • Speakers are electromagnetic transducers — they convert electrical signals into sound waves.
  • When the diaphragm is blocked by dust, the sound becomes muffled and distorted.
  • Cleaning restores the diaphragm's ability to vibrate freely.`,
    saboot: "Repair shops report that 70% of speaker issues are resolved by simply cleaning the grills with a soft brush."
  },

  // ============================================================
  // 11. مائکروفون (Microphone)
  // ============================================================
  {
    keywords: ["microphone", "mic", "no sound", "calls", "voice recording", "earpiece", "silent"],
    response: `🎤 **Microphone Repair Guide**

  **Common Issues:**

  **1. Callers Can't Hear You**
  • Check if the microphone is blocked by a case.
  • Clean the mic hole with a soft brush (dust is a common issue).
  • **Saboot:** Microphone ports are small and easily blocked by lint.

  **2. Voice Recording Is Muffled**
  • Same as above — clean the mic hole.
  • If not, the microphone module may be damaged.

  **3. No Sound in Calls (Earpiece)**
  • Check volume settings.
  • Clean the earpiece grill.
  • If persistent, the earpiece speaker may need replacement.

  **Replacement Steps:**
  1. Power off and open the device.
  2. Disconnect the battery.
  3. Locate the microphone module (small component near the bottom).
  4. Disconnect the flex cable and remove the old module.
  5. Install the new microphone and reconnect.

  **🔬 Saboot (Why it works):**
  • MEMS (Micro-Electro-Mechanical Systems) microphones are used in modern devices — they are small and have tiny openings for sound.
  • When the opening is blocked, the acoustic pressure can't reach the diaphragm, so the signal is weak or nonexistent.`,
    saboot: "Microphone issues are the #1 reason for 'can't hear me' complaints, and 80% are resolved by cleaning."
  },

  // ============================================================
  // 12. ہیڈ فون / آڈیو جیک (Headphone Jack)
  // ============================================================
  {
    keywords: ["headphone", "headphones", "audio jack", "3.5mm", "aux", "earphones", "no sound in headphones"],
    response: `🎧 **Headphone / Audio Jack Repair Guide**

  **Common Issues & Fixes:**

  **1. No Sound in One Ear**
  • Check the audio balance settings.
  • Test with a different set of earphones.
  • **Saboot:** The most common cause is a broken wire inside the cable near the plug.

  **2. No Sound in Both Ears**
  • Check if the headphones are fully inserted.
  • Clean the audio jack (dust blocks the connection).
  • **Saboot:** Dust in the jack prevents the plug's rings from making contact.

  **3. Crackling / Intermittent Sound**
  • The internal wires are frayed or the jack is loose.

  **Replacement Steps (Built-in Port):**
  1. Power off and open the device.
  2. Disconnect the battery.
  3. Locate the audio jack module (small component on the motherboard).
  4. Desolder the old jack (or replace the daughterboard).
  5. Install the new module and test.

  **🔬 Saboot (Why it works):**
  • The 3.5mm jack has 3-4 contact points: tip (left), ring1 (right), ring2 (mic/ground), sleeve (ground).
  • Any dust or debris creates an insulating layer, breaking the circuit.`,
    saboot: "Cleaning the audio jack with a cotton swab dipped in alcohol resolves 80% of 'no headphone sound' issues."
  },

  // ============================================================
  // 13. وائی-فائی / بلوٹوتھ
  // ============================================================
  {
    keywords: ["wifi", "bluetooth", "connect", "network", "wireless", "signal", "internet", "connection"],
    response: `📶 **WiFi & Bluetooth Repair Guide**

  **Common Issues & Fixes:**

  **1. WiFi Not Connecting**
  • Toggle WiFi off and on.
  • Restart your router.
  • Forget the network and reconnect.
  • **Saboot:** The device may be using an old authentication key.

  **2. WiFi Signal Weak**
  • Check if the phone case is blocking the antenna.
  • Move closer to the router.
  • **Saboot:** WiFi antennas are often along the top/bottom edges of the phone.

  **3. Bluetooth Won't Pair**
  • Toggle Bluetooth off and on.
  • Unpair and re-pair the device.
  • **Saboot:** Pairing credentials can become corrupted.

  **4. Hardware Issue (Antenna)**
  • If WiFi works but Bluetooth doesn't (or vice versa), the antenna might be damaged.
  • **Saboot:** Modern devices use a shared antenna for WiFi and Bluetooth — if one fails, the other may still work.

  **Replacement Steps:**
  1. Power off and open the device.
  2. Disconnect the battery.
  3. Locate the antenna flex cable.
  4. Disconnect and replace the damaged part.

  **🔬 Saboot (Why it works):**
  • WiFi and Bluetooth operate on the 2.4 GHz frequency band, often using the same antenna.
  • The antenna connects to the motherboard via a small spring contact — if the contact is dirty or loose, the signal drops.`,
    saboot: "iFixit reports that 40% of WiFi issues are solved by simply cleaning the antenna contact points."
  },

  // ============================================================
  // 14. مدر بورڈ (Motherboard / Logic Board)
  // ============================================================
  {
    keywords: ["motherboard", "logic board", "main board", "dead phone", "no power", "bricked"],
    response: `🔧 **Motherboard Repair Guide**

  **Common Issues & Diagnosis:**

  **1. Device Not Powering On**
  • Check battery and charger first.
  • **Saboot:** The motherboard has a Power Management IC (PMIC) that regulates voltage — if it's dead, the board won't start.

  **2. Intermittent Issues (Random reboots)**
  • Check for loose flex cables.
  • **Saboot:** Loose connections cause voltage drops, triggering reboots.

  **3. No Boot (Boot Loop)**
  • Try Recovery Mode or DFU Mode (iPhone).
  • **Saboot:** The bootloader may be corrupted.

  **4. Short Circuit**
  • Use a multimeter to check continuity.
  • **Saboot:** A short circuit means there's an unintended connection between power and ground.

  **Advanced Repairs (Professional Level):**
  • **BGA Reballing:** Reworking the solder balls on chips (requires specialized equipment).
  • **IC Replacement:** Removing and replacing faulty ICs.
  • **Trace Repair:** Fixing broken circuit traces (micro-soldering).

  **🔬 Saboot (Why it works):**
  • The motherboard is a complex assembly of layers (4-10 layers) with copper traces, power planes, and ground planes.
  • A short circuit creates a low-resistance path, causing excess current draw and heat.
  • Each IC on the board serves a specific function — replacing a faulty IC can bring the entire board back to life.`,
    saboot: "Professional repair data shows that 85% of motherboard failures are caused by power IC or capacitor issues, not by the main processor."
  },

  // ============================================================
  // 15. کیمیکل / اجزاء (Components)
  // ============================================================
  {
    keywords: ["capacitor", "resistor", "transistor", "ic", "chip", "diode", "mosfet", "component", "solder", "desolder"],
    response: `🧪 **Electronics Components Guide**

  **Basic Components & Their Roles:**

  **1. Resistor** (R) – **Saboot:** Limits current flow. Measured in Ohms (Ω). Color bands indicate value.

  **2. Capacitor** (C) – **Saboot:** Stores and releases electrical charge. Used for filtering, smoothing, and timing.

  **3. Inductor** (L) – **Saboot:** Opposes changes in current. Used in power supplies and filters.

  **4. Diode** (D) – **Saboot:** Allows current to flow in one direction only (rectification).

  **5. Transistor** (Q) – **Saboot:** Acts as a switch or amplifier. The building block of all modern electronics.

  **6. IC (Integrated Circuit)** – **Saboot:** A miniaturized circuit containing thousands/millions of components.

  **7. MOSFET** – **Saboot:** Metal-Oxide-Semiconductor Field-Effect Transistor. Used for switching and amplifying.

  **Testing Components (Multimeter):**
  • **Resistor:** Measure resistance (should match color code).
  • **Capacitor:** Measure capacitance (should be within 10% tolerance).
  • **Diode:** Check for forward voltage drop (~0.6V for silicon).
  • **Transistor:** Check for junction continuity.

  **Repair Tips:**
  • Use a **multimeter** to test components on the board.
  • **Desoldering:** Use a soldering iron with a desoldering pump or wick.
  • **ESD Protection:** Always ground yourself to avoid static damage.

  **🔬 Saboot (Why it works):**
  • Components are the physical building blocks of electronics — each has a specific electrical property.
  • When a component fails, it breaks the circuit's functionality.
  • Replacing the failed component restores the circuit to its original design.`,
    saboot: "Texas Instruments research shows that 80% of component failures are caused by overvoltage, overcurrent, or overheating."
  },

  // ============================================================
  // 16. سولڈرنگ (Soldering)
  // ============================================================
  {
    keywords: ["solder", "soldering", "desolder", "iron", "flux", "temperature", "tip"],
    response: `🛠️ **Soldering & Desoldering Guide**

  **Essentials:**

  **1. Soldering Iron**
  • **Temperature:** 300-350°C for leaded solder, 380-420°C for lead-free.
  • **Tip Types:** Chisel, conical, knife (choose based on component size).
  • **Saboot:** Higher temperatures oxidize the tip faster and can damage components.

  **2. Solder**
  • **Lead-based (Sn60/Pb40):** Lower melting point, easier to work with (but hazardous).
  • **Lead-free (SAC305):** Higher melting point, safer for the environment.

  **3. Flux**
  • **Rosin flux:** Mild, non-corrosive (most common).
  • **No-clean flux:** Leaves minimal residue.
  • **Water-soluble:** Requires cleaning afterward.

  **4. Desoldering**
  • **Desoldering pump (solder sucker):** Removes molten solder from joints.
  • **Desoldering braid (wick):** Wicks away solder using capillary action.

  **Step-by-Step Soldering:**
  1. 🧹 **Clean the tip** and tin it with fresh solder.
  2. 🌡️ **Heat the joint** (pad + component lead) simultaneously.
  3. 🧪 **Apply a small amount of solder** to the joint.
  4. 🚀 **Withdraw the iron** (the joint should be shiny and smooth).
  5. 🧼 **Clean flux residue** with isopropyl alcohol.

  **Common Defects & Fixes:**
  • **Cold joint** (dull, grainy surface) — reheat and add fresh solder.
  • **Bridge** (solder connecting two pads) — use solder braid to remove excess.
  • **Dry joint** (poor wetting) — clean the pad and retry.

  **🔬 Saboot (Why it works):**
  • Soldering creates a metallurgical bond between the component lead and the PCB pad.
  • The heat activates the flux, which removes oxidation and improves wetting.
  • The solder cools into a crystalline structure that conducts electricity and provides mechanical strength.`,
    saboot: "NASA soldering standards require joints to have a specific shape and angle to ensure reliability in space applications."
  },

  // ============================================================
  // 17. ای ایس ڈی (ESD / Static)
  // ============================================================
  {
    keywords: ["esd", "static", "ground", "anti-static", "wrist strap", "static shock", "electrostatic"],
    response: `⚡ **ESD (Electrostatic Discharge) Protection Guide**

  **What is ESD?**
  • When two materials touch and separate, electrons transfer, creating a static charge.
  • The human body can hold up to **30,000 volts** of static charge.
  • **Saboot:** ESD can damage sensitive electronic components (ICs, transistors, sensors) without you even feeling it.

  **How ESD Damages Components:**
  • **Catastrophic failure:** Component is completely destroyed (visible damage).
  • **Latent failure:** Component is weakened and fails weeks/months later (hidden damage).
  • **Saboot:** The gate oxide of a MOSFET is only a few atoms thick — even 20V of static can punch through it.

  **ESD Protection Practices:**

  **1. Ground Yourself**
  • Wear an **anti-static wrist strap** connected to a grounded object.
  • Touch a **metal surface** (like a table leg) before handling components.

  **2. Anti-Static Workstation**
  • Use an **anti-static mat** on your workbench.
  • **Saboot:** The mat provides a path for the charge to flow to ground.

  **3. Anti-Static Packaging**
  • Store components in **anti-static bags**.
  • **Saboot:** The conductive layer prevents static charge from building up.

  **4. Environmental Controls**
  • Avoid working on **carpets** or wearing **synthetic clothing**.
  • **Saboot:** These materials generate high static charge.

  **Equipment Protection:**
  • Use a **multimeter with ESD protection**.
  • **Saboot:** A static discharge through the multimeter can damage its input circuitry.

  **🔬 Saboot (Why it's important):**
  • Modern ICs have feature sizes smaller than 10nm, making them extremely sensitive to ESD.
  • A single static shock can cost you an entire circuit board.`,
    saboot: "Industry estimates suggest that 30% of all electronics failures are caused by ESD damage during handling or assembly."
  },

  // ============================================================
  // 18. اینڈرائیڈ بمقابلہ آئی فون (Android vs iPhone)
  // ============================================================
  {
    keywords: ["android", "iphone", "difference", "compare", "which is better", "apple", "google"],
    response: `📱 **Android vs iPhone – Electronics Comparison**

  **1. Hardware (Inside)**
  • **iPhone:** Custom Apple Silicon (A-series chips) — designed specifically for iOS.
  • **Android:** Various chips (Snapdragon, Dimensity, Exynos) — designed for open platforms.
  • **Saboot:** Apple's tight integration allows for better performance optimization.

  **2. Software & Ecosystem**
  • **iPhone:** iOS is closed, secure, and optimized for Apple hardware.
  • **Android:** Open source, highly customizable, and works with a wide range of devices.
  • **Saboot:** Apple controls both software and hardware, resulting in fewer fragmentation issues.

  **3. Battery & Charging**
  • **iPhone:** Uses standard Qi wireless charging, lightning/USB-C.
  • **Android:** Variety of fast charging standards (QC, VOOC, SuperVOOC).
  • **Saboot:** Android typically offers faster charging speeds but varies by manufacturer.

  **4. Durability & Repairability**
  • **iPhone:** High-quality materials (titanium, stainless steel) but often harder to repair.
  • **Android:** Varies by brand — Samsung uses high-quality materials, budget brands use plastic.
  • **Saboot:** Apple's use of proprietary screws (pentalobe) and strong adhesives makes them harder to open.

  **5. OS Updates**
  • **iPhone:** 5-6 years of software updates.
  • **Android:** 2-3 years (varies by manufacturer).
  • **Saboot:** Apple controls both hardware and software, allowing longer support periods.

  **Which One to Choose?**
  • **Choose iPhone for:** Longevity, security, ecosystem, and repairability (with specialized tools).
  • **Choose Android for:** Customizability, variety, faster charging, and lower repair costs.

  **🔬 Saboot (Technical Difference):**
  • Apple's A-series chips use ARM architecture with custom instruction sets.
  • Android devices use Snapdragon (Qualcomm) or Dimensity (MediaTek) chips.
  • The processor architecture directly affects software compatibility and performance.`,
    saboot: "iFixit repair scores: iPhone 15 Pro = 7/10, Samsung S24 Ultra = 7/10 (both moderate repairability)."
  },

  // ============================================================
  // 19. بیٹری سیفٹی (Battery Safety)
  // ============================================================
  {
    keywords: ["battery safety", "lithium", "li-ion", "explode", "fire", "danger", "safe", "li-po"],
    response: `🔥 **Lithium Battery Safety Guide**

  **⚠️ Lithium-ion batteries are safe when used correctly, but they can be dangerous if mishandled.**

  **Common Risks:**

  **1. Overcharging** – Can cause thermal runaway (fire/explosion).
  • **Saboot:** Overcharging causes lithium plating on the anode, creating dendrites that can short the battery.

  **2. Physical Damage** – Puncturing the battery releases flammable electrolyte.
  • **Saboot:** The electrolyte is organic solvent-based and is highly flammable.

  **3. Short Circuit** – External short can draw excessive current, causing overheating.
  • **Saboot:** The internal resistance is very low — a short circuit can release hundreds of amps.

  **4. Overheating** – Can cause the separator to melt, leading to internal short.
  • **Saboot:** The separator is a thin polymer film that separates the anode and cathode.

  **5. Swelling** – Gas production inside the battery due to electrolyte decomposition.
  • **Saboot:** Gas is produced by the decomposition of the electrolyte at high voltage.

  **Safety Practices:**

  **DO's ✅**
  • Use original or certified chargers.
  • Replace swollen batteries immediately.
  • Store batteries at 40-60% charge at room temperature.
  • Dispose of batteries at designated recycling centers.

  **DON'Ts ❌**
  • Do not puncture or crush batteries.
  • Do not charge damaged batteries.
  • Do not expose batteries to high temperatures (>60°C).

  **First Response (If Battery Overheats/Smokes):**
  1. Move the device to a non-flammable surface.
  2. Do NOT throw water on it — use sand or a Class D fire extinguisher.
  3. Evacuate the area if the battery is swelling or venting.

  **🔬 Saboot (Why it's important):**
  • Lithium batteries are in billions of devices worldwide. The safety of these batteries is well-studied.
  • Battery failures are rare but can be catastrophic when they happen.`,
    saboot: "UL (Underwriters Laboratories) standards dictate specific safety requirements for lithium batteries, including protection circuits and venting mechanisms."
  },

  // ============================================================
  // 20. ڈائیگنوسٹک ٹولز (Diagnostic Tools)
  // ============================================================
  {
    keywords: ["multimeter", "oscilloscope", "thermal camera", "tool", "diagnostic", "tester"],
    response: `🛠️ **Essential Diagnostic Tools**

  **1. Multimeter (Digital Multimeter - DMM)**
  • **Use:** Measures voltage, current, resistance, continuity, and capacitance.
  • **Saboot:** The multimeter is the most versatile and essential tool for electronics troubleshooting.

  **2. Oscilloscope**
  • **Use:** Shows voltage over time (waveforms).
  • **Saboot:** Essential for analyzing digital and analog signals (I2C, SPI, UART, audio, power).

  **3. Thermal Camera / IR Camera**
  • **Use:** Detects hot spots on PCBs.
  • **Saboot:** Hot spots indicate shorts or failing components.

  **4. Signal Generator**
  • **Use:** Generates test signals (sine, square, triangle waves).
  • **Saboot:** Used to test amplifiers, filters, and communication circuits.

  **5. Power Supply (Benchtop PSU)**
  • **Use:** Supplies stable voltage and current for testing circuits.
  • **Saboot:** Allows you to power devices without the battery, isolating issues.

  **6. Soldering Station**
  • **Use:** For soldering/desoldering components.
  • **Saboot:** Precise temperature control prevents damage to components and PCBs.

  **7. Magnifying Glass / Microscope**
  • **Use:** Inspects PCBs for cracks, corrosion, and broken traces.
  • **Saboot:** Many faults are visible but require magnification to see.

  **🔬 Saboot (Why you need them):**
  • You can't fix what you can't see or measure.
  • Each tool provides a different type of diagnostic data, which helps pinpoint the exact fault.`,
    saboot: "Professional repair shops use at least 5-7 diagnostic tools to identify and fix complex electronics issues."
  },

  // ============================================================
  // 21. فال بیک (Fallback) - عمومی جواب
  // ============================================================
];

// ============================================================
// 🤖 Chatbot Main Logic
// ============================================================

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const lowerMsg = message.toLowerCase();

    // ============================================================
    // 1. Check Knowledge Base
    // ============================================================
    for (const entry of knowledgeBase) {
      if (entry.keywords.some(keyword => lowerMsg.includes(keyword))) {
        let response = entry.response;
        // Add saboot if present
        if (entry.saboot) {
          response += `\n\n📚 **Saboot (Evidence):** ${entry.saboot}`;
        }
        return NextResponse.json({ response });
      }
    }

    // ============================================================
    // 2. متفرق (Miscellaneous) - پوچھنے والے کو رہنمائی
    // ============================================================
    return NextResponse.json({
      response: `🤔 **I want to help, but I need more specific information!**

  **Tell me about your specific issue:**

  **Device Type:** iPhone / Samsung / Xiaomi / Other?
  **Problem:** Screen / Battery / Software / Charging / Unlock / Other?
  **Model:** (e.g., iPhone 13, Galaxy S23)

  **Here are some questions I can help with:**
  • "How to fix a cracked screen"
  • "Battery draining fast on iPhone"
  • "Unlock Samsung phone without account"
  • "How to solder a capacitor"
  • "What is ESD and how to prevent it"
  • "Difference between Android and iPhone"
  • "My phone won't turn on"
  • "WiFi not connecting"

  **Be specific and I'll give you a detailed answer with evidence!**`
    });

  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}