'use strict';

function Thermostat(){
  this._temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;

}
Thermostat.prototype.getCurrentTemperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function() {
  this._temperature += 1;
};

Thermostat.prototype.isMinimumTemperature = function(){
  return this._temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()){
    return;
  }else{
  this._temperature -= 1;
  };
};
