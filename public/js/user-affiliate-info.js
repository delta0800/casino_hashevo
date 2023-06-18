"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["user-affiliate-info"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/affiliate/info.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/affiliate/info.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Affiliate program')
    };
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)('auth', ['user'])), {}, {
    affiliateUrlEncoded: function affiliateUrlEncoded() {
      return encodeURI(this.user.affiliate_url);
    },
    approvalFrequency: function approvalFrequency() {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('settings.affiliate.auto_approval_frequency');
    }
  }),
  methods: {
    commission: function commission(type, tier) {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("settings.affiliate.commissions.".concat(type, ".rates"))[tier];
    },
    copyToClipboard: _plugins_utils__WEBPACK_IMPORTED_MODULE_1__.copyToClipboard
  }
});

/***/ }),

/***/ "./resources/js/pages/user/affiliate/info.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/user/affiliate/info.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _info_vue_vue_type_template_id_6333d71b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.vue?vue&type=template&id=6333d71b& */ "./resources/js/pages/user/affiliate/info.vue?vue&type=template&id=6333d71b&");
/* harmony import */ var _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/affiliate/info.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _info_vue_vue_type_template_id_6333d71b___WEBPACK_IMPORTED_MODULE_0__.render,
  _info_vue_vue_type_template_id_6333d71b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/affiliate/info.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/affiliate/info.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/user/affiliate/info.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/affiliate/info.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/affiliate/info.vue?vue&type=template&id=6333d71b&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/affiliate/info.vue?vue&type=template&id=6333d71b& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VList.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListItem.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListItemIcon.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/VMenu.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/VSimpleTable.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/VToolbar.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");

















