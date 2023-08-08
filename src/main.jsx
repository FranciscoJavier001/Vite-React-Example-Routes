import React from "react"; //* Importacion para usar React */
import ReactDOM from "react-dom/client"; //* Importacion de lo que se renderiza en el VirtualDom */
import {
  BrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom"; //* Importacion para navegar entre rutas */

import { HeroesApp } from "./HeroesApp"; //* Logica de este Componente Funcional */

import { DcPage, MarvelPage, SearchPage } from "../src/heroes/"; //* Logica de los componentes funcionales */

const router = createHashRouter([
  {
    path: "/marvel",
    element: <MarvelPage />,
  },
  {
    path: "/dc",
    element: <DcPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "*",
    element: <MarvelPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  //* Como voy a renderzar en el VirtualDom y donde */
  <React.StrictMode>
    {/* Aplicamos el modo estricto */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
