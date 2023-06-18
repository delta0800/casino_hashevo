"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/baccarat-resources-js-pages-game"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/game.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/game.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Games_CardGame_Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/components/Games/CardGame/Table */ "./resources/js/components/Games/CardGame/Table.vue");
/* harmony import */ var _components_Games_CardGame_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/Games/CardGame/Button */ "./resources/js/components/Games/CardGame/Button.vue");
/* harmony import */ var _components_Games_CardGame_Hand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/Games/CardGame/Hand */ "./resources/js/components/Games/CardGame/Hand.vue");
/* harmony import */ var _components_Games_CardGame_Bet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/Games/CardGame/Bet */ "./resources/js/components/Games/CardGame/Bet.vue");
/* harmony import */ var _components_Games_CardGame_ModalResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/Games/CardGame/ModalResult */ "./resources/js/components/Games/CardGame/ModalResult.vue");
/* harmony import */ var _paytable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paytable */ "./packages/baccarat/resources/js/pages/paytable.vue");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info */ "./packages/baccarat/resources/js/pages/info.vue");
/* harmony import */ var packages_baccarat_resources_audio_swoosh_wav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! packages/baccarat/resources/audio/swoosh.wav */ "./packages/baccarat/resources/audio/swoosh.wav");
/* harmony import */ var packages_baccarat_resources_audio_win_wav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! packages/baccarat/resources/audio/win.wav */ "./packages/baccarat/resources/audio/win.wav");
/* harmony import */ var packages_baccarat_resources_audio_lose_wav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! packages/baccarat/resources/audio/lose.wav */ "./packages/baccarat/resources/audio/lose.wav");
/* harmony import */ var packages_baccarat_resources_audio_push_wav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! packages/baccarat/resources/audio/push.wav */ "./packages/baccarat/resources/audio/push.wav");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _mixins_Game__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/mixins/Game */ "./resources/js/mixins/Game.vue");
/* harmony import */ var _mixins_Sound__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/mixins/Sound */ "./resources/js/mixins/Sound.vue");
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");
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
  name: 'Baccarat',
  components: {
    CardTable: _components_Games_CardGame_Table__WEBPACK_IMPORTED_MODULE_0__["default"],
    ActionButton: _components_Games_CardGame_Button__WEBPACK_IMPORTED_MODULE_1__["default"],
    Hand: _components_Games_CardGame_Hand__WEBPACK_IMPORTED_MODULE_2__["default"],
    Bet: _components_Games_CardGame_Bet__WEBPACK_IMPORTED_MODULE_3__["default"],
    ModalResult: _components_Games_CardGame_ModalResult__WEBPACK_IMPORTED_MODULE_4__["default"],
    Paytable: _paytable__WEBPACK_IMPORTED_MODULE_5__["default"],
    Info: _info__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_12__["default"], _mixins_Game__WEBPACK_IMPORTED_MODULE_13__["default"], _mixins_Sound__WEBPACK_IMPORTED_MODULE_14__["default"]],
  data: function data() {
    return {
      ready: true,
      playing: false,
      loading: false,
      gameBet: {
        player: 0,
        banker: 0,
        tie: 0
      },
      gameBetType: 0,
      gameBetOld: null,
      playerCards: [],
      dealerCards: [],
      playerDemo: [],
      dealerDemo: [],
      playerResult: '',
      dealerResult: '',
      resultModal: false,
      result: '',
      win: 0
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_16__.mapState)('auth', ['account'])), {}, {
    betMode: function betMode() {
      if (this.playing || this.loading) return null;
      switch (this.gameBetType) {
        case 0:
          return 'player';
        case 1:
          return 'tie';
        default:
          return 'banker';
      }
    },
    isRebetActive: function isRebetActive() {
      return this.gameBetOld && Object.values(this.gameBet).reduce(function (a, b) {
        return a + b;
      }, 0) === 0 && this.account.balance >= Object.values(this.gameBetOld).reduce(function (acc, item) {
        return acc + item;
      }, 0);
    }
  }),
  beforeDestroy: function beforeDestroy() {
    this.ready = false;
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_16__.mapActions)({
    updateUserAccountBalance: 'auth/updateUserAccountBalance',
    setProvablyFairGame: 'provably-fair/set'
  })), {}, {
    placeBet: function placeBet(bet, mode) {
      if (!this.playing) this.gameBet[mode] += bet;
    },
    onUnbet: function onUnbet(bet, mode) {
      if (!this.playing) this.gameBet[mode] -= bet;
    },
    onUnbetClick: function onUnbetClick(idx, f) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(!_this.playing && !_this.loading)) {
                _context.next = 6;
                break;
              }
              if (!(_this.gameBetType !== idx)) {
                _context.next = 5;
                break;
              }
              _this.gameBetType = idx;
              _context.next = 5;
              return _this.$nextTick();
            case 5:
              f();
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    resetPlayers: function resetPlayers() {
      this.playerCards = [];
      this.dealerCards = [];
      this.playerDemo = [];
      this.dealerDemo = [];
      this.playerResult = '';
      this.dealerResult = '';
    },
    modalWin: function modalWin(win) {
      this.result = this.$t('You win');
      this.win = win;
      this.resultModal = true;
    },
    modalLose: function modalLose() {
      this.result = this.$t('You lose');
      this.win = -1;
      this.resultModal = true;
    },
    modalPush: function modalPush() {
      this.result = this.$t('Push');
      this.win = 0;
      this.resultModal = true;
    },
    onDealClick: function onDealClick() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var endpoint, requestParams, _yield$axios$post, game, resultDemo, i;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this2.loading = true;
              _this2.playing = true;
              _this2.resetPlayers();
              // update user balance
              _this2.updateUserAccountBalance(_this2.account.balance - (_this2.gameBet.player + _this2.gameBet.banker + _this2.gameBet.tie));
              _this2.sound(packages_baccarat_resources_audio_swoosh_wav__WEBPACK_IMPORTED_MODULE_7__["default"]);
              _context3.next = 7;
              return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_15__.sleep)(500);
            case 7:
              endpoint = _this2.getRoute('play');
              requestParams = {
                hash: _this2.provablyFairGame.hash,
                player_bet: _this2.gameBet.player === 0 ? null : _this2.gameBet.player,
                banker_bet: _this2.gameBet.banker === 0 ? null : _this2.gameBet.banker,
                tie_bet: _this2.gameBet.tie === 0 ? null : _this2.gameBet.tie
              }; // execute the action
              _context3.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_11___default().post(endpoint, requestParams);
            case 11:
              _yield$axios$post = _context3.sent;
              game = _yield$axios$post.data;
              _this2.setProvablyFairGame({
                key: _this2.gamePackageId,
                game: game.pf_game
              });
              _this2.loading = false;
              if (_this2.ready) {
                _context3.next = 17;
                break;
              }
              return _context3.abrupt("return");
            case 17:
              _this2.playerCards.push(game.gameable.player_hand[0]);
              _context3.next = 20;
              return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_15__.sleep)(400);
            case 20:
              _this2.dealerCards.push(game.gameable.banker_hand[0]);
              _context3.next = 23;
              return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_15__.sleep)(400);
            case 23:
              _this2.playerCards.push(game.gameable.player_hand[1]);
              _context3.next = 26;
              return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_15__.sleep)(400);
            case 26:
              _this2.dealerCards.push(game.gameable.banker_hand[1]);
              _context3.next = 29;
              return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_15__.sleep)(400);
            case 29:
              _this2.playerResult = game.gameable.initial_player_score.toString();
              _this2.dealerResult = game.gameable.initial_banker_score.toString();
              _context3.next = 33;
              return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_15__.sleep)(2000);
            case 33:
              if (!(game.gameable.player_hand.length > 2)) {
                _context3.next = 37;
                break;
              }
              _this2.playerCards.push(game.gameable.player_hand[2]);
              _context3.next = 37;
              return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_15__.sleep)(800);
            case 37:
              if (!(game.gameable.banker_hand.length > 2)) {
                _context3.next = 41;
                break;
              }
              _this2.dealerCards.push(game.gameable.banker_hand[2]);
              _context3.next = 41;
              return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_15__.sleep)(800);
            case 41:
              _this2.playerResult = game.gameable.player_score.toString();
              _this2.dealerResult = game.gameable.banker_score.toString();
              _context3.next = 45;
              return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_15__.sleep)(1000);
            case 45:
              resultDemo = /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                  var betWin;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        betWin = {};
                        if (game.gameable.banker_win < game.gameable.banker_bet) {
                          _this2.$refs.cardTable.betLoss('banker');
                        } else {
                          betWin.banker = game.gameable.banker_win - game.gameable.banker_bet;
                        }
                        if (game.gameable.player_win < game.gameable.player_bet) {
                          _this2.$refs.cardTable.betLoss('player');
                        } else {
                          betWin.player = game.gameable.player_win - game.gameable.player_bet;
                        }
                        if (game.gameable.tie_win < game.gameable.tie_bet) {
                          _this2.$refs.cardTable.betLoss('tie');
                        } else {
                          betWin.tie = game.gameable.tie_win - game.gameable.tie_bet;
                        }
                        if (!(Object.keys(betWin).length > 0 && Object.values(betWin).reduce(function (acc, item) {
                          return acc + item;
                        }, 0) > 0)) {
                          _context2.next = 7;
                          break;
                        }
                        _context2.next = 7;
                        return _this2.$refs.cardTable.demoWin(betWin);
                      case 7:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function resultDemo() {
                  return _ref.apply(this, arguments);
                };
              }(); // play sound
              if (!(game.win > game.bet)) {
                _context3.next = 53;
                break;
              }
              _this2.sound(_this2.config.sounds.win || packages_baccarat_resources_audio_win_wav__WEBPACK_IMPORTED_MODULE_8__["default"]);
              _context3.next = 50;
              return resultDemo();
            case 50:
              _this2.modalWin(game.win);
              _context3.next = 64;
              break;
            case 53:
              if (!(game.win === game.bet)) {
                _context3.next = 60;
                break;
              }
              _this2.sound(_this2.config.sounds.lose || packages_baccarat_resources_audio_push_wav__WEBPACK_IMPORTED_MODULE_10__["default"]);
              _context3.next = 57;
              return resultDemo();
            case 57:
              _this2.modalPush();
              _context3.next = 64;
              break;
            case 60:
              _this2.sound(_this2.config.sounds.lose || packages_baccarat_resources_audio_lose_wav__WEBPACK_IMPORTED_MODULE_9__["default"]);
              _context3.next = 63;
              return resultDemo();
            case 63:
              _this2.modalLose();
            case 64:
              _this2.updateUserAccountBalance(game.account.balance);
              _this2.gameBetOld = {};
              for (i in _this2.gameBet) {
                _this2.gameBetOld[i] = _this2.gameBet[i];
                _this2.gameBet[i] = 0;
              }
              _this2.playing = false;
              _context3.next = 70;
              return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_15__.sleep)(3000);
            case 70:
              if (!_this2.playing && !_this2.loading) _this2.resetPlayers();
            case 71:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    onRebetClick: function onRebetClick() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var i;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this3.$nextTick();
            case 2:
              for (i in _this3.gameBetOld) {
                _this3.$refs.cardTable.placeBet(_this3.gameBetOld[i], null, i);
              }
              _this3.resetPlayers();
              _this3.loading = true;
              _context4.next = 7;
              return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_15__.sleep)(1000);
            case 7:
              _this3.onDealClick();
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    onNewbetClick: function onNewbetClick() {
      this.$refs.cardTable.reset();
      this.resetPlayers();
      for (var i in this.gameBet) this.gameBet[i] = 0;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/paytable.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/paytable.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      playerBetPayout: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('baccarat.payouts.player') - 1 + ':1',
      tieBetPayout: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('baccarat.payouts.tie') - 1 + ':1',
      bankerBetPayout: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('baccarat.payouts.banker') - 1 + ':1'
    };
  },
  computed: {
    paytable: function paytable() {
      return this.config.paytable;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Bet.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Bet.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChipValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChipValues */ "./resources/js/components/Games/CardGame/ChipValues.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//  :style="fontSize != 1 ? `font-size: ${fontSize * 37}px; line-height: ${fontSize * 29}px;` : ''"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    label: {
      type: String,
      "default": ''
    },
    noValue: {
      type: Boolean,
      "default": false
    },
    dealer: {
      type: Boolean,
      "default": false
    },
    valueRight: {
      type: Boolean,
      "default": false
    },
    size: {
      type: Number,
      required: false,
      "default": 1
    },
    fontSize: {
      type: Number,
      required: false,
      "default": 1
    },
    position: {
      type: Number,
      required: false,
      "default": 0
    },
    chips: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    noCircle: {
      type: Boolean,
      "default": false
    },
    blink: {
      type: Boolean,
      required: false,
      "default": false
    }
  },
  data: function data() {
    var _this = this;
    return {
      animation: true,
      lastChipsLen: 0,
      betChips: [],
      chipSpeed: 300,
      chipSpeedDealer: 600,
      chipOptimized: true,
      requestAnimationFrame: function requestAnimationFrame(e) {
        return setTimeout(e, 1);
      },
      requestAnimationFrame_get: function requestAnimationFrame_get() {
        var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
        _this.requestAnimationFrame = raf ? raf.bind(window) : null;
      }
    };
  },
  computed: {
    betValue: function betValue() {
      return this.betChips.reduce(function (acc, chip) {
        return acc + chip.bet;
      }, 0);
    }
  },
  watch: {
    position: function position() {
      var _this2 = this;
      this.betChips.forEach(function (chip, i) {
        if (chip.animationDone) {
          chip.posTo.x = 3184 / 2 + (178 + 8) * _this2.position + (0.5 - Math.random()) * 10;
          chip.posTo.y = 1100.5 - (i + _this2.betChips.length) * 10 + (0.5 - Math.random()) * 5;
          chip.pos.x = chip.posTo.x;
          chip.pos.y = chip.posTo.y;
        }
      });
    },
    chips: function chips(newVal) {
      var _this3 = this;
      if (Array.isArray(newVal)) {
        if (this.lastChipsLen < newVal.length) {
          var _this$betChips;
          var newChips = newVal.slice(this.lastChipsLen);
          this.lastChipsLen = newVal.length;
          // for (let i = newChips.length - 1; i >= 0; i--) {
          newChips.forEach(function (chip, i) {
            // chip = newChips[i]
            chip.posFrom = {
              x: chip.pos.x,
              y: chip.pos.y
            };
            chip.posTo = {
              x: 3184 / 2 + (178 + 8) * _this3.position + (0.5 - Math.random()) * 10,
              y: 1100.5 - (i + _this3.betChips.length) * 10 + (0.5 - Math.random()) * 5
            };
            chip.t = Date.now() + 100 * i; // (newChips.length - i)
            chip.animationDone = false;
            chip.chipSpeed = _this3.dealer ? _this3.chipSpeedDealer : _this3.chipSpeed;
          });
          (_this$betChips = this.betChips).push.apply(_this$betChips, _toConsumableArray(newChips));
          this.chipOptimized = false;
        } else if (newVal.length === 0 && this.lastChipsLen > 0) {
          this.lastChipsLen = 0;
          this.betChips.forEach(function (chip, i) {
            chip.t = Date.now() + 40 * (_this3.betChips.length - i);
            chip.animationDone = false;
            chip.animationRemove = true;
            chip.posFrom = {
              x: chip.pos.x,
              y: chip.pos.y
            };
            chip.posTo = {
              x: 3184 / 2 + (178 + 8) * _this3.position + (0.5 - Math.random()) * 14,
              y: _this3.dealer ? 160 : 1520
            };
            chip.chipSpeed = _this3.dealer ? _this3.chipSpeedDealer : _this3.chipSpeed;
          });
        } else {
          this.lastChipsLen = newVal.length;
          var unbet = this.betValue - newVal.reduce(function (acc, item) {
            return acc + item.bet;
          }, 0);
          var bet = this.betValue - unbet;
          var _newChips = [];
          while (bet > 0) {
            var chip = _ChipValues__WEBPACK_IMPORTED_MODULE_0__["default"].reduce(function (acc, val) {
              return bet >= val ? val : acc;
            }, 1);
            bet -= chip;
            _newChips.push({
              bet: chip,
              pos: {
                x: _newChips.length < this.betChips.length ? this.betChips[_newChips.length].pos.x : 3184 / 2 + (178 + 8) * this.position + (0.5 - Math.random()) * 10,
                y: _newChips.length < this.betChips.length ? this.betChips[_newChips.length].pos.y : 1100.5 - _newChips.length * 10 + (0.5 - Math.random()) * 5
              },
              animationDone: true
            });
          }
          if (unbet > 0) {
            _newChips.push({
              bet: unbet,
              posFrom: {
                x: _newChips.length < this.betChips.length ? this.betChips[_newChips.length].pos.x : 3184 / 2 + (178 + 8) * this.position + (0.5 - Math.random()) * 10,
                y: _newChips.length < this.betChips.length ? this.betChips[_newChips.length].pos.y : 1100.5 - _newChips.length * 10 + (0.5 - Math.random()) * 5
              },
              pos: {
                x: _newChips.length < this.betChips.length ? this.betChips[_newChips.length].pos.x : 3184 / 2 + (178 + 8) * this.position + (0.5 - Math.random()) * 10,
                y: _newChips.length < this.betChips.length ? this.betChips[_newChips.length].pos.y : 1100.5 - _newChips.length * 10 + (0.5 - Math.random()) * 5
              },
              posTo: {
                x: 3184 / 2 + (178 + 8) * this.position + (0.5 - Math.random()) * 14,
                y: 1520
              },
              animationDone: false,
              animationRemove: true,
              t: Date.now(),
              chipSpeed: this.dealer ? this.chipSpeedDealer : this.chipSpeed
            });
          }
          this.betChips = _newChips;
        }
      }
    }
  },
  mounted: function mounted() {
    this.animate();
  },
  beforeDestroy: function beforeDestroy() {
    this.animation = false;
  },
  methods: {
    easeInOutCubic: function easeInOutCubic(x) {
      return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    },
    animate: function animate() {
      var _this4 = this;
      if (!this.animation) return;
      this.requestAnimationFrame(this.animate);
      var t = Date.now();
      this.betChips.forEach(function (chip) {
        if (!chip.animationDone && chip.t <= t) {
          var mt = t - chip.t;
          if (mt >= chip.chipSpeed) {
            chip.animationDone = true;
            chip.pos.x = chip.posTo.x;
            chip.pos.y = chip.posTo.y;
          } else {
            var k = _this4.easeInOutCubic(mt / chip.chipSpeed);
            chip.pos.x = chip.posFrom.x + (chip.posTo.x - chip.posFrom.x) * k;
            chip.pos.y = chip.posFrom.y + (chip.posTo.y - chip.posFrom.y) * k;
          }
        }
      });
      if (!this.chipOptimized && this.betChips.reduce(function (acc, item) {
        return item.animationDone && acc;
      }, true)) {
        var bet = this.betValue;
        var newChips = [];
        while (bet > 0) {
          var chip = _ChipValues__WEBPACK_IMPORTED_MODULE_0__["default"].reduce(function (acc, val) {
            return bet >= val ? val : acc;
          }, 1);
          bet -= chip;
          newChips.push({
            bet: chip,
            pos: {
              x: newChips.length < this.betChips.length ? this.betChips[newChips.length].pos.x : 3184 / 2 + (178 + 8) * this.position + (0.5 - Math.random()) * 10,
              y: newChips.length < this.betChips.length ? this.betChips[newChips.length].pos.y : 1100.5 - newChips.length * 10 + (0.5 - Math.random()) * 5
            },
            animationDone: true
          });
        }
        if (newChips.length !== this.betChips.length) {
          this.betChips = newChips;
        }
        this.chipOptimized = true;
        this.$emit('animated');
      }
      if (this.betChips.length > 0 && this.betChips.reduce(function (acc, item) {
        return item.animationDone && acc;
      }, true) && this.betChips[this.betChips.length - 1].animationRemove) {
        while (this.betChips.length > 0 && this.betChips[this.betChips.length - 1].animationRemove) this.betChips.pop();
        this.$emit('animated');
      }
    },
    chipClick: function chipClick(i) {
      if (this.betChips.length === i + 1) {
        this.$emit('unbet');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Button.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Button.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _audio_common_click_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/../audio/common/click.wav */ "./resources/audio/common/click.wav");
/* harmony import */ var _mixins_Sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/mixins/Sound */ "./resources/js/mixins/Sound.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_mixins_Sound__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      "default": false
    }
  },
  methods: {
    click: function click() {
      if (!this.disabled) {
        this.sound(_audio_common_click_wav__WEBPACK_IMPORTED_MODULE_0__["default"]);
        this.$emit('click');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chip.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chip.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _audio_common_click_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/../audio/common/click.wav */ "./resources/audio/common/click.wav");
/* harmony import */ var _mixins_Sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/mixins/Sound */ "./resources/js/mixins/Sound.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_mixins_Sound__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    value: {
      type: Number,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      "default": false
    },
    active: {
      type: Boolean,
      required: false,
      "default": false
    },
    slide: {
      type: Number,
      required: true
    }
  },
  methods: {
    click: function click() {
      if (!this.disabled) {
        this.sound(_audio_common_click_wav__WEBPACK_IMPORTED_MODULE_0__["default"]);
        var chip = this.$refs.chip;
        var el = chip;
        var x = el.offsetLeft - el.offsetWidth * this.slide;
        var y = el.offsetTop;
        do {
          el = el.parentElement;
          // x += el.offsetLeft
          // y += el.offsetTop
        } while (!el.classList.contains('chips-container'));
        x += el.offsetLeft + 138 / 2;
        y += el.offsetTop + 138 / 2;
        this.$emit('click', {
          x: x,
          y: y
        });
        // const parent = chip.parentElement
        // this.$emit('click', { x: chip.offsetLeft + parent.offsetLeft + chip.offsetWidth / 2, y: chip.offsetTop + parent.offsetTop + chip.offsetHeight / 2 })
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chips.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chips.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-tiny-slider */ "./node_modules/vue-tiny-slider/dist/index.js");
/* harmony import */ var vue_tiny_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_tiny_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chip */ "./resources/js/components/Games/CardGame/Chip.vue");
/* harmony import */ var _ChipValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChipValues */ "./resources/js/components/Games/CardGame/ChipValues.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Chip: _Chip__WEBPACK_IMPORTED_MODULE_1__["default"],
    VueTinySlider: (vue_tiny_slider__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: {
    betMin: {
      type: Number,
      required: true
    },
    betMax: {
      type: Number,
      required: true
    },
    bet: {
      type: Number,
      "default": 0,
      required: false
    },
    disabled: {
      type: Boolean,
      "default": false,
      required: false
    }
  },
  data: function data() {
    return {
      showArrows: false,
      active: 0,
      index: 0,
      slider: null
    };
  },
  computed: _objectSpread({
    slideIndex: function slideIndex() {
      return this.index;
    },
    chipsAvailable: function chipsAvailable() {
      var _this = this;
      return _ChipValues__WEBPACK_IMPORTED_MODULE_2__["default"].filter(function (v) {
        return _this.betMin <= v && v <= _this.betMax;
      });
    },
    betMaxAvailable: function betMaxAvailable() {
      var mb = this.betMax - this.bet;
      if (mb + this.bet > this.account.balance) {
        mb -= mb + this.bet - this.account.balance;
      }
      return mb;
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)('auth', ['account'])),
  mounted: function mounted() {
    var _this2 = this;
    this.$nextTick(function () {
      _this2.showArrows = true;
      _this2.$refs.slider.slider.events.on('indexChanged', _this2.changed);
    });
  },
  methods: {
    click: function click(bet, pos) {
      if (bet === this.active) {
        this.$emit('bet', {
          bet: bet,
          pos: pos
        });
      } else {
        this.active = bet;
      }
    },
    changed: function changed(info) {
      // console.log(info)
      this.index = info.index;
    },
    next: function next() {
      var i = this.$refs.slider.slider.getInfo().index;
      if (i < this.chipsAvailable.length - 5) {
        i++;
        this.$refs.slider.slider.goTo(i);
      }
    },
    prev: function prev() {
      var i = this.$refs.slider.slider.getInfo().index;
      if (i > 0) {
        i--;
        this.$refs.slider.slider.goTo(i);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _mixins_Sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/mixins/Sound */ "./resources/js/mixins/Sound.vue");
/* harmony import */ var _audio_common_card_deal_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/../audio/common/card-deal.wav */ "./resources/audio/common/card-deal.wav");
/* harmony import */ var _audio_common_card_flip_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/../audio/common/card-flip.wav */ "./resources/audio/common/card-flip.wav");
// right: calc(-1 * (3184px - ${calcResultPosX}px));top: calc(-1 * (1440px / 2 + ${calcResultPosY}px));
// background-position: -${calcResultPosX - 300 - resultWidth / 4 + 100 * positionY}px -${637 + calcResultPosY * 0.9}px;





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_mixins_Sound__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    opacity: {
      type: Number,
      "default": 1
    },
    cards: {
      type: Array,
      required: true
    },
    result: {
      type: String,
      required: false,
      "default": ''
    },
    resultBottom: {
      type: Boolean,
      "default": false
    },
    fold: {
      type: Boolean,
      "default": false
    },
    demo: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    hintView: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    cardsCount: {
      type: Number,
      required: false,
      "default": 1
    },
    positionX: {
      type: Number,
      required: false,
      "default": 0
    },
    positionY: {
      type: Number,
      required: false,
      "default": 0
    }
  },
  data: function data() {
    return {
      cardsCountLast: 0,
      cardsCountAdded: 0,
      animationsDisabled: {},
      animationsSource: {},
      animations: []
    };
  },
  computed: {
    frontImageUrl: function frontImageUrl() {
      return this.deck ? this.value !== null ? "url('/images/games/playing-cards/".concat(this.deck, "/").concat(this.suit.toLowerCase()).concat(this.value.toLowerCase(), ".png')") : '' : "url(\"".concat((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('settings.games.playing_cards.front_image'), "\")");
    },
    backImageUrl: function backImageUrl() {
      return this.deck ? "url(\"/images/games/playing-cards/".concat(this.deck, "/back.png\")") : "url(\"".concat((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('settings.games.playing_cards.back_image'), "\")");
    },
    deck: function deck() {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('settings.games.playing_cards.deck');
    },
    handCards: function handCards() {
      var _this = this;
      return this.cards.map(function (card, i) {
        var suit = typeof card === 'string' ? card[0] : null;
        var value = typeof card === 'string' ? card[1] : null;
        return {
          card: card,
          hintView: _this.hintView.indexOf(i) !== -1,
          demo: _this.demo.indexOf(card) !== -1,
          suit: suit ? suit.toLowerCase() : null,
          value: value ? value.toLowerCase() : null,
          faceUp: !!card,
          positionX: _this.calcCardPosX(i),
          positionY: _this.calcCardPosY(i),
          frontImageUrl: _this.deck ? value && suit ? "url('/images/games/playing-cards/".concat(_this.deck, "/").concat(suit.toLowerCase()).concat(value.toLowerCase(), ".png')") : '' : "url(\"".concat((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('settings.games.playing_cards.front_image'), "\")"),
          backImageUrl: _this.deck ? "url(\"/images/games/playing-cards/".concat(_this.deck, "/back.png\")") : "url(\"".concat((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('settings.games.playing_cards.back_image'), "\")")
        };
      });
    },
    calcResultPosX: function calcResultPosX() {
      if (this.resultBottom) {
        return 3184 / 2 + this.positionX * ((this.cardsCount - 1) * 16 + 162.8 * this.cardsCount);
      } else {
        return 3184 / 2 - ((this.cardsCount - 1) * 16 + 162.8 * this.cardsCount) / 2 - 32 + this.positionX * ((this.cardsCount - 1) * 16 + 162.8 * this.cardsCount);
      }
    },
    calcResultPosY: function calcResultPosY() {
      if (this.resultBottom) {
        return 231 * this.positionY + 16 * this.positionY + 231 + 64;
      } else {
        return 231 * this.positionY + 16 * this.positionY + 231 / 2;
      }
    }
  },
  watch: {
    cards: function cards(newVal) {
      if (this.cardsCountLast === newVal.length) {
        this.sound(_audio_common_card_flip_wav__WEBPACK_IMPORTED_MODULE_3__["default"]);
      }
      if (newVal.length > this.cardsCountLast) this.cardsCountAdded += newVal.length - this.cardsCountLast;
      this.cardsCountLast = newVal.length;
    }
  },
  beforeDestroy: function beforeDestroy() {
    while (this.animations.length) this.animations.pop().kill();
  },
  methods: {
    calcCardPosX: function calcCardPosX(i) {
      if (this.fold) {
        return 3184 / 2 - ((this.cardsCount - 1) * 16 + 162.8 * this.cardsCount) / 2 + 60 * i + this.positionX * ((this.cardsCount - 1) * 16 + 162.8 * this.cardsCount);
      } else {
        return 3184 / 2 - ((this.cardsCount - 1) * 16 + 162.8 * this.cardsCount) / 2 + (162.8 + 16) * i + this.positionX * ((this.cardsCount - 1) * 16 + 162.8 * this.cardsCount);
      }
    },
    calcCardPosY: function calcCardPosY(i) {
      return 231 * this.positionY + 16 * this.positionY;
    },
    cardAnimationBeforeEnter: function cardAnimationBeforeEnter(el) {
      var index = parseInt(el.dataset.index);
      if (this.animationsSource[index]) {
        el.style.animationDuration = '0s';
        gsap__WEBPACK_IMPORTED_MODULE_4__["default"].set(el, {
          left: this.animationsSource[index].positionX,
          top: this.animationsSource[index].positionY,
          // rotateZ: 0,
          // scaleY: 1,
          // rotateX: 0,
          // rotateY: 180,
          z: 0
        });
        // eslint-disable-next-line eqeqeq
      } else if (el.dataset.face == 1) {
        el.style.animationDuration = '0s';
        gsap__WEBPACK_IMPORTED_MODULE_4__["default"].set(el, {
          left: 2144,
          top: -646,
          rotateZ: 40,
          scaleY: 1.1,
          rotateY: 180,
          rotateX: 180,
          z: 0,
          opacity: 0,
          animation: 'none'
        });
      } else {
        gsap__WEBPACK_IMPORTED_MODULE_4__["default"].set(el, {
          left: 2144,
          top: -646,
          rotateZ: 40,
          scaleY: 1.1,
          rotateY: 0,
          opacity: 0,
          z: 0
        });
      }
    },
    cardAnimationEnter: function cardAnimationEnter(el, done) {
      var _this2 = this;
      var positionX = parseFloat(el.dataset.positionX);
      var positionY = parseFloat(el.dataset.positionY);
      var index = parseInt(el.dataset.index);
      // const firstDelay = (index - (this.cards.length - this.cardsCountAdded)) * 0.35 + 0.1
      var firstDelay = (this.cardsCountAdded - (this.cards.length - index)) * 0.35 + 0.1;
      // console.log(firstDelay, index, this.cardsCountAdded, this.cards.length)
      var delay = 0.4;
      // const delay = 1
      if (this.animationsSource[index]) {
        this.animations.push(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
          duration: delay / 2,
          left: positionX,
          top: positionY,
          // rotateZ: 0,
          // scaleY: 1,
          // rotateX: 180,
          z: 0,
          ease: 'none',
          clearProps: 'transform',
          onComplete: function onComplete() {
            el.style.animationDuration = '';
            _this2.animations.shift();
            _this2.cardsCountAdded--;
            done();
          }
        }));
        this.$delete(this.animationsSource, index);
      } else {
        // onStart
        this.animations.push(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
          duration: 0.1,
          delay: firstDelay - 0.1,
          left: 1945,
          top: -421,
          rotateZ: 40,
          scaleY: 1,
          rotateY: 180,
          rotateX: 0,
          z: 0 + index * 2,
          ease: 'none',
          onStart: function onStart() {
            setTimeout(function () {
              return _this2.sound(_audio_common_card_deal_wav__WEBPACK_IMPORTED_MODULE_2__["default"]);
            }, 250);
            gsap__WEBPACK_IMPORTED_MODULE_4__["default"].set(el, {
              clearProps: 'opacity'
            });
          },
          onComplete: function onComplete() {
            return _this2.animations.shift();
          }
        }));
        // eslint-disable-next-line eqeqeq
        if (el.dataset.face == 1) {
          this.animations.push(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
            duration: delay / 4,
            delay: firstDelay,
            left: (1945 - positionX) / 2 + positionX,
            top: (-421 - positionY) / 2 + positionY,
            rotateZ: 0,
            scaleY: 1,
            rotateX: 0,
            rotateY: 180,
            z: 150 + index * 2,
            ease: 'none',
            onComplete: function onComplete() {
              return _this2.animations.shift();
            }
          }));
          this.animations.push(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
            duration: delay / 4,
            delay: firstDelay + delay / 4,
            left: positionX - (1945 - positionX) / 4,
            top: positionY - (-421 - positionY) / 4,
            rotateZ: 0,
            scaleY: 1,
            rotateX: 0,
            rotateY: 180,
            z: 150 + index * 2,
            ease: 'none',
            onComplete: function onComplete() {
              return _this2.animations.shift();
            }
          }));
          this.animations.push(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
            duration: delay / 4,
            delay: firstDelay + delay / 2,
            left: positionX,
            top: positionY,
            rotateZ: 0,
            scaleY: 1,
            rotateX: 0,
            rotateY: 180,
            z: 100 + index * 2,
            ease: 'none',
            clearProps: 'transform',
            onComplete: function onComplete() {
              el.style.animationDuration = '';
              _this2.animations.shift();
              _this2.cardsCountAdded--;
              done();
            }
          }));
        } else {
          this.animations.push(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
            duration: delay / 2,
            delay: firstDelay,
            left: positionX,
            top: positionY,
            rotateZ: 0,
            scaleX: 1,
            rotateY: 0,
            ease: 'none',
            clearProps: 'transform',
            onComplete: function onComplete() {
              _this2.animations.shift();
              _this2.cardsCountAdded--;
              done();
            }
          }));
        }
      }
    },
    cardAnimationLeave: function cardAnimationLeave(el, done) {
      var _this3 = this;
      gsap__WEBPACK_IMPORTED_MODULE_4__["default"].set(el, {
        transition: 0
      });
      var positionX = parseFloat(el.dataset.positionX);
      var positionY = parseFloat(el.dataset.positionY);
      var index = parseInt(el.dataset.index);
      if (this.animationsDisabled[index]) {
        this.$delete(this.animationsDisabled, index);
        done();
        return;
      }
      var delay = index * 100 / 1000 - 0.15 + 0.1 + 0.1 * this.positionY;
      // eslint-disable-next-line eqeqeq
      if (el.dataset.face == 1) {
        this.animations.push(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
          duration: 0.15,
          delay: delay += 0.15,
          left: positionX,
          top: positionY,
          rotateZ: 0,
          scaleY: 1,
          rotateY: 90,
          x: 130,
          z: 200,
          ease: 'none',
          onStart: function onStart() {
            // this.sound(flipSound)
          },
          onComplete: function onComplete() {
            return _this3.animations.shift();
          }
        }));
        this.animations.push(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
          duration: 0.15,
          delay: delay += 0.15,
          left: positionX,
          top: positionY,
          rotateZ: 0,
          scaleY: 1,
          rotateY: 0,
          x: 0,
          z: index * 5 * this.positionY,
          ease: 'none',
          onComplete: function onComplete() {
            return _this3.animations.shift();
          }
        }));
      }
      this.animations.push(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
        duration: 0.2,
        delay: delay += 0.15,
        left: 1100,
        top: -345.5,
        rotateZ: 0,
        scaleY: 1,
        rotateY: 0,
        x: 0,
        z: index * 5 * this.positionY,
        ease: 'none',
        onStart: function onStart() {
          _this3.sound(_audio_common_card_deal_wav__WEBPACK_IMPORTED_MODULE_2__["default"]);
        },
        onComplete: function onComplete() {
          return _this3.animations.shift();
        }
      }));
      this.animations.push(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
        duration: 0.2,
        delay: delay += 0.2,
        left: 873,
        top: -689,
        rotateZ: -34,
        scaleY: 1,
        rotateY: 9,
        x: 0,
        z: index * 5 * this.positionY,
        ease: 'none',
        onComplete: function onComplete() {
          _this3.animations.shift();
          done();
        }
      }));
    },
    getCardPosition: function getCardPosition(index) {
      return {
        positionX: this.calcCardPosX(index),
        positionY: this.calcCardPosY(index)
      };
    },
    disableCardAnimation: function disableCardAnimation(index) {
      this.$set(this.animationsDisabled, index, 1);
    },
    setAnimationsSource: function setAnimationsSource(index, data) {
      this.$set(this.animationsSource, index, data);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalInfo.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalInfo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: {
      type: Boolean,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalResult.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalResult.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: {
      type: Boolean,
      required: true
    },
    glow: {
      type: String,
      "default": 'none'
    },
    stay: {
      type: Boolean,
      "default": false
    }
  },
  watch: {
    value: function value(newValue) {
      var _this = this;
      if (newValue && !this.stay) {
        setTimeout(function () {
          _this.$emit('input', false);
        }, 3000);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Preloader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Preloader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    progress: {
      type: Number,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Table.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Table.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_fullscreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-fullscreen */ "./node_modules/vue-fullscreen/dist/vue-fullscreen.min.js");
/* harmony import */ var vue_fullscreen__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_fullscreen__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");
/* harmony import */ var _mixins_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/mixins/Game */ "./resources/js/mixins/Game.vue");
/* harmony import */ var _Chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chips */ "./resources/js/components/Games/CardGame/Chips.vue");
/* harmony import */ var _ChipValues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChipValues */ "./resources/js/components/Games/CardGame/ChipValues.js");
/* harmony import */ var _ModalInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ModalInfo */ "./resources/js/components/Games/CardGame/ModalInfo.vue");
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _components_Games_CardGame_Preloader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/Games/CardGame/Preloader */ "./resources/js/components/Games/CardGame/Preloader.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









