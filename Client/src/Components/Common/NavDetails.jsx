import { BsEnvelopeOpenFill } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa6"
import { BsLinkedin } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"

import "./navDetails.scss"

const NavDetails = () => {

    return (
        <div className="nav-details-wrapper">

            <div className='nav-container'>
                <div className="email-details">
                    <BsEnvelopeOpenFill className="icons" />
                    <p>support@vitalmediquip.co.ke</p>
                </div>

                <div className="socials">
                    <a href="https://www.facebook.com/VitalMediquip/" target="_blank" rel="noopener noreferrer"><BsFacebook className='icons' /></a>
                    <a href="https://www.instagram.com/vital_mediquip/" target="_blank" rel="noopener noreferrer"><FaInstagram className='icons' /></a>
                    <a href="https://www.linkedin.com/company/vital-mediquip/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='icons' /></a>
                    <a href="https://twitter.com/Vital_Mediquip" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle className='icons' /></a>
                </div>

            </div>
        </div>
    )
}

export default NavDetails