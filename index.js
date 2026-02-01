import{a as f,S as y,i}from"./assets/vendor-dgoA7Xew.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h="YOUR_API_KEY_HERE";function v(n){const s={key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(g,{params:s}).then(a=>a.data)}const u=document.querySelector("#gallery"),p=document.querySelector("#loader-wrapper"),L=new y(".gallery__item a",{captionsGetter:!1,overlayOpacity:.85});function b(n){const s=n.map(({webformatURL:a,largeImageURL:r,tags:e,likes:t,views:o,comments:d,downloads:m})=>`
        <li class="gallery__item">
          <a href="${r}">
            <img src="${a}" alt="${e}" loading="lazy" />
            <div class="card-stats">
              <span>
                <span class="stat-label">Likes</span>
                <span class="stat-value">${t}</span>
              </span>
              <span>
                <span class="stat-label">Views</span>
                <span class="stat-value">${o}</span>
              </span>
              <span>
                <span class="stat-label">Comments</span>
                <span class="stat-value">${d}</span>
              </span>
              <span>
                <span class="stat-label">Downloads</span>
                <span class="stat-value">${m}</span>
              </span>
            </div>
          </a>
        </li>`).join("");u.insertAdjacentHTML("beforeend",s),L.refresh()}function S(){u.innerHTML=""}function w(){p.classList.add("active")}function l(){p.classList.remove("active")}const _=document.querySelector("#search-form"),E=document.querySelector("#search-input"),c={theme:"dark",position:"topRight",timeout:5e3,closeOnClick:!0};_.addEventListener("submit",O);function O(n){n.preventDefault();const s=E.value.trim();if(!s){i.warning({...c,title:"Warning",message:"Please enter a search keyword."});return}S(),w(),v(s).then(a=>{l();const r=a.hits;if(r.length===0){i.error({...c,title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}b(r)}).catch(()=>{l(),i.error({...c,title:"Error",message:"Something went wrong. Please check your connection and try again."})})}
//# sourceMappingURL=index.js.map
