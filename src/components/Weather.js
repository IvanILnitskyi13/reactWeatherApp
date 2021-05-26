const Weather = props => (
    <div className="infoWeath">
        {props.city &&
        < div>
            < p> City: {props.city}</p>
            <p>Temperature: {props.temp}</p>
            <p>Country: {props.country}</p>
            <p>Sun rise: {props.sunRise}</p>
            <p>Sun set: {props.sunSet}</p>
        < /div>
        }
        <p className="error">{props.error}</p>
    </div>
);


export default Weather;