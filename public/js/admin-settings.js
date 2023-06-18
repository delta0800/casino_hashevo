(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin-settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/EntityParameters.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/EntityParameters.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'EntityParameters',
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      parameterName: '',
      parameters: this.value
    };
  },
  computed: {
    parameterTypes: function parameterTypes() {
      return ['input', 'textarea', 'switch'];
    }
  },
  methods: {
    addParameter: function addParameter() {
      var id = this.parameterName.replace(/\s/g, '_').toLowerCase();
      if (this.parameterName === '') {
        return false;
      }
      var parameter = {
        id: id,
        type: 'input',
        name: this.parameterName,
        description: '',
        validation: '',
        "default": ''
      };
      this.parameters.push(parameter);
      this.parameterName = '';
    },
    removeParameter: function removeParameter(index) {
      this.parameters.splice(index, 1);
    },
    change: function change(event) {
      this.$emit('input', this.parameters);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/FileEditor.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/FileEditor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_2__["default"]],
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      "default": ''
    },
    buttonLabel: {
      type: String,
      required: false,
      "default": ''
    }
  },
  data: function data() {
    return {
      form: new (vform__WEBPACK_IMPORTED_MODULE_1___default())({
        content: null
      })
    };
  },
  created: function created() {
    this.fetchContent();
  },
  methods: {
    fetchContent: function fetchContent() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$axios$get, html;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/pages/".concat(_this.name));
            case 2:
              _yield$axios$get = _context.sent;
              html = _yield$axios$get.data.html;
              _this.form.content = html;
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    update: function update() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$_this2$form$pa, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.form.patch("/api/admin/files/".concat(_this2.name));
            case 2:
              _yield$_this2$form$pa = _context2.sent;
              data = _yield$_this2$form$pa.data;
              _this2.$store.dispatch('message/' + (data.success ? 'success' : 'error'), {
                text: data.message
              });
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/FileUpload.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/FileUpload.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugins_objectToFormData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/plugins/objectToFormData */ "./resources/js/plugins/objectToFormData.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      validator: function validator(value) {
        return typeof value === 'string' || value === null || typeof value === 'undefined';
      },
      required: true
    },
    accept: {
      type: String,
      required: false,
      "default": 'image/*'
    },
    name: {
      type: String,
      required: true
    },
    folder: {
      type: String,
      required: true
    },
    clearable: {
      type: Boolean,
      required: false,
      "default": false
    },
    disabled: {
      type: Boolean,
      required: false,
      "default": false
    }
  },
  data: function data() {
    return {
      error: null,
      imageBase64: null,
      form: new (vform__WEBPACK_IMPORTED_MODULE_0___default())({
        file: null,
        name: this.name,
        folder: this.folder
      }),
      uploadedFilePath: null
    };
  },
  computed: {
    path: function path() {
      return this.form.busy ? this.$t('Uploading...') : !this.uploadedFilePath && !this.value || this.uploadedFilePath === '' ? this.$t('Upload a file') : this.uploadedFilePath || this.displayValue;
    },
    preview: function preview() {
      return this.imageBase64 || this.displayValue;
    },
    displayValue: function displayValue() {
      return this.value && !this.value.match(/\//) ? "/storage/".concat(this.folder, "/").concat(this.value) : this.value;
    },
    isImage: function isImage() {
      // const extension = (this.uploadedFilePath || this.displayValue).split('/').pop().toLowerCase()
      var file = this.uploadedFilePath || this.displayValue;
      var extension = file && file.substring(file.lastIndexOf('.') + 1);
      return ['png', 'gif', 'jpg', 'jpeg', 'svg', 'tiff'].indexOf(extension) > -1;
    }
  },
  watch: {
    uploadedFilePath: function uploadedFilePath(_uploadedFilePath) {
      this.$emit('input', _uploadedFilePath);
    }
  },
  methods: {
    clear: function clear() {
      this.uploadedFilePath = '';
      this.imageBase64 = null;
    },
    uploadFile: function uploadFile(event) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var imageBase64, reader, options, _yield$_this$form$sub, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.error = null;
              _this.form.file = event.target.files[0];
              if (!_this.form.file) {
                _context.next = 12;
                break;
              }
              reader = new FileReader(); // define a callback function to run, when FileReader finishes its job
              reader.onload = function (e) {
                imageBase64 = e.target.result;
              };
              // Start the reader job - read file as a data url (base64 format)
              reader.readAsDataURL(_this.form.file);
              options = {
                transformRequest: [function (data, headers) {
                  return (0,_plugins_objectToFormData__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
                }]
              };
              _context.next = 9;
              return _this.form.submit('post', '/api/admin/files', options);
            case 9:
              _yield$_this$form$sub = _context.sent;
              data = _yield$_this$form$sub.data;
              if (data.success) {
                _this.uploadedFilePath = data.path;
                _this.imageBase64 = imageBase64;
              } else {
                _this.error = data.message;
              }
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ColorPicker.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ColorPicker.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ColorPicker',
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    textFieldClass: {
      type: String,
      required: false,
      "default": ''
    }
  },
  data: function data() {
    return {
      menu: false,
      color: this.value
    };
  },
  computed: {
    cssVars: function cssVars() {
      return {
        '--input-color': (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_0__.isColorBright)(this.color) ? '#000000' : '#FFFFFF'
      };
    }
  },
  methods: {
    input: function input(color) {
      this.color = color;
      this.$emit('input', color);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/settings/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/settings/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");
/* harmony import */ var _components_ColorPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/ColorPicker */ "./resources/js/components/ColorPicker.vue");
/* harmony import */ var _components_Admin_FileUpload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/Admin/FileUpload */ "./resources/js/components/Admin/FileUpload.vue");
/* harmony import */ var _components_Admin_FileEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/Admin/FileEditor */ "./resources/js/components/Admin/FileEditor.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Backgrounds_Stars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Backgrounds/Stars */ "./resources/js/components/Backgrounds/Stars.vue");
/* harmony import */ var _components_Admin_EntityParameters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/components/Admin/EntityParameters */ "./resources/js/components/Admin/EntityParameters.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  middleware: ['auth', 'verified', '2fa_passed', 'admin', 'config'],
  components: {
    EntityParameters: _components_Admin_EntityParameters__WEBPACK_IMPORTED_MODULE_9__["default"],
    Stars: _components_Backgrounds_Stars__WEBPACK_IMPORTED_MODULE_8__["default"],
    FileEditor: _components_Admin_FileEditor__WEBPACK_IMPORTED_MODULE_6__["default"],
    FileUpload: _components_Admin_FileUpload__WEBPACK_IMPORTED_MODULE_5__["default"],
    ColorPicker: _components_ColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_1__["default"]],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Settings')
    };
  },
  data: function data() {
    var chatRainUserId = parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bonuses.rain.user'), 10);
    return {
      assetSeederButtonDisabled: false,
      colorPickers: [false, false, false, false, false, false, false, false],
      form: new (vform__WEBPACK_IMPORTED_MODULE_0___default())(_objectSpread(_objectSpread({
        // ...Object.keys(this.envMap).reduce((o, key) => ({ ...o, [key]: config(this.envMap[key]) }), {}),
        // ...{ APP_NAME: 'app.name' },
        APP_NAME: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('app.name'),
        APP_URL: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('app.url') || (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_3__.baseUrl)(),
        LOCALE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('app.default_locale'),
        THEME_MODE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.theme.mode'),
        THEME_COLOR_PRIMARY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.theme.colors.primary'),
        // $t('Primary color')
        THEME_COLOR_SECONDARY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.theme.colors.secondary'),
        // $t('Secondary color')
        THEME_COLOR_ACCENT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.theme.colors.accent'),
        // $t('Accent color')
        THEME_COLOR_ERROR: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.theme.colors.error'),
        // $t('Error color')
        THEME_COLOR_INFO: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.theme.colors.info'),
        // $t('Info color')
        THEME_COLOR_SUCCESS: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.theme.colors.success'),
        // $t('Success color')
        THEME_COLOR_WARNING: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.theme.colors.warning'),
        // $t('Warning color')
        THEME_COLOR_ANCHOR: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.theme.colors.anchor'),
        // $t('Anchor color')
        THEME_BACKGROUND_APP_BAR: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.theme.backgrounds.app_bar'),
        // $t('App bar background')
        THEME_BACKGROUND_SYSTEM_BAR: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.theme.backgrounds.system_bar'),
        // $t('System bar background')
        THEME_BACKGROUND_PAGE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.theme.backgrounds.page'),
        // $t('Page background')
        THEME_BACKGROUND_NAV_BAR: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.theme.backgrounds.nav_bar'),
        // $t('Nav bar background')
        THEME_BACKGROUND_FOOTER: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.theme.backgrounds.footer'),
        // $t('Footer background')
        THEME_BACKGROUND: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.theme.background'),
        THEME_FONT_BODY_URL: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.theme.fonts.body.url'),
        THEME_FONT_BODY_FAMILY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.theme.fonts.body.family'),
        THEME_FONT_HEADING_URL: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.theme.fonts.heading.url'),
        THEME_FONT_HEADING_FAMILY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.theme.fonts.heading.family'),
        CONTENT_HOME_SLIDER: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.content.home.slider'),
        CONTENT_HOME_GAMES_DISPLAY_STYLE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.content.home.games.display_style'),
        CONTENT_HOME_GAMES_DISPLAY_COUNT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.content.home.games.display_count'),
        CONTENT_HOME_GAMES_LOAD_COUNT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.content.home.games.load_count'),
        CONTENT_HOME_PROVIDER_GAMES_DISPLAY_STYLE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.content.home.provider_games.display_style'),
        CONTENT_HOME_PROVIDER_GAMES_DISPLAY_COUNT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.content.home.provider_games.display_count'),
        CONTENT_HOME_PROVIDER_GAMES_LOAD_COUNT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.content.home.provider_games.load_count'),
        CONTENT_HOME_PROVIDER_GAMES_FEATURED_CATEGORIES: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.content.home.provider_games.featured_categories'),
        CONTENT_HOME_RAFFLES_DISPLAY_STYLE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.content.home.raffles.display_style'),
        CONTENT_SOCIAL: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.content.social'),
        CONTENT_LEADERBOARD_ENABLED: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.content.leaderboard.enabled'),
        CONTENT_FOOTER_MENU: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.content.footer.menu'),
        BOTS_GAMES_FREQUENCY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bots.games.frequency'),
        BOTS_GAMES_MIN_COUNT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bots.games.min_count'),
        BOTS_GAMES_MAX_COUNT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bots.games.max_count'),
        BOTS_GAMES_MIN_BET: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bots.games.min_bet'),
        BOTS_GAMES_MAX_BET: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bots.games.max_bet'),
        INTERFACE_CREDITS_ICON: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.interface.credits_icon'),
        INTERFACE_NAVBAR_VISIBLE: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.interface.navbar.visible'),
        INTERFACE_ONLINE_ENABLED: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.interface.online.enabled'),
        INTERFACE_SOUND_ENABLED_BY_DEFAULT: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.interface.sound.enabled_by_default'),
        INTERFACE_GAME_FEED_ENABLED: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.interface.game_feed.enabled'),
        INTERFACE_GAME_FEED_ENABLED_BY_DEFAULT: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.interface.game_feed.enabled_by_default'),
        INTERFACE_SYSTEM_BAR_ENABLED: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.interface.system_bar.enabled'),
        CHAT_ENABLED: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.interface.chat.enabled'),
        CHAT_MESSAGE_MAX_LENGTH: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.interface.chat.message_max_length'),
        TIPS_ENABLED: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.tips.enabled'),
        TIPS_MAX_AMOUNT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.tips.max_amount'),
        TIPS_INTERVAL: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.tips.interval'),
        BONUSES_SIGN_UP: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bonuses.sign_up'), 10),
        BONUSES_EMAIL_VERIFICATION: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bonuses.email_verification'), 10),
        BONUSES_FAUCET_AMOUNT: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bonuses.faucet.amount'), 10),
        BONUSES_FAUCET_INTERVAL: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bonuses.faucet.interval'), 10),
        BONUSES_RAIN_FREQUENCY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bonuses.rain.frequency'),
        BONUSES_RAIN_USER: chatRainUserId,
        BONUSES_RAIN_AMOUNTS: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bonuses.rain.amounts'),
        BONUSES_DEPOSIT_FIRST_PCT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bonuses.deposit.first.pct'),
        BONUSES_DEPOSIT_FIRST_THRESHOLD: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bonuses.deposit.first.threshold'),
        BONUSES_DEPOSIT_FIRST_MAX: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bonuses.deposit.first.max'),
        BONUSES_DEPOSIT_PCT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bonuses.deposit.regular.pct'),
        BONUSES_DEPOSIT_THRESHOLD: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bonuses.deposit.regular.threshold'),
        BONUSES_DEPOSIT_MAX: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bonuses.deposit.regular.max'),
        BONUSES_DEPOSIT_BONUS_ROUNDS_THRESHOLD: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bonuses.deposit.bonus_rounds.threshold'),
        BONUSES_DEPOSIT_BONUS_ROUNDS_PROVIDER: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bonuses.deposit.bonus_rounds.provider'),
        BONUSES_DEPOSIT_BONUS_ROUNDS_GAME_ID: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bonuses.deposit.bonus_rounds.game_id'),
        BONUSES_DEPOSIT_BONUS_ROUNDS_COUNT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bonuses.deposit.bonus_rounds.count'),
        BONUSES_DEPOSIT_BONUS_ROUNDS_BET: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.bonuses.deposit.bonus_rounds.bet'),
        AFFILIATE_AUTO_APPROVAL_FREQUENCY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.affiliate.auto_approval_frequency'),
        AFFILIATE_HASH_USER_ID: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.affiliate.hash_user_id'),
        AFFILIATE_ALLOW_SAME_IP: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.affiliate.allow_same_ip'),
        AFFILIATE_COMMISSIONS_SIGN_UP: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.affiliate.commissions.sign_up.rates'),
        AFFILIATE_COMMISSIONS_GAME_LOSS: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.affiliate.commissions.game_loss.rates'),
        AFFILIATE_COMMISSIONS_GAME_WIN: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.affiliate.commissions.game_win.rates'),
        AFFILIATE_COMMISSIONS_RAFFLE_TICKET: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.affiliate.commissions.raffle_ticket.rates'),
        AFFILIATE_COMMISSIONS_DEPOSIT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.affiliate.commissions.deposit.rates'),
        SESSION_LIFETIME: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('session.lifetime'), 10),
        EMAIL_VERIFICATION: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.users.email_verification'),
        USERS_CREATE_RANDOM_AVATAR: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.users.create_random_avatar'),
        USERS_FIELDS: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.users.fields'),
        GTM_CONTAINER_ID: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('services.gtm.container_id'),
        RECAPTCHA_PUBLIC_KEY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('services.recaptcha.public_key'),
        RECAPTCHA_SECRET_KEY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('services.recaptcha.secret_key'),
        BROADCAST_DRIVER: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('broadcasting.default') || 'null',
        PUSHER_APP_ID: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('broadcasting.connections.pusher.app_id'),
        PUSHER_APP_KEY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('broadcasting.connections.pusher.key'),
        PUSHER_APP_SECRET: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('broadcasting.connections.pusher.secret'),
        PUSHER_APP_CLUSTER: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('broadcasting.connections.pusher.options.cluster'),
        QUEUE_CONNECTION: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('queue.default'),
        REDIS_URL: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('database.redis.default.url'),
        REDIS_HOST: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('database.redis.default.host'),
        REDIS_PORT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('database.redis.default.port'),
        REDIS_DB: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('database.redis.default.database'),
        REDIS_PASSWORD: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('database.redis.default.password'),
        API_CRYPTO_PROVIDER: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('services.api.crypto.provider'),
        API_CRYPTO_PROVIDERS_COINCAP_API_KEY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('services.api.crypto.providers.coincap.api_key'),
        API_CRYPTO_PROVIDERS_CRYPTOCOMPARE_API_KEY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('services.api.crypto.providers.cryptocompare.api_key'),
        FORMAT_NUMBER_DECIMAL_SEPARATOR: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.format.number.decimal_separator'), 10),
        FORMAT_NUMBER_THOUSANDS_SEPARATOR: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.format.number.thousands_separator'), 10),
        APP_DEBUG: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('app.debug'),
        APP_LOGO: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('app.logo'),
        GAMES_PLAYING_CARDS_DECK: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.games.playing_cards.deck'),
        GAMES_PLAYING_CARDS_FRONT_IMAGE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.games.playing_cards.front_image'),
        GAMES_PLAYING_CARDS_BACK_IMAGE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.games.playing_cards.back_image'),
        LOG_CHANNEL: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('logging.default'),
        LOG_LEVEL: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)("logging.channels.".concat((0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('logging.default'), ".level")),
        APP_LOG_DAYS: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('logging.channels.daily.days'), 10),
        MAIL_MAILER: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('mail.default'),
        MAIL_HOST: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('mail.mailers.smtp.host'),
        MAIL_PORT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('mail.mailers.smtp.port'),
        MAIL_FROM_ADDRESS: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('mail.from.address'),
        MAIL_FROM_NAME: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('mail.from.name'),
        MAIL_ENCRYPTION: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('mail.mailers.smtp.encryption'),
        MAIL_USERNAME: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('mail.mailers.smtp.username'),
        MAIL_PASSWORD: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('mail.mailers.smtp.password'),
        NOTIFICATIONS_ADMIN_EMAIL: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.notifications.admin.email'),
        NOTIFICATIONS_ADMIN_REGISTRATION_ENABLED: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.notifications.admin.registration.enabled'),
        NOTIFICATIONS_ADMIN_GAME_WIN_ENABLED: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.notifications.admin.game.win.enabled'),
        NOTIFICATIONS_ADMIN_GAME_WIN_TRESHOLD: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.notifications.admin.game.win.treshold'), 10),
        NOTIFICATIONS_ADMIN_GAME_LOSS_ENABLED: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.notifications.admin.game.loss.enabled'),
        NOTIFICATIONS_ADMIN_GAME_LOSS_TRESHOLD: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.notifications.admin.game.loss.treshold'), 10)
      }, Object.keys((0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('oauth')).reduce(function (o, provider) {
        o[provider.toUpperCase() + '_CLIENT_ID'] = (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)("oauth.".concat(provider, ".client_id"));
        o[provider.toUpperCase() + '_CLIENT_SECRET'] = (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)("oauth.".concat(provider, ".client_secret"));
        return o;
      }, {})), Object.keys((0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('auth.web3')).reduce(function (o, provider) {
        o["AUTH_WEB3_".concat(provider.toUpperCase(), "_ENABLED")] = '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)("auth.web3.".concat(provider, ".enabled"));
        return o;
      }, {}))),
      packageComponents: {},
      users: chatRainUserId ? [{
        id: chatRainUserId,
        name: '' + chatRainUserId
      }] : [],
      userSearchInProgress: false,
      userSearchString: null
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_10__.mapState)('lang', ['locale', 'locales'])), (0,vuex__WEBPACK_IMPORTED_MODULE_10__.mapState)('package-manager', ['packages'])), (0,vuex__WEBPACK_IMPORTED_MODULE_10__.mapGetters)({
    gameProvidersPackageIsEnabled: 'package-manager/gameProvidersIsEnabled',
    paymentsPackageIsEnabled: 'package-manager/paymentsIsEnabled',
    rafflePackageIsEnabled: 'package-manager/raffleIsEnabled'
  })), {}, {
    animatedBackgrounds: function animatedBackgrounds() {
      return [{
        value: 'Circles',
        text: this.$t('Circles')
      }, {
        value: 'Squares',
        text: this.$t('Squares')
      }, {
        value: 'Stars',
        text: this.$t('Stars')
      }, {
        value: null,
        text: this.$t('None')
      }];
    },
    backgrounds: function backgrounds() {
      return Object.keys(this.form).filter(function (v) {
        return v.startsWith('THEME_BACKGROUND_');
      });
    },
    colors: function colors() {
      return Object.keys(this.form).filter(function (v) {
        return v.startsWith('THEME_COLOR_');
      });
    },
    commissionsApprovalFrequencies: function commissionsApprovalFrequencies() {
      return [{
        value: 'daily',
        text: this.$t('Every day at 00:00')
      }, {
        value: 'weekly',
        text: this.$t('Every week on Monday at 00:00')
      }, {
        value: 'monthly',
        text: this.$t('Every first day of month at 00:00')
      }, {
        value: 'never',
        text: this.$t('Never')
      }];
    },
    cryptoApiProviders: function cryptoApiProviders() {
      return Object.keys((0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('services.api.crypto.providers'));
    },
    decks: function decks() {
      var decks = ((0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('settings.games.playing_cards.decks') || []).map(function (deck) {
        return {
          value: deck,
          text: (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_3__.ucfirst)(deck)
        };
      });
      decks.push({
        value: '',
        text: this.$t('Symbols')
      });
      return decks;
    },
    frequencies: function frequencies() {
      return [{
        value: 'everyMinute',
        text: this.$t('Every minute')
      }, {
        value: 'everyFiveMinutes',
        text: this.$t('Every five minutes')
      }, {
        value: 'everyTenMinutes',
        text: this.$t('Every ten minutes')
      }, {
        value: 'everyFifteenMinutes',
        text: this.$t('Every fifteen minutes')
      }, {
        value: 'everyThirtyMinutes',
        text: this.$t('Every thirty minutes')
      }, {
        value: 'hourly',
        text: this.$t('Every hour')
      }, {
        value: '',
        text: this.$t('Never')
      }];
    },
    gameDisplayStyles: function gameDisplayStyles() {
      return [{
        value: 'block',
        text: this.$t('Block')
      }, {
        value: 'block2',
        text: this.$t('Block 2')
      }, {
        value: 'card',
        text: this.$t('Card')
      }];
    },
    raffleDisplayStyles: function raffleDisplayStyles() {
      return [{
        value: 'card',
        text: this.$t('Card')
      }, {
        value: 'card2',
        text: this.$t('Card 2')
      }, {
        value: 'card3',
        text: this.$t('Card 3')
      }];
    },
    chatRainFrequencies: function chatRainFrequencies() {
      return [{
        value: 'everyFifteenMinutes',
        text: this.$t('Every fifteen minutes')
      }, {
        value: 'everyThirtyMinutes',
        text: this.$t('Every thirty minutes')
      }, {
        value: 'hourly',
        text: this.$t('Every hour')
      }, {
        value: 'everyTwoHours',
        text: this.$t('Every two hours')
      }, {
        value: 'everyThreeHours',
        text: this.$t('Every three hours')
      }, {
        value: 'everyFourHours',
        text: this.$t('Every four hours')
      }, {
        value: 'everySixHours',
        text: this.$t('Every six hours')
      }, {
        value: 'daily',
        text: this.$t('Every day')
      }, {
        value: 'weekly',
        text: this.$t('Every week')
      }, {
        value: 'monthly',
        text: this.$t('Every month')
      }, {
        value: '',
        text: this.$t('Never')
      }];
    },
    logLevels: function logLevels() {
      return ['debug', 'info', 'notice', 'warning', 'error', 'critical', 'alert', 'emergency'];
    },
    logChannels: function logChannels() {
      return ['single', 'daily'];
    },
    mailDrivers: function mailDrivers() {
      return [{
        value: 'smtp',
        text: this.$t('SMTP')
      }, {
        value: 'sendmail',
        text: this.$t('SendMail')
      }];
    },
    modes: function modes() {
      return [{
        value: 'light',
        text: this.$t('Light')
      }, {
        value: 'dark',
        text: this.$t('Dark')
      }];
    },
    providers: function providers() {
      return Object.keys((0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('oauth'));
    },
    web3AuthProviders: function web3AuthProviders() {
      return Object.keys((0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('auth.web3'));
    },
    pusherEnabled: function pusherEnabled() {
      return this.form.PUSHER_APP_ID && this.form.PUSHER_APP_KEY && this.form.PUSHER_APP_SECRET && this.form.PUSHER_APP_CLUSTER;
    },
    queueDrivers: function queueDrivers() {
      return [{
        value: 'database',
        text: this.$t('Database')
      }, {
        value: 'redis',
        text: this.$t('Redis')
      }];
    },
    separators: function separators() {
      var _this = this;
      return ['.', ',', ' ', '-', ':', ';'].map(function (v) {
        return {
          value: v.charCodeAt(0),
          text: v === ' ' ? _this.$t('Space') : v
        };
      });
    },
    featuredCategoriesCount: function featuredCategoriesCount() {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_3__.get)(this.form, 'CONTENT_HOME_PROVIDER_GAMES_FEATURED_CATEGORIES', []).length;
    }
  }),
  watch: {
    userSearchString: function userSearchString(search) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$axios$post, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!_this2.userSearchInProgress) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              _this2.userSearchInProgress = true;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_7___default().post('/api/admin/users/search', {
                search: search
              });
            case 5:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;
              _this2.users = data;
              _this2.userSearchInProgress = false;
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    var _this3 = this;
    // Object.keys(this.envMap).forEach(key => {
    //   this.$set(this.form, key, config(this.envMap[key]))
    // })

    // this.form = { ...this.form, ...Object.keys(this.envMap).reduce((o, key) => ({ ...o, [key]: config(this.envMap[key]) }), {}) }

    Object.keys(this.packages).forEach( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(packageId) {
        var module;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return __webpack_require__("./packages lazy recursive ^\\.\\/.*\\/resources\\/js\\/pages\\/admin\\/settings$")("./".concat(packageId, "/resources/js/pages/admin/settings"));
            case 3:
              module = _context2.sent;
              _this3.$set(_this3.packageComponents, packageId, module["default"]);
              _context2.next = 9;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 7]]);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  },
  methods: {
    config: _plugins_config__WEBPACK_IMPORTED_MODULE_2__.config,
    addSlide: function addSlide() {
      this.form.CONTENT_HOME_SLIDER.slides.push({
        title: '',
        subtitle: '',
        image: {
          url: ''
        },
        link: {
          title: '',
          url: ''
        }
      });
    },
    deleteSlide: function deleteSlide(i) {
      this.form.CONTENT_HOME_SLIDER.slides.splice(i, 1);
    },
    addFeaturedCategory: function addFeaturedCategory() {
      this.form.CONTENT_HOME_PROVIDER_GAMES_FEATURED_CATEGORIES.push({
        title: 'Title',
        icon: 'mdi-cards-spade',
        categories: []
      });
    },
    moveFeaturedCategoryUp: function moveFeaturedCategoryUp(i) {
      (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_3__.moveArrayElement)(this.form.CONTENT_HOME_PROVIDER_GAMES_FEATURED_CATEGORIES, i, i - 1);
    },
    moveFeaturedCategoryDown: function moveFeaturedCategoryDown(i) {
      (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_3__.moveArrayElement)(this.form.CONTENT_HOME_PROVIDER_GAMES_FEATURED_CATEGORIES, i, i + 1);
    },
    deleteFeaturedCategory: function deleteFeaturedCategory(i) {
      this.form.CONTENT_HOME_PROVIDER_GAMES_FEATURED_CATEGORIES.splice(i, 1);
    },
    addRainPayout: function addRainPayout() {
      this.form.BONUSES_RAIN_AMOUNTS.push(this.form.BONUSES_RAIN_AMOUNTS[0]);
    },
    deleteRainPayout: function deleteRainPayout(i) {
      this.form.BONUSES_RAIN_AMOUNTS.splice(i, 1);
    },
    ucfirst: function ucfirst(string) {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_3__.ucfirst)(string);
    },
    copyToClipboard: function copyToClipboard(ref) {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_3__.copyToClipboard)(ref.$el.querySelector('input'));
    },
    openLink: function openLink(url) {
      window.open(url);
    },
    providerClientIdVariable: function providerClientIdVariable(provider) {
      return provider.toUpperCase() + '_CLIENT_ID';
    },
    providerClientSecretVariable: function providerClientSecretVariable(provider) {
      return provider.toUpperCase() + '_CLIENT_SECRET';
    },
    providerRedirectUrl: function providerRedirectUrl(provider) {
      return provider.toUpperCase() + '_REDIRECT_URL';
    },
    web3AuthProviderEnabledVariable: function web3AuthProviderEnabledVariable(provider) {
      return "AUTH_WEB3_".concat(provider.toUpperCase(), "_ENABLED");
    },
    providerRedirectUrlValue: function providerRedirectUrlValue(provider) {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)('app.url') + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_2__.config)("oauth.".concat(provider, ".redirect"));
    },
    backgroundText: function backgroundText(v) {
      var s = v.replace('THEME_BACKGROUND_', '').replace('_', ' ').toLowerCase() + ' background';
      return this.$t((0,_plugins_utils__WEBPACK_IMPORTED_MODULE_3__.ucfirst)(s));
    },
    colorText: function colorText(v) {
      var s = v.replace('THEME_COLOR_', '').toLowerCase() + ' color';
      return this.$t((0,_plugins_utils__WEBPACK_IMPORTED_MODULE_3__.ucfirst)(s));
    },
    mergePackageConfig: function mergePackageConfig(packageVariables) {
      var _this4 = this;
      Object.keys(packageVariables).forEach(function (key) {
        _this4.$set(_this4.form, key, packageVariables[key]);
      });
    },
    runAssetSeeder: function runAssetSeeder() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$axios$post2, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this5.assetSeederButtonDisabled = true;
              _context3.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_7___default().post('/api/admin/seeders/asset');
            case 3:
              _yield$axios$post2 = _context3.sent;
              data = _yield$axios$post2.data;
              _this5.assetSeederButtonDisabled = false;
              if (data.success) {
                _this5.$store.dispatch('message/success', {
                  text: _this5.$t('Assets successfully updated.')
                });
              }
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    save: function save() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$_this6$form$su, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this6.form.submit('post', '/api/admin/settings');
            case 2:
              _yield$_this6$form$su = _context4.sent;
              data = _yield$_this6$form$su.data;
              _context4.next = 6;
              return _this6.$store.dispatch('config/fetch');
            case 6:
              _this6.$store.dispatch('message/' + (data.success ? 'success' : 'error'), {
                text: data.message
              });
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/plugins/objectToFormData.js":
/*!**************************************************!*\
  !*** ./resources/js/plugins/objectToFormData.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ objectToFormData)
/* harmony export */ });
function isUndefined(value) {
  return value === undefined;
}
function isObject(value) {
  return value === Object(value);
}
function isArray(value) {
  return Array.isArray(value);
}
function isFile(value) {
  return value instanceof File;
}
function isDate(value) {
  return value instanceof Date;
}
function objectToFormData(obj, fd, pre) {
  fd = fd || new FormData();
  if (isUndefined(obj)) {
    return fd;
  } else if (isArray(obj)) {
    obj.forEach(function (value) {
      var key = pre + '[]';
      objectToFormData(value, fd, key);
    });
  } else if (isObject(obj) && !isFile(obj) && !isDate(obj)) {
    Object.keys(obj).forEach(function (prop) {
      var value = obj[prop];
      if (isArray(value)) {
        while (prop.length > 2 && prop.lastIndexOf('[]') === prop.length - 2) {
          prop = prop.substring(0, prop.length - 2);
        }
      }
      var key = pre ? pre + '[' + prop + ']' : prop;
      objectToFormData(value, fd, key);
    });
  } else {
    fd.append(pre, obj);
  }
  return fd;
}

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ColorPicker.vue?vue&type=style&index=0&id=023f0f94&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ColorPicker.vue?vue&type=style&index=0&id=023f0f94&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".v-menu__content[data-v-023f0f94] {\n  min-width: 0 !important;\n}\n.v-input[data-v-023f0f94] .v-text-field__slot:hover {\n  cursor: pointer;\n}\n.v-input[data-v-023f0f94] .v-text-field__slot .v-label, .v-input[data-v-023f0f94] .v-text-field__slot input {\n  color: var(--input-color);\n}\n.v-input[data-v-023f0f94] .v-text-field__slot .v-label:hover, .v-input[data-v-023f0f94] .v-text-field__slot input:hover {\n  cursor: pointer;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/FileUpload.vue?vue&type=style&index=0&id=e8cf7d30&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/FileUpload.vue?vue&type=style&index=0&id=e8cf7d30&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-avatar[data-v-e8cf7d30] {\r\n  cursor: pointer;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ColorPicker.vue?vue&type=style&index=0&id=023f0f94&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ColorPicker.vue?vue&type=style&index=0&id=023f0f94&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_style_index_0_id_023f0f94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorPicker.vue?vue&type=style&index=0&id=023f0f94&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ColorPicker.vue?vue&type=style&index=0&id=023f0f94&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_style_index_0_id_023f0f94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_style_index_0_id_023f0f94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/FileUpload.vue?vue&type=style&index=0&id=e8cf7d30&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/FileUpload.vue?vue&type=style&index=0&id=e8cf7d30&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_id_e8cf7d30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileUpload.vue?vue&type=style&index=0&id=e8cf7d30&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/FileUpload.vue?vue&type=style&index=0&id=e8cf7d30&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_id_e8cf7d30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_id_e8cf7d30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/admin/settings/index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/admin/settings/index.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_23b11c8f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=23b11c8f& */ "./resources/js/pages/admin/settings/index.vue?vue&type=template&id=23b11c8f&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/settings/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_23b11c8f___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_23b11c8f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/settings/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/EntityParameters.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Admin/EntityParameters.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityParameters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EntityParameters.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/EntityParameters.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityParameters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/FileEditor.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Admin/FileEditor.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/FileEditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/FileUpload.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Admin/FileUpload.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/FileUpload.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ColorPicker.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ColorPicker.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorPicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ColorPicker.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/settings/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/admin/settings/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/settings/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ColorPicker.vue?vue&type=style&index=0&id=023f0f94&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/ColorPicker.vue?vue&type=style&index=0&id=023f0f94&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_style_index_0_id_023f0f94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorPicker.vue?vue&type=style&index=0&id=023f0f94&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ColorPicker.vue?vue&type=style&index=0&id=023f0f94&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Admin/FileUpload.vue?vue&type=style&index=0&id=e8cf7d30&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/FileUpload.vue?vue&type=style&index=0&id=e8cf7d30&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_id_e8cf7d30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileUpload.vue?vue&type=style&index=0&id=e8cf7d30&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/FileUpload.vue?vue&type=style&index=0&id=e8cf7d30&scoped=true&lang=css&");


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/EntityParameters.vue?vue&type=template&id=14c046b8&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/EntityParameters.vue?vue&type=template&id=14c046b8& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/VSelect.js");
/* harmony import */ var vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/VSwitch.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");










