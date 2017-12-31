var os = require('os');
var uptime = os.uptime();

function timeConverter(seconds) {
  var numberOfHours = Math.floor(seconds/3600);
  var numberOfMinutes = Math.floor((seconds % 3600)/ 60);
  var numberOfSeconds = Math.floor(((seconds % 3600)% 60) % 60);

  return (numberOfHours + " hours, " + numberOfMinutes + " minutes, " + numberOfSeconds + " seconds.");

}

exports.timeConverter = timeConverter;
