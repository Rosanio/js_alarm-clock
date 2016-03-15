var updateClock = require('./../js/update-clock.js').updateClock;
var alarmTime;
$(function() {
  $('#currentTime').text("The current time is: " + moment().format('h:mm:ss a'));
  setInterval(updateClock, 1000);
  $('#alarmSet').submit(function(event){
    event.preventDefault();
    alarmTime = $('#alarmTime').val();
    $('#alarms').append(alarmTime);
    setInterval(function() {
      var currentTime = moment().format("h:mm");
      console.log(currentTime);
      console.log(alarmTime);
      if(currentTime === alarmTime) {
        $('#alarmDiv').show();
      } else {
        $('#alarmDiv').hide();
      }
    }, 1000);
  })
});
