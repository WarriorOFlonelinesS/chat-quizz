import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./components/Main";
import { AuthContextProvider } from "./context/AuthContext";
import Signin from "./pages/Signin";
import { StartProvider } from "./context/StartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StartProvider>
      <AuthContextProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </AuthContextProvider>
    </StartProvider>
  </React.StrictMode>
);
