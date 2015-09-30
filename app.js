var thermostat = new Thermostat();

$(document).ready(function(){

  $("#upButton").click(function(){
    thermostat.upButton();
  });

  $("#downButton").click(function(){
    thermostat.downButton();
  });

  $("#resetButton").click(function(){
    thermostat.resetButton();
  });

  $("#powerSaveOn").click(function(){
    thermostat.powerSaveOn();
  });

  $("#powerSaveOff").click(function(){
    thermostat.powerSaveOff();
  });

});
