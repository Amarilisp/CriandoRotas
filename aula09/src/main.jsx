import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import PaginaErro from "./pages/PaginaErro";

// importar as paginas

// 1 = [x] criar o browser com as rotas
// cirar a rota padrão.. sempre se baseia na / barra.
const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
      // todas as rotas agora passam a ser configuradas aqui.
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* aqui vai o contexto*/}
    <RouterProvider router={rotas}>
      <App />
      <Home />
    </RouterProvider>
  </React.StrictMode>
);

// pages é um componente, mas a diferença dela para um componente é que pages é usado apenas para criar rotas.
