"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./assets/js/components/App.jsx");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/app.scss */ "./assets/styles/app.scss");




var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('app'));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], null));

/***/ }),

/***/ "./assets/js/components/App.jsx":
/*!**************************************!*\
  !*** ./assets/js/components/App.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Home */ "./assets/js/components/Home.jsx");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/NavDropdown.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Offcanvas.js");
/* harmony import */ var _images_logo_logo_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../images/logo/logo.svg */ "./assets/images/logo/logo.svg");
/* harmony import */ var _images_logo_logo_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../images/logo/logo.png */ "./assets/images/logo/logo.png");
/* harmony import */ var _pages_Presentation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../pages/Presentation */ "./assets/js/pages/Presentation.jsx");
/* harmony import */ var _images_logo_bw_logo_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../images/logo/bw_logo.png */ "./assets/images/logo/bw_logo.png");
/* harmony import */ var _pages_Equipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../pages/Equipe */ "./assets/js/pages/Equipe.jsx");
/* harmony import */ var react_icons_tfi__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! react-icons/tfi */ "./node_modules/react-icons/tfi/index.esm.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _pages_ConseilsFinanciers__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../pages/ConseilsFinanciers */ "./assets/js/pages/ConseilsFinanciers.jsx");
/* harmony import */ var _pages_IngenierieFinancieres__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../pages/IngenierieFinancieres */ "./assets/js/pages/IngenierieFinancieres.jsx");
/* harmony import */ var _pages_LeveeFonds__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../pages/LeveeFonds */ "./assets/js/pages/LeveeFonds.jsx");
/* harmony import */ var _pages_Performance__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../pages/Performance */ "./assets/js/pages/Performance.jsx");
/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../pages/Contact */ "./assets/js/pages/Contact.jsx");
/* harmony import */ var _pages_Valorisation__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../pages/Valorisation */ "./assets/js/pages/Valorisation.jsx");
/* harmony import */ var _pages_BusinessPlan__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../pages/BusinessPlan */ "./assets/js/pages/BusinessPlan.jsx");
/* harmony import */ var _pages_Financement__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../pages/Financement */ "./assets/js/pages/Financement.jsx");


















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



















var router = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_34__.createBrowserRouter)([{
  path: '/',
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(Root, null),
  children: [{
    path: '',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_19__["default"], null)
  }, {
    path: 'accueil',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_19__["default"], null)
  }, {
    path: 'presentation',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_pages_Presentation__WEBPACK_IMPORTED_MODULE_22__["default"], null)
  }, {
    path: 'notre-equipe',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_pages_Equipe__WEBPACK_IMPORTED_MODULE_24__["default"], null)
  }, {
    path: 'nos-metiers',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", null, "metier")
  }, {
    path: 'nos-metiers/conseil-financier-et-strategique',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_pages_ConseilsFinanciers__WEBPACK_IMPORTED_MODULE_26__["default"], null)
  }, {
    path: 'nos-metiers/ingenierie-financiere',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_pages_IngenierieFinancieres__WEBPACK_IMPORTED_MODULE_27__["default"], null)
  }, {
    path: 'nos-metiers/levee-de-fonds',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_pages_LeveeFonds__WEBPACK_IMPORTED_MODULE_28__["default"], null)
  }, {
    path: 'nos-metiers/valorisation-des-fonds-propres',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_pages_Valorisation__WEBPACK_IMPORTED_MODULE_31__["default"], null)
  }, {
    path: 'nos-metiers/redaction-de-business-plan',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_pages_BusinessPlan__WEBPACK_IMPORTED_MODULE_32__["default"], null)
  }, {
    path: 'nos-realisations',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_pages_Performance__WEBPACK_IMPORTED_MODULE_29__["default"], null)
  }, {
    path: 'demande-de-financement-projet',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_pages_Financement__WEBPACK_IMPORTED_MODULE_33__["default"], null)
  }, {
    path: 'contact',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_pages_Contact__WEBPACK_IMPORTED_MODULE_30__["default"], null)
  }]
}]);
function Root() {
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_25___default().init();
    document.title = "Divine Finances et conseils";
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDropdownOpen = _useState2[0],
    setIsDropdownOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isMenuFixed = _useState4[0],
    setIsMenuFixed = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showOffcanvas = _useState6[0],
    setShowOffcanvas = _useState6[1];
  var closeOffcanvas = function closeOffcanvas() {
    setShowOffcanvas(false);
  };
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isQuiSommesNousOpen = _useState8[0],
    setIsQuiSommesNousOpen = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isNosMetiersOpen = _useState10[0],
    setIsNosMetiersOpen = _useState10[1];
  var handleQuiSommesNousToggle = function handleQuiSommesNousToggle() {
    setIsQuiSommesNousOpen(!isQuiSommesNousOpen);
  };
  var handleNosMetiersToggle = function handleNosMetiersToggle() {
    setIsNosMetiersOpen(!isNosMetiersOpen);
  };
  var handleDropdownToggle = function handleDropdownToggle() {
    setIsDropdownOpen(!isDropdownOpen);
  };
  var handleScroll = function handleScroll() {
    var scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setIsMenuFixed(true);
    } else {
      setIsMenuFixed(false);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("section", {
    id: "topHead"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "topHead"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_35__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_36__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_37__["default"], {
    className: "telephone"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
    href: "tel:+2252722599265"
  }, "+225 27 22 59 92 65")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_37__["default"], {
    className: "email text-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
    href: "mailto:infos@divinefinancesci.com"
  }, "infos@divinefinancesci.com")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("section", {
    id: "menu",
    style: {
      position: isMenuFixed ? 'fixed' : 'relative',
      backgroundColor: isMenuFixed ? '#7890e5' : 'rgba(255,255,255,0.3)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_38__["default"], {
    collapseOnSelect: true,
    expand: "lg",
    sticky: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_35__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
    className: "navbar-brand",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("img", {
    src: _images_logo_logo_svg__WEBPACK_IMPORTED_MODULE_20__,
    datasrc: _images_logo_logo_svg__WEBPACK_IMPORTED_MODULE_20__,
    className: "logo",
    alt: "logo Divine Finances et conseils"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_38__["default"].Toggle, {
    "aria-controls": "basic-navbar-nav",
    onClick: function onClick() {
      return setShowOffcanvas(true);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_38__["default"].Collapse, {
    id: "basic-navbar-nav",
    onClick: closeOffcanvas
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_39__["default"], {
    className: "me-auto menu-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
    className: "nav-link",
    to: "/accueil"
  }, "Accueil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_40__["default"], {
    title: "Qui sommes-nous?",
    id: "basic-nav-dropdown",
    show: isQuiSommesNousOpen,
    onMouseEnter: handleQuiSommesNousToggle,
    onMouseLeave: handleQuiSommesNousToggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
    to: "/presentation",
    className: "dropdown-item"
  }, "Pr\xE9sentation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
    to: "/notre-equipe",
    className: "dropdown-item"
  }, "Notre \xE9quipe")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_40__["default"], {
    title: "Nos m\xE9tiers",
    id: "metier-nav-dropdown",
    show: isNosMetiersOpen,
    onMouseEnter: handleNosMetiersToggle,
    onMouseLeave: handleNosMetiersToggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
    to: "/nos-metiers/conseil-financier-et-strategique",
    className: "dropdown-item"
  }, "Conseil financier et strat\xE9gique"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
    to: "/nos-metiers/ingenierie-financiere",
    className: "dropdown-item"
  }, "Ing\xE9nierie financi\xE8re"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
    to: "/nos-metiers/levee-de-fonds",
    className: "dropdown-item"
  }, "Lev\xE9e de fonds"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
    to: "/nos-metiers/valorisation-des-fonds-propres",
    className: "dropdown-item"
  }, "Valorisation des fonds"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
    to: "/nos-metiers/redaction-de-business-plan",
    className: "dropdown-item"
  }, "R\xE9daction de Business Plan")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
    className: "nav-link",
    to: "/nos-realisations"
  }, "Nos r\xE9alisations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
    className: "nav-link",
    to: "/demande-de-financement-projet"
  }, "Financement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
    className: "nav-link",
    to: "/contact"
  }, "Contact"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_41__["default"], {
    show: showOffcanvas,
    onHide: function onHide() {
      return setShowOffcanvas(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_41__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_41__["default"].Title, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("img", {
    src: _images_logo_logo_png__WEBPACK_IMPORTED_MODULE_21__,
    datasrc: _images_logo_logo_png__WEBPACK_IMPORTED_MODULE_21__,
    className: "logo",
    alt: "logo Divine Finances et conseils"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_41__["default"].Body, {
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_39__["default"], {
    className: "me-auto menu-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_39__["default"].Link, {
    href: "#home"
  }, "Accueil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_40__["default"], {
    title: "Qui sommes-nous?",
    id: "basic-nav-dropdown",
    show: isDropdownOpen,
    onMouseEnter: handleDropdownToggle,
    onMouseLeave: handleDropdownToggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_40__["default"].Item, {
    href: "#action/3.1"
  }, "Pr\xE9sentation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_40__["default"].Item, {
    href: "#action/3.2"
  }, "Notre \xE9quipe")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_39__["default"].Link, {
    href: "#link"
  }, "Nos metiers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_39__["default"].Link, {
    href: "#link"
  }, "Nos r\xE9alisations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_39__["default"].Link, {
    href: "#link"
  }, "R\xE9crutement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_39__["default"].Link, {
    href: "#link"
  }, "Contact")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_42__.Outlet, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("section", {
    id: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_35__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("img", {
    src: _images_logo_bw_logo_png__WEBPACK_IMPORTED_MODULE_23__,
    alt: "Logo Divine Finances & Conseils",
    className: "img-fluid"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("ul", {
    className: "d-lg-flex justify-content-center align-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
    href: "#"
  }, "Pr\xE9sentation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
    href: "#"
  }, "Equipe")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
    href: "#"
  }, "M\xE9tiers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
    href: "#"
  }, "R\xE9alisations")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
    href: "#"
  }, "Recrutement")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
    href: "#"
  }, "Contact"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "copyright"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_35__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_36__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_37__["default"], {
    sm: 12,
    md: 8,
    className: "copy"
  }, "\xA9 Copyright 2021, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
    href: "https://divinefinancesci.com/"
  }, "Divine Finances Conseils SA"), " | Tous droits r\xE9serv\xE9s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_37__["default"], {
    sm: 12,
    md: 4,
    className: "powered text-md-end text-sm-center"
  }, "By ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
    href: "https://dreammaker-ci.com"
  }, "DREAM MAKER")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "scroll-to-top",
    onClick: function onClick() {
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    style: {
      display: isMenuFixed ? "block" : "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_icons_tfi__WEBPACK_IMPORTED_MODULE_43__.TfiArrowCircleUp, null)));
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_42__.RouterProvider, {
    router: router
  });
}

/***/ }),

/***/ "./assets/js/components/BgHead.jsx":
/*!*****************************************!*\
  !*** ./assets/js/components/BgHead.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "bgHead"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bgHead"
  })));
}

/***/ }),

/***/ "./assets/js/components/Home.jsx":
/*!***************************************!*\
  !*** ./assets/js/components/Home.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Carousel.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var _images_logo_logo_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../images/logo/logo.png */ "./assets/images/logo/logo.png");
/* harmony import */ var _images_logo_logo_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../images/logo/logo.svg */ "./assets/images/logo/logo.svg");
/* harmony import */ var _images_slide_05_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../images/slide/05.png */ "./assets/images/slide/05.png");
/* harmony import */ var _images_slide_02_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../images/slide/02.png */ "./assets/images/slide/02.png");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var react_icons_fa6__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! react-icons/fa6 */ "./node_modules/react-icons/fa6/index.esm.js");
/* harmony import */ var _images_metiers_01_metier_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../images/metiers/01-metier.jpg */ "./assets/images/metiers/01-metier.jpg");
/* harmony import */ var _images_metiers_02_metier_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../images/metiers/02-metier.jpg */ "./assets/images/metiers/02-metier.jpg");
/* harmony import */ var _images_metiers_03_metier_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../images/metiers/03-metier.jpg */ "./assets/images/metiers/03-metier.jpg");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _images_realisations_02_jpeg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../images/realisations/02.jpeg */ "./assets/images/realisations/02.jpeg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var _images_equipe_01_kone_jpg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../images/equipe/01-kone.jpg */ "./assets/images/equipe/01-kone.jpg");
/* harmony import */ var _images_equipe_dga_jpg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../images/equipe/dga.jpg */ "./assets/images/equipe/dga.jpg");
/* harmony import */ var _images_equipe_02_gustave_jpg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../images/equipe/02-gustave.jpg */ "./assets/images/equipe/02-gustave.jpg");
/* harmony import */ var _images_equipe_03_sylla_jpg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../images/equipe/03-sylla.jpg */ "./assets/images/equipe/03-sylla.jpg");
/* harmony import */ var _images_logo_bw_logo_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../images/logo/bw_logo.png */ "./assets/images/logo/bw_logo.png");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_spinner_overlay__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react-spinner-overlay */ "./node_modules/react-spinner-overlay/dist/index.esm.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");


















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
































