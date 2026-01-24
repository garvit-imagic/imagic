// Base component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

// Image types
export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  quality?: number;
  fill?: boolean;
  sizes?: string;
}

export interface ResponsiveImageProps {
  desktop: ImageProps;
  mobile: ImageProps;
  tablet?: ImageProps;
}

// Animation configuration
export interface AnimationConfig {
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  threshold?: number;
}

// Responsive configuration
export interface ResponsiveConfig<T> {
  mobile: T;
  tablet?: T;
  desktop: T;
}

// Link types
export interface LinkProps {
  href: string;
  label: string;
  external?: boolean;
  newTab?: boolean;
  ariaLabel?: string;
}

export interface NavigationLink extends LinkProps {
  icon?: string;
  active?: boolean;
  subLinks?: LinkProps[];
}

// Section types
export interface SectionProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  description?: string;
  background?: string;
  padding?: string;
}

export interface HeroSectionProps extends SectionProps {
  backgroundImage?: string;
  mobileBackgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

// Form types
export interface FormFieldProps {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox';
  placeholder?: string;
  required?: boolean;
  validation?: RegExp;
  errorMessage?: string;
  options?: Array<{ value: string; label: string }>;
}

export interface FormData {
  [key: string]: string | boolean | number;
}

export interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  message?: string;
}

// Card types
export interface CardProps extends BaseComponentProps {
  title: string;
  description?: string;
  image?: ImageProps;
  link?: LinkProps;
  tags?: string[];
  date?: Date;
}

export interface ProjectCardProps extends CardProps {
  frontImage?: string;
  backImage?: string;
  category?: string;
  client?: string;
}

// Carousel types
export interface CarouselItem {
  id: string | number;
  image: string;
  mobileImage?: string;
  alt: string;
  title?: string;
  description?: string;
  link?: LinkProps;
}

export interface CarouselProps extends BaseComponentProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  showNavigation?: boolean;
}

// Stats types
export interface StatItem {
  value: string | number;
  label: string;
  suffix?: string;
  prefix?: string;
  description?: string;
}

// Company/Client types
export interface Company {
  id: string | number;
  name: string;
  logo: string;
  website?: string;
  description?: string;
}

// Service/Feature types
export interface Service {
  id: string | number;
  title: string;
  description: string;
  icon?: string;
  image?: ImageProps;
  features?: string[];
  link?: LinkProps;
}

// Accordion types
export interface AccordionItem {
  id: string | number;
  title: string;
  content: string | React.ReactNode;
  icon?: string;
  image?: ImageProps;
}

export interface AccordionProps extends BaseComponentProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string | number;
}

// Marquee types
export interface MarqueeProps extends BaseComponentProps {
  items: string[];
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
}

// Contact types
export interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
  socialLinks?: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
}

// SEO types
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterImage?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

// Pagination types
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageSize?: number;
  showFirstLast?: boolean;
}

// Modal types
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
}

// Toast/Notification types
export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  type: ToastType;
  message: string;
  duration?: number;
  onClose?: () => void;
}

// Loading/Skeleton types
export interface SkeletonProps extends BaseComponentProps {
  width?: string | number;
  height?: string | number;
  variant?: 'text' | 'circular' | 'rectangular';
  animation?: 'pulse' | 'wave' | 'none';
}

// Error types
export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

// Device detection types
export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export interface DeviceInfo {
  type: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  userAgent: string;
}

// Analytics types
export interface AnalyticsEvent {
  eventName: string;
  properties?: Record<string, any>;
  timestamp?: Date;
}

export interface WebVitalsMetric {
  id: string;
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  navigationType: string;
}
