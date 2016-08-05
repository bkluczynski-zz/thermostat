$(document).ready(function() {
  var thermostat = new Thermostat();
    $.getJSON('http://localhost:4567/temperature',function(data){
      thermostat.temperature = data.temp;
      if (data.psm == 'true') {
        thermostat.switchPowerSavingModeOn();
      }else{
        thermostat.switchPowerSavingModeOff();
      }
      $('#current-city').val(data.city);
      displayWeather(data.city);
      updateTemperature();
      updatePowerMode();
    })

  $('#temperature-up').on('click', function(){
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').on('click', function(){
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-rest').on('click', function(){
    thermostat.resetTemperature();
    updateTemperature();
  });

  $("#powersaving-on").on('click', function(){
    thermostat.switchPowerSavingModeOn();
    $("#power-saving-status").text('on')
    updateTemperature();
  });

  $('#powersaving-off').on('click', function(){
    thermostat.switchPowerSavingModeOff();
    updatePowerMode();
    updateTemperature();
  });



  function displayWeather(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=3500f4d310301a1bef092796fd72bc20';
    var units = '&units=metric';
    $.get(url + token + units, function(data){
      $('#current-weather').text(data.main.temp);
    });

  }

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    var requestData = {
      city: city,
    };
    $.post('http://localhost:4567/temperature', requestData, function(){});
    displayWeather(city);
  })


  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
    $.post('http://localhost:4567/temperature',{ temp: thermostat.temperature, psm:thermostat.isPowerSavingModeOn(),function(){});
  }

  function updatePowerMode() {
    if (thermostat.isPowerSavingModeOn()) {
      $('#power-saving-status').text('on');
    }else {
      $('#power-saving-status').text('off')
    }
  }






});
