import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Toppings = ({ addTopping, pizza }) => {
	let toppings = [
		"mushrooms",
		"peppers",
		"onions",
		"olives",
		"extra cheese",
		"tomatoes",
	];

	// Famer Motion Variants
	const containerVariants = {
		hidden: {
			x: "100vw",
		},
		visible: {
			x: 0,
			transition: {
				duration: 0.5,
				type: "spring",
				stiffness: 90,
				delay: 0.5,
			},
		},
	};

	return (
		<motion.div
			className="toppings container"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<h3>Step 2: Choose Toppings</h3>
			<ul>
				{toppings.map((topping) => {
					let spanClass = pizza.toppings.includes(topping) ? "active" : "";
					return (
						<motion.li
							key={topping}
							onClick={() => addTopping(topping)}
							whileHover={{ scale: 1.3, color: "#f8e112", originX: 0 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<span className={spanClass}>{topping}</span>
						</motion.li>
					);
				})}
			</ul>

			<Link to="/order">
				<button>Order</button>
			</Link>
		</motion.div>
	);
};

export default Toppings;
