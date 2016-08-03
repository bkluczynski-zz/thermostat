describe('A thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.defaultTemp()).toEqual(20);
  });
  it('increases the temperature', function(){
    expect(thermostat.increaseTemp(5)).toEqual(25);
  });

});




// You can increase the temperature with the up button
