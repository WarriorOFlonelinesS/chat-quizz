import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Main } from "./components/Main";
import { AuthContextProvider } from "./context/AuthContext";
import Signin from "./pages/Signin";
import { StartProvider } from "./context/StartContext";
import Chat from "./components/Chat";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./styles/theme";
import App from "./App";

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
    <ThemeProvider theme={baseTheme}>
      <StartProvider>
        <Provider store={store}>
          <AuthContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AuthContextProvider>
        </Provider>
      </StartProvider>
    </ThemeProvider>
  </React.StrictMode>
);
