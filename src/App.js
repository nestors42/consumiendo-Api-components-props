import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import CardsContainer from "./components/CardsContainer";
import Paginacion from "./components/Paginacion";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [info, setInfo] = useState({});
  const consumirApi = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPersonajes(data.results);
      setInfo(data.info);
    } catch (error) {
      console.log(error);
    }
  };
  const paginaSiguiente = () => {
    consumirApi(info.next);
  };
  const paginaAnterior = () => {
    consumirApi(info.prev);
  };

  useEffect(() => {
    consumirApi("https://rickandmortyapi.com/api/character");
  }, []);
  return (
    <>
      <Header />
      <Paginacion
        paginaSiguiente={paginaSiguiente}
        siguiente={info.next}
        anterior={info.prev}
        paginaAnterior={paginaAnterior}
      />
      <div className="d-flex justify-content-center">
        {personajes.length === 0 ? (
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <CardsContainer personajes={personajes} />
        )}
      </div>
    </>
  );
}

export default App;
