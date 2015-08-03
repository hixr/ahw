// ==UserScript==
// @version     0.0.1
// @name        Customizer
// @match       *://ahkscript.org/*
// @run-at      document-start
// @grant       none
// @noframes
// ==/UserScript==
(function ahw() {
    'use strict';
    window.onload = function () { jQuery(".wrapper").css("min-width", "100%") };
}());

