import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import Layout from "./Layout/Layout";

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
