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

  describe('when power saving is on', function(){
    it('has a max temperature of 25 degrees', function(){
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  it('switches the power mode off', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toEqual(false)
  });

  it('switches the power mode back on', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toEqual(false)
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toEqual(true)

  });

  describe('when power saving is off', function() {
    it('has a maximum temperature of 32 degrees', function(){
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });





});
