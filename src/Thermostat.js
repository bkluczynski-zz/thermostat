'use strict';

function Thermostat(){
  this._temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;

  this.POWER_MODE_ON = 25;
  this.POWER_MODE_OFF = 32;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this._temperature;
}

Thermostat.prototype.up = function() {
  if (this.isPowerSavingModeOn) {
    if (this._temperature === this.POWER_MODE_ON) {
      return;
    } else {
      this._temperature += 1;
    }
  } else {
  this._temperature += 1;
  }
}

Thermostat.prototype.isMinimumTemperature = function(){
  return this._temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()){
    return;
  } else {
    this._temperature -= 1;
  }
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}
