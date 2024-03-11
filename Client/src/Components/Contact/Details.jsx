import { IoCall } from "react-icons/io5"
import { BsWhatsapp } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6"
const Details = () => {
    return (
        <div className='contact-details'>
            <h2>Contact Details</h2>
            <div className="contact-description">
                <label>
                    <IoCall className="contact-icons" />
                    <p>+254 705562383</p>
                </label>
                <label>
                    <BsWhatsapp className="contact-icons" />
                    <p>+254 705562383</p>
                </label>
                <label>
                    <MdEmail className="contact-icons" />
                    <p>support@vitalmediquip.co.ke</p>
                </label>
                <label>
                </label>
            </div>
        </div>
    )
}

export default Details