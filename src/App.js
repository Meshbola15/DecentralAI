import "./App.css";
import AboutUs from "./components/AboutUs";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import Aos from "aos";
import "aos/dist/aos.css";
import { AppProvider } from "./components/Context";

function App() {
  Aos.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
  });

  return (
    <div className="App">
      <AppProvider>
        <Navbar />
        <Hero />
        <AboutUs />
        <Tokenomics />
        <Roadmap />
        <Faq />
        <Footer />
      </AppProvider>
    </div>
  );
}

export default App;
