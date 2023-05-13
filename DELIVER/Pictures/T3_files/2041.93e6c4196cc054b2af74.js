(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[2041],{42041:(i,a,e)=>{const{default:n,css:r}=e(60677),{BREAKPOINTS:t,ZINDEX_MAP:o}=e(85326),{applyGridSpacing:d,cssVariablesGrid:m}=e(62470),{calculateSpacing:l,minScreen:g,maxScreen:s,minMaxScreen:p,getColorToken:c,getTypographyStyles:$}=e(79720),y=e(7279),{universalGridCore:u}=e(61774),h=e(4131),{RowWrapper:b}=e(21920),f=e(48655),{GridItem:w}=e(14134),{SummaryRiverSection:x}=e(3183),{SummaryCollageOneGridWithMargin:k}=e(83695),{SectionTitleHed:v}=e(80577),{EmbedBody:C}=e(97893),S=`\n  ${m()}\n  ${d("padding")}\n\n  margin: 0 auto;\n  width: 100%;\n  max-width: ${t.xxl};\n`,_=n(h).withConfig({displayName:"MultiPackageBaseRow"})`
  &:first-child,
  & ~ & {
    ${({hasMarginTopMultiPackageRow:i})=>i?"":"margin-top: 0;"}
  }

  inline-embed[name='align-right'] {
    text-align: right;
  }

  inline-embed[name='align-center'] {
    text-align: center;
  }
`,N=n(y.Utility).withConfig({displayName:"MultiPackageRow"})`
  &&& {
    align-items: center;
    width: auto;
  }
`,M=n(_).withConfig({displayName:"MultiPackageRow"})`
  ${({hasNoTopMargin:i})=>i?"":`margin-top: ${l(7)};`}

  ${({hasLightBgForLinkBanner:i,hasPlpFilterableContainerLightBackgroundColor:a,theme:e,isInvertedTheme:n})=>i||a?`background-color: ${c(e,"colors.discovery.body.light.background")};`:n?`background-color: ${c(e,"colors.consumption.lead.inverted.background")};`:""}

  ${({hasMediumMargin:i,hasNoBottomMargin:a,hasReducedMargin:e,isNativeAd:n})=>i?`margin-bottom: ${l(4)};`:a||n&&e?"margin-bottom: 0;":e?`margin-bottom: ${l(2)};`:`margin-bottom: ${l(7)};`}

  ${({hasMarginBottomMultiPackageRow:i})=>i?`\n          ${g(t.lg)} {\n            margin-bottom: ${l(5)};\n          }\n          ${p(t.md,t.lg)} {\n            margin-bottom: ${l(4)};\n          }\n          ${p(0,t.md)} {\n            margin-bottom: ${l(3)};\n          }`:""}

${({hasNoTopBottomMarginOnMobile:i})=>i?`  ${p(0,t.md)} {\n            margin-top: 0;\n            margin-bottom: 0;\n          }`:""}

  ${({hasStickyLinkBanner:i})=>i?`\n        position: sticky;\n        top: 0px;\n        z-index: ${o.interstitialLayer};\n      `:""}

  /* TODO: this should be a configuration for a layout
     Specificity is required due to star selector in homepage  */
  ${g(t.lg)} {
    ${b}.homepage__half-column-row + && {
      width: 50%;
      max-width: 800px;
      ${v} {
        ${$("typography.definitions.discovery.subhed-section-secondary")};
      }
    }
    .homepage__half-column-row + && > ${k} {
      padding-left: var(--grid-gap);
    }
    ${x} {
      margin: 0 auto;
      max-width: 1600px;
    }
  }
`,B=n(f.WithMargins).withConfig({displayName:"DiscoveryQuoteRow"})`
  ${({hasTopAndBottomBorderQuote:i,theme:a})=>i?`\n    border-top:1px solid ${c(a,"colors.discovery.body.white.divider")};\n\n    border-bottom:1px solid ${c(a,"colors.discovery.body.white.divider")};`:""}

  ${w} {
    grid-column: 1/-1;

    ${g(t.md)} {
      grid-column: 3/11;
    }
  }
`,W=r`
  &.puzzles-games-landing-page {
    .ticker-wrapper {
      margin-bottom: 0;
    }

    .ticker-view > div:nth-child(2) {
      margin-top: ${l(4)};
    }

    .summary-collage-six-puzzles-games .summary-item:first-child h3 {
      ${$("typography.definitions.discovery.description-core")};
      font-size: ${l(4)};
    }

    .verso-features {
      margin-bottom: ${l(4)};
    }

    > div:nth-child(3)
      .summary-collage-six-puzzles-games
      .summary-list--collection-list {
      ${s(t.lg)} {
        padding-top: 0;
      }
    }

    .summary-river-puzzles-games {
      h2 {
        font-size: 24px;
      }

      & > section {
        .summary-item:last-child {
          border-bottom: 0;
        }

        > div {
          margin-bottom: ${l(2)};

          > div:first-child {
            margin-bottom: 0;
          }
        }
      }

      .summary-item {
        padding-top: ${l(2)};
      }
    }

    .summary-item--is-dense .summary-item__asset-container {
      ${p(0,t.xl)} {
        display: block;
      }

      ${g(t.xl)} {
        float: none;
        margin-left: 0;
      }
    }

    .summary-list--collection-list {
      ${p(0,t.lg)} {
        border-top: 0;
        padding-top: 0;
      }
    }

    .summary-list__items .summary-item:not(:first-child) {
      margin-bottom: 0;
      padding-bottom: ${l(2)};
    }

    .summary-list__items .summary-item:first-child {
      ${p(0,t.lg)} {
        padding-bottom: ${l(2)};
      }

      ${g(t.lg)} {
        padding-bottom: 0;
      }
    }

    .summary-collage-six-puzzles-games .summary-item h3 {
      ${$("typography.definitions.discovery.hed-core-secondary")};
    }

    .summary-collage-six-puzzles-games h2,
    .summary-collection-grid h2 {
      ${$("typography.definitions.discovery.subhed-section-primary")};
    }

    .verso-embed-row inline-embed h1 {
      margin: 0;
      font-size: ${l(5.5)};
    }

    .verso-embed-row {
      margin: ${l(4)} 0;
    }

    ${C} {
      max-width: initial;
    }

    .verso-features h2 {
      font-size: 24px;
    }

    .summary-collage-six-puzzles-games h2 {
      font-size: 20px;
    }

    .summary-item__dek > a {
      ${$("typography.definitions.foundation.link-primary")};
      display: block;
      padding-top: ${l(2.5)};
      text-decoration: none;
      color: ${c("colors.interactive.base.brand-primary")};
    }

    .summary-item__dek > a:hover {
      text-decoration: underline;
    }
  }
`,T=n.div.withConfig({displayName:"MultiPackageContainer"})`
  ${({showFooterAdPadding:i})=>i&&`padding-bottom: ${l(10,"px")};`}

  ${({customClass:i})=>i&&"puzzles-games-landing-page"===i&&W}
  ${({hasMarginBottomMultiPackageRow:i})=>i?"\n            .verso-features {\n              && {\n                margin-bottom: 0;\n              }\n            }\n          ":""}
`,P=n.div.withConfig({displayName:"SectionJumpLinksWrapper"})`
  ${({theme:i})=>(i=>`\n    background: ${c(i,"colors.consumption.body.inverted.display-texture")};\n    ${g(t.md)} {\n      width: ${t.md};\n      padding: ${l(3)} ${l(9)} ${l(5)} ${l(9)};\n    }\n    padding: ${l(2)} ${l(5)} ${l(3.5)} ${l(5)};\n    margin: auto;\n    div {\n      div {\n        h1 {\n          text-align: center;\n        }\n        div {\n          a {\n            font-family: Konnect, helvetica, sans-serif;\n            font-style: normal;\n            line-height: ${l(2.4,"rem")};\n            font-size: ${l(2)};\n            &:not(.button):link,\n            &:not(.button):visited {\n              color: rgb(0, 0, 0);\n            }\n          }\n          display: grid;\n          ${g(t.md)} {\n            grid-template-columns: 1fr 1fr 1fr;\n            grid-row-gap: ${l(1.5)};\n          }\n          grid-template-columns: 1fr 1fr;\n          grid-row-gap: ${l(1)};\n        }\n      }\n    }\n  }\n  `)(i)}
`,z=n(M).withConfig({displayName:"MultiPackageReadMore"})`
  display: flex;
  justify-content: center;
`,L=n.div.withConfig({displayName:"PromoBoxWrapper"})`
  ${S}
`,O=n.div.withConfig({displayName:"EventsListWrapper"})`
  ${m()}

  margin: 0 auto;
  width: 100%;
  max-width: ${t.xxl};

  ${g(t.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,R=n.div.withConfig({displayName:"PromoBoxWrapper"})`
  ${S}
`,E=n.div.withConfig({displayName:"NewsletterWrapper"})`
  ${S}

  padding-top: ${l(6)};
  padding-bottom: ${l(6)};

  ${g(t.md)} {
    padding-top: ${l(9)};
    padding-bottom: ${l(9)};
  }
`,G=n.div.withConfig({displayName:"CMUnitWrapper"})`
  ${S}

  ${g(t.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,I=n.div.withConfig({displayName:"SubTopicDiscoveryWrapper"})`
  ${u(!0)}
  ${d("padding")}

  margin: 0 auto;
  width: 100%;
  max-width: ${t.xxl};

  ${g(t.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,F=n.div.withConfig({displayName:"TickerWrapper"})`
  ${({isInvertedTheme:i})=>i?`\n        ${m()}\n        ${d("padding",!0)}`:`${S}`}
`,D=n("div").withConfig({displayName:"MultipackageNoItemsBlock"})`
  ${m()}
  ${d("padding")}
  margin: 0 auto;
  margin-bottom: ${l(4)};
  width: 100%;
  max-width: ${t.xxl};
  color: white;
  font-family: 'LabGrotesque';
  ${({hasRule:i,theme:a})=>i?`\n        &::before {\n          border-top: 1px solid ${c(a,"colors.discovery.body.white.divider")};\n          content: '';\n          grid-column: 1/-1;\n          margin-bottom: ${l(4)};\n          display: block;\n        }\n      `:""}

  h3 {
    margin: 0 auto;
    width: fit-content;
    ${$("typography.definitions.consumptionEditorial.subhed-break-secondary")}
  }

  p {
    font-family: Proxima Nova;
    font-size: 12px;
  }
`,A=n.div.withConfig({displayName:"MultiPackageBodyWrapperGrid"})`
  ${u()}
  ${d("padding")}
`;i.exports={CMUnitWrapper:G,DiscoveryQuoteRow:B,EventsListWrapper:O,MultiPackageContainer:T,MultiPackageRow:M,MultiPackageReadMore:z,NewsFeedWrapper:R,NewsletterWrapper:E,PromoBoxWrapper:L,SubTopicDiscoveryWrapper:I,TickerWrapper:F,MultipackageNoItemsBlock:D,MultiPackageBodyWrapperGrid:A,SectionJumpLinksWrapper:P,UtilityButton:N}},83695:(i,a,e)=>{const{default:n,css:r}=e(60677),{BREAKPOINTS:t}=e(85326),{applyGridSpacing:o,cssVariablesGrid:d}=e(62470),{RubricLink:m}=e(7320),{calculateSpacing:l,minScreen:g,minMaxScreen:s,getTypographyStyles:p,getColorToken:c}=e(79720),{BaseLink:$}=e(74327),{SocialIconsList:y}=e(96860),{SpanWrapper:u}=e(89676),h=n.div.withConfig({displayName:"SummaryCollageOneTitle"})`
  grid-column: 1 / -1;

  ${({isSingleFeature:i})=>!i&&`\n      margin-bottom: ${l(2)};\n\n      ${g(t.md)} {\n        margin-bottom: ${l(1)};\n      }\n\n      ${g(t.lg)} {\n        margin-bottom: ${l(0)};\n      }\n    `}
`,b=n.div.withConfig({displayName:"SummaryCollageOneCtaLink"})`
  grid-column: 1 / -1;
  text-align: center;

  span {
    display: block;
    width: 100%;
    text-align: center;
  }
`,f=n($).withConfig({displayName:"SummaryCollageOneAnchorLink"})`
  ${p("typography.definitions.foundation.link-primary")}
  display: inline-block;
  margin-bottom: ${l(2)};
  vertical-align: top;
  ${g(t.lg)} {
    margin-bottom: ${l(4)};
  }
`;f.defaultProps={colorSecondaryLinkToken:"colors.interactive.base.dark",colorStaticLinkToken:"colors.interactive.base.brand-primary",linkStyle:"global"};const w=r`
  ${d()}
  ${o("padding")}

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--grid-gap);
  margin: 0 auto;
  width: 100%;
  max-width: ${t.xxl};
  row-gap: var(--grid-gap);

  .summary-item--layout-placement-text-below {
    &.summary-item--text-align-left,
    &.summary-item--text-align-center {
      .summary-item__hed {
        ${p("typography.definitions.discovery.hed-break-out")};
      }

      .summary-item__dek {
        ${p("typography.definitions.discovery.description-feature")};
      }
    }
  }

  .summary-item__hed-link {
    &::after {
      border-bottom: 1px solid
        ${c("colors.discovery.body.white.accent")};
    }
  }

  .summary-item__content:empty {
    display: none;
  }

  ${y} {
    justify-content: center;
  }

  ${g(t.md)} {
    grid-template-columns: repeat(12, 1fr);
  }
`,x=n.div.withConfig({displayName:"SummaryCollageOneItemComponent"})`
  grid-column: 1 / -1;

  &&& {
    border-bottom: 0;

    .summary-item__content {
      margin: 0;
      @media (min-width: 0) and (max-width: ${t.lg}) {
        margin: 0;
      }
    }
    @media (min-width: 0) and (max-width: ${t.md}) {
      padding-bottom: 0;
    }
  }
`,k=r`
  &&& {
    grid-gap: ${l(4)};
    grid-template-rows: auto 1fr auto;
    height: 100%;
  }

  ${x} {
    display: grid;
    align-items: center;
  }

  ${u}.summary-item__image {
    .summary-item__image {
      display: grid;
      justify-items: center;

      picture {
        max-width: 300px;
        ${g(t.lg)} {
          max-width: 400px;
        }
      }
    }

    .responsive-cartoon__caption {
      margin-top: 0;
      ${g(t.lg)} {
        margin-top: ${l(2)};
        width: 85%;
      }
    }
  }
`,v=r`
  ${s(0,t.lg)} {
    .summary-item__asset-container {
      ${o("margin",!0)};
    }
  }
`,C=r`
  &&& {
    grid-template-rows: unset;
    background-color: ${c("colors.discovery.body.dark.background")};
    max-width: ${t.xxl};

    ${s(t.sm,t.md)} {
      column-gap: ${l(9)};
      margin: ${l(0)};
      padding: ${l(0)};
    }
    ${g(t.md)} {
      column-gap: ${l(3)};
      margin: ${l(0)};
      padding: ${l(5)} ${l(3)};
    }
    ${g(t.lg)} {
      margin: ${l(0)};
      padding: ${l(7)} ${l(6)};
    }
    ${g(t.xl)} {
      column-gap: 2rem;
      margin: ${l(0)};
      padding: ${l(10)} ${l(8)};
    }
    ${g(t.xxl)} {
      column-gap: 2rem;
      margin: auto;
      padding: ${l(10)} ${l(8)};
    }
  }
  ${m} {
    color: ${c("colors.discovery.body.dark.context-signature")};
  }

  .summary-item__rubric {
    color: ${c("colors.discovery.body.dark.context-signature")};
  }

  .summary-item__dek {
    color: ${c("colors.discovery.body.dark.description")};
  }

  .summary-item__hed--hed-core-primary {
    ${p("typography.definitions.discovery.hed-core-primary")}
    color: ${c("colors.discovery.body.dark.heading")};
  }

  .summary-item__hed {
    color: ${c("colors.discovery.body.dark.heading")};
  }

  .summary-item--dark-background-right {
    ${g(t.md)} {
      grid-column: 2 / -2;
      margin: ${l(0)} ${l(-3)};
    }
    ${g(t.lg)} {
      grid-column: 2 / -2;
      margin: ${l(0)} ${l(-3)};
      padding: ${l(0)};
    }
    ${g(t.xl)} {
      grid-column: 2 / -2;
      margin: ${l(0)} ${l(-4)};
      padding: ${l(0)};
    }
    ${g(t.xxl)} {
      grid-column: 2 / -2;
      margin: ${l(0)};
      padding: ${l(0)};
    }

    .summary-item__asset-container {
      ${g(t.md)} {
        margin-left: ${l(-3)};
      }
      ${g(t.xl)} {
        margin-left: ${l(0)};
      }
    }
  }

  .summary-item__content {
    margin: ${l(0)};
    ${g(t.md)} {
      padding-right: ${l(3)};
    }
    ${g(t.lg)} {
      padding-right: ${l(5)};
    }
    ${g(t.xl)} {
      padding-right: ${l(3)};
    }
    ${g(t.xxl)} {
      padding-right: ${l(6)};
    }
  }
`,S=n.div.withConfig({displayName:"SummaryCollageOneGridWithMargin"})`
  ${w}
  ${({isSingleFeature:i})=>i&&k}

  ${({hasFullWidthImage:i})=>i&&v}
  
  ${({isFullBleedDarkBackground:i})=>i&&C}
`,_=n.div.withConfig({displayName:"SummaryCollageOneIsFullBleed"})`
  ${({isFullBleedDarkBackground:i})=>i&&r`
      background-color: ${c("colors.discovery.body.dark.background")};
      max-width: 100%;
    `}
`;i.exports={SummaryCollageOneTitle:h,SummaryCollageOneCtaLink:b,SummaryCollageOneGridWithMargin:S,SummaryCollageOneIsFullBleed:_,SummaryCollageOneItemComponent:x,SummaryCollageOneAnchorLink:f}},97893:(i,a,e)=>{const{default:n,css:r}=e(60677),{BREAKPOINTS:t}=e(85326),{applyGridSpacing:o,cssVariablesGrid:d}=e(62470),{calculateSpacing:m,minScreen:l,getColorToken:g,getTypographyStyles:s,firstLetterDropCap:p}=e(79720),{BaseText:c}=e(74327),$=e(48655),y=e(94753),u=`\n  ${d()}\n  ${o("padding")}\n\n  margin: 0 auto;\n  width: 100%;\n  max-width: ${t.xxl};\n`,h=n.div.withConfig({displayName:"EmbedWrapper"})`
  ${u}

  ${({isEmbedWrapperFullBleed:i})=>i&&r`
      padding-right: 0;
      padding-left: 0;
      max-width: 100%;
    `}
`,b=n.div.withConfig({displayName:"EmbedWrapperHed"})`
  margin-bottom: ${m(2)};
`,f=n(c).withConfig({displayName:"EmbedWrapperDek"})`
  margin: 0 auto ${m(2)};
  padding-right: ${m(1)};
  padding-left: ${m(1)};
  max-width: ${m(75)};
  text-align: center;
  ${s("typography.definitions.consumptionEditorial.description-core")}
`,w=n($).withConfig({displayName:"GridWrapper"})`
  ${u}
`,x=n(y).withConfig({displayName:"EmbedBody"})`
  p.has-dropcap {
    margin-top: ${m(4,"px")};

    &::first-letter {
      ${p};
    }

    &.has-dropcap__lead-standard-heading {
      &::first-letter {
        padding: 0.1em 0.05em 0 0;
        color: ${g("colors.consumption.lead.standard.heading")};
      }
    }
  }
  ${({constrainPagragraph:i})=>i&&`\n      inline-embed{\n        display: block;\n        p {\n          display:inline-block;\n          max-width: ${m(40.875)};\n          ${l(t.lg)} {\n            max-width: ${m(91.5)};\n          }\n        }\n      }\n    `}
`;i.exports={EmbedWrapper:h,EmbedWrapperHed:b,EmbedWrapperDek:f,EmbedBody:x,GridWrapper:w}}}]);