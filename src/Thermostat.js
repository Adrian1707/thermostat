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
  changeColor();
};

Thermostat.prototype.downButton = function() {
  if (this.temperature < this.tempmin) {
    throw 'Temperature cannot be set below 10 degrees';
  }

  this.temperature -= 1;
  changeColor();
};

Thermostat.prototype.powerSaveOff = function() {
  this.powerSave = 'OFF';
  changeColor();
};

Thermostat.prototype.powerSaveOn = function() {
  if (this.temperature > this.powerSaveMaxOn) {
    this.temperature = this.powerSaveMaxOn
  }
  this.powerSave = 'ON';
  changeColor();
};

Thermostat.prototype.resetButton = function() {
  this.temperature = 20;
  changeColor();
};

Thermostat.prototype.changeColor = function() {
  if (this.temperature < 18) {
    document.getElementById('temp').style.color = '#FF0000';
  }
  else if (this.temperature > 17 && < 24 ) {
    document.getElementById('temp').style.color = '#0000FF';
  }
  else {
    document.getElementById('temp').style.color = '#008000';
  }
};




t = new Thermostat;
