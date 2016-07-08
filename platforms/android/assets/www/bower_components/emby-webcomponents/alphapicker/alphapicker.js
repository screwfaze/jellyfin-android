define(["focusManager","css!./style.css","clearButtonStyle","paper-icon-button-light","material-icons"],function(e){function t(){var t=this.querySelector(".selected");t?e.focus(t):e.autoFocus(this,!0)}function a(e){return'<button data-value="'+e+'" class="clearButton alphaPickerButton">'+e+"</button>"}function n(e,n){e.classList.add("alphaPicker"),e.classList.add("focuscontainer-x");var i,o="";o+='<div class="alphaPickerRow">',"keyboard"==n.mode?o+='<button data-value=" " is="paper-icon-button-light" class="alphaPickerButton autoSize">                <i class="md-icon">&#xE256;</i>            </button>':(i=["#"],o+=i.map(a).join("")),i=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],o+=i.map(a).join(""),"keyboard"==n.mode?(o+='<button data-value="backspace" is="paper-icon-button-light" class="alphaPickerButton autoSize">                <i class="md-icon">&#xE14A;</i>            </button>',o+="</div>",i=["0","1","2","3","4","5","6","7","8","9"],o+='<div class="alphaPickerRow">',o+="<br/>",o+=i.map(a).join(""),o+="</div>"):o+="</div>",e.innerHTML=o,e.classList.add("focusable"),e.focus=t}function i(t){function a(){v=null,p.value(r)}function i(){if(f=null,document.activeElement==d){var e=d.getAttribute("data-value");p.value(e,!0)}}function o(e,t){for(;!e.classList||!e.classList.contains(t);)if(e=e.parentNode,!e)return null;return e}function c(e){var t=o(e.target,"alphaPickerButton");if(t){var a=t.getAttribute("data-value");m.dispatchEvent(new CustomEvent("alphavalueclicked",{detail:{value:a}}))}}function l(e){var t=o(e.target,"alphaPickerButton");if(t){var a=t.getAttribute("data-value");k==a.toUpperCase()?p.value(null,!0):p.value(a,!0)}}function u(e){f&&(clearTimeout(f),f=null);var t=o(e.target,"alphaPickerButton");t&&(d=t,f=setTimeout(i,100))}function s(e){var t=o(e.target,h);if(t){var n=t.getAttribute("data-prefix");n&&n.length&&(r=n[0],v&&clearTimeout(v),v=setTimeout(a,100))}}var r,v,d,f,p=this,m=t.element,b=t.itemsContainer,h=t.itemClass;p.enabled=function(e){e?(b&&b.addEventListener("focus",s,!0),"keyboard"==t.mode&&m.addEventListener("click",c),"click"!==t.valueChangeEvent?m.addEventListener("focus",u,!0):m.addEventListener("click",l)):(b&&b.removeEventListener("focus",s,!0),m.removeEventListener("click",c),m.removeEventListener("focus",u,!0),m.removeEventListener("click",l))},p.on=function(e,t){m.addEventListener(e,t)},p.off=function(e,t){m.removeEventListener(e,t)},p.destroy=function(){p.enabled(!1),m.classList.remove("focuscontainer-x")},p.visible=function(e){m.style.visibility=e?"visible":"hidden"};var k;p.value=function(e,a){var n,i;return void 0!==e&&(null!=e?(e=e.toUpperCase(),k=e,"keyboard"!=t.mode&&(i=m.querySelector(".selected"),n=m.querySelector(".alphaPickerButton[data-value='"+e+"']"),n&&n!=i&&n.classList.add("selected"),i&&i!=n&&i.classList.remove("selected"))):(k=e,i=m.querySelector(".selected"),i&&i.classList.remove("selected"))),a&&m.dispatchEvent(new CustomEvent("alphavaluechanged",{detail:{value:e}})),k},p.values=function(){for(var e=m.querySelectorAll(".alphaPickerButton"),t=[],a=0,n=e.length;n>a;a++)t.push(e[a].getAttribute("data-value"));return t},p.focus=function(){e.autoFocus(m,!0)},n(m,t),p.enabled(!0),p.visible(!0)}return i});