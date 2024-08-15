import React from 'react'

const Paginacion = () => {
  return (
    <nav>
        <ul className='pagination justify-content-center mt-4'>
            <button className='btn btn-warning'>Anterior</button>
            <button className='btn btn-primary ms-2'>Siguiente</button>
        </ul>
    </nav>
  )
}

export default Paginacion