
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Cart from "./Components/Cart/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/category/:categoryName" element={ <ItemListContainer /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/ItemDetail/:id" element={ <ItemDetailContainer /> } />

        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
