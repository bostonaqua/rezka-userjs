// ==UserScript==
// @name            HDRezka Player Ads Disabler
// @description     Disables ads in the video player on the HDRezka website
// @description:ru  Отключает рекламу в видео плеере на сайте HDRezka
// @copyright       2019, BostonAqua (https://openuserjs.org/users/BostonAqua)
// @license         GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @icon            https://rezka.ag/templates/hdrezka/images/favicon.ico
// @homepageURL     https://rezka.ag/
// @version         1.0.1
// @match           https://streamguard.cc/*
// @grant none
// ==/UserScript==

// ==OpenUserJS==
// @author          BostonAqua
// ==/OpenUserJS==

(function () {
  'use strict';
  if (window.top === window.self) {}
  else {
    video_balancer.onPlayButtonClick = function () {
      document.getElementById("play_button").remove();
      video_balancer.adv_loader = function () {
        console.log("yahoo");
      };
      video_balancer.onAdvLoaderDone();
    };
    document.getElementById("play_button").remove();
    video_balancer.createPlayButton();
  }
})();
