import PropTypes from "prop-types"
import Form from '../Contact/Form'
import Modal from '../UI/Modal'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const GetQuote = ({ onClose }) => {
    return (
        <>
            <Modal onClose={onClose}>
                <Form />
            </Modal>
            <ToastContainer />
        </>
    )
}

GetQuote.propTypes = {
    onClose: PropTypes.func
}

export default GetQuote