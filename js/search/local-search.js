"use strict";$(function(){function e(){var e;$("body").css({width:"100%",overflow:"hidden"}),$("#local-search").css("display","block"),$("#local-search-input input").focus(),$("#search-mask").fadeIn(),s||(e=GLOBAL_CONFIG.localSearch.path,$.ajax({url:GLOBAL_CONFIG.root+e,dataType:"xml",success:function(e){var t=$("entry",e).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get(),e=$("#local-search-input input")[0],s=$("#local-hits")[0];e.addEventListener("input",function(){var u,d='<div class="search-result-list">',p=this.value.trim().toLowerCase().split(/[\s]+/);s.innerHTML="",this.value.trim().length<=0?$(".local-search-stats__hr").hide():(u=0,t.forEach(function(e){var s=!0;e.title&&""!==e.title.trim()||(e.title="Untitled");var a,t,c,i,n=e.title.trim().toLowerCase(),r=e.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),l=e.url.startsWith("/")?e.url:GLOBAL_CONFIG.root+e.url,o=-1,h=-1;""!==n||""!==r?p.forEach(function(e,t){a=n.indexOf(e),o=r.indexOf(e),a<0&&o<0?s=!1:(o<0&&(o=0),0===t&&(h=o))}):s=!1,s&&(t=e.content.trim().replace(/<[^>]+>/g,""),0<=h&&(c=h+100,(e=h-30)<0&&(e=0),0===e&&(c=100),c>t.length&&(c=t.length),i=t.substring(e,c),p.forEach(function(e){var t=new RegExp(e,"gi");i=i.replace(t,'<span class="search-keyword">'+e+"</span>"),n=n.replace(t,'<span class="search-keyword">'+e+"</span>")}),d+='<div class="local-search__hit-item"><a href="'+l+'" class="search-result-title">'+n+"</a>",u+=1,$(".local-search-stats__hr").show(),""!==r&&(d+='<p class="search-result">'+i+"...</p>")),d+="</div>")}),0===u&&(d+='<div id="local-search__hits-empty">'+GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/,this.value.trim())+"</div>"),d+="</div>",s.innerHTML=d,window.pjax&&window.pjax.refresh(s))})}}),s=!0),document.addEventListener("keydown",function e(t){"Escape"===t.code&&(a(),document.removeEventListener("keydown",e))})}function t(){$("a.social-icon.search").on("click",e),$("#search-mask, .search-close-button").on("click",a)}var s=!1,a=function(){$("body").css({width:"",overflow:""}),$("#local-search").css({animation:"search_close .5s"}),setTimeout(function(){$("#local-search").css({animation:"",display:"none"})},500),$("#search-mask").fadeOut()};t(),window.addEventListener("pjax:success",function(){$("#local-search").is(":visible")&&a(),t()})});