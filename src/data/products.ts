
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  features: string[];
  modelPath: string;
  images: string[];
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
    modelPath: "/models/smart-hub.glb", // Placeholder for 3D model
    images: [
      "https://images.unsplash.com/photo-1558089687-f282ffcbc0d4?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1544085311-11a028465b03?ixlib=rb-4.0.3"
    ]
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
    modelPath: "/models/sensor-pack.glb", // Placeholder for 3D model
    images: [
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?ixlib=rb-4.0.3"
    ]
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
    modelPath: "/models/smart-lock.glb", // Placeholder for 3D model
    images: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3"
    ]
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
    modelPath: "/models/camera.glb", // Placeholder for 3D model
    images: [
      "https://images.unsplash.com/photo-1580983230786-f42118758df0?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3"
    ]
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
    modelPath: "/models/gateway.glb", // Placeholder for 3D model
    images: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1594731804964-c6c48a6f4222?ixlib=rb-4.0.3"
    ]
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
    modelPath: "/models/smart-plug.glb", // Placeholder for 3D model
    images: [
      "https://images.unsplash.com/photo-1621319332247-ce870cdad56c?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1550029402-226115b7c579?ixlib=rb-4.0.3"
    ]
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