var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._t("description"), _vm._v(" "), _vm._l(_vm.value, function (parameter, index) {
    return _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
      key: index,
      staticClass: "my-5"
    }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardSubtitle, {
      staticClass: "mb-5 pa-0"
    }, [_vm._v("\n      " + _vm._s(_vm.$t("Parameter {0}", [parameter.id])) + "\n    ")]), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardText, {
      staticClass: "mb-5 pa-0"
    }, [_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      attrs: {
        items: _vm.parameterTypes,
        label: _vm.$t("Type"),
        outlined: ""
      },
      on: {
        change: _vm.change
      },
      model: {
        value: _vm.parameters[index].type,
        callback: function callback($$v) {
          _vm.$set(_vm.parameters[index], "type", $$v);
        },
        expression: "parameters[index].type"
      }
    }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attrs: {
        label: _vm.$t("Name"),
        rules: [_vm.validationRequired],
        outlined: ""
      },
      on: {
        change: _vm.change
      },
      model: {
        value: _vm.parameters[index].name,
        callback: function callback($$v) {
          _vm.$set(_vm.parameters[index], "name", $$v);
        },
        expression: "parameters[index].name"
      }
    }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attrs: {
        label: _vm.$t("Description"),
        outlined: ""
      },
      on: {
        change: _vm.change
      },
      model: {
        value: _vm.parameters[index].description,
        callback: function callback($$v) {
          _vm.$set(_vm.parameters[index], "description", $$v);
        },
        expression: "parameters[index].description"
      }
    }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      staticClass: "mb-5",
      attrs: {
        label: _vm.$t("Validation rules"),
        hint: _vm.$t("Should be compatible with Laravel validation rules syntax: {0}", ["https://laravel.com/docs/8.x/validation#available-validation-rules"]),
        "persistent-hint": true,
        outlined: ""
      },
      on: {
        change: _vm.change
      },
      model: {
        value: _vm.parameters[index].validation,
        callback: function callback($$v) {
          _vm.$set(_vm.parameters[index], "validation", $$v);
        },
        expression: "parameters[index].validation"
      }
    }), _vm._v(" "), _vm.parameters[index].type === "switch" ? _c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attrs: {
        label: _vm.$t("Default value"),
        "false-value": 0,
        "true-value": 1,
        color: "primary"
      },
      on: {
        change: _vm.change
      },
      model: {
        value: _vm.parameters[index]["default"],
        callback: function callback($$v) {
          _vm.$set(_vm.parameters[index], "default", $$v);
        },
        expression: "parameters[index].default"
      }
    }) : _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attrs: {
        label: _vm.$t("Default value"),
        outlined: "",
        "hide-details": true
      },
      on: {
        change: _vm.change
      },
      model: {
        value: _vm.parameters[index]["default"],
        callback: function callback($$v) {
          _vm.$set(_vm.parameters[index], "default", $$v);
        },
        expression: "parameters[index].default"
      }
    })], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardActions, {
      staticClass: "pa-0"
    }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["default"], {
      attrs: {
        text: "",
        color: "error"
      },
      on: {
        click: function click($event) {
          return _vm.removeParameter(index);
        }
      }
    }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["default"], [_vm._v("\n          mdi-delete\n        ")]), _vm._v("\n        " + _vm._s(_vm.$t("Remove {0}", [parameter.id])) + "\n      ")], 1)], 1)], 1);
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      label: _vm.$t("Parameter name"),
      outlined: "",
      "persistent-hint": "",
      hint: _vm.$t("The parameter name can be any alphanumeric string.")
    },
    scopedSlots: _vm._u([{
      key: "append",
      fn: function fn() {
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["default"], {
          staticClass: "mt-n2",
          attrs: {
            color: "secondary"
          },
          on: {
            click: _vm.addParameter
          }
        }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["default"], [_vm._v("mdi-plus")]), _vm._v("\n        " + _vm._s(_vm.$t("Add")) + "\n      ")], 1)];
      },
      proxy: true
    }]),
    model: {
      value: _vm.parameterName,
      callback: function callback($$v) {
        _vm.parameterName = $$v;
      },
      expression: "parameterName"
    }
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/FileEditor.vue?vue&type=template&id=3d50bed4&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/FileEditor.vue?vue&type=template&id=3d50bed4& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/VTextarea.js");




