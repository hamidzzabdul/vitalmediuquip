import { BsWhatsapp } from "react-icons/bs"
import "./Whatsapp.scss"
const Whatsapp = () => {
    return (
        <a href="https://wa.me/+254705562383" target="_blank" rel="noopener noreferrer">
            <button className='whatsapp-btn'>
                <BsWhatsapp className="icon" />
            </button>
        </a>
    )
}

export default Whatsapp