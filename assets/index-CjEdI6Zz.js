import{j as e,a as c}from"./index-vLgqoeBD.js";import{L as d,e as n,N as i,f as _,C as p,d as h}from"./index-D4zzeelk.js";import{I as x}from"./index-Bb5BpVo7.js";const j=a=>{const s=new Date(a),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][s.getMonth()],r=s.getDate(),t=s.getFullYear();return`${o} ${r.toString().padStart(2,"0")} ${t}`},u=a=>a>new Date().getTime(),N=({bookedCamper:a})=>{const{camper:{name:s,gallery:m,price:o,location:r},date:t,comment:l}=a;return e.jsxs("div",{className:`booked_camper_item ${u(t)?"":"disabled"}`,children:[e.jsx("h2",{className:"booked_camper_item__date",children:j(t)}),e.jsx(x,{src:m[0],alt:s,className:"booked_camper_item__img"}),e.jsxs("div",{className:"booked_camper_item__details",children:[e.jsxs("div",{className:"booked_camper_item__details_header",children:[e.jsx("h3",{className:"booked_camper_item__details_header_name",children:s}),e.jsx(d,{name:r,className:"booked_camper_item__details_header_location"})]}),e.jsxs("h3",{className:"booked_camper_item__details_price",children:["€",o]})]}),e.jsxs("p",{className:"booked_camper_item__comment",children:["Comment: ",l]})]})},k=()=>{const a=c(n);return e.jsxs("div",{className:"booked_camper_list",children:[e.jsx("h2",{className:"booked_camper_list__title",children:"Your booked campers"}),e.jsx("ul",{className:"booked_camper_list__items",children:a.length>0?a.map(s=>e.jsx(N,{bookedCamper:s},s.id)):e.jsx(i,{})})]})},b=()=>{const a=c(_);return e.jsxs("div",{className:"favorite_list",children:[e.jsx("ul",{className:"favorite_list__items",children:a.length>0?a.map(s=>e.jsx(p,{camper:s},s._id)):e.jsx(i,{})}),e.jsx(h,{})]})},f=()=>e.jsxs("div",{className:"favorite_page",children:[e.jsx(k,{}),e.jsx(b,{})]});export{f as default};
