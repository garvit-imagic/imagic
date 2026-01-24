// Re-export all types from a single entry point
export * from './components';
export * from './utils';
export * from './api';

// Existing base types
export interface BaseComponent {
  id?: string;
  className?: string;
}

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  image?: string;
}

export interface AccordionItem {
  title: string;
  content: string;
}
