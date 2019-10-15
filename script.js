$.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=Tustin&units=imperial&APPID=c3462dc0c5bba887e61b7dbf6dd8fbf0", 
    function(data)
    {
        console.log(data);

        var picture = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        
        var temp = "Current: " + Math.round(data.main.temp);
        var low = "Low: " + Math.round(data.main.temp_min);
        var high = "High: " + Math.round(data.main.temp_max);
        var condition = data.weather[0].main;
        
        $('.picture').attr('src', picture);
        $('.condition').append(condition);
        $('.temp').append(temp);
        $('.tempDetails').append(low);
        $('.tempDetails').append(high);
    }
);