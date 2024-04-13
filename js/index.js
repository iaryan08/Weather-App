  //fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityData}&appid=6b7b8004c73c74adea5f879cdbc96648`)
  
  let city = document.querySelector('#inputCity');
  
  let weather = {
    apikey: "6b7b8004c73c74adea5f879cdbc96648",
    cityData: city.value,
    fetchWeather: (cityData)=> {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityData}&units=metric&appid=${weather.apikey}`).then(response => response.json())
      .then(data => {
        let {
          name
        } = data;
        let {
          icon, description
        } = data.weather[0];
        let {
          temp, humidity
        } = data.main;
        let {
          speed
        } = data.wind;
        
        setBg(description);
  
        let iconurl = `http://openweathermap.org/img/w/${icon}.png`;
        document.querySelector(".icon").src = iconurl;
        document.querySelector(".weather").classList.remove("loading");
  
        document.querySelector(".city").innerHTML = "Weather in "+name;
        document.querySelector(".temp").innerHTML = temp+" &deg;C";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").innerHTML = "Humidity : "+ humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind : "+speed+" m/s";
  
  
      }).catch(err=>{alert("Please Enter Any Other City Name");alert(err)});
    },
  
  };
  document.querySelector(".btn").onclick = ()=> {
    cityData = city.value;
    weather.fetchWeather(cityData);
  };

  document.getElementById("inputCity")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        cityData = city.value;
        weather.fetchWeather(cityData);
    }
});
  
  function setBg(bg) {
    document.querySelector("body").style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${bg},${cityData}")`;
  }
