# IMagic Homepage - Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Update Node.js

```bash
# Check your current version
node -v

# If < 18.18.0, update using nvm:
nvm install 20
nvm use 20

# Or download from: https://nodejs.org/
```

### Step 2: Run Development Server

```bash
npm run dev
```

Visit: **http://localhost:3000**

### Step 3: Start Customizing!

---

## 📋 Homepage Structure (Top to Bottom)

```
┌─────────────────────────────────────┐
│         NAVBAR (Sticky)             │
│  Logo | Links | Try IMagic Button   │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│           HERO SECTION              │
│  "Where ideas Take Flight"          │
│  Description + 2 CTA Buttons        │
│  Animated Visual Element            │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│        COMPANY LOGOS (16)           │
│  Grid of Company Logos              │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│    FEATURE CARDS SECTION            │
│  "Designed to Deliver"              │
│  8 Cards: AI, Web, Mobile, etc.     │
│  "Start Your Project Today!"        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│        STATS SECTION                │
│  "35+ Years of Getting Things Done" │
│  Stats: 10K+ Projects, 20+ Countries│
│  Image + CTA Button                 │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│       IMAGE CAROUSEL                │
│  Space/Technology Images            │
│  Dot Navigation + Arrows            │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│     SERVICES ACCORDION              │
│  "A little peek into our playground"│
│  6 Expandable Sections              │
│  SPACE | TECHNOLOGY | DEFENSE       │
│  MEDICINE | LIFESTYLE | ARTS        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│       CONTACT SECTION               │
│  "Let's Talk"                       │
│  Contact Form | Contact Info        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│           FOOTER                    │
│  Logo | Links | Copyright           │
└─────────────────────────────────────┘
```

---

## 🎨 Quick Customization

### Change Primary Color

**File**: `tailwind.config.ts`

```typescript
primary: {
  DEFAULT: "#YOUR_COLOR", // Change this
}
```

### Update Navigation Links

**File**: `src/components/Navbar.tsx`

```typescript
const navLinks: NavLink[] = [{ label: "Your Link", href: "#your-section" }];
```

### Modify Hero Text

**File**: `src/components/Hero.tsx`

```tsx
<h1>
  Your <span className="text-primary">Headline</span>
</h1>
```

### Add Company Logos

**Steps**:

1. Add images to `/public/logos/`
2. Edit `src/components/CompanyLogos.tsx`
3. Replace placeholders with `<Image>` components

### Update Feature Cards

**File**: `src/components/FeatureCards.tsx`

```typescript
const features: FeatureCard[] = [
  { title: "Your Feature", description: "Description" },
];
```

### Customize Contact Info

**File**: `src/components/ContactSection.tsx`

- Update address, email, phone
- Modify form fields

---

## 📦 What's Included

### Dependencies

✅ Next.js 15
✅ React 18
✅ TypeScript
✅ Tailwind CSS
✅ Material UI (MUI)
✅ MUI Icons
✅ Emotion (for MUI styling)

### Components (10)

✅ Navbar with mobile menu
✅ Hero section with animation
✅ Company logos grid
✅ Feature cards (8 cards)
✅ Stats section
✅ Image carousel (MUI)
✅ Services accordion (MUI)
✅ Contact form (MUI)
✅ Footer
✅ Reusable Button component

### Features

✅ Fully responsive (mobile, tablet, desktop)
✅ TypeScript support
✅ Tailwind + MUI integration
✅ Open Sans font
✅ Smooth animations
✅ Accessible components
✅ SEO-friendly structure

---

## 🔧 Common Tasks

### Add a New Section

```bash
# 1. Create component
touch src/components/NewSection.tsx

# 2. Add to page.tsx
# Import and add <NewSection /> to the component stack
```

### Change Font

**File**: `src/app/layout.tsx`

```typescript
import { Your_Font } from "next/font/google";

const yourFont = Your_Font({
  subsets: ["latin"],
  weight: ["400", "700"],
});
```

### Add Animation

```tsx
<div className="transition-all duration-300 hover:scale-105">
  {/* Content */}
</div>
```

### Make Element Sticky

```tsx
<div className="sticky top-0 z-50">{/* Content */}</div>
```

---

## 🚢 Deploy to Vercel

### Method 1: GitHub Integration (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

If you add API keys or secrets:

1. Create `.env.local` file
2. Add to Vercel dashboard: Settings → Environment Variables

---

## 📱 Responsive Breakpoints

| Device  | Width      | Columns |
| ------- | ---------- | ------- |
| Mobile  | < 768px    | 1       |
| Tablet  | 768-1024px | 2       |
| Desktop | > 1024px   | 4       |

---

## 🐛 Troubleshooting

### Dev Server Won't Start

```bash
# Check Node version
node -v  # Should be >= 18.18.0

# Clear cache
rm -rf .next
npm run dev
```

### Styles Not Applying

```bash
# Restart dev server
# Check tailwind.config.ts
# Verify className syntax
```

### MUI Components Not Rendering

```bash
# Reinstall dependencies
npm install @mui/material @emotion/react @emotion/styled
```

### Build Errors

```bash
# Check for TypeScript errors
npm run build

# Fix any type errors in components
```

---

## 📚 Documentation Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Material UI Docs](https://mui.com/material-ui/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

---

## ✅ Pre-Launch Checklist

- [ ] Update all placeholder text
- [ ] Add real company logos
- [ ] Add carousel images
- [ ] Update contact information
- [ ] Test on mobile devices
- [ ] Test all forms
- [ ] Test all links
- [ ] Add meta tags for SEO
- [ ] Add favicon
- [ ] Test build: `npm run build`
- [ ] Deploy to Vercel

---

## 🎯 Next Steps

1. **Content**: Replace all placeholder text with real content
2. **Images**: Add real images to `/public/` folder
3. **Forms**: Connect contact form to backend/API
4. **SEO**: Add meta tags, Open Graph tags
5. **Analytics**: Add Google Analytics or similar
6. **Testing**: Test on real devices
7. **Deploy**: Push to production

---

## 💡 Pro Tips

1. **Use the Button component** for consistency
2. **Follow the spacing patterns** (gap-4, gap-6, gap-8, etc.)
3. **Keep sections in separate components** for maintainability
4. **Use Tailwind classes** instead of inline styles
5. **Test responsive design** at every breakpoint
6. **Optimize images** using Next.js Image component
7. **Keep MUI customization** in sx prop for clarity

---

**Need Help?** Check `DEVELOPMENT_GUIDE.md` and `COMPONENT_REFERENCE.md`

**Ready to Launch?** 🚀

```bash
npm run build
vercel --prod
```

---

Built with ❤️ for IMagic
