require('contour-fw')({
    basePath   : __dirname
});

global.Service = require("./service/");

var serverConfig = require(__dirname + '/config/server-config.js');

serverConfig.frontend.web.setIsCurrent(true);


var bootStrap = new Service.Core.Bootstrap;
bootStrap.setConfig({
    servers : serverConfig
});

bootStrap.run();