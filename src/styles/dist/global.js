"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.GlobalStyle = void 0;
var styled_components_1 = require("styled-components");
exports.GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    :root\n    {\n        --background:##F0F2F5;\n    }\n    *\n    {\n        margin:0;\n        padding:0;\n        box-sizing:border-box;\n    }\n\n\n    @media(min-width:1280px)\n    {\n        html\n        {\n            font-size: 87.5%;\n        }\n    }\n\n    @media(max-width:720px)\n    {\n        html\n        {\n            font-size: 81.25%;\n        }\n    }\n    \n    body\n    {\n        background-color: var(---background);\n        -webkit-font-smoothing:antialiased;\n    }\n\n"], ["\n    :root\n    {\n        --background:##F0F2F5;\n    }\n    *\n    {\n        margin:0;\n        padding:0;\n        box-sizing:border-box;\n    }\n\n\n    @media(min-width:1280px)\n    {\n        html\n        {\n            font-size: 87.5%;\n        }\n    }\n\n    @media(max-width:720px)\n    {\n        html\n        {\n            font-size: 81.25%;\n        }\n    }\n    \n    body\n    {\n        background-color: var(---background);\n        -webkit-font-smoothing:antialiased;\n    }\n\n"])));
var templateObject_1;
