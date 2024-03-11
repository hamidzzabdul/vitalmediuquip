/* eslint-disable react/prop-types */
import Modal from "../UI/Modal"
import Form from "../Contact/Form"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import EnquireContext from "../../store/EnquireContext"
import { useContext } from "react"

const EnquireForm = ({ onClose }) => {
    const { selectedProduct } = useContext(EnquireContext)
    return (
        <>
            <Modal onClose={onClose}>
                <Form product={selectedProduct} />
                <ToastContainer />
            </Modal>
        </>
    )
}

export default EnquireForm