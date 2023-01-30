import { useState } from "react";
import { DarkModeContext } from "./darkModeContext";

interface IdarkModeProps {
    children: React.ReactNode
}
/**
 * @returns a context provider component for dark mode functionality
 */
function DarkModeProvider({ children }: IdarkModeProps) {
    // state for the dark mode
    const [darkmode, setDarkmode] = useState(false);
    // value object which is to be provided by the context
    const ctx = {
        darkmode,
        setDarkmode
    }
    return (
        <DarkModeContext.Provider value={ctx}>
            {children}
        </DarkModeContext.Provider>
    )
};

export default DarkModeProvider;
