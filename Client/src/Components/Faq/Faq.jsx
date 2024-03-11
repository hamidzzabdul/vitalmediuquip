import "./Faq.scss"
import { BsPlusCircle } from "react-icons/bs"
import Testimonials from "../../assets/testimonials.svg"
import { NavLink } from "react-router-dom"

const Faq = () => {
    return (
        <div className="faq-containers">
            <div className="header">
                <h1>Frequently Asked Questions</h1>
                <p>Have any Questions? we are here to help</p>
            </div>
            <ul className="accordion">
                <li>
                    <input type="radio" name="accodrion" id="first" />
                    <label htmlFor="first">
                        <h2>
                            What types of medical care and healthcare products does your company offer?
                        </h2>
                        <div className="icon">
                            <BsPlusCircle className="accordion-icon" />
                        </div>
                    </label>
                    <div className="content">
                        <p>We offer a wide range of medical and healthcare products, including items for laboratories, operating
                            rooms, dental practices, imaging facilities, maternity care, and more.
                            Additionally, we offer products suitable for hospitality businesses like hotels and spas, as well as
                            educational institutions. Our services cover the maintenance and repair of various machines.
                        </p>
                        <a href="/allproducts">Please click on this link to explore our product and service range and view some featured items.</a>
                    </div>
                </li>
                <li>
                    <input type="radio" name="accodrion" id="second" />
                    <label htmlFor="second">
                        <h2>
                            What are your business hours?
                        </h2>
                        <div className="icon">
                            <BsPlusCircle className="accordion-icon" />
                        </div>
                    </label>
                    <div className="content">
                        <p>
                            We operate from Monday to Saturday.
                        </p>
                        <span>
                            <div className="bullets"></div>
                            Weekdays: 8.00 am to 5.00 pm
                        </span>
                        <span>
                            <div className="bullets"></div>
                            Saturdays: 9.00 am to 3.00 pm
                        </span> <br />
                        <a href="/contact-us">Please contact us before your visit so we can make the necessary preparations for your arrival.</a>
                    </div>
                </li>
                <li>
                    <input type="radio" name="accodrion" id="third" />
                    <label htmlFor="third">
                        <h2>
                            Do you offer product delivery services?
                        </h2>
                        <div className="icon">
                            <BsPlusCircle className="accordion-icon" />
                        </div>
                    </label>
                    <div className="content">
                        <p>
                            Certainly! We proudly serve clients across all regions in East Africa. To arrange product delivery, simply
                            order and inform us of your preferred courier service. We will utilize your chosen courier to ensure the
                            timely delivery of your products
                        </p>
                    </div>
                </li>
                <li>
                    <input type="radio" name="accodrion" id="fourth" />
                    <label htmlFor="fourth">
                        <h2>
                            Why aren't product prices listed on your website or your company’s documents?
                        </h2>
                        <div className="icon">
                            <BsPlusCircle className="accordion-icon" />
                        </div>
                    </label>
                    <div className="content">
                        <p>
                            We don't show prices on our website or documents because we sell products from many different
                            brands. For example, we have two brands of infrared thermometers, Blunt Bird and Dikang. Each of
                            these brands has its own price. That's why we can't put fixed prices on our website, as they vary
                            depending on your chosen brand.<br />
                            If you let us know which brand you're interested in, we'll gladly tell you the price for that specific brand.
                            Just reach out to us, share the brand you prefer, and we'll provide you with the price. We're here to help
                            you find the information you need!
                        </p>
                    </div>
                </li>
                <li>
                    <input type="radio" name="accodrion" id="fifth" />
                    <label htmlFor="fifth">
                        <h2>
                            Where can I find the prices for your products?
                        </h2>
                        <div className="icon">
                            <BsPlusCircle className="accordion-icon" />
                        </div>
                    </label>
                    <div className="content">
                        <p>
                            <a href="contact-us">Get in touch with us</a>, and our dedicated customer care team will be happy to assist you with any
                            questions you may have. If you need help selecting the right product or have any doubts, the customer
                            care team will connect you with an expert for further guidance.

                        </p>
                    </div>
                </li>
                <li>
                    <input type="radio" name="accodrion" id="sixth" />
                    <label htmlFor="sixth">
                        <h2>
                            Where can I locate a product's datasheet or specifications?
                        </h2>
                        <div className="icon">
                            <BsPlusCircle className="accordion-icon" />
                        </div>
                    </label>
                    <div className="content">
                        <p>
                            <a href="/conta-us">Contact us</a>, and we will happily provide you with all the information you need, including the datasheet
                            or specifications.
                        </p>
                    </div>
                </li>
                <li>
                    <input type="radio" name="accodrion" id="seventh" />
                    <label htmlFor="seventh">
                        <h2>
                            Who should I contact if I have concerns about a product?
                        </h2>
                        <div className="icon">
                            <BsPlusCircle className="accordion-icon" />
                        </div>
                    </label>
                    <div className="content">
                        <p>
                            <a href="/contact">Reach out to us</a> and say you want to be connected to the sales manager. You can contact us via phone
                            call, text message, WhatsApp, email, or any other convenient method of communication.

                        </p>
                    </div>
                </li>
            </ul>

            <div className="faq-des">
                <img src={Testimonials} alt="testimonials" />
                <div className="subtext">
                    <h3>Still have questions ?</h3>
                    <p>Can’t find the answer you’re looking for? Please Reach out to our friendly{" "}
                        <NavLink to="/contact-us" className="contact-link">
                            team
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Faq