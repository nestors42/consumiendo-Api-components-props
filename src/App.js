import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import CardsContainer from "./components/CardsContainer";
import Paginacion from "./components/Paginacion";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const consumirApi = async () => {
    const url = "https://rickandmortyapi.com/api/character";
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPersonajes(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    consumirApi();
  }, []);
  return (
    <>
      <Header />
      <Paginacion />
      <CardsContainer personajes={personajes} />
    </>
  );
}

export default App;
