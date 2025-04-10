# Branding Guidelines Report - Wellness with Ali

## Executive Summary

This report outlines the comprehensive branding system for Wellness with Ali. The design system emphasizes professionalism, clarity, and holistic wellness while maintaining a clean and modern aesthetic suitable for health coaching services focused on perimenopause and insulin resistance.

## 1. Color System Analysis

### Primary Color Palette (60%)

- **Sage Green** (#7C8D85)
  - Primary brand color representing balance, wellness, and natural healing
  - Used for main navigation, headers, and key UI elements
  - Color scale:
    - 100: #F2F4F3
    - 200: #E0E4E2
    - 300: #CED4D1
    - 400: #BCC4C0
    - 500: #7C8D85
    - 600: #637168
    - 700: #4A554C
    - 800: #313930
    - 900: #181D18

### Secondary Color Palette (30%)

- **Warm Beige** (#F5EDE4)
  - Supporting color representing comfort and approachability
  - Used for backgrounds and subtle accents
  - Color scale:
    - 100: #FFFFFF
    - 200: #FAF6F1
    - 300: #F5EDE4
    - 400: #EFE3D5
    - 500: #E9D9C6
    - 600: #D9C3A7
    - 700: #C9AD88
    - 800: #B99769
    - 900: #A9814A

### Accent Color Palette (10%)

- **Citrus Yellow** (#FFD700)
  - Used for interactive elements and highlights
  - Creates sense of energy and vitality
  - Color scale:
    - 100: #FFF9E6
    - 200: #FFF3CC
    - 300: #FFECB3
    - 400: #FFE699
    - 500: #FFD700
    - 600: #D9B800
    - 700: #B39900
    - 800: #8C7A00
    - 900: #665B00

## 2. Supporting Colors

### System Feedback Colors

- Success: #2E7D32 (Forest Green)
- Warning: #ED6C02 (Warm Orange)
- Error: #D32F2F (Soft Red)
- Info: #0288D1 (Ocean Blue)

## 3. Typography System

### Primary Font Family

- **Font**: "Cormorant Garamond"
- **Weights**:
  - Regular (400)
  - Medium (500)
  - Semibold (600)
  - Bold (700)
- **Usage**: Logo, headings, and important statements

### Secondary Font Family

- **Font**: "Open Sans"
- **Weights**:
  - Light (300)
  - Regular (400)
  - Medium (500)
  - Semibold (600)
- **Usage**: Body text, navigation, buttons

### Typography Scale

- Display 1: 3.5rem (56px)
- Display 2: 3rem (48px)
- H1: 2.5rem (40px)
- H2: 2rem (32px)
- H3: 1.75rem (28px)
- H4: 1.5rem (24px)
- Body Large: 1.125rem (18px)
- Body Base: 1rem (16px)
- Body Small: 0.875rem (14px)
- Caption: 0.75rem (12px)

## 4. Gradient System

### Primary Gradients

```css
/* Hero Section Gradient */
background: linear-gradient(180deg, #7c8d85 0%, #637168 100%);

/* Overlay Gradient */
background: linear-gradient(
  180deg,
  rgba(124, 141, 133, 0.9) 0%,
  rgba(99, 113, 104, 0.95) 100%
);
```

### Secondary Gradients

```css
/* Warm Accent Gradient */
background: linear-gradient(135deg, #ffd700 0%, #d9b800 100%);

/* Light Effect Gradient */
background: linear-gradient(
  180deg,
  rgba(245, 237, 228, 0.8) 0%,
  rgba(245, 237, 228, 0) 100%
);
```

## 5. Component Guidelines

### Buttons

- Primary: Sage green background with white text
- Secondary: Transparent with sage border
- Text: White or sage green for contrast
- Border Radius: 0.5rem (8px)
- Padding: 1rem 2rem (16px 32px)

### Cards

- Background: White or warm beige
- Border: 1px solid rgba(124, 141, 133, 0.1)
- Border Radius: 0.75rem (12px)
- Box Shadow: 0 4px 16px rgba(124, 141, 133, 0.08)
- Padding: 2rem (32px)

### Form Elements

- Input Background: White
- Input Border: 1px solid rgba(124, 141, 133, 0.2)
- Focus Ring: 2px solid #7C8D85
- Placeholder Text: rgba(124, 141, 133, 0.5)
- Border Radius: 0.5rem (8px)

## 6. Implementation Notes

### React Component Examples

```jsx
// Button Component
<Button
  variant="primary"
  className="bg-primary-500 text-white hover:bg-primary-600 font-medium px-8 py-4 rounded-lg"
>
  Join the Program
</Button>

// Card Component
<Card className="bg-white border border-primary-100 rounded-xl shadow-md p-8">
  {children}
</Card>

// Input Component
<Input
  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
  placeholder="Your Email"
/>
```

### CSS Variables Implementation

```css
:root {
  /* Colors */
  --primary-500: #7c8d85;
  --secondary-300: #f5ede4;
  --accent-500: #ffd700;

  /* Typography */
  --font-primary: "Cormorant Garamond", serif;
  --font-secondary: "Open Sans", sans-serif;

  /* Spacing */
  --spacing-base: 1rem;
  --spacing-large: 2rem;

  /* Border Radius */
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
}
```

## 7. Accessibility Considerations

- All text maintains WCAG 2.1 AA contrast requirements
- Interactive elements have clear focus and hover states
- Form elements include proper labeling and aria attributes
- Images include descriptive alt text
- Navigation is keyboard accessible

## 8. Version Control

- Version: 1.0.0
- Last Updated: March 2024
- Based on: Wellness with Ali website
