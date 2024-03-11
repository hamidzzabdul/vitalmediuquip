// import React from "react";
import PropTypes from 'prop-types';

const CustomDot = ({ active, onClick }) => {
    return (
        <button
            className={`custom-dot ${active ? "active" : ""}`}
            onClick={onClick}
        />
    );
};

CustomDot.propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func,
};


export default CustomDot;