vue__WEBPACK_IMPORTED_MODULE_8__["default"].use((vue_fullscreen__WEBPACK_IMPORTED_MODULE_0___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Chips: _Chips__WEBPACK_IMPORTED_MODULE_3__["default"],
    ModalInfo: _ModalInfo__WEBPACK_IMPORTED_MODULE_5__["default"],
    Preloader: _components_Games_CardGame_Preloader__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  mixins: [_mixins_Game__WEBPACK_IMPORTED_MODULE_2__["default"]],
  props: {
    actions: {
      type: Array,
      required: true
    },
    betMode: {
      type: String,
      "default": null
    },
    chipsBet: {
      type: Array,
      "default": function _default() {
        return ['ante', 'call'];
      }
    }
  },
  data: function data() {
    return {
      imageBaseUrl: '/images/games/card-game-ui',
      ready: false,
      loadingProgress: 0,
      chips: {},
      resolvers: {},
      dealer: false,
      modalPaytable: false,
      modalInfo: false,
      modalProvably: false,
      fullscreen: false,
      containerHeight: 50
    };
  },
  computed: {
    bet: function bet() {
      var _this = this;
      return Object.keys(this.chips).reduce(function (ak, k) {
        return ak + _this.chips[k].reduce(function (acc, item) {
          return acc + item.bet;
        }, 0);
      }, 0);
    },
    deck: function deck() {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_6__.config)('settings.games.playing_cards.deck');
    },
    systemBarEnabled: function systemBarEnabled() {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_6__.config)('settings.interface.system_bar.enabled');
    },
    logoUrl: function logoUrl() {
      return "/images/games/".concat(this.gamePackageId, "/logo.png");
    },
    paytableMin: function paytableMin() {
      return this.config.min_bet;
    },
    paytableMax: function paytableMax() {
      return this.config.max_bet;
    }
  },
  created: function created() {
    var _this2 = this;
    this.chipsBet.forEach(function (el) {
      return _this2.$set(_this2.chips, el, []);
    });
  },
  mounted: function mounted() {
    this.$nextTick(this.init);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.resize);
  },
  methods: {
    copyToClipboard: _plugins_utils__WEBPACK_IMPORTED_MODULE_1__.copyToClipboard,
    init: function init() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this3.loadCardDeck();
            case 2:
              _this3.loadingProgress += 15;
              _context.next = 5;
              return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_1__.preloadImage)(_this3.logoUrl);
            case 5:
              _this3.loadingProgress += 5;
              _context.next = 8;
              return _this3.preloadGameImages(_this3.actions, function (progress) {
                _this3.loadingProgress = Math.min(25 + Math.round(progress / 100 * 80), 100);
              });
            case 8:
              _this3.ready = true;
              _context.next = 11;
              return _this3.$nextTick();
            case 11:
              _this3.resize();
              window.addEventListener('resize', _this3.resize);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    createProvablyFairGame: function createProvablyFairGame() {
      this.$store.dispatch('provably-fair/create', {
        key: this.gamePackageId,
        seed: this.provablyFairGame.client_seed
      });
    },
    reset: function reset() {
      var _this4 = this;
      Object.keys(this.chips).forEach(function (k) {
        _this4.$set(_this4.chips, k, []);
      });
    },
    resize: function resize() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // 64 40
              // this.$refs.table.style.transform = `scale(${window.outerWidth / 3184})`
              _this5.containerHeight = 50;
              _context2.next = 3;
              return _this5.$nextTick();
            case 3:
              _this5.containerHeight = _this5.$el.offsetHeight;
              if (3184 / 1440 <= window.innerWidth / _this5.containerHeight) {
                // if (3184 / 1440 <= window.innerWidth / (window.innerHeight - 64 - (window.innerWidth < 1250 ? 64 : 40))) {
                _this5.$refs.table.style.transform = "scale(".concat(_this5.containerHeight / 1440, ") translateX(-50%)");
              } else {
                _this5.$refs.table.style.transform = "scale(".concat(window.innerWidth / 3184, ") translateX(-50%)");
              }
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    placeBet: function placeBet(bet, pos, mode, source) {
      var _this6 = this;
      if (_ChipValues__WEBPACK_IMPORTED_MODULE_4__["default"].indexOf(bet) === -1) {
        var a = 0;
        var _loop = function _loop() {
          var chip = _ChipValues__WEBPACK_IMPORTED_MODULE_4__["default"].reduce(function (acc, val) {
            return bet >= val ? val : acc;
          }, 1);
          bet -= chip;
          setTimeout(function () {
            return _this6.placeBet(chip, pos, mode, source);
          }, a += 100);
        };
        while (bet > 0) {
          _loop();
        }
      } else {
        if (mode === undefined) {
          mode = this.betMode;
        }
        this.$emit('bet', bet, mode);
        if (!pos) {
          if (source === 'dealer') {
            pos = {
              x: 3184 / 2,
              y: 0
            };
          } else {
            pos = {
              x: 3184 / 2,
              y: 1520
            };
          }
        }
        if (mode && Array.isArray(this.chips[mode])) {
          this.chips[mode].push({
            bet: bet,
            pos: pos
          });
        }
      }
    },
    unbet: function unbet(mode) {
      if (mode === undefined) {
        mode = this.betMode;
      }
      if (mode && Array.isArray(this.chips[mode]) && this.chips[mode].length) {
        this.$emit('unbet', this.chips[mode].pop().bet, mode);
      }
    },
    betWin: function betWin(mode) {
      var _this7 = this;
      if (mode === undefined) {
        mode = this.betMode;
      }
      return new Promise(function (resolve) {
        _this7.resolvers[mode] = function () {
          resolve();
        };
        _this7.$nextTick(function () {
          _this7.$set(_this7.chips, mode, []);
        });
      });
    },
    betLoss: function betLoss(mode) {
      var _this8 = this;
      return new Promise(function (resolve) {
        _this8.dealer = true;
        _this8.resolvers[mode] = function () {
          resolve();
          _this8.dealer = false;
        };
        _this8.$nextTick(function () {
          _this8.$set(_this8.chips, mode, []);
        });
      });
    },
    demoLose: function demoLose() {
      var _this9 = this;
      return new Promise(function (resolve) {
        _this9.dealer = true;
        var lookupMode = Object.keys(_this9.chips).filter(function (k) {
          return _this9.chips[k].length;
        })[0];
        _this9.resolvers[lookupMode] = function () {
          resolve();
          _this9.dealer = false;
        };
        _this9.$nextTick(function () {
          Object.keys(_this9.chips).forEach(function (k) {
            _this9.$set(_this9.chips, k, []);
          });
        });
      });
    },
    demoWin: function demoWin(wins) {
      var _this10 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var winsChip, v, _loop2, k, _loop3, _k;
        return _regeneratorRuntime().wrap(function _callee3$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              winsChip = {};
              if (_typeof(wins) !== 'object') {
                v = wins;
                wins = {};
                wins[Object.keys(_this10.chips)[0]] = v;
              }
              _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
                var bet, chipsWin, chip;
                return _regeneratorRuntime().wrap(function _loop2$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      bet = wins[k];
                      chipsWin = [];
                      while (bet > 0) {
                        chip = _ChipValues__WEBPACK_IMPORTED_MODULE_4__["default"].reduce(function (acc, val) {
                          return bet >= val ? val : acc;
                        }, 1);
                        bet -= chip;
                        bet = parseFloat(bet.toFixed(6));
                        chipsWin.push({
                          bet: chip,
                          pos: {
                            x: 3184 / 2,
                            y: 0
                          }
                        });
                      }
                      if (chipsWin.length) winsChip[k] = chipsWin;
                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }, _loop2);
              });
              _context5.t0 = _regeneratorRuntime().keys(wins);
            case 4:
              if ((_context5.t1 = _context5.t0()).done) {
                _context5.next = 9;
                break;
              }
              k = _context5.t1.value;
              return _context5.delegateYield(_loop2(), "t2", 7);
            case 7:
              _context5.next = 4;
              break;
            case 9:
              if (!(Object.keys(winsChip).length > 0)) {
                _context5.next = 20;
                break;
              }
              _this10.dealer = true;
              _context5.next = 13;
              return _this10.$nextTick();
            case 13:
              _loop3 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop3(_k) {
                return _regeneratorRuntime().wrap(function _loop3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return new Promise(function (resolve) {
                        var _this10$chips$_k;
                        _this10.resolvers[_k] = resolve;
                        (_this10$chips$_k = _this10.chips[_k]).push.apply(_this10$chips$_k, _toConsumableArray(winsChip[_k]));
                      });
                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }, _loop3);
              });
              _context5.t3 = _regeneratorRuntime().keys(winsChip);
            case 15:
              if ((_context5.t4 = _context5.t3()).done) {
                _context5.next = 20;
                break;
              }
              _k = _context5.t4.value;
              return _context5.delegateYield(_loop3(_k), "t5", 18);
            case 18:
              _context5.next = 15;
              break;
            case 20:
              _context5.next = 22;
              return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_1__.sleep)(2000);
            case 22:
              _this10.dealer = false;
              _context5.next = 25;
              return _this10.$nextTick();
            case 25:
              _context5.next = 27;
              return new Promise(function (resolve) {
                var lookupMode = Object.keys(_this10.chips).filter(function (k) {
                  return _this10.chips[k].length;
                })[0];
                _this10.resolvers[lookupMode] = resolve;
                Object.keys(_this10.chips).forEach(function (k) {
                  _this10.$set(_this10.chips, k, []);
                });
              });
            case 27:
            case "end":
              return _context5.stop();
          }
        }, _callee3);
      }))();
    },
    demoPush: function demoPush() {
      var _this11 = this;
      return new Promise(function (resolve) {
        var lookupMode = Object.keys(_this11.chips).filter(function (k) {
          return _this11.chips[k].length;
        })[0];
        _this11.resolvers[lookupMode] = function () {
          resolve();
        };
        _this11.$nextTick(function () {
          Object.keys(_this11.chips).forEach(function (k) {
            _this11.$set(_this11.chips, k, []);
          });
        });
      });
    },
    chipsAnimated: function chipsAnimated(chips) {
      if (typeof this.resolvers[chips] === 'function') {
        this.resolvers[chips]();
        delete this.resolvers[chips];
      }
    },
    preloadGameImages: function preloadGameImages(actions, onUpdate) {
      var _this12 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var buttons, images, _iterator, _step, image;
        return _regeneratorRuntime().wrap(function _callee4$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              buttons = [];
              actions.forEach(function (button) {
                [null, 'active', 'disabled', 'hover'].forEach(function (state) {
                  buttons.push("".concat(_this12.imageBaseUrl, "/").concat(button).concat(state ? '-' + state : '', ".png"));
                });
              });
              images = ["".concat(_this12.imageBaseUrl, "/table-").concat(_this12.deck, ".jpg"), "".concat(_this12.imageBaseUrl, "/info.png"), "".concat(_this12.imageBaseUrl, "/provably.png"), "".concat(_this12.imageBaseUrl, "/full.png"), "".concat(_this12.imageBaseUrl, "/popup-bg.png")].concat(_toConsumableArray(_ChipValues__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (chip) {
                return "".concat(_this12.imageBaseUrl, "/playing-chips/").concat(chip, ".png");
              })), _toConsumableArray(_ChipValues__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (chip) {
                return "".concat(_this12.imageBaseUrl, "/bet-chips/").concat(chip, ".png");
              })), buttons);
              _iterator = _createForOfIteratorHelper(images);
              _context6.prev = 4;
              _iterator.s();
            case 6:
              if ((_step = _iterator.n()).done) {
                _context6.next = 13;
                break;
              }
              image = _step.value;
              _context6.next = 10;
              return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_1__.preloadImage)(image);
            case 10:
              if (typeof onUpdate === 'function') onUpdate(images.indexOf(image) / images.length * 100);
            case 11:
              _context6.next = 6;
              break;
            case 13:
              _context6.next = 18;
              break;
            case 15:
              _context6.prev = 15;
              _context6.t0 = _context6["catch"](4);
              _iterator.e(_context6.t0);
            case 18:
              _context6.prev = 18;
              _iterator.f();
              return _context6.finish(18);
            case 21:
            case "end":
              return _context6.stop();
          }
        }, _callee4, null, [[4, 15, 18, 21]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixins/Game.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixins/Game.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _plugins_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/plugins/route */ "./resources/js/plugins/route.js");
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    gamePackageId: function gamePackageId() {
      return this.$route.params.game;
    },
    gameSlug: function gameSlug() {
      return this.$route.params.slug;
    },
    config: function config() {
      var _this = this;
      return this.gameSlug ? (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)(this.gamePackageId).variations.find(function (o) {
        return o.slug === _this.gameSlug;
      }) : (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)(this.gamePackageId);
    },
    provablyFairGame: function provablyFairGame() {
      return this.$store.getters['provably-fair/get'](this.gamePackageId) || {};
    }
  },
  methods: {
    getRoute: function getRoute(action) {
      return (0,_plugins_route__WEBPACK_IMPORTED_MODULE_1__.route)("games.".concat(this.gamePackageId, ".").concat(action));
    },
    loadCardDeck: function loadCardDeck() {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.preloadImages)(window.assets.deck);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Games/CardGame/ChipValues.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/ChipValues.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([0.05, 0.1, 0.5, 1, 5, 10, 25, 50, 100, 500, 1000, 5000, 10000]);

/***/ }),

