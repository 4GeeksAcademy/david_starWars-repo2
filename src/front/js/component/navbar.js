import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-expand bg-dark ">
			<div className="container-fluid md ">
				<Link className="navbar-brand text-white" to="/contacts">Contacts</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<Link to="/characters">
							<button className="btn btn-warning">characters</button>
						</Link>

						<Link to="/Planets">
							<button className="btn btn-warning ms-2">Planets</button>
						</Link>

						<Link to="/Vehicles">
							<button className="btn btn-warning ms-2">Vehicles</button>
						</Link>
					</ul>




					<div className="ms-auto me-3 mt-1">
						<div className="dropdown">
							<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
								<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
									{store.favorites.length}
								</span>							</button>
							<ul className="dropdown-menu dropdown-menu-end">
								{store.favorites.map((item, index) =>
									<li key={index} className="dropdown-item d-flex justify-content-between me-1">
										{item}
									<span onClick={() => actions.removeFavorites(item)} className="text-danger" style={{cursor: 'pointer'}}>
										<i className="fas fa-trash"></i>
									</span>
									</li>)
								}
							</ul>
						</div>

					</div>
				</div>
			</div>
		</nav>
	);
};



<nav className="navbar navbar-light bg-light mb-3">
	<Link to="/">
		<span className="navbar-brand mb-0 h1">React Boilerplate</span>
	</Link>
	<div className="ml-auto">
		<Link to="/characters">
			<button className="btn btn-primary">characters</button>
		</Link>
	</div>
</nav>