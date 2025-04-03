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

const nav_data = [
  {
    id: 1,
    path: "/",
    component: <Home />
  },
  {
    id: 2,
    path: "/features",
    component: <Features />
  },
  {
    id: 3,
    path: "/services",
    component: <Services />
  },
  {
    id: 4,
    path: "/product/:id",
    component: <ProductPage />
  },
  {
    id: 5,
    path: "/products",
    component: <Products />
  },
  {
    id: 6,
    path: "/shop",
    component: <Shop />
  },
  {
    id: 7,
    path: "/cart",
    component: <Cart />
  },
]

let remove_nav = ["/services", "/shop"]

function App() {
  return (
    <div className="font-roboto">
      <Header />
      <BrowserRouter>
        <CartProvider>
          <ProductProvider>
            <Navbar />
            <Routes>
              {nav_data.filter((item) => (!remove_nav.includes(item.path))).map((item) => (
                <Route key={item.id}
                  path={item.path}
                  element={
                    <Suspense fallback={<Loading />}>
                      {item.component}
                    </Suspense>
                  }
                />
              ))}
            </Routes>
          </ProductProvider>
        </CartProvider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
