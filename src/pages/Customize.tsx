import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { 
  Calendar, 
  Users, 
  MapPin, 
  Palette, 
  Check, 
  Plus, 
  Minus,
  ArrowRight,
  Sparkles,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { calculateEventPricing, formatCurrency } from "@/lib/pricing";
import { nairobiLocations } from "@/data/locations";
import { customizationOptions, getCustomizationsByCategory } from "@/data/customizations";
import type { EventPackage, CustomizationOption, Location, EventType } from "@/types/event";

// Package data (should ideally come from API)
const packages: Record<string, EventPackage> = {
  essential: {
    id: "essential",
    name: "Essential",
    tagline: "Perfect for intimate gatherings",
    basePrice: 35000,
    minGuests: 10,
    maxGuests: 30,
    components: [],
    idealFor: ["birthday", "private"],
    description: "Everything you need for a beautiful, stress-free celebration",
  },
  standard: {
    id: "standard",
    name: "Standard",
    tagline: "Our most popular choice",
    basePrice: 75000,
    minGuests: 30,
    maxGuests: 80,
    components: [],
    idealFor: ["corporate", "birthday", "baby-shower", "engagement"],
    description: "The perfect balance of elegance and value",
  },
  premium: {
    id: "premium",
    name: "Premium",
    tagline: "The ultimate celebration experience",
    basePrice: 150000,
    minGuests: 50,
    maxGuests: 200,
    components: [],
    idealFor: ["corporate", "launch", "private"],
    description: "No expense spared. A full luxury experience",
  },
};

const Customize = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const packageId = searchParams.get("package") || "standard";
  const selectedPackage = packages[packageId] || packages.standard;

  const [eventType, setEventType] = useState<EventType>("birthday");
  const [eventDate, setEventDate] = useState("");
  const [guestCount, setGuestCount] = useState(selectedPackage.minGuests);
  const [location, setLocation] = useState<Location>(nairobiLocations[0]);
  const [theme, setTheme] = useState("");
  const [selectedCustomizations, setSelectedCustomizations] = useState<CustomizationOption[]>([]);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");

  // Calculate pricing
  const pricing = calculateEventPricing(
    selectedPackage,
    guestCount,
    selectedCustomizations,
    location,
    eventDate ? new Date(eventDate) : new Date()
  );

  const handleCustomizationToggle = (customization: CustomizationOption) => {
    setSelectedCustomizations(prev => {
      const exists = prev.find(c => c.id === customization.id);
      if (exists) {
        return prev.filter(c => c.id !== customization.id);
      } else {
        return [...prev, { ...customization, selected: true }];
      }
    });
  };

  const handleLocationChange = (locationId: string) => {
    const selected = nairobiLocations.find(l => l.id === locationId);
    if (selected) setLocation(selected);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!eventDate || !clientName || !clientEmail || !clientPhone) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Navigate to payment page with booking data
    const bookingData = {
      packageId: selectedPackage.id,
      eventType,
      eventDate,
      guestCount,
      location: location.id,
      theme,
      customizations: selectedCustomizations.map(c => c.id),
      totalPrice: pricing.total,
      client: {
        name: clientName,
        email: clientEmail,
        phone: clientPhone,
      },
    };

    navigate("/payment", { state: { bookingData } });
  };

  const customizationCategories = [
    "entertainment",
    "catering",
    "photography",
    "videography",
    "decoration",
    "security",
    "transport",
  ] as const;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-28 pb-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-foreground text-sm font-medium">
                  Customizing: {selectedPackage.name} Package
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Customize Your <span className="gold-text">Event</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Build your perfect event experience. All prices update in real-time.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Form */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Event Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Event Details</CardTitle>
                      <CardDescription>Tell us about your event</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="eventType">Event Type</Label>
                        <Select value={eventType} onValueChange={(v) => setEventType(v as EventType)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="birthday">Birthday Party</SelectItem>
                            <SelectItem value="baby-shower">Baby Shower</SelectItem>
                            <SelectItem value="bridal-shower">Bridal Shower</SelectItem>
                            <SelectItem value="engagement">Engagement Party</SelectItem>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="meeting">Business Meeting</SelectItem>
                            <SelectItem value="team-building">Team Building</SelectItem>
                            <SelectItem value="launch">Product Launch</SelectItem>
                            <SelectItem value="private">Private Celebration</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="eventDate">Event Date</Label>
                          <Input
                            id="eventDate"
                            type="date"
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)}
                            min={new Date().toISOString().split("T")[0]}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="guestCount">
                            Guest Count ({selectedPackage.minGuests} - {selectedPackage.maxGuests})
                          </Label>
                          <div className="flex items-center gap-2">
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              onClick={() => setGuestCount(Math.max(selectedPackage.minGuests, guestCount - 1))}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <Input
                              id="guestCount"
                              type="number"
                              value={guestCount}
                              onChange={(e) => {
                                const val = parseInt(e.target.value) || selectedPackage.minGuests;
                                setGuestCount(Math.max(selectedPackage.minGuests, Math.min(selectedPackage.maxGuests, val)));
                              }}
                              min={selectedPackage.minGuests}
                              max={selectedPackage.maxGuests}
                              className="text-center"
                              required
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              onClick={() => setGuestCount(Math.min(selectedPackage.maxGuests, guestCount + 1))}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Select value={location.id} onValueChange={handleLocationChange}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {nairobiLocations.map((loc) => (
                              <SelectItem key={loc.id} value={loc.id}>
                                {loc.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="theme">Theme (Optional)</Label>
                        <Input
                          id="theme"
                          value={theme}
                          onChange={(e) => setTheme(e.target.value)}
                          placeholder="e.g., Tropical Paradise, Vintage Elegance"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Customizations */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Add Customizations</CardTitle>
                      <CardDescription>Enhance your event with premium extras</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="all" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                          <TabsTrigger value="all">All</TabsTrigger>
                          <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
                          <TabsTrigger value="catering">Catering</TabsTrigger>
                          <TabsTrigger value="decoration">Decoration</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="all" className="space-y-3 mt-4">
                          {customizationOptions.map((customization) => {
                            const isSelected = selectedCustomizations.some(c => c.id === customization.id);
                            return (
                              <div
                                key={customization.id}
                                className={`flex items-start gap-3 p-4 rounded-lg border transition-all ${
                                  isSelected ? "border-accent bg-accent/5" : "border-border"
                                }`}
                              >
                                <Checkbox
                                  checked={isSelected}
                                  onCheckedChange={() => handleCustomizationToggle(customization)}
                                />
                                <div className="flex-1">
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <h4 className="font-medium text-foreground">{customization.name}</h4>
                                      <p className="text-sm text-muted-foreground">{customization.description}</p>
                                    </div>
                                    <span className="text-accent font-semibold ml-4">
                                      {formatCurrency(customization.price)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </TabsContent>

                        {customizationCategories.map((category) => (
                          <TabsContent key={category} value={category} className="space-y-3 mt-4">
                            {getCustomizationsByCategory(category).map((customization) => {
                              const isSelected = selectedCustomizations.some(c => c.id === customization.id);
                              return (
                                <div
                                  key={customization.id}
                                  className={`flex items-start gap-3 p-4 rounded-lg border transition-all ${
                                    isSelected ? "border-accent bg-accent/5" : "border-border"
                                  }`}
                                >
                                  <Checkbox
                                    checked={isSelected}
                                    onCheckedChange={() => handleCustomizationToggle(customization)}
                                  />
                                  <div className="flex-1">
                                    <div className="flex items-start justify-between">
                                      <div>
                                        <h4 className="font-medium text-foreground">{customization.name}</h4>
                                        <p className="text-sm text-muted-foreground">{customization.description}</p>
                                      </div>
                                      <span className="text-accent font-semibold ml-4">
                                        {formatCurrency(customization.price)}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </TabsContent>
                        ))}
                      </Tabs>
                    </CardContent>
                  </Card>

                  {/* Contact Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Information</CardTitle>
                      <CardDescription>We'll use this to contact you about your event</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="clientName">Full Name</Label>
                        <Input
                          id="clientName"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="clientEmail">Email</Label>
                          <Input
                            id="clientEmail"
                            type="email"
                            value={clientEmail}
                            onChange={(e) => setClientEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="clientPhone">Phone Number</Label>
                          <Input
                            id="clientPhone"
                            type="tel"
                            value={clientPhone}
                            onChange={(e) => setClientPhone(e.target.value)}
                            placeholder="+254 700 000 000"
                            required
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Pricing Summary */}
                <div className="lg:col-span-1">
                  <Card className="sticky top-24">
                    <CardHeader>
                      <CardTitle>Pricing Summary</CardTitle>
                      <CardDescription>Real-time pricing breakdown</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        {pricing.breakdown.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{item.item}</span>
                            <span className="text-foreground">{formatCurrency(item.amount)}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold">Total</span>
                          <span className="text-2xl font-bold text-accent">
                            {formatCurrency(pricing.total)}
                          </span>
                        </div>
                      </div>

                      <Button type="submit" variant="gold" size="lg" className="w-full mt-6">
                        Proceed to Payment
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        You'll be able to review and confirm before payment
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Customize;
