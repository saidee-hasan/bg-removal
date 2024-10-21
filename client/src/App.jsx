import React from "react";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import { router } from "./Router/Routes";

const App = () => {
  return (
    <div>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </div>
  );
};

export default App;
