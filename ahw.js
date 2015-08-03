// ==UserScript==
// @version     0.0.4
// @name        Customizer autohotkey
// @match       *://autohotkey.com/*
// @grant       none
// @noframes
// ==/UserScript==
(function ahw() {
    'use strict';
    function runMe() {
        alert('ok');
        jQuery(".wrapper").css("min-width", "100%");
    }
    window.onload = function () { document.body.click(runMe) };
}());

