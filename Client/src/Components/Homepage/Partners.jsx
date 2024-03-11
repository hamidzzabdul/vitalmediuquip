import "./Partners.scss"

import { perks } from "../../../utils/data"


const Partners = () => {
    return (
        <div className="our-partners">
            <div className="services-wrapper">
                <h2>Why choose <span>us</span>? </h2>
                <p className="partnership-intro"> Partner with us for exceptional products and unparalleled advantages.</p>

                <div className="partner-description">
                    <ul>
                        {perks.map(perk => (
                            <li key={perk.title}>
                                <div className="img-container">
                                    <img src={perk.icon} alt={perk.title} />
                                </div>
                                <h3>{perk.title}</h3>
                                <p className="subtitles">{perk.subTitle}</p>
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Partners