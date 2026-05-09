import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

import { Footer } from "./components/Footer";
import "./index.css";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Home />
        <Projects/>
        <Footer />
      </header>
    </div>
  );
}

export default App;
