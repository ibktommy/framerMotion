import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	// Famer Motion Variants
	const buttonVariants = {
		hover: {
			scale: [1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1],
			textShadow: "0px 0px 8px rgb(255,255,255)",
			boxShadow: "0px 0px 8px rgb(255,255,255)",
		},
	};

	return (
		<motion.div
			className="home container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.5, duration: 1 }}
		>
			<h2>Welcome to Pizza Joint</h2>
			<Link to="/base">
				<motion.button variants={buttonVariants} whileHover="hover">
					Create Your Pizza
				</motion.button>
			</Link>
		</motion.div>
	);
};

export default Home;
