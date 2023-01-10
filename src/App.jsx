import "./App.css";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Avaliations from "./pages/Avaliations";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutUs />
      <Services />
      <Avaliations />
      <Contact />
    </div>
  );
}

export default App;
