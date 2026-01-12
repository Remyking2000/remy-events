// Customization Options Data
import type { CustomizationOption, VendorCategory } from "@/types/event";

export const customizationOptions: CustomizationOption[] = [
  // Entertainment
  {
    id: "extra-hour",
    name: "Extra Hour Coverage",
    description: "Additional hour of event coverage and coordination",
    price: 8000,
    category: "entertainment",
    selected: false,
  },
  {
    id: "drone-photography",
    name: "Drone Photography",
    description: "Aerial photography and videography",
    price: 15000,
    category: "photography",
    selected: false,
  },
  {
    id: "live-band",
    name: "Live Band",
    description: "Professional live music performance",
    price: 35000,
    category: "entertainment",
    selected: false,
  },
  {
    id: "photo-booth",
    name: "Photo Booth",
    description: "Interactive photo booth with props",
    price: 12000,
    category: "entertainment",
    selected: false,
  },
  {
    id: "fireworks",
    name: "Fireworks Display",
    description: "Professional fireworks display (subject to permits)",
    price: 25000,
    category: "entertainment",
    selected: false,
  },
  {
    id: "luxury-car",
    name: "Luxury Car Service",
    description: "VIP transportation service",
    price: 20000,
    category: "transport",
    selected: false,
  },
  // Catering
  {
    id: "premium-catering",
    name: "Premium Catering Upgrade",
    description: "Upgraded menu with premium options",
    price: 15000,
    category: "catering",
    selected: false,
  },
  {
    id: "bar-service",
    name: "Bar Service",
    description: "Professional bar service with bartender",
    price: 18000,
    category: "catering",
    selected: false,
  },
  // Photography/Videography
  {
    id: "videography",
    name: "Professional Videography",
    description: "Full event video production",
    price: 30000,
    category: "videography",
    selected: false,
  },
  {
    id: "photo-album",
    name: "Premium Photo Album",
    description: "Custom-designed photo album",
    price: 10000,
    category: "photography",
    selected: false,
  },
  // Decoration
  {
    id: "luxury-decor",
    name: "Luxury Décor Upgrade",
    description: "Premium floral arrangements and styling",
    price: 20000,
    category: "decoration",
    selected: false,
  },
  {
    id: "custom-backdrop",
    name: "Custom Backdrop",
    description: "Custom-designed event backdrop",
    price: 15000,
    category: "decoration",
    selected: false,
  },
  // Security
  {
    id: "security",
    name: "Security Services",
    description: "Professional security personnel",
    price: 12000,
    category: "security",
    selected: false,
  },
  // Additional Services
  {
    id: "valet-parking",
    name: "Valet Parking",
    description: "Valet parking service",
    price: 8000,
    category: "transport",
    selected: false,
  },
  {
    id: "event-coordinator",
    name: "Dedicated Event Coordinator",
    description: "Personal coordinator for the entire event",
    price: 25000,
    category: "entertainment",
    selected: false,
  },
];

export function getCustomizationsByCategory(category: VendorCategory): CustomizationOption[] {
  return customizationOptions.filter(opt => opt.category === category);
}
