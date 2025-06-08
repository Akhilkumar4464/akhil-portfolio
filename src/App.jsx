import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SkillsGrid from "./components/SkillsGrid";
import About from "./pages/About";
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
        
        <AppRoutes/>   
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
