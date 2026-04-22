# Prestige - Luxury Website Style Guide

## Overview
A premium, multi-page company website featuring elegant design, smooth animations, and sophisticated user experience.

---

## Color Palette

### Primary Colors
- **Black/Charcoal**: `#111827` (gray-900) - Primary text, buttons, headers
- **White**: `#FFFFFF` - Backgrounds, light text
- **Gray-50**: `#F9FAFB` - Section backgrounds
- **Gray-100**: `#F3F4F6` - Hover states
- **Gray-600**: `#4B5563` - Secondary text
- **Gray-400**: `#9CA3AF` - Tertiary text, placeholders

### Accent Colors
- **Overlay**: `rgba(0, 0, 0, 0.4-0.8)` - Image overlays
- **Backdrop**: White with opacity for navbar

---

## Typography

### Font Families
- **Primary (Sans-serif)**: `Inter` - Body text, UI elements
- **Display (Serif)**: `Playfair Display` - Headlines, hero text, elegant elements

### Font Sizes
- **Hero Titles**: `text-4xl` to `text-7xl` (responsive)
- **Section Headers**: `text-3xl` to `text-5xl`
- **Body Large**: `text-lg` to `text-xl`
- **Body Regular**: `text-base`
- **Small Text**: `text-sm` to `text-xs`

### Font Weights
- **Light**: 300 (accent text)
- **Regular**: 400 (body)
- **Medium**: 500 (UI elements)
- **Semi-bold**: 600 (emphasis)
- **Bold**: 700 (strong emphasis)

### Letter Spacing
- **Uppercase Labels**: `tracking-[0.3em]`
- **Regular**: `tracking-tight` for large text
- **Wide**: `tracking-wide` for buttons

---

## Spacing & Layout

### Container
- **Max Width**: `max-w-7xl` (1280px)
- **Padding**: `px-4 sm:px-6 lg:px-8`

### Section Spacing
- **Vertical Padding**: `py-20` to `py-28`
- **Component Gap**: `gap-8` to `gap-12`

### Grid Systems
- **2 Column**: `grid-cols-1 md:grid-cols-2`
- **3 Column**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **4 Column**: `grid-cols-2 lg:grid-cols-4`

---

## Components

### Navigation Bar
- **Position**: Fixed, sticky top
- **Height**: `h-20` (80px)
- **Background**: Transparent → White (on scroll)
- **Transition**: Backdrop blur, shadow on scroll
- **Hover**: Underline animation on links

### Buttons
- **Primary**: Black background, white text
- **Secondary**: White border, black text
- **Hover**: Scale transform (`hover:scale-105`)
- **Padding**: `px-8 py-4`
- **Typography**: Uppercase, `text-sm`, `tracking-wide`

### Cards
- **Background**: White
- **Hover**: Shadow lift effect (`hover:shadow-xl`)
- **Padding**: `p-8`
- **Transition**: `transition-all duration-300`

### Images
- **Aspect Ratios**: Various (hero: full viewport, cards: fixed heights)
- **Hover**: Scale effect (`transform scale-110`)
- **Overlay**: Gradient overlays on hover

### Forms
- **Input Style**: Border, focus ring
- **Border**: `border-gray-300`
- **Focus**: `focus:border-gray-900` + ring
- **Padding**: `px-4 py-3`

---

## Animations & Transitions

### Page Transitions
- **Duration**: 0.3s to 1s
- **Easing**: Default ease-out

### Scroll Animations
- **Library**: Motion (Framer Motion)
- **Effect**: Fade in + slide up
- **Delay**: Staggered (0.1s increments)

### Hover Effects
- **Scale**: 1.05 to 1.1
- **Shadow**: Elevation change
- **Opacity**: Overlay fade in/out
- **Transform**: Translate for arrows/links

### Hero Slider
- **Auto-play**: 5 seconds
- **Transition**: Fade + scale (1s duration)
- **Controls**: Arrow buttons, dot indicators

---

## Iconography

### Library
- **Lucide React** - Consistent, clean line icons

### Usage
- **Size**: `w-6 h-6` (24px) standard, `w-12 h-12` (48px) for features
- **Color**: Matches text or background contrast
- **Stroke**: Default (2px)

### Common Icons
- Navigation: `Menu`, `X`
- Social: `Facebook`, `Twitter`, `Linkedin`, `Instagram`
- Contact: `Mail`, `Phone`, `MapPin`, `Clock`
- UI: `ChevronLeft`, `ChevronRight`, `Send`, `Briefcase`

---

## Responsive Design

### Breakpoints
- **Mobile**: `< 640px` (sm)
- **Tablet**: `640px - 1024px` (md, lg)
- **Desktop**: `> 1024px` (xl)

### Mobile Adjustments
- Hamburger menu below `lg` breakpoint
- Stack grids to single column
- Reduce font sizes responsively
- Full-width buttons
- Simplified spacing

---

## Page Structure

### All Pages Include:
1. **Hero Section**: Full-height or 60vh with image background
2. **Content Sections**: Alternating white/gray backgrounds
3. **Motion Animations**: Fade in on scroll
4. **CTA Sections**: Call-to-action with prominent buttons

### Common Patterns
- Section title pattern: Small uppercase label + Large serif heading
- Grid layouts for content display
- Hover effects on interactive elements
- Consistent spacing and rhythm

---

## Image Guidelines

### Sources
- High-quality images from Unsplash
- Minimum resolution: 1920x1080
- Professional, luxury aesthetic

### Treatment
- Dark overlays (40-80% opacity) for text readability
- Consistent aspect ratios within sections
- Lazy loading for performance

---

## Accessibility

### Contrast
- WCAG AA compliant text contrast
- Dark text on light backgrounds
- Light text on dark/image backgrounds with overlay

### Interactive Elements
- Keyboard navigable
- Focus states visible
- Semantic HTML structure
- Alt text for images

---

## Performance

### Optimization
- Smooth scrolling enabled
- Optimized animations (GPU-accelerated)
- Lazy loading for images
- Efficient re-renders with React

### Best Practices
- Use transform/opacity for animations
- Debounce scroll events
- Minimize layout shifts
- Progressive enhancement

---

## File Structure

```
/src/app
  /components
    - Layout.tsx
    - Navbar.tsx
    - Footer.tsx
    - HeroSlider.tsx
  /pages
    - HomePage.tsx
    - AboutPage.tsx
    - ServicesPage.tsx
    - ProjectsPage.tsx
    - ClientsPage.tsx
    - ContactPage.tsx
    - CareersPage.tsx
  - App.tsx
  - routes.tsx
/src/styles
  - index.css
  - fonts.css
  - theme.css
  - tailwind.css
```

---

## Dependencies

### Core
- React 18.3.1
- React Router 7.13.0
- Tailwind CSS 4.1.12

### Animation & UI
- Motion (Framer Motion) 12.23.24
- Lucide React 0.487.0
- React Slick 0.31.0
- Slick Carousel 1.8.1

---

## Usage Notes

1. **Consistency**: Maintain spacing, typography, and color consistency across all pages
2. **Luxury Feel**: Use refined fonts, generous whitespace, and elegant animations
3. **Performance**: Keep animations smooth and lightweight
4. **Responsive**: Test on all device sizes
5. **Accessibility**: Ensure keyboard navigation and screen reader support

---

## Future Enhancements

- Dark mode toggle
- Multi-language support
- Advanced filtering on projects
- Team member detail pages
- Blog/news section
- Client portal integration
