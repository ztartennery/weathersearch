 console.log("eee")
 
 

 function getWeather(location) {
            fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${location}`)
            .then(result => {
                console.log(result);
                return result.json();
            })
            .then(data => {
                console.log(data);
                return fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${data[0].woeid}/`)})
            .catch(error => {console.log(error);
                document.getElementById("report").innerHTML = "The search was unsuccessful, please try another search";
            })
            .then(result => {
             console.log(result);
            return result.json();
            })
            .then(data => {
                 console.log(data);
                const today = data.consolidated_weather[0];
                console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}. The weather state is ${today.weather_state_name}`);

				reportMessage = `Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}. The weather state is ${today.weather_state_name}`;

				document.getElementById("report").innerHTML = reportMessage;



            });
          
        }
        
        //getWeather("hong kong");



   

  document.getElementById("submit")
        .addEventListener('click', (event) => {
            event.preventDefault();
            console.log('gogogo');
            getWeather(document.getElementById("searchbox").value);
        });

  











