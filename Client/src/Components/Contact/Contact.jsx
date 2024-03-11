import Details from "./Details"
import BusinessHours from "./BusinessHours"
import Form from "./Form"
import Map from "./Map"
import "./Details.scss"
const Contact = () => {
    return (
        <div>
            <div className='header'>
                <span>Get in Touch</span>
                <h1>Contact Us</h1>
            </div>

            <div className="details-container">
                <div className="details-left">
                    <Details />
                    <BusinessHours />
                </div>
                <Form />
            </div>
            <Map />
        </div>

    )
}

export default Contact