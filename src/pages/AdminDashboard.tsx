import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  DollarSign,
  Package,
  TrendingUp,
  CheckCircle2,
  Clock,
  AlertCircle,
  Building2,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatCurrency } from "@/lib/pricing";
import type { EventBooking, Vendor, EventStatus } from "@/types/event";

// Mock data - in production, this would come from an API
const mockEvents: EventBooking[] = [
  {
    id: "REV-001",
    eventType: "corporate",
    packageTier: "standard",
    location: { id: "westlands", name: "Westlands", area: "Westlands", available: true },
    date: new Date("2026-02-15"),
    guestCount: 50,
    theme: "Modern Corporate",
    customizations: [],
    totalPrice: 85000,
    status: "confirmed",
    client: {
      name: "John Doe",
      email: "john@example.com",
      phone: "+254 700 000 000",
    },
    createdAt: new Date("2026-01-10"),
    updatedAt: new Date("2026-01-10"),
  },
  {
    id: "REV-002",
    eventType: "birthday",
    packageTier: "premium",
    location: { id: "karen", name: "Karen", area: "Karen", available: true },
    date: new Date("2026-02-20"),
    guestCount: 100,
    theme: "Tropical Paradise",
    customizations: [],
    totalPrice: 180000,
    status: "pending",
    client: {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+254 711 111 111",
    },
    createdAt: new Date("2026-01-11"),
    updatedAt: new Date("2026-01-11"),
  },
];

const mockVendors: Vendor[] = [
  {
    id: "V001",
    name: "Elegant Catering Services",
    category: "catering",
    contact: { phone: "+254 722 000 000", email: "info@elegantcatering.co.ke" },
    location: "Westlands",
    rating: 4.8,
    verified: true,
    available: true,
  },
  {
    id: "V002",
    name: "Capture Moments Photography",
    category: "photography",
    contact: { phone: "+254 733 000 000", email: "hello@capturemoments.co.ke" },
    location: "Kilimani",
    rating: 4.9,
    verified: true,
    available: true,
  },
  {
    id: "V003",
    name: "Sound & Vision Entertainment",
    category: "entertainment",
    contact: { phone: "+254 744 000 000", email: "contact@soundvision.co.ke" },
    location: "Nairobi",
    rating: 4.7,
    verified: true,
    available: false,
  },
];

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  const stats = {
    totalEvents: mockEvents.length,
    confirmedEvents: mockEvents.filter(e => e.status === "confirmed").length,
    pendingEvents: mockEvents.filter(e => e.status === "pending").length,
    totalRevenue: mockEvents.reduce((sum, e) => sum + e.totalPrice, 0),
    activeVendors: mockVendors.filter(v => v.available).length,
  };

  const getStatusBadge = (status: EventStatus) => {
    const variants: Record<EventStatus, { variant: "default" | "secondary" | "destructive" | "outline"; label: string }> = {
      draft: { variant: "outline", label: "Draft" },
      pending: { variant: "secondary", label: "Pending" },
      confirmed: { variant: "default", label: "Confirmed" },
      "in-progress": { variant: "default", label: "In Progress" },
      completed: { variant: "default", label: "Completed" },
      cancelled: { variant: "destructive", label: "Cancelled" },
    };
    const config = variants[status];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Remy Events Management Portal</p>
            </div>
            <Button variant="outline">Logout</Button>
          </div>
        </div>
      </header>

      <main className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalEvents}</div>
                <p className="text-xs text-muted-foreground">All time bookings</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Confirmed</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.confirmedEvents}</div>
                <p className="text-xs text-muted-foreground">Active events</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatCurrency(stats.totalRevenue)}</div>
                <p className="text-xs text-muted-foreground">All time revenue</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Vendors</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.activeVendors}</div>
                <p className="text-xs text-muted-foreground">Available now</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="vendors">Vendors</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Events</CardTitle>
                  <CardDescription>Latest event bookings and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Event ID</TableHead>
                        <TableHead>Client</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockEvents.map((event) => (
                        <TableRow key={event.id}>
                          <TableCell className="font-medium">{event.id}</TableCell>
                          <TableCell>{event.client.name}</TableCell>
                          <TableCell className="capitalize">{event.eventType}</TableCell>
                          <TableCell>{event.date.toLocaleDateString()}</TableCell>
                          <TableCell>{getStatusBadge(event.status)}</TableCell>
                          <TableCell>{formatCurrency(event.totalPrice)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="events" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Event Management</CardTitle>
                      <CardDescription>Manage all event bookings and operations</CardDescription>
                    </div>
                    <Button>New Event</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockEvents.map((event) => (
                      <Card key={event.id}>
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold">{event.id}</h3>
                                {getStatusBadge(event.status)}
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <p className="text-muted-foreground">Client</p>
                                  <p className="font-medium">{event.client.name}</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Event Type</p>
                                  <p className="font-medium capitalize">{event.eventType}</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Date</p>
                                  <p className="font-medium">{event.date.toLocaleDateString()}</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Guests</p>
                                  <p className="font-medium">{event.guestCount}</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Location</p>
                                  <p className="font-medium">{event.location.name}</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Total</p>
                                  <p className="font-medium text-accent">{formatCurrency(event.totalPrice)}</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">View Details</Button>
                              <Button variant="outline" size="sm">Edit</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="vendors" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Vendor Network</CardTitle>
                      <CardDescription>Manage vendor relationships and assignments</CardDescription>
                    </div>
                    <Button>Add Vendor</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Vendor Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockVendors.map((vendor) => (
                        <TableRow key={vendor.id}>
                          <TableCell className="font-medium">{vendor.name}</TableCell>
                          <TableCell className="capitalize">{vendor.category}</TableCell>
                          <TableCell>{vendor.location}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <span>{vendor.rating}</span>
                              {vendor.verified && (
                                <Badge variant="outline" className="text-xs">Verified</Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={vendor.available ? "default" : "secondary"}>
                              {vendor.available ? "Available" : "Unavailable"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">Edit</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Trends</CardTitle>
                    <CardDescription>Monthly revenue overview</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center text-muted-foreground">
                      Revenue chart would be displayed here
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Event Types Distribution</CardTitle>
                    <CardDescription>Popular event categories</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center text-muted-foreground">
                      Pie chart would be displayed here
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-secondary/50">
                      <p className="text-sm text-muted-foreground">Average Event Value</p>
                      <p className="text-2xl font-bold">{formatCurrency(stats.totalRevenue / stats.totalEvents)}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/50">
                      <p className="text-sm text-muted-foreground">Conversion Rate</p>
                      <p className="text-2xl font-bold">68%</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/50">
                      <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
                      <p className="text-2xl font-bold">4.8/5</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
