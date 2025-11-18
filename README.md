# Portfolio

A modern, responsive personal portfolio website built with React and TypeScript, designed to showcase professional experience, skills, education, and personal projects.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern Stack**: Built with React 19, TypeScript, and Vite for optimal performance
- **Component-Based Architecture**: Modular and maintainable code structure
- **Font Awesome Icons**: Beautiful icons for enhanced visual appeal
- **SCSS Styling**: Advanced styling capabilities with SASS
- **Dynamic Data Loading**: Portfolio data loaded from external JSON configuration
- **Fast Development**: Hot module replacement (HMR) for instant feedback during development

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher (comes with Node.js)

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/atanaschristov/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   
   The project uses a `.env` file for configuration. The default values are:
   ```
   VITE_DATA_URL_BASE=https://atanaschristov.github.io/portfolio-data
   VITE_PORTFOLIO_PATH=data/portfolio.json
   VITE_AVATAR_PATH=images/avatar
   ```

## 💻 Development

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/` (or another port if 5173 is in use).

## 🏗️ Building for Production

Build the project for production:

```bash
npm run build
```

The optimized production files will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🧪 Code Quality

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

The project uses ESLint with TypeScript and React-specific rules to ensure code quality and consistency.

### Formatting

The project uses Prettier for code formatting. Configuration is available in `.prettierrc`.

## 🛠️ Technology Stack

### Core
- **React 19.1.1**: JavaScript library for building user interfaces
- **TypeScript 5.9.3**: Typed superset of JavaScript
- **Vite 7.1.7**: Next-generation frontend build tool

### Styling
- **SCSS**: CSS preprocessor with sass-embedded
- **BEM Methodology**: Via `bemm` for maintainable CSS class naming
- **classnames**: Utility for conditionally joining classNames

### Icons
- **Font Awesome 7.1.0**: Comprehensive icon library
  - Solid icons
  - Regular icons
  - Brand icons

### Development Tools
- **ESLint**: Linting utility with TypeScript and React plugins
- **Prettier**: Code formatter
- **@vitejs/plugin-react-swc**: React plugin using SWC compiler for faster builds

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
│   └── robots.txt      # Search engine crawler instructions
├── src/
│   ├── components/     # React components
│   │   ├── education/
│   │   ├── experience/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── imageCarousel/
│   │   ├── interests/
│   │   ├── languages/
│   │   ├── leftColumn/
│   │   ├── personalInfo/
│   │   ├── personalProjects/
│   │   ├── rightColumn/
│   │   ├── skills/
│   │   └── shared/     # Reusable components
│   ├── contexts/       # React contexts
│   ├── styles/         # Global styles
│   ├── __mocks__/      # Test mocks
│   ├── main.tsx        # Application entry point
│   └── main.scss       # Main stylesheet
├── .env                # Environment variables
├── .gitignore          # Git ignore rules
├── .prettierrc         # Prettier configuration
├── eslint.config.js    # ESLint configuration
├── index.html          # HTML entry point
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tsconfig.app.json   # TypeScript config for app code
├── tsconfig.node.json  # TypeScript config for Node.js code
└── vite.config.ts      # Vite configuration
```

## 🌐 Deployment

The project is configured to deploy to GitHub Pages. The production build uses `/portfolio` as the base path.

### Environment-Specific Configuration

- **Development**: Base path is empty (`''`)
- **Production**: Base path is `'portfolio'`

This is automatically handled in `vite.config.ts` based on the `NODE_ENV`.

## 🔒 Robots Configuration

The site includes a `robots.txt` file that disallows all search engine crawlers:

```
User-agent: *
Disallow: /
```

This can be modified if you want your portfolio to be indexed by search engines.

## 👤 Author

**Atanas Christov**
- GitHub: [@atanaschristov](https://github.com/atanaschristov)

## 📝 License

This project is private and not licensed for public use.

## 🤝 Contributing

This is a personal portfolio project. However, if you find bugs or have suggestions, feel free to open an issue.

## 📞 Contact

For any inquiries, please reach out through the portfolio website or GitHub profile.

---

Made with ❤️ using React and TypeScript
