import{a as d}from"./axios-B4uVmeYG.js";import{_ as h,r as u,f as p,t as e,v as a,x as s,F as i,C as _,E as f,G as m}from"./index-DumQ6dtz.js";const o=n=>(f("data-v-8a4a1fad"),n=n(),m(),n),g={class:"container"},v={class:"div"},y=o(()=>s("h2",{class:"item_title"},"國內旅遊",-1)),x=o(()=>s("h4",null,"大英博物館",-1)),U=["src"],j=o(()=>s("a",{href:"#"},"查看活動",-1)),k=o(()=>s("h4",null,"威尼斯水上嘉年華",-1)),E=["src"],I=o(()=>s("a",{href:"#"},"查看活動",-1)),B=o(()=>s("h4",null,"澎湖潛水漫步",-1)),S=["src"],w=o(()=>s("a",{href:"#"},"查看活動",-1)),F={class:"div"},A=o(()=>s("h2",{class:"item_title"},"美食饗宴",-1)),C=o(()=>s("h4",null,"日式生魚片之旅",-1)),D=["src"],G=o(()=>s("a",{href:"#"},"查看活動",-1)),L=o(()=>s("h4",null,"法式牛排晚餐",-1)),M=["src"],N=o(()=>s("a",{href:"#"},"查看活動",-1)),P=o(()=>s("h4",null,"經典美式蘋果派",-1)),V=["src"],b=o(()=>s("a",{href:"#"},"查看活動",-1)),q={__name:"Enjoylife",setup(n){const c=u([]),r=[d.get("https://vue3-course-api.hexschool.io/api/enjoylife_api/products")];return p(async()=>{try{const l=await Promise.all(r);console.log(l[0].data),c.value=l[0].data.products}catch(l){console.log("錯誤處理",l)}console.log("執行其他動作")}),(l,z)=>(e(),a("div",g,[s("main",null,[s("div",v,[y,(e(!0),a(i,null,_(c.value,t=>(e(),a("ul",{key:t.id},[s("li",null,[x,s("img",{src:t.imageUrl,alt:""},null,8,U),j]),s("li",null,[k,s("img",{src:t.imagesUrl,alt:""},null,8,E),I]),s("li",null,[B,s("img",{src:t.imagesUrl[1],alt:""},null,8,S),w])]))),128))]),s("div",F,[A,(e(!0),a(i,null,_(c.value,t=>(e(),a("ul",{key:t.id},[s("li",null,[C,s("img",{src:t.imagesUrl[2],alt:""},null,8,D),G]),s("li",null,[L,s("img",{src:t.imagesUrl[3],alt:""},null,8,M),N]),s("li",null,[P,s("img",{src:t.imagesUrl[4],alt:""},null,8,V),b])]))),128))])])]))}},K=h(q,[["__scopeId","data-v-8a4a1fad"]]);export{K as default};
