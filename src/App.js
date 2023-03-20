import "./App.css";
import AboutUs from "./components/AboutUs";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <Tokenomics />
      <Roadmap />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
