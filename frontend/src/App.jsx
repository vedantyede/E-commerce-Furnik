import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import { CartProvider } from "./context/CartContext";
import ProductPage from "./pages/ProductPage";
import Products from "./pages/Products";
import Features from "./pages/Features";
import { Shop } from "./pages/Shop";
import Services from "./pages/Services";
import { ProductProvider } from "./context/ProductContext";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  return (
    <div className="font-roboto">
      <Header />
      <BrowserRouter>
        <CartProvider>
          <ProductProvider>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={<Loading />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path="/features"
                element={
                  <Suspense fallback={<Loading />}>
                    <Features />
                  </Suspense>
                }
              />
              <Route
                path="/services"
                element={
                  <Suspense fallback={<Loading />}>
                    <Services />
                  </Suspense>
                }
              />
              <Route
                path="/product/:id"
                element={
                  <Suspense fallback={<Loading />}>
                    <ProductPage />
                  </Suspense>
                }
              />
              <Route
                path="/products"
                element={
                  <Suspense fallback={<Loading />}>
                    <Products />
                  </Suspense>
                }
              />
              <Route
                path="/shop"
                element={
                  <Suspense fallback={<Loading />}>
                    <Shop />
                  </Suspense>
                }
              />
              <Route
                path="/cart"
                element={
                  <Suspense fallback={<Loading />}>
                    <Cart />
                  </Suspense>
                }
              />
            </Routes>
          </ProductProvider>
        </CartProvider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
