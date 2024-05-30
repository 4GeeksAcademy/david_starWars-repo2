import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "./Characters.jsx";
import image from "../../img/starWars.jpg"

export const Home = () => (
<div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>	
		<p>
			{/* <img src={rigoImage} /> */}
		</p>
		{/* <a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a> */}
		<Characters />
	</div>
);

