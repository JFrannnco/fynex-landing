import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Modules from "./components/Modules";
import Benefits from "./components/Benefits";
import Plans from "./components/Plans";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />

      <Hero />

      <Benefits />

      <Modules />

      <Plans />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;