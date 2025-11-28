# GreenRoute - Sustainable Logistics Landing Page

A modern, high-performance landing page for **GreenRoute**, an AI-powered logistics optimization platform designed to help companies reduce their carbon footprint while improving operational efficiency and saving on fuel costs.

## Overview

GreenRoute is a comprehensive landing page that showcases sustainable delivery logistics solutions. The platform combines AI-powered route optimization with real-time carbon tracking, helping logistics companies monitor and reduce their environmental impact while improving the bottom line.

The landing page features:
- Immersive hero section with animated globe
- Real-time animated statistics dashboard
- Four-pillar feature showcase
- Professional customer testimonials with verified impact metrics
- Comprehensive footer with resource links

## Key Features

### 1. **Animated Statistics Dashboard**
- Real-time counters with smooth animations
- Displays key metrics: CO₂ saved, routes optimized, companies served
- Uses requestAnimationFrame for optimal performance
- Auto-starts on page load with user-friendly transitions

### 2. **Customer Testimonials Section**
- Three featured customer success stories
- Professional avatar system with gradient backgrounds
- 5-star ratings for each testimonial
- Verified impact metrics (CO₂ saved, fuel savings)
- Decorative quote marks for visual appeal
- Aggregate success metrics (98% satisfaction, 45K+ tons CO₂ prevented, etc.)

### 3. **Smart Route Optimization Showcase**
- Highlights AI-powered logistics that select greenest delivery paths
- Real-time carbon impact monitoring
- Verified carbon offset programs
- Impact analytics dashboard demonstration

### 4. **Interactive Impact Calculator**
- Dynamic calculation based on monthly deliveries (adjustable slider)
- Three real-time metrics:
  - Annual CO₂ reduction in kilograms
  - Equivalent trees planted visualization
  - Estimated fuel cost savings
- Live updates as users adjust inputs
- Industry-based average calculations for accuracy

### 5. **Responsive Design**
- Mobile-first approach with optimized layouts
- Fully responsive navigation with mobile menu
- Adaptive grid layouts (1-4 columns based on screen size)
- Touch-friendly interface elements
- Optimized for all modern devices


## Technology Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Type-safe component development |
| **React 19** | Modern React with hooks and effects |
| **Tailwind CSS v4** | Utility-first styling and animations |


### Dependencies

\`\`\`json
{
  "next": "^16.0.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "lucide-react": "^latest"
}
\`\`\`

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/greenroute.git
   cd greenroute
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the landing page

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`


## FAQ

**Q: Can I use this for a different industry?**
A: The component is industry-agnostic. Update the copy, colors, and metrics to match your business.

**Q: How do I add more testimonials?**
A: Add objects to the testimonials array in the component. The map function will render them automatically.

**Q: Can I use this with a backend?**
A: Yes! Connect the form submission to your API endpoint in the `handleFormSubmit` function.

**Q: Is this mobile-responsive?**
A: Yes, fully responsive from 320px (mobile) to 1920px+ (desktop).

**Q: Can I change the animations?**
A: Yes, all animations are in the `<style>` block and can be customized easily.


---

**Made with 🌱 for a sustainable future**
