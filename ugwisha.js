(()=>{/* sheep */
const{parseEvents:e,getSchedule:t,getNote:n,saveScheduleData:s,prepareScheduleData:o,SCHEDULE_DATA_KEY:a,SCHEDULES_CALENDAR_ID:i,EVENTS_CALENDAR_ID:d,CALENDAR_KEYWORDS:r,GOOGLE_API_KEY:c,FIRST_DAY:l,LAST_DAY:u,DEFAULT_NAMES:p,DEFAULT_COLOURS:m,THEME_COLOUR:h,DEFAULT_FAVICON_URL:g,APP_NAME:w,PERIOD_OPTION_PREFIX:f,UPDATER_URL:y}=window.ugwishaOptions,v=[],E=[e=>window.isOnline=e],b={};try{window.storage=localStorage}catch(e){window.storage={getItem:e=>storage[e],setItem:(e,t)=>storage[e]=t,removeItem:e=>delete storage[e]}}try{window.options=JSON.parse(storage.getItem("[ugwisha] options")),"object"==typeof window.options&&null!==window.options||(window.options={})}catch(e){window.options={}}function L(){storage.setItem("[ugwisha] options",JSON.stringify(window.options))}const k={};window.location.search&&window.location.search.slice(1).split("&").forEach(e=>{const t=e.indexOf("=");~t?k[e.slice(0,t)]=e.slice(t+1):k[e]=!0});const C="jan. feb. mar. apr. may jun. jul. aug. sept. oct. nov. dec.".split(" "),T=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];let I,D,x;function S(){!function(e){j(q),e.alternate&&q.appendChild(R("p",{classes:"alternate-note",html:"This is an alternate schedule"}));if(e.noSchool)return void q.appendChild(R("div",{classes:"no-school",children:[R("span",{html:"No school!"})],styles:{backgroundImage:`url('./images/sheep/${function(e){const t=e/864e5%2==0,n=+e.toString(7)[9];return z[(t?0:7)+n]}(e.date.getTime())}')`}}));J={},V={},q.appendChild(M(e.map(e=>{const t=R("input",{classes:"period-name",attributes:{type:"text",placeholder:p[e.period],value:$(e.period)},listeners:{change(){_(e.period,t.value),L(),pe(),J[e.period].forEach(e=>e!==t&&(e.value=t.value))},focus(){te.parentNode&&te.parentNode.removeChild(te),t.parentNode.insertBefore(te,t.nextElementSibling),G.value="#"+(H(e.period)||m[e.period]||"000"),G.disabled=X.checked=null===H(e.period),ee=e.period},blur:K}});J[e.period]||(J[e.period]=[]),J[e.period].push(t);const s=n(e),o=R("div",{classes:["period",null===H(e.period)?"transparent":void 0],styles:{"--colour":null===H(e.period)?void 0:"#"+H(e.period)},children:[t,R("span",{classes:"time",html:P(e.start)+" &ndash; "+P(e.end)}),R("span",{classes:"duration",html:F(e.end-e.start,!1)+" long"}),s?R("span",{classes:"note",html:s}):void 0]});return V[e.period]||(V[e.period]=[]),V[e.period].push(o),o})))}(t(A));const e=A.getUTCDay(),s=[];for(let n=0;n<7;n++)s.push(t(new Date(A.getTime()-864e5*(e-n))));var o,a;o=s,a=e,W.forEach((e,t)=>{a===t?e.wrapper.classList.add("week-preview-today"):e.wrapper.classList.remove("week-preview-today"),j(e.content);const n=o[t];e.date=n.date,e.content.appendChild(M([...n.noSchool?[]:n.map(e=>R("span",{classes:["week-preview-cell","week-preview-period",null===H(e.period)?"week-preview-transparent":void 0],styles:{backgroundColor:null===H(e.period)?void 0:"#"+H(e.period)},attributes:{title:$(e.period),"aria-label":$(e.period)}})),n.alternate?R("span",{classes:"week-preview-cell week-preview-alternate",html:"*",attributes:{title:"Alternate schedule","aria-label":"This is an alternate schedule"}}):void 0]))})}function U(){S(),xe.innerHTML=C[A.getUTCMonth()]+" "+A.getUTCDate(),Se.innerHTML=T[A.getUTCDay()];const e=A.getTime();D.disabled=e<=l,x.disabled=e>=u,I.href=(k["no-sw"]?"?no-sw&":"?")+"day="+A.toISOString().slice(0,10),be()}let A=k.day?new Date(k.day):O();function O(){return new Date(Date.UTC(...(e=>[e.getFullYear(),e.getMonth(),e.getDate()])(new Date)))}function B(e){return Array.isArray(e)?e.filter(e=>void 0!==e&&null!==e):(Object.keys(e).forEach(t=>(void 0===e[t]||null===e[t])&&delete e[t]),e)}function R(e,t={}){const n=document.createElement(e);return t.classes&&("string"==typeof t.classes?n.className=t.classes:B(t.classes).forEach(e=>n.classList.add(e))),t.children&&B(t.children).forEach(e=>n.appendChild("object"!=typeof e?document.createTextNode(e):e)),t.attributes&&Object.keys(B(t.attributes)).forEach(e=>{void 0!==n[e]?n[e]=t.attributes[e]:n.setAttribute(e,t.attributes[e])}),t.dataset&&Object.keys(B(t.dataset)).forEach(e=>{n.dataset[e]=t.dataset[e]}),t.data&&Object.keys(B(t.data)).forEach(e=>{n.dataset[e]=t.data[e]}),t.listeners&&Object.keys(B(t.listeners)).forEach(e=>{n.addEventListener(e,t.listeners[e])}),t.styles&&Object.keys(B(t.styles)).forEach(e=>{"--"===e.slice(0,2)?n.style.setProperty(e,t.styles[e]):n.style[e]=t.styles[e]}),t.html&&(n.innerHTML=t.html),t.ripples&&qe(n),n}function M(e){const t=document.createDocumentFragment();return B(e).forEach(e=>t.appendChild(e)),t}function j(e){for(;e.firstChild;)e.removeChild(e.firstChild)}document.addEventListener("DOMContentLoaded",()=>{I=document.getElementById("date-wrapper"),D=document.getElementById("back-day"),x=document.getElementById("forth-day");const e=Array.from(document.getElementsByClassName("toggle-setting"));e.forEach(e=>{const t=e.dataset.option;void 0===options[t]&&(options[t]="true"===e.dataset.default)}),v.forEach(e=>e()),UgwishaExtensions.start();let t=!1;document.addEventListener("keydown",e=>{9!==e.keyCode&&13!==e.keyCode||(document.body.classList.add("tab-focus"),t=!0)}),document.addEventListener("keyup",e=>{9!==e.keyCode&&13!==e.keyCode||(t=!1)}),document.addEventListener("focusin",()=>{t||document.body.classList.remove("tab-focus")});const n=document.getElementById("psa"),s=document.getElementById("psa-content"),o=document.getElementById("psa-close"),a=document.getElementById("last-psa");fetch("./psa.html?v="+Date.now()).then(e=>e.text()).then(e=>{s.innerHTML=e;const t=e.slice(6,9);options.lastPSA&&options.lastPSA!==t&&(n.classList.remove("hidden"),o.focus(),document.body.style.overflow="hidden"),options.lastPSA||(options.lastPSA=t,L()),o.addEventListener("click",()=>{n.classList.add("hidden"),options.lastPSA!==t&&(options.lastPSA=t,L(),!Ae&&e.includes("[REFETCH]")&&(Ae=!0,Te().then(S))),a.focus(),document.body.style.overflow=null}),a.addEventListener("click",()=>{n.classList.remove("hidden"),o.focus(),document.body.style.overflow="hidden"}),E.forEach(e=>e(!0))}).catch(()=>{document.getElementById("offline-msg").classList.remove("hidden");const e=document.getElementById("reload");e.tabindex=0,e.addEventListener("click",e=>{window.location.reload(),e.preventDefault()}),a.disabled=!0,options.natureLoaded||(document.getElementById("nature-back").disabled=!0),E.forEach(e=>e(!1))});let i=window.innerWidth,d=window.innerHeight;window.addEventListener("resize",()=>{i=window.innerWidth,d=window.innerHeight});const r=document.getElementById("jump");let c=!1;document.addEventListener("wheel",()=>{window.cancelAnimationFrame(c),c=!1},{passive:!0}),document.addEventListener("touchstart",()=>{window.cancelAnimationFrame(c),c=!1},{passive:!0}),document.addEventListener("scroll",()=>{window.scrollY>d/3?r.classList.add("up"):r.classList.remove("up")}),r.addEventListener("click",()=>{c&&window.cancelAnimationFrame(c),function(e){let t=window.scrollY;!function n(){Math.abs(t-e)>1?(t+=(e-t)/5,window.scrollTo(0,t),c=window.requestAnimationFrame(n)):(window.scrollTo(0,e),c=!1)}()}(r.classList.contains("up")?0:d-50)});const l=document.getElementById("settings"),u=document.getElementById("toggle-settings"),p=document.createTextNode("show settings");u.appendChild(p),u.addEventListener("click",()=>{l.classList.toggle("hidden"),p.nodeValue=l.classList.contains("hidden")?"show settings":"hide settings"});const m=document.getElementById("events-wrapper"),h={showDuration(e){e?document.body.classList.add("show-duration"):document.body.classList.remove("show-duration")},showTime(e){e?document.body.classList.add("show-time"):document.body.classList.remove("show-time")},metricTime(){S(),pe()},showSELF(){S(),ue=null,pe()},quickTransitions(e){e?document.body.classList.add("quick-transitions"):document.body.classList.remove("quick-transitions")},showEvents(e){e&&be(),m.style.display=e?null:"none"}};e.forEach(e=>{const t=e.dataset.option;e.checked=options[t];const n=h[t]||b[t];e.addEventListener("change",()=>{options[t]=e.checked,n&&n(e.checked),L()})}),options.showDuration&&document.body.classList.add("show-duration"),options.showTime&&document.body.classList.add("show-time"),options.quickTransitions&&document.body.classList.add("quick-transitions"),options.showEvents||(m.style.display="none"),I.addEventListener("click",e=>{window.history.pushState({},"",I.href),e.preventDefault()}),D.addEventListener("click",()=>{A=new Date(A.getTime()-864e5),U()}),x.addEventListener("click",()=>{A=new Date(A.getTime()+864e5),U()}),document.getElementById("today").addEventListener("click",()=>{A=O(),U()});const g=document.getElementById("content"),w=document.getElementById("drag-handle");function f(e){const t="m"===e.type[0]?e:e.changedTouches[0];options.sidebarWidth=Math.max(250,Math.min(700,i-200,t.clientX-100)),g.style.setProperty("--custom-width",(options.sidebarWidth||250)+"px"),e.preventDefault()}function y(e){document.removeEventListener("mouseup"===e.type?"mousemove":"touchmove",f),document.removeEventListener(e.type,y),e.preventDefault(),L()}w.addEventListener("mousedown",e=>{document.addEventListener("mousemove",f),document.addEventListener("mouseup",y),e.preventDefault()}),w.addEventListener("touchstart",e=>{document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",y,{passive:!1}),e.preventDefault()},{passive:!1}),g.style.setProperty("--custom-width",(options.sidebarWidth||250)+"px")},{once:!0}),"serviceWorker"in navigator&&(k["no-sw"]||k["reset-sw"]?navigator.serviceWorker.getRegistrations().then(e=>{Promise.all(e.map(e=>e.unregister())).then(()=>{k["reset-sw"]?window.location=y:e.length&&window.location.reload()})}).catch(()=>void 0):window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(e=>{e.onupdatefound=(()=>{const t=e.installing;t.onstatechange=(()=>{"installed"===t.state&&navigator.serviceWorker.controller&&(options.natureLoaded=!1,window.location.replace(y))})})},()=>{}),navigator.serviceWorker.addEventListener("message",({data:e})=>{e.type})},{once:!0})),window.createElement=R,window.createFragment=M,window.empty=j;const N=32;function P(e,t=!1){const n=Math.floor(e/60),s=("0"+e%60).slice(-2);let o=options.metricTime?`${n}:${s}`:`${(n+11)%12+1}:${s}`;return options.metricTime||t?o:`${o} ${n<12?"a":"p"}m`}function F(e,t=!1,n=!1){return t?(n&&e<60?"":Math.floor(e/60))+":"+("0"+e%60).slice(-2):e+" minute"+(1===e?"":"s")}function $(e){return options["periodName_"+f+e]}function _(e,t){return options["periodName_"+f+e]=t}function H(e){return options["periodColour_"+f+e]}function Y(e,t){return options["periodColour_"+f+e]=t}let q,W,J,V,G,X;function K(){setTimeout(()=>{q.contains(document.activeElement)||(te.parentNode.removeChild(te),ee=null)},0)}const z=["left-sheep-curious.svg","left-sheep-running-sad-D.svg","left-sheep-standing-blowing-caterpillars.svg","right-sheep-D-mouth.svg","right-sheep-fishing.svg","right-sheep-hot-air-balloon.svg","right-sheep-sleeping.svg","standing-sheep-arms-out.svg","standing-sheep-classy.svg","standing-sheep-doing-ballet.svg","standing-sheep-flowers.svg","standing-sheep-hungry.svg","two-sheep-ice-cream.svg","two-sheep-stack.svg"];const Q=/([0-9a-f]{6})|([0-9a-f])([0-9a-f])([0-9a-f])/;function Z(e){const t=Q.exec(e.toLowerCase());if(t){return t[1]?t[1]:t.slice(2,5).map(e=>e+e).join("")}}let ee=null;const te=R("div",{classes:"colour-picker",children:[G=R("input",{classes:"colour-input select-input",attributes:{type:"text",placeholder:"#123ABC"},listeners:{change(){const e=Z(G.value);e?(Y(ee,e),V[ee].forEach(t=>t.style.setProperty("--colour","#"+e)),L(),pe()):G.value="#"+H(ee)},blur:K}}),X=R("input",{attributes:{type:"checkbox",name:"colour-picker-checkbox"},listeners:{change(){G.disabled=X.checked,X.checked?(Y(ee,null),V[ee].forEach(e=>{e.classList.add("transparent"),e.style.setProperty("--colour",null)})):(Y(ee,Z(G.value)||m[ee]||"000"),V[ee].forEach(e=>{e.classList.remove("transparent"),e.style.setProperty("--colour","#"+H(ee))})),L(),pe()},blur:K}}),R("label",{attributes:{for:"colour-picker-checkbox"},html:"Transparent?"})]});const ne=["S","M","T","W","&Theta;","F","S"];const se=(new Date).getTimezoneOffset();const oe=R("canvas",{attributes:{width:N,height:N}}),ae=oe.getContext("2d");let ie,de,re,ce,le,ue;function pe(e=!1,n=0){const s=Date.now();if(e&&s<n)return setTimeout(()=>pe(!0,n),Math.min(n-s,1e3));const o=O(),a=o.toISOString().slice(0,10);ue!==a&&(ue=a,(le=t(o)).noSchool&&(re.style.opacity=0,ce.setAttribute("href",g),document.title=w));const i=function(e,t=0){const n=Date.now()+t,s=Math.floor((n/6e4-se)%1440),o=n+6e4-n%6e4;if(e.noSchool)return{type:"time",value:s,nextMinute:o};const a=e.find(e=>e.end>s),i={secondCounter:null,nextMinute:o};if(a)i.period=a.period,a.start>s?(i.type="until",i.value=a.start-s):(i.type="left in",i.value=a.end-s,i.progress=(s-a.start)/(a.end-a.start)),i.value<=1&&(i.secondCounter=(()=>{const e=Date.now()+t;return{secondsLeft:60-e/1e3%60,stop:Math.floor((e/6e4-se)%1440)>=(a.start>s?a.start:a.end)}}));else{const t=e[e.length-1];i.period=t.period,i.type="since",i.value=s-t.end}return i}(le);if(le.noSchool)ie.textContent=P(i.value,!0),de.textContent="";else if("left in"===i.type?(re.style.opacity=1,re.style.setProperty("--progress",100*i.progress+"%")):re.style.opacity=0,de.innerHTML=i.type+" "+function(e){const t=H(e);let n='<span class="period-chip';return null===t&&(n+=" transparent"),n+='"',null!==t&&(n+=` style="--colour: #${t};"`),n+=`>${$(e)}</span>`}(i.period),"since"===i.type)ie.textContent=F(i.value,!0),ce.setAttribute("href",g),document.title=w;else if(function(e){ae.clearRect(0,0,N,N),ae.font="100px 'Roboto Condensed', sans-serif";const{width:t}=ae.measureText(e),n=N/(t/100);ae.fillStyle=h,ae.fillRect(0,(N-1.2*n)/2,N,n),ae.font=`${n}px 'Roboto Condensed', sans-serif`,ae.fillStyle="white",ae.fillText(e,N/2,N/2),ce.setAttribute("href",oe.toDataURL())}(F(i.value,!0,!0)),i.secondCounter){!function t(){const{secondsLeft:n,stop:s}=i.secondCounter();if(!s){const e=Math.round(10*n)/10+"";document.title=(ie.textContent=e+(e.includes(".")?"0".repeat(2-e.length+e.indexOf(".")):".0")+"s")+" "+i.type+" "+$(i.period)+" - "+w}window.requestAnimationFrame(e&&!s?t:pe)}()}else document.title=(ie.textContent=F(i.value,!0))+" "+i.type+" "+$(i.period)+" - "+w;e&&setTimeout(()=>pe(!0,i.nextMinute),Math.min(i.nextMinute-s,1e3))}function me(e){return Math.floor(Math.random()*e)}function he(e){const t=R("div",{classes:"transition-background"});t.style.backgroundImage=document.body.style.backgroundImage;const n=setTimeout(()=>{document.body.removeChild(t)},1e4);t.addEventListener("animationend",()=>{document.body.removeChild(t),clearTimeout(n)}),document.body.insertBefore(t,document.body.firstChild),document.body.style.backgroundImage=e}v.push(()=>{q=document.getElementById("periods"),Object.keys(p).forEach(e=>{void 0===$(e)&&_(e,p[e])}),Object.keys(m).forEach(e=>{void 0===H(e)&&Y(e,m[e])}),ie=document.getElementById("preview-time"),de=document.getElementById("preview-msg"),re=document.getElementById("progress"),ce=document.getElementById("favicon"),ae.textAlign="center",ae.textBaseline="middle",W=[];for(let e=0;e<7;e++){const t={};t.wrapper=R("div",{classes:"week-preview-col",attributes:{tabindex:0},children:[R("span",{classes:"week-preview-cell week-preview-day-heading",html:ne[e],attributes:{title:T[e],"aria-label":T[e]}}),t.content=R("div")],listeners:{click:()=>{A=t.date,U()},keydown(e){13===e.keyCode&&this.click()}}}),W.push(t)}document.getElementById("week-preview").appendChild(M(W.map(({wrapper:e})=>e)))});const ge="ugwisha-backgrounds";async function we(e,t){const n=new Headers;n.append("pragma","no-cache"),n.append("Cache-Control","no-cache");const s=await fetch(e,{mode:"no-cors",headers:n,cache:"no-cache"}),o=await caches.open(ge);await o.delete(new Request(t)),await o.put(new Request(t),s)}v.push(()=>{const e=document.getElementById("set-back"),t=document.getElementById("reset-back"),n=document.getElementById("next-back");let s=null;function o(){s&&clearInterval(s),s=options.randomGradients?setTimeout(o,options.quickTransitions?5e3:1e4):null,he(function(){const e=[me(256),me(256),me(256)],t=[me(256),me(256),me(256)];return`linear-gradient(${360*Math.random()}deg, rgb(${e.join(",")}), rgb(${t.join(",")}))`}())}const a=[],i=["nature","water","wallpaper"];i.forEach((e,t)=>{const n=[...i.slice(0,t),...i.slice(t+1)];a.push(e),a.push(e+","+n[0]),a.push(e+","+n[0]+","+n[1]),a.push(e+","+n[1]),a.push(e+","+n[1]+","+n[0])}),a.push(...a.map(e=>e+","+Date.now()));let d=-1;function r(){n.disabled=!0,d=(d+1)%a.length,we("https://source.unsplash.com/random/1600x900/?"+a[d],"nature").then(()=>{he(`url("nature?n=${Date.now()}")`),options.natureLoaded=!0,L(),n.disabled=!1}).catch(()=>{he('url("./images/temp-sheep.png")'),n.disabled=!1})}function c(){options.natureLoaded?(he(`url("nature?n=${Date.now()}")`),n.disabled=!1):r()}options.backgroundURL?(he(`url("custom?n=${Date.now()}")`),t.disabled=!1):options.natureBackground?(he(`url("nature?n=${Date.now()}")`),n.disabled=!1,caches.open(ge).then(e=>e.match("nature")).then(e=>{e||r()})):o(),e.addEventListener("click",()=>{const o=prompt("URL of image: (sorry for lack of proper UI)");o&&(e.disabled=!0,n.disabled=!0,we(o,"custom").then(()=>{e.disabled=!1,t.disabled=!1,he(`url("custom?n=${Date.now()}")`),options.backgroundURL=o,L(),s&&clearInterval(s)}).catch(()=>{e.disabled=!1,!options.backgroundURL&&options.natureBackground&&(n.disabled=!1),alert("The image couldn't be loaded. This might be because:\n- You are offline\n- The website hosting the image won't let Ugwisha load their images\n- There's something wrong with the URL\n(sorry again for lack of proper UI)")}))}),t.addEventListener("click",()=>{options.backgroundURL=null,L(),t.disabled=!0,n.disabled=!options.natureBackground,options.natureBackground?c():o()}),n.addEventListener("click",r),b.natureBackground=(e=>{options.backgroundURL||(e?(s&&clearInterval(s),c()):(o(),n.disabled=!0))}),b.randomGradients=(e=>{e?options.natureBackground||options.backgroundURL||o():s&&clearInterval(s)}),E.push(t=>{t||(n.disabled=e.disabled=!0)})});const fe={},ye="https://www.googleapis.com/calendar/v3/calendars/"+encodeURIComponent(d)+"/events?singleEvents=true&fields="+encodeURIComponent("items(description,end(date,dateTime),location,start(date,dateTime),summary)")+"&key="+c;function ve(e){return 60*e.getHours()+e.getMinutes()}function Ee(e,t=0){return new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()+t)}async function be(){if(options.showEvents){const n=A.toISOString().slice(0,10);if(De.innerHTML='<span class="events-message">Loading...</span>',!fe[n]){const{items:t}=await fetch(`${ye}&timeMin=${encodeURIComponent(Ee(A).toISOString())}&timeMax=${encodeURIComponent(Ee(A,1).toISOString())}`).then(e=>e.json()).catch(()=>(De.innerHTML='<span class="events-message">Unable to fetch events.</span>',{items:null}));if(!t)return;fe[n]=t,e(Ie({items:t}),A)&&(storage.setItem(a,s()),S(),ue=null,pe())}j(De),De.appendChild(fe[n].length?M(fe[n].map(e=>R("div",{classes:"event",children:[R("span",{classes:"event-name",children:[e.summary]}),R("span",{classes:"event-info",children:[e.start&&e.start.dateTime?R("span",{classes:"event-time",html:P(ve(new Date(e.start.dateTime)))+" &ndash; "+P(ve(new Date(e.end.dateTime)))}):void 0,e.location?R("span",{classes:"event-location",children:[e.location]}):void 0]}),e.description?R("span",{classes:"event-description",html:(t=e.description,t.replace(/(<.*?) style=(?:"[^"]*"|\S*)(.*?>)/g,"$1$2"))}):void 0]}))):R("span",{classes:"events-message",html:"Nothing happening today"}))}var t}const Le=new Date(l+252e5),ke=new Date(u+111599999),Ce="https://www.googleapis.com/calendar/v3/calendars/"+encodeURIComponent(i)+"/events?singleEvents=true&fields="+encodeURIComponent("items(description,end(date,dateTime),start(date,dateTime),summary)")+"&key="+c+`&timeMin=${encodeURIComponent(Le.toISOString())}&timeMax=${encodeURIComponent(ke.toISOString())}`;function Te(){return Ue.disabled=!0,Promise.all(r.map(e=>fetch(Ce+"&q="+e).then(e=>e.json()))).then(t=>{const n={};t.map(Ie).forEach(e=>e.forEach(e=>{n[e.date]||(n[e.date]=[]),n[e.date].push(e)}));const o=new Date(l),i=u;for(;o.getTime()<=i;)e(n[o.toISOString().slice(0,10)]||[],o),o.setUTCDate(o.getUTCDate()+1);storage.setItem(a,s()),Ue.disabled=!1})}function Ie({items:e}){const t=[];return e.forEach(e=>{if(e.start.dateTime)t.push({summary:e.summary,description:e.description,date:e.start.dateTime.slice(0,10)});else{const n=new Date(e.start.date),s=new Date(e.end.date).getTime();for(;n.getTime()<s;)t.push({summary:e.summary,description:e.description,date:n.toISOString().slice(0,10)}),n.setUTCDate(n.getUTCDate()+1)}}),t}let De,xe,Se,Ue,Ae=!1;v.push(async()=>{if(De=document.getElementById("events"),xe=document.getElementById("date"),Se=document.getElementById("weekday"),(Ue=document.getElementById("fetch-alts")).addEventListener("click",()=>{Ae=!0,Te().then(S)}),E.push(e=>{e||(Ue.disabled=!0)}),k["get-alts"]||!storage.getItem(a)){if(Ae=!0,await Te(),k.then)return window.location.replace(k.then);ue=null}o(storage.getItem(a)),U(),pe(!0,0)});const Oe=["January","February","March","April","May","June","July","August","September","October","November","December"],Be=[],Re={},Me=24,je=6*Me;let Ne,Pe,Fe,$e;v.push(()=>{Pe=document.getElementById("date-selector");const e=document.getElementById("date-selector-days");Ne=document.getElementById("date-selector-month-year");let n=!1,s=!1;function o(t,n=!1){s&&window.cancelAnimationFrame(s);const o=Math.max(Math.min((+t.dataset.week+.5)*Me-je/2,e.scrollHeight-je),0);n&&(e.scrollTop=o),function t(){e.scrollTop+=(o-e.scrollTop)/5,s=window.requestAnimationFrame(t)}()}document.getElementById("date-selector-day-headings").appendChild(M(ne.map(e=>R("span",{classes:"date-selector-day-heading",html:e})))),e.addEventListener("wheel",()=>{s&&window.cancelAnimationFrame(s)}),e.addEventListener("touchstart",()=>{s&&window.cancelAnimationFrame(s)}),e.addEventListener("scroll",()=>{const t=(e.scrollTop+je/2)/Me,n=Be.findIndex(e=>e.start>=t),s=Be[(~n?n:Be.length)-1];s&&s!==Fe&&(Fe&&Fe.wrapper.classList.remove("date-selector-month-selected"),Fe=s,s.wrapper.classList.add("date-selector-month-selected"),Ne.textContent=Oe[s.month]+" "+s.year)}),e.addEventListener("click",e=>{e.target.classList.contains("date-selector-day")&&!e.target.classList.contains("date-selector-out-of-bounds")&&(A=new Date(e.target.dataset.date),U(),$e&&$e.classList.remove("date-selector-selected"),e.target.classList.add("date-selector-selected"),$e=e.target,o(e.target))}),e.addEventListener("keydown",e=>{if(e.keyCode>=37&&e.keyCode<=40){let t;switch(e.keyCode){case 37:t=-1;break;case 38:t=-7;break;case 39:t=1;break;case 40:t=7}const n=new Date(Date.UTC(A.getUTCFullYear(),A.getUTCMonth(),A.getUTCDate()+t));if(n.getTime()>=l&&n.getTime()<=u){A=n,U();const e=Re[n.toISOString().slice(0,10)];e&&($e&&$e.classList.remove("date-selector-selected"),e.classList.add("date-selector-selected"),$e=e,o(e))}e.preventDefault()}else 27===e.keyCode&&(Pe.classList.add("hidden"),a.focus())});const a=document.getElementById("select-date");a.addEventListener("click",s=>{n||(e.appendChild(function(){const e=document.createDocumentFragment(),t=new Date(l),n=new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()-t.getUTCDay()));let s,o=-1;for(;n.getTime()<=u;){const t=n.getUTCMonth();if(0===n.getUTCDay()&&o++,s!==t){s=t;const a=R("span",{classes:"date-selector-month"});e.appendChild(a),Be.push({month:t,year:n.getUTCFullYear(),wrapper:a,start:o})}const a=Be[Be.length-1],i=n.getTime(),d=n.getUTCDate();d<=5&&(a.start=o);const r=i<l||i>u,c=n.toISOString().slice(0,10),p=R("span",{classes:["date-selector-day",r?"date-selector-out-of-bounds":null],children:[d],data:{date:c,week:o}});r||(Re[c]=p),a.wrapper.appendChild(p),n.setUTCDate(n.getUTCDate()+1)}return e}()),n=!0),function(){const e=O().toISOString().slice(0,10);Object.keys(Re).forEach(n=>{const s=Re[n],o=new Date(n),a=t(o);s.classList[a.noSchool?"add":"remove"]("date-selector-no-school"),s.classList[a.alternate?"add":"remove"]("date-selector-alternate"),s.classList[n===e?"add":"remove"]("date-selector-today")})}(),Pe.classList.remove("hidden"),$e&&$e.classList.remove("date-selector-selected");const a=Re[A.toISOString().slice(0,10)];a&&(a.classList.add("date-selector-selected"),$e=a,o(a,!0)),e.focus(),s.stopPropagation()}),document.getElementById("cancel-select-date").addEventListener("click",()=>{Pe.classList.add("hidden"),a.focus()}),document.addEventListener("click",e=>{Pe.classList.contains("hidden")||Pe.contains(e.target)||Pe.classList.add("hidden")})});let _e=[];function He(){(_e=_e.filter(e=>e.animate())).length&&window.requestAnimationFrame(He)}document.addEventListener("mouseup",()=>{_e.filter(e=>"mouse"===e.identifier).forEach(e=>e.dying=!0)}),document.addEventListener("touchend",e=>{Array.from(e.changedTouches).forEach(e=>{_e.filter(t=>t.identifier===e.identifier).forEach(e=>e.dying=!0)})},{passive:!0});class Ye{constructor(e,t,n,s){const o=document.createElement("div");o.classList.add("ripple");const a=e.getBoundingClientRect();o.style.left=t-a.left+"px",o.style.top=n-a.top+"px",e.appendChild(o),_e.push(this),this.parent=e,this.ripple=o,this.identifier=s,this.scale=0,this.dying=!1,this.dyingProgress=1,this.finalScale=Math.hypot(Math.max(t-a.left,a.left+a.width-t),Math.max(n-a.top,a.top+a.height-n))/5,1===_e.length&&He()}animate(){return this.scale+=(this.finalScale-this.scale)/6,this.dying&&(this.dyingProgress-=.07),this.ripple.style.transform=`scale(${this.scale})`,this.ripple.style.opacity=this.dyingProgress,this.dyingProgress<=0&&this.parent.removeChild(this.ripple),this.dyingProgress>0}}function qe(e){let t=!1;e.addEventListener("touchstart",n=>{t=!0,Array.from(n.changedTouches).forEach(t=>{new Ye(e,t.clientX,t.clientY,t.identifier)})},{passive:!0}),e.addEventListener("mousedown",n=>{t?t=!1:new Ye(e,n.clientX,n.clientY,"mouse")})}v.push(()=>{Array.from(document.getElementsByClassName("ripples")).forEach(e=>qe(e))}),window.UgwishaExtensions=(()=>{const e="[ugwisha] extensions",t="[ugwisha] extensions.last",n="ugwisha-extensions",s={};let o,a,i,d,r=!1,c=null;const l=JSON.parse(storage.getItem(e)||'["./js/extensions/notes.js"]'),u=Promise.all(l.map(p));function p(e){return new Promise((t,n)=>{const s=document.createElement("script");s.onload=t,s.onerror=n,s.src=e,document.head.appendChild(s)}).then(()=>{caches.open(n).then(t=>t.add(e))})}let m=!1;const h={start:function(){r=!0,delete h.start,o=document.getElementById("extension-name"),a=document.getElementById("extension-icon"),i=document.getElementById("extension-menu"),d=document.getElementById("extension-wrapper"),h.switch=(e=>{if(e===c)return;if(!s[e]){if(!s.menu)return;e="menu"}if(c){const e=s[c];e.beforeRemove&&e.beforeRemove(),d.removeChild(e.wrapper),e.afterRemove&&e.afterRemove()}c=e;const n=s[e];o.textContent=n.name,n.icon?(a.style.backgroundImage=`url("${n.icon}")`,a.style.display=null):a.style.display="none",n.beforeAdd&&n.beforeAdd(),d.appendChild(n.wrapper),n.afterAdd&&n.afterAdd(),localStorage.setItem(t,e),i.disabled="menu"===e}),i.addEventListener("click",()=>{h.switch("menu")}),u.then(()=>h.switch(k.app||localStorage.getItem(t)||"menu")),E.push(e=>{e||(f.disabled=!0)})},register(t){if(s[t.id])throw new Error("Extension with same ID already exists: "+t.id);if("menu"!==t.id&&!l.includes(t.url))throw new Error("No extensions are loaded with this URL: "+t.url);if(s[t.id]=t,"menu"!==t.id){const o=R("div",{classes:"extension-item",children:[R("div",{classes:"kind-of-button extension-icon",styles:{backgroundImage:t.icon&&`url("${t.icon}")`},attributes:{tabindex:0},listeners:{click(i){if(m){delete s[t.id];const i=l.indexOf(t.url);~i&&(l.splice(i,1),storage.setItem(e,JSON.stringify(l))),w.removeChild(o);const d=g.find(e=>e[1]===t.url);d&&(d[2].disabled=!1),caches.open(n).then(e=>Promise.all([t.url,...a].map(t=>e.delete(t)))).then(()=>void 0)}else h.switch(t.id)},keydown(e){13===e.keyCode&&this.click()}},ripples:!0}),R("div",{classes:"extension-name",children:[t.name]})]});w.appendChild(o),t.styles&&document.head.appendChild(R("link",{attributes:{rel:"stylesheet",href:t.styles}}));const a=t.sources||[];t.icon&&a.push(t.icon),t.styles&&a.push(t.styles),a.length&&caches.open(n).then(e=>e.addAll(a))}}},g=[["Notes","./js/extensions/notes.js"],["Todo","./js/extensions/todo.js"],["Barcode","./js/extensions/barcode.js"],["Min. Score Calc.","./js/extensions/min-score.js"]],w=R("div",{classes:"extension-menu"}),f=R("select",{classes:"select-input extension-list",children:[R("option",{attributes:{value:"CHOOSE",disabled:!0},html:"Add app"}),R("option",{attributes:{value:"FROM_URL"},html:"From URL"}),...g.map(e=>e[2]=R("option",{attributes:{value:e[1],disabled:l.includes(e[1])},html:e[0]}))],attributes:{value:"CHOOSE"},listeners:{change(e){y.disabled="CHOOSE"===f.value}}}),y=R("button",{classes:"button extension-add",children:["Add"],attributes:{disabled:!0},listeners:{click(t){let n=f.value;"CHOOSE"!==n&&("FROM_URL"===n&&(n=prompt("Enter app URL:")),n&&function(t){l.includes(t)?Promise.reject(new Error("Extension already added")):(l.push(t),p(t).then(()=>{storage.setItem(e,JSON.stringify(l));const n=g.find(e=>e[1]===t);n&&(n[2].disabled=!0)}))}(n),f.value="CHOOSE",y.disabled=!0)}},ripples:!0});return h.register({id:"menu",wrapper:R("div",{children:[w,R("div",{classes:"extension-list-wrapper",children:[f,y]}),R("button",{classes:"button extension-remove",children:["Remove apps"],listeners:{click(e){(m=!m)?(w.classList.add("extension-remove-mode"),this.classList.add("extension-removing"),this.childNodes[0].nodeValue="Done"):(w.classList.remove("extension-remove-mode"),this.classList.remove("extension-removing"),this.childNodes[0].nodeValue="Remove apps")}},ripples:!0})]}),name:"Apps"}),h})();})()
