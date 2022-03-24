import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import data from './data';

function Footer() {
    return (
        <footer>
            
        </footer>
    )
}

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Showcase data={data} />
        </div>
    )
}

export default App;