// ==UserScript==
// @name         neteaseHTML5
// @description  Play Videos with html5 on 163.com
// @include      http://v.163.com/*
// @version      2.1
// @license      GPLv3
// @author       LiuLang
// @email        gsushzhsosgsu@gmail.com
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @run-at       document-end
// ==/UserScript==

var uw = unsafeWindow,
    log = uw.console.log,
    error = uw.console.error;

