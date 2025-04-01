import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<div className="row">
				<div className="col-sm-12">
					<Navbar />
				</div>
			</div>

			<div className="container bg-light.bg-gradient p-3">
				<Hero />


				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-3 p-3">
						<Cards />
					</div>

					<div className="col-sm-12 col-md-6 col-lg-3 p-3">
						<Cards />
					</div>

					<div className="col-sm-12 col-md-6 col-lg-3 p-3">
						<Cards />
					</div>

					<div className="col-sm-12 col-md-6 col-lg-3 p-3">
						<Cards />
					</div>

					<div className="col-sm-12 col-md-6 col-lg-3 p-3">
						<Cards />
					</div>

					<div className="col-sm-12 col-md-6 col-lg-3 p-3">
						<Cards />
					</div>

					<div className="col-sm-12 col-md-6 col-lg-3 p-3">
						<Cards />
					</div>

					<div className="col-sm-12 col-md-6 col-lg-3 p-3">
						<Cards />
					</div>



				</div>
			</div>


			<Footer />
		</>


	);
};

export default Home;