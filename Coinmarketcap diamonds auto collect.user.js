// ==UserScript==
// @name Coinmarketcap diamonds auto collect
// @version 0.1 TEST
// @author Jokerank
// @description Automatically collect diamonds
// @match https://coinmarketcap.com/*
// @license MIT
// @grant none
// ==/UserScript==
window.onload = function(){
let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
let claiming = false;
if (MutationObserver) console.log('Auto claimer is enabled.');
let observer = new MutationObserver(e => {
    let bonus = Array.from(document.querySelectorAll('button'))
  .find(el => el.textContent === 'Collect Diamonds');
    if (bonus && !claiming) {
        bonus.click();
        setTimeout(function(){
        }, 1000);
        Array.from(document.querySelectorAll('button'))
  .find(el => el.textContent === 'Close').click();
        document.location.reload();
        let date = new Date();
        claiming = true;
        setTimeout(() => {
            console.log('Claimed at '+date);
            claiming = false;
        }, Math.random() * 1000 + 2000);
    }
});
observer.observe(document.body, {childList: true, subtree: true});
};
