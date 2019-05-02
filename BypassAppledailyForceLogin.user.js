// ==UserScript==
// @name         Bypass appledaily force login
// @namespace    https://github.com/hkaden/Bypass-appledaily-force-login-script
// @version      0.1
// @description  Bypass appledaily force login
// @author       Kaden
// @include      *://*.*.appledaily.com/*
// @downloadURL	https://github.com/hkaden/Bypass-appledaily-force-login-script/raw/master/BypassAppledailyForceLogin.user.js
// @updateURL	https://github.com/hkaden/Bypass-appledaily-force-login-script/raw/master/BypassAppledailyForceLogin.user.js
// @icon https://cdn6.aptoide.com/imgs/f/7/0/f706a16d46c5f8ec790565b2109cef95_icon.png?w=32
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var script = document.createElement("script");
    script.textContent = "setInterval(function(){ OMOSubscFlag = false })";
    document.getElementsByTagName("head")[0].appendChild(script);
})();
