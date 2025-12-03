# Abhilash Portfolio - Vanilla JS

A clean, modern, and responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. Features a smooth spotlight effect, dynamic navigation, and mobile-optimized design showcasing professional experience in AI Operations and Customer Experience Leadership.

## Live Demo

🔗 [View Live Portfolio](https://abhilashrajjan-555.github.io/abhilash-portfolio-vanilla/)

## Features

- **Interactive Spotlight Effect**: Smooth mouse-following spotlight animation that enhances visual engagement
- **Dynamic Navigation**: Active section highlighting with smooth scroll behavior
- **Fully Responsive**: Mobile-first design with optimized layouts for all screen sizes
- **Performance Optimized**: Lazy loading images with WebP format support and fallbacks
- **Accessible**: Semantic HTML structure with proper ARIA labels
- **SEO Friendly**: Optimized meta tags and structured content

## Tech Stack

- **HTML5**: Semantic markup with accessibility in mind
- **CSS3**: Modern layouts using CSS Grid and Flexbox
- **Vanilla JavaScript**: No frameworks or libraries - pure JS for interactivity
- **Google Fonts**: Inter font family for clean typography

## Project Structure

```
abhilash-portfolio-vanilla/
├── index.html              # Main HTML file
├── css/
│   ├── reset.css          # CSS reset for cross-browser consistency
│   ├── variables.css      # CSS custom properties (colors, spacing, etc.)
│   ├── base.css           # Base styles and typography
│   ├── layout.css         # Layout and grid systems
│   ├── components.css     # Component-specific styles
│   └── responsive.css     # Media queries for responsiveness
├── js/
│   ├── spotlight.js       # Spotlight effect implementation
│   ├── navigation.js      # Navigation and scroll behavior
│   └── image-fallback.js  # WebP fallback handling
├── assets/
│   ├── profile.webp       # Profile image (WebP format)
│   ├── profile.jpg        # Profile image fallback (JPG)
│   └── resume.pdf         # Downloadable resume
└── .gitignore
```

## Sections

1. **About**: Professional summary with key statistics and highlights
2. **Experience**: Detailed work history with measurable achievements
3. **Skills**: Categorized technical and professional competencies
4. **Certifications**: AI and data science credentials
5. **Contact CTA**: Call-to-action for connections and downloads

## Key Components

### Spotlight Effect
Custom JavaScript implementation that follows mouse movement, creating an engaging visual experience without performance overhead.

### Active Navigation
Intersection Observer API tracks scroll position and dynamically highlights the current section in the navigation menu.

### Image Fallback System
Automatically detects WebP support and falls back to JPG format for broader browser compatibility.

## Setup & Installation

1. **Clone the repository**
```
git clone https://github.com/abhilashrajjan-555/abhilash-portfolio-vanilla.git
cd abhilash-portfolio-vanilla
```

2. **Open locally**
Simply open `index.html` in your browser, or use a local server:
```
# Using Python 3
python -m http.server 5500

# Using Node.js (with http-server)
npx http-server -p 5500
```

3. **Deploy**
The site is static and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## Customization

### Update Personal Information
1. Edit `index.html` to change name, title, contact details, and content
2. Replace `assets/profile.webp` and `assets/profile.jpg` with your photos
3. Update `assets/resume.pdf` with your resume

### Modify Colors & Styling
- Edit `css/variables.css` to change color scheme, fonts, and spacing
- All design tokens are centralized for easy theming

### Add New Sections
1. Add section markup in `index.html` following existing patterns
2. Include navigation link in the sidebar
3. Update `js/navigation.js` to track new section

## Performance

- Lighthouse Score: 95+ (Performance)
- First Contentful Paint: <1.5s
- Lazy loaded images with modern formats
- Minimal JavaScript footprint
- No external dependencies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Abhilash Rajjan**
- Email: abhilashrajjan@outlook.com
- LinkedIn: [linkedin.com/in/abhilashrajjan](https://www.linkedin.com/in/abhilashrajjan)
- Location: Thiruvananthapuram, India

---

Built with ❤️ using Vanilla JavaScript - No frameworks, no dependencies, just clean code.
