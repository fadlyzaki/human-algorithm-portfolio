import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

// Initialize Google Analytics with your Measurement ID
// TODO: Replace 'G-XXXXXXXXXX' with your actual Measurement ID
const MEASUREMENT_ID = "G-DH91KQGJ51";

ReactGA.initialize(MEASUREMENT_ID);

const AnalyticsTracker = () => {
    const location = useLocation();

    useEffect(() => {
        // Send page view event on route change
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }, [location]);

    return null; // This component renders nothing
};

export default AnalyticsTracker;
