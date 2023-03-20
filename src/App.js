import "./App.css";
import AboutUs from "./components/AboutUs";
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
    </div>
  );
}

export default App;
