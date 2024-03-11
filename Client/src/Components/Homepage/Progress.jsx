import { useState } from "react";
import "./Progress.scss"
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Progress = () => {
    const [counterState, setCounterState] = useState(false)

    return (
        <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
            <div className="progress-container">
                <div className="progress-wrapper">

                    <div className="progress-items">
                        <div className="progress-item">
                            <h2>
                                {counterState && <CountUp start={0} end={10} duration={2.75} />}+
                            </h2>
                            <div className="description">
                                <p>Years of Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="progress-items">
                        <div className="progress-item">
                            <h2>                         {counterState && <CountUp start={0} end={15} duration={2.75} />}+
                            </h2>
                            <div className="description">
                                <p>Sales Executive</p>
                            </div>
                        </div>
                    </div>
                    <div className="progress-items">
                        <div className="progress-item">
                            <h2>                         {counterState && <CountUp start={0} end={40} duration={2.75} />}+
                            </h2>
                            <div className="description">
                                <p>Counties Served</p>

                            </div>
                        </div>
                    </div>
                    <div className="progress-items">
                        <div className="progress-item">
                            <h2>                         {counterState && <CountUp start={0} end={5} duration={2.75} />}+
                            </h2>
                            <div className="description">
                                <p>East African Countries Served</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    )
}

export default Progress