var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      fluid: ""
    }
  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      justify: "center"
    }
  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      cols: "12",
      lg: "6"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_4__["default"], [_c(vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_5__.VToolbarTitle, [_vm._v("\n            " + _vm._s(_vm.$t("Affiliate program")) + "\n          ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_c("h2", {
    staticClass: "title"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("About")) + "\n          ")]), _vm._v(" "), _c("p", [_vm._v("\n            " + _vm._s(_vm.$t("Refer new users to our website and earn credits when they make bets or deposits.")) + "\n          ")]), _vm._v(" "), _c("p", [_vm._v("\n            " + _vm._s(_vm.$t("Affiliate commission is divided into three tiers.")) + "\n            " + _vm._s(_vm.$t("Everyone who joins the website by the below link becomes your 1st-tier referral.")) + "\n            " + _vm._s(_vm.$t("2nd-tier is users who signed under the 1st-tier referrals link.")) + "\n            " + _vm._s(_vm.$t("3rd-tier is users who signed under the 2nd-tier referrals link.")) + "\n          ")]), _vm._v(" "), _c("p", {
    staticClass: "mb-5"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("All pending commissions are reviewed by an administrator.")) + "\n            " + _vm._s(_vm.$t("Upon approval the total commissions value will be transferred to your balance.")) + "\n            " + _vm._s(_vm.$t("In case of abuse attempt your commissions will be rejected and your account will be suspended.")) + "\n            "), _vm.approvalFrequency !== "never" ? [_vm._v("\n              " + _vm._s(_vm.$t("Commissions approval frequency: {0}.", [_vm.$t(_vm.approvalFrequency)])) + "\n            ")] : _vm._e()], 2), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: "link",
    attrs: {
      value: _vm.user.affiliate_url,
      label: _vm.$t("Your affiliate link"),
      "append-icon": "mdi-content-copy",
      outlined: "",
      readonly: ""
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.copyToClipboard(_vm.$refs.link.$el.querySelector("input"));
      }
    },
    scopedSlots: _vm._u([{
      key: "append-outer",
      fn: function fn() {
        return [_c(vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
          attrs: {
            "offset-y": ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function fn(_ref) {
              var on = _ref.on;
              return [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["default"], _vm._g({
                attrs: {
                  left: ""
                }
              }, on), [_vm._v("\n                    mdi-share-variant\n                  ")])];
            }
          }])
        }, [_vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["default"], [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["default"], {
          attrs: {
            href: "mailto:?body=" + _vm.affiliateUrlEncoded,
            target: "_blank"
          }
        }, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_12__["default"], [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["default"], [_vm._v("mdi-email")])], 1), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__.VListItemContent, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__.VListItemTitle, [_vm._v(_vm._s(_vm.$t("Send by email")))])], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["default"], {
          attrs: {
            href: "https://web.whatsapp.com/send?text=" + _vm.affiliateUrlEncoded,
            target: "_blank"
          }
        }, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_12__["default"], [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["default"], [_vm._v("mdi-whatsapp")])], 1), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__.VListItemContent, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__.VListItemTitle, [_vm._v(_vm._s(_vm.$t("Send by WhatsApp")))])], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["default"], {
          attrs: {
            href: "https://www.facebook.com/sharer.php?u=" + _vm.affiliateUrlEncoded,
            target: "_blank"
          }
        }, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_12__["default"], [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["default"], [_vm._v("mdi-facebook")])], 1), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__.VListItemContent, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__.VListItemTitle, [_vm._v(_vm._s(_vm.$t("Share on Facebook")))])], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["default"], {
          attrs: {
            href: "https://twitter.com/intent/tweet?text=&url=" + _vm.affiliateUrlEncoded,
            target: "_blank"
          }
        }, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_12__["default"], [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["default"], [_vm._v("mdi-twitter")])], 1), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__.VListItemContent, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__.VListItemTitle, [_vm._v(_vm._s(_vm.$t("Share on Twitter")))])], 1)], 1)], 1)], 1)];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("h2", {
    staticClass: "title mt-3"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Paytable")) + "\n          ")]), _vm._v(" "), _c(vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_14__["default"], {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn() {
        return [_c("thead", [_c("tr", [_c("th", {
          staticClass: "text-left"
        }, [_vm._v(_vm._s(_vm.$t("Event")))]), _vm._v(" "), _c("th", {
          staticClass: "text-left"
        }, [_vm._v(_vm._s(_vm.$t("Commission type")))]), _vm._v(" "), _c("th", {
          staticClass: "text-right"
        }, [_vm._v(_vm._s(_vm.$t("1st tier")))]), _vm._v(" "), _c("th", {
          staticClass: "text-right"
        }, [_vm._v(_vm._s(_vm.$t("2nd tier")))]), _vm._v(" "), _c("th", {
          staticClass: "text-right"
        }, [_vm._v(_vm._s(_vm.$t("3rd tier")))])])]), _vm._v(" "), _c("tbody", [_vm.commission("sign_up", 0) > 0 || _vm.commission("sign_up", 1) > 0 || _vm.commission("sign_up", 2) > 0 ? _c("tr", [_c("td", {
          staticClass: "text-left"
        }, [_vm._v(_vm._s(_vm.$t("Referral user sign up")))]), _vm._v(" "), _c("td", {
          staticClass: "text-left"
        }, [_vm._v(_vm._s(_vm.$t("Flat")))]), _vm._v(" "), _c("td", {
          staticClass: "text-right"
        }, [_vm._v(_vm._s(_vm.commission("sign_up", 0)))]), _vm._v(" "), _c("td", {
          staticClass: "text-right"
        }, [_vm._v(_vm._s(_vm.commission("sign_up", 1)))]), _vm._v(" "), _c("td", {
          staticClass: "text-right"
        }, [_vm._v(_vm._s(_vm.commission("sign_up", 2)))])]) : _vm._e(), _vm._v(" "), _vm.commission("game_loss", 0) > 0 || _vm.commission("game_loss", 1) > 0 || _vm.commission("game_loss", 2) > 0 ? _c("tr", [_c("td", {
          staticClass: "text-left"
        }, [_vm._v(_vm._s(_vm.$t("Referral user game loss")))]), _vm._v(" "), _c("td", {
          staticClass: "text-left"
        }, [_vm._v(_vm._s(_vm.$t("% of bet amount")))]), _vm._v(" "), _c("td", {
          staticClass: "text-right"
        }, [_vm._v(_vm._s(_vm.commission("game_loss", 0)) + "%")]), _vm._v(" "), _c("td", {
          staticClass: "text-right"
        }, [_vm._v(_vm._s(_vm.commission("game_loss", 1)) + "%")]), _vm._v(" "), _c("td", {
          staticClass: "text-right"
        }, [_vm._v(_vm._s(_vm.commission("game_loss", 2)) + "%")])]) : _vm._e(), _vm._v(" "), _vm.commission("game_win", 0) > 0 || _vm.commission("game_win", 1) > 0 || _vm.commission("game_win", 2) > 0 ? _c("tr", [_c("td", {
          staticClass: "text-left"
        }, [_vm._v(_vm._s(_vm.$t("Referral user game win")))]), _vm._v(" "), _c("td", {
          staticClass: "text-left"
        }, [_vm._v(_vm._s(_vm.$t("% of bet amount")))]), _vm._v(" "), _c("td", {
          staticClass: "text-right"
        }, [_vm._v(_vm._s(_vm.commission("game_win", 0)) + "%")]), _vm._v(" "), _c("td", {
          staticClass: "text-right"
        }, [_vm._v(_vm._s(_vm.commission("game_win", 1)) + "%")]), _vm._v(" "), _c("td", {
          staticClass: "text-right"
        }, [_vm._v(_vm._s(_vm.commission("game_win", 2)) + "%")])]) : _vm._e(), _vm._v(" "), _vm.commission("deposit", 0) > 0 || _vm.commission("deposit", 1) > 0 || _vm.commission("deposit", 2) > 0 ? _c("tr", [_c("td", {
          staticClass: "text-left"
        }, [_vm._v(_vm._s(_vm.$t("Referral user deposit")))]), _vm._v(" "), _c("td", {
          staticClass: "text-left"
        }, [_vm._v(_vm._s(_vm.$t("% of deposit amount")))]), _vm._v(" "), _c("td", {
          staticClass: "text-right"
        }, [_vm._v(_vm._s(_vm.commission("deposit", 0)) + "%")]), _vm._v(" "), _c("td", {
          staticClass: "text-right"
        }, [_vm._v(_vm._s(_vm.commission("deposit", 1)) + "%")]), _vm._v(" "), _c("td", {
          staticClass: "text-right"
        }, [_vm._v(_vm._s(_vm.commission("deposit", 2)) + "%")])]) : _vm._e(), _vm._v(" "), _vm.commission("raffle_ticket", 0) > 0 || _vm.commission("raffle_ticket", 1) > 0 || _vm.commission("raffle_ticket", 2) > 0 ? _c("tr", [_c("td", {
          staticClass: "text-left"
        }, [_vm._v(_vm._s(_vm.$t("Referral raffle ticket purchase")))]), _vm._v(" "), _c("td", {
          staticClass: "text-left"
        }, [_vm._v(_vm._s(_vm.$t("% of raffle ticket cost")))]), _vm._v(" "), _c("td", {
          staticClass: "text-right"
        }, [_vm._v(_vm._s(_vm.commission("raffle_ticket", 0)) + "%")]), _vm._v(" "), _c("td", {
          staticClass: "text-right"
        }, [_vm._v(_vm._s(_vm.commission("raffle_ticket", 1)) + "%")]), _vm._v(" "), _c("td", {
          staticClass: "text-right"
        }, [_vm._v(_vm._s(_vm.commission("raffle_ticket", 2)) + "%")])]) : _vm._e()])];
      },
      proxy: true
    }])
  })], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/user/affiliate/info.vue?vue&type=template&id=6333d71b&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/user/affiliate/info.vue?vue&type=template&id=6333d71b& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_6333d71b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_6333d71b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_6333d71b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info.vue?vue&type=template&id=6333d71b& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/affiliate/info.vue?vue&type=template&id=6333d71b&");


/***/ })

}]);