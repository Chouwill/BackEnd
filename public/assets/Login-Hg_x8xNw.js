import{_ as f,r as g,Y as b,s as u,t as x,v as w,x as o,y as a,z as _,H as h,E as k,G as y}from"./index-j0Kmu447.js";import{a as V}from"./axios-B4uVmeYG.js";const n=c=>(k("data-v-51aa74bd"),c=c(),y(),c),L={class:"container"},U={class:"login_box"},B={class:"login_header"},I={class:"main_login"},R=n(()=>o("label",{for:""},"帳號",-1)),z=n(()=>o("br",null,null,-1)),C=n(()=>o("label",{for:""},"密碼 ",-1)),S=n(()=>o("p",{style:{color:"#000","font-size":"16px"}},"登入",-1)),N=n(()=>o("li",{class:"forget_link"},[o("a",{href:""},"忘記密碼")],-1)),$={__name:"Login",setup(c){const r=g("123456@gmail.com"),i=g("12345678"),m=b();console.log(m);const v=async()=>{console.log(r.value),console.log(i.value);try{const e="production";console.log(e),console.log("Base URL: https://backend-zg7i.onrender.com/api");const t=e==="development"?"/api":"https://backend-zg7i.onrender.com/api";console.log(t);const l=`${t}/v1/auth/login`;console.log(`登入API URL: ${l}`);const d=await V.post(l,{email:r.value,password:i.value});console.log(d.request.status),d.request.status===200&&(alert("Ok"),m.push("MemberCenter"))}catch(e){console.error(e),alert("使用者帳號密碼錯誤")}};return(e,s)=>{const t=u("router-link"),l=u("el-input"),d=u("el-button");return x(),w("div",L,[o("div",U,[o("div",B,[a(t,{to:"/login"},{default:_(()=>[h("會員登入")]),_:1}),a(t,{to:"/registermember"},{default:_(()=>[h("會員註冊")]),_:1})]),o("ul",I,[o("li",null,[R,z,a(l,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=p=>r.value=p),style:{width:"240px"},type:"e-mail",placeholder:"請輸入帳號"},null,8,["modelValue"])]),o("li",null,[C,a(l,{modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=p=>i.value=p),style:{width:"240px"},type:"password",placeholder:"請輸入密碼","show-password":""},null,8,["modelValue"])]),o("li",null,[a(d,{onClick:v,style:{width:"240px","background-color":"#4ba0d7"},type:"success"},{default:_(()=>[S]),_:1})]),N])])])}}},P=f($,[["__scopeId","data-v-51aa74bd"]]);export{P as default};
