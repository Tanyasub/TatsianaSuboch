(()=>{var e,t={92788:(e,t,o)=>{const i=o(45697),n=o(67294),{useIntl:r}=o(36319),{useInView:a}=o(4225),{connector:s}=o(92078),l=o(98288),d=o(48655),c=o(73749).Z,{trackComponent:u}=o(40199),{googleAnalytics:h}=o(28601),{SeriesRecircAsset:p,SeriesRecircContainer:g,SeriesRecircContent:m,SeriesRecircDek:b,SeriesPromoHed:f,SeriesRecircReadMoreCta:y,SeriesRecircReadMoreCtaMobile:C,SeriesRecircTextContainer:k}=o(78268),v="Read more",S={[v]:c.readMoreDefault,"Read next":c.readNext},w=({ContentWrapper:e,readMoreCTA:t,seriesData:o})=>{const{formatMessage:i}=r();n.useEffect((()=>{u("SeriesRecirc")}),[]);const s=(({links:e})=>{let t;for(let o=0;o<e.length;o++){const{isCurrent:i}=e[o];if(i){for(let i=o+1;i<e.length;i++){const{isExternal:o,isPublished:n}=e[i]||{};if(n&&!o){t=e[i];break}}break}}return t})({links:(null==o?void 0:o.links)||[]}),d=e=>{h.emitGoogleTrackingEvent("seriesrecirc",{title:e})},[c,v]=a();if(n.useEffect((()=>{v&&h.emitUniqueGoogleTrackingEvent("series-inview",{title:null==s?void 0:s.promoHed})}),[v]),!o)return null;if(!s)return null;const{dek:w="",hed:B="",image:T=null,promoHed:x="",url:E=""}=s,I=T&&(T.segmentedSources||T.sources)&&Object.assign({},T);return n.createElement(e,null,s&&n.createElement(g,{ref:c},n.createElement(m,null,n.createElement(C,null,i(S[t])),n.createElement(p,null,I&&n.createElement("a",{href:E,onClick:()=>d(x||B)},n.createElement(l,Object.assign({},I,{isLazy:!0})))),n.createElement(k,null,n.createElement(y,null,i(S[t])),(B||x)&&n.createElement(f,null,n.createElement("a",{href:E,onClick:()=>d(x||B)},n.createElement("span",{dangerouslySetInnerHTML:{__html:x||B}}))),w&&n.createElement(b,null,n.createElement("span",{dangerouslySetInnerHTML:{__html:w}}))))))};w.propTypes={ContentWrapper:i.elementType,readMoreCTA:i.string,seriesData:i.shape({hed:i.string,dek:i.string,image:i.object,links:i.arrayOf(i.shape({hed:i.string,dek:i.string,image:i.object,isCurrent:i.bool,isExternal:i.bool,isPublished:i.bool,promoDek:i.string,promoHed:i.string,url:i.string}))})},w.defaultProps={ContentWrapper:d.NarrowContentWithWideAdRail,readMoreCTA:v,seriesData:null},w.displayName="SeriesRecirc",e.exports=s(w,{keysToPluck:["seriesData"]})},1564:(e,t,o)=>{const{asConfiguredComponent:i}=o(36380),n=o(92788);e.exports=i(n,"SeriesRecirc")},78268:(e,t,o)=>{const i=o(60677).default,{BaseText:n}=o(74327),{calculateSpacing:r,getColorToken:a}=o(79720),{BREAKPOINTS:s}=o(85326),l=i.div.withConfig({displayName:"SeriesRecircAsset"})`
  grid-column: 1/5;

  @media (max-width: ${s.md}) {
    grid-column: 1/-1;
  }
`,d=i.div.withConfig({displayName:"SeriesRecircContainer"})`
  margin-top: ${r(4)};
  margin-bottom: ${r(5)};
  border-top: 2px solid
    ${({theme:e})=>a(e,"colors.discovery.body.white.heading")};
  padding-top: ${r(2)};
`,c=i.figure.withConfig({displayName:"SeriesRecircContent"})`
  margin-right: 0;
  margin-left: 0;

  @media (min-width: ${s.md}) {
    display: grid;
    grid-column-gap: ${r(3)};
    grid-template-columns: repeat(10, 1fr);
  }

  @media (max-width: ${s.md}) {
    display: block;
  }
`,u=i(n).withConfig({displayName:"SeriesRecircDek"})`
  @media (min-width: ${s.md}) {
    grid-column: 1/-1;
  }
`;u.defaultProps={as:"div",typeIdentity:"typography.definitions.consumptionEditorial.description-embed"},u.displayName="SeriesRecircDek";const h=i(n).withConfig({displayName:"SeriesPromoHed"})`
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: ${s.md}) {
    grid-column: 1/-1;
  }
`;h.defaultProps={as:"h2",bottomSpacing:.625,topSpacing:1,typeIdentity:"typography.definitions.discovery.subhed-section-tertiary"};const p=i(n).withConfig({displayName:"SeriesRecircReadMoreCta"})`
  @media (max-width: ${s.md}) {
    display: none;
  }
`;p.defaultProps={typeIdentity:"typography.definitions.discovery.subhed-section-primary"};const g=i(p).withConfig({displayName:"SeriesRecircReadMoreCtaMobile"})`
  display: none;

  @media (max-width: ${s.md}) {
    display: block;
    grid-column: 1/-1;
    margin-bottom: 1em;
  }
`,m=i.div.withConfig({displayName:"SeriesRecircTextContainer"})`
  @media (min-width: ${s.md}) {
    grid-column: 5/-1;
  }
`;e.exports={SeriesRecircAsset:l,SeriesRecircContainer:d,SeriesRecircContent:c,SeriesRecircDek:u,SeriesPromoHed:h,SeriesRecircReadMoreCta:p,SeriesRecircReadMoreCtaMobile:g,SeriesRecircTextContainer:m}},73749:(e,t,o)=>{const i=o(36319);t.Z=(0,i.defineMessages)({readMoreDefault:{id:"ReadMore.SeriesRecirc",defaultMessage:"Read more",description:"SeriesRecirc component Read more text"},readNext:{id:"ReadNext.SeriesRecirc",defaultMessage:"Read next",description:"SeriesRecirc component Read next text"}})},94328:(e,t,o)=>{const i=o(45697),n=o(67294),{asConfiguredComponent:r}=o(36380),{googleAnalytics:a}=o(28601),{trackComponent:s}=o(40199),{ChannelCloudContainer:l,ChannelCloudContainerWrapper:d,ChannelCloudHeaderContainer:c,ChannelCloudHeaderLink:u,ChannelCloudHeaderImage:h,ChannelCloudSubChannelContainer:p,ChannelCloudSubChannelLink:g,ChannelCloudSubChannelLinkText:m,ChannelCloudSubChannelText:b}=o(9114),f=({channels:e,headerLogo:t,headerLink:o,sectionHeader:i})=>(n.useEffect((()=>{s("ChannelCloud")}),[]),n.createElement(d,null,i&&n.createElement(c,null,t&&n.createElement(h,{src:t,alt:"logo"}),n.createElement(u,{href:o,hasLogo:Boolean(t),dangerouslySetInnerHTML:{__html:i}})),e&&n.createElement(l,null,e.map((e=>n.createElement(p,{key:e.id},n.createElement(b,{dangerouslySetInnerHTML:{__html:e.text}}),e.sub.map((e=>n.createElement(g,{key:e.id,href:e.url,onClick:()=>a.emitGoogleTrackingEvent("channelCloud",e)},n.createElement(m,{dangerouslySetInnerHTML:{__html:e.text}}))))))))));f.propTypes={channels:i.arrayOf(i.shape({id:i.string,text:i.string,originalText:i.string,sub:i.arrayOf(i.shape({id:i.string,text:i.string,url:i.string}))})).isRequired,headerLink:i.string,headerLogo:i.string,sectionHeader:i.string.isRequired},f.displayName="ChannelCloud",e.exports=r(f,"ChannelCloud")},9114:(e,t,o)=>{const i=o(60677).default,{BaseText:n,BaseLink:r}=o(74327),{calculateSpacing:a,getColorStyles:s}=o(79720),l="\n  display: flex;\n  align-items: center;\n",d=i.div.withConfig({displayName:"ChannelCloudContainerWrapper"})``,c=i.div.withConfig({displayName:"ChannelCloudHeaderContainer"})`
  ${l};

  border-width: 0 0 ${a(.25)};
  border-style: solid;
  padding: ${a(1)} ${a(3)} ${a(2)}
    0;

  ${({theme:e})=>s(e,"border-color","colors.interactive.base.black")};
`,u=i.img.withConfig({displayName:"ChannelCloudHeaderImage"})`
  width: 25px;
  height: 30px;
`,h=i(r).withConfig({displayName:"ChannelCloudHeaderLink"})`
  position: relative;
  top: ${a(.3)};
  padding-left: ${({hasLogo:e})=>e?a(1.3):0};
`;h.defaultProps={colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.discovery.hed-bulletin-secondary"};const p=i.div.withConfig({displayName:"ChannelCloudContainer"})`
  display: flex;
  flex-wrap: wrap;
  padding: ${a(2.4)} ${a(6)}
    ${a(1)} 0;
`,g=i.div.withConfig({displayName:"ChannelCloudSubChannelContainer"})`
  ${l}
  flex-wrap: wrap;
  margin-bottom: ${a(2)};
  padding-right: ${a(2)};
`,m=i(n).withConfig({displayName:"ChannelCloudSubChannelText"})`
  padding-right: ${a(1)};

  &::after {
    content: ':';
  }
`;m.defaultProps={colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.globalEditorial.context-primary"};const b=i(r).withConfig({displayName:"ChannelCloudSubChannelLink"})`
  ${l}
  padding-right: ${a(1)};

  svg {
    ${({theme:e})=>s(e,"fill","colors.consumption.body.standard.body-deemphasized")};

    position: relative;
    top: 2px;
    right: 2px;
    transform: rotate(-45deg);
    width: 12px;
    height: 12px;
    vertical-align: bottom;
  }

  &::after {
    ${({theme:e})=>s(e,"color","colors.consumption.body.standard.body-deemphasized")};

    position: relative;
    right: ${({hasIcon:e})=>e?a(.4):0};
    line-height: 0;
    content: ',';
  }

  &:last-child {
    &::after {
      content: '';
    }
  }
`,f=i(n).withConfig({displayName:"ChannelCloudSubChannelLinkText"})`
  line-height: 1.7em;

  &:hover {
    ${({theme:e})=>s(e,"color","colors.consumption.body.standard.link-hover")};
    text-decoration: underline;
    ${({theme:e})=>s(e,"text-decoration-color","colors.consumption.body.standard.link-hover")};
  }
`;f.defaultProps={colorToken:"colors.consumption.body.standard.body-deemphasized",typeIdentity:"typography.definitions.globalEditorial.context-primary"},e.exports={ChannelCloudContainer:p,ChannelCloudContainerWrapper:d,ChannelCloudHeaderContainer:c,ChannelCloudHeaderLink:h,ChannelCloudHeaderImage:u,ChannelCloudSubChannelContainer:g,ChannelCloudSubChannelLink:b,ChannelCloudSubChannelLinkText:f,ChannelCloudSubChannelText:m}},64220:(e,t,o)=>{e.exports=o(19904)},19904:(e,t,o)=>{const i=o(67294),{trackComponent:n}=o(40199);class r extends i.PureComponent{constructor(){super(...arguments),this.writeResourceHintLink=e=>{const{as:t,hint:o,href:i}=e,n=document.createElement("link");n.as=t,n.href=i,n.rel=o,document.head.appendChild(n)}}componentDidMount(){n("ResourceHint"),this.props&&this.writeResourceHintLink(this.props)}render(){return i.createElement(i.Fragment,null)}}e.exports=r},46919:function(e,t,o){var i=this&&this.__rest||function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o};const n=o(67294),{connect:r}=o(18685),a=o(45697),{useIntl:s}=o(36319),l=o(94184),{asConfiguredComponent:d}=o(36380),c=o(57208),{googleAnalytics:u}=o(28601),h=o(94129),p=o(55890),{Circle:g}=o(26895),{ActionBarWrapper:m,ActionBarButton:b,ActionBarButtonDivider:f,ActionBarButtonText:y,ActionBarButtonSubText:C,ActionBarButtonIcon:k}=o(74655),v=e=>{var t,o=i(e,[]);const{actionButtons:r,buttonDirection:a,maxScreenThreshold:d,minScreenThreshold:v,variations:S={},bookmarkId:w=0,isBookmarkLoading:B,contentID:T,contentTitle:x,user:E,signInModalConfig:I}=o,{formatMessage:A}=s(),{hideSecondaryButtonText:P}=S,[M,R]=n.useState({}),{toggleBookmark:O}=h(o),{isVisible:L,source:D}=I||{},N=(e,t,o={})=>{u.emitGoogleTrackingEvent(e,Object.assign({actionbar_button_type:t,actionbar_parent_id:T,actionbar_parent_title:x},o))};n.useEffect((()=>{R((e=>Object.assign(Object.assign({},e),{bookmark:{isActive:Boolean(Number(w)),inViewport:!1}})))}),[w]),n.useEffect((()=>{!L&&"VERSO_BOOKMARKING"===D&&R((e=>Object.assign(Object.assign({},e),{bookmark:Object.assign(Object.assign({},(null==e?void 0:e.bookmark)||{}),{isInProcess:!1})})))}),[L,D]),n.useEffect((()=>{var e;!1!==B&&E.isAuthenticated||!(null===(e=M.bookmark)||void 0===e?void 0:e.inViewport)||(R((e=>Object.assign(Object.assign({},e),{bookmark:Object.assign(Object.assign({},e.bookmark),{inViewport:!1})}))),N("actionbar-impression","bookmark",{actionbar_status:w?"active":"default"}))}),[null===(t=M.bookmark)||void 0===t?void 0:t.inViewport,B]),n.useEffect((()=>{if(window.document&&window.document.location){const e=c.parseQueryParams(window.location.search);e.action&&"addBookmark"===e.action&&E.isAuthenticated&&O()}}),[O,E.isAuthenticated]);const $=e=>{var t;return(null===(t=M[e])||void 0===t?void 0:t.isActive)?A(p[e].afterActionLabel):A(p[e].defaultLabel)},H=e=>{var t,o;const i=p[e];return(null===(t=M[e])||void 0===t?void 0:t.isInProcess)?g:(null===(o=M[e])||void 0===o?void 0:o.isActive)?i.afterActionIcon:i.defaultIcon};return n.createElement(m,{"data-test-id":"ActionBar",buttonDirection:a,maxScreenThreshold:d,minScreenThreshold:v,onIntersectionViewport:(e,t)=>{e&&(r.forEach((e=>{"bookmark"===e&&R((e=>Object.assign(Object.assign({},e),{bookmark:Object.assign(Object.assign({},e.bookmark),{inViewport:!0})})))})),t())}},r.map(((e,t)=>{var o,i;const s=p[e],c={};if((null===(o=M[s.id])||void 0===o?void 0:o.isInProcess)&&(c.width="29px",c.height="29px",c.margin="0"),P&&1===t&&(s.hideSecondaryButtonText=P),"audio"===e&&(s.subText=" 45 minutes"),s){const o=$(e),u=s.subText||"";return n.createElement(n.Fragment,{key:s.id||t},n.createElement(b,{id:s.id,"aria-label":o+u,buttonDirection:a,onClick:e=>{((e,t)=>{switch(e){case"bookmark":N("actionbar-interaction","bookmark",{actionbar_status:w?"active":"default",actionbar_interaction_type:$(e)}),R((e=>Object.assign(Object.assign({},e),{bookmark:Object.assign(Object.assign({},e.bookmark),{isInProcess:!0})}))),O(t);break;case"audio":t.stopPropagation(),R(Object.assign(Object.assign({},M),{audio:{isActive:!M.audio||!M.audio.isActive}}))}})(s.id,e)},className:l({active:Boolean(null===(i=M[s.id])||void 0===i?void 0:i.isActive)}),maxScreenThreshold:d},n.createElement(k,Object.assign({as:H(s.id),title:o},c)),!s.hideSecondaryButtonText&&n.createElement(y,null,o,u&&n.createElement(C,null,u))),"row"===a&&t<r.length-1&&n.createElement(f,null))}return null})))};v.propTypes={actionButtons:a.arrayOf(a.oneOf(["audio","bookmark"])).isRequired,bookmarkId:a.number,buttonDirection:a.oneOf(["row","column"]),contentID:a.string,contentType:a.string,displayBookmarkAlert:a.func,documentUrl:a.string,doUpdateBookmarkedStatus:a.func,isUrlBookmark:a.bool,maxScreenThreshold:a.string,minScreenThreshold:a.string,organizationID:a.string,signInHed:a.string,signInHedSpanTag:a.string,signInMessage:a.string,signInModalConfig:a.shape({isVisible:a.bool,source:a.string}),user:a.shape({amguuid:a.string,isAuthenticated:a.bool}),userPlatform:a.shape({federatedGraphqlUrl:a.string,siteCode:a.string,userPlatformProxy:a.string,xClientID:a.string}),variations:a.object},v.defaultProps={buttonDirection:"row"},e.exports=r(((e,t)=>{const{coreDataLayer:{content:{contentType:o},site:{orgId:i}},"head.contentID":n,"head.canonicalUrl":r,"head.title":a,pageState:{bookmarkStatus:{bookmarkId:s,isUrlBookmark:l,isBookmarkLoading:d}},user:c,userPlatform:u,signInModalConfig:h}=e,{bookmarkDetails:p={},isPageScoped:g=!0}=t;return g?{bookmarkId:s,contentID:n,contentType:o,contentTitle:a,documentUrl:r,isBookmarkLoading:d,isUrlBookmark:l,organizationID:i,user:c,userPlatform:u,signInModalConfig:h}:{bookmarkId:p.bookmarkId,contentID:p.contentId,contentType:o,contentTitle:a,documentUrl:r,isUrlBookmark:p.isUrlBookmark,organizationID:i,user:c,userPlatform:u,signInModalConfig:h}}),(e=>({displayBookmarkAlert:()=>{e({type:"MERGE_KEY",key:"bookmarkAlert",value:{isVisible:!0}})},doUpdateBookmarkedStatus:t=>{e({type:"SET_KEY",key:"pageState.bookmarkStatus",value:t})}})))(d(v,"ActionBar"))},55890:(e,t,o)=>{const{SlimHeadphone:i,Pause:n,Bookmark:r,BookmarkActivated:a}=o(18322),{default:s}=o(99784),l={audio:{id:"audio",defaultIcon:i,afterActionIcon:n,defaultLabel:s.audioPrimaryLabel,afterActionLabel:s.audioSecondaryLabel},bookmark:{id:"bookmark",defaultIcon:r,afterActionIcon:a,defaultLabel:s.bookmarkSaveThisStory,afterActionLabel:s.bookmarkSavedToLibrary}};e.exports=l},94129:(e,t,o)=>{const{useIntl:i}=o(36319),n=o(45697),r=o(47057),{default:a}=o(99784),s=o(8046)(!1),l="verso-story-page",d=({bookmarkId:e,contentID:t,contentType:o,displayBookmarkAlert:n,doUpdateBookmarkedStatus:d,isUrlBookmark:c,organizationID:u,signInHed:h,signInHedSpanTag:p,signInMessage:g,user:m,userPlatform:b})=>{const{formatMessage:f}=i(),{amguuid:y="",isAuthenticated:C=!1}=m,{federatedGraphqlUrl:k,siteCode:v,userPlatformProxy:S,xClientID:w}=b,B=async e=>{e&&e.preventDefault();const{pathname:t,search:o}=window.location,i="action=addBookmark",n=o?`${t}${o}&${i}`:`${t}?${i}`;r.doDisplayModal({authSource:"sign-in-modal",source:"VERSO_BOOKMARKING",dangerousHed:h||"",dangerousHedSpanTag:p||"",dangerousDek:g||f(a.bookmarkSignInMessage),redirectURL:n,type:"default",analyticsType:"saved stories"})};return{toggleBookmark:async i=>C?e?(async t=>{t.preventDefault();try{const t=await s.proxyRemoveBookmark({amgUUID:y,bookmarkId:e,federatedGraphqlUrl:k,isUrlBookmark:c,source:l,userPlatformProxy:S,xClientID:w});if(t&&204!==t.status)return;d({bookmarkId:null,isUrlBookmark:null})}catch(e){console.error(e)}})(i):(async e=>{e&&e.preventDefault();try{const{statusCode:e,data:{id:i}={}}=await s.proxyCreateBookmark({amgUUID:y,copilotID:t,contentType:o,federatedGraphqlUrl:k,organizationID:u,siteCode:v,source:l,userPlatformProxy:S,xClientID:w});(201===e&&i||409===e)&&d({bookmarkId:i,isUrlBookmark:!1})}catch(e){console.error(e)}finally{window.history.replaceState({},document.title,document.location.pathname)}window.localStorage&&!window.localStorage.getItem("userHasUsedBookmarkFeature")&&(n(),window.localStorage.setItem("userHasUsedBookmarkFeature","true"))})(i):B(i),displaySignInModal:B}};d.propTypes={bookmarkId:n.number,contentID:n.string,contentType:n.string.isRequired,displayBookmarkAlert:n.func,documentUrl:n.string,doUpdateBookmarkedStatus:n.func,isUrlBookmark:n.bool,organizationID:n.string,signInHed:n.string,signInHedSpanTag:n.string,signInMessage:n.string,user:n.shape({amguuid:n.string,isAuthenticated:n.bool}).isRequired,userPlatform:n.shape({federatedGraphqlUrl:n.string,siteCode:n.string,userPlatformProxy:n.string,xClientID:n.string}).isRequired},e.exports=d},59185:(e,t,o)=>{const i=o(57);e.exports=i},74655:(e,t,o)=>{const{default:i,css:n}=o(60677),{BaseText:r}=o(74327),a=o(92727),{calculateSpacing:s,getColorStyles:l,maxScreen:d,minScreen:c,minMaxScreen:u}=o(79720),{minThresholds:h,maxThresholds:p}=o(515),g=i.span.withConfig({displayName:"ActionBarSecondaryButtonPrimaryIcon"})`
  margin-right: ${s(1)};
`,m=i(r).withConfig({displayName:"ActionBarButtonText"})`
  white-space: nowrap;
`;m.defaultProps={as:"span",colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.utility.button-utility"};const b=i(r).withConfig({displayName:"ActionBarButtonSubText"})`
  padding-left: ${s(.5)};
`;b.defaultProps={as:"span",colorToken:"colors.interactive.base.dark",typeIdentity:"typography.definitions.utility.assistive-text"};const f=i.span.withConfig({displayName:"ActionBarButtonDivider"})`
  align-self: center;
  border-left: 1px solid;
  ${({theme:e})=>l(e,"border-color","colors.interactive.base.border")};
  height: ${s(3)};
`,y=i.button.withConfig({displayName:"ActionBarButton"})`
  display: flex;
  position: relative;
  align-items: center;
  border-bottom: ${({buttonDirection:e})=>"column"===e&&"1px solid;"};
  border-radius: ${({buttonDirection:e})=>s("column"===e?1:6)};
  padding: 0 ${s(2)};
  height: ${s(6)};
  overflow: hidden;

  ${({buttonDirection:e})=>"column"===e?"\n        &:last-of-type:not(:first-of-type) {\n          border-top-left-radius: 0;\n          border-top-right-radius: 0;\n        }\n        &:not(:last-of-type) {\n          border-bottom-left-radius: 0;\n          border-bottom-right-radius: 0;\n        }\n      ":"row"===e?"\n        &:last-of-type:not(:first-of-type) {\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0;\n        }\n        &:not(:last-of-type) {\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0;\n        }\n      ":""};

  ${({theme:e})=>`\n      ${l(e,"border-color","colors.interactive.base.border")};\n      ${l(e,"background-color","colors.interactive.base.white")};\n    `};

  ${({buttonDirection:e})=>"column"===e&&`\n      min-width: ${s(7)};\n      height: ${s(7)};\n      &:last-of-type {\n        border-bottom: 0;\n      }\n    `}

  &:hover {
    text-decoration: none;
    ${({theme:e})=>l(e,"background-color","colors.interactive.base.highlight")};

    ${({maxScreenThreshold:e})=>e&&n`
        ${d(`${p[e]}px`)} {
          background-color: transparent;
        }
      `};
  }

  &:focus-visible {
    outline-style: auto;
  }

  &:focus {
    text-decoration: none;
  }

  ${g}.icon-loader {
    padding-right: ${s(1)};

    path {
      ${({theme:e})=>l(e,"fill","colors.interactive.base.brand-primary")};
    }
  }

  &.active {
    ${g} {
      path:first-of-type {
        ${({theme:e})=>l(e,"fill","colors.interactive.base.brand-primary")};
      }
    }

    ${m} {
      ${({theme:e})=>l(e,"color","colors.interactive.base.brand-primary")};
    }
  }
`,C=i(a).withConfig({displayName:"ActionBarWrapper"})`
  display: none;
  flex-direction: ${({buttonDirection:e})=>`${e};`};
  justify-content: center;
  border: 1px solid;
  border-radius: ${s(6)};

  ${({buttonDirection:e})=>"column"===e&&`\n    border-radius: ${s(1)};\n    width: ${s(7.25)};\n    transition: width 300ms ease-in-out;\n\n    ${m} {\n      display: none;\n      position: absolute;\n      left: ${s(6)};\n    }\n\n    ${g} {\n      position: absolute;\n      margin-right: 0;\n    }\n\n    &:hover {\n      width: ${s(22)};\n      ${g} {\n        margin-right: ${s(1)};\n      }\n      ${m} {\n        display: unset;\n      }\n    }\n  `}

  ${({theme:e})=>`\n      ${l(e,"border-color","colors.interactive.base.border")};\n      ${l(e,"background-color","colors.interactive.base.white")};\n    `};

  ${({maxScreenThreshold:e,minScreenThreshold:t})=>{const o=t?h[t]:0;if(e){const t=p[e];return n`
        ${u(`${o}px`,`${t}px`)} {
          display: inline-flex;
        }
      `}return n`
      ${c(`${o}px`)} {
        display: inline-flex;
      }
    `}};
`;e.exports={ActionBarWrapper:C,ActionBarButton:y,ActionBarButtonDivider:f,ActionBarButtonText:m,ActionBarButtonSubText:b,ActionBarButtonIcon:g}},99784:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=o(36319);t.default=(0,i.defineMessages)({audioPrimaryLabel:{id:"AudioPrimaryLabel.Listen",defaultMessage:"Listen",description:"Listen"},audioSecondaryLabel:{id:"AudioSecondaryLabel.NowPlaying",defaultMessage:"Now playing",description:"Now playing"},bookmarkSaveThisStory:{id:"BookmarkPrimaryLabel.SaveThisStory",defaultMessage:"Save this story",description:"Save this story"},bookmarkSavedToLibrary:{id:"BookmarkPrimaryLabel.SavedToLibrary",defaultMessage:"Saved to library",description:"Saved to library"},bookmarkSignInMessage:{id:"Bookmark.SignInMessage",defaultMessage:"After signing in, you can save stories and easily revisit them on any device—even off-line.",description:"Bookmark sign in message"}})},57:(e,t,o)=>{const{asVariation:i}=o(95545),n=o(46919);n.SecondaryButtonWithNoText=i(n,"SecondaryButtonWithNoText",{hideSecondaryButtonText:!0}),n.Stacked=i(n,"Stacked",{},{buttonDirection:"column"}),e.exports=n},90554:(e,t,o)=>{const i=o(67294),n=o(45697),{connect:r}=o(18685),a=o(83253),s=o(28824),l=o(18322),{minThresholds:d}=o(28657),{GlobalStyle:c,CloseModalButtonDesktop:u,CloseModalButtonMobile:h,ModalContentWrapper:p}=o(23247),g=({children:e,closeModalText:t,isModalOpen:o,openModal:n,modalTransitionTime:r,showHeader:s})=>{i.useEffect((()=>{a.setAppElement("#app-root")}),[]);const g=i.useMemo((()=>{var e;if(!s||!o||!document)return 0;const t=null===window||void 0===window?void 0:window.innerWidth,i=document.getElementsByClassName("visual-link-banner--is-scrolled"),n=document.getElementsByClassName("site-navigation");return t<d.xl&&i.length&&i[0]?i[0].offsetHeight:n&&n.length&&(null===(e=n[0])||void 0===e?void 0:e.offsetHeight)||0}),[o,s]);return i.createElement(a,{isOpen:o,className:"genericModal",overlayClassName:{base:"genericModalOverlay",afterOpen:"genericModalOverlayAfterOpen",beforeClose:"genericModalOverlayBeforeClose"},bodyOpenClassName:"genericModalBodyOpen",shouldCloseOnEsc:!0,closeTimeoutMS:r},i.createElement(u,{btnStyle:"text",iconPosition:"before",hasEnableIcon:!0,onClickHandler:()=>n(!1),ButtonIcon:l.Close,label:t}),i.createElement(h,{ButtonIcon:l.Close,onClickHandler:()=>n(!1),onTouchStart:()=>n(!1),btnStyle:"outlined",isIconButton:!0,hasEnableIcon:!0,cornerRadius:"FullyRoundedCorner",size:"small",label:t}),i.createElement(p,null,e),i.createElement(c,{siteHeaderHeight:g,modalTransitionTime:r}))};g.propTypes={children:n.node.isRequired,closeModalText:n.string,isModalOpen:n.bool.isRequired,modalTransitionTime:n.number,openModal:n.func.isRequired,showHeader:n.bool},g.defaultProps={closeModalText:"",modalTransitionTime:300,showHeader:!1},e.exports=r((e=>({isModalOpen:e.isModalOpen||!1})),(e=>{const{openModal:t}=s(e);return{openModal:t}}))(g)},42045:(e,t,o)=>{const i=o(1961),{asConfiguredComponent:n}=o(36380),{asThemedComponent:r}=o(3517);e.exports=r(n(i,"GenericModal"))},23247:(e,t,o)=>{const{default:i,createGlobalStyle:n}=o(60677),r=o(7279),{ButtonLabel:a,ButtonIconWrapper:s}=o(41909),{maxScreen:l,minScreen:d,getColorToken:c,calculateSpacing:u,getZIndex:h}=o(79720),{maxThresholds:p}=o(28657),{BREAKPOINTS:g}=o(85326),m=i(r.Utility).withConfig({displayName:"CloseModalButton"})`
  position: absolute;
  color: ${({theme:e})=>c(e,"colors.interactive.base.dark")};

  svg {
    fill: ${({theme:e})=>c(e,"colors.interactive.base.dark")};
  }

  &:hover {
    color: ${({theme:e})=>c(e,"colors.interactive.base.dark")};
  }

  ${s} {
    display: flex;
  }
`,b=i(m).withConfig({displayName:"CloseModalButtonDesktop"})`
  left: 0;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${c("colors.interactive.base.primary")};
  }

  ${l(`${p.lg}px`)} {
    display: none;
  }

  ${a} {
    padding: 0;
  }
`,f=i(m).withConfig({displayName:"CloseModalButtonRight"})`
  top: ${u(2.5)};
  right: ${u(3)};
  left: unset;
  z-index: ${h("skipLink")};
  border: 1px solid ${c("colors.interactive.base.light")};
  width: ${u(5)};
  height: ${u(5)};

  &:hover {
    border: 1px solid ${c("colors.interactive.base.light")};
    background: ${c("colors.interactive.base.light")};
  }

  svg {
    vertical-align: bottom;
  }

  ${d(g.lg)} {
    display: none;
  }
`,y=i.div.withConfig({displayName:"ModalContentWrapper"})`
  padding: 0;
  height: 100%;
`,C=n`
  .genericModalBodyOpen {
    overflow: hidden;
  }

  .genericModalOverlay {
    position: fixed;
    top: ${({siteHeaderHeight:e})=>`${e}px`};
    left: 0;
    transition: ${({modalTransitionTime:e})=>e&&`opacity ${e}ms ease-in-out;`};
    opacity: 0;
    z-index: ${h("hyperstitialLayer")};
    width: 100%;
    height: ${({siteHeaderHeight:e})=>`calc(100% - ${e}px)`};
  }

  .genericModal {
    background: ${({theme:e})=>c(e,"colors.interactive.base.white")};
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  .genericModalOverlayAfterOpen {
    opacity: 1;
  }

  .genericModalOverlayBeforeClose {
    opacity: 0;
  }
`;e.exports={GlobalStyle:C,CloseModalButtonDesktop:b,CloseModalButtonMobile:f,ModalContentWrapper:y}},1961:(e,t,o)=>{const{asVariation:i}=o(95545),n=o(90554);n.Default=i(n,"Default",{}),e.exports=n},67882:(e,t,o)=>{const i=o(94184),n=o(36968),r=o(27361),a=o(23493),s=o(45697),l=o(67294),{injectIntl:d}=o(36319),c=o(67423).Z,u=o(92170),{getVariationNames:h}=o(95545),{I18nProvider:p}=o(5544),g=o(38134),m=o(32803),b=o(64220),f=o(64734),{connector:y}=o(92078),C=o(9370),k=o(42820),{googleAnalytics:v}=o(28601),S=o(48655),{PaywallCollaborator:w,withArticleTruncation:B}=o(13131),{InlineBarrier:T}=o(58980),x=o(1564),E=o(61784),I=o(6811),{withLightbox:A}=o(92267),P=o(4131),{Disclaimer:M}=o(5626),{BeopScript:R}=o(22665),{trackComponent:O}=o(40199),L=o(38309),D=o(15565),N=o(9855),$=o(43625),H=o(94328),{asConfiguredComponent:j}=o(36380),V=o(66518),W=o(71311),_=o(70734),{getNewsletterSubscriptions:F}=o(78918),{ArticlePageBase:U,ArticlePageGlobalStyle:G,ArticlePageLedeBackground:q,ArticlePageContentBackGround:z,ArticlePageBodyMobileTruncatedBtn:K,ArticlePageContentFooterGrid:Z,ContentWrapperGrid:Y}=o(8172),X=o(50037),{MultiPackageRow:J}=o(42041),{getOverrideBehaviour:Q}=o(66528),ee=o(42045),te=o(7891),oe=o(91749),ie=o(59185);class ne extends l.Component{constructor(e){super(e),this.onHandleScroll=()=>{const e=window.scrollY<=this.pageContentEl.current.offsetTop+100;e!==this.state.hideNav&&this.setState({hideNav:e})},this.onTruncationDismiss=()=>{this.setState({isMobileTruncated:!this.state.isMobileTruncated}),v.emitUniqueGoogleTrackingEvent("article-read-more")},this.setCartoonLinkedGalleries=(e,t)=>{this.setState({sliderData:e},(()=>{t()}))},this.fetchNewsletterSubscriptions=async e=>{try{const t=await F(e);if(200===t.status){const e=this.props.article.newsletterModules.filter((e=>e.priority)).sort(((e,t)=>e.priority-t.priority)).map((e=>e.newsletterId)),o=this.props.article.newsletter.newsletterId,i=t.newsletterSubscriptions.data.filter((e=>"SUBSCRIBED"===e.attributes.status)).map((e=>e.attributes.newsletterId));if(i.length){const t=e.filter((e=>!i.includes(e))),n=this.props.article.newsletterModules.find((e=>e.newsletterId===t[0]));i.includes(o)&&this.setState({newsletterData:Object.assign(Object.assign({},this.state.newsletterData),n)})}}}catch(e){console.log(e)}return{}},this.state={hideNav:this.props.article.headerProps.hasContentHeaderLogo,isMobileTruncated:!1,newsletterData:this.props.article.newsletter,sliderData:{}},this.pageContentEl=l.createRef();const t=e.hasLightbox?A(f,e.article.lightboxImages,e.hasSlideShow):f;this.TruncatedChunkedArticleContent=B(t,"body")}componentDidMount(){var e;if(O("ArticlePage"),this.props.user.isAuthenticated&&this.props.hasDynamicNewsletterSignup&&(null===(e=this.props.article.newsletterModules)||void 0===e?void 0:e.length)){const e=this.props.article.newsletterModules.map((e=>e.newsletterId)).toString(),t={amgUUID:this.props.user.amguuid,newsletterIds:e,userPlatformProxy:this.props.userPlatform.userPlatformProxy,provider:"sailthru",xClientID:this.props.userPlatform.xClientID};this.fetchNewsletterSubscriptions(t)}const{hasTruncationOnMobile:t}=this.props.article;if(t?this.setState({isMobileTruncated:!0}):this.setState({isMobileTruncated:!1}),this.props.article.headerProps.hasContentHeaderLogo){this.setState({hideNav:!0});const e=a(this.onHandleScroll,300);window.addEventListener("scroll",e)}const o="header"===r(this.props.article.interactiveOverride,"behavior"),i=r(this.props.componentConfig,"BasePage.settings.showNavWithHeaderOverride"),n=o&&!i;window.sessionStorage.setItem("nav_invisible",n),window.cns&&(window.cns.pageContext.content.pageStructure=this.props.article.pageStructure)}componentWillUnmount(){window.removeEventListener("scroll",this.onHandleScroll),window.sessionStorage.removeItem("nav_invisible")}render(){var e,t,o;const{article:{id:a,body:s,channelCloudData:d,contentWarnings:u,affiliateDisclaimer:h,contributorSpotLightProps:f,hideAffiliateDisclaimer:y,hasAffiliateLinks:v,hasEventBannerHidden:B,hideProductDisclaimer:I,channelMap:A,coralComments:O,hasNewsletterInBody:F,hasProduct:ie,hasProductLisitingCarousel:ne,hasTruncationOnMobile:re,headerProps:ae,hideAutoDisclaimer:se,hideContributorBio:le,hideRecircList:de,hideRecircMostPopular:ce,hierarchy:ue,shouldReplaceOutbrainWithVMG:he,interactiveOverride:pe,isAffiliateLinksDisabled:ge,lang:me,langTranslations:be,customHeading:fe={},recircs:ye=[],recircMostPopular:Ce,recircRelated:ke,relatedVideo:ve,interlude:Se,isHeroAdVisible:we,isLicensedPartner:Be,licensedPartnerLink:Te,magazineDisclaimer:xe,paddingTop:Ee,tagCloud:Ie,newsletter:Ae,shouldUsePersistentAd:Pe,showAgeGate:Me,showBookmark:Re,showBreadcrumbTrail:Oe,showHotelRecirc:Le,signageConfig:De,isLinkStackEnabled:Ne,shouldShowFooterNewsletter:$e,shouldPrioritizeSeriesPagination:He,savingsUnitedCoupons:je=[]},showWriterBio:Ve,showFirstRailRecirc:We,showAffiliateBelowContentHeader:_e,attributes:Fe,className:Ue,componentConfig:Ge,shouldCenterDisclaimer:qe,shouldHideBaseTopPadding:ze,shouldHideSeriesNavigation:Ke,shouldHideSeriesRecirc:Ze,shouldShowSeriesNavigationInFooter:Ye,pageBackgroundTheme:Xe,dividerColor:Je,shouldEnableArticleBackground:Qe,shouldEnableFullArticleInverted:et,shouldInheritDropcapColor:tt,showLinkStackInsideContentBody:ot,featureFlags:it,hasLightbox:nt,hasChannelNavigation:rt,hideSideBySideViewOnMobile:at,showContributor:st,showContributorSpotlight:lt,cartoonVariation:dt,hasRecircDriver:ct,linkList:ut,related:ht,metadataVideo:pt,outbrain:gt,taboola:mt,productCarousel:bt,user:ft,hasNewsletterForABTest:yt,intl:Ct,xlargePaddingTop:kt,articleVariationForXlargePaddingTop:vt,beOp:St,hasDynamicDisclaimer:wt,responsiveCartoonVariation:Bt,showGalleryCartoonPublishedDate:Tt,actionBarLargeScreenVariation:xt,actionBarMobileScreenVariation:Et,isActionBarStickyLargeScreen:It,actionBarButtons:At}=this.props,Pt=Qe&&Xe,Mt=Qe&&Je,{hideNav:Rt}=this.state,Ot=!!yt||F,{hasContentHeaderLogo:Lt,isFullBleedVideo:Dt}=ae;Lt&&(()=>{const e=r(Ge,"ContentHeader.settings");n(Ge,"ContentHeader.variation","TextOverlayWithLogo"),n(Ge,"ContentHeader.settings",Object.assign(Object.assign({},e),{showLogo:!0,hideContributors:!1,hidePublishDate:!0,hideRubric:!1,hideShareButtons:!0}))})();const Nt=le?void 0:ae.contributors,{hasNativeShareButton:$t,hasNewsletterOnPageTop:Ht,hasNewsletterWithoutWrapper:jt,shouldEnableNativeShareOnDesktop:Vt,shouldRemoveBackgroundColor:Wt,enableEnhancedCartoonExperience:_t,enableACDC:Ft,enableActionBar:Ut,variations:Gt,showFullBleedBelow:qt,cneVideoEmbedProps:zt}=it;let Kt={};const Zt=r(Ge,"ContentHeader.variation");Ft&&["TextAboveCenterSmallWithRule","TextAboveCenterFullBleedNoContributor","TextBelowCenterFullBleedNoContributor","InlineImage","SplitScreenImageRightFullBleed","SplitScreenImageRightInset","SplitScreenImageLeftInset","SplitScreenImageLeftFullBleed","TextAboveLeftSmallWithRule"].includes(Zt)&&(Kt={shouldAlignCenterWhenNoCaption:!0}),Ut&&(Kt=Object.assign(Object.assign({},Kt),{hideSocialIcons:!0,hideSocialIconsOnMobile:!0,hasStickySocialIcons:!1}));const Yt=_t?"InlineCartoon":Bt,Xt=function(e){return"WithAdRail"===r(e,"ChunkedArticleContent.variation")?S.NarrowContentWithWideAdRail:S.WithMargins}(Ge),Jt="OneColumnNarrow"===r(Ge,"ChunkedArticleContent.variation"),Qt=S.DynamicGrid({startColumn:2,endColumn:12}),eo=qe?M.TextCenterNoTopRule:M,to=ye.map(((e,t)=>{const o=j(V,e.displayName),i=e.heading||"",{results:n,destinationPage:r,location:a,recommendedClickout:s,recommendedType:d}=e;return ct&&r?l.createElement(W,{key:`SummaryCollectionSplitColumns${t}`,recommendedItems:{items:n,recommendedType:d,recommendedClickout:s},guideItem:[r],location:a,shouldAppendReadMoreLinkForDek:!0}):l.createElement(_,{key:`ConnectedErrorBoundary${t}`},l.createElement(o,{related:e.related,heading:i,dividerColor:Mt,shouldEnableFullArticleInverted:et}))})),oo=Zt===vt&&kt?kt:Ee,io=(null==St?void 0:St.accountID)||"",no=(null==St?void 0:St.isEnabled)||!1,ro=rt&&l.createElement(D,null),ao="WithAdRail"===r(Ge,"ChunkedArticleContent.variation"),so=({children:e})=>l.createElement(Y,{isadRail:ao,as:Xt},l.createElement("div",{className:"body body__container"},l.createElement("div",{className:"container container--body"},l.createElement("div",{className:"container--body-inner"},e)))),lo="articleheader"===Q(pe),co=r(ae,"sponsoredContentHeaderProps"),uo=l.createElement(l.Fragment,null,l.createElement(P,null,l.createElement(Qt,null,l.createElement(eo,{disclaimerHtml:h,hasTopRule:!1}))));return l.createElement(U,{additionalNavigation:ro,attributes:Fe,shouldEnableFullArticleInverted:et,channelMap:A,className:i("page--article",Ue),featureFlags:it,hideNav:Rt,hasContentHeaderLogo:Lt,hasEventBannerHidden:B,hasFooterAdsMargins:!0,interactiveOverride:pe,isHeroAdVisible:we,hasBaseAds:!0,user:ft,lang:me,customHeading:fe,shouldHideBaseTopPadding:ze,shouldPrioritizeSeriesPagination:He,pageBackgroundTheme:Pt},no&&l.createElement(R,{accountId:io}),l.createElement(p,{locale:me,translations:be},Re&&l.createElement(N,null),v&&h&&!y&&!I&&!_e&&uo,Oe&&l.createElement(m,{hierarchy:ue,shouldRemoveBackgroundColor:Wt}),l.createElement("article",{className:i("article main-content",{"article--inherited-dropcaps":tt}),lang:me},Ht&&Ae&&l.createElement($,Object.assign({},Ae,{position:"article-page-top"})),ae.sponsoredContentHeaderProps&&l.createElement(E,Object.assign({},ae.sponsoredContentHeaderProps,{className:"light-theme"})),lo?l.createElement("div",{className:"interactive-override-container interactive-override-container--content_header",dangerouslySetInnerHTML:{__html:pe.markup}}):l.createElement(q,{ref:this.pageContentEl},l.createElement(k,Object.assign({},ae,Kt,{showFullHeaderViewInMobile:Ft,hasNativeShareButton:$t,shouldEnableNativeShareOnDesktop:Vt,isFullBleedVideo:Dt,className:"article__content-header",hasLightbox:nt,stickySocialAnchorBottom:{selector:".content-bottom-anchor",edge:"bottom"},stickySocialAnchorTop:{selector:".body",edge:"top"},interactiveOverride:pe,metadataVideo:pt,showBreadCrumb:Oe}))),!Ke&&!Ye&&l.createElement(L,{className:"article__series-navigation",pageBackgroundTheme:Pt,dividerColor:Mt}),l.createElement(z,{togglePaddingTop:oo,isMobileTruncated:this.state.isMobileTruncated,cartoonVariation:dt,"data-attribute-verso-pattern":"article-body",enableActionBar:Ut},Ut&&l.createElement(oe,{actionBarLargeScreenVariation:xt,actionBarMobileScreenVariation:Et,isActionBarStickyLargeScreen:It,actionBarButtons:At}),re&&this.state.isMobileTruncated&&l.createElement(K,{inputKind:"button",label:Ct.formatMessage(c.truncatedButtonLabel),onClickHandler:this.onTruncationDismiss}),(()=>{var e;return r(Ge,"ChannelCloud.settings.shouldShowChannelCloud",!1)&&(null===(e=null==d?void 0:d.channels)||void 0===e?void 0:e.length)>0})()&&l.createElement(S.ContentWithAdRailNarrow,null,l.createElement("div",null,l.createElement(H,Object.assign({},d,r(Ge,"ChannelCloud.settings"))))),v&&h&&!y&&!I&&_e&&uo,s&&l.createElement(w,{body:s,linkList:ut,isLinkStackEnabled:Ne&&ot,component:this.TruncatedChunkedArticleContent,contributors:Nt,hasProduct:ie,hasProductLisitingCarousel:ne,hasTopSpacing:!!ae.lede,interlude:Se,isAffiliateLinksDisabled:ge,name:"chunked-article-content",shouldUsePersistentAd:Pe,hideRecircMostPopular:ce,shouldEnableArticleBackground:Qe,shouldEnableFullArticleInverted:et,pageBackgroundTheme:Pt,dividerColor:Mt,recircMostPopular:Ce,showFirstRailRecirc:We,tagCloud:Ie,hideAutoDisclaimer:se,hideAffiliateDisclaimer:y,hideProductDisclaimer:I,responsiveCartoonVariation:Yt,hasCartoonFullWidth:_t,setCartoonLinkedGalleries:this.setCartoonLinkedGalleries}),s&&l.createElement(so,null,l.createElement(T,null))),!Ze&&l.createElement(x,{ContentWrapper:so})),no&&l.createElement(so,null,l.createElement("div",{className:"BeOpWidget"})),qt&&l.createElement(l.Fragment,null,l.createElement(k,{variations:Gt,isFullBleedVideo:qt,cneVideoEmbedProps:zt})),Object.keys(bt).length>0&&l.createElement(J,{key:"articleCarouselProduct",dataJourneyHook:"row-content"},l.createElement(X,Object.assign({},bt,{copilotId:a}))),l.createElement(Z,{as:C,className:i({"content-footer--mobile-truncated":this.state.isMobileTruncated}),channelMap:A,consumerMarketing:{position:"article-footer"},shouldEnableFullArticleInverted:et,ContentWrapper:Xt,contributors:Nt,contributorSpotlight:f,coralComments:O,showWriterBio:Ve,hideContributorBio:le,showContributorSpotlight:lt,showContributor:st,hideRecircList:de,hasNewsletterWithoutWrapper:jt,isLicensedPartner:Be,isLinkStackEnabled:Ne&&!ot,isNarrow:Jt,isAdRail:ao,licensedPartnerLink:Te,linkList:ut,magazineDisclaimer:xe,newsletter:ft.isAuthenticated?this.state.newsletterData:Ae,outbrain:gt,taboola:mt,recircs:ye,recircListElements:to,dividerColor:Mt,related:ht,recircRelated:ke,relatedVideo:ve,showNewsletter:$e||!Ot,showHotelRecirc:Le,signageConfig:De,tagCloud:Ie,shouldReplaceOutbrainWithVMG:he,savingsUnitedCoupons:je,sponsoredProps:co,hasDynamicDisclaimer:wt,shouldShowSeriesNavigationInFooter:!Ke&&Ye,pageBackgroundTheme:Pt}),Me&&l.createElement(g,{content:{contentWarnings:u}}),!ft.isAuthenticated&&ft.hasUserAuthCheck&&l.createElement(b,{as:"document",hint:"prefetch",href:"/account/sign-in"})),_t&&l.createElement(ee,{closeModalText:Ct.formatMessage(c.backToArticle)},l.createElement(te,{items:this.state.sliderData.items,showPublishedDate:Tt,responsiveCartoonVariation:"SliderCartoon",title:null===(t=null===(e=this.state.sliderData)||void 0===e?void 0:e.source)||void 0===t?void 0:t.hed,titleLinkURL:null===(o=this.state.sliderData)||void 0===o?void 0:o.url,shouldUseModalStyle:!0,carouselPlacedIn:"modal",showHeadRecirc:!0,showNewsletter:!0})),l.createElement(G,{pageBackgroundTheme:Pt,dividerColor:Mt,shouldEnableFullArticleInverted:et,hideSideBySideViewOnMobile:at}))}}ne.propTypes={actionBarButtons:s.arrayOf(s.oneOf(["audio","bookmark"])),actionBarLargeScreenVariation:s.oneOf(h(ie)),actionBarMobileScreenVariation:s.oneOf(h(ie)),article:s.shape({body:s.array,channelCloudData:s.object,affiliateDisclaimer:s.string,contributorSpotLightProps:s.object,hideProductDisclaimer:s.bool,hideAffiliateDisclaimer:s.boolean,hasAffiliateLinks:s.boolean,channelMap:s.object,coralComments:s.shape({enableComments:s.bool,coralHostName:s.string}),contentWarnings:s.array,customHeading:s.object,hasEventBannerHidden:s.bool,hasNewsletterInBody:s.bool,hasProduct:s.bool,hasProductLisitingCarousel:s.bool,hasTruncationOnMobile:s.bool,headerProps:s.object.isRequired,hideAutoDisclaimer:s.bool,hideContributorBio:s.bool,hideRecircList:s.bool,hideRecircMostPopular:s.bool,hierarchy:s.array,id:s.string,interactiveOverride:s.shape({markup:s.string,behavior:s.string}),interlude:s.shape(Object.assign(Object.assign({},I.propTypes),{isRailEligible:s.boolean})),isAffiliateLinksDisabled:s.bool,isHeroAdVisible:s.bool.isRequired,isLicensedPartner:s.bool,isLinkStackEnabled:s.bool,lang:s.string,langTranslations:s.object,licensedPartnerLink:s.string,lightboxImages:s.array.isRequired,magazineDisclaimer:s.shape({issueDate:s.string.isRequired,issueLink:s.string.isRequired,originalHed:s.string}),newsletter:s.object,newsletterModules:s.array,paddingTop:s.oneOf(["large"]),pageStructure:s.array,recircs:s.array,recircMostPopular:s.array,recircRelated:s.array,relatedVideo:s.shape({brand:s.string,related:s.any,useRelatedVideo:s.bool}),savingsUnitedCoupons:s.array,shouldPrioritizeSeriesPagination:s.bool,shouldShowFooterNewsletter:s.bool,shouldUsePersistentAd:s.bool,shouldReplaceOutbrainWithVMG:s.bool,showAgeGate:s.bool,showAffiliateBelowContentHeader:s.bool,showBookmark:s.bool,showBreadcrumbTrail:s.bool,showHotelRecirc:s.bool,signageConfig:s.object,tagCloud:s.shape({tags:s.arrayOf(s.shape({tag:s.string.isRequired,url:s.string}))})}).isRequired,articleVariationForXlargePaddingTop:s.string,attributes:s.object,beOp:s.shape({accountID:s.string,isEnabled:s.boolean}),cartoonVariation:s.oneOf(["default","card"]),className:s.string,componentConfig:s.object,dividerColor:s.string,featureFlags:s.object,hasChannelNavigation:s.bool,hasDynamicDisclaimer:s.bool,hasDynamicNewsletterSignup:s.bool,hasLightbox:s.bool,hasNewsletterForABTest:s.bool,hasRecircDriver:s.bool,hasSlideShow:s.bool,hideNav:s.bool,hideSideBySideViewOnMobile:s.bool,intl:s.object,isActionBarStickyLargeScreen:s.bool,linkList:s.object,metadataVideo:s.shape({isLive:s.bool,premiereDate:s.string,series:s.string,videoLength:s.number,premiereGap:s.number}),outbrain:s.shape({canonicalUrl:s.string.isRequired,shouldDisplayAboveRecircList:s.bool,template:s.string.isRequired,widgetId:s.string}),pageBackgroundTheme:s.string,productCarousel:s.object,related:s.array,responsiveCartoonVariation:s.oneOf(h(u)),shouldCenterDisclaimer:s.bool,shouldEnableArticleBackground:s.bool,shouldEnableFullArticleInverted:s.bool,shouldHideBaseTopPadding:s.bool,shouldHideSeriesNavigation:s.bool,shouldHideSeriesRecirc:s.bool,shouldInheritDropcapColor:s.bool,shouldShowSeriesNavigationInFooter:s.bool,showAffiliateBelowContentHeader:s.bool,showContributor:s.bool,showContributorSpotlight:s.bool,showFirstRailRecirc:s.bool,showGalleryCartoonPublishedDate:s.bool,showLinkStackInsideContentBody:s.bool,showWriterBio:s.bool,taboola:s.shape({publisherId:s.string.isRequired,widgetScriptExcludeContentTypes:s.array,widgetScriptTextContentMode:s.string,widgetScriptTextContentContainer:s.string,widgetScriptTextContentPlacement:s.string}),user:s.object,userPlatform:s.object,xlargePaddingTop:s.string},ne.defaultProps={cartoonVariation:"default",hasDynamicNewsletterSignup:!1,hasLightbox:!1,hasSlideShow:!0,metadataVideo:{},productCarousel:{},related:[],shouldCenterDisclaimer:!1,shouldEnableArticleBackground:!1,shouldEnableFullArticleInverted:!1,shouldHideSeriesNavigation:!0,shouldHideSeriesRecirc:!0,shouldInheritDropcapColor:!1,showAffiliateBelowContentHeader:!1,showGalleryCartoonPublishedDate:!0,showLinkStackInsideContentBody:!1,showWriterBio:!1},ne.displayName="ArticlePage",e.exports=y(d(ne),{keysToPluck:["article","beOp","componentConfig","featureFlags","linkList","metadataVideo","outbrain","productCarousel","related","showFirstRailRecirc","taboola","user","userPlatform"]})},91749:(e,t,o)=>{const i=o(67294),n=o(45697),r=o(59185),{ArticlePageActionBarContent:a,ArticlePageActionBarWrapper:s}=o(8172),{getVariationNames:l}=o(95545),{sizesFullName:d}=o(28657),c=({actionBarLargeScreenVariation:e,actionBarMobileScreenVariation:t,isActionBarStickyLargeScreen:o,actionBarButtons:n})=>{const l=i.useRef(null),[c,u]=i.useState(0);if(i.useLayoutEffect((()=>{var e;u((null===(e=l.current)||void 0===e?void 0:e.offsetHeight)||0)}),[]),!n||!(null==n?void 0:n.length))return null;const h=e?r[e]:r,p=t?r[t]:r;return e||t?i.createElement(a,{isActionBarStickyLargeScreen:o,actionBarHeight:c},i.createElement(s,{ref:l},i.createElement(h,{minScreenThreshold:d.xLarge,actionButtons:n}),i.createElement(p,{maxScreenThreshold:d.large,actionButtons:n}))):i.createElement(a,{isActionBarStickyLargeScreen:o,actionBarHeight:c},i.createElement(s,{ref:l},i.createElement(r,{actionButtons:n})))};c.propTypes={actionBarButtons:n.arrayOf(n.oneOf(["audio","bookmark"])).isRequired,actionBarLargeScreenVariation:n.oneOf(l(r)),actionBarMobileScreenVariation:n.oneOf(l(r)),isActionBarStickyLargeScreen:n.bool},c.defaultProps={isActionBarStickyLargeScreen:!1},e.exports=c},80107:(e,t,o)=>{const i=o(67882),{asConfiguredComponent:n}=o(36380);e.exports=n(i,"ArticlePage")},67423:(e,t,o)=>{const i=o(36319);t.Z=(0,i.defineMessages)({truncatedButtonLabel:{id:"ArticlePage.TruncatedButtonLabel",defaultMessage:"Read Full Story",description:"ArticlePage component truncated button label"},backToArticle:{id:"ArticlePage.Back to article",defaultMessage:"Back to article",description:"Gallery slider back button text"}})},96370:function(e,t,o){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(o(80107));(0,i(o(72010)).default)(n.default)}},o={};function i(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=t,e=[],i.O=(t,o,n,r)=>{if(!o){var a=1/0;for(c=0;c<e.length;c++){for(var[o,n,r]=e[c],s=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(i.O).every((e=>i.O[e](o[l])))?o.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,n,r]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={6486:0};i.O.j=t=>0===e[t];var t=(t,o)=>{var n,r,[a,s,l]=o,d=0;if(a.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(l)var c=l(i)}for(t&&t(o);d<a.length;d++)r=a[d],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(c)},o=globalThis.webpackChunkverso=globalThis.webpackChunkverso||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),i.nc=void 0;var n=i.O(void 0,[8825,4534,9738,5565,8801,4332,4848,2041,7649,37,7863,3138,4734],(()=>i(96370)));n=i.O(n)})();