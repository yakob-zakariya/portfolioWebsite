# Professional Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS v4, featuring dark/light theme support and professional animations.

## 🚀 Features

### Core Features
- ✅ **Dark/Light Theme Toggle** - Persistent theme with localStorage
- ✅ **Fully Responsive** - Mobile-first design that works on all devices
- ✅ **Smooth Animations** - Custom animations and transitions
- ✅ **Modern UI Components** - Reusable, professional components
- ✅ **SEO Friendly** - Semantic HTML structure
- ✅ **Performance Optimized** - Fast loading and smooth scrolling

### Sections
1. **Hero** - Eye-catching introduction with CTA buttons
2. **About** - Personal introduction with statistics
3. **Skills** - Categorized skills with progress bars
4. **Projects** - Portfolio showcase with project cards
5. **Experience** - Timeline-based work history
6. **Contact** - Contact form and information
7. **Footer** - Social links and quick navigation

## 🛠️ Technologies Used

### Frontend
- **React 19** - Latest React with modern features
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

### Key React Concepts Demonstrated
- Context API (Theme management)
- Custom Hooks (useTheme)
- Component composition
- Props and state management
- Event handling
- Conditional rendering
- List rendering with keys

### Advanced Tailwind CSS Features
- Custom color palette
- Dark mode with class strategy
- Custom animations
- Responsive design utilities
- Gradient backgrounds
- Custom scrollbar styling
- Hover and focus states
- Transition effects

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── Hero.jsx          # Landing section
│   │   ├── About.jsx         # About me section
│   │   ├── Skills.jsx        # Skills showcase
│   │   ├── Projects.jsx      # Project portfolio
│   │   ├── Experience.jsx    # Work experience
│   │   └── Contact.jsx       # Contact form
│   ├── Button.jsx            # Reusable button component
│   ├── Card.jsx              # Reusable card component
│   ├── Section.jsx           # Section wrapper
│   ├── SectionTitle.jsx      # Section title component
│   ├── Navbar.jsx            # Navigation bar
│   └── Footer.jsx            # Footer component
├── context/
│   └── ThemeContext.jsx      # Theme context provider
├── App.jsx                   # Main app component
├── main.jsx                  # Entry point
└── index.css                 # Global styles & theme
```

## 🎨 Customization Guide

### 1. Personal Information
Update the following files with your information:

**Hero Section** (`src/components/sections/Hero.jsx`):
- Change "Your Name" to your actual name
- Update the title/role
- Modify social media links

**About Section** (`src/components/sections/About.jsx`):
- Update statistics (years, projects, clients)
- Modify the description text
- Add your photo/avatar

**Skills Section** (`src/components/sections/Skills.jsx`):
- Update skill categories
- Modify skill levels (0-100)
- Add/remove skills as needed

**Projects Section** (`src/components/sections/Projects.jsx`):
- Replace with your actual projects
- Update project descriptions
- Add real project URLs
- Replace emoji placeholders with actual images

**Experience Section** (`src/components/sections/Experience.jsx`):
- Update with your work history
- Modify job titles and companies
- Update achievements

**Contact Section** (`src/components/sections/Contact.jsx`):
- Update email, phone, location
- Modify contact form submission logic

### 2. Color Scheme
Edit `src/index.css` to change the color palette:

```css
@theme {
  /* Primary colors - Change these */
  --color-primary-600: #2563eb;
  --color-accent-600: #c026d3;
  /* ... other color values */
}
```

### 3. Adding Images
Replace emoji placeholders with actual images:

1. Add images to `public/` folder
2. Update components to use image paths:
```jsx
<img src="/your-image.jpg" alt="Description" />
```

## 🚀 Running the Project

### Development
```bash
npm run dev
```
Visit `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Best Practices Implemented

### React Best Practices
- Component composition over inheritance
- Single Responsibility Principle
- Proper prop validation
- Efficient state management
- Custom hooks for reusability
- Semantic component naming

### Tailwind CSS Best Practices
- Mobile-first approach
- Consistent spacing scale
- Reusable component classes
- Dark mode support
- Performance optimization
- Accessibility considerations

## 🔧 Advanced Features to Add

1. **Form Integration**: Connect contact form to backend/email service
2. **Blog Section**: Add a blog with markdown support
3. **Animations**: Add scroll-triggered animations (Framer Motion)
4. **Analytics**: Integrate Google Analytics
5. **SEO**: Add meta tags and Open Graph tags
6. **PWA**: Make it a Progressive Web App
7. **i18n**: Add multi-language support
8. **CMS**: Connect to a headless CMS (Sanity, Contentful)

## 📚 Learning Resources

### React
- [React Documentation](https://react.dev)
- [React Patterns](https://reactpatterns.com)

### Tailwind CSS
- [Tailwind CSS v4 Docs](https://tailwindcss.com)
- [Tailwind UI Components](https://tailwindui.com)

## 🤝 Contributing

Feel free to customize this portfolio for your own use!

## 📄 License

Free to use for personal and commercial projects.

