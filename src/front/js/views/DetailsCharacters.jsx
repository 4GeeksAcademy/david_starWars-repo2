import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const DetailsCharacters = () => {

  const { store, actions } = useContext(Context)

  console.log("hola", store.currentUser);


  return (


    <div className="card mb-3 m-4 bg-dark" >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={`https://starwars-visualguide.com/assets/img/characters/${store.currentUser.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
        </div>
        {Object.values(store.currentUser).length

          ?

          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title text-white "> Name: <span >{store.currentUser.properties.name}</span></h4>
              <hr style={{color: "white"}}></hr>
              <p className="card-text text-white"><span className="fs-6">Eye color: </span> 
               {store.currentUser.properties.eye_color}</p>
              <p className="card-text text-white"><span className="fs-6">Hair color: </span> 
               {store.currentUser.properties.hair_color}</p>
              <p className="card-text text-white"><span className="fs-6">Skin color: </span> 
               {store.currentUser.properties.skin_color}</p>
              <p className="card-text text-white"><span className="fs-6">Birth year: </span> 
               {store.currentUser.properties.birth_year}</p>
              <p className="card-text text-white"><span className="fs-6">Gender: </span> 
               {store.currentUser.properties.gender}</p>
            
            </div>
          </div>
          :

          "No hay nada"
        }
      </div>
    </div>

  )
}


