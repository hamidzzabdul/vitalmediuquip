import "./Contact.scss"
import { TfiWorld } from "react-icons/tfi"
import { IoCall } from "react-icons/io5"
import { BsEnvelopeOpen } from "react-icons/bs"


const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-wrapper">
                <span>
                    <TfiWorld className="contact-icon" />
                </span>
                <div className="address-description">
                    <h3>Address</h3>
                    <p>Showbe Plaza , Muranga Road, Pangani, Nairobi</p>
                </div>
            </div>
            <div className="contact-wrapper">
                <span >
                    <IoCall className="contact-icon" />
                </span>
                <div className="address-description">
                    <h3>Call us</h3>
                    <p>+254 705562383</p>
                </div>
            </div>
            <div className="contact-wrapper">
                <span >
                    <BsEnvelopeOpen className="contact-icon" />
                </span>
                <div className="address-description">
                    <h3>Email us</h3>
                    <p>support@vitalmediquip.co.ke</p>
                </div>
            </div>
        </div>
    )
}

export default Contact