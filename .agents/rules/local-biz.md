# Local Business Website Standards

## Overview
This rule file defines the standard practices for building and maintaining local business websites, with a strong emphasis on mobile responsiveness and Search Engine Optimization (SEO).

## 1. Mobile Responsiveness
- **Mobile-First Approach**: Design and build for mobile screens first, then progressively enhance for larger screens.
- **Touch Targets**: All interactive elements (buttons, links) must be easily tappable, with a minimum size of 44x44 pixels and adequate spacing between them.
- **Fluid Layouts**: Use flexible grids (Flexbox, CSS Grid) and relative units (%, vw, vh) to ensure the layout adapts to any screen size. Avoid fixed pixel widths that cause horizontal scrolling on mobile.
- **Readable Typography**: Base font sizes should be at least 16px on mobile devices. Use sufficient line height (e.g., 1.5) for readability.
- **Responsive Media**: Images and videos must scale with their containers. Use `max-width: 100%; height: auto;` to prevent media from overflowing.

## 2. Search Engine Optimization (SEO)
- **Title and Meta Tags**: Every page must include a unique `<title>` and a descriptive `<meta name="description">`. Incorporate relevant local keywords (e.g., "Service Provider in [City]").
- **Semantic HTML Structure**: Maintain a logical heading hierarchy (`<h1>` to `<h6>`). There must be only one `<h1>` per page, clearly stating the page's primary topic.
- **Local Business Schema**: Implement Schema.org structural data (JSON-LD format) for `LocalBusiness` to provide search engines with precise info about the business (Name, Address, Phone, Operating Hours).
- **Performance Optimization**: Ensure fast page load speeds. Compress images (e.g., WebP), minify CSS/JS, and leverage browser caching, as page speed is a significant ranking factor.
- **Image Optimization**: All relevant images must include descriptive `alt` attributes for accessibility and image search indexing.
- **Clear Calls to Action (CTA)**: Ensure that essential actions (e.g., "Call Us", "Get Directions", "Book Now") are prominent and easily accessible, especially on mobile devices.

## 3. Technology Stack
- **Core Framework**: Always use Astro 5 for the core framework.
- **Styling**: Use Tailwind CSS v4 for styling.
- **Animations**: Implement animations using Motion (Framer Motion).
