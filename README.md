# IMagic

A Next.js project with TypeScript and Tailwind CSS.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
IMagic/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   │   └── ui/          # UI components
│   ├── constants/       # Design tokens and constants
│   ├── types/           # TypeScript type definitions
│   ├── data/            # Static data and mock data
│   └── utils/           # Utility functions
├── public/              # Static assets
└── tailwind.config.ts   # Tailwind configuration with design tokens
```

## Design Tokens

Design tokens from Figma are centralized in:

- `tailwind.config.ts` - Colors, typography, spacing
- `src/constants/index.ts` - JavaScript constants

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
