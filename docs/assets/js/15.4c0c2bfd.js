(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{173:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("为满足业务周期性品牌更新和多样化的视觉需求，JUI支持包括但不限于主色、圆角、边框和部分组件的视觉定制。")]),t._v(" "),n("p",[t._v("JUI使用AntDesign作为基础组件库，AntDesign使用了 Less 作为开发语言，定义了一系列全局/组件的样式变量，JUI使用了"),n("a",{attrs:{href:"https://github.com/jd-cyb/cyb-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("塞伯坦"),n("OutboundLink")],1),t._v("作为工程构建工具，原理上也是在工程编译层面，使用 less 提供的 "),n("code",[t._v("modifyVars")]),t._v(" 的方式进行覆盖变量。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"定制界面主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定制界面主题","aria-hidden":"true"}},[this._v("#")]),this._v(" 定制界面主题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("以下是在 "),s("code",[this._v("cyb.config.js")]),this._v(" 工程配置文件中，对 "),s("code",[this._v("less-loader")]),this._v(" 的 "),s("code",[this._v("options")]),this._v(" 属性进行相应配置。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cyb.config.js")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  webpack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lessLoader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        modifyVars"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'primary-color'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#F0250F'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局主色")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link-color'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#1890ff'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 链接色")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success-color'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#52c41a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 成功色")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'warning-color'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#faad14'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 警告色")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error-color'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#f5222d'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                           "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误色")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'font-size-base'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'14px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                           "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主字号")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'heading-color'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgba(0, 0, 0, .85)'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("              "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标题色")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text-color'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgba(0, 0, 0, .65)'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主文本色")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text-color-secondary '")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgba(0, 0, 0, .45)'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 次文本色")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'disabled-color '")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgba(0, 0, 0, .25)'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 失效色")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'border-radius-base'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件/浮层圆角")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'border-color-base'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#d9d9d9'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 边框色")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'box-shadow-base'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0 2px 8px rgba(0, 0, 0, .15)'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 浮层阴影")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        javascriptEnabled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"配置主题效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置主题效果","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置主题效果")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("全局主色为"),s("code",[this._v("红色")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/docs/theme/red.png",alt:"红色主题"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("全局主色为"),s("code",[this._v("紫色")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/docs/theme/purple.png",alt:"红色主题"}})])}],!1,null,null,null);s.default=e.exports}}]);