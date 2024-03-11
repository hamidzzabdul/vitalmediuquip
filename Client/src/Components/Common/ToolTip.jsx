/* eslint-disable react/prop-types */
import { useState } from 'react';
import "./ToolTip.scss"

const Tooltip = ({ text, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseOver = () => {
        setIsVisible(true);
    };

    const handleMouseOut = () => {
        setIsVisible(false);
    };

    return (
        <div className='tool-tip'>
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                {children}
            </div>
            <div className={`text ${isVisible ? 'active' : ''}`}>
                {text}
            </div>
        </div>
    );
}
export default Tooltip;