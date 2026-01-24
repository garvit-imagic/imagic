# Quick Reference Guide - IMagic Project

## 🚀 Quick Start

### Development
```bash
cd /Users/garvittyagi/Documents/dv/IMagic
npm run dev
```

### Build & Test
```bash
npm run build    # Check for errors
npm run start    # Test production build
```

## 📦 New Utilities Available

### String Functions
```typescript
import { capitalize, slugify, truncateWithEllipsis } from '@/utils';

capitalize('hello world')  // "Hello world"
slugify('Hello World!')    // "hello-world"
truncateWithEllipsis('Long text...', 20)  // "Long text..."
```

### Number Functions
```typescript
import { formatCurrency, formatBytes, abbreviateNumber } from '@/utils';

formatCurrency(1234.56)      // "$1,234.56"
formatBytes(1024000)         // "1000 KB"
abbreviateNumber(1234567)    // "1.2M"
```

### Date Functions
```typescript
import { formatDateShort, formatRelativeTime, isToday } from '@/utils';

formatDateShort(new Date())           // "Jan 15, 2024"
formatRelativeTime(new Date())        // "just now"
isToday(new Date())                   // true
```

### Validation Functions
```typescript
import { isValidEmail, isValidPhone, sanitizeInput } from '@/utils';

isValidEmail('test@example.com')  // true
isValidPhone('+1-555-1234')       // true
sanitizeInput('<script>alert()</script>')  // 'scriptalert()script'
```

### Performance Functions
```typescript
import { preloadImage, prefetchImages } from '@/utils';

preloadImage('/path/to/image.jpg')
prefetchImages(['/img1.jpg', '/img2.jpg'])
```

### Analytics Functions
```typescript
import { trackEvent, trackPageView } from '@/utils';

trackEvent('button_click', { button: 'cta', page: 'home' })
trackPageView('/about')
```

## 🎨 CSS Animations

### Usage
```tsx
// Simple fade in with slide up
<div className="animate-fade-in-up">
  Content appears smoothly
</div>

// With delay
<div className="animate-fade-in-up delay-200">
  Appears after 0.2s
</div>

// Available animations:
// animate-fade-in-up
// animate-fade-in-down
// animate-fade-in-left
// animate-fade-in-right
// animate-fade-in
// animate-scale-in

// Available delays:
// delay-100, delay-200, delay-300, delay-400, delay-500, delay-600, delay-700
```

## 🦴 Skeleton Loading Components

```tsx
import { 
  CardSkeleton, 
  HeroSkeleton, 
  NavbarSkeleton,
  ProjectsSkeleton 
} from '@/components/ui/Skeletons';

// Show while loading
{isLoading ? <CardSkeleton count={3} /> : <Cards data={data} />}
```

## 📝 TypeScript Types

### Component Props
```typescript
import type { 
  BaseComponentProps,
  ButtonProps,
  CardProps,
  ImageProps 
} from '@/types';

// Use in your components
interface MyComponentProps extends BaseComponentProps {
  title: string;
}
```

### API Types
```typescript
import type { 
  APIResponse,
  PaginatedResponse,
  APIError 
} from '@/types';

// Use in API calls
const response: APIResponse<User> = await fetchUser();
const users: PaginatedResponse<User> = await fetchUsers();
```

### Utility Types
```typescript
import type { 
  Optional,
  Nullable,
  PartialDeep,
  RequiredDeep 
} from '@/types';

type UserWithOptionalEmail = Optional<User, 'email'>;
type PartialUser = PartialDeep<User>;
```

## 🔧 Custom Hooks

### useScrollAnimation
```tsx
import { useScrollAnimation } from '@/hooks';

function Component() {
  const { ref, isVisible } = useScrollAnimation();
  
  return <div ref={ref} className={isVisible ? 'fade-in' : ''}>...</div>;
}
```

### useMediaQuery
```tsx
import { useMediaQuery } from '@/hooks';

function Component() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return isMobile ? <MobileView /> : <DesktopView />;
}
```

### useScrollPosition
```tsx
import { useScrollPosition } from '@/hooks';

function Component() {
  const { y, direction } = useScrollPosition();
  
  return <div>Scrolled {y}px, going {direction}</div>;
}
```

## 🔍 SEO Functions

### Generate Structured Data
```typescript
import { generateOrgSchema, generateBreadcrumbSchema } from '@/utils';

const schema = generateOrgSchema({
  name: 'IMagic',
  url: 'https://imagic.com',
  logo: 'https://imagic.com/logo.png'
});
```

## 📊 Analytics Events

