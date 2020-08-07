import React, { useState, useEffect } from 'react';

function Home() {
    const [date, setDate] = useState({
        day: '',
        dateNum: ''
    });
    const [weather, setWeather] = useState({
        temp: '',
        desc: '',
        url: ''
    })

    useEffect(() => {
        var week = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        var date = {
            day: week[new Date().getDay()],
            dateNum: new Date().getDate()
        }
        setDate(date)

        fetch('http://api.openweathermap.org/data/2.5/weather?q=dallas&appid=f3b588f971a98833475f37506f27293e').then(res => res.json().then(data => {
            console.log(data.main.temp)
            var kelvin = data.main.temp;
            var faren = Math.round((kelvin - 273.15) * 9 / 5 + 32);

            var weather = {
                temp: faren,
                desc: data.weather[0].description,
                url: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            }

            setWeather(weather)
        }));
    }, [])

    return (
        <div className="container home">
            <div className="row">
                <div className="col-md-6">
                    <div className="home-md">
                        <p>Welcome to Capstone CRM</p>
                    </div>
                </div>
                <div className="col-md-3 left">
                    <p>Overview</p>
                    <div className="date">
                        <div className="day">{date.day}</div>
                        <div className="dateNum">{date.dateNum}</div>
                    </div>
                    <div className="weather">
                        <div>{weather.temp}&deg;</div>
                        <img src={weather.url} alt="weather icon" />
                        <div>{weather.desc}</div>
                    </div>
                </div>
                <div className="col-md-3 right">
                    <div className="home-sm">Reach</div>
                    <div className="home-sm">Engagements</div>
                </div>
            </div>
        </div>
    )
}

export default Home;