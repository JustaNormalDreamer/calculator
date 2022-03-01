"use strict";(self.webpackChunkcalculator=self.webpackChunkcalculator||[]).push([[35],{95:function(e,t,r){r.d(t,{Fd:function(){return i},od:function(){return d}});var a=r(181);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,_=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(_.push(a.value),!t||_.length!==t);o=!0);}catch(u){l=!0,n=u}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return _}}(e,t)||(0,a.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=r(791),o=r(126),l=r(184),u={value:[],result:null},c={state:u,dispatch:function(){return null}},s=(0,_.createContext)(c),i=function(e){var t=e.children,r=n((0,_.useReducer)(o.F,u),2),a=r[0],c=r[1];return(0,l.jsx)(s.Provider,{value:{state:a,dispatch:c},children:t})},d=function(){return(0,_.useContext)(s)}},126:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return CalculatorActionType},F:function(){return calculatorReducer}});var _home_justadreamer_Desktop_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(982),_home_justadreamer_Desktop_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(683),CalculatorActionType;!function(e){e[e.CLEAR=0]="CLEAR",e[e.EQUAL=1]="EQUAL",e[e.ENTRY=2]="ENTRY",e[e.BACKSPACE=3]="BACKSPACE"}(CalculatorActionType||(CalculatorActionType={}));var precision=10,calculatorReducer=function calculatorReducer(state,action){switch(action.type){case CalculatorActionType.CLEAR:return(0,_home_justadreamer_Desktop_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.Z)((0,_home_justadreamer_Desktop_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.Z)({},state),{},{value:[],result:null});case CalculatorActionType.ENTRY:return"+"!==state.value[state.value.length-1]&&"-"!==state.value[state.value.length-1]&&"*"!==state.value[state.value.length-1]&&"/"!==state.value[state.value.length-1]&&"%"!==state.value[state.value.length-1]&&"."!==state.value[state.value.length-1]||"+"!==action.payload&&"-"!==action.payload&&"*"!==action.payload&&"/"!==action.payload&&"%"!==action.payload&&"."!==action.payload||state.value.pop(),(0,_home_justadreamer_Desktop_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.Z)((0,_home_justadreamer_Desktop_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.Z)({},state),{},{value:[].concat((0,_home_justadreamer_Desktop_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(state.value),[action.payload])});case CalculatorActionType.EQUAL:var res=String(state.value).replaceAll(",",""),result=eval(res),output=result%1!==0?result:result.toFixed(precision);return(0,_home_justadreamer_Desktop_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.Z)((0,_home_justadreamer_Desktop_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.Z)({},state),{},{result:output});case CalculatorActionType.BACKSPACE:return(0,_home_justadreamer_Desktop_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.Z)((0,_home_justadreamer_Desktop_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.Z)({},state),{},{value:state.value.slice(0,-1)});default:return state}}},35:function(e,t,r){r.r(t);var a=r(791),n=r(95),_=r(184),o=(0,a.lazy)((function(){return r.e(944).then(r.bind(r,944))})),l=(0,a.lazy)((function(){return r.e(604).then(r.bind(r,604))})),u=["AC","<-","%","/",7,8,9,"*",4,5,6,"-",1,2,3,"+",0,".","="];t.default=function(){return(0,_.jsx)(n.Fd,{children:(0,_.jsx)("section",{className:"w-96 mx-auto bg-gray-100 my-5 p-5 rounded-md",children:(0,_.jsxs)(a.Suspense,{fallback:"Loading...",children:[(0,_.jsx)("div",{className:"",children:(0,_.jsx)("h2",{className:"",children:"Calculator"})}),(0,_.jsx)("div",{className:"screen",children:(0,_.jsx)(o,{})}),(0,_.jsx)("div",{className:"buttons",children:(0,_.jsx)("div",{className:"flex flex-wrap",children:u.map((function(e,t){return(0,_.jsx)("div",{className:"w-1/4",children:(0,_.jsx)(l,{value:e})},t)}))})})]})})})}},907:function(e,t,r){function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}r.d(t,{Z:function(){return a}})},683:function(e,t,r){function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{Z:function(){return _}})},982:function(e,t,r){r.d(t,{Z:function(){return _}});var a=r(907);var n=r(181);function _(e){return function(e){if(Array.isArray(e))return(0,a.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,n.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},181:function(e,t,r){r.d(t,{Z:function(){return n}});var a=r(907);function n(e,t){if(e){if("string"===typeof e)return(0,a.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,a.Z)(e,t):void 0}}}}]);
//# sourceMappingURL=35.565acfb1.chunk.js.map