
import './App.css';
// import { Projects } from './components/Projects';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import './index.css' 

function App() {
  return (
    <div className="App">
      <header >
        {/* <Projects/> */}
        <Navbar/>
        <Home/>
      </header>
    </div>
  );
}

export default App;
