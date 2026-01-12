import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Users,
  FileText,
  Download,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/pricing";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingId, bookingData, paymentMethod } = location.state || {};

  if (!bookingId || !bookingData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">No booking found</p>
          <Link to="/packages">
            <Button>Browse Packages</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-28 pb-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Booking <span className="gold-text">Confirmed!</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Your event has been successfully booked. We'll be in touch soon.
              </p>
            </motion.div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Booking Details</CardTitle>
                <CardDescription>Booking ID: {bookingId}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Event Date</p>
                      <p className="font-semibold text-foreground">
                        {new Date(bookingData.eventDate).toLocaleDateString("en-KE", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Guest Count</p>
                      <p className="font-semibold text-foreground">{bookingData.guestCount} guests</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold text-foreground capitalize">{bookingData.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Package</p>
                      <p className="font-semibold text-foreground capitalize">{bookingData.packageId}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Total Amount Paid</p>
                  <p className="text-3xl font-bold text-accent">
                    {formatCurrency(bookingData.totalPrice)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Payment method: {paymentMethod === "mpesa" ? "M-Pesa" : paymentMethod === "card" ? "Card" : "Bank Transfer"}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>What's Next?</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center font-semibold text-sm">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Confirmation Email</p>
                      <p className="text-sm text-muted-foreground">
                        You'll receive a detailed confirmation email within 24 hours with all event details.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center font-semibold text-sm">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Event Manager Assignment</p>
                      <p className="text-sm text-muted-foreground">
                        A dedicated event manager will be assigned and will contact you within 48 hours.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center font-semibold text-sm">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Pre-Event Coordination</p>
                      <p className="text-sm text-muted-foreground">
                        We'll coordinate with all vendors and share a detailed timeline before your event.
                      </p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="gold" size="lg">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download Receipt
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookingConfirmation;