/***/ "./packages/baccarat/resources/audio/lose.wav":
/*!****************************************************!*\
  !*** ./packages/baccarat/resources/audio/lose.wav ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/baccarat/lose.wav");

/***/ }),

/***/ "./packages/baccarat/resources/audio/push.wav":
/*!****************************************************!*\
  !*** ./packages/baccarat/resources/audio/push.wav ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/baccarat/push.wav");

/***/ }),

/***/ "./packages/baccarat/resources/audio/swoosh.wav":
/*!******************************************************!*\
  !*** ./packages/baccarat/resources/audio/swoosh.wav ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/baccarat/swoosh.wav");

/***/ }),

/***/ "./packages/baccarat/resources/audio/win.wav":
/*!***************************************************!*\
  !*** ./packages/baccarat/resources/audio/win.wav ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/baccarat/win.wav");

/***/ }),

/***/ "./resources/audio/common/card-deal.wav":
/*!**********************************************!*\
  !*** ./resources/audio/common/card-deal.wav ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/common/card-deal.wav");

/***/ }),

/***/ "./resources/audio/common/card-flip.wav":
/*!**********************************************!*\
  !*** ./resources/audio/common/card-flip.wav ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/common/card-flip.wav");

/***/ }),

/***/ "./resources/audio/common/click.wav":
/*!******************************************!*\
  !*** ./resources/audio/common/click.wav ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/common/click.wav");

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/game.vue?vue&type=style&index=0&id=76bf20b1&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/game.vue?vue&type=style&index=0&id=76bf20b1&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btns-panel[data-v-76bf20b1] {\n  position: absolute;\n  left: 50%;\n  top: -104px;\n  transform: translate(-50%, -50%);\n  display: flex;\n}\n.slide-down-enter-active[data-v-76bf20b1] {\n  transition: 0.6s;\n  opacity: 0;\n  transform: translate(-50%, 50%);\n}\n.slide-down-leave-active[data-v-76bf20b1] {\n  transition: 0.6s;\n  opacity: 1;\n  transform: translate(-50%, -50%);\n}\n.slide-down-enter-to[data-v-76bf20b1], .slide-down-leave[data-v-76bf20b1] {\n  opacity: 1;\n  transform: translate(-50%, -50%);\n}\n.slide-down-enter[data-v-76bf20b1], .slide-down-leave-to[data-v-76bf20b1] {\n  opacity: 0;\n  transform: translate(-50%, 50%);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Bet.vue?vue&type=style&index=0&id=ba79ed46&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Bet.vue?vue&type=style&index=0&id=ba79ed46&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes circle-blink-ba79ed46 {\n0% {\n    border: 12px solid rgba(100, 100, 100, 0.25);\n}\n50% {\n    border: 12px solid rgba(100, 100, 100, 0.95);\n}\n100% {\n    border: 12px solid rgba(100, 100, 100, 0.25);\n}\n}\n.bet-container[data-v-ba79ed46] {\n  position: absolute;\n  bottom: 140px;\n  transform: translate(-50%, -50%);\n  mix-blend-mode: color-dodge;\n  cursor: pointer;\n}\n.bet-container .circle[data-v-ba79ed46] {\n  width: 178px;\n  height: 145px;\n  overflow: hidden;\n  position: relative;\n}\n.bet-container .circle span[data-v-ba79ed46] {\n  width: 178px;\n  height: 178px;\n  display: block;\n  border: 12px solid rgba(100, 100, 100, 0.5);\n  border-radius: 90px;\n  opacity: 0.6;\n  mix-blend-mode: color-dodge;\n  position: absolute;\n  bottom: calc(145px - 178px);\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n.bet-container .circle span.blink[data-v-ba79ed46] {\n  animation: circle-blink-ba79ed46 1s infinite linear;\n}\n.bet-container .label[data-v-ba79ed46] {\n  text-align: center;\n  font-family: \"impact\", sans-serif;\n  font-size: 37px;\n  color: rgba(100, 100, 100, 0.5);\n  margin-top: 8px;\n  line-height: 29px;\n  height: 37px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  text-transform: uppercase;\n}\n.bet-container .value[data-v-ba79ed46] {\n  mix-blend-mode: color-dodge;\n  position: absolute;\n  top: calc(50% - 47px);\n  right: calc(100% + 16px);\n  background-color: rgba(100, 100, 100, 0.6);\n  font-family: \"impact\", sans-serif;\n  font-size: 30pt;\n  color: black;\n  padding: 8px 32px;\n  border-radius: 40px;\n  min-width: 55px;\n  opacity: 0.6;\n}\n.bet-container .value.value-right[data-v-ba79ed46] {\n  right: auto;\n  left: calc(100% + 16px);\n}\n.chip[data-v-ba79ed46] {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  width: 131px;\n  height: 131px;\n  transition: \"box-shadow\" 0.15s;\n}\n.chip img[data-v-ba79ed46] {\n  width: 131px;\n  height: 131px;\n}\n.chip.shadow[data-v-ba79ed46] {\n  box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.75);\n}\n.chip.action[data-v-ba79ed46] {\n  cursor: pointer;\n}\n.chip.action:hover img[data-v-ba79ed46] {\n  filter: brightness(1.1);\n}\n.chip.action:active img[data-v-ba79ed46] {\n  filter: brightness(1.4);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Button.vue?vue&type=style&index=0&id=756df996&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Button.vue?vue&type=style&index=0&id=756df996&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div.button[data-v-756df996] {\n  width: 170px;\n  height: 195px;\n  margin: 0 0px;\n  position: relative;\n  cursor: pointer;\n  padding: 0 5px;\n}\ndiv.button.disabled[data-v-756df996] {\n  cursor: default;\n}\ndiv.button .sprite[data-v-756df996] {\n  position: absolute;\n  width: 160px;\n  height: 160px;\n  overflow: hidden;\n  border-radius: 50%;\n  box-shadow: 0px 5px 24px 5px rgba(0, 0, 0, 0.75);\n}\ndiv.button img[data-v-756df996] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  opacity: 0;\n  transition: opacity 0.15s;\n  transform: translate(-50%, -50%);\n}\ndiv.button img.normal[data-v-756df996] {\n  opacity: 1;\n}\ndiv.button.disabled img.disabled[data-v-756df996] {\n  opacity: 1;\n}\ndiv.button:not(.disabled):hover img.hover[data-v-756df996] {\n  opacity: 1;\n}\ndiv.button:not(.disabled):active img.active[data-v-756df996] {\n  opacity: 1;\n}\ndiv.button .btn-title[data-v-756df996] {\n  position: absolute;\n  top: calc(100% + 2px);\n  left: 50%;\n  transform: translate(-50%, -50%) translateZ(0px);\n  font-family: consolas;\n  font-size: 27px;\n  font-weight: bold;\n  color: #f5ad63;\n  width: 100%;\n  text-align: center;\n  text-transform: uppercase;\n}\ndiv.button.disabled .btn-title[data-v-756df996] {\n  color: #adadad;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chip.vue?vue&type=style&index=0&id=a623e6a0&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chip.vue?vue&type=style&index=0&id=a623e6a0&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div.chip[data-v-a623e6a0] {\n  cursor: pointer;\n}\ndiv.chip img[data-v-a623e6a0] {\n  transition: filter 0.15s;\n}\ndiv.chip.disabled[data-v-a623e6a0] {\n  cursor: default;\n}\ndiv.chip.disabled img[data-v-a623e6a0] {\n  filter: grayscale(1) brightness(0.5);\n}\ndiv.chip:hover:not(.disabled) img[data-v-a623e6a0] {\n  filter: brightness(1.1);\n}\ndiv.chip:active:not(.disabled) img[data-v-a623e6a0] {\n  filter: brightness(1.4);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chips.vue?vue&type=style&index=0&id=1701ab1a&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chips.vue?vue&type=style&index=0&id=1701ab1a&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tns-outer[data-v-1701ab1a] {\n  padding: 0 !important;\n}\n.tns-outer [hidden][data-v-1701ab1a] {\n  display: none !important;\n}\n.tns-outer [aria-controls][data-v-1701ab1a], .tns-outer [data-action][data-v-1701ab1a] {\n  cursor: pointer;\n}\n.tns-slider[data-v-1701ab1a] {\n  transition: all 0s;\n}\n.tns-slider > .tns-item[data-v-1701ab1a] {\n  box-sizing: border-box;\n}\n.tns-horizontal.tns-subpixel[data-v-1701ab1a] {\n  white-space: nowrap;\n}\n.tns-horizontal.tns-subpixel > .tns-item[data-v-1701ab1a] {\n  display: inline-block;\n  vertical-align: top;\n  white-space: normal;\n}\n.tns-horizontal.tns-no-subpixel[data-v-1701ab1a]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.tns-horizontal.tns-no-subpixel > .tns-item[data-v-1701ab1a] {\n  float: left;\n}\n.tns-horizontal.tns-carousel.tns-no-subpixel > .tns-item[data-v-1701ab1a] {\n  margin-right: -100%;\n}\n.tns-no-calc[data-v-1701ab1a] {\n  position: relative;\n  left: 0;\n}\n.tns-gallery[data-v-1701ab1a] {\n  position: relative;\n  left: 0;\n  min-height: 1px;\n}\n.tns-gallery > .tns-item[data-v-1701ab1a] {\n  position: absolute;\n  left: -100%;\n  transition: transform 0s, opacity 0s;\n}\n.tns-gallery > .tns-slide-active[data-v-1701ab1a] {\n  position: relative;\n  left: auto !important;\n}\n.tns-gallery > .tns-moving[data-v-1701ab1a] {\n  transition: all 0.25s;\n}\n.tns-autowidth[data-v-1701ab1a] {\n  display: inline-block;\n}\n.tns-lazy-img[data-v-1701ab1a] {\n  transition: opacity 0.6s;\n  opacity: 0.6;\n}\n.tns-lazy-img.tns-complete[data-v-1701ab1a] {\n  opacity: 1;\n}\n.tns-ah[data-v-1701ab1a] {\n  transition: height 0s;\n}\n.tns-ovh[data-v-1701ab1a] {\n  overflow: hidden;\n}\n.tns-visually-hidden[data-v-1701ab1a] {\n  position: absolute;\n  left: -10000em;\n}\n.tns-transparent[data-v-1701ab1a] {\n  opacity: 0;\n  visibility: hidden;\n}\n.tns-fadeIn[data-v-1701ab1a] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  z-index: 0;\n}\n.tns-normal[data-v-1701ab1a], .tns-fadeOut[data-v-1701ab1a] {\n  opacity: 0;\n  filter: alpha(opacity=0);\n  z-index: -1;\n}\n.tns-vpfix[data-v-1701ab1a] {\n  white-space: nowrap;\n}\n.tns-vpfix > div[data-v-1701ab1a], .tns-vpfix > li[data-v-1701ab1a] {\n  display: inline-block;\n}\n.tns-t-subp2[data-v-1701ab1a] {\n  margin: 0 auto;\n  width: 310px;\n  position: relative;\n  height: 10px;\n  overflow: hidden;\n}\n.tns-t-ct[data-v-1701ab1a] {\n  width: 2333.3333333333%;\n  width: calc(100% * 70 / 3);\n  position: absolute;\n  right: 0;\n}\n.tns-t-ct[data-v-1701ab1a]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.tns-t-ct > div[data-v-1701ab1a] {\n  width: 1.4285714286%;\n  width: calc(100% / 70);\n  height: 10px;\n  float: left;\n}\n.chips-container[data-v-1701ab1a] {\n  width: calc(138px * 5);\n  position: relative;\n}\n.chips-container[data-v-1701ab1a] .tns-outer {\n  width: 100%;\n}\n.chips-container[data-v-1701ab1a] .tns-inner {\n  overflow: hidden;\n}\n.chips-container[data-v-1701ab1a] .tns-visually-hidden {\n  display: none;\n}\n.chip[data-v-1701ab1a] {\n  position: relative;\n  border: 5px solid transparent;\n  border-radius: 50%;\n  width: 138px;\n  height: 138px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: border 0.15s;\n}\n.chip.active[data-v-1701ab1a]:not(.disabled) {\n  border-color: #20f722;\n  z-index: 2;\n}\n.btn-control[data-v-1701ab1a] {\n  position: absolute;\n  cursor: pointer;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 55px;\n  height: 55px;\n}\n.btn-control[data-v-1701ab1a]:after {\n  content: \" \";\n  display: block;\n  border-color: rgba(255, 255, 255, 0.5);\n  border-width: 15px;\n  width: 55px;\n  height: 55px;\n  transform: rotate(45deg);\n}\n.btn-control.prev[data-v-1701ab1a] {\n  left: -32px;\n}\n.btn-control.next[data-v-1701ab1a] {\n  right: -87px;\n}\n.btn-control.prev[data-v-1701ab1a]:after {\n  border-style: none none solid solid;\n}\n.btn-control.next[data-v-1701ab1a]:after {\n  border-style: solid solid none none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=style&index=0&id=49e76f53&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=style&index=0&id=49e76f53&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes card-animation-49e76f53 {\n0% {\n    transition: 0;\n    transform-origin: left center;\n    transform: translateX(0) translateZ(0px) rotateY(0deg);\n}\n49.99999% {\n    transform-origin: left center;\n    transform: translateX(10%) translateZ(210px) rotateY(90deg);\n}\n50% {\n    transform-origin: right center;\n    transform: translateX(-90%) translateZ(40px) rotateY(90deg);\n}\n99% {\n    transition: 0;\n    transform-origin: right center;\n    transform: translateX(-100%) translateZ(0px) rotateY(180deg);\n}\n100% {\n    transform-origin: center;\n    transform: translateX(0px) translateZ(0px) rotateY(180deg);\n}\n}\n.hand[data-v-49e76f53], .hand-container[data-v-49e76f53] {\n  transform-style: preserve-3d;\n  transition: opacity 0.3s;\n}\n.playing-card-container[data-v-49e76f53] {\n  position: absolute;\n  transform-style: preserve-3d;\n  transition: 0.3s;\n  box-shadow: 0px 4px 11px -4px rgba(0, 0, 0, 0.5);\n}\n.playing-card-container.deck-symbols .playing-card .front[data-v-49e76f53] {\n  background-color: var(--v-secondary-lighten1);\n}\n.playing-card-container.deck-symbols .playing-card .back[data-v-49e76f53] {\n  background-color: var(--v-primary-darken4);\n}\n.playing-card-container.hint-view[data-v-49e76f53] {\n  transform: translateX(0px) translateY(-50px) translateZ(100px) rotateX(-30deg);\n  box-shadow: 0px 38px 27px -10px rgba(0, 0, 0, 0.5);\n}\n.playing-card-container.face-up[data-v-49e76f53] {\n  animation: card-animation-49e76f53 0.3s linear;\n  transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(180deg);\n}\n.playing-card-container.face-up[data-v-49e76f53]:after {\n  content: \" \";\n  position: absolute;\n  left: -8px;\n  right: -8px;\n  top: -8px;\n  bottom: -8px;\n  background: rgba(255, 255, 127, 0);\n  border-radius: 14px;\n  transition: 0.3s;\n  z-index: -1;\n}\n.playing-card-container.face-up.demo[data-v-49e76f53] {\n  transform: translateX(0px) translateY(-50px) translateZ(100px) rotateX(-15deg) rotateY(180deg);\n  box-shadow: 0px 38px 27px -10px rgba(0, 0, 0, 0.5);\n}\n.playing-card-container.face-up.demo[data-v-49e76f53]:after {\n  background: rgba(255, 255, 127, 0.75);\n}\n.playing-card-container.hand-card-animation-enter-active[data-v-49e76f53], .playing-card-container.hand-card-animation-leave-active[data-v-49e76f53] {\n  box-shadow: 20px 20px 27px -10px rgba(0, 0, 0, 0.5);\n  transition: 0.05s;\n}\n.playing-card-container.hand-card-animation-enter-active.face-up[data-v-49e76f53], .playing-card-container.hand-card-animation-leave-active.face-up[data-v-49e76f53] {\n  box-shadow: 30px 30px 30px -15px rgba(0, 0, 0, 0.5);\n}\n.playing-card-container .playing-card[data-v-49e76f53] {\n  position: relative;\n  width: 162.8px;\n  height: 231px;\n  transform-style: preserve-3d;\n}\n.playing-card-container .playing-card .front[data-v-49e76f53], .playing-card-container .playing-card .back[data-v-49e76f53] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  backface-visibility: hidden;\n}\n.playing-card-container .playing-card .front[data-v-49e76f53] {\n  transform: rotateY(180deg);\n}\n.playing-card-container .playing-card.clickable[data-v-49e76f53] {\n  cursor: pointer;\n}\n.result[data-v-49e76f53] {\n  position: absolute;\n  transform: translate(-100%, -50%);\n  font-size: 39px;\n  font-family: arial;\n  border-radius: 63px;\n  overflow: hidden;\n}\n.result.bottom[data-v-49e76f53] {\n  transform: translate(-50%, -50%);\n}\n.result div.bg[data-v-49e76f53] {\n  position: absolute;\n  width: 3184px;\n  height: 1440px;\n  right: calc(-1794.8px);\n  top: calc(-712px);\n}\n.result div.value[data-v-49e76f53] {\n  mix-blend-mode: color-dodge;\n  display: block;\n  background-color: rgba(100, 100, 100, 0.5);\n  opacity: 0.7;\n  border-radius: 63px;\n  padding: 10px 50px;\n  color: black;\n  font-weight: bold;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalInfo.vue?vue&type=style&index=0&id=681d25c7&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalInfo.vue?vue&type=style&index=0&id=681d25c7&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-wrap[data-v-681d25c7] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 10000;\n}\n.modal-wrap[data-v-681d25c7] .modal::-webkit-scrollbar {\n  width: 5px;\n}\n.modal-wrap[data-v-681d25c7] .modal::-webkit-scrollbar-button {\n  display: block;\n  height: 10px;\n  border-radius: 0;\n  background-color: transparent;\n}\n.modal-wrap[data-v-681d25c7] .modal::-webkit-scrollbar-thumb {\n  left: -5px;\n  background-color: #9a9a9a;\n}\n.modal-wrap[data-v-681d25c7] .modal::-webkit-scrollbar-thumb:hover {\n  background-color: #9a9a9a;\n}\n.modal-wrap[data-v-681d25c7] .modal::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.modal[data-v-681d25c7] {\n  position: absolute;\n  max-width: calc(100vw - 64px);\n  max-height: calc(100vh - 64px);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: rgba(0, 0, 0, 0.25);\n  transform-origin: center;\n  /* transform: translate(-50%, -50%) scale(0.9); */\n  overflow: auto;\n  border-radius: 32px;\n  border: 3px solid #ffb438;\n  font-size: 16px;\n  padding: 32px 48px;\n  box-shadow: 0 0 32px -8px #ffb438;\n  color: #d3c9b7;\n}\n.modal[data-v-681d25c7] h5 {\n  font-family: \"impact\", sans-serif;\n  font-size: 1.8em;\n  font-weight: normal;\n  text-align: center;\n  color: #be9243;\n  margin: 16px 0;\n}\n.modal[data-v-681d25c7] h5:first-child {\n  margin-top: 0;\n}\n.modal[data-v-681d25c7] table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.modal[data-v-681d25c7] table thead th {\n  font-family: \"impact\", sans-serif;\n  font-weight: normal;\n  font-size: 1.2em;\n  color: #be9243;\n  text-align: center;\n  padding: 4px 16px;\n}\n.modal[data-v-681d25c7] table tbody tr:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.modal[data-v-681d25c7] table tbody tr td {\n  color: #d3c9b7;\n  text-align: center;\n  padding: 0 16px;\n}\n.dialog-enter-active[data-v-681d25c7] {\n  transition: 0.6s;\n  opacity: 0;\n}\n.dialog-enter-active .modal[data-v-681d25c7] {\n  transition: 0.6s;\n  opacity: 0;\n  transform-origin: center;\n  transform: translate(-50%, -50%) scale(0.9);\n}\n.dialog-leave-active[data-v-681d25c7] {\n  transition: 0.6s;\n  opacity: 1;\n}\n.dialog-leave-active .modal[data-v-681d25c7] {\n  transition: 0.6s;\n  opacity: 1;\n  transform-origin: center;\n  transform: translate(-50%, -50%) scale(1);\n}\n.dialog-enter-to[data-v-681d25c7], .dialog-leave[data-v-681d25c7] {\n  opacity: 1;\n}\n.dialog-enter-to .modal[data-v-681d25c7], .dialog-leave .modal[data-v-681d25c7] {\n  opacity: 1;\n  transform: translate(-50%, -50%) scale(1);\n}\n.dialog-enter[data-v-681d25c7], .dialog-leave-to[data-v-681d25c7] {\n  opacity: 0;\n}\n.dialog-enter .modal[data-v-681d25c7], .dialog-leave-to .modal[data-v-681d25c7] {\n  opacity: 0;\n  transform: translate(-50%, -50%) scale(0.9);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalResult.vue?vue&type=style&index=0&id=22fcdd76&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalResult.vue?vue&type=style&index=0&id=22fcdd76&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-wrap[data-v-22fcdd76] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n}\n.modal-wrap[data-v-22fcdd76] .modal::-webkit-scrollbar {\n  width: 5px;\n}\n.modal-wrap[data-v-22fcdd76] .modal::-webkit-scrollbar-button {\n  display: block;\n  height: 10px;\n  border-radius: 0px;\n  background-color: transparent;\n}\n.modal-wrap[data-v-22fcdd76] .modal::-webkit-scrollbar-thumb {\n  left: -5px;\n  background-color: #9a9a9a;\n}\n.modal-wrap[data-v-22fcdd76] .modal::-webkit-scrollbar-thumb:hover {\n  background-color: #9a9a9a;\n}\n.modal-wrap[data-v-22fcdd76] .modal::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.modal[data-v-22fcdd76] {\n  position: absolute;\n  max-width: calc(100vw - 64px);\n  max-height: calc(100vh - 64px);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center;\n  overflow: auto;\n  border-radius: 32px;\n  font-family: \"impact\";\n  font-size: 16px;\n  padding: 38px 37px;\n  color: #d3c9b7;\n  width: 672px;\n  height: 298px;\n  box-sizing: border-box;\n  background: url(/images/games/card-game-ui/popup-bg.png) no-repeat center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 35px;\n}\n.modal.glow-lose[data-v-22fcdd76] {\n  box-shadow: 0 0 81px 0px #f22;\n}\n.modal.glow-win[data-v-22fcdd76] {\n  box-shadow: 0 0 81px 0px #2f2;\n}\n.modal.glow-push[data-v-22fcdd76] {\n  box-shadow: 0 0 81px 0px #ffcf3b;\n}\n.modal[data-v-22fcdd76] h5 {\n  font-size: 82px;\n  font-weight: normal;\n  text-align: center;\n  color: #f7a85b;\n  margin: 0;\n  text-shadow: -1px -1px 0 #ffcc9b, 1px -1px 0 #c38549, -1px 1px 0 #543d25, 1px 1px 0 #7c5630;\n}\n.modal[data-v-22fcdd76] h6 {\n  font-size: 70px;\n  font-weight: normal;\n  text-align: center;\n  color: #f7a85b;\n  margin: 0;\n  text-shadow: -1px -1px 0 #ffcc9b, 1px -1px 0 #c38549, -1px 1px 0 #543d25, 1px 1px 0 #7c5630;\n}\n.modal[data-v-22fcdd76] p {\n  font-size: 71px;\n  line-height: 80px;\n  text-align: center;\n  color: #f7a85b;\n  margin: 0;\n  text-shadow: -1px -1px 0 #ffcc9b, 1px -1px 0 #c38549, -1px 1px 0 #543d25, 1px 1px 0 #7c5630;\n}\n.modal[data-v-22fcdd76] button {\n  margin: 0 4px;\n  background: rgba(191, 140, 42, 0.25);\n  box-sizing: border-box;\n  border-radius: 8px;\n  margin-top: 8px;\n  padding: 8px 35px;\n  transition: background 0.2s;\n  font-size: 45px;\n}\n.dialog-enter-active[data-v-22fcdd76] {\n  transition: 0.6s;\n  opacity: 0;\n}\n.dialog-enter-active .modal[data-v-22fcdd76] {\n  transition: 0.6s;\n  opacity: 0;\n  transform-origin: center;\n  transform: translate(-50%, -50%) scale(0.9);\n}\n.dialog-leave-active[data-v-22fcdd76] {\n  transition: 0.6s;\n  opacity: 1;\n}\n.dialog-leave-active .modal[data-v-22fcdd76] {\n  transition: 0.6s;\n  opacity: 1;\n  transform-origin: center;\n  transform: translate(-50%, -50%) scale(1);\n}\n.dialog-enter-to[data-v-22fcdd76], .dialog-leave[data-v-22fcdd76] {\n  opacity: 1;\n}\n.dialog-enter-to .modal[data-v-22fcdd76], .dialog-leave .modal[data-v-22fcdd76] {\n  opacity: 1;\n  transform: translate(-50%, -50%) scale(1);\n}\n.dialog-enter[data-v-22fcdd76], .dialog-leave-to[data-v-22fcdd76] {\n  opacity: 0;\n}\n.dialog-enter .modal[data-v-22fcdd76], .dialog-leave-to .modal[data-v-22fcdd76] {\n  opacity: 0;\n  transform: translate(-50%, -50%) scale(0.9);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Preloader.vue?vue&type=style&index=0&id=73af507c&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Preloader.vue?vue&type=style&index=0&id=73af507c&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wrap[data-v-73af507c] {\n  background-color: black;\n  width: 100%;\n  height: 100%;\n  background-image: url(/images/games/card-game-ui/preloader-bg.png);\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.chip[data-v-73af507c] {\n  width: 200px;\n  height: 200px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 31px;\n  color: #809f71;\n  font-family: \"impact\";\n}\n.chip[data-v-73af507c]:after {\n  content: \" \";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 200px;\n  height: 200px;\n  background-size: cover;\n  background-image: url(/images/games/card-game-ui/preloader-chip.png);\n  transform-origin: center;\n  animation: chip-73af507c 2s infinite linear;\n}\n@keyframes chip-73af507c {\nfrom {\n    transform: translate(-50%, -50%) rotate(0deg);\n}\nto {\n    transform: translate(-50%, -50%) rotate(360deg);\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Table.vue?vue&type=style&index=0&id=7bfe051a&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Table.vue?vue&type=style&index=0&id=7bfe051a&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"impact\";\n  src: url(\"/fonts/card-games/impact.woff2\") format(\"woff2\"), url(\"/fonts/card-games/impact.woff\") format(\"woff\"), url(\"/fonts/card-games/impact.ttf\") format(\"ttf\");\n}\n@font-face {\n  font-family: \"gabriola\";\n  src: url(\"/fonts/card-games/gabriola.woff2\") format(\"woff2\"), url(\"/fonts/card-games/gabriola.woff\") format(\"woff\"), url(\"/fonts/card-games/gabriola.ttf\") format(\"ttf\");\n}\n@font-face {\n  font-family: \"consolaz\";\n  src: url(\"/fonts/card-games/consolaz.woff2\") format(\"woff2\"), url(\"/fonts/card-games/consolaz.woff\") format(\"woff\"), url(\"/fonts/card-games/consolaz.ttf\") format(\"ttf\");\n}\n@font-face {\n  font-family: \"consolai\";\n  src: url(\"/fonts/card-games/consolai.woff2\") format(\"woff2\"), url(\"/fonts/card-games/consolai.woff\") format(\"woff\"), url(\"/fonts/card-games/consolai.ttf\") format(\"ttf\");\n}\n@font-face {\n  font-family: \"consolab\";\n  src: url(\"/fonts/card-games/consolab.woff2\") format(\"woff2\"), url(\"/fonts/card-games/consolab.woff\") format(\"woff\"), url(\"/fonts/card-games/consolab.ttf\") format(\"ttf\");\n}\n@font-face {\n  font-family: \"consola\";\n  src: url(\"/fonts/card-games/consola.woff2\") format(\"woff2\"), url(\"/fonts/card-games/consola.woff\") format(\"woff\"), url(\"/fonts/card-games/consola.ttf\") format(\"ttf\");\n}\n.card-game-container[data-v-7bfe051a] {\n  width: 100%;\n  height: 50px;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  position: relative;\n  background: #160008;\n  height: calc(100vh - 64px - 40px);\n}\n.card-game-container.modal[data-v-7bfe051a] {\n  z-index: 6;\n}\n@media (max-width: 1250px) {\n.card-game-container[data-v-7bfe051a] {\n    height: calc(100vh - 64px - 64px);\n}\n}\n.card-game-table[data-v-7bfe051a] {\n  transform-origin: top left;\n  position: relative;\n  width: 3184px;\n  height: 1440px;\n  overflow: hidden;\n  transform-style: preserve-3d;\n  perspective: 1000px;\n  left: 50%;\n}\n.logo[data-v-7bfe051a] {\n  position: absolute;\n  left: calc(3184px / 2);\n  top: 415px;\n  transform: translate(-50%, -50%);\n}\n.paytable-min[data-v-7bfe051a] {\n  font-family: impact;\n  font-size: 15pt;\n  text-transform: uppercase;\n  position: absolute;\n  top: 430px;\n  left: 686px;\n  transform: rotate(-24deg);\n  color: #d2b782;\n}\n.paytable-max[data-v-7bfe051a] {\n  font-family: impact;\n  font-size: 15pt;\n  text-transform: uppercase;\n  position: absolute;\n  top: 451px;\n  left: 696px;\n  transform: rotate(-24deg);\n  color: #d2b782;\n}\n.paytable-link[data-v-7bfe051a] {\n  position: absolute;\n  top: 333px;\n  left: 588px;\n  width: 300px;\n  height: 150px;\n  transform: rotate(-24deg);\n  cursor: pointer;\n}\n.chips[data-v-7bfe051a] {\n  position: absolute;\n  bottom: 70px;\n  left: 360px;\n  display: flex;\n  transition: bottom 0.3s;\n}\n.chips.disabled[data-v-7bfe051a] {\n  bottom: -190px;\n}\n.control-panel[data-v-7bfe051a] {\n  position: absolute;\n  bottom: 22px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n.cards[data-v-7bfe051a] {\n  position: absolute;\n  top: 637px;\n  width: 100%;\n  transform: rotateX(13deg);\n  transform-style: preserve-3d;\n}\n.button-mini[data-v-7bfe051a] {\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.button-mini.game-info[data-v-7bfe051a] {\n  left: 364px;\n  top: 30px;\n}\n.button-mini.provably[data-v-7bfe051a] {\n  left: 445px;\n  top: 30px;\n}\n.button-mini.full[data-v-7bfe051a] {\n  right: 394px;\n  top: 30px;\n}\n.button-mini img[data-v-7bfe051a] {\n  z-index: 0;\n}\n.button-mini:hover img[data-v-7bfe051a] {\n  filter: brightness(2);\n}\n.button-mini:active img[data-v-7bfe051a] {\n  filter: brightness(4);\n}\n.provably-fair-form[data-v-7bfe051a] {\n  min-width: 300px;\n}\n.provably-fair-form label[data-v-7bfe051a] {\n  margin-top: 15px;\n  display: block;\n  font-family: \"impact\", sans-serif;\n  font-size: 1.2em;\n  font-weight: normal;\n  color: #be9243;\n}\n.provably-fair-form input[data-v-7bfe051a] {\n  color: #d3c9b7;\n  border: 3px solid #ffb438;\n  border-radius: 7px;\n  padding: 3px 5px;\n  margin: 5px 0;\n  display: block;\n  width: 100%;\n}\n.provably-fair-form .input-btn[data-v-7bfe051a] {\n  display: flex;\n  align-items: center;\n}\n.provably-fair-form .input-btn .btn-icon[data-v-7bfe051a] {\n  cursor: pointer;\n  padding: 0;\n  width: 38px;\n  height: 38px;\n  margin-left: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(191, 140, 42, 0.25);\n  box-sizing: border-box;\n  border-radius: 8px;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.provably-fair-form .input-btn .btn-icon[data-v-7bfe051a]:hover {\n  background: rgba(191, 140, 42, 0.45);\n}\n.provably-fair-form .input-btn .btn-icon[data-v-7bfe051a]:active {\n  background: rgba(191, 140, 42, 0.65);\n}\n.provably-fair-form .input-btn .btn-icon object[data-v-7bfe051a] {\n  width: 20px;\n  height: 20px;\n}\n.provably-fair-form button[data-v-7bfe051a] {\n  background: rgba(191, 140, 42, 0.25);\n  box-sizing: border-box;\n  border-radius: 8px;\n  margin-top: 8px;\n  padding: 8px 16px;\n  transition: background 0.2s;\n}\n.provably-fair-form button[data-v-7bfe051a]:hover {\n  background: rgba(191, 140, 42, 0.45);\n}\n.provably-fair-form button[data-v-7bfe051a]:active {\n  background: rgba(191, 140, 42, 0.65);\n}\n.portrait-warn[data-v-7bfe051a] {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-size: 25px;\n  z-index: 100;\n  background: black;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n@media (orientation: portrait) {\n.portrait-warn[data-v-7bfe051a] {\n    display: flex;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/game.vue?vue&type=style&index=0&id=76bf20b1&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/game.vue?vue&type=style&index=0&id=76bf20b1&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_76bf20b1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=style&index=0&id=76bf20b1&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/game.vue?vue&type=style&index=0&id=76bf20b1&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_76bf20b1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_76bf20b1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Bet.vue?vue&type=style&index=0&id=ba79ed46&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Bet.vue?vue&type=style&index=0&id=ba79ed46&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Bet_vue_vue_type_style_index_0_id_ba79ed46_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Bet.vue?vue&type=style&index=0&id=ba79ed46&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Bet.vue?vue&type=style&index=0&id=ba79ed46&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Bet_vue_vue_type_style_index_0_id_ba79ed46_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Bet_vue_vue_type_style_index_0_id_ba79ed46_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Button.vue?vue&type=style&index=0&id=756df996&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Button.vue?vue&type=style&index=0&id=756df996&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_756df996_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Button.vue?vue&type=style&index=0&id=756df996&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Button.vue?vue&type=style&index=0&id=756df996&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_756df996_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_756df996_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chip.vue?vue&type=style&index=0&id=a623e6a0&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chip.vue?vue&type=style&index=0&id=a623e6a0&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chip_vue_vue_type_style_index_0_id_a623e6a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chip.vue?vue&type=style&index=0&id=a623e6a0&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chip.vue?vue&type=style&index=0&id=a623e6a0&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chip_vue_vue_type_style_index_0_id_a623e6a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chip_vue_vue_type_style_index_0_id_a623e6a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chips.vue?vue&type=style&index=0&id=1701ab1a&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chips.vue?vue&type=style&index=0&id=1701ab1a&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chips_vue_vue_type_style_index_0_id_1701ab1a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chips.vue?vue&type=style&index=0&id=1701ab1a&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chips.vue?vue&type=style&index=0&id=1701ab1a&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chips_vue_vue_type_style_index_0_id_1701ab1a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chips_vue_vue_type_style_index_0_id_1701ab1a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=style&index=0&id=49e76f53&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=style&index=0&id=49e76f53&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Hand_vue_vue_type_style_index_0_id_49e76f53_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Hand.vue?vue&type=style&index=0&id=49e76f53&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=style&index=0&id=49e76f53&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Hand_vue_vue_type_style_index_0_id_49e76f53_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Hand_vue_vue_type_style_index_0_id_49e76f53_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalInfo.vue?vue&type=style&index=0&id=681d25c7&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalInfo.vue?vue&type=style&index=0&id=681d25c7&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalInfo_vue_vue_type_style_index_0_id_681d25c7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalInfo.vue?vue&type=style&index=0&id=681d25c7&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalInfo.vue?vue&type=style&index=0&id=681d25c7&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalInfo_vue_vue_type_style_index_0_id_681d25c7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalInfo_vue_vue_type_style_index_0_id_681d25c7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalResult.vue?vue&type=style&index=0&id=22fcdd76&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalResult.vue?vue&type=style&index=0&id=22fcdd76&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalResult_vue_vue_type_style_index_0_id_22fcdd76_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalResult.vue?vue&type=style&index=0&id=22fcdd76&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalResult.vue?vue&type=style&index=0&id=22fcdd76&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalResult_vue_vue_type_style_index_0_id_22fcdd76_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalResult_vue_vue_type_style_index_0_id_22fcdd76_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Preloader.vue?vue&type=style&index=0&id=73af507c&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Preloader.vue?vue&type=style&index=0&id=73af507c&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Preloader_vue_vue_type_style_index_0_id_73af507c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Preloader.vue?vue&type=style&index=0&id=73af507c&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Preloader.vue?vue&type=style&index=0&id=73af507c&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Preloader_vue_vue_type_style_index_0_id_73af507c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Preloader_vue_vue_type_style_index_0_id_73af507c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Table.vue?vue&type=style&index=0&id=7bfe051a&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Table.vue?vue&type=style&index=0&id=7bfe051a&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_7bfe051a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=style&index=0&id=7bfe051a&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Table.vue?vue&type=style&index=0&id=7bfe051a&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_7bfe051a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_7bfe051a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./packages/baccarat/resources/js/pages/game.vue":
/*!*******************************************************!*\
  !*** ./packages/baccarat/resources/js/pages/game.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game_vue_vue_type_template_id_76bf20b1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.vue?vue&type=template&id=76bf20b1&scoped=true& */ "./packages/baccarat/resources/js/pages/game.vue?vue&type=template&id=76bf20b1&scoped=true&");
