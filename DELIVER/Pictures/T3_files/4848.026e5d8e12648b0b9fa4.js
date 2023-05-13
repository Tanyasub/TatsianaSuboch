(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[4848],{42813:(e,t,o)=>{const i=o(94184),a=o(45697),l=o(67294),{default:r}=o(45698),{trackComponent:n}=o(40199),{processLinks:s,processCeros:d,processTiktok:c,processSidebarHeadings:m}=o(54436),p=o(86982),u=o(85086),{BodyWrapper:g}=o(81717),h=new r({a:s,blockquote:({props:e})=>({type:p,props:e}),ceros:d,h2:m,tiktok:c,"inline-embed":u}),b=({body:e,className:t,children:o,shouldDisableMaxWidth:a,shouldEnableDataJourneyHook:r=!0,shouldEnableFullArticleInverted:s})=>{l.useEffect((()=>{n("Body")}),[]);const d={className:i("body",t),shouldDisableMaxWidth:a,shouldEnableFullArticleInverted:s};return r&&(d["data-journey-hook"]="client-content"),l.createElement(g,Object.assign({},d,{"data-testid":"BodyWrapper"}),o||h.convert(e))};b.propTypes={body:a.array,children:a.node,className:a.string,shouldDisableMaxWidth:a.bool,shouldEnableDataJourneyHook:a.bool,shouldEnableFullArticleInverted:a.bool},b.defaultProps={body:["div"],shouldDisableMaxWidth:!1},e.exports=b},94753:(e,t,o)=>{e.exports=o(42813)},76559:(e,t,o)=>{const i=o(67294),a=o(41609),l=o(45697),{useIntl:r}=o(36319),{calculateSpacing:n}=o(79720),{getSlots:s}=o(86972),d=o(67924),c=o(41334),m=o(32168),{Disclaimer:p}=o(5626),u=o(85650),{trackComponent:g}=o(40199),{componentTracking:h,googleAnalytics:b}=o(28601),{CarouselWrapper:y,ChipWrapper:C,EditorCard:f,EditorDescription:E,EditorDetails:T,EditorName:$,EditorResponsiveAsset:k,EditorsPicksCarousel:S,EditorTitle:D,FilterableSummaryListDynamicGridItemLayout:P,FilterableSummaryListGrid:w,FilterableSummaryListWrapper:v,FilterableSummaryListGridFullBleed:N,TitleWrapper:B,TitleToggleChipListWrapper:A}=o(78153),{ArticleGalleryCarouselBtnWrapper:x,ArticleGalleryCarouselButton:L}=o(28642),G=o(12102).Z,F={spacing:{sm:n(1.5),xl:n(2)},width:{sm:"60%",lg:"27%",xl:`calc(24% - ${n(1.5)})`,xxl:`calc(21% - ${n(1.5)})`}},I=({affiliateDisclaimer:e,buttonConfig:t,children:o,className:l,controlButtonIcon:n,controlPlacement:I,controlPosition:W,dangerousDek:M,dangerousHed:H,defaultToggleChipTitle:U,editor:R,hasBorderBottom:q,hasGridBottomPadding:O,hasCarouselSliderPagination:z,hasControls:j,hasCustomSlider:V,hasImpressionTracking:_,hasNavigationButtonVariation:J,hasNoHorizontalScrollCarousel:K,paginationStyle:Z,hasPadding:Q,hasPagination:X,hasProductDisclaimerAlternativeStyle:Y,hasTitleMarginTop:ee,hasTitleNoMargin:te,hasToggleGridColor:oe,hasHigherHorizontalPadding:ie,sectionTitleVariation:ae,selectedToggleChipTitle:le,shouldAppendFilterInUrl:re,shouldChipsRedirectOnClick:ne,shouldDisplaySingleSlot:se,shouldNotDisplayAllLabel:de,shouldEnableBundleComponentAnalytics:ce,shouldEnableProductDisclaimer:me,shouldUseAlternativeTitleStyle:pe,hasCarouselControl:ue,toggleChipRole:ge,trackingNamespace:he,isDotClickable:be,layout:ye,pos:Ce,gridConfig:fe,isEditorsPicksCarousel:Ee,shouldAffiliateDisclaimerPlpEnable:Te,isPlpCurated:$e,hideDesktopPagination:ke})=>{i.useEffect((()=>{g("FilterableSummaryList")}),[]);const{formatMessage:Se}=r(),{slots:De,urlData:Pe}=s(o),we=Object.keys(De),[ve,Ne]=i.useState(we),[Be,Ae]=i.useState(ve[0]),[xe,Le]=i.useState(U),Ge=H||M,Fe=(null==he?void 0:he.toggle)||H,Ie=(null==he?void 0:he.card)||H;if(0===ve.length)return null;const We=ve.length>1||se,Me=t.hasCtaLink?Se(G.atArticleGalleryCarouselBtnTextWithCtaLink,{categoryName:t.name}):Se(G.atArticleGalleryCarouselBtnText,{categoryName:t.name}),{isDynamicGridItemLayout:He,shouldDisplayDenseGrid:Ue}=fe||{},Re=()=>i.Children.map(De[Be].props.children,((e,t)=>{const o=h.addDataSectionTitleAttribute(ce,`${Ie}/${Be}/`,t,!1),a=i.cloneElement(e,{analyticsDataAttribute:o});return i.createElement("div",null,a)})),qe=()=>i.createElement(y,null,i.createElement(p.TextCenterNoTopRule,{isEnabled:me&&ue,hasHigherHorizontalPadding:ie,hasProductDisclaimerAlternativeStyle:Y,disclaimerHtml:e}),i.createElement(u,{hideDesktopPagination:ke,hasControls:j,hasNavigationButtonVariation:J,hasPagination:X,controlButtonIcon:J?"ArrowIcon":n,controlPlacement:I,controlPosition:W,isDotClickable:be,hasPadding:Q,hasNoHorizontalScrollCarousel:K,hasImpressionTracking:_,paginationStyle:z&&"slider"===Z?Z:"bullet",isPlpCurated:$e,hasCustomSlider:z&&V,dangerousHed:Ge,pos:Ce},i.Children.map(De[Be].props.children,((e,t)=>{const o=h.addDataSectionTitleAttribute(ce,`${Ie}/${Be}/`,t,!1),a=i.cloneElement(e,{analyticsDataAttribute:o}),l=`${Ge}/${Be}`;return i.createElement(u.CarouselItem,Object.assign({},ce,F,{key:`${Be}-${t}`,carouselTitle:l,carouselItemIndex:t,carouselItemName:e.props.dangerousHed,pos:Ce}),a)}))),t.showButton&&t.url&&i.createElement(x,null,i.createElement("div",{className:"more-products"},i.createElement(L,{className:"article-gallery__more-button",label:Me,btnStyle:"outlined",ariaLabel:Me,href:t.hasCtaLink?t.url:`/products/shop${t.url}`,inputKind:"link"}))));return i.useEffect((()=>{var e;{const t=decodeURIComponent(null===(e=null===window||void 0===window?void 0:window.location)||void 0===e?void 0:e.hash),o=ve.findIndex((e=>`#${e.toLowerCase()}`===t.toLowerCase()));Ae(ve[o>=0?o:0])}}),[ve]),i.createElement(v,{className:l,hasToggleGridColor:oe,hasPadding:Q,hasBorderBottom:q},i.createElement(A,{shouldUseAlternativeTitleStyle:pe},Ge&&i.createElement(B,{className:"section-title",hasPadding:Q,hasTitleMarginTop:ee,as:m[ae],dangerousHed:H,dangerousDek:M,hasTitleNoMargin:te,affiliateDisclaimer:e,shouldAffiliateDisclaimerPlpEnable:Te,hasHigherHorizontalPadding:ie,hasProductDisclaimerAlternativeStyle:Y}),We&&i.createElement(C,{className:"clip-list",hasToggleGridColor:oe,hasPadding:Q},i.createElement(c,{contentAlign:"center",layout:"nowrap",hasToggleGridColor:oe,label:xe},ve.map(((e,t)=>{const o=h.addDataSectionTitleAttribute(ce,`${Fe}/${e}`),a=e===Be;return de&&"All"===e?null:i.createElement(d,{index:t,analyticsDataAttribute:o,key:e,isChecked:a,hasToggleGridColor:oe,onChange:t=>((e,t)=>{var o;Ae(t),se&&(e.detail.checked?(Ne([t]),le&&Le(le)):(Ae(we[0]),Ne(we),Le(U))),o=t,b.emitUniqueGoogleTrackingEvent("toggle-click",{clickText:o,clickType:"body"})})(t,e),isAnchorUrl:re,redirectUrl:Pe[t],shouldUrlRedirect:ne,shouldDisplaySingleChip:se,role:ge},e)}))))),Ee&&!a(R)?i.createElement(S,null,i.createElement(f,null,R.editorPhoto&&i.createElement(k,Object.assign({},R.editorPhoto)),i.createElement(T,null,i.createElement($,null,R.name),i.createElement(D,null,R.title)),i.createElement(E,null,R.editorNote)),qe()):function(){switch(ye){case"GridFourColumns":return He?i.createElement(P,{shouldDisplayDenseGrid:Ue,hasGridBottomPadding:O},Re()):i.createElement(w,null,Re());case"FullBleed":return i.createElement("div",null,Re());case"FullBleedSideBySideContent":return i.createElement(N,null,Re());default:return qe()}}())};I.propTypes={affiliateDisclaimer:l.string,buttonConfig:l.object,children:l.node.isRequired,className:l.string,controlButtonIcon:l.oneOf(["ChevronIcon","ArrowIcon"]),controlPlacement:l.oneOf(["right","space-between"]),controlPosition:l.oneOf(["top","bottom","center"]),dangerousDek:l.string,dangerousHed:l.string,defaultToggleChipTitle:l.string,editor:l.object,gridConfig:l.object,hasBorderBottom:l.bool,hasCarouselControl:l.bool,hasCarouselSliderPagination:l.bool,hasControls:l.bool,hasCustomSlider:l.bool,hasGridBottomPadding:l.bool,hasHigherHorizontalPadding:l.bool,hasImpressionTracking:l.bool,hasNavigationButtonVariation:l.bool,hasNoHorizontalScrollCarousel:l.bool,hasPadding:l.bool,hasPagination:l.bool,hasProductDisclaimerAlternativeStyle:l.bool,hasTitleMarginTop:l.bool,hasTitleNoMargin:l.bool,hasToggleGridColor:l.bool,hideDesktopPagination:l.bool,isDotClickable:l.bool,isEditorsPicksCarousel:l.bool,isPlpCurated:l.bool,layout:l.string,paginationStyle:l.string,pos:l.number,sectionTitleVariation:l.string,selectedToggleChipTitle:l.string,shouldAffiliateDisclaimerPlpEnable:l.bool,shouldAppendFilterInUrl:l.bool,shouldChipsRedirectOnClick:l.bool,shouldDisplaySingleSlot:l.bool,shouldEnableBundleComponentAnalytics:l.bool,shouldEnableProductDisclaimer:l.bool,shouldNotDisplayAllLabel:l.bool,shouldUseAlternativeTitleStyle:l.bool,toggleChipRole:l.string,trackingNamespace:l.shape({toggle:l.string,card:l.string})},I.displayName="FilterableSummaryList",I.defaultProps={buttonConfig:{name:"",showButton:!1,url:""},controlButtonIcon:"ChevronIcon",controlPlacement:"space-between",controlPosition:"center",hasControls:!0,hasHigherHorizontalPadding:!1,hasImpressionTracking:!1,hasNoHorizontalScrollCarousel:!1,hasPagination:!0,hasTitleMarginTop:!1,isDotClickable:!1,isEditorsPicksCarousel:!1,shouldAppendFilterInUrl:!0,shouldChipsRedirectOnClick:!1,shouldDisplaySingleSlot:!1,shouldEnableBundleComponentAnalytics:!1,shouldEnableProductDisclaimer:!1,shouldNotDisplayAllLabel:!1,shouldUseAlternativeTitleStyle:!1},I.displayName="FilterableSummaryList",e.exports=I},33528:(e,t,o)=>{const{asConfiguredComponent:i}=o(36380),a=o(76559);e.exports=i(a,"FilterableSummaryList")},78153:(e,t,o)=>{const{css:i,default:a}=o(60677),{calculateSpacing:l,minScreen:r,minMaxScreen:n,getColorToken:s,getTypographyStyles:d,getColorStyles:c}=o(79720),{CarouselControlButton:m,CarouselList:p,CarouselWrapper:u}=o(95764),g=o(48655),{BREAKPOINTS:h}=o(85326),b=o(99956),y=a(g.EvenFour).withConfig({displayName:"FilterableSummaryListGrid"})`
  &.grid-even.grid-items-4 {
    ${r(h.md)} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &.grid-even {
    ${n(0,h.md)} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding-right: ${l(3)};
      padding-left: ${l(3)};
    }
    padding-right: ${l(4)};
    padding-left: ${l(4)};
  }

  &.grid {
    row-gap: ${l(6)};
  }
`,C=a(g.EvenFour).withConfig({displayName:"FilterableSummaryListGridFullBleed"})`
  &.grid-even.grid-items-4 {
    ${n(0,h.md)} {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      padding-top: ${l(3)};
      padding-right: ${l(1)};
      padding-left: ${l(1)};
    }
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: ${l(3)};
    padding-left: 0;
    row-gap: ${l(4)};
  }
`,f=a(g.DynamicGridItemLayout).withConfig({displayName:"FilterableSummaryListDynamicGridItemLayout"})`
  &.grid-even.grid-items-4 {
    ${r(h.md)} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &.grid-even {
    ${n(0,h.md)} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding-right: ${l(3)};
      padding-left: ${l(3)};
    }
    padding-right: ${l(4)};
    padding-left: ${l(4)};
  }

  &.grid {
    row-gap: ${l(6)};
    ${({shouldDisplayDenseGrid:e=!0})=>!e&&"grid-auto-flow:row;"}

    ${({hasGridBottomPadding:e=!1})=>e&&`padding-bottom:${l(8)};`}
  }
`,E=a.section.withConfig({displayName:"FilterableSummaryListWrapper"})`
  ${({theme:e,hasBorderBottom:t})=>t&&`border-bottom: 1px solid ${s(e,"colors.consumption.lead.standard.divider")};`}

  ${({hasPadding:e,hasToggleGridColor:t})=>e&&!t?`padding: ${l(4)} 0 ${l(4)};`:""}
`,T=a.div.withConfig({displayName:"TitleToggleChipListWrapper"})`
  ${({shouldUseAlternativeTitleStyle:e})=>e&&i`
      .section-title {
        margin: 0;
        border-top: none;
        padding-top: 0;

        @media (max-width: ${h.md}) {
          h2 {
            text-align: center;
          }
        }
      }

      @media (max-width: ${h.md}) {
        .list-wrapper {
          overflow-y: hidden;
          overflow-x: scroll;

          &::-webkit-scrollbar {
            display: none;
          }
        }
      }

      @media (min-width: ${h.md}) {
        ${c("border-color","colors.consumption.lead.standard.context-signature")};

        display: flex;
        align-items: center;
        border-top: 2px solid;
        gap: 2rem;

        .clip-list {
          margin: 0;

          .list-wrapper {
            padding: 0;
            gap: ${l(3)};

            button {
              border-radius: 0;
              background: none;
              padding: 0.2rem 0;
              font-size: 13px;
              font-weight: bold;

              &[aria-checked='false'] {
                ${c("color","colors.interactive.base.border")};
              }

              &[aria-checked='true'] {
                ${c("color","colors.interactive.base.black")};
                border-bottom: 1px solid;
              }

              &:hover,
              &:focus {
                box-shadow: none;
              }
            }
          }
        }
      }
    `}
`,$=a.div.withConfig({displayName:"TitleWrapper"})`
  ${({hasTitleMarginTop:e})=>{const t=l(4);return`margin: ${e?t:"0"} 0 ${t} 0;`}}

  ${({hasPadding:e})=>e&&`padding-left: ${l(3)};\n    padding-right:  ${l(3)};\n   `}
  
  ${({hasTitleNoMargin:e})=>e&&"margin: 0;"}
`,k=a.div.withConfig({displayName:"ChipWrapper"})`
  ${({hasToggleGridColor:e})=>e?`padding-bottom: ${l(4)};`:`margin: ${l(4)} 0 0 0;`}
`,S=a.div.withConfig({displayName:"CarouselWrapper"})`
  ${m} {
    margin-top: 1rem;

    &:disabled {
      display: none;
    }
  }
`,D=a.section.withConfig({displayName:"EditorsPicksCarousel"})`
  display: grid;
  grid-template-columns: 100%;
  margin-top: ${l(4)};
  overflow-x: hidden;
  @media (min-width: ${h.lg}) {
    grid-column-gap: ${l(4)};
    grid-template-columns: calc(20% - ${l(4)}) 80%;
    ${u} {
      margin-top: 0;
    }
  }
  ${p} {
    margin: 0;
  }
`,P=a.div.withConfig({displayName:"EditorCard"})`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  @media (min-width: ${h.lg}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, max-content);
    margin: ${l(4)} 0;
  }
`,w=a(b).withConfig({displayName:"EditorResponsiveAsset"})`
  border-radius: 50%;
  width: 80px;
  height: 80px;
`,v=a.div.withConfig({displayName:"EditorDetails"})`
  margin-left: ${l(1)};
  @media (min-width: ${h.lg}) {
    grid-column: 1;
    margin: ${l(1)} 0 0;
  }
`,N=a.div.withConfig({displayName:"EditorName"})`
  ${({theme:e})=>d(e,"typography.definitions.consumptionEditorial.subhed-aux-secondary")};
`,B=a.div.withConfig({displayName:"EditorTitle"})`
  ${({theme:e})=>d(e,"typography.definitions.globalEditorial.accreditation-feature")};
`,A=a.div.withConfig({displayName:"EditorDescription"})`
  grid-column: 1 / span 2;
  margin-top: ${l(1.5)};
  ${({theme:e})=>d(e,"typography.definitions.consumptionEditorial.description-embed")}
  @media (min-width: ${h.lg}) {
    margin-top: ${l(2.5)};
  }
`;e.exports={CarouselWrapper:S,ChipWrapper:k,EditorCard:P,EditorDescription:A,EditorDetails:v,EditorName:N,EditorResponsiveAsset:w,EditorsPicksCarousel:D,EditorTitle:B,FilterableSummaryListDynamicGridItemLayout:f,FilterableSummaryListGrid:y,FilterableSummaryListWrapper:E,FilterableSummaryListGridFullBleed:C,TitleWrapper:$,TitleToggleChipListWrapper:T}},12102:(e,t,o)=>{const i=o(36319);t.Z=(0,i.defineMessages)({atArticleGalleryCarouselBtnText:{id:"FilterableSummaryList.AtArticleGalleryCarouselBtnText",defaultMessage:"VIEW ALL {categoryName}",description:"Article and Gallery carousel button text"},atArticleGalleryCarouselBtnTextWithCtaLink:{id:"FilterableSummaryList.AtArticleGalleryCarouselBtnTextWithCtaLink",defaultMessage:"{categoryName}",description:"Article and Gallery carousel button text for cta link"}})},14694:(e,t,o)=>{const i=o(45697),a=o(67294),l=o(94184),{BlockquoteEmbedWrapper:r,BlockquoteEmbedContent:n,BlockquoteEmbedFooter:s,BlockquoteEmbedCite:d}=o(45470),{trackComponent:c}=o(40199),m=({attributes:e,children:t,citeUrl:o,className:i,dangerousAttribution:m,hasParagraphMargin:p,hasSmallMargins:u,hasTopBorder:g,shouldUseBodyColor:h})=>(a.useEffect((()=>{c("BlockquoteEmbed")}),[]),a.createElement(r,Object.assign({},e,{cite:o,hasTopBorder:g,hasSmallMargins:u,className:l(i,"blockquote-embed")}),a.createElement(n,{hasParagraphMargin:p,shouldUseBodyColor:h,className:"blockquote-embed__content"},t),m&&a.createElement(s,null,a.createElement(d,{dangerouslySetInnerHTML:{__html:m}}))));m.propTypes={attributes:i.object,children:i.oneOfType([i.arrayOf(i.node),i.node]).isRequired,citeUrl:i.string,className:i.string,dangerousAttribution:i.string,hasParagraphMargin:i.bool,hasSmallMargins:i.bool,hasTopBorder:i.bool,shouldUseBodyColor:i.bool},m.defaultProps={hasSmallMargins:!1,hasTopBorder:!0,shouldUseBodyColor:!1},m.displayName="BlockquoteEmbed",e.exports=m},86982:(e,t,o)=>{const{asConfiguredComponent:i}=o(36380),a=o(14694);e.exports=i(a,"BlockquoteEmbed")},75985:(e,t,o)=>{const i=o(67294),a=o(45697),{trackComponent:l}=o(40199),r=({children:e,name:t})=>{if(i.useEffect((()=>{l("Slot")}),[]),!t)throw new Error("A slot must contain a name!");return e};r.propTypes={children:a.node.isRequired,name:a.string.isRequired},e.exports={Slot:r,getSlots:(e,t=[])=>{const o=new Set(t),a={};let l;const n=[];return i.Children.forEach(e,(e=>{l=e.props.name,n.push(e.props.url),e.type===r&&l&&(0===o.size||o.has(l))&&(a[l]=e)})),{slots:a,urlData:n}}}},86972:(e,t,o)=>{e.exports=o(75985)}}]);