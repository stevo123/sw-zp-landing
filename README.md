# SugarWOD + Zen Planner Integration Landing Page

A modern, responsive marketing landing page built to showcase the integration between SugarWOD and Zen Planner gym management platforms. This single-page application demonstrates how the two platforms work together to simplify gym operations and maximize member engagement.

## 🎯 Project Overview

This project is a marketing landing page that highlights the benefits of integrating SugarWOD (workout tracking and community platform) with Zen Planner (gym management software). The page features:

- **Hero Section** with clear value proposition and call-to-action buttons
- **Integration Highlights** showcasing key features and benefits
- **Feature Cards** displaying operational advantages
- **Video Testimonials** section with embedded YouTube content and customer quotes
- **Demo Modal** with lead capture form
- **Responsive Design** optimized for all device sizes

## 🛠️ Tech Stack & Architecture

### Core Technologies

- **Next.js 16.1.4** - React framework with App Router for optimal performance and SEO
- **React 19.2.3** - Latest React with improved performance and developer experience
- **TypeScript 5.9.3** - Type safety throughout the application
- **Tailwind CSS v4.1** - Utility-first CSS framework with custom design tokens
- **React Aria Components** - Accessible, unstyled components as the foundation

### Component Library

Built using **[Untitled UI React](https://www.untitledui.com/react)** - a comprehensive collection of open-source React UI components. This provides:

- Pre-built, accessible components (Buttons, Inputs, Modals, etc.)
- Consistent design system
- Built-in accessibility features (ARIA attributes, keyboard navigation)
- Customizable styling through Tailwind CSS

### Key Dependencies

- `@untitledui/icons` - Icon library with 1,100+ line-style icons
- `react-aria-components` - Accessible component primitives
- `motion` (Framer Motion) - Smooth animations and transitions
- `next-themes` - Dark/light mode support (configured but not actively used)

## 🏗️ Development Approach

### Component Architecture

The project follows a modular component structure:

```
src/
├── app/
│   └── home-screen.tsx      # Main landing page component
├── components/
│   ├── base/                # Core UI components (Button, Input, etc.)
│   ├── application/         # Complex components (Modal, DatePicker, etc.)
│   └── foundations/         # Design tokens (FeaturedIcon, etc.)
```

### Design System Principles

1. **Accessibility First**: All components built on React Aria Components for WCAG compliance
2. **Consistent Styling**: Uses Tailwind CSS design tokens for colors, spacing, and typography
3. **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
4. **Type Safety**: Full TypeScript coverage for better developer experience and fewer runtime errors

### Key Implementation Details

- **Modal System**: Custom modal implementation using React Aria Components with full-screen overlay for demo form
- **Video Integration**: YouTube embed with programmatic control via postMessage API for smooth user experience
- **Smooth Scrolling**: Native scroll behavior with anchor links for section navigation
- **Form Handling**: Accessible form inputs with proper labels, hints, and validation states

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (or Bun)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── home-screen.tsx    # Main landing page component
│   │   ├── layout.tsx          # Root layout with providers
│   │   └── page.tsx            # Page entry point
│   ├── components/
│   │   ├── base/               # Core UI components
│   │   ├── application/        # Complex application components
│   │   └── foundations/        # Design system foundations
│   ├── styles/
│   │   ├── globals.css         # Global styles
│   │   ├── theme.css           # Design tokens and color system
│   │   └── typography.css      # Typography styles
│   └── utils/                  # Utility functions
├── public/
│   └── images/                 # Static assets
└── package.json
```

## 🎨 Styling Approach

The project uses **Tailwind CSS v4.1** with a custom design system:

- **Semantic Color Tokens**: Uses semantic color classes (e.g., `text-primary`, `bg-brand-secondary`) that adapt to light/dark modes
- **Consistent Spacing**: Tailwind's spacing scale for consistent layouts
- **Responsive Utilities**: Mobile-first breakpoints (`sm:`, `md:`, `lg:`)
- **Custom Design Tokens**: Brand colors, typography scales, and component-specific styles defined in `theme.css`

## ✨ Key Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Accessible components (WCAG compliant)
- ✅ Smooth animations and transitions
- ✅ Video integration with programmatic controls
- ✅ Modal system with form handling
- ✅ SEO optimized (Next.js App Router)
- ✅ Type-safe development (TypeScript)

## 📝 Development Notes

### Component Usage Patterns

- Components follow the compound component pattern where applicable
- All React Aria imports are prefixed with `Aria*` to avoid naming conflicts
- File naming uses kebab-case convention throughout
- Components are self-contained with their own styling logic

### State Management

- Local component state using React hooks (`useState`, `useRef`, `useEffect`)
- No global state management needed for this single-page application
- Form state handled within the modal component

## 🔧 Configuration

- **Next.js**: Configured with Turbopack for faster development builds
- **TypeScript**: Strict mode enabled for better type safety
- **Tailwind**: Custom PostCSS configuration for v4.1
- **Prettier**: Code formatting with import sorting

## 📚 Resources

### Untitled UI React

[Untitled UI React](https://www.untitledui.com/react) is the world's largest collection of open-source React UI components. Built with React 19.1, Tailwind CSS v4.1, TypeScript 5.8, and React Aria.

**[Learn more](https://www.untitledui.com/react)** • [Documentation](https://www.untitledui.com/react/docs/introduction) • [Figma](https://www.untitledui.com/figma) • [FAQs](https://www.untitledui.com/faqs)

### Additional Resources

- **[Untitled UI Figma](https://www.untitledui.com/react/resources/figma-files)** - Design system and UI kit
- **[Untitled UI Icons](https://www.untitledui.com/react/resources/icons)** - Icon library
- **[React Aria Components](https://react-spectrum.adobe.com/react-aria-components/)** - Component primitives documentation

## 📄 License

Untitled UI React open-source components are licensed under the MIT license, which means you can use them for free in unlimited commercial projects.

> [!NOTE]
> This license applies only to the starter kit and to the components included in this open-source repository. [Untitled UI React PRO](https://www.untitledui.com/react) includes hundreds more advanced UI components and page examples and is subject to a separate [license agreement](https://www.untitledui.com/license).

[Untitled UI license agreement →](https://www.untitledui.com/license)

[Frequently asked questions →](https://www.untitledui.com/faqs)
