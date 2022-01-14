// The editor core

// Material UI
import { Card, CardHeader, CardMedia, CardContent, Typography, } from "@material-ui/core";
import type { CellPlugin } from "@react-page/editor";
import slate, { DEFAULT_SLATE_PLUGIN_ID, pluginFactories, } from "@react-page/plugins-slate";
import { RaReactPageInput, RaSelectReferenceInputField, } from "@react-page/react-admin";
import dynamic from "next/dynamic";
import Link from "next/link";
import fakeDataProvider from "ra-data-fakerest";
import React, { useEffect, useState } from "react";
import { Create, Datagrid, Edit, EditButton, List, Resource, ShowButton, SimpleForm, 
    TextField, TextInput, ImageField, NumberField } from "react-admin";
import { cellPlugins } from "../plugins/cellPlugins";
import type { Value } from "@react-page/editor";

// import { Admin } from "react-admin";

import drfProvider, { tokenAuthProvider, fetchJsonWithAuthToken, jwtTokenAuthProvider, fetchJsonWithAuthJWTToken } from 'ra-data-django-rest-framework';


// see https://www.youtube.com/watch?v=hpdXvhFFc4M
const Admin = dynamic(async () => (await import("react-admin")).Admin, {ssr: false,});
  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// this is a fake dataprovider. Normally you woul use your own data-provider (rest, graphql, etc.)
