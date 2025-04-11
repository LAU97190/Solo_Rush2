import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";

import App from "./App.tsx";


import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Article from './pages/Article.tsx'




const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/About",
        element: <About />,
      },

      {
        path: "/Article",
        element: <Article />,
      }
    ]
  }
])


createRoot(document.getElementById("root")!).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
