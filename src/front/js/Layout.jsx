import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.js";

import { Home } from "./views/home.js";
import { Demo } from "./views/demo.js";
import { Single } from "./views/single";
import injectContext from "./store/appContext.js";
import { Characters } from "./views/Characters.jsx"
import { Planets } from "./views/Planets.jsx"
import { Vehicles } from "./views/Vehicles.jsx"



import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";
import { Contacts } from "./views/Contacts.jsx";
import { DetailsCharacters } from "./views/DetailsCharacters.jsx";
import { DetailsPlanets } from "./views/DetailsPlanets.jsx";
import { Login } from "./views/Login.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column min-vh-100 bg-dark">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Characters" element={<Characters />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/detail-users/:personajeId" element={<DetailsCharacters/>} />		
						<Route path="/detail-planets/:planetsId" element={<DetailsPlanets/>} />		
						<Route path="/planets" element={<Planets/>} />		
						<Route path="/contacts" element={<Contacts/>} />		
						<Route path="/login" element={<Login/>} />		
						<Route path="/vehicles" element={<Vehicles/>} />		
						<Route path="/agendas" element={<Agendas/>} />		
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
