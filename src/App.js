import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Product from "./routes/Product";
import NoMatch from "./components/commonfiles/NoMatch";
import Navbar from "./components/navbarfiles/Navbar";
import SingleProductDisplay from "./components/productfiles/SingleProductDisplay";
import Cart from "./routes/Cart";
import Footer from "./components/commonfiles/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<SingleProductDisplay />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
