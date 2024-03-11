import "./AboutUs.scss"
import History from "./History"
import Banner from "../../assets/banner.jpg"
import HowItBegan from "./HowItBegan"
import WhoWeServe from "./WhoWeServe"
import Partners from "../Homepage/Partners"
import { BsFillMapFill } from "react-icons/bs"
import { FaBullseye } from "react-icons/fa"
import { IoPeople } from "react-icons/io5"


const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="hero-container">
                <h1 className="title">About us</h1>
            </div>
            <div className="sections">
                <div className="mission-section">
                    <div className="vision col-1">
                        <div className="heading">
                            <BsFillMapFill className="icon" />
                            <h2>Vision</h2>
                        </div>
                        <p>
                            Progressive leading distributor of healthcare solutions
                        </p>
                    </div>
                    <div className="mission col-1">
                        <label>
                            <div className="heading">
                                <FaBullseye className="icon" />
                                <h2>Mission</h2>
                            </div>
                            <div className="line"></div>
                        </label>
                        <p>

                            To provide innovative and environment friendly quality products, sustainably grow and keep our
                            employees and client happy at the same time maximizing shareholder value.
                        </p>
                    </div>
                </div>


                <div className="values col">
                    <div className="heading">
                        <IoPeople className="icon" />
                        <h2>Core Values</h2>
                    </div>
                    <ul>
                        <li>
                            <span>1. Integrity: </span> Always act with honesty and ethics

                        </li>
                        <li>
                            <span>2. Morality: </span> Uphold high moral standards
                        </li>
                        <li>
                            <span>3. Professionalism: </span>  Exhibit expertise and competence
                        </li>
                        <li>
                            <span>4. Teamwork: </span> Collaborate for shared success.
                        </li>
                        <li>
                            <span>5. Respect: </span> Value every person's dignity
                        </li>
                        <li>
                            <span>6. Stewardship: </span> Responsibly manage resources and trust.
                        </li>
                        <li>
                            <span>7. Equity: </span> Ensure fairness and equality.
                        </li>
                    </ul>
                </div>
                <HowItBegan />
                <History />
                <WhoWeServe />
                <Partners />
            </div>
        </div>
    )
}

export default AboutUs