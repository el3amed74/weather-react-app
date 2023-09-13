import "./today.css"

const Today=({data} )=> {

    return (
        <div className="container">
            <div className="todayweather">
                <img src={`icons/${data.weather[0].icon}.png`} width="45px" alt="weather-img" />
                <p className="temp">{Math.round(data.main.temp)} °C</p>
                <h2 > {data.name}</h2>
                <div className="cont-details">
                    <div className="details">
                        <div className="rowDetails">
                            <div className="property">wind</div>
                            <div className="value">{Math.round(data.wind.speed)} m/s</div>
                        </div>
                        <div className="rowDetails">
                            <div className="property">humidity</div>
                            <div className="value">{data.main.humidity}% </div>
                        </div>
                        <div className="rowDetails">
                            <div className="property">pressure</div>
                            <div className="value">{data.main.pressure} hpa</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Today;