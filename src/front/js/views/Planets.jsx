import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import imagen from "../../img/starWars.jpg"
import { Link } from "react-router-dom"



export const Planets = () => {
    const { store, actions } = useContext(Context)

    const handlDetails = (url) => {
        console.log("HandlDtlailsPlanets: ", url);
        actions.settingPlanetUrl(url)
        actions.getCurrentPlanets()
    }

    return (
        <div className="row " style={{ margin: '10px', backgroundImage: `url(${imagen})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            {store.planets.map((item) => (
                <div key={item.uid} className="card bg-dark mt-2 row p-1" style={{ width: "18rem", margin: '0 auto' }}>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top mt-2 " alt="..."
                        style={{ height: '300px', width: '500px' }} />
                    <div className="card-body mt-2">
                        <h5 className="card-title text-white text-center mt-3">{item.name}</h5>

                        <div className="d-flex justify-content-between mt-5">

                            <Link to={`/detail-planets/${item.uid}`} className="btn btn-primary" onClick={() => { handlDetails(item.url) }}>Details</Link>

                            <span onClick={() => {actions.addFavorites(item.name)}} className="btn btn-outline-danger text-danger"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                            </svg></span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}