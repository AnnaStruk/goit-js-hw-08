const t=document.getElementById("start-btn"),e=document.getElementById("stop-btn");let n;t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,n=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.2e823547.js.map
