import React from "react";

function MyButton(props) {
	return (
		<div>
			<button onClick={props.fcn} className="flex items-center justify-center px-6 py-2 bg-gradient-to-r from-red-500 to-yellow-500 text-white font-medium rounded-full shadow-lg hover:from-yellow-500 hover:to-red-500 transition-all duration-300">

				{props.buttonLabel}
			</button>
		</div>
	);
}
export default MyButton;
