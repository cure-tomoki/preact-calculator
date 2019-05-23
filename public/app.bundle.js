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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/preact/dist/preact.mjs":
/*!*********************************************!*\
  !*** ./node_modules/preact/dist/preact.mjs ***!
  \*********************************************/
/*! exports provided: default, h, createElement, cloneElement, createRef, Component, render, rerender, options */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
var VNode = function VNode() {};

var options = {};

var stack = [];

var EMPTY_CHILDREN = [];

function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

function applyRef(ref, value) {
  if (ref != null) {
    if (typeof ref == 'function') ref(value);else ref.current = value;
  }
}

var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p;
	while (p = items.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

function isSameNodeType(node, vnode, hydrating) {
	if (typeof vnode === 'string' || typeof vnode === 'number') {
		return node.splitText !== undefined;
	}
	if (typeof vnode.nodeName === 'string') {
		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	}
	return hydrating || node._componentConstructor === vnode.nodeName;
}

function isNamedNode(node, nodeName) {
	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

function getNodeProps(vnode) {
	var props = extend({}, vnode.attributes);
	props.children = vnode.children;

	var defaultProps = vnode.nodeName.defaultProps;
	if (defaultProps !== undefined) {
		for (var i in defaultProps) {
			if (props[i] === undefined) {
				props[i] = defaultProps[i];
			}
		}
	}

	return props;
}

function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {} else if (name === 'ref') {
		applyRef(old, null);
		applyRef(value, node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		try {
			node[name] = value == null ? '' : value;
		} catch (e) {}
		if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));

		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

var mounts = [];

var diffLevel = 0;

var isSvgMode = false;

var hydrating = false;

function flushMounts() {
	var c;
	while (c = mounts.shift()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	if (!diffLevel++) {
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	if (! --diffLevel) {
		hydrating = false;

		if (!componentRoot) flushMounts();
	}

	return ret;
}

function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	if (typeof vnode === 'string' || typeof vnode === 'number') {
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			}
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	} else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	diffAttributes(out, vnode.attributes, props);

	isSvgMode = prevSvgMode;

	return out;
}

function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			} else if (min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		unmountComponent(component);
	} else {
		if (node['__preactattr_'] != null) applyRef(node['__preactattr_'].ref, null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

function diffAttributes(dom, attrs, old) {
	var name;

	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

var recyclerComponents = [];

function createComponent(Ctor, props, context) {
	var inst,
	    i = recyclerComponents.length;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	while (i--) {
		if (recyclerComponents[i].constructor === Ctor) {
			inst.nextBase = recyclerComponents[i].nextBase;
			recyclerComponents.splice(i, 1);
			return inst;
		}
	}

	return inst;
}

function doRender(props, state, context) {
	return this.constructor(props, context);
}

function setComponentProps(component, props, renderMode, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	component.__ref = props.ref;
	component.__key = props.key;
	delete props.ref;
	delete props.key;

	if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
		if (!component.base || mountAll) {
			if (component.componentWillMount) component.componentWillMount();
		} else if (component.componentWillReceiveProps) {
			component.componentWillReceiveProps(props, context);
		}
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (renderMode !== 0) {
		if (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	applyRef(component.__ref, component);
}

function renderComponent(component, renderMode, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    snapshot = previousContext,
	    rendered,
	    inst,
	    cbase;

	if (component.constructor.getDerivedStateFromProps) {
		state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
		component.state = state;
	}

	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (renderMode !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		if (isUpdate && component.getSnapshotBeforeUpdate) {
			snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || renderMode === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.push(component);
	} else if (!skip) {

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, snapshot);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	while (component._renderCallbacks.length) {
		component._renderCallbacks.pop().call(component);
	}if (!diffLevel && !isChild) flushMounts();
}

function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;

			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] != null) applyRef(base['__preactattr_'].ref, null);

		component.nextBase = base;

		removeNode(base);
		recyclerComponents.push(component);

		removeChildren(base);
	}

	applyRef(component.__ref, null);
}

function Component(props, context) {
	this._dirty = true;

	this.context = context;

	this.props = props;

	this.state = this.state || {};

	this._renderCallbacks = [];
}

extend(Component.prototype, {
	setState: function setState(state, callback) {
		if (!this.prevState) this.prevState = this.state;
		this.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);
		if (callback) this._renderCallbacks.push(callback);
		enqueueRender(this);
	},
	forceUpdate: function forceUpdate(callback) {
		if (callback) this._renderCallbacks.push(callback);
		renderComponent(this, 2);
	},
	render: function render() {}
});

function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

function createRef() {
	return {};
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	createRef: createRef,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};

/* harmony default export */ __webpack_exports__["default"] = (preact);

//# sourceMappingURL=preact.mjs.map


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/typings-for-css-modules-loader/lib/index.js?!./src/components/organisms/Calculator/CalculatorButton.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/typings-for-css-modules-loader/lib??ref--5-1!./src/components/organisms/Calculator/CalculatorButton.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".l8hfgJ91LBOj9w5cMPcmU {\n  width: 64px;\n  height: 64px;\n  cursor: pointer;\n}\n", ""]);

// exports
exports.locals = {
	"CalculatorButton_button": "l8hfgJ91LBOj9w5cMPcmU"
};

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
var Calculator_1 = __webpack_require__(/*! ./components/organisms/Calculator */ "./src/components/organisms/Calculator/index.ts");
/**
 * top level app component
 */
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (preact_1.h("div", null,
            preact_1.h(Calculator_1.default, null)));
    };
    return App;
}(preact_1.Component));
exports.default = App;


/***/ }),

/***/ "./src/client.tsx":
/*!************************!*\
  !*** ./src/client.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
var App_1 = __webpack_require__(/*! ./App */ "./src/App.tsx");
preact_1.render(preact_1.h(App_1.default, null), document.getElementById('app'));


/***/ }),

/***/ "./src/components/atoms/Button/Button.tsx":
/*!************************************************!*\
  !*** ./src/components/atoms/Button/Button.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var cx = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
exports.Button = function (props) {
    var onClick = props.onClick, value = props.value, className = props.className, children = props.children;
    // passess value to the provided onClick function.
    var handleClick = function (e, v) {
        e.preventDefault();
        return onClick(v);
    };
    return (preact_1.h("button", __assign({}, props, { value: value, className: cx(className, 'button'), onClick: function (e) { return handleClick(e, value); } }), children));
};


/***/ }),

/***/ "./src/components/atoms/Button/index.ts":
/*!**********************************************!*\
  !*** ./src/components/atoms/Button/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Button_1 = __webpack_require__(/*! ./Button */ "./src/components/atoms/Button/Button.tsx");
exports.default = Button_1.Button;


/***/ }),

/***/ "./src/components/organisms/Calculator/Calculator.tsx":
/*!************************************************************!*\
  !*** ./src/components/organisms/Calculator/Calculator.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
var CalculatorButtonGrid_1 = __webpack_require__(/*! ./CalculatorButtonGrid */ "./src/components/organisms/Calculator/CalculatorButtonGrid.tsx");
var KeyLayout_1 = __webpack_require__(/*! ./KeyLayout */ "./src/components/organisms/Calculator/KeyLayout.ts");
/**
 * main calculator component
 */
var Calculator = /** @class */ (function (_super) {
    __extends(Calculator, _super);
    function Calculator() {
        var _this = _super.call(this) || this;
        _this.state = {
            slotVisible: 0,
            slotHidden: undefined
        };
        return _this;
    }
    // handles number key input
    Calculator.prototype.handleNumberInput = function (n) {
        // tslint:disable-next-line:no-console
        console.log(n);
    };
    Calculator.prototype.handleOperatorInput = function (label) {
        // tslint:disable-next-line:no-console
        console.log(label);
    };
    Calculator.prototype.handleInput = function (keyItem) {
        switch (keyItem.keyType) {
            case KeyLayout_1.KeyType.NUMBER:
                this.handleNumberInput(keyItem.value);
                break;
            case KeyLayout_1.KeyType.OPERATOR:
                this.handleOperatorInput(keyItem.label);
                break;
            default:
                // tslint:disable-next-line:no-console
                console.log('invalid button');
        }
    };
    Calculator.prototype.render = function () {
        return (preact_1.h("div", null,
            preact_1.h("span", null, this.state.slotVisible),
            preact_1.h(CalculatorButtonGrid_1.CalculatorButtonGrid, { onButtonPress: this.handleInput.bind(this) })));
    };
    return Calculator;
}(preact_1.Component));
exports.Calculator = Calculator;


/***/ }),

/***/ "./src/components/organisms/Calculator/CalculatorButton.css":
/*!******************************************************************!*\
  !*** ./src/components/organisms/Calculator/CalculatorButton.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/typings-for-css-modules-loader/lib??ref--5-1!./CalculatorButton.css */ "./node_modules/typings-for-css-modules-loader/lib/index.js?!./src/components/organisms/Calculator/CalculatorButton.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/organisms/Calculator/CalculatorButton.tsx":
/*!******************************************************************!*\
  !*** ./src/components/organisms/Calculator/CalculatorButton.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
var Button_1 = __webpack_require__(/*! ../../atoms/Button */ "./src/components/atoms/Button/index.ts");
var s = __webpack_require__(/*! ./CalculatorButton.css */ "./src/components/organisms/Calculator/CalculatorButton.css");
exports.CalculatorButton = function (props) {
    var label = props.label, value = props.value, onClick = props.onClick;
    return (preact_1.h("td", null,
        preact_1.h(Button_1.default, __assign({}, props, { value: value, onClick: onClick, className: s.CalculatorButton_button }), label)));
};


/***/ }),

/***/ "./src/components/organisms/Calculator/CalculatorButtonGrid.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/organisms/Calculator/CalculatorButtonGrid.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
var CalculatorButton_1 = __webpack_require__(/*! ./CalculatorButton */ "./src/components/organisms/Calculator/CalculatorButton.tsx");
var KeyLayout_1 = __webpack_require__(/*! ./KeyLayout */ "./src/components/organisms/Calculator/KeyLayout.ts");
exports.CalculatorButtonGrid = function (props) {
    var onButtonPress = props.onButtonPress;
    return (preact_1.h("table", null, KeyLayout_1.KEY_LAYOUT.map(function (row) {
        return preact_1.h("tr", null, row.map(function (keyItem) {
            return preact_1.h(CalculatorButton_1.CalculatorButton, { label: keyItem.label, value: keyItem.value, onClick: function () { return onButtonPress(keyItem); } });
        }));
    })));
};


