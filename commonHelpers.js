import{S as p}from"./assets/vendor-10cb7c31.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function u(l){const a=`https://pixabay.com/api/?${new URLSearchParams({key:"44328072-f56b95eb73841ff5e619bc345",q:l,image_type:"photo",orientation:"horizontal",per_page:"24",safesearch:!1})}`;return fetch(a).then(r=>r.json())}function y({largeImageURL:l,webformatURL:s,tags:a,comments:r,downloads:e,likes:t,views:o}){return`<li class="gallery-item">
    <a class="gallery-link" href=${l}>
      <img
        class="gallery-image"
        src=${s}
        alt=${a}
      />
    </a>
    <ul class="gallery-text">
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Likes</p>
        <p class="gallery-text-count">${t}</p>
      </li>
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Views</p>
        <p class="gallery-text-count">${o}</p>
      </li>
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Comments</p>
        <p class="gallery-text-count">${r}</p>
      </li>
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Downloads</p>
        <p class="gallery-text-count">${e}</p>
      </li>
    </ul> 
  </li>`}function m(l){return l.hits.map(y).join("")}new p(".gallery-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0});const n=document.querySelector(".form"),i=document.querySelector(".gallery");n.addEventListener("submit",g);function g(l){l.preventDefault();const s=l.target.elements.request.value.trim();if(s!==""){i.innerHTML="";const a=document.querySelector(".loader");a.style.display="block",u(s).then(r=>{if(r.total!==0){const e=m(r);i.insertAdjacentHTML("beforeend",e);const t=Array.from(i.querySelectorAll("img")).map(o=>new Promise(c=>{o.onload=c}));return Promise.all(t)}else alert("Sorry, there are no images matching your search query. Please try again!")}).then(()=>a.style.display="none").catch(r=>{console.log(r),a.style.display="none"}),n.reset()}else alert("Enter your Request!")}
//# sourceMappingURL=commonHelpers.js.map
