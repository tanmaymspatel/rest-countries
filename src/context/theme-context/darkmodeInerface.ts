import React from "react";

export interface IDarkMode {
    darkmode: boolean;
    setDarkmode: React.Dispatch<React.SetStateAction<boolean>>
}