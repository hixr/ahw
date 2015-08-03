// ==UserScript==
// @version     0.0.6
// @name        Customizer autohotkey
// @match       *://www.autohotkey.com/*
// @grant       none
// @noframes
// ==/UserScript==
(function() {
    'use strict';
    function runMe() {
        jQuery(".wrapper").css("min-width", "100%");
    }
    window.onload = function () { runMe(); };
}());

