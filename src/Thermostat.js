'use strict';

function Thermostat(){
  this._temp = 20;

}
Thermostat.prototype.defaultTemp = function(){
  return this._temp;
};

Thermostat.prototype.increaseTemp = function(degrees){
  return this._temp += degrees;
};
