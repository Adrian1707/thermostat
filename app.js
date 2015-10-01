$(document).ready(function(){

  thermostat = new Thermostat;

  $("#upButton").click(function(){
    thermostat.upButton();
    $('#temp').text(thermostat.temperature);
  });

  $("#downButton").click(function(){
    thermostat.downButton();
    $('#temp').text(thermostat.temperature);
  });

  $("#resetButton").click(function(){
    thermostat.resetButton();
    $('#temp').text(thermostat.temperature);
  });

  $("#powerSaveOn").click(function(){
    thermostat.powerSaveOn();
    $('#temp').text(thermostat.temperature);
  });

  $("#powerSaveOff").click(function(){
    thermostat.powerSaveOff();
    $('#temp').text(thermostat.temperature);
  });

  var cityName = document.getElementById('weather_city');

function fireAjax(data) {

  $.ajax({
   url: data.url,
   success: function(data){
   $('#city').html("Current city: " + (data.name));
   $('#weather_temp').html('Current Temperature    ' + (data.main.temp - 273).toFixed(1));
   $('#weather_humid').html("Humidity is " + (data.main.humidity));
  }
 });
}

$("#weather_city").submit(function(event) {
  var newURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + $('#city_weather').val();
  fireAjax({url:newURL});
  event.preventDefault();
});

});