/* harmony import */ var _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.vue?vue&type=script&lang=js& */ "./packages/baccarat/resources/js/pages/game.vue?vue&type=script&lang=js&");
/* harmony import */ var _game_vue_vue_type_style_index_0_id_76bf20b1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.vue?vue&type=style&index=0&id=76bf20b1&scoped=true&lang=scss& */ "./packages/baccarat/resources/js/pages/game.vue?vue&type=style&index=0&id=76bf20b1&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _game_vue_vue_type_template_id_76bf20b1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _game_vue_vue_type_template_id_76bf20b1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "76bf20b1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/baccarat/resources/js/pages/game.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/baccarat/resources/js/pages/info.vue":
/*!*******************************************************!*\
  !*** ./packages/baccarat/resources/js/pages/info.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _info_vue_vue_type_template_id_2a650926___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.vue?vue&type=template&id=2a650926& */ "./packages/baccarat/resources/js/pages/info.vue?vue&type=template&id=2a650926&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _info_vue_vue_type_template_id_2a650926___WEBPACK_IMPORTED_MODULE_0__.render,
  _info_vue_vue_type_template_id_2a650926___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/baccarat/resources/js/pages/info.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/baccarat/resources/js/pages/paytable.vue":
/*!***********************************************************!*\
  !*** ./packages/baccarat/resources/js/pages/paytable.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _paytable_vue_vue_type_template_id_958b3936___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paytable.vue?vue&type=template&id=958b3936& */ "./packages/baccarat/resources/js/pages/paytable.vue?vue&type=template&id=958b3936&");
