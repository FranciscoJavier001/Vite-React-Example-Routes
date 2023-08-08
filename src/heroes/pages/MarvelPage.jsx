import { Navbar } from "../../ui";

export const MarvelPage = () => {
  //* Exporto esta funcion que no recibe nada */
  return (
    //* Lo que renderizo */
    <>
      <Navbar />
      <div className="container">
        {/* Contenedor donde va a ir el contenido */}
        <h1 className="text-center">Marvel Comics</h1>
        {/* Titulo del componente */}
        <hr /> {/* Una linea */}
      </div>
    </>
  );
};