const dataProvider1 = fakeDataProvider({
    "page": [
        { 
            "id": "0", 
            "title": "About us", 
            "content": {
                "id": "3hsiv3",
                "version": 1,
                "rows": [
                  {
                    "id": "v8ue5d",
                    "cells": [
                      {
                        "id": "g2252j",
                        "size": 12,
                        "rows": [
                          {
                            "id": "gh3i1v",
                            "cells": [
                              {
                                "id": "ievhad",
                                "size": 12,
                                "plugin": { 
                                    "id": "ory/editor/core/content/slate", 
                                    "version": 1 
                                },
                                "dataI18n": {
                                  "default": {
                                    "slate": [
                                      {
                                        "type": "HEADINGS/HEADING-ONE",
                                        "children": [
                                          { "text": "Hello World, we create awesome products" },
                                        ],
                                      },
                                      {
                                        "children": [
                                          {
                                            "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                },
                                "rows": [],
                                "inline": null,
                              },
                            ],
                          },
                          {
                            "id": "rbu91f",
                            "cells": [
                              {
                                "id": "6pk9gm",
                                "size": 12,
                                "plugin": { "id": "recommendedProducts", "version": 1 },
                                "dataI18n": {
                                  "default": {
                                    "title": "Our recommended products",
                                    "productIds": ["product3", "product2", "product1"],
                                  },
                                },
                                "rows": [],
                                "inline": null,
                              },
                            ],
                          },
                          {
                            "id": "bpqbix",
                            "cells": [
                              {
                                "id": "7c0ziv",
                                "size": 5,
                                "plugin": { "id": "ory/editor/core/content/video", "version": 1 },
                                "dataI18n": {
                                  "default": {
                                    "src": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                                  },
                                },
                                "inline": "right",
                                "rows": [],
                              },
                              {
                                "id": "62nrhb",
                                "size": 12,
                                "plugin": { "id": "ory/editor/core/content/slate", "version": 1 },
                                "dataI18n": {
                                  "default": {
                                    "slate": [
                                      {
                                        "type": "PARAGRAPH/PARAGRAPH",
                                        "children": [
                                          {
                                            "text": "See what others have to say about us in our promotion video. ",
                                          },
                                        ],
                                      },
                                      {
                                        "type": "PARAGRAPH/PARAGRAPH",
                                        "children": [
                                          {
                                            "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ",
                                          },
                                        ],
                                      },
                                      {
                                        "type": "BLOCKQUOTE/BLOCKQUOTE",
                                        "children": [
                                          {
                                            "type": "PARAGRAPH/PARAGRAPH",
                                            "children": [
                                              {
                                                "text": "They never give you up - a happy customer",
                                                "EMPHASIZE/EM": true,
                                              },
                                            ],
                                          },
                                        ],
                                        "data": null,
                                      },
                                      {
                                        "type": "PARAGRAPH/PARAGRAPH",
                                        "children": [
                                          {
                                            "text": "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
                                          },
                                        ],
                                      },
                                      {
                                        "type": "PARAGRAPH/PARAGRAPH",
                                        "children": [
                                          {
                                            "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                },
                                "hasInlineNeighbour": "7c0ziv",
                                "rows": [],
                              },
                            ],
                          },
                        ],
                        "inline": null,
                        "dataI18n": null,
                      },
                    ],
                  },
                ],
            },  
        },
        { 
            "id": "1", 
            "title": "An empty post" 
        },
        { 
            "id": "2", 
            "title": "Demo!", 
            "content": {
                "id": "2390df",
                "version": 1,
                "rows": [
                  {
                    "id": "4c7d90",
                    "cells": [
                      {
                        "id": "95d678",
                        "size": 12,
                        "plugin": { "id": "ory/editor/core/content/slate", "version": 1 },
                        "dataI18n": {
                          "en": {
                            "slate": [
                              {
                                "children": [{ "text": "Next Level Content Editing" }],
                                "type": "HEADINGS/HEADING-TWO",
                                "data": { "align": "center" },
                              },
                              {
                                "children": [{ "text": "ReactPage" }],
                                "type": "HEADINGS/HEADING-ONE",
                                "data": { "align": "center" },
                              },
                            ],
                          },
                        },
                        "rows": [],
                        "inline": null,
                      },
                    ],
                  },
              
                  {
                    "id": "loa2uC",
                    "cells": [
                      {
                        "id": "2YMvkH",
                        "size": 12,
                        "plugin": { "id": "ory/editor/core/content/slate", "version": 1 },
                        "dataI18n": {
                          "en": {
                            "slate": [
                              {
                                "type": "PARAGRAPH/PARAGRAPH",
                                "children": [
                                  { "text": "ReactPage", "EMPHASIZE/STRONG": true },
                                  {
                                    "text": " is a next level content editor for react.",
                                  },
                                ],
                              },
                              {
                                "type": "PARAGRAPH/PARAGRAPH",
                                "children": [
                                  { "text": "It enables " },
                                  {
                                    "text": "webmasters and content editors ",
                                    "EMPHASIZE/EM": true,
                                    "EMPHASIZE/STRONG": true,
                                  },
                                  {
                                    "text": "to create the content they want with the ",
                                  },
                                  { "text": "<Components />", "CODE/CODE": true },
                                  { "text": " you provide as a developer." },
                                ],
                              },
                            ],
                          },
                        },
                        "rows": [],
                        "inline": null,
                      },
                    ],
                  },
                  {
                    "id": "2WaR9W",
                    "cells": [
                      {
                        "id": "tLyVTz",
                        "size": 12,
                        "plugin": {
                          "id": "ory/editor/core/layout/background",
                          "version": 1,
                        },
                        "dataI18n": {
                          "en": {
                            "modeFlag": 5,
                            "backgroundColor": { "r": 0, "g": 0, "b": 0, "a": 1 },
                            "gradients": [
                              {
                                "deg": 180,
                                "opacity": 0.75,
                                "colors": [
                                  { "color": { "r": 72, "g": 39, "b": 39, "a": 1 } },
                                  { "color": { "r": 0, "g": 0, "b": 0, "a": 0.83 } },
                                ],
                              },
                            ],
                          },
                        },
                        "rows": [
                          {
                            "id": "lF37AJ",
                            "cells": [
                              {
                                "id": "6oj6UO",
                                "size": 6,
                                "plugin": {
                                  "id": "ory/editor/core/content/image",
                                  "version": 1,
                                },
                                "dataI18n": { "en": null },
                                "rows": [],
                                "inline": null,
                              },
                              {
                                "id": "1KvW1q",
                                "size": 6,
                                "plugin": {
                                  "id": "ory/editor/core/content/slate",
                                  "version": 1,
                                },
                                "dataI18n": {
                                  "en": {
                                    "slate": [
                                      {
                                        "type": "HEADINGS/HEADING-TWO",
                                        "children": [
                                          {
                                            "text": "Batteries included - Key features",
                                          },
                                        ],
                                      },
                                      {
                                        "type": "LISTS/UNORDERED-LIST",
                                        "children": [
                                          {
                                            "children": [
                                              {
                                                "text": "powerful and customizable ",
                                              },
                                              {
                                                "text": "RichText Editor (",
                                                "EMPHASIZE/STRONG": true,
                                              },
                                              {
                                                "text": "powered by ",
                                                "EMPHASIZE/EM": true,
                                              },
                                              {
                                                "type": "LINK/LINK",
                                                "children": [
                                                  { "text": "", "EMPHASIZE/EM": true },
                                                ],
                                                "data": {
                                                  "href": "https://github.com/vazco/uniforms",
                                                },
                                              },
                                              { "text": "", "EMPHASIZE/EM": true },
                                              {
                                                "type": "LINK/LINK",
                                                "children": [
                                                  {
                                                    "text": "Slate",
                                                    "EMPHASIZE/EM": true,
                                                  },
                                                ],
                                                "data": {
                                                  "href": "https://github.com/ianstormtaylor/slate/",
                                                },
                                              },
                                              { "text": ")" },
                                            ],
                                            "type": "LISTS/LIST-ITEM",
                                          },
                                          {
                                            "children": [
                                              {
                                                "text": "12-column grid responsive grid layout",
                                              },
                                            ],
                                            "type": "LISTS/LIST-ITEM",
                                          },
                                          {
                                            "children": [{ "text": "Drag & Drop cells" }],
                                            "type": "LISTS/LIST-ITEM",
                                          },
                                          {
                                            "children": [
                                              {
                                                "text": "Undo & Redo, copy and hotkey support",
                                              },
                                            ],
                                            "type": "LISTS/LIST-ITEM",
                                          },
                                          {
                                            "children": [{ "text": "Multi-Language support" }],
                                            "type": "LISTS/LIST-ITEM",
                                          },
                                          {
                                            "children": [
                                              {
                                                "text": "Add any custom Components you like",
                                              },
                                            ],
                                            "type": "LISTS/LIST-ITEM",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                },
                                "rows": [],
                                "inline": null,
                              },
                            ],
                          },
                        ],
                        "inline": null,
                      },
                    ],
                  },
                  {
                    "id": "mmzpyU",
                    "cells": [
                      {
                        "id": "NXAV7x",
                        "size": 12,
                        "plugin": { "id": "ory/editor/core/content/slate", "version": 1 },
                        "dataI18n": {
                          "en": {
                            "slate": [
                              {
                                "type": "HEADINGS/HEADING-TWO",
                                "children": [{ "text": "Its just a react component!" }],
                              },
                            ],
                          },
                        },
                        "rows": [],
                        "inline": null,
                      },
                    ],
                  },
                  {
                    "id": "Xr2ZzV",
                    "cells": [
                      {
                        "id": "3024eg",
                        "size": 6,
                        "rows": [
                          {
                            "id": "ifqqC0",
                            "cells": [
                              {
                                "id": "Vo5LK1",
                                "inline": "right",
                                "size": 4,
                                "plugin": {
                                  "id": "ory/editor/core/content/image",
                                  "version": 1,
                                },
                                "dataI18n": {
                                  "en": {
                                    "src": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                                  },
                                },
                                "rows": [],
                              },
                              {
                                "id": "cFiB02",
                                "size": 12,
                                "plugin": {
                                  "id": "ory/editor/core/content/slate",
                                  "version": 1,
                                },
                                "dataI18n": {
                                  "en": {
                                    "slate": [
                                      {
                                        "children": [
                                          {
                                            "text": "ReactPage",
                                            "EMPHASIZE/STRONG": true,
                                          },
                                          {
                                            "text": " has a simple API - its basically just like a form field and can be included in any project. ",
                                          },
                                        ],
                                      },
                                      {
                                        "type": "PARAGRAPH/PARAGRAPH",
                                        "children": [
                                          { "text": "Pass its current " },
                                          { "text": "value", "CODE/CODE": true },
                                          {
                                            "text": " that you might read from your datastore and update the value when ",
                                          },
                                          { "text": "onChange", "CODE/CODE": true },
                                          { "text": " is called. " },
                                          {
                                            "text": "Its that simple.",
                                            "EMPHASIZE/STRONG": true,
                                          },
                                        ],
                                      },
                                      {
                                        "type": "PARAGRAPH/PARAGRAPH",
                                        "children": [
                                          { "text": "Set " },
                                          {
                                            "text": "readOnly={true}",
                                            "CODE/CODE": true,
                                          },
                                          {
                                            "text": " whenever you want to display content without editing capabilities. ",
                                          },
                                          {
                                            "text": "ReactPage",
                                            "EMPHASIZE/STRONG": true,
                                          },
                                          {
                                            "text": " will only load what is really required for displaying thanks to code splitting. This results in a ",
                                          },
                                          {
                                            "text": "small bundle size.",
                                            "EMPHASIZE/STRONG": true,
                                          },
                                          { "text": " " },
                                        ],
                                      },
                                    ],
                                  },
                                },
                                "hasInlineNeighbour": "Vo5LK1",
                                "rows": [],
                              },
                            ],
                          },
                        ],
                        "inline": null,
                        "dataI18n": null,
                      },
                      {
                        "id": "pSz3cW",
                        "size": 6,
                        "plugin": { "id": "code-snippet", "version": 1 },
                        "dataI18n": {
                          "en": {
                            "language": "tsx",
                            "code": "\nimport Editor from '@react-page/editor'\n\n// use ReactPage for editing Content\n<Editor\n    cellPlugins={yourCellPlugins}\n    value={theCurrentValue}\n    onChange={newValue => saveTheValue(newValue)}\n/>\n\n// or just for displaying content\n<Editor\n    cellPlugins={yourCellPlugins}\n    value={theCurrentValue}\n    readOnly={true}\n/>\n",
                          },
                        },
                        "rows": [],
                        "inline": null,
                      },
                    ],
                  },
              
                  {
                    "id": "LmbnJt",
                    "cells": [
                      {
                        "id": "KePRMx",
                        "size": 12,
                        "rows": [
                          {
                            "id": "2Qrhaw",
                            "cells": [
                              {
                                "id": "tgfvrK",
                                "size": 4,
                                "plugin": { "id": "ory/editor/core/content/image", "version": 1 },
                                "dataI18n": { "en": null },
                                "rows": [],
                                "inline": null,
                              },
                              {
                                "id": "NrkefU",
                                "size": 8,
                                "plugin": { "id": "ory/editor/core/content/slate", "version": 1 },
                                "dataI18n": {
                                  "en": {
                                    "slate": [
                                      {
                                        "type": "HEADINGS/HEADING-TWO",
                                        "children": [{ "text": "Add anything you want" }],
                                      },
                                      {
                                        "type": "PARAGRAPH/PARAGRAPH",
                                        "children": [
                                          {
                                            "text": "Anything can displayed inside a cell of this editor! You can add text, images, videos and any custom Component you want by creating custom ",
                                          },
                                          { "text": "CellPlugins.", "CODE/CODE": true },
                                        ],
                                      },
                                      {
                                        "type": "PARAGRAPH/PARAGRAPH",
                                        "children": [
                                          {
                                            "text": "Provide your webmasters a 'recommended products' section for your E-Commerce blog.\nShow a contact form directly inside your content.\nEmbed Tweets and newest posts from Social media.",
                                          },
                                        ],
                                      },
                                      {
                                        "type": "PARAGRAPH/PARAGRAPH",
                                        "children": [
                                          {
                                            "text": "Anything is possible with a simple, yet powerful API. ",
                                          },
                                        ],
                                      },
                                      {
                                        "type": "PARAGRAPH/PARAGRAPH",
                                        "children": [
                                          {
                                            "text": "You provide a Component and some metadata about your new ",
                                          },
                                          { "text": "CellPlugin ", "CODE/CODE": true },
                                          {
                                            "text": "and you are done. If you additionaly provide a schema of the data of this ",
                                          },
                                          { "text": "CellPlugin, ", "CODE/CODE": true },
                                          { "text": "we will " },
                                          {
                                            "text": "automatically create a form",
                                            "EMPHASIZE/STRONG": true,
                                          },
                                          { "text": " for you (" },
                                          { "text": "powered by ", "EMPHASIZE/EM": true },
                                          {
                                            "type": "LINK/LINK",
                                            "children": [
                                              { "text": "Uniforms", "EMPHASIZE/EM": true },
                                            ],
                                            "data": {
                                              "href": "https://github.com/vazco/uniforms",
                                            },
                                          },
                                          { "text": ")." },
                                        ],
                                      },
                                    ],
                                  },
                                },
                                "rows": [],
                                "inline": null,
                              },
                            ],
                          },
                          {
                            "id": "vfFODi",
                            "cells": [
                              {
                                "id": "IlKIzI",
                                "size": 6,
                                "plugin": { "id": "ory/editor/core/content/slate", "version": 1 },
                                "dataI18n": {
                                  "en": {
                                    "slate": [
                                      {
                                        "type": "HEADINGS/HEADING-TWO",
                                        "children": [{ "text": "Powerful Rich Text editing" }],
                                      },
                                      {
                                        "children": [
                                          {
                                            "text": "We provide a powerful richtext plugin built upon ",
                                          },
                                          {
                                            "type": "LINK/LINK",
                                            "children": [{ "text": "" }],
                                            "data": {
                                              "href": "https://github.com/vazco/uniforms",
                                            },
                                          },
                                          { "text": "" },
                                          {
                                            "type": "LINK/LINK",
                                            "children": [{ "text": "Slate" }],
                                            "data": {
                                              "href": "https://github.com/ianstormtaylor/slate/",
                                            },
                                          },
                                          {
                                            "text": ". It works out-of-the-box, but is fully customizable. You can customize how everything is rendered by providing custom component for headlines, paragraphs, links and so-on and you can add create your own custom plugins to bring in ",
                                          },
                                          { "text": "color", "SetColor": { "color": "green" } },
                                          {
                                            "text": ", add custom links or custom paragraph styles.",
                                          },
                                        ],
                                      },
                                      {
                                        "type": "HEADINGS/HEADING-TWO",
                                        "children": [{ "text": "" }],
                                      },
                                    ],
                                  },
                                },
                                "rows": [],
                                "inline": null,
                              },
                              {
                                "id": "dxC996",
                                "size": 6,
                                "plugin": { "id": "ory/editor/core/content/slate", "version": 1 },
                                "dataI18n": {
                                  "en": {
                                    "slate": [
                                      {
                                        "type": "PARAGRAPH/PARAGRAPH",
                                        "children": [{ "text": "", "EMPHASIZE/EM": true }],
                                      },
                                      {
                                        "type": "PARAGRAPH/PARAGRAPH",
                                        "children": [
                                          {
                                            "text": "You can customize the rich text editor anyway you like.\nYou can even add formula editing capabilities:",
                                            "EMPHASIZE/EM": true,
                                          },
                                        ],
                                        "data": { "align": "center" },
                                      },
                                      {
                                        "type": "PARAGRAPH/PARAGRAPH",
                                        "children": [
                                          { "text": "" },
                                          {
                                            "type": "Katex",
                                            "children": [{ "text": "f(x) = x^2 " }],
                                            "data": {},
                                          },
                                          { "text": "" },
                                        ],
                                        "data": { "align": "center" },
                                      },
                                      {
                                        "type": "PARAGRAPH/PARAGRAPH",
                                        "children": [{ "text": "" }],
                                      },
                                    ],
                                  },
                                },
                                "rows": [],
                                "inline": null,
                              },
                            ],
                          },
                        ],
                        "inline": null,
                        "dataI18n": null,
                      },
                    ],
                  },
                  {
                    "id": "E1Vhkc",
                    "cells": [
                      {
                        "id": "prkeRn",
                        "size": 6,
                        "rows": [
                          {
                            "id": "bKGECx",
                            "cells": [
                              {
                                "id": "HHZfRt",
                                "size": 12,
                                "plugin": { "id": "ory/editor/core/content/slate", "version": 1 },
                                "dataI18n": {
                                  "en": {
                                    "slate": [
                                      {
                                        "type": "HEADINGS/HEADING-TWO",
                                        "children": [{ "text": "Embraces Typescript" }],
                                      },
                                      {
                                        "type": "LISTS/ORDERED-LIST",
                                        "children": [
                                          {
                                            "children": [
                                              {
                                                "text": "ReactPage is written in modern typescript and enables developer that include ReactPage into their project with typesafety and peace of mind. Thanks to generics, you can give any CellPlugin the data type that you need.",
                                              },
                                            ],
                                            "type": "LISTS/LIST-ITEM",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                },
                                "rows": [],
                                "inline": null,
                              },
                            ],
                          },
                          {
                            "id": "7Ez2XG",
                            "cells": [
                              {
                                "id": "oZbiJG",
                                "size": 12,
                                "plugin": { "id": "twitter-timeline", "version": 1 },
                                "dataI18n": {
                                  "en": {
                                    "title": "A Sample Twitter plugin",
                                    "screenName": "typescript",
                                    "height": 600,
                                  },
                                },
                                "rows": [],
                                "inline": null,
                              },
                            ],
                          },
                        ],
                        "inline": null,
                        "dataI18n": null,
                      },
                      {
                        "id": "adbpP9",
                        "size": 6,
                        "plugin": { "id": "code-snippet", "version": 1 },
                        "dataI18n": {
                          "en": {
                            "language": "tsx",
                            "code": require("!!raw-loader!../../plugins/customContentPluginTwitter").default,
                          },
                        },
                        "rows": [],
                        "inline": null,
                      },
                    ],
                  },
                  {
                    "id": "KxRm4Q",
                    "cells": [
                      {
                        "id": "pX3v4h",
                        "size": 8,
                        "plugin": { "id": "ory/editor/core/content/slate", "version": 1 },
                        "dataI18n": {
                          "en": {
                            "slate": [
                              {
                                "type": "HEADINGS/HEADING-TWO",
                                "children": [{ "text": "Server Side Rendering out of the box" }],
                              },
                              {
                                "type": "PARAGRAPH/PARAGRAPH",
                                "children": [
                                  { "text": "ReactPage ", "EMPHASIZE/STRONG": true },
                                  {
                                    "text": "is built with performance in mind. It can be used for ",
                                  },
                                  {
                                    "text": "server side rendering (SSR)",
                                    "EMPHASIZE/STRONG": true,
                                  },
                                  {
                                    "text": ", which makes it not only a great tool for editing, but also for displaying. Its battle tested in nextjs, this example itself is created using nextjs and static page generation.",
                                  },
                                ],
                              },
                              {
                                "type": "PARAGRAPH/PARAGRAPH",
                                "children": [
                                  { "text": "We try " },
                                  { "text": "minimize bundle size", "EMPHASIZE/STRONG": true },
                                  {
                                    "text": " as much as possible. Any UI solely used for editing is not loaded when in readOnly mode. ",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        "rows": [],
                        "inline": null,
                      },
                      {
                        "id": "Hl5FKJ",
                        "size": 4,
                        "rows": [
                          {
                            "id": "YFNmnf",
                            "cells": [
                              {
                                "id": "f6pdG9",
                                "size": 12,
                                "plugin": { "id": "ory/editor/core/content/slate", "version": 1 },
                                "dataI18n": {
                                  "en": {
                                    "slate": [
                                      {
                                        "type": "PARAGRAPH/PARAGRAPH",
                                        "children": [{ "text": "", "EMPHASIZE/EM": true }],
                                        "data": { "align": "center" },
                                      },
                                      {
                                        "type": "PARAGRAPH/PARAGRAPH",
                                        "children": [
                                          {
                                            "text": "ReactPage works in any SSR setup like \nNext.js or Gatsby",
                                            "EMPHASIZE/EM": true,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                },
                                "rows": [],
                                "inline": null,
                              },
                            ],
                          },
                          {
                            "id": "VxBY6n",
                            "cells": [
                              {
                                "id": "MjIkMK",
                                "size": 4,
                                "plugin": { "id": "ory/editor/core/content/image", "version": 1 },
                                "dataI18n": {
                                  "en": {
                                    "href": "",
                                    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png",
                                  },
                                },
                                "rows": [],
                                "inline": null,
                              },
                              {
                                "id": "me5hVT",
                                "size": 3,
                                "plugin": { "id": "ory/editor/core/content/spacer", "version": 1 },
                                "dataI18n": { "en": { "height": 24 } },
                                "rows": [],
                                "inline": null,
                              },
                              {
                                "id": "pdjqHJ",
                                "size": 5,
                                "plugin": { "id": "ory/editor/core/content/image", "version:": 1 },
                                "dataI18n": {
                                  "en": { "src": "https://www.gatsbyjs.cn/Gatsby-Logo.svg" },
                                },
                                "rows": [],
                                "inline": null,
                              },
                            ],
                          },
                        ],
                        "inline": null,
                        "dataI18n": null,
                      },
                    ],
                  },
                ],
            },
        },
    ],
    "products": [
        {
            "id": "product1",
            "title": "A Fancy Chair!",
            "imageUrl": "https://picsum.photos/seed/react-page/800/600",
            "teaserText":
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        },
        {
            "id": "product2",
            "title": "Some miracelous table",
            "imageUrl": "https://picsum.photos/seed/react-page-is-awesome/800/600",
            "teaserText":
            "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
        },
        {
            "id": "product3",
            "title": "Fantastic closet",
            "imageUrl": "https://picsum.photos/seed/react-admin-as-well/800/600",
            "teaserText":
            "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
        },
    ],
});

// const authProvider = jwtTokenAuthProvider({obtainAuthTokenUrl: "/api/token/"});
// const dataProvider = drfProvider("/api", fetchJsonWithAuthJWTToken);
// const dataProvider = drfProvider("/api");
  
/**
 * This is an example of a slate link plugin that uses react admin to select the target
 */
const PostIdSelector = (props) => (
    // pass the props
    <RaSelectReferenceInputField optionText="title" reference="pages" label="Page" {...props} />
);

// <{post"id": string,}>
const postLinkPlugin = pluginFactories.createComponentPlugin({
    icon: <span>Post</span>,
    type: "postlink",
    object: "mark",
    label: "Post link",
    addHoverButton: true,
    addToolbarButton: true,
    controls: {
      type: "autoform",
      schema: {
        required: ["postId"],
        type: "object",
        properties: {
          postId: {
            type: "string",
            uniforms: {
              // you should lazy load this
              component: PostIdSelector,
            },
          },
        },
      },
    },
    // this code here lives primarly in your frontend, you would create the link however you like
    // and you would probably read more data from your datasource
    // this is just a simple example. The link dofes actually not work in our example, but you should get the idea
    Component: (props) => (
      <Link href={"/pages/" + props.postId}>
        <a>{props.children}</a>
      </Link>
    ),
});

// let"s add a custom slate plugin
const customSlate = slate((def) => ({
    ...def,
    plugins: {
        ...def.plugins,
        link: {
            ...def.plugins.link,
            postLink: postLinkPlugin,
        },
    },
}));
  
  const ProductIdSelector = (props) => (
    // pass the props
    <RaSelectReferenceInputField
      {...props}
      optionText="title"
      reference="products"
      label="Product"
    />
  );
  
  const ProductTeaser: React.FC<{ productId: string }> = ({ productId }) => {
    // this component would live in your frontend
    // you won"t load data from admin here, but from the public frontend api
    // for this example, we use the dataprovider, but in real-live-applications, that would not be the case
    const [product, setProduct] = useState(null);
    useEffect(() => {
        dataProvider
        .getOne("products", { "id": productId })
        .then((r) => setProduct(r.data));
    }, [productId]);
    return product ? (
        <Card>
        <CardMedia
            image={product.imageUrl}
            title={product.title}
            style={{ height: 240 }}
        />
        <CardHeader title={product.title} />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            {product.teaserText}
            </Typography>
        </CardContent>
        </Card>
    ) : null;
};

const recommendedProducts: CellPlugin<{ productIds: string[]; title: string;}> = {
    "id": "recommendedProducts",
    title: "Recommended Products",
    Renderer: (props) => (
      <div>
        <h3>{props.data.title}</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 10,
          }}
        >
          {props.data.productIds?.map((id) => (
            <ProductTeaser productId={id} key={id} />
          ))}
        </div>
      </div>
    ),
    "version:": 1,
    controls: {
        type: "autoform",
        columnCount: 1,
        schema: {
            required: ["title", "productIds"],
            properties: {
                title: {
                    type: "string",
                    default: "Our recommended products",
                },
                productIds: {
                    type: "array",
                    items: {
                        type: "string",
                        uniforms: {
                        component: ProductIdSelector,
                        },
                    },
                },
            },
        },
    },
};

const ourCellPlugins = [
    customSlate,
    recommendedProducts,
    ...cellPlugins.filter((p) => p.id !== DEFAULT_SLATE_PLUGIN_ID),
];

const PostList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <NumberField source="id" />
                <TextField source="title" />
                <TextField source="url" />
                <EditButton />
                {/* <ShowButton /> */}
            </Datagrid>
        </List>
    );
};

export const PostEdit = (props) => (
    <Edit title="Edit a Post" {...props}>
        <SimpleForm label="summary">
            <NumberField disabled source="id" />
            <TextInput source="title" />
            <TextInput source="url" />
            <RaReactPageInput source="content" label="Content" cellPlugins={ourCellPlugins} />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm label="summary">
            <NumberField source="id" />
            <TextInput source="title" />
            <TextInput source="url" />
            <RaReactPageInput source="content" label="Content" cellPlugins={ourCellPlugins} />
        </SimpleForm>
    </Create>
);
  
export default {
    list: PostList,
    create: PostCreate,
    edit: PostEdit,
};

const ProductList = (props) => {
    return (
        <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <ImageField source="imageUrl" />
            <EditButton />
            <ShowButton />
        </Datagrid>
        </List>
    );
};
  
export const ProductEdit = (props) => (
    <Edit title="Edit a Product" {...props}>
        <SimpleForm label="summary">
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput multiline source="teaserText" />
        <TextInput source="imageUrl" />
        </SimpleForm>
    </Edit>
);
  
export const ProductCreate = (props) => (
    <Create title="Create a Product" {...props}>
        <SimpleForm label="summary">
        <TextInput source="id" />
        <TextInput source="title" />
        <TextInput multiline source="teaserText" />
        <TextInput source="imageUrl" />
        </SimpleForm>
    </Create>
);
  
const products = {
    list: ProductList,
    create: ProductCreate,
    edit: ProductEdit,
};
  
function ReactAdminExample() {
    return ( // authProvider={authProvider} 
        <Admin dataProvider={dataProvider} title="Example Admin">
            <Resource name="pages" {...posts} />
            {/* <Resource name="products" {...products} /> */}
        </Admin>
    );
}