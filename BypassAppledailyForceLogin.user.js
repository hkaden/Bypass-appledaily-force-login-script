// ==UserScript==
// @name         Bypass appledaily force login
// @namespace    https://github.com/hkaden/Bypass-appledaily-force-login-script
// @version      0.1
// @description  Bypass appledaily force login
// @author       Kaden
// @include      *://*.*.appledaily.com/*
// @downloadURL	https://github.com/hkaden/Bypass-appledaily-force-login-script/raw/master/BypassAppledailyForceLogin.user.js
// @updateURL	https://github.com/hkaden/Bypass-appledaily-force-login-script/raw/master/BypassAppledailyForceLogin.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var script = document.createElement("script");
    script.textContent = "setInterval(function(){ OMOSubscFlag = false })";
    document.getElementsByTagName("head")[0].appendChild(script);
})();
