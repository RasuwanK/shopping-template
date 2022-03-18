import Searchbox from "./Searchbox";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="search-bar">
                <Searchbox />
            </div>
            <div className="cart-button-cont">
                <button className="cart-button">Cart</button>
            </div>
        </nav>
    )
}

export default Navbar;