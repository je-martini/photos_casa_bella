(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[50995,74070],{__fusion__695:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var o=r(36151),n=r(33990);const i=o.forwardRef((function(e,t){let{title:r="Circle i",titleId:o,size:i="1em",...a}=e;return(0,n.BX)("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",ref:t,"aria-labelledby":o,...a,children:[void 0===r?(0,n.tZ)("title",{id:o,children:"Circle i"}):r?(0,n.tZ)("title",{id:o,children:r}):null,(0,n.tZ)("path",{d:"M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm1.5 18h-3v-8h3v8ZM12 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z",fill:"currentColor"})]})}))},67848:(e,t,r)=>{"use strict";r.d(t,{j:()=>C});var o=r(32857),n=r(68065),i=r(92300),a=r(79810),l=r(41491);const s=(0,a.zo)("div",(e=>{let{$theme:t,$backgroundColor:r,$color:o,$nested:n}=e;const i=n?t.borders.radius300:t.borders.radius400;return{backgroundColor:r,borderStartStartRadius:i,borderStartEndRadius:i,borderEndStartRadius:i,borderEndEndRadius:i,color:o,display:"grid",gridColumnGap:t.sizing.scale600,gridTemplateColumns:"min-content auto min-content",gridTemplateRows:"auto minmax(0, min-content)",marginTop:t.sizing.scale600,marginRight:t.sizing.scale600,marginBottom:t.sizing.scale600,marginLeft:t.sizing.scale600}}));s.displayName="StyledRoot";const d=(0,a.zo)("div",(e=>{let{$theme:t,$includesArtwork:r}=e;return{alignItems:"center",display:"flex",paddingInlineStart:r?t.sizing.scale600:null}}));d.displayName="StyledLeadingContent";const c=(0,a.zo)("div",(e=>{let{$theme:t,$actionPosition:r}=e;return{display:"flex",flexDirection:"column",justifyContent:"center",paddingBlockStart:t.sizing.scale600,paddingBlockEnd:r===l.LZ.trailing?t.sizing.scale600:null}}));c.displayName="StyledMessageContent";const u=(0,a.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",gridRowEnd:"span 2",marginInlineStart:"auto"}}));u.displayName="StyledTrailingContent";const p=(0,a.zo)("div",(e=>{let{$theme:t,$actionPosition:r}=e;return{gridColumnStart:2,paddingBlockStart:r===l.LZ.below?t.sizing.scale300:null,paddingBlockEnd:r===l.LZ.below?t.sizing.scale600:null}}));p.displayName="StyledBelowContent";const h=(0,a.zo)("div",(e=>{let{$theme:t}=e;return t.typography.LabelMedium}));h.displayName="StyledTitle";const g=(0,a.zo)("div",(e=>{let{$theme:t}=e;return t.typography.ParagraphMedium}));g.displayName="StyledMessage";const m=(0,a.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",alignItems:"center",paddingInlineEnd:t.sizing.scale600}}));m.displayName="StyledTrailingButtonContainer";const Z=(0,a.zo)("button",(e=>{let{$theme:t,$nested:r}=e;const o=r?t.borders.radius300:t.borders.radius400;return{alignItems:"center",background:"none",border:"none",borderStartEndRadius:o,borderEndEndRadius:o,color:"inherit",cursor:"pointer",display:"flex",paddingInlineStart:t.sizing.scale600,paddingInlineEnd:t.sizing.scale600,":hover":{boxShadow:"inset 999px 999px 0px rgba(0, 0, 0, 0.04)"},":active":{boxShadow:"inset 999px 999px 0px rgba(0, 0, 0, 0.08)"}}}));Z.displayName="StyledTrailingIconButton";var b=r(33990);function f(e){let{artwork:t}=e;const[,r]=(0,a.hQ)();if(!t)return null;const o=t.type===l.Tz.badge?r.sizing.scale1000:r.sizing.scale800;return t.icon({size:o})}function y(e){let{action:t,backgroundColor:r,color:i}=e;return t&&t.position===l.LZ.below&&t.label?(0,b.tZ)(o.Z,{colors:{backgroundColor:r,color:i},onClick:t.onClick,size:n.NO.compact,shape:n.X3.pill,children:t.label}):null}function v(e){let{action:t,backgroundColor:r,color:s,overrides:d,nested:c}=e;const[,u]=(0,a.hQ)();if(!t||t.position&&t.position!==l.LZ.trailing)return null;const[p,h]=(0,i.jb)(d.TrailingIconButton,Z);if(t.icon)return(0,b.tZ)(p,{"aria-label":t.label,onClick:t.onClick,$nested:c,...h,children:t.icon({size:u.sizing.scale650})});const[g,f]=(0,i.jb)(d.TrailingButtonContainer,m),y=d?.TrailingButton,v=y?.style?.backgroundColor?y.style.backgroundColor:r;return t.label?(0,b.tZ)(g,{...f,children:(0,b.tZ)(o.Z,{colors:{backgroundColor:v,color:s},onClick:t.onClick,size:n.NO.compact,shape:n.X3.pill,overrides:{BaseButton:{style:{whiteSpace:"nowrap"}}},children:t.label})}):null}function C(e){let{action:t,artwork:r,children:o,hierarchy:n=l.T5.low,kind:m=l.TO.info,overrides:Z={},nested:C=!1,title:x}=e;const[,z]=(0,a.hQ)(),B=n===l.T5.high?function(e,t){switch(t){case l.TO.negative:return{actionBackgroundColor:e.colors.bannerActionHighNegative,backgroundColor:e.colors.backgroundNegative,color:e.colors.contentOnColor};case l.TO.positive:return{actionBackgroundColor:e.colors.bannerActionHighPositive,backgroundColor:e.colors.backgroundPositive,color:e.colors.contentOnColor};case l.TO.warning:return{actionBackgroundColor:e.colors.bannerActionHighWarning,backgroundColor:e.colors.backgroundWarning,color:e.colors.contentPrimary};case l.TO.info:default:return{actionBackgroundColor:e.colors.bannerActionHighInfo,backgroundColor:e.colors.backgroundAccent,color:e.colors.contentOnColor}}}(z,m):function(e,t){switch(t){case l.TO.negative:return{actionBackgroundColor:e.colors.bannerActionLowNegative,backgroundColor:e.colors.backgroundNegativeLight,color:e.colors.contentPrimary};case l.TO.positive:return{actionBackgroundColor:e.colors.bannerActionLowPositive,backgroundColor:e.colors.backgroundPositiveLight,color:e.colors.contentPrimary};case l.TO.warning:return{actionBackgroundColor:e.colors.bannerActionLowWarning,backgroundColor:e.colors.backgroundWarningLight,color:e.colors.contentPrimary};case l.TO.info:default:return{actionBackgroundColor:e.colors.bannerActionLowInfo,backgroundColor:e.colors.backgroundAccentLight,color:e.colors.contentPrimary}}}(z,m),k=t&&t.position?t.position:l.LZ.trailing,[$,w]=(0,i.jb)(Z.Root,s),[I,_]=(0,i.jb)(Z.LeadingContent,d),[S,T]=(0,i.jb)(Z.MessageContent,c),[P,O]=(0,i.jb)(Z.TrailingContent,u),[U,M]=(0,i.jb)(Z.BelowContent,p),[L,H]=(0,i.jb)(Z.Title,h),[E,X]=(0,i.jb)(Z.Message,g),D=w.hasOwnProperty("aria-label")?w["aria-label"]:"this is an announcement banner";return(0,b.BX)($,{$backgroundColor:B.backgroundColor,$color:B.color,$nested:C,...w,role:"complementary","aria-label":D,children:[(0,b.tZ)(I,{$includesArtwork:Boolean(r),..._,children:(0,b.tZ)(f,{artwork:r})}),(0,b.BX)(S,{$actionPosition:k,...T,children:[Boolean(x)&&(0,b.tZ)(L,{...H,children:x}),Boolean(o)&&(0,b.tZ)(E,{...X,children:o})]}),(0,b.tZ)(P,{...O,children:(0,b.tZ)(v,{action:t,backgroundColor:B.actionBackgroundColor,color:B.color,overrides:Z,nested:C})}),(0,b.tZ)(U,{$actionPosition:k,...M,children:(0,b.tZ)(y,{action:t,backgroundColor:B.actionBackgroundColor,color:B.color})})]})}},41491:(e,t,r)=>{"use strict";r.d(t,{LZ:()=>o,T5:()=>i,TO:()=>a,Tz:()=>n});const o=Object.freeze({below:"below",trailing:"trailing"}),n=Object.freeze({icon:"icon",badge:"badge"}),i=Object.freeze({low:"low",high:"high"}),a=Object.freeze({info:"info",negative:"negative",positive:"positive",warning:"warning"})},95444:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var o=r(36151),n=r(73518),i=r(33990);function a(e,t){return(0,i.tZ)(n.Z,{viewBox:"0 0 24 24",ref:t,...e,children:(0,i.tZ)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm11 0a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM1 17v6h9V12H6c-2.8 0-5 2.2-5 5zm11 6v-6c0-2.8 2.2-5 5-5h6v11H12z"})})}const l=o.forwardRef(a)},43779:(e,t,r)=>{"use strict";r.d(t,{W:()=>p,Z:()=>h});var o=r(91931),n=r(62851),i=r(79908),a=r(29194),l=r(33990);const s=(0,o.zo)("div",{width:"100%",position:"relative"}),d=(0,o.w1)(n.U,(e=>{const t=e.$hasIcon?"48px":"16px";return{appearance:"none",padding:"ltr"===e.$direction?`12px 32px 12px ${t}`:`12px ${t} 12px 32px`,cursor:"pointer",outline:"none",...e.disabled?{color:e.$theme.colors.contentStateDisabled}:{":focus":{boxShadow:e.$theme.shadows.focusedInput}}}})),c=(0,o.zo)("div",(e=>({position:"absolute",top:"calc(50% - 12px)",pointerEvents:"none",..."ltr"===e.$direction?{left:"16px"}:{right:"16px"}}))),u=(0,o.zo)("div",(e=>({position:"absolute",top:"calc(50% - 12px)",pointerEvents:"none",..."ltr"===e.$direction?{right:"8px"}:{left:"8px"}}))),p=(0,o.zo)("option",(e=>{let{$theme:t}=e;return{background:t.colors.inputFill}})),h=e=>{const t=(0,a.gm)();return(0,l.BX)(s,{children:[e.iconType?(0,l.tZ)(c,{$direction:t,children:(0,l.tZ)(i.Z,{type:e.iconType})}):null,e.customIcon?(0,l.tZ)(c,{$direction:t,children:e.customIcon}):null,(0,l.tZ)(d,{$as:"select",$hasIcon:Boolean(e.iconType)||Boolean(e.customIcon),$direction:t,disabled:Boolean(e.disabled),value:e.value,...e["data-testid"]?{"data-testid":e["data-testid"]}:{},onChange:e.onChange,"aria-label":e.ariaLabel,children:e.children}),(0,l.tZ)(u,{$direction:t,children:(0,l.tZ)(i.Z,{type:"Chevron",rotate:180,...e.disabled?{color:"contentStateDisabled"}:{}})})]})}},27330:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var o=r(36151),n=r(15070),i=r(58984),a=r(70605),l=r(27871);const s=e=>{let{children:t}=e,{data:r}=(0,l.B0)("upfrontTipping");const s=(0,n.v)((e=>{let{checkout:t}=e;return t?.tip})),d=(0,i.I0)();void 0===r&&(r=null);return t({tip:o.useMemo((()=>function(e,t){if(null===e)return null;if(null!==t)return{amount:t?.amount,percent:t?.percent,isCustomTip:t?.isCustomTip};const r=(e?.options||[]).find((e=>e.isSelectedTip));return void 0!==r?{amount:r.amount,percent:r.percent,isCustomTip:r.isOther}:null}(r,s)),[r,s]),updateCustomTip:e=>{d((0,a.m0)(e))},updateTipOption:e=>{d((0,a.uW)(e))}})}},81231:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Z});var o=r(79810),n=r(8639),i=r(26740),a=r(52200),l=r(31913),s=r(63036),d=r(91931),c=r(33990);const u=(0,d.zo)("div",(e=>{let{$width:t,$height:r}=e;return{...r?{height:`${r}px`}:{},...t?{width:`${t}px`}:{}}})),p=e=>{let{customArtwork:t}=e;if(t){const{illustration:e}=t.illustration;switch(e.type){case"icon":return(0,c.tZ)(a.SZ,{richIllustration:t.illustration});case"urlImage":{const r={...e.urlImage},o=r?.dimensions?(0,s.xq)(r?.dimensions?.height):r?.size?s.lf[r?.size]:0,n=r?.dimensions?(0,s.xq)(r?.dimensions?.width):r?.size?s.lf[r?.size]:0;return(0,c.tZ)(u,{$height:o,$width:n,children:(0,c.tZ)(a.SZ,{richIllustration:t.illustration})})}default:return null}}return null},h=e=>{switch(e){case"UNKNOWN":return;case"HIGH":return"high";case"LOW":default:return"low"}},g=e=>{switch(e){case"FAILURE":return"negative";case"INFO":return"info";case"SUCCESS":return"positive";case"WARNING":return"warning";case"UNKNOWN":return;default:return"info"}},m=e=>e?e.title?.richTextElements?e.title.richTextElements.map((e=>"text"===e.type&&e.text.text?.text||"")).join(" "):e.title?.accessibilityText?e.title?.accessibilityText:"":"",Z=e=>{let{viewModel:t,onClick:r,noMargin:s,overrides:d}=e;const{message:u,headline:Z,bannerColor:b,customArtwork:f,actionButton:y,hierarchy:v,bannerState:C,contentColor:x}=t,[,z]=(0,o.hQ)(),B=b?.type,k=(0,n.Lq)(b&&B?b[B]:null),$=x?.type,w=(0,n.Lq)(x&&$?x[$]:null);return(0,c.tZ)(i.jL,{hierarchy:h(v),kind:g(C),overrides:{Root:{style:{...k?{backgroundColor:z.colors[k]}:{},...w?{color:z.colors[w]}:{},...s&&{marginTop:0,marginBottom:0,marginLeft:0,marginRight:0}}},...d?.messageStyle?{Message:{style:{...d.messageStyle}}}:null,...d?.trailingButtonStyle?{TrailingButton:{style:{...d.trailingButtonStyle}}}:null},artwork:f?{icon:()=>(0,c.tZ)(p,{customArtwork:f})}:void 0,title:Z?(0,c.tZ)(l.ZP,{text:Z}):null,action:{onClick:r||(()=>{}),label:m(y),...y?.illustration?{icon:()=>(0,c.tZ)(a.SZ,{richIllustration:y?.illustration})}:{}},children:u?(0,c.tZ)(l.ZP,{text:u}):null})}},50262:(e,t,r)=>{"use strict";r.d(t,{a:()=>C,Z:()=>x});var o=r(44126),n=r(83960),i=r(52246),a=r(94813),l=r(46933),s=r(79908),d=r(36278),c=r(47986),u=r(7646),p=r(33990);const h=()=>{const e=(0,a.TH)();return(0,p.BX)(u.Bi,{$as:i.rU,to:(0,c.vN_)(e,"shareGroupOrder"),children:[(0,p.tZ)(s.Z,{type:"People",width:"16px",height:"16px"}),(0,p.tZ)(d.sA,{}),(0,p.tZ)(l.v,{id:"go.add_people"})]})};var g=r(64388),m=r(70247),Z=r(33967),b=r(52298),f=r(73103),y=r(52692),v=r(91793);const C=e=>{let{gutterWidth:t}=e;return(0,p.tZ)(y.Z,{$margin:`0 ${-1*(t||0)}px`,$height:"1px"})},x=e=>{let{showAddGuestsBtn:t=!0,...r}=e;const{isDraftOrderCreator:i}=(0,n.Z)(),{serverCart:l}=(0,m.iQ)(),{store:s}=(0,g.ZP)(l.data?.storeUuid),d=(0,Z.Z)(),u=(0,a.TH)();return(0,p.BX)(p.HY,{children:[t?(0,p.BX)(p.HY,{children:[(0,p.tZ)(b.ZP,{$height:16}),(0,p.tZ)(h,{})]}):null,(0,p.tZ)(o.Z,{storeUuid:s.data?.uuid||"",storeSlug:s.data?.slug||"",gutterWidth:r.gutterWidth||0,updateItemQuantity:d,getItemClickUrl:(e,t)=>i||t?(0,c.lVP)(u,{itemUuid:e.shoppingCartItemUuid}):(0,c.yz4)({location:u,args:{storeUuid:s.data?.uuid||"",storeSlug:s.data?.slug||"",sectionUuid:e.sectionUuid,subsectionUuid:e.subsectionUuid,itemUuid:e.uuid}}),startUserCartExpanded:r.startUserCartExpanded}),(0,p.tZ)(f.Z,{store:s}),(0,p.tZ)(b.ZP,{$height:48}),(0,p.tZ)(v.Z,{})]})}},91793:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var o=r(91931),n=r(15298),i=r(27871),a=r(33990);const l=(0,o.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.ParagraphMedium,color:t.colors.contentSecondary,display:"flex",flexDirection:"column",gap:"8px"}})),s=()=>{const{subTotalFareBreakdown:e}=(0,i.ZP)(["subTotalFareBreakdown"]).checkoutPayloads;return e?.charges?(0,a.tZ)(a.HY,{children:(0,a.tZ)(l,{children:(0,a.tZ)(n.Z1,{charges:e.charges,fareType:"subTotalFareBreakdown"})})}):null}},67135:(e,t,r)=>{"use strict";r.d(t,{J:()=>u});var o=r(59210),n=r(75161),i=r(91086),a=r(33259),l=r(34217),s=r(58679),d=r(5639),c=r(33990);const u=e=>{let{onClose:t,title:r,children:u,isAutoFocus:p}=e;return(0,d.hU)().isMobile?(0,c.BX)(s.R1,{onClose:t,autoFocus:p,children:[(0,c.tZ)(s._g,{children:r}),(0,c.tZ)(s.bd,{children:u})]}):(0,c.BX)(n.u_,{onClose:t,children:[(0,c.tZ)(i.xB,{isExpanded:!0,title:(0,c.tZ)(o.Jf,{margin:0,children:r}),leftButton:(0,c.tZ)(a.hQ,{onClick:t})}),(0,c.tZ)(l.f,{children:u})]})}},64651:(e,t,r)=>{"use strict";r.d(t,{Z:()=>R});var o=r(52246),n=r(46933),i=r(91931),a=r(79908),l=r(36151),s=r(71110),d=r(7646),c=r(83118),u=r(26786),p=r(33535),h=r(83960),g=r(47986),m=r(49201),Z=r(94579),b=r(94813),f=r(33990);const y={1:(0,s.pZ)(r(2643)),2:(0,s.pZ)(r(42881)),3:(0,s.pZ)(r(35781))},v=(0,i.w1)(d.Bi,(e=>{let{$theme:t,$isSelected:r}=e;return{...(0,u.U)({$theme:t}),...r?{background:t.colors.buttonPrimaryFill,color:t.colors.buttonPrimaryText,":hover":{background:t.colors.buttonPrimaryHover}}:{background:t.colors.backgroundSecondary}}})),C=(0,i.zo)("div",{position:"relative"}),x=(0,i.zo)("div",{position:"absolute",zIndex:Z.I_.foreground,top:"calc(50% - 50px)",left:"calc(50% - 50px)",width:"100px",height:"100px"});const z=function(e){let{userTipSelection:t,tipPayload:r,updateTipOption:i}=e;const a=(0,p.ZP)(),s=(0,b.TH)(),{isEditOrder:d,isDraftOrderParticipant:u}=(0,h.Z)(),{options:Z,customTipOption:z}=r,B=new Set(Z.map((e=>e.percent))).size>1,k=Z.find((e=>t?B?t.percent===e.percent:t.amount?.amountE5&&(0,m.Xu)(t.amount?.amountE5).low===e.amount:e.isSelectedTip)),$=t&&!k||!t&&Boolean(z?.isSelectedTip),[w,I]=(0,l.useState)(!1),_=(0,l.useCallback)((()=>{I(!1)}),[]);return Z?(0,f.BX)(f.HY,{children:[(0,f.tZ)(f.HY,{children:Z.map(((e,t)=>(0,f.BX)(C,{children:[(0,f.tZ)(v,{"data-testid":"tipping-option","aria-label":e.displayText,$isSelected:k===e,onClick:()=>{k!==e&&(i(e),I(!0),a("eats:click_tips_module",{option:e.displayText||"",isEditScheduledOrder:d,isGroupOrderParticipant:u}))},children:e.displayText}),w&&y[t]&&k===e?(0,f.tZ)(x,{children:(0,f.tZ)(c.Z,{animationUrl:y[t],onComplete:_})}):null]},t)))}),z?(0,f.tZ)(f.HY,{children:(0,f.tZ)(v,{"data-test":"tip-custom","data-testid":"tip-custom",$as:o.rU,"aria-label":z.displayText,$isSelected:$,to:(0,g.vN_)(s,"otherTip"),onClick:()=>{a("eats:click_tips_module",{option:"custom",isEditScheduledOrder:d,isGroupOrderParticipant:u})},children:(0,f.tZ)(n.v,{id:"components.checkout.other_tip"})})}):null]}):null};var B=r(92848),k=r(27330),$=r(36278),w=r(40606),I=r(97931),_=r(15070),S=r(27871),T=r(15649),P=r(19912),O=r(1938);const U=(0,i.zo)("div",(()=>({display:"flex",flexDirection:"column"}))),M=(0,i.zo)("div",{display:"flex"}),L=(0,i.zo)("div",{display:"flex",alignItems:"center",flex:1}),H=(0,i.zo)("h2",(e=>{let{$theme:t}=e;return t.typography.LabelMedium})),E=(0,i.zo)("div",(e=>{let{$theme:t}=e;return t.typography.LabelMedium})),X=(0,i.zo)("div",{display:"flex",whiteSpace:"nowrap",flexWrap:"wrap",gap:"8px",marginTop:"8px"}),D=(0,i.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.ParagraphSmall,color:t.colors.contentTertiary}}));function R(e){const t=(0,b.TH)(),r=(0,T.Z)(),i=(0,S.B0)("upfrontTipping"),l=(0,_.v)((e=>{let{draftOrder:t}=e;return t.userState?.upfrontTipOption})),s=(0,P.Z)({eventName:"eats:tips_details_impression",intersectionObserverProps:{threshold:.75}});return(0,f.BX)(U,{ref:s,children:[(0,f.BX)(M,{children:[(0,f.BX)(L,{children:[(0,f.tZ)(H,{children:(0,f.tZ)(n.v,{id:"components.checkout.add_a_tip"})}),e.tipPayload.infoSheet&&(0,f.BX)(f.HY,{children:[(0,f.tZ)($.ZP,{$width:"12px"}),(0,f.tZ)(o.rU,{to:(0,g.vN_)(t,"tipInfo"),children:(0,f.tZ)(a.Z,{type:"Information",width:"16px",height:"16px",color:"contentTertiary"})})]})]}),e.isAutoSubmitCheckout?null:(0,f.tZ)(w.Z,{source:i,loaded:e=>(0,f.tZ)(E,{children:(0,O.C)(e,r)}),error:()=>null,loading:()=>(0,f.tZ)(I.zY,{width:"64px"})})]}),e.tipPayload?.educationText?(0,f.tZ)(D,{children:e.tipPayload?.educationText}):null,(0,f.tZ)(k.Z,{children:t=>{let{updateTipOption:r}=t;return(0,f.tZ)(X,{children:(0,f.tZ)(z,{tipPayload:e.tipPayload,userTipSelection:l,updateTipOption:r})})}}),(0,f.tZ)(B.Z,{})]})}},92848:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var o=r(36151),n=r(14016),i=r(91931),a=r(79908),l=r(40606),s=r(27871),d=r(94579),c=r(33990);const u=(0,i.zo)("div",(e=>{let{$theme:t}=e;return{margin:"16px 0",padding:"16px",minHeight:"48px",display:"flex",zIndex:d.I_.cover,background:t.colors.backgroundSecondary}})),p=(0,i.zo)("div",{height:"100%",display:"flex",flex:1}),h=(0,i.zo)("span",(e=>{let{$theme:t}=e;return{...t.typography.ParagraphMedium,color:t.colors.contentPrimary,display:"flex",width:"100%",height:"100%"}})),g=(0,i.zo)("div",(e=>{let{$theme:t}=e;return{color:t.colors.contentPrimary,right:"16px",width:"32px",height:"100%",display:"flex",cursor:"pointer",borderRadius:t.borders.radiusFull}})),m=()=>{const e=(0,n.T)()("shared.close"),[t,r]=(0,o.useState)(!1),i=(0,s.CF)();return t?null:(0,c.tZ)(l.Z,{source:i,error:()=>null,loading:()=>null,loaded:t=>{const o=t?.checkoutPayloads?.upfrontTipping;return o?.inlineTipMessage?.message?(0,c.BX)(u,{children:[(0,c.tZ)(p,{children:(0,c.tZ)(h,{children:o?.inlineTipMessage?.message})}),(0,c.tZ)(g,{onClick:()=>{r(!0)},"aria-label":e,children:(0,c.tZ)(a.Z,{type:"Close"})})]}):null}})}},15298:(e,t,r)=>{"use strict";r.d(t,{A1:()=>F,Z1:()=>N,jH:()=>A});var o=r(43193),n=r(36151),i=r(52246),a=r("__fusion__695"),l=r("__fusion__1383"),s=r(91931),d=r(94813),c=r(47986),u=r(40606),p=r(52692),h=r(62091),g=r(89400),m=r(51640),Z=r(64651),b=r(97931),f=r(27871),y=r(91631);var v=r(81231),C=r(85341),x=r(58984),z=r(70605),B=r(70247),k=r(33535),$=r(33990);function w(){const e=(0,d.TH)(),t=(0,y.k6)(),{draftOrder:r}=(0,B.Dz)(),{cmpQuery:o}=(0,f.ZP)(["splitPaymentMessageBanner"]),i=(0,k.ZP)(),a=Boolean(o.data?.checkoutPayloads?.splitPaymentMessageBanner?.actionableBanner?.bannerModel),l=(0,x.I0)();return n.useEffect((()=>{a&&(l((0,z.rj)()),l((0,z.Pe)(!1)))}),[l,a]),(0,$.tZ)(u.a,{source:o,loading:()=>null,error:()=>null,loaded:o=>{const n=o.checkoutPayloads?.splitPaymentMessageBanner?.actionableBanner?.bannerModel,a=()=>{t.push((e=>`/${(0,c.hrl)(e)}checkout/eligibility-breakdown`)(e)),i("eats:eligibility_breakdown_banner_clicked",{draftOrderUuid:r?.uuid})},l=o.checkoutPayloads?.splitPaymentMessageBanner?.actionableBanner?.actionMetadata;return n?(0,$.tZ)(C.Z,{marginTop:"scale600",marginBottom:"scale600",onClick:l?a:void 0,children:(0,$.tZ)(v.Z,{noMargin:!0,viewModel:n})}):null}})}var I=r(83960),_=r(38379),S=r(45474),T=r(5639),P=r(10015),O=r(33023),U=r(72179);const M=(0,s.zo)("div",(e=>{let{$gap:t,$theme:r}=e;return{display:"flex",flexDirection:"column",gap:"sm"===t?r.sizing.scale300:r.sizing.scale600}})),L=(0,s.zo)("ul",{display:"flex",flexDirection:"column",gap:"8px"}),H=(0,s.zo)("li",(e=>{let{$theme:t,$isCartDrafting:r}=e;return{...t.typography.ParagraphMedium,display:"flex",justifyContent:"space-between",alignItems:"center"}})),E=(0,s.zo)("div",(e=>{let{$theme:t,$isCartDrafting:r}=e;return{...r?{fontWeight:500}:{...t.typography.HeadingXSmall},display:"flex",justifyContent:"space-between"}})),X=(0,s.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",alignItems:"center",flexDirection:"row",gap:t.sizing.scale200}})),D=(0,s.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.ParagraphSmall,color:t.colors.contentTertiary,paddingTop:t.sizing.scale300}})),R=(0,s.zo)(h.Z,(e=>{let{$theme:t}=e;return{width:t.sizing.scale800,height:t.sizing.scale800,borderRadius:"50%"}})),j=(0,s.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",alignItems:"center",color:t.colors.contentInverseTertiary}})),W=e=>{let{infoBottomSheet:t,id:r}=e;const{isCartDrafting:o}=(0,U.Z)(),n=(0,d.TH)(),{isMobile:s}=(0,T.hU)(),u=o?(0,$.tZ)(l.default,{size:16}):(0,$.tZ)(a.default,{size:14}),p=t.secondaryButtonText&&t.url;return s||p?(0,$.tZ)(i.rU,{to:(0,c.vN_)(n,"orderChargeInfo",r),children:(0,$.tZ)(j,{children:u})}):(0,$.tZ)(S.xE,{content:(0,$.tZ)(_.y,{bottomSheet:t}),children:(0,$.tZ)(j,{children:u})})},N=e=>{let{charges:t,fareType:r}=e;const{isCartDrafting:n}=(0,U.Z)(),i=(0,f.B0)(r);return(0,$.tZ)($.HY,{children:t.map(((e,t)=>{let{title:a,action:l,value:s,subCharges:d}=e;return a?(0,$.BX)(o.Fragment,{children:[(0,$.BX)(H,{children:[(0,$.BX)(X,{children:[a.iconUrl?(0,$.tZ)(R,{src:a.iconUrl}):null,(0,$.tZ)(g.Z,{baseFont:n?"ParagraphMedium":void 0,baseColor:n?"contentSecondary":void 0,badge:a}),l&&"infoBottomSheet"===l.type?(0,$.tZ)(W,{infoBottomSheet:l.infoBottomSheet,id:`fare_breakdown_charge_${t}`}):null]}),(0,$.tZ)(u.Z,{source:i,loaded:()=>(0,$.tZ)(g.Z,{baseFont:n?"ParagraphMedium":void 0,baseColor:n?"contentSecondary":void 0,badge:s}),error:()=>null,loading:()=>(0,$.tZ)(b.zY,{width:"64px"})})]}),d?(0,$.tZ)(N,{charges:d,fareType:r}):null,a.additionalText?(0,$.tZ)(D,{children:a.additionalText}):null]},a.text):null}))})},A=o.forwardRef(((e,t)=>{let{charges:r}=e;return r?(0,$.tZ)(L,{ref:t,children:(0,$.tZ)(N,{charges:r,fareType:"fareBreakdown"})}):null}));A.displayName="FareBreakdownSection";const F=e=>{let{gap:t="sm",storeLocationType:r}=e;const{diningMode:o}=(0,I.Z)(),{checkoutPayloads:{upfrontTipping:i,fareBreakdown:a}}=(0,f.ZP)(["fareBreakdown","upfrontTipping","total"]),l=(0,f.B0)("fareBreakdown"),s=(0,f.B0)("total"),{isCartDrafting:d}=(0,U.Z)(),c=(0,O.oW)(r),h=(0,n.useMemo)((()=>({isLoading:!l?.data,hasLoaded:Boolean(l?.data),data:"load",error:null})),[l?.data]);return(0,$.BX)(M,{$gap:t,"data-test":"fare-breakdown",children:[(0,$.tZ)(u.Z,{source:h,enableLoadingForRefetch:!1,loading:()=>(0,$.tZ)(b.L8,{rows:4,noMargin:!0}),error:()=>null,loaded:()=>(0,$.tZ)(A,{charges:a?.charges})}),(0,$.tZ)(P.Et,{desktop:(0,$.BX)(M,{$gap:t,children:[(0,$.tZ)(p.Z,{$margin:"0"}),(0,$.tZ)(u.Z,{source:h,enableLoadingForRefetch:!1,loading:()=>(0,$.BX)($.HY,{children:[(0,$.tZ)(b.L8,{}),(0,$.tZ)(b.mu,{}),(0,$.tZ)(b.TB,{}),(0,$.tZ)(p.Z,{$margin:"0"})]}),error:()=>null,loaded:()=>i?(0,$.BX)($.HY,{children:[(0,$.tZ)(Z.Z,{tipPayload:i}),(0,$.tZ)(p.Z,{$margin:"0"})]}):null})]})}),(0,$.tZ)(u.Z,{source:h,enableLoadingForRefetch:!1,loading:()=>(0,$.tZ)(b.L8,{}),error:()=>null,loaded:()=>(0,$.BX)($.HY,{children:[(0,$.tZ)(A,{charges:a?.entityPayments}),(0,$.BX)(E,{$isCartDrafting:d,children:[(0,$.tZ)(X,{children:c}),(0,$.tZ)(u.Z,{source:s,loaded:e=>"DELIVERY"===o&&i?(0,$.tZ)(P.Et,{mobile:(0,$.tZ)(m.Z,{currencyCode:i.currencyCode,value:i.orderAmount}),desktop:e.total.formattedValue}):e.total.formattedValue,error:()=>null,loading:()=>(0,$.tZ)(b.zY,{width:"64px",lg:!0})})]})]})}),(0,$.tZ)(u.Z,{source:h,loading:()=>(0,$.tZ)(b.L8,{rows:2,noMargin:!0}),error:()=>null,loaded:()=>(0,$.tZ)(A,{charges:a?.plannedPayments})}),(0,$.tZ)(w,{})]})}},73103:(e,t,r)=>{"use strict";r.d(t,{Z:()=>A});var o=r(36151),n=r(91931),i=r(14016),a=r(87429),l=r(33535),s=r(15070),d=r(58984),c=r(70605),u=r(33990);const p=(0,n.zo)("div",(e=>{let{$theme:t,$margin:r}=e;return{background:t.colors.backgroundSecondary,padding:"16px",margin:r||"24px 0 0 0"}})),h=(0,n.zo)("div",{flex:1}),g=(0,n.zo)("div",(e=>{let{$theme:t}=e;return t.typography.LabelMedium})),m=e=>{let{margin:t,isSingleUseItemsIncluded:r,onChange:o,label:n}=e;return(0,u.tZ)(p,{$margin:t,children:(0,u.tZ)(a.Z,{name:"utensil",id:"utensil",isChecked:r,onChange:o,reverse:!0,children:(0,u.tZ)(h,{children:(0,u.tZ)(g,{children:n})})})})},Z=e=>{const t=(0,i.T)(),r=(0,l.ZP)(),n=(0,s.v)((e=>{let{checkout:t}=e;return t&&t.isSingleUseItemsIncluded})),[a,p]=(0,o.useState)(Boolean(n)),h=(0,d.I0)(),g=()=>{const e=!a;h((0,c.qx)(e)),p(e),r("eats:click_request_utensils",{option:e?"yes":"no"})};return e.showUtensils?(0,u.tZ)(m,{margin:e.margin,onChange:g,isSingleUseItemsIncluded:a,label:t("shared.request_utensils")}):e.store?.data?.singleUseItemsInfo?(0,u.tZ)(m,{margin:e.margin,onChange:g,isSingleUseItemsIncluded:a,label:e.store?.data?.singleUseItemsInfo?.title??""}):null};var b=r("__fusion__886"),f=r("__fusion__855"),y=r(36746),v=r(34567),C=r(22787),x=r(83960),z=r(70971),B=r(70247),k=r(66316),$=r(67135),w=r(75514),I=r(33023),_=r(47667),S=r(14362),T=r(69845);const P=(0,n.zo)("div",(e=>{let{$theme:t}=e;return{display:"none",[t.mediaQuery.medium]:{display:"block",...t.typography.ParagraphSmall}}})),O=(0,n.zo)("div",(e=>{let{$paddingTop:t,$theme:r}=e;return{paddingTop:"undefined"!=typeof t?`${t}px`:r.sizing.scale600}})),U=(0,n.w1)(C.Z,(e=>{let{$theme:t}=e;return{background:t.colors.backgroundSecondary}})),M=(0,n.zo)("div",{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",boxSizing:"border-box",textAlign:"left"}),L=(0,n.zo)("div",{flex:"1",maxWidth:"calc(90%)"}),H=(0,n.zo)("p",(e=>{let{$theme:t}=e;return{...t.typography.LabelMedium,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}})),E=(0,n.zo)("p",(e=>{let{$theme:t}=e;return{...t.typography.ParagraphSmall,color:t.colors.contentSecondary}})),X=(0,n.zo)("div",(e=>{let{$theme:t}=e;return{color:t.colors.contentStateDisabled,display:"flex",justifyContent:"center"}})),D=(0,n.zo)("div",(e=>{let{$theme:t,$bottomSheetPaddingBottom:r=0}=e;return{display:"flex",flexDirection:"column",gap:t.sizing.scale300,paddingBottom:`${r}px`}}));function R(e){let{store:t,$paddingTop:r,isMobile:n}=e;const a=(0,i.T)(),l=(0,s.v)((e=>{let{device:t}=e;return t.isIOS})),{draftOrder:d,draftOrderUUID:c}=(0,B.Dz)(),{isBillSplitParticipant:p}=(0,x.Z)(),{updateDraftOrderV2:h}=(0,k.Z)(),[g,m]=(0,o.useState)(!1),[Z,C]=(0,o.useState)(d?.storeInstructions),R=(0,o.useRef)(null),j=void 0===t.data?.disableCheckoutInstruction||Boolean(t.data?.disableCheckoutInstruction),[W,N]=(0,o.useState)(0),A=(0,z.T)(),F=(0,I.qP)(t.data?.location?.locationType),Y=(0,_.Z)(),Q=(0,S.Z)(),G=()=>{if(!l||!w.Z?.visualViewport)return;if(!w.Z.visualViewport)return;const e=w.Z.innerHeight-w.Z.visualViewport.height;N(Math.max(0,e))};(0,o.useEffect)((()=>(w.Z?.visualViewport?.addEventListener("resize",G),()=>{w.Z?.visualViewport?.removeEventListener("resize",G)})));return j||p||F?null:(0,u.BX)(u.HY,{children:[(0,u.tZ)(O,{$paddingTop:r,children:(0,u.tZ)(U,{onClick:()=>{m(!0),R.current&&R.current.focus()},children:(0,u.tZ)(M,{children:d?.storeInstructions?(0,u.BX)(u.HY,{children:[(0,u.tZ)(L,{children:(0,u.tZ)(H,{children:d?.storeInstructions})}),(0,u.tZ)(X,{children:(0,u.tZ)(f.default,{size:20})})]}):(0,u.BX)(u.HY,{children:[(0,u.BX)(L,{children:[(0,u.tZ)(H,{children:a("shared.add_an_order_note")}),(0,u.tZ)(E,{children:a("shared.special_instructions")})]}),(0,u.tZ)(X,{children:(0,u.tZ)(b.default,{size:20})})]})})})}),g?(0,u.tZ)($.J,{title:a("shared.add_an_order_note"),onClose:()=>m(!1),children:(0,u.tZ)(T.y,{meta:{popover_id:"add_an_order_note"},children:(0,u.BX)(D,{$bottomSheetPaddingBottom:W,children:[(0,u.tZ)(y.Z,{value:Z,onBlur:e=>{const t=e.target.value.trim();Y&&(d?.storeInstructions??"")===t||h({draftOrderUUID:c,storeInstructions:t,businessDetails:d?.businessDetails})},onChange:e=>C(e.target.value),placeholder:a(A?"shared.single_item_placeholder.non_eats":"shared.single_item_placeholder"),overrides:{Input:{style:e=>{let{$theme:t}=e;return{...Q?t.typography.ParagraphMedium:null,height:"120px"}}}},inputRef:R}),(0,u.tZ)(P,{children:a("shared.you_may_be_charged_for_extras")}),(0,u.tZ)(v.Z,{onClick:()=>m(!1),children:a("shared.save")})]})})}):null]})}var j=r(60849),W=r(97763);const N=()=>{const e=(0,j.qp)({...W.J.utensils_checkbox_allowlist,defaultValue:""});return{showOldUtensilsFlow:t=>{if(!t)return!1;return e.split("//").includes(t)}}},A=e=>{let{store:t,instructionsPadding:r,singleUseMargin:o,isRegularOrder:n=!1}=e;const{showOldUtensilsFlow:i}=N(),a=i(t.data?.uuid);return(0,u.BX)(u.HY,{children:[n&&!a?null:(0,u.tZ)(Z,{store:t,margin:o,showUtensils:a}),(0,u.tZ)(R,{store:t,$paddingTop:r})]})}},10015:(e,t,r)=>{"use strict";r.d(t,{xB:()=>_,TG:()=>M,GP:()=>H,Et:()=>y});var o=r(52246),n=r(71110),i=r("__fusion__685"),a=r(59210),l=r(91931),s=r(5639),d=r(62091),c=r(95444),u=r(36151),p=r(73518),h=r(33990);function g(e,t){return(0,h.tZ)(p.Z,{viewBox:"0 0 22 22",ref:t,...e,children:(0,h.tZ)("path",{d:"M15.801 12.5c-4 0-7.2-3.2-7.2-7.2 0-2.1.9-3.9 2.2-5.2-6-.1-10.7 4.7-10.7 10.5s4.7 10.5 10.5 10.5c5.7 0 10.6-4.6 10.5-10.7-1.4 1.2-3.3 2.1-5.3 2.1z"})})}const m=u.forwardRef(g);var Z=r(72275),b=r(70247);(0,l.zo)("div",(e=>{let{$theme:t}=e;return{[t.mediaQuery.medium]:{display:"none"}}})),(0,l.zo)("div",(e=>{let{$theme:t}=e;return{display:"none",[t.mediaQuery.medium]:{display:"unset"}}}));const f=(0,l.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.DisplayBold5XSmall}})),y=e=>{let{mobile:t,desktop:r}=e;const{isMobile:o}=(0,s.hU)();return(0,h.tZ)(h.HY,{children:o&&t||!o&&r||null})},v=(0,l.zo)("div",{position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, .5)",display:"flex",alignItems:"center",justifyContent:"center"}),C=(0,l.zo)("div",(e=>{let{$size:t,$theme:r}=e;return{height:`${t}px`,width:`${t}px`,flexShrink:0,borderRadius:r.borders.radiusFull,overflow:"hidden",position:"relative"}})),x=(0,l.zo)(d.Z,(e=>{let{$size:t}=e;return{height:`${t}px`,width:`${t}px`,objectFit:"cover",flexShrink:0}})),z=e=>{let t,{overlayIcon:r,size:o=24}=e;if("WEATHER_MOON"===r)t=(0,h.tZ)(m,{color:"white",size:o});else{if("PERSON_MULTIPLE"!==r)return null;t=(0,h.tZ)(c.Z,{color:"white",size:o})}return(0,h.tZ)(v,{children:t})},B=e=>{let{size:t,storeImage:r,title:o,overlayIcon:n,overlayIconSize:i}=e;return(0,h.BX)(C,{$size:t,children:[(0,h.tZ)(x,{$size:t,src:r,alt:o}),(0,h.tZ)(z,{overlayIcon:n,size:i})]})},k=(0,l.zo)("div",(e=>{let{$theme:t}=e;return{position:"relative",height:t.sizing.scale1600,width:t.sizing.scale1600,flexShrink:0}})),$=(0,l.zo)("div",(()=>({position:"absolute",top:0,left:0}))),w=(0,l.zo)("div",(()=>({position:"absolute",bottom:0,right:0}))),I=(0,l.zo)("div",(e=>{let{$theme:t,$size:r=0,$isHovering:o,$isMobile:n}=e;return{width:`${r+2}px`,height:`${r+2}px`,borderRadius:t.borders.radiusFull,position:"absolute",bottom:0,right:0,...o?{background:n?t.colors.menuFillHover:t.colors.backgroundSecondary}:{background:t.colors.backgroundPrimary}}})),_=e=>{let{cartView:t,isHovering:o,showBorder:i}=e;const{storeImageUrls:a,title:l,overlayIcon:d}=t||{},{isMobile:c}=(0,s.hU)(),u=(0,n.pZ)(r(44412)),p=a??(i?[u,u]:[u]);return p[0]?p.length>1&&p[1]?(0,h.BX)(k,{children:[(0,h.tZ)($,{children:(0,h.tZ)(B,{storeImage:p[0],title:l,size:40,overlayIcon:d,overlayIconSize:14})}),(0,h.BX)(w,{children:[i?(0,h.tZ)(I,{$size:40,$isHovering:o,$isMobile:c}):null,(0,h.tZ)(B,{storeImage:p[1],title:l,size:40,overlayIcon:d,overlayIconSize:14})]})]}):(0,h.tZ)(B,{storeImage:p[0],title:l,size:64,overlayIcon:d}):null},S=(0,l.zo)("div",{display:"flex"}),T=(0,l.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",alignItems:"center",paddingRight:t.sizing.scale600}})),P=(0,l.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexDirection:"column",justifyContent:"center",gap:t.sizing.scale100}})),O=(0,l.zo)("div",(e=>{let{$theme:t,$double:r,$size:o}=e;return{height:`${o}px`,width:`${o}px`,flexShrink:0,borderRadius:"50%",position:"relative",...r&&{border:`${t.sizing.scale0} solid ${t.colors.backgroundPrimary}`,":first-child":{marginRight:`-${t.sizing.scale800}`}}}})),U=(0,n.pZ)(r(44412)),M=e=>{let{iconSize:t,subtitle:r,enabledBundle:o,labelSize:n}=e;const[i,s]=(0,l.hQ)(),{cartView:d,isBundledOrder:c}=(0,b.Dz)(),{storeTitle:u,storeImg:p,storeAddr:g}=(0,Z.Z)(),m=o&&d?.title||u,y="large"===n?(0,h.tZ)(f,{children:m}):(0,h.tZ)(a.Uc,{children:m});return(0,h.BX)(S,{children:[(0,h.tZ)(T,{children:o&&c?(d?.storeImageUrls??[U,U]).map((e=>(0,h.tZ)(O,{$double:!0,$size:t,children:(0,h.tZ)(B,{size:t,storeImage:e})},e))):(0,h.tZ)(B,{size:t,storeImage:p})}),(0,h.BX)(P,{children:[y,(0,h.tZ)(a.aM,{color:s.colors.contentSecondary,children:r||g})]})]})},L=(0,l.zo)(o.rU,(e=>{let{$theme:t,$hasPadding:r}=e;return{display:"flex",justifyContent:"space-between",alignItems:"center",...r?{padding:`${t.sizing.scale600} 0`}:{}}})),H=e=>{let{enabledBundle:t,labelSize:r}=e;const{restaurantLink:o,onGoToStore:n}=(0,Z.Z)(),[a,s]=(0,l.hQ)();return(0,h.BX)(L,{to:o,$hasPadding:"large"!==r,onClick:n,children:[(0,h.tZ)(M,{iconSize:48,enabledBundle:t,labelSize:r}),(0,h.tZ)(i.default,{size:20,color:s.colors.contentTertiary})]})}},26740:(e,t,r)=>{"use strict";r.d(t,{jL:()=>i});var o=r(67848),n=r(33990);function i(e){return(0,n.tZ)(o.j,{...e})}i.defaultProps=o.j.defaultProps},10825:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var o=r(43193),n=r(58984),i=r(15070),a=r(7876),l=r(67476),s=r(83960),d=r(24316),c=r(74057),u=r(8057),p=r(69630),h=r(3945),g=r(70247),m=r(86990),Z=r(76150);function b(e){const{setActiveDraftOrder:t}=(0,d.Z)(),r=(0,p.Z)(),{deliveryTime:b,deliveryAddress:f,diningMode:y,storeUuid:v,isDraftOrderParticipant:C}=(0,s.Z)(e),{hasGroupOrderForStore:x}=(0,l.Z)(v),{hasActiveDraftOrderMetadata:z}=(0,c.Z)(e),B=(0,n.I0)(),k=e&&e===v&&x,{sidebarCartVisible:$}=(0,Z.Lb)(),{draftOrders:w}=(0,i.v)((e=>{let{draftOrders:t}=e;return t})),{draftOrder:I,draftOrderMaybe:_}=(0,g.Dz)(),[S,T]=o.useState(!1),P=k&&C,O=(0,m.Z)({storeId:e,originalCurrencyCode:null});return o.useCallback((()=>{let o;r&&w.data&&Boolean(I)&&_.hasLoaded&&e&&!S&&I?.storeUuid!==e&&!$&&(o=(0,h.w)(w,e),o&&(t(o),T(!0))),r&&!z&&(e&&!o||(B((0,a.A0)(v,{...b?{storeScheduledTime:b}:{},...f?{storeDeliveryLocation:f}:{},...y?{storeDiningMode:y}:{},...O?{storeCurrencyCode:O}:{},isGroupOrderParticipant:P})),o&&B((0,u.hW)())))}),[r,w,I,_.hasLoaded,e,S,z,t,B,v,b,f,y,O,P,$])}},44126:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var o=r(43193),n=r(94813),i=r(46933),a=r(70247),l=r(83960),s=r(67476),d=r(70587),c=r(55403),u=r(14016),p=r(59210),h=r(91931),g=r(45106),m=r(49373),Z=r(52298),b=r(35586),f=r(7646),y=r(91028),v=r(93633),C=r(33535),x=r(50262),z=r(33990);const B=(0,h.zo)("div",(e=>e.$isDraftOrderCreator?{}:{padding:"16px 0"})),k=(0,h.zo)("div",{display:"flex",justifyContent:"space-between",alignItems:"center"}),$=e=>{(0,c.Z)();const{serverCart:t}=(0,a.iQ)(),r=t.data?.groupedItems||[],n=(0,g.Z)(),d=(0,u.T)(),{setIsManagingGroupOrder:h}=(0,v.Z)(),{storeUuid:$,updateItemQuantity:w,getItemClickUrl:I,gutterWidth:_}=e,S=(0,l.Z)(),{canEditGroupOrderCart:T}=(0,s.Z)($),{cartsWithItems:P,cartsWithoutItems:O,currentUserCart:U}=(0,b.Z)(),M=(0,C.ZP)(),L=t.data?.items||[],H=t.data?.numMembers||1,E=(0,m.dH)(L),X=S.isDraftOrderCreator,D=o.useCallback((e=>{M(e,{hhcoManageOrder:{itemQuantity:E,guestWithItemCount:P.length,guestWithoutItemCount:O.length,guestCount:H}})}),[M,H,E,P,O]);return(0,z.tZ)(z.HY,{children:n?(0,z.BX)(z.HY,{children:[(0,z.tZ)(y.jf,{groupingTitle:d(1===E?"go.num_cart_items_singular":"go.num_cart_items_plural",{numItems:E}),groupingDescription:1===P.length?d("go.num_people.singular",{numPeople:P.length}):d("go.num_people",{numPeople:P.length}),onClick:()=>D("eats:e4b_hhco_group_your_items_tap")}),(0,z.tZ)(x.a,{gutterWidth:_})]}):(0,z.BX)(B,{$isDraftOrderCreator:X,children:[X?(0,z.BX)(z.HY,{children:[(0,z.tZ)(Z.ZP,{$height:16}),(0,z.BX)(k,{children:[(0,z.tZ)(p.D9,{children:(0,z.tZ)(i.v,{id:"go.people"})}),(0,z.tZ)(f.Bi,{onClick:()=>{D("eats:e4b_hhco_manage_tap"),h(!0)},children:(0,z.tZ)(i.v,{id:"go.manage"})})]}),(0,z.tZ)(Z.ZP,{$height:16}),(0,z.tZ)(x.a,{gutterWidth:_}),(0,z.tZ)(Z.ZP,{$height:16})]}):null,U?(0,z.BX)(z.HY,{children:[(0,z.tZ)(y.q4,{cartMemberIndex:r.length,cartByMember:U,getItemClickUrl:I,updateItemQuantity:w,draftOrderMetadata:S,canEditGroupOrderCart:T,startExpanded:!0}),S.isDraftOrderCreator?(0,z.tZ)(Z.ZP,{$height:16}):null]}):null,(0,z.tZ)(x.a,{gutterWidth:_}),S.isDraftOrderCreator?(0,z.BX)(z.HY,{children:[(0,z.tZ)(y.jf,{groupingTitle:d("go.manage.guests_with_items_cart_cta"),groupingDescription:1===P.length?d("go.num_people.singular",{numPeople:P.length}):d("go.num_people",{numPeople:P.length}),onClick:()=>D("eats:e4b_hhco_guest_with_items_tap")}),(0,z.tZ)(x.a,{gutterWidth:_}),(0,z.tZ)(y.jf,{groupingTitle:d("go.manage.guests_without_items_cart_cta"),groupingDescription:1===O.length?d("go.num_people.singular",{numPeople:O.length}):d("go.num_people",{numPeople:O.length}),onClick:()=>D("eats:e4b_hhco_guest_without_items_tap")})]}):(0,z.tZ)(y.jf,{groupingTitle:d("go.manage.other_guests_cta"),groupingDescription:d(1===H?"go.num_people.singular":"go.num_people",{numPeople:H}),onClick:()=>D("eats:e4b_hhco_other_guests_tap")}),(0,z.tZ)(x.a,{gutterWidth:_})]})})};var w=r(69630),I=r(33967);function _(e){let{groupedItems:t,isBillSplitOrder:r,isCreator:o}=e;const[,n]=(0,h.hQ)();if(!o)return null;const a=t.length-1,l=t.reduce(((e,t)=>!Boolean(t?.isCreator)&&(r&&t?.confirmed||!r&&t?.items?.length)?++e:e),0);return(0,z.tZ)(p.aM,{color:n.colors.contentSecondary,marginBottom:n.sizing.scale600,children:r?(0,z.tZ)(i.v,{id:"go.creator.participant.completed.gobs.subtext",data:{totalCount:a,completedCount:l}}):(0,z.tZ)(i.v,{id:"go.creator.participant.completed.cpa.subtext",data:{totalCount:a,completedCount:l}})})}const S=e=>{let{startUserCartExpanded:t=!0,...r}=e;const u=(0,n.TH)(),{serverCart:h}=(0,a.iQ)(),g=h.data?.groupedItems||[];(0,c.Z)();const m=(0,l.Z)(),{canEditGroupOrderCart:Z}=(0,s.Z)(r.storeUuid),b=(0,w.Z)(),{isDraftOrderCreator:f}=m,v=m.billSplitOption===d.x.SPLIT_BY_SUBTOTAL,C=(0,I.Z)();if(m.isHandledHighCapacityOrder&&b)return(0,z.tZ)($,{updateItemQuantity:r.updateItemQuantity,getItemClickUrl:r.getItemClickUrl,storeUuid:r.storeUuid,gutterWidth:r.gutterWidth??void 0});const x=g.find((e=>e.isCurrentUser)),B=Boolean(x?.isCreator);return(0,z.BX)(z.HY,{children:[(0,z.tZ)(p.fH,{marginTop:"scale700",marginBottom:"scale600",children:(0,z.tZ)(i.v,{id:"shared.yourItems"})}),x?(0,z.tZ)(y.pS,{cartByMember:x,showRemoveParticipantButton:!0,cartMemberIndex:0,startExpanded:t,storeUuid:r.storeUuid,storeSlug:r.storeSlug,updateCartItemQuantity:C,location:u,isDraftOrderCreator:f,canEditGroupOrderCart:Z,draftOrderMetadata:m}):null,g.length>1?(0,z.BX)(o.Fragment,{children:[(0,z.tZ)(p.fH,{marginTop:"scale600",marginBottom:B?"0":"scale600",children:(0,z.tZ)(i.v,{id:"go.other.group.memeber.section.heading"})}),(0,z.tZ)(_,{isBillSplitOrder:v,groupedItems:g,isCreator:B}),g.map(((e,t)=>e.isCurrentUser?null:(0,z.tZ)(y.pS,{cartByMember:e,showRemoveParticipantButton:!0,cartMemberIndex:t,startExpanded:!1,storeUuid:r.storeUuid,storeSlug:r.storeSlug,updateCartItemQuantity:C,location:u,isDraftOrderCreator:f,canEditGroupOrderCart:Z,draftOrderMetadata:m},t)))]}):null]})}},35586:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var o=r(70247);function n(){const{serverCart:e}=(0,o.iQ)(),t=e.data?.groupedItems||[],r=[],n=[];let i;return t.forEach((e=>{e.isCurrentUser&&(i=e),e.items&&e.items.length>0?n.push(e):r.push(e)})),{cartsWithItems:n,cartsWithoutItems:r,currentUserCart:i}}},2643:(e,t,r)=>{e.exports=r.p+"d7c4e10b024b6b9e.json"},42881:(e,t,r)=>{e.exports=r.p+"d4d3eb39747c0f88.json"},35781:(e,t,r)=>{e.exports=r.p+"2967460fa4493714.json"}}]);