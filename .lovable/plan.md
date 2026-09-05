# Personal apology letter experience

## What I’ll build
- Replace the blank page with a full-screen, phone-friendly apology experience in warm pearl, blush, burgundy, and soft gold.
- Begin with an interactive sealed envelope; opening it reveals the letter with layered paper, glass, subtle hearts, and handwritten accents.
- Present the supplied apology text clearly, followed by the “Am I forgiven?” choice.
- Add multiple distinct, increasingly earnest but respectful responses to “NO”; the final retry replaces both choices with “YES”.
- Make either “YES” trigger a large celebration and the requested thank-you message.

## Motion and interaction
- Use smooth staged transitions, envelope flap/letter movement, scroll-based depth, handwriting animation, floating particles, and restrained glass effects.
- Respect reduced-motion preferences and keep every interaction keyboard-accessible.
- Adapt proportions, typography, scrolling, and controls for small phones through wide desktop screens.

## Technical details
- Add the supplied handwriting and smooth-scroll ideas as reusable UI pieces, adapting the incomplete snippets to the existing React, TypeScript, Tailwind, and shadcn setup.
- Use Framer Motion for state transitions and scroll-linked animation; use existing icon components for controls.
- Keep all color, shadow, and type decisions in the shared design system.
- Add page-specific sharing and search metadata, then verify the complete interaction in desktop and mobile-sized browsers.
