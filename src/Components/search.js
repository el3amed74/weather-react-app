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
// export default function Search() {  (e) => setSearch(e.target.value)
//     const [search, setSearch] = useState("");
//     const [currentweather, setweather] = useState([]);
//     function getValue() {
//         let apiKey = "dd94f859a0e52d6e4767fddf735f04a7";
//         let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=Metric&appid=${apiKey}`;
//         fetch(url).then(res => res.json())
//             .then(data => setweather(data.main))
//             .catch((error) => console.error("Error fetching data:", error));
//         console.log(currentweather);
//         document.querySelector("#search").value = "";
//     };


//     return (
//         <>
//             <form>
//                 <input type="text" id="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
//                 <div className="img" onClick={getValue}>
//                     <img src={searchIcon} alt="search" width="20px" />
//                 </div>
//             </form>
//             {/* {Object.keys(currentweather).length > 0 && (
//                 <Today data={currentweather} />
//             )} */}
//             <Today data={currentweather}/>
//         </>
//     )
// }