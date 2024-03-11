import PropTypes from 'prop-types';

const Inputs = (props) => {
    return <input type={props.type} placeholder={props.placeholder} className={props.className} value={props.value} onChange={props.onChange} name={props.name} />
}

Inputs.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
}

export default Inputs