import { NavLink } from 'react-router-dom'
import PropTypes from "prop-types";
import { motion } from "framer-motion"
import { ImageFadeInAnimationVariant } from '../../../utils/animations';


const item = {
    hidden: {
        opacity: 0,
        x: -100
    },

    visible: {
        opacity: 1,
        x: 0,
    }
}


const FirstSlider = ({ title, name, image, description, btnName }) => {
    return (
        <div className="slide-container">
            <motion.div
                className="slide-content"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.1 }}
            >
                <motion.h2
                    variants={item}
                    initial="hidden"
                    animate="visible"
                    className="title "
                >
                    {title}
                </motion.h2>
                <motion.p variants={item} className="product-name">
                    {name}
                </motion.p>
                <motion.p className="additional-text">{description}</motion.p>
                <div className="button-container">
                    <NavLink className="get-quote-btn">{btnName}</NavLink>
                    <NavLink className="all-products-btn">Get Quotation</NavLink>
                </div>
            </motion.div>
            <motion.div
                variants={ImageFadeInAnimationVariant}
                initial="initial"
                whileInView={"animate"}
                viewport={{
                    once: true,
                }}
                className="img-container"
            >
                <img src={image} alt="hero image" />
            </motion.div>
        </div>
    );
};

FirstSlider.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    btnName: PropTypes.string.isRequired,
};

export default FirstSlider
