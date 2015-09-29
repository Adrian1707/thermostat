describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should begin with a temperature of 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('should increase temperature when up button is pressed', function() {
    thermostat.upButton();
    expect(thermostat.temperature).toEqual(21);
  });

  it('should decrease temperature when down button is pressed', function() {
    thermostat.downButton();
    expect(thermostat.temperature).toEqual(19);
  });

  it('should not drop below 10 degrees', function() {
    for (i = 0; i < 11; i++) {
      thermostat.downButton();
    }
    expect(function() {thermostat.downButton(); }).toThrow("Temperature cannot be set below 10 degrees");
  });

  it('should have a maximum temperature of 25 degrees when power save mode is on', function() {
    for (i = 0; i < 5; i++) {
    thermostat.upButton();
    }
    expect(function() { thermostat.upButton(); }).toThrow("Temperature cannot be set above 25 degrees when power saving mode is on");
  });

  it('should have a maximum temperature of 32 degrees when power save mode is off', function() {
    thermostat.powerSaveOff();
    for (i = 0; i < 12; i++) {
      thermostat.upButton();
    }
    expect(function() { thermostat.upButton(); }).toThrow("Temperature cannot be set above 32 degrees when power saving mode is off");
  });

  it('can reset the temperature to 20 by hitting the reset button', function() {
    thermostat.resetButton();
    expect(thermostat.temperature).toEqual(20)
  });

  it('should turn power save on when powerSaveOn function is called', function() {
    thermostat.powerSaveOn();
    expect(thermostat.powerSave).toBe("ON")
  });

  it('should turn power save off when powerSaveOff function is called', function() {
    thermostat.powerSaveOff();
    expect(thermostat.powerSave).toBe("OFF")
  });

});
