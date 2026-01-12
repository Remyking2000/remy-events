// Event Types and Interfaces for Remy Events Platform

export type EventType = 
  | "birthday"
  | "baby-shower"
  | "bridal-shower"
  | "engagement"
  | "corporate"
  | "meeting"
  | "team-building"
  | "launch"
  | "private"
  | "other";

export type PackageTier = "essential" | "standard" | "premium";

export type EventStatus = 
  | "draft"
  | "pending"
  | "confirmed"
  | "in-progress"
  | "completed"
  | "cancelled";

export type PaymentMethod = "mpesa" | "card" | "bank-transfer";

export type PaymentStatus = "pending" | "processing" | "completed" | "failed";

export interface Location {
  id: string;
  name: string;
  area: string; // e.g., "Westlands", "Karen", "Kilimani"
  coordinates?: {
    lat: number;
    lng: number;
  };
  available: boolean;
}

export interface Vendor {
  id: string;
  name: string;
  category: VendorCategory;
  contact: {
    phone: string;
    email: string;
  };
  location: string;
  rating: number;
  verified: boolean;
  available: boolean;
}

export type VendorCategory = 
  | "catering"
  | "decoration"
  | "photography"
  | "videography"
  | "entertainment"
  | "venue"
  | "security"
  | "cleanup"
  | "transport";

export interface PackageComponent {
  id: string;
  name: string;
  category: VendorCategory;
  included: boolean;
  customizable: boolean;
  basePrice: number;
  unit?: string; // e.g., "per hour", "per guest"
}

export interface EventPackage {
  id: PackageTier;
  name: string;
  tagline: string;
  basePrice: number;
  minGuests: number;
  maxGuests: number;
  components: PackageComponent[];
  idealFor: EventType[];
  description: string;
}

export interface CustomizationOption {
  id: string;
  name: string;
  description: string;
  price: number;
  category: VendorCategory;
  selected: boolean;
}

export interface EventBooking {
  id: string;
  eventType: EventType;
  packageTier: PackageTier;
  location: Location;
  date: Date;
  guestCount: number;
  theme?: string;
  customizations: CustomizationOption[];
  totalPrice: number;
  status: EventStatus;
  client: {
    name: string;
    email: string;
    phone: string;
  };
  eventManager?: {
    id: string;
    name: string;
    contact: string;
  };
  vendors?: Vendor[];
  timeline?: EventTimelineItem[];
  payment?: {
    method: PaymentMethod;
    status: PaymentStatus;
    amount: number;
    transactionId?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface EventTimelineItem {
  id: string;
  title: string;
  description: string;
  scheduledTime: Date;
  status: "pending" | "in-progress" | "completed";
  assignedTo?: string; // vendor or staff ID
}

export interface EventChecklist {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: Date;
  category: string;
}

export interface PricingCalculation {
  basePrice: number;
  guestCountMultiplier: number;
  customizationTotal: number;
  locationSurcharge: number;
  seasonalPremium: number;
  total: number;
  breakdown: {
    item: string;
    amount: number;
  }[];
}