/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(80),
    _useState2 = _slicedToArray(_useState, 2),
    maxCharacters = _useState2[0],
    setMaxCharacters = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoading = _useState6[0],
    setIsLoading = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_24___default().init();
    setLoading(false);
    setIsLoading(false);
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isDropdownOpen = _useState8[0],
    setIsDropdownOpen = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isMenuFixed = _useState10[0],
    setIsMenuFixed = _useState10[1];
  var handleScroll = function handleScroll() {
    var scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setIsMenuFixed(true);
    } else {
      setIsMenuFixed(false);
    }
  };

  // Resumé domaine
  var contentIngenierie = "Nous proposons des services sur mesure répondant aux besoins de nos clients (organisation des flux financiers intergroupe, reclassement de participations, valorisation et développement stratégique des entreprises) et toute autres opérations susceptibles de renforcer la capacité de nos clients à lever des Fonds et à renforcer la rentabilité de leurs investissements.";
  var truncatedContentIngenierie = "".concat(contentIngenierie.substring(0, maxCharacters), "...");
  var contentLevee = "Nous assistons et aidons nos clients dans les négociations avec les bailleurs de fonds et autres investisseurs (private Equity, quasi-equity, dettes...).";
  var truncatedContentLevee = "".concat(contentLevee.substring(0, maxCharacters), "...");
  var contentConseils = "Nous assistons et accompagnons nos clients dans toutes les opérations de restructuration financière, analyse de perspective de développement, etc.";
  var truncatedContentConseils = "".concat(contentConseils.substring(0, maxCharacters), "...");
  var puceFinance = function puceFinance() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("svg", {
      className: "puce-finance",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("path", {
      d: "M15 11v.01"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("path", {
      d: "M5.173 8.378a3 3 0 1 1 4.656 -1.377"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("path", {
      d: "M16 4v3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342c-.336 .95 -.907 1.8 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1 -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3h0z"
    }));
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_38__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("meta", {
    name: "keywords",
    content: "Finances, economiques, conseils, fonds"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("meta", {
    name: "description",
    content: "Un partenaire cr\xE9dible dans le conseil financier et strat\xE9gique."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("link", {
    rel: "canonical",
    href: "https://divinefinancesci.com/"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("link", {
    rel: "next",
    href: " https://divinefinancesci.com/"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("meta", {
    property: "og:locale",
    content: "fr_FR"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("meta", {
    property: "og:title",
    content: "Divine Finances Conseils"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("meta", {
    property: "og:description",
    content: "Un partenaire cr\xE9dible dans le conseil financier et strat\xE9gique."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("meta", {
    property: "og:url",
    content: "http://divinefinancesci.com/"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("meta", {
    property: "og:site_name",
    content: "Divine Finances Conseils"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("meta", {
    property: "article:modified_time",
    content: "2023-10-17T11:08:30+00:00"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("meta", {
    property: "og:image",
    content: _images_logo_logo_png__WEBPACK_IMPORTED_MODULE_20__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("meta", {
    property: "og:image:type",
    content: "image/svg+xml"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("meta", {
    name: "twitter:description",
    content: "Un partenaire cr\xE9dible dans le conseil financier et strat\xE9gique."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("meta", {
    name: "twitter:title",
    content: "Divine Finances Conseils"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("meta", {
    name: "twitter:domain",
    content: "Un partenaire cr\xE9dible dans le conseil financier et strat\xE9gique."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("meta", {
    name: "twitter:image:src",
    content: _images_logo_logo_png__WEBPACK_IMPORTED_MODULE_20__
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("section", {
    id: "carousel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_41__["default"], {
    fade: true,
    controls: false,
    interval: 7000
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_41__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("img", {
    src: _images_slide_05_png__WEBPACK_IMPORTED_MODULE_22__,
    alt: "Slide 1",
    className: "d-block w-100",
    loading: "lazy"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_41__["default"].Caption, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h3", null, "Finances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("p", null, "Nous accompagnons les entreprises avec des solutions concr\xE8tes aux probl\xE9matiques de lev\xE9e de fonds, d\u2019optimisation financi\xE8re, de structuration et de restructuration financi\xE8re."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_41__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("img", {
    src: _images_slide_02_png__WEBPACK_IMPORTED_MODULE_23__,
    alt: "Slide 2",
    className: "d-block w-100",
    loading: "lazy"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_41__["default"].Caption, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h3", null, "Conseils"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("p", null, "Un partenaire cr\xE9dible dans le conseil financier et strat\xE9gique en C\xF4te d'Ivoire dans des secteurs cl\xE9s de l\u2019\xE9conomie tels que l\u2019agro-industrie, les travaux publics, l\u2019\xE9lectricit\xE9, les services financiers, l\u2019immobilier\u2026"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("section", {
    id: "accroche"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "accroche"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_42__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_43__["default"], {
    sm: 6,
    className: "label",
    "data-aos": "fade-right",
    "data-aos-easing": "ease-in-out",
    "data-aos-duration": "2000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("span", null, "Divine Finances Conseils"), ", agr\xE9\xE9e"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_43__["default"], {
    sm: 6,
    className: "iob",
    "data-aos": "fade-left",
    "data-aos-easing": "ease-in-out",
    "data-aos-duration": "2000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("p", null, "Interm\xE9diaire en Op\xE9ration de Banque ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("br", null), " (IOB N\xB0: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("u", null, "CI 00004/IOB/2022"), ")"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("section", {
    id: "domaines"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "domaine"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_44__["default"], {
    fluid: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_42__["default"], {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_43__["default"], {
    lg: 4,
    className: "domaine-block",
    "data-aos": "fade-right",
    "data-aos-easing": "ease-in-out",
    "data-aos-duration": "2500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_45__.NavLink, {
    to: "/nos-metiers/ingenierie-financiere"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h3", {
    className: "titre"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_46__.RiMoneyDollarCircleFill, null), "Ing\xE9nierie Financi\xE8re"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("p", null, truncatedContentIngenierie)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_43__["default"], {
    lg: 4,
    className: "domaine-block",
    "data-aos": "fade-up",
    "data-aos-easing": "ease-in-out",
    "data-aos-duration": "2500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_45__.NavLink, {
    to: "/nos-metiers/levee-de-fonds"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h3", {
    className: "titre"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_47__.GiReceiveMoney, null), "Lev\xE9e de fonds"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("p", null, truncatedContentLevee)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_43__["default"], {
    lg: 4,
    className: "domaine-block",
    "data-aos": "fade-left",
    "data-aos-easing": "ease-in-out",
    "data-aos-duration": "2500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_45__.NavLink, {
    to: "/nos-metiers/conseil-financier-et-strategique"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h3", {
    className: "titre"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_icons_fa6__WEBPACK_IMPORTED_MODULE_48__.FaChalkboardUser, null), "Conseils"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("p", null, truncatedContentConseils)))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("section", {
    id: "metiers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "metier"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_44__["default"], {
    fluid: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h1", null, "Nos m\xE9tiers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_42__["default"], {
    className: "row-cols-1 row-cols-lg-3 g-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_43__["default"], {
    "data-aos": "fade-left",
    "data-aos-easing": "ease-in-out",
    "data-aos-duration": "2500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_45__.NavLink, {
    to: "/nos-metiers/conseil-financier-et-strategique"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"], {
    className: "h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"].Img, {
    variant: "top",
    src: _images_metiers_01_metier_jpg__WEBPACK_IMPORTED_MODULE_26__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"].Title, null, "Conseil financier et strat\xE9gique"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"].Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, "Restructuration financi\xE8re"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, "Analyse de perspective de d\xE9veloppement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, "Elaboration ou revue de plan d'affaires")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "text-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_50__.BsArrowRight, null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_43__["default"], {
    "data-aos": "fade-down",
    "data-aos-easing": "ease-in-out",
    "data-aos-duration": "2500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_45__.NavLink, {
    to: "/nos-metiers/levee-de-fonds"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"], {
    className: "h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"].Img, {
    variant: "top",
    src: _images_metiers_02_metier_jpg__WEBPACK_IMPORTED_MODULE_27__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"].Title, null, "Lev\xE9e de fonds"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"].Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, "Financements structur\xE9s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, "Financement de projet")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "text-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_50__.BsArrowRight, null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_43__["default"], {
    "data-aos": "fade-right",
    "data-aos-easing": "ease-in-out",
    "data-aos-duration": "2500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_45__.NavLink, {
    to: "/nos-metiers/ingenierie-financiere"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"], {
    className: "h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"].Img, {
    variant: "top",
    src: _images_metiers_03_metier_jpg__WEBPACK_IMPORTED_MODULE_28__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"].Title, null, "Ing\xE9nierie financi\xE8re"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"].Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, "Fusion - acquisition"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, "Arrangement de financement")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "text-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_50__.BsArrowRight, null))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("section", {
    id: "performance"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "performance"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_44__["default"], {
    fluid: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_42__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_43__["default"], {
    md: 7,
    xl: 6,
    className: "performance-liste",
    "data-aos": "zoom-in",
    "data-aos-easing": "ease-in-out",
    "data-aos-duration": "2500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h1", null, "Nos performances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, puceFinance(), " Lev\xE9e de fonds de ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("span", null, "25 millions d'euro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", {
    className: "puce-principale"
  }, puceFinance(), " Restructuration organisationnelle de ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("span", null, " deux conglem\xE9rats de dix (10) soci\xE9t\xE9s chacun "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, puceFinance(), " R\xE9daction des proc\xE9dures de fonctionnement du groupe,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, puceFinance(), " Certification des comptes de toutes les filiales et leur consolidation comptable au sein de la holding,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, puceFinance(), " R\xE9daction et la revue des conventions et contrats entre la holding et les filiales"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, puceFinance(), " R\xE9daction du business plan du groupe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, puceFinance(), " Valorisation des fonds propres de toutes les filiales et de la holding"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, "Valorisation des fonds propres"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, "R\xE9alisation de Business Plan"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_43__["default"], {
    md: 5,
    xl: 6,
    className: "illustration",
    "data-aos": "zoom-out",
    "data-aos-easing": "ease-in-out",
    "data-aos-duration": "2500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("img", {
    src: _images_realisations_02_jpeg__WEBPACK_IMPORTED_MODULE_29__,
    alt: "Notre performance",
    className: "img-fluid",
    loading: "lazy"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("section", {
    id: "equipe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "equipe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_44__["default"], {
    fluid: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h1", null, "Notre \xE9quipe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_42__["default"], {
    className: "g-3",
    "data-aos": "fade-down",
    "data-aos-easing": "ease-in-out",
    "data-aos-duration": "2500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_slick__WEBPACK_IMPORTED_MODULE_30__["default"], settings, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_43__["default"], {
    className: "profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"], {
    className: "h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"].Img, {
    variant: "top",
    src: _images_equipe_01_kone_jpg__WEBPACK_IMPORTED_MODULE_33__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h3", null, "RAMATOU TIEGNIN KONE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h5", null, "P.D.G"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_43__["default"], {
    className: "profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"], {
    className: "h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"].Img, {
    variant: "top",
    src: _images_equipe_dga_jpg__WEBPACK_IMPORTED_MODULE_34__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h3", null, "KAN AUGUSTIN N'DRI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h5", null, "D.G.A"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_43__["default"], {
    className: "profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"], {
    className: "h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"].Img, {
    src: _images_equipe_02_gustave_jpg__WEBPACK_IMPORTED_MODULE_35__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h3", null, "GUSTAVE KRAGBE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h5", null, "Responsable projet"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_43__["default"], {
    className: "profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"], {
    className: "h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"].Img, {
    variant: "top",
    src: _images_equipe_03_sylla_jpg__WEBPACK_IMPORTED_MODULE_36__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_49__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h3", null, "CHEICKNA SYLLA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h5", null, "CONSULTANT")))))))))), isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "loading-animation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_spinner_overlay__WEBPACK_IMPORTED_MODULE_39__.CircleSpinnerOverlay, null)) : null);
}

/***/ }),

/***/ "./assets/js/components/SidebarMetier.jsx":
/*!************************************************!*\
  !*** ./assets/js/components/SidebarMetier.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_lia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/lia */ "./node_modules/react-icons/lia/index.esm.js");
/* harmony import */ var react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa6 */ "./node_modules/react-icons/fa6/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/gr */ "./node_modules/react-icons/gr/index.esm.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);







/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_1___default().init();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "sidebar-titre"
  }, "Nos m\xE9tiers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "sidebar-liste"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/nos-metiers/conseil-financier-et-strategique"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lia__WEBPACK_IMPORTED_MODULE_2__.LiaLongArrowAltRightSolid, null), " Conseils financiers et strat\xE9giques")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/nos-metiers/ingenierie-financiere"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lia__WEBPACK_IMPORTED_MODULE_2__.LiaLongArrowAltRightSolid, null), " Ing\xE9nierie financi\xE8re")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/nos-metiers/levee-de-fonds"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lia__WEBPACK_IMPORTED_MODULE_2__.LiaLongArrowAltRightSolid, null), " Lev\xE9e de fonds")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/nos-metiers/valorisation-des-fonds-propres"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lia__WEBPACK_IMPORTED_MODULE_2__.LiaLongArrowAltRightSolid, null), " Valorisation de fonds")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/nos-metiers/redaction-de-business-plan"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lia__WEBPACK_IMPORTED_MODULE_2__.LiaLongArrowAltRightSolid, null), " R\xE9daction de Business Plan")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "separateur"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "rubrique"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lia__WEBPACK_IMPORTED_MODULE_2__.LiaLongArrowAltRightSolid, null), " Qui sommes-nous?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "rubrique"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/nos-realisations"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lia__WEBPACK_IMPORTED_MODULE_2__.LiaLongArrowAltRightSolid, null), " Notre performance")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "rubrique"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lia__WEBPACK_IMPORTED_MODULE_2__.LiaLongArrowAltRightSolid, null), " Recrutement")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Nous contacter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "adresse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__.FaLocationDot, null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://maps.app.goo.gl/1AHdsKvHNtsqfVJz8",
    target: "_blank"
  }, "Cocody Mermos - Imm. DIA | Abidjan, C\xF4te d'Ivoire")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "telephone"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsFillTelephoneFill, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "tel:+2252722599265"
  }, " +225 27 22 59 92 65")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_gr__WEBPACK_IMPORTED_MODULE_5__.GrMail, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "mailto:infos@divinefinancesci.com"
  }, "infos@divinefinancesci.com"))));
}

/***/ }),

/***/ "./assets/js/components/SidebarPerformance.jsx":
/*!*****************************************************!*\
  !*** ./assets/js/components/SidebarPerformance.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_lia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/lia */ "./node_modules/react-icons/lia/index.esm.js");
/* harmony import */ var react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa6 */ "./node_modules/react-icons/fa6/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/gr */ "./node_modules/react-icons/gr/index.esm.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);







/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_1___default().init();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "sidebar-titre"
  }, "Notre performance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "sidebar-liste"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "separateur"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "rubrique"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lia__WEBPACK_IMPORTED_MODULE_2__.LiaLongArrowAltRightSolid, null), " Qui sommes-nous?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "rubrique"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/nos-metiers/conseil-financier-et-strategique"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lia__WEBPACK_IMPORTED_MODULE_2__.LiaLongArrowAltRightSolid, null), " Nos m\xE9tiers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "rubrique"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lia__WEBPACK_IMPORTED_MODULE_2__.LiaLongArrowAltRightSolid, null), " Recrutement")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Nous contacter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "adresse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__.FaLocationDot, null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://maps.app.goo.gl/1AHdsKvHNtsqfVJz8",
    target: "_blank"
  }, "Cocody Mermos - Imm. DIA | Abidjan, C\xF4te d'Ivoire")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "telephone"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsFillTelephoneFill, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "tel:+2252722599265"
  }, " +225 27 22 59 92 65")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_gr__WEBPACK_IMPORTED_MODULE_5__.GrMail, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "mailto:infos@divinefinancesci.com"
  }, "infos@divinefinancesci.com"))));
}

/***/ }),

/***/ "./assets/js/components/SidebarPresentation.jsx":
/*!******************************************************!*\
  !*** ./assets/js/components/SidebarPresentation.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_lia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/lia */ "./node_modules/react-icons/lia/index.esm.js");
/* harmony import */ var react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa6 */ "./node_modules/react-icons/fa6/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/gr */ "./node_modules/react-icons/gr/index.esm.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);







/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_1___default().init();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "sidebar-titre"
  }, "Qui sommes-nous?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "sidebar-liste"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lia__WEBPACK_IMPORTED_MODULE_2__.LiaLongArrowAltRightSolid, null), " Pr\xE9sentation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/notre-equipe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lia__WEBPACK_IMPORTED_MODULE_2__.LiaLongArrowAltRightSolid, null), " Notre \xE9quipe")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "separateur"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "rubrique"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/nos-metiers/conseil-financier-et-strategique"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lia__WEBPACK_IMPORTED_MODULE_2__.LiaLongArrowAltRightSolid, null), " Nos m\xE9tiers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "rubrique"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/nos-realisations"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lia__WEBPACK_IMPORTED_MODULE_2__.LiaLongArrowAltRightSolid, null), " Notre performance")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "rubrique"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lia__WEBPACK_IMPORTED_MODULE_2__.LiaLongArrowAltRightSolid, null), " Recrutement")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Nous contacter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "adresse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__.FaLocationDot, null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://maps.app.goo.gl/1AHdsKvHNtsqfVJz8",
    target: "_blank"
  }, "Cocody Mermos - Imm. DIA | Abidjan, C\xF4te d'Ivoire")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "telephone"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsFillTelephoneFill, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "tel:+2252722599265"
  }, " +225 27 22 59 92 65")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_gr__WEBPACK_IMPORTED_MODULE_5__.GrMail, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "mailto:infos@divinefinancesci.com"
  }, "infos@divinefinancesci.com"))));
}

/***/ }),

/***/ "./assets/js/pages/BusinessPlan.jsx":
/*!******************************************!*\
  !*** ./assets/js/pages/BusinessPlan.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Breadcrumb.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _components_BgHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BgHead */ "./assets/js/components/BgHead.jsx");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SidebarPresentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SidebarPresentation */ "./assets/js/components/SidebarPresentation.jsx");
/* harmony import */ var _components_SidebarMetier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SidebarMetier */ "./assets/js/components/SidebarMetier.jsx");










/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_2___default().init();
    document.title = "Rédaction de business plan";
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BgHead__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    href: "/"
  }, "Accueil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    href: "#"
  }, "Nos m\xE9tiers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    active: true
  }, "R\xE9daction de business plan")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    md: 4,
    lg: 3,
    className: "sidebar",
    "data-aos": "fade-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SidebarMetier__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    md: 8,
    lg: 9,
    className: "content",
    "data-aos": "fade-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "content-titre"
  }, "Valorisation des fonds propres"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "paragraphe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Plus de vingt (20) business plans au cours de l'ann\xE9e 2022-2023"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Valorisation du business plan")))))))));
}

/***/ }),

/***/ "./assets/js/pages/ConseilsFinanciers.jsx":
/*!************************************************!*\
  !*** ./assets/js/pages/ConseilsFinanciers.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Breadcrumb.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _components_BgHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BgHead */ "./assets/js/components/BgHead.jsx");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SidebarPresentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SidebarPresentation */ "./assets/js/components/SidebarPresentation.jsx");
/* harmony import */ var _components_SidebarMetier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SidebarMetier */ "./assets/js/components/SidebarMetier.jsx");










/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_2___default().init();
    document.title = "Présentation de Divine Finances & Conseils";
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BgHead__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    href: "/"
  }, "Accueil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    href: "#"
  }, "Nos m\xE9tiers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    active: true
  }, "Conseils financiers et strat\xE9giques")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    md: 4,
    lg: 3,
    className: "sidebar",
    "data-aos": "fade-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SidebarMetier__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    md: 8,
    lg: 9,
    className: "content",
    "data-aos": "fade-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "content-titre"
  }, "Conseils financiers et strat\xE9giques"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "paragraphe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "RESTRUCTURATION FINANCI\xC8RE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Diagnostic \xE9conomique et financier de l\u2019entreprise"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\xC9laboration de mesures d\u2019assainissement de la structure financi\xE8re"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\xC9laboration d\u2019un Plan d\u2019affaires sur base d\u2019un mod\xE8le financier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "R\xE9daction d\u2019un m\xE9morandum d\u2019information de synth\xE8se et de tous supports d\u2019aide aux n\xE9gociations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Assistance dans la pr\xE9paration d\u2019un plan d\u2019action de redressement en partenariat avec le management, les cr\xE9anciers et les actionnaires"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "N\xE9gociation des axes de restructuration des dettes, en coordination avec le client")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "mt-4"
  }, "ANALYSE DE PERSPECTIVES DE D\xC9VELOPPEMENT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\xC9valuation du positionnement strat\xE9gique de l\u2019entreprise"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Analyse alternative de d\xE9veloppement d\u2019entreprise (recherche de partenaires, d\xE9veloppement de nouvelle activit\xE9, etc.)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "S\xE9lection d\u2019opportunit\xE9s d\u2019investissement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "R\xE9daction d\u2019un m\xE9morandum d\u2019information pour servir de support strat\xE9gique")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "mt-4"
  }, "\xC9LABORATION OU REVUE DE PLAN D\u2019AFFAIRES"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Diagnostic op\xE9rationnel et financier (\xE9valuation de l\u2019activit\xE9 si existante)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Revue et assistance \xE0 l\u2019\xE9laboration du Plan d\u2019affaires et du mod\xE8le financier de l\u2019entreprise"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "D\xE9finition d\u2019une structure financi\xE8re optimale en collaboration avec le management"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "R\xE9daction d\u2019un m\xE9morandum d\u2019information \xE0 l\u2019attention des pr\xEAteurs/investisseurs, et de notes sp\xE9cifiques \xE0 l\u2019attention du Conseil d\u2019Administration et du management"))))))))));
}

/***/ }),

/***/ "./assets/js/pages/Contact.jsx":
/*!*************************************!*\
  !*** ./assets/js/pages/Contact.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Breadcrumb.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/FloatingLabel.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _components_BgHead__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/BgHead */ "./assets/js/components/BgHead.jsx");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");


















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    validated = _useState2[0],
    setValidated = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    captchaValue = _useState4[0],
    setCaptchaValue = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_20___default().init();
    document.title = "Nos réalisations";
  }, []);
  var handleSubmit = function handleSubmit(event) {
    var form = event.currentTarget;
    if (form.checkValidity() === false || !captchaValue) {
      event.preventDefault();
      event.stopPropagation();
      alert("Veuillez compléter le captcha avant de soumettre.");
    }
    setValidated(true);
  };
  var onCaptchaChange = function onCaptchaChange(value) {
    setCaptchaValue(value); // Set the captcha value when the user completes it
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_components_BgHead__WEBPACK_IMPORTED_MODULE_19__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("section", {
    id: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_23__["default"].Item, {
    href: "/"
  }, "Accueil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_23__["default"].Item, {
    active: true
  }, "Contact")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("section", {
    id: "contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_24__["default"], {
    className: "row-cols-1 row-cols-lg-3",
    "data-aos": "fade-down",
    "data-aos-duration": "2500",
    "data-aos-easing": "ease-in-out"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_25__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_26__.GiRotaryPhone, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h4", null, "T\xE9l\xE9phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
    href: "tel:+2252722599268"
  }, "+225 27 22 59 92 68"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_25__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_27__.IoIosMail, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h4", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
    href: "mailto:infos@divinefinancesci.com"
  }, "infos@divinefinancesci.com"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_25__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_28__.FaMapMarkerAlt, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h4", null, "Localisation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
    href: "https://maps.app.goo.gl/1AHdsKvHNtsqfVJz8",
    target: "_blank"
  }, "Cocody Mermoz - Imm. DIA 4\xE8 \xE9tage | Abidjan, C\xF4te d'Ivoire")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_24__["default"], {
    className: "formulaire"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_25__["default"], {
    lg: 6,
    xl: 5,
    "data-aos": "fade-right",
    "data-aos-easing": "ease-in-out",
    "data-aos-duration": 2500
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h2", null, "Ecrivez-nous"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("p", null, "Laissez nous votre message et nous vous contacterons sous peu."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_29__["default"], {
    noValidate: true,
    validated: validated,
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_30__["default"], {
    controlId: "nom",
    label: "Nom & Pr\xE9noms *",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_29__["default"].Control, {
    type: "text",
    placeholder: "nom",
    required: true,
    autoComplete: "off",
    name: "nom"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_29__["default"].Control.Feedback, {
    type: "invalid"
  }, "Veuillez renseigner votre nom & pr\xE9noms")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_30__["default"], {
    controlId: "floatingInput",
    label: "Contact",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_29__["default"].Control, {
    type: "tel",
    placeholder: "contact",
    name: "contact"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_30__["default"], {
    controlId: "email",
    label: "Adresse email *",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_29__["default"].Control, {
    type: "email",
    placeholder: "email",
    name: "email",
    autoComplete: "off",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_29__["default"].Control.Feedback, {
    type: "invalid"
  }, "Veuillez entrer un email valide")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_30__["default"], {
    controlId: "objet",
    label: "Objet *",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_29__["default"].Control, {
    type: "text",
    placeholder: "objet",
    name: "objet",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_29__["default"].Control.Feedback, {
    type: "invalid"
  }, "veuillez entrer l'objet de votre message")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_30__["default"], {
    controlId: "message",
    label: "Message *"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_29__["default"].Control, {
    as: "textarea",
    placeholder: "Message",
    style: {
      height: '100px'
    },
    name: "message",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_29__["default"].Control.Feedback, {
    type: "invalid"
  }, "Veuillez entrer votre message")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "my-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_21__["default"], {
    sitekey: "6Le0JEoqAAAAACF2q2WURUHLowYBJTTE0TZMqDFh" // Remplacez par votre clé publique
    ,
    onChange: onCaptchaChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "d-grid gap-2 mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_31__["default"], {
    variant: "primary",
    size: "lg",
    type: "submit"
  }, "Envoyer")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_25__["default"], {
    lg: 6,
    xl: 7,
    "data-aos": "fade-left",
    "data-aos-easing": "ease-in-out",
    "data-aos-duration": 2500
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h2", null, "Retrouvez nous"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("p", null, "Suivez cet itin\xE9raire pour nous r\xE9joindre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("iframe", {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.5253101941994!2d-3.9973294999999998!3d5.3364612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb368fa0ff77%3A0xe73e079022e2dc21!2sDFC%20-%20Divine%20Finances%20Conseils!5e0!3m2!1sfr!2sci!4v1697444482169!5m2!1sfr!2sci",
    width: "100%",
    height: "450",
    style: {
      border: '0'
    },
    allowFullScreen: "true",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade"
  })))))));
}

/***/ }),

/***/ "./assets/js/pages/Equipe.jsx":
/*!************************************!*\
  !*** ./assets/js/pages/Equipe.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Breadcrumb.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var _components_BgHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BgHead */ "./assets/js/components/BgHead.jsx");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var _images_equipe_01_kone_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/equipe/01-kone.jpg */ "./assets/images/equipe/01-kone.jpg");
/* harmony import */ var _images_equipe_dga_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/equipe/dga.jpg */ "./assets/images/equipe/dga.jpg");
/* harmony import */ var _images_equipe_02_gustave_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/equipe/02-gustave.jpg */ "./assets/images/equipe/02-gustave.jpg");
/* harmony import */ var _images_equipe_03_sylla_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/equipe/03-sylla.jpg */ "./assets/images/equipe/03-sylla.jpg");













/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_2___default().init();
    document.title = "Notre équipe";
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BgHead__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Item, {
    href: "/"
  }, "Accueil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Item, {
    href: "#"
  }, "qui sommes-nous?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Item, {
    active: true
  }, "Notre \xE9quipe")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "equipe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "equipe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fluid: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Notre \xE9quipe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "g-3",
    "data-aos": "fade-down",
    "data-aos-easing": "ease-in-out",
    "data-aos-duration": "2500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    md: 6,
    lg: 4,
    className: "profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Img, {
    variant: "top",
    src: _images_equipe_01_kone_jpg__WEBPACK_IMPORTED_MODULE_4__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "RAMATOU TIEGNIN KONE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "P.D.G"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    md: 6,
    lg: 4,
    className: "profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Img, {
    variant: "top",
    src: _images_equipe_dga_jpg__WEBPACK_IMPORTED_MODULE_5__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "KAN AUGUSTIN N'DRI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "D.G.A"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    md: 6,
    lg: 4,
    className: "profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Img, {
    src: _images_equipe_02_gustave_jpg__WEBPACK_IMPORTED_MODULE_6__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "GUSTAVE KRAGBE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "Responsable projet"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    md: 6,
    lg: 4,
    className: "profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Img, {
    variant: "top",
    src: _images_equipe_03_sylla_jpg__WEBPACK_IMPORTED_MODULE_7__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "CHEICKNA SYLLA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "CONSULTANT"))))))))));
}

