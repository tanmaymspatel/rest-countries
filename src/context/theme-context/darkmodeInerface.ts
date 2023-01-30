import React from "react";
// interface for dark mode context
export interface IDarkMode {
    darkmode: boolean;
    setDarkmode: React.Dispatch<React.SetStateAction<boolean>>
}