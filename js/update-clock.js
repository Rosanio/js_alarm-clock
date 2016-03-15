exports.updateClock = function() {
  var currentTime = moment();
  $('#currentTime').text("The current time is: " + currentTime.format('h:mm:ss a'));
  return currentTime;
}
