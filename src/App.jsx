import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ProductPage from "./pages/ProductPage";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/videogames/:id" element={<ProductPage />} />
              <Route path="/SearchPage" element={<SearchPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
