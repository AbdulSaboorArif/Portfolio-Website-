---
name: Animation System Implementation
description: Core animation patterns, utilities, and techniques used throughout the portfolio
type: project
---

## Animation System Architecture

The portfolio uses a layered animation system combining Framer Motion for React animations and GSAP for scroll-triggered effects.

**Why:** Framer Motion provides declarative React animations with excellent performance, while GSAP offers advanced scroll-based animations that Framer Motion doesn't handle as well.

**How to apply:** Use Framer Motion for component-level animations (hover, entrance, micro-interactions) and GSAP for scroll-triggered sequences (timeline drawing, parallax).

## Core Animation Utilities

### Location: `frontend/lib/animations.ts`

Reusable animation variants:
- `fadeInUp` - Fade in with slide up (30px)
- `fadeInLeft` - Fade in from left (40px)
- `fadeInRight` - Fade in from right (40px)
- `fadeInScale` - Fade in with scale (0.9 to 1)
- `staggerContainer` - Container for staggered children (0.1s delay)
- `cardHover` - Card lift effect (scale 1.02, y: -8px)
- `buttonHover` - Button scale animation
- `glowHover` - Glow effect on hover

Custom easing curves:
- `smooth`: [0.43, 0.13, 0.23, 0.96] - Premium feel
- `snappy`: [0.34, 1.56, 0.64, 1] - Bouncy interactions
- `gentle`: [0.25, 0.46, 0.45, 0.94] - Subtle movements

### Location: `frontend/hooks/useCountUp.ts`

Counter animation hook with intersection observer for stats section. Animates numbers from 0 to target value with easeOutQuart easing.

### Location: `frontend/hooks/useScrollAnimation.ts`

GSAP-based scroll animations with ScrollTrigger plugin. Includes parallax effect hook.

## Component-Specific Animations

### Hero Section
- Animated gradient background with pulsing opacity
- Floating accent elements (cyan and blue blobs)
- Enhanced status badge with dual pulse rings
- Staggered text reveal for heading lines
- Animated arrow in CTA button
- Social icon hover with scale and glow

### Stats Bar
- Counter animations with intersection observer
- Animated background gradient sweep
- Infinity symbol rotation
- Individual stat hover scale

### Cards (Work, About, AI Lab)
- Hover: lift effect (y: -8px), border color change, glow overlay
- Smooth transitions with custom easing
- Tag hover effects with scale and color shift
- Icon rotation on hover (360deg, 0.6s)

### Journey Timeline
- Scroll-based line drawing animation using useScroll and useTransform
- Timeline dots with pulse rings
- Alternating slide-in animations (left/right)
- Staggered content reveal

### Skills Section
- Staggered card entrance
- Skill tag hover with scale and background color
- Marquee with rotating sparkle icons
- Gradient fade overlays on marquee edges

### Navigation
- Slide-in from top on mount
- Underline animation on link hover (scaleX)
- Avatar rotation on hover
- Animated gradient on CTA button

### Form Inputs
- Focus glow effect with animated box-shadow
- Border color transition on focus
- Smooth state changes (0.3s duration)

### Buttons
- Primary: animated gradient overlay, glow on hover
- Scale on hover (1.02) and tap (0.98)
- Gradient sweep animation (3s infinite)

## Performance Optimizations

### CSS
- GPU acceleration with `transform: translateZ(0)`
- `will-change` properties for animated elements
- `backface-visibility: hidden` to prevent flickering
- Smooth scrolling with `scroll-behavior: smooth`

### Accessibility
- Respects `prefers-reduced-motion` media query
- All animations disabled or reduced to 0.01ms when user prefers reduced motion
- Viewport settings with `once: true` to prevent re-triggering
- Proper ARIA labels on interactive elements

### Animation Timing
- Micro-interactions: 0.2-0.3s
- Component entrance: 0.5-0.7s
- Major transitions: 0.8-1.2s
- Stagger delays: 0.1s between items
- Infinite animations: 2-4s for subtle effects, 8-12s for background elements

## Design Patterns

### Stagger Pattern
```typescript
<motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
  {items.map((item, i) => (
    <motion.div key={i} variants={fadeInUp}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Hover Glow Pattern
```typescript
whileHover={{
  scale: 1.1,
  boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)',
}}
```

### Scroll-Based Animation Pattern
```typescript
const { scrollYProgress } = useScroll({ target: ref });
const height = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);
```

## Color Palette (Cyan-Blue Gradient Theme)

Primary colors:
- Cyan: #22D3EE
- Blue: #3B82F6
- Purple: #8B5CF6 (accent)

Background:
- Dark: #080d1a
- Card: #0f1629

Text:
- Primary: #ffffff
- Secondary: #9ca3af
- Muted: #6b7280
