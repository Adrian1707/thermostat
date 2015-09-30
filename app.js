var thermostat = new Thermostat();

$(document).ready(function(){

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

});
