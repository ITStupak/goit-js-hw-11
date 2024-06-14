import"./assets/vendor-b48cf979.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function u(s){const a=`https://pixabay.com/api/?${new URLSearchParams({key:"44328072-f56b95eb73841ff5e619bc345",q:s,image_type:"photo",orientation:"horizontal",per_page:"12",safesearch:!1})}`;return fetch(a).then(r=>r.json())}function p({largeImageURL:s,webformatURL:o,tags:a,comments:r,downloads:e,likes:t,views:c}){return`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img
            class="gallery-image"
            src="${o}"
            data-source="${s}"
            alt="${a}"
          />
        </a>
        <div class="gallery-text">
          <div class="text-property">
            <p class="text-dscr">Likes</p>
            <p class="text-count">${t}</p>
          </div>
          <div class="text-property">
            <p class="text-dscr">Views</p>
            <p class="text-count">${c}</p>
          </div>
          <div class="text-property">
            <p class="text-dscr">Comments</p>
            <p class="text-count">${r}</p>
          </div>
          <div class="text-property">
            <p class="text-dscr">Downloads</p>
            <p class="text-count">${e}</p>
          </div>
        </div>
    </li>`}function d(s){return s.hits.map(p).join("")}const l=document.querySelector(".form"),n=document.querySelector(".gallery");l.addEventListener("submit",m);function m(s){s.preventDefault();const o=s.target.elements.request.value.trim();if(o!==""){n.innerHTML="";const a=document.querySelector(".loader");a.style.display="block",u(o).then(r=>{if(r.total!==0){const e=d(r);n.insertAdjacentHTML("beforeend",e);const t=Array.from(n.querySelectorAll("img")).map(c=>new Promise(i=>{c.onload=i}));return Promise.all(t)}else alert("Sorry, there are no images matching your search query. Please try again!")}).then(()=>a.style.display="none").catch(r=>{console.log(r),a.style.display="none"}),l.reset()}else alert("Enter your Request!")}
//# sourceMappingURL=commonHelpers.js.map
