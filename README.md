# Remy Events - Event Management Platform

**Business**: Remy Events  
**Founder**: Remy Richard  
**Location**: Nairobi, Kenya  
**Type**: Technology-Enabled Event Packaging and Management Company

## Project Overview

Remy Events is a comprehensive event management platform designed to eliminate the complexity, inefficiency, and stress associated with planning social and corporate events. The platform offers curated and customizable event packages through a web application, covering planning, sourcing, coordination, execution, cleanup, and vendor payments.

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript development
- **React** - Modern UI library
- **shadcn-ui** - Beautiful and accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations and transitions

## Development Setup

To run this project locally:

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── event/          # Event-specific components (Timeline, Checklist)
│   ├── feedback/       # Feedback and testimonial components
│   ├── home/           # Homepage sections
│   └── layout/         # Layout components (Navbar, Footer)
├── pages/              # Application pages/routes
│   ├── Customize.tsx   # Event customization and booking
│   ├── Payment.tsx     # Payment processing (M-Pesa, Card)
│   ├── BookingConfirmation.tsx  # Booking confirmation
│   ├── AdminDashboard.tsx       # Admin management portal
│   └── ...
├── types/              # TypeScript type definitions
├── data/               # Static data (locations, customizations)
├── lib/                # Utility functions (pricing, formatting)
├── hooks/              # Custom React hooks
└── assets/            # Static assets
```

## Key Features

### Customer-Facing Features
- **Event Package Selection**: Essential, Standard, and Premium packages
- **Dynamic Customization**: Real-time pricing with customizable options
- **Location-Based Services**: Nairobi-wide coverage with location-based pricing
- **Payment Integration**: M-Pesa, Credit/Debit Card, and Bank Transfer support
- **Event Timeline Tracking**: Real-time event progress tracking
- **Event Checklists**: Pre-event organization tools
- **Customer Feedback**: Rating and review system

### Administrative Features
- **Event Management Dashboard**: Complete event lifecycle management
- **Vendor Management**: Vendor network coordination and tracking
- **Financial Tracking**: Revenue and analytics dashboard
- **Operations Dashboard**: Event operations and coordination tools

### Business Model Alignment
- ✅ Package-based revenue model
- ✅ Customization add-ons
- ✅ Location-based pricing
- ✅ Seasonal pricing premiums
- ✅ Corporate and social event support
- ✅ Vendor margin management

## Business Plan Alignment

This platform implements all core requirements from the Remy Events business plan:
- Technology-enabled event packaging
- Centralized vendor orchestration
- Transparent pricing
- End-to-end accountability
- Scalable platform architecture
- Corporate and social event support

## License

© 2026 Remy Events. All rights reserved.
