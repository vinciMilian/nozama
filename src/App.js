import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Product from './components/pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
