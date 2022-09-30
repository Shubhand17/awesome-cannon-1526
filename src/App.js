import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Components/Home";

import MultipleItems from './Components/Slider';
import { Footer } from './Components/footer';
import Products from './Pages/Products';
import { Cart } from './Pages/Cart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
      <Products />
      <Cart />

    </div>
  );
}

export default App;
