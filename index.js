"use strict";

var http = require("http");
var MobileDetect = require('mobile-detect');

var cfg = require('./config/redirections.js');

// Check if device supported by Mobile-Detect framework?
// https://github.com/serbanghita/Mobile-Detect/blob/2.8.26/Mobile_Detect.php#L474
function get_url_with_user_agent(keyword, user_agent) {
    var url = cfg.fallback_url;

    if (cfg.keywords[keyword].hasOwnProperty(user_agent)) {
        url = cfg.keywords[keyword][user_agent];
    } else if (cfg.keywords[keyword]['default'] !== undefined) {
        url = cfg.keywords[keyword]['default'];
    }
    return url;
}

// create http server
var server = http.createServer(function (req, res) {
    var ua = new MobileDetect(req.headers['user-agent']),
        keyword = req.url.slice(1),
        url = cfg.fallback_url;

    if (keyword.length >= 1 && cfg.keywords.hasOwnProperty(keyword)) {
        url = get_url_with_user_agent(keyword, ua.os());
    }

    console.log("req: %s, os: %s, dst: %s", req.url, ua.os(), url);

    res.writeHead(301, {
        'Location': url,
        'Expires': new Date().toGMTString()
    });

    res.end();
});

// start http server
server.listen(8080);
