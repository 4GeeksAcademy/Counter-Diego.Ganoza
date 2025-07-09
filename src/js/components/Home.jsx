import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { NumberGenerator } from "./NumberGenerator";


//create your first component
const Home = ({ counter, handleChange }) => {


	return (
		<div className="container">
			<div className="row">
				<NumberGenerator counter={counter}></NumberGenerator>
			</div>
			<input type="number" class="form-control mt-5 border border-success" onKeyDown={handleChange} aria-label="Amount (to the nearest dollar)" style={{ width: "10%" }}></input>
		</div>
	);
};

export default Home;