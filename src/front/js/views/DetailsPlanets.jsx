import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const DetailsPlanets = () => {

    const { store, actions } = useContext(Context)

    console.log("SOY CURRENTPLANET: ", store.currentPlanet);


    return (

        
        <div className="card mb-3 m-4 bg-dark" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${store.currentPlanet.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                </div>

                {Object.values(store.currentPlanet).length

                    ?

                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title text-white "> Name: <span >{store.currentPlanet.properties.name}</span></h4>
                            <hr style={{ color: "white" }}></hr>
                            <p className="card-text text-white"><span className="fs-6">Eye color: </span>
                                {store.currentPlanet.properties.terrain}</p>
                            <p className="card-text text-white"><span className="fs-6">Hair color: </span>
                                {store.currentPlanet.properties.orbital_period}</p>
                            <p className="card-text text-white"><span className="fs-6">Skin color: </span>
                                {store.currentPlanet.properties.gravity}</p>
                            <p className="card-text text-white"><span className="fs-6">Birth year: </span>
                                {store.currentPlanet.properties.created}</p>
                            <p className="card-text text-white"><span className="fs-6">Gender: </span>
                                {store.currentPlanet.properties.climate}</p>

                        </div>
                    </div>
                    :

                    "No hay nada"
                }
            </div>
        </div>

    )
}