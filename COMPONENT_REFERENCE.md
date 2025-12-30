# Component Reference Guide

## Quick Component Overview

### 1. Button Component
**Location**: `src/components/ui/Button.tsx`

**Usage**:
```tsx
import Button from '@/components/ui/Button';

<Button variant="primary" size="lg">
  Click Me
</Button>
```

**Props**:
- `variant`: "primary" | "secondary"
- `size`: "sm" | "md" | "lg"
- `disabled`: boolean
- `onClick`: function
- `className`: string (for custom Tailwind classes)

**Styling**:
- Primary: Lime green background (#CDFF3C)
- Secondary: Black background (#000000)

---

### 2. Navbar
**Location**: `src/components/Navbar.tsx`

**Features**:
- Sticky positioning
- Mobile drawer menu
- Responsive navigation
- Logo integration

**Customization**:
```tsx
// Update navigation links in the component:
const navLinks: NavLink[] = [
  { label: 'Your Link', href: '#your-section' },
];
```

---

### 3. Hero Section
**Location**: `src/components/Hero.tsx`

**Key Elements**:
- Main headline with accent color
- Description text
- Two CTA buttons
- Animated visual element

**Customization**:
- Update headline text
- Modify description
- Change button labels
- Adjust gradient colors

---

### 4. Company Logos
**Location**: `src/components/CompanyLogos.tsx`

**To Add Real Logos**:
1. Add logo images to `/public/logos/`
2. Update the component:
```tsx
import Image from 'next/image';

<Image 
  src="/logos/company-name.png" 
  alt="Company Name"
  width={100}
  height={40}
/>
```

---

### 5. Feature Cards
**Location**: `src/components/FeatureCards.tsx`

**Data Structure**:
```tsx
const features: FeatureCard[] = [
  {
    title: 'Feature Name',
    description: 'Feature description',
  },
];
```

**Styling Pattern**:
- Even index cards: Primary background
- Odd index cards: White background with border

---

### 6. Stats Section
**Location**: `src/components/StatsSection.tsx`

**Customization**:
```tsx
// Update stats
<div className="text-4xl md:text-5xl font-bold text-primary">
  YOUR_NUMBER
</div>
<p className="text-sm text-text-secondary">
  Your Label
</p>
```

---

### 7. Image Carousel
**Location**: `src/components/ImageCarousel.tsx`

**To Add Images**:
```tsx
const carouselItems = [
  {
    title: 'Slide Title',
    description: 'Slide description',
    image: '/images/slide-1.jpg', // Add this
  },
];

// Then in the component:
<Image 
  src={carouselItems[activeStep].image}
  alt={carouselItems[activeStep].title}
  fill
  className="object-cover"
/>
```

**MUI Component**: MobileStepper with dots navigation

---

### 8. Services Accordion
**Location**: `src/components/ServicesAccordion.tsx`

**Data Structure**:
```tsx
const services: AccordionItem[] = [
  {
    title: 'SECTION NAME',
    content: 'Detailed description...',
  },
];
```

**MUI Component**: Accordion with custom styling

---

### 9. Contact Section
**Location**: `src/components/ContactSection.tsx`

**Form Integration**:
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Add your API call here
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};
```

**MUI Components**: TextField with custom styling

---

### 10. Footer
**Location**: `src/components/Footer.tsx`

**Customization**:
- Update links
- Modify copyright year
- Add social media icons

---

## Common Patterns

### Responsive Layout
```tsx
// Mobile-first approach
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Content */}
</div>
```

### Section Container
```tsx
<section className="bg-white py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```

### Text Styles
```tsx
// Heading
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
  Your Heading
</h2>

// Body text
<p className="text-base md:text-lg text-text-secondary">
  Your text
</p>

// Accent text
<span className="text-primary">Highlighted</span>
```

### Hover Effects
```tsx
<div className="transition-all duration-300 hover:shadow-lg hover:scale-105">
  {/* Content */}
</div>
```

---

## Design Tokens

### Spacing Scale
- `gap-4`: 1rem (16px)
- `gap-6`: 1.5rem (24px)
- `gap-8`: 2rem (32px)
- `gap-12`: 3rem (48px)

### Border Radius
- `rounded-lg`: 0.5rem (8px)
- `rounded-xl`: 0.75rem (12px)
- `rounded-2xl`: 1rem (16px)
- `rounded-3xl`: 1.5rem (24px)

### Font Weights
- `font-medium`: 500
- `font-semibold`: 600
- `font-bold`: 700
- `font-extrabold`: 800

---

## Adding New Components

### Step 1: Create Component File
```bash
# Create in src/components/
touch src/components/YourComponent.tsx
```

### Step 2: Component Template
```tsx
export default function YourComponent() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Your content */}
      </div>
    </section>
  );
}
```

### Step 3: Add to Page
```tsx
// In src/app/page.tsx
import YourComponent from '@/components/YourComponent';

export default function Home() {
  return (
    <main>
      {/* Other components */}
      <YourComponent />
    </main>
  );
}
```

---

## MUI Customization

### Overriding MUI Styles
```tsx
<TextField
  sx={{
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      backgroundColor: 'white',
    },
  }}
/>
```

### Using MUI with Tailwind
```tsx
<Button 
  variant="contained"
  className="bg-primary hover:bg-primary-light"
>
  Hybrid Styling
</Button>
```

---

## Performance Tips

1. **Use Next.js Image Component**
```tsx
import Image from 'next/image';

<Image 
  src="/image.jpg"
  alt="Description"
  width={500}
  height={300}
  priority // For above-the-fold images
/>
```

2. **Lazy Load Components**
```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

3. **Optimize Fonts**
Already implemented in `layout.tsx` with `next/font/google`

---

## Accessibility

### ARIA Labels
```tsx
<button aria-label="Open menu">
  <MenuIcon />
</button>
```

### Semantic HTML
```tsx
<nav>
  <ul>
    <li><a href="#section">Link</a></li>
  </ul>
</nav>
```

### Keyboard Navigation
MUI components have built-in keyboard support.

---

## Testing Checklist

- [ ] Test on mobile (< 768px)
- [ ] Test on tablet (768px - 1024px)
- [ ] Test on desktop (> 1024px)
- [ ] Test all interactive elements
- [ ] Test form validation
- [ ] Test navigation links
- [ ] Test accordion expand/collapse
- [ ] Test carousel navigation
- [ ] Test mobile drawer menu

---

**Last Updated**: December 2025

