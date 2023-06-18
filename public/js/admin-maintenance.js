"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin-maintenance"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/maintenance/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/maintenance/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_2__["default"]],
  middleware: ['auth', 'verified', '2fa_passed', 'admin'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Maintenance')
    };
  },
  data: function data() {
    return {
      data: {},
      maintenanceFormIsValid: null,
      maintenanceForm: new (vform__WEBPACK_IMPORTED_MODULE_1___default())(),
      commandFormIsValid: null,
      commandForm: new (vform__WEBPACK_IMPORTED_MODULE_1___default())({
        command: null,
        arguments: {}
      }),
      migrationForm: new (vform__WEBPACK_IMPORTED_MODULE_1___default())(),
      cacheForm: new (vform__WEBPACK_IMPORTED_MODULE_1___default())(),
      clearQueueForm: new (vform__WEBPACK_IMPORTED_MODULE_1___default())({
        queue: null
      }),
      stopQueueWorkerForm: new (vform__WEBPACK_IMPORTED_MODULE_1___default())()
    };
  },
  computed: {
    commands: function commands() {
      return this.data.commands ? this.data.commands.map(function (command) {
        return {
          value: command["class"],
          text: command.description
        };
      }) : [];
    },
    dataLoaded: function dataLoaded() {
      return this.data && Object.keys(this.data).length > 0;
    }
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _yield$axios$get, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/admin/maintenance');
          case 2:
            _yield$axios$get = _context.sent;
            data = _yield$axios$get.data;
            _this.data = data;
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    switchMaintenanceMode: function switchMaintenanceMode() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var action, _yield$_this2$mainten, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              action = _this2.data.maintenance_mode ? 'up' : 'down';
              _context2.next = 3;
              return _this2.maintenanceForm.post("/api/admin/maintenance/".concat(action));
            case 3:
              _yield$_this2$mainten = _context2.sent;
              data = _yield$_this2$mainten.data;
              _this2.data.maintenance_mode = !_this2.data.maintenance_mode;
              _this2.$store.dispatch('message/success', {
                text: data.message
              });
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    executeCommand: function executeCommand() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$_this3$command, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.commandForm.post('/api/admin/maintenance/command');
            case 2:
              _yield$_this3$command = _context3.sent;
              data = _yield$_this3$command.data;
              _this3.$store.dispatch('message/success', {
                text: data.message
              });
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    migrate: function migrate() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$_this4$migrati, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this4.migrationForm.post('/api/admin/maintenance/migrate');
            case 2:
              _yield$_this4$migrati = _context4.sent;
              data = _yield$_this4$migrati.data;
              _this4.$store.dispatch('message/success', {
                text: data.message
              });
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    clearCache: function clearCache() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _yield$_this5$cacheFo, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this5.cacheForm.post('/api/admin/maintenance/cache');
            case 2:
              _yield$_this5$cacheFo = _context5.sent;
              data = _yield$_this5$cacheFo.data;
              _this5.$store.dispatch('message/success', {
                text: data.message
              });
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    clearQueue: function clearQueue() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _yield$_this6$clearQu, data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this6.clearQueueForm.post('/api/admin/maintenance/queues/clear');
            case 2:
              _yield$_this6$clearQu = _context6.sent;
              data = _yield$_this6$clearQu.data;
              _this6.$store.dispatch('message/success', {
                text: data.message
              });
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    stopQueueWorker: function stopQueueWorker() {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _yield$_this7$stopQue, data;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _this7.stopQueueWorkerForm.post('/api/admin/maintenance/queues/stop');
            case 2:
              _yield$_this7$stopQue = _context7.sent;
              data = _yield$_this7$stopQue.data;
              _this7.$store.dispatch('message/success', {
                text: data.message
              });
            case 5:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    copyToClipboard: function copyToClipboard(ref) {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_3__.copyToClipboard)(ref.$el.querySelector('input'));
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/admin/maintenance/index.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/admin/maintenance/index.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_43206fbd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=43206fbd& */ "./resources/js/pages/admin/maintenance/index.vue?vue&type=template&id=43206fbd&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/maintenance/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_43206fbd___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_43206fbd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/maintenance/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/maintenance/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/admin/maintenance/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/maintenance/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/maintenance/index.vue?vue&type=template&id=43206fbd&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/maintenance/index.vue?vue&type=template&id=43206fbd& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/VSelect.js");
/* harmony import */ var vuetify_lib_components_VSkeletonLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VSkeletonLoader */ "./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/VToolbar.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");















