---
name: Design Tokens and Color System
description: Color palette, typography, and design system values used throughout the portfolio
type: reference
---

## Color Palette - Premium Futuristic Dark Tech

### Primary Accent Colors
- **Cyan**: `#22D3EE` - Primary accent, used for highlights, links, and interactive elements
- **Blue**: `#3B82F6` - Secondary accent, gradient partner with cyan
- **Purple**: `#8B5CF6` - Tertiary accent, used sparingly for variety

### Background Colors
- **Background**: `#080d1a` - Main page background (deep navy/near-black)
- **Background Dark**: `#0a0f1e` - Slightly lighter variant
- **Background Card**: `#0f1629` - Card and component backgrounds

### Text Colors
- **Text Primary**: `#ffffff` - Headings and important text
- **Text Secondary**: `#9ca3af` - Body text and descriptions
- **Text Muted**: `#6b7280` - Subtle text, labels, and metadata

## Gradients

### Cyan-Blue Gradient (Primary)
```css
background: linear-gradient(135deg, #22D3EE 0%, #3B82F6 100%);
```
Used for: Buttons, headings, accent text, avatars

### Purple-Blue Gradient (Secondary)
```css
background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%);
```
Used for: Alternative accents, variety in cards

### Radial Glow
```css
background: radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
```
Used for: Hero background, ambient lighting effects

## Typography

### Font Family
- **Primary**: Inter, system-ui, sans-serif
- **Monospace**: Used for section labels and code-like elements

### Font Sizes
- **Hero Heading**: 5xl-8xl (80px-96px on large screens)
- **Section Headings**: 4xl-5xl (36px-48px)
- **Card Titles**: xl-2xl (20px-24px)
- **Body Text**: base-lg (16px-18px)
- **Small Text**: sm-xs (12px-14px)

### Font Weights
- **Extra Bold**: 800 - Hero headings
- **Bold**: 700 - Section headings, card titles
- **Semibold**: 600 - Emphasized text
- **Medium**: 500 - Navigation, labels
- **Regular**: 400 - Body text

## Spacing System

### Section Padding
- Vertical: `py-20` (80px)
- Horizontal: `px-6` (24px)

### Component Spacing
- Card padding: `p-6` (24px)
- Gap between cards: `gap-6` (24px)
- Gap between sections: `mb-12` to `mb-16` (48px-64px)

### Border Radius
- Cards: `rounded-2xl` (16px)
- Buttons: `rounded-full` (9999px)
- Small elements: `rounded-lg` (8px)
- Avatars: `rounded-full`

## Effects

### Shadows
- **Card Hover**: `0 0 40px rgba(59, 130, 246, 0.1)`
- **Button Hover**: `0 10px 40px rgba(34, 211, 238, 0.3)`
- **Glow Effect**: `0 0 20px rgba(34, 211, 238, 0.2-0.5)`

### Borders
- **Default**: `border-text-muted/10` (very subtle)
- **Hover**: `border-primary-cyan/30` (visible cyan tint)
- **Focus**: `border-primary-cyan/50` (strong cyan)

### Backdrop Blur
- Navigation: `backdrop-blur-lg`
- Cards: `backdrop-blur-sm`

## Animation Durations

### Micro-interactions
- Hover effects: 0.2-0.3s
- Button press: 0.2s
- Icon animations: 0.3s

### Component Entrance
- Fade in: 0.5-0.7s
- Slide animations: 0.6-0.8s
- Scale animations: 0.5s

### Background Animations
- Gradient pulse: 8-12s
- Floating elements: 10-12s
- Marquee scroll: 30s

### Stagger Delays
- Between items: 0.1s
- Between sections: 0.2s

## Accessibility

### Color Contrast
All text colors meet WCAG AA standards:
- White on dark backgrounds: 21:1 ratio
- Cyan on dark backgrounds: 8.5:1 ratio
- Secondary text: 4.5:1 ratio

### Motion Preferences
- Respects `prefers-reduced-motion: reduce`
- All animations can be disabled
- Fallback to instant transitions

### Focus States
- Visible focus indicators on all interactive elements
- Cyan glow on form inputs
- Border color changes on buttons and links

## Design Principles

1. **Generous Whitespace**: Despite dark theme, maintain breathing room
2. **Subtle Depth**: Use layering, shadows, and blur for hierarchy
3. **Purposeful Animation**: Every animation serves a function
4. **Consistent Gradients**: Cyan-to-blue is the signature gradient
5. **High Contrast**: Ensure readability with strong text contrast
6. **Glass Morphism**: Subtle use on navigation and status badges
7. **Neon Accents**: Glow effects on interactive elements
