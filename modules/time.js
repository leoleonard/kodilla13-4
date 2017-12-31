var os = require('os');
var uptime = os.uptime();

function timeConverter(uptime) {
  var numberOfHours = Math.floor(uptime/3600);
  var numberOfMinutes = Math.floor((uptime % 3600)/ 60);
  var numberOfSeconds = Math.floor(((uptime % 3600)% 60) % 60);

  return (numberOfHours + " hours, " + numberOfMinutes + " minutes, " + numberOfSeconds + " seconds.");

}

exports.timeConverter = timeConverter;
