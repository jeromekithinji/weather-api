import React, { useState, useEffect } from "react";
import "./WeatherInfo.scss";

const WeatherInfo = () => {
    const [weatherStats, setWeatherStats] = useState(null); //
    const [userLatitude, setUserLatitude] = useState(null);
    const [userLongitude, setUserLongitude] = useState(null);

    const successCallback = (position) => {
        console.log(position);
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        setUserLongitude(position.coords.longitude);
        setUserLatitude(position.coords.latitude);
    };

    const errorCallback = (error) => {
        console.error(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    const getWeatherStats = () => {
        fetch(
            `http://api.weatherapi.com/v1/current.json?key=e38763e617664e56ab8162340220102&q=${(userLatitude,userLongitude)}&aqi=no`)
            .then((response) => response.json())
            .then((jsonResponse) => setWeatherStats(jsonResponse))
            .catch((err) => console.log(err));
        // console.log(weatherStats.location.name);
    };

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const date = new Date();

    let minutes =
        date.getMinutes() < 11 ? "0" + date.getMinutes() : date.getMinutes();
    let displayDate =
        weekday[date.getDay()].toUpperCase() +
        " | " +
        months[date.getMonth()].toUpperCase().substring(0, 3) +
        " " +
        date.getDate() +
        "  " +
        date.getHours() +
        ":" +
        minutes;

    const currentHour = new Date().getHours();
    let greetingTime = "Morning!";

    if (currentHour >= 12) {
        greetingTime = "Afternoon!";
    }

    if (currentHour >= 18) {
        greetingTime = "Evening!";
    }

    useEffect(() => {
        getWeatherStats();
    }, []);

    return (
        <div className="widget">
            <h1 className="greeting">Good {greetingTime} </h1>
            <div class="weatherIconCont">
                {weatherStats ? (
                    <img className="weatherIcon"
                        src={weatherStats.current.condition.icon}
                        alt={weatherStats.current.condition.text}
                    />
                ) : null}
            </div>
            <div class="weatherInfo">
            {weatherStats ? <div className="temperature"><span>{weatherStats.current.temp_c}&deg;C</span></div> : null}
                <div class="description">  
                    {weatherStats ? <h2 className="weatherCondition">{weatherStats.current.condition.text}</h2> : null}  
                    {weatherStats ? <h2 className="place">{weatherStats.location.name}, {weatherStats.location.country}</h2> : null}
                </div>
            </div>
            <div class="date">{displayDate}</div>
        </div>
    );
};

export default WeatherInfo;