# PopX – React Assignment

A pixel-perfect mobile-first React application built as a qualifier task for the EduCase interview.

## Tech Stack

- **React 19** with functional components and hooks
- **React Router v7** for seamless page navigation
- **Vite** for fast development and optimized builds
- **Vanilla CSS** with custom design system

## Pages

| Route | Screen |
|---|---|
| `/` | Welcome / Landing |
| `/login` | Sign In |
| `/create-account` | Registration |
| `/account-settings` | Profile / Settings |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
```

## Deployment

Deployed on **Vercel**. The `vercel.json` config handles client-side routing rewrites.

## Design Features

- Mobile app interface centered on desktop viewport (390×844 phone frame)
- Responsive: fills full screen on mobile devices
- Rubik font from Google Fonts
- Purple accent color (#6c25ff)
- Dynamic Login button state (gray → purple when form is filled)
- Custom radio button styling
- Smooth hover and active state transitions
