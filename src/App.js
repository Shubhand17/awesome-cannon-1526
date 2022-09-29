import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Components/Home";

import MultipleItems from './Components/Slider';
import { Footer } from './Components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer/>
   
    </div>
  );
}

export default App;