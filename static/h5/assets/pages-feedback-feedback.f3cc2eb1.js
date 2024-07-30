import{d as e,m as t,a,o,c as r,w as l,b as n,n as i,g as s,t as u,l as d,j as c,T as h,h as f,i as p,p as m,E as g,R as b,B as y,D as x,r as C,A as S}from"./index-0cdf8aad.js";import{r as _,_ as B}from"./uni-app.es.b79b333a.js";import{_ as v}from"./u-navbar.c8086c10.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as j}from"./u-upload.b67ad412.js";import{r as L}from"./request.4f472fa9.js";import"./u-loading-icon.a67cb4cf.js";const V=k({name:"u-textarea",mixins:[t,a,{props:{value:{type:[String,Number],default:e.textarea.value},modelValue:{type:[String,Number],default:e.textarea.value},placeholder:{type:[String,Number],default:e.textarea.placeholder},placeholderClass:{type:String,default:e.input.placeholderClass},placeholderStyle:{type:[String,Object],default:e.input.placeholderStyle},height:{type:[String,Number],default:e.textarea.height},confirmType:{type:String,default:e.textarea.confirmType},disabled:{type:Boolean,default:e.textarea.disabled},count:{type:Boolean,default:e.textarea.count},focus:{type:Boolean,default:e.textarea.focus},autoHeight:{type:Boolean,default:e.textarea.autoHeight},fixed:{type:Boolean,default:e.textarea.fixed},cursorSpacing:{type:Number,default:e.textarea.cursorSpacing},cursor:{type:[String,Number],default:e.textarea.cursor},showConfirmBar:{type:Boolean,default:e.textarea.showConfirmBar},selectionStart:{type:Number,default:e.textarea.selectionStart},selectionEnd:{type:Number,default:e.textarea.selectionEnd},adjustPosition:{type:Boolean,default:e.textarea.adjustPosition},disableDefaultPadding:{type:Boolean,default:e.textarea.disableDefaultPadding},holdKeyboard:{type:Boolean,default:e.textarea.holdKeyboard},maxlength:{type:[String,Number],default:e.textarea.maxlength},border:{type:String,default:e.textarea.border},formatter:{type:[Function,null],default:e.textarea.formatter},ignoreCompositionEvent:{type:Boolean,default:!0}}}],data:()=>({innerValue:"",focused:!1,firstChange:!0,changeFromInner:!1,innerFormatter:e=>e}),created(){},watch:{modelValue:{immediate:!0,handler(e,t){this.innerValue=e,!1===this.firstChange&&!1===this.changeFromInner&&this.valueChange(),this.firstChange=!1,this.changeFromInner=!1}}},computed:{textareaClass(){let e=[],{border:t,disabled:a}=this;return"surround"===t&&(e=e.concat(["u-border","u-textarea--radius"])),"bottom"===t&&(e=e.concat(["u-border-bottom","u-textarea--no-radius"])),a&&e.push("u-textarea--disabled"),e.join(" ")},textareaStyle(){return uni.$u.deepMerge({},uni.$u.addStyle(this.customStyle))}},emits:["update:modelValue","linechange","focus","blur","change","confirm","keyboardheightchange"],methods:{setFormatter(e){this.innerFormatter=e},onFocus(e){this.$emit("focus",e)},onBlur(e){this.$emit("blur",e),uni.$u.formValidate(this,"blur")},onLinechange(e){this.$emit("linechange",e)},onInput(e){let{value:t=""}=e.detail||{};const a=(this.formatter||this.innerFormatter)(t);this.innerValue=t,this.$nextTick((()=>{this.innerValue=a,this.valueChange()}))},valueChange(){const e=this.innerValue;this.$nextTick((()=>{this.$emit("update:modelValue",e),this.changeFromInner=!0,this.$emit("change",e),uni.$u.formValidate(this,"change")}))},onConfirm(e){this.$emit("confirm",e)},onKeyboardheightchange(e){this.$emit("keyboardheightchange",e)}}},[["render",function(e,t,a,m,g,b){const y=h,x=f,C=p;return o(),r(C,{class:c(["u-textarea",b.textareaClass]),style:i([b.textareaStyle])},{default:l((()=>[n(y,{class:"u-textarea__field",value:g.innerValue,style:i({height:e.$u.addUnit(e.height)}),placeholder:e.placeholder,"placeholder-style":e.$u.addStyle(e.placeholderStyle,"string"),"placeholder-class":e.placeholderClass,disabled:e.disabled,focus:e.focus,autoHeight:e.autoHeight,fixed:e.fixed,cursorSpacing:e.cursorSpacing,cursor:e.cursor,showConfirmBar:e.showConfirmBar,selectionStart:e.selectionStart,selectionEnd:e.selectionEnd,adjustPosition:e.adjustPosition,disableDefaultPadding:e.disableDefaultPadding,holdKeyboard:e.holdKeyboard,maxlength:e.maxlength,"confirm-type":e.confirmType,ignoreCompositionEvent:e.ignoreCompositionEvent,onFocus:b.onFocus,onBlur:b.onBlur,onLinechange:b.onLinechange,onInput:b.onInput,onConfirm:b.onConfirm,onKeyboardheightchange:b.onKeyboardheightchange},null,8,["value","style","placeholder","placeholder-style","placeholder-class","disabled","focus","autoHeight","fixed","cursorSpacing","cursor","showConfirmBar","selectionStart","selectionEnd","adjustPosition","disableDefaultPadding","holdKeyboard","maxlength","confirm-type","ignoreCompositionEvent","onFocus","onBlur","onLinechange","onInput","onConfirm","onKeyboardheightchange"]),e.count?(o(),r(x,{key:0,class:"u-textarea__count",style:i({"background-color":e.disabled?"transparent":"#fff"})},{default:l((()=>[s(u(g.innerValue.length)+"/"+u(e.maxlength),1)])),_:1},8,["style"])):d("",!0)])),_:1},8,["class","style"])}],["__scopeId","data-v-b104d95c"]]);const I=k({data:()=>({app:m(),error:"",fileList:[]}),methods:{onClickLeft(){g()},afterRead(e){const{file:t}=e;t.forEach((e=>{b({url:this.app.globalData.uploadImgUrl,filePath:e.url,name:"file",success:e=>{let t=this.fileList;t.push({url:this.app.globalData.httpUrl+JSON.parse(e.data).data}),this.fileList=t}})}))},async submit(){if(!this.error)return void y({title:"请输入反馈问题",icon:"none",duration:2e3});let e=this.fileList,t=[];e.forEach((e=>{t.push(e.url)}));let a=await this.app.getUserInfo();L({url:"wx/add/feedback",method:"POST",data:{user_ouid:a.ouid,content:this.error,photo:t}}).then((()=>{y({title:"提交成功",icon:"none",duration:2e3,success:()=>{setTimeout((()=>{this.app.toBack()}),2e3)}})}))},deleteImg(e){let t=this.fileList;t.splice(e.index,1),this.fileList=t},toFeedbackList(){x({url:"/pages/feedbackList/feedbackList"})}}},[["render",function(e,t,a,i,u,d){const c=_(C("up-icon"),B),h=_(C("u-navbar"),v),f=p,m=_(C("u--textarea"),V),g=_(C("u-upload"),j),b=S;return o(),r(f,{class:"page"},{default:l((()=>[n(h,{class:"nav-bar",title:"意见反馈",safeAreaInsetTop:!0,autoBack:!1,fixed:!1},{left:l((()=>[n(c,{name:"arrow-left",onClick:u.app.toBack},null,8,["onClick"])])),_:1}),n(f,{class:"errorBox"},{default:l((()=>[n(f,{class:"describeBox"},{default:l((()=>[n(f,{class:"flex align-center justify-between"},{default:l((()=>[n(f,{style:{"margin-bottom":"20rpx"}},{default:l((()=>[s("反馈问题")])),_:1})])),_:1}),n(m,{modelValue:u.error,"onUpdate:modelValue":t[0]||(t[0]=e=>u.error=e),placeholder:"请输入..."},null,8,["modelValue"])])),_:1}),n(f,{class:"uploadBox"},{default:l((()=>[n(f,null,{default:l((()=>[s("上传问题相关图片")])),_:1}),n(f,{style:{"margin-top":"24rpx"}},{default:l((()=>[n(g,{fileList:u.fileList,onAfterRead:d.afterRead,onDelete:d.deleteImg,name:"1",multiple:"",maxCount:9},null,8,["fileList","onAfterRead","onDelete"])])),_:1}),n(f,{class:"uploadText"},{default:l((()=>[s("最多9张 ")])),_:1})])),_:1}),n(b,{type:"info",class:"submitBtn",onClick:d.submit},{default:l((()=>[s("提交")])),_:1},8,["onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-3d4e34ec"]]);export{I as default};
