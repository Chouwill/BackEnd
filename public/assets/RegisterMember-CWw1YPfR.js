import{a as w}from"./axios-B4uVmeYG.js";import{_ as f,r as c,s as _,t as x,v as V,x as e,y as s,z as m,H as v,E as y,G as R}from"./index-DumQ6dtz.js";const a=u=>(y("data-v-3748bd46"),u=u(),R(),u),U={class:"container"},I={class:"Register_box"},A={class:"Register_header"},k={class:"main_Register"},P=a(()=>e("label",{for:""},"使用者名稱",-1)),z=a(()=>e("br",null,null,-1)),S=a(()=>e("label",{for:""},"使用者帳號",-1)),B=a(()=>e("br",null,null,-1)),E=a(()=>e("label",{for:""},"密碼 ",-1)),N=a(()=>e("label",{for:""},"確認密碼 ",-1)),C=a(()=>e("p",{style:{color:"#000","font-size":"16px"}},"註冊",-1)),L={__name:"RegisterMember",setup(u){const p=c(""),r=c(""),d=c(""),i=c(""),h=async g=>{let l=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;if(console.log(r.value),console.log(d.value),console.log(i.value),l.test(r.value)&&d.value===i.value){console.log("註冊成功");try{const o=`${import.meta.VITE_APP_API_BASE_URL}/api/v1/auth/register`;console.log(`註冊API URL: ${o}`);const n=await w.post(o,{name:p.value,email:r.value,password:d.value});console.log(n)}catch(o){console.log("註冊失敗",o)}return!0}else return console.log("檢核失敗"),!1};return(g,l)=>{const o=_("router-link"),n=_("el-input"),b=_("el-button");return x(),V("div",U,[e("div",I,[e("div",A,[s(o,{to:"/login"},{default:m(()=>[v("會員登入")]),_:1}),s(o,{to:"/registermember"},{default:m(()=>[v("會員註冊")]),_:1})]),e("ul",k,[e("li",null,[P,z,s(n,{modelValue:p.value,"onUpdate:modelValue":l[0]||(l[0]=t=>p.value=t),style:{width:"240px"},type:"text",placeholder:"請輸入帳號"},null,8,["modelValue"])]),e("li",null,[S,B,s(n,{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=t=>r.value=t),style:{width:"240px"},type:"e-mail",placeholder:"請輸入帳號"},null,8,["modelValue"])]),e("li",null,[E,s(n,{modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=t=>d.value=t),style:{width:"240px"},type:"password",placeholder:"請輸入密碼","show-password":""},null,8,["modelValue"])]),e("li",null,[N,s(n,{modelValue:i.value,"onUpdate:modelValue":l[3]||(l[3]=t=>i.value=t),style:{width:"240px"},type:"password",placeholder:"確認輸入密碼","show-password":""},null,8,["modelValue"])]),e("li",null,[s(b,{onClick:h,style:{width:"240px","background-color":"#4ba0d7"},type:"success"},{default:m(()=>[C]),_:1})])])])])}}},M=f(L,[["__scopeId","data-v-3748bd46"]]);export{M as default};
