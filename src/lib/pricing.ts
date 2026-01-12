// Dynamic Pricing Logic for Remy Events
import type { EventPackage, CustomizationOption, Location, PricingCalculation } from "@/types/event";

const GUEST_COUNT_MULTIPLIER = 0.02; // 2% per additional guest over base
const LOCATION_SURCHARGE_RATES: Record<string, number> = {
  "westlands": 0,
  "kilimani": 0.05,
  "karen": 0.10,
  "runda": 0.12,
  "lavington": 0.08,
  "parklands": 0.05,
  "other": 0.03,
};

const SEASONAL_PREMIUM_RATES: Record<string, number> = {
  "high": 0.15, // December, June holidays
  "medium": 0.08, // March, April, August
  "low": 0, // Other months
};

export function calculateEventPricing(
  packageData: EventPackage,
  guestCount: number,
  customizations: CustomizationOption[],
  location: Location,
  eventDate: Date
): PricingCalculation {
  const basePrice = packageData.basePrice;
  
  // Guest count adjustment
  const baseGuestCount = packageData.minGuests;
  const guestDifference = Math.max(0, guestCount - baseGuestCount);
  const guestCountMultiplier = guestDifference * GUEST_COUNT_MULTIPLIER;
  const guestAdjustment = basePrice * guestCountMultiplier;
  
  // Location surcharge
  const locationKey = location.area.toLowerCase().replace(/\s+/g, "");
  const locationSurchargeRate = LOCATION_SURCHARGE_RATES[locationKey] || LOCATION_SURCHARGE_RATES["other"];
  const locationSurcharge = basePrice * locationSurchargeRate;
  
  // Seasonal premium
  const month = eventDate.getMonth() + 1; // 1-12
  let seasonalRate = SEASONAL_PREMIUM_RATES["low"];
  if (month === 12 || month === 6) {
    seasonalRate = SEASONAL_PREMIUM_RATES["high"];
  } else if (month === 3 || month === 4 || month === 8) {
    seasonalRate = SEASONAL_PREMIUM_RATES["medium"];
  }
  const seasonalPremium = basePrice * seasonalRate;
  
  // Customization total
  const customizationTotal = customizations
    .filter(c => c.selected)
    .reduce((sum, c) => sum + c.price, 0);
  
  const total = basePrice + guestAdjustment + locationSurcharge + seasonalPremium + customizationTotal;
  
  const breakdown = [
    { item: `${packageData.name} Package`, amount: basePrice },
  ];
  
  if (guestAdjustment > 0) {
    breakdown.push({ 
      item: `Additional guests (${guestDifference} guests)`, 
      amount: guestAdjustment 
    });
  }
  
  if (locationSurcharge > 0) {
    breakdown.push({ 
      item: `Location surcharge (${location.area})`, 
      amount: locationSurcharge 
    });
  }
  
  if (seasonalPremium > 0) {
    breakdown.push({ 
      item: "Seasonal premium", 
      amount: seasonalPremium 
    });
  }
  
  if (customizationTotal > 0) {
    breakdown.push({ 
      item: "Customizations", 
      amount: customizationTotal 
    });
  }
  
  return {
    basePrice,
    guestCountMultiplier,
    customizationTotal,
    locationSurcharge,
    seasonalPremium,
    total,
    breakdown,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
