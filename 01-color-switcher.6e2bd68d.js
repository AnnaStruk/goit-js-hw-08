!function(){var t,e=document.getElementById("start-btn"),n=document.getElementById("stop-btn");e.addEventListener("click",(function(){e.disabled=!0,n.disabled=!1,t=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t}),1e3)})),n.addEventListener("click",(function(){e.disabled=!1,n.disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.6e2bd68d.js.map
