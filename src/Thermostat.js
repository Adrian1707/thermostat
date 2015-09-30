function Thermostat() {
  this.temperature = 20;
  this.tempmin = 11;
  this.powerSave = 'ON';
  this.powerSaveMaxOn = 25;
  this.powerSaveMaxOff = 32;
}

Thermostat.prototype.upButton = function() {

  if (this.powerSave == 'ON' && this.temperature >= this.powerSaveMaxOn) {
    throw 'Temperature cannot be set above 25 degrees when power saving mode is on';
  }

  if (this.powerSave == 'OFF' && this.temperature >= this.powerSaveMaxOff) {
    throw 'Temperature cannot be set above 32 degrees when power saving mode is off';
  }

  this.temperature += 1;
  this.displayTemp();
};

Thermostat.prototype.downButton = function() {
  if (this.temperature < this.tempmin) {
    throw 'Temperature cannot be set below 10 degrees';
  }

  this.temperature -= 1;
  this.displayTemp();
};

Thermostat.prototype.powerSaveOff = function() {
  this.powerSave = 'OFF';
};

Thermostat.prototype.powerSaveOn = function() {
  this.powerSave = 'ON';
};

Thermostat.prototype.resetButton = function() {
  this.temperature = 20;
  this.displayTemp();
};

Thermostat.prototype.displayTemp = function() {
  document.getElementById("temp").innerHTML = this.temperature + " degrees";
};

t = new Thermostat;
