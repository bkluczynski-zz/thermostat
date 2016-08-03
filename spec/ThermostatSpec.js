describe('A thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases the temperature', function(){
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the temperature', function(){
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19); 
  });

  it('min temperature is 10 degress', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    };
    expect(thermostat.getCurrentTemperature()).not.toBeLessThan(10);
  });

  it('max temperature is 25 degrees, when power saving mode is on', function() {
    thermostat.isPowerSavingModeOn();
    expect(thermostat.getCurrentTemperature()).toBeLessThan(25);
  });

});

