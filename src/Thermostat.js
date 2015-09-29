function Thermostat() {
  this.temperature = 20;
  this.tempmin = 10;
  this.powerSave = 'ON';
  this.powerSaveMaxOn = 25;
  this.powerSaveMaxOff = 32;
}

Thermostat.prototype.upButton = function() {

  if (this.powerSave == 'ON'  && this.temperature >= this.powerSaveMaxOn) {
    throw 'Temperature cannot be set above 25 degrees when power saving mode is on';
  }

  if (this.powerSave == 'OFF' && this.temperature >= this.powerSaveMaxOff) {
    throw 'Temperature cannot be set above 32 degrees when power saving mode is off';
  }

  return this.temperature += 1;
};

Thermostat.prototype.downButton = function() {
  if (this.temperature < this.tempmin) {
    throw 'Temperature cannot be set below 10 degrees';
  }

  return this.temperature -= 1;
};

Thermostat.prototype.powerSaveOff = function() {
  return this.powerSave = 'OFF';
};

Thermostat.prototype.powerSaveOn = function() {
  return this.powerSave = 'ON';
};

Thermostat.prototype.resetButton = function() {
  return this.temperature = 20;
};

t = new Thermostat;
