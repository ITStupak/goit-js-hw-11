import"./assets/vendor-b48cf979.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function i(r){const s=`https://pixabay.com/api/?${new URLSearchParams({key:"44328072-f56b95eb73841ff5e619bc345",q:r,image_type:"photo",orientation:"horizontal",per_page:"100",safesearch:!1})}`;return fetch(s).then(c=>c.json())}function l({largeImageURL:r,previewURL:o,id:s,comments:c,downloads:e,likes:t,views:a}){return`<li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img
            class="gallery-image"
            src="${r}"
            data-source="${r}"
            alt="${s}"
          />
        </a>
        <div class="gallery-text">
          <div class="text-property">
            <p class="text-dscr">Likes</p>
            <p class="text-count">${t}</p>
          </div>
          <div class="text-property">
            <p class="text-dscr">Views</p>
            <p class="text-count">${a}</p>
          </div>
          <div class="text-property">
            <p class="text-dscr">Comments</p>
            <p class="text-count">${c}</p>
          </div>
          <div class="text-property">
            <p class="text-dscr">Downloads</p>
            <p class="text-count">${e}</p>
          </div>
        </div>
    </li>`}function u(r){return r.hits.map(l).join("")}const n=document.querySelector(".form"),p=document.querySelector(".gallery"),d=document.querySelector(".loader");n.addEventListener("submit",f);function f(r){r.preventDefault();const o=r.target.elements.request.value.trim();i(o).then(s=>{if(d.classList.toggle("is-visible"),s.total!==0){const c=u(s);p.insertAdjacentHTML("beforeend",c)}else alert("Sorry, there are no images matching your search query. Please try again!")}).catch(s=>console.log(s)),n.reset()}
//# sourceMappingURL=commonHelpers.js.map
