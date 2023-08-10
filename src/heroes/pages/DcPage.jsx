import { Navbar } from "../../ui";

export const DcPage = () => {
  //* Exporto esta Pagina */
  return (
    //* Muestro en el DOM */
    <>
      <Navbar />
      <div className="container">
        {/* Contenedor donde va a ir el contenido */}
        <h1 className="text-center">DC Comics</h1>
        {/* Un Titulo con una clase */}
        <hr /> {/* Una linea */}
      </div>
    </>
  );
};