/***/ }),

/***/ "./assets/js/pages/Financement.jsx":
/*!*****************************************!*\
  !*** ./assets/js/pages/Financement.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Breadcrumb.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/FloatingLabel.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _components_BgHead__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/BgHead */ "./assets/js/components/BgHead.jsx");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");


















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    validated = _useState2[0],
    setValidated = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    captchaValue = _useState4[0],
    setCaptchaValue = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    partenaireActive = _useState6[0],
    setPartenaireActive = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    organismeActive = _useState8[0],
    setOrganismeActive = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_20___default().init();
    document.title = "Demande de financement de projet";
  }, []);
  var handleSubmit = function handleSubmit(event) {
    var form = event.currentTarget;
    if (form.checkValidity() === false || !captchaValue) {
      event.preventDefault();
      event.stopPropagation();
      alert("Veuillez compléter le captcha avant de soumettre.");
    }
    setValidated(true);
  };
  var onCaptchaChange = function onCaptchaChange(value) {
    setCaptchaValue(value); // Set the captcha value when the user completes it
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_components_BgHead__WEBPACK_IMPORTED_MODULE_19__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("section", {
    id: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_23__["default"].Item, {
    href: "/"
  }, "Accueil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_23__["default"].Item, {
    active: true
  }, "Demande de financement")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("section", {
    id: "financement"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "financement"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_24__["default"], {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_25__["default"], {
    className: "col-md-10 col-lg-8 offset-md-1 offset-lg-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h2", {
    className: "text-center"
  }, "Demande de financement de projet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h4", {
    className: "text-center"
  }, "VOUS AVEZ UN PROJET, VOUS RECHERCHEZ UN FINANCEMENT?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h6", {
    className: "text-center"
  }, "DIVINE FINANCES CONSEILS VOUS ACCOMPAGNE AVEC UN BESOIN REEL DE FINANCEMENT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_24__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_25__["default"], {
    className: "mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("p", null, "Les activit\xE9s de DIVINE FINANCES CONSEILS en tant qu\u2019interm\xE9diaire en op\xE9rations de banque consistent \xE0 :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, "Analyser vos besoins de financement aupr\xE8s des institutions financi\xE8res ;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, "Vous conseillez sur d\u2019autres sources de financement.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"], {
    noValidate: true,
    validated: validated,
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_27__["default"], {
    controlId: "nom",
    label: "Nom de l'entreprise *",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control, {
    type: "text",
    placeholder: "nom",
    required: true,
    autoComplete: "off",
    name: "nom"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control.Feedback, {
    type: "invalid"
  }, "Veuillez renseigner le nom de votre entreprise")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_27__["default"], {
    controlId: "floatingInput",
    label: "Actvit\xE9 *",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control, {
    type: "text",
    placeholder: "Activit\xE9",
    name: "activite",
    required: true,
    autoComplete: "off"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_27__["default"], {
    controlId: "dateCreation",
    label: "Date de cr\xE9ation *",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control, {
    type: "date",
    placeholder: "Date",
    name: "dateCreation",
    autoComplete: "off",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control.Feedback, {
    type: "invalid"
  }, "Veuillez entrer la date de cr\xE9ation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_27__["default"], {
    controlId: "chiffreAffaire",
    label: "Chiffre d'affaires des trois (3) derni\xE8res ann\xE9es *",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control, {
    type: "text",
    placeholder: "Chiffre d'affaire",
    name: "chiffreAffaire",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control.Feedback, {
    type: "invalid"
  }, "Veuillez entrer le chiffre d'affaires des trois (3) derni\xE8res ann\xE9es")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_27__["default"], {
    controlId: "siege",
    label: "Si\xE8ge *",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control, {
    type: "text",
    placeholder: "Si\xE8ge",
    name: "siege",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control.Feedback, {
    type: "invalid"
  }, "Si\xE8ge")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("ul", {
    className: "mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("strong", null, "INFORMATIONS SIGNATAIRE(S)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_27__["default"], {
    controlId: "nomDemandeur",
    label: "Nom et prenoms du demandeur *",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control, {
    type: "text",
    placeholder: "Nom",
    name: "nomDemandeur",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control.Feedback, {
    type: "invalid"
  }, "Nom et prenoms du demandeur")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_27__["default"], {
    controlId: "qualite",
    label: "Qualit\xE9 *",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control, {
    type: "text",
    placeholder: "Qualit\xE9",
    name: "qualite",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control.Feedback, {
    type: "invalid"
  }, "Veuillez entrer votre qualit\xE9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_27__["default"], {
    controlId: "email",
    label: "Email *",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control, {
    type: "text",
    placeholder: "email",
    name: "email",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control.Feedback, {
    type: "invalid"
  }, "Veuillez entrer votre adresse email")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_27__["default"], {
    controlId: "telephone",
    label: "Telephone *",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control, {
    type: "text",
    placeholder: "telephone",
    name: "email",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control.Feedback, {
    type: "invalid"
  }, "Veuillez entrer votre num\xE9ro de telephone")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("ul", {
    className: "mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("strong", null, "DESCRIPTION DU PROJET"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_27__["default"], {
    controlId: "titreProjet",
    label: "Titre du projet *",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control, {
    type: "text",
    placeholder: "Titre du projet",
    name: "titreProjet",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control.Feedback, {
    type: "invalid"
  }, "Veuillez entrer le titre de votre projet")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_27__["default"], {
    controlId: "decriptionProjet",
    label: "D\xE9crivez bri\xE8vement le projet propos\xE9 et les objectifs. *",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control, {
    as: "textarea",
    placeholder: "Description du projet",
    style: {
      height: '200px'
    },
    name: "message",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control.Feedback, {
    type: "invalid"
  }, "Veuillez d\xE9crire bri\xE8vement le projet propos\xE9 et les objectifs.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_27__["default"], {
    controlId: "montantProjet",
    label: "Montant total demand\xE9 pour mener \xE0 bien ce projet (Veuillez estimer les co\xFBts) :",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control, {
    type: "text",
    placeholder: "Montant total du projet",
    name: "montantProjet",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control.Feedback, {
    type: "invalid"
  }, "Veuillez entrer le montant total demand\xE9 pour mener \xE0 bien ce projet (Veuillez estimer les co\xFBts) :")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("ul", {
    className: "mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("strong", null, "PARTENARIATS ET COLLABORATIONS"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_27__["default"], {
    controlId: "projetPartenaire",
    label: "Avez-vous des partenaires pour ce projet?",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Select, {
    "aria-label": "Selectionnez vos partenaires",
    onChange: function onChange(e) {
      return setPartenaireActive(e.target.value === "OUI");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("option", null, "-- Selectionnez --"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("option", {
    value: "OUI"
  }, "OUI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("option", {
    value: "NON"
  }, "NON"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_27__["default"], {
    controlId: "nomPartenaire",
    label: "Si oui, inscrivez le nom des partenaires avec qui vous travaillerez pendant le projet et leurs r\xF4les.",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control, {
    type: "text",
    placeholder: "Nom du partenaire",
    name: "nomPartenaire",
    disabled: !partenaireActive
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control.Feedback, null, "Si oui, inscrivez le nom des partenaires avec qui vous travaillerez pendant le projet et leurs r\xF4les.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("ul", {
    className: "mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("strong", null, "CO-FINANCEMENT(S)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_27__["default"], {
    controlId: "nomEtablissement",
    label: "Le projet a-t-il \xE9t\xE9 d\xE9j\xE0 pr\xE9sent\xE9 \xE0 un \xE9tablissement financier ou un organisme pour financement ?",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Select, {
    "aria-label": "Selectionnez l'\xE9tablissement",
    onChange: function onChange(e) {
      return setOrganismeActive(e.target.value === "OUI");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("option", null, "-- Selectionnez --"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("option", {
    value: "NON"
  }, "NON"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("option", {
    value: "OUI"
  }, "OUI"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_27__["default"], {
    controlId: "nomOrganisme",
    label: "Si oui, pr\xE9cisez le nom de l\u2019\xE9tablissement financier ou de l\u2019organisme ",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control, {
    type: "text",
    placeholder: "Nom de l'\xE9tablissement financier",
    name: "nomOrganisme",
    disabled: !organismeActive
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"].Control.Feedback, null, "Si oui, pr\xE9cisez le nom de l\u2019\xE9tablissement financier ou de l\u2019organisme")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "my-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_21__["default"], {
    sitekey: "6Le0JEoqAAAAACF2q2WURUHLowYBJTTE0TZMqDFh" // Remplacez par votre clé publique
    ,
    onChange: onCaptchaChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "d-grid gap-2 mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_28__["default"], {
    variant: "primary",
    size: "lg",
    type: "submit"
  }, "Envoyer")))))))))));
}

/***/ }),

/***/ "./assets/js/pages/IngenierieFinancieres.jsx":
/*!***************************************************!*\
  !*** ./assets/js/pages/IngenierieFinancieres.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Breadcrumb.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _components_BgHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BgHead */ "./assets/js/components/BgHead.jsx");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SidebarPresentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SidebarPresentation */ "./assets/js/components/SidebarPresentation.jsx");
/* harmony import */ var _components_SidebarMetier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SidebarMetier */ "./assets/js/components/SidebarMetier.jsx");










/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_2___default().init();
    document.title = "Ingénierie financière";
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BgHead__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    href: "/"
  }, "Accueil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    href: "#"
  }, "Nos m\xE9tiers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    active: true
  }, "Ing\xE9nierie financi\xE8re")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    md: 4,
    lg: 3,
    className: "sidebar",
    "data-aos": "fade-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SidebarMetier__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    md: 8,
    lg: 9,
    className: "content",
    "data-aos": "fade-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "content-titre"
  }, "Ing\xE9nierie financi\xE8re"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "paragraphe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "FUSION - ACQUISITIONS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\xC9valuation financi\xE8re et op\xE9rationnelle de l\u2019opportunit\xE9 d\u2019investissement et identification des risques"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Conduite de la Due diligence"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "R\xE9daction d\u2019un M\xE9morandum d\u2019Information pour servir de support \xE0 l\u2019op\xE9ration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Assistance \xE0 la n\xE9gociation financi\xE8re et \xE0 la pr\xE9paration des supports de la transaction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\xC9valuation du prix de cession")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "mt-4"
  }, "ARRANGEMENT DE FINANCEMENT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Identification du besoin de tr\xE9sorerie (CT et MLT)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Appr\xE9ciation des facteurs de risque"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Identification des m\xE9canismes de garantie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Choix des modes de financements"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Strat\xE9gie de financement et recommandation d\u2019une structure de financement adapt\xE9e"))))))))));
}

/***/ }),

/***/ "./assets/js/pages/LeveeFonds.jsx":
/*!****************************************!*\
  !*** ./assets/js/pages/LeveeFonds.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Breadcrumb.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _components_BgHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BgHead */ "./assets/js/components/BgHead.jsx");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SidebarPresentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SidebarPresentation */ "./assets/js/components/SidebarPresentation.jsx");
/* harmony import */ var _components_SidebarMetier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SidebarMetier */ "./assets/js/components/SidebarMetier.jsx");










/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_2___default().init();
    document.title = "Levée de fonds";
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BgHead__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    href: "/"
  }, "Accueil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    href: "#"
  }, "Nos m\xE9tiers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    active: true
  }, "Lev\xE9e de fond")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    md: 4,
    lg: 3,
    className: "sidebar",
    "data-aos": "fade-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SidebarMetier__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    md: 8,
    lg: 9,
    className: "content",
    "data-aos": "fade-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "content-titre"
  }, "Lev\xE9e de fonds"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "paragraphe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Financements structur\xE9s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Financement d\u2019exploitation (cr\xE9dit de campagne, lignes de d\xE9couvert \u2026)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Financements d\u2019Investissements (Dettes bancaires, Emprunt Obligataire \u2026)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "mt-4"
  }, "Financement de Projet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Infrastructures"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Agro-industrie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Mines et \xC9nergie"))))))))));
}

/***/ }),

/***/ "./assets/js/pages/Performance.jsx":
/*!*****************************************!*\
  !*** ./assets/js/pages/Performance.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Breadcrumb.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _components_BgHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BgHead */ "./assets/js/components/BgHead.jsx");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SidebarPresentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SidebarPresentation */ "./assets/js/components/SidebarPresentation.jsx");
/* harmony import */ var _components_SidebarMetier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SidebarMetier */ "./assets/js/components/SidebarMetier.jsx");
/* harmony import */ var _components_SidebarPerformance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SidebarPerformance */ "./assets/js/components/SidebarPerformance.jsx");











/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_2___default().init();
    document.title = "Nos réalisations";
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BgHead__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Item, {
    href: "/"
  }, "Accueil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Item, {
    active: true
  }, "Nos r\xE9alisations")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    md: 4,
    lg: 3,
    className: "sidebar",
    "data-aos": "fade-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SidebarPerformance__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    md: 8,
    lg: 9,
    className: "content",
    "data-aos": "fade-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "content-titre"
  }, "Nos r\xE9alisations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "paragraphe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Secteur agro-industrie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Mission effectu\xE9e : une lev\xE9e de fonds aupr\xE8s d'une structure financi\xE8re")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "mt-4"
  }, "Restructuration organisationnelle de deux Grands Groups de dix filiales chacun:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Secteur BTP "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Secteur de la distribution de marchandises et produits p\xE9troliers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Secteur du transport "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Secteur de l\u2019agro-industrie "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mission-effectuee mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("em", null, "Missions effectu\xE9es par Divine Finances & Conseils:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "La r\xE9daction des proc\xE9dures de fonctionnement du groupe,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "La certification des comptes de toutes les filiales et leur consolidation comptable au sein de la holding,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "La r\xE9daction et la revue des conventions et contrats entre la holding et les filiales"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "La r\xE9daction du business plan du group"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "La valorisation des fonds propres de toutes les filiales et de la holding")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "mt-4"
  }, "Valorisation de fonds propres"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Secteur BTP (x2)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Secteur distribution"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Secteur sant\xE9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "mt-4"
  }, "R\xE9alisation de Business Plan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Plus de vingt (20) business plans au cours de l'ann\xE9e 2022-2023"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Valorisation du business plan"))))))))));
}

/***/ }),

/***/ "./assets/js/pages/Presentation.jsx":
/*!******************************************!*\
  !*** ./assets/js/pages/Presentation.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Breadcrumb.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _components_BgHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BgHead */ "./assets/js/components/BgHead.jsx");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SidebarPresentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SidebarPresentation */ "./assets/js/components/SidebarPresentation.jsx");









/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_2___default().init();
    document.title = "Présentation de Divine Finances & Conseils";
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BgHead__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    href: "/"
  }, "Accueil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    href: "#"
  }, "qui sommes-nous?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    active: true
  }, "Pr\xE9sentation")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    md: 4,
    lg: 3,
    className: "sidebar",
    "data-aos": "fade-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SidebarPresentation__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    md: 8,
    lg: 9,
    className: "content",
    "data-aos": "fade-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "content-titre"
  }, "Divine Finances & Conseils"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "paragraphe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "DFconseils"), " est un cabinet de conseil financier. Nous accompagnons les entreprises avec des solutions concr\xE8tes aux probl\xE9matiques de lev\xE9e de fonds, d\u2019optimisation financi\xE8re, de structuration et de restructuration financi\xE8re."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "paragraphe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Nos ambitions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Nous nous attelons \xE0 faire \xE9merger davantage de champions locaux, car nous avons la ferme conviction que le d\xE9veloppement \xE9conomique de l\u2019Afrique doit \xEAtre port\xE9 par des acteurs africains. Accompagner les PME, dans la recherche de financement, les assister, les conseiller et structurer des financements \xE0 proposer \xE0 leurs partenaires financiers.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "paragraphe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Notre expertise"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Une r\xE9f\xE9rence dans le conseil financier et strat\xE9gique en Afrique de l\u2019Ouest dans des secteurs cl\xE9s de l\u2019\xE9conomie tels que l\u2019agro-industrie, les travaux publics, l\u2019\xE9lectricit\xE9, les services financiers, l\u2019immobilier\u2026")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "paragraphe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Notre \xE9quipe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Une \xE9quipe comp\xE9tente et pluridisciplinaire qui dispose d\u2019une forte exp\xE9rience sur le plan national dans divers secteurs men\xE9s par des Associ\xE9s exp\xE9riment\xE9s.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "paragraphe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Nos clients"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Nous cultivons des relations privil\xE9gi\xE9es avec les entreprises \xE0 fort potentiel et actrices majeures de leurs domaines d\u2019activit\xE9s respectifs.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "paragraphe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Nos valeurs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "INNOVATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "EXCELLENCE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "INTEGRITE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "ENGAGEMENT"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "paragraphe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Nos services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Nous proposons une gamme \xE9largie de services de conseils financiers allant de l\u2019ing\xE9nierie financi\xE8re \xE0 la gestion des fonds propres\u2026"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Ing\xE9nierie financi\xE8re"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Strat\xE9gie financi\xE8re"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Due diligence"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Mod\xE9lisation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Restructuration")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Conseil en lev\xE9e de fonds"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Structuration de dettes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, " Lev\xE9e de fonds :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Marches financiers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Institutions financi\xE8res"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Banques"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Financements de projets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Structuration et mod\xE9lisation financi\xE8re de projets d\u2019Infrastructure"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Ex\xE9cution de projets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Lev\xE9e de fonds en dette et fonds propres"))))))))));
}

/***/ }),

/***/ "./assets/js/pages/Valorisation.jsx":
/*!******************************************!*\
  !*** ./assets/js/pages/Valorisation.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Breadcrumb.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _components_BgHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BgHead */ "./assets/js/components/BgHead.jsx");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SidebarPresentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SidebarPresentation */ "./assets/js/components/SidebarPresentation.jsx");
/* harmony import */ var _components_SidebarMetier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SidebarMetier */ "./assets/js/components/SidebarMetier.jsx");










/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_2___default().init();
    document.title = "Valorisation des fonds propres";
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BgHead__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    href: "/"
  }, "Accueil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    href: "#"
  }, "Nos m\xE9tiers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    active: true
  }, "Valorisation des fonds propres")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    md: 4,
    lg: 3,
    className: "sidebar",
    "data-aos": "fade-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SidebarMetier__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    md: 8,
    lg: 9,
    className: "content",
    "data-aos": "fade-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "content-titre"
  }, "Valorisation des fonds propres"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "paragraphe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Secteur BTP (x2)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Secteur distribution"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Secteur sant\xE9")))))))));
}

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/images/equipe/01-kone.jpg":
/*!******************************************!*\
  !*** ./assets/images/equipe/01-kone.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/01-kone.37d1676e.jpg";

/***/ }),

/***/ "./assets/images/equipe/02-gustave.jpg":
/*!*********************************************!*\
  !*** ./assets/images/equipe/02-gustave.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/02-gustave.82b129ea.jpg";

/***/ }),

/***/ "./assets/images/equipe/03-sylla.jpg":
/*!*******************************************!*\
  !*** ./assets/images/equipe/03-sylla.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/03-sylla.8bee151a.jpg";

/***/ }),

/***/ "./assets/images/equipe/dga.jpg":
/*!**************************************!*\
  !*** ./assets/images/equipe/dga.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/dga.347b4c59.jpg";

/***/ }),

/***/ "./assets/images/logo/bw_logo.png":
/*!****************************************!*\
  !*** ./assets/images/logo/bw_logo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/bw_logo.802edafa.png";

/***/ }),

/***/ "./assets/images/logo/logo.png":
/*!*************************************!*\
  !*** ./assets/images/logo/logo.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo.82df0d73.png";

/***/ }),

/***/ "./assets/images/logo/logo.svg":
/*!*************************************!*\
  !*** ./assets/images/logo/logo.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo.317fa9f4.svg";

/***/ }),

/***/ "./assets/images/metiers/01-metier.jpg":
/*!*********************************************!*\
  !*** ./assets/images/metiers/01-metier.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/01-metier.626057df.jpg";

/***/ }),

/***/ "./assets/images/metiers/02-metier.jpg":
/*!*********************************************!*\
  !*** ./assets/images/metiers/02-metier.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/02-metier.21669272.jpg";

/***/ }),

