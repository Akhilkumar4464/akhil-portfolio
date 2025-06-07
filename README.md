# akhil-portfolio

# 🌐 Frontend Developer Portfolio Website Pathway

## 🔷 1. Project Setup

```bash
npm create vite@latest my-portfolio --template react
cd my-portfolio
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-router-dom framer-motion react-icons
```

### ✳️ Tailwind Config

**tailwind.config.js**

```js
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
```

**index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🔷 2. Suggested Folder Structure

```
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── ProjectCard.jsx
│   ├── SkillsGrid.jsx
│   ├── ContactForm.jsx
│   └── Button.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── routes/
│   └── AppRoutes.jsx
├── App.jsx
└── main.jsx
```

---

## 🔷 3. Useful Components List

| Component       | Purpose                                                         |
| --------------- | --------------------------------------------------------------- |
| **Navbar**      | Navigation bar with links                                       |
| **Hero**        | Main landing section with name, title, CTA                      |
| **About**       | Introduction, skills, tools                                     |
| **Projects**    | Cards with project name, stack, GitHub, live preview            |
| **SkillsGrid**  | Grid of icons or badges for tech stack                          |
| **ContactForm** | Form with inputs and submit (email or Netlify form)             |
| **Footer**      | Social links, copyright info                                    |
| **Button**      | Reusable button with animations                                 |
| **ProjectCard** | For displaying each project with image, title, and link buttons |

---

## 🔷 4. Routing File (`src/routes/AppRoutes.jsx`)

```jsx
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
```

**App.jsx**

```jsx
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

---

## 🔷 5. Dark Mode Support

### 🔧 Tailwind Setup

In `tailwind.config.js`:

```js
darkMode: 'class'
```

### 🌙 App.jsx with Theme State

```jsx
import { useState, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

### 🌗 Navbar.jsx with Toggle Button

```jsx
const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md dark:shadow-white">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:scale-105 transition-transform"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
};

export default Navbar;
```

---

## 🔷 6. Bonus Features

* ✅ Responsive Design with Tailwind
* 🌗 Dark Mode toggle with persistence
* 🚀 Smooth transitions with `framer-motion`
* 🔍 SEO with `react-helmet`
* 📸 Lazy loading for images

---

Let me know if you'd like a downloadable ZIP template or PDF version!

pathWay.md file for vs code editor 
