import{a as m,S as g,i as a}from"./assets/vendor-dgoA7Xew.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="54476211-a145d35bc2dca18e6906896b1",h="https://pixabay.com/api/";function v(n){const s={key:y,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(h,{params:s}).then(r=>r.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new g(".gallery a",{captionsData:"alt",captionDelay:250});function L(n){const s=n.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:o,comments:f,downloads:p})=>`<li class="gallery-item">
          <a href="${i}">
            <img src="${r}" alt="${e}" loading="lazy" />
            <div class="info">
              <div class="info-item">
                <span class="info-label">Likes</span>
                <span class="info-value">${t}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Views</span>
                <span class="info-value">${o}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Comments</span>
                <span class="info-value">${f}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Downloads</span>
                <span class="info-value">${p}</span>
              </div>
            </div>
          </a>
        </li>`).join("");c.insertAdjacentHTML("beforeend",s),b.refresh()}function S(){c.innerHTML=""}function q(){u.classList.remove("is-hidden")}function l(){u.classList.add("is-hidden")}const d=document.querySelector(".form"),w=d.querySelector('input[name="searchQuery"]');d.addEventListener("submit",P);function P(n){n.preventDefault();const s=w.value.trim();if(!s){a.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}S(),q(),v(s).then(r=>{if(l(),r.hits.length===0){a.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(r.hits)}).catch(r=>{l(),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(r)})}
//# sourceMappingURL=index.js.map
