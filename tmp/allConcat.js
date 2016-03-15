$(function() {
  $('#currentTime').text("The current time is: " + moment().format('h:mm:ss a'));
  setInterval(updateClock, 1000);
});

function updateClock() {
  $('#currentTime').text("The current time is: " + moment().format('h:mm:ss a'));
}