### Track Custom Events
```typescript
import { trackEvent } from '@/utils';

// Button click
trackEvent('button_click', { 
  button: 'contact_us', 
  page: 'home' 
});

// Form submission
trackEvent('form_submit', { 
  form: 'contact', 
  success: true 
});

// Download
trackEvent('file_download', { 
  file: 'brochure.pdf' 
});
```

## 🖼️ Images & Assets

### Generated Assets
- `/public/og-image.jpg` - 1200x630 for social sharing
- `/public/twitter-image.jpg` - 1200x600 for Twitter
- `/public/icon-192.png` - PWA icon
- `/public/icon-512.png` - PWA icon

### Next.js Image Optimization
```tsx
import Image from 'next/image';

<Image
  src="/assets/photo.jpg"
  alt="Description"
  width={800}
  height={600}
  priority  // For above-the-fold images
  placeholder="blur"  // If you have blur data
/>
```

## ⚙️ Environment Variables

### Setup
1. Copy `.env.example` to `.env.local`
2. Fill in values:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Usage
```typescript
const gaId = process.env.NEXT_PUBLIC_GA_ID;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
```

## 🧪 Testing

### Check Bundle Size
```bash
npm run build | grep "First Load"
```

### Test SEO Files
- Visit: `http://localhost:3000/robots.txt`
- Visit: `http://localhost:3000/sitemap.xml`
- Visit: `http://localhost:3000/manifest.webmanifest`

### Test Analytics
1. Open DevTools Console
2. Check for analytics initialization
3. Trigger events and verify logging

## 📱 Converting Client to Server Components

### Before (Client Component)
```tsx
"use client";
import ScrollAnimation from "../ScrollAnimation";

export default function MyComponent() {
  return (
    <ScrollAnimation direction="up">
      <div>Content</div>
    </ScrollAnimation>
  );
}
```

### After (Server Component)
```tsx
// No "use client" directive!
export default function MyComponent() {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <div>Content</div>
    </div>
  );
}
```

## 🚨 Common Issues

### Issue: "use client" needed
**Solution**: Only add if component uses:
- `useState`, `useEffect`, `useContext`
- Event handlers (`onClick`, `onChange`)
- Browser APIs (`window`, `document`)
- Interactive libraries (framer-motion)

### Issue: Type errors
**Solution**: Check imports from `@/types`
```typescript
import type { APIResponse } from '@/types';
```

### Issue: Build errors
**Solution**: Check for:
- Missing dependencies
- TypeScript errors
- Duplicate exports
- Environment variables

## 📚 File Structure

```
src/
├── app/                 # Next.js pages
│   ├── layout.tsx      # Root layout (analytics, metadata)
│   ├── page.tsx        # Homepage (dynamic imports)
│   ├── robots.ts       # SEO
│   ├── sitemap.ts      # SEO
│   └── manifest.ts     # PWA
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── common/         # Common components
│   ├── desktop/        # Desktop-specific
│   └── mobile/         # Mobile-specific
├── hooks/              # Custom React hooks
│   ├── useScrollAnimation.tsx
│   ├── useMediaQuery.tsx
│   └── useScrollPosition.tsx
├── utils/              # Utility functions
│   ├── index.ts        # Main exports
│   ├── performance.ts  # Performance utilities
│   ├── seo.ts          # SEO utilities
│   ├── analytics.ts    # Analytics
│   ├── validation.ts   # Form validation
│   ├── string.ts       # String helpers
│   ├── number.ts       # Number formatting
│   └── date.ts         # Date utilities
├── types/              # TypeScript definitions
│   ├── index.ts        # Main exports
│   ├── components.ts   # Component types
│   ├── utils.ts        # Utility types
│   └── api.ts          # API types
├── contexts/           # React contexts (empty, ready for use)
├── lib/                # Third-party integrations (empty, ready for use)
└── services/           # API services (empty, ready for use)
```

## 🎯 Next Priority: Image Optimization

### Critical Images to Optimize
1. `HOME PAGE DESKTOP.jpg` - 20MB (!)
2. `D7.jpg` - 11MB (!)
3. `D2.jpg` - 1.8MB

### Optimization Commands
```bash
# Convert to WebP (requires imagemagick)
magick HOME\ PAGE\ DESKTOP.jpg -resize 1920x -quality 80 HOME\ PAGE\ DESKTOP.webp

# Or use online tools:
# - TinyPNG.com
# - Squoosh.app
# - ImageOptim (Mac)
```

---

**For detailed information, see:**
- `IMPLEMENTATION_SUMMARY.md` - Full implementation details
- `COMPONENT_OPTIMIZATION_GUIDE.md` - Component optimization strategies
- `README.md` - Project overview
