// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://steamcommunity.com/profiles/*/myworkshopfiles/*browsefilter=mysubscriptions*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

//function FavAndUnsub()
// {
//     let favouriteButtons = document.getElementsByClassName("general_btn favorite");
//     let subscribedButtons = document.getElementsByClassName("subscribeOption subscribeOptionSubscribed");

//     for(let i=0; i < favouriteButtons.length; i++)
//     {
//         var favButton = favouriteButtons[i];
//         var subButton = subscribedButtons[i];
//         if(!favButton.classList.contains("toggled"))
//         {
//             favButton.click();
//         }

//         subButton.click();
//     }
// }

(function() {
    'use strict';
    const script = document.createElement('script');
    script.innerHTML = "function FavAndUnsub(){let favouriteButtons = document.getElementsByClassName('general_btn favorite');let subscribedButtons = document.getElementsByClassName('subscribeOption subscribeOptionSubscribed');for(let i=0; i < favouriteButtons.length; i++){var favButton = favouriteButtons[i];var subButton = subscribedButtons[i];if(!favButton.classList.contains('toggled')){favButton.click(); }subButton.click();}}";
    document.head.prepend(script);

    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ".favButton  { position:fixed;width:60px;height:60px;bottom:40px;right:40px;background-color:#0C9;color:#FFF;border-radius:50px;text-align:center;box-shadow: 2px 2px 3px #999;z-index: 9999;} .favButton:hover{background-color:#04420c; cursor: pointer}";
    document.head.appendChild(style);
    const btn = document.createElement("button");
    btn.classList.add("favButton");
    btn.setAttribute("onclick", "FavAndUnsub()");
    document.querySelector("body").prepend(btn);

})();