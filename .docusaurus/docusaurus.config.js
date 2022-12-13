export default {
  "title": "argumentation.online",
  "tagline": "A curated collection of argument reconstructions",
  "url": "https://argumentation.online",
  "baseUrl": "/en/",
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "argumentation.online",
  "projectName": "argumentation.online",
  "i18n": {
    "defaultLocale": "de",
    "locales": [
      "de",
      "en"
    ],
    "localeConfigs": {}
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": false,
        "blog": {
          "showReadingTime": true,
          "editLocalizedFiles": true,
          "path": "./reconstructions",
          "routeBasePath": "/reconstructions",
          "editUrl": "https://github.com/facebook/docusaurus/edit/main/website/blog/",
          "remarkPlugins": [
            null
          ],
          "rehypePlugins": [
            [
              null,
              {
                "strict": false
              }
            ]
          ]
        },
        "theme": {
          "customCss": [
            "/home/tim/projects/argumentation.online/src/css/custom.css",
            "/home/tim/projects/argumentation.online/node_modules/katex/dist/katex.min.css"
          ]
        }
      }
    ]
  ],
  "themeConfig": {
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌙",
        "darkIconStyle": {
          "marginLeft": "2px",
          "color": "transparent",
          "textShadow": "0 0 0 #258ac2"
        },
        "lightIcon": "☀",
        "lightIconStyle": {
          "marginLeft": "1px",
          "color": "transparent",
          "textShadow": "0 0 0 #258ac2"
        }
      }
    },
    "navbar": {
      "title": "argumentation.online",
      "logo": {
        "alt": "argumentation.online Logo",
        "src": "img/argumentation-online-logo.svg"
      },
      "items": [
        {
          "type": "dropdown",
          "label": "Reconstructions",
          "to": "/reconstructions",
          "position": "left",
          "items": [
            {
              "to": "/reconstructions",
              "label": "Newest"
            },
            {
              "to": "/reconstructions/tags",
              "label": "Tags"
            },
            {
              "to": "/reconstructions/archive",
              "label": "Archive"
            }
          ]
        },
        {
          "to": "/the-project",
          "label": "The Project",
          "position": "left"
        },
        {
          "to": "/about-arguments",
          "label": "About Arguments",
          "position": "left"
        },
        {
          "type": "localeDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "items": [
            {
              "label": "Impressum",
              "to": "/impressum"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 argumentation.online"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "algolia": {
      "apiKey": "YOUR_API_KEY",
      "indexName": "YOUR_INDEX_NAME",
      "contextualSearch": true,
      "appId": "YOUR_APP_ID",
      "searchParameters": {}
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};