var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_0__["default"], {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.update.apply(null, arguments);
      }
    },
    model: {
      value: _vm.formIsValid,
      callback: function callback($$v) {
        _vm.formIsValid = $$v;
      },
      expression: "formIsValid"
    }
  }, [_c(vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      label: _vm.label || _vm.$t("HTML content"),
      rules: [function (v) {
        return v === null ? true : _vm.validationDoesNotContainTags(v, ["html", "style", "script", "head", "body", "meta", "link"]);
      }],
      outlined: ""
    },
    model: {
      value: _vm.form.content,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "content", $$v);
      },
      expression: "form.content"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      type: "submit",
      color: "primary",
      disabled: !_vm.formIsValid || _vm.form.busy,
      loading: _vm.form.busy
    }
  }, [_vm._v("\n    " + _vm._s(_vm.buttonLabel || _vm.$t("Save")) + "\n  ")])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/FileUpload.vue?vue&type=template&id=e8cf7d30&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/FileUpload.vue?vue&type=template&id=e8cf7d30&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/VAvatar.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");




var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      value: _vm.path,
      label: _vm.label,
      disabled: _vm.disabled || _vm.form.busy,
      "append-icon": "mdi-paperclip",
      "append-outer-icon": _vm.preview && _vm.clearable ? "mdi-delete" : "",
      outlined: "",
      readonly: "",
      error: !!_vm.error,
      "error-messages": _vm.error
    },
    on: {
      "click:append": function clickAppend($event) {
        return _vm.$refs.input.click();
      },
      "click:append-outer": _vm.clear
    },
    scopedSlots: _vm._u([{
      key: "prepend-inner",
      fn: function fn() {
        return [_c(vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
          attrs: {
            height: "28",
            width: "auto",
            "max-width": "56",
            tile: ""
          },
          on: {
            click: function click($event) {
              !_vm.disabled && _vm.$refs.input.click();
            }
          }
        }, [_vm.isImage && _vm.preview ? _c("img", {
          attrs: {
            src: _vm.preview,
            alt: _vm.label,
            disabled: _vm.disabled || _vm.form.busy
          }
        }) : _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            disabled: _vm.disabled || _vm.form.busy
          }
        }, [_vm._v("\n          mdi-image-outline\n        ")])], 1)];
      },
      proxy: true
    }, {
      key: "append-outer",
      fn: function fn() {
        return [_vm._t("append-outer")];
      },
      proxy: true
    }], null, true)
  }), _vm._v(" "), _c("input", {
    ref: "input",
    staticClass: "d-none",
    attrs: {
      type: "file",
      accept: _vm.accept
    },
    on: {
      change: _vm.uploadFile
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ColorPicker.vue?vue&type=template&id=023f0f94&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ColorPicker.vue?vue&type=template&id=023f0f94&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VColorPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VColorPicker */ "./node_modules/vuetify/lib/components/VColorPicker/VColorPicker.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/VMenu.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");




var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      bottom: "",
      left: "",
      "offset-y": "",
      "close-on-click": true,
      "close-on-content-click": false
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref) {
        var on = _ref.on;
        return [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_1__["default"], _vm._g({
          "class": _vm.textFieldClass,
          style: _vm.cssVars,
          attrs: {
            value: _vm.color,
            label: _vm.label,
            "background-color": _vm.color,
            outlined: ""
          },
          on: {
            keydown: function keydown($event) {
              $event.preventDefault();
            }
          }
        }, on))];
      }
    }]),
    model: {
      value: _vm.menu,
      callback: function callback($$v) {
        _vm.menu = $$v;
      },
      expression: "menu"
    }
  }, [_vm._v(" "), _c(vuetify_lib_components_VColorPicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      value: _vm.value,
      flat: "",
      mode: "hexa"
    },
    on: {
      input: _vm.input
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/settings/index.vue?vue&type=template&id=23b11c8f&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/settings/index.vue?vue&type=template&id=23b11c8f& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! vuetify/lib/components/VAutocomplete */ "./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VCombobox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vuetify/lib/components/VCombobox */ "./node_modules/vuetify/lib/components/VCombobox/VCombobox.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/VSelect.js");
/* harmony import */ var vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/VSwitch.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/VTab.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/VTabItem.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/VTabs.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/VToolbar.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");
























var render=function render(){var _vm=this,_c=_vm._self._c;return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__["default"],[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__["default"],[_c(vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_2__["default"],[_c(vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_3__.VToolbarTitle,[_vm._v("\n        "+_vm._s(_vm.$t("Settings"))+"\n      ")])],1),_vm._v(" "),_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__.VCardText,[_c(vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_5__["default"],{on:{submit:function submit($event){$event.preventDefault();return _vm.save.apply(null,arguments);}},model:{value:_vm.formIsValid,callback:function callback($$v){_vm.formIsValid=$$v;},expression:"formIsValid"}},[_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_6__["default"],{attrs:{vertical:""}},[_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__["default"],[_vm._v("\n            "+_vm._s(_vm.$t("General"))+"\n          ")]),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__["default"],[_vm._v("\n            "+_vm._s(_vm.$t("Theme"))+"\n          ")]),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__["default"],[_vm._v("\n            "+_vm._s(_vm.$t("Interface"))+"\n          ")]),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__["default"],[_vm._v("\n            "+_vm._s(_vm.$t("Content"))+"\n          ")]),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__["default"],[_vm._v("\n            "+_vm._s(_vm.$t("System"))+"\n          ")]),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__["default"],[_vm._v("\n            "+_vm._s(_vm.$t("Games"))+"\n          ")]),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__["default"],[_vm._v("\n            "+_vm._s(_vm.$t("Bots"))+"\n          ")]),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__["default"],[_vm._v("\n            "+_vm._s(_vm.$t("Bonuses"))+"\n          ")]),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__["default"],[_vm._v("\n            "+_vm._s(_vm.$t("Affiliate program"))+"\n          ")]),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__["default"],[_vm._v("\n            "+_vm._s(_vm.$t("Services"))+"\n          ")]),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__["default"],[_vm._v("\n            "+_vm._s(_vm.$t("Auth providers"))+"\n          ")]),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__["default"],[_vm._v("\n            "+_vm._s(_vm.$t("E-mail"))+"\n          ")]),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__["default"],[_vm._v("\n            "+_vm._s(_vm.$t("Logging"))+"\n          ")]),_vm._v(" "),_vm._l(_vm.packages,function(pkg,id){return[_vm.packageComponents[id]?_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__["default"],{key:id},[_vm._v("\n              "+_vm._s(_vm.$t("Add-on"))+": "+_vm._s(pkg.name)+"\n            ")]):_vm._e()];}),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_8__["default"],[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__["default"],{attrs:{flat:""}},[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__.VCardText,[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("App name"),rules:[_vm.validationRequired],error:_vm.form.errors.has("APP_NAME"),"error-messages":_vm.form.errors.get("APP_NAME"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"APP_NAME");}},model:{value:_vm.form.APP_NAME,callback:function callback($$v){_vm.$set(_vm.form,"APP_NAME",$$v);},expression:"form.APP_NAME"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("App URL"),rules:[_vm.validationRequired],error:_vm.form.errors.has("APP_URL"),"error-messages":_vm.form.errors.get("APP_URL"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"APP_URL");}},model:{value:_vm.form.APP_URL,callback:function callback($$v){_vm.$set(_vm.form,"APP_URL",$$v);},expression:"form.APP_URL"}}),_vm._v(" "),_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["default"],{attrs:{items:Object.values(this.locales),"item-text":"title","item-value":"code",label:_vm.$t("Default language"),error:_vm.form.errors.has("LOCALE"),"error-messages":_vm.form.errors.get("LOCALE"),outlined:""},model:{value:_vm.form.LOCALE,callback:function callback($$v){_vm.$set(_vm.form,"LOCALE",$$v);},expression:"form.LOCALE"}}),_vm._v(" "),_c("file-upload",{attrs:{label:_vm.$t("Logo"),name:"logo",folder:"images"},model:{value:_vm.form.APP_LOGO,callback:function callback($$v){_vm.$set(_vm.form,"APP_LOGO",$$v);},expression:"form.APP_LOGO"}})],1)],1)],1),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_8__["default"],[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__["default"],{attrs:{flat:""}},[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__.VCardText,[_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["default"],{attrs:{items:_vm.modes,label:_vm.$t("Mode"),error:_vm.form.errors.has("THEME_MODE"),"error-messages":_vm.form.errors.get("THEME_MODE"),outlined:""},model:{value:_vm.form.THEME_MODE,callback:function callback($$v){_vm.$set(_vm.form,"THEME_MODE",$$v);},expression:"form.THEME_MODE"}}),_vm._v(" "),_vm._l(_vm.colors,function(color){return[_c("color-picker",{key:color,attrs:{label:_vm.colorText(color)},model:{value:_vm.form[color],callback:function callback($$v){_vm.$set(_vm.form,color,$$v);},expression:"form[color]"}})];}),_vm._v(" "),_vm._l(_vm.backgrounds,function(bg){return[_c("color-picker",{key:bg,attrs:{label:_vm.backgroundText(bg)},model:{value:_vm.form[bg],callback:function callback($$v){_vm.$set(_vm.form,bg,$$v);},expression:"form[bg]"}})];}),_vm._v(" "),_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["default"],{attrs:{items:_vm.animatedBackgrounds,label:_vm.$t("Background animation"),error:_vm.form.errors.has("THEME_BACKGROUND"),"error-messages":_vm.form.errors.get("THEME_BACKGROUND"),outlined:""},model:{value:_vm.form.THEME_BACKGROUND,callback:function callback($$v){_vm.$set(_vm.form,"THEME_BACKGROUND",$$v);},expression:"form.THEME_BACKGROUND"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Body font URL"),outlined:""},model:{value:_vm.form.THEME_FONT_BODY_URL,callback:function callback($$v){_vm.$set(_vm.form,"THEME_FONT_BODY_URL",$$v);},expression:"form.THEME_FONT_BODY_URL"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Body font family name"),outlined:""},model:{value:_vm.form.THEME_FONT_BODY_FAMILY,callback:function callback($$v){_vm.$set(_vm.form,"THEME_FONT_BODY_FAMILY",$$v);},expression:"form.THEME_FONT_BODY_FAMILY"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Heading font URL"),outlined:""},model:{value:_vm.form.THEME_FONT_HEADING_URL,callback:function callback($$v){_vm.$set(_vm.form,"THEME_FONT_HEADING_URL",$$v);},expression:"form.THEME_FONT_HEADING_URL"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Heading font family name"),outlined:""},model:{value:_vm.form.THEME_FONT_HEADING_FAMILY,callback:function callback($$v){_vm.$set(_vm.form,"THEME_FONT_HEADING_FAMILY",$$v);},expression:"form.THEME_FONT_HEADING_FAMILY"}})],2)],1)],1),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_8__["default"],[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__["default"],{attrs:{flat:""}},[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__.VCardText,[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_11__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("General")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Balance icon"),"prepend-inner-icon":_vm.form.INTERFACE_CREDITS_ICON,rules:[_vm.validationRequired],error:_vm.form.errors.has("INTERFACE_CREDITS_ICON"),"error-messages":_vm.form.errors.get("INTERFACE_CREDITS_ICON"),hint:_vm.$t("Choose icons at https://materialdesignicons.com"),"persistent-hint":true,outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"INTERFACE_CREDITS_ICON");}},model:{value:_vm.form.INTERFACE_CREDITS_ICON,callback:function callback($$v){_vm.$set(_vm.form,"INTERFACE_CREDITS_ICON",_vm._n($$v));},expression:"form.INTERFACE_CREDITS_ICON"}}),_vm._v(" "),_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{staticClass:"mb-5",attrs:{label:_vm.$t("Navigation bar always visible"),color:"primary","false-value":"false","true-value":"true",hint:_vm.$t("Except for mobiles"),"persistent-hint":true},model:{value:_vm.form.INTERFACE_NAVBAR_VISIBLE,callback:function callback($$v){_vm.$set(_vm.form,"INTERFACE_NAVBAR_VISIBLE",$$v);},expression:"form.INTERFACE_NAVBAR_VISIBLE"}}),_vm._v(" "),_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{staticClass:"mb-5",attrs:{label:_vm.$t("Display system bar"),color:"primary","false-value":"false","true-value":"true",disabled:!_vm.pusherEnabled,hint:_vm.$t("Please fill Pusher settings first under Services tab."),"persistent-hint":!_vm.pusherEnabled},model:{value:_vm.form.INTERFACE_SYSTEM_BAR_ENABLED,callback:function callback($$v){_vm.$set(_vm.form,"INTERFACE_SYSTEM_BAR_ENABLED",$$v);},expression:"form.INTERFACE_SYSTEM_BAR_ENABLED"}}),_vm._v(" "),_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{staticClass:"mb-5",attrs:{label:_vm.$t("Display users online status"),color:"primary","false-value":"false","true-value":"true",disabled:!_vm.pusherEnabled,hint:_vm.$t("Please fill Pusher settings first under Services tab."),"persistent-hint":!_vm.pusherEnabled},model:{value:_vm.form.INTERFACE_ONLINE_ENABLED,callback:function callback($$v){_vm.$set(_vm.form,"INTERFACE_ONLINE_ENABLED",$$v);},expression:"form.INTERFACE_ONLINE_ENABLED"}}),_vm._v(" "),_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{staticClass:"mb-5",attrs:{label:_vm.$t("Enable sound by default"),color:"primary","false-value":"false","true-value":"true"},model:{value:_vm.form.INTERFACE_SOUND_ENABLED_BY_DEFAULT,callback:function callback($$v){_vm.$set(_vm.form,"INTERFACE_SOUND_ENABLED_BY_DEFAULT",$$v);},expression:"form.INTERFACE_SOUND_ENABLED_BY_DEFAULT"}})],1)],1),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Game feed")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{staticClass:"mb-5",attrs:{label:_vm.$t("Enabled"),color:"primary","false-value":"false","true-value":"true",disabled:!_vm.pusherEnabled,hint:_vm.$t("Please fill Pusher settings first under Services tab."),"persistent-hint":!_vm.pusherEnabled},model:{value:_vm.form.INTERFACE_GAME_FEED_ENABLED,callback:function callback($$v){_vm.$set(_vm.form,"INTERFACE_GAME_FEED_ENABLED",$$v);},expression:"form.INTERFACE_GAME_FEED_ENABLED"}}),_vm._v(" "),_vm.form.INTERFACE_GAME_FEED_ENABLED==="true"?_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{staticClass:"mb-5",attrs:{label:_vm.$t("Enable for users by default"),color:"primary","false-value":"false","true-value":"true",disabled:!_vm.pusherEnabled,hint:_vm.pusherEnabled?_vm.$t("Users can also turn it on and off individually in the settings"):_vm.$t("Please fill Pusher settings first under Services tab."),"persistent-hint":true},model:{value:_vm.form.INTERFACE_GAME_FEED_ENABLED_BY_DEFAULT,callback:function callback($$v){_vm.$set(_vm.form,"INTERFACE_GAME_FEED_ENABLED_BY_DEFAULT",$$v);},expression:"form.INTERFACE_GAME_FEED_ENABLED_BY_DEFAULT"}}):_vm._e()],1)],1),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Chat")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{staticClass:"mb-5",attrs:{label:_vm.$t("Enabled"),color:"primary","false-value":"false","true-value":"true",disabled:!_vm.pusherEnabled,hint:_vm.$t("Please fill Pusher settings first under Services tab."),"persistent-hint":!_vm.pusherEnabled},model:{value:_vm.form.CHAT_ENABLED,callback:function callback($$v){_vm.$set(_vm.form,"CHAT_ENABLED",$$v);},expression:"form.CHAT_ENABLED"}}),_vm._v(" "),_vm.form.CHAT_ENABLED==="true"?_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Chat message max length"),rules:[_vm.validationInteger,_vm.validationPositiveNumber],error:_vm.form.errors.has("CHAT_MESSAGE_MAX_LENGTH"),"error-messages":_vm.form.errors.get("CHAT_MESSAGE_MAX_LENGTH"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"CHAT_MESSAGE_MAX_LENGTH");}},model:{value:_vm.form.CHAT_MESSAGE_MAX_LENGTH,callback:function callback($$v){_vm.$set(_vm.form,"CHAT_MESSAGE_MAX_LENGTH",_vm._n($$v));},expression:"form.CHAT_MESSAGE_MAX_LENGTH"}}):_vm._e()],1)],1),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Tips")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_16__["default"],[_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],[_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{staticClass:"mb-5",attrs:{label:_vm.$t("Enabled"),color:"primary","false-value":"false","true-value":"true"},model:{value:_vm.form.TIPS_ENABLED,callback:function callback($$v){_vm.$set(_vm.form,"TIPS_ENABLED",$$v);},expression:"form.TIPS_ENABLED"}})],1)],1),_vm._v(" "),_vm.form.TIPS_ENABLED==="true"?_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_16__["default"],[_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12",md:"6"}},[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{staticClass:"text-center",attrs:{label:_vm.$t("Max amount"),rules:[_vm.validationPositiveInteger],error:_vm.form.errors.has("TIPS_MAX_AMOUNT"),"error-messages":_vm.form.errors.get("TIPS_MAX_AMOUNT"),prefix:_vm.$t("up to"),suffix:_vm.$t("credits"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"TIPS_MAX_AMOUNT");}},model:{value:_vm.form.TIPS_MAX_AMOUNT,callback:function callback($$v){_vm.$set(_vm.form,"TIPS_MAX_AMOUNT",_vm._n($$v));},expression:"form.TIPS_MAX_AMOUNT"}})],1),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12",md:"6"}},[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{staticClass:"text-center",attrs:{label:_vm.$t("Interval"),rules:[_vm.validationPositiveInteger],error:_vm.form.errors.has("TIPS_INTERVAL"),"error-messages":_vm.form.errors.get("TIPS_INTERVAL"),prefix:_vm.$t("every"),suffix:_vm.$t("hours"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"TIPS_INTERVAL");}},model:{value:_vm.form.TIPS_INTERVAL,callback:function callback($$v){_vm.$set(_vm.form,"TIPS_INTERVAL",_vm._n($$v));},expression:"form.TIPS_INTERVAL"}})],1)],1):_vm._e()],1)],1)],1)],1)],1)],1),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_8__["default"],[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__["default"],{attrs:{flat:""}},[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__.VCardText,[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_11__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Home page")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_11__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Content")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c("file-editor",{attrs:{name:"home"}})],1)],1),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Slider")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{staticClass:"mt-3",attrs:{label:_vm.$t("Height on large screens"),rules:[_vm.validationInteger,_vm.validationPositiveNumber],suffix:_vm.$t("px"),outlined:""},model:{value:_vm.form.CONTENT_HOME_SLIDER.height,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_HOME_SLIDER,"height",_vm._n($$v));},expression:"form.CONTENT_HOME_SLIDER.height"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Height on small screens"),rules:[_vm.validationInteger,_vm.validationPositiveNumber],suffix:_vm.$t("px"),outlined:""},model:{value:_vm.form.CONTENT_HOME_SLIDER.height_mobile,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_HOME_SLIDER,"height_mobile",_vm._n($$v));},expression:"form.CONTENT_HOME_SLIDER.height_mobile"}}),_vm._v(" "),_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{attrs:{label:_vm.$t("Navigation"),color:"primary","false-value":false,"true-value":true},model:{value:_vm.form.CONTENT_HOME_SLIDER.navigation,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_HOME_SLIDER,"navigation",$$v);},expression:"form.CONTENT_HOME_SLIDER.navigation"}}),_vm._v(" "),_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{attrs:{label:_vm.$t("Pagination"),color:"primary","false-value":false,"true-value":true},model:{value:_vm.form.CONTENT_HOME_SLIDER.pagination,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_HOME_SLIDER,"pagination",$$v);},expression:"form.CONTENT_HOME_SLIDER.pagination"}}),_vm._v(" "),_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{attrs:{label:_vm.$t("Dark overlay"),color:"primary","false-value":false,"true-value":true},model:{value:_vm.form.CONTENT_HOME_SLIDER.overlay,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_HOME_SLIDER,"overlay",$$v);},expression:"form.CONTENT_HOME_SLIDER.overlay"}}),_vm._v(" "),_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{attrs:{label:_vm.$t("Auto rotate slides"),color:"primary","false-value":false,"true-value":true},model:{value:_vm.form.CONTENT_HOME_SLIDER.cycle,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_HOME_SLIDER,"cycle",$$v);},expression:"form.CONTENT_HOME_SLIDER.cycle"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{directives:[{name:"show",rawName:"v-show",value:_vm.form.CONTENT_HOME_SLIDER.cycle,expression:"form.CONTENT_HOME_SLIDER.cycle"}],staticClass:"mt-3",attrs:{label:_vm.$t("Interval"),rules:[_vm.validationInteger,_vm.validationPositiveNumber],suffix:_vm.$t("seconds"),outlined:""},model:{value:_vm.form.CONTENT_HOME_SLIDER.interval,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_HOME_SLIDER,"interval",_vm._n($$v));},expression:"form.CONTENT_HOME_SLIDER.interval"}}),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_11__["default"],_vm._l(_vm.form.CONTENT_HOME_SLIDER.slides,function(slide,i){return _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],{key:i},[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v("\n                                  "+_vm._s(_vm.$t("Slide {0}",[i+1]))+"\n                                ")]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Title"),outlined:""},model:{value:_vm.form.CONTENT_HOME_SLIDER.slides[i].title,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_HOME_SLIDER.slides[i],"title",$$v);},expression:"form.CONTENT_HOME_SLIDER.slides[i].title"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Subtitle"),outlined:""},model:{value:_vm.form.CONTENT_HOME_SLIDER.slides[i].subtitle,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_HOME_SLIDER.slides[i],"subtitle",$$v);},expression:"form.CONTENT_HOME_SLIDER.slides[i].subtitle"}}),_vm._v(" "),_c("file-upload",{attrs:{label:_vm.$t("Image"),name:"home-slide-".concat(i),folder:"images"},model:{value:_vm.form.CONTENT_HOME_SLIDER.slides[i].image.url,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_HOME_SLIDER.slides[i].image,"url",$$v);},expression:"form.CONTENT_HOME_SLIDER.slides[i].image.url"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Action button title"),outlined:""},model:{value:_vm.form.CONTENT_HOME_SLIDER.slides[i].link.title,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_HOME_SLIDER.slides[i].link,"title",$$v);},expression:"form.CONTENT_HOME_SLIDER.slides[i].link.title"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Action button URL"),outlined:""},model:{value:_vm.form.CONTENT_HOME_SLIDER.slides[i].link.url,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_HOME_SLIDER.slides[i].link,"url",$$v);},expression:"form.CONTENT_HOME_SLIDER.slides[i].link.url"}}),_vm._v(" "),_vm.form.CONTENT_HOME_SLIDER.slides.length>1?_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_18__["default"],{attrs:{color:"primary"},on:{click:function click($event){return _vm.deleteSlide(i);}}},[_vm._v("\n                                    "+_vm._s(_vm.$t("Delete slide"))+"\n                                  ")]):_vm._e()],1)],1);}),1),_vm._v(" "),_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_18__["default"],{staticClass:"mt-5",attrs:{color:"primary"},on:{click:_vm.addSlide}},[_vm._v("\n                              "+_vm._s(_vm.$t("Add slide"))+"\n                            ")])],1)],1),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Original games list")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["default"],{attrs:{items:_vm.gameDisplayStyles,label:_vm.$t("Display style"),outlined:""},model:{value:_vm.form.CONTENT_HOME_GAMES_DISPLAY_STYLE,callback:function callback($$v){_vm.$set(_vm.form,"CONTENT_HOME_GAMES_DISPLAY_STYLE",$$v);},expression:"form.CONTENT_HOME_GAMES_DISPLAY_STYLE"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Display count"),rules:[_vm.validationPositiveInteger],hint:_vm.$t("How many games are preloaded."),"persistent-hint":true,outlined:""},model:{value:_vm.form.CONTENT_HOME_GAMES_DISPLAY_COUNT,callback:function callback($$v){_vm.$set(_vm.form,"CONTENT_HOME_GAMES_DISPLAY_COUNT",_vm._n($$v));},expression:"form.CONTENT_HOME_GAMES_DISPLAY_COUNT"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{staticClass:"mt-5",attrs:{label:_vm.$t("Load count"),rules:[_vm.validationPositiveInteger],hint:_vm.$t("How many games are loaded when 'Load more' button is clicked."),"persistent-hint":true,outlined:""},model:{value:_vm.form.CONTENT_HOME_GAMES_LOAD_COUNT,callback:function callback($$v){_vm.$set(_vm.form,"CONTENT_HOME_GAMES_LOAD_COUNT",_vm._n($$v));},expression:"form.CONTENT_HOME_GAMES_LOAD_COUNT"}})],1)],1),_vm._v(" "),_vm.gameProvidersPackageIsEnabled?_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Provider games list")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_11__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Featured categories")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_vm._l(_vm.form.CONTENT_HOME_PROVIDER_GAMES_FEATURED_CATEGORIES,function(category,k){return _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__["default"],{key:k,staticClass:"mb-5",attrs:{outlined:""}},[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__.VCardTitle,{staticClass:"font-weight-thin mb-3"},[_vm._v("\n                                      "+_vm._s(_vm.$t("Category {0}",[k+1]))+"\n                                    ")]),_vm._v(" "),_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__.VCardText,[_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_16__["default"],[_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12",md:"6"}},[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Title"),rules:[_vm.validationRequired],outlined:""},model:{value:_vm.form.CONTENT_HOME_PROVIDER_GAMES_FEATURED_CATEGORIES[k].title,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_HOME_PROVIDER_GAMES_FEATURED_CATEGORIES[k],"title",$$v);},expression:"form.CONTENT_HOME_PROVIDER_GAMES_FEATURED_CATEGORIES[k].title"}})],1),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12",md:"6"}},[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Icon"),"prepend-inner-icon":_vm.form.CONTENT_HOME_PROVIDER_GAMES_FEATURED_CATEGORIES[k].icon,rules:[_vm.validationRequired],hint:_vm.$t("Choose icons at https://materialdesignicons.com"),"persistent-hint":true,outlined:""},model:{value:_vm.form.CONTENT_HOME_PROVIDER_GAMES_FEATURED_CATEGORIES[k].icon,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_HOME_PROVIDER_GAMES_FEATURED_CATEGORIES[k],"icon",$$v);},expression:"form.CONTENT_HOME_PROVIDER_GAMES_FEATURED_CATEGORIES[k].icon"}})],1),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12"}},[_c(vuetify_lib_components_VCombobox__WEBPACK_IMPORTED_MODULE_19__["default"],{attrs:{label:_vm.$t("Categories")+" / "+_vm.$t("game IDs"),multiple:"",outlined:"",chips:"","small-chips":"","deletable-chips":"","hide-selected":"","no-filter":"","hide-details":""},model:{value:_vm.form.CONTENT_HOME_PROVIDER_GAMES_FEATURED_CATEGORIES[k].categories,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_HOME_PROVIDER_GAMES_FEATURED_CATEGORIES[k],"categories",$$v);},expression:"form.CONTENT_HOME_PROVIDER_GAMES_FEATURED_CATEGORIES[k].categories"}})],1),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12"}},[_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_18__["default"],{attrs:{disabled:k===_vm.featuredCategoriesCount-1,color:"primary",icon:"",tile:""},on:{click:function click($event){return _vm.moveFeaturedCategoryDown(k);}}},[_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_20__["default"],[_vm._v("mdi-arrow-down")])],1),_vm._v(" "),_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_18__["default"],{attrs:{disabled:k===0,color:"primary",icon:"",tile:""},on:{click:function click($event){return _vm.moveFeaturedCategoryUp(k);}}},[_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_20__["default"],[_vm._v("mdi-arrow-up")])],1),_vm._v(" "),_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_18__["default"],{attrs:{disabled:_vm.featuredCategoriesCount<=1,icon:"",tile:"",color:"error"}},[_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_20__["default"],{on:{click:function click($event){return _vm.deleteFeaturedCategory(k);}}},[_vm._v("\n                                              mdi-delete\n                                            ")])],1)],1)],1)],1)],1);}),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_16__["default"],[_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],[_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_18__["default"],{attrs:{color:"primary"},on:{click:_vm.addFeaturedCategory}},[_vm._v("\n                                        "+_vm._s(_vm.$t("Add category"))+"\n                                      ")])],1)],1)],2)],1),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Display")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["default"],{staticClass:"mt-5",attrs:{items:_vm.gameDisplayStyles,label:_vm.$t("Display style"),outlined:""},model:{value:_vm.form.CONTENT_HOME_PROVIDER_GAMES_DISPLAY_STYLE,callback:function callback($$v){_vm.$set(_vm.form,"CONTENT_HOME_PROVIDER_GAMES_DISPLAY_STYLE",$$v);},expression:"form.CONTENT_HOME_PROVIDER_GAMES_DISPLAY_STYLE"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Display count"),rules:[_vm.validationPositiveInteger],hint:_vm.$t("How many games are preloaded."),"persistent-hint":true,outlined:""},model:{value:_vm.form.CONTENT_HOME_PROVIDER_GAMES_DISPLAY_COUNT,callback:function callback($$v){_vm.$set(_vm.form,"CONTENT_HOME_PROVIDER_GAMES_DISPLAY_COUNT",_vm._n($$v));},expression:"form.CONTENT_HOME_PROVIDER_GAMES_DISPLAY_COUNT"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{staticClass:"mt-5",attrs:{label:_vm.$t("Load count"),rules:[_vm.validationPositiveInteger],hint:_vm.$t("How many games are loaded when 'Load more' button is clicked."),"persistent-hint":true,outlined:""},model:{value:_vm.form.CONTENT_HOME_PROVIDER_GAMES_LOAD_COUNT,callback:function callback($$v){_vm.$set(_vm.form,"CONTENT_HOME_PROVIDER_GAMES_LOAD_COUNT",_vm._n($$v));},expression:"form.CONTENT_HOME_PROVIDER_GAMES_LOAD_COUNT"}})],1)],1)],1)],1)],1):_vm._e(),_vm._v(" "),_vm.rafflePackageIsEnabled?_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Raffles list")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["default"],{attrs:{items:_vm.raffleDisplayStyles,label:_vm.$t("Display style"),outlined:""},model:{value:_vm.form.CONTENT_HOME_RAFFLES_DISPLAY_STYLE,callback:function callback($$v){_vm.$set(_vm.form,"CONTENT_HOME_RAFFLES_DISPLAY_STYLE",$$v);},expression:"form.CONTENT_HOME_RAFFLES_DISPLAY_STYLE"}})],1)],1):_vm._e()],1)],1)],1),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Social")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_11__["default"],_vm._l(_vm.form.CONTENT_SOCIAL,function(link,i){return _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],{key:i},[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v("\n                            "+_vm._s(_vm.form.CONTENT_SOCIAL[i].title)+"\n                          ")]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Title"),rules:[_vm.validationRequired],outlined:""},model:{value:_vm.form.CONTENT_SOCIAL[i].title,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_SOCIAL[i],"title",$$v);},expression:"form.CONTENT_SOCIAL[i].title"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{staticClass:"mb-5",attrs:{label:_vm.$t("Icon"),rules:[_vm.validationRequired],"prepend-inner-icon":link.icon,outlined:"",hint:_vm.$t("Choose icons at https://materialdesignicons.com"),"persistent-hint":true},model:{value:_vm.form.CONTENT_SOCIAL[i].icon,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_SOCIAL[i],"icon",$$v);},expression:"form.CONTENT_SOCIAL[i].icon"}}),_vm._v(" "),_c("color-picker",{attrs:{label:_vm.$t("Icon color")},model:{value:_vm.form.CONTENT_SOCIAL[i].color,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_SOCIAL[i],"color",$$v);},expression:"form.CONTENT_SOCIAL[i].color"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("URL"),rules:[_vm.validationRequired],outlined:"","append-icon":"mdi-open-in-new"},on:{"click:append":function clickAppend($event){return _vm.openLink(_vm.form.CONTENT_SOCIAL[i].url);}},model:{value:_vm.form.CONTENT_SOCIAL[i].url,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_SOCIAL[i],"url",$$v);},expression:"form.CONTENT_SOCIAL[i].url"}}),_vm._v(" "),_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_18__["default"],{staticClass:"mt-5",attrs:{color:"error"},on:{click:function click($event){return _vm.form.CONTENT_SOCIAL.splice(i,1);}}},[_vm._v("\n                              "+_vm._s(_vm.$t("Delete social network"))+"\n                            ")])],1)],1);}),1),_vm._v(" "),_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_18__["default"],{staticClass:"mt-5",attrs:{color:"primary"},on:{click:function click($event){return _vm.form.CONTENT_SOCIAL.push({title:"Network",icon:"mdi-email",color:"primary",url:"https://network.com"});}}},[_vm._v("\n                        "+_vm._s(_vm.$t("Add social network"))+"\n                      ")])],1)],1),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Leaderboard")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{attrs:{label:_vm.$t("Enabled"),color:"primary","false-value":"false","true-value":"true"},model:{value:_vm.form.CONTENT_LEADERBOARD_ENABLED,callback:function callback($$v){_vm.$set(_vm.form,"CONTENT_LEADERBOARD_ENABLED",$$v);},expression:"form.CONTENT_LEADERBOARD_ENABLED"}})],1)],1),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Footer menu")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_11__["default"],_vm._l(_vm.form.CONTENT_FOOTER_MENU,function(page,i){return _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],{key:i},[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v("\n                            "+_vm._s(_vm.form.CONTENT_FOOTER_MENU[i].title)+"\n                          ")]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Page title"),rules:[_vm.validationRequired],outlined:""},model:{value:_vm.form.CONTENT_FOOTER_MENU[i].title,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_FOOTER_MENU[i],"title",$$v);},expression:"form.CONTENT_FOOTER_MENU[i].title"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Page slug"),rules:[_vm.validationRequired],outlined:"",prefix:_vm.config("app.url")+"/pages/","append-icon":"mdi-open-in-new"},on:{"click:append":function clickAppend($event){return _vm.openLink("/pages/".concat(_vm.form.CONTENT_FOOTER_MENU[i].id));}},model:{value:_vm.form.CONTENT_FOOTER_MENU[i].id,callback:function callback($$v){_vm.$set(_vm.form.CONTENT_FOOTER_MENU[i],"id",$$v);},expression:"form.CONTENT_FOOTER_MENU[i].id"}}),_vm._v(" "),_c("file-editor",{attrs:{name:_vm.form.CONTENT_FOOTER_MENU[i].id,"button-label":_vm.$t("Save page content")}}),_vm._v(" "),_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_18__["default"],{staticClass:"mt-5",attrs:{color:"error"},on:{click:function click($event){return _vm.form.CONTENT_FOOTER_MENU.splice(i,1);}}},[_vm._v("\n                              "+_vm._s(_vm.$t("Delete menu item"))+"\n                            ")])],1)],1);}),1),_vm._v(" "),_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_18__["default"],{staticClass:"mt-5",attrs:{color:"primary"},on:{click:function click($event){return _vm.form.CONTENT_FOOTER_MENU.push({id:"new-page",title:"New page"});}}},[_vm._v("\n                        "+_vm._s(_vm.$t("Add menu item"))+"\n                      ")])],1)],1)],1)],1)],1)],1),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_8__["default"],[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__["default"],{attrs:{flat:""}},[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__.VCardText,[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_11__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v("\n                      "+_vm._s(_vm.$t("General"))+"\n                    ")]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["default"],{attrs:{items:_vm.separators,label:_vm.$t("Decimal separator"),error:_vm.form.errors.has("FORMAT_NUMBER_DECIMAL_SEPARATOR"),"error-messages":_vm.form.errors.get("FORMAT_NUMBER_DECIMAL_SEPARATOR"),outlined:""},model:{value:_vm.form.FORMAT_NUMBER_DECIMAL_SEPARATOR,callback:function callback($$v){_vm.$set(_vm.form,"FORMAT_NUMBER_DECIMAL_SEPARATOR",$$v);},expression:"form.FORMAT_NUMBER_DECIMAL_SEPARATOR"}}),_vm._v(" "),_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["default"],{attrs:{items:_vm.separators,label:_vm.$t("Thousands separator"),error:_vm.form.errors.has("FORMAT_NUMBER_THOUSANDS_SEPARATOR"),"error-messages":_vm.form.errors.get("FORMAT_NUMBER_THOUSANDS_SEPARATOR"),outlined:""},model:{value:_vm.form.FORMAT_NUMBER_THOUSANDS_SEPARATOR,callback:function callback($$v){_vm.$set(_vm.form,"FORMAT_NUMBER_THOUSANDS_SEPARATOR",$$v);},expression:"form.FORMAT_NUMBER_THOUSANDS_SEPARATOR"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Session lifetime"),rules:[_vm.validationInteger,_vm.validationPositiveNumber],error:_vm.form.errors.has("SESSION_LIFETIME"),"error-messages":_vm.form.errors.get("SESSION_LIFETIME"),suffix:_vm.$t("minutes"),outlined:""},model:{value:_vm.form.SESSION_LIFETIME,callback:function callback($$v){_vm.$set(_vm.form,"SESSION_LIFETIME",_vm._n($$v));},expression:"form.SESSION_LIFETIME"}})],1)],1),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v("\n                      "+_vm._s(_vm.$t("Users"))+"\n                    ")]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{attrs:{label:_vm.$t("Require email verification"),color:"primary","false-value":"false","true-value":"true"},model:{value:_vm.form.EMAIL_VERIFICATION,callback:function callback($$v){_vm.$set(_vm.form,"EMAIL_VERIFICATION",$$v);},expression:"form.EMAIL_VERIFICATION"}}),_vm._v(" "),_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{attrs:{label:_vm.$t("Auto create an avatar for new users"),color:"primary","false-value":"false","true-value":"true"},model:{value:_vm.form.USERS_CREATE_RANDOM_AVATAR,callback:function callback($$v){_vm.$set(_vm.form,"USERS_CREATE_RANDOM_AVATAR",$$v);},expression:"form.USERS_CREATE_RANDOM_AVATAR"}}),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_11__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v("\n                            "+_vm._s(_vm.$t("Sign-up form fields"))+"\n                            "),_vm.form.USERS_FIELDS.length?_c("span",{staticClass:"ml-2"},[_vm._v("\n                              ("+_vm._s(_vm.form.USERS_FIELDS.length)+")\n                            ")]):_vm._e()]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c("entity-parameters",{scopedSlots:_vm._u([{key:"description",fn:function fn(){return[_c("p",[_vm._v("\n                                  "+_vm._s(_vm.$t("Add any number of extra fields that should be present on the sign up form and filled in by the user."))+"\n                                ")])];},proxy:true}]),model:{value:_vm.form.USERS_FIELDS,callback:function callback($$v){_vm.$set(_vm.form,"USERS_FIELDS",$$v);},expression:"form.USERS_FIELDS"}})],1)],1)],1)],1)],1)],1)],1)],1)],1),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_8__["default"],[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__["default"],{attrs:{flat:""}},[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__.VCardText,[_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["default"],{attrs:{items:_vm.decks,label:_vm.$t("Card deck"),error:_vm.form.errors.has("GAMES_PLAYING_CARDS_DECK"),"error-messages":_vm.form.errors.get("GAMES_PLAYING_CARDS_DECK"),hint:_vm.form.GAMES_PLAYING_CARDS_DECK?_vm.$t("Card deck images are located in {0}",["public/images/games/playing-cards/".concat(_vm.form.GAMES_PLAYING_CARDS_DECK)]):"","persistent-hint":"",outlined:""},model:{value:_vm.form.GAMES_PLAYING_CARDS_DECK,callback:function callback($$v){_vm.$set(_vm.form,"GAMES_PLAYING_CARDS_DECK",$$v);},expression:"form.GAMES_PLAYING_CARDS_DECK"}}),_vm._v(" "),!_vm.form.GAMES_PLAYING_CARDS_DECK?_c("file-upload",{attrs:{label:_vm.$t("Playing card front background image"),name:"card-front",folder:"images"},model:{value:_vm.form.GAMES_PLAYING_CARDS_FRONT_IMAGE,callback:function callback($$v){_vm.$set(_vm.form,"GAMES_PLAYING_CARDS_FRONT_IMAGE",$$v);},expression:"form.GAMES_PLAYING_CARDS_FRONT_IMAGE"}}):_vm._e(),_vm._v(" "),!_vm.form.GAMES_PLAYING_CARDS_DECK?_c("file-upload",{attrs:{label:_vm.$t("Playing card back background image"),name:"card-back",folder:"images"},model:{value:_vm.form.GAMES_PLAYING_CARDS_BACK_IMAGE,callback:function callback($$v){_vm.$set(_vm.form,"GAMES_PLAYING_CARDS_BACK_IMAGE",$$v);},expression:"form.GAMES_PLAYING_CARDS_BACK_IMAGE"}}):_vm._e()],1)],1)],1),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_8__["default"],[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__["default"],{attrs:{flat:""}},[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__.VCardText,[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_11__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Games")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["default"],{attrs:{items:_vm.frequencies,label:_vm.$t("Frequency"),error:_vm.form.errors.has("BOTS_GAMES_FREQUENCY"),"error-messages":_vm.form.errors.get("BOTS_GAMES_FREQUENCY"),hint:_vm.$t("How often bots will awake."),"persistent-hint":"",outlined:""},model:{value:_vm.form.BOTS_GAMES_FREQUENCY,callback:function callback($$v){_vm.$set(_vm.form,"BOTS_GAMES_FREQUENCY",$$v);},expression:"form.BOTS_GAMES_FREQUENCY"}}),_vm._v(" "),_vm.form.BOTS_GAMES_FREQUENCY?_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Min bots"),rules:[_vm.validationInteger,_vm.validationPositiveNumber],error:_vm.form.errors.has("BOTS_GAMES_MIN_COUNT"),"error-messages":_vm.form.errors.get("BOTS_GAMES_MIN_COUNT"),outlined:"",hint:_vm.$t("Minimum number of bots to play a game during each cycle."),"persistent-hint":""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"BOTS_GAMES_MIN_COUNT");}},model:{value:_vm.form.BOTS_GAMES_MIN_COUNT,callback:function callback($$v){_vm.$set(_vm.form,"BOTS_GAMES_MIN_COUNT",_vm._n($$v));},expression:"form.BOTS_GAMES_MIN_COUNT"}}):_vm._e(),_vm._v(" "),_vm.form.BOTS_GAMES_FREQUENCY?_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Max bots"),rules:[_vm.validationInteger,_vm.validationPositiveNumber],error:_vm.form.errors.has("BOTS_GAMES_MAX_COUNT"),"error-messages":_vm.form.errors.get("BOTS_GAMES_MAX_COUNT"),outlined:"",hint:_vm.$t("Maximum number of bots to play a game during each cycle."),"persistent-hint":""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"BOTS_GAMES_MAX_COUNT");}},model:{value:_vm.form.BOTS_GAMES_MAX_COUNT,callback:function callback($$v){_vm.$set(_vm.form,"BOTS_GAMES_MAX_COUNT",_vm._n($$v));},expression:"form.BOTS_GAMES_MAX_COUNT"}}):_vm._e(),_vm._v(" "),_vm.form.BOTS_GAMES_FREQUENCY?_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Min bet"),error:_vm.form.errors.has("BOTS_GAMES_MIN_BET"),"error-messages":_vm.form.errors.get("BOTS_GAMES_MIN_BET"),outlined:"",suffix:_vm.$t("credits"),hint:_vm.$t("Minimum bet a bot is allowed to make.")+" "+_vm.$t("Leave empty to use the limit specified in the game settings."),"persistent-hint":""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"BOTS_GAMES_MIN_BET");}},model:{value:_vm.form.BOTS_GAMES_MIN_BET,callback:function callback($$v){_vm.$set(_vm.form,"BOTS_GAMES_MIN_BET",_vm._n($$v));},expression:"form.BOTS_GAMES_MIN_BET"}}):_vm._e(),_vm._v(" "),_vm.form.BOTS_GAMES_FREQUENCY?_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Max bet"),error:_vm.form.errors.has("BOTS_GAMES_MAX_BET"),"error-messages":_vm.form.errors.get("BOTS_GAMES_MAX_BET"),outlined:"",suffix:_vm.$t("credits"),hint:_vm.$t("Minimum bet a bot is allowed to make.")+" "+_vm.$t("Leave empty to use the limit specified in the game settings."),"persistent-hint":""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"BOTS_GAMES_MAX_BET");}},model:{value:_vm.form.BOTS_GAMES_MAX_BET,callback:function callback($$v){_vm.$set(_vm.form,"BOTS_GAMES_MAX_BET",_vm._n($$v));},expression:"form.BOTS_GAMES_MAX_BET"}}):_vm._e()],1)],1)],1)],1)],1)],1),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_8__["default"],[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__["default"],{attrs:{flat:""}},[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__.VCardText,[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_11__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("General")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Sign up bonus"),error:_vm.form.errors.has("BONUSES_SIGN_UP"),"error-messages":_vm.form.errors.get("BONUSES_SIGN_UP"),suffix:_vm.$t("credits"),outlined:""},model:{value:_vm.form.BONUSES_SIGN_UP,callback:function callback($$v){_vm.$set(_vm.form,"BONUSES_SIGN_UP",_vm._n($$v));},expression:"form.BONUSES_SIGN_UP"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Email verification bonus"),error:_vm.form.errors.has("BONUSES_EMAIL_VERIFICATION"),"error-messages":_vm.form.errors.get("BONUSES_EMAIL_VERIFICATION"),suffix:_vm.$t("credits"),outlined:""},model:{value:_vm.form.BONUSES_EMAIL_VERIFICATION,callback:function callback($$v){_vm.$set(_vm.form,"BONUSES_EMAIL_VERIFICATION",_vm._n($$v));},expression:"form.BONUSES_EMAIL_VERIFICATION"}})],1)],1),_vm._v(" "),_vm.paymentsPackageIsEnabled?_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Deposit")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c("p",{staticClass:"mb-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("First deposit"))+"\n                        ")]),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_16__["default"],[_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12",md:"2"}},[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Amount"),suffix:_vm.$t("%"),rules:[_vm.validationNonNegativeNumber],error:_vm.form.errors.has("BONUSES_DEPOSIT_FIRST_PCT"),"error-messages":_vm.form.errors.get("BONUSES_DEPOSIT_FIRST_PCT"),outlined:""},model:{value:_vm.form.BONUSES_DEPOSIT_FIRST_PCT,callback:function callback($$v){_vm.$set(_vm.form,"BONUSES_DEPOSIT_FIRST_PCT",_vm._n($$v));},expression:"form.BONUSES_DEPOSIT_FIRST_PCT"}})],1),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12",md:"6"}},[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{staticClass:"text-center",attrs:{label:_vm.$t("Condition"),prefix:_vm.$t("Deposit")+" >= ",suffix:_vm.$t("credits"),rules:[_vm.validationPositiveInteger],error:_vm.form.errors.has("BONUSES_DEPOSIT_FIRST_THRESHOLD"),"error-messages":_vm.form.errors.get("BONUSES_DEPOSIT_FIRST_THRESHOLD"),outlined:""},model:{value:_vm.form.BONUSES_DEPOSIT_FIRST_THRESHOLD,callback:function callback($$v){_vm.$set(_vm.form,"BONUSES_DEPOSIT_FIRST_THRESHOLD",_vm._n($$v));},expression:"form.BONUSES_DEPOSIT_FIRST_THRESHOLD"}})],1),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12",md:"4"}},[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Max amount"),suffix:_vm.$t("credits"),rules:[_vm.validationPositiveInteger],error:_vm.form.errors.has("BONUSES_DEPOSIT_FIRST_MAX"),"error-messages":_vm.form.errors.get("BONUSES_DEPOSIT_FIRST_MAX"),outlined:""},model:{value:_vm.form.BONUSES_DEPOSIT_FIRST_MAX,callback:function callback($$v){_vm.$set(_vm.form,"BONUSES_DEPOSIT_FIRST_MAX",_vm._n($$v));},expression:"form.BONUSES_DEPOSIT_FIRST_MAX"}})],1)],1),_vm._v(" "),_c("p",{staticClass:"mb-5"},[_vm._v("\n                        "+_vm._s(_vm.$t("Consecutive deposits"))+"\n                      ")]),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_16__["default"],[_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12",md:"2"}},[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Amount"),suffix:_vm.$t("%"),rules:[_vm.validationNonNegativeNumber],error:_vm.form.errors.has("BONUSES_DEPOSIT_PCT"),"error-messages":_vm.form.errors.get("BONUSES_DEPOSIT_PCT"),outlined:""},model:{value:_vm.form.BONUSES_DEPOSIT_PCT,callback:function callback($$v){_vm.$set(_vm.form,"BONUSES_DEPOSIT_PCT",_vm._n($$v));},expression:"form.BONUSES_DEPOSIT_PCT"}})],1),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12",md:"6"}},[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{staticClass:"text-center",attrs:{label:_vm.$t("Condition"),prefix:_vm.$t("Deposit")+" >= ",suffix:_vm.$t("credits"),rules:[_vm.validationPositiveInteger],error:_vm.form.errors.has("BONUSES_DEPOSIT_THRESHOLD"),"error-messages":_vm.form.errors.get("BONUSES_DEPOSIT_THRESHOLD"),outlined:""},model:{value:_vm.form.BONUSES_DEPOSIT_THRESHOLD,callback:function callback($$v){_vm.$set(_vm.form,"BONUSES_DEPOSIT_THRESHOLD",_vm._n($$v));},expression:"form.BONUSES_DEPOSIT_THRESHOLD"}})],1),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12",md:"4"}},[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Max amount"),suffix:_vm.$t("credits"),rules:[_vm.validationPositiveInteger],error:_vm.form.errors.has("BONUSES_DEPOSIT_MAX"),"error-messages":_vm.form.errors.get("BONUSES_DEPOSIT_MAX"),outlined:""},model:{value:_vm.form.BONUSES_DEPOSIT_MAX,callback:function callback($$v){_vm.$set(_vm.form,"BONUSES_DEPOSIT_MAX",_vm._n($$v));},expression:"form.BONUSES_DEPOSIT_MAX"}})],1)],1),_vm._v(" "),_vm.gameProvidersPackageIsEnabled?_c("div",[_c("p",{staticClass:"mb-5"},[_vm._v("\n                          "+_vm._s(_vm.$t("Bonus rounds"))+"\n                        ")]),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_16__["default"],[_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12",md:"6"}},[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{staticClass:"text-center",attrs:{label:_vm.$t("Condition"),prefix:_vm.$t("Deposit")+" >= ",suffix:_vm.$t("credits"),rules:[_vm.validationPositiveInteger],outlined:""},model:{value:_vm.form.BONUSES_DEPOSIT_BONUS_ROUNDS_THRESHOLD,callback:function callback($$v){_vm.$set(_vm.form,"BONUSES_DEPOSIT_BONUS_ROUNDS_THRESHOLD",_vm._n($$v));},expression:"form.BONUSES_DEPOSIT_BONUS_ROUNDS_THRESHOLD"}})],1)],1),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_16__["default"],[_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12",md:"4"}},[_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["default"],{attrs:{items:[{value:"evoplay",text:"Evoplay"}],label:_vm.$t("Provider"),disabled:true,outlined:""},model:{value:_vm.form.BONUSES_DEPOSIT_BONUS_ROUNDS_PROVIDER,callback:function callback($$v){_vm.$set(_vm.form,"BONUSES_DEPOSIT_BONUS_ROUNDS_PROVIDER",$$v);},expression:"form.BONUSES_DEPOSIT_BONUS_ROUNDS_PROVIDER"}})],1),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12",md:"3"}},[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Game ID"),outlined:""},model:{value:_vm.form.BONUSES_DEPOSIT_BONUS_ROUNDS_GAME_ID,callback:function callback($$v){_vm.$set(_vm.form,"BONUSES_DEPOSIT_BONUS_ROUNDS_GAME_ID",$$v);},expression:"form.BONUSES_DEPOSIT_BONUS_ROUNDS_GAME_ID"}})],1),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12",md:"3"}},[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Rounds"),outlined:""},model:{value:_vm.form.BONUSES_DEPOSIT_BONUS_ROUNDS_COUNT,callback:function callback($$v){_vm.$set(_vm.form,"BONUSES_DEPOSIT_BONUS_ROUNDS_COUNT",_vm._n($$v));},expression:"form.BONUSES_DEPOSIT_BONUS_ROUNDS_COUNT"}})],1),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12",md:"2"}},[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Bet"),outlined:""},model:{value:_vm.form.BONUSES_DEPOSIT_BONUS_ROUNDS_BET,callback:function callback($$v){_vm.$set(_vm.form,"BONUSES_DEPOSIT_BONUS_ROUNDS_BET",_vm._n($$v));},expression:"form.BONUSES_DEPOSIT_BONUS_ROUNDS_BET"}})],1)],1)],1):_vm._e()],1)],1):_vm._e(),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Faucet")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_16__["default"],[_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12",md:"6"}},[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{staticClass:"text-center",attrs:{label:_vm.$t("Faucet amount"),prefix:_vm.$t("Allow to claim"),suffix:_vm.$t("credits"),rules:[_vm.validationNonNegativeInteger],error:_vm.form.errors.has("BONUSES_FAUCET_AMOUNT"),"error-messages":_vm.form.errors.get("BONUSES_FAUCET_AMOUNT"),hint:_vm.$t("Set amount to zero to disable faucet."),"persistent-hint":"",outlined:""},model:{value:_vm.form.BONUSES_FAUCET_AMOUNT,callback:function callback($$v){_vm.$set(_vm.form,"BONUSES_FAUCET_AMOUNT",_vm._n($$v));},expression:"form.BONUSES_FAUCET_AMOUNT"}})],1),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12",md:"6"}},[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{staticClass:"text-center",attrs:{label:_vm.$t("Faucet interval"),prefix:_vm.$t("every"),suffix:_vm.$t("hours"),rules:[_vm.validationPositiveInteger],error:_vm.form.errors.has("BONUSES_FAUCET_INTERVAL"),"error-messages":_vm.form.errors.get("BONUSES_FAUCET_INTERVAL"),outlined:""},model:{value:_vm.form.BONUSES_FAUCET_INTERVAL,callback:function callback($$v){_vm.$set(_vm.form,"BONUSES_FAUCET_INTERVAL",_vm._n($$v));},expression:"form.BONUSES_FAUCET_INTERVAL"}})],1)],1)],1)],1),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Tips")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_16__["default"],[_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12",md:"6"}},[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{staticClass:"text-center",attrs:{label:_vm.$t("Faucet amount"),prefix:_vm.$t("Allow to claim"),suffix:_vm.$t("credits"),rules:[_vm.validationNonNegativeInteger],error:_vm.form.errors.has("BONUSES_FAUCET_AMOUNT"),"error-messages":_vm.form.errors.get("BONUSES_FAUCET_AMOUNT"),hint:_vm.$t("Set amount to zero to disable faucet."),"persistent-hint":"",outlined:""},model:{value:_vm.form.BONUSES_FAUCET_AMOUNT,callback:function callback($$v){_vm.$set(_vm.form,"BONUSES_FAUCET_AMOUNT",_vm._n($$v));},expression:"form.BONUSES_FAUCET_AMOUNT"}})],1),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],{attrs:{cols:"12",md:"6"}},[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{staticClass:"text-center",attrs:{label:_vm.$t("Faucet interval"),prefix:_vm.$t("every"),suffix:_vm.$t("hours"),rules:[_vm.validationPositiveInteger],error:_vm.form.errors.has("BONUSES_FAUCET_INTERVAL"),"error-messages":_vm.form.errors.get("BONUSES_FAUCET_INTERVAL"),outlined:""},model:{value:_vm.form.BONUSES_FAUCET_INTERVAL,callback:function callback($$v){_vm.$set(_vm.form,"BONUSES_FAUCET_INTERVAL",_vm._n($$v));},expression:"form.BONUSES_FAUCET_INTERVAL"}})],1)],1)],1)],1),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Chat rain")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["default"],{attrs:{items:_vm.chatRainFrequencies,label:_vm.$t("Chat rain frequency"),error:_vm.form.errors.has("BONUSES_RAIN_FREQUENCY"),"error-messages":_vm.form.errors.get("BONUSES_RAIN_FREQUENCY"),outlined:""},model:{value:_vm.form.BONUSES_RAIN_FREQUENCY,callback:function callback($$v){_vm.$set(_vm.form,"BONUSES_RAIN_FREQUENCY",$$v);},expression:"form.BONUSES_RAIN_FREQUENCY"}}),_vm._v(" "),_vm.form.BONUSES_RAIN_FREQUENCY?_c(vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_21__["default"],{attrs:{label:_vm.$t("User that makes rain in chat"),items:_vm.users,loading:_vm.userSearchInProgress,"search-input":_vm.userSearchString,color:"primary","hide-selected":"","hide-no-data":"","item-value":"id","item-text":"name",placeholder:_vm.$t("Search")+"...",outlined:""},on:{"update:searchInput":function updateSearchInput($event){_vm.userSearchString=$event;},"update:search-input":function updateSearchInput($event){_vm.userSearchString=$event;}},model:{value:_vm.form.BONUSES_RAIN_USER,callback:function callback($$v){_vm.$set(_vm.form,"BONUSES_RAIN_USER",$$v);},expression:"form.BONUSES_RAIN_USER"}}):_vm._e(),_vm._v(" "),_vm.form.BONUSES_RAIN_FREQUENCY?[_c("h6",{staticClass:"text-h6 font-weight-thin mb-2"},[_vm._v(_vm._s(_vm.$t("Chat rain payouts"))+" ("+_vm._s(_vm.$t("from best to worst"))+")")]),_vm._v(" "),_vm._l(_vm.form.BONUSES_RAIN_AMOUNTS,function(amount,i){return[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Amount"),rules:[_vm.validationPositiveInteger],error:_vm.form.errors.has("BONUSES_RAIN_AMOUNTS"),"error-messages":_vm.form.errors.get("BONUSES_RAIN_AMOUNTS"),prefix:"#".concat(i+1),suffix:_vm.$t("credits"),"append-outer-icon":_vm.form.BONUSES_RAIN_AMOUNTS.length>1?"mdi-delete":"",outlined:""},on:{"click:append-outer":function clickAppendOuter($event){return _vm.deleteRainPayout(i);}},model:{value:_vm.form.BONUSES_RAIN_AMOUNTS[i],callback:function callback($$v){_vm.$set(_vm.form.BONUSES_RAIN_AMOUNTS,i,_vm._n($$v));},expression:"form.BONUSES_RAIN_AMOUNTS[i]"}})];}),_vm._v(" "),_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_18__["default"],{attrs:{color:"primary"},on:{click:function click($event){return _vm.addRainPayout();}}},[_vm._v("\n                          "+_vm._s(_vm.$t("Add"))+"\n                        ")])]:_vm._e()],2)],1)],1)],1)],1)],1),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_8__["default"],[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__["default"],{attrs:{flat:""}},[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__.VCardText,[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_11__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("General")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["default"],{attrs:{items:_vm.commissionsApprovalFrequencies,label:_vm.$t("Commissions auto approval frequency"),error:_vm.form.errors.has("AFFILIATE_AUTO_APPROVAL_FREQUENCY"),"error-messages":_vm.form.errors.get("AFFILIATE_AUTO_APPROVAL_FREQUENCY"),outlined:""},model:{value:_vm.form.AFFILIATE_AUTO_APPROVAL_FREQUENCY,callback:function callback($$v){_vm.$set(_vm.form,"AFFILIATE_AUTO_APPROVAL_FREQUENCY",$$v);},expression:"form.AFFILIATE_AUTO_APPROVAL_FREQUENCY"}}),_vm._v(" "),_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{attrs:{label:_vm.$t("Hash user ID in affiliate links"),color:"primary","false-value":"false","true-value":"true"},model:{value:_vm.form.AFFILIATE_HASH_USER_ID,callback:function callback($$v){_vm.$set(_vm.form,"AFFILIATE_HASH_USER_ID",$$v);},expression:"form.AFFILIATE_HASH_USER_ID"}}),_vm._v(" "),_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{attrs:{label:_vm.$t("Do not validate IP address when creating commissions"),color:"primary","false-value":"false","true-value":"true"},model:{value:_vm.form.AFFILIATE_ALLOW_SAME_IP,callback:function callback($$v){_vm.$set(_vm.form,"AFFILIATE_ALLOW_SAME_IP",$$v);},expression:"form.AFFILIATE_ALLOW_SAME_IP"}})],1)],1),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Commissions")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_vm.form.AFFILIATE_COMMISSIONS_SIGN_UP?_vm._l([0,1,2],function(tier){return _c("div",{key:"tier-"+tier},[_c("h4",{staticClass:"subtitle-1 mb-3"},[_vm._v(_vm._s(_vm.$t("Tier {0}",[tier+1])))]),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Referrer sign up bonus"),rules:[_vm.validationInteger,_vm.validationNonNegativeNumber],error:_vm.form.errors.has("AFFILIATE_COMMISSIONS_SIGN_UP"),"error-messages":_vm.form.errors.get("AFFILIATE_COMMISSIONS_SIGN_UP"),suffix:_vm.$t("credits"),outlined:""},model:{value:_vm.form.AFFILIATE_COMMISSIONS_SIGN_UP[tier],callback:function callback($$v){_vm.$set(_vm.form.AFFILIATE_COMMISSIONS_SIGN_UP,tier,_vm._n($$v));},expression:"form.AFFILIATE_COMMISSIONS_SIGN_UP[tier]"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Referrer game loss bonus"),rules:[_vm.validationNonNegativeNumber],error:_vm.form.errors.has("AFFILIATE_COMMISSIONS_GAME_LOSS"),"error-messages":_vm.form.errors.get("AFFILIATE_COMMISSIONS_GAME_LOSS"),suffix:_vm.$t("% of bet amount"),outlined:""},model:{value:_vm.form.AFFILIATE_COMMISSIONS_GAME_LOSS[tier],callback:function callback($$v){_vm.$set(_vm.form.AFFILIATE_COMMISSIONS_GAME_LOSS,tier,_vm._n($$v));},expression:"form.AFFILIATE_COMMISSIONS_GAME_LOSS[tier]"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Referrer game win bonus"),rules:[_vm.validationNonNegativeNumber],error:_vm.form.errors.has("AFFILIATE_COMMISSIONS_GAME_WIN"),"error-messages":_vm.form.errors.get("AFFILIATE_COMMISSIONS_GAME_WIN"),suffix:_vm.$t("% of bet amount"),outlined:""},model:{value:_vm.form.AFFILIATE_COMMISSIONS_GAME_WIN[tier],callback:function callback($$v){_vm.$set(_vm.form.AFFILIATE_COMMISSIONS_GAME_WIN,tier,_vm._n($$v));},expression:"form.AFFILIATE_COMMISSIONS_GAME_WIN[tier]"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Raffle ticket bonus"),rules:[_vm.validationNonNegativeNumber],error:_vm.form.errors.has("AFFILIATE_COMMISSIONS_RAFFLE_TICKET"),"error-messages":_vm.form.errors.get("AFFILIATE_COMMISSIONS_RAFFLE_TICKET"),suffix:_vm.$t("% of raffle ticket cost"),outlined:""},model:{value:_vm.form.AFFILIATE_COMMISSIONS_RAFFLE_TICKET[tier],callback:function callback($$v){_vm.$set(_vm.form.AFFILIATE_COMMISSIONS_RAFFLE_TICKET,tier,_vm._n($$v));},expression:"form.AFFILIATE_COMMISSIONS_RAFFLE_TICKET[tier]"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Referrer deposit bonus"),rules:[_vm.validationNonNegativeNumber],error:_vm.form.errors.has("AFFILIATE_COMMISSIONS_DEPOSIT"),"error-messages":_vm.form.errors.get("AFFILIATE_COMMISSIONS_DEPOSIT"),suffix:_vm.$t("% of deposit amount"),outlined:""},model:{value:_vm.form.AFFILIATE_COMMISSIONS_DEPOSIT[tier],callback:function callback($$v){_vm.$set(_vm.form.AFFILIATE_COMMISSIONS_DEPOSIT,tier,_vm._n($$v));},expression:"form.AFFILIATE_COMMISSIONS_DEPOSIT[tier]"}})],1);}):_vm._e()],2)],1)],1)],1)],1)],1),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_8__["default"],[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__["default"],{attrs:{flat:""}},[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__.VCardText,[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_11__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Google Tag Manager")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Container ID"),error:_vm.form.errors.has("GTM_CONTAINER_ID"),"error-messages":_vm.form.errors.get("GTM_CONTAINER_ID"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"GTM_CONTAINER_ID");}},model:{value:_vm.form.GTM_CONTAINER_ID,callback:function callback($$v){_vm.$set(_vm.form,"GTM_CONTAINER_ID",$$v);},expression:"form.GTM_CONTAINER_ID"}})],1)],1),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Google reCaptcha")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Public key"),error:_vm.form.errors.has("RECAPTCHA_PUBLIC_KEY"),"error-messages":_vm.form.errors.get("RECAPTCHA_PUBLIC_KEY"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"RECAPTCHA_PUBLIC_KEY");}},model:{value:_vm.form.RECAPTCHA_PUBLIC_KEY,callback:function callback($$v){_vm.$set(_vm.form,"RECAPTCHA_PUBLIC_KEY",$$v);},expression:"form.RECAPTCHA_PUBLIC_KEY"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Secret key"),error:_vm.form.errors.has("RECAPTCHA_SECRET_KEY"),"error-messages":_vm.form.errors.get("RECAPTCHA_SECRET_KEY"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"RECAPTCHA_SECRET_KEY");}},model:{value:_vm.form.RECAPTCHA_SECRET_KEY,callback:function callback($$v){_vm.$set(_vm.form,"RECAPTCHA_SECRET_KEY",$$v);},expression:"form.RECAPTCHA_SECRET_KEY"}})],1)],1),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Pusher")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{staticClass:"mb-5",attrs:{label:_vm.$t("Enabled"),color:"primary","false-value":"null","true-value":"pusher"},model:{value:_vm.form.BROADCAST_DRIVER,callback:function callback($$v){_vm.$set(_vm.form,"BROADCAST_DRIVER",$$v);},expression:"form.BROADCAST_DRIVER"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{directives:[{name:"show",rawName:"v-show",value:_vm.form.BROADCAST_DRIVER!=="null",expression:"form.BROADCAST_DRIVER !== 'null'"}],attrs:{label:_vm.$t("Pusher app ID"),error:_vm.form.errors.has("PUSHER_APP_ID"),"error-messages":_vm.form.errors.get("PUSHER_APP_ID"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"PUSHER_APP_ID");}},model:{value:_vm.form.PUSHER_APP_ID,callback:function callback($$v){_vm.$set(_vm.form,"PUSHER_APP_ID",$$v);},expression:"form.PUSHER_APP_ID"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{directives:[{name:"show",rawName:"v-show",value:_vm.form.BROADCAST_DRIVER!=="null",expression:"form.BROADCAST_DRIVER !== 'null'"}],attrs:{label:_vm.$t("Pusher app key"),error:_vm.form.errors.has("PUSHER_APP_KEY"),"error-messages":_vm.form.errors.get("PUSHER_APP_KEY"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"PUSHER_APP_KEY");}},model:{value:_vm.form.PUSHER_APP_KEY,callback:function callback($$v){_vm.$set(_vm.form,"PUSHER_APP_KEY",$$v);},expression:"form.PUSHER_APP_KEY"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{directives:[{name:"show",rawName:"v-show",value:_vm.form.BROADCAST_DRIVER!=="null",expression:"form.BROADCAST_DRIVER !== 'null'"}],attrs:{label:_vm.$t("Pusher app secret"),error:_vm.form.errors.has("PUSHER_APP_SECRET"),"error-messages":_vm.form.errors.get("PUSHER_APP_SECRET"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"PUSHER_APP_SECRET");}},model:{value:_vm.form.PUSHER_APP_SECRET,callback:function callback($$v){_vm.$set(_vm.form,"PUSHER_APP_SECRET",$$v);},expression:"form.PUSHER_APP_SECRET"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{directives:[{name:"show",rawName:"v-show",value:_vm.form.BROADCAST_DRIVER!=="null",expression:"form.BROADCAST_DRIVER !== 'null'"}],attrs:{label:_vm.$t("Pusher app cluster"),error:_vm.form.errors.has("PUSHER_APP_CLUSTER"),"error-messages":_vm.form.errors.get("PUSHER_APP_CLUSTER"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"PUSHER_APP_CLUSTER");}},model:{value:_vm.form.PUSHER_APP_CLUSTER,callback:function callback($$v){_vm.$set(_vm.form,"PUSHER_APP_CLUSTER",$$v);},expression:"form.PUSHER_APP_CLUSTER"}})],1)],1),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Queues")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["default"],{attrs:{items:_vm.queueDrivers,label:_vm.$t("Queue driver"),error:_vm.form.errors.has("QUEUE_CONNECTION"),"error-messages":_vm.form.errors.get("QUEUE_CONNECTION"),"persistent-hint":true,hint:["database","redis"].indexOf(_vm.form.QUEUE_CONNECTION)>-1?_vm.$t("Make sure to start the queue worker background process, please check the Help page for more info."):"",outlined:""},model:{value:_vm.form.QUEUE_CONNECTION,callback:function callback($$v){_vm.$set(_vm.form,"QUEUE_CONNECTION",$$v);},expression:"form.QUEUE_CONNECTION"}}),_vm._v(" "),_vm.form.QUEUE_CONNECTION==="redis"?[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("URL"),error:_vm.form.errors.has("REDIS_URL"),"error-messages":_vm.form.errors.get("REDIS_URL"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"REDIS_URL");}},model:{value:_vm.form.REDIS_URL,callback:function callback($$v){_vm.$set(_vm.form,"REDIS_URL",$$v);},expression:"form.REDIS_URL"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Host"),rules:[_vm.validationRequired],error:_vm.form.errors.has("REDIS_HOST"),"error-messages":_vm.form.errors.get("REDIS_HOST"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"REDIS_HOST");}},model:{value:_vm.form.REDIS_HOST,callback:function callback($$v){_vm.$set(_vm.form,"REDIS_HOST",$$v);},expression:"form.REDIS_HOST"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Port"),rules:[_vm.validationRequired,_vm.validationInteger],error:_vm.form.errors.has("REDIS_PORT"),"error-messages":_vm.form.errors.get("REDIS_PORT"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"REDIS_PORT");}},model:{value:_vm.form.REDIS_PORT,callback:function callback($$v){_vm.$set(_vm.form,"REDIS_PORT",$$v);},expression:"form.REDIS_PORT"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Database"),rules:[_vm.validationRequired],error:_vm.form.errors.has("REDIS_DB"),"error-messages":_vm.form.errors.get("REDIS_DB"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"REDIS_DB");}},model:{value:_vm.form.REDIS_DB,callback:function callback($$v){_vm.$set(_vm.form,"REDIS_DB",$$v);},expression:"form.REDIS_DB"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Password"),error:_vm.form.errors.has("REDIS_PASSWORD"),"error-messages":_vm.form.errors.get("REDIS_PASSWORD"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"REDIS_PASSWORD");}},model:{value:_vm.form.REDIS_PASSWORD,callback:function callback($$v){_vm.$set(_vm.form,"REDIS_PASSWORD",$$v);},expression:"form.REDIS_PASSWORD"}})]:_vm._e()],2)],1),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Crypto API")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["default"],{staticClass:"mb-5",attrs:{items:_vm.cryptoApiProviders,label:_vm.$t("API"),error:_vm.form.errors.has("API_CRYPTO_PROVIDER"),"error-messages":_vm.form.errors.get("API_CRYPTO_PROVIDER"),hint:_vm.$t("It is important to refresh the data after changing the API and saving the settings."),"persistent-hint":"",outlined:""},scopedSlots:_vm._u([{key:"append-outer",fn:function fn(){return[_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_18__["default"],{staticClass:"mt-n2",attrs:{color:"primary",loading:_vm.assetSeederButtonDisabled,disabled:_vm.assetSeederButtonDisabled},on:{click:_vm.runAssetSeeder}},[_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_20__["default"],{staticClass:"mr-2",attrs:{small:""}},[_vm._v("\n                              mdi-autorenew\n                            ")]),_vm._v("\n                            "+_vm._s(_vm.$t("Refresh"))+"\n                          ")],1)];},proxy:true}]),model:{value:_vm.form.API_CRYPTO_PROVIDER,callback:function callback($$v){_vm.$set(_vm.form,"API_CRYPTO_PROVIDER",$$v);},expression:"form.API_CRYPTO_PROVIDER"}}),_vm._v(" "),_vm.form.API_CRYPTO_PROVIDER==="coincap"?_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("API key"),error:_vm.form.errors.has("API_CRYPTO_PROVIDERS_COINCAP_API_KEY"),"error-messages":_vm.form.errors.get("API_CRYPTO_PROVIDERS_COINCAP_API_KEY"),outlined:""},scopedSlots:_vm._u([{key:"append",fn:function fn(){return[_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_18__["default"],{attrs:{small:"",color:"primary",href:"https://coincap.io/api-key",target:"_blank"}},[_vm._v("\n                            "+_vm._s(_vm.$t("Get a free key"))+"\n                          ")])];},proxy:true}],null,false,1565872523),model:{value:_vm.form.API_CRYPTO_PROVIDERS_COINCAP_API_KEY,callback:function callback($$v){_vm.$set(_vm.form,"API_CRYPTO_PROVIDERS_COINCAP_API_KEY",$$v);},expression:"form.API_CRYPTO_PROVIDERS_COINCAP_API_KEY"}}):_vm.form.API_CRYPTO_PROVIDER==="cryptocompare"?_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("API key"),rules:[_vm.validationRequired],error:_vm.form.errors.has("API_CRYPTO_PROVIDERS_CRYPTOCOMPARE_API_KEY"),"error-messages":_vm.form.errors.get("API_CRYPTO_PROVIDERS_CRYPTOCOMPARE_API_KEY"),outlined:""},scopedSlots:_vm._u([{key:"append",fn:function fn(){return[_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_18__["default"],{attrs:{small:"",color:"primary",href:"https://min-api.cryptocompare.com",target:"_blank"}},[_vm._v("\n                            "+_vm._s(_vm.$t("Get a free key"))+"\n                          ")])];},proxy:true}]),model:{value:_vm.form.API_CRYPTO_PROVIDERS_CRYPTOCOMPARE_API_KEY,callback:function callback($$v){_vm.$set(_vm.form,"API_CRYPTO_PROVIDERS_CRYPTOCOMPARE_API_KEY",$$v);},expression:"form.API_CRYPTO_PROVIDERS_CRYPTOCOMPARE_API_KEY"}}):_vm._e()],1)],1)],1)],1)],1)],1),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_8__["default"],[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__["default"],{attrs:{flat:""}},[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__.VCardText,[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_11__["default"],[_vm._l(_vm.providers,function(provider){return _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],{key:provider},[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.ucfirst(provider)))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Client ID"),error:_vm.form.errors.has(_vm.providerClientIdVariable(provider)),"error-messages":_vm.form.errors.get(_vm.providerClientIdVariable(provider)),outlined:""},model:{value:_vm.form[_vm.providerClientIdVariable(provider)],callback:function callback($$v){_vm.$set(_vm.form,_vm.providerClientIdVariable(provider),$$v);},expression:"form[providerClientIdVariable(provider)]"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Client secret"),error:_vm.form.errors.has(_vm.providerClientSecretVariable(provider)),"error-messages":_vm.form.errors.get(_vm.providerClientSecretVariable(provider)),outlined:""},model:{value:_vm.form[_vm.providerClientSecretVariable(provider)],callback:function callback($$v){_vm.$set(_vm.form,_vm.providerClientSecretVariable(provider),$$v);},expression:"form[providerClientSecretVariable(provider)]"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{ref:"provider-".concat(provider),refInFor:true,attrs:{value:_vm.providerRedirectUrlValue(provider),label:_vm.$t("Redirect URL"),"append-icon":"mdi-content-copy",outlined:"",readonly:""},on:{"click:append":function clickAppend($event){return _vm.copyToClipboard(_vm.$refs["provider-".concat(provider)][0]);}}})],1)],1);}),_vm._v(" "),_vm._l(_vm.web3AuthProviders,function(provider){return _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],{key:provider},[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.ucfirst(provider)))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{attrs:{label:_vm.$t("Enabled"),color:"primary","false-value":"false","true-value":"true"},model:{value:_vm.form[_vm.web3AuthProviderEnabledVariable(provider)],callback:function callback($$v){_vm.$set(_vm.form,_vm.web3AuthProviderEnabledVariable(provider),$$v);},expression:"form[web3AuthProviderEnabledVariable(provider)]"}})],1)],1);})],2),_vm._v(" "),void 0],2)],1)],1),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_8__["default"],[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__["default"],{attrs:{flat:""}},[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__.VCardText,[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_11__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("SMTP")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Host"),error:_vm.form.errors.has("MAIL_HOST"),"error-messages":_vm.form.errors.get("MAIL_HOST"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"MAIL_HOST");}},model:{value:_vm.form.MAIL_HOST,callback:function callback($$v){_vm.$set(_vm.form,"MAIL_HOST",$$v);},expression:"form.MAIL_HOST"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Port"),rules:[_vm.validationNumeric],error:_vm.form.errors.has("MAIL_PORT"),"error-messages":_vm.form.errors.get("MAIL_PORT"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"MAIL_PORT");}},model:{value:_vm.form.MAIL_PORT,callback:function callback($$v){_vm.$set(_vm.form,"MAIL_PORT",$$v);},expression:"form.MAIL_PORT"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Encryption"),error:_vm.form.errors.has("MAIL_ENCRYPTION"),"error-messages":_vm.form.errors.get("MAIL_ENCRYPTION"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"MAIL_ENCRYPTION");}},model:{value:_vm.form.MAIL_ENCRYPTION,callback:function callback($$v){_vm.$set(_vm.form,"MAIL_ENCRYPTION",$$v);},expression:"form.MAIL_ENCRYPTION"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("User name"),error:_vm.form.errors.has("MAIL_USERNAME"),"error-messages":_vm.form.errors.get("MAIL_USERNAME"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"MAIL_USERNAME");}},model:{value:_vm.form.MAIL_USERNAME,callback:function callback($$v){_vm.$set(_vm.form,"MAIL_USERNAME",$$v);},expression:"form.MAIL_USERNAME"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Password"),error:_vm.form.errors.has("MAIL_PASSWORD"),"error-messages":_vm.form.errors.get("MAIL_PASSWORD"),outlined:"",type:"password"},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"MAIL_PASSWORD");}},model:{value:_vm.form.MAIL_PASSWORD,callback:function callback($$v){_vm.$set(_vm.form,"MAIL_PASSWORD",$$v);},expression:"form.MAIL_PASSWORD"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("E-mail from address"),rules:[_vm.validationEmail],error:_vm.form.errors.has("MAIL_FROM_ADDRESS"),"error-messages":_vm.form.errors.get("MAIL_FROM_ADDRESS"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"MAIL_FROM_ADDRESS");}},model:{value:_vm.form.MAIL_FROM_ADDRESS,callback:function callback($$v){_vm.$set(_vm.form,"MAIL_FROM_ADDRESS",$$v);},expression:"form.MAIL_FROM_ADDRESS"}}),_vm._v(" "),_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("E-mail from name"),error:_vm.form.errors.has("MAIL_FROM_NAME"),"error-messages":_vm.form.errors.get("MAIL_FROM_NAME"),outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"MAIL_FROM_NAME");}},model:{value:_vm.form.MAIL_FROM_NAME,callback:function callback($$v){_vm.$set(_vm.form,"MAIL_FROM_NAME",$$v);},expression:"form.MAIL_FROM_NAME"}})],1)],1),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Notifications")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_11__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_12__["default"],[_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_13__["default"],[_vm._v(_vm._s(_vm.$t("Admin")))]),_vm._v(" "),_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["default"],[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("E-mail"),error:_vm.form.errors.has("NOTIFICATIONS_ADMIN_EMAIL"),"error-messages":_vm.form.errors.get("NOTIFICATIONS_ADMIN_EMAIL"),rules:[_vm.validationEmail],outlined:""},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"NOTIFICATIONS_ADMIN_EMAIL");}},model:{value:_vm.form.NOTIFICATIONS_ADMIN_EMAIL,callback:function callback($$v){_vm.$set(_vm.form,"NOTIFICATIONS_ADMIN_EMAIL",$$v);},expression:"form.NOTIFICATIONS_ADMIN_EMAIL"}}),_vm._v(" "),_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{attrs:{label:_vm.$t("Notify when a new user signs up"),color:"primary","false-value":"false","true-value":"true"},model:{value:_vm.form.NOTIFICATIONS_ADMIN_REGISTRATION_ENABLED,callback:function callback($$v){_vm.$set(_vm.form,"NOTIFICATIONS_ADMIN_REGISTRATION_ENABLED",$$v);},expression:"form.NOTIFICATIONS_ADMIN_REGISTRATION_ENABLED"}}),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_16__["default"],[_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],[_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{attrs:{label:_vm.$t("Notify when a user wins a game"),color:"primary","false-value":"false","true-value":"true"},model:{value:_vm.form.NOTIFICATIONS_ADMIN_GAME_WIN_ENABLED,callback:function callback($$v){_vm.$set(_vm.form,"NOTIFICATIONS_ADMIN_GAME_WIN_ENABLED",$$v);},expression:"form.NOTIFICATIONS_ADMIN_GAME_WIN_ENABLED"}})],1),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Win treshold"),error:_vm.form.errors.has("NOTIFICATIONS_ADMIN_GAME_WIN_TRESHOLD"),"error-messages":_vm.form.errors.get("NOTIFICATIONS_ADMIN_GAME_WIN_TRESHOLD"),rules:""+_vm.form.NOTIFICATIONS_ADMIN_GAME_WIN_ENABLED==="false"?[]:[_vm.validationPositiveInteger],disabled:""+_vm.form.NOTIFICATIONS_ADMIN_GAME_WIN_ENABLED==="false",outlined:"",suffix:_vm.$t("credits")},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"NOTIFICATIONS_ADMIN_GAME_WIN_TRESHOLD");}},model:{value:_vm.form.NOTIFICATIONS_ADMIN_GAME_WIN_TRESHOLD,callback:function callback($$v){_vm.$set(_vm.form,"NOTIFICATIONS_ADMIN_GAME_WIN_TRESHOLD",_vm._n($$v));},expression:"form.NOTIFICATIONS_ADMIN_GAME_WIN_TRESHOLD"}})],1)],1),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_16__["default"],[_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],[_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{attrs:{label:_vm.$t("Notify when a user loses a game"),color:"primary","false-value":"false","true-value":"true"},model:{value:_vm.form.NOTIFICATIONS_ADMIN_GAME_LOSS_ENABLED,callback:function callback($$v){_vm.$set(_vm.form,"NOTIFICATIONS_ADMIN_GAME_LOSS_ENABLED",$$v);},expression:"form.NOTIFICATIONS_ADMIN_GAME_LOSS_ENABLED"}})],1),_vm._v(" "),_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__["default"],[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Loss treshold"),error:_vm.form.errors.has("NOTIFICATIONS_ADMIN_GAME_LOSS_TRESHOLD"),"error-messages":_vm.form.errors.get("NOTIFICATIONS_ADMIN_GAME_LOSS_TRESHOLD"),rules:""+_vm.form.NOTIFICATIONS_ADMIN_GAME_LOSS_ENABLED==="false"?[]:[_vm.validationPositiveInteger],disabled:""+_vm.form.NOTIFICATIONS_ADMIN_GAME_LOSS_ENABLED==="false",outlined:"",suffix:_vm.$t("credits")},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"NOTIFICATIONS_ADMIN_GAME_LOSS_TRESHOLD");}},model:{value:_vm.form.NOTIFICATIONS_ADMIN_GAME_LOSS_TRESHOLD,callback:function callback($$v){_vm.$set(_vm.form,"NOTIFICATIONS_ADMIN_GAME_LOSS_TRESHOLD",_vm._n($$v));},expression:"form.NOTIFICATIONS_ADMIN_GAME_LOSS_TRESHOLD"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),_vm._v(" "),_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_8__["default"],[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__["default"],{attrs:{flat:""}},[_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__.VCardText,[_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["default"],{attrs:{label:_vm.$t("Debug mode"),color:"primary","false-value":"false","true-value":"true"},model:{value:_vm.form.APP_DEBUG,callback:function callback($$v){_vm.$set(_vm.form,"APP_DEBUG",$$v);},expression:"form.APP_DEBUG"}}),_vm._v(" "),_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["default"],{attrs:{items:_vm.logLevels,label:_vm.$t("Log level"),error:_vm.form.errors.has("LOG_LEVEL"),"error-messages":_vm.form.errors.get("LOG_LEVEL"),outlined:""},model:{value:_vm.form.LOG_LEVEL,callback:function callback($$v){_vm.$set(_vm.form,"LOG_LEVEL",$$v);},expression:"form.LOG_LEVEL"}}),_vm._v(" "),_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["default"],{attrs:{items:_vm.logChannels,label:_vm.$t("Log channel"),error:_vm.form.errors.has("LOG_CHANNEL"),"error-messages":_vm.form.errors.get("LOG_CHANNEL"),outlined:""},model:{value:_vm.form.LOG_CHANNEL,callback:function callback($$v){_vm.$set(_vm.form,"LOG_CHANNEL",$$v);},expression:"form.LOG_CHANNEL"}}),_vm._v(" "),_vm.form.LOG_CHANNEL==="daily"?_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"],{attrs:{label:_vm.$t("Keep log files for"),rules:[_vm.validationNumeric],error:_vm.form.errors.has("APP_LOG_DAYS"),"error-messages":_vm.form.errors.get("APP_LOG_DAYS"),outlined:"",suffix:_vm.$t("days")},on:{keydown:function keydown($event){return _vm.clearFormErrors($event,"APP_LOG_DAYS");}},model:{value:_vm.form.APP_LOG_DAYS,callback:function callback($$v){_vm.$set(_vm.form,"APP_LOG_DAYS",$$v);},expression:"form.APP_LOG_DAYS"}}):_vm._e()],1)],1)],1),_vm._v(" "),_vm._l(_vm.packages,function(pkg,id){return[_vm.packageComponents[id]?_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_8__["default"],{key:id},[_c(_vm.packageComponents[id],{tag:"component",attrs:{"package-id":id,form:_vm.form},on:{input:_vm.mergePackageConfig}})],1):_vm._e()];})],2),_vm._v(" "),_c("div",{staticClass:"text-right mt-3"},[_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_18__["default"],{attrs:{type:"submit",color:"primary",disabled:!_vm.formIsValid||_vm.form.busy,loading:_vm.form.busy}},[_vm._v(_vm._s(_vm.$t("Save")))])],1)],1)],1)],1)],1);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./resources/js/components/Admin/EntityParameters.vue?vue&type=template&id=14c046b8&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Admin/EntityParameters.vue?vue&type=template&id=14c046b8& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityParameters_vue_vue_type_template_id_14c046b8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityParameters_vue_vue_type_template_id_14c046b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityParameters_vue_vue_type_template_id_14c046b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EntityParameters.vue?vue&type=template&id=14c046b8& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/EntityParameters.vue?vue&type=template&id=14c046b8&");


/***/ }),

/***/ "./resources/js/components/Admin/FileEditor.vue?vue&type=template&id=3d50bed4&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Admin/FileEditor.vue?vue&type=template&id=3d50bed4& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEditor_vue_vue_type_template_id_3d50bed4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEditor_vue_vue_type_template_id_3d50bed4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEditor_vue_vue_type_template_id_3d50bed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileEditor.vue?vue&type=template&id=3d50bed4& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/FileEditor.vue?vue&type=template&id=3d50bed4&");


