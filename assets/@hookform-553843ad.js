import{g as l,s as u,a as p}from"./react-hook-form-789c3897.js";const d=(o,s,e)=>{if(o&&"reportValidity"in o){const r=l(e,s);o.setCustomValidity(r&&r.message||""),o.reportValidity()}},h=(o,s)=>{for(const e in s.fields){const r=s.fields[e];r&&r.ref&&"reportValidity"in r.ref?d(r.ref,e,o):r.refs&&r.refs.forEach(i=>d(i,e,o))}},y=(o,s)=>{s.shouldUseNativeValidation&&h(o,s);const e={};for(const r in o){const i=l(s.fields,r),t=Object.assign(o[r]||{},{ref:i&&i.ref});if(g(s.names||Object.keys(o),r)){const n=Object.assign({},l(e,r));u(n,"root",t),u(e,r,n)}else u(e,r,t)}return e},g=(o,s)=>o.some(e=>e.startsWith(s+"."));var E=function(o,s){for(var e={};o.length;){var r=o[0],i=r.code,t=r.message,n=r.path.join(".");if(!e[n])if("unionErrors"in r){var a=r.unionErrors[0].errors[0];e[n]={message:a.message,type:a.code}}else e[n]={message:t,type:i};if("unionErrors"in r&&r.unionErrors.forEach(function(m){return m.errors.forEach(function(v){return o.push(v)})}),s){var c=e[n].types,f=c&&c[r.code];e[n]=p(n,s,e,i,f?[].concat(f,r.message):r.message)}o.shift()}return e},j=function(o,s,e){return e===void 0&&(e={}),function(r,i,t){try{return Promise.resolve(function(n,a){try{var c=Promise.resolve(o[e.mode==="sync"?"parse":"parseAsync"](r,s)).then(function(f){return t.shouldUseNativeValidation&&h({},t),{errors:{},values:e.raw?r:f}})}catch(f){return a(f)}return c&&c.then?c.then(void 0,a):c}(0,function(n){if(function(a){return Array.isArray(a==null?void 0:a.errors)}(n))return{values:{},errors:y(E(n.errors,!t.shouldUseNativeValidation&&t.criteriaMode==="all"),t)};throw n}))}catch(n){return Promise.reject(n)}}};export{j as t};
