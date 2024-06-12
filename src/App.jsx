import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={"...Loading"}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/cart"
            element={
              <Suspense fallback={"...Loading"}>
                <Cart />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
