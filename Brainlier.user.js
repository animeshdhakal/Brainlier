// ==UserScript==
// @name         Brainlier
// @namespace    https://discord.gg/8sKGWD7BTc
// @version      2.1
// @description  Unlocks Brainly's questions and textbook answers.
// @author       Databones
// @icon         https://raw.githubusercontent.com/Databones/Brainlier/main/IER.png
// @match        *://brainly.in/*
// @match        *://brainly.com/*
// @match        *://brainly.ro/*
// @match        *://brainly.pl/*
// @match        *://brainly.ph/*
// @match        *://brainly.lat/*
// @match        *://brainly.com.br/*
// @match        *://brainly.co.id/*
// @match        *://brainly.ro/*
// @match        *://nosdevoirs.fr/*
// @match        *://znanija.com/*
// @run-at       document-start
// ==/UserScript==

localStorage.setItem("textbookMetering/unlogged/answerViews","-9999");const itemsToRemove=["social-qa/telemetry","simple-funnel-name","flexible-funnel-cycle-data",];itemsToRemove.forEach(e=>{localStorage.getItem(e)&&localStorage.removeItem(e)});const versionFileURL="https://raw.githubusercontent.com/Databones/Brainlier/main/version",redirectURL="https://github.com/Databones/Brainlier/raw/main/Brainlier.user.js";function fetchRemoteVersion(){fetch("https://raw.githubusercontent.com/Databones/Brainlier/main/version").then(e=>e.text()).then(e=>{let t=GM_info.script.version;e.trim()!==t.trim()&&(window.location.href="https://github.com/Databones/Brainlier/raw/main/Brainlier.user.js")})}
