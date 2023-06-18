"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/game-providers-resources-js-pages-admin-settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/game-providers/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/game-providers/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");
/* harmony import */ var _components_Admin_FileUpload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/Admin/FileUpload */ "./resources/js/components/Admin/FileUpload.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    FileUpload: _components_Admin_FileUpload__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    packageId: {
      type: String,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      variables: {
        GAME_PROVIDERS_BGAMING_API_ID: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.bgaming.api.id")),
        GAME_PROVIDERS_BGAMING_API_SECRET_KEY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.bgaming.api.secret_key")),
        GAME_PROVIDERS_BGAMING_API_ENDPOINT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.bgaming.api.endpoint")),
        GAME_PROVIDERS_BGAMING_CURRENCY_CODE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.bgaming.currency.code")),
        GAME_PROVIDERS_BGAMING_CURRENCY_DECIMALS: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.bgaming.currency.decimals")),
        GAME_PROVIDERS_BGAMING_CURRENCY_RATE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.bgaming.currency.rate")),
        GAME_PROVIDERS_BGAMING_GAMES_FILE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.bgaming.games.file")),
        GAME_PROVIDERS_EVOPLAY_API_ID: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.evoplay.api.id")),
        GAME_PROVIDERS_EVOPLAY_API_SECRET_KEY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.evoplay.api.secret_key")),
        GAME_PROVIDERS_EVOPLAY_CURRENCY_CODE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.evoplay.currency.code")),
        GAME_PROVIDERS_EVOPLAY_CURRENCY_DECIMALS: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.evoplay.currency.decimals")),
        GAME_PROVIDERS_EVOPLAY_CURRENCY_RATE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.evoplay.currency.rate")),
        GAME_PROVIDERS_EVOPLAY_API_VALIDATE_IP: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.evoplay.api.validate_ip")),
        GAME_PROVIDERS_KAGAMING_API_ID: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.kagaming.api.id")),
        GAME_PROVIDERS_KAGAMING_API_ACCESS_KEY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.kagaming.api.access_key")),
        GAME_PROVIDERS_KAGAMING_API_SECRET_KEY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.kagaming.api.secret_key")),
        GAME_PROVIDERS_KAGAMING_API_ENDPOINT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.kagaming.api.endpoint")),
        GAME_PROVIDERS_KAGAMING_API_GAME_LAUNCH_URL: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.kagaming.api.game_launch_url")),
        GAME_PROVIDERS_KAGAMING_CURRENCY_CODE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.kagaming.currency.code")),
        GAME_PROVIDERS_KAGAMING_CURRENCY_DECIMALS: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.kagaming.currency.decimals")),
        GAME_PROVIDERS_KAGAMING_CURRENCY_RATE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.kagaming.currency.rate")),
        GAME_PROVIDERS_KAGAMING_API_VALIDATE_IP: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.kagaming.api.validate_ip")),
        GAME_PROVIDERS_EZUGI_API_ID: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.ezugi.api.id")),
        GAME_PROVIDERS_EZUGI_API_SECRET_KEY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.ezugi.api.secret_key")),
        GAME_PROVIDERS_EZUGI_API_ENDPOINT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.ezugi.api.endpoint")),
        GAME_PROVIDERS_EZUGI_CURRENCY_CODE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.ezugi.currency.code")),
        GAME_PROVIDERS_EZUGI_CURRENCY_DECIMALS: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.ezugi.currency.decimals")),
        GAME_PROVIDERS_EZUGI_CURRENCY_RATE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.ezugi.currency.rate")),
        GAME_PROVIDERS_EZUGI_GAMES_FILE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.ezugi.games.file")),
        GAME_PROVIDERS_EZUGI_API_VALIDATE_IP: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.ezugi.api.validate_ip")),
        GAME_PROVIDERS_TVBET_API_ID: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.tvbet.api.id")),
        GAME_PROVIDERS_TVBET_API_SECRET_KEY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.tvbet.api.secret_key")),
        GAME_PROVIDERS_TVBET_API_ENDPOINT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.tvbet.api.endpoint")),
        GAME_PROVIDERS_TVBET_API_FRAME_URL: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.tvbet.api.frame_url")),
        GAME_PROVIDERS_TVBET_CURRENCY_CODE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.tvbet.currency.code")),
        GAME_PROVIDERS_TVBET_CURRENCY_DECIMALS: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.tvbet.currency.decimals")),
        GAME_PROVIDERS_TVBET_CURRENCY_RATE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.tvbet.currency.rate")),
        GAME_PROVIDERS_TVBET_GAMES_FILE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.tvbet.games.file")),
        GAME_PROVIDERS_TVBET_API_VALIDATE_IP: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.tvbet.api.validate_ip")),
        GAME_PROVIDERS_TVBET_API_IS_TEST: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".providers.tvbet.api.is_test"))
      }
    };
  },
  created: function created() {
    this.$emit('input', this.variables);
  },
  methods: {
    copyToClipboard: _plugins_utils__WEBPACK_IMPORTED_MODULE_2__.copyToClipboard,
    getCallbackUrl: function getCallbackUrl(provider) {
      var url = (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('app.url') || (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.baseUrl)();
      return "".concat(url, "/api/providers/").concat(provider);
    }
  }
});

