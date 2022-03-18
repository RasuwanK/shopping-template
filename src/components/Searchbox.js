import searchIc from "../images/search-ic.png";

const Searchbox = () => {
    return (
        <div className="search-box">
            <div className="icon">
                <img src={searchIc} alt="Search ico." />
            </div>
            <input type="text" className="text-input" placeholder="Typehere to search" />
        </div>
    )
}

export default Searchbox;