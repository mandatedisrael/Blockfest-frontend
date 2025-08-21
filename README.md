# Blockfest Frontend

A modern Web3 frontend application for Blockfest - connecting the blockchain community through events, networking, and innovation.

## Features

- **Event Management**: Comprehensive platform for blockchain events and conferences
- **Community Building**: Connect with builders, founders, and blockchain enthusiasts
- **Speaker Showcases**: Highlight industry leaders and experts
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean design with smooth animations and transitions
- **Countdown Timer**: Dynamic countdown to upcoming events

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn/bun

### Installation

1. Clone the repository

```bash
git clone https://github.com/BlockfestAfrica/Blockfest-frontend.git
cd Blockfest-frontend
```

2. Install dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
# or
bun install
```

3. Start the development server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page
├── components/
│   ├── home/                # Home page specific components
│   │   ├── countdown-gallery.tsx
│   │   ├── hero.tsx
│   │   ├── partners.tsx
│   │   ├── speakers.tsx
│   │   ├── stat.tsx
│   │   └── why-attend.tsx
│   ├── shared/              # Shared components
│   │   ├── footer.tsx
│   │   └── navbar.tsx
│   ├── ui/                  # UI components
│   └── carousel components
├── lib/
│   └── utils.ts             # Utility functions and helpers
├── public/
│   ├── icons/               # SVG icons
│   └── images/              # Static images
└── types/
    └── index.ts             # TypeScript type definitions
```

## Key Components

### Home Page Sections

- **Hero Section**: Eye-catching landing with call-to-action
- **Statistics**: Key metrics and numbers
- **Why Attend**: Benefits and value propositions
- **Speakers**: Showcase of industry experts
- **Partners**: Partner and sponsor logos
- **Countdown Gallery**: Dynamic countdown with event gallery

### Shared Components

- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Links, contact info, and social media

### UI Components

- **Carousel**: Image/content slider with navigation
- **Countdown**: Real-time countdown timer
- **Buttons**: Consistent button styling

## Fonts

This project uses custom fonts:

- **Gotham Medium** - For headings and emphasis
- **Gotham Thin** - For body text and lighter elements

Font files are located in `app/fonts/` and optimized using [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts).

## SEO & Performance

This project includes comprehensive SEO optimization for all platforms:

### SEO Features

- **Complete Meta Tags**: Title, description, keywords, and author information
- **Open Graph Tags**: Optimized for Facebook, LinkedIn, and other social platforms
- **Twitter Cards**: Enhanced Twitter sharing with large image cards
- **Structured Data**: JSON-LD markup for events, organizations, and website data
- **Canonical URLs**: Prevent duplicate content issues
- **Sitemap**: Automatically generated XML sitemap
- **Robots.txt**: Proper crawling instructions for search engines
- **PWA Manifest**: Progressive Web App support with app icons
- **Security Headers**: Enhanced security with proper HTTP headers

### Social Media Optimization

- **Facebook**: Open Graph tags for rich link previews
- **Twitter**: Twitter Card meta tags for enhanced tweets
- **LinkedIn**: Professional network sharing optimization
- **WhatsApp**: Rich link previews for messaging
- **Telegram**: Optimized content sharing
- **Instagram**: Image optimization for stories and posts

### Performance Features

- **Image Optimization**: WebP and AVIF format support
- **Font Optimization**: Custom font loading with next/font
- **Code Splitting**: Automatic code splitting for better performance
- **Lazy Loading**: Optimized resource loading

### Analytics Ready

- **Google Analytics**: Pre-configured GA4 integration
- **Event Tracking**: Custom event tracking for user interactions
- **Performance Monitoring**: Core Web Vitals tracking

### Configuration

1. Copy `.env.example` to `.env.local`
2. Update the environment variables with your actual values:
   - Site URL
   - Google Analytics ID
   - Social media handles
   - Site verification codes
   - Event details

### Required Assets for Full SEO

To complete the SEO setup, add these image files to `/public/`:

- `og-image.jpg` (1200x630) - Main Open Graph image
- `twitter-image.jpg` (1200x630) - Twitter card image
- `apple-touch-icon.png` (180x180) - iOS app icon
- `favicon-32x32.png` (32x32) - Browser favicon
- `favicon-16x16.png` (16x16) - Browser favicon
- `icon-192.png` (192x192) - PWA icon
- `icon-512.png` (512x512) - PWA icon

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## About Blockfest

Blockfest is Africa's premier blockchain conference, bringing together builders, founders, investors, and enthusiasts to shape the future of Web3 in Africa.
