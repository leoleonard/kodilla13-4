var os = require('os');
var time = require('../modules/time.js');
var colors = require('colors');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.grey, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.magenta, cpu);
    console.log('Uptime: ~'.green, time.timeConverter(uptime));
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;



  //console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
