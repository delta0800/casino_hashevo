"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/baccarat-resources-js-pages-admin-settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _components_Admin_FileUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/Admin/FileUpload */ "./resources/js/components/Admin/FileUpload.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    FileUpload: _components_Admin_FileUpload__WEBPACK_IMPORTED_MODULE_2__["default"]
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
        GAME_BACCARAT_CATEGORIES: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".categories")),
        GAME_BACCARAT_BANNER: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".banner")),
        GAME_BACCARAT_MIN_BET: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".min_bet")),
        GAME_BACCARAT_MAX_BET: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".max_bet")),
        GAME_BACCARAT_BET_CHANGE_AMOUNT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".bet_change_amount")),
        GAME_BACCARAT_DEFAULT_BET_AMOUNT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".default_bet_amount")),
        GAME_BACCARAT_PAYOUT_PLAYER: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".payouts.player")),
        GAME_BACCARAT_PAYOUT_TIE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".payouts.tie")),
        GAME_BACCARAT_PAYOUT_BANKER: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".payouts.banker")),
        GAME_BACCARAT_SOUNDS_WIN: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".sounds.win")),
        GAME_BACCARAT_SOUNDS_LOSE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".sounds.lose")),
        GAME_BACCARAT_SOUNDS_PUSH: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".sounds.push"))
      }
    };
  },
  created: function created() {
    this.$emit('input', this.variables);
  }
});

/***/ }),

/***/ "./packages/baccarat/resources/js/pages/admin/settings.vue":
/*!*****************************************************************!*\
  !*** ./packages/baccarat/resources/js/pages/admin/settings.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings_vue_vue_type_template_id_6e205b3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=6e205b3c& */ "./packages/baccarat/resources/js/pages/admin/settings.vue?vue&type=template&id=6e205b3c&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./packages/baccarat/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_vue_vue_type_template_id_6e205b3c___WEBPACK_IMPORTED_MODULE_0__.render,
  _settings_vue_vue_type_template_id_6e205b3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/baccarat/resources/js/pages/admin/settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/baccarat/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./packages/baccarat/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/admin/settings.vue?vue&type=template&id=6e205b3c&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/admin/settings.vue?vue&type=template&id=6e205b3c& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCombobox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCombobox */ "./node_modules/vuetify/lib/components/VCombobox/VCombobox.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");









var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      flat: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardText, [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("General")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VCombobox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Categories"),
      multiple: "",
      outlined: "",
      chips: "",
      "small-chips": "",
      "deletable-chips": "",
      "hide-selected": "",
      "no-filter": ""
    },
    model: {
      value: _vm.form.GAME_BACCARAT_CATEGORIES,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_BACCARAT_CATEGORIES", $$v);
      },
      expression: "form.GAME_BACCARAT_CATEGORIES"
    }
  }), _vm._v(" "), _c("file-upload", {
    attrs: {
      label: _vm.$t("Banner"),
      name: "banner",
      folder: "games/".concat(_vm.packageId)
    },
    model: {
      value: _vm.form.GAME_BACCARAT_BANNER,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_BACCARAT_BANNER", $$v);
      },
      expression: "form.GAME_BACCARAT_BANNER"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Min bet"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_BACCARAT_MIN_BET"),
      "error-messages": _vm.form.errors.get("GAME_BACCARAT_MIN_BET"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_BACCARAT_MIN_BET");
      }
    },
    model: {
      value: _vm.form.GAME_BACCARAT_MIN_BET,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_BACCARAT_MIN_BET", _vm._n($$v));
      },
      expression: "form.GAME_BACCARAT_MIN_BET"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Max bet"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_BACCARAT_MAX_BET"),
      "error-messages": _vm.form.errors.get("GAME_BACCARAT_MAX_BET"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_BACCARAT_MAX_BET");
      }
    },
    model: {
      value: _vm.form.GAME_BACCARAT_MAX_BET,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_BACCARAT_MAX_BET", _vm._n($$v));
      },
      expression: "form.GAME_BACCARAT_MAX_BET"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Bet increment / decrement amount"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_BACCARAT_BET_CHANGE_AMOUNT"),
      "error-messages": _vm.form.errors.get("GAME_BACCARAT_BET_CHANGE_AMOUNT"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_BACCARAT_BET_CHANGE_AMOUNT");
      }
    },
    model: {
      value: _vm.form.GAME_BACCARAT_BET_CHANGE_AMOUNT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_BACCARAT_BET_CHANGE_AMOUNT", _vm._n($$v));
      },
      expression: "form.GAME_BACCARAT_BET_CHANGE_AMOUNT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Default bet amount"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_BACCARAT_DEFAULT_BET_AMOUNT"),
      "error-messages": _vm.form.errors.get("GAME_BACCARAT_DEFAULT_BET_AMOUNT"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_BACCARAT_DEFAULT_BET_AMOUNT");
      }
    },
    model: {
      value: _vm.form.GAME_BACCARAT_DEFAULT_BET_AMOUNT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_BACCARAT_DEFAULT_BET_AMOUNT", _vm._n($$v));
      },
      expression: "form.GAME_BACCARAT_DEFAULT_BET_AMOUNT"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Paytable")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Player bet"),
      rules: [_vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_BACCARAT_PAYOUT_PLAYER"),
      "error-messages": _vm.form.errors.get("GAME_BACCARAT_PAYOUT_PLAYER"),
      outlined: "",
      prefix: _vm.$t("Bet") + " x "
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_BACCARAT_PAYOUT_PLAYER");
      }
    },
    model: {
      value: _vm.form.GAME_BACCARAT_PAYOUT_PLAYER,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_BACCARAT_PAYOUT_PLAYER", _vm._n($$v));
      },
      expression: "form.GAME_BACCARAT_PAYOUT_PLAYER"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Tie bet"),
      rules: [_vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_BACCARAT_PAYOUT_TIE"),
      "error-messages": _vm.form.errors.get("GAME_BACCARAT_PAYOUT_TIE"),
      outlined: "",
      prefix: _vm.$t("Bet") + " x "
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_BACCARAT_PAYOUT_TIE");
      }
    },
    model: {
      value: _vm.form.GAME_BACCARAT_PAYOUT_TIE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_BACCARAT_PAYOUT_TIE", _vm._n($$v));
      },
      expression: "form.GAME_BACCARAT_PAYOUT_TIE"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Banker bet"),
      rules: [_vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_BACCARAT_PAYOUT_BANKER"),
      "error-messages": _vm.form.errors.get("GAME_BACCARAT_PAYOUT_BANKER"),
      outlined: "",
      prefix: _vm.$t("Bet") + " x "
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_BACCARAT_PAYOUT_BANKER");
      }
    },
    model: {
      value: _vm.form.GAME_BACCARAT_PAYOUT_BANKER,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_BACCARAT_PAYOUT_BANKER", _vm._n($$v));
      },
      expression: "form.GAME_BACCARAT_PAYOUT_BANKER"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Sounds")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c("file-upload", {
    attrs: {
      label: _vm.$t("Win"),
      name: "win",
      folder: "games/".concat(_vm.packageId),
      accept: ".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac",
      clearable: true
    },
    model: {
      value: _vm.form.GAME_BACCARAT_SOUNDS_WIN,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_BACCARAT_SOUNDS_WIN", $$v);
      },
      expression: "form.GAME_BACCARAT_SOUNDS_WIN"
    }
  }), _vm._v(" "), _c("file-upload", {
    attrs: {
      label: _vm.$t("Lose"),
      name: "lose",
      folder: "games/".concat(_vm.packageId),
      accept: ".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac",
      clearable: true
    },
    model: {
      value: _vm.form.GAME_BACCARAT_SOUNDS_LOSE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_BACCARAT_SOUNDS_LOSE", $$v);
      },
      expression: "form.GAME_BACCARAT_SOUNDS_LOSE"
    }
  }), _vm._v(" "), _c("file-upload", {
    attrs: {
      label: _vm.$t("Push"),
      name: "lose",
      folder: "games/".concat(_vm.packageId),
      accept: ".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac",
      clearable: true
    },
    model: {
      value: _vm.form.GAME_BACCARAT_SOUNDS_PUSH,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_BACCARAT_SOUNDS_PUSH", $$v);
      },
      expression: "form.GAME_BACCARAT_SOUNDS_PUSH"
    }
  })], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/baccarat/resources/js/pages/admin/settings.vue?vue&type=template&id=6e205b3c&":
/*!************************************************************************************************!*\
  !*** ./packages/baccarat/resources/js/pages/admin/settings.vue?vue&type=template&id=6e205b3c& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_6e205b3c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_6e205b3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_6e205b3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=template&id=6e205b3c& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/admin/settings.vue?vue&type=template&id=6e205b3c&");


/***/ })

}]);