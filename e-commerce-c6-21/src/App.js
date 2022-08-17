import react from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart/Cart';
//components
import Header from './components/Header/Header';
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer';
import ProductsListContainer from './components/ProductsListContainer/ProductsListContainer';

//views
import Home from './views/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={ <Home/> }/>
        <Route exact path="/products" element={ <ProductsListContainer/> } />
        <Route exact path="/product/:productId" element={ <ProductDetailContainer /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
