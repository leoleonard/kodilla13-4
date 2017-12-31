var os = require('os');
var uptime = os.uptime();


function timeMin() {
  return (uptime / 60).toFixed(0), "min";
};


function timeHour() {
  return (uptime /360).toFixed(0), "h";
};


exports.print = timeMin;
exports.print = timeHour;