/***/ "./assets/images/metiers/03-metier.jpg":
/*!*********************************************!*\
  !*** ./assets/images/metiers/03-metier.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/03-metier.26c71314.jpg";

/***/ }),

/***/ "./assets/images/realisations/02.jpeg":
/*!********************************************!*\
  !*** ./assets/images/realisations/02.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/02.c8318863.jpeg";

/***/ }),

/***/ "./assets/images/slide/02.png":
/*!************************************!*\
  !*** ./assets/images/slide/02.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/02.17c7f021.png";

/***/ }),

/***/ "./assets/images/slide/05.png":
/*!************************************!*\
  !*** ./assets/images/slide/05.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/05.56a0e401.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_aos_dist_aos_js-node_modules_core-js_modules_es_array_from_js-node_modul-ae7928"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQVMyRSxFQUFFLEVBQUM7RUFBTSxnQkFDZDNFLDBEQUFBO0lBQUs0RSxTQUFTLEVBQUM7RUFBTSxnQkFDakI1RSwwREFBQSxDQUFDZ0IsdURBQVMscUJBQ05oQiwwREFBQSxDQUFDcUIsdURBQUc7SUFBQ3VELFNBQVMsRUFBQztFQUFFLGdCQUNiNUUsMERBQUEsQ0FBQ2UsdURBQUc7SUFBQ3lGLEVBQUUsRUFBRSxDQUFFO0lBQUNrRSxFQUFFLEVBQUUsQ0FBRTtJQUFDOUYsU0FBUyxFQUFDLFNBQVM7SUFBQyxZQUFTO0VBQVksZ0JBQ3hENUUsMERBQUEsQ0FBQ3dMLGlFQUFhLE1BQUMsQ0FDZCxDQUFDLGVBRU54TCwwREFBQSxDQUFDZSx1REFBRztJQUFDeUYsRUFBRSxFQUFFLENBQUU7SUFBQ2tFLEVBQUUsRUFBRSxDQUFFO0lBQUM5RixTQUFTLEVBQUMsU0FBUztJQUFDLFlBQVM7RUFBVyxnQkFDdkQ1RSwwREFBQTtJQUFJNEUsU0FBUyxFQUFDO0VBQWUsR0FBQyxnQ0FBa0MsQ0FBQyxlQUNqRTVFLDBEQUFBO0lBQUs0RSxTQUFTLEVBQUM7RUFBWSxnQkFDdkI1RSwwREFBQSwwQkFDSUEsMERBQUEsYUFBSSxrQkFBb0IsQ0FBQyxlQUN6QkEsMERBQUEsYUFBSSxzQkFBd0IsQ0FBQyxlQUM3QkEsMERBQUEsYUFBSSxrQkFBaUIsQ0FDckIsQ0FDSCxDQUNKLENBQ0osQ0FDRSxDQUNWLENBQ0EsQ0FDUixDQUFDO0FBRWQ7Ozs7Ozs7Ozs7O0FDeERBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9BcHAuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0JnSGVhZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU2lkZWJhck1ldGllci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU2lkZWJhclBlcmZvcm1hbmNlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TaWRlYmFyUHJlc2VudGF0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvQnVzaW5lc3NQbGFuLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvQ29uc2VpbHNGaW5hbmNpZXJzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvQ29udGFjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL0VxdWlwZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL0ZpbmFuY2VtZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvSW5nZW5pZXJpZUZpbmFuY2llcmVzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvTGV2ZWVGb25kcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL1BlcmZvcm1hbmNlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvUHJlc2VudGF0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvVmFsb3Jpc2F0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcbmltcG9ydCBBcHAgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBcIjtcbmltcG9ydCAnLi4vc3R5bGVzL2FwcC5zY3NzJ1xuXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5yb290LnJlbmRlcig8QXBwLz4pIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjcmVhdGVCcm93c2VyUm91dGVyLCBPdXRsZXQsIFJvdXRlclByb3ZpZGVyLCBOYXZMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuaW1wb3J0IHtDb2wsIENvbnRhaW5lciwgTmF2LCBOYXZiYXIsIE5hdkRyb3Bkb3duLCBPZmZjYW52YXMsIFJvd30gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IGxvZ29TVkcgZnJvbSBcIi4uLy4uL2ltYWdlcy9sb2dvL2xvZ28uc3ZnXCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vLi4vaW1hZ2VzL2xvZ28vbG9nby5wbmdcIjtcbmltcG9ydCBQcmVzZW50YXRpb24gZnJvbSBcIi4uL3BhZ2VzL1ByZXNlbnRhdGlvblwiO1xuaW1wb3J0IGxvZ29CVyBmcm9tIFwiLi4vLi4vaW1hZ2VzL2xvZ28vYndfbG9nby5wbmdcIjtcbmltcG9ydCBFcXVpcGUgZnJvbSBcIi4uL3BhZ2VzL0VxdWlwZVwiO1xuaW1wb3J0IHtUZmlBcnJvd0NpcmNsZVVwfSBmcm9tIFwicmVhY3QtaWNvbnMvdGZpXCI7XG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcbmltcG9ydCBDb25zZWlsc0ZpbmFuY2llcnMgZnJvbSBcIi4uL3BhZ2VzL0NvbnNlaWxzRmluYW5jaWVyc1wiO1xuaW1wb3J0IEluZ2VuaWVyaWVGaW5hbmNpZXJlcyBmcm9tIFwiLi4vcGFnZXMvSW5nZW5pZXJpZUZpbmFuY2llcmVzXCI7XG5pbXBvcnQgTGV2ZWVGb25kcyBmcm9tIFwiLi4vcGFnZXMvTGV2ZWVGb25kc1wiO1xuaW1wb3J0IFBlcmZvcm1hbmNlIGZyb20gXCIuLi9wYWdlcy9QZXJmb3JtYW5jZVwiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4uL3BhZ2VzL0NvbnRhY3RcIjtcbmltcG9ydCBWYWxvcmlzYXRpb24gZnJvbSBcIi4uL3BhZ2VzL1ZhbG9yaXNhdGlvblwiO1xuaW1wb3J0IEJ1c2luZXNzUGxhbiBmcm9tIFwiLi4vcGFnZXMvQnVzaW5lc3NQbGFuXCI7XG5pbXBvcnQgRmluYW5jZW1lbnQgZnJvbSBcIi4uL3BhZ2VzL0ZpbmFuY2VtZW50XCI7XG5cbmNvbnN0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIoW1xuICAgIHtcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICBlbGVtZW50OiA8Um9vdC8+LFxuICAgICAgICBjaGlsZHJlbjpbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogPEhvbWUvPlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnYWNjdWVpbCcsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogPEhvbWUvPlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAncHJlc2VudGF0aW9uJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50OiA8UHJlc2VudGF0aW9uLz5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJ25vdHJlLWVxdWlwZScsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogPEVxdWlwZS8+XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICdub3MtbWV0aWVycycsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogPGRpdj5tZXRpZXI8L2Rpdj5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJ25vcy1tZXRpZXJzL2NvbnNlaWwtZmluYW5jaWVyLWV0LXN0cmF0ZWdpcXVlJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50OiA8Q29uc2VpbHNGaW5hbmNpZXJzLz5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJ25vcy1tZXRpZXJzL2luZ2VuaWVyaWUtZmluYW5jaWVyZScsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogPEluZ2VuaWVyaWVGaW5hbmNpZXJlcy8+XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICdub3MtbWV0aWVycy9sZXZlZS1kZS1mb25kcycsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogPExldmVlRm9uZHMvPlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnbm9zLW1ldGllcnMvdmFsb3Jpc2F0aW9uLWRlcy1mb25kcy1wcm9wcmVzJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50OiA8VmFsb3Jpc2F0aW9uLz5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJ25vcy1tZXRpZXJzL3JlZGFjdGlvbi1kZS1idXNpbmVzcy1wbGFuJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50OiA8QnVzaW5lc3NQbGFuLz5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJ25vcy1yZWFsaXNhdGlvbnMnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IDxQZXJmb3JtYW5jZS8+XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICdkZW1hbmRlLWRlLWZpbmFuY2VtZW50LXByb2pldCcsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogPEZpbmFuY2VtZW50Lz5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJ2NvbnRhY3QnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IDxDb250YWN0Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbl0pO1xuXG5mdW5jdGlvbiBSb290KCkge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIEFPUy5pbml0KCk7XG5cbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIkRpdmluZSBGaW5hbmNlcyBldCBjb25zZWlsc1wiO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgW2lzRHJvcGRvd25PcGVuLCBzZXRJc0Ryb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzTWVudUZpeGVkLCBzZXRJc01lbnVGaXhlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBbc2hvd09mZmNhbnZhcywgc2V0U2hvd09mZmNhbnZhc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgY2xvc2VPZmZjYW52YXMgPSAoKSA9PiB7XG4gICAgICAgIHNldFNob3dPZmZjYW52YXMoZmFsc2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBbaXNRdWlTb21tZXNOb3VzT3Blbiwgc2V0SXNRdWlTb21tZXNOb3VzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzTm9zTWV0aWVyc09wZW4sIHNldElzTm9zTWV0aWVyc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlUXVpU29tbWVzTm91c1RvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNRdWlTb21tZXNOb3VzT3BlbighaXNRdWlTb21tZXNOb3VzT3Blbik7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZU5vc01ldGllcnNUb2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIHNldElzTm9zTWV0aWVyc09wZW4oIWlzTm9zTWV0aWVyc09wZW4pO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlRHJvcGRvd25Ub2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIHNldElzRHJvcGRvd25PcGVuKCFpc0Ryb3Bkb3duT3Blbik7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFk7XG5cbiAgICAgICAgaWYgKHNjcm9sbFRvcCA+IDEwMCkge1xuICAgICAgICAgICAgc2V0SXNNZW51Rml4ZWQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRJc01lbnVGaXhlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJ0b3BIZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wSGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInRlbGVwaG9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorMjI1MjcyMjU5OTI2NVwiPisyMjUgMjcgMjIgNTkgOTIgNjU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImVtYWlsIHRleHQtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmluZm9zQGRpdmluZWZpbmFuY2VzY2kuY29tXCI+aW5mb3NAZGl2aW5lZmluYW5jZXNjaS5jb208L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwibWVudVwiIHN0eWxlPXt7IHBvc2l0aW9uOiBpc01lbnVGaXhlZCA/ICdmaXhlZCcgOiAncmVsYXRpdmUnLCBiYWNrZ3JvdW5kQ29sb3I6IGlzTWVudUZpeGVkID8gJyM3ODkwZTUnIDogJ3JnYmEoMjU1LDI1NSwyNTUsMC4zKScgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgY29sbGFwc2VPblNlbGVjdCBleHBhbmQ9XCJsZ1wiIHN0aWNreT1cInRvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiB0bz1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsb2dvU1ZHfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNyYz17bG9nb1NWR31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nbyBEaXZpbmUgRmluYW5jZXMgZXQgY29uc2VpbHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93T2ZmY2FudmFzKHRydWUpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSAgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCIgb25DbGljaz17Y2xvc2VPZmZjYW52YXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lLWF1dG8gbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIHRvPVwiL2FjY3VlaWxcIj5BY2N1ZWlsPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJRdWkgc29tbWVzLW5vdXM/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17aXNRdWlTb21tZXNOb3VzT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZVF1aVNvbW1lc05vdXNUb2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVRdWlTb21tZXNOb3VzVG9nZ2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL3ByZXNlbnRhdGlvblwiIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5QcsOpc2VudGF0aW9uPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL25vdHJlLWVxdWlwZVwiIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5Ob3RyZSDDqXF1aXBlPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTm9zIG3DqXRpZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1ldGllci1uYXYtZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e2lzTm9zTWV0aWVyc09wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVOb3NNZXRpZXJzVG9nZ2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTm9zTWV0aWVyc1RvZ2dsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9ub3MtbWV0aWVycy9jb25zZWlsLWZpbmFuY2llci1ldC1zdHJhdGVnaXF1ZVwiIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5Db25zZWlsIGZpbmFuY2llciBldCBzdHJhdMOpZ2lxdWU8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvbm9zLW1ldGllcnMvaW5nZW5pZXJpZS1maW5hbmNpZXJlXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPkluZ8OpbmllcmllIGZpbmFuY2nDqHJlPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL25vcy1tZXRpZXJzL2xldmVlLWRlLWZvbmRzXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPkxldsOpZSBkZSBmb25kczwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9ub3MtbWV0aWVycy92YWxvcmlzYXRpb24tZGVzLWZvbmRzLXByb3ByZXNcIiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+VmFsb3Jpc2F0aW9uIGRlcyBmb25kczwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9ub3MtbWV0aWVycy9yZWRhY3Rpb24tZGUtYnVzaW5lc3MtcGxhblwiIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5Sw6lkYWN0aW9uIGRlIEJ1c2luZXNzIFBsYW48L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiB0bz1cIi9ub3MtbWV0aWVyc1wiPk5vcyBtZXRpZXJzPC9OYXZMaW5rPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiB0bz1cIi9ub3MtcmVhbGlzYXRpb25zXCI+Tm9zIHLDqWFsaXNhdGlvbnM8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIHRvPVwiL2RlbWFuZGUtZGUtZmluYW5jZW1lbnQtcHJvamV0XCI+RmluYW5jZW1lbnQ8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIHRvPVwiL2NvbnRhY3RcIj5Db250YWN0PC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPZmZjYW52YXMgc2hvdz17c2hvd09mZmNhbnZhc30gb25IaWRlPXsoKSA9PiBzZXRTaG93T2ZmY2FudmFzKGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPZmZjYW52YXMuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9mZmNhbnZhcy5UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bG9nb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNyYz17bG9nb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ28gRGl2aW5lIEZpbmFuY2VzIGV0IGNvbnNlaWxzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PZmZjYW52YXMuVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT2ZmY2FudmFzLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9mZmNhbnZhcy5Cb2R5IG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWUtYXV0byBtZW51LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNob21lXCI+QWNjdWVpbDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUXVpIHNvbW1lcy1ub3VzP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17aXNEcm9wZG93bk9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlRHJvcGRvd25Ub2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlRHJvcGRvd25Ub2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjFcIj5QcsOpc2VudGF0aW9uPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjJcIj5Ob3RyZSDDqXF1aXBlPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjbGlua1wiPk5vcyBtZXRpZXJzPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNsaW5rXCI+Tm9zIHLDqWFsaXNhdGlvbnM8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxOYXYuTGluayBocmVmPVwiI2xpbmtcIj5BY3R1YWxpdMOpczwvTmF2Lkxpbms+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjbGlua1wiPlLDqWNydXRlbWVudDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjbGlua1wiPkNvbnRhY3Q8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT2ZmY2FudmFzLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PZmZjYW52YXM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cblxuXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIDxPdXRsZXQvPlxuICAgICAgICAgICAgPC9tYWluPlxuXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb0JXfSBhbHQ9XCJMb2dvIERpdmluZSBGaW5hbmNlcyAmIENvbnNlaWxzXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1sZy1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24tY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5QcsOpc2VudGF0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+RXF1aXBlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TcOpdGllcnM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Sw6lhbGlzYXRpb25zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UmVjcnV0ZW1lbnQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Db250YWN0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXsxMn0gbWQ9ezh9IGNsYXNzTmFtZT1cImNvcHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJmNvcHk7IENvcHlyaWdodCAyMDIxLCA8YSBocmVmPVwiaHR0cHM6Ly9kaXZpbmVmaW5hbmNlc2NpLmNvbS9cIj5EaXZpbmUgRmluYW5jZXMgQ29uc2VpbHMgU0E8L2E+IHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG91cyBkcm9pdHMgcsOpc2VydsOpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezEyfSBtZD17NH0gY2xhc3NOYW1lPVwicG93ZXJlZCB0ZXh0LW1kLWVuZCB0ZXh0LXNtLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCeSA8YSBocmVmPVwiaHR0cHM6Ly9kcmVhbW1ha2VyLWNpLmNvbVwiPkRSRUFNIE1BS0VSPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2Nyb2xsLXRvLXRvcFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBpc01lbnVGaXhlZCA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRmaUFycm93Q2lyY2xlVXAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblxuICAgIHJldHVybiA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9IC8+XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImJnSGVhZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmdIZWFkXCI+PC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IHtDYXJvdXNlbCwgQ29sLCBDb250YWluZXIsIE5hdiwgTmF2YmFyLCBOYXZEcm9wZG93biwgUm93LCBPZmZjYW52YXMsIENhcmR9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBsb2dvIGZyb20gJy4uLy4uL2ltYWdlcy9sb2dvL2xvZ28ucG5nJztcbmltcG9ydCBsb2dvU1ZHIGZyb20gJy4uLy4uL2ltYWdlcy9sb2dvL2xvZ28uc3ZnJztcbmltcG9ydCB7VGZpQXJyb3dDaXJjbGVVcH0gZnJvbSBcInJlYWN0LWljb25zL3RmaVwiO1xuaW1wb3J0IHNsaWRlMSBmcm9tICcuLi8uLi9pbWFnZXMvc2xpZGUvMDUucG5nJztcbmltcG9ydCBzbGlkZTIgZnJvbSAnLi4vLi4vaW1hZ2VzL3NsaWRlLzAyLnBuZyc7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnXG5pbXBvcnQge1JpTW9uZXlEb2xsYXJDaXJjbGVGaWxsfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcbmltcG9ydCB7R2lSZWNlaXZlTW9uZXl9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xuaW1wb3J0IHtGYUNoYWxrYm9hcmRVc2VyfSBmcm9tIFwicmVhY3QtaWNvbnMvZmE2XCI7XG5pbXBvcnQgbWV0aWVyMSBmcm9tICcuLi8uLi9pbWFnZXMvbWV0aWVycy8wMS1tZXRpZXIuanBnJztcbmltcG9ydCBtZXRpZXIyIGZyb20gJy4uLy4uL2ltYWdlcy9tZXRpZXJzLzAyLW1ldGllci5qcGcnO1xuaW1wb3J0IG1ldGllcjMgZnJvbSAnLi4vLi4vaW1hZ2VzL21ldGllcnMvMDMtbWV0aWVyLmpwZyc7XG5pbXBvcnQge0JzQXJyb3dSaWdodH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgcGVyZm9ybWFuY2UgZnJvbSAnLi4vLi4vaW1hZ2VzL3JlYWxpc2F0aW9ucy8wMi5qcGVnJ1xuaW1wb3J0IHtUYlBpZ01vbmV5fSBmcm9tIFwicmVhY3QtaWNvbnMvdGJcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MnO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3MnO1xuaW1wb3J0IHByb2ZpbGVLb25lIGZyb20gJy4uLy4uL2ltYWdlcy9lcXVpcGUvMDEta29uZS5qcGcnO1xuaW1wb3J0IHByb2ZpbGVOZHJpIGZyb20gJy4uLy4uL2ltYWdlcy9lcXVpcGUvZGdhLmpwZyc7XG5pbXBvcnQgcHJvZmlsZUd1c3RhdmUgZnJvbSAnLi4vLi4vaW1hZ2VzL2VxdWlwZS8wMi1ndXN0YXZlLmpwZyc7XG5pbXBvcnQgcHJvZmlsZVN5bGxhIGZyb20gJy4uLy4uL2ltYWdlcy9lcXVpcGUvMDMtc3lsbGEuanBnJztcbmltcG9ydCBsb2dvQlcgZnJvbSAnLi4vLi4vaW1hZ2VzL2xvZ28vYndfbG9nby5wbmcnO1xuaW1wb3J0IHtIZWxtZXR9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcbmltcG9ydCB7TmF2TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7QmVhdExvYWRlcn0gZnJvbSBcInJlYWN0LXNwaW5uZXJzXCI7XG5pbXBvcnQge0NpcmNsZVNwaW5uZXJPdmVybGF5fSBmcm9tIFwicmVhY3Qtc3Bpbm5lci1vdmVybGF5XCI7XG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAncmVhY3QtbGF6eWxvYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgW21heENoYXJhY3RlcnMsIHNldE1heENoYXJhY3RlcnNdID0gdXNlU3RhdGUoODApO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgQU9TLmluaXQoKTtcblxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG5cbiAgICBjb25zdCBbaXNEcm9wZG93bk9wZW4sIHNldElzRHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNNZW51Rml4ZWQsIHNldElzTWVudUZpeGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFk7XG5cbiAgICAgICAgaWYgKHNjcm9sbFRvcCA+IDEwMCkge1xuICAgICAgICAgICAgc2V0SXNNZW51Rml4ZWQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRJc01lbnVGaXhlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gUmVzdW3DqSBkb21haW5lXG4gICAgY29uc3QgY29udGVudEluZ2VuaWVyaWUgPSBcIk5vdXMgcHJvcG9zb25zIGRlcyBzZXJ2aWNlcyBzdXIgbWVzdXJlIHLDqXBvbmRhbnQgYXV4IGJlc29pbnMgZGUgbm9zIGNsaWVudHMgKG9yZ2FuaXNhdGlvbiBkZXMgZmx1eCBmaW5hbmNpZXJzIGludGVyZ3JvdXBlLCByZWNsYXNzZW1lbnQgZGUgcGFydGljaXBhdGlvbnMsIHZhbG9yaXNhdGlvbiBldCBkw6l2ZWxvcHBlbWVudCBzdHJhdMOpZ2lxdWUgZGVzIGVudHJlcHJpc2VzKSBldCB0b3V0ZSBhdXRyZXMgb3DDqXJhdGlvbnMgc3VzY2VwdGlibGVzIGRlIHJlbmZvcmNlciBsYSBjYXBhY2l0w6kgZGUgbm9zIGNsaWVudHMgw6AgbGV2ZXIgZGVzIEZvbmRzIGV0IMOgIHJlbmZvcmNlciBsYSByZW50YWJpbGl0w6kgZGUgbGV1cnMgaW52ZXN0aXNzZW1lbnRzLlwiO1xuICAgIGNvbnN0IHRydW5jYXRlZENvbnRlbnRJbmdlbmllcmllID0gYCR7Y29udGVudEluZ2VuaWVyaWUuc3Vic3RyaW5nKDAsIG1heENoYXJhY3RlcnMpfS4uLmA7XG5cbiAgICBjb25zdCBjb250ZW50TGV2ZWUgPSBcIk5vdXMgYXNzaXN0b25zIGV0IGFpZG9ucyBub3MgY2xpZW50cyBkYW5zIGxlcyBuw6lnb2NpYXRpb25zIGF2ZWMgbGVzIGJhaWxsZXVycyBkZSBmb25kcyBldCBhdXRyZXMgaW52ZXN0aXNzZXVycyAocHJpdmF0ZSBFcXVpdHksIHF1YXNpLWVxdWl0eSwgZGV0dGVzLi4uKS5cIjtcbiAgICBjb25zdCB0cnVuY2F0ZWRDb250ZW50TGV2ZWUgPSBgJHtjb250ZW50TGV2ZWUuc3Vic3RyaW5nKDAsIG1heENoYXJhY3RlcnMpfS4uLmA7XG5cbiAgICBjb25zdCBjb250ZW50Q29uc2VpbHMgPSBcIk5vdXMgYXNzaXN0b25zIGV0IGFjY29tcGFnbm9ucyBub3MgY2xpZW50cyBkYW5zIHRvdXRlcyBsZXMgb3DDqXJhdGlvbnMgZGUgcmVzdHJ1Y3R1cmF0aW9uIGZpbmFuY2nDqHJlLCBhbmFseXNlIGRlIHBlcnNwZWN0aXZlIGRlIGTDqXZlbG9wcGVtZW50LCBldGMuXCI7XG4gICAgY29uc3QgdHJ1bmNhdGVkQ29udGVudENvbnNlaWxzID0gYCR7Y29udGVudENvbnNlaWxzLnN1YnN0cmluZygwLCBtYXhDaGFyYWN0ZXJzKX0uLi5gO1xuXG5cblxuICAgIGNvbnN0IHB1Y2VGaW5hbmNlID0gKCkgPT5cbiAgICAgICAgKDxzdmcgY2xhc3NOYW1lPVwicHVjZS1maW5hbmNlXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCI+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNSAxMXYuMDFcIj48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTUuMTczIDguMzc4YTMgMyAwIDEgMSA0LjY1NiAtMS4zNzdcIj48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE2IDR2My44MDNhNi4wMTkgNi4wMTkgMCAwIDEgMi42NTggMy4xOTdoMS4zNDFhMSAxIDAgMCAxIDEgMXYyYTEgMSAwIDAgMSAtMSAxaC0xLjM0MmMtLjMzNiAuOTUgLS45MDcgMS44IC0xLjY1OCAyLjQ3M3YyLjAyN2ExLjUgMS41IDAgMCAxIC0zIDB2LS41ODNhNi4wNCA2LjA0IDAgMCAxIC0xIC4wODNoLTRhNi4wNCA2LjA0IDAgMCAxIC0xIC0uMDgzdi41ODNhMS41IDEuNSAwIDAgMSAtMyAwdi0ybDAgLS4wMjdhNiA2IDAgMCAxIDQgLTEwLjQ3M2gyLjVsNC41IC0zaDB6XCI+PC9wYXRoPlxuICAgICAgICA8L3N2Zz4pO1xuXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVsbWV0PlxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIi8+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIi8+XG5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiRmluYW5jZXMsIGVjb25vbWlxdWVzLCBjb25zZWlscywgZm9uZHNcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJVbiBwYXJ0ZW5haXJlIGNyw6lkaWJsZSBkYW5zIGxlIGNvbnNlaWwgZmluYW5jaWVyIGV0IHN0cmF0w6lnaXF1ZS5cIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL2RpdmluZWZpbmFuY2VzY2kuY29tL1wiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwibmV4dFwiIGhyZWY9XCIgaHR0cHM6Ly9kaXZpbmVmaW5hbmNlc2NpLmNvbS9cIiAvPlxuXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZnJfRlJcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkRpdmluZSBGaW5hbmNlcyBDb25zZWlsc1wiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJVbiBwYXJ0ZW5haXJlIGNyw6lkaWJsZSBkYW5zIGxlIGNvbnNlaWwgZmluYW5jaWVyIGV0IHN0cmF0w6lnaXF1ZS5cIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHA6Ly9kaXZpbmVmaW5hbmNlc2NpLmNvbS9cIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIkRpdmluZSBGaW5hbmNlcyBDb25zZWlsc1wiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJhcnRpY2xlOm1vZGlmaWVkX3RpbWVcIiBjb250ZW50PVwiMjAyMy0xMC0xN1QxMTowODozMCswMDowMFwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2xvZ299IC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp0eXBlXCIgY29udGVudD1cImltYWdlL3N2Zyt4bWxcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVW4gcGFydGVuYWlyZSBjcsOpZGlibGUgZGFucyBsZSBjb25zZWlsIGZpbmFuY2llciBldCBzdHJhdMOpZ2lxdWUuXCIvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIkRpdmluZSBGaW5hbmNlcyBDb25zZWlsc1wiLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkb21haW5cIiBjb250ZW50PVwiVW4gcGFydGVuYWlyZSBjcsOpZGlibGUgZGFucyBsZSBjb25zZWlsIGZpbmFuY2llciBldCBzdHJhdMOpZ2lxdWUuXCIvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlOnNyY1wiIGNvbnRlbnQ9e2xvZ299Lz5cblxuICAgICAgICAgICAgPC9IZWxtZXQ+XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImNhcm91c2VsXCI+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsIGZhZGUgY29udHJvbHM9e2ZhbHNlfSBpbnRlcnZhbD17NzAwMH0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c2xpZGUxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlNsaWRlIDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8aDY+RGl2aW5lIEZpbmFuY2UgQ29uc2VpbDwvaDY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkZpbmFuY2VzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm91cyBhY2NvbXBhZ25vbnMgbGVzIGVudHJlcHJpc2VzIGF2ZWMgZGVzIHNvbHV0aW9ucyBjb25jcsOodGVzIGF1eCBwcm9ibMOpbWF0aXF1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGUgbGV2w6llIGRlIGZvbmRzLCBk4oCZb3B0aW1pc2F0aW9uIGZpbmFuY2nDqHJlLCBkZSBzdHJ1Y3R1cmF0aW9uIGV0IGRlIHJlc3RydWN0dXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbmNpw6hyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsLkNhcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzbGlkZTJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiU2xpZGUgMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxoNj5EaXZpbmUgZmluYW5jZXMgJjwvaDY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkNvbnNlaWxzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVW4gcGFydGVuYWlyZSBjcsOpZGlibGUgZGFucyBsZSBjb25zZWlsIGZpbmFuY2llciBldCBzdHJhdMOpZ2lxdWUgZW4gQ8O0dGUgZCdJdm9pcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFucyBkZXMgc2VjdGV1cnMgY2zDqXMgZGUgbOKAmcOpY29ub21pZSB0ZWxzIHF1ZSBs4oCZYWdyby1pbmR1c3RyaWUsIGxlcyB0cmF2YXV4IHB1YmxpY3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGzigJnDqWxlY3RyaWNpdMOpLCBsZXMgc2VydmljZXMgZmluYW5jaWVycywgbOKAmWltbW9iaWxpZXLigKZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsLkNhcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJhY2Nyb2NoZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjcm9jaGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezZ9IGNsYXNzTmFtZT1cImxhYmVsXCIgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCIgZGF0YS1hb3MtZWFzaW5nPVwiZWFzZS1pbi1vdXRcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjIwMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EaXZpbmUgRmluYW5jZXMgQ29uc2VpbHM8L3NwYW4+LCBhZ3LDqcOpZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs2fSBjbGFzc05hbWU9XCJpb2JcIiBkYXRhLWFvcz1cImZhZGUtbGVmdFwiIGRhdGEtYW9zLWVhc2luZz1cImVhc2UtaW4tb3V0XCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludGVybcOpZGlhaXJlIGVuIE9ww6lyYXRpb24gZGUgQmFucXVlIDxici8+IChJT0IgTsKwOiA8dT5DSSAwMDAwNC9JT0IvMjAyMjwvdT4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJkb21haW5lc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9tYWluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPVwibGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17NH0gY2xhc3NOYW1lPVwiZG9tYWluZS1ibG9ja1wiIGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiIGRhdGEtYW9zLWVhc2luZz1cImVhc2UtaW4tb3V0XCIgZGF0YS1hb3MtZHVyYXRpb249XCIyNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPScvbm9zLW1ldGllcnMvaW5nZW5pZXJpZS1maW5hbmNpZXJlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaU1vbmV5RG9sbGFyQ2lyY2xlRmlsbC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5nw6luaWVyaWUgRmluYW5jacOocmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dHJ1bmNhdGVkQ29udGVudEluZ2VuaWVyaWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs0fSBjbGFzc05hbWU9XCJkb21haW5lLWJsb2NrXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZWFzaW5nPVwiZWFzZS1pbi1vdXRcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjI1MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvbm9zLW1ldGllcnMvbGV2ZWUtZGUtZm9uZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHaVJlY2VpdmVNb25leS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGV2w6llIGRlIGZvbmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RydW5jYXRlZENvbnRlbnRMZXZlZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezR9IGNsYXNzTmFtZT1cImRvbWFpbmUtYmxvY2tcIiBkYXRhLWFvcz1cImZhZGUtbGVmdFwiIGRhdGEtYW9zLWVhc2luZz1cImVhc2UtaW4tb3V0XCIgZGF0YS1hb3MtZHVyYXRpb249XCIyNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL25vcy1tZXRpZXJzL2NvbnNlaWwtZmluYW5jaWVyLWV0LXN0cmF0ZWdpcXVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDaGFsa2JvYXJkVXNlci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc2VpbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dHJ1bmNhdGVkQ29udGVudENvbnNlaWxzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cIm1ldGllcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGllclwiPlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPVwibGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Ob3MgbcOpdGllcnM8L2gxPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInJvdy1jb2xzLTEgcm93LWNvbHMtbGctMyBnLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGRhdGEtYW9zPVwiZmFkZS1sZWZ0XCIgZGF0YS1hb3MtZWFzaW5nPVwiZWFzZS1pbi1vdXRcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjI1MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvbm9zLW1ldGllcnMvY29uc2VpbC1maW5hbmNpZXItZXQtc3RyYXRlZ2lxdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImgtMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9e21ldGllcjF9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zZWlsIGZpbmFuY2llciBldCBzdHJhdMOpZ2lxdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5SZXN0cnVjdHVyYXRpb24gZmluYW5jacOocmU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BbmFseXNlIGRlIHBlcnNwZWN0aXZlIGRlIGTDqXZlbG9wcGVtZW50PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RWxhYm9yYXRpb24gb3UgcmV2dWUgZGUgcGxhbiBkJ2FmZmFpcmVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJzQXJyb3dSaWdodC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGRhdGEtYW9zPVwiZmFkZS1kb3duXCIgZGF0YS1hb3MtZWFzaW5nPVwiZWFzZS1pbi1vdXRcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjI1MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvbm9zLW1ldGllcnMvbGV2ZWUtZGUtZm9uZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImgtMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9e21ldGllcjJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZXbDqWUgZGUgZm9uZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GaW5hbmNlbWVudHMgc3RydWN0dXLDqXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GaW5hbmNlbWVudCBkZSBwcm9qZXQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnNBcnJvd1JpZ2h0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCIgZGF0YS1hb3MtZWFzaW5nPVwiZWFzZS1pbi1vdXRcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjI1MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvbm9zLW1ldGllcnMvaW5nZW5pZXJpZS1maW5hbmNpZXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJoLTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPXttZXRpZXIzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5nw6luaWVyaWUgZmluYW5jacOocmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GdXNpb24gLSBhY3F1aXNpdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFycmFuZ2VtZW50IGRlIGZpbmFuY2VtZW50PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnNBcnJvd1JpZ2h0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJwZXJmb3JtYW5jZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVyZm9ybWFuY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZD1cImxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezd9IHhsPXs2fSBjbGFzc05hbWU9XCJwZXJmb3JtYW5jZS1saXN0ZVwiIGRhdGEtYW9zPVwiem9vbS1pblwiIGRhdGEtYW9zLWVhc2luZz1cImVhc2UtaW4tb3V0XCIgZGF0YS1hb3MtZHVyYXRpb249XCIyNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Ob3MgcGVyZm9ybWFuY2VzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwdWNlRmluYW5jZSgpfSBMZXbDqWUgZGUgZm9uZHMgZGUgPHNwYW4+MjUgbWlsbGlvbnMgZCdldXJvPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdWNlLXByaW5jaXBhbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHVjZUZpbmFuY2UoKX0gUmVzdHJ1Y3R1cmF0aW9uIG9yZ2FuaXNhdGlvbm5lbGxlIGRlIDxzcGFuPiBkZXV4IGNvbmdsZW3DqXJhdHMgZGUgZGl4ICgxMCkgc29jacOpdMOpcyBjaGFjdW4gPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3B1Y2VGaW5hbmNlKCl9IFLDqWRhY3Rpb24gZGVzIHByb2PDqWR1cmVzIGRlIGZvbmN0aW9ubmVtZW50IGR1IGdyb3VwZSw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3B1Y2VGaW5hbmNlKCl9IENlcnRpZmljYXRpb24gZGVzIGNvbXB0ZXMgZGUgdG91dGVzIGxlcyBmaWxpYWxlcyBldCBsZXVyIGNvbnNvbGlkYXRpb24gY29tcHRhYmxlIGF1IHNlaW4gZGUgbGEgaG9sZGluZyw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3B1Y2VGaW5hbmNlKCl9IFLDqWRhY3Rpb24gZXQgbGEgcmV2dWUgZGVzIGNvbnZlbnRpb25zIGV0IGNvbnRyYXRzIGVudHJlIGxhIGhvbGRpbmcgZXQgbGVzIGZpbGlhbGVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntwdWNlRmluYW5jZSgpfSBSw6lkYWN0aW9uIGR1IGJ1c2luZXNzIHBsYW4gZHUgZ3JvdXBlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntwdWNlRmluYW5jZSgpfSBWYWxvcmlzYXRpb24gZGVzIGZvbmRzIHByb3ByZXMgZGUgdG91dGVzIGxlcyBmaWxpYWxlcyBldCBkZSBsYSBob2xkaW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWxvcmlzYXRpb24gZGVzIGZvbmRzIHByb3ByZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUsOpYWxpc2F0aW9uIGRlIEJ1c2luZXNzIFBsYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17NX0geGw9ezZ9IGNsYXNzTmFtZT1cImlsbHVzdHJhdGlvblwiIGRhdGEtYW9zPVwiem9vbS1vdXRcIiBkYXRhLWFvcy1lYXNpbmc9XCJlYXNlLWluLW91dFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMjUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGVyZm9ybWFuY2V9IGFsdD1cIk5vdHJlIHBlcmZvcm1hbmNlXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgbG9hZGluZz1cImxhenlcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImVxdWlwZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXF1aXBlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ9XCJsZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk5vdHJlIMOpcXVpcGU8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJnLTNcIiBkYXRhLWFvcz1cImZhZGUtZG93blwiIGRhdGEtYW9zLWVhc2luZz1cImVhc2UtaW4tb3V0XCIgZGF0YS1hb3MtZHVyYXRpb249XCIyNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInByb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiaC0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9e3Byb2ZpbGVLb25lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlJBTUFUT1UgVElFR05JTiBLT05FPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5QLkQuRzwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJoLTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz17cHJvZmlsZU5kcml9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+S0FOIEFVR1VTVElOIE4nRFJJPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5ELkcuQTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJoLTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgc3JjPXtwcm9maWxlR3VzdGF2ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5HVVNUQVZFIEtSQUdCRTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+UmVzcG9uc2FibGUgcHJvamV0PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJwcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImgtMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPXtwcm9maWxlU3lsbGF9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q0hFSUNLTkEgU1lMTEE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkNPTlNVTFRBTlQ8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctYW5pbWF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDaXJjbGVTcGlubmVyT3ZlcmxheS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpYUxvbmdBcnJvd0FsdFJpZ2h0U29saWR9IGZyb20gXCJyZWFjdC1pY29ucy9saWFcIjtcbmltcG9ydCB7RmFMb2NhdGlvbkRvdH0gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xuaW1wb3J0IHtCc0ZpbGxUZWxlcGhvbmVGaWxsfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7R3JNYWlsfSBmcm9tIFwicmVhY3QtaWNvbnMvZ3JcIjtcbmltcG9ydCB7Q29sfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBBT1MuaW5pdCgpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwic2lkZWJhci10aXRyZVwiPk5vcyBtw6l0aWVyczwvaDQ+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXItbGlzdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ub3MtbWV0aWVycy9jb25zZWlsLWZpbmFuY2llci1ldC1zdHJhdGVnaXF1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWFMb25nQXJyb3dBbHRSaWdodFNvbGlkLz4gQ29uc2VpbHMgZmluYW5jaWVycyBldCBzdHJhdMOpZ2lxdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbm9zLW1ldGllcnMvaW5nZW5pZXJpZS1maW5hbmNpZXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpYUxvbmdBcnJvd0FsdFJpZ2h0U29saWQvPiBJbmfDqW5pZXJpZSBmaW5hbmNpw6hyZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL25vcy1tZXRpZXJzL2xldmVlLWRlLWZvbmRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpYUxvbmdBcnJvd0FsdFJpZ2h0U29saWQvPiBMZXbDqWUgZGUgZm9uZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ub3MtbWV0aWVycy92YWxvcmlzYXRpb24tZGVzLWZvbmRzLXByb3ByZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlhTG9uZ0Fycm93QWx0UmlnaHRTb2xpZC8+IFZhbG9yaXNhdGlvbiBkZSBmb25kc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL25vcy1tZXRpZXJzL3JlZGFjdGlvbi1kZS1idXNpbmVzcy1wbGFuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpYUxvbmdBcnJvd0FsdFJpZ2h0U29saWQvPiBSw6lkYWN0aW9uIGRlIEJ1c2luZXNzIFBsYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNlcGFyYXRldXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicnVicmlxdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcHJlc2VudGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpYUxvbmdBcnJvd0FsdFJpZ2h0U29saWQvPiBRdWkgc29tbWVzLW5vdXM/XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJydWJyaXF1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ub3MtcmVhbGlzYXRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpYUxvbmdBcnJvd0FsdFJpZ2h0U29saWQvPiBOb3RyZSBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicnVicmlxdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpYUxvbmdBcnJvd0FsdFJpZ2h0U29saWQvPiBSZWNydXRlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgICAgIDxoNj5Ob3VzIGNvbnRhY3RlcjwvaDY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHJlc3NlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGYUxvY2F0aW9uRG90Lz4gPGEgaHJlZj1cImh0dHBzOi8vbWFwcy5hcHAuZ29vLmdsLzFBSGRzS3ZITnRzcWZWSno4XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIENvY29keSBNZXJtb3MgLSBJbW0uIERJQSB8IEFiaWRqYW4sIEPDtHRlIGQnSXZvaXJlXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVsZXBob25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCc0ZpbGxUZWxlcGhvbmVGaWxsLz5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorMjI1MjcyMjU5OTI2NVwiPiArMjI1IDI3IDIyIDU5IDkyIDY1PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPEdyTWFpbC8+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86aW5mb3NAZGl2aW5lZmluYW5jZXNjaS5jb21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm9zQGRpdmluZWZpbmFuY2VzY2kuY29tXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaWFMb25nQXJyb3dBbHRSaWdodFNvbGlkfSBmcm9tIFwicmVhY3QtaWNvbnMvbGlhXCI7XG5pbXBvcnQge0ZhTG9jYXRpb25Eb3R9IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcbmltcG9ydCB7QnNGaWxsVGVsZXBob25lRmlsbH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQge0dyTWFpbH0gZnJvbSBcInJlYWN0LWljb25zL2dyXCI7XG5pbXBvcnQge0NvbH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgQU9TLmluaXQoKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInNpZGViYXItdGl0cmVcIj5Ob3RyZSBwZXJmb3JtYW5jZTwvaDQ+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXItbGlzdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNlcGFyYXRldXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicnVicmlxdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcHJlc2VudGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpYUxvbmdBcnJvd0FsdFJpZ2h0U29saWQvPiBRdWkgc29tbWVzLW5vdXM/XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJydWJyaXF1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ub3MtbWV0aWVycy9jb25zZWlsLWZpbmFuY2llci1ldC1zdHJhdGVnaXF1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWFMb25nQXJyb3dBbHRSaWdodFNvbGlkLz4gTm9zIG3DqXRpZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJydWJyaXF1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlhTG9uZ0Fycm93QWx0UmlnaHRTb2xpZC8+IFJlY3J1dGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgICAgPGg2Pk5vdXMgY29udGFjdGVyPC9oNj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkcmVzc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZhTG9jYXRpb25Eb3QvPiA8YSBocmVmPVwiaHR0cHM6Ly9tYXBzLmFwcC5nb28uZ2wvMUFIZHNLdkhOdHNxZlZKejhcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgQ29jb2R5IE1lcm1vcyAtIEltbS4gRElBIHwgQWJpZGphbiwgQ8O0dGUgZCdJdm9pcmVcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWxlcGhvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJzRmlsbFRlbGVwaG9uZUZpbGwvPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOisyMjUyNzIyNTk5MjY1XCI+ICsyMjUgMjcgMjIgNTkgOTIgNjU8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICA8R3JNYWlsLz5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzppbmZvc0BkaXZpbmVmaW5hbmNlc2NpLmNvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mb3NAZGl2aW5lZmluYW5jZXNjaS5jb21cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpYUxvbmdBcnJvd0FsdFJpZ2h0U29saWR9IGZyb20gXCJyZWFjdC1pY29ucy9saWFcIjtcbmltcG9ydCB7RmFMb2NhdGlvbkRvdH0gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xuaW1wb3J0IHtCc0ZpbGxUZWxlcGhvbmVGaWxsfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7R3JNYWlsfSBmcm9tIFwicmVhY3QtaWNvbnMvZ3JcIjtcbmltcG9ydCB7Q29sfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBBT1MuaW5pdCgpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwic2lkZWJhci10aXRyZVwiPlF1aSBzb21tZXMtbm91cz88L2g0PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlYmFyLWxpc3RlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcHJlc2VudGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpYUxvbmdBcnJvd0FsdFJpZ2h0U29saWQvPiBQcsOpc2VudGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbm90cmUtZXF1aXBlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpYUxvbmdBcnJvd0FsdFJpZ2h0U29saWQvPiBOb3RyZSDDqXF1aXBlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzZXBhcmF0ZXVyXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJ1YnJpcXVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL25vcy1tZXRpZXJzL2NvbnNlaWwtZmluYW5jaWVyLWV0LXN0cmF0ZWdpcXVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpYUxvbmdBcnJvd0FsdFJpZ2h0U29saWQvPiBOb3MgbcOpdGllcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJ1YnJpcXVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL25vcy1yZWFsaXNhdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlhTG9uZ0Fycm93QWx0UmlnaHRTb2xpZC8+IE5vdHJlIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJydWJyaXF1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlhTG9uZ0Fycm93QWx0UmlnaHRTb2xpZC8+IFJlY3J1dGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgICAgPGg2Pk5vdXMgY29udGFjdGVyPC9oNj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkcmVzc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZhTG9jYXRpb25Eb3QvPiA8YSBocmVmPVwiaHR0cHM6Ly9tYXBzLmFwcC5nb28uZ2wvMUFIZHNLdkhOdHNxZlZKejhcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgQ29jb2R5IE1lcm1vcyAtIEltbS4gRElBIHwgQWJpZGphbiwgQ8O0dGUgZCdJdm9pcmVcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWxlcGhvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJzRmlsbFRlbGVwaG9uZUZpbGwvPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOisyMjUyNzIyNTk5MjY1XCI+ICsyMjUgMjcgMjIgNTkgOTIgNjU8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICA8R3JNYWlsLz5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzppbmZvc0BkaXZpbmVmaW5hbmNlc2NpLmNvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mb3NAZGl2aW5lZmluYW5jZXNjaS5jb21cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0JyZWFkY3J1bWIsIENvbCwgQ29udGFpbmVyLCBSb3d9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBCZ0hlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmdIZWFkXCI7XG5pbXBvcnQge0xpYUxvbmdBcnJvd0FsdFJpZ2h0U29saWR9IGZyb20gXCJyZWFjdC1pY29ucy9saWFcIjtcbmltcG9ydCB7RmFMb2NhdGlvbkRvdH0gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xuaW1wb3J0IHtCc0ZpbGxUZWxlcGhvbmVGaWxsfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7R3JNYWlsLCBHck1haWxPcHRpb259IGZyb20gXCJyZWFjdC1pY29ucy9nclwiO1xuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuaW1wb3J0IFNpZGViYXJQcmVzZW50YXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZWJhclByZXNlbnRhdGlvblwiO1xuaW1wb3J0IFNpZGViYXJNZXRpZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZWJhck1ldGllclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBBT1MuaW5pdCgpO1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiUsOpZGFjdGlvbiBkZSBidXNpbmVzcyBwbGFuXCI7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCZ0hlYWQvPlxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJicmVhZGNydW1iXCI+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtIGhyZWY9XCIvXCI+QWNjdWVpbDwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vcyBtw6l0aWVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtIGFjdGl2ZT5Sw6lkYWN0aW9uIGRlIGJ1c2luZXNzIHBsYW48L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJwYWdlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezR9IGxnPXszfSBjbGFzc05hbWU9XCJzaWRlYmFyXCIgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyTWV0aWVyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezh9IGxnPXs5fSBjbGFzc05hbWU9XCJjb250ZW50XCIgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNvbnRlbnQtdGl0cmVcIj5WYWxvcmlzYXRpb24gZGVzIGZvbmRzIHByb3ByZXM8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmFncmFwaGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UGx1cyBkZSB2aW5ndCAoMjApIGJ1c2luZXNzIHBsYW5zIGF1IGNvdXJzIGRlIGwnYW5uw6llIDIwMjItMjAyMzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlZhbG9yaXNhdGlvbiBkdSBidXNpbmVzcyBwbGFuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCcmVhZGNydW1iLCBDb2wsIENvbnRhaW5lciwgUm93fSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgQmdIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL0JnSGVhZFwiO1xuaW1wb3J0IHtMaWFMb25nQXJyb3dBbHRSaWdodFNvbGlkfSBmcm9tIFwicmVhY3QtaWNvbnMvbGlhXCI7XG5pbXBvcnQge0ZhTG9jYXRpb25Eb3R9IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcbmltcG9ydCB7QnNGaWxsVGVsZXBob25lRmlsbH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQge0dyTWFpbCwgR3JNYWlsT3B0aW9ufSBmcm9tIFwicmVhY3QtaWNvbnMvZ3JcIjtcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCBTaWRlYmFyUHJlc2VudGF0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXJQcmVzZW50YXRpb25cIjtcbmltcG9ydCBTaWRlYmFyTWV0aWVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXJNZXRpZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgQU9TLmluaXQoKTtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIlByw6lzZW50YXRpb24gZGUgRGl2aW5lIEZpbmFuY2VzICYgQ29uc2VpbHNcIjtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEJnSGVhZC8+XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0gaHJlZj1cIi9cIj5BY2N1ZWlsPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9zIG3DqXRpZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0gYWN0aXZlPkNvbnNlaWxzIGZpbmFuY2llcnMgZXQgc3RyYXTDqWdpcXVlczwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWI+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cInBhZ2VcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17NH0gbGc9ezN9IGNsYXNzTmFtZT1cInNpZGViYXJcIiBkYXRhLWFvcz1cImZhZGUtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJNZXRpZXIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17OH0gbGc9ezl9IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBkYXRhLWFvcz1cImZhZGUtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY29udGVudC10aXRyZVwiPkNvbnNlaWxzIGZpbmFuY2llcnMgZXQgc3RyYXTDqWdpcXVlczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyYWdyYXBoZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5SRVNUUlVDVFVSQVRJT04gRklOQU5DScOIUkU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRpYWdub3N0aWMgw6ljb25vbWlxdWUgZXQgZmluYW5jaWVyIGRlIGzigJllbnRyZXByaXNlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPsOJbGFib3JhdGlvbiBkZSBtZXN1cmVzIGTigJlhc3NhaW5pc3NlbWVudCBkZSBsYSBzdHJ1Y3R1cmUgZmluYW5jacOocmU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+w4lsYWJvcmF0aW9uIGTigJl1biBQbGFuIGTigJlhZmZhaXJlcyBzdXIgYmFzZSBk4oCZdW4gbW9kw6hsZSBmaW5hbmNpZXI8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UsOpZGFjdGlvbiBk4oCZdW4gbcOpbW9yYW5kdW0gZOKAmWluZm9ybWF0aW9uIGRlIHN5bnRow6hzZSBldCBkZSB0b3VzIHN1cHBvcnRzIGTigJlhaWRlIGF1eCBuw6lnb2NpYXRpb25zPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFzc2lzdGFuY2UgZGFucyBsYSBwcsOpcGFyYXRpb24gZOKAmXVuIHBsYW4gZOKAmWFjdGlvbiBkZSByZWRyZXNzZW1lbnQgZW4gcGFydGVuYXJpYXQgYXZlYyBsZSBtYW5hZ2VtZW50LCBsZXMgY3LDqWFuY2llcnMgZXQgbGVzIGFjdGlvbm5haXJlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Ow6lnb2NpYXRpb24gZGVzIGF4ZXMgZGUgcmVzdHJ1Y3R1cmF0aW9uIGRlcyBkZXR0ZXMsIGVuIGNvb3JkaW5hdGlvbiBhdmVjIGxlIGNsaWVudDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXQtNFwiPkFOQUxZU0UgREUgUEVSU1BFQ1RJVkVTIERFIETDiVZFTE9QUEVNRU5UPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7DiXZhbHVhdGlvbiBkdSBwb3NpdGlvbm5lbWVudCBzdHJhdMOpZ2lxdWUgZGUgbOKAmWVudHJlcHJpc2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QW5hbHlzZSBhbHRlcm5hdGl2ZSBkZSBkw6l2ZWxvcHBlbWVudCBk4oCZZW50cmVwcmlzZSAocmVjaGVyY2hlIGRlIHBhcnRlbmFpcmVzLCBkw6l2ZWxvcHBlbWVudCBkZSBub3V2ZWxsZSBhY3Rpdml0w6ksIGV0Yy4pPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlPDqWxlY3Rpb24gZOKAmW9wcG9ydHVuaXTDqXMgZOKAmWludmVzdGlzc2VtZW50PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlLDqWRhY3Rpb24gZOKAmXVuIG3DqW1vcmFuZHVtIGTigJlpbmZvcm1hdGlvbiBwb3VyIHNlcnZpciBkZSBzdXBwb3J0IHN0cmF0w6lnaXF1ZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXQtNFwiPsOJTEFCT1JBVElPTiBPVSBSRVZVRSBERSBQTEFOIETigJlBRkZBSVJFUzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RGlhZ25vc3RpYyBvcMOpcmF0aW9ubmVsIGV0IGZpbmFuY2llciAow6l2YWx1YXRpb24gZGUgbOKAmWFjdGl2aXTDqSBzaSBleGlzdGFudGUpPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlJldnVlIGV0IGFzc2lzdGFuY2Ugw6AgbOKAmcOpbGFib3JhdGlvbiBkdSBQbGFuIGTigJlhZmZhaXJlcyBldCBkdSBtb2TDqGxlIGZpbmFuY2llciBkZSBs4oCZZW50cmVwcmlzZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Ew6lmaW5pdGlvbiBk4oCZdW5lIHN0cnVjdHVyZSBmaW5hbmNpw6hyZSBvcHRpbWFsZSBlbiBjb2xsYWJvcmF0aW9uIGF2ZWMgbGUgbWFuYWdlbWVudDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Sw6lkYWN0aW9uIGTigJl1biBtw6ltb3JhbmR1bSBk4oCZaW5mb3JtYXRpb24gw6AgbOKAmWF0dGVudGlvbiBkZXMgcHLDqnRldXJzL2ludmVzdGlzc2V1cnMsIGV0IGRlIG5vdGVzIHNww6ljaWZpcXVlcyDDoCBs4oCZYXR0ZW50aW9uIGR1IENvbnNlaWwgZOKAmUFkbWluaXN0cmF0aW9uIGV0IGR1IG1hbmFnZW1lbnQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0JyZWFkY3J1bWIsIEJ1dHRvbiwgQ29sLCBDb250YWluZXIsIEZsb2F0aW5nTGFiZWwsIEZvcm0sIFJvd30gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IEJnSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9CZ0hlYWRcIjtcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCB7SW9Jb3NNYWlsfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcbmltcG9ydCB7R2lSb3RhcnlQaG9uZX0gZnJvbSBcInJlYWN0LWljb25zL2dpXCI7XG5pbXBvcnQge0ZhTWFwTWFya2VyQWx0fSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBSZUNBUFRDSEEgZnJvbSBcInJlYWN0LWdvb2dsZS1yZWNhcHRjaGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IFt2YWxpZGF0ZWQsIHNldFZhbGlkYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2NhcHRjaGFWYWx1ZSwgc2V0Q2FwdGNoYVZhbHVlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgQU9TLmluaXQoKTtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIk5vcyByw6lhbGlzYXRpb25zXCI7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlIHx8ICFjYXB0Y2hhVmFsdWUpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGFsZXJ0KFwiVmV1aWxsZXogY29tcGzDqXRlciBsZSBjYXB0Y2hhIGF2YW50IGRlIHNvdW1ldHRyZS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRWYWxpZGF0ZWQodHJ1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uQ2FwdGNoYUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBzZXRDYXB0Y2hhVmFsdWUodmFsdWUpOyAvLyBTZXQgdGhlIGNhcHRjaGEgdmFsdWUgd2hlbiB0aGUgdXNlciBjb21wbGV0ZXMgaXRcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCZ0hlYWQvPlxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJicmVhZGNydW1iXCI+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtIGhyZWY9XCIvXCI+QWNjdWVpbDwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbSBhY3RpdmU+Q29udGFjdDwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWI+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwicm93LWNvbHMtMSByb3ctY29scy1sZy0zXCIgZGF0YS1hb3M9XCJmYWRlLWRvd25cIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjI1MDBcIiBkYXRhLWFvcy1lYXNpbmc9XCJlYXNlLWluLW91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48R2lSb3RhcnlQaG9uZS8+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlTDqWzDqXBob25lPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorMjI1MjcyMjU5OTI2OFwiPisyMjUgMjcgMjIgNTkgOTIgNjg8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxJb0lvc01haWwvPjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5FbWFpbDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86aW5mb3NAZGl2aW5lZmluYW5jZXNjaS5jb21cIj5pbmZvc0BkaXZpbmVmaW5hbmNlc2NpLmNvbTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PEZhTWFwTWFya2VyQWx0Lz48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TG9jYWxpc2F0aW9uPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWFwcy5hcHAuZ29vLmdsLzFBSGRzS3ZITnRzcWZWSno4XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29jb2R5IE1lcm1veiAtIEltbS4gRElBIDTDqCDDqXRhZ2UgfCBBYmlkamFuLCBDw7R0ZSBkJ0l2b2lyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImZvcm11bGFpcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs2fSB4bD17NX0gZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCIgZGF0YS1hb3MtZWFzaW5nPVwiZWFzZS1pbi1vdXRcIiBkYXRhLWFvcy1kdXJhdGlvbj17MjUwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5FY3JpdmV6LW5vdXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5MYWlzc2V6IG5vdXMgdm90cmUgbWVzc2FnZSBldCBub3VzIHZvdXMgY29udGFjdGVyb25zIHNvdXMgcGV1LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gbm9WYWxpZGF0ZSB2YWxpZGF0ZWQ9e3ZhbGlkYXRlZH0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxvYXRpbmdMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD1cIm5vbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOb20gJiBQcsOpbm9tcyAqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJub21cIiByZXF1aXJlZCBhdXRvQ29tcGxldGU9XCJvZmZcIiBuYW1lPVwibm9tXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZldWlsbGV6IHJlbnNlaWduZXIgdm90cmUgbm9tICYgcHLDqW5vbXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbG9hdGluZ0xhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPVwiZmxvYXRpbmdJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb250YWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZWxcIiBwbGFjZWhvbGRlcj1cImNvbnRhY3RcIiBuYW1lPVwiY29udGFjdFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbG9hdGluZ0xhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWRyZXNzZSBlbWFpbCAqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmV1aWxsZXogZW50cmVyIHVuIGVtYWlsIHZhbGlkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbG9hdGluZ0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9XCJvYmpldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPYmpldCAqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJvYmpldFwiIG5hbWU9XCJvYmpldFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXVpbGxleiBlbnRyZXIgbCdvYmpldCBkZSB2b3RyZSBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxvYXRpbmdMYWJlbCBjb250cm9sSWQ9XCJtZXNzYWdlXCIgbGFiZWw9XCJNZXNzYWdlICpcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDBweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXVpbGxleiBlbnRyZXIgdm90cmUgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbG9hdGluZ0xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogcmVDQVBUQ0hBIENvbXBvbmVudCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZUNBUFRDSEFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZWtleT1cIjZMZTBKRW9xQUFBQUFDRjJxMldVUlVITG93WUJKVFRFMFRaTXFERmhcIiAvLyBSZW1wbGFjZXogcGFyIHZvdHJlIGNsw6kgcHVibGlxdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2FwdGNoYUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ncmlkIGdhcC0yIG10LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCIgdHlwZT1cInN1Ym1pdFwiPkVudm95ZXI8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17Nn0geGw9ezd9IGRhdGEtYW9zPVwiZmFkZS1sZWZ0XCIgZGF0YS1hb3MtZWFzaW5nPVwiZWFzZS1pbi1vdXRcIiBkYXRhLWFvcy1kdXJhdGlvbj17MjUwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5SZXRyb3V2ZXogbm91czwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlN1aXZleiBjZXQgaXRpbsOpcmFpcmUgcG91ciBub3VzIHLDqWpvaW5kcmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDM5NzIuNTI1MzEwMTk0MTk5NCEyZC0zLjk5NzMyOTQ5OTk5OTk5OTghM2Q1LjMzNjQ2MTIhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweGZjMWViMzY4ZmEwZmY3NyUzQTB4ZTczZTA3OTAyMmUyZGMyMSEyc0RGQyUyMC0lMjBEaXZpbmUlMjBGaW5hbmNlcyUyMENvbnNlaWxzITVlMCEzbTIhMXNmciEyc2NpITR2MTY5NzQ0NDQ4MjE2OSE1bTIhMXNmciEyc2NpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tib3JkZXI6ICcwJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVycmVyUG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0JyZWFkY3J1bWIsIENhcmQsIENvbCwgQ29udGFpbmVyLCBSb3d9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBCZ0hlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmdIZWFkXCI7XG5pbXBvcnQge0xpYUxvbmdBcnJvd0FsdFJpZ2h0U29saWR9IGZyb20gXCJyZWFjdC1pY29ucy9saWFcIjtcbmltcG9ydCB7RmFMb2NhdGlvbkRvdH0gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xuaW1wb3J0IHtCc0ZpbGxUZWxlcGhvbmVGaWxsfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7R3JNYWlsLCBHck1haWxPcHRpb259IGZyb20gXCJyZWFjdC1pY29ucy9nclwiO1xuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCBwcm9maWxlS29uZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2VxdWlwZS8wMS1rb25lLmpwZ1wiO1xuaW1wb3J0IHByb2ZpbGVOZHJpIGZyb20gXCIuLi8uLi9pbWFnZXMvZXF1aXBlL2RnYS5qcGdcIjtcbmltcG9ydCBwcm9maWxlR3VzdGF2ZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2VxdWlwZS8wMi1ndXN0YXZlLmpwZ1wiO1xuaW1wb3J0IHByb2ZpbGVTeWxsYSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2VxdWlwZS8wMy1zeWxsYS5qcGdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgQU9TLmluaXQoKTtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIk5vdHJlIMOpcXVpcGVcIjtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEJnSGVhZC8+XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0gaHJlZj1cIi9cIj5BY2N1ZWlsPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVpIHNvbW1lcy1ub3VzP1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtIGFjdGl2ZT5Ob3RyZSDDqXF1aXBlPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYj5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwiZXF1aXBlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcXVpcGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZD1cImxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+Tm90cmUgw6lxdWlwZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImctM1wiIGRhdGEtYW9zPVwiZmFkZS1kb3duXCIgZGF0YS1hb3MtZWFzaW5nPVwiZWFzZS1pbi1vdXRcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjI1MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs2fSBsZz17NH0gY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiaC0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz17cHJvZmlsZUtvbmV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlJBTUFUT1UgVElFR05JTiBLT05FPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlAuRC5HPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgIG1kPXs2fSBsZz17NH0gY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiaC0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz17cHJvZmlsZU5kcml9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPktBTiBBVUdVU1RJTiBOJ0RSSTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5ELkcuQTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs2fSBsZz17NH0gY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiaC0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgc3JjPXtwcm9maWxlR3VzdGF2ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+R1VTVEFWRSBLUkFHQkU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+UmVzcG9uc2FibGUgcHJvamV0PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezZ9IGxnPXs0fSBjbGFzc05hbWU9XCJwcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJoLTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPXtwcm9maWxlU3lsbGF9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkNIRUlDS05BIFNZTExBPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkNPTlNVTFRBTlQ8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCcmVhZGNydW1iLCBCdXR0b24sIENvbCwgQ29udGFpbmVyLCBGbG9hdGluZ0xhYmVsLCBGb3JtLCBSb3d9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBCZ0hlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmdIZWFkXCI7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQge0lvSW9zTWFpbH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5pbXBvcnQge0dpUm90YXJ5UGhvbmV9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xuaW1wb3J0IHtGYU1hcE1hcmtlckFsdH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgUmVDQVBUQ0hBIGZyb20gXCJyZWFjdC1nb29nbGUtcmVjYXB0Y2hhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBbdmFsaWRhdGVkLCBzZXRWYWxpZGF0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtjYXB0Y2hhVmFsdWUsIHNldENhcHRjaGFWYWx1ZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IFtwYXJ0ZW5haXJlQWN0aXZlLCBzZXRQYXJ0ZW5haXJlQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbb3JnYW5pc21lQWN0aXZlLCBzZXRPcmdhbmlzbWVBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgQU9TLmluaXQoKTtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIkRlbWFuZGUgZGUgZmluYW5jZW1lbnQgZGUgcHJvamV0XCI7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlIHx8ICFjYXB0Y2hhVmFsdWUpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGFsZXJ0KFwiVmV1aWxsZXogY29tcGzDqXRlciBsZSBjYXB0Y2hhIGF2YW50IGRlIHNvdW1ldHRyZS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRWYWxpZGF0ZWQodHJ1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uQ2FwdGNoYUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBzZXRDYXB0Y2hhVmFsdWUodmFsdWUpOyAvLyBTZXQgdGhlIGNhcHRjaGEgdmFsdWUgd2hlbiB0aGUgdXNlciBjb21wbGV0ZXMgaXRcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCZ0hlYWQvPlxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJicmVhZGNydW1iXCI+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtIGhyZWY9XCIvXCI+QWNjdWVpbDwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbSBhY3RpdmU+RGVtYW5kZSBkZSBmaW5hbmNlbWVudDwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWI+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImZpbmFuY2VtZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaW5hbmNlbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbC1tZC0xMCBjb2wtbGctOCBvZmZzZXQtbWQtMSBvZmZzZXQtbGctMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5EZW1hbmRlIGRlIGZpbmFuY2VtZW50IGRlIHByb2pldDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlZPVVMgQVZFWiBVTiBQUk9KRVQsIFZPVVMgUkVDSEVSQ0hFWiBVTiBGSU5BTkNFTUVOVD88L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5ESVZJTkUgRklOQU5DRVMgQ09OU0VJTFMgVk9VUyBBQ0NPTVBBR05FIEFWRUMgVU4gQkVTT0lOIFJFRUwgREUgRklOQU5DRU1FTlQ8L2g2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm10LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGVzIGFjdGl2aXTDqXMgZGUgRElWSU5FIEZJTkFOQ0VTIENPTlNFSUxTIGVuIHRhbnQgcXXigJlpbnRlcm3DqWRpYWlyZSBlbiBvcMOpcmF0aW9ucyBkZSBiYW5xdWUgY29uc2lzdGVudCDDoCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFuYWx5c2VyIHZvcyBiZXNvaW5zIGRlIGZpbmFuY2VtZW50IGF1cHLDqHMgZGVzIGluc3RpdHV0aW9ucyBmaW5hbmNpw6hyZXMgOzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Wb3VzIGNvbnNlaWxsZXogc3VyIGTigJlhdXRyZXMgc291cmNlcyBkZSBmaW5hbmNlbWVudC48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gbm9WYWxpZGF0ZSB2YWxpZGF0ZWQ9e3ZhbGlkYXRlZH0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbG9hdGluZ0xhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9XCJub21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOb20gZGUgbCdlbnRyZXByaXNlICpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIm5vbVwiIHJlcXVpcmVkIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub21cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmV1aWxsZXogcmVuc2VpZ25lciBsZSBub20gZGUgdm90cmUgZW50cmVwcmlzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD1cImZsb2F0aW5nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBY3R2aXTDqSAqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBY3Rpdml0w6lcIiBuYW1lPVwiYWN0aXZpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBhdXRvQ29tcGxldGU9XCJvZmZcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD1cImRhdGVDcmVhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRhdGUgZGUgY3LDqWF0aW9uICpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cImRhdGVcIiBwbGFjZWhvbGRlcj1cIkRhdGVcIiBuYW1lPVwiZGF0ZUNyZWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCIgcmVxdWlyZWQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZldWlsbGV6IGVudHJlciBsYSBkYXRlIGRlIGNyw6lhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD1cImNoaWZmcmVBZmZhaXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2hpZmZyZSBkJ2FmZmFpcmVzIGRlcyB0cm9pcyAoMykgZGVybmnDqHJlcyBhbm7DqWVzICpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkNoaWZmcmUgZCdhZmZhaXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoaWZmcmVBZmZhaXJlXCIgcmVxdWlyZWQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZldWlsbGV6IGVudHJlciBsZSBjaGlmZnJlIGQnYWZmYWlyZXMgZGVzIHRyb2lzICgzKSBkZXJuacOocmVzIGFubsOpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nTGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD1cInNpZWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2nDqGdlICpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNpw6hnZVwiIG5hbWU9XCJzaWVnZVwiIHJlcXVpcmVkLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTacOoZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nTGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPklORk9STUFUSU9OUyBTSUdOQVRBSVJFKFMpPC9zdHJvbmc+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxvYXRpbmdMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPVwibm9tRGVtYW5kZXVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTm9tIGV0IHByZW5vbXMgZHUgZGVtYW5kZXVyICpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5vbVwiIG5hbWU9XCJub21EZW1hbmRldXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9tIGV0IHByZW5vbXMgZHUgZGVtYW5kZXVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbG9hdGluZ0xhYmVsPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD1cInF1YWxpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJRdWFsaXTDqSAqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJRdWFsaXTDqVwiIG5hbWU9XCJxdWFsaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZldWlsbGV6IGVudHJlciB2b3RyZSBxdWFsaXTDqVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdMYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxvYXRpbmdMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCAqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHJlcXVpcmVkLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXVpbGxleiBlbnRyZXIgdm90cmUgYWRyZXNzZSBlbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdMYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxvYXRpbmdMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPVwidGVsZXBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGVsZXBob25lICpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInRlbGVwaG9uZVwiIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXVpbGxleiBlbnRyZXIgdm90cmUgbnVtw6lybyBkZSB0ZWxlcGhvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nTGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkRFU0NSSVBUSU9OIERVIFBST0pFVDwvc3Ryb25nPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD1cInRpdHJlUHJvamV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGl0cmUgZHUgcHJvamV0ICpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRpdHJlIGR1IHByb2pldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRyZVByb2pldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXVpbGxleiBlbnRyZXIgbGUgdGl0cmUgZGUgdm90cmUgcHJvamV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbG9hdGluZ0xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbG9hdGluZ0xhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9XCJkZWNyaXB0aW9uUHJvamV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRMOpY3JpdmV6IGJyacOodmVtZW50IGxlIHByb2pldCBwcm9wb3PDqSBldCBsZXMgb2JqZWN0aWZzLiAqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbiBkdSBwcm9qZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnMjAwcHgnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmV1aWxsZXogZMOpY3JpcmUgYnJpw6h2ZW1lbnQgbGUgcHJvamV0IHByb3Bvc8OpIGV0IGxlcyBvYmplY3RpZnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbG9hdGluZ0xhYmVsPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD1cIm1vbnRhbnRQcm9qZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb250YW50IHRvdGFsIGRlbWFuZMOpIHBvdXIgbWVuZXIgw6AgYmllbiBjZSBwcm9qZXQgKFZldWlsbGV6IGVzdGltZXIgbGVzIGNvw7t0cykgOlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTW9udGFudCB0b3RhbCBkdSBwcm9qZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibW9udGFudFByb2pldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXVpbGxleiBlbnRyZXIgbGUgbW9udGFudCB0b3RhbCBkZW1hbmTDqSBwb3VyIG1lbmVyIMOgIGJpZW4gY2UgcHJvamV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFZldWlsbGV6IGVzdGltZXIgbGVzIGNvw7t0cykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdMYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXQtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+UEFSVEVOQVJJQVRTIEVUIENPTExBQk9SQVRJT05TPC9zdHJvbmc+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxvYXRpbmdMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPVwicHJvamV0UGFydGVuYWlyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkF2ZXotdm91cyBkZXMgcGFydGVuYWlyZXMgcG91ciBjZSBwcm9qZXQ/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5TZWxlY3QgYXJpYS1sYWJlbD1cIlNlbGVjdGlvbm5leiB2b3MgcGFydGVuYWlyZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhcnRlbmFpcmVBY3RpdmUoZS50YXJnZXQudmFsdWUgPT09IFwiT1VJXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+LS0gU2VsZWN0aW9ubmV6IC0tPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk9VSVwiPk9VSTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOT05cIj5OT048L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdMYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxvYXRpbmdMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPVwibm9tUGFydGVuYWlyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNpIG91aSwgaW5zY3JpdmV6IGxlIG5vbSBkZXMgcGFydGVuYWlyZXMgYXZlYyBxdWkgdm91cyB0cmF2YWlsbGVyZXogcGVuZGFudCBsZSBwcm9qZXQgZXQgbGV1cnMgcsO0bGVzLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTm9tIGR1IHBhcnRlbmFpcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm9tUGFydGVuYWlyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcGFydGVuYWlyZUFjdGl2ZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaSBvdWksIGluc2NyaXZleiBsZSBub20gZGVzIHBhcnRlbmFpcmVzIGF2ZWMgcXVpIHZvdXMgdHJhdmFpbGxlcmV6IHBlbmRhbnQgbGUgcHJvamV0IGV0IGxldXJzIHLDtGxlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nTGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkNPLUZJTkFOQ0VNRU5UKFMpPC9zdHJvbmc+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxvYXRpbmdMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPVwibm9tRXRhYmxpc3NlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxlIHByb2pldCBhLXQtaWwgw6l0w6kgZMOpasOgIHByw6lzZW50w6kgw6AgdW4gw6l0YWJsaXNzZW1lbnQgZmluYW5jaWVyIG91IHVuIG9yZ2FuaXNtZSBwb3VyIGZpbmFuY2VtZW50ID9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWxlY3Rpb25uZXogbCfDqXRhYmxpc3NlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRPcmdhbmlzbWVBY3RpdmUoZS50YXJnZXQudmFsdWUgPT09IFwiT1VJXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+LS0gU2VsZWN0aW9ubmV6IC0tPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5PTlwiPk5PTjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPVUlcIj5PVUk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdMYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxvYXRpbmdMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPVwibm9tT3JnYW5pc21lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2kgb3VpLCBwcsOpY2lzZXogbGUgbm9tIGRlIGzigJnDqXRhYmxpc3NlbWVudCBmaW5hbmNpZXIgb3UgZGUgbOKAmW9yZ2FuaXNtZSBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5vbSBkZSBsJ8OpdGFibGlzc2VtZW50IGZpbmFuY2llclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub21PcmdhbmlzbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IW9yZ2FuaXNtZUFjdGl2ZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaSBvdWksIHByw6ljaXNleiBsZSBub20gZGUgbOKAmcOpdGFibGlzc2VtZW50IGZpbmFuY2llciBvdSBkZSBs4oCZb3JnYW5pc21lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbG9hdGluZ0xhYmVsPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHJlQ0FQVENIQSBDb21wb25lbnQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlQ0FQVENIQVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGVrZXk9XCI2TGUwSkVvcUFBQUFBQ0YycTJXVVJVSExvd1lCSlRURTBUWk1xREZoXCIgLy8gUmVtcGxhY2V6IHBhciB2b3RyZSBjbMOpIHB1YmxpcXVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2FwdGNoYUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ncmlkIGdhcC0yIG10LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwibGdcIiB0eXBlPVwic3VibWl0XCI+RW52b3llcjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QnJlYWRjcnVtYiwgQ29sLCBDb250YWluZXIsIFJvd30gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IEJnSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9CZ0hlYWRcIjtcbmltcG9ydCB7TGlhTG9uZ0Fycm93QWx0UmlnaHRTb2xpZH0gZnJvbSBcInJlYWN0LWljb25zL2xpYVwiO1xuaW1wb3J0IHtGYUxvY2F0aW9uRG90fSBmcm9tIFwicmVhY3QtaWNvbnMvZmE2XCI7XG5pbXBvcnQge0JzRmlsbFRlbGVwaG9uZUZpbGx9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHtHck1haWwsIEdyTWFpbE9wdGlvbn0gZnJvbSBcInJlYWN0LWljb25zL2dyXCI7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQgU2lkZWJhclByZXNlbnRhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlYmFyUHJlc2VudGF0aW9uXCI7XG5pbXBvcnQgU2lkZWJhck1ldGllciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlYmFyTWV0aWVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIEFPUy5pbml0KCk7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJJbmfDqW5pZXJpZSBmaW5hbmNpw6hyZVwiO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QmdIZWFkLz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbSBocmVmPVwiL1wiPkFjY3VlaWw8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0gaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3MgbcOpdGllcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbSBhY3RpdmU+SW5nw6luaWVyaWUgZmluYW5jacOocmU8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJwYWdlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezR9IGxnPXszfSBjbGFzc05hbWU9XCJzaWRlYmFyXCIgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyTWV0aWVyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezh9IGxnPXs5fSBjbGFzc05hbWU9XCJjb250ZW50XCIgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNvbnRlbnQtdGl0cmVcIj5JbmfDqW5pZXJpZSBmaW5hbmNpw6hyZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyYWdyYXBoZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GVVNJT04gLSBBQ1FVSVNJVElPTlM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPsOJdmFsdWF0aW9uIGZpbmFuY2nDqHJlIGV0IG9ww6lyYXRpb25uZWxsZSBkZSBs4oCZb3Bwb3J0dW5pdMOpIGTigJlpbnZlc3Rpc3NlbWVudCBldCBpZGVudGlmaWNhdGlvbiBkZXMgcmlzcXVlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db25kdWl0ZSBkZSBsYSBEdWUgZGlsaWdlbmNlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlLDqWRhY3Rpb24gZOKAmXVuIE3DqW1vcmFuZHVtIGTigJlJbmZvcm1hdGlvbiBwb3VyIHNlcnZpciBkZSBzdXBwb3J0IMOgIGzigJlvcMOpcmF0aW9uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFzc2lzdGFuY2Ugw6AgbGEgbsOpZ29jaWF0aW9uIGZpbmFuY2nDqHJlIGV0IMOgIGxhIHByw6lwYXJhdGlvbiBkZXMgc3VwcG9ydHMgZGUgbGEgdHJhbnNhY3Rpb248L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+w4l2YWx1YXRpb24gZHUgcHJpeCBkZSBjZXNzaW9uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtdC00XCI+QVJSQU5HRU1FTlQgREUgRklOQU5DRU1FTlQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPklkZW50aWZpY2F0aW9uIGR1IGJlc29pbiBkZSB0csOpc29yZXJpZSAoQ1QgZXQgTUxUKTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BcHByw6ljaWF0aW9uIGRlcyBmYWN0ZXVycyBkZSByaXNxdWU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SWRlbnRpZmljYXRpb24gZGVzIG3DqWNhbmlzbWVzIGRlIGdhcmFudGllPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNob2l4IGRlcyBtb2RlcyBkZSBmaW5hbmNlbWVudHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U3RyYXTDqWdpZSBkZSBmaW5hbmNlbWVudCBldCByZWNvbW1hbmRhdGlvbiBk4oCZdW5lIHN0cnVjdHVyZSBkZSBmaW5hbmNlbWVudCBhZGFwdMOpZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCcmVhZGNydW1iLCBDb2wsIENvbnRhaW5lciwgUm93fSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgQmdIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL0JnSGVhZFwiO1xuaW1wb3J0IHtMaWFMb25nQXJyb3dBbHRSaWdodFNvbGlkfSBmcm9tIFwicmVhY3QtaWNvbnMvbGlhXCI7XG5pbXBvcnQge0ZhTG9jYXRpb25Eb3R9IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcbmltcG9ydCB7QnNGaWxsVGVsZXBob25lRmlsbH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQge0dyTWFpbCwgR3JNYWlsT3B0aW9ufSBmcm9tIFwicmVhY3QtaWNvbnMvZ3JcIjtcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCBTaWRlYmFyUHJlc2VudGF0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXJQcmVzZW50YXRpb25cIjtcbmltcG9ydCBTaWRlYmFyTWV0aWVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXJNZXRpZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgQU9TLmluaXQoKTtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIkxldsOpZSBkZSBmb25kc1wiO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QmdIZWFkLz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbSBocmVmPVwiL1wiPkFjY3VlaWw8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0gaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3MgbcOpdGllcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbSBhY3RpdmU+TGV2w6llIGRlIGZvbmQ8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJwYWdlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezR9IGxnPXszfSBjbGFzc05hbWU9XCJzaWRlYmFyXCIgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyTWV0aWVyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezh9IGxnPXs5fSBjbGFzc05hbWU9XCJjb250ZW50XCIgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNvbnRlbnQtdGl0cmVcIj5MZXbDqWUgZGUgZm9uZHM8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmFncmFwaGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RmluYW5jZW1lbnRzIHN0cnVjdHVyw6lzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GaW5hbmNlbWVudCBk4oCZZXhwbG9pdGF0aW9uIChjcsOpZGl0IGRlIGNhbXBhZ25lLCBsaWduZXMgZGUgZMOpY291dmVydCDigKYpPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZpbmFuY2VtZW50cyBk4oCZSW52ZXN0aXNzZW1lbnRzIChEZXR0ZXMgYmFuY2FpcmVzLCBFbXBydW50IE9ibGlnYXRhaXJlIOKApik8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm10LTRcIj5GaW5hbmNlbWVudCBkZSBQcm9qZXQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkluZnJhc3RydWN0dXJlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BZ3JvLWluZHVzdHJpZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5NaW5lcyBldCDDiW5lcmdpZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCcmVhZGNydW1iLCBDb2wsIENvbnRhaW5lciwgUm93fSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgQmdIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL0JnSGVhZFwiO1xuaW1wb3J0IHtMaWFMb25nQXJyb3dBbHRSaWdodFNvbGlkfSBmcm9tIFwicmVhY3QtaWNvbnMvbGlhXCI7XG5pbXBvcnQge0ZhTG9jYXRpb25Eb3R9IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcbmltcG9ydCB7QnNGaWxsVGVsZXBob25lRmlsbH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQge0dyTWFpbCwgR3JNYWlsT3B0aW9ufSBmcm9tIFwicmVhY3QtaWNvbnMvZ3JcIjtcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCBTaWRlYmFyUHJlc2VudGF0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXJQcmVzZW50YXRpb25cIjtcbmltcG9ydCBTaWRlYmFyTWV0aWVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXJNZXRpZXJcIjtcbmltcG9ydCBTaWRlYmFyUGVyZm9ybWFuY2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZWJhclBlcmZvcm1hbmNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIEFPUy5pbml0KCk7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJOb3MgcsOpYWxpc2F0aW9uc1wiO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QmdIZWFkLz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbSBocmVmPVwiL1wiPkFjY3VlaWw8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxCcmVhZGNydW1iLkl0ZW0gaHJlZj1cIiNcIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICBOb3MgbcOpdGllcnMqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvQnJlYWRjcnVtYi5JdGVtPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbSBhY3RpdmU+Tm9zIHLDqWFsaXNhdGlvbnM8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJwYWdlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezR9IGxnPXszfSBjbGFzc05hbWU9XCJzaWRlYmFyXCIgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyUGVyZm9ybWFuY2UvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17OH0gbGc9ezl9IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBkYXRhLWFvcz1cImZhZGUtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY29udGVudC10aXRyZVwiPk5vcyByw6lhbGlzYXRpb25zPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJhZ3JhcGhlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNlY3RldXIgYWdyby1pbmR1c3RyaWU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk1pc3Npb24gZWZmZWN0dcOpZSA6IHVuZSBsZXbDqWUgZGUgZm9uZHMgYXVwcsOocyBkJ3VuZSBzdHJ1Y3R1cmUgZmluYW5jacOocmU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm10LTRcIj5SZXN0cnVjdHVyYXRpb24gb3JnYW5pc2F0aW9ubmVsbGUgZGUgZGV1eCBHcmFuZHMgR3JvdXBzIGRlIGRpeCBmaWxpYWxlcyBjaGFjdW46PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TZWN0ZXVyIEJUUCA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2VjdGV1ciBkZSBsYSBkaXN0cmlidXRpb24gZGUgbWFyY2hhbmRpc2VzIGV0IHByb2R1aXRzIHDDqXRyb2xpZXJzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNlY3RldXIgZHUgdHJhbnNwb3J0IDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TZWN0ZXVyIGRlIGzigJlhZ3JvLWluZHVzdHJpZSA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pc3Npb24tZWZmZWN0dWVlIG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+PGVtPk1pc3Npb25zIGVmZmVjdHXDqWVzIHBhciBEaXZpbmUgRmluYW5jZXMgJiBDb25zZWlsczo8L2VtPjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5MYSByw6lkYWN0aW9uIGRlcyBwcm9jw6lkdXJlcyBkZSBmb25jdGlvbm5lbWVudCBkdSBncm91cGUsPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TGEgY2VydGlmaWNhdGlvbiBkZXMgY29tcHRlcyBkZSB0b3V0ZXMgbGVzIGZpbGlhbGVzIGV0IGxldXIgY29uc29saWRhdGlvbiBjb21wdGFibGUgYXUgc2VpbiBkZSBsYSBob2xkaW5nLDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkxhIHLDqWRhY3Rpb24gZXQgbGEgcmV2dWUgZGVzIGNvbnZlbnRpb25zIGV0IGNvbnRyYXRzIGVudHJlIGxhIGhvbGRpbmcgZXQgbGVzIGZpbGlhbGVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TGEgcsOpZGFjdGlvbiBkdSBidXNpbmVzcyBwbGFuIGR1IGdyb3VwPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TGEgdmFsb3Jpc2F0aW9uIGRlcyBmb25kcyBwcm9wcmVzIGRlIHRvdXRlcyBsZXMgZmlsaWFsZXMgZXQgZGUgbGEgaG9sZGluZzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtdC00XCI+VmFsb3Jpc2F0aW9uIGRlIGZvbmRzIHByb3ByZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNlY3RldXIgQlRQICh4Mik8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2VjdGV1ciBkaXN0cmlidXRpb248L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2VjdGV1ciBzYW50w6k8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm10LTRcIj5Sw6lhbGlzYXRpb24gZGUgQnVzaW5lc3MgUGxhbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UGx1cyBkZSB2aW5ndCAoMjApIGJ1c2luZXNzIHBsYW5zIGF1IGNvdXJzIGRlIGwnYW5uw6llIDIwMjItMjAyMzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5WYWxvcmlzYXRpb24gZHUgYnVzaW5lc3MgcGxhbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCcmVhZGNydW1iLCBDb2wsIENvbnRhaW5lciwgUm93fSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgQmdIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL0JnSGVhZFwiO1xuaW1wb3J0IHtMaWFMb25nQXJyb3dBbHRSaWdodFNvbGlkfSBmcm9tIFwicmVhY3QtaWNvbnMvbGlhXCI7XG5pbXBvcnQge0ZhTG9jYXRpb25Eb3R9IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcbmltcG9ydCB7QnNGaWxsVGVsZXBob25lRmlsbH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQge0dyTWFpbCwgR3JNYWlsT3B0aW9ufSBmcm9tIFwicmVhY3QtaWNvbnMvZ3JcIjtcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCBTaWRlYmFyUHJlc2VudGF0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXJQcmVzZW50YXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgQU9TLmluaXQoKTtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIlByw6lzZW50YXRpb24gZGUgRGl2aW5lIEZpbmFuY2VzICYgQ29uc2VpbHNcIjtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEJnSGVhZC8+XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0gaHJlZj1cIi9cIj5BY2N1ZWlsPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVpIHNvbW1lcy1ub3VzP1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtIGFjdGl2ZT5QcsOpc2VudGF0aW9uPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYj5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwicGFnZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs0fSBsZz17M30gY2xhc3NOYW1lPVwic2lkZWJhclwiIGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2lkZWJhclByZXNlbnRhdGlvbi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs4fSBsZz17OX0gY2xhc3NOYW1lPVwiY29udGVudFwiIGRhdGEtYW9zPVwiZmFkZS1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjb250ZW50LXRpdHJlXCI+RGl2aW5lIEZpbmFuY2VzICYgQ29uc2VpbHM8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmFncmFwaGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+REZjb25zZWlsczwvc3Ryb25nPiBlc3QgdW4gY2FiaW5ldCBkZSBjb25zZWlsIGZpbmFuY2llci4gTm91cyBhY2NvbXBhZ25vbnMgbGVzIGVudHJlcHJpc2VzIGF2ZWMgZGVzIHNvbHV0aW9ucyBjb25jcsOodGVzIGF1eCBwcm9ibMOpbWF0aXF1ZXMgZGUgbGV2w6llIGRlIGZvbmRzLCBk4oCZb3B0aW1pc2F0aW9uIGZpbmFuY2nDqHJlLCBkZSBzdHJ1Y3R1cmF0aW9uIGV0IGRlIHJlc3RydWN0dXJhdGlvbiBmaW5hbmNpw6hyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyYWdyYXBoZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pk5vcyBhbWJpdGlvbnM8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm91cyBub3VzIGF0dGVsb25zIMOgIGZhaXJlIMOpbWVyZ2VyIGRhdmFudGFnZSBkZSBjaGFtcGlvbnMgbG9jYXV4LCBjYXIgbm91cyBhdm9ucyBsYSBmZXJtZSBjb252aWN0aW9uIHF1ZSBsZSBkw6l2ZWxvcHBlbWVudCDDqWNvbm9taXF1ZSBkZSBs4oCZQWZyaXF1ZSBkb2l0IMOqdHJlIHBvcnTDqSBwYXIgZGVzIGFjdGV1cnMgYWZyaWNhaW5zLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY29tcGFnbmVyIGxlcyBQTUUsIGRhbnMgbGEgcmVjaGVyY2hlIGRlIGZpbmFuY2VtZW50LCBsZXMgYXNzaXN0ZXIsIGxlcyBjb25zZWlsbGVyIGV0IHN0cnVjdHVyZXIgZGVzIGZpbmFuY2VtZW50cyDDoCBwcm9wb3NlciDDoCBsZXVycyBwYXJ0ZW5haXJlcyBmaW5hbmNpZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJhZ3JhcGhlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+Tm90cmUgZXhwZXJ0aXNlPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVuZSByw6lmw6lyZW5jZSBkYW5zIGxlIGNvbnNlaWwgZmluYW5jaWVyIGV0IHN0cmF0w6lnaXF1ZSBlbiBBZnJpcXVlIGRlIGzigJlPdWVzdCBkYW5zIGRlcyBzZWN0ZXVycyBjbMOpcyBkZSBs4oCZw6ljb25vbWllIHRlbHMgcXVlIGzigJlhZ3JvLWluZHVzdHJpZSwgbGVzIHRyYXZhdXggcHVibGljcywgbOKAmcOpbGVjdHJpY2l0w6ksIGxlcyBzZXJ2aWNlcyBmaW5hbmNpZXJzLCBs4oCZaW1tb2JpbGllcuKAplxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJhZ3JhcGhlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+Tm90cmUgw6lxdWlwZTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbmUgw6lxdWlwZSBjb21ww6l0ZW50ZSBldCBwbHVyaWRpc2NpcGxpbmFpcmUgcXVpIGRpc3Bvc2UgZOKAmXVuZSBmb3J0ZSBleHDDqXJpZW5jZSBzdXIgbGUgcGxhbiBuYXRpb25hbCBkYW5zIGRpdmVycyBzZWN0ZXVycyBtZW7DqXMgcGFyIGRlcyBBc3NvY2nDqXMgZXhww6lyaW1lbnTDqXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmFncmFwaGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5Ob3MgY2xpZW50czwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3VzIGN1bHRpdm9ucyBkZXMgcmVsYXRpb25zIHByaXZpbMOpZ2nDqWVzIGF2ZWMgbGVzIGVudHJlcHJpc2VzIMOgIGZvcnQgcG90ZW50aWVsIGV0IGFjdHJpY2VzIG1hamV1cmVzIGRlIGxldXJzIGRvbWFpbmVzIGTigJlhY3Rpdml0w6lzIHJlc3BlY3RpZnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmFncmFwaGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5Ob3MgdmFsZXVyczwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPklOTk9WQVRJT048L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5FWENFTExFTkNFPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SU5URUdSSVRFPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RU5HQUdFTUVOVDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJhZ3JhcGhlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+Tm9zIHNlcnZpY2VzPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdXMgcHJvcG9zb25zIHVuZSBnYW1tZSDDqWxhcmdpZSBkZSBzZXJ2aWNlcyBkZSBjb25zZWlscyBmaW5hbmNpZXJzIGFsbGFudCBkZSBs4oCZaW5nw6luaWVyaWUgZmluYW5jacOocmUgw6AgbGEgZ2VzdGlvbiBkZXMgZm9uZHMgcHJvcHJlc+KAplxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JbmfDqW5pZXJpZSBmaW5hbmNpw6hyZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlN0cmF0w6lnaWUgZmluYW5jacOocmU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RHVlIGRpbGlnZW5jZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Nb2TDqWxpc2F0aW9uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlJlc3RydWN0dXJhdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29uc2VpbCBlbiBsZXbDqWUgZGUgZm9uZHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TdHJ1Y3R1cmF0aW9uIGRlIGRldHRlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gTGV2w6llIGRlIGZvbmRzIDo8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TWFyY2hlcyBmaW5hbmNpZXJzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JbnN0aXR1dGlvbnMgZmluYW5jacOocmVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5CYW5xdWVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GaW5hbmNlbWVudHMgZGUgcHJvamV0czwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U3RydWN0dXJhdGlvbiBldCBtb2TDqWxpc2F0aW9uIGZpbmFuY2nDqHJlIGRlIHByb2pldHMgZOKAmUluZnJhc3RydWN0dXJlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkV4w6ljdXRpb24gZGUgcHJvamV0czwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5MZXbDqWUgZGUgZm9uZHMgZW4gZGV0dGUgZXQgZm9uZHMgcHJvcHJlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCcmVhZGNydW1iLCBDb2wsIENvbnRhaW5lciwgUm93fSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgQmdIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL0JnSGVhZFwiO1xuaW1wb3J0IHtMaWFMb25nQXJyb3dBbHRSaWdodFNvbGlkfSBmcm9tIFwicmVhY3QtaWNvbnMvbGlhXCI7XG5pbXBvcnQge0ZhTG9jYXRpb25Eb3R9IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcbmltcG9ydCB7QnNGaWxsVGVsZXBob25lRmlsbH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQge0dyTWFpbCwgR3JNYWlsT3B0aW9ufSBmcm9tIFwicmVhY3QtaWNvbnMvZ3JcIjtcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCBTaWRlYmFyUHJlc2VudGF0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXJQcmVzZW50YXRpb25cIjtcbmltcG9ydCBTaWRlYmFyTWV0aWVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXJNZXRpZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgQU9TLmluaXQoKTtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIlZhbG9yaXNhdGlvbiBkZXMgZm9uZHMgcHJvcHJlc1wiO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QmdIZWFkLz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbSBocmVmPVwiL1wiPkFjY3VlaWw8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0gaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3MgbcOpdGllcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbSBhY3RpdmU+VmFsb3Jpc2F0aW9uIGRlcyBmb25kcyBwcm9wcmVzPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYj5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwicGFnZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs0fSBsZz17M30gY2xhc3NOYW1lPVwic2lkZWJhclwiIGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2lkZWJhck1ldGllci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs4fSBsZz17OX0gY2xhc3NOYW1lPVwiY29udGVudFwiIGRhdGEtYW9zPVwiZmFkZS1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjb250ZW50LXRpdHJlXCI+VmFsb3Jpc2F0aW9uIGRlcyBmb25kcyBwcm9wcmVzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJhZ3JhcGhlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNlY3RldXIgQlRQICh4Mik8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TZWN0ZXVyIGRpc3RyaWJ1dGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNlY3RldXIgc2FudMOpPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJBcHAiLCJyb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUJyb3dzZXJSb3V0ZXIiLCJPdXRsZXQiLCJSb3V0ZXJQcm92aWRlciIsIk5hdkxpbmsiLCJIb21lIiwiQ29sIiwiQ29udGFpbmVyIiwiTmF2IiwiTmF2YmFyIiwiTmF2RHJvcGRvd24iLCJPZmZjYW52YXMiLCJSb3ciLCJsb2dvU1ZHIiwibG9nbyIsIlByZXNlbnRhdGlvbiIsImxvZ29CVyIsIkVxdWlwZSIsIlRmaUFycm93Q2lyY2xlVXAiLCJBT1MiLCJDb25zZWlsc0ZpbmFuY2llcnMiLCJJbmdlbmllcmllRmluYW5jaWVyZXMiLCJMZXZlZUZvbmRzIiwiUGVyZm9ybWFuY2UiLCJDb250YWN0IiwiVmFsb3Jpc2F0aW9uIiwiQnVzaW5lc3NQbGFuIiwiRmluYW5jZW1lbnQiLCJyb3V0ZXIiLCJwYXRoIiwiZWxlbWVudCIsIlJvb3QiLCJjaGlsZHJlbiIsImluaXQiLCJ0aXRsZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiaXNEcm9wZG93bk9wZW4iLCJzZXRJc0Ryb3Bkb3duT3BlbiIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiaXNNZW51Rml4ZWQiLCJzZXRJc01lbnVGaXhlZCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2Iiwic2hvd09mZmNhbnZhcyIsInNldFNob3dPZmZjYW52YXMiLCJjbG9zZU9mZmNhbnZhcyIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiaXNRdWlTb21tZXNOb3VzT3BlbiIsInNldElzUXVpU29tbWVzTm91c09wZW4iLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJpc05vc01ldGllcnNPcGVuIiwic2V0SXNOb3NNZXRpZXJzT3BlbiIsImhhbmRsZVF1aVNvbW1lc05vdXNUb2dnbGUiLCJoYW5kbGVOb3NNZXRpZXJzVG9nZ2xlIiwiaGFuZGxlRHJvcGRvd25Ub2dnbGUiLCJzY3JvbGxUb3AiLCJzY3JvbGxZIiwiaWQiLCJjbGFzc05hbWUiLCJocmVmIiwic3R5bGUiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImNvbGxhcHNlT25TZWxlY3QiLCJleHBhbmQiLCJzdGlja3kiLCJ0byIsInNyYyIsImRhdGFzcmMiLCJhbHQiLCJUb2dnbGUiLCJvbkNsaWNrIiwiQ29sbGFwc2UiLCJzaG93Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25IaWRlIiwiSGVhZGVyIiwiY2xvc2VCdXR0b24iLCJUaXRsZSIsIkJvZHkiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiTGluayIsIkl0ZW0iLCJzbSIsIm1kIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImRpc3BsYXkiLCJDYXJvdXNlbCIsIkNhcmQiLCJzbGlkZTEiLCJzbGlkZTIiLCJSaU1vbmV5RG9sbGFyQ2lyY2xlRmlsbCIsIkdpUmVjZWl2ZU1vbmV5IiwiRmFDaGFsa2JvYXJkVXNlciIsIm1ldGllcjEiLCJtZXRpZXIyIiwibWV0aWVyMyIsIkJzQXJyb3dSaWdodCIsInBlcmZvcm1hbmNlIiwiVGJQaWdNb25leSIsIlNsaWRlciIsInByb2ZpbGVLb25lIiwicHJvZmlsZU5kcmkiLCJwcm9maWxlR3VzdGF2ZSIsInByb2ZpbGVTeWxsYSIsIkhlbG1ldCIsIkJlYXRMb2FkZXIiLCJDaXJjbGVTcGlubmVyT3ZlcmxheSIsIkxhenlMb2FkIiwibWF4Q2hhcmFjdGVycyIsInNldE1heENoYXJhY3RlcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNvbnRlbnRJbmdlbmllcmllIiwidHJ1bmNhdGVkQ29udGVudEluZ2VuaWVyaWUiLCJjb25jYXQiLCJzdWJzdHJpbmciLCJjb250ZW50TGV2ZWUiLCJ0cnVuY2F0ZWRDb250ZW50TGV2ZWUiLCJjb250ZW50Q29uc2VpbHMiLCJ0cnVuY2F0ZWRDb250ZW50Q29uc2VpbHMiLCJwdWNlRmluYW5jZSIsInZpZXdCb3giLCJ4bWxucyIsInN0cm9rZSIsImQiLCJmaWxsIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImNoYXJTZXQiLCJjb250ZW50IiwibmFtZSIsInJlbCIsInByb3BlcnR5IiwiZmFkZSIsImNvbnRyb2xzIiwiaW50ZXJ2YWwiLCJDYXB0aW9uIiwiZmx1aWQiLCJsZyIsIkltZyIsInZhcmlhbnQiLCJUZXh0IiwieGwiLCJMaWFMb25nQXJyb3dBbHRSaWdodFNvbGlkIiwiRmFMb2NhdGlvbkRvdCIsIkJzRmlsbFRlbGVwaG9uZUZpbGwiLCJHck1haWwiLCJ0YXJnZXQiLCJCcmVhZGNydW1iIiwiQmdIZWFkIiwiR3JNYWlsT3B0aW9uIiwiU2lkZWJhclByZXNlbnRhdGlvbiIsIlNpZGViYXJNZXRpZXIiLCJhY3RpdmUiLCJCdXR0b24iLCJGbG9hdGluZ0xhYmVsIiwiRm9ybSIsIklvSW9zTWFpbCIsIkdpUm90YXJ5UGhvbmUiLCJGYU1hcE1hcmtlckFsdCIsIlJlQ0FQVENIQSIsInZhbGlkYXRlZCIsInNldFZhbGlkYXRlZCIsImNhcHRjaGFWYWx1ZSIsInNldENhcHRjaGFWYWx1ZSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwiZm9ybSIsImN1cnJlbnRUYXJnZXQiLCJjaGVja1ZhbGlkaXR5IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsIm9uQ2FwdGNoYUNoYW5nZSIsInZhbHVlIiwibm9WYWxpZGF0ZSIsIm9uU3VibWl0IiwiY29udHJvbElkIiwibGFiZWwiLCJDb250cm9sIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJhdXRvQ29tcGxldGUiLCJGZWVkYmFjayIsImFzIiwiaGVpZ2h0Iiwic2l0ZWtleSIsIm9uQ2hhbmdlIiwic2l6ZSIsIndpZHRoIiwiYm9yZGVyIiwiYWxsb3dGdWxsU2NyZWVuIiwicmVmZXJyZXJQb2xpY3kiLCJwYXJ0ZW5haXJlQWN0aXZlIiwic2V0UGFydGVuYWlyZUFjdGl2ZSIsIm9yZ2FuaXNtZUFjdGl2ZSIsInNldE9yZ2FuaXNtZUFjdGl2ZSIsIlNlbGVjdCIsImRpc2FibGVkIiwiU2lkZWJhclBlcmZvcm1hbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==