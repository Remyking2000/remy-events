import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  CreditCard, 
  Smartphone, 
  Building2,
  CheckCircle2,
  ArrowLeft,
  Lock,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { formatCurrency } from "@/lib/pricing";
import type { PaymentMethod } from "@/types/event";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state?.bookingData;

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("mpesa");
  const [mpesaNumber, setMpesaNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [cardName, setCardName] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!bookingData) {
      toast.error("No booking data found. Please start over.");
      navigate("/packages");
    }
  }, [bookingData, navigate]);

  if (!bookingData) {
    return null;
  }

  const handlePayment = async () => {
    setProcessing(true);

    // Validate payment details
    if (paymentMethod === "mpesa" && !mpesaNumber) {
      toast.error("Please enter your M-Pesa number");
      setProcessing(false);
      return;
    }

    if (paymentMethod === "card") {
      if (!cardNumber || !cardExpiry || !cardCVC || !cardName) {
        toast.error("Please fill in all card details");
        setProcessing(false);
        return;
      }
    }

    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      toast.success("Payment processed successfully! Your event is confirmed.");
      
      // Navigate to confirmation page
      navigate("/booking-confirmation", {
        state: {
          bookingId: `REV-${Date.now()}`,
          bookingData,
          paymentMethod,
        },
      });
    }, 2000);
  };

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Complete Your <span className="gold-text">Booking</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Secure payment via M-Pesa or card. Your event is just one step away.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Payment Form */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>Choose your preferred payment method</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={paymentMethod} onValueChange={(v) => setPaymentMethod(v as PaymentMethod)}>
                      <div className="space-y-4">
                        {/* M-Pesa Option */}
                        <div className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:border-accent/50 transition-colors">
                          <RadioGroupItem value="mpesa" id="mpesa" className="mt-1" />
                          <Label htmlFor="mpesa" className="flex-1 cursor-pointer">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                <Smartphone className="w-5 h-5 text-emerald-500" />
                              </div>
                              <div>
                                <div className="font-semibold text-foreground">M-Pesa</div>
                                <div className="text-sm text-muted-foreground">
                                  Pay via M-Pesa. You'll receive a prompt on your phone.
                                </div>
                              </div>
                            </div>
                          </Label>
                        </div>

                        {/* Card Option */}
                        <div className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:border-accent/50 transition-colors">
                          <RadioGroupItem value="card" id="card" className="mt-1" />
                          <Label htmlFor="card" className="flex-1 cursor-pointer">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                <CreditCard className="w-5 h-5 text-blue-500" />
                              </div>
                              <div>
                                <div className="font-semibold text-foreground">Credit/Debit Card</div>
                                <div className="text-sm text-muted-foreground">
                                  Visa, Mastercard, or other supported cards
                                </div>
                              </div>
                            </div>
                          </Label>
                        </div>

                        {/* Bank Transfer Option */}
                        <div className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:border-accent/50 transition-colors">
                          <RadioGroupItem value="bank-transfer" id="bank-transfer" className="mt-1" />
                          <Label htmlFor="bank-transfer" className="flex-1 cursor-pointer">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                                <Building2 className="w-5 h-5 text-purple-500" />
                              </div>
                              <div>
                                <div className="font-semibold text-foreground">Bank Transfer</div>
                                <div className="text-sm text-muted-foreground">
                                  Direct bank transfer (instructions will be provided)
                                </div>
                              </div>
                            </div>
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>

                    {/* M-Pesa Form */}
                    {paymentMethod === "mpesa" && (
                      <div className="mt-6 space-y-4 p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                        <div>
                          <Label htmlFor="mpesaNumber">M-Pesa Number</Label>
                          <Input
                            id="mpesaNumber"
                            type="tel"
                            value={mpesaNumber}
                            onChange={(e) => setMpesaNumber(e.target.value)}
                            placeholder="254 700 000 000"
                            required
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Enter the phone number registered with your M-Pesa account
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Card Form */}
                    {paymentMethod === "card" && (
                      <div className="mt-6 space-y-4 p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                        <div>
                          <Label htmlFor="cardName">Cardholder Name</Label>
                          <Input
                            id="cardName"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="cardExpiry">Expiry Date</Label>
                            <Input
                              id="cardExpiry"
                              value={cardExpiry}
                              onChange={(e) => setCardExpiry(e.target.value)}
                              placeholder="MM/YY"
                              maxLength={5}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="cardCVC">CVC</Label>
                            <Input
                              id="cardCVC"
                              value={cardCVC}
                              onChange={(e) => setCardCVC(e.target.value)}
                              placeholder="123"
                              maxLength={4}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Security Notice */}
                    <div className="mt-6 flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                      <Shield className="w-5 h-5 text-accent mt-0.5" />
                      <div className="text-sm text-muted-foreground">
                        <p className="font-medium text-foreground mb-1">Secure Payment</p>
                        <p>
                          Your payment is processed securely. We never store your full card details.
                          All transactions are encrypted and PCI-DSS compliant.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button
                  variant="outline"
                  onClick={() => navigate("/customize", { state: { bookingData } })}
                  className="w-full"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Customization
                </Button>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Package</span>
                        <span className="text-foreground capitalize">{bookingData.packageId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Event Type</span>
                        <span className="text-foreground capitalize">{bookingData.eventType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Guests</span>
                        <span className="text-foreground">{bookingData.guestCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date</span>
                        <span className="text-foreground">
                          {new Date(bookingData.eventDate).toLocaleDateString()}
                        </span>
                      </div>
                      {bookingData.customizations.length > 0 && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Customizations</span>
                          <span className="text-foreground">{bookingData.customizations.length}</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Total</span>
                        <span className="text-2xl font-bold text-accent">
                          {formatCurrency(bookingData.totalPrice)}
                        </span>
                      </div>
                    </div>

                    <Button
                      onClick={handlePayment}
                      variant="gold"
                      size="lg"
                      className="w-full mt-6"
                      disabled={processing}
                    >
                      {processing ? (
                        <>
                          <Lock className="w-4 h-4 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4 mr-2" />
                          Complete Payment
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By completing payment, you agree to our terms and conditions
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Payment;
