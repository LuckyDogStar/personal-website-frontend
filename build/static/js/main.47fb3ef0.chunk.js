(this["webpackJsonppersonal-site-frontend"]=this["webpackJsonppersonal-site-frontend"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),r=n(17),i=n.n(r),o=(n(24),n(19)),l=(n(25),n(5)),a=n(1),x=function(e){var t=e.toggle;return Object(a.jsxs)("nav",{className:"px-3 flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-montserrat",role:"navigation",children:[Object(a.jsx)("div",{className:"pr-8",children:Object(a.jsx)("button",{className:"'bg-gray-900 text-white' : 'text-gray-300 hover:bg-purple-100 hover:text-white', 'px-3 py-2 rounded-md text-sm'",children:Object(a.jsx)(l.b,{className:"p-10 button",to:"/",children:"Ryan Driver"})})}),Object(a.jsx)("div",{className:"div.px-4.cursor-pointer hover:bg-purple-100 md:hidden",onClick:t,children:Object(a.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),Object(a.jsxs)("div",{className:"md:block hidden",children:[Object(a.jsx)("button",{className:"'bg-gray-900 text-white' : 'text-gray-300 hover:bg-purple-100 hover:text-white', 'px-3 py-2 rounded-md text-sm",children:Object(a.jsx)(l.b,{className:"p-6",to:"/about",children:"About"})}),Object(a.jsx)("button",{className:"'bg-gray-900 text-white' : 'text-gray-300 hover:bg-purple-100 hover:text-white', 'px-3 py-2 rounded-md text-sm '",children:Object(a.jsx)(l.b,{className:"p-6",to:"/portfolio",children:"Portfolio"})}),Object(a.jsx)("button",{className:"'bg-gray-900 text-white' : 'text-gray-300 hover:bg-purple-100 hover:text-white', 'px-3 py-2 rounded-md text-sm '",children:Object(a.jsx)(l.b,{className:"p-6",to:"/contact",children:"Contact"})})]})]})},j=n(0),b=n(15),h=function(){return fetch(" https://api.ryandriver.me/put").then((function(){return fetch(" https://api.ryandriver.me/get")})).then((function(e){return e.json()})).then((function(e){document.getElementById("replaceme").innerText=e.count})),Object(a.jsxs)("div",{className:"flex px-2 justify-between items-center h-16 bg-black text-white",children:[Object(a.jsxs)("p",{className:"px-2",children:["Visitors:",Object(a.jsx)("span",{id:"replaceme"})]}),Object(a.jsx)("p",{children:"Copyright \xa9 2021 Ryan Driver all rights reserved."}),Object(a.jsx)("div",{className:"flex px-2 justify-between items-center h-16 bg-black text-white",children:Object(a.jsxs)(j.b.Provider,{value:{size:"1.5em"},children:[Object(a.jsx)("p",{className:"px-2",children:Object(a.jsxs)("a",{href:"https://github.com/SugarCabinet",children:[Object(a.jsx)(b.a,{})," "]})}),Object(a.jsx)("p",{children:Object(a.jsxs)("a",{href:"https://www.linkedin.com/in/ryanrdriver/",children:[Object(a.jsx)(b.b,{}),"  "]})})]})})]})},d=function(){return Object(a.jsxs)("div",{className:"bg-cover bg-hero-lg h-screen flex flex-col justify-center items-center",children:[Object(a.jsx)("h2",{className:"py-2 lg:text-7xl md:text-7xl sm:text-5xl text-2xl px-5 text-gray-700 font-volkhov",children:"Hello, I'm"}),Object(a.jsx)("h1",{className:"py-2 lg:text-9xl md:text-7xl sm:text-5xl text-3xl px-5 font-volkhov",children:"Ryan Driver"}),Object(a.jsx)("h3",{className:"py-2 lg:text-4xl md:text-3xl sm:text-1xl px-5 text-gray-700 font-volkhov",children:"a Software Engineer & Web Developer"}),Object(a.jsxs)(l.b,{className:"py-6 px-10 bg-purple-500 rounded-full text-3xl hover:bg-purple-300 transition duration-300 ease-in-out flex items-center animate-pulse",to:"/contact",children:["Contact",Object(a.jsx)("svg",{className:"w-6 h-6 ml-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})]})]})},p=function(){return Object(a.jsx)("div",{className:"flex flex-col"})},u=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d,{}),Object(a.jsx)(p,{})]})},m=n(3),g=function(){return Object(a.jsx)("div",{className:"h-screen flex justify-center items-center bg-purple-300",children:Object(a.jsx)("h1",{className:"text-9xl uppercase font-black",children:"About page"})})},f=function(){return Object(a.jsx)("div",{className:"h-screen flex justify-center items-center bg-blue-300",children:Object(a.jsx)("h1",{className:"text-9xl uppercase font-black",children:" Projects page"})})},O=function(){return Object(a.jsx)("div",{className:"flex flex-col",children:Object(a.jsx)("div",{className:"h-screen flex justify-center items-center bg-pink-300",children:Object(a.jsx)("h1",{className:"text-9xl uppercase font-black",children:" Contact page"})})})},v=function(e){var t=e.isOpen,n=e.toggle;return Object(a.jsxs)("div",{className:t?"grid grid-rows-4 text-center items-center bg-purple-500":"hidden",onClick:n,children:[Object(a.jsx)(l.b,{className:"p-4",to:"/",children:"Home"}),Object(a.jsx)(l.b,{className:"p-4",to:"/about",children:"About"}),Object(a.jsx)(l.b,{className:"p-4",to:"/portfolio",children:"Portfolio"}),Object(a.jsx)(l.b,{className:"p-4",to:"/contact",children:"Contact"})]})};var w=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],r=function(){s(!n)};return Object(c.useEffect)((function(){var e=function(){window.innerWidth>768&&n&&(s(!1),console.log("window resized"))};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(x,{toggle:r}),Object(a.jsx)(v,{isOpen:n,toggle:r}),Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{path:"/",exact:!0,component:u}),Object(a.jsx)(m.a,{path:"/about",exact:!0,component:g}),Object(a.jsx)(m.a,{path:"/portfolio",exact:!0,component:f}),Object(a.jsx)(m.a,{path:"/contact",exact:!0,component:O})]}),Object(a.jsx)(h,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(l.a,{children:Object(a.jsx)(w,{})})}),document.getElementById("root")),N()}},[[32,1,2]]]);
//# sourceMappingURL=main.47fb3ef0.chunk.js.map