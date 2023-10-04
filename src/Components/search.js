import searchIcon from "../Assets/search.svg"
import "./search.css"
import { useState } from "react"

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);
    const handleOnChange = () => {
        setSearch(search);
        onSearchChange(search);
        console.log(search);
        document.querySelector("#search").value = "";
    }
    return (
        <form>
            <input type="text" id="search" placeholder="Cairo" onChange={(e) => setSearch(e.target.value)} />
            <div className="img" onClick={handleOnChange}>
                <img src={searchIcon} alt="search" width="20px" />
            </div>
        </form>
    )
}
export default Search;
