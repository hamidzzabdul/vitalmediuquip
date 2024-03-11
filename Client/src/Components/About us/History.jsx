import "./History.scss"

import { BsFillPlayFill } from "react-icons/bs"
import { BsArrowsMove } from "react-icons/bs"
import { BiSolidNews } from "react-icons/bi"
import { MdOutlineDriveFileRenameOutline } from "react-icons/md"


const History = () => {
    return (
        <div className='history-section'>
            <h2>Our History</h2>
            <div className="history-container">
                <div className="hist-1">
                    <div className="dates">
                        <div className="icon">
                            <BsFillPlayFill className="hist-icon" />
                        </div>
                        <h3>January 2014</h3>
                    </div>
                    <div className="history-description">
                        <p>Began operations in Eastleigh, Nairobi,
                            initially focusing on distributing laboratory and
                            medical diagnostic products. </p>
                    </div>
                </div>
                <div className="hist-1">
                    <div className="dates">
                        <div className="icon">
                            <BsArrowsMove className="hist-icon" />

                        </div>
                        <h3>October 2022</h3>
                    </div>
                    <div className="history-description">
                        <p>Moved to a new operational location in Industrial Area, Nairobi, marking a pivotal step in our company's growth and expansion. </p>
                    </div>
                </div>
                <div className="hist-1">
                    <div className="dates">
                        <div className="icon">
                            <BiSolidNews className="hist-icon" />
                        </div>
                        <h3>January 2023</h3>
                    </div>
                    <div className="history-description">
                        <p>Established a new corporate headquarters at Showbe Plaza, Pangani, Nairobi, strategically positioning ourselves in Kenya's largest city. </p>
                    </div>
                </div>
                <div className="hist-1">
                    <div className="dates">
                        <div className="icon">
                            <MdOutlineDriveFileRenameOutline className="hist-icon" />
                        </div>
                        <h3>August 2023</h3>
                    </div>
                    <div className="history-description">
                        <p>Officially changed our name from Vitol Agencies Limited to Vital Mediquip, reflecting our dedication to providing vital medical equipment and supplies to valued customers in East Africa.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History