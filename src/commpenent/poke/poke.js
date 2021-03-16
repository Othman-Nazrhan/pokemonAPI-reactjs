import React from 'react'

const Poke = ({ pokemon }) => {

    return (

        <div className="container">
 
            <div className="card mb-3 my-4" >
                <div className="row ">
                    <div className="col-md-4">
                        <img src={pokemon.sprites.front_default} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{pokemon.name}</h5>
                            <p className="card-text"> Types: {pokemon.types.map(type => (type.type.name)
                            )}</p>
                            <p className="card-text"><small className="text-muted">weight :{pokemon.weight}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>                                                                         
    )
}
export default Poke