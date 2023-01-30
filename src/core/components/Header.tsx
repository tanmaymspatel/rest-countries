import { useContext } from "react";
import { DarkModeContext } from "../../context/theme-context/darkModeContext";

function Header() {

    const { darkmode, setDarkmode } = useContext(DarkModeContext)
    return (
        <div className="container h-100">
            <div className="h-100 d-flex justify-content-between align-items-center">
                <h2 className="header-heading">Where in the world?</h2>
                <p className="dark-mode-text d-flex align-items-center cursor-pointer" onClick={() => setDarkmode(prev => !prev)}>
                    <span className="icon-dark-mode"></span>
                    <span>{darkmode ? "Light Mode" : "Dark Mode"}</span>
                </p>
            </div>
        </div>
    )
};

export default Header;
