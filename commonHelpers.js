import{S as p,i as d}from"./assets/vendor-9310f15c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",h="41936299-e1d4d29e6aed15564c1848147",n={form:document.querySelector(".form"),input:document.querySelector(".search-input"),button:document.querySelector(".search-btn"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")};let a;n.form.addEventListener("submit",s=>{s.preventDefault();const r=n.input.value.trim();if(!r){u("Please, enter search term!");return}f(!0),n.form.reset();const i=`${y}?key=${h}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;g(i).then(o=>{if(o.hits.length===0){u("Sorry, there are no images matching your search query. Please, try again!");const e=o.hits;return n.gallery.innerHTML=c(e),e}return o.hits}).then(o=>{a=new p(".gallery-item a",{captionsData:"alt",captionDelay:250}),a.refresh(),n.gallery.innerHTML=c(o)}).catch(o=>console.error(o)).finally(()=>f(!1))});function g(s){return n.input.value.trim(),fetch(s).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function c(s){return s.map(({webformatURL:r,largeImageURL:i,tags:o,likes:e,views:t,comments:l,downloads:m})=>`
          <li class="gallery-item">
    <a class="gallery-link" href="${i}">
      <img
        class="gallery-img"
        src="${r}"
        alt="${o}"
      />
      <p class="gallery-inf">
      Likes: <span class="img-stat">${e}</span> 
      Views: <span class="img-stat">${t}</span> 
      Comments: <span class="img-stat">${l}</span> 
      Downloads: <span class="img-stat">${m}</span></p>
    </a>
  </li>`).join("")}function u(s){d.show({class:"error-circul",position:"topRight",icon:"error-circul",message:s,maxWidth:"432",messageColor:"#fff",messageSize:"16px",backgroundColor:"#EF4040",close:!1,closeOnClick:!0})}function f(s=!0){n.loader.style.display=s?"inline-block":"none",n.button.disabled=s}
//# sourceMappingURL=commonHelpers.js.map