/* harmony import */ var _paytable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paytable.vue?vue&type=script&lang=js& */ "./packages/baccarat/resources/js/pages/paytable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _paytable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _paytable_vue_vue_type_template_id_958b3936___WEBPACK_IMPORTED_MODULE_0__.render,
  _paytable_vue_vue_type_template_id_958b3936___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/baccarat/resources/js/pages/paytable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/baccarat/resources/js/pages/game.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./packages/baccarat/resources/js/pages/game.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/game.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/baccarat/resources/js/pages/paytable.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./packages/baccarat/resources/js/pages/paytable.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paytable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./paytable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/paytable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paytable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Games/CardGame/Bet.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Bet.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Bet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Bet.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Games/CardGame/Button.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Button.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Button.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Button.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Games/CardGame/Chip.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Chip.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chip.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chip.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Games/CardGame/Chips.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Chips.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chips_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chips.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chips.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chips_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Games/CardGame/Hand.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Hand.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Hand.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Games/CardGame/ModalInfo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/ModalInfo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalInfo.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Games/CardGame/ModalResult.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/ModalResult.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalResult.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalResult.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Games/CardGame/Preloader.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Preloader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Preloader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Preloader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Preloader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Preloader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Games/CardGame/Table.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Table.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Table.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/mixins/Game.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/mixins/Game.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Game.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixins/Game.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/baccarat/resources/js/pages/game.vue?vue&type=style&index=0&id=76bf20b1&scoped=true&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./packages/baccarat/resources/js/pages/game.vue?vue&type=style&index=0&id=76bf20b1&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_76bf20b1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=style&index=0&id=76bf20b1&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/game.vue?vue&type=style&index=0&id=76bf20b1&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/components/Games/CardGame/Bet.vue?vue&type=style&index=0&id=ba79ed46&scoped=true&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Bet.vue?vue&type=style&index=0&id=ba79ed46&scoped=true&lang=scss& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Bet_vue_vue_type_style_index_0_id_ba79ed46_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Bet.vue?vue&type=style&index=0&id=ba79ed46&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Bet.vue?vue&type=style&index=0&id=ba79ed46&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/components/Games/CardGame/Button.vue?vue&type=style&index=0&id=756df996&scoped=true&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Button.vue?vue&type=style&index=0&id=756df996&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_756df996_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Button.vue?vue&type=style&index=0&id=756df996&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Button.vue?vue&type=style&index=0&id=756df996&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/components/Games/CardGame/Chip.vue?vue&type=style&index=0&id=a623e6a0&scoped=true&lang=scss&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Chip.vue?vue&type=style&index=0&id=a623e6a0&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chip_vue_vue_type_style_index_0_id_a623e6a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chip.vue?vue&type=style&index=0&id=a623e6a0&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chip.vue?vue&type=style&index=0&id=a623e6a0&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/components/Games/CardGame/Chips.vue?vue&type=style&index=0&id=1701ab1a&scoped=true&lang=scss&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Chips.vue?vue&type=style&index=0&id=1701ab1a&scoped=true&lang=scss& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chips_vue_vue_type_style_index_0_id_1701ab1a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chips.vue?vue&type=style&index=0&id=1701ab1a&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chips.vue?vue&type=style&index=0&id=1701ab1a&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/components/Games/CardGame/Hand.vue?vue&type=style&index=0&id=49e76f53&scoped=true&lang=scss&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Hand.vue?vue&type=style&index=0&id=49e76f53&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Hand_vue_vue_type_style_index_0_id_49e76f53_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Hand.vue?vue&type=style&index=0&id=49e76f53&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=style&index=0&id=49e76f53&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/components/Games/CardGame/ModalInfo.vue?vue&type=style&index=0&id=681d25c7&scoped=true&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/ModalInfo.vue?vue&type=style&index=0&id=681d25c7&scoped=true&lang=scss& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalInfo_vue_vue_type_style_index_0_id_681d25c7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalInfo.vue?vue&type=style&index=0&id=681d25c7&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalInfo.vue?vue&type=style&index=0&id=681d25c7&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/components/Games/CardGame/ModalResult.vue?vue&type=style&index=0&id=22fcdd76&scoped=true&lang=scss&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/ModalResult.vue?vue&type=style&index=0&id=22fcdd76&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalResult_vue_vue_type_style_index_0_id_22fcdd76_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalResult.vue?vue&type=style&index=0&id=22fcdd76&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalResult.vue?vue&type=style&index=0&id=22fcdd76&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/components/Games/CardGame/Preloader.vue?vue&type=style&index=0&id=73af507c&scoped=true&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Preloader.vue?vue&type=style&index=0&id=73af507c&scoped=true&lang=scss& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Preloader_vue_vue_type_style_index_0_id_73af507c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Preloader.vue?vue&type=style&index=0&id=73af507c&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Preloader.vue?vue&type=style&index=0&id=73af507c&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/components/Games/CardGame/Table.vue?vue&type=style&index=0&id=7bfe051a&scoped=true&lang=scss&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Table.vue?vue&type=style&index=0&id=7bfe051a&scoped=true&lang=scss& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_7bfe051a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=style&index=0&id=7bfe051a&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Table.vue?vue&type=style&index=0&id=7bfe051a&scoped=true&lang=scss&");


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/game.vue?vue&type=template&id=76bf20b1&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/game.vue?vue&type=template&id=76bf20b1&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("card-table", {
    ref: "cardTable",
    staticClass: "fill-height",
    attrs: {
      actions: ["deal", "rebet", "newbet"],
      "bet-mode": _vm.betMode,
      "chips-bet": ["player", "tie", "banker"]
    },
    on: {
      bet: _vm.placeBet,
      unbet: _vm.onUnbet,
      click: function click($event) {
        _vm.resultModal = false;
      }
    },
    scopedSlots: _vm._u([{
      key: "bet-panel",
      fn: function fn(_ref) {
        var chips = _ref.chips,
          _unbet = _ref.unbet,
          dealer = _ref.dealer,
          _animated = _ref.animated;
        return [_c("bet", {
          attrs: {
            chips: chips.player,
            label: _vm.$t("Player"),
            position: -1.85,
            dealer: dealer,
            blink: !_vm.playing && !_vm.loading && _vm.gameBetType == 0
          },
          on: {
            click: function click() {
              return !_vm.playing && !_vm.loading ? _vm.gameBetType = 0 : null;
            },
            unbet: function unbet() {
              return _vm.onUnbetClick(0, _unbet);
            },
            animated: function animated(e) {
              return _animated("player");
            }
          }
        }), _vm._v(" "), _c("bet", {
          attrs: {
            chips: chips.tie,
            label: _vm.$t("Tie"),
            position: 0,
            dealer: dealer,
            blink: !_vm.playing && !_vm.loading && _vm.gameBetType == 1
          },
          on: {
            click: function click() {
              return !_vm.playing && !_vm.loading ? _vm.gameBetType = 1 : null;
            },
            unbet: function unbet() {
              return _vm.onUnbetClick(1, _unbet);
            },
            animated: function animated(e) {
              return _animated("tie");
            }
          }
        }), _vm._v(" "), _c("bet", {
          attrs: {
            chips: chips.banker,
            label: _vm.$t("Bank"),
            position: 1.85,
            dealer: dealer,
            blink: !_vm.playing && !_vm.loading && _vm.gameBetType == 2
          },
          on: {
            click: function click() {
              return !_vm.playing && !_vm.loading ? _vm.gameBetType = 2 : null;
            },
            unbet: function unbet() {
              return _vm.onUnbetClick(2, _unbet);
            },
            animated: function animated(e) {
              return _animated("banker");
            }
          }
        })];
      }
    }, {
      key: "control-panel",
      fn: function fn() {
        return [_c("transition", {
          attrs: {
            name: "slide-down"
          }
        }, [!_vm.playing && !_vm.loading ? _c("div", {
          staticClass: "btns-panel"
        }, [_c("action-button", {
          attrs: {
            type: "deal",
            title: _vm.$t("Deal"),
            disabled: _vm.loading || Object.values(_vm.gameBet).reduce(function (a, i) {
              return a + i;
            }, 0) < _vm.config.min_bet
          },
          on: {
            click: _vm.onDealClick
          }
        }), _vm._v(" "), _c("action-button", {
          attrs: {
            type: "rebet",
            title: _vm.$t("Rebet"),
            disabled: !_vm.isRebetActive || _vm.loading
          },
          on: {
            click: _vm.onRebetClick
          }
        }), _vm._v(" "), _c("action-button", {
          attrs: {
            type: "newbet",
            title: _vm.$t("New bet"),
            disabled: _vm.loading || Object.values(_vm.gameBet).reduce(function (a, i) {
              return a + i;
            }, 0) == 0
          },
          on: {
            click: _vm.onNewbetClick
          }
        })], 1) : _vm._e()])];
      },
      proxy: true
    }, {
      key: "paytable",
      fn: function fn() {
        return [_c("paytable")];
      },
      proxy: true
    }, {
      key: "info",
      fn: function fn() {
        return [_c("info")];
      },
      proxy: true
    }, {
      key: "bottom",
      fn: function fn() {
        return [_c("modal-result", {
          attrs: {
            glow: _vm.win > 0 ? "win" : _vm.win < 0 ? "lose" : "push"
          },
          model: {
            value: _vm.resultModal,
            callback: function callback($$v) {
              _vm.resultModal = $$v;
            },
            expression: "resultModal"
          }
        }, [_c("h5", [_vm._v(_vm._s(_vm.result))]), _vm._v(" "), _vm.win > 0 ? _c("p", [_vm._v("\n        " + _vm._s(_vm.win) + "\n      ")]) : _vm._e()])];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _vm._v(" "), _vm._v(" "), _vm._v(" "), _vm._v(" "), _c("hand", {
    attrs: {
      cards: _vm.playerCards,
      "cards-count": 2,
      "position-x": -1.5,
      "position-y": 0,
      result: _vm.playerResult,
      demo: _vm.playerDemo
    }
  }), _vm._v(" "), _c("hand", {
    attrs: {
      cards: _vm.dealerCards,
      "cards-count": 2,
      "position-x": 1.5,
      "position-y": 0,
      result: _vm.dealerResult,
      demo: _vm.dealerDemo
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/info.vue?vue&type=template&id=2a650926&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/info.vue?vue&type=template&id=2a650926& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h5", [_vm._v("\n    " + _vm._s(_vm.$t("How to play")) + "\n  ")]), _vm._v(" "), _c("p", [_vm._v("\n    " + _vm._s(_vm.$t("The objective in Baccarat is to correctly guess which of three possible propositions will win the round: player, banker or tie.")) + "\n    " + _vm._s(_vm.$t("Whichever hand is closest to nine is the winner.")) + "\n    " + _vm._s(_vm.$t("Cards are given point values as follows.")) + "\n    " + _vm._s(_vm.$t("Face cards and tens have no value.")) + "\n    " + _vm._s(_vm.$t("2 - 9 are counted at face value.")) + "\n    " + _vm._s(_vm.$t("Aces are valued at 1.")) + "\n    " + _vm._s(_vm.$t("Counts that reach double digits drop the first digit and are revalued (so 15 becomes 5).")) + "\n  ")]), _vm._v(" "), _c("p", [_vm._v("\n    " + _vm._s(_vm.$t("For each coup, two cards are dealt face up.")) + "\n    " + _vm._s(_vm.$t("If either the player or banker or both achieve a total of 8 or 9 at this stage, the coup is finished and the result is announced: a player win, a banker win, or tie.")) + "\n    " + _vm._s(_vm.$t("If neither hand has eight or nine, the drawing rules are applied to determine whether the player should receive a third card.")) + "\n    " + _vm._s(_vm.$t("Then, based on the value of any card drawn to the player, the drawing rules are applied to determine whether the banker should receive a third card.")) + "\n    " + _vm._s(_vm.$t("The coup is then finished, the outcome is announced, and winning bets are paid out.")) + "\n  ")]), _vm._v(" "), _c("p", [_vm._v("\n    " + _vm._s(_vm.$t("If the player has an initial total of 0–5, they draw a third card. If the player has an initial total of 6 or 7, they stand.")) + "\n    " + _vm._s(_vm.$t("If the player stood, the banker regards only their own hand and acts according to the same rule as the player.")) + "\n    " + _vm._s(_vm.$t("If the player drew a third card, the banker acts according to the following rules.")) + "\n    " + _vm._s(_vm.$t("If the banker total is 2 or less, then the banker draws a card, regardless of what the player third card is.")) + "\n    " + _vm._s(_vm.$t("If the banker total is 3, then the banker draws a third card unless the player third card was an 8.")) + "\n    " + _vm._s(_vm.$t("If the banker total is 4, then the banker draws a third card if the player third card was 2, 3, 4, 5, 6, 7.")) + "\n    " + _vm._s(_vm.$t("If the banker total is 5, then the banker draws a third card if the player third card was 4, 5, 6, or 7.")) + "\n    " + _vm._s(_vm.$t("If the banker total is 6, then the banker draws a third card if the player third card was a 6 or 7.")) + "\n    " + _vm._s(_vm.$t("If the banker total is 7, then the banker stands.")) + "\n  ")])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/paytable.vue?vue&type=template&id=958b3936&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/paytable.vue?vue&type=template&id=958b3936& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "paytable"
  }, [_c("h5", [_vm._v("\n    " + _vm._s(_vm.$t("Payout rules")) + "\n  ")]), _vm._v(" "), _c("table", [_c("thead", [_c("tr", [_c("th", [_vm._v("\n          " + _vm._s(_vm.$t("Result")) + "\n        ")]), _vm._v(" "), _c("th", [_vm._v("\n          " + _vm._s(_vm.$t("Payout")) + "\n        ")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v(_vm._s(_vm.$t("Player bet win")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.playerBetPayout))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.$t("Tie bet win")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.tieBetPayout))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.$t("Banker bet win")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.bankerBetPayout))])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Bet.vue?vue&type=template&id=ba79ed46&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Bet.vue?vue&type=template&id=ba79ed46&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "bet-container",
    style: "left: calc(3184px / 2 + (178px + 8px) * ".concat(_vm.position, ")"),
    on: {
      click: function click(e) {
        return _vm.$emit("click", e);
      }
    }
  }, [_c("div", {
    staticClass: "circle"
  }, [!_vm.noCircle ? _c("span", {
    "class": {
      blink: _vm.blink
    },
    style: _vm.size !== 1 ? "width: ".concat(178 * _vm.size, "px; height: ").concat(178 * _vm.size, "px;") : ""
  }) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "label"
  }, [_vm._v("\n      " + _vm._s(_vm.label) + "\n    ")]), _vm._v(" "), _vm.betValue > 0 ? _c("div", {
    staticClass: "value",
    "class": {
      "value-right": _vm.valueRight
    }
  }, [_c("div", {
    staticClass: "text"
  }, [_vm._v("\n        " + _vm._s(parseFloat(_vm.betValue.toFixed(2))) + "\n      ")])]) : _vm._e()]), _vm._v(" "), _vm._l(_vm.betChips, function (chip, i) {
    return _c("div", {
      key: "chip-".concat(i, "-").concat(chip.bet),
      staticClass: "chip",
      "class": {
        shadow: i === 0 && chip.animationDone,
        action: _vm.betChips.length === i - 1
      },
      style: "left: ".concat(chip.pos.x, "px; top: ").concat(chip.pos.y, "px;"),
      on: {
        click: function click(e) {
          return _vm.chipClick(i);
        }
      }
    }, [_c("img", {
      attrs: {
        src: "/images/games/card-game-ui/playing-chips/".concat(chip.bet, ".png")
      }
    })]);
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Button.vue?vue&type=template&id=756df996&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Button.vue?vue&type=template&id=756df996&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "button",
    "class": {
      disabled: _vm.disabled
    },
    on: {
      click: _vm.click
    }
  }, [_c("div", {
    staticClass: "sprite"
  }, [_c("img", {
    staticClass: "normal",
    attrs: {
      src: "/images/games/card-game-ui/".concat(_vm.type, ".png")
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "disabled",
    attrs: {
      src: "/images/games/card-game-ui/".concat(_vm.type, "-disabled.png")
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "hover",
    attrs: {
      src: "/images/games/card-game-ui/".concat(_vm.type, "-hover.png")
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "active",
    attrs: {
      src: "/images/games/card-game-ui/".concat(_vm.type, "-active.png")
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "btn-title"
  }, [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chip.vue?vue&type=template&id=a623e6a0&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chip.vue?vue&type=template&id=a623e6a0&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    ref: "chip",
    staticClass: "chip",
    "class": {
      disabled: _vm.disabled,
      active: _vm.active
    },
    on: {
      click: _vm.click
    }
  }, [_c("img", {
    attrs: {
      src: "/images/games/card-game-ui/bet-chips/".concat(_vm.value, ".png")
    }
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chips.vue?vue&type=template&id=1701ab1a&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chips.vue?vue&type=template&id=1701ab1a&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "chips-container",
    "class": {
      disabled: _vm.disabled
    }
  }, [_c("vue-tiny-slider", {
    ref: "slider",
    staticClass: "chips-slider",
    attrs: {
      items: "5",
      nav: false,
      controls: false,
      "mouse-drag": true,
      loop: false
    }
  }, _vm._l(_vm.chipsAvailable, function (chip) {
    return _c("div", {
      key: "chip-".concat(chip)
    }, [_c("chip", {
      staticClass: "chip",
      "class": {
        active: chip === _vm.active
      },
      attrs: {
        value: chip,
        disabled: chip > _vm.betMaxAvailable || _vm.disabled,
        slide: _vm.slideIndex
      },
      on: {
        click: function click(pos) {
          return _vm.click(chip, pos);
        }
      }
    })], 1);
  }), 0), _vm._v(" "), _vm.showArrows && _vm.chipsAvailable.length > 5 && _vm.slideIndex > 0 ? _c("div", {
    staticClass: "btn-control prev",
    on: {
      click: _vm.prev
    }
  }) : _vm._e(), _vm._v(" "), _vm.showArrows && _vm.chipsAvailable.length > 5 && _vm.slideIndex < _vm.chipsAvailable.length - 5 ? _c("div", {
    staticClass: "btn-control next",
    on: {
      click: _vm.next
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=template&id=49e76f53&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=template&id=49e76f53&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "hand-container",
    style: _vm.opacity < 1 ? "opacity: ".concat(_vm.opacity, ";") : ""
  }, [_c("transition-group", {
    staticClass: "hand",
    attrs: {
      tag: "div",
      name: "hand-card-animation"
    },
    on: {
      "before-enter": _vm.cardAnimationBeforeEnter,
      enter: _vm.cardAnimationEnter,
      leave: _vm.cardAnimationLeave
    }
  }, [_vm._l(_vm.handCards, function (card, i) {
    return [_c("div", {
      key: i,
      staticClass: "playing-card-container",
      "class": "deck-".concat(_vm.deck || "symbols").concat(card.faceUp ? " face-up" : "").concat(card.demo ? " demo" : "").concat(card.hintView ? " hint-view" : ""),
      style: "left: ".concat(card.positionX, "px; top: ").concat(card.positionY, "px;"),
      attrs: {
        "data-index": i,
        "data-face": card.faceUp ? 1 : 0,
        "data-position-x": card.positionX,
        "data-position-y": card.positionY
      }
    }, [_c("div", {
      staticClass: "playing-card"
    }, [_c("div", {
      staticClass: "front rounded",
      style: {
        backgroundImage: card.frontImageUrl
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "back rounded",
      style: {
        backgroundImage: card.backImageUrl
      }
    })])])];
  })], 2), _vm._v(" "), _vm.result.length ? [_c("div", {
    "class": "result".concat(_vm.resultBottom ? " bottom" : ""),
    style: "left: ".concat(_vm.calcResultPosX, "px; top: ").concat(_vm.calcResultPosY, "px;")
  }, [_c("div", {
    staticClass: "bg",
    style: "background-image: url(/images/games/card-game-ui/table-".concat(_vm.deck, ".jpg);right: calc(-1 * (3184px - ").concat(_vm.calcResultPosX, "px));")
  }), _vm._v(" "), _c("div", {
    staticClass: "value"
  }, [_vm._v("\n        " + _vm._s(_vm.result) + "\n      ")])])] : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalInfo.vue?vue&type=template&id=681d25c7&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalInfo.vue?vue&type=template&id=681d25c7&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("transition", {
    attrs: {
      name: "dialog"
    }
  }, [_vm.value ? _c("div", {
    staticClass: "modal-wrap",
    on: {
      click: function click($event) {
        return _vm.$emit("input", false);
      }
    }
  }, [_c("div", {
    staticClass: "modal",
    on: {
      click: function click($event) {
        $event.stopPropagation();
      }
    }
  }, [_vm._t("default")], 2)]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalResult.vue?vue&type=template&id=22fcdd76&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalResult.vue?vue&type=template&id=22fcdd76&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("transition", {
    attrs: {
      name: "dialog"
    }
  }, [_vm.value ? _c("div", {
    staticClass: "modal-wrap",
    on: {
      click: function click() {
        return _vm.stay ? null : _vm.$emit("input", false);
      }
    }
  }, [_c("div", {
    staticClass: "modal",
    "class": "glow-".concat(_vm.glow),
    on: {
      click: function click($event) {
        $event.stopPropagation();
      }
    }
  }, [_vm._t("default")], 2)]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Preloader.vue?vue&type=template&id=73af507c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Preloader.vue?vue&type=template&id=73af507c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "wrap"
  }, [_c("div", {
    staticClass: "chip"
  }, [_vm._v("\n    " + _vm._s(_vm.progress) + "%\n  ")])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Table.vue?vue&type=template&id=7bfe051a&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Table.vue?vue&type=template&id=7bfe051a&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("fullscreen", {
    model: {
      value: _vm.fullscreen,
      callback: function callback($$v) {
        _vm.fullscreen = $$v;
      },
      expression: "fullscreen"
    }
  }, [_vm.ready ? _c("div", {
    ref: "container",
    staticClass: "card-game-container",
    "class": {
      "system-bar-enabled": _vm.systemBarEnabled,
      modal: _vm.modalPaytable || _vm.modalInfo || _vm.modalProvably
    },
    style: "height: ".concat(_vm.containerHeight, "px;")
  }, [_c("div", {
    ref: "table",
    staticClass: "card-game-table",
    on: {
      click: function click(e) {
        return _vm.$emit("click", e);
      }
    }
  }, [_c("img", {
    attrs: {
      src: "".concat(_vm.imageBaseUrl, "/table-").concat(_vm.deck, ".jpg")
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "logo",
    attrs: {
      src: _vm.logoUrl
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "paytable-min"
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Min")) + ": " + _vm._s(_vm.paytableMin) + "\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "paytable-max"
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Max")) + ": " + _vm._s(_vm.paytableMax) + "\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "paytable-link",
    on: {
      click: function click($event) {
        _vm.modalPaytable = !_vm.modalPaytable;
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "cards"
  }, [_vm._t("default")], 2), _vm._v(" "), _c("div", {
    staticClass: "control-panel"
  }, [_vm._t("control-panel")], 2), _vm._v(" "), _c("chips", {
    staticClass: "chips",
    "class": {
      disabled: !_vm.betMode
    },
    attrs: {
      "bet-min": _vm.paytableMin,
      "bet-max": _vm.paytableMax,
      bet: _vm.bet
    },
    on: {
      bet: function bet(event) {
        return _vm.placeBet(event.bet, event.pos);
      }
    }
  }), _vm._v(" "), _vm._t("bet-panel", null, {
    chips: _vm.chips,
    unbet: _vm.unbet,
    dealer: _vm.dealer,
    animated: _vm.chipsAnimated
  }), _vm._v(" "), _c("div", {
    staticClass: "button-mini game-info",
    on: {
      click: function click($event) {
        _vm.modalInfo = true;
      }
    }
  }, [_c("img", {
    attrs: {
      src: "".concat(_vm.imageBaseUrl, "/info.png")
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "button-mini provably",
    on: {
      click: function click($event) {
        _vm.modalProvably = true;
      }
    }
  }, [_c("img", {
    attrs: {
      src: "".concat(_vm.imageBaseUrl, "/provably.png")
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "button-mini full",
    on: {
      click: function click($event) {
        _vm.fullscreen = !_vm.fullscreen;
      }
    }
  }, [_c("img", {
    attrs: {
      src: "".concat(_vm.imageBaseUrl, "/full.png")
    }
  })]), _vm._v(" "), _vm._t("bottom")], 2), _vm._v(" "), _c("modal-info", {
    model: {
      value: _vm.modalPaytable,
      callback: function callback($$v) {
        _vm.modalPaytable = $$v;
      },
      expression: "modalPaytable"
    }
  }, [_vm._t("paytable")], 2), _vm._v(" "), _c("modal-info", {
    model: {
      value: _vm.modalInfo,
      callback: function callback($$v) {
        _vm.modalInfo = $$v;
      },
      expression: "modalInfo"
    }
  }, [_vm._t("info")], 2), _vm._v(" "), _c("modal-info", {
    model: {
      value: _vm.modalProvably,
      callback: function callback($$v) {
        _vm.modalProvably = $$v;
      },
      expression: "modalProvably"
    }
  }, [_c("div", {
    staticClass: "provably-fair-form"
  }, [_c("h5", [_vm._v("\n          " + _vm._s(_vm.$t("Provably fair")) + "\n        ")]), _vm._v(" "), _c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.createProvablyFairGame.apply(null, arguments);
      }
    }
  }, [_c("label", [_vm._v(_vm._s(_vm.$t("Client seed")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.provablyFairGame.client_seed,
      expression: "provablyFairGame.client_seed"
    }],
    domProps: {
      value: _vm.provablyFairGame.client_seed
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.provablyFairGame, "client_seed", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", [_vm._v(_vm._s(_vm.$t("Server hash")))]), _vm._v(" "), _c("div", {
    staticClass: "input-btn"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.provablyFairGame.hash,
      expression: "provablyFairGame.hash"
    }],
    ref: "hash",
    attrs: {
      readonly: ""
    },
    domProps: {
      value: _vm.provablyFairGame.hash
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.provablyFairGame, "hash", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "btn-icon",
    on: {
      click: function click($event) {
        return _vm.copyToClipboard(_vm.$refs.hash);
      }
    }
  }, [_c("object", [_c("svg", {
    staticClass: "svg-inline--fa fa-clone fa-w-16",
    attrs: {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "far",
      "data-icon": "clone",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }
  }, [_c("path", {
    attrs: {
      fill: "currentColor",
      d: "M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"
    }
  })])])])]), _vm._v(" "), _c("button", {
    attrs: {
      type: "submit",
      disabled: !_vm.provablyFairGame || !_vm.provablyFairGame.client_seed || !(_vm.provablyFairGame.client_seed.length > 0 && _vm.provablyFairGame.client_seed.length < 32)
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Generate")) + "\n          ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "portrait-warn"
  }, [_vm._v("\n      " + _vm._s(_vm.$t("Please rotate your device to landscape orientation")) + "\n    ")])], 1) : _c("preloader", {
    attrs: {
      progress: _vm.loadingProgress
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/baccarat/resources/js/pages/game.vue?vue&type=template&id=76bf20b1&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./packages/baccarat/resources/js/pages/game.vue?vue&type=template&id=76bf20b1&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_76bf20b1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_76bf20b1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_76bf20b1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=template&id=76bf20b1&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/game.vue?vue&type=template&id=76bf20b1&scoped=true&");


/***/ }),

/***/ "./packages/baccarat/resources/js/pages/info.vue?vue&type=template&id=2a650926&":
/*!**************************************************************************************!*\
  !*** ./packages/baccarat/resources/js/pages/info.vue?vue&type=template&id=2a650926& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_2a650926___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_2a650926___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_2a650926___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info.vue?vue&type=template&id=2a650926& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/info.vue?vue&type=template&id=2a650926&");


/***/ }),

/***/ "./packages/baccarat/resources/js/pages/paytable.vue?vue&type=template&id=958b3936&":
/*!******************************************************************************************!*\
  !*** ./packages/baccarat/resources/js/pages/paytable.vue?vue&type=template&id=958b3936& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_paytable_vue_vue_type_template_id_958b3936___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_paytable_vue_vue_type_template_id_958b3936___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_paytable_vue_vue_type_template_id_958b3936___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./paytable.vue?vue&type=template&id=958b3936& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/baccarat/resources/js/pages/paytable.vue?vue&type=template&id=958b3936&");


/***/ }),

/***/ "./resources/js/components/Games/CardGame/Bet.vue?vue&type=template&id=ba79ed46&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Bet.vue?vue&type=template&id=ba79ed46&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Bet_vue_vue_type_template_id_ba79ed46_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Bet_vue_vue_type_template_id_ba79ed46_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Bet_vue_vue_type_template_id_ba79ed46_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Bet.vue?vue&type=template&id=ba79ed46&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Bet.vue?vue&type=template&id=ba79ed46&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Games/CardGame/Button.vue?vue&type=template&id=756df996&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Button.vue?vue&type=template&id=756df996&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_756df996_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_756df996_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_756df996_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Button.vue?vue&type=template&id=756df996&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Button.vue?vue&type=template&id=756df996&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Games/CardGame/Chip.vue?vue&type=template&id=a623e6a0&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Chip.vue?vue&type=template&id=a623e6a0&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chip_vue_vue_type_template_id_a623e6a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chip_vue_vue_type_template_id_a623e6a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chip_vue_vue_type_template_id_a623e6a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chip.vue?vue&type=template&id=a623e6a0&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chip.vue?vue&type=template&id=a623e6a0&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Games/CardGame/Chips.vue?vue&type=template&id=1701ab1a&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Chips.vue?vue&type=template&id=1701ab1a&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chips_vue_vue_type_template_id_1701ab1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chips_vue_vue_type_template_id_1701ab1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chips_vue_vue_type_template_id_1701ab1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chips.vue?vue&type=template&id=1701ab1a&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Chips.vue?vue&type=template&id=1701ab1a&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Games/CardGame/Hand.vue?vue&type=template&id=49e76f53&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Hand.vue?vue&type=template&id=49e76f53&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Hand_vue_vue_type_template_id_49e76f53_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Hand_vue_vue_type_template_id_49e76f53_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Hand_vue_vue_type_template_id_49e76f53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Hand.vue?vue&type=template&id=49e76f53&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=template&id=49e76f53&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Games/CardGame/ModalInfo.vue?vue&type=template&id=681d25c7&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/ModalInfo.vue?vue&type=template&id=681d25c7&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalInfo_vue_vue_type_template_id_681d25c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalInfo_vue_vue_type_template_id_681d25c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalInfo_vue_vue_type_template_id_681d25c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalInfo.vue?vue&type=template&id=681d25c7&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalInfo.vue?vue&type=template&id=681d25c7&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Games/CardGame/ModalResult.vue?vue&type=template&id=22fcdd76&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/ModalResult.vue?vue&type=template&id=22fcdd76&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalResult_vue_vue_type_template_id_22fcdd76_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalResult_vue_vue_type_template_id_22fcdd76_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalResult_vue_vue_type_template_id_22fcdd76_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalResult.vue?vue&type=template&id=22fcdd76&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/ModalResult.vue?vue&type=template&id=22fcdd76&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Games/CardGame/Preloader.vue?vue&type=template&id=73af507c&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Preloader.vue?vue&type=template&id=73af507c&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Preloader_vue_vue_type_template_id_73af507c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Preloader_vue_vue_type_template_id_73af507c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Preloader_vue_vue_type_template_id_73af507c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Preloader.vue?vue&type=template&id=73af507c&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Preloader.vue?vue&type=template&id=73af507c&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Games/CardGame/Table.vue?vue&type=template&id=7bfe051a&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Table.vue?vue&type=template&id=7bfe051a&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_7bfe051a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_7bfe051a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_7bfe051a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=template&id=7bfe051a&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Table.vue?vue&type=template&id=7bfe051a&scoped=true&");


/***/ })

}]);