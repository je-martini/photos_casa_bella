"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[76979],{76979:(e,t,r)=>{r.d(t,{Z:()=>b});var i=r(36151),n=r(99015),l=r(96911),a=r(86745),o=r(91931),d=r(58531),s=r(71454),c=r.n(s),h=r(60849),g=r(97763),p=r(54192),u=r(7760),Z=r(33990);const m=(0,o.zo)("ul",(e=>{let{$theme:t,$supportsScrollSnapping:r,$textDirection:i}=e;const n=t.sizing.scale800;return{display:"flex",flexShrink:0,flexGrow:0,flexBasis:"100%",width:"100%",...r?{scrollSnapAlign:"start"}:{},..."ltr"===i?{marginRight:n}:{marginLeft:n}}})),f=(0,o.zo)("li",(e=>{let{$theme:t,$textDirection:r}=e;const i="22px";return{..."ltr"===r?{marginRight:i}:{marginLeft:i}}})),b=e=>{let{featuredStores:{stores:t,header:r},feedItemUuid:o,customEventMetadata:s,position:b,feedItem:x}=e;const{containerRef:w,getPageChunks:y,getPageProps:$,isPreviousPageDisabled:v,isNextPageDisabled:C,handlePageChange:k,supportsScrollSnapping:P,textDirection:I}=(0,l.Z)(),S=w.current?.parentElement?Math.round(w.current.parentElement.offsetWidth/152):8,B=(0,i.useMemo)((()=>{const e=t?.map(((e,r)=>(0,Z.tZ)(f,{$textDirection:I,children:(0,Z.tZ)(n.ZP,{store:e,metadata:{isDesktop:!0},imageSettings:{diameter:130,useLazyLoad:r>=S},analyticsInfo:{customEventMetadata:s,feedItemUuid:o,positionOnCarousel:r,positionOnFeed:b,carouselSize:t.length,feedItemType:x?.type}})},r)))??[];return y(e,S)}),[t,y,I,s,o,S,b,x]),{onScroll:A}=(0,p.Z)(w,o),z=(0,h.rj)({...g.J["carousel.scroll.throttling_interval"],defaultValue:500}),{onScroll:L}=(0,u.g)(),H=c()((e=>{A(e),L()}),z);return(0,Z.tZ)(d.Z,{header:r,onPageChange:k,showPaginationButtons:(t?.length??0)>S,backwardEnabled:!v,forwardEnabled:!C,analyticsLabel:s?.analyticsLabel,children:(0,Z.tZ)(a.Bb,{ref:w,$supportsScrollSnapping:P,onScroll:H,children:B.map(((e,t,r)=>(0,Z.tZ)(m,{...$(t,r.length),children:e},t)))})})}},58531:(e,t,r)=>{r.d(t,{Z:()=>P});var i=r(91931),n=r(29194),l=r(36151),a=r(46933),o=r(14966),d=r(19354),s=r(65717),c=r(40841),h=r(33990);const g=(0,i.w1)(o.UA,(e=>{let{$theme:t}=e;return t.typography.LabelMedium})),p=e=>{let{callToAction:t,onViewAllClick:r,showArrow:i}=e;const n=(0,d.ZP)(),o=(0,s.Z)()?c.q:n(t?.actionUrl),p=t?.text||(0,h.tZ)(a.v,{id:"carousel.view_all"}),u=l.useCallback((()=>{"function"==typeof r&&r()}),[r]);return(0,h.tZ)(g,{"data-testid":"view-all-external-button",onClick:u,href:o,children:p})};var u=r(34911),Z=r(57994),m=r(62091),f=r(36278),b=r(54669),x=r(64189),w=r(94672);const y=(0,i.zo)("div",{display:"flex",alignItems:"center",justifyContent:"flex-end"}),$=(0,i.zo)("div",(e=>{let{$marginBottom:t}=e;return{display:"flex",justifyContent:"space-between",alignItems:"center",position:"relative",...t?{marginBottom:t}:{marginBottom:"24px"}}})),v=(0,i.zo)("div",{display:"flex"}),C=(0,i.zo)("div",{position:"relative",paddingRight:"12px"}),k=(0,i.zo)(m.Z,(e=>{let{$textDirection:t,$size:r,$border:i,$borderRadius:n,$theme:l}=e;const a="large"===r?l.sizing.scale1400:l.sizing.scale1000;return{display:"flex",height:`${a}`,width:`${a}`,border:i,borderRadius:n,..."rtl"===t?{right:0,transform:"scaleX(-1)"}:{left:0}}})),P=e=>{let{header:t,backwardEnabled:r,forwardEnabled:i,showPaginationButtons:l,analyticsLabel:a,onPageChange:o,onViewAllClick:d,isExternalCTA:s,children:c,customEventMetadata:g,seoHeader:m,headerTypography:P,endIconProps:I,hideEndIcon:S}=e;const B=(0,b.Z)(),A=(0,n.gm)(),{callToAction:z}=t||{},L=S?null:t?.endIcon,H=z&&z.actionUrl&&z.actionUrl.includes("/search?")&&!B,D=s||(0,w.Z)(z?.actionUrl||""),E=(0,h.BX)(y,{children:[z&&!H?D?(0,h.tZ)(p,{callToAction:z,onViewAllClick:d}):(0,h.tZ)(x.ZP,{callToAction:z,onViewAllClick:d,analyticsLabel:a}):null,z&&l?(0,h.tZ)(f.ZP,{$width:"40px"}):null,l?(0,h.tZ)(u.Z,{backwardEnabled:r,forwardEnabled:i,analyticsLabel:a,onPageChange:o,customEventMetadata:g}):null]});return m?(0,h.BX)(h.HY,{children:[(0,h.BX)($,{children:[(0,h.BX)(v,{children:[(0,h.tZ)(Z.ZP,{header:t,headerTypography:P}),m&&L?(0,h.tZ)(C,{children:(0,h.tZ)(k,{src:L,$textDirection:A,$size:"small"})}):null]}),E]}),c]}):(0,h.BX)(h.HY,{children:[(0,h.BX)($,{$marginBottom:"16px",children:[(0,h.BX)(v,{children:[L?(0,h.tZ)(C,{children:(0,h.tZ)(k,{src:L,$textDirection:A,$size:"large",$border:I?.border||"unset",$borderRadius:I?.borderRadius||"unset"})}):null,(0,h.tZ)(Z.ZP,{header:t,headerTypography:"HeadingSmall"})]}),E]}),c]})}},73970:(e,t,r)=>{r.d(t,{AI:()=>w,ZJ:()=>$,ZP:()=>k,gC:()=>y,jr:()=>C,pO:()=>v});var i=r(36151),n=r(91931),l=r(99248),a=r(67206),o=r(45257),d=r(25750),s=r(52298),c=r(94579),h=r(97415),g=r(47144),p=r(11890),u=r(33990);const Z=(0,n.zo)("div",{overflow:"hidden",position:"relative"}),m=(0,n.zo)("div",{overflow:"hidden",position:"relative",width:"fit-content",display:"inline-flex"}),f=(0,n.zo)("div",(e=>{let{$theme:t}=e;return{...(0,a.Z)({$theme:t}),backgroundSize:"100vw 100%",position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:c.I_.background}})),b=(0,n.zo)("div",{display:"flex"}),x=(0,n.zo)("div",(e=>{let{$theme:t}=e;return{position:"relative","::before":{backgroundColor:t.colors.backgroundPrimary,position:"absolute",top:0,bottom:0,left:`-${o.wl/2}px`,right:`-${o.wl/2}px`,content:'""'}}})),w=e=>{let{miniStoreItemSize:t,hideHeader:r}=e;const i=g.cu/g.qL;return(0,u.BX)(Z,{children:[(0,u.tZ)(f,{}),r?null:(0,u.BX)(u.HY,{children:[(0,u.tZ)(h.gD,{width:"240px",height:"24px"}),(0,u.tZ)(h.CB,{$height:"24px"})]}),(0,u.tZ)(d.Z,{separator:()=>(0,u.tZ)(h.CB,{$height:"24px"}),children:[...Array(g.qL)].map(((e,r)=>(0,u.tZ)(o.rj,{children:(0,u.tZ)(d.Z,{separator:()=>(0,u.tZ)(x,{}),children:[...Array(i)].map(((e,r)=>(0,u.tZ)(o.bL,{span:12/i,children:(0,u.tZ)(l.s,{size:t})},`loading_${r}`)))})},`row_${r}`)))})]})},y=e=>{let{heroImageHeight:t=g.zi,hideHeader:r,colCount:i=3}=e;return(0,u.BX)(Z,{children:[(0,u.tZ)(f,{}),r?null:(0,u.BX)(u.HY,{children:[(0,u.tZ)(h.gD,{width:"240px",height:"24px"}),(0,u.tZ)(h.CB,{$height:"24px"})]}),(0,u.tZ)(o.rj,{children:(0,u.tZ)(d.Z,{separator:()=>(0,u.tZ)(x,{}),children:[...Array(i)].map(((e,r)=>(0,u.tZ)(o.bL,{span:12/i,children:(0,u.tZ)(l.Z,{heroImageHeight:t})},`loading_${r}`)))})})]})},$=()=>(0,u.BX)(Z,{children:[(0,u.tZ)(f,{}),(0,u.BX)("div",{children:[(0,u.tZ)(h.gD,{width:"240px",height:"24px"}),(0,u.tZ)(h.CB,{$height:"12px"}),(0,u.tZ)(h.gD,{width:"180px",height:"18px"})]})]}),v=e=>{let{colCount:t=8}=e;return(0,u.BX)(m,{children:[(0,u.tZ)(f,{}),(0,u.tZ)(b,{children:(0,u.tZ)(d.Z,{separator:()=>(0,u.tZ)(h.CB,{$width:"8px"}),children:[...Array(t)].map(((e,t)=>(0,u.tZ)(i.Fragment,{children:(0,u.tZ)(p.Z,{$width:"80px",$height:"36px",$bgColor:"backgroundPrimary"})},`row_${t}`)))})})]})},C=e=>{let{rowCount:t=3,colCount:r=3,rowSpacerHeight:i=80,heroImageHeight:n,hideHeader:l}=e;return(0,u.tZ)(d.Z,{separator:()=>(0,u.tZ)(s.ZP,{$height:i}),children:[...Array(t)].map(((e,t)=>(0,u.tZ)(y,{heroImageHeight:n,hideHeader:l,colCount:r},t)))})},k=C},86745:(e,t,r)=>{r.d(t,{AA:()=>f,Bb:()=>b,JL:()=>w,T3:()=>x,ZP:()=>$,gK:()=>m,sc:()=>y});var i=r(36151),n=r(94813),l=r(21519),a=r(76173),o=r(36337),d=r(73970),s=r(47986),c=r(91931),h=r(8109),g=r(46933),p=r(96911),u=r(33535),Z=r(33990);const m=3,f=24,b=(0,c.zo)("div",(e=>{let{$supportsScrollSnapping:t}=e;return{overflowX:"scroll",display:"flex",scrollbarWidth:"none","::-webkit-scrollbar":{display:"none"},cursor:"pointer",...t?{scrollSnapType:"x mandatory"}:{}}})),x=(0,c.zo)("ul",(e=>{let{$supportsScrollSnapping:t,$textDirection:r}=e;return{display:"flex",flexShrink:0,flexGrow:0,flexBasis:"100%",width:"100%",..."ltr"===r?{marginRight:`${f}px`}:{marginLeft:`${f}px`},...t?{scrollSnapAlign:"start"}:{}}})),w=(0,c.zo)("li",(e=>{let{$textDirection:t}=e;const r="24px";return{flexShrink:0,flexGrow:0,width:"calc(33.333% - 18px)",..."ltr"===t?{marginRight:r}:{marginLeft:r}}})),y=(0,c.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.ParagraphMedium,background:t.colors.backgroundSecondary,height:"240px",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"16px"}})),$=e=>{const{feedItemUuids:t}=(0,h.Z)(),{stores:r,analyticsLabel:c,$as:$="h2"}=e,v=(0,n.TH)(),{containerRef:C,getPageChunks:k,getPageProps:P,isPreviousPageDisabled:I,isNextPageDisabled:S,handlePageChange:B,supportsScrollSnapping:A,textDirection:z}=(0,p.Z)({scrollOffset:f}),L=i.useMemo((()=>e.viewAllLocation?e.viewAllLocation:e.carouselId?(0,s.Xqq)(v,{carouselId:e.carouselId}):null),[e.viewAllLocation,e.carouselId,v]),H=r.map(((t,r)=>{const i=e.storesMap[t.uuid];return i?(0,Z.tZ)(w,{$textDirection:z,children:(0,Z.tZ)(l.Z,{store:i,heroImageHeight:e.heroImageHeight,showFavorite:e.showFavorite,location:v,trackingCode:t.trackingCode,position:r,trackingSource:e.trackingSource,styleOverrides:e.styleOverrides,analyticsLabel:c})},r):null})).filter(Boolean),D=i.useMemo((()=>r.map((e=>e.uuid))),[r]),E=k(H,m),X=(0,u.ZP)();return i.useEffect((()=>{X("eats:legacy_feed_store_carousel_impression")}),[X]),e.feedItemUuid&&t.includes(e.feedItemUuid)?(0,Z.tZ)(o.Z,{analyticsLabel:c,entityUuids:D,carouselLayoutType:"store",children:(0,Z.BX)("section",{children:[(0,Z.tZ)(a.Z,{$as:$,title:e.title,subtitle:e.subtitle,viewAllLocation:L,paginated:!0,onPageChange:B,backwardEnabled:!1,forwardEnabled:!1,feedItemUuid:e.feedItemUuid,onViewAllClick:e.onViewAllClick}),(0,Z.tZ)(d.gC,{hideHeader:!0,heroImageHeight:e.heroImageHeight})]})}):(0,Z.tZ)(o.Z,{analyticsLabel:c,entityUuids:D,carouselLayoutType:"store",children:(0,Z.BX)("section",{children:[(0,Z.tZ)(a.Z,{$as:$,title:e.title,subtitle:e.subtitle,viewAllLocation:L,paginated:r.length>m,onPageChange:B,backwardEnabled:!I,forwardEnabled:!S,feedItemUuid:e.feedItemUuid,onViewAllClick:e.onViewAllClick}),0===r.length?(0,Z.tZ)(y,{children:(0,Z.tZ)(g.v,{id:"bandwagon.no_restaurants"})}):(0,Z.tZ)(b,{ref:C,$supportsScrollSnapping:A,children:E.map(((e,t,r)=>(0,Z.tZ)(x,{...P(t,r.length),children:e},t)))})]})})}}}]);