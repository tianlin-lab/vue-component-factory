(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-component-factory"] = factory();
	else
		root["vue-component-factory"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/vue-component-factory/src/index.vue?vue&type=template&id=55aa642e&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.checked ? _c(_vm.bind.is, _vm._g(_vm._b({
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.vshow,
      expression: "vshow"
    }],
    tag: "component",
    model: {
      value: _vm.vmodelCopy,
      callback: function ($$v) {
        _vm.vmodelCopy = $$v;
      },
      expression: "vmodelCopy"
    }
  }, 'component', _vm.bind, false), _vm.fmtOn), [_vm.children ? _vm._l(_vm.children, function (item, index) {
    return _c('vue-component-factory', _vm._b({
      key: index,
      model: {
        value: item.vmodel,
        callback: function ($$v) {
          _vm.$set(item, "vmodel", $$v);
        },
        expression: "item.vmodel"
      }
    }, 'vue-component-factory', item, false));
  }) : _vm._e()], 2) : _vm._e();
};

var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/vue-component-factory/src/index.vue?vue&type=script&lang=js&
/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: "VueComponentFactory",
  model: {
    prop: "vmodel",
    event: "change"
  },
  props: {
    vmodel: null,
    bind: {
      type: Object,
      default: () => {},
      required: true
    },
    on: {
      type: Object,
      default: () => {}
    },
    children: {
      type: Array,
      default: () => []
    },
    created: null,
    mounted: null,
    beforeDestroy: null,
    vshow: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      vmodelCopy: this.vmodel,
      checked: false
    };
  },

  computed: {
    // Add component "this" and event target object.
    fmtOn() {
      const result = {};

      if (Object.prototype.toString.call(this.on) === "[object Object]") {
        for (const key of Object.keys(this.on)) {
          const onFunc = this.on[key];

          if (Object.prototype.toString.call(onFunc) === "[object Function]") {
            result[key] = event => {
              onFunc(this, event);
            };
          }
        }
      }

      return result;
    }

  },
  watch: {
    vmodel: {
      deep: true,
      immediate: true,

      handler(newValue) {
        // Parent v-model change.
        if (Object.prototype.toString.call(newValue) === "[object Object]") {
          // Add "add" method, resolve error(Unexpected mutation of "vmodel" prop).
          newValue.__update = value => {
            newValue.objectIs[newValue.key] = value;
          };

          this.vmodelCopy = newValue.objectIs[newValue.key];
        } else {
          this.vmodelCopy = newValue;
        }
      }

    },
    vmodelCopy: {
      handler(newValue) {
        // Parent v-model update.
        if (Object.prototype.toString.call(this.vmodel) === "[object Object]") {
          this.vmodel.__update(newValue);
        } else {
          this.$emit("change", newValue);
        }
      }

    },
    bind: {
      deep: true,
      immediate: true,

      handler(newValue) {
        const isObject = Object.prototype.toString.call(newValue) === "[object Object]"; // Set the default component to "div"

        if (isObject && !newValue.is) {
          newValue.is = "div";
        }

        this.checked = isObject;
      }

    }
  },

  created() {
    if (Object.prototype.toString.call(this.created) === "[object Function]") {
      this.created(this);
    }
  },

  mounted() {
    if (Object.prototype.toString.call(this.mounted) === "[object Function]") {
      this.mounted(this);
    }
  },

  beforeDestroy() {
    if (Object.prototype.toString.call(this.beforeDestroy) === "[object Function]") {
      this.beforeDestroy(this);
    }
  }

});
;// CONCATENATED MODULE: ./packages/vue-component-factory/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_component_factory_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/vue-component-factory/src/index.vue





/* normalize component */
;
var component = normalizeComponent(
  vue_component_factory_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_component_factory_src = (component.exports);
;// CONCATENATED MODULE: ./packages/index.js

const components = [vue_component_factory_src];

const install = Vue => {
  if (install.installed) return;
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  install.installed = true;
}; // if using “vue.js” file import.


if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  // https://v2.cn.vuejs.org/v2/api/#Vue-use
  install,
  ...components
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vue-component-factory.umd.js.map