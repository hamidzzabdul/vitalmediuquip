import { NavLink } from 'react-router-dom'
import PropTypes from "prop-types";
import { motion } from "framer-motion"
import { ImageFadeInAnimationVariant } from '../../../utils/animations';
import { useContext } from 'react';
import EnquireContext from '../../store/EnquireContext';


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


const SecondSliders = ({ title, name, image, description, btnName }) => {
    const { openEnquireModal, } = useContext(EnquireContext);

    return (
        <div className="slide-container">
            <motion.div
                className="slide-content other-sliders"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.1 }}
            >
                <motion.h2
                    variants={item}
                    initial="hidden"
                    animate="visible"
                    className="title other-sliders"
                >
                    {title}
                </motion.h2>
                <motion.p variants={item} className="product-name other-sliders">
                    {name}
                </motion.p>
                <motion.p className="additional-text">{description}</motion.p>
                <div className="button-container">
                    <button className="get-quote-btn" >
                        <NavLink>
                            {btnName}
                        </NavLink>
                    </button>
                    <button className="all-products-btn" onClick={openEnquireModal}>Get Quotation</button>

                </div>
            </motion.div>
            <motion.div
                variants={ImageFadeInAnimationVariant}
                initial="initial"
                whileInView={"animate"}
                viewport={{
                    once: true,
                }}
                className="img-container second-sliders"
            >
                <img src={image} alt="hero image" />
            </motion.div>
        </div>
    );
};

SecondSliders.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    btnName: PropTypes.string,
};

export default SecondSliders
