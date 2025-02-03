# Pandas Who Code Website

A modern website for the Pandas Who Code community, featuring a clean design and intuitive navigation.

## Project Structure
```
pwc-site/
├── public/              # Static assets
│   ├── images/         # Image assets
│   │   ├── pwc.logo.png   # Main logo
│   │   ├── panda.png      # 404 page panda
│   │   └── favicon.ico    # Website favicon
│   ├── styles/         # CSS stylesheets
│   │   ├── common.css     # Shared styles
│   │   ├── index.css      # Homepage styles
│   │   └── error.css      # 404 page styles
│   ├── scripts/        # JavaScript files
│   │   └── navigation.js  # Navigation functionality
│   ├── index.html      # Homepage
│   └── 404.html        # Error page
```

## Features

### Homepage
- Modern, clean design with the PWC logo as a background
- Responsive navigation with mobile-optimized menu
- Navigation menu with dropdown for projects
- Centered hero section with tagline
- Glassmorphism effects for visual appeal
- Fully responsive design for all devices

### 404 Error Page
- Custom designed error page with panda illustration
- Speech bubble with friendly error message
- Direct link back to homepage
- Background logo positioned in top-left corner

### Styling and Scripts
The website uses a modular approach to organization:
- **CSS**: Separated into three files for better maintainability
  - `common.css`: Shared styles including navigation and typography
  - `index.css`: Homepage-specific styles
  - `error.css`: 404 page-specific styles
- **JavaScript**: Organized in the scripts directory
  - `navigation.js`: Handles mobile navigation and dropdown functionality

## Navigation
The main navigation includes:
- About
- Projects (dropdown)
  - Hashgraph
  - PaintBar
  - Hiero-Ledger
- Support PWC

## Mobile Features
- Logo acts as a toggle button for the navigation menu
- Smooth animations for menu transitions
- Touch-optimized dropdown menus
- Fully responsive layout adapting to all screen sizes