/***/ }),

/***/ "./src/components/organisms/Calculator/KeyLayout.ts":
/*!**********************************************************!*\
  !*** ./src/components/organisms/Calculator/KeyLayout.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var K;
(function (K) {
    K[K["KEY_0"] = 0] = "KEY_0";
    K[K["KEY_1"] = 1] = "KEY_1";
    K[K["KEY_2"] = 2] = "KEY_2";
    K[K["KEY_3"] = 3] = "KEY_3";
    K[K["KEY_4"] = 4] = "KEY_4";
    K[K["KEY_5"] = 5] = "KEY_5";
    K[K["KEY_6"] = 6] = "KEY_6";
    K[K["KEY_7"] = 7] = "KEY_7";
    K[K["KEY_8"] = 8] = "KEY_8";
    K[K["KEY_9"] = 9] = "KEY_9";
    K[K["PLUS"] = 10] = "PLUS";
    K[K["MINUS"] = 11] = "MINUS";
    K[K["MULTIPLY"] = 12] = "MULTIPLY";
    K[K["DIVIDE"] = 13] = "DIVIDE";
    K[K["EQUAL"] = 14] = "EQUAL";
    K[K["CLEAR"] = 15] = "CLEAR";
    K[K["PERCENT"] = 16] = "PERCENT";
    K[K["NEGATIVE"] = 17] = "NEGATIVE";
})(K = exports.K || (exports.K = {}));
var KeyType;
(function (KeyType) {
    KeyType[KeyType["NUMBER"] = 0] = "NUMBER";
    KeyType[KeyType["OPERATOR"] = 1] = "OPERATOR";
    KeyType[KeyType["ACTION"] = 2] = "ACTION";
})(KeyType = exports.KeyType || (exports.KeyType = {}));
var createNumberKeys = function () {
    // tslint:disable-next-line:no-object-literal-type-assertion
    var keys = {};
    for (var i = 0; i < 10; i++) {
        var keyName = K["KEY_" + i];
        keys[keyName] = {
            name: keyName,
            keyType: KeyType.NUMBER,
            label: String(i),
            value: i,
            keyCode: i + 48
        };
    }
    return keys;
};
exports.KEYS = __assign({}, createNumberKeys(), (_a = {}, _a[K.PLUS] = { name: K.PLUS, keyType: KeyType.OPERATOR, label: '+', keyCode: 187 }, _a[K.MINUS] = { name: K.MINUS, keyType: KeyType.OPERATOR, label: '-', keyCode: 189 }, _a[K.MULTIPLY] = { name: K.MULTIPLY, keyType: KeyType.OPERATOR, label: '×', keyCode: 186 }, _a[K.DIVIDE] = { name: K.DIVIDE, keyType: KeyType.OPERATOR, label: '÷', keyCode: 191 }, _a[K.EQUAL] = { name: K.EQUAL, keyType: KeyType.ACTION, label: '=', keyCode: 187 }, _a[K.CLEAR] = { name: K.CLEAR, keyType: KeyType.ACTION, label: 'C', keyCode: 8 }, _a[K.PERCENT] = { name: K.PERCENT, keyType: KeyType.ACTION, label: '%', keyCode: 53 }, _a[K.NEGATIVE] = { name: K.NEGATIVE, keyType: KeyType.ACTION, label: '+/-', keyCode: 82 }, _a));
exports.KEY_LAYOUT = [
    [exports.KEYS[K.CLEAR], exports.KEYS[K.NEGATIVE], exports.KEYS[K.PERCENT], exports.KEYS[K.DIVIDE]],
    [exports.KEYS[K.KEY_7], exports.KEYS[K.KEY_8], exports.KEYS[K.KEY_9], exports.KEYS[K.MULTIPLY]],
    [exports.KEYS[K.KEY_4], exports.KEYS[K.KEY_5], exports.KEYS[K.KEY_6], exports.KEYS[K.MINUS]],
    [exports.KEYS[K.KEY_3], exports.KEYS[K.KEY_2], exports.KEYS[K.KEY_1], exports.KEYS[K.PLUS]],
    [exports.KEYS[K.KEY_0], exports.KEYS[K.EQUAL]]
];


/***/ }),

/***/ "./src/components/organisms/Calculator/index.ts":
/*!******************************************************!*\
  !*** ./src/components/organisms/Calculator/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Calculator_1 = __webpack_require__(/*! ./Calculator */ "./src/components/organisms/Calculator/Calculator.tsx");
