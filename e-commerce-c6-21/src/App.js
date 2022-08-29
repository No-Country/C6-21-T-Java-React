import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/home/Home';
import Cart from './components/Cart/Cart';
import Product from './components/Product/Product';

//components


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarComponent />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="productos" element={<Product />} />
          <Route path="vista2" element={<vista2 />} />
          <Route path="vista3" element={<vista3 />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;