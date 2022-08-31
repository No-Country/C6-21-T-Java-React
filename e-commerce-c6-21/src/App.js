import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/home/Home';
import Cart from './components/Cart/Cart';
import ContextProvider from './context/CartContext.jsx';
import Product from './components/Product/Product';

//components


function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarComponent />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="productos" element={<Product />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;