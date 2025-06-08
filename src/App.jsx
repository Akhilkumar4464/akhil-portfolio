import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SkillsGrid from "./components/SkillsGrid";
import About from "./pages/About";
import ContactForm from "./components/ContactForm";
function App() {
  return (
    
    
    <Router>
      <div className="min-h-screen md:w-screen flex flex-col">
        <Navbar  className="h-[20%] "/>
        <main className="flex-grow h-[80%]">
           <AppRoutes/>   
        </main>
       
        <Footer className="h-[20%] "/>
      </div>
    </Router>
  );
}
export default App;
