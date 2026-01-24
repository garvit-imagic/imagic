/**
 * Text Display Component Types
 * Supports multi-row text with customizable typography and styling via Tailwind classes
 */

export interface TextSegment {
  text: string;
  className?: string; // Tailwind classes for typography, colors, etc.
}

export interface TextLine {
  segments: TextSegment[];
  className?: string; // Tailwind classes for line styling
}

export interface TextRow {
  lines: TextLine[];
  className?: string; // Tailwind classes for row content
  containerClassName?: string; // Tailwind classes for row wrapper
}

export interface TextDisplayConfig {
  rows: TextRow[];
  containerClassName?: string; // Tailwind classes for main container
  animate?: boolean;
  animationDelay?: number;
  animationDirection?: 'up' | 'down' | 'left' | 'right';
}
