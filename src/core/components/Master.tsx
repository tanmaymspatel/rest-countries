import { useContext } from "react"

import { DarkModeContext } from "../../context/theme-context/darkModeContext"
import Header from "./Header"
import Routing from './Routing'
/**
 * @returnsA master component 
 */
function Master() {
    // comsumption of the dark mode context
    const { darkmode } = useContext(DarkModeContext);
    return (
        <div className="h-100 d-flex flex-column">
            <header id="header" className={`${darkmode ? "dark-mode" : null}`}>
                <Header />
            </header>
            <main className={`${darkmode ? "dark-mode" : null} main-content flex-grow-1 overflow-y-auto`}>
                <Routing />
            </main>
        </div>
    )
};

export default Master;
