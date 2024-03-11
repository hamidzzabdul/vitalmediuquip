import "./Map.scss"
const Map = () => {
    return (
        <div className="map-container">
            <h2>Map</h2>
            <p>Showbe Plaza, Pangani. Nairobi.</p>
            <p> Along Muranga Road and next to Ola Petrol Station.</p>
            <div className="map-wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2388.8698102530084!2d36.83237150676026!3d-1.2679657113654468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f175dd987d77d%3A0x5c0f904dbd837d31!2sVital%20Mediquip%2C%20previously%20Vitol%20Agencies%20Limited!5e0!3m2!1sen!2ske!4v1692263659631!5m2!1sen!2ske"
                    // width="600"
                    // height="450"
                    className="map"
                    style={{ border: "0" }}
                    // aria-hidden="false"
                    allowFullScreen="true"
                    loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Map