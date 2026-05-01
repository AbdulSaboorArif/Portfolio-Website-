---
name: Performance Optimizations
description: Animation performance techniques and best practices applied to ensure 60fps
type: reference
---

## Performance Optimization Techniques

### GPU Acceleration

**Applied to all animated elements:**
```css
.gpu-accelerated {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
```

**Why:** Forces browser to use GPU for rendering, significantly improving animation performance.

**Where applied:**
- All Framer Motion animated components
- Cards with hover effects
- Floating background elements
- Scrolling marquee

### Will-Change Property

**Strategic use on frequently animated properties:**
```css
.will-change-transform {
  will-change: transform;
}

.will-change-opacity {
  will-change: opacity;
}
```

**Why:** Tells browser to optimize for upcoming changes, but used sparingly to avoid memory issues.

**Where applied:**
- Hero gradient text (transform, opacity)
- Card hover states (transform)
- Button animations (transform)

### Animation Properties

**Prefer transform and opacity over other properties:**
- ✅ `transform: translateY()` - GPU accelerated
- ✅ `opacity` - GPU accelerated
- ❌ `top`, `left` - Triggers layout recalculation
- ❌ `width`, `height` - Triggers layout recalculation

**All animations use:**
- `transform` for position changes
- `scale` for size changes
- `opacity` for visibility changes

### Viewport Optimization

**Intersection Observer for scroll animations:**
```typescript
viewport={{ once: true, margin: '-100px' }}
```

**Why:** Animations only trigger when elements are near viewport, reducing unnecessary calculations.

**Benefits:**
- Animations don't run for off-screen elements
- `once: true` prevents re-triggering on scroll up
- Margin triggers animations slightly before element enters view

### Reduced Motion Support

**Full accessibility compliance:**
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**JavaScript check:**
```typescript
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
```

**Why:** Respects user preferences for reduced motion, improving accessibility and preventing motion sickness.

### Animation Cleanup

**GSAP ScrollTrigger cleanup:**
```typescript
useEffect(() => {
  // ... animation setup
  
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);
```

**Why:** Prevents memory leaks by cleaning up scroll listeners when components unmount.

### Stagger Optimization

**Efficient stagger pattern:**
```typescript
variants={staggerContainer}
transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
```

**Why:** Single parent animation controls all children, more efficient than individual delays.

### Lazy Loading

**Intersection Observer for counter animations:**
```typescript
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting && !isVisible) {
      setIsVisible(true);
    }
  },
  { threshold: 0.3 }
);
```

**Why:** Counter animations only start when visible, saving CPU cycles.

### CSS Optimizations

**Custom scrollbar styling:**
```css
::-webkit-scrollbar {
  width: 10px;
}
```

**Smooth scrolling:**
```css
* {
  scroll-behavior: smooth;
}
```

**Selection styling:**
```css
::selection {
  background-color: rgba(34, 211, 238, 0.3);
  color: var(--color-text-primary);
}
```

### Animation Timing Functions

**Custom easing for premium feel:**
```typescript
easings = {
  smooth: [0.43, 0.13, 0.23, 0.96],  // Premium, polished
  snappy: [0.34, 1.56, 0.64, 1],     // Bouncy, playful
  gentle: [0.25, 0.46, 0.45, 0.94],  // Subtle, elegant
}
```

**Why:** Custom cubic-bezier curves create more natural, premium-feeling animations than default easing.

## Performance Metrics

### Target Performance
- **60 FPS** for all animations
- **< 100ms** for micro-interactions
- **< 16ms** frame time during animations

### Monitoring
- Use Chrome DevTools Performance tab
- Check for layout thrashing
- Monitor memory usage during scroll
- Verify GPU acceleration in Layers panel

## Best Practices Applied

1. **Batch DOM reads and writes** - All measurements done before animations
2. **Use requestAnimationFrame** - Counter animations use RAF for smooth updates
3. **Debounce scroll events** - GSAP ScrollTrigger handles this automatically
4. **Minimize repaints** - Only animate transform and opacity
5. **Avoid layout thrashing** - No mixed read/write operations
6. **Use CSS containment** - Cards use `overflow: hidden` for paint containment
7. **Optimize images** - Not applicable (no images in current implementation)
8. **Lazy load animations** - Intersection Observer for all scroll-triggered animations

## Common Pitfalls Avoided

❌ **Animating width/height** - Use scale instead
❌ **Animating top/left** - Use transform instead
❌ **Too many simultaneous animations** - Stagger and limit concurrent animations
❌ **Heavy box-shadows on every frame** - Use will-change and GPU acceleration
❌ **Animating during scroll** - Use GSAP ScrollTrigger with scrub
❌ **No cleanup** - All effects have proper cleanup functions
❌ **Ignoring reduced motion** - Full support implemented

## Testing Checklist

- ✅ Animations run at 60fps on mid-range devices
- ✅ No jank during scroll
- ✅ Reduced motion preference respected
- ✅ No memory leaks (tested with React DevTools Profiler)
- ✅ Smooth on mobile devices
- ✅ No layout shifts during animations
- ✅ Proper cleanup on component unmount
- ✅ GPU acceleration verified in Chrome DevTools
