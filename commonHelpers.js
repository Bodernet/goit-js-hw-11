import{S as f,i as m}from"./assets/vendor-9310f15c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",p="41936299-e1d4d29e6aed15564c1848147",n={form:document.querySelector(".form"),input:document.querySelector(".search-input"),button:document.querySelector(".search-btn"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")};n.form.addEventListener("submit",o=>{o.preventDefault();const r=n.input.value.trim();if(!r){c("Please, enter search term!");return}const a=`${d}?key=${p}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;y(a).then(s=>{s.hits.length===0&&(c("Sorry, there are no images matching your search query. Please, try again!"),l(!1)),n.gallery.innerHTML=g(s.hits),l(!1),new f(".gallery-item a",{captionsData:"alt",captionDelay:250}),n.form.reset()}).catch(s=>console.error(s))});function y(o){return l(!0),fetch(o).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function g(o){return o.map(({largeImageURL:r,webformatURL:a,tags:s,likes:e,views:t,comments:i,downloads:u})=>`
          <li class="gallery-list">
    <a class="gallery-link" href="${r}">
      <img
        class="gallery-img"
        src="${a}"
        alt="${s}"
      />
      <p class="gallery-inf">
      Likes: <span class="img-stat">${e}</span> 
      Views: <span class="img-stat">${t}</span> 
      Comments: <span class="img-stat">${i}</span> 
      Downloads: <span class="img-stat">${u}</span></p>
    </a>
  </li>`).join("")}function c(o){m.show({class:"error-circul",position:"topRight",icon:"error-circul",message:o,maxWidth:"432",messageColor:"#fff",messageSize:"16px",backgroundColor:"#EF4040",close:!1,closeOnClick:!0})}function l(o=!0){n.loader.style.display=o?"inline-block":"none",n.button.disabled=o}
//# sourceMappingURL=commonHelpers.js.map
