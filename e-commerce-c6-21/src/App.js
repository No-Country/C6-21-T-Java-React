import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/home/Home';
import Cart from './components/Cart/Cart';
import ContextProvider from './context/CartContext.jsx';
import Product from './components/Product/Product';
import Buzos from './components/ProductDetail/Buzos';
import Camisas from './components/ProductDetail/Camisas';
import Remeras from './components/ProductDetail/Remeras';
import Jeans from './components/ProductDetail/Jeans';

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
          <Route path="buzos" element={<Buzos />} />
          <Route path="camisas" element={<Camisas />} />
          <Route path="remeras" element={<Remeras />} />
          <Route path="jeans" element={<Jeans />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;