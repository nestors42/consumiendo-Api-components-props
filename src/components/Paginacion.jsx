import React from "react";

const Paginacion = ({
  paginaSiguiente,
  paginaAnterior,
  siguiente,
  anterior,
}) => {
  return (
    <nav>
      <ul className="pagination justify-content-center mt-4">
        {anterior ? (
          <button className="btn btn-warning" onClick={paginaAnterior}>
            Anterior
          </button>
        ) : (
          <button className="btn btn-warning disabled" >
            Anterior
          </button>
        )}
        {siguiente ? <button className="btn btn-primary ms-2" onClick={paginaSiguiente}>
          Siguiente
        </button> : <button className="btn btn-primary ms-2 disabled" >
          Siguiente
        </button>}

        
      </ul>
    </nav>
  );
};

export default Paginacion;
