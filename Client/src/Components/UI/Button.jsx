import PropTypes from 'prop-types';

const Button = (props) => {
    return <button type={props.type} onClick={props.onClick} className={props.className}>{props.label}</button>;
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default Button;
