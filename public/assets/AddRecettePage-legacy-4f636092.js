System.register(["./index-legacy-37a8b3de.js"],(function(e,l){"use strict";var t,a,n,i,o,d,u,s,p,c,r,m,f,g,b,h,v,_;return{setters:[e=>{t=e.d,a=e.E,n=e.G,i=e.H,o=e._,d=e.r,u=e.o,s=e.e,p=e.w,c=e.f,r=e.m,m=e.g,f=e.C,g=e.D,b=e.n,h=e.u,v=e.v,_=e.x}],execute:function(){var l=document.createElement("style");l.textContent=".image-container[data-v-f6da5756]{position:relative;display:inline-block}.image[data-v-f6da5756]{display:block;width:100%;height:auto}.overlay[data-v-f6da5756]{position:absolute;bottom:0;left:0;width:100%;height:40px;background-color:rgba(0,0,0,.5);z-index:1}.upload-button[data-v-f6da5756]{position:absolute;bottom:10px;left:50%;transform:translate(-50%);z-index:2}\n",document.head.appendChild(l);const I=t({components:{IonInput:a,IonItem:n,IonList:i},data:()=>({selectedFile:null,imagePreview:"../resources/img/fondo_template.jpg"}),methods:{openFileInput(){this.$refs.fileInput.click()},handleFileUpload(e){const l=e.target.files[0];console.log("Imagen seleccionada:",l)}}}),y={class:"image-container"},x=["src"],w=(e=>(f("data-v-f6da5756"),e=e(),g(),e))((()=>r("div",{class:"overlay"},null,-1))),k=o(I,[["render",function(e,l,t,a,n,i){const o=d("ion-button"),f=d("ion-item"),g=d("ion-input"),b=d("ion-list");return u(),s(b,null,{default:p((()=>[c(f,null,{default:p((()=>[r("div",y,[r("img",{src:e.imagePreview,alt:"Imagen",class:"image"},null,8,x),w,c(o,{class:"upload-button",onClick:e.openFileInput},{default:p((()=>[m(" Subir Imagen ")])),_:1},8,["onClick"]),r("input",{ref:"fileInput",type:"file",accept:"image/*",class:"file-input",onChange:l[0]||(l[0]=(...l)=>e.handleFileUpload&&e.handleFileUpload(...l))},null,544)])])),_:1}),c(f,null,{default:p((()=>[c(g,{label:"Text input",placeholder:"Enter text"})])),_:1}),c(f,null,{default:p((()=>[c(g,{label:"Number input",type:"number",placeholder:"000"})])),_:1}),c(f,null,{default:p((()=>[c(g,{label:"Password input",type:"password",value:"password"})])),_:1}),c(f,null,{default:p((()=>[c(g,{label:"Email input",type:"email",placeholder:"email@domain.com"})])),_:1}),c(f,null,{default:p((()=>[c(g,{label:"Telephone input",type:"tel",placeholder:"888-888-8888"})])),_:1})])),_:1})}],["__scopeId","data-v-f6da5756"]]);e("default",t({__name:"AddRecettePage",setup:e=>(b([]),(e,l)=>(u(),s(h(_),{class:"mt-5"},{default:p((()=>[c(h(v),null,{default:p((()=>[c(k)])),_:1})])),_:1})))}))}}}));