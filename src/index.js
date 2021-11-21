import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import NetlifyIdentityContext from "react-netlify-identity-gotrue";

import App from "./App";
import { ProductDataProvider } from "./providers/ProductDataContext";
import { CartProvider } from "./providers/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <NetlifyIdentityContext url={"https://gifted-montalcini-29c385.netlify.app"}>
      <BrowserRouter>
        <ProductDataProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductDataProvider>
      </BrowserRouter>
    </NetlifyIdentityContext>
  </React.StrictMode>,
  document.getElementById("root")
);