exports.default = Calculator_1.Calculator;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYWxjdWxhdG9yL0NhbGN1bGF0b3JCdXR0b24uY3NzIiwid2VicGFjazovLy8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL0J1dHRvbi9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL0J1dHRvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FsY3VsYXRvci9DYWxjdWxhdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FsY3VsYXRvci9DYWxjdWxhdG9yQnV0dG9uLmNzcz83MTI0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYWxjdWxhdG9yL0NhbGN1bGF0b3JCdXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYWxjdWxhdG9yL0NhbGN1bGF0b3JCdXR0b25HcmlkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FsY3VsYXRvci9LZXlMYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhbGN1bGF0b3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQjs7QUFFaEI7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEtBQUssS0FBNkI7QUFDbEM7QUFDQTtBQUNBLEVBQUUsVUFBVSxJQUE0RTtBQUN4RjtBQUNBLEVBQUUsaUNBQXFCLEVBQUUsbUNBQUU7QUFDM0I7QUFDQSxHQUFHO0FBQUEsb0dBQUM7QUFDSixFQUFFLE1BQU0sRUFFTjtBQUNGLENBQUM7Ozs7Ozs7Ozs7OztBQ25ERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjOztBQUVsRTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsS0FBSztBQUM5QjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0Esa0NBQWtDLDBEQUEwRDtBQUM1Rjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBOztBQUVBOztBQUVBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLEVBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0Esc0ZBQXNGO0FBQ3RGLEdBQUc7QUFDSCwwRkFBMEY7QUFDMUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEMsS0FBSztBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixVQUFVO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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LENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFLLFlBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQyxZQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFHLFlBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDaEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDckRGLG1IQUFxRDtBQUE1Qyx5Q0FBVSxDQUFXIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jbGllbnQudHN4XCIpO1xuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwidmFyIFZOb2RlID0gZnVuY3Rpb24gVk5vZGUoKSB7fTtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxudmFyIHN0YWNrID0gW107XG5cbnZhciBFTVBUWV9DSElMRFJFTiA9IFtdO1xuXG5mdW5jdGlvbiBoKG5vZGVOYW1lLCBhdHRyaWJ1dGVzKSB7XG5cdHZhciBjaGlsZHJlbiA9IEVNUFRZX0NISUxEUkVOLFxuXHQgICAgbGFzdFNpbXBsZSxcblx0ICAgIGNoaWxkLFxuXHQgICAgc2ltcGxlLFxuXHQgICAgaTtcblx0Zm9yIChpID0gYXJndW1lbnRzLmxlbmd0aDsgaS0tID4gMjspIHtcblx0XHRzdGFjay5wdXNoKGFyZ3VtZW50c1tpXSk7XG5cdH1cblx0aWYgKGF0dHJpYnV0ZXMgJiYgYXR0cmlidXRlcy5jaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0aWYgKCFzdGFjay5sZW5ndGgpIHN0YWNrLnB1c2goYXR0cmlidXRlcy5jaGlsZHJlbik7XG5cdFx0ZGVsZXRlIGF0dHJpYnV0ZXMuY2hpbGRyZW47XG5cdH1cblx0d2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuXHRcdGlmICgoY2hpbGQgPSBzdGFjay5wb3AoKSkgJiYgY2hpbGQucG9wICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGZvciAoaSA9IGNoaWxkLmxlbmd0aDsgaS0tOykge1xuXHRcdFx0XHRzdGFjay5wdXNoKGNoaWxkW2ldKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiBjaGlsZCA9PT0gJ2Jvb2xlYW4nKSBjaGlsZCA9IG51bGw7XG5cblx0XHRcdGlmIChzaW1wbGUgPSB0eXBlb2Ygbm9kZU5hbWUgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aWYgKGNoaWxkID09IG51bGwpIGNoaWxkID0gJyc7ZWxzZSBpZiAodHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykgY2hpbGQgPSBTdHJpbmcoY2hpbGQpO2Vsc2UgaWYgKHR5cGVvZiBjaGlsZCAhPT0gJ3N0cmluZycpIHNpbXBsZSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2ltcGxlICYmIGxhc3RTaW1wbGUpIHtcblx0XHRcdFx0Y2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gMV0gKz0gY2hpbGQ7XG5cdFx0XHR9IGVsc2UgaWYgKGNoaWxkcmVuID09PSBFTVBUWV9DSElMRFJFTikge1xuXHRcdFx0XHRjaGlsZHJlbiA9IFtjaGlsZF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjaGlsZHJlbi5wdXNoKGNoaWxkKTtcblx0XHRcdH1cblxuXHRcdFx0bGFzdFNpbXBsZSA9IHNpbXBsZTtcblx0XHR9XG5cdH1cblxuXHR2YXIgcCA9IG5ldyBWTm9kZSgpO1xuXHRwLm5vZGVOYW1lID0gbm9kZU5hbWU7XG5cdHAuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0cC5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcyA9PSBudWxsID8gdW5kZWZpbmVkIDogYXR0cmlidXRlcztcblx0cC5rZXkgPSBhdHRyaWJ1dGVzID09IG51bGwgPyB1bmRlZmluZWQgOiBhdHRyaWJ1dGVzLmtleTtcblxuXHRpZiAob3B0aW9ucy52bm9kZSAhPT0gdW5kZWZpbmVkKSBvcHRpb25zLnZub2RlKHApO1xuXG5cdHJldHVybiBwO1xufVxuXG5mdW5jdGlvbiBleHRlbmQob2JqLCBwcm9wcykge1xuICBmb3IgKHZhciBpIGluIHByb3BzKSB7XG4gICAgb2JqW2ldID0gcHJvcHNbaV07XG4gIH1yZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBhcHBseVJlZihyZWYsIHZhbHVlKSB7XG4gIGlmIChyZWYgIT0gbnVsbCkge1xuICAgIGlmICh0eXBlb2YgcmVmID09ICdmdW5jdGlvbicpIHJlZih2YWx1ZSk7ZWxzZSByZWYuY3VycmVudCA9IHZhbHVlO1xuICB9XG59XG5cbnZhciBkZWZlciA9IHR5cGVvZiBQcm9taXNlID09ICdmdW5jdGlvbicgPyBQcm9taXNlLnJlc29sdmUoKS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpIDogc2V0VGltZW91dDtcblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KHZub2RlLCBwcm9wcykge1xuICByZXR1cm4gaCh2bm9kZS5ub2RlTmFtZSwgZXh0ZW5kKGV4dGVuZCh7fSwgdm5vZGUuYXR0cmlidXRlcyksIHByb3BzKSwgYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiB2bm9kZS5jaGlsZHJlbik7XG59XG5cbnZhciBJU19OT05fRElNRU5TSU9OQUwgPSAvYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmQvaTtcblxudmFyIGl0ZW1zID0gW107XG5cbmZ1bmN0aW9uIGVucXVldWVSZW5kZXIoY29tcG9uZW50KSB7XG5cdGlmICghY29tcG9uZW50Ll9kaXJ0eSAmJiAoY29tcG9uZW50Ll9kaXJ0eSA9IHRydWUpICYmIGl0ZW1zLnB1c2goY29tcG9uZW50KSA9PSAxKSB7XG5cdFx0KG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmcgfHwgZGVmZXIpKHJlcmVuZGVyKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZXJlbmRlcigpIHtcblx0dmFyIHA7XG5cdHdoaWxlIChwID0gaXRlbXMucG9wKCkpIHtcblx0XHRpZiAocC5fZGlydHkpIHJlbmRlckNvbXBvbmVudChwKTtcblx0fVxufVxuXG5mdW5jdGlvbiBpc1NhbWVOb2RlVHlwZShub2RlLCB2bm9kZSwgaHlkcmF0aW5nKSB7XG5cdGlmICh0eXBlb2Ygdm5vZGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2bm9kZSA9PT0gJ251bWJlcicpIHtcblx0XHRyZXR1cm4gbm9kZS5zcGxpdFRleHQgIT09IHVuZGVmaW5lZDtcblx0fVxuXHRpZiAodHlwZW9mIHZub2RlLm5vZGVOYW1lID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiAhbm9kZS5fY29tcG9uZW50Q29uc3RydWN0b3IgJiYgaXNOYW1lZE5vZGUobm9kZSwgdm5vZGUubm9kZU5hbWUpO1xuXHR9XG5cdHJldHVybiBoeWRyYXRpbmcgfHwgbm9kZS5fY29tcG9uZW50Q29uc3RydWN0b3IgPT09IHZub2RlLm5vZGVOYW1lO1xufVxuXG5mdW5jdGlvbiBpc05hbWVkTm9kZShub2RlLCBub2RlTmFtZSkge1xuXHRyZXR1cm4gbm9kZS5ub3JtYWxpemVkTm9kZU5hbWUgPT09IG5vZGVOYW1lIHx8IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9kZVByb3BzKHZub2RlKSB7XG5cdHZhciBwcm9wcyA9IGV4dGVuZCh7fSwgdm5vZGUuYXR0cmlidXRlcyk7XG5cdHByb3BzLmNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG5cblx0dmFyIGRlZmF1bHRQcm9wcyA9IHZub2RlLm5vZGVOYW1lLmRlZmF1bHRQcm9wcztcblx0aWYgKGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Zm9yICh2YXIgaSBpbiBkZWZhdWx0UHJvcHMpIHtcblx0XHRcdGlmIChwcm9wc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHByb3BzW2ldID0gZGVmYXVsdFByb3BzW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBwcm9wcztcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm9kZShub2RlTmFtZSwgaXNTdmcpIHtcblx0dmFyIG5vZGUgPSBpc1N2ZyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBub2RlTmFtZSkgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKTtcblx0bm9kZS5ub3JtYWxpemVkTm9kZU5hbWUgPSBub2RlTmFtZTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuXHR2YXIgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblx0aWYgKHBhcmVudE5vZGUpIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIHNldEFjY2Vzc29yKG5vZGUsIG5hbWUsIG9sZCwgdmFsdWUsIGlzU3ZnKSB7XG5cdGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykgbmFtZSA9ICdjbGFzcyc7XG5cblx0aWYgKG5hbWUgPT09ICdrZXknKSB7fSBlbHNlIGlmIChuYW1lID09PSAncmVmJykge1xuXHRcdGFwcGx5UmVmKG9sZCwgbnVsbCk7XG5cdFx0YXBwbHlSZWYodmFsdWUsIG5vZGUpO1xuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICdjbGFzcycgJiYgIWlzU3ZnKSB7XG5cdFx0bm9kZS5jbGFzc05hbWUgPSB2YWx1ZSB8fCAnJztcblx0fSBlbHNlIGlmIChuYW1lID09PSAnc3R5bGUnKSB7XG5cdFx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBvbGQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRub2RlLnN0eWxlLmNzc1RleHQgPSB2YWx1ZSB8fCAnJztcblx0XHR9XG5cdFx0aWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGlmICh0eXBlb2Ygb2xkICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIG9sZCkge1xuXHRcdFx0XHRcdGlmICghKGkgaW4gdmFsdWUpKSBub2RlLnN0eWxlW2ldID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGkgaW4gdmFsdWUpIHtcblx0XHRcdFx0bm9kZS5zdHlsZVtpXSA9IHR5cGVvZiB2YWx1ZVtpXSA9PT0gJ251bWJlcicgJiYgSVNfTk9OX0RJTUVOU0lPTkFMLnRlc3QoaSkgPT09IGZhbHNlID8gdmFsdWVbaV0gKyAncHgnIDogdmFsdWVbaV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcblx0XHRpZiAodmFsdWUpIG5vZGUuaW5uZXJIVE1MID0gdmFsdWUuX19odG1sIHx8ICcnO1xuXHR9IGVsc2UgaWYgKG5hbWVbMF0gPT0gJ28nICYmIG5hbWVbMV0gPT0gJ24nKSB7XG5cdFx0dmFyIHVzZUNhcHR1cmUgPSBuYW1lICE9PSAobmFtZSA9IG5hbWUucmVwbGFjZSgvQ2FwdHVyZSQvLCAnJykpO1xuXHRcdG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkuc3Vic3RyaW5nKDIpO1xuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0aWYgKCFvbGQpIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBldmVudFByb3h5LCB1c2VDYXB0dXJlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGV2ZW50UHJveHksIHVzZUNhcHR1cmUpO1xuXHRcdH1cblx0XHQobm9kZS5fbGlzdGVuZXJzIHx8IChub2RlLl9saXN0ZW5lcnMgPSB7fSkpW25hbWVdID0gdmFsdWU7XG5cdH0gZWxzZSBpZiAobmFtZSAhPT0gJ2xpc3QnICYmIG5hbWUgIT09ICd0eXBlJyAmJiAhaXNTdmcgJiYgbmFtZSBpbiBub2RlKSB7XG5cdFx0dHJ5IHtcblx0XHRcdG5vZGVbbmFtZV0gPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdGlmICgodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpICYmIG5hbWUgIT0gJ3NwZWxsY2hlY2snKSBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgbnMgPSBpc1N2ZyAmJiBuYW1lICE9PSAobmFtZSA9IG5hbWUucmVwbGFjZSgvXnhsaW5rOj8vLCAnJykpO1xuXG5cdFx0aWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHRpZiAobnMpIG5vZGUucmVtb3ZlQXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBuYW1lLnRvTG93ZXJDYXNlKCkpO2Vsc2Ugbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGlmIChucykgbm9kZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIG5hbWUudG9Mb3dlckNhc2UoKSwgdmFsdWUpO2Vsc2Ugbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBldmVudFByb3h5KGUpIHtcblx0cmV0dXJuIHRoaXMuX2xpc3RlbmVyc1tlLnR5cGVdKG9wdGlvbnMuZXZlbnQgJiYgb3B0aW9ucy5ldmVudChlKSB8fCBlKTtcbn1cblxudmFyIG1vdW50cyA9IFtdO1xuXG52YXIgZGlmZkxldmVsID0gMDtcblxudmFyIGlzU3ZnTW9kZSA9IGZhbHNlO1xuXG52YXIgaHlkcmF0aW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGZsdXNoTW91bnRzKCkge1xuXHR2YXIgYztcblx0d2hpbGUgKGMgPSBtb3VudHMuc2hpZnQoKSkge1xuXHRcdGlmIChvcHRpb25zLmFmdGVyTW91bnQpIG9wdGlvbnMuYWZ0ZXJNb3VudChjKTtcblx0XHRpZiAoYy5jb21wb25lbnREaWRNb3VudCkgYy5jb21wb25lbnREaWRNb3VudCgpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRpZmYoZG9tLCB2bm9kZSwgY29udGV4dCwgbW91bnRBbGwsIHBhcmVudCwgY29tcG9uZW50Um9vdCkge1xuXHRpZiAoIWRpZmZMZXZlbCsrKSB7XG5cdFx0aXNTdmdNb2RlID0gcGFyZW50ICE9IG51bGwgJiYgcGFyZW50Lm93bmVyU1ZHRWxlbWVudCAhPT0gdW5kZWZpbmVkO1xuXG5cdFx0aHlkcmF0aW5nID0gZG9tICE9IG51bGwgJiYgISgnX19wcmVhY3RhdHRyXycgaW4gZG9tKTtcblx0fVxuXG5cdHZhciByZXQgPSBpZGlmZihkb20sIHZub2RlLCBjb250ZXh0LCBtb3VudEFsbCwgY29tcG9uZW50Um9vdCk7XG5cblx0aWYgKHBhcmVudCAmJiByZXQucGFyZW50Tm9kZSAhPT0gcGFyZW50KSBwYXJlbnQuYXBwZW5kQ2hpbGQocmV0KTtcblxuXHRpZiAoISAtLWRpZmZMZXZlbCkge1xuXHRcdGh5ZHJhdGluZyA9IGZhbHNlO1xuXG5cdFx0aWYgKCFjb21wb25lbnRSb290KSBmbHVzaE1vdW50cygpO1xuXHR9XG5cblx0cmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gaWRpZmYoZG9tLCB2bm9kZSwgY29udGV4dCwgbW91bnRBbGwsIGNvbXBvbmVudFJvb3QpIHtcblx0dmFyIG91dCA9IGRvbSxcblx0ICAgIHByZXZTdmdNb2RlID0gaXNTdmdNb2RlO1xuXG5cdGlmICh2bm9kZSA9PSBudWxsIHx8IHR5cGVvZiB2bm9kZSA9PT0gJ2Jvb2xlYW4nKSB2bm9kZSA9ICcnO1xuXG5cdGlmICh0eXBlb2Ygdm5vZGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2bm9kZSA9PT0gJ251bWJlcicpIHtcblx0XHRpZiAoZG9tICYmIGRvbS5zcGxpdFRleHQgIT09IHVuZGVmaW5lZCAmJiBkb20ucGFyZW50Tm9kZSAmJiAoIWRvbS5fY29tcG9uZW50IHx8IGNvbXBvbmVudFJvb3QpKSB7XG5cdFx0XHRpZiAoZG9tLm5vZGVWYWx1ZSAhPSB2bm9kZSkge1xuXHRcdFx0XHRkb20ubm9kZVZhbHVlID0gdm5vZGU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdG91dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZub2RlKTtcblx0XHRcdGlmIChkb20pIHtcblx0XHRcdFx0aWYgKGRvbS5wYXJlbnROb2RlKSBkb20ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQob3V0LCBkb20pO1xuXHRcdFx0XHRyZWNvbGxlY3ROb2RlVHJlZShkb20sIHRydWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG91dFsnX19wcmVhY3RhdHRyXyddID0gdHJ1ZTtcblxuXHRcdHJldHVybiBvdXQ7XG5cdH1cblxuXHR2YXIgdm5vZGVOYW1lID0gdm5vZGUubm9kZU5hbWU7XG5cdGlmICh0eXBlb2Ygdm5vZGVOYW1lID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIGJ1aWxkQ29tcG9uZW50RnJvbVZOb2RlKGRvbSwgdm5vZGUsIGNvbnRleHQsIG1vdW50QWxsKTtcblx0fVxuXG5cdGlzU3ZnTW9kZSA9IHZub2RlTmFtZSA9PT0gJ3N2ZycgPyB0cnVlIDogdm5vZGVOYW1lID09PSAnZm9yZWlnbk9iamVjdCcgPyBmYWxzZSA6IGlzU3ZnTW9kZTtcblxuXHR2bm9kZU5hbWUgPSBTdHJpbmcodm5vZGVOYW1lKTtcblx0aWYgKCFkb20gfHwgIWlzTmFtZWROb2RlKGRvbSwgdm5vZGVOYW1lKSkge1xuXHRcdG91dCA9IGNyZWF0ZU5vZGUodm5vZGVOYW1lLCBpc1N2Z01vZGUpO1xuXG5cdFx0aWYgKGRvbSkge1xuXHRcdFx0d2hpbGUgKGRvbS5maXJzdENoaWxkKSB7XG5cdFx0XHRcdG91dC5hcHBlbmRDaGlsZChkb20uZmlyc3RDaGlsZCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9tLnBhcmVudE5vZGUpIGRvbS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChvdXQsIGRvbSk7XG5cblx0XHRcdHJlY29sbGVjdE5vZGVUcmVlKGRvbSwgdHJ1ZSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIGZjID0gb3V0LmZpcnN0Q2hpbGQsXG5cdCAgICBwcm9wcyA9IG91dFsnX19wcmVhY3RhdHRyXyddLFxuXHQgICAgdmNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG5cblx0aWYgKHByb3BzID09IG51bGwpIHtcblx0XHRwcm9wcyA9IG91dFsnX19wcmVhY3RhdHRyXyddID0ge307XG5cdFx0Zm9yICh2YXIgYSA9IG91dC5hdHRyaWJ1dGVzLCBpID0gYS5sZW5ndGg7IGktLTspIHtcblx0XHRcdHByb3BzW2FbaV0ubmFtZV0gPSBhW2ldLnZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdGlmICghaHlkcmF0aW5nICYmIHZjaGlsZHJlbiAmJiB2Y2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIHR5cGVvZiB2Y2hpbGRyZW5bMF0gPT09ICdzdHJpbmcnICYmIGZjICE9IG51bGwgJiYgZmMuc3BsaXRUZXh0ICE9PSB1bmRlZmluZWQgJiYgZmMubmV4dFNpYmxpbmcgPT0gbnVsbCkge1xuXHRcdGlmIChmYy5ub2RlVmFsdWUgIT0gdmNoaWxkcmVuWzBdKSB7XG5cdFx0XHRmYy5ub2RlVmFsdWUgPSB2Y2hpbGRyZW5bMF07XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHZjaGlsZHJlbiAmJiB2Y2hpbGRyZW4ubGVuZ3RoIHx8IGZjICE9IG51bGwpIHtcblx0XHRcdGlubmVyRGlmZk5vZGUob3V0LCB2Y2hpbGRyZW4sIGNvbnRleHQsIG1vdW50QWxsLCBoeWRyYXRpbmcgfHwgcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgIT0gbnVsbCk7XG5cdFx0fVxuXG5cdGRpZmZBdHRyaWJ1dGVzKG91dCwgdm5vZGUuYXR0cmlidXRlcywgcHJvcHMpO1xuXG5cdGlzU3ZnTW9kZSA9IHByZXZTdmdNb2RlO1xuXG5cdHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGlubmVyRGlmZk5vZGUoZG9tLCB2Y2hpbGRyZW4sIGNvbnRleHQsIG1vdW50QWxsLCBpc0h5ZHJhdGluZykge1xuXHR2YXIgb3JpZ2luYWxDaGlsZHJlbiA9IGRvbS5jaGlsZE5vZGVzLFxuXHQgICAgY2hpbGRyZW4gPSBbXSxcblx0ICAgIGtleWVkID0ge30sXG5cdCAgICBrZXllZExlbiA9IDAsXG5cdCAgICBtaW4gPSAwLFxuXHQgICAgbGVuID0gb3JpZ2luYWxDaGlsZHJlbi5sZW5ndGgsXG5cdCAgICBjaGlsZHJlbkxlbiA9IDAsXG5cdCAgICB2bGVuID0gdmNoaWxkcmVuID8gdmNoaWxkcmVuLmxlbmd0aCA6IDAsXG5cdCAgICBqLFxuXHQgICAgYyxcblx0ICAgIGYsXG5cdCAgICB2Y2hpbGQsXG5cdCAgICBjaGlsZDtcblxuXHRpZiAobGVuICE9PSAwKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dmFyIF9jaGlsZCA9IG9yaWdpbmFsQ2hpbGRyZW5baV0sXG5cdFx0XHQgICAgcHJvcHMgPSBfY2hpbGRbJ19fcHJlYWN0YXR0cl8nXSxcblx0XHRcdCAgICBrZXkgPSB2bGVuICYmIHByb3BzID8gX2NoaWxkLl9jb21wb25lbnQgPyBfY2hpbGQuX2NvbXBvbmVudC5fX2tleSA6IHByb3BzLmtleSA6IG51bGw7XG5cdFx0XHRpZiAoa2V5ICE9IG51bGwpIHtcblx0XHRcdFx0a2V5ZWRMZW4rKztcblx0XHRcdFx0a2V5ZWRba2V5XSA9IF9jaGlsZDtcblx0XHRcdH0gZWxzZSBpZiAocHJvcHMgfHwgKF9jaGlsZC5zcGxpdFRleHQgIT09IHVuZGVmaW5lZCA/IGlzSHlkcmF0aW5nID8gX2NoaWxkLm5vZGVWYWx1ZS50cmltKCkgOiB0cnVlIDogaXNIeWRyYXRpbmcpKSB7XG5cdFx0XHRcdGNoaWxkcmVuW2NoaWxkcmVuTGVuKytdID0gX2NoaWxkO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICh2bGVuICE9PSAwKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2bGVuOyBpKyspIHtcblx0XHRcdHZjaGlsZCA9IHZjaGlsZHJlbltpXTtcblx0XHRcdGNoaWxkID0gbnVsbDtcblxuXHRcdFx0dmFyIGtleSA9IHZjaGlsZC5rZXk7XG5cdFx0XHRpZiAoa2V5ICE9IG51bGwpIHtcblx0XHRcdFx0aWYgKGtleWVkTGVuICYmIGtleWVkW2tleV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGNoaWxkID0ga2V5ZWRba2V5XTtcblx0XHRcdFx0XHRrZXllZFtrZXldID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdGtleWVkTGVuLS07XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAobWluIDwgY2hpbGRyZW5MZW4pIHtcblx0XHRcdFx0XHRmb3IgKGogPSBtaW47IGogPCBjaGlsZHJlbkxlbjsgaisrKSB7XG5cdFx0XHRcdFx0XHRpZiAoY2hpbGRyZW5bal0gIT09IHVuZGVmaW5lZCAmJiBpc1NhbWVOb2RlVHlwZShjID0gY2hpbGRyZW5bal0sIHZjaGlsZCwgaXNIeWRyYXRpbmcpKSB7XG5cdFx0XHRcdFx0XHRcdGNoaWxkID0gYztcblx0XHRcdFx0XHRcdFx0Y2hpbGRyZW5bal0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmIChqID09PSBjaGlsZHJlbkxlbiAtIDEpIGNoaWxkcmVuTGVuLS07XG5cdFx0XHRcdFx0XHRcdGlmIChqID09PSBtaW4pIG1pbisrO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0Y2hpbGQgPSBpZGlmZihjaGlsZCwgdmNoaWxkLCBjb250ZXh0LCBtb3VudEFsbCk7XG5cblx0XHRcdGYgPSBvcmlnaW5hbENoaWxkcmVuW2ldO1xuXHRcdFx0aWYgKGNoaWxkICYmIGNoaWxkICE9PSBkb20gJiYgY2hpbGQgIT09IGYpIHtcblx0XHRcdFx0aWYgKGYgPT0gbnVsbCkge1xuXHRcdFx0XHRcdGRvbS5hcHBlbmRDaGlsZChjaGlsZCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hpbGQgPT09IGYubmV4dFNpYmxpbmcpIHtcblx0XHRcdFx0XHRyZW1vdmVOb2RlKGYpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRvbS5pbnNlcnRCZWZvcmUoY2hpbGQsIGYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKGtleWVkTGVuKSB7XG5cdFx0Zm9yICh2YXIgaSBpbiBrZXllZCkge1xuXHRcdFx0aWYgKGtleWVkW2ldICE9PSB1bmRlZmluZWQpIHJlY29sbGVjdE5vZGVUcmVlKGtleWVkW2ldLCBmYWxzZSk7XG5cdFx0fVxuXHR9XG5cblx0d2hpbGUgKG1pbiA8PSBjaGlsZHJlbkxlbikge1xuXHRcdGlmICgoY2hpbGQgPSBjaGlsZHJlbltjaGlsZHJlbkxlbi0tXSkgIT09IHVuZGVmaW5lZCkgcmVjb2xsZWN0Tm9kZVRyZWUoY2hpbGQsIGZhbHNlKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWNvbGxlY3ROb2RlVHJlZShub2RlLCB1bm1vdW50T25seSkge1xuXHR2YXIgY29tcG9uZW50ID0gbm9kZS5fY29tcG9uZW50O1xuXHRpZiAoY29tcG9uZW50KSB7XG5cdFx0dW5tb3VudENvbXBvbmVudChjb21wb25lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdGlmIChub2RlWydfX3ByZWFjdGF0dHJfJ10gIT0gbnVsbCkgYXBwbHlSZWYobm9kZVsnX19wcmVhY3RhdHRyXyddLnJlZiwgbnVsbCk7XG5cblx0XHRpZiAodW5tb3VudE9ubHkgPT09IGZhbHNlIHx8IG5vZGVbJ19fcHJlYWN0YXR0cl8nXSA9PSBudWxsKSB7XG5cdFx0XHRyZW1vdmVOb2RlKG5vZGUpO1xuXHRcdH1cblxuXHRcdHJlbW92ZUNoaWxkcmVuKG5vZGUpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkcmVuKG5vZGUpIHtcblx0bm9kZSA9IG5vZGUubGFzdENoaWxkO1xuXHR3aGlsZSAobm9kZSkge1xuXHRcdHZhciBuZXh0ID0gbm9kZS5wcmV2aW91c1NpYmxpbmc7XG5cdFx0cmVjb2xsZWN0Tm9kZVRyZWUobm9kZSwgdHJ1ZSk7XG5cdFx0bm9kZSA9IG5leHQ7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGlmZkF0dHJpYnV0ZXMoZG9tLCBhdHRycywgb2xkKSB7XG5cdHZhciBuYW1lO1xuXG5cdGZvciAobmFtZSBpbiBvbGQpIHtcblx0XHRpZiAoIShhdHRycyAmJiBhdHRyc1tuYW1lXSAhPSBudWxsKSAmJiBvbGRbbmFtZV0gIT0gbnVsbCkge1xuXHRcdFx0c2V0QWNjZXNzb3IoZG9tLCBuYW1lLCBvbGRbbmFtZV0sIG9sZFtuYW1lXSA9IHVuZGVmaW5lZCwgaXNTdmdNb2RlKTtcblx0XHR9XG5cdH1cblxuXHRmb3IgKG5hbWUgaW4gYXR0cnMpIHtcblx0XHRpZiAobmFtZSAhPT0gJ2NoaWxkcmVuJyAmJiBuYW1lICE9PSAnaW5uZXJIVE1MJyAmJiAoIShuYW1lIGluIG9sZCkgfHwgYXR0cnNbbmFtZV0gIT09IChuYW1lID09PSAndmFsdWUnIHx8IG5hbWUgPT09ICdjaGVja2VkJyA/IGRvbVtuYW1lXSA6IG9sZFtuYW1lXSkpKSB7XG5cdFx0XHRzZXRBY2Nlc3Nvcihkb20sIG5hbWUsIG9sZFtuYW1lXSwgb2xkW25hbWVdID0gYXR0cnNbbmFtZV0sIGlzU3ZnTW9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbnZhciByZWN5Y2xlckNvbXBvbmVudHMgPSBbXTtcblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KEN0b3IsIHByb3BzLCBjb250ZXh0KSB7XG5cdHZhciBpbnN0LFxuXHQgICAgaSA9IHJlY3ljbGVyQ29tcG9uZW50cy5sZW5ndGg7XG5cblx0aWYgKEN0b3IucHJvdG90eXBlICYmIEN0b3IucHJvdG90eXBlLnJlbmRlcikge1xuXHRcdGluc3QgPSBuZXcgQ3Rvcihwcm9wcywgY29udGV4dCk7XG5cdFx0Q29tcG9uZW50LmNhbGwoaW5zdCwgcHJvcHMsIGNvbnRleHQpO1xuXHR9IGVsc2Uge1xuXHRcdGluc3QgPSBuZXcgQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KTtcblx0XHRpbnN0LmNvbnN0cnVjdG9yID0gQ3Rvcjtcblx0XHRpbnN0LnJlbmRlciA9IGRvUmVuZGVyO1xuXHR9XG5cblx0d2hpbGUgKGktLSkge1xuXHRcdGlmIChyZWN5Y2xlckNvbXBvbmVudHNbaV0uY29uc3RydWN0b3IgPT09IEN0b3IpIHtcblx0XHRcdGluc3QubmV4dEJhc2UgPSByZWN5Y2xlckNvbXBvbmVudHNbaV0ubmV4dEJhc2U7XG5cdFx0XHRyZWN5Y2xlckNvbXBvbmVudHMuc3BsaWNlKGksIDEpO1xuXHRcdFx0cmV0dXJuIGluc3Q7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGluc3Q7XG59XG5cbmZ1bmN0aW9uIGRvUmVuZGVyKHByb3BzLCBzdGF0ZSwgY29udGV4dCkge1xuXHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIHNldENvbXBvbmVudFByb3BzKGNvbXBvbmVudCwgcHJvcHMsIHJlbmRlck1vZGUsIGNvbnRleHQsIG1vdW50QWxsKSB7XG5cdGlmIChjb21wb25lbnQuX2Rpc2FibGUpIHJldHVybjtcblx0Y29tcG9uZW50Ll9kaXNhYmxlID0gdHJ1ZTtcblxuXHRjb21wb25lbnQuX19yZWYgPSBwcm9wcy5yZWY7XG5cdGNvbXBvbmVudC5fX2tleSA9IHByb3BzLmtleTtcblx0ZGVsZXRlIHByb3BzLnJlZjtcblx0ZGVsZXRlIHByb3BzLmtleTtcblxuXHRpZiAodHlwZW9mIGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0aWYgKCFjb21wb25lbnQuYmFzZSB8fCBtb3VudEFsbCkge1xuXHRcdFx0aWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsTW91bnQpIGNvbXBvbmVudC5jb21wb25lbnRXaWxsTW91bnQoKTtcblx0XHR9IGVsc2UgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKSB7XG5cdFx0XHRjb21wb25lbnQuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcywgY29udGV4dCk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKGNvbnRleHQgJiYgY29udGV4dCAhPT0gY29tcG9uZW50LmNvbnRleHQpIHtcblx0XHRpZiAoIWNvbXBvbmVudC5wcmV2Q29udGV4dCkgY29tcG9uZW50LnByZXZDb250ZXh0ID0gY29tcG9uZW50LmNvbnRleHQ7XG5cdFx0Y29tcG9uZW50LmNvbnRleHQgPSBjb250ZXh0O1xuXHR9XG5cblx0aWYgKCFjb21wb25lbnQucHJldlByb3BzKSBjb21wb25lbnQucHJldlByb3BzID0gY29tcG9uZW50LnByb3BzO1xuXHRjb21wb25lbnQucHJvcHMgPSBwcm9wcztcblxuXHRjb21wb25lbnQuX2Rpc2FibGUgPSBmYWxzZTtcblxuXHRpZiAocmVuZGVyTW9kZSAhPT0gMCkge1xuXHRcdGlmIChyZW5kZXJNb2RlID09PSAxIHx8IG9wdGlvbnMuc3luY0NvbXBvbmVudFVwZGF0ZXMgIT09IGZhbHNlIHx8ICFjb21wb25lbnQuYmFzZSkge1xuXHRcdFx0cmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgMSwgbW91bnRBbGwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbnF1ZXVlUmVuZGVyKGNvbXBvbmVudCk7XG5cdFx0fVxuXHR9XG5cblx0YXBwbHlSZWYoY29tcG9uZW50Ll9fcmVmLCBjb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCByZW5kZXJNb2RlLCBtb3VudEFsbCwgaXNDaGlsZCkge1xuXHRpZiAoY29tcG9uZW50Ll9kaXNhYmxlKSByZXR1cm47XG5cblx0dmFyIHByb3BzID0gY29tcG9uZW50LnByb3BzLFxuXHQgICAgc3RhdGUgPSBjb21wb25lbnQuc3RhdGUsXG5cdCAgICBjb250ZXh0ID0gY29tcG9uZW50LmNvbnRleHQsXG5cdCAgICBwcmV2aW91c1Byb3BzID0gY29tcG9uZW50LnByZXZQcm9wcyB8fCBwcm9wcyxcblx0ICAgIHByZXZpb3VzU3RhdGUgPSBjb21wb25lbnQucHJldlN0YXRlIHx8IHN0YXRlLFxuXHQgICAgcHJldmlvdXNDb250ZXh0ID0gY29tcG9uZW50LnByZXZDb250ZXh0IHx8IGNvbnRleHQsXG5cdCAgICBpc1VwZGF0ZSA9IGNvbXBvbmVudC5iYXNlLFxuXHQgICAgbmV4dEJhc2UgPSBjb21wb25lbnQubmV4dEJhc2UsXG5cdCAgICBpbml0aWFsQmFzZSA9IGlzVXBkYXRlIHx8IG5leHRCYXNlLFxuXHQgICAgaW5pdGlhbENoaWxkQ29tcG9uZW50ID0gY29tcG9uZW50Ll9jb21wb25lbnQsXG5cdCAgICBza2lwID0gZmFsc2UsXG5cdCAgICBzbmFwc2hvdCA9IHByZXZpb3VzQ29udGV4dCxcblx0ICAgIHJlbmRlcmVkLFxuXHQgICAgaW5zdCxcblx0ICAgIGNiYXNlO1xuXG5cdGlmIChjb21wb25lbnQuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKSB7XG5cdFx0c3RhdGUgPSBleHRlbmQoZXh0ZW5kKHt9LCBzdGF0ZSksIGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSk7XG5cdFx0Y29tcG9uZW50LnN0YXRlID0gc3RhdGU7XG5cdH1cblxuXHRpZiAoaXNVcGRhdGUpIHtcblx0XHRjb21wb25lbnQucHJvcHMgPSBwcmV2aW91c1Byb3BzO1xuXHRcdGNvbXBvbmVudC5zdGF0ZSA9IHByZXZpb3VzU3RhdGU7XG5cdFx0Y29tcG9uZW50LmNvbnRleHQgPSBwcmV2aW91c0NvbnRleHQ7XG5cdFx0aWYgKHJlbmRlck1vZGUgIT09IDIgJiYgY29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZSAmJiBjb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzLCBzdGF0ZSwgY29udGV4dCkgPT09IGZhbHNlKSB7XG5cdFx0XHRza2lwID0gdHJ1ZTtcblx0XHR9IGVsc2UgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsVXBkYXRlKSB7XG5cdFx0XHRjb21wb25lbnQuY29tcG9uZW50V2lsbFVwZGF0ZShwcm9wcywgc3RhdGUsIGNvbnRleHQpO1xuXHRcdH1cblx0XHRjb21wb25lbnQucHJvcHMgPSBwcm9wcztcblx0XHRjb21wb25lbnQuc3RhdGUgPSBzdGF0ZTtcblx0XHRjb21wb25lbnQuY29udGV4dCA9IGNvbnRleHQ7XG5cdH1cblxuXHRjb21wb25lbnQucHJldlByb3BzID0gY29tcG9uZW50LnByZXZTdGF0ZSA9IGNvbXBvbmVudC5wcmV2Q29udGV4dCA9IGNvbXBvbmVudC5uZXh0QmFzZSA9IG51bGw7XG5cdGNvbXBvbmVudC5fZGlydHkgPSBmYWxzZTtcblxuXHRpZiAoIXNraXApIHtcblx0XHRyZW5kZXJlZCA9IGNvbXBvbmVudC5yZW5kZXIocHJvcHMsIHN0YXRlLCBjb250ZXh0KTtcblxuXHRcdGlmIChjb21wb25lbnQuZ2V0Q2hpbGRDb250ZXh0KSB7XG5cdFx0XHRjb250ZXh0ID0gZXh0ZW5kKGV4dGVuZCh7fSwgY29udGV4dCksIGNvbXBvbmVudC5nZXRDaGlsZENvbnRleHQoKSk7XG5cdFx0fVxuXG5cdFx0aWYgKGlzVXBkYXRlICYmIGNvbXBvbmVudC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSkge1xuXHRcdFx0c25hcHNob3QgPSBjb21wb25lbnQuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUocHJldmlvdXNQcm9wcywgcHJldmlvdXNTdGF0ZSk7XG5cdFx0fVxuXG5cdFx0dmFyIGNoaWxkQ29tcG9uZW50ID0gcmVuZGVyZWQgJiYgcmVuZGVyZWQubm9kZU5hbWUsXG5cdFx0ICAgIHRvVW5tb3VudCxcblx0XHQgICAgYmFzZTtcblxuXHRcdGlmICh0eXBlb2YgY2hpbGRDb21wb25lbnQgPT09ICdmdW5jdGlvbicpIHtcblxuXHRcdFx0dmFyIGNoaWxkUHJvcHMgPSBnZXROb2RlUHJvcHMocmVuZGVyZWQpO1xuXHRcdFx0aW5zdCA9IGluaXRpYWxDaGlsZENvbXBvbmVudDtcblxuXHRcdFx0aWYgKGluc3QgJiYgaW5zdC5jb25zdHJ1Y3RvciA9PT0gY2hpbGRDb21wb25lbnQgJiYgY2hpbGRQcm9wcy5rZXkgPT0gaW5zdC5fX2tleSkge1xuXHRcdFx0XHRzZXRDb21wb25lbnRQcm9wcyhpbnN0LCBjaGlsZFByb3BzLCAxLCBjb250ZXh0LCBmYWxzZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0b1VubW91bnQgPSBpbnN0O1xuXG5cdFx0XHRcdGNvbXBvbmVudC5fY29tcG9uZW50ID0gaW5zdCA9IGNyZWF0ZUNvbXBvbmVudChjaGlsZENvbXBvbmVudCwgY2hpbGRQcm9wcywgY29udGV4dCk7XG5cdFx0XHRcdGluc3QubmV4dEJhc2UgPSBpbnN0Lm5leHRCYXNlIHx8IG5leHRCYXNlO1xuXHRcdFx0XHRpbnN0Ll9wYXJlbnRDb21wb25lbnQgPSBjb21wb25lbnQ7XG5cdFx0XHRcdHNldENvbXBvbmVudFByb3BzKGluc3QsIGNoaWxkUHJvcHMsIDAsIGNvbnRleHQsIGZhbHNlKTtcblx0XHRcdFx0cmVuZGVyQ29tcG9uZW50KGluc3QsIDEsIG1vdW50QWxsLCB0cnVlKTtcblx0XHRcdH1cblxuXHRcdFx0YmFzZSA9IGluc3QuYmFzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2Jhc2UgPSBpbml0aWFsQmFzZTtcblxuXHRcdFx0dG9Vbm1vdW50ID0gaW5pdGlhbENoaWxkQ29tcG9uZW50O1xuXHRcdFx0aWYgKHRvVW5tb3VudCkge1xuXHRcdFx0XHRjYmFzZSA9IGNvbXBvbmVudC5fY29tcG9uZW50ID0gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGluaXRpYWxCYXNlIHx8IHJlbmRlck1vZGUgPT09IDEpIHtcblx0XHRcdFx0aWYgKGNiYXNlKSBjYmFzZS5fY29tcG9uZW50ID0gbnVsbDtcblx0XHRcdFx0YmFzZSA9IGRpZmYoY2Jhc2UsIHJlbmRlcmVkLCBjb250ZXh0LCBtb3VudEFsbCB8fCAhaXNVcGRhdGUsIGluaXRpYWxCYXNlICYmIGluaXRpYWxCYXNlLnBhcmVudE5vZGUsIHRydWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChpbml0aWFsQmFzZSAmJiBiYXNlICE9PSBpbml0aWFsQmFzZSAmJiBpbnN0ICE9PSBpbml0aWFsQ2hpbGRDb21wb25lbnQpIHtcblx0XHRcdHZhciBiYXNlUGFyZW50ID0gaW5pdGlhbEJhc2UucGFyZW50Tm9kZTtcblx0XHRcdGlmIChiYXNlUGFyZW50ICYmIGJhc2UgIT09IGJhc2VQYXJlbnQpIHtcblx0XHRcdFx0YmFzZVBhcmVudC5yZXBsYWNlQ2hpbGQoYmFzZSwgaW5pdGlhbEJhc2UpO1xuXG5cdFx0XHRcdGlmICghdG9Vbm1vdW50KSB7XG5cdFx0XHRcdFx0aW5pdGlhbEJhc2UuX2NvbXBvbmVudCA9IG51bGw7XG5cdFx0XHRcdFx0cmVjb2xsZWN0Tm9kZVRyZWUoaW5pdGlhbEJhc2UsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0b1VubW91bnQpIHtcblx0XHRcdHVubW91bnRDb21wb25lbnQodG9Vbm1vdW50KTtcblx0XHR9XG5cblx0XHRjb21wb25lbnQuYmFzZSA9IGJhc2U7XG5cdFx0aWYgKGJhc2UgJiYgIWlzQ2hpbGQpIHtcblx0XHRcdHZhciBjb21wb25lbnRSZWYgPSBjb21wb25lbnQsXG5cdFx0XHQgICAgdCA9IGNvbXBvbmVudDtcblx0XHRcdHdoaWxlICh0ID0gdC5fcGFyZW50Q29tcG9uZW50KSB7XG5cdFx0XHRcdChjb21wb25lbnRSZWYgPSB0KS5iYXNlID0gYmFzZTtcblx0XHRcdH1cblx0XHRcdGJhc2UuX2NvbXBvbmVudCA9IGNvbXBvbmVudFJlZjtcblx0XHRcdGJhc2UuX2NvbXBvbmVudENvbnN0cnVjdG9yID0gY29tcG9uZW50UmVmLmNvbnN0cnVjdG9yO1xuXHRcdH1cblx0fVxuXG5cdGlmICghaXNVcGRhdGUgfHwgbW91bnRBbGwpIHtcblx0XHRtb3VudHMucHVzaChjb21wb25lbnQpO1xuXHR9IGVsc2UgaWYgKCFza2lwKSB7XG5cblx0XHRpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZFVwZGF0ZSkge1xuXHRcdFx0Y29tcG9uZW50LmNvbXBvbmVudERpZFVwZGF0ZShwcmV2aW91c1Byb3BzLCBwcmV2aW91c1N0YXRlLCBzbmFwc2hvdCk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb25zLmFmdGVyVXBkYXRlKSBvcHRpb25zLmFmdGVyVXBkYXRlKGNvbXBvbmVudCk7XG5cdH1cblxuXHR3aGlsZSAoY29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MubGVuZ3RoKSB7XG5cdFx0Y29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MucG9wKCkuY2FsbChjb21wb25lbnQpO1xuXHR9aWYgKCFkaWZmTGV2ZWwgJiYgIWlzQ2hpbGQpIGZsdXNoTW91bnRzKCk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQ29tcG9uZW50RnJvbVZOb2RlKGRvbSwgdm5vZGUsIGNvbnRleHQsIG1vdW50QWxsKSB7XG5cdHZhciBjID0gZG9tICYmIGRvbS5fY29tcG9uZW50LFxuXHQgICAgb3JpZ2luYWxDb21wb25lbnQgPSBjLFxuXHQgICAgb2xkRG9tID0gZG9tLFxuXHQgICAgaXNEaXJlY3RPd25lciA9IGMgJiYgZG9tLl9jb21wb25lbnRDb25zdHJ1Y3RvciA9PT0gdm5vZGUubm9kZU5hbWUsXG5cdCAgICBpc093bmVyID0gaXNEaXJlY3RPd25lcixcblx0ICAgIHByb3BzID0gZ2V0Tm9kZVByb3BzKHZub2RlKTtcblx0d2hpbGUgKGMgJiYgIWlzT3duZXIgJiYgKGMgPSBjLl9wYXJlbnRDb21wb25lbnQpKSB7XG5cdFx0aXNPd25lciA9IGMuY29uc3RydWN0b3IgPT09IHZub2RlLm5vZGVOYW1lO1xuXHR9XG5cblx0aWYgKGMgJiYgaXNPd25lciAmJiAoIW1vdW50QWxsIHx8IGMuX2NvbXBvbmVudCkpIHtcblx0XHRzZXRDb21wb25lbnRQcm9wcyhjLCBwcm9wcywgMywgY29udGV4dCwgbW91bnRBbGwpO1xuXHRcdGRvbSA9IGMuYmFzZTtcblx0fSBlbHNlIHtcblx0XHRpZiAob3JpZ2luYWxDb21wb25lbnQgJiYgIWlzRGlyZWN0T3duZXIpIHtcblx0XHRcdHVubW91bnRDb21wb25lbnQob3JpZ2luYWxDb21wb25lbnQpO1xuXHRcdFx0ZG9tID0gb2xkRG9tID0gbnVsbDtcblx0XHR9XG5cblx0XHRjID0gY3JlYXRlQ29tcG9uZW50KHZub2RlLm5vZGVOYW1lLCBwcm9wcywgY29udGV4dCk7XG5cdFx0aWYgKGRvbSAmJiAhYy5uZXh0QmFzZSkge1xuXHRcdFx0Yy5uZXh0QmFzZSA9IGRvbTtcblxuXHRcdFx0b2xkRG9tID0gbnVsbDtcblx0XHR9XG5cdFx0c2V0Q29tcG9uZW50UHJvcHMoYywgcHJvcHMsIDEsIGNvbnRleHQsIG1vdW50QWxsKTtcblx0XHRkb20gPSBjLmJhc2U7XG5cblx0XHRpZiAob2xkRG9tICYmIGRvbSAhPT0gb2xkRG9tKSB7XG5cdFx0XHRvbGREb20uX2NvbXBvbmVudCA9IG51bGw7XG5cdFx0XHRyZWNvbGxlY3ROb2RlVHJlZShvbGREb20sIGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZG9tO1xufVxuXG5mdW5jdGlvbiB1bm1vdW50Q29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRpZiAob3B0aW9ucy5iZWZvcmVVbm1vdW50KSBvcHRpb25zLmJlZm9yZVVubW91bnQoY29tcG9uZW50KTtcblxuXHR2YXIgYmFzZSA9IGNvbXBvbmVudC5iYXNlO1xuXG5cdGNvbXBvbmVudC5fZGlzYWJsZSA9IHRydWU7XG5cblx0aWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsVW5tb3VudCkgY29tcG9uZW50LmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cblx0Y29tcG9uZW50LmJhc2UgPSBudWxsO1xuXG5cdHZhciBpbm5lciA9IGNvbXBvbmVudC5fY29tcG9uZW50O1xuXHRpZiAoaW5uZXIpIHtcblx0XHR1bm1vdW50Q29tcG9uZW50KGlubmVyKTtcblx0fSBlbHNlIGlmIChiYXNlKSB7XG5cdFx0aWYgKGJhc2VbJ19fcHJlYWN0YXR0cl8nXSAhPSBudWxsKSBhcHBseVJlZihiYXNlWydfX3ByZWFjdGF0dHJfJ10ucmVmLCBudWxsKTtcblxuXHRcdGNvbXBvbmVudC5uZXh0QmFzZSA9IGJhc2U7XG5cblx0XHRyZW1vdmVOb2RlKGJhc2UpO1xuXHRcdHJlY3ljbGVyQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cblx0XHRyZW1vdmVDaGlsZHJlbihiYXNlKTtcblx0fVxuXG5cdGFwcGx5UmVmKGNvbXBvbmVudC5fX3JlZiwgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCkge1xuXHR0aGlzLl9kaXJ0eSA9IHRydWU7XG5cblx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuXHR0aGlzLnByb3BzID0gcHJvcHM7XG5cblx0dGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUgfHwge307XG5cblx0dGhpcy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG59XG5cbmV4dGVuZChDb21wb25lbnQucHJvdG90eXBlLCB7XG5cdHNldFN0YXRlOiBmdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSwgY2FsbGJhY2spIHtcblx0XHRpZiAoIXRoaXMucHJldlN0YXRlKSB0aGlzLnByZXZTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdFx0dGhpcy5zdGF0ZSA9IGV4dGVuZChleHRlbmQoe30sIHRoaXMuc3RhdGUpLCB0eXBlb2Ygc3RhdGUgPT09ICdmdW5jdGlvbicgPyBzdGF0ZSh0aGlzLnN0YXRlLCB0aGlzLnByb3BzKSA6IHN0YXRlKTtcblx0XHRpZiAoY2FsbGJhY2spIHRoaXMuX3JlbmRlckNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHRlbnF1ZXVlUmVuZGVyKHRoaXMpO1xuXHR9LFxuXHRmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoY2FsbGJhY2spIHtcblx0XHRpZiAoY2FsbGJhY2spIHRoaXMuX3JlbmRlckNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHRyZW5kZXJDb21wb25lbnQodGhpcywgMik7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge31cbn0pO1xuXG5mdW5jdGlvbiByZW5kZXIodm5vZGUsIHBhcmVudCwgbWVyZ2UpIHtcbiAgcmV0dXJuIGRpZmYobWVyZ2UsIHZub2RlLCB7fSwgZmFsc2UsIHBhcmVudCwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG5cdHJldHVybiB7fTtcbn1cblxudmFyIHByZWFjdCA9IHtcblx0aDogaCxcblx0Y3JlYXRlRWxlbWVudDogaCxcblx0Y2xvbmVFbGVtZW50OiBjbG9uZUVsZW1lbnQsXG5cdGNyZWF0ZVJlZjogY3JlYXRlUmVmLFxuXHRDb21wb25lbnQ6IENvbXBvbmVudCxcblx0cmVuZGVyOiByZW5kZXIsXG5cdHJlcmVuZGVyOiByZXJlbmRlcixcblx0b3B0aW9uczogb3B0aW9uc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJlYWN0O1xuZXhwb3J0IHsgaCwgaCBhcyBjcmVhdGVFbGVtZW50LCBjbG9uZUVsZW1lbnQsIGNyZWF0ZVJlZiwgQ29tcG9uZW50LCByZW5kZXIsIHJlcmVuZGVyLCBvcHRpb25zIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubWpzLm1hcFxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubDhoZmdKOTFMQk9qOXc1Y01QY21VIHtcXG4gIHdpZHRoOiA2NHB4O1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJDYWxjdWxhdG9yQnV0dG9uX2J1dHRvblwiOiBcImw4aGZnSjkxTEJPajl3NWNNUGNtVVwiXG59OyIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgQ2FsY3VsYXRvciBmcm9tICcuL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhbGN1bGF0b3InO1xuXG4vKipcbiAqIHRvcCBsZXZlbCBhcHAgY29tcG9uZW50XG4gKi9cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENhbGN1bGF0b3IvPlxuICAgICAgPC9kaXYgPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IHsgaCwgcmVuZGVyIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5cbnJlbmRlcihcbiAgPEFwcC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbik7XG4iLCJpbXBvcnQgKiBhcyBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGgsIFByZWFjdEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncHJlYWN0JztcblxuaW50ZXJmYWNlIEJ1dHRvblByb3BzIHtcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBjaGlsZHJlbj86IHN0cmluZyB8IG51bWJlciB8IFByZWFjdEhUTUxBdHRyaWJ1dGVzO1xuICBvbkNsaWNrKHg6IHN0cmluZyB8IG51bWJlcik6IGFueSB8IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSAocHJvcHM6IEJ1dHRvblByb3BzKSA9PiB7XG4gIGNvbnN0IHtvbkNsaWNrLCB2YWx1ZSwgY2xhc3NOYW1lLCBjaGlsZHJlbn0gPSBwcm9wcztcblxuICAvLyBwYXNzZXNzIHZhbHVlIHRvIHRoZSBwcm92aWRlZCBvbkNsaWNrIGZ1bmN0aW9uLlxuICBjb25zdCBoYW5kbGVDbGljayA9IChlOiBNb3VzZUV2ZW50LCB2OiBzdHJpbmcgfCBudW1iZXIpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIG9uQ2xpY2sodik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICBjbGFzc05hbWU9e2N4KGNsYXNzTmFtZSwgJ2J1dHRvbicpfVxuICAgICAgb25DbGljaz17KGU6IE1vdXNlRXZlbnQpID0+IGhhbmRsZUNsaWNrKGUsIHZhbHVlKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuIiwiZXhwb3J0IHsgQnV0dG9uIGFzIGRlZmF1bHQgfSBmcm9tICcuL0J1dHRvbic7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGggfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgQ2FsY3VsYXRvckJ1dHRvbkdyaWQgfSBmcm9tICcuL0NhbGN1bGF0b3JCdXR0b25HcmlkJztcbmltcG9ydCB7IEtleUl0ZW0sIEtleVR5cGUgfSBmcm9tICcuL0tleUxheW91dCc7XG5cbmludGVyZmFjZSBDYWxjdWxhdG9yU3RhdGUge1xuICBzbG90VmlzaWJsZTogbnVtYmVyO1xuICBzbG90SGlkZGVuOiBudW1iZXI7XG59XG5cbi8qKlxuICogbWFpbiBjYWxjdWxhdG9yIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgQ2FsY3VsYXRvciBleHRlbmRzIENvbXBvbmVudDx7fSwgQ2FsY3VsYXRvclN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNsb3RWaXNpYmxlOiAwLFxuICAgICAgc2xvdEhpZGRlbjogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8vIGhhbmRsZXMgbnVtYmVyIGtleSBpbnB1dFxuICBoYW5kbGVOdW1iZXJJbnB1dChuOiBudW1iZXIpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKG4pO1xuICB9XG5cbiAgaGFuZGxlT3BlcmF0b3JJbnB1dChsYWJlbDogc3RyaW5nKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyhsYWJlbCk7XG4gIH1cblxuICBoYW5kbGVJbnB1dChrZXlJdGVtOiBLZXlJdGVtKSB7XG4gICAgc3dpdGNoIChrZXlJdGVtLmtleVR5cGUpIHtcbiAgICAgIGNhc2UgS2V5VHlwZS5OVU1CRVI6XG4gICAgICAgIHRoaXMuaGFuZGxlTnVtYmVySW5wdXQoa2V5SXRlbS52YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLZXlUeXBlLk9QRVJBVE9SOlxuICAgICAgICB0aGlzLmhhbmRsZU9wZXJhdG9ySW5wdXQoa2V5SXRlbS5sYWJlbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQgYnV0dG9uJyk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzcGFuPnt0aGlzLnN0YXRlLnNsb3RWaXNpYmxlfTwvc3Bhbj5cbiAgICAgICAgPENhbGN1bGF0b3JCdXR0b25HcmlkXG4gICAgICAgICAgb25CdXR0b25QcmVzcz17dGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMSEuL0NhbGN1bGF0b3JCdXR0b24uY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTEhLi9DYWxjdWxhdG9yQnV0dG9uLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMSEuL0NhbGN1bGF0b3JCdXR0b24uY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2F0b21zL0J1dHRvbic7XG5cbmltcG9ydCAqIGFzIHMgZnJvbSAnLi9DYWxjdWxhdG9yQnV0dG9uLmNzcyc7XG5cbmludGVyZmFjZSBDYWxjdWxhdG9yQnV0dG9uUHJvcHMge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZT86IG51bWJlcjtcbiAgb25DbGljaygpOiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBDYWxjdWxhdG9yQnV0dG9uID0gKHByb3BzOiBDYWxjdWxhdG9yQnV0dG9uUHJvcHMpID0+IHtcbiAgY29uc3QgeyBsYWJlbCwgdmFsdWUsIG9uQ2xpY2sgfSA9IHByb3BzO1xuICByZXR1cm4oXG4gICAgPHRkPlxuICAgICAgPEJ1dHRvblxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgY2xhc3NOYW1lPXtzLkNhbGN1bGF0b3JCdXR0b25fYnV0dG9ufVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L3RkPlxuICApO1xufTtcbiIsImltcG9ydCB7IGggfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgQ2FsY3VsYXRvckJ1dHRvbiB9IGZyb20gJy4vQ2FsY3VsYXRvckJ1dHRvbic7XG5pbXBvcnQgeyBLRVlfTEFZT1VULCBLZXlJdGVtIH0gZnJvbSAnLi9LZXlMYXlvdXQnO1xuXG5pbnRlcmZhY2UgQ2FsY3VsYXRvckJ1dHRvbkdyaWRQcm9wcyB7XG4gIG9uQnV0dG9uUHJlc3MoazogS2V5SXRlbSk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBDYWxjdWxhdG9yQnV0dG9uR3JpZCA9IChwcm9wczogQ2FsY3VsYXRvckJ1dHRvbkdyaWRQcm9wcykgPT4ge1xuICBjb25zdCB7IG9uQnV0dG9uUHJlc3MgfSA9IHByb3BzO1xuICByZXR1cm4oXG4gICAgPHRhYmxlPlxuICAgICAgeyBLRVlfTEFZT1VULm1hcCgocm93OiBLZXlJdGVtW10pID0+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgeyByb3cubWFwKChrZXlJdGVtOiBLZXlJdGVtKSA9PlxuICAgICAgICAgICAgICA8Q2FsY3VsYXRvckJ1dHRvblxuICAgICAgICAgICAgICAgIGxhYmVsPXtrZXlJdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtrZXlJdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQnV0dG9uUHJlc3Moa2V5SXRlbSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIH1cbiAgICAgICAgICA8L3RyPlxuICAgICAgKSB9XG4gICAgPC90YWJsZT5cbiAgKTtcbn07XG4iLCJleHBvcnQgZW51bSBLIHtcbiAgS0VZXzAsIEtFWV8xLCBLRVlfMiwgS0VZXzMsIEtFWV80LCBLRVlfNSwgS0VZXzYsIEtFWV83LCBLRVlfOCwgS0VZXzksXG4gIFBMVVMsIE1JTlVTLCBNVUxUSVBMWSwgRElWSURFLFxuICBFUVVBTCwgQ0xFQVIsIFBFUkNFTlQsIE5FR0FUSVZFXG59XG5cbmV4cG9ydCBlbnVtIEtleVR5cGUgeyBOVU1CRVIsIE9QRVJBVE9SLCBBQ1RJT04gfVxuXG5leHBvcnQgdHlwZSBLZXlJdGVtID0ge1xuICBuYW1lOiBLO1xuICBrZXlUeXBlOiBLZXlUeXBlO1xuICBsYWJlbDogc3RyaW5nO1xuICBrZXlDb2RlOiBudW1iZXI7XG4gIHZhbHVlPzogbnVtYmVyO1xufTtcblxuY29uc3QgY3JlYXRlTnVtYmVyS2V5cyA9ICgpOiB7W2sgaW4gS106IEtleUl0ZW19ID0+IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW9iamVjdC1saXRlcmFsLXR5cGUtYXNzZXJ0aW9uXG4gIGNvbnN0IGtleXM6IHsgW2sgaW4gS106IEtleUl0ZW0gfSA9IHt9IGFzIHsgW2sgaW4gS106IEtleUl0ZW0gfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgY29uc3Qga2V5TmFtZTogSyA9IEtbYEtFWV8ke2l9YF07XG4gICAga2V5c1trZXlOYW1lXSA9IHtcbiAgICAgIG5hbWU6IGtleU5hbWUsXG4gICAgICBrZXlUeXBlOiBLZXlUeXBlLk5VTUJFUixcbiAgICAgIGxhYmVsOiBTdHJpbmcoaSksXG4gICAgICB2YWx1ZTogaSxcbiAgICAgIGtleUNvZGU6IGkgKyA0OFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59O1xuXG5leHBvcnQgY29uc3QgS0VZUzogeyBbayBpbiBLXTogS2V5SXRlbSB9ID0ge1xuICAvLyBudW1iZXIga2V5cyAoMH45KVxuICAuLi5jcmVhdGVOdW1iZXJLZXlzKCksXG4gIC8vIG9wZXJhdG9yIGtleXNcbiAgW0suUExVU106ICAgICAgeyBuYW1lOiBLLlBMVVMsIGtleVR5cGU6IEtleVR5cGUuT1BFUkFUT1IsIGxhYmVsOiAnKycsIGtleUNvZGU6IDE4NyB9LFxuICBbSy5NSU5VU106ICAgICB7IG5hbWU6IEsuTUlOVVMsIGtleVR5cGU6IEtleVR5cGUuT1BFUkFUT1IsIGxhYmVsOiAnLScsIGtleUNvZGU6IDE4OSB9LFxuICBbSy5NVUxUSVBMWV06ICB7IG5hbWU6IEsuTVVMVElQTFksIGtleVR5cGU6IEtleVR5cGUuT1BFUkFUT1IsIGxhYmVsOiAnw5cnLCBrZXlDb2RlOiAxODYgfSxcbiAgW0suRElWSURFXTogICAgeyBuYW1lOiBLLkRJVklERSwga2V5VHlwZTogS2V5VHlwZS5PUEVSQVRPUiwgbGFiZWw6ICfDtycsIGtleUNvZGU6IDE5MSB9LFxuICAvLyBhY3Rpb24ga2V5c1xuICBbSy5FUVVBTF06ICAgICB7IG5hbWU6IEsuRVFVQUwsIGtleVR5cGU6IEtleVR5cGUuQUNUSU9OLCBsYWJlbDogJz0nLCBrZXlDb2RlOiAxODcgfSxcbiAgW0suQ0xFQVJdOiAgICAgeyBuYW1lOiBLLkNMRUFSLCBrZXlUeXBlOiBLZXlUeXBlLkFDVElPTiwgbGFiZWw6ICdDJywga2V5Q29kZTogOCB9LFxuICBbSy5QRVJDRU5UXTogICB7IG5hbWU6IEsuUEVSQ0VOVCwga2V5VHlwZTogS2V5VHlwZS5BQ1RJT04sIGxhYmVsOiAnJScsIGtleUNvZGU6IDUzIH0sXG4gIFtLLk5FR0FUSVZFXTogIHsgbmFtZTogSy5ORUdBVElWRSwga2V5VHlwZTogS2V5VHlwZS5BQ1RJT04sIGxhYmVsOiAnKy8tJywga2V5Q29kZTogODIgfVxufTtcblxuZXhwb3J0IGNvbnN0IEtFWV9MQVlPVVQ6IEtleUl0ZW1bXVtdID0gW1xuICBbS0VZU1tLLkNMRUFSXSwgIEtFWVNbSy5ORUdBVElWRV0sICBLRVlTW0suUEVSQ0VOVF0sICBLRVlTW0suRElWSURFXV0sXG4gIFtLRVlTW0suS0VZXzddLCAgS0VZU1tLLktFWV84XSwgICAgIEtFWVNbSy5LRVlfOV0sICAgIEtFWVNbSy5NVUxUSVBMWV1dLFxuICBbS0VZU1tLLktFWV80XSwgIEtFWVNbSy5LRVlfNV0sICAgICBLRVlTW0suS0VZXzZdLCAgICBLRVlTW0suTUlOVVNdXSxcbiAgW0tFWVNbSy5LRVlfM10sICBLRVlTW0suS0VZXzJdLCAgICAgS0VZU1tLLktFWV8xXSwgICAgS0VZU1tLLlBMVVNdXSxcbiAgW0tFWVNbSy5LRVlfMF0sICBLRVlTW0suRVFVQUxdXVxuXTtcbiIsImV4cG9ydCB7IENhbGN1bGF0b3IgYXMgZGVmYXVsdCB9IGZyb20gJy4vQ2FsY3VsYXRvcic7XG4iXSwic291cmNlUm9vdCI6IiJ9