import Header from "./Header"
import Routing from './Routing'

function Master() {
    return (
        <div className="h-100 d-flex flex-column">
            <header id="header">
                <Header />
            </header>
            <main className="main-content flex-grow-1 overflow-y-auto">
                <Routing />
            </main>
        </div>
    )
}

export default Master   
