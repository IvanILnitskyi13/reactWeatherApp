import React, {Component} from "react";
import './App.css';
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "741657cc52d1fc8cae5cfccb1728d489";

class App extends Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunRise: undefined,
        sunSet: undefined,
        error: undefined
    }

    timeStampToDate(timeStamp) {
        let date = new Date();
        date.setTime(timeStamp * 1000);
        let dateToReturn = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        return dateToReturn;
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        const API_URL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await API_URL.json();
        console.log(data);

        if (data.cod === 200) {
            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunRise: this.timeStampToDate(data.sys.sunrise),
                sunSet: this.timeStampToDate(data.sys.sunset),
                error: undefined
            });
        } else if (data.cod === "404") {
            this.setState({
                error: "Enter correct city name"
            });
        } else {
            this.setState({
                error: "Enter the city name"
            });
        }


    }

    render() {
        return (
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 info">
                                <Info/>
                            </div>
                            <div className="col-sm-7 form">
                                <Form getWeather={this.gettingWeather}/>
                                <Weather
                                    temp={this.state.temp}
                                    city={this.state.city}
                                    country={this.state.country}
                                    sunRise={this.state.sunRise}
                                    sunSet={this.state.sunSet}
                                    error={this.state.error}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
