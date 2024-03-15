import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "swiper/css";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import { persistStore } from "reduxjs-toolkit-persist";
import store from "./redux/store.js";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// fonts and icons
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home.jsx";
import Blog from "./pages/blog/Blog.jsx";
import Shop from "./pages/shop/Shop.jsx";
import Fruits from "./pages/fruits/Fruits.jsx";
import Vegetables from "./pages/vegetables/Vegetables.jsx";
import Juices from "./pages/juices/Juices.jsx";
import Bread from "./pages/bread/Bread.jsx";
import Cheese from "./pages/cheese/Cheese.jsx";
import Smoothies from "./pages/smoothies/Smoothies.jsx";
import SingleProduct from "./pages/fruits/SingleProduct.jsx";
import SettingUpAnApp from "./skeletons/SettingUp.jsx";
import { ModalProvider } from "./contexts/ModalProvider.jsx";
import Modal from "./components/Modal";
import SingleBlog from "./pages/blog/SingleBlog.jsx";
import LoginPage from "./pages/login/LoginPage.jsx";
import PublicRoutes from "./layout/PublicRoute.jsx";
import CartPage from "./components/CartPage.jsx";
import About from "./pages/about/About.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";


const persistor = persistStore(store);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:id", element: <SingleBlog /> },
      { path: "/shop", element: <Shop /> },
      { path: "/fruits", element: <Fruits /> },
      { path: "/:category/:id", element: <SingleProduct /> },
      { path: "/vegetables", element: <Vegetables /> },
      { path: "/juices", element: <Juices /> },
      { path: "/bread", element: <Bread /> },
      { path: "/cheese", element: <Cheese /> },
      { path: "/smoothies", element: <Smoothies /> },
      { path: "/cart-page", element: <CartPage/> },
      { path: "/about", element: <About/> },
      { path: "/checkout", element: <Checkout/> },


      {
        path: "/login",
        element: (
          <PublicRoutes>
            <LoginPage />
          </PublicRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate
        persistor={persistor}
        loading={
          <div className="h-screen">
            <SettingUpAnApp />
          </div>
        }
      >
        <ModalProvider>
          <RouterProvider router={router} />
          <Modal />
          <Toaster />
        </ModalProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);
