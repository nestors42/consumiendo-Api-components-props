import React from 'react'

const Paginacion = ({paginaSiguiente, paginaAnterior}) => {
  return (
    <nav>
        <ul className='pagination justify-content-center mt-4'>
            <button className='btn btn-warning' onClick={paginaAnterior}>Anterior</button>
            <button className='btn btn-primary ms-2' onClick={paginaSiguiente}>Siguiente</button>
        </ul>
    </nav>
  )
}

export default Paginacion