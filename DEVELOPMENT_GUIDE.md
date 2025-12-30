# IMagic Homepage - Development Guide

## 🎉 Project Setup Complete!

Your IMagic homepage has been fully developed with all components and sections based on your Figma design.

## 📦 What's Been Built

### ✅ Components Created

1. **Navbar** (`src/components/Navbar.tsx`)

   - Responsive navigation with MUI AppBar
   - Mobile drawer menu
   - Logo integration
   - Navigation links: What is, Projects, Services, Contact
   - CTA button: "Try IMagic"

2. **Hero Section** (`src/components/Hero.tsx`)

   - Headline: "Where ideas Take Flight"
   - Descriptive text about 360 AI platform
   - Two CTA buttons: "Start Your Project" and "Learn More"
   - Animated visual element with gradient
   - Fully responsive

3. **Company Logos** (`src/components/CompanyLogos.tsx`)

   - 16 company logo placeholders
   - Grayscale effect with hover animation
   - Grid layout (4 cols mobile, 6 tablet, 8 desktop)

4. **Feature Cards** (`src/components/FeatureCards.tsx`)

   - "Designed to Deliver — Literally" section
   - 8 feature cards: AI & ML, Web, Mobile, Cloud, Data Analytics, IoT, Blockchain, DevOps
   - Alternating color scheme (primary/white)
   - "Start Your Project Today!" CTA

5. **Stats Section** (`src/components/StatsSection.tsx`)

   - "35+ Years of Getting Things Done" headline
   - Stats: 10K+ Projects, 20+ Countries
   - Image placeholder for visual content
   - CTA button

6. **Image Carousel** (`src/components/ImageCarousel.tsx`)

   - MUI MobileStepper component
   - 3 slides with navigation
   - Dot indicators
   - Dark theme with space imagery placeholder

7. **Services Accordion** (`src/components/ServicesAccordion.tsx`)

   - MUI Accordion component
   - 6 expandable sections: SPACE, TECHNOLOGY, DEFENSE, MEDICINE, LIFESTYLE, ARTS & CULTURE
   - "A little peek into our playground" headline
   - Smooth expand/collapse animations

8. **Contact Section** (`src/components/ContactSection.tsx`)

   - "Let's Talk" headline
   - Contact form with MUI TextField components
   - Contact information card
   - Social media section
   - Two-column layout (form + info)

9. **Footer** (`src/components/Footer.tsx`)

   - Logo, links, copyright
   - Dark theme
   - Responsive layout

10. **Button Component** (`src/components/ui/Button.tsx`)
    - Reusable component
    - Variants: primary (lime green), secondary (black)
    - Sizes: sm, md, lg
    - Tailwind-based styling

## 🎨 Design System

### Colors (tailwind.config.ts)

```
primary: #CDFF3C (lime green)
primary-light: #E0FF7A
primary-dark: #B8E834
dark: #000000
light: #FFFFFF
```

### Typography

- Font: Open Sans (via Google Fonts)
- Weights: 300, 400, 500, 600, 700, 800

### Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 How to Run

### Node.js Version Requirement

⚠️ **Important**: Next.js 15 requires Node.js version >= 18.18.0

Your current version: 18.12.1

**To fix:**

```bash
# Option 1: Update Node.js
nvm install 20
nvm use 20

# Option 2: Use a different Node version manager
# Then run:
npm run dev
```

### Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with font setup
│   ├── page.tsx         # Main homepage (all sections)
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── CompanyLogos.tsx
│   ├── FeatureCards.tsx
│   ├── StatsSection.tsx
│   ├── ImageCarousel.tsx
│   ├── ServicesAccordion.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── ui/
│       └── Button.tsx
├── types/
│   └── index.ts         # TypeScript interfaces
├── constants/
│   └── index.ts         # Design constants
└── utils/
    └── index.ts         # Utility functions (cn helper)
```

## 🎯 Features Implemented

✅ Fully responsive (mobile, tablet, desktop)
✅ Material UI components (AppBar, Drawer, Accordion, TextField, MobileStepper)
✅ Tailwind CSS styling
✅ TypeScript support
✅ Reusable components
✅ Design system with brand colors
✅ Open Sans font integration
✅ Smooth animations and transitions
✅ Accessible components
✅ SEO-friendly structure

## 📝 Next Steps

1. **Update Node.js** to version >= 18.18.0
2. **Replace placeholders**:
   - Add actual company logos to `/public/` folder
   - Replace carousel placeholder with space images
   - Add feature card images
   - Update contact information
3. **Customize content**:
   - Update text in all sections
   - Modify navigation links
   - Add actual form submission logic
4. **Add functionality**:
   - Connect contact form to backend/API
   - Add analytics tracking
   - Implement smooth scroll for navigation
5. **Optimize**:
   - Add image optimization
   - Implement lazy loading
   - Add meta tags for SEO

## 🔧 Customization Guide

### Changing Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#YOUR_COLOR",
  },
}
```

### Adding New Sections

1. Create component in `src/components/`
2. Import in `src/app/page.tsx`
3. Add to the component stack

### Modifying Button Styles

Edit `src/components/ui/Button.tsx`

## 📚 Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Material UI (MUI)** - Component library
- **Open Sans** - Google Font

## 🐛 Troubleshooting

### Issue: Dev server won't start

**Solution**: Update Node.js to >= 18.18.0

### Issue: Styles not applying

**Solution**: Make sure Tailwind is configured correctly and run `npm run dev`

### Issue: MUI components not rendering

**Solution**: Check that @emotion/react and @emotion/styled are installed

## 📞 Support

If you need help with customization or have questions, refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Material UI Documentation](https://mui.com/material-ui/)

---

**Built with ❤️ for IMagic**