/***/ }),

/***/ "./resources/js/components/Admin/FileUpload.vue?vue&type=template&id=e8cf7d30&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Admin/FileUpload.vue?vue&type=template&id=e8cf7d30&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_template_id_e8cf7d30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_template_id_e8cf7d30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_template_id_e8cf7d30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileUpload.vue?vue&type=template&id=e8cf7d30&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/FileUpload.vue?vue&type=template&id=e8cf7d30&scoped=true&");


/***/ }),

/***/ "./resources/js/components/ColorPicker.vue?vue&type=template&id=023f0f94&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ColorPicker.vue?vue&type=template&id=023f0f94&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_template_id_023f0f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_template_id_023f0f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_template_id_023f0f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorPicker.vue?vue&type=template&id=023f0f94&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ColorPicker.vue?vue&type=template&id=023f0f94&scoped=true&");


/***/ }),

/***/ "./resources/js/pages/admin/settings/index.vue?vue&type=template&id=23b11c8f&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/admin/settings/index.vue?vue&type=template&id=23b11c8f& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_23b11c8f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_23b11c8f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_23b11c8f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=23b11c8f& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/settings/index.vue?vue&type=template&id=23b11c8f&");


/***/ }),

/***/ "./packages lazy recursive ^\\.\\/.*\\/resources\\/js\\/pages\\/admin\\/settings$":
/*!***********************************************************************************************************************!*\
  !*** ./packages/ lazy ^\.\/.*\/resources\/js\/pages\/admin\/settings$ chunkName: packages/[request] namespace object ***!
  \***********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./baccarat/resources/js/pages/admin/settings": [
		"./packages/baccarat/resources/js/pages/admin/settings.vue",
		"packages/baccarat-resources-js-pages-admin-settings"
	],
	"./game-providers/resources/js/pages/admin/settings": [
		"./packages/game-providers/resources/js/pages/admin/settings.vue",
		"packages/game-providers-resources-js-pages-admin-settings"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./packages lazy recursive ^\\.\\/.*\\/resources\\/js\\/pages\\/admin\\/settings$";
module.exports = webpackAsyncContext;

/***/ })

}]);