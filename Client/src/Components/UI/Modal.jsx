
import PropTypes from "prop-types"
import { Fragment, useEffect } from "react"
import ReactDOM from "react-dom"
import "./Modal.scss"

const Backdrop = ({ onClose }) => {
    return <div className="backdrop" onClick={onClose}></div>
}

const portalElement = document.getElementById("overlays")

const ModalOverlay = ({ children }) => {
    return (
        <div className="modal">
            <div className="content">
                {children}
            </div>
        </div>
    )
}


const Modal = ({ onClose, children }) => {
    useEffect(() => {
        setTimeout(() => {
            const backdropElement = document.querySelector(".backdrop");
            const modalElement = document.querySelector(".modal");
            backdropElement.style.opacity = 1;
            modalElement.style.opacity = 1;
            modalElement.style.transform = "translateX(-50%) translateY(-50%)";
        }, 0);
    }, []);
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}


Backdrop.propTypes = {
    onClose: PropTypes.func
}
ModalOverlay.propTypes = {
    children: PropTypes.node,
}
Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func
}

export default Modal