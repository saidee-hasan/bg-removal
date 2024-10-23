import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Result from "../pages/Result";
import BuyCredit from "../pages/BuyCredit";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        { path: "/", element: <Home /> },
        { path: "/result", element: <Result /> },
        { path: "/buy", element: <BuyCredit/> },
        


    ],
  },
]);
