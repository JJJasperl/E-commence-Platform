import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Main } from './Pages/Main';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Footer } from './Components/Footer/Footer';
import { LoginSignup } from './Pages/LoginSignup';
import { Cart } from './Pages/Cart';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/mens" element={<ShopCategory  category="men"/>}/>
          <Route path="/womens" element={<ShopCategory category="women"/>}/>
          <Route path="product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/login" element={<LoginSignup/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
