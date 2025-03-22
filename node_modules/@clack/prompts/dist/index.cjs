"use strict";const node_util=require("node:util"),core=require("@clack/core"),process$1=require("node:process"),e=require("picocolors"),sisteransi=require("sisteransi");function _interopDefaultCompat(t){return t&&typeof t=="object"&&"default"in t?t.default:t}const process__default=_interopDefaultCompat(process$1),e__default=_interopDefaultCompat(e);function isUnicodeSupported(){return process__default.platform!=="win32"?process__default.env.TERM!=="linux":!!process__default.env.CI||!!process__default.env.WT_SESSION||!!process__default.env.TERMINUS_SUBLIME||process__default.env.ConEmuTask==="{cmd::Cmder}"||process__default.env.TERM_PROGRAM==="Terminus-Sublime"||process__default.env.TERM_PROGRAM==="vscode"||process__default.env.TERM==="xterm-256color"||process__default.env.TERM==="alacritty"||process__default.env.TERMINAL_EMULATOR==="JetBrains-JediTerm"}const P=isUnicodeSupported(),u=(t,o)=>P?t:o,ie=u("\u25C6","*"),L=u("\u25A0","x"),G=u("\u25B2","x"),S=u("\u25C7","o"),ae=u("\u250C","T"),a=u("\u2502","|"),d=u("\u2514","\u2014"),_=u("\u25CF",">"),A=u("\u25CB"," "),C=u("\u25FB","[\u2022]"),V=u("\u25FC","[+]"),N=u("\u25FB","[ ]"),oe=u("\u25AA","\u2022"),j=u("\u2500","-"),le=u("\u256E","+"),ce=u("\u251C","+"),ue=u("\u256F","+"),B=u("\u25CF","\u2022"),W=u("\u25C6","*"),H=u("\u25B2","!"),q=u("\u25A0","x"),v=t=>{switch(t){case"initial":case"active":return e__default.cyan(ie);case"cancel":return e__default.red(L);case"error":return e__default.yellow(G);case"submit":return e__default.green(S)}},E=t=>{const{cursor:o,options:s,style:r}=t,i=t.maxItems??Number.POSITIVE_INFINITY,n=Math.max(process.stdout.rows-4,0),c=Math.min(n,Math.max(i,5));let l=0;o>=l+c-3?l=Math.max(Math.min(o-c+3,s.length-c),0):o<l+2&&(l=Math.max(o-2,0));const $=c<s.length&&l>0,p=c<s.length&&l+c<s.length;return s.slice(l,l+c).map((w,y,f)=>{const x=y===0&&$,M=y===f.length-1&&p;return x||M?e__default.dim("..."):r(w,y+l===o)})},text=t=>new core.TextPrompt({validate:t.validate,placeholder:t.placeholder,defaultValue:t.defaultValue,initialValue:t.initialValue,render(){const o=`${e__default.gray(a)}
${v(this.state)}  ${t.message}
`,s=t.placeholder?e__default.inverse(t.placeholder[0])+e__default.dim(t.placeholder.slice(1)):e__default.inverse(e__default.hidden("_")),r=this.value?this.valueWithCursor:s;switch(this.state){case"error":return`${o.trim()}
${e__default.yellow(a)}  ${r}
${e__default.yellow(d)}  ${e__default.yellow(this.error)}
`;case"submit":return`${o}${e__default.gray(a)}  ${e__default.dim(this.value||t.placeholder)}`;case"cancel":return`${o}${e__default.gray(a)}  ${e__default.strikethrough(e__default.dim(this.value??""))}${this.value?.trim()?`
${e__default.gray(a)}`:""}`;default:return`${o}${e__default.cyan(a)}  ${r}
${e__default.cyan(d)}
`}}}).prompt(),password=t=>new core.PasswordPrompt({validate:t.validate,mask:t.mask??oe,render(){const o=`${e__default.gray(a)}
${v(this.state)}  ${t.message}
`,s=this.valueWithCursor,r=this.masked;switch(this.state){case"error":return`${o.trim()}
${e__default.yellow(a)}  ${r}
${e__default.yellow(d)}  ${e__default.yellow(this.error)}
`;case"submit":return`${o}${e__default.gray(a)}  ${e__default.dim(r)}`;case"cancel":return`${o}${e__default.gray(a)}  ${e__default.strikethrough(e__default.dim(r??""))}${r?`
${e__default.gray(a)}`:""}`;default:return`${o}${e__default.cyan(a)}  ${s}
${e__default.cyan(d)}
`}}}).prompt(),confirm=t=>{const o=t.active??"Yes",s=t.inactive??"No";return new core.ConfirmPrompt({active:o,inactive:s,initialValue:t.initialValue??!0,render(){const r=`${e__default.gray(a)}
${v(this.state)}  ${t.message}
`,i=this.value?o:s;switch(this.state){case"submit":return`${r}${e__default.gray(a)}  ${e__default.dim(i)}`;case"cancel":return`${r}${e__default.gray(a)}  ${e__default.strikethrough(e__default.dim(i))}
${e__default.gray(a)}`;default:return`${r}${e__default.cyan(a)}  ${this.value?`${e__default.green(_)} ${o}`:`${e__default.dim(A)} ${e__default.dim(o)}`} ${e__default.dim("/")} ${this.value?`${e__default.dim(A)} ${e__default.dim(s)}`:`${e__default.green(_)} ${s}`}
${e__default.cyan(d)}
`}}}).prompt()},select=t=>{const o=(s,r)=>{const i=s.label??String(s.value);switch(r){case"selected":return`${e__default.dim(i)}`;case"active":return`${e__default.green(_)} ${i} ${s.hint?e__default.dim(`(${s.hint})`):""}`;case"cancelled":return`${e__default.strikethrough(e__default.dim(i))}`;default:return`${e__default.dim(A)} ${e__default.dim(i)}`}};return new core.SelectPrompt({options:t.options,initialValue:t.initialValue,render(){const s=`${e__default.gray(a)}
${v(this.state)}  ${t.message}
`;switch(this.state){case"submit":return`${s}${e__default.gray(a)}  ${o(this.options[this.cursor],"selected")}`;case"cancel":return`${s}${e__default.gray(a)}  ${o(this.options[this.cursor],"cancelled")}
${e__default.gray(a)}`;default:return`${s}${e__default.cyan(a)}  ${E({cursor:this.cursor,options:this.options,maxItems:t.maxItems,style:(r,i)=>o(r,i?"active":"inactive")}).join(`
${e__default.cyan(a)}  `)}
${e__default.cyan(d)}
`}}}).prompt()},selectKey=t=>{const o=(s,r="inactive")=>{const i=s.label??String(s.value);return r==="selected"?`${e__default.dim(i)}`:r==="cancelled"?`${e__default.strikethrough(e__default.dim(i))}`:r==="active"?`${e__default.bgCyan(e__default.gray(` ${s.value} `))} ${i} ${s.hint?e__default.dim(`(${s.hint})`):""}`:`${e__default.gray(e__default.bgWhite(e__default.inverse(` ${s.value} `)))} ${i} ${s.hint?e__default.dim(`(${s.hint})`):""}`};return new core.SelectKeyPrompt({options:t.options,initialValue:t.initialValue,render(){const s=`${e__default.gray(a)}
${v(this.state)}  ${t.message}
`;switch(this.state){case"submit":return`${s}${e__default.gray(a)}  ${o(this.options.find(r=>r.value===this.value)??t.options[0],"selected")}`;case"cancel":return`${s}${e__default.gray(a)}  ${o(this.options[0],"cancelled")}
${e__default.gray(a)}`;default:return`${s}${e__default.cyan(a)}  ${this.options.map((r,i)=>o(r,i===this.cursor?"active":"inactive")).join(`
${e__default.cyan(a)}  `)}
${e__default.cyan(d)}
`}}}).prompt()},multiselect=t=>{const o=(s,r)=>{const i=s.label??String(s.value);return r==="active"?`${e__default.cyan(C)} ${i} ${s.hint?e__default.dim(`(${s.hint})`):""}`:r==="selected"?`${e__default.green(V)} ${e__default.dim(i)}`:r==="cancelled"?`${e__default.strikethrough(e__default.dim(i))}`:r==="active-selected"?`${e__default.green(V)} ${i} ${s.hint?e__default.dim(`(${s.hint})`):""}`:r==="submitted"?`${e__default.dim(i)}`:`${e__default.dim(N)} ${e__default.dim(i)}`};return new core.MultiSelectPrompt({options:t.options,initialValues:t.initialValues,required:t.required??!0,cursorAt:t.cursorAt,validate(s){if(this.required&&s.length===0)return`Please select at least one option.
${e__default.reset(e__default.dim(`Press ${e__default.gray(e__default.bgWhite(e__default.inverse(" space ")))} to select, ${e__default.gray(e__default.bgWhite(e__default.inverse(" enter ")))} to submit`))}`},render(){const s=`${e__default.gray(a)}
${v(this.state)}  ${t.message}
`,r=(i,n)=>{const c=this.value.includes(i.value);return n&&c?o(i,"active-selected"):c?o(i,"selected"):o(i,n?"active":"inactive")};switch(this.state){case"submit":return`${s}${e__default.gray(a)}  ${this.options.filter(({value:i})=>this.value.includes(i)).map(i=>o(i,"submitted")).join(e__default.dim(", "))||e__default.dim("none")}`;case"cancel":{const i=this.options.filter(({value:n})=>this.value.includes(n)).map(n=>o(n,"cancelled")).join(e__default.dim(", "));return`${s}${e__default.gray(a)}  ${i.trim()?`${i}
${e__default.gray(a)}`:""}`}case"error":{const i=this.error.split(`
`).map((n,c)=>c===0?`${e__default.yellow(d)}  ${e__default.yellow(n)}`:`   ${n}`).join(`
`);return`${s+e__default.yellow(a)}  ${E({options:this.options,cursor:this.cursor,maxItems:t.maxItems,style:r}).join(`
${e__default.yellow(a)}  `)}
${i}
`}default:return`${s}${e__default.cyan(a)}  ${E({options:this.options,cursor:this.cursor,maxItems:t.maxItems,style:r}).join(`
${e__default.cyan(a)}  `)}
${e__default.cyan(d)}
`}}}).prompt()},groupMultiselect=t=>{const o=(s,r,i=[])=>{const n=s.label??String(s.value),c=typeof s.group=="string",l=c&&(i[i.indexOf(s)+1]??{group:!0}),$=c&&l.group===!0,p=c?`${$?d:a} `:"";return r==="active"?`${e__default.dim(p)}${e__default.cyan(C)} ${n} ${s.hint?e__default.dim(`(${s.hint})`):""}`:r==="group-active"?`${p}${e__default.cyan(C)} ${e__default.dim(n)}`:r==="group-active-selected"?`${p}${e__default.green(V)} ${e__default.dim(n)}`:r==="selected"?`${e__default.dim(p)}${e__default.green(V)} ${e__default.dim(n)}`:r==="cancelled"?`${e__default.strikethrough(e__default.dim(n))}`:r==="active-selected"?`${e__default.dim(p)}${e__default.green(V)} ${n} ${s.hint?e__default.dim(`(${s.hint})`):""}`:r==="submitted"?`${e__default.dim(n)}`:`${e__default.dim(p)}${e__default.dim(N)} ${e__default.dim(n)}`};return new core.GroupMultiSelectPrompt({options:t.options,initialValues:t.initialValues,required:t.required??!0,cursorAt:t.cursorAt,validate(s){if(this.required&&s.length===0)return`Please select at least one option.
${e__default.reset(e__default.dim(`Press ${e__default.gray(e__default.bgWhite(e__default.inverse(" space ")))} to select, ${e__default.gray(e__default.bgWhite(e__default.inverse(" enter ")))} to submit`))}`},render(){const s=`${e__default.gray(a)}
${v(this.state)}  ${t.message}
`;switch(this.state){case"submit":return`${s}${e__default.gray(a)}  ${this.options.filter(({value:r})=>this.value.includes(r)).map(r=>o(r,"submitted")).join(e__default.dim(", "))}`;case"cancel":{const r=this.options.filter(({value:i})=>this.value.includes(i)).map(i=>o(i,"cancelled")).join(e__default.dim(", "));return`${s}${e__default.gray(a)}  ${r.trim()?`${r}
${e__default.gray(a)}`:""}`}case"error":{const r=this.error.split(`
`).map((i,n)=>n===0?`${e__default.yellow(d)}  ${e__default.yellow(i)}`:`   ${i}`).join(`
`);return`${s}${e__default.yellow(a)}  ${this.options.map((i,n,c)=>{const l=this.value.includes(i.value)||i.group===!0&&this.isGroupSelected(`${i.value}`),$=n===this.cursor;return!$&&typeof i.group=="string"&&this.options[this.cursor].value===i.group?o(i,l?"group-active-selected":"group-active",c):$&&l?o(i,"active-selected",c):l?o(i,"selected",c):o(i,$?"active":"inactive",c)}).join(`
${e__default.yellow(a)}  `)}
${r}
`}default:return`${s}${e__default.cyan(a)}  ${this.options.map((r,i,n)=>{const c=this.value.includes(r.value)||r.group===!0&&this.isGroupSelected(`${r.value}`),l=i===this.cursor;return!l&&typeof r.group=="string"&&this.options[this.cursor].value===r.group?o(r,c?"group-active-selected":"group-active",n):l&&c?o(r,"active-selected",n):c?o(r,"selected",n):o(r,l?"active":"inactive",n)}).join(`
${e__default.cyan(a)}  `)}
${e__default.cyan(d)}
`}}}).prompt()},note=(t="",o="")=>{const s=`
${t}
`.split(`
`),r=node_util.stripVTControlCharacters(o).length,i=Math.max(s.reduce((c,l)=>{const $=node_util.stripVTControlCharacters(l);return $.length>c?$.length:c},0),r)+2,n=s.map(c=>`${e__default.gray(a)}  ${e__default.dim(c)}${" ".repeat(i-node_util.stripVTControlCharacters(c).length)}${e__default.gray(a)}`).join(`
`);process.stdout.write(`${e__default.gray(a)}
${e__default.green(S)}  ${e__default.reset(o)} ${e__default.gray(j.repeat(Math.max(i-r-1,1))+le)}
${n}
${e__default.gray(ce+j.repeat(i+2)+ue)}
`)},cancel=(t="")=>{process.stdout.write(`${e__default.gray(d)}  ${e__default.red(t)}

`)},intro=(t="")=>{process.stdout.write(`${e__default.gray(ae)}  ${t}
`)},outro=(t="")=>{process.stdout.write(`${e__default.gray(a)}
${e__default.gray(d)}  ${t}

`)},log={message:(t="",{symbol:o=e__default.gray(a)}={})=>{const s=[`${e__default.gray(a)}`];if(t){const[r,...i]=t.split(`
`);s.push(`${o}  ${r}`,...i.map(n=>`${e__default.gray(a)}  ${n}`))}process.stdout.write(`${s.join(`
`)}
`)},info:t=>{log.message(t,{symbol:e__default.blue(B)})},success:t=>{log.message(t,{symbol:e__default.green(W)})},step:t=>{log.message(t,{symbol:e__default.green(S)})},warn:t=>{log.message(t,{symbol:e__default.yellow(H)})},warning:t=>{log.warn(t)},error:t=>{log.message(t,{symbol:e__default.red(q)})}},D=`${e__default.gray(a)}  `,stream={message:async(t,{symbol:o=e__default.gray(a)}={})=>{process.stdout.write(`${e__default.gray(a)}
${o}  `);let s=3;for await(let r of t){r=r.replace(/\n/g,`
${D}`),r.includes(`
`)&&(s=3+node_util.stripVTControlCharacters(r.slice(r.lastIndexOf(`
`))).length);const i=node_util.stripVTControlCharacters(r).length;s+i<process.stdout.columns?(s+=i,process.stdout.write(r)):(process.stdout.write(`
${D}${r.trimStart()}`),s=3+node_util.stripVTControlCharacters(r.trimStart()).length)}process.stdout.write(`
`)},info:t=>stream.message(t,{symbol:e__default.blue(B)}),success:t=>stream.message(t,{symbol:e__default.green(W)}),step:t=>stream.message(t,{symbol:e__default.green(S)}),warn:t=>stream.message(t,{symbol:e__default.yellow(H)}),warning:t=>stream.warn(t),error:t=>stream.message(t,{symbol:e__default.red(q)})},spinner=({indicator:t="dots"}={})=>{const o=P?["\u25D2","\u25D0","\u25D3","\u25D1"]:["\u2022","o","O","0"],s=P?80:120,r=process.env.CI==="true";let i,n,c=!1,l="",$,p=performance.now();const w=m=>{const h=m>1?"Something went wrong":"Canceled";c&&R(h,m)},y=()=>w(2),f=()=>w(1),x=()=>{process.on("uncaughtExceptionMonitor",y),process.on("unhandledRejection",y),process.on("SIGINT",f),process.on("SIGTERM",f),process.on("exit",w)},M=()=>{process.removeListener("uncaughtExceptionMonitor",y),process.removeListener("unhandledRejection",y),process.removeListener("SIGINT",f),process.removeListener("SIGTERM",f),process.removeListener("exit",w)},T=()=>{if($===void 0)return;r&&process.stdout.write(`
`);const m=$.split(`
`);process.stdout.write(sisteransi.cursor.move(-999,m.length-1)),process.stdout.write(sisteransi.erase.down(m.length))},I=m=>m.replace(/\.+$/,""),k=m=>{const h=(performance.now()-m)/1e3,g=Math.floor(h/60),b=Math.floor(h%60);return g>0?`[${g}m ${b}s]`:`[${b}s]`},O=(m="")=>{c=!0,i=core.block(),l=I(m),p=performance.now(),process.stdout.write(`${e__default.gray(a)}
`);let h=0,g=0;x(),n=setInterval(()=>{if(r&&l===$)return;T(),$=l;const b=e__default.magenta(o[h]);if(r)process.stdout.write(`${b}  ${l}...`);else if(t==="timer")process.stdout.write(`${b}  ${l} ${k(p)}`);else{const F=".".repeat(Math.floor(g)).slice(0,3);process.stdout.write(`${b}  ${l}${F}`)}h=h+1<o.length?h+1:0,g=g<o.length?g+.125:0},s)},R=(m="",h=0)=>{c=!1,clearInterval(n),T();const g=h===0?e__default.green(S):h===1?e__default.red(L):e__default.red(G);l=I(m??l),t==="timer"?process.stdout.write(`${g}  ${l} ${k(p)}
`):process.stdout.write(`${g}  ${l}
`),M(),i()};return{start:O,stop:R,message:(m="")=>{l=I(m??l)}}},group=async(t,o)=>{const s={},r=Object.keys(t);for(const i of r){const n=t[i],c=await n({results:s})?.catch(l=>{throw l});if(typeof o?.onCancel=="function"&&core.isCancel(c)){s[i]="canceled",o.onCancel({results:s});continue}s[i]=c}return s},tasks=async t=>{for(const o of t){if(o.enabled===!1)continue;const s=spinner();s.start(o.title);const r=await o.task(s.message);s.stop(r||o.title)}};exports.isCancel=core.isCancel,exports.updateSettings=core.updateSettings,exports.cancel=cancel,exports.confirm=confirm,exports.group=group,exports.groupMultiselect=groupMultiselect,exports.intro=intro,exports.log=log,exports.multiselect=multiselect,exports.note=note,exports.outro=outro,exports.password=password,exports.select=select,exports.selectKey=selectKey,exports.spinner=spinner,exports.stream=stream,exports.tasks=tasks,exports.text=text;
//# sourceMappingURL=index.cjs.map
