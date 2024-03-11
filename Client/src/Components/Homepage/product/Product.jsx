// import WishlistIcon from "../../Common/WishlistIcon"
import PropTypes from "prop-types";
import "./Product.scss"
const Product = ({ image, name, subCategory }) => {
    return (
        <div className="product-container">
            {/* <WishlistIcon /> */}
            <div className="img-container">
                <img src={image} alt={name} />
            </div>

            <div className="content">
                <h2>{name}</h2>
                <p>{subCategory}</p>
                <button>View Product</button>
            </div>
        </div>
    );
};

Product.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    subCategory: PropTypes.string.isRequired,
};


export default Product