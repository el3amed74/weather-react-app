import "./forcast.css";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forcast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    return (
        <div className="forcastcontainer">
            {data.list.splice(0, 4).map((item, index) => (
                <div className="forcastcontainer2" key={index}>
                    <div className="forcasttop">
                        <h2 className="dayname"> {forecastDays[index]} </h2>
                        <img src={`icons/${item.weather[0].icon}.png`} alt="" width="40px" height="40px" />
                    </div>
                    <div className="forcastbuttom">
                        <div className="forcasttemp">
                            <h1 className=""> {Math.round(item.main.temp)}°C</h1>
                        </div>
                        <div className="forcastdetails">
                            <div className="forcastrowDetails">
                                <div className="forcastproperty">wind</div>
                                <div className="forcastvalue">{item.wind.speed}m/s</div>
                            </div>
                            <div className="forcastrowDetails">
                                <div className="forcastproperty">humidity</div>
                                <div className="forcastvalue">{item.main.humidity}% </div>
                            </div>
                            <div className="forcastrowDetails">
                                <div className="forcastproperty">pressure</div>
                                <div className="forcastvalue">{item.main.pressure}hpa</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))} 
        </div>

    )
}
export default Forcast;