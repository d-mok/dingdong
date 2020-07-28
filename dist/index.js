/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sweet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _sweet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sweet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _regisvue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _regisvue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_regisvue__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),
/* 1 */
/***/ (function(module, exports) {

globalThis.sweet = {
  async warn(title, text) {
    // show a warning dialog, will throw error if dismissed by user
    const res = await Swal.fire({
      title: title,
      text: text,
      icon: "warning"
    });
    if (!res.isConfirmed) throw 'Sweet Confirm Dismissed! Stop Execution';
    return res.isConfirmed;
  },

  async ask(title, text, preset = "", inputType = "text") {
    // show a dialog asking the user for a input, will throw error if dismissed by user
    const res = await Swal.fire({
      title: title,
      text: text,
      input: inputType,
      icon: "question",
      inputValue: preset,
      inputValidator: x => !!x ? null : "Enter Something!"
    });
    if (!('value' in res)) throw 'Sweet Input Dismissed! Stop Execution';
    return res.value;
  },

  error(title, text) {
    // show a dialog with error info
    Swal.fire({
      title: title,
      text: text,
      icon: "error"
    });
  },

  cheer(title, text) {
    // show a dialog with success info
    Swal.fire({
      title: title,
      text: text,
      icon: "success"
    });
  },

  toast(title, text, icon = "success") {
    // show a toast notification
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      toast: true,
      position: 'bottom',
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
      onOpen: toast => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
  },

  show(title, text, show) {
    // show a dialog with a textarea, allow user to copy the content
    Swal.fire({
      title: title,
      text: text,
      html: '<textarea id="swal-input2" style="height:auto!important" class="swal2-input" rows="15">' + show + '</textarea>',
      width: "60%",
      icon: "info"
    });
  }

};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* 

This is a standard module.
It can be used in all front-end to connect to backend.
Axios should be imported before me.
SweetAlert2 should be imported before me.

The backend must have:
- /login?redirect=      for login
- /status               for login check, which return {login, ...}
- when dev, hosted at https://localhost:5000
- when prod, hosted at the root url of the frontend
- return 401 when user is not login
- return 403 when user is login when trying to call an API endpoint without role permission

The frontend must have:
1. Axios imported
2. SweetAlert2 imported
3. global var NODE_ENV defined ("development" or "production")

*/
globalThis.backend = {
  // decide root_url on development or production
  root_url: NODE_ENV == "development" ? 'https://localhost:5000' : window.location.origin,

  login() {
    // after login, should redirect to current url
    const url = window.location.href;
    window.location.replace(backend.root_url + "/login?redirect=" + url);
  },

  async checkLogin() {
    // the backend should have /status endpoint
    const status = await backend.get('status');
    return status.login;
  },

  showError(title, text) {
    // use SweetAlert2 to display error
    Swal.fire({
      title: title,
      text: text,
      icon: "error",
      footer: "See F12 log for detail."
    });
  },

  async ajax(endpoint, method = 'get', params = {}, data = {}) {
    return await axios({
      method: method,
      withCredentials: true,
      url: backend.root_url + "/" + endpoint,
      params: params,
      data: data
    }).then(r => r.data).catch(error => {
      if (error.response) {
        const data = error.response.data;
        const code = error.response.status;

        if (code === 401) {
          // not login, redirect to login
          console.log('[status 401] Not Login Yet. Redirect Login Now.');
          backend.login();
          return undefined;
        }

        if (code === 403) {
          // no role permission, redirect to login
          console.log('[status 403] No Role Permission. Redirect Login Now.');
          backend.login();
          return undefined;
        } // some other client error (server has response but not OK)


        console.log("[Client Error]", JSON.stringify(data, null, 2));
        backend.showError(data.msg, data.detail);
        throw 'ClientError';
      } else {
        // some server error (server has no repsonse)
        console.log("[Server Error] No Response From Server!");
        backend.showError("Server Error!", "No Response From Server!");
        throw 'ServerError';
      }

      ;
    });
  },

  get(endpoint, params = {}) {
    return backend.ajax(endpoint, 'get', params);
  },

  post(endpoint, params = {}, data = {}) {
    return backend.ajax(endpoint, 'post', params, data);
  },

  put(endpoint, params = {}, data = {}) {
    return backend.ajax(endpoint, 'put', params, data);
  },

  del(endpoint, params = {}, data = {}) {
    return backend.ajax(endpoint, 'delete', params, data);
  }

}; // once loaded, check login status
// if not login, redirect to login immediately

backend.checkLogin().then(result => {
  console.log("Initial Check of Login Check: " + result);
  if (!result) backend.login();
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function getComponents(context) {
  function parse(fileName) {
    fileName = fileName.split('/').pop().replace(/\.\w+$/, '');
    return _.upperFirst(_.camelCase(fileName));
  }

  return context.keys().map(fileName => {
    let component = context(fileName);
    component = component.default || component;
    const componentName = parse(fileName);
    return {
      componentName,
      component
    };
  });
} // register vue components, use like:
// const vueComponents = require.context('@/components', true, /[A-Z]\w+\.(vue|js)$/);
// registerVueComponents(Vue, vueComponents);


globalThis.registerVueComponents = function (vue, context) {
  getComponents(context).forEach(c => {
    vue.component(c.componentName, c.component);
  });
}; // return a routes object, use like:
// const routeComponents = require.context('@/pages', true, /[A-Z]\w+\.(vue|js)$/);
// const routes = registerVueRoutes(routeComponents);


globalThis.registerVueRoutes = function (context) {
  return getComponents(context).map(c => ({
    path: '/' + c.componentName.toLowerCase(),
    name: c.componentName.toLowerCase(),
    component: c.component
  }));
};

/***/ })
/******/ ]);