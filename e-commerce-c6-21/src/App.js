import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/home/Home';
import Cart from './components/Cart/Cart';

//components


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarComponent />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />}></Route>
          {/* <Route path="vista1" element={<'vista1' />} />
          <Route path="vista2" element={<'vista2' />} />
          <Route path="vista3" element={<'vista3' />} /> */}
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;