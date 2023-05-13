(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[7649],{8172:(n,e,i)=>{const{default:t,createGlobalStyle:a,css:o}=i(60677),{BREAKPOINTS:r}=i(85326),{calculateSpacing:d,getColorStyles:l,getTypographyStyles:p,maxScreen:c,minScreen:g,minMaxScreen:s,getColorToken:m,getLinkStyles:h}=i(79720),{withRecircContextProvider:y}=i(82313),$=y(i(20886)),{getPattern:u}=i(7595),b=i(7279),{ConfiguredDisclaimer:f}=i(5626),{BodyWrapper:C}=i(81717),A=i(16650),{SectionTitleHed:P}=i(80577),{LinkStackContent:v}=i(43487),{GroupCalloutWrapper:w}=i(11628),{RecircMostPopularWrapper:x,RecircMostPopularHeading:k}=i(92352),{StickyBoxWrapper:S,StickyBoxPrimary:_}=i(29659),{IframeEmbedWrapper:B}=i(77957),{ResponsiveCartoonWrapper:N}=i(94007),{GalleryEmbedHr:T}=i(78116),{AssetEmbedAssetContainer:R}=i(42158),{GridItem:G,GridWrapper:W}=i(14134),M=i(65552),{SocialIconsListItem:O}=i(96860),{ResponsiveCartoonCaption:D}=i(94007),{applyCustomBackgroundColor:L}=i(62470),{ConsumerMarketingUnitThemedWrapper:E}=i(77084),{CneVideoEmbedContainer:I}=i(56706),j=o`
  ${({pageBackgroundTheme:n})=>n?o`
        ${L(n)};
      `:o`
      ${({theme:n})=>u(n,"page-background")};
    `}
  .grid-layout__content {
    ${g(r.md)} {
      grid-column: 3 / span 8;
    }

    ${g(r.lg)} {
      grid-column: 2 / span 6;
    }

    ${s(r.sm,r.md)} {
      grid-column: 1 / -1;
    }
  }

  .grid-layout--adrail.narrow {
    .container--body-inner {
      ${g(r.md)} {
        grid-column: 1 / -1;
      }
    }

    ${x} {
      &:first-child {
        margin-top: 0;

        ${k} {
          margin-top: 0;
        }
      }
    }
  }

  .container--body {
    grid-gap: 20px;
  }

  inline-embed[name='align-right'] {
    text-align: right;
  }

  inline-embed[name='align-center'] {
    text-align: center;
  }
`,F=t($).withConfig({displayName:"ArticlePageBase"})`
  &&& {
    ${j}
    ${({shouldHideBaseTopPadding:n})=>n&&"padding-top : 0;"}
    ${({hideNav:n,shouldPrioritizeSeriesPagination:e,hasContentHeaderLogo:i})=>!e&&i&&(n=>n?"\n    header.site-navigation {\n      margin-bottom: -7rem;\n      transform: translateY(-150%);\n      transition: all 1000ms ease;\n    }\n    ":"\n    header.site-navigation {\n      margin-bottom: -7rem;\n      transition: all 500ms ease;\n    }\n")(n)}
  }
`,H=a`
    .channel--body {
      ${j}
    }
    
    .body__container {
      grid-column: 1/ -1;
    
      ${g(r.md)} {
        grid-column: 3 / span 8;
      }
    }
  
    /* 1. required to enforce proper alignment when text may be less than a full line
       2. remove extra top spacing added by default paragraph margins */
      .article__body {
        margin-bottom: ${d(2)};
        width: 100%; /* 1 */
  
        p:first-child:not(.callout--group-item) {
          margin-top: 0; /* 2 */
        }
  
        .small {
          font-variant: small-caps;
          text-transform: lowercase;
          font-style: normal;
        }
  
        .underline {
          text-decoration: underline;
          font-style: normal;
        }

        ${D} .underline {
          font-style: inherit;
        }
      }

      .article-white-background {
        background-color: white;
        padding: 1rem;
      }
  
      .article__body > .body__inner-container > {
        & {
          ${c(r.md)} {
            .grid-items-3${w} {
              ${G}{    
                margin-bottom: ${d(2.5)};
              }

              ${G}:last-child:nth-child(odd) {    
                grid-column: 1 / 3;
              } 
            }
          }
          ${({hideSideBySideViewOnMobile:n})=>n&&`\n            ${c(r.md)} {\n              ${w} {\n                ${G} {\n                  grid-column: 1 / -1;\n                }\n              }\n            }\n          `}

        }

        ${B}, .cne-video-embed {
            &:first-child {
              margin-top: 0;
            }
          }
  
          inline-embed:first-child ${B} {
            margin-top: 0;
          }
      }

      .article__body > .body__inner-container > figure.asset-embed {
        padding: 0 0 ${d(5)} 0;
      }


      .article__body--grid-margins {
        grid-column: 1 / -1;
      }

      /**
       1. have ad span more columns from the right panel
       to have a larger right margin
       2. have it span 3 which is intended in a 12 column grid
       */
       .grid-layout__aside {
         display: none;
     
         ${g(r.lg)} {
           display: block;
           min-width: 300px;
     
           ${S} {
             top: 90px;
           }
         }
     
         ${x} {
           &:first-child {
             margin-top: 0;
     
             ${k} {
               margin-top: 0;
             }
           }
         }
       }
       ${C} {
        ${({shouldEnableFullArticleInverted:n,theme:e})=>n&&`color: ${m(e,"colors.consumption.body.inverted.body")}`}
}

        ${C} {
          ${({dividerColor:n})=>n&&`\n                .body__inner-container  > hr {\n                    background: #${n};\n                    height: 1px;\n                }\n              `}
       }

  `,z=t("div").withConfig({displayName:"PaywallInlineBarrierWithWrapperGrid"})`
  ${({adRail:n})=>!n&&`\n    > ${G} {\n      grid-column: 1 / -1;\n    }`}
`,V=t("div").withConfig({displayName:"ArticlePageLedeBackground"})`
  ${({theme:n})=>u(n,"lede-background")}
`,U=t("div").withConfig({displayName:"ArticlePageContentBackGround"})`
  ${({enableActionBar:n})=>n&&"position: relative;"}

  ${({theme:n})=>u(n,"lede-background")}
  padding-top: ${d(2)};

  @media (min-width: 1208px) {
    padding-top: ${d(4)};
  }

  ${({togglePaddingTop:n})=>"large"===n&&`padding-top: ${d(4)};\n       ${g(r.md)}{ \n        padding-top: ${d(6)};\n       }\n      `}

  ${({togglePaddingTop:n})=>"xlarge"===n&&`${g(r.lg)} {  padding-top: ${d(8)}; }`}
  
    ${({isMobileTruncated:n})=>n&&`\n          position: relative;\n          height: 890px;\n          overflow: hidden;\n  \n          &::before {\n            display: block;\n            position: absolute;\n            bottom: 0;\n            z-index: 1;\n            background: linear-gradient(\n              0deg,\n              rgba(255, 255, 255, 1) 20%,\n              rgba(255, 255, 255, 0) 100%\n            );\n            width: 100%;\n            height: 192px;\n            content: '';\n          }\n  \n          ${g(r.md)} {\n            height: auto;\n            overflow: visible;\n  \n            &::before {\n              display: none;\n            }\n          }\n        `}

  ${({cartoonVariation:n})=>"card"===n&&o`
      ${N}::before, ${N}::after {
        border: none;
      }

      ${N} {
        ${l("background-color","colors.background.brand")};
        border: none;
        padding: ${d(3)} ${d(6)};

        ${g(r.lg)} {
          ${O} a {
            width: ${d(5)};
          }
        }
      }
    `}
`,q=t("div").withConfig({displayName:"ArticlePageChunks"})`
  ${({adRail:n})=>n&&`\n    ${I} {\n      margin-right: auto;\n      margin-left: auto;\n      width: auto;\n    }`}

  .grid:last-child {
    .body__container > .body__inner-container > *:last-child {
      ${T}:last-child {
        display: none;
      }
    }
  }

  ${({horizontalRuleStyle:n})=>"thin"===n&&"\n        .body__container {\n          .callout--has-top-border {\n            border-top-width: 1px;\n          }\n\n          hr {\n            height: 1px;\n          }\n        }\n      "}

  ${({hasTopSpacing:n})=>!n&&`\n        .inset-embedded-lede {\n          @media (min-width: 0px) and (max-width: calc(${r.md} - 1px)) {\n            ${R} {\n              transform: translateX(-50%);  /* 1 */\n              margin-left: 50%;\n              width: 100vw;\n            }\n          }\n        }\n\n        ${g(r.md)} {\n          .body__container {\n            p:first-of-type {\n              margin-top: 0;\n            }\n\n            .inset-embedded-lede {\n              margin-top: 0;\n            }\n          }\n        }\n    `}

  @media print {
    ${W} {
      display: block;
    }

    ${W} > p {
      font-size: 17px;
    }
  }

  ${({pageBackgroundTheme:n})=>n&&".ad.ad--mid-content {\n      .ad-label {\n        color: #1A1A1A;\n      }\n    }"}
`,K=t(b.Utility).withConfig({displayName:"ArticlePageBodyMobileTruncatedBtn"})`
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 2;
  margin-left: -100px;
  width: 200px;

  ${g(r.md)} {
    display: none;
  }
`,X=t(f).withConfig({displayName:"ArticlePageDisclaimer"})`
  ${p("typography.definitions.discovery.subhed-section-collection")}
  p {
    ${p("typography.definitions.globalEditorial.context-secondary")};
    font-style: italic;
  }
  ${({theme:n})=>l(n,"color","colors.consumption.body.standard.body")};
  ${g(r.md)} {
    .grid-layout--adrail & {
      grid-column: 1 / -1;
    }
  }

  span {
    font-style: normal;
  }
`,Y=t("div").withConfig({displayName:"ArticlePageChunksContent"})`
  ${({isNarrowContentWell:n})=>n&&`\n        .grid > *:first-child,\n        .body__container {\n          grid-column: 1 / -1;\n\n          ${g(r.lg)} {\n            grid-column: 4 / span 6;\n          }\n        }\n\n        ${N} {\n          .grid--item {\n            grid-column: 1 / -1;\n          }\n        }\n      `}

  ${({shouldBlurText:n})=>{n&&o`
        .grid:first-of-type .body__container p.has-dropcap::first-letter {
          color: transparent;
        }
        ${C} {
          * {
            text-shadow: 0 0 20px
              rgba(
                ${m("colors.consumption.body.standard.body")},
                0.5
              );
            color: transparent;
          }

          a:not(.button) {
            ${({theme:n})=>h(n,"colors.consumption.body.standard.link","colors.consumption.body.standard.link-hover")};
            text-shadow: 0 0 20px
              rgba(
                ${m("colors.consumption.body.standard.link")},
                0.5
              );
          }
        }
      `}}
`,J=t("article").withConfig({displayName:"ArticlePageMainContent"})`
  ${({shouldBlurText:n})=>n&&"\n        .grid {\n          .body__container {\n            p.has-dropcap,\n            p.has-dropcap__lead-standard-heading {\n              &::first-letter {\n                color: inherit;\n              }\n            }\n          }\n        }\n      "}
`,Q=t(M).withConfig({displayName:"ArticlePageSplitAdRail"})`
  ${S},
  ${S} > ${_} {
    height: 100%;
  }

  > aside > ${S} {
    position: static;
  }
`,Z=t("div").withConfig({displayName:"ArticlePageSplitAdRailContent"})`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${S} {
    margin-bottom: 0;
  }

  > div {
    flex: 1;
  }
`,nn=t("div").withConfig({displayName:"ArticlePageSplitAdRailTop"})``,en=t("div").withConfig({displayName:"ArticlePageSplitAdRailMiddle"})`
  margin-top: 40px;
`,tn=t("div").withConfig({displayName:"ArticlePageSplitAdRailBottom"})`
  margin-top: 40px;
`,an=t("div").withConfig({displayName:"ArticlePageBodyGridContainer"})`
  width: 100%;
`,on=t.div.withConfig({displayName:"ArticlePageChunksGrid"})`
  ${({adRail:n})=>!n&&`\n     > ${G} {\n      grid-column: 1/ -1;\n      ${g(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
  > ${G} {
    margin-bottom: ${d(2)};
  }

  ${({pageBackgroundTheme:n})=>n&&` .ad.ad--in-content {\n        display: none;\n      }\n      ${E} {\n        margin-top: 2rem;\n      }  \n    `}
`,rn=t.div.withConfig({displayName:"ArticlePageContentFooterGrid"})`
  ${G} {
    grid-column: 1 / -1;
    ${g(r.md)} {
      grid-column: 3 / span 8;
    }
    ${({isNarrow:n})=>n&&`\n         ${g(r.md)} {\n            grid-column: 4 / span 6;\n          }\n         `}
  }
`,dn=t.div.withConfig({displayName:"ArticlePageDisclaimerGrid"})`
  ${({adRail:n})=>!n&&`\n    > ${G} {\n      grid-column: 1/ -1;\n      ${g(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
`,ln=t.div.withConfig({displayName:"ContentWrapperGrid"})`
  ${({isadRail:n})=>!n&&`\n    > ${G} {\n      grid-column: 1/ -1;\n      ${g(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
`,pn=t(A).withConfig({displayName:"LinkStackArticlePage"})`
  margin: 48px 0;
  padding-bottom: 0;

  ${P} {
    margin: 0;
  }

  ${v} > ul {
    margin-left: 0;
    padding-left: 0;
  }
`,cn=t.div.withConfig({displayName:"ArticlePageActionBarWrapper"})``,gn=t.div.withConfig({displayName:"ArticlePageActionBarContent"})`
  display: flex;
  justify-content: center;
  padding-bottom: ${d(4)};

  ${({isActionBarStickyLargeScreen:n})=>n&&o`
      ${g(r.lg)} {
        position: absolute;
        left: ${d(4)};
        padding: 0;
        width: fit-content;
        height: 100%;

        ${cn} {
          position: sticky;
          top: ${({actionBarHeight:n})=>`calc(50% - ${n/2}px)`};
          transition: all 300ms ease-in-out;
          height: fit-content;
        }
      }
    `}
`;n.exports={ArticlePageBase:F,ArticlePageGlobalStyle:H,ArticlePageLedeBackground:V,ArticlePageContentBackGround:U,ArticlePageChunks:q,ArticlePageBodyMobileTruncatedBtn:K,ArticlePageChunksContent:Y,ArticlePageMainContent:J,ArticlePageDisclaimer:X,ArticlePageSplitAdRail:Q,ArticlePageSplitAdRailContent:Z,ArticlePageSplitAdRailTop:nn,ArticlePageSplitAdRailMiddle:en,ArticlePageSplitAdRailBottom:tn,ArticlePageBodyGridContainer:an,ArticlePageChunksGrid:on,ArticlePageContentFooterGrid:rn,ArticlePageDisclaimerGrid:dn,ArticlePageActionBarContent:gn,ArticlePageActionBarWrapper:cn,ContentWrapperGrid:ln,LinkStackArticlePage:pn,PaywallInlineBarrierWithWrapperGrid:z}},8679:(n,e,i)=>{"use strict";var t=i(21296),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},d={};function l(n){return t.isMemo(n)?r:d[n.$$typeof]||a}d[t.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},d[t.Memo]=r;var p=Object.defineProperty,c=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,h=Object.prototype;n.exports=function n(e,i,t){if("string"!=typeof i){if(h){var a=m(i);a&&a!==h&&n(e,a,t)}var r=c(i);g&&(r=r.concat(g(i)));for(var d=l(e),y=l(i),$=0;$<r.length;++$){var u=r[$];if(!(o[u]||t&&t[u]||y&&y[u]||d&&d[u])){var b=s(i,u);try{p(e,u,b)}catch(n){}}}}return e}},29750:n=>{n.exports=function(n,e,i){return n==n&&(void 0!==i&&(n=n<=i?n:i),void 0!==e&&(n=n>=e?n:e)),n}},74691:(n,e,i)=>{var t=i(29750),a=i(14841);n.exports=function(n,e,i){return void 0===i&&(i=e,e=void 0),void 0!==i&&(i=(i=a(i))==i?i:0),void 0!==e&&(e=(e=a(e))==e?e:0),t(a(n),e,i)}},67294:(n,e,i)=>{"use strict";n.exports=i(72408)}}]);