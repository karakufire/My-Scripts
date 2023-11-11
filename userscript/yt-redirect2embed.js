// ==UserScript==
// @name         yt-redirect2embed
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redirect watch url to embed url.
// @author       karakufire
// @match        https://www.youtube.com/*
// @run-at       document-start
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// ==/UserScript==

(function() {
    'use strict';
    if(document.location.toString().match(/https?:\/\/www\.youtube\.com\/watch\?/g)){
        const query = document.location.toString().match(/(?<=watch\?)(.+)/g)[0].split("&").map(s => s.split("=")).reduce((acc, v) => ({...acc, [v[0]]: v[1]}), {});
        document.location.replace(`https://www.youtube.com/embed/${query['v']}`);
    }
})();
