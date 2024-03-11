/* eslint-disable react/no-unescaped-entities */
import "./Faq.scss"
import Testimonials from "../../assets/testimonials.svg"
import { NavLink } from "react-router-dom"
import { faqData } from "../../../utils/data"

import { Collapse } from 'antd';
const { Panel } = Collapse;

const Faq = () => {
    const scrollToTop = () => {
        window, scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className="faq-container ">
            <div className="faq-wrapper">

                <div className="header">
                    <h2>Frequently Asked <span>Questions</span></h2>
                    <p>Have any Questions? we are here to help</p>
                    <div className="faq-des">
                        <img src={Testimonials} alt="testimonials" />
                        <div className="subtext">
                            <h3>Still have questions ?</h3>
                            <NavLink to="/Faqs" onClick={scrollToTop}>
                                <button className="view-button">View All</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="accordion">
                    {faqData.map((faq, index) => (
                        <Collapse key={index} className="faq-collapse">
                            <Panel header={faq.question} key="1" className="Panel">
                                <p>{faq.answer}</p>
                                {faq.span && (
                                    <p className="details">
                                        <div className="bullets"></div>
                                        <span>Weekdays: 8.00 am to 5.00 pm</span>
                                    </p>
                                )}
                                {faq.link && (
                                    <a href={faq.href}>{faq.link}</a>
                                )}
                            </Panel>
                        </Collapse>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq