import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Components/Home";




import { Footer } from './Components/footer';
import Products from './Pages/Products';
import { Card } from './Pages/Card';
import { Items } from './Pages/Items';
import { SignIn } from './Pages/SignIn';
import { SignUp } from './Pages/SignUp';
import { AllRoutes } from './Pages/AllRoutes';
import { Order } from './Pages/Order';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
      <Order/>

    </div>
  );
}

export default App;
