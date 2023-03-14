import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from "./Components/Footer";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import MainPart from "./Components/MainPart";
import Navbar from "./Components/Navbar";
import Error404 from "./Components/Error404";
import CartContextProvider from './Components/context/CartContext';
import Cart from './Components/Cart';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <Navbar/>
          <MainPart />
          <Routes>          
            <Route path={'/'} element={<ItemListContainer/>}/>
            <Route path={'/category/:id'} element={<ItemListContainer/>}/>
            <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
            <Route path={'/cart'} element={<Cart/>}/>
            <Route path={'*'} element={<Error404/>}/>
          </Routes> 
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
