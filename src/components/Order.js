import React from 'react';
import { motion } from "framer-motion";

const Order = ({ pizza }) => {
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
				when: "beforeChildren",
				staggerChildren: 0.5,
			},
		},
	};

	const childVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	};

	return (
		<motion.div
			className="container order"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<h2>Thank you for your order :)</h2>
			<motion.p variants={childVariants}>
				You ordered a {pizza.base} pizza with:
			</motion.p>
			{pizza.toppings.map((topping) => (
				<motion.div key={topping} variants={childVariants}>
					{topping}
				</motion.div>
			))}
		</motion.div>
	);
};

export default Order;