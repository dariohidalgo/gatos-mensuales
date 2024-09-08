import{j as e,r as a}from"./react-Cn7aBO_v.js";import{c as le}from"./react-dom-C6A_9beh.js";import{B as ie}from"./react-router-dom-CY0y2BL1.js";import"./firebase-B_-rUrOV.js";import{i as de,g as me,a as ue,G as he,s as xe,o as ee,q as V,c as T,b as _,T as Z,d as ae,e as W,u as te,f as ne,h as re}from"./@firebase-BI60QZOY.js";import{u as $,a as pe,b as J,N as ge}from"./react-router-Ci5n9932.js";import{P as je}from"./react-chartjs-2-gnovyXlA.js";import{C as fe,A as be,p as ye,a as ve}from"./chart.js-DDj9ZRaa.js";/* empty css                  */import"./scheduler-CzFDRTuY.js";import"./@remix-run-C0MJ9PeH.js";import"./tslib-BGVaTf34.js";import"./idb-BXWtuYvb.js";import"./@kurkle-BZxJdD1U.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))x(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&x(f)}).observe(document,{childList:!0,subtree:!0});function u(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function x(n){if(n.ep)return;n.ep=!0;const o=u(n);fetch(n.href,o)}})();const Ne={apiKey:"AIzaSyCqkgutqaofo2LOGpNnAurawoP21IrMicY",authDomain:"gastos-66dbe.firebaseapp.com",projectId:"gastos-66dbe",storageBucket:"gastos-66dbe.appspot.com",messagingSenderId:"1092119604551",appId:"1:1092119604551:web:032ce6a8cb110fec04f062"},oe=de(Ne),P=me(oe),w=ue(oe),Ce=new he,Ee=()=>{const c=$(),r=async()=>{try{const x=(await xe(P,Ce)).user;x&&["dhidalgo651@gmail.com","voosdani@gmail.com"].includes(x.email)?c("/expenses"):(alert("Correo electrónico no autorizado."),P.signOut())}catch(u){console.error("Error durante el inicio de sesión:",u),alert("Error durante el inicio de sesión. Por favor, inténtalo de nuevo.")}};return e.jsx("div",{className:"login d-flex justify-content-center align-items-center vh-100",children:e.jsxs("div",{className:"col-10 col-sm-8 col-md-6 col-lg-4 d-flex flex-column align-items-center",children:[e.jsx("h2",{className:"titulo mb-4 text-center",children:"Bienvenido a la Aplicación de Gastos"}),e.jsx("button",{className:"btn btn-primary",onClick:r,children:"Iniciar sesión con Google"})]})})},Se=()=>{const c=$(),r=()=>{c("/gastos-grafico")};return e.jsx("div",{className:"container d-flex flex-column align-items-center",children:e.jsxs("div",{className:"d-flex justify-content-center mt-3",children:[e.jsx("button",{className:"btn btn-primary mx-2",style:{width:"200px"},onClick:()=>window.location.href="/credit-expenses",children:"Ver Gastos de Tarjeta"}),e.jsx("button",{className:"btn btn-info mx-2",style:{width:"200px"},onClick:r,children:"Ver Gráfico de Gastos"})]})})},z=c=>new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS",minimumFractionDigits:2}).format(c),we=(c,r,u)=>c.flatMap(n=>{const o=new Date(n.date),f=o.getMonth()+1,D=o.getFullYear(),E=(u-D)*12+(r-(f+1));return E>=0&&E<n.installments?n.amountInPesos/n.installments:0}).reduce((n,o)=>n+o,0),De=()=>{const[c,r]=a.useState([]),[u,x]=a.useState([]),[n,o]=a.useState([]),[f,D]=a.useState(0),[E,k]=a.useState(0),[M,R]=a.useState(0),[F,p]=a.useState((new Date().getMonth()+1).toString()),[h]=a.useState(new Date().getFullYear()),[I,v]=a.useState(""),[Y,N]=a.useState("Gastos"),[A,B]=a.useState(""),[q,K]=a.useState(""),[Q,H]=a.useState(""),[s,d]=a.useState(""),[m,g]=a.useState(null);a.useEffect(()=>{const t=async()=>{const j=V(T(w,"expenses")),i=(await _(j)).docs.map(b=>{const y=b.data(),ce=y.createdAt instanceof Z?y.createdAt.toDate():new Date;return{id:b.id,amount:y.amount,type:y.type,category:y.category,description:y.description||"",installments:y.installments,createdAt:ce,userName:y.userName||"",paid:y.paid||!1}});r(i)},l=async()=>{const j=V(T(w,"creditCardExpenses")),i=(await _(j)).docs.map(b=>{const y=b.data();return{id:b.id,...y}});o(i)};t(),l()},[]),a.useEffect(()=>{if(F){const t=c.filter(i=>{const b=i.createdAt.getMonth()+1,y=i.createdAt.getFullYear();return b===parseInt(F)&&y===new Date().getFullYear()}),l=t.filter(i=>i.type==="Ingresos").reduce((i,b)=>i+b.amount,0),j=t.filter(i=>i.type==="Gastos").reduce((i,b)=>i+b.amount,0),S=we(n,parseInt(F),h);x(t),D(l),k(S),R(j)}else x(c)},[F,h,c,n]),a.useEffect(()=>{const t=ee(P,l=>{d(l?l.displayName||"Usuario Actual":"")});return()=>t()},[]);const C=t=>{const l=t.target.value;p(l)},G=async t=>{t.preventDefault();try{await ae(T(w,"expenses"),{amount:parseFloat(I),type:Y,category:A,description:q,createdAt:new Date(Q),userName:s,installments:0}),v(""),N("Gastos"),B(""),K(""),H("");const l=V(T(w,"expenses")),S=(await _(l)).docs.map(i=>{const b=i.data(),y=b.createdAt instanceof Z?b.createdAt.toDate():new Date;return{id:i.id,...b,createdAt:y}});r(S)}catch(l){console.error("Error al agregar el gasto: ",l)}},U=async t=>{g(t)},L=async(t,l)=>{try{const j=W(w,"expenses",t);await te(j,{amount:parseFloat(l)}),r(S=>S.map(i=>i.id===t?{...i,amount:parseFloat(l)}:i)),g(null)}catch(j){console.error("Error updating expense: ",j)}},O=async t=>{if(window.confirm("¿Estás seguro de que deseas eliminar este gasto?"))try{await ne(W(w,"expenses",t)),r(j=>j.filter(S=>S.id!==t))}catch(j){console.error("Error al eliminar el documento: ",j)}},X=async(t,l)=>{try{const j=W(w,"expenses",t);await te(j,{paid:!l}),r(S=>S.map(i=>i.id===t?{...i,paid:!l}:i))}catch(j){console.error("Error al actualizar el estado de pago: ",j)}};return e.jsx("div",{className:"container mt-4 ",children:e.jsxs("div",{className:"container mt-4",children:[e.jsxs("form",{onSubmit:G,className:"row mb-4 align-items-center mt-md-3",children:[e.jsx("div",{className:"col-12 col-md-2 mb-3 mb-md-0",children:e.jsx("input",{type:"number",className:"form-control",placeholder:"Monto",value:I,onChange:t=>v(t.target.value),required:!0})}),e.jsx("div",{className:"col-12 col-md-2 mb-3 mb-md-0",children:e.jsxs("select",{className:"form-select",value:Y,onChange:t=>N(t.target.value),children:[e.jsx("option",{value:"Gastos",children:"Gastos"}),e.jsx("option",{value:"Ingresos",children:"Ingresos"})]})}),e.jsx("div",{className:"col-12 col-md-2 mb-3 mb-md-0",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Categoría",value:A,onChange:t=>B(t.target.value)})}),e.jsx("div",{className:"col-12 col-md-3 mb-3 mb-md-0",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Descripción",value:q,onChange:t=>K(t.target.value)})}),e.jsx("div",{className:"col-12 col-md-2 mb-3 mb-md-0",children:e.jsx("input",{type:"date",className:"form-control",value:Q,onChange:t=>H(t.target.value),required:!0})}),e.jsx("div",{className:"col-12 col-md-1 mb-3 mb-md-0",children:e.jsx("button",{type:"submit",className:"btn btn-primary w-100",children:"Agregar"})})]}),e.jsx("div",{className:"text-center mb-4",children:e.jsxs("select",{className:"form-select w-auto d-inline-block",value:F,onChange:C,children:[e.jsx("option",{value:"",children:"Seleccionar mes"}),Array.from({length:12},(t,l)=>e.jsx("option",{value:l+1,children:new Date(0,l).toLocaleString("default",{month:"long"})},l+1))]})}),e.jsxs("div",{className:"row text-center",children:[e.jsx("div",{className:"col-md-3",children:e.jsxs("div",{className:"card text-white bg-primary mb-3",children:[e.jsx("div",{className:"card-header",children:"Total Ingresos"}),e.jsx("div",{className:"card-body",children:e.jsx("h5",{className:"card-title",children:z(f)})})]})}),e.jsx("div",{className:"col-md-3",children:e.jsxs("div",{className:"card text-white bg-danger mb-3",children:[e.jsx("div",{className:"card-header",children:"Total Gastos Fijos"}),e.jsx("div",{className:"card-body",children:e.jsx("h5",{className:"card-title",children:z(M)})})]})}),e.jsx("div",{className:"col-md-3",children:e.jsxs("div",{className:"card text-white bg-warning mb-3",children:[e.jsx("div",{className:"card-header",children:"Total Tarjeta de Crédito"}),e.jsx("div",{className:"card-body",children:e.jsx("h5",{className:"card-title",children:z(E)})})]})}),e.jsx("div",{className:"col-md-3 mx-auto",children:e.jsxs("div",{className:"card text-white bg-success mb-3",children:[e.jsx("div",{className:"card-header",children:"Lo Que Queda"}),e.jsx("div",{className:"card-body",children:e.jsx("h5",{className:"card-title",children:z(f-M-E)})})]})})]}),e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-md-12 bg-dark",children:[e.jsx("h4",{className:"text-center my-4",children:"Lista de Gastos"}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-striped table-dark",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Fecha"}),e.jsx("th",{children:"Descripción"}),e.jsx("th",{children:"Monto"}),e.jsx("th",{children:"Tipo"}),e.jsx("th",{children:"Categoría"}),e.jsx("th",{children:"Pagado"}),e.jsx("th",{children:"Acciones"})]})}),e.jsx("tbody",{children:u.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"d-none d-md-table-cell",children:t.createdAt.toLocaleDateString()}),e.jsx("td",{className:"d-none d-md-table-cell",children:t.description}),e.jsx("td",{children:m===t.id?e.jsx("input",{type:"number",value:I,onChange:l=>v(l.target.value)}):z(t.amount)}),e.jsx("td",{children:t.type}),e.jsx("td",{children:t.category}),e.jsx("td",{children:t.type!=="Ingresos"&&e.jsx("input",{type:"checkbox",checked:!!t.paid,onChange:()=>X(t.id,!!t.paid)})}),e.jsxs("td",{className:"d-flex justify-content-center",children:[m===t.id?e.jsx("button",{className:"btn btn-success btn-sm",onClick:()=>L(t.id,I),children:"Guardar"}):e.jsx("button",{className:"btn btn-warning btn-sm col-md-2 mb-3 mb-md-0 ",onClick:()=>U(t.id),children:"Editar"}),e.jsx("button",{className:"btn btn-danger btn-sm ms-2 col-md-2 mb-3 mb-md-0 ",onClick:()=>O(t.id),children:"Eliminar"})]})]},t.id))})]})})]})})]})})},Fe=({onTotalsUpdate:c})=>{const r=$(),[u,x]=a.useState(""),[n,o]=a.useState(""),[f,D]=a.useState(""),[E,k]=a.useState(""),[M,R]=a.useState(1),F=new Date().getMonth(),p=new Date().getFullYear(),[h,I]=a.useState(F+1),[v,Y]=a.useState(p),[N,A]=a.useState([]),[B,q]=a.useState([]);a.useEffect(()=>{(async()=>{const d=V(T(w,"creditCardExpenses")),g=(await _(d)).docs.map(C=>{const G=C.data();return{id:C.id,...G}});A(g),q(g)})()},[]);const K=async s=>{s.preventDefault();try{const m={id:(await ae(T(w,"creditCardExpenses"),{date:u,transactionDetail:n,amountInPesos:parseFloat(f),amountInDollars:parseFloat(E)||0,installments:M})).id,date:u,transactionDetail:n,amountInPesos:parseFloat(f),amountInDollars:parseFloat(E)||0,installments:M};A(g=>[...g,m]),q(g=>[...g,m]),x(""),o(""),D(""),k(""),R(1)}catch(d){console.error("Error al agregar el gasto: ",d)}};a.useEffect(()=>{if(h&&v){const d=N.flatMap(m=>{const g=new Date(m.date),C=g.getMonth()+1,G=g.getFullYear(),U=h,L=v;if(isNaN(U)||isNaN(C))return console.error("Error: Mes seleccionado o índice de mes es NaN"),[];const O=(L-G)*12+(U-(C+1));if(O>=0&&O<m.installments){const X=m.installments-O;return{...m,remainingInstallments:X}}else return[]});q(d)}else q(N);const s={};N.forEach(d=>{const m=new Date(d.date),g=d.amountInPesos/d.installments;for(let C=0;C<d.installments;C++){const G=(m.getMonth()+C+1)%12,L=`${m.getFullYear()+Math.floor((m.getMonth()+C+1)/12)}-${(G||12).toString().padStart(2,"0")}`;s[L]||(s[L]=0),s[L]+=g}}),c(s)},[h,v,N]);const Q=async s=>{if(!(!s||!window.confirm("¿Estás seguro de que deseas eliminar este gasto?")))try{await ne(W(w,"creditCardExpenses",s)),A(m=>m.filter(g=>g.id!==s)),q(m=>m.filter(g=>g.id!==s))}catch(m){console.error("Error al eliminar el gasto: ",m)}},H=B.reduce((s,d)=>s+d.amountInPesos/d.installments,0);return e.jsxs("div",{className:"container",children:[e.jsxs("form",{className:"row justify-content-center align-items-center m-3",onSubmit:K,children:[e.jsxs("div",{className:"col-md-2",children:[e.jsx("label",{className:"mb-2",htmlFor:"date",children:"Fecha:"}),e.jsx("input",{className:"form-control",type:"date",id:"date",value:u,onChange:s=>x(s.target.value),required:!0})]}),e.jsxs("div",{className:"col-md-3",children:[e.jsx("label",{className:"mb-2",htmlFor:"transactionDetail",children:"Detalle de Transacción:"}),e.jsx("input",{className:"form-control",type:"text",id:"transactionDetail",placeholder:"Detalle",value:n,onChange:s=>o(s.target.value),required:!0})]}),e.jsxs("div",{className:"col-md-2",children:[e.jsx("label",{className:"mb-2",htmlFor:"amountInPesos",children:"Monto en Pesos:"}),e.jsx("input",{className:"form-control",type:"number",id:"amountInPesos",placeholder:"Pesos",value:f,onChange:s=>D(s.target.value),required:!0})]}),e.jsxs("div",{className:"col-md-2",children:[e.jsx("label",{className:"mb-2",htmlFor:"amountInDollars",children:"Monto en Dólares:"}),e.jsx("input",{className:"form-control",type:"number",id:"amountInDollars",placeholder:"Dólares",value:E,onChange:s=>k(s.target.value)})]}),e.jsxs("div",{className:"col-md-2",children:[e.jsx("label",{className:"mb-2",htmlFor:"installments",children:"Cuotas:"}),e.jsx("input",{className:"form-control",type:"number",id:"installments",min:"1",value:M,onChange:s=>R(parseInt(s.target.value)),required:!0})]}),e.jsx("div",{className:"col-md-2 d-flex justify-content-center mt-3",children:e.jsx("button",{className:"btn btn-success btn-lg",type:"submit",children:"Enviar"})}),e.jsx("div",{className:"col-md-2 d-flex justify-content-center mt-3",children:e.jsx("button",{className:"btn btn-primary btn-lg",onClick:()=>r("/expenses"),children:"Volver"})})]}),e.jsxs("div",{className:"row mb-4 d-flex justify-content-center",children:[e.jsxs("div",{className:"col-md-2 text-center",children:[e.jsx("label",{htmlFor:"monthFilter",className:"form-label",children:"Filtrar por mes:"}),e.jsx("select",{id:"monthFilter",className:"form-select",value:h,onChange:s=>I(parseInt(s.target.value)),children:[...Array(12)].map((s,d)=>e.jsx("option",{value:d+1,children:new Date(0,d).toLocaleString("es-ES",{month:"long"})},d+1))})]}),e.jsxs("div",{className:"col-md-2 text-center",children:[e.jsx("label",{htmlFor:"yearFilter",className:"form-label",children:"Filtrar por año:"}),e.jsxs("select",{id:"yearFilter",className:"form-select",value:v,onChange:s=>Y(parseInt(s.target.value)),children:[e.jsx("option",{value:p,children:p}),e.jsx("option",{value:p+1,children:p+1})]})]})]}),e.jsxs("h3",{className:"mb-3",children:["Gastos de Tarjeta de Crédito -"," ",new Date(0,h-1).toLocaleString("es-ES",{month:"long"})," ",v]}),e.jsxs("table",{className:"table table-striped table-dark",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Fecha"}),e.jsx("th",{children:"Detalle"}),e.jsx("th",{children:"Monto (Pesos)"}),e.jsx("th",{children:"Monto (Dólares)"}),e.jsx("th",{children:"Cuotas Restantes"}),e.jsx("th",{children:"Acciones"})]})}),e.jsx("tbody",{children:B.map(s=>{const d=s.amountInPesos/s.installments,m=s.amountInDollars?s.amountInDollars/s.installments:0;return e.jsxs("tr",{children:[e.jsx("td",{children:s.date}),e.jsx("td",{children:s.transactionDetail}),e.jsxs("td",{children:["$",d.toFixed(2)]}),e.jsxs("td",{children:["$",m.toFixed(2)]}),e.jsx("td",{children:s.installments}),e.jsx("td",{children:e.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>Q(s.id),children:"Eliminar"})})]},s.id)})})]}),e.jsx("div",{className:"d-flex justify-content-end",children:e.jsxs("h4",{children:["Total a pagar en"," ",new Date(0,h-1).toLocaleString("es-ES",{month:"long"})," ",v,": $",H.toFixed(2)]})})]})};fe.register(be,ye,ve);const Ie=()=>{const c=(new Date().getMonth()+1).toString(),[r,u]=a.useState([]),[x,n]=a.useState(c),o=$();a.useEffect(()=>{(async()=>{const h=V(T(w,"expenses")),v=(await _(h)).docs.map(Y=>{const N=Y.data(),A=N.createdAt instanceof Z?N.createdAt.toDate():new Date;return{amount:N.amount,category:N.category,createdAt:A}});u(v)})()},[]);const f=r.filter(p=>p.createdAt.getMonth()+1===parseInt(x)&&!p.category.toLowerCase().includes("ingresos")&&!p.category.toLowerCase().includes("sueldo")),D=[...new Set(f.map(p=>p.category))],E=D.map(p=>f.filter(h=>h.category===p).reduce((h,I)=>h+I.amount,0)),k={labels:D,datasets:[{label:"Gastos por Categoría",data:E,backgroundColor:["#FF6384","#36A2EB","#FFCE56","#4BC0C0","#9966FF"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#4BC0C0","#9966FF"]}]},M={responsive:!0,maintainAspectRatio:!1},R=p=>{n(p.target.value)},F=()=>{o(-1)};return e.jsxs("div",{className:"container mt-4",children:[e.jsx("h2",{className:"text-center",children:"Resumen de Gastos por Categoría"}),e.jsx("div",{className:"text-center mb-4",children:e.jsx("select",{className:"form-select w-auto d-inline-block mt-4",value:x,onChange:R,children:Array.from({length:12},(p,h)=>e.jsx("option",{value:h+1,children:new Date(0,h).toLocaleString("default",{month:"long"})},h+1))})}),e.jsx("div",{className:"d-flex justify-content-center",children:e.jsx("div",{className:"col-12 col-md-12",style:{height:"500px"},children:e.jsx(je,{data:k,options:M})})}),e.jsx("div",{className:"text-center mt-4",children:e.jsx("button",{className:"btn btn-primary",onClick:F,children:"Volver"})})]})},Me=()=>{const[c,r]=a.useState(null),u=$();a.useEffect(()=>{const n=ee(P,o=>{r(o)});return()=>n()},[]);const x=async()=>{try{await re(P),u("/")}catch(n){console.error("Error al cerrar sesión: ",n)}};return c?e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"10px"},children:[c.photoURL&&e.jsx("img",{src:c.photoURL,alt:"User Avatar",style:{width:40,height:40,borderRadius:"50%",marginRight:10}}),e.jsx("span",{children:c.displayName}),e.jsx("button",{className:"btn btn-danger btn-sm ms-3",onClick:x,children:"Cerrar Sesión"})]}):null},se=({children:c})=>{const[r,u]=a.useState(null),[x,n]=a.useState(!0);return a.useEffect(()=>{const o=ee(P,f=>{u(f),n(!1)});return()=>o()},[]),x?null:r?e.jsx(e.Fragment,{children:c}):e.jsx(ge,{to:"/"})},Ae=()=>{const c=r=>{console.log("Totales actualizados:",r)};return a.useEffect(()=>{const r=()=>{navigator.sendBeacon("/signout",JSON.stringify({user:P.currentUser})),re(P).catch(u=>console.error("Error al desloguearse:",u))};return window.addEventListener("unload",r),()=>{window.removeEventListener("unload",r)}},[]),e.jsx(ie,{children:e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(Me,{}),e.jsx("h1",{className:"d-flex justify-content-center align-items-center",children:"Gastos Hidalgo Voos"}),e.jsxs(pe,{children:[e.jsx(J,{path:"/",element:e.jsx(Ee,{})}),e.jsx(J,{path:"/gastos-grafico",element:e.jsx(Ie,{})}),e.jsx(J,{path:"/expenses",element:e.jsx(se,{children:e.jsxs(e.Fragment,{children:[e.jsx(Se,{}),e.jsx(De,{})]})})}),e.jsx(J,{path:"/credit-expenses",element:e.jsx(se,{children:e.jsx(Fe,{onTotalsUpdate:c})})})]})]})})};le(document.getElementById("root")).render(e.jsx(a.StrictMode,{children:e.jsx(Ae,{})}));
