// ==UserScript==
// @version     0.0.1
// @name        Customizer autohotkey
// @namespace https://raw.githubusercontent.com/hixr
// @match       *://autohotkey.com/*
// @grant       none
// @noframes
// ==/UserScript==
(function ahw() {
    'use strict';
    window.onload = function () { jQuery(".wrapper").css("min-width", "100%") };
}());

