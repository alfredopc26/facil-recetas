import{M as Sn,N as P}from"./index-59a4ffa4.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */let rn;const ht=i=>(i.forEach(o=>{for(const s in o)if(o.hasOwnProperty(s)){const c=o[s];if(s==="easing"){const u="animation-timing-function";o[u]=c,delete o[s]}else{const u=pt(s);u!==s&&(o[u]=c,delete o[s])}}}),i),pt=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sn=i=>{if(rn===void 0){const o=i.style.animationName!==void 0,s=i.style.webkitAnimationName!==void 0;rn=!o&&s?"-webkit-":""}return rn},f=(i,o,s)=>{const c=o.startsWith("animation")?sn(i):"";i.style.setProperty(c+o,s)},b=(i,o)=>{const s=o.startsWith("animation")?sn(i):"";i.style.removeProperty(s+o)},gt=(i,o)=>{let s;const c={passive:!0},u=()=>{s&&s()},E=v=>{i===v.target&&(u(),o(v))};return i&&(i.addEventListener("webkitAnimationEnd",E,c),i.addEventListener("animationend",E,c),s=()=>{i.removeEventListener("webkitAnimationEnd",E,c),i.removeEventListener("animationend",E,c)}),u},yt=(i=[])=>i.map(o=>{const s=o.offset,c=[];for(const u in o)o.hasOwnProperty(u)&&u!=="offset"&&c.push(`${u}: ${o[u]};`);return`${s*100}% { ${c.join(" ")} }`}).join(" "),vn=[],Et=i=>{let o=vn.indexOf(i);return o<0&&(o=vn.push(i)-1),`ion-animation-${o}`},At=i=>{const o=i.getRootNode!==void 0?i.getRootNode():i;return o.head||o},Ct=(i,o,s)=>{var c;const u=At(s),E=sn(s),v=u.querySelector("#"+i);if(v)return v;const a=((c=s.ownerDocument)!==null&&c!==void 0?c:document).createElement("style");return a.id=i,a.textContent=`@${E}keyframes ${i} { ${o} } @${E}keyframes ${i}-alt { ${o} }`,u.appendChild(a),a},H=(i=[],o)=>{if(o!==void 0){const s=Array.isArray(o)?o:[o];return[...i,...s]}return i},Ft=i=>{let o,s,c,u,E,v,a=[],Z=[],J=[],$=!1,d,Q={},X=[],Y=[],nn={},_=0,U=!1,V=!1,j,T,L,D,x=!0,k=!1,I=!0,O,r,q=!1;const an=i,tn=[],B=[],m=[],p=[],en=[],fn=[],cn=[],un=[],ln=[],S=[],Fn=typeof AnimationEffect=="function"||Sn!==void 0&&typeof Sn.AnimationEffect=="function",A=typeof Element=="function"&&typeof Element.prototype.animate=="function"&&Fn,$n=100,dn=()=>S,wn=n=>(p.forEach(t=>{t.destroy(n)}),Pn(n),m.length=0,p.length=0,a.length=0,Dn(),$=!1,I=!0,r),Pn=n=>{mn(),n&&hn()},_n=()=>{U=!1,V=!1,I=!0,T=void 0,L=void 0,D=void 0,_=0,k=!1,x=!0,q=!1},Tn=()=>_!==0&&!q,G=(n,t)=>((t!=null&&t.oneTimeCallback?B:tn).push({c:n,o:t}),r),Dn=()=>(tn.length=0,B.length=0,r),mn=()=>{if(A)S.forEach(n=>{n.cancel()}),S.length=0;else{const n=m.slice();P(()=>{n.forEach(t=>{b(t,"animation-name"),b(t,"animation-duration"),b(t,"animation-timing-function"),b(t,"animation-iteration-count"),b(t,"animation-delay"),b(t,"animation-play-state"),b(t,"animation-fill-mode"),b(t,"animation-direction")})})}},hn=()=>{en.forEach(n=>{n!=null&&n.parentNode&&n.parentNode.removeChild(n)}),en.length=0},xn=n=>(fn.push(n),r),Kn=n=>(cn.push(n),r),Rn=n=>(un.push(n),r),Wn=n=>(ln.push(n),r),Ln=n=>(Z=H(Z,n),r),kn=n=>(J=H(J,n),r),In=(n={})=>(Q=n,r),On=(n=[])=>{for(const t of n)Q[t]="";return r},Nn=n=>(X=H(X,n),r),zn=n=>(Y=H(Y,n),r),Mn=(n={})=>(nn=n,r),Un=(n=[])=>{for(const t of n)nn[t]="";return r},N=()=>E!==void 0?E:d?d.getFill():"both",K=()=>T!==void 0?T:v!==void 0?v:d?d.getDirection():"normal",z=()=>U?"linear":c!==void 0?c:d?d.getEasing():"linear",C=()=>V?0:L!==void 0?L:s!==void 0?s:d?d.getDuration():0,F=()=>u!==void 0?u:d?d.getIterations():1,R=()=>D!==void 0?D:o!==void 0?o:d?d.getDelay():0,Vn=()=>a,jn=n=>(v=n,g(!0),r),qn=n=>(E=n,g(!0),r),Bn=n=>(o=n,g(!0),r),Gn=n=>(c=n,g(!0),r),Hn=n=>(!A&&n===0&&(n=1),s=n,g(!0),r),Zn=n=>(u=n,g(!0),r),Jn=n=>(d=n,r),Qn=n=>{if(n!=null)if(n.nodeType===1)m.push(n);else if(n.length>=0)for(let t=0;t<n.length;t++)m.push(n[t]);else console.error("Invalid addElement value");return r},Xn=n=>{if(n!=null)if(Array.isArray(n))for(const t of n)t.parent(r),p.push(t);else n.parent(r),p.push(n);return r},Yn=n=>{const t=a!==n;return a=n,t&&nt(a),r},nt=n=>{A?dn().forEach(t=>{if(t.effect.setKeyframes)t.effect.setKeyframes(n);else{const e=new KeyframeEffect(t.effect.target,n,t.effect.getTiming());t.effect=e}}):pn()},tt=()=>{fn.forEach(l=>l()),cn.forEach(l=>l());const n=Z,t=J,e=Q;m.forEach(l=>{const h=l.classList;n.forEach(y=>h.add(y)),t.forEach(y=>h.remove(y));for(const y in e)e.hasOwnProperty(y)&&f(l,y,e[y])})},et=()=>{on(),un.forEach(h=>h()),ln.forEach(h=>h());const n=x?1:0,t=X,e=Y,l=nn;m.forEach(h=>{const y=h.classList;t.forEach(w=>y.add(w)),e.forEach(w=>y.remove(w));for(const w in l)l.hasOwnProperty(w)&&f(h,w,l[w])}),tn.forEach(h=>h.c(n,r)),B.forEach(h=>h.c(n,r)),B.length=0,I=!0,x&&(k=!0),x=!0},W=()=>{_!==0&&(_--,_===0&&(et(),d&&d.animationFinish()))},pn=(n=!0)=>{hn();const t=ht(a);m.forEach(e=>{if(t.length>0){const l=yt(t);O=i!==void 0?i:Et(l);const h=Ct(O,l,e);en.push(h),f(e,"animation-duration",`${C()}ms`),f(e,"animation-timing-function",z()),f(e,"animation-delay",`${R()}ms`),f(e,"animation-fill-mode",N()),f(e,"animation-direction",K());const y=F()===1/0?"infinite":F().toString();f(e,"animation-iteration-count",y),f(e,"animation-play-state","paused"),n&&f(e,"animation-name",`${h.id}-alt`),P(()=>{f(e,"animation-name",h.id||null)})}})},it=()=>{m.forEach(n=>{const t=n.animate(a,{id:an,delay:R(),duration:C(),easing:z(),iterations:F(),fill:N(),direction:K()});t.pause(),S.push(t)}),S.length>0&&(S[0].onfinish=()=>{W()})},gn=(n=!0)=>{tt(),a.length>0&&(A?it():pn(n)),$=!0},M=n=>{if(n=Math.min(Math.max(n,0),.9999),A)S.forEach(t=>{t.currentTime=t.effect.getComputedTiming().delay+C()*n,t.pause()});else{const t=`-${C()*n}ms`;m.forEach(e=>{a.length>0&&(f(e,"animation-delay",t),f(e,"animation-play-state","paused"))})}},yn=n=>{S.forEach(t=>{t.effect.updateTiming({delay:R(),duration:C(),easing:z(),iterations:F(),fill:N(),direction:K()})}),n!==void 0&&M(n)},En=(n=!0,t)=>{P(()=>{m.forEach(e=>{f(e,"animation-name",O||null),f(e,"animation-duration",`${C()}ms`),f(e,"animation-timing-function",z()),f(e,"animation-delay",t!==void 0?`-${t*C()}ms`:`${R()}ms`),f(e,"animation-fill-mode",N()||null),f(e,"animation-direction",K()||null);const l=F()===1/0?"infinite":F().toString();f(e,"animation-iteration-count",l),n&&f(e,"animation-name",`${O}-alt`),P(()=>{f(e,"animation-name",O||null)})})})},g=(n=!1,t=!0,e)=>(n&&p.forEach(l=>{l.update(n,t,e)}),A?yn(e):En(t,e),r),ot=(n=!1,t)=>(p.forEach(e=>{e.progressStart(n,t)}),An(),U=n,$||gn(),g(!1,!0,t),r),rt=n=>(p.forEach(t=>{t.progressStep(n)}),M(n),r),st=(n,t,e)=>(U=!1,p.forEach(l=>{l.progressEnd(n,t,e)}),e!==void 0&&(L=e),k=!1,x=!0,n===0?(T=K()==="reverse"?"normal":"reverse",T==="reverse"&&(x=!1),A?(g(),M(1-t)):(D=(1-t)*C()*-1,g(!1,!1))):n===1&&(A?(g(),M(t)):(D=t*C()*-1,g(!1,!1))),n!==void 0&&(G(()=>{L=void 0,T=void 0,D=void 0},{oneTimeCallback:!0}),d||Cn()),r),An=()=>{$&&(A?S.forEach(n=>{n.pause()}):m.forEach(n=>{f(n,"animation-play-state","paused")}),q=!0)},at=()=>(p.forEach(n=>{n.pause()}),An(),r),ft=()=>{j=void 0,W()},on=()=>{j&&clearTimeout(j)},ct=()=>{if(on(),P(()=>{m.forEach(n=>{a.length>0&&f(n,"animation-play-state","running")})}),a.length===0||m.length===0)W();else{const n=R()||0,t=C()||0,e=F()||1;isFinite(e)&&(j=setTimeout(ft,n+t*e+$n)),gt(m[0],()=>{on(),P(()=>{ut(),P(W)})})}},ut=()=>{m.forEach(n=>{b(n,"animation-duration"),b(n,"animation-delay"),b(n,"animation-play-state")})},lt=()=>{S.forEach(n=>{n.play()}),(a.length===0||m.length===0)&&W()},dt=()=>{A?(M(0),yn()):En()},Cn=n=>new Promise(t=>{n!=null&&n.sync&&(V=!0,G(()=>V=!1,{oneTimeCallback:!0})),$||gn(),k&&(dt(),k=!1),I&&(_=p.length+1,I=!1),G(()=>t(),{oneTimeCallback:!0}),p.forEach(e=>{e.play()}),A?lt():ct(),q=!1}),mt=()=>{p.forEach(n=>{n.stop()}),$&&(mn(),$=!1),_n()},bn=(n,t)=>{const e=a[0];return e!==void 0&&(e.offset===void 0||e.offset===0)?e[n]=t:a=[{offset:0,[n]:t},...a],r};return r={parentAnimation:d,elements:m,childAnimations:p,id:an,animationFinish:W,from:bn,to:(n,t)=>{const e=a[a.length-1];return e!==void 0&&(e.offset===void 0||e.offset===1)?e[n]=t:a=[...a,{offset:1,[n]:t}],r},fromTo:(n,t,e)=>bn(n,t).to(n,e),parent:Jn,play:Cn,pause:at,stop:mt,destroy:wn,keyframes:Yn,addAnimation:Xn,addElement:Qn,update:g,fill:qn,direction:jn,iterations:Zn,duration:Hn,easing:Gn,delay:Bn,getWebAnimations:dn,getKeyframes:Vn,getFill:N,getDirection:K,getDelay:R,getIterations:F,getEasing:z,getDuration:C,afterAddRead:Rn,afterAddWrite:Wn,afterClearStyles:Un,afterStyles:Mn,afterRemoveClass:zn,afterAddClass:Nn,beforeAddRead:xn,beforeAddWrite:Kn,beforeClearStyles:On,beforeStyles:In,beforeRemoveClass:kn,beforeAddClass:Ln,onFinish:G,isRunning:Tn,progressStart:ot,progressStep:rt,progressEnd:st}};export{Ft as c};
