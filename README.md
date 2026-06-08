# Robert Hendrix Portfolio

A modern, responsive research portfolio website built with React, TypeScript, and Vite.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Stack**: React 18, TypeScript, Vite for fast development and builds
- **React Router**: Client-side routing for smooth navigation
- **Optimized Performance**: Fast load times with Vite's optimized builds
- **Professional Design**: Clean, modern UI with smooth animations

## Project Structure

```
Roberthendrixportfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Navigation.css
│   │   ├── Footer.tsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Home.css
│   │   ├── About.tsx
│   │   ├── About.css
│   │   ├── Projects.tsx
│   │   ├── Projects.css
│   │   ├── Contact.tsx
│   │   └── Contact.css
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Pages

1. **Home**: Landing page with hero section and featured projects
2. **About**: Information about Robert Hendrix and expertise
3. **Projects**: Showcase of research projects with details
4. **Contact**: Contact form and contact information

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/rwhveteran/Roberthendrixportfolio.git

# Navigate to the project directory
cd Roberthendrixportfolio

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# The application will open in your default browser at http://localhost:3000
```

### Building

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Customization

### Colors

Edit the CSS variables in `src/index.css` to customize the color scheme:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  /* ... other variables */
}
```

### Content

- **Home Page**: Edit `src/pages/Home.tsx`
- **About Page**: Edit `src/pages/About.tsx`
- **Projects**: Update the projects array in `src/pages/Projects.tsx`
- **Contact Info**: Update `src/pages/Contact.tsx`

## Deployment

### GitHub Pages

1. Update `vite.config.ts` to include your repository name
2. Run `npm run build`
3. Push the `dist` folder to your GitHub Pages branch

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with a single click

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

## Technologies Used

- **React 18.2.0**: JavaScript library for building user interfaces
- **TypeScript 5.2.2**: Typed superset of JavaScript
- **Vite 5.2.0**: Next generation frontend tooling
- **React Router DOM 6.22.3**: Client-side routing

## License

MIT License - feel free to use this template for your portfolio

## Support

For support, please create an issue in the repository.

## Future Enhancements

- [ ] Add blog section
- [ ] Integrate with a CMS
- [ ] Add dark mode toggle
- [ ] Add animations library (Framer Motion)
- [ ] Add email backend integration
- [ ] Add portfolio filtering by category
- [ ] Add testimonials section
- [ ] Add newsletter signup
