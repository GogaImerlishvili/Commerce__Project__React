import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
// dev-p3jkse3t.us.auth0.com
// d9Mn4XCyBw9e6d26G5ttFcVLlE6dmBBs
// 30870948035-fn3f2ujqi20nv1qs49v330qvvl90it6g.apps.googleusercontent.com
// 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

ReactDOM.render(
  <Auth0Provider
    domain="dev-p3jkse3t.us.auth0.com"
    clientId="d9Mn4XCyBw9e6d26G5ttFcVLlE6dmBBs"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <React.StrictMode>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </React.StrictMode>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
