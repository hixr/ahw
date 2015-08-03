// ==UserScript==
// @version     0.0.2
// @name        Customizer autohotkey
// @match       *://autohotkey.com/*
// @grant       none
// @noframes
// ==/UserScript==
(function ahw() {
    'use strict';
    window.onload = function () { alert('ok'); jQuery(".wrapper").css("min-width", "100%") };
}());

