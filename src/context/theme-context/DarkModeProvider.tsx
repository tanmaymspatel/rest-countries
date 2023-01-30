import { useState } from "react";
import { DarkModeContext } from "./darkModeContext";

interface IdarkModeProps {
    children: React.ReactNode
}
function DarkModeProvider({ children }: IdarkModeProps) {
    const [darkmode, setDarkmode] = useState(false);

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
