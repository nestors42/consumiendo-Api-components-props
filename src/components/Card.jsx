import React from 'react'

const Card = ({item}) => {
    const styleCard = {
        width: "300px",
      };
  return (    
    <div className="col mb-4 justify-content-center d-flex">
      <div className="card" style={styleCard}>
        <img className="card-img" src={item.image} alt="img" />
        <div className="card-body">
          <h5 className="card-title text-primary">{item.name}</h5>
          <hr />
          <p>
            <span className="fw-bold">Especie:</span> {item.species}
          </p>
          <p>
            <span className="fw-bold">Localizacion:</span> {item.location.name}
          </p>
          <p>
            <span className="fw-bold">Genero:</span> {item.gender}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card