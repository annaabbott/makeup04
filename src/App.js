import { Fragment } from "react";
import { Routes, Route }  from "react-router-dom";

import Header from "./components/Header";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/products/:categoryName/:productId" element={<ProductDetailsPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
