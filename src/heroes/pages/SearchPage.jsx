import { Navbar } from "../../ui";

export const SearchPage = () => {
  //* Funcion de Flecha que no recibe Nada */
  return (
    //* Retorno */
    <>
      <Navbar />
      <div className="container">
        {/* Para meterle formato al DOM */}
        <h1 className="text-center">PaginaBusqueda</h1>
        {/* Titulo en la pagina, lo coloco al centro */}
        <hr /> {/* Una raya */}
      </div>
    </>
  );
};
