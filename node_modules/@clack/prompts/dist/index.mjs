import{stripVTControlCharacters as S}from"node:util";import{TextPrompt as Q,PasswordPrompt as X,ConfirmPrompt as Z,SelectPrompt as ee,SelectKeyPrompt as te,MultiSelectPrompt as se,GroupMultiSelectPrompt as re,isCancel as ie,block as ne}from"@clack/core";export{isCancel,updateSettings}from"@clack/core";import g from"node:process";import e from"picocolors";import{cursor as oe,erase as ae}from"sisteransi";function ce(){return g.platform!=="win32"?g.env.TERM!=="linux":!!g.env.CI||!!g.env.WT_SESSION||!!g.env.TERMINUS_SUBLIME||g.env.ConEmuTask==="{cmd::Cmder}"||g.env.TERM_PROGRAM==="Terminus-Sublime"||g.env.TERM_PROGRAM==="vscode"||g.env.TERM==="xterm-256color"||g.env.TERM==="alacritty"||g.env.TERMINAL_EMULATOR==="JetBrains-JediTerm"}const V=ce(),u=(t,n)=>V?t:n,le=u("\u25C6","*"),L=u("\u25A0","x"),W=u("\u25B2","x"),C=u("\u25C7","o"),ue=u("\u250C","T"),o=u("\u2502","|"),d=u("\u2514","\u2014"),k=u("\u25CF",">"),P=u("\u25CB"," "),A=u("\u25FB","[\u2022]"),T=u("\u25FC","[+]"),F=u("\u25FB","[ ]"),$e=u("\u25AA","\u2022"),_=u("\u2500","-"),me=u("\u256E","+"),de=u("\u251C","+"),pe=u("\u256F","+"),q=u("\u25CF","\u2022"),D=u("\u25C6","*"),U=u("\u25B2","!"),K=u("\u25A0","x"),w=t=>{switch(t){case"initial":case"active":return e.cyan(le);case"cancel":return e.red(L);case"error":return e.yellow(W);case"submit":return e.green(C)}},B=t=>{const{cursor:n,options:s,style:r}=t,i=t.maxItems??Number.POSITIVE_INFINITY,a=Math.max(process.stdout.rows-4,0),c=Math.min(a,Math.max(i,5));let l=0;n>=l+c-3?l=Math.max(Math.min(n-c+3,s.length-c),0):n<l+2&&(l=Math.max(n-2,0));const $=c<s.length&&l>0,p=c<s.length&&l+c<s.length;return s.slice(l,l+c).map((M,v,x)=>{const j=v===0&&$,E=v===x.length-1&&p;return j||E?e.dim("..."):r(M,v+l===n)})},he=t=>new Q({validate:t.validate,placeholder:t.placeholder,defaultValue:t.defaultValue,initialValue:t.initialValue,render(){const n=`${e.gray(o)}
${w(this.state)}  ${t.message}
`,s=t.placeholder?e.inverse(t.placeholder[0])+e.dim(t.placeholder.slice(1)):e.inverse(e.hidden("_")),r=this.value?this.valueWithCursor:s;switch(this.state){case"error":return`${n.trim()}
${e.yellow(o)}  ${r}
${e.yellow(d)}  ${e.yellow(this.error)}
`;case"submit":return`${n}${e.gray(o)}  ${e.dim(this.value||t.placeholder)}`;case"cancel":return`${n}${e.gray(o)}  ${e.strikethrough(e.dim(this.value??""))}${this.value?.trim()?`
${e.gray(o)}`:""}`;default:return`${n}${e.cyan(o)}  ${r}
${e.cyan(d)}
`}}}).prompt(),ge=t=>new X({validate:t.validate,mask:t.mask??$e,render(){const n=`${e.gray(o)}
${w(this.state)}  ${t.message}
`,s=this.valueWithCursor,r=this.masked;switch(this.state){case"error":return`${n.trim()}
${e.yellow(o)}  ${r}
${e.yellow(d)}  ${e.yellow(this.error)}
`;case"submit":return`${n}${e.gray(o)}  ${e.dim(r)}`;case"cancel":return`${n}${e.gray(o)}  ${e.strikethrough(e.dim(r??""))}${r?`
${e.gray(o)}`:""}`;default:return`${n}${e.cyan(o)}  ${s}
${e.cyan(d)}
`}}}).prompt(),ye=t=>{const n=t.active??"Yes",s=t.inactive??"No";return new Z({active:n,inactive:s,initialValue:t.initialValue??!0,render(){const r=`${e.gray(o)}
${w(this.state)}  ${t.message}
`,i=this.value?n:s;switch(this.state){case"submit":return`${r}${e.gray(o)}  ${e.dim(i)}`;case"cancel":return`${r}${e.gray(o)}  ${e.strikethrough(e.dim(i))}
${e.gray(o)}`;default:return`${r}${e.cyan(o)}  ${this.value?`${e.green(k)} ${n}`:`${e.dim(P)} ${e.dim(n)}`} ${e.dim("/")} ${this.value?`${e.dim(P)} ${e.dim(s)}`:`${e.green(k)} ${s}`}
${e.cyan(d)}
`}}}).prompt()},ve=t=>{const n=(s,r)=>{const i=s.label??String(s.value);switch(r){case"selected":return`${e.dim(i)}`;case"active":return`${e.green(k)} ${i} ${s.hint?e.dim(`(${s.hint})`):""}`;case"cancelled":return`${e.strikethrough(e.dim(i))}`;default:return`${e.dim(P)} ${e.dim(i)}`}};return new ee({options:t.options,initialValue:t.initialValue,render(){const s=`${e.gray(o)}
${w(this.state)}  ${t.message}
`;switch(this.state){case"submit":return`${s}${e.gray(o)}  ${n(this.options[this.cursor],"selected")}`;case"cancel":return`${s}${e.gray(o)}  ${n(this.options[this.cursor],"cancelled")}
${e.gray(o)}`;default:return`${s}${e.cyan(o)}  ${B({cursor:this.cursor,options:this.options,maxItems:t.maxItems,style:(r,i)=>n(r,i?"active":"inactive")}).join(`
${e.cyan(o)}  `)}
${e.cyan(d)}
`}}}).prompt()},we=t=>{const n=(s,r="inactive")=>{const i=s.label??String(s.value);return r==="selected"?`${e.dim(i)}`:r==="cancelled"?`${e.strikethrough(e.dim(i))}`:r==="active"?`${e.bgCyan(e.gray(` ${s.value} `))} ${i} ${s.hint?e.dim(`(${s.hint})`):""}`:`${e.gray(e.bgWhite(e.inverse(` ${s.value} `)))} ${i} ${s.hint?e.dim(`(${s.hint})`):""}`};return new te({options:t.options,initialValue:t.initialValue,render(){const s=`${e.gray(o)}
${w(this.state)}  ${t.message}
`;switch(this.state){case"submit":return`${s}${e.gray(o)}  ${n(this.options.find(r=>r.value===this.value)??t.options[0],"selected")}`;case"cancel":return`${s}${e.gray(o)}  ${n(this.options[0],"cancelled")}
${e.gray(o)}`;default:return`${s}${e.cyan(o)}  ${this.options.map((r,i)=>n(r,i===this.cursor?"active":"inactive")).join(`
${e.cyan(o)}  `)}
${e.cyan(d)}
`}}}).prompt()},fe=t=>{const n=(s,r)=>{const i=s.label??String(s.value);return r==="active"?`${e.cyan(A)} ${i} ${s.hint?e.dim(`(${s.hint})`):""}`:r==="selected"?`${e.green(T)} ${e.dim(i)}`:r==="cancelled"?`${e.strikethrough(e.dim(i))}`:r==="active-selected"?`${e.green(T)} ${i} ${s.hint?e.dim(`(${s.hint})`):""}`:r==="submitted"?`${e.dim(i)}`:`${e.dim(F)} ${e.dim(i)}`};return new se({options:t.options,initialValues:t.initialValues,required:t.required??!0,cursorAt:t.cursorAt,validate(s){if(this.required&&s.length===0)return`Please select at least one option.
${e.reset(e.dim(`Press ${e.gray(e.bgWhite(e.inverse(" space ")))} to select, ${e.gray(e.bgWhite(e.inverse(" enter ")))} to submit`))}`},render(){const s=`${e.gray(o)}
${w(this.state)}  ${t.message}
`,r=(i,a)=>{const c=this.value.includes(i.value);return a&&c?n(i,"active-selected"):c?n(i,"selected"):n(i,a?"active":"inactive")};switch(this.state){case"submit":return`${s}${e.gray(o)}  ${this.options.filter(({value:i})=>this.value.includes(i)).map(i=>n(i,"submitted")).join(e.dim(", "))||e.dim("none")}`;case"cancel":{const i=this.options.filter(({value:a})=>this.value.includes(a)).map(a=>n(a,"cancelled")).join(e.dim(", "));return`${s}${e.gray(o)}  ${i.trim()?`${i}
${e.gray(o)}`:""}`}case"error":{const i=this.error.split(`
`).map((a,c)=>c===0?`${e.yellow(d)}  ${e.yellow(a)}`:`   ${a}`).join(`
`);return`${s+e.yellow(o)}  ${B({options:this.options,cursor:this.cursor,maxItems:t.maxItems,style:r}).join(`
${e.yellow(o)}  `)}
${i}
`}default:return`${s}${e.cyan(o)}  ${B({options:this.options,cursor:this.cursor,maxItems:t.maxItems,style:r}).join(`
${e.cyan(o)}  `)}
${e.cyan(d)}
`}}}).prompt()},be=t=>{const n=(s,r,i=[])=>{const a=s.label??String(s.value),c=typeof s.group=="string",l=c&&(i[i.indexOf(s)+1]??{group:!0}),$=c&&l.group===!0,p=c?`${$?d:o} `:"";return r==="active"?`${e.dim(p)}${e.cyan(A)} ${a} ${s.hint?e.dim(`(${s.hint})`):""}`:r==="group-active"?`${p}${e.cyan(A)} ${e.dim(a)}`:r==="group-active-selected"?`${p}${e.green(T)} ${e.dim(a)}`:r==="selected"?`${e.dim(p)}${e.green(T)} ${e.dim(a)}`:r==="cancelled"?`${e.strikethrough(e.dim(a))}`:r==="active-selected"?`${e.dim(p)}${e.green(T)} ${a} ${s.hint?e.dim(`(${s.hint})`):""}`:r==="submitted"?`${e.dim(a)}`:`${e.dim(p)}${e.dim(F)} ${e.dim(a)}`};return new re({options:t.options,initialValues:t.initialValues,required:t.required??!0,cursorAt:t.cursorAt,validate(s){if(this.required&&s.length===0)return`Please select at least one option.
${e.reset(e.dim(`Press ${e.gray(e.bgWhite(e.inverse(" space ")))} to select, ${e.gray(e.bgWhite(e.inverse(" enter ")))} to submit`))}`},render(){const s=`${e.gray(o)}
${w(this.state)}  ${t.message}
`;switch(this.state){case"submit":return`${s}${e.gray(o)}  ${this.options.filter(({value:r})=>this.value.includes(r)).map(r=>n(r,"submitted")).join(e.dim(", "))}`;case"cancel":{const r=this.options.filter(({value:i})=>this.value.includes(i)).map(i=>n(i,"cancelled")).join(e.dim(", "));return`${s}${e.gray(o)}  ${r.trim()?`${r}
${e.gray(o)}`:""}`}case"error":{const r=this.error.split(`
`).map((i,a)=>a===0?`${e.yellow(d)}  ${e.yellow(i)}`:`   ${i}`).join(`
`);return`${s}${e.yellow(o)}  ${this.options.map((i,a,c)=>{const l=this.value.includes(i.value)||i.group===!0&&this.isGroupSelected(`${i.value}`),$=a===this.cursor;return!$&&typeof i.group=="string"&&this.options[this.cursor].value===i.group?n(i,l?"group-active-selected":"group-active",c):$&&l?n(i,"active-selected",c):l?n(i,"selected",c):n(i,$?"active":"inactive",c)}).join(`
${e.yellow(o)}  `)}
${r}
`}default:return`${s}${e.cyan(o)}  ${this.options.map((r,i,a)=>{const c=this.value.includes(r.value)||r.group===!0&&this.isGroupSelected(`${r.value}`),l=i===this.cursor;return!l&&typeof r.group=="string"&&this.options[this.cursor].value===r.group?n(r,c?"group-active-selected":"group-active",a):l&&c?n(r,"active-selected",a):c?n(r,"selected",a):n(r,l?"active":"inactive",a)}).join(`
${e.cyan(o)}  `)}
${e.cyan(d)}
`}}}).prompt()},Me=(t="",n="")=>{const s=`
${t}
`.split(`
`),r=S(n).length,i=Math.max(s.reduce((c,l)=>{const $=S(l);return $.length>c?$.length:c},0),r)+2,a=s.map(c=>`${e.gray(o)}  ${e.dim(c)}${" ".repeat(i-S(c).length)}${e.gray(o)}`).join(`
`);process.stdout.write(`${e.gray(o)}
${e.green(C)}  ${e.reset(n)} ${e.gray(_.repeat(Math.max(i-r-1,1))+me)}
${a}
${e.gray(de+_.repeat(i+2)+pe)}
`)},xe=(t="")=>{process.stdout.write(`${e.gray(d)}  ${e.red(t)}

`)},Ie=(t="")=>{process.stdout.write(`${e.gray(ue)}  ${t}
`)},Se=(t="")=>{process.stdout.write(`${e.gray(o)}
${e.gray(d)}  ${t}

`)},f={message:(t="",{symbol:n=e.gray(o)}={})=>{const s=[`${e.gray(o)}`];if(t){const[r,...i]=t.split(`
`);s.push(`${n}  ${r}`,...i.map(a=>`${e.gray(o)}  ${a}`))}process.stdout.write(`${s.join(`
`)}
`)},info:t=>{f.message(t,{symbol:e.blue(q)})},success:t=>{f.message(t,{symbol:e.green(D)})},step:t=>{f.message(t,{symbol:e.green(C)})},warn:t=>{f.message(t,{symbol:e.yellow(U)})},warning:t=>{f.warn(t)},error:t=>{f.message(t,{symbol:e.red(K)})}},J=`${e.gray(o)}  `,b={message:async(t,{symbol:n=e.gray(o)}={})=>{process.stdout.write(`${e.gray(o)}
${n}  `);let s=3;for await(let r of t){r=r.replace(/\n/g,`
${J}`),r.includes(`
`)&&(s=3+S(r.slice(r.lastIndexOf(`
`))).length);const i=S(r).length;s+i<process.stdout.columns?(s+=i,process.stdout.write(r)):(process.stdout.write(`
${J}${r.trimStart()}`),s=3+S(r.trimStart()).length)}process.stdout.write(`
`)},info:t=>b.message(t,{symbol:e.blue(q)}),success:t=>b.message(t,{symbol:e.green(D)}),step:t=>b.message(t,{symbol:e.green(C)}),warn:t=>b.message(t,{symbol:e.yellow(U)}),warning:t=>b.warn(t),error:t=>b.message(t,{symbol:e.red(K)})},Y=({indicator:t="dots"}={})=>{const n=V?["\u25D2","\u25D0","\u25D3","\u25D1"]:["\u2022","o","O","0"],s=V?80:120,r=process.env.CI==="true";let i,a,c=!1,l="",$,p=performance.now();const M=m=>{const h=m>1?"Something went wrong":"Canceled";c&&N(h,m)},v=()=>M(2),x=()=>M(1),j=()=>{process.on("uncaughtExceptionMonitor",v),process.on("unhandledRejection",v),process.on("SIGINT",x),process.on("SIGTERM",x),process.on("exit",M)},E=()=>{process.removeListener("uncaughtExceptionMonitor",v),process.removeListener("unhandledRejection",v),process.removeListener("SIGINT",x),process.removeListener("SIGTERM",x),process.removeListener("exit",M)},O=()=>{if($===void 0)return;r&&process.stdout.write(`
`);const m=$.split(`
`);process.stdout.write(oe.move(-999,m.length-1)),process.stdout.write(ae.down(m.length))},R=m=>m.replace(/\.+$/,""),G=m=>{const h=(performance.now()-m)/1e3,y=Math.floor(h/60),I=Math.floor(h%60);return y>0?`[${y}m ${I}s]`:`[${I}s]`},H=(m="")=>{c=!0,i=ne(),l=R(m),p=performance.now(),process.stdout.write(`${e.gray(o)}
`);let h=0,y=0;j(),a=setInterval(()=>{if(r&&l===$)return;O(),$=l;const I=e.magenta(n[h]);if(r)process.stdout.write(`${I}  ${l}...`);else if(t==="timer")process.stdout.write(`${I}  ${l} ${G(p)}`);else{const z=".".repeat(Math.floor(y)).slice(0,3);process.stdout.write(`${I}  ${l}${z}`)}h=h+1<n.length?h+1:0,y=y<n.length?y+.125:0},s)},N=(m="",h=0)=>{c=!1,clearInterval(a),O();const y=h===0?e.green(C):h===1?e.red(L):e.red(W);l=R(m??l),t==="timer"?process.stdout.write(`${y}  ${l} ${G(p)}
`):process.stdout.write(`${y}  ${l}
`),E(),i()};return{start:H,stop:N,message:(m="")=>{l=R(m??l)}}},Ce=async(t,n)=>{const s={},r=Object.keys(t);for(const i of r){const a=t[i],c=await a({results:s})?.catch(l=>{throw l});if(typeof n?.onCancel=="function"&&ie(c)){s[i]="canceled",n.onCancel({results:s});continue}s[i]=c}return s},Te=async t=>{for(const n of t){if(n.enabled===!1)continue;const s=Y();s.start(n.title);const r=await n.task(s.message);s.stop(r||n.title)}};export{xe as cancel,ye as confirm,Ce as group,be as groupMultiselect,Ie as intro,f as log,fe as multiselect,Me as note,Se as outro,ge as password,ve as select,we as selectKey,Y as spinner,b as stream,Te as tasks,he as text};
//# sourceMappingURL=index.mjs.map
