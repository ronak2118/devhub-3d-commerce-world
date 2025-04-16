
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  features: string[];
  modelPath: string;
  images: string[];
  company: string;
  discount?: number;
  inStock: number;
}

export const products: Product[] = [
  {
    id: "smart-hub-1",
    name: "DevHub Smart Home Controller",
    price: 149.99,
    category: "Smart Home",
    description: "The flagship DevHub Smart Home Controller allows you to manage all your IoT devices from one central hub. With voice control, touch display, and advanced automation capabilities.",
    features: [
      "7-inch HD touchscreen display",
      "Voice assistant integration",
      "Controls up to 100 devices",
      "Wi-Fi 6 and Bluetooth 5.2",
      "Matter and Thread compatible"
    ],
    modelPath: "/models/smart-hub.glb",
    images: [
      "https://images.unsplash.com/photo-1558089687-f282ffcbc0d4?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1544085311-11a028465b03?ixlib=rb-4.0.3"
    ],
    company: "DevHub Technologies",
    inStock: 45
  },
  {
    id: "sensor-pack-1",
    name: "Environmental Sensor Pack",
    price: 89.99,
    category: "Sensors",
    description: "Monitor your home environment with this comprehensive sensor pack. Includes temperature, humidity, air quality, and motion sensors that connect seamlessly with the DevHub controller.",
    features: [
      "Real-time environmental monitoring",
      "Battery life up to 18 months",
      "Wireless range up to 300 feet",
      "Customizable alerts",
      "Historical data tracking"
    ],
    modelPath: "/models/sensor-pack.glb",
    images: [
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?ixlib=rb-4.0.3"
    ],
    company: "SensorTech",
    inStock: 78
  },
  {
    id: "smart-lock-1",
    name: "Secure Smart Lock Pro",
    price: 199.99,
    category: "Security",
    description: "Upgrade your home security with this advanced smart lock featuring fingerprint, PIN code, and smartphone access. Integrates with the DevHub ecosystem for automated security protocols.",
    features: [
      "Fingerprint and PIN access",
      "Remote unlock via app",
      "Automatic lock detection",
      "Tamper alerts",
      "Activity logging"
    ],
    modelPath: "/models/smart-lock.glb",
    images: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3"
    ],
    company: "SecureLink",
    inStock: 32
  },
  {
    id: "camera-system-1",
    name: "360° Security Camera",
    price: 129.99,
    category: "Security",
    description: "Full coverage security with 360-degree rotation, night vision, and motion tracking. AI-powered to distinguish between people, pets, and objects.",
    features: [
      "Full 360° rotation",
      "4K HDR video",
      "Advanced night vision",
      "Two-way audio",
      "Cloud and local storage options"
    ],
    modelPath: "/models/camera.glb",
    images: [
      "https://images.unsplash.com/photo-1580983230786-f42118758df0?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3"
    ],
    company: "VisionGuard",
    inStock: 56
  },
  {
    id: "gateway-1",
    name: "DevHub Network Gateway",
    price: 79.99,
    category: "Connectivity",
    description: "Extend your smart home network with this powerful gateway that ensures all your IoT devices stay connected even in larger homes.",
    features: [
      "Extends network up to 2500 sq ft",
      "Supports up to 200 devices",
      "Mesh networking capability",
      "Encrypted data transmission",
      "Power backup feature"
    ],
    modelPath: "/models/gateway.glb",
    images: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1594731804964-c6c48a6f4222?ixlib=rb-4.0.3"
    ],
    company: "DevHub Technologies",
    inStock: 62
  },
  {
    id: "smart-plug-1",
    name: "Smart Power Outlet Pack",
    price: 59.99,
    category: "Power Management",
    description: "Convert any appliance into a smart device with these intelligent power outlets. Monitor power usage and control remotely.",
    features: [
      "Energy usage monitoring",
      "Scheduling capabilities",
      "Overload protection",
      "Voice assistant compatible",
      "Pack of 4 outlets"
    ],
    modelPath: "/models/smart-plug.glb",
    images: [
      "https://images.unsplash.com/photo-1621319332247-ce870cdad56c?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1550029402-226115b7c579?ixlib=rb-4.0.3"
    ],
    company: "PowerSmart",
    inStock: 89
  },
  // Smart Home Category
  {
    id: "smart-hub-2",
    name: "DevHub Pro Controller",
    price: 249.99,
    category: "Smart Home",
    description: "The premium DevHub controller with expanded capabilities, including advanced automation, AI learning, and multi-room control.",
    features: [
      "10-inch 4K touchscreen display",
      "Advanced voice recognition",
      "Controls unlimited devices",
      "Wi-Fi 6E and Bluetooth 5.3",
      "Custom automation scenarios"
    ],
    modelPath: "/models/smart-hub.glb",
    images: [
      "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1544085311-11a028465b03?ixlib=rb-4.0.3"
    ],
    company: "DevHub Technologies",
    discount: 10,
    inStock: 24
  },
  {
    id: "smart-hub-3",
    name: "DevHub Mini Controller",
    price: 99.99,
    category: "Smart Home",
    description: "Compact version of the DevHub controller, perfect for apartments or single rooms. All essential features in a smaller package.",
    features: [
      "5-inch touchscreen display",
      "Voice control integration",
      "Controls up to 50 devices",
      "Wi-Fi 6 and Bluetooth 5.1",
      "Wall-mountable design"
    ],
    modelPath: "/models/smart-hub.glb",
    images: [
      "https://images.unsplash.com/photo-1561166428-bcc6d0baa8c9?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixlib=rb-4.0.3"
    ],
    company: "DevHub Technologies",
    inStock: 38
  },
  {
    id: "smart-hub-4",
    name: "DevHub Wall Panel",
    price: 179.99,
    category: "Smart Home",
    description: "Elegant wall-mounted smart home controller with touchscreen interface. Designed to replace traditional light switches while offering full home control.",
    features: [
      "7-inch flush wall display",
      "Glass and aluminum finish",
      "Scene control and scheduling",
      "Ambient light sensor",
      "Customizable interface"
    ],
    modelPath: "/models/smart-hub.glb",
    images: [
      "https://images.unsplash.com/photo-1585140001819-7b21e1f30a89?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1532706030058-9a3f8d542b58?ixlib=rb-4.0.3"
    ],
    company: "DevHub Technologies",
    inStock: 29
  },
  {
    id: "smart-hub-5",
    name: "DevHub Voice Assistant",
    price: 79.99,
    category: "Smart Home",
    description: "Standalone voice assistant speaker that integrates with the DevHub ecosystem. Control your smart home with just your voice.",
    features: [
      "360° far-field voice recognition",
      "Premium audio quality",
      "Multi-room audio support",
      "Privacy-focused design",
      "Device intercom functionality"
    ],
    modelPath: "/models/smart-hub.glb",
    images: [
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1512446816042-444d641267d4?ixlib=rb-4.0.3"
    ],
    company: "DevHub Technologies",
    discount: 15,
    inStock: 42
  },
  
  // Sensors Category
  {
    id: "sensor-pack-2",
    name: "Temperature & Humidity Pro Sensor",
    price: 39.99,
    category: "Sensors",
    description: "Professional-grade temperature and humidity sensor with high accuracy and extended range. Ideal for critical monitoring situations.",
    features: [
      "±0.1°C temperature accuracy",
      "±1% humidity accuracy",
      "Battery life of 24 months",
      "Historical data graphs",
      "Custom alert thresholds"
    ],
    modelPath: "/models/sensor-pack.glb",
    images: [
      "https://images.unsplash.com/photo-1600350192755-e0601d91a7a9?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1621012430307-b4774b78d3cb?ixlib=rb-4.0.3"
    ],
    company: "SensorTech",
    inStock: 63
  },
  {
    id: "sensor-pack-3",
    name: "Water Leak Detection System",
    price: 69.99,
    category: "Sensors",
    description: "Comprehensive water leak detection system with multiple sensors for whole-home protection. Receive alerts before water damage occurs.",
    features: [
      "Set of 4 leak sensors",
      "Audible and app alerts",
      "Easy installation",
      "5-year battery life",
      "Integration with water shutoff valves"
    ],
    modelPath: "/models/sensor-pack.glb",
    images: [
      "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1585399073500-e11f8f8c16e1?ixlib=rb-4.0.3"
    ],
    company: "SensorTech",
    inStock: 47
  },
  {
    id: "sensor-pack-4",
    name: "Air Quality Monitor Pro",
    price: 129.99,
    category: "Sensors",
    description: "Advanced air quality monitor that detects PM2.5, VOCs, CO2, temperature, and humidity. Get real-time data about your indoor air quality.",
    features: [
      "Multi-parameter monitoring",
      "E-ink display",
      "Historical trends analysis",
      "Integration with HVAC systems",
      "Air quality recommendations"
    ],
    modelPath: "/models/sensor-pack.glb",
    images: [
      "https://images.unsplash.com/photo-1585413441907-9b5842911083?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c76?ixlib=rb-4.0.3"
    ],
    company: "AirSense",
    discount: 5,
    inStock: 31
  },
  {
    id: "sensor-pack-5",
    name: "Motion & Occupancy Sensor Pack",
    price: 79.99,
    category: "Sensors",
    description: "Set of 3 advanced motion and occupancy sensors for precise room presence detection. Ideal for automation and energy saving.",
    features: [
      "Pet-immune detection",
      "Adjustable sensitivity",
      "Wide 160° detection angle",
      "Light level sensing",
      "Battery or USB power options"
    ],
    modelPath: "/models/sensor-pack.glb",
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1639037649045-c583d9328412?ixlib=rb-4.0.3"
    ],
    company: "SensorTech",
    inStock: 52
  },
  
  // Security Category
  {
    id: "smart-lock-2",
    name: "Keyless Entry Deadbolt",
    price: 149.99,
    category: "Security",
    description: "Retrofit smart lock that works with your existing deadbolt. Add smart capabilities without replacing your entire lock.",
    features: [
      "Works with existing keys",
      "Auto-unlock on approach",
      "Activity logs and alerts",
      "Share access remotely",
      "Battery backup system"
    ],
    modelPath: "/models/smart-lock.glb",
    images: [
      "https://images.unsplash.com/photo-1595750462440-7a3cddea259c?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1595750313768-e21c4fd92d1b?ixlib=rb-4.0.3"
    ],
    company: "SecureLink",
    inStock: 37
  },
  {
    id: "smart-lock-3",
    name: "Biometric Door Lock",
    price: 249.99,
    category: "Security",
    description: "Advanced door lock with fingerprint, facial recognition, PIN code, and physical key options for ultimate security and convenience.",
    features: [
      "Multi-factor authentication",
      "Anti-tampering alerts",
      "OLED display",
      "Vacation mode",
      "Emergency power bank connection"
    ],
    modelPath: "/models/smart-lock.glb",
    images: [
      "https://images.unsplash.com/photo-1641350953276-4c547f5e71da?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1622666323134-e91d0b682493?ixlib=rb-4.0.3"
    ],
    company: "SecureLink",
    discount: 8,
    inStock: 23
  },
  {
    id: "camera-system-2",
    name: "Outdoor Security Camera",
    price: 159.99,
    category: "Security",
    description: "Weather-resistant security camera with night vision, motion detection, and two-way audio. Monitor your property 24/7.",
    features: [
      "4K video with HDR",
      "150° wide-angle view",
      "Color night vision",
      "IP67 weatherproof",
      "Local and cloud storage options"
    ],
    modelPath: "/models/camera.glb",
    images: [
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?ixlib=rb-4.0.3"
    ],
    company: "VisionGuard",
    inStock: 41
  },
  {
    id: "camera-system-3",
    name: "Doorbell Camera Pro",
    price: 189.99,
    category: "Security",
    description: "Smart doorbell with HD camera, two-way talk, and advanced motion detection. Know who's at your door from anywhere.",
    features: [
      "Head-to-toe HD video",
      "Package detection",
      "Pre-recorded responses",
      "Custom motion zones",
      "Integrated alarm system"
    ],
    modelPath: "/models/camera.glb",
    images: [
      "https://images.unsplash.com/photo-1616992715942-5115b8068844?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1595750462440-7a3cddea259c?ixlib=rb-4.0.3"
    ],
    company: "VisionGuard",
    inStock: 35
  },
  {
    id: "security-system-1",
    name: "Complete Home Security System",
    price: 349.99,
    category: "Security",
    description: "All-in-one security solution with hub, motion sensors, door/window sensors, keypad, and siren. Everything you need to secure your home.",
    features: [
      "Professional monitoring option",
      "Cellular backup",
      "Battery backup",
      "Custom security modes",
      "Expandable with cameras"
    ],
    modelPath: "/models/smart-hub.glb",
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1541959365993-7027132a511d?ixlib=rb-4.0.3"
    ],
    company: "SecureLink",
    discount: 12,
    inStock: 19
  },
  
  // Connectivity Category
  {
    id: "gateway-2",
    name: "Wi-Fi 6E Mesh System",
    price: 299.99,
    category: "Connectivity",
    description: "Next-generation mesh Wi-Fi system covering up to 5,000 sq ft. Eliminates dead zones and provides fast, reliable internet throughout your home.",
    features: [
      "Wi-Fi 6E tri-band technology",
      "5,000 sq ft coverage",
      "2.5 Gbps WAN port",
      "Network security features",
      "Easy setup via app"
    ],
    modelPath: "/models/gateway.glb",
    images: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3"
    ],
    company: "NetLink",
    inStock: 26
  },
  {
    id: "gateway-3",
    name: "Smart Home Bridge",
    price: 69.99,
    category: "Connectivity",
    description: "Universal smart home bridge that connects various protocols including Zigbee, Z-Wave, and Bluetooth devices to your home network.",
    features: [
      "Multi-protocol support",
      "Local processing",
      "API for developers",
      "500+ device compatibility",
      "Regular firmware updates"
    ],
    modelPath: "/models/gateway.glb",
    images: [
      "https://images.unsplash.com/photo-1661075529139-d9d6aac66aa1?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1609692814857-d661dad14d09?ixlib=rb-4.0.3"
    ],
    company: "DevHub Technologies",
    inStock: 44
  },
  {
    id: "gateway-4",
    name: "5G IoT Gateway",
    price: 199.99,
    category: "Connectivity",
    description: "Future-proof your smart home with this 5G-enabled IoT gateway, providing high-speed internet connectivity without traditional broadband.",
    features: [
      "5G and LTE connectivity",
      "Backup internet solution",
      "Built-in battery backup",
      "Ethernet and USB ports",
      "Remote management"
    ],
    modelPath: "/models/gateway.glb",
    images: [
      "https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1605889911696-86f8fb146ef4?ixlib=rb-4.0.3"
    ],
    company: "NetLink",
    discount: 7,
    inStock: 21
  },
  
  // Power Management Category
  {
    id: "smart-plug-2",
    name: "Mini Smart Plug",
    price: 24.99,
    category: "Power Management",
    description: "Ultra-compact smart plug that won't block adjacent outlets. Control any device and monitor energy usage remotely.",
    features: [
      "Space-saving design",
      "Energy monitoring",
      "Timer functionality",
      "Away mode simulation",
      "Voice assistant compatible"
    ],
    modelPath: "/models/smart-plug.glb",
    images: [
      "https://images.unsplash.com/photo-1544451256-d79e9e199f1b?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1613578723472-f673a337662f?ixlib=rb-4.0.3"
    ],
    company: "PowerSmart",
    inStock: 72
  },
  {
    id: "smart-plug-3",
    name: "Outdoor Smart Outlet",
    price: 39.99,
    category: "Power Management",
    description: "Weather-resistant smart outlet for outdoor use. Perfect for holiday lights, water features, or garden equipment.",
    features: [
      "IP65 weatherproof rating",
      "Dual outlets independently controlled",
      "Scheduling and timers",
      "Manual override button",
      "Surge protection"
    ],
    modelPath: "/models/smart-plug.glb",
    images: [
      "https://images.unsplash.com/photo-1613578723472-f673a337662f?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1522157876446-32b5ef3e0fb3?ixlib=rb-4.0.3"
    ],
    company: "PowerSmart",
    inStock: 54
  },
  {
    id: "smart-plug-4",
    name: "Smart Power Strip",
    price: 49.99,
    category: "Power Management",
    description: "Advanced power strip with 6 individually controllable outlets and 4 USB ports. Perfect for entertainment centers or home offices.",
    features: [
      "Individual outlet control",
      "Surge protection",
      "Energy monitoring per outlet",
      "USB charging ports",
      "Scheduled power cycles"
    ],
    modelPath: "/models/smart-plug.glb",
    images: [
      "https://images.unsplash.com/photo-1544965838-54ef8406f868?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1622731938521-5bdb6cfd0d8c?ixlib=rb-4.0.3"
    ],
    company: "PowerSmart",
    discount: 10,
    inStock: 39
  },
  {
    id: "smart-switch-1",
    name: "In-Wall Smart Switch",
    price: 34.99,
    category: "Power Management",
    description: "Replace your standard light switch with this smart switch. Control lights remotely and set schedules without changing your fixtures.",
    features: [
      "Works without neutral wire",
      "Dimming capability",
      "LED status indicator",
      "Compatible with 3-way setups",
      "Scene integration"
    ],
    modelPath: "/models/smart-plug.glb",
    images: [
      "https://images.unsplash.com/photo-1560706902-e95686b9308a?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1566977802769-a94f8a4f7055?ixlib=rb-4.0.3"
    ],
    company: "PowerSmart",
    inStock: 61
  },
  {
    id: "smart-switch-2",
    name: "Smart Dimmer Switch",
    price: 44.99,
    category: "Power Management",
    description: "Advanced dimmer switch with customizable LED indicators and smooth dimming control. Create the perfect lighting atmosphere.",
    features: [
      "Customizable LED indicators",
      "Smooth dimming control",
      "Fade on/off feature",
      "Power monitoring",
      "Scheduled brightness levels"
    ],
    modelPath: "/models/smart-plug.glb",
    images: [
      "https://images.unsplash.com/photo-1561222842-4638bcbed2a7?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1514997851204-226bd3e83eba?ixlib=rb-4.0.3"
    ],
    company: "PowerSmart",
    inStock: 48
  },
  
  // Smart Appliances
  {
    id: "smart-appliance-1",
    name: "Smart Thermostat Pro",
    price: 199.99,
    category: "Smart Appliances",
    description: "AI-powered thermostat that learns your schedule and preferences to optimize your home's temperature and energy usage.",
    features: [
      "Learning algorithm",
      "Room sensors compatible",
      "Energy usage reports",
      "HVAC monitoring",
      "Geofencing capabilities"
    ],
    modelPath: "/models/smart-hub.glb",
    images: [
      "https://images.unsplash.com/photo-1613825787627-5fecd4bb0a50?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1567138048003-469780c33ac5?ixlib=rb-4.0.3"
    ],
    company: "ClimateIQ",
    discount: 15,
    inStock: 36
  },
  {
    id: "smart-appliance-2",
    name: "Smart Refrigerator",
    price: 2499.99,
    category: "Smart Appliances",
    description: "Connected refrigerator with internal cameras, inventory tracking, and touchscreen interface. Know what's in your fridge from anywhere.",
    features: [
      "Internal cameras",
      "Food expiration tracking",
      "Recipe suggestions",
      "Family calendar",
      "Voice assistant built-in"
    ],
    modelPath: "/models/smart-hub.glb",
    images: [
      "https://images.unsplash.com/photo-1589651565922-0400ef7fb7c8?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1549407683-48cf4ed8a1c7?ixlib=rb-4.0.3"
    ],
    company: "SmartHome Appliances",
    discount: 5,
    inStock: 12
  },
  {
    id: "smart-appliance-3",
    name: "Voice-Controlled Microwave",
    price: 149.99,
    category: "Smart Appliances",
    description: "Microwave that responds to voice commands and integrates with your smart home system. Includes scan-to-cook technology.",
    features: [
      "Voice control",
      "Scan-to-cook technology",
      "Automated cooking programs",
      "Child lock features",
      "Custom presets via app"
    ],
    modelPath: "/models/smart-hub.glb",
    images: [
      "https://images.unsplash.com/photo-1585757318177-0903279773d3?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1574269923091-e7a3fa1db428?ixlib=rb-4.0.3"
    ],
    company: "SmartHome Appliances",
    inStock: 28
  },
  {
    id: "smart-appliance-4",
    name: "Smart Coffee Maker",
    price: 129.99,
    category: "Smart Appliances",
    description: "Programmable coffee maker that learns your preferences and can be controlled remotely. Wake up to fresh coffee every morning.",
    features: [
      "Schedule brewing times",
      "Customizable brew strength",
      "Water level monitoring",
      "Maintenance reminders",
      "Voice control compatibility"
    ],
    modelPath: "/models/smart-hub.glb",
    images: [
      "https://images.unsplash.com/photo-1510017683484-182653b3f801?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3"
    ],
    company: "SmartHome Appliances",
    inStock: 42
  },
  {
    id: "smart-appliance-5",
    name: "Smart Robot Vacuum",
    price: 349.99,
    category: "Smart Appliances",
    description: "Intelligent robotic vacuum with mapping technology, obstacle detection, and automated cleaning schedules.",
    features: [
      "LiDAR mapping",
      "Multi-floor plans",
      "Self-emptying dock compatible",
      "No-go zones via app",
      "Pet hair specialized brushes"
    ],
    modelPath: "/models/smart-hub.glb",
    images: [
      "https://images.unsplash.com/photo-1582735689283-daba92421d39?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3"
    ],
    company: "CleanTech",
    discount: 8,
    inStock: 31
  },
  
  // Lighting
  {
    id: "lighting-1",
    name: "Smart LED Bulb Pack",
    price: 79.99,
    category: "Lighting",
    description: "Set of 4 color-changing smart LED bulbs. Create the perfect atmosphere with millions of colors and preset scenes.",
    features: [
      "16 million colors",
      "Warm to cool white adjustment",
      "Group control",
      "Music sync capability",
      "Schedule and scenes"
    ],
    modelPath: "/models/smart-hub.glb",
    images: [
      "https://images.unsplash.com/photo-1565865735499-f946cc4c69fe?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-4.0.3"
    ],
    company: "IllumaTech",
    inStock: 67
  },
  {
    id: "lighting-2",
    name: "Smart Light Strip",
    price: 49.99,
    category: "Lighting",
    description: "Flexible, cuttable LED light strip for custom installations. Perfect for accent lighting, TV backlighting, or under-cabinet illumination.",
    features: [
      "16ft extendable design",
      "Adhesive backing",
      "Cuttable sections",
      "Music reactive mode",
      "Timer and fade functions"
    ],
    modelPath: "/models/smart-hub.glb",
    images: [
      "https://images.unsplash.com/photo-1608044526987-c86936566fa4?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3"
    ],
    company: "IllumaTech",
    inStock: 53
  },
  {
    id: "lighting-3",
    name: "Outdoor Smart Spotlight Set",
    price: 199.99,
    category: "Lighting",
    description: "Weather-resistant smart spotlights for garden, pathway, or architectural lighting. Create dynamic outdoor lighting scenes.",
    features: [
      "Set of 3 spotlights",
      "IP65 weatherproof",
      "Ground or wall mounting",
      "Motion sensor integration",
      "Holiday lighting modes"
    ],
    modelPath: "/models/smart-hub.glb",
    images: [
      "https://images.unsplash.com/photo-1520970519539-8312e000bd23?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3"
    ],
    company: "IllumaTech",
    discount: 10,
    inStock: 29
  },
  {
    id: "lighting-4",
    name: "Smart Ceiling Light",
    price: 149.99,
    category: "Lighting",
    description: "Modern flush-mount ceiling light with adjustable color temperature and brightness. Perfect for living rooms and bedrooms.",
    features: [
      "2800K-6500K temperature range",
      "Dimmable 0-100%",
      "Circadian rhythm settings",
      "Wake-up and bedtime routines",
      "Emergency lighting mode"
    ],
    modelPath: "/models/smart-hub.glb",
    images: [
      "https://images.unsplash.com/photo-1565538474137-cfcb529a0a1c?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1507723531049-97e4300bcb92?ixlib=rb-4.0.3"
    ],
    company: "IllumaTech",
    inStock: 34
  },
  
  // Home Entertainment
  {
    id: "entertainment-1",
    name: "Smart Soundbar Pro",
    price: 299.99,
    category: "Home Entertainment",
    description: "Premium soundbar with virtual surround sound, voice assistant integration, and smart home control capabilities.",
    features: [
      "Dolby Atmos support",
      "Voice assistant built-in",
      "Multi-room audio synchronization",
      "Automatic room calibration",
      "Wall-mountable design"
    ],
    modelPath: "/models/smart-hub.glb",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1508914272877-5c12e1dd6be1?ixlib=rb-4.0.3"
    ],
    company: "AudioVision",
    inStock: 24
  },
  {
    id: "entertainment-2",
    name: "Wireless Subwoofer",
    price: 179.99,
    category: "Home Entertainment",
    description: "Deep, powerful bass in a compact wireless subwoofer. Pairs with the Smart Soundbar Pro for immersive audio experience.",
    features: [
      "Wireless connectivity",
      "Auto-pairing technology",
      "Adjustable bass levels",
      "Compact design",
      "Energy-efficient standby mode"
    ],
    modelPath: "/models/smart-hub.glb",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558662413-8c806dfa3cc7?ixlib=rb-4.0.3"
    ],
    company: "AudioVision",
    inStock: 19
  },
  {
    id: "entertainment-3",
    name: "Multi-Room Speaker Set",
    price: 349.99,
    category: "Home Entertainment",
    description: "Set of 3 wireless speakers for synchronized multi-room audio. Create a seamless sound experience throughout your home.",
    features: [
      "Room-filling sound",
      "Independent or synchronized playback",
      "Voice assistant compatible",
      "Humidity resistant for bathrooms",
      "Wall mountable"
    ],
    modelPath: "/models/smart-hub.glb",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-4.0.3"
    ],
    company: "AudioVision",
    discount: 12,
    inStock: 22
  },
  {
    id: "entertainment-4",
    name: "Smart Universal Remote",
    price: 89.99,
    category: "Home Entertainment",
    description: "Control all your entertainment devices and smart home products with one elegant remote featuring a touchscreen interface.",
    features: [
      "Touch screen display",
      "Voice command capability",
      "Personalized user profiles",
      "Activity-based controls",
      "Rechargeable battery"
    ],
    modelPath: "/models/smart-hub.glb",
    images: [
      "https://images.unsplash.com/photo-1601784551606-1f9e33d8ff9f?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1626143508000-4b5f833c6bab?ixlib=rb-4.0.3"
    ],
    company: "DevHub Technologies",
    inStock: 38
  },
  
  // Health & Wellness
  {
    id: "health-1",
    name: "Smart Sleep Monitor",
    price: 149.99,
    category: "Health & Wellness",
    description: "Non-wearable sleep tracking system that monitors sleep patterns, breathing, and environment to help improve sleep quality.",
    features: [
      "Sleep cycle tracking",
      "Smart alarm functionality",
      "Environment monitoring",
      "Sleep coaching program",
      "Snore detection and analysis"
    ],
    modelPath: "/models/sensor-pack.glb",
    images: [
      "https://images.unsplash.com/photo-1631027761930-bc3bcfd2be74?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1515894045881-24b6cf0d5c36?ixlib=rb-4.0.3"
    ],
    company: "WellTech",
    inStock: 27
  },
  {
    id: "health-2",
    name: "Smart Scale Pro",
    price: 99.99,
    category: "Health & Wellness",
    description: "Advanced body composition scale that measures weight, BMI, body fat, muscle mass, water percentage, and more.",
    features: [
      "Full body composition analysis",
      "Multi-user recognition",
      "Trend tracking and goals",
      "Pregnancy mode",
      "Integration with fitness apps"
    ],
    modelPath: "/models/sensor-pack.glb",
    images: [
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1542655017632-c432a74ad002?ixlib=rb-4.0.3"
    ],
    company: "WellTech",
    inStock: 42
  },
  {
    id: "health-3",
    name: "Air Purifier Smart",
    price: 249.99,
    category: "Health & Wellness",
    description: "HEPA air purifier with smart features including air quality monitoring, automatic mode, and filter life tracking.",
    features: [
      "True HEPA filtration",
      "Real-time air quality display",
      "Auto mode based on air quality",
      "Sleep mode with quiet operation",
      "Filter replacement alerts"
    ],
    modelPath: "/models/sensor-pack.glb",
    images: [
      "https://images.unsplash.com/photo-1620785552629-b89fdc0e2d14?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1571782742478-0816a4773a10?ixlib=rb-4.0.3"
    ],
    company: "AirSense",
    discount: 7,
    inStock: 31
  },
  {
    id: "health-4",
    name: "Smart Water Bottle",
    price: 59.99,
    category: "Health & Wellness",
    description: "Tracks water intake and reminds you to stay hydrated throughout the day. LED indicators and app connectivity for detailed tracking.",
    features: [
      "Hydration tracking",
      "Customizable reminders",
      "Water temperature display",
      "Leak-proof design",
      "Rechargeable battery"
    ],
    modelPath: "/models/sensor-pack.glb",
    images: [
      "https://images.unsplash.com/photo-1570950135759-f4399d3c7703?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1625708458528-802ec79d4ed6?ixlib=rb-4.0.3"
    ],
    company: "WellTech",
    inStock: 46
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = new Set(products.map(product => product.category));
  return Array.from(categories);
};

export const getMostOrderedProduct = (): Product => {
  // This would normally be calculated from order data
  // For now, we'll just return a random product
  return products[Math.floor(Math.random() * products.length)];
};

export const getMostSearchedProduct = (): Product => {
  // This would normally be calculated from search analytics
  // For now, we'll just return a random product
  return products[Math.floor(Math.random() * products.length)];
};

export const getDiscountedProducts = (): Product[] => {
  return products.filter(product => product.discount !== undefined);
};

export const getLowStockProducts = (threshold: number = 25): Product[] => {
  return products.filter(product => product.inStock <= threshold);
};