/***/ }),

/***/ "./packages/game-providers/resources/js/pages/admin/settings.vue":
/*!***********************************************************************!*\
  !*** ./packages/game-providers/resources/js/pages/admin/settings.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings_vue_vue_type_template_id_7f0f1166___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=7f0f1166& */ "./packages/game-providers/resources/js/pages/admin/settings.vue?vue&type=template&id=7f0f1166&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./packages/game-providers/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_vue_vue_type_template_id_7f0f1166___WEBPACK_IMPORTED_MODULE_0__.render,
  _settings_vue_vue_type_template_id_7f0f1166___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/game-providers/resources/js/pages/admin/settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/game-providers/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./packages/game-providers/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/game-providers/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/game-providers/resources/js/pages/admin/settings.vue?vue&type=template&id=7f0f1166&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/game-providers/resources/js/pages/admin/settings.vue?vue&type=template&id=7f0f1166& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js");
/* harmony import */ var vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/VSwitch.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");









var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      flat: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardText, [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("BGaming")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Casino ID"),
      error: _vm.form.errors.has("GAME_PROVIDERS_BGAMING_API_ID"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_BGAMING_API_ID"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_BGAMING_API_ID");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_BGAMING_API_ID,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_BGAMING_API_ID", $$v);
      },
      expression: "form.GAME_PROVIDERS_BGAMING_API_ID"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Endpoint"),
      error: _vm.form.errors.has("GAME_PROVIDERS_BGAMING_API_ENDPOINT"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_BGAMING_API_ENDPOINT"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_BGAMING_API_ENDPOINT");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_BGAMING_API_ENDPOINT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_BGAMING_API_ENDPOINT", $$v);
      },
      expression: "form.GAME_PROVIDERS_BGAMING_API_ENDPOINT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Auth token"),
      error: _vm.form.errors.has("GAME_PROVIDERS_BGAMING_API_SECRET_KEY"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_BGAMING_API_SECRET_KEY"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_BGAMING_API_SECRET_KEY");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_BGAMING_API_SECRET_KEY,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_BGAMING_API_SECRET_KEY", $$v);
      },
      expression: "form.GAME_PROVIDERS_BGAMING_API_SECRET_KEY"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ref: "bgamingCallbackUrl",
    attrs: {
      value: _vm.getCallbackUrl("bgaming"),
      label: _vm.$t("Callback URL"),
      "persistent-hint": true,
      hint: _vm.$t("The callback URL should be provided to BGaming support"),
      readonly: "",
      outlined: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.copyToClipboard(_vm.$refs.bgamingCallbackUrl.$el.querySelector("input"));
      }
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    staticClass: "mt-5",
    attrs: {
      label: _vm.$t("Currency"),
      rules: [_vm.validationRequired],
      error: _vm.form.errors.has("GAME_PROVIDERS_BGAMING_CURRENCY_CODE"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_BGAMING_CURRENCY_CODE"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_BGAMING_CURRENCY_CODE");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_BGAMING_CURRENCY_CODE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_BGAMING_CURRENCY_CODE", $$v);
      },
      expression: "form.GAME_PROVIDERS_BGAMING_CURRENCY_CODE"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Number of decimals"),
      rules: [_vm.validationNonNegativeInteger],
      error: _vm.form.errors.has("GAME_PROVIDERS_BGAMING_CURRENCY_DECIMALS"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_BGAMING_CURRENCY_DECIMALS"),
      "persistent-hint": true,
      hint: _vm.$t("Most fiat currencies have 2 decimals, most cryptocurrencies have 8 decimals."),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_BGAMING_CURRENCY_DECIMALS");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_BGAMING_CURRENCY_DECIMALS,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_BGAMING_CURRENCY_DECIMALS", _vm._n($$v));
      },
      expression: "form.GAME_PROVIDERS_BGAMING_CURRENCY_DECIMALS"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    staticClass: "mt-5",
    attrs: {
      label: _vm.$t("Conversion rate"),
      type: "text",
      disabled: !_vm.form.GAME_PROVIDERS_BGAMING_CURRENCY_CODE,
      rules: [_vm.validationRequired, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_PROVIDERS_BGAMING_CURRENCY_RATE"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_BGAMING_CURRENCY_RATE"),
      prefix: _vm.form.GAME_PROVIDERS_BGAMING_CURRENCY_CODE ? "1 " + _vm.form.GAME_PROVIDERS_BGAMING_CURRENCY_CODE + " = " : "",
      suffix: _vm.$t("credits"),
      hint: _vm.$t("Amount of credits per 1 unit of the reference currency"),
      "persistent-hint": true,
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_BGAMING_CURRENCY_RATE");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_BGAMING_CURRENCY_RATE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_BGAMING_CURRENCY_RATE", _vm._n($$v));
      },
      expression: "form.GAME_PROVIDERS_BGAMING_CURRENCY_RATE"
    }
  }), _vm._v(" "), _c("file-upload", {
    staticClass: "mt-5",
    attrs: {
      label: _vm.$t("Games list"),
      name: "games",
      folder: "games/".concat(_vm.packageId, "/bgaming"),
      accept: ".yml"
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_BGAMING_GAMES_FILE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_BGAMING_GAMES_FILE", $$v);
      },
      expression: "form.GAME_PROVIDERS_BGAMING_GAMES_FILE"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Evoplay")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Project ID"),
      error: _vm.form.errors.has("GAME_PROVIDERS_EVOPLAY_API_ID"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_EVOPLAY_API_ID"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_EVOPLAY_API_ID");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_EVOPLAY_API_ID,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_EVOPLAY_API_ID", $$v);
      },
      expression: "form.GAME_PROVIDERS_EVOPLAY_API_ID"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Secret key"),
      error: _vm.form.errors.has("GAME_PROVIDERS_EVOPLAY_API_SECRET_KEY"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_EVOPLAY_API_SECRET_KEY"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_EVOPLAY_API_SECRET_KEY");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_EVOPLAY_API_SECRET_KEY,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_EVOPLAY_API_SECRET_KEY", $$v);
      },
      expression: "form.GAME_PROVIDERS_EVOPLAY_API_SECRET_KEY"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ref: "evoplayCallbackUrl",
    attrs: {
      value: _vm.getCallbackUrl("evoplay"),
      label: _vm.$t("Callback URL"),
      "persistent-hint": true,
      hint: _vm.$t("The callback URL should be inserted in Evoplay backend (Evoplay Entertainment --> Casino Accounts --> double click on an account)"),
      readonly: "",
      outlined: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.copyToClipboard(_vm.$refs.evoplayCallbackUrl.$el.querySelector("input"));
      }
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    staticClass: "mt-5",
    attrs: {
      label: _vm.$t("Currency"),
      rules: [_vm.validationRequired],
      error: _vm.form.errors.has("GAME_PROVIDERS_EVOPLAY_CURRENCY_CODE"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_EVOPLAY_CURRENCY_CODE"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_EVOPLAY_CURRENCY_CODE");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_EVOPLAY_CURRENCY_CODE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_EVOPLAY_CURRENCY_CODE", $$v);
      },
      expression: "form.GAME_PROVIDERS_EVOPLAY_CURRENCY_CODE"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Number of decimals"),
      rules: [_vm.validationNonNegativeInteger],
      error: _vm.form.errors.has("GAME_PROVIDERS_EVOPLAY_CURRENCY_DECIMALS"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_EVOPLAY_CURRENCY_DECIMALS"),
      "persistent-hint": true,
      hint: _vm.$t("Most fiat currencies have 2 decimals, most cryptocurrencies have 8 decimals."),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_EVOPLAY_CURRENCY_DECIMALS");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_EVOPLAY_CURRENCY_DECIMALS,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_EVOPLAY_CURRENCY_DECIMALS", _vm._n($$v));
      },
      expression: "form.GAME_PROVIDERS_EVOPLAY_CURRENCY_DECIMALS"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Conversion rate"),
      type: "text",
      disabled: !_vm.form.GAME_PROVIDERS_EVOPLAY_CURRENCY_CODE,
      rules: [_vm.validationRequired, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_PROVIDERS_EVOPLAY_CURRENCY_RATE"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_EVOPLAY_CURRENCY_RATE"),
      prefix: _vm.form.GAME_PROVIDERS_EVOPLAY_CURRENCY_CODE ? "1 " + _vm.form.GAME_PROVIDERS_EVOPLAY_CURRENCY_CODE + " = " : "",
      suffix: _vm.$t("credits"),
      hint: _vm.$t("Amount of credits per 1 unit of the reference currency"),
      "persistent-hint": true,
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_EVOPLAY_CURRENCY_RATE");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_EVOPLAY_CURRENCY_RATE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_EVOPLAY_CURRENCY_RATE", _vm._n($$v));
      },
      expression: "form.GAME_PROVIDERS_EVOPLAY_CURRENCY_RATE"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Validate IP address in callbacks"),
      color: "primary",
      "false-value": "false",
      "true-value": "true"
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_EVOPLAY_API_VALIDATE_IP,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_EVOPLAY_API_VALIDATE_IP", $$v);
      },
      expression: "form.GAME_PROVIDERS_EVOPLAY_API_VALIDATE_IP"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("KA Gaming")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Partner name"),
      error: _vm.form.errors.has("GAME_PROVIDERS_KAGAMING_API_ID"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_KAGAMING_API_ID"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_KAGAMING_API_ID");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_KAGAMING_API_ID,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_KAGAMING_API_ID", $$v);
      },
      expression: "form.GAME_PROVIDERS_KAGAMING_API_ID"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Access key"),
      error: _vm.form.errors.has("GAME_PROVIDERS_KAGAMING_API_ACCESS_KEY"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_KAGAMING_API_ACCESS_KEY"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_KAGAMING_API_ACCESS_KEY");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_KAGAMING_API_ACCESS_KEY,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_KAGAMING_API_ACCESS_KEY", $$v);
      },
      expression: "form.GAME_PROVIDERS_KAGAMING_API_ACCESS_KEY"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Secret key"),
      error: _vm.form.errors.has("GAME_PROVIDERS_KAGAMING_API_SECRET_KEY"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_KAGAMING_API_SECRET_KEY"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_KAGAMING_API_SECRET_KEY");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_KAGAMING_API_SECRET_KEY,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_KAGAMING_API_SECRET_KEY", $$v);
      },
      expression: "form.GAME_PROVIDERS_KAGAMING_API_SECRET_KEY"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("API URL"),
      error: _vm.form.errors.has("GAME_PROVIDERS_KAGAMING_API_ENDPOINT"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_KAGAMING_API_ENDPOINT"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_KAGAMING_API_ENDPOINT");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_KAGAMING_API_ENDPOINT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_KAGAMING_API_ENDPOINT", $$v);
      },
      expression: "form.GAME_PROVIDERS_KAGAMING_API_ENDPOINT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("API game launch URL"),
      error: _vm.form.errors.has("GAME_PROVIDERS_KAGAMING_API_GAME_LAUNCH_URL"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_KAGAMING_API_GAME_LAUNCH_URL"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_KAGAMING_API_GAME_LAUNCH_URL");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_KAGAMING_API_GAME_LAUNCH_URL,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_KAGAMING_API_GAME_LAUNCH_URL", $$v);
      },
      expression: "form.GAME_PROVIDERS_KAGAMING_API_GAME_LAUNCH_URL"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ref: "kagamingCallbackUrl",
    attrs: {
      value: _vm.getCallbackUrl("kagaming"),
      label: _vm.$t("Callback URL"),
      "persistent-hint": true,
      hint: _vm.$t("The callback URL should be provided to KA Gaming support when setting up the environment."),
      readonly: "",
      outlined: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.copyToClipboard(_vm.$refs.kagamingCallbackUrl.$el.querySelector("input"));
      }
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    staticClass: "mt-5",
    attrs: {
      label: _vm.$t("Currency"),
      rules: [_vm.validationRequired],
      error: _vm.form.errors.has("GAME_PROVIDERS_KAGAMING_CURRENCY_CODE"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_KAGAMING_CURRENCY_CODE"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_KAGAMING_CURRENCY_CODE");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_KAGAMING_CURRENCY_CODE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_KAGAMING_CURRENCY_CODE", $$v);
      },
      expression: "form.GAME_PROVIDERS_KAGAMING_CURRENCY_CODE"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Number of decimals"),
      rules: [_vm.validationNonNegativeInteger],
      error: _vm.form.errors.has("GAME_PROVIDERS_KAGAMING_CURRENCY_DECIMALS"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_KAGAMING_CURRENCY_DECIMALS"),
      "persistent-hint": true,
      hint: _vm.$t("Most fiat currencies have 2 decimals, most cryptocurrencies have 8 decimals."),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_KAGAMING_CURRENCY_DECIMALS");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_KAGAMING_CURRENCY_DECIMALS,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_KAGAMING_CURRENCY_DECIMALS", _vm._n($$v));
      },
      expression: "form.GAME_PROVIDERS_KAGAMING_CURRENCY_DECIMALS"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Conversion rate"),
      type: "text",
      disabled: !_vm.form.GAME_PROVIDERS_KAGAMING_CURRENCY_CODE,
      rules: [_vm.validationRequired, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_PROVIDERS_KAGAMING_CURRENCY_RATE"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_KAGAMING_CURRENCY_RATE"),
      prefix: _vm.form.GAME_PROVIDERS_KAGAMING_CURRENCY_CODE ? "1 " + _vm.form.GAME_PROVIDERS_KAGAMING_CURRENCY_CODE + " = " : "",
      suffix: _vm.$t("credits"),
      hint: _vm.$t("Amount of credits per 1 unit of the reference currency"),
      "persistent-hint": true,
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_KAGAMING_CURRENCY_RATE");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_KAGAMING_CURRENCY_RATE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_KAGAMING_CURRENCY_RATE", _vm._n($$v));
      },
      expression: "form.GAME_PROVIDERS_KAGAMING_CURRENCY_RATE"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Validate IP address in callbacks"),
      color: "primary",
      "false-value": "false",
      "true-value": "true"
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_KAGAMING_API_VALIDATE_IP,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_KAGAMING_API_VALIDATE_IP", $$v);
      },
      expression: "form.GAME_PROVIDERS_KAGAMING_API_VALIDATE_IP"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Ezugi")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Operator ID"),
      error: _vm.form.errors.has("GAME_PROVIDERS_EZUGI_API_ID"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_EZUGI_API_ID"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_EZUGI_API_ID");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_EZUGI_API_ID,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_EZUGI_API_ID", $$v);
      },
      expression: "form.GAME_PROVIDERS_EZUGI_API_ID"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Endpoint"),
      error: _vm.form.errors.has("GAME_PROVIDERS_EZUGI_API_ENDPOINT"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_EZUGI_API_ENDPOINT"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_EZUGI_API_ENDPOINT");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_EZUGI_API_ENDPOINT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_EZUGI_API_ENDPOINT", $$v);
      },
      expression: "form.GAME_PROVIDERS_EZUGI_API_ENDPOINT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Secret key"),
      error: _vm.form.errors.has("GAME_PROVIDERS_EZUGI_API_SECRET_KEY"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_EZUGI_API_SECRET_KEY"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_EZUGI_API_SECRET_KEY");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_EZUGI_API_SECRET_KEY,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_EZUGI_API_SECRET_KEY", $$v);
      },
      expression: "form.GAME_PROVIDERS_EZUGI_API_SECRET_KEY"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ref: "ezugiCallbackUrl",
    attrs: {
      value: _vm.getCallbackUrl("ezugi"),
      label: _vm.$t("Callback URL"),
      "persistent-hint": true,
      hint: _vm.$t("The callback URL should be provided to Ezugi support"),
      readonly: "",
      outlined: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.copyToClipboard(_vm.$refs.ezugiCallbackUrl.$el.querySelector("input"));
      }
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    staticClass: "mt-5",
    attrs: {
      label: _vm.$t("Currency"),
      rules: [_vm.validationRequired],
      error: _vm.form.errors.has("GAME_PROVIDERS_EZUGI_CURRENCY_CODE"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_EZUGI_CURRENCY_CODE"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_EZUGI_CURRENCY_CODE");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_EZUGI_CURRENCY_CODE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_EZUGI_CURRENCY_CODE", $$v);
      },
      expression: "form.GAME_PROVIDERS_EZUGI_CURRENCY_CODE"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Number of decimals"),
      rules: [_vm.validationNonNegativeInteger],
      error: _vm.form.errors.has("GAME_PROVIDERS_EZUGI_CURRENCY_DECIMALS"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_EZUGI_CURRENCY_DECIMALS"),
      "persistent-hint": true,
      hint: _vm.$t("Most fiat currencies have 2 decimals, most cryptocurrencies have 8 decimals."),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_EZUGI_CURRENCY_DECIMALS");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_EZUGI_CURRENCY_DECIMALS,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_EZUGI_CURRENCY_DECIMALS", _vm._n($$v));
      },
      expression: "form.GAME_PROVIDERS_EZUGI_CURRENCY_DECIMALS"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    staticClass: "mt-5",
    attrs: {
      label: _vm.$t("Conversion rate"),
      type: "text",
      disabled: !_vm.form.GAME_PROVIDERS_EZUGI_CURRENCY_CODE,
      rules: [_vm.validationRequired, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_PROVIDERS_EZUGI_CURRENCY_RATE"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_EZUGI_CURRENCY_RATE"),
      prefix: _vm.form.GAME_PROVIDERS_EZUGI_CURRENCY_CODE ? "1 " + _vm.form.GAME_PROVIDERS_EZUGI_CURRENCY_CODE + " = " : "",
      suffix: _vm.$t("credits"),
      hint: _vm.$t("Amount of credits per 1 unit of the reference currency"),
      "persistent-hint": true,
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_EZUGI_CURRENCY_RATE");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_EZUGI_CURRENCY_RATE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_EZUGI_CURRENCY_RATE", _vm._n($$v));
      },
      expression: "form.GAME_PROVIDERS_EZUGI_CURRENCY_RATE"
    }
  }), _vm._v(" "), _c("file-upload", {
    staticClass: "mt-5",
    attrs: {
      label: _vm.$t("Games list"),
      name: "games",
      folder: "games/".concat(_vm.packageId, "/ezugi"),
      accept: ".json"
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_EZUGI_GAMES_FILE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_EZUGI_GAMES_FILE", $$v);
      },
      expression: "form.GAME_PROVIDERS_EZUGI_GAMES_FILE"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Validate IP address in callbacks"),
      color: "primary",
      "false-value": "false",
      "true-value": "true"
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_EZUGI_API_VALIDATE_IP,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_EZUGI_API_VALIDATE_IP", $$v);
      },
      expression: "form.GAME_PROVIDERS_EZUGI_API_VALIDATE_IP"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("TvBet")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Client ID"),
      error: _vm.form.errors.has("GAME_PROVIDERS_TVBET_API_ID"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_TVBET_API_ID"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_TVBET_API_ID");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_TVBET_API_ID,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_TVBET_API_ID", $$v);
      },
      expression: "form.GAME_PROVIDERS_TVBET_API_ID"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Secret key"),
      error: _vm.form.errors.has("GAME_PROVIDERS_TVBET_API_SECRET_KEY"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_TVBET_API_SECRET_KEY"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_TVBET_API_SECRET_KEY");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_TVBET_API_SECRET_KEY,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_TVBET_API_SECRET_KEY", $$v);
      },
      expression: "form.GAME_PROVIDERS_TVBET_API_SECRET_KEY"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Endpoint"),
      error: _vm.form.errors.has("GAME_PROVIDERS_TVBET_API_ENDPOINT"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_TVBET_API_ENDPOINT"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_TVBET_API_ENDPOINT");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_TVBET_API_ENDPOINT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_TVBET_API_ENDPOINT", $$v);
      },
      expression: "form.GAME_PROVIDERS_TVBET_API_ENDPOINT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Frame URL"),
      error: _vm.form.errors.has("GAME_PROVIDERS_TVBET_API_FRAME_URL"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_TVBET_API_FRAME_URL"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_TVBET_API_FRAME_URL");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_TVBET_API_FRAME_URL,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_TVBET_API_FRAME_URL", $$v);
      },
      expression: "form.GAME_PROVIDERS_TVBET_API_FRAME_URL"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ref: "tvbetCallbackUrl",
    attrs: {
      value: _vm.getCallbackUrl("tvbet"),
      label: _vm.$t("Callback URL"),
      "persistent-hint": true,
      hint: _vm.$t("The callback URL should be provided to TvBet support"),
      readonly: "",
      outlined: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.copyToClipboard(_vm.$refs.tvbetCallbackUrl.$el.querySelector("input"));
      }
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    staticClass: "mt-5",
    attrs: {
      label: _vm.$t("Currency"),
      rules: [_vm.validationRequired],
      error: _vm.form.errors.has("GAME_PROVIDERS_TVBET_CURRENCY_CODE"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_TVBET_CURRENCY_CODE"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_TVBET_CURRENCY_CODE");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_TVBET_CURRENCY_CODE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_TVBET_CURRENCY_CODE", $$v);
      },
      expression: "form.GAME_PROVIDERS_TVBET_CURRENCY_CODE"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Number of decimals"),
      rules: [_vm.validationNonNegativeInteger],
      error: _vm.form.errors.has("GAME_PROVIDERS_TVBET_CURRENCY_DECIMALS"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_TVBET_CURRENCY_DECIMALS"),
      "persistent-hint": true,
      hint: _vm.$t("Most fiat currencies have 2 decimals, most cryptocurrencies have 8 decimals."),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_TVBET_CURRENCY_DECIMALS");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_TVBET_CURRENCY_DECIMALS,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_TVBET_CURRENCY_DECIMALS", _vm._n($$v));
      },
      expression: "form.GAME_PROVIDERS_TVBET_CURRENCY_DECIMALS"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    staticClass: "mt-5",
    attrs: {
      label: _vm.$t("Conversion rate"),
      type: "text",
      disabled: !_vm.form.GAME_PROVIDERS_TVBET_CURRENCY_CODE,
      rules: [_vm.validationRequired, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_PROVIDERS_TVBET_CURRENCY_RATE"),
      "error-messages": _vm.form.errors.get("GAME_PROVIDERS_TVBET_CURRENCY_RATE"),
      prefix: _vm.form.GAME_PROVIDERS_TVBET_CURRENCY_CODE ? "1 " + _vm.form.GAME_PROVIDERS_TVBET_CURRENCY_CODE + " = " : "",
      suffix: _vm.$t("credits"),
      hint: _vm.$t("Amount of credits per 1 unit of the reference currency"),
      "persistent-hint": true,
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_PROVIDERS_TVBET_CURRENCY_RATE");
      }
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_TVBET_CURRENCY_RATE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_TVBET_CURRENCY_RATE", _vm._n($$v));
      },
      expression: "form.GAME_PROVIDERS_TVBET_CURRENCY_RATE"
    }
  }), _vm._v(" "), _c("file-upload", {
    staticClass: "mt-5",
    attrs: {
      label: _vm.$t("Games list"),
      name: "games",
      folder: "games/".concat(_vm.packageId, "/tvbet"),
      accept: ".json"
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_TVBET_GAMES_FILE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_TVBET_GAMES_FILE", $$v);
      },
      expression: "form.GAME_PROVIDERS_TVBET_GAMES_FILE"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Validate IP address in callbacks"),
      color: "primary",
      "false-value": "false",
      "true-value": "true"
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_TVBET_API_VALIDATE_IP,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_TVBET_API_VALIDATE_IP", $$v);
      },
      expression: "form.GAME_PROVIDERS_TVBET_API_VALIDATE_IP"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Test mode"),
      color: "primary",
      "false-value": "false",
      "true-value": "true"
    },
    model: {
      value: _vm.form.GAME_PROVIDERS_TVBET_API_IS_TEST,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_PROVIDERS_TVBET_API_IS_TEST", $$v);
      },
      expression: "form.GAME_PROVIDERS_TVBET_API_IS_TEST"
    }
  })], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/game-providers/resources/js/pages/admin/settings.vue?vue&type=template&id=7f0f1166&":
/*!******************************************************************************************************!*\
  !*** ./packages/game-providers/resources/js/pages/admin/settings.vue?vue&type=template&id=7f0f1166& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_7f0f1166___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_7f0f1166___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_7f0f1166___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=template&id=7f0f1166& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/game-providers/resources/js/pages/admin/settings.vue?vue&type=template&id=7f0f1166&");


/***/ })

}]);