/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./PageContent.scss"
const PageContent = ({ title, status, message }) => {
    let navigate = useNavigate();
    const goToHomePage = () => {
        navigate("/")
    };

    return (
        <div className="error-container">
            <h1>Oops!</h1>

            <div className="error-wrapper">
                <h2 className="error-status">
                    {status} - {title}
                </h2>

                <p className="error-message">
                    {message}
                </p>
            </div>

            <button onClick={goToHomePage}>
                Go To HomePage
            </button>

        </div>
    )
}

export default PageContent