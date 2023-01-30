import React from "react";
import { IDarkMode } from "./darkmodeInerface";

export const DarkModeContext = React.createContext<IDarkMode>({
    darkmode: false,
    setDarkmode: () => { }
})