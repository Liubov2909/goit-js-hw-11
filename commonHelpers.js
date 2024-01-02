import{i as y,S as m}from"./assets/vendor-46aac873.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(t){if(t.ep)return;t.ep=!0;const l=s(t);fetch(t.href,l)}})();const f=new URL("/goit-js-hw-11/assets/octagon-f620ac71.svg",self.location).href,g=new URL("/goit-js-hw-11/assets/x-82d28438.svg",self.location).href;function c(r=""){y.show({titleColor:"#FFF",titleSize:"16px",message:r,messageColor:"#FFF",messageSize:"16px",maxWidth:"462px",position:"topRight",backgroundColor:"#EF4040",iconUrl:f,progressBarColor:"#FFBEBE",timeout:5e3,targetFirst:!1,close:!1,buttons:[[`<button type="button" id="izi-close-button">
                 <img src="${g}" alt="" width="16px" height="16px" />
              </button>`,function(s,o){s.hide({},o,"buttonName")}]]});let e=document.querySelector(".iziToast.fadeInUp");e.style.paddingTop="20px",e.style.paddingBottom="20px",e=document.querySelector(".iziToast>.iziToast-body .iziToast-texts"),e.style.maxWidth="322px"}const p=document.querySelector(".gallery"),h=new m(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom"});function b(r){if(r.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}p.innerHTML="";const e=r.hits.reduce((s,o)=>s+=`
        <a class="gallery-link" href="${o.largeImageURL}">
          <img
              class="gallery-image"
              src="${o.webformatURL}"
              alt="${o.tags}"
          />
          <ul class="property-list">
            <li class="property-item">
                <p class="property-title">Likes</p>
                <p class="property-value">${o.likes}</p>
            </li>
            <li class="property-item">
                <p class="property-title">Views</p>
                <p class="property-value">${o.views}</p>
            </li>
            <li class="property-item">
                <p class="property-title">Comments</p>
                <p class="property-value">${o.comments}</p>
            </li>
            <li class="property-item">
                <p class="property-title">Downloads</p>
                <p class="property-value">${o.downloads}</p>
            </li>
          </ul>  
          </a>`,"");p.insertAdjacentHTML("beforeend",e),h.refresh()}const u={key:"41529899-34462864becb6db8698a10d1b",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0},n=document.querySelector(".search-btn"),d=document.querySelector(".loading-message");function w(r){d.style.display="block",n.disabled=!0,n.blur(),S(r).then(e=>b(e)).catch(e=>{console.log(e)}).finally(()=>{d.style.display="none",n.disabled=!1})}function S(r){u.q=r;const e=new URLSearchParams(u);return setTimeout(()=>{},5e3),fetch(`https://pixabay.com/api/?${e.toString()}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).catch(s=>c(s))}const a=document.querySelector(".search-form");document.querySelector(".loading-message").style.display="none";a.addEventListener("submit",r=>{r.preventDefault();let e=a.elements.search.value.trim();if(!e){c("Search must be filled!");return}a.reset(),w(e)});
//# sourceMappingURL=commonHelpers.js.map
