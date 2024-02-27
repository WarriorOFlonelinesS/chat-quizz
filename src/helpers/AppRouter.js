import { MemoryRouter, RouterProvider, createBrowserRouter } from "react-router-dom"
import { Main } from "../components/Main";
import Signin from "../pages/Signin";

export const AppRouter = () =>{
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
      return(
        <RouterProvider router={router} />
      )

}