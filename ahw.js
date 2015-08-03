// ==UserScript==
// @version     0.0.5
// @name        Customizer autohotkey
// @match       *://www.autohotkey.com/*
// @grant       none
// @noframes
// ==/UserScript==
(function ahw() {
    'use strict';
    function runMe() {
        jQuery(".wrapper").css("min-width", "100%");
    }
    window.onload = function () { document.body.click(runMe) };
}());

