import React, { useState, useEffect } from "react";
import "./WeatherInfo.scss";
import { geolocation } from "react-geolocated";

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
            `http://api.weatherapi.com/v1/current.json?key=e38763e617664e56ab8162340220102&q=${
                (userLatitude, userLongitude)
            }&aqi=no`
        )
            .then((response) => response.json())
            .then((jsonResponse) => setWeatherStats(jsonResponse))
            .catch((err) => console.log(err));
        // console.log(weatherStats.location.name);
    };

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
        <div>
            <header className="greeting">
                <h1 className="greeting__heading">Good {greetingTime} </h1>
            </header>
            <p className="">{weatherStats ? weatherStats.location.name : ""}</p>
            {weatherStats ? <h1>{weatherStats.location.name}</h1> : null}
            {weatherStats ? <h1>{weatherStats.current.temp_c}</h1> : null}
            {weatherStats ? (
                <h1>{weatherStats.current.condition.text}</h1>
            ) : null}
            {weatherStats ? (
                <img
                    src={weatherStats.current.condition.icon}
                    alt={weatherStats.current.condition.text}
                />
            ) : null}
            <p className="">{userLatitude}</p>
            <p className="">{userLongitude}</p>
        </div>
    );
};

export default WeatherInfo;
