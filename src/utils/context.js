import { useState, createContext, useContext } from "react";
import Alert from "../components/common/AlertElement";


const ApplicationContext = createContext(null);

export const AppProvider = ({ children }) => {

    // ------------------------------- Alerts -------------------------------

    const [openAlert, setOpenAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertSeverity, setAlertSeverity] = useState("");

    // ------------------------------- Open Alert -------------------------------
    const newAlert = (message, severity) => {
        setAlertMessage(message);
        setAlertSeverity(severity);
        setOpenAlert(true);
    }
    // ------------------------------- Close Alert -------------------------------
    function closeAlert() {
        setOpenAlert(false);
        setAlertMessage("");
    }

    return (
        <ApplicationContext.Provider value={{newAlert}}>
            {children}
            <Alert
                alertMessage={alertMessage}
                alertSeverity={alertSeverity}
                closeAlert={closeAlert}
                alertOpen={openAlert}
            />

        </ApplicationContext.Provider>
    );
}

export const useApp = () => {
    return useContext(ApplicationContext);
}