var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      cols: "12"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_4__["default"], [_c(vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_5__.VToolbarTitle, [_vm._v("\n            " + _vm._s(_vm.$t("Maintenance")) + "\n          ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      outlined: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle, {
    staticClass: "font-weight-thin"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("System info")) + "\n                ")]), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_c(vuetify_lib_components_VSkeletonLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      type: "list-item-three-line",
      loading: !_vm.dataLoaded
    }
  }, [_c("div", _vm._l(_vm.data.system_info, function (item, i) {
    return _c("div", {
      key: i
    }, [_vm._v("\n                        " + _vm._s(item.title) + ": " + _vm._s(item.value) + "\n                      ")]);
  }), 0)])], 1)], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      outlined: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle, {
    staticClass: "font-weight-thin"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Application version")) + "\n                ")]), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_c(vuetify_lib_components_VSkeletonLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      type: "text",
      loading: !_vm.dataLoaded
    }
  }, [_vm.data.update_available ? _c("p", {
    staticClass: "warning--text mb-0"
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      color: "warning",
      left: ""
    }
  }, [_vm._v("\n                        mdi-alert\n                      ")]), _vm._v("\n                      " + _vm._s(_vm.$t("New version {0} is available ({1} currently installed).", [_vm.data.latest_version, _vm.data.current_version])) + "\n                      "), _c("a", {
    attrs: {
      href: "/admin/help/app#q10"
    }
  }, [_vm._v(_vm._s(_vm.$t("How to upgrade?")))])], 1) : _c("p", {
    staticClass: "success--text mb-0"
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      color: "success",
      left: ""
    }
  }, [_vm._v("\n                        mdi-check-all\n                      ")]), _vm._v("\n                      " + _vm._s(_vm.$t("Application is up-to-date (version {0} is installed).", [_vm.data.latest_version])) + "\n                    ")], 1)])], 1)], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      outlined: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle, {
    staticClass: "font-weight-thin"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Cron")) + "\n                ")]), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_c("p", [_vm._v("\n                    " + _vm._s(_vm.$t("Some application tasks should be run on a regular basis.")) + "\n                    " + _vm._s(_vm.$t("To automatically execute these tasks, add the following system cron job.")) + "\n                    " + _vm._s(_vm.$t("If you are adding a cron job via cPanel, you will need to omit the leading asterisk characters.")) + "\n                    " + _vm._s(_vm.$t("Please refer to the installation guide for more information on how to add a cron job.")) + "\n                  ")]), _vm._v(" "), _c(vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.cron.apply(null, arguments);
      }
    }
  }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    ref: "cron",
    attrs: {
      dense: "",
      outlined: "",
      readonly: "",
      "append-icon": "mdi-content-copy",
      value: _vm.data.cron_job,
      disabled: !_vm.dataLoaded
    },
    on: {
      "click:append": function clickAppend($event) {
        return _vm.copyToClipboard(_vm.$refs.cron);
      }
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      outlined: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle, {
    staticClass: "font-weight-thin"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Cache")) + "\n                ")]), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_c("p", [_vm._v("\n                    " + _vm._s(_vm.$t("The application caches templates, configuration, translation strings, aggregated data etc to improve performance.")) + "\n                    " + _vm._s(_vm.$t("To clear all caches at once click the button below.")) + "\n                  ")]), _vm._v(" "), _c(vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.clearCache.apply(null, arguments);
      }
    }
  }, [_c(vuetify_lib_components_VSkeletonLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      type: "button",
      loading: !_vm.dataLoaded
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attrs: {
      type: "submit",
      color: "primary",
      disabled: _vm.cacheForm.busy,
      loading: _vm.cacheForm.busy
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("Clear cache")) + "\n                      ")])], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      outlined: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle, {
    staticClass: "font-weight-thin"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Database")) + "\n                ")]), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_c("p", [_vm._v("\n                    " + _vm._s(_vm.$t("After upgrading to a new version of the application it is necessary to update the database objects.")) + "\n                    " + _vm._s(_vm.$t("All current data will be preserved.")) + "\n                  ")]), _vm._v(" "), _c(vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.migrate.apply(null, arguments);
      }
    }
  }, [_c(vuetify_lib_components_VSkeletonLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      type: "button",
      loading: !_vm.dataLoaded
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attrs: {
      type: "submit",
      color: "primary",
      disabled: _vm.migrationForm.busy,
      loading: _vm.migrationForm.busy
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("Update database")) + "\n                      ")])], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      outlined: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle, {
    staticClass: "font-weight-thin"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Tasks")) + "\n                ")]), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_c("p", [_vm._v("\n                    " + _vm._s(_vm.$t("The app provides a number of service tasks, which can be executed on demand.")) + "\n                  ")]), _vm._v(" "), _c(vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    staticClass: "mt-5",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.executeCommand.apply(null, arguments);
      }
    },
    model: {
      value: _vm.commandFormIsValid,
      callback: function callback($$v) {
        _vm.commandFormIsValid = $$v;
      },
      expression: "commandFormIsValid"
    }
  }, [_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_12__["default"], {
    attrs: {
      items: _vm.commands,
      label: _vm.$t("Task"),
      error: _vm.commandForm.errors.has("command"),
      "error-messages": _vm.commandForm.errors.get("command"),
      outlined: "",
      disabled: !_vm.data.commands
    },
    model: {
      value: _vm.commandForm.command,
      callback: function callback($$v) {
        _vm.$set(_vm.commandForm, "command", $$v);
      },
      expression: "commandForm.command"
    }
  }), _vm._v(" "), _vm.commandForm.command ? [_vm._l(_vm.data.commands, function (command) {
    return [command["class"] === _vm.commandForm.command ? _vm._l(command.arguments, function (arg, i) {
      return _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: i,
        attrs: {
          label: _vm.$t(arg.title),
          rules: [_vm.validationRequired],
          placeholder: arg["default"],
          error: _vm.commandForm.errors.has("arguments"),
          "error-messages": _vm.commandForm.errors.get("arguments"),
          outlined: ""
        },
        model: {
          value: _vm.commandForm.arguments[arg.id],
          callback: function callback($$v) {
            _vm.$set(_vm.commandForm.arguments, arg.id, $$v);
          },
          expression: "commandForm.arguments[arg.id]"
        }
      });
    }) : _vm._e()];
  })] : _vm._e(), _vm._v(" "), _c(vuetify_lib_components_VSkeletonLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      type: "button",
      loading: !_vm.dataLoaded
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attrs: {
      type: "submit",
      color: "primary",
      disabled: !_vm.commandForm.command || !_vm.commandFormIsValid || _vm.commandForm.busy,
      loading: _vm.commandForm.busy
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("Execute")) + "\n                      ")])], 1)], 2)], 1)], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      outlined: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle, {
    staticClass: "font-weight-thin"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Maintenance mode")) + "\n                ")]), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_c("p", [_vm._v("\n                    " + _vm._s(_vm.$t("You can enable maintenance mode while updating the application or performing other maintenance tasks so that no one except administrators can use the site.")) + "\n                  ")]), _vm._v(" "), _c(vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    staticClass: "mt-5",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.switchMaintenanceMode.apply(null, arguments);
      }
    },
    model: {
      value: _vm.maintenanceFormIsValid,
      callback: function callback($$v) {
        _vm.maintenanceFormIsValid = $$v;
      },
      expression: "maintenanceFormIsValid"
    }
  }, [_c(vuetify_lib_components_VSkeletonLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      type: "button",
      loading: !_vm.dataLoaded
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attrs: {
      type: "submit",
      color: "primary",
      disabled: !_vm.maintenanceFormIsValid || _vm.maintenanceForm.busy,
      loading: _vm.maintenanceForm.busy
    }
  }, [_vm.data.maintenance_mode ? [_vm._v("\n                          " + _vm._s(_vm.$t("Disable maintenance mode")) + "\n                        ")] : [_vm._v("\n                          " + _vm._s(_vm.$t("Enable maintenance mode")) + "\n                        ")]], 2)], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      outlined: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle, {
    staticClass: "font-weight-thin"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Queues")) + "\n                ")]), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attrs: {
      to: {
        name: "admin.maintenance.jobs.index"
      },
      color: "primary"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("Jobs")) + "\n                      ")]), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attrs: {
      to: {
        name: "admin.maintenance.failed-jobs.index"
      },
      color: "primary"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("Failed jobs")) + "\n                      ")])], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    staticClass: "mt-5",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.clearQueue.apply(null, arguments);
      }
    }
  }, [_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_12__["default"], {
    attrs: {
      items: _vm.data.queues,
      label: _vm.$t("Queue"),
      outlined: "",
      disabled: !_vm.data.queues,
      "hide-details": true
    },
    scopedSlots: _vm._u([{
      key: "append-outer",
      fn: function fn() {
        return [_c(vuetify_lib_components_VSkeletonLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {
          attrs: {
            type: "button",
            loading: !_vm.dataLoaded
          }
        }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
          attrs: {
            type: "submit",
            color: "primary",
            disabled: !_vm.clearQueueForm.queue || _vm.clearQueueForm.busy,
            loading: _vm.clearQueueForm.busy
          }
        }, [_vm._v("\n                            " + _vm._s(_vm.$t("Delete all jobs from the queue")) + "\n                          ")])], 1)];
      },
      proxy: true
    }]),
    model: {
      value: _vm.clearQueueForm.queue,
      callback: function callback($$v) {
        _vm.$set(_vm.clearQueueForm, "queue", $$v);
      },
      expression: "clearQueueForm.queue"
    }
  })], 1), _vm._v(" "), _c(vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    staticClass: "mt-5",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.stopQueueWorker.apply(null, arguments);
      }
    }
  }, [_c(vuetify_lib_components_VSkeletonLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      type: "button",
      loading: !_vm.dataLoaded
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attrs: {
      type: "submit",
      color: "primary",
      disabled: _vm.stopQueueWorkerForm.busy,
      loading: _vm.stopQueueWorkerForm.busy
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("Stop queue worker")) + "\n                      ")])], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      outlined: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle, {
    staticClass: "font-weight-thin"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Log files")) + "\n                ")]), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_c(vuetify_lib_components_VSkeletonLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      type: "button",
      loading: !_vm.dataLoaded
    }
  }, [_vm.data.log_files && _vm.data.log_files.length ? _c("div", _vm._l(_vm.data.log_files, function (file, i) {
    return _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: i,
      staticClass: "text-lowercase",
      attrs: {
        color: file.isWritable ? "primary" : "error",
        tile: "",
        text: "",
        to: {
          name: "admin.maintenance.logs.show",
          params: {
            file: file.name
          }
        }
      }
    }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
      attrs: {
        left: ""
      }
    }, [_vm._v("\n                          mdi-file\n                        ")]), _vm._v("\n                        " + _vm._s(file.name) + ".log\n                        (" + _vm._s(file.size) + " " + _vm._s(_vm.$t("MB")) + ")\n                        "), !file.isWritable ? _c("span", {
      staticClass: "text-uppercase"
    }, [_vm._v("\n                          " + _vm._s(_vm.$t("Permission error")) + "!\n                        ")]) : _vm._e()], 1);
  }), 1) : _c("div", [_vm._v("\n                      " + _vm._s(_vm.$t("There are no log files.")) + "\n                    ")])])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/admin/maintenance/index.vue?vue&type=template&id=43206fbd&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/admin/maintenance/index.vue?vue&type=template&id=43206fbd& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_43206fbd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_43206fbd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_43206fbd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=43206fbd& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/maintenance/index.vue?vue&type=template&id=43206fbd&");


/***/ })

}]);