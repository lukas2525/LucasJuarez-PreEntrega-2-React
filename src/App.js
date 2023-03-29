import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Cart from "./Components/Cart/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Form from "./Components/Form/Form";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />

          <Route path="/Formulario" element={<Form />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CartContextProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
