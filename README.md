# ARDICTECH Hero Page

A high-fidelity, cinematic "Diagnostic Hero" section for a manufacturing digitalization website built with React, Tailwind CSS, and Framer Motion.

## Features

- **Dark Theme Design**: Deep matte black background with neon cyan/electric blue accents
- **Glassmorphism Effects**: Translucent cards with backdrop blur
- **Interactive Constraint Selection**: Hover over constraint cards to update the diagnostic benchmarking content
- **Smooth Animations**: Powered by Framer Motion for seamless transitions
- **Responsive Design**: Mobile-friendly layout that stacks on smaller screens

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
Content/
├── src/
│   ├── components/
│   │   └── Hero.jsx          # Main hero component
│   ├── App.jsx               # Root app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── package.json              # Dependencies
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── postcss.config.js         # PostCSS configuration
```

## Component Details

### Hero Component

The main hero component includes:

1. **Navigation Bar**
   - Logo with "ARDICTECH" and "FOUNDATIONAL INTELLIGENCE"
   - Center navigation links
   - Language toggle and login button

2. **Main Hero Content (Left Column)**
   - Label with cyan accent line
   - Gradient headline
   - Body text
   - Live Diagnostic Benchmarking card (updates on constraint hover)
   - CTA button with glow effect

3. **Constraint Selection Sidebar (Right Column)**
   - Four interactive cards:
     - Eliminate Hidden Losses (Performance Optimization)
     - Reduce Quality Drift (Yield Maximization)
     - Optimize Energy BOM (Resource Intensity)
     - Sync Lead Times (Operational Agility)

## Customization

### Colors

Edit `tailwind.config.js` to customize colors:
- `neon-cyan`: Primary accent color
- `electric-blue`: Secondary blue accent
- `deep-magenta`: Gradient accent

### Content

Edit `src/components/Hero.jsx` to modify:
- Navigation links
- Headline and body text
- Constraint card data
- Diagnostic benchmarking content

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Inter Font**: Typography
