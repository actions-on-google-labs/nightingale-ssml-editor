var Nightingale=function(t){var e={};function o(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=77)}([function(t,e){(function(){t.exports={Element:1,Attribute:2,Text:3,CData:4,EntityReference:5,EntityDeclaration:6,ProcessingInstruction:7,Comment:8,Document:9,DocType:10,DocumentFragment:11,NotationDeclaration:12,Declaration:201,Raw:202,AttributeDeclaration:203,ElementDeclaration:204,Dummy:205}}).call(this)},function(t,e,o){(function(){var e,n,s,i,r,a,l,c,u,d,h,p,g,m,f,_,v,y={}.hasOwnProperty;v=o(2),_=v.isObject,f=v.isFunction,m=v.isEmpty,g=v.getValue,c=null,s=null,i=null,r=null,a=null,h=null,p=null,d=null,l=null,n=null,u=null,e=null,t.exports=function(){function t(t){this.parent=t,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),this.value=null,this.children=[],this.baseURI=null,c||(c=o(14),s=o(16),i=o(17),r=o(18),a=o(19),h=o(24),p=o(25),d=o(26),l=o(35),n=o(0),u=o(56),o(15),e=o(57))}return Object.defineProperty(t.prototype,"nodeName",{get:function(){return this.name}}),Object.defineProperty(t.prototype,"nodeType",{get:function(){return this.type}}),Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.value}}),Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.parent}}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.childNodeList&&this.childNodeList.nodes||(this.childNodeList=new u(this.children)),this.childNodeList}}),Object.defineProperty(t.prototype,"firstChild",{get:function(){return this.children[0]||null}}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children[this.children.length-1]||null}}),Object.defineProperty(t.prototype,"previousSibling",{get:function(){var t;return t=this.parent.children.indexOf(this),this.parent.children[t-1]||null}}),Object.defineProperty(t.prototype,"nextSibling",{get:function(){var t;return t=this.parent.children.indexOf(this),this.parent.children[t+1]||null}}),Object.defineProperty(t.prototype,"ownerDocument",{get:function(){return this.document()||null}}),Object.defineProperty(t.prototype,"textContent",{get:function(){var t,e,o,s,i;if(this.nodeType===n.Element||this.nodeType===n.DocumentFragment){for(i="",e=0,o=(s=this.children).length;e<o;e++)(t=s[e]).textContent&&(i+=t.textContent);return i}return null},set:function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),t.prototype.setParent=function(t){var e,o,n,s,i;for(this.parent=t,t&&(this.options=t.options,this.stringify=t.stringify),i=[],o=0,n=(s=this.children).length;o<n;o++)e=s[o],i.push(e.setParent(this));return i},t.prototype.element=function(t,e,o){var n,s,i,r,a,l,c,u,d,h,p;if(l=null,null===e&&null==o&&(e=(d=[{},null])[0],o=d[1]),null==e&&(e={}),e=g(e),_(e)||(o=(h=[e,o])[0],e=h[1]),null!=t&&(t=g(t)),Array.isArray(t))for(i=0,c=t.length;i<c;i++)s=t[i],l=this.element(s);else if(f(t))l=this.element(t.apply());else if(_(t)){for(a in t)if(y.call(t,a))if(p=t[a],f(p)&&(p=p.apply()),!this.options.ignoreDecorators&&this.stringify.convertAttKey&&0===a.indexOf(this.stringify.convertAttKey))l=this.attribute(a.substr(this.stringify.convertAttKey.length),p);else if(!this.options.separateArrayItems&&Array.isArray(p)&&m(p))l=this.dummy();else if(_(p)&&m(p))l=this.element(a);else if(this.options.keepNullNodes||null!=p)if(!this.options.separateArrayItems&&Array.isArray(p))for(r=0,u=p.length;r<u;r++)s=p[r],(n={})[a]=s,l=this.element(n);else _(p)?!this.options.ignoreDecorators&&this.stringify.convertTextKey&&0===a.indexOf(this.stringify.convertTextKey)?l=this.element(p):(l=this.element(a)).element(p):l=this.element(a,p);else l=this.dummy()}else l=this.options.keepNullNodes||null!==o?!this.options.ignoreDecorators&&this.stringify.convertTextKey&&0===t.indexOf(this.stringify.convertTextKey)?this.text(o):!this.options.ignoreDecorators&&this.stringify.convertCDataKey&&0===t.indexOf(this.stringify.convertCDataKey)?this.cdata(o):!this.options.ignoreDecorators&&this.stringify.convertCommentKey&&0===t.indexOf(this.stringify.convertCommentKey)?this.comment(o):!this.options.ignoreDecorators&&this.stringify.convertRawKey&&0===t.indexOf(this.stringify.convertRawKey)?this.raw(o):!this.options.ignoreDecorators&&this.stringify.convertPIKey&&0===t.indexOf(this.stringify.convertPIKey)?this.instruction(t.substr(this.stringify.convertPIKey.length),o):this.node(t,e,o):this.dummy();if(null==l)throw new Error("Could not create any elements with: "+t+". "+this.debugInfo());return l},t.prototype.insertBefore=function(t,e,o){var n,s,i,r,a;if(null!=t?t.type:void 0)return r=e,(i=t).setParent(this),r?(s=children.indexOf(r),a=children.splice(s),children.push(i),Array.prototype.push.apply(children,a)):children.push(i),i;if(this.isRoot)throw new Error("Cannot insert elements at root level. "+this.debugInfo(t));return s=this.parent.children.indexOf(this),a=this.parent.children.splice(s),n=this.parent.element(t,e,o),Array.prototype.push.apply(this.parent.children,a),n},t.prototype.insertAfter=function(t,e,o){var n,s,i;if(this.isRoot)throw new Error("Cannot insert elements at root level. "+this.debugInfo(t));return s=this.parent.children.indexOf(this),i=this.parent.children.splice(s+1),n=this.parent.element(t,e,o),Array.prototype.push.apply(this.parent.children,i),n},t.prototype.remove=function(){var t;if(this.isRoot)throw new Error("Cannot remove the root element. "+this.debugInfo());return t=this.parent.children.indexOf(this),[].splice.apply(this.parent.children,[t,t-t+1].concat([])),this.parent},t.prototype.node=function(t,e,o){var n,s;return null!=t&&(t=g(t)),e||(e={}),e=g(e),_(e)||(o=(s=[e,o])[0],e=s[1]),n=new c(this,t,e),null!=o&&n.text(o),this.children.push(n),n},t.prototype.text=function(t){var e;return _(t)&&this.element(t),e=new p(this,t),this.children.push(e),this},t.prototype.cdata=function(t){var e;return e=new s(this,t),this.children.push(e),this},t.prototype.comment=function(t){var e;return e=new i(this,t),this.children.push(e),this},t.prototype.commentBefore=function(t){var e,o;return e=this.parent.children.indexOf(this),o=this.parent.children.splice(e),this.parent.comment(t),Array.prototype.push.apply(this.parent.children,o),this},t.prototype.commentAfter=function(t){var e,o;return e=this.parent.children.indexOf(this),o=this.parent.children.splice(e+1),this.parent.comment(t),Array.prototype.push.apply(this.parent.children,o),this},t.prototype.raw=function(t){var e;return e=new h(this,t),this.children.push(e),this},t.prototype.dummy=function(){return new l(this)},t.prototype.instruction=function(t,e){var o,n,s,i,r;if(null!=t&&(t=g(t)),null!=e&&(e=g(e)),Array.isArray(t))for(i=0,r=t.length;i<r;i++)o=t[i],this.instruction(o);else if(_(t))for(o in t)y.call(t,o)&&(n=t[o],this.instruction(o,n));else f(e)&&(e=e.apply()),s=new d(this,t,e),this.children.push(s);return this},t.prototype.instructionBefore=function(t,e){var o,n;return o=this.parent.children.indexOf(this),n=this.parent.children.splice(o),this.parent.instruction(t,e),Array.prototype.push.apply(this.parent.children,n),this},t.prototype.instructionAfter=function(t,e){var o,n;return o=this.parent.children.indexOf(this),n=this.parent.children.splice(o+1),this.parent.instruction(t,e),Array.prototype.push.apply(this.parent.children,n),this},t.prototype.declaration=function(t,e,o){var s,i;return s=this.document(),i=new r(s,t,e,o),0===s.children.length?s.children.unshift(i):s.children[0].type===n.Declaration?s.children[0]=i:s.children.unshift(i),s.root()||s},t.prototype.dtd=function(t,e){var o,s,i,r,l,c,u,d,h;for(o=this.document(),s=new a(o,t,e),i=r=0,c=(d=o.children).length;r<c;i=++r)if(d[i].type===n.DocType)return o.children[i]=s,s;for(i=l=0,u=(h=o.children).length;l<u;i=++l)if(h[i].isRoot)return o.children.splice(i,0,s),s;return o.children.push(s),s},t.prototype.up=function(){if(this.isRoot)throw new Error("The root node has no parent. Use doc() if you need to get the document object.");return this.parent},t.prototype.root=function(){var t;for(t=this;t;){if(t.type===n.Document)return t.rootObject;if(t.isRoot)return t;t=t.parent}},t.prototype.document=function(){var t;for(t=this;t;){if(t.type===n.Document)return t;t=t.parent}},t.prototype.end=function(t){return this.document().end(t)},t.prototype.prev=function(){var t;if((t=this.parent.children.indexOf(this))<1)throw new Error("Already at the first node. "+this.debugInfo());return this.parent.children[t-1]},t.prototype.next=function(){var t;if(-1===(t=this.parent.children.indexOf(this))||t===this.parent.children.length-1)throw new Error("Already at the last node. "+this.debugInfo());return this.parent.children[t+1]},t.prototype.importDocument=function(t){var e;return(e=t.root().clone()).parent=this,e.isRoot=!1,this.children.push(e),this},t.prototype.debugInfo=function(t){var e,o;return null!=(t=t||this.name)||(null!=(e=this.parent)?e.name:void 0)?null==t?"parent: <"+this.parent.name+">":(null!=(o=this.parent)?o.name:void 0)?"node: <"+t+">, parent: <"+this.parent.name+">":"node: <"+t+">":""},t.prototype.ele=function(t,e,o){return this.element(t,e,o)},t.prototype.nod=function(t,e,o){return this.node(t,e,o)},t.prototype.txt=function(t){return this.text(t)},t.prototype.dat=function(t){return this.cdata(t)},t.prototype.com=function(t){return this.comment(t)},t.prototype.ins=function(t,e){return this.instruction(t,e)},t.prototype.doc=function(){return this.document()},t.prototype.dec=function(t,e,o){return this.declaration(t,e,o)},t.prototype.e=function(t,e,o){return this.element(t,e,o)},t.prototype.n=function(t,e,o){return this.node(t,e,o)},t.prototype.t=function(t){return this.text(t)},t.prototype.d=function(t){return this.cdata(t)},t.prototype.c=function(t){return this.comment(t)},t.prototype.r=function(t){return this.raw(t)},t.prototype.i=function(t,e){return this.instruction(t,e)},t.prototype.u=function(){return this.up()},t.prototype.importXMLBuilder=function(t){return this.importDocument(t)},t.prototype.replaceChild=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.removeChild=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.appendChild=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.hasChildNodes=function(){return 0!==this.children.length},t.prototype.cloneNode=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.normalize=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.isSupported=function(t,e){return!0},t.prototype.hasAttributes=function(){return 0!==this.attribs.length},t.prototype.compareDocumentPosition=function(t){var o;return this,this===t?0:this.document()!==t.document()?(o=e.Disconnected|e.ImplementationSpecific,Math.random()<.5?o|=e.Preceding:o|=e.Following,o):this.isAncestor(t)?e.Contains|e.Preceding:this.isDescendant(t)?e.Contains|e.Following:this.isPreceding(t)?e.Preceding:e.Following},t.prototype.isSameNode=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.lookupPrefix=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.isDefaultNamespace=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.lookupNamespaceURI=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.isEqualNode=function(t){var e,o,n;if(t.nodeType!==this.nodeType)return!1;if(t.children.length!==this.children.length)return!1;for(e=o=0,n=this.children.length-1;0<=n?o<=n:o>=n;e=0<=n?++o:--o)if(!this.children[e].isEqualNode(t.children[e]))return!1;return!0},t.prototype.getFeature=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.setUserData=function(t,e,o){throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.getUserData=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.contains=function(t){return!!t&&(t===this||this.isDescendant(t))},t.prototype.isDescendant=function(t){var e,o,n,s;for(o=0,n=(s=this.children).length;o<n;o++){if(t===(e=s[o]))return!0;if(e.isDescendant(t))return!0}return!1},t.prototype.isAncestor=function(t){return t.isDescendant(this)},t.prototype.isPreceding=function(t){var e,o;return e=this.treePosition(t),o=this.treePosition(this),-1!==e&&-1!==o&&e<o},t.prototype.isFollowing=function(t){var e,o;return e=this.treePosition(t),o=this.treePosition(this),-1!==e&&-1!==o&&e>o},t.prototype.treePosition=function(t){var e,o;return o=0,e=!1,this.foreachTreeNode(this.document(),(function(n){if(o++,!e&&n===t)return e=!0})),e?o:-1},t.prototype.foreachTreeNode=function(t,e){var o,n,s,i,r;for(t||(t=this.document()),n=0,s=(i=t.children).length;n<s;n++){if(r=e(o=i[n]))return r;if(r=this.foreachTreeNode(o,e))return r}},t}()}).call(this)},function(t,e){(function(){var e,o,n,s,i,r,a,l=[].slice,c={}.hasOwnProperty;e=function(){var t,e,o,n,s,r;if(r=arguments[0],s=2<=arguments.length?l.call(arguments,1):[],i(Object.assign))Object.assign.apply(null,arguments);else for(t=0,o=s.length;t<o;t++)if(null!=(n=s[t]))for(e in n)c.call(n,e)&&(r[e]=n[e]);return r},i=function(t){return!!t&&"[object Function]"===Object.prototype.toString.call(t)},r=function(t){var e;return!!t&&("function"==(e=typeof t)||"object"===e)},n=function(t){return i(Array.isArray)?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)},s=function(t){var e;if(n(t))return!t.length;for(e in t)if(c.call(t,e))return!1;return!0},a=function(t){var e,o;return r(t)&&(o=Object.getPrototypeOf(t))&&(e=o.constructor)&&"function"==typeof e&&e instanceof e&&Function.prototype.toString.call(e)===Function.prototype.toString.call(Object)},o=function(t){return i(t.valueOf)?t.valueOf():t},t.exports.assign=e,t.exports.isFunction=i,t.exports.isObject=r,t.exports.isArray=n,t.exports.isEmpty=s,t.exports.isPlainObject=a,t.exports.getValue=o}).call(this)},function(t,e,o){"use strict";var n=o(12),s=Object.keys||function(t){var e=[];for(var o in t)e.push(o);return e};t.exports=d;var i=Object.create(o(6));i.inherits=o(5);var r=o(39),a=o(30);i.inherits(d,r);for(var l=s(a.prototype),c=0;c<l.length;c++){var u=l[c];d.prototype[u]||(d.prototype[u]=a.prototype[u])}function d(t){if(!(this instanceof d))return new d(t);r.call(this,t),a.call(this,t),t&&!1===t.readable&&(this.readable=!1),t&&!1===t.writable&&(this.writable=!1),this.allowHalfOpen=!0,t&&!1===t.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",h)}function h(){this.allowHalfOpen||this._writableState.ended||n.nextTick(p,this)}function p(t){t.end()}Object.defineProperty(d.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(d.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed&&this._writableState.destroyed)},set:function(t){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=t,this._writableState.destroyed=t)}}),d.prototype._destroy=function(t,e){this.push(null),this.end(),n.nextTick(e,t)}},function(t,e){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"==typeof window&&(o=window)}t.exports=o},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e;var o=function(){};o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t}}},function(t,e,o){(function(t){function o(t){return Object.prototype.toString.call(t)}e.isArray=function(t){return Array.isArray?Array.isArray(t):"[object Array]"===o(t)},e.isBoolean=function(t){return"boolean"==typeof t},e.isNull=function(t){return null===t},e.isNullOrUndefined=function(t){return null==t},e.isNumber=function(t){return"number"==typeof t},e.isString=function(t){return"string"==typeof t},e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=function(t){return void 0===t},e.isRegExp=function(t){return"[object RegExp]"===o(t)},e.isObject=function(t){return"object"==typeof t&&null!==t},e.isDate=function(t){return"[object Date]"===o(t)},e.isError=function(t){return"[object Error]"===o(t)||t instanceof Error},e.isFunction=function(t){return"function"==typeof t},e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=t.isBuffer}).call(this,o(9).Buffer)},function(t,e,o){(function(){var e,n={}.hasOwnProperty;e=o(1),t.exports=function(t){function e(t){e.__super__.constructor.call(this,t),this.value=""}return function(t,e){for(var o in e)n.call(e,o)&&(t[o]=e[o]);function s(){this.constructor=t}s.prototype=e.prototype,t.prototype=new s,t.__super__=e.prototype}(e,t),Object.defineProperty(e.prototype,"data",{get:function(){return this.value},set:function(t){return this.value=t||""}}),Object.defineProperty(e.prototype,"length",{get:function(){return this.value.length}}),Object.defineProperty(e.prototype,"textContent",{get:function(){return this.value},set:function(t){return this.value=t||""}}),e.prototype.clone=function(){return Object.create(this)},e.prototype.substringData=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},e.prototype.appendData=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},e.prototype.insertData=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},e.prototype.deleteData=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},e.prototype.replaceData=function(t,e,o){throw new Error("This DOM method is not implemented."+this.debugInfo())},e.prototype.isEqualNode=function(t){return!!e.__super__.isEqualNode.apply(this,arguments).isEqualNode(t)&&t.data===this.data},e}(e)}).call(this)},function(t,e){(function(){t.exports={None:0,OpenTag:1,InsideTag:2,CloseTag:3}}).call(this)},function(t,e,o){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var n=o(62),s=o(63),i=o(38);function r(){return l.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(r()<e)throw new RangeError("Invalid typed array length");return l.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=l.prototype:(null===t&&(t=new l(e)),t.length=e),t}function l(t,e,o){if(!(l.TYPED_ARRAY_SUPPORT||this instanceof l))return new l(t,e,o);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return d(this,t)}return c(this,t,e,o)}function c(t,e,o,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,o,n){if(e.byteLength,o<0||e.byteLength<o)throw new RangeError("'offset' is out of bounds");if(e.byteLength<o+(n||0))throw new RangeError("'length' is out of bounds");e=void 0===o&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,o):new Uint8Array(e,o,n);l.TYPED_ARRAY_SUPPORT?(t=e).__proto__=l.prototype:t=h(t,e);return t}(t,e,o,n):"string"==typeof e?function(t,e,o){"string"==typeof o&&""!==o||(o="utf8");if(!l.isEncoding(o))throw new TypeError('"encoding" must be a valid string encoding');var n=0|g(e,o),s=(t=a(t,n)).write(e,o);s!==n&&(t=t.slice(0,s));return t}(t,e,o):function(t,e){if(l.isBuffer(e)){var o=0|p(e.length);return 0===(t=a(t,o)).length||e.copy(t,0,0,o),t}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(n=e.length)!=n?a(t,0):h(t,e);if("Buffer"===e.type&&i(e.data))return h(t,e.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function u(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function d(t,e){if(u(e),t=a(t,e<0?0:0|p(e)),!l.TYPED_ARRAY_SUPPORT)for(var o=0;o<e;++o)t[o]=0;return t}function h(t,e){var o=e.length<0?0:0|p(e.length);t=a(t,o);for(var n=0;n<o;n+=1)t[n]=255&e[n];return t}function p(t){if(t>=r())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+r().toString(16)+" bytes");return 0|t}function g(t,e){if(l.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var o=t.length;if(0===o)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":case void 0:return B(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*o;case"hex":return o>>>1;case"base64":return F(t).length;default:if(n)return B(t).length;e=(""+e).toLowerCase(),n=!0}}function m(t,e,o){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===o||o>this.length)&&(o=this.length),o<=0)return"";if((o>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return A(this,e,o);case"utf8":case"utf-8":return S(this,e,o);case"ascii":return T(this,e,o);case"latin1":case"binary":return z(this,e,o);case"base64":return E(this,e,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,e,o);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function f(t,e,o){var n=t[e];t[e]=t[o],t[o]=n}function _(t,e,o,n,s){if(0===t.length)return-1;if("string"==typeof o?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,isNaN(o)&&(o=s?0:t.length-1),o<0&&(o=t.length+o),o>=t.length){if(s)return-1;o=t.length-1}else if(o<0){if(!s)return-1;o=0}if("string"==typeof e&&(e=l.from(e,n)),l.isBuffer(e))return 0===e.length?-1:v(t,e,o,n,s);if("number"==typeof e)return e&=255,l.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?s?Uint8Array.prototype.indexOf.call(t,e,o):Uint8Array.prototype.lastIndexOf.call(t,e,o):v(t,[e],o,n,s);throw new TypeError("val must be string, number or Buffer")}function v(t,e,o,n,s){var i,r=1,a=t.length,l=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;r=2,a/=2,l/=2,o/=2}function c(t,e){return 1===r?t[e]:t.readUInt16BE(e*r)}if(s){var u=-1;for(i=o;i<a;i++)if(c(t,i)===c(e,-1===u?0:i-u)){if(-1===u&&(u=i),i-u+1===l)return u*r}else-1!==u&&(i-=i-u),u=-1}else for(o+l>a&&(o=a-l),i=o;i>=0;i--){for(var d=!0,h=0;h<l;h++)if(c(t,i+h)!==c(e,h)){d=!1;break}if(d)return i}return-1}function y(t,e,o,n){o=Number(o)||0;var s=t.length-o;n?(n=Number(n))>s&&(n=s):n=s;var i=e.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var r=0;r<n;++r){var a=parseInt(e.substr(2*r,2),16);if(isNaN(a))return r;t[o+r]=a}return r}function b(t,e,o,n){return j(B(e,t.length-o),t,o,n)}function w(t,e,o,n){return j(function(t){for(var e=[],o=0;o<t.length;++o)e.push(255&t.charCodeAt(o));return e}(e),t,o,n)}function k(t,e,o,n){return w(t,e,o,n)}function x(t,e,o,n){return j(F(e),t,o,n)}function C(t,e,o,n){return j(function(t,e){for(var o,n,s,i=[],r=0;r<t.length&&!((e-=2)<0);++r)o=t.charCodeAt(r),n=o>>8,s=o%256,i.push(s),i.push(n);return i}(e,t.length-o),t,o,n)}function E(t,e,o){return 0===e&&o===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,o))}function S(t,e,o){o=Math.min(t.length,o);for(var n=[],s=e;s<o;){var i,r,a,l,c=t[s],u=null,d=c>239?4:c>223?3:c>191?2:1;if(s+d<=o)switch(d){case 1:c<128&&(u=c);break;case 2:128==(192&(i=t[s+1]))&&(l=(31&c)<<6|63&i)>127&&(u=l);break;case 3:i=t[s+1],r=t[s+2],128==(192&i)&&128==(192&r)&&(l=(15&c)<<12|(63&i)<<6|63&r)>2047&&(l<55296||l>57343)&&(u=l);break;case 4:i=t[s+1],r=t[s+2],a=t[s+3],128==(192&i)&&128==(192&r)&&128==(192&a)&&(l=(15&c)<<18|(63&i)<<12|(63&r)<<6|63&a)>65535&&l<1114112&&(u=l)}null===u?(u=65533,d=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|1023&u),n.push(u),s+=d}return function(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);var o="",n=0;for(;n<e;)o+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return o}(n)}e.Buffer=l,e.SlowBuffer=function(t){+t!=t&&(t=0);return l.alloc(+t)},e.INSPECT_MAX_BYTES=50,l.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=r(),l.poolSize=8192,l._augment=function(t){return t.__proto__=l.prototype,t},l.from=function(t,e,o){return c(null,t,e,o)},l.TYPED_ARRAY_SUPPORT&&(l.prototype.__proto__=Uint8Array.prototype,l.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&l[Symbol.species]===l&&Object.defineProperty(l,Symbol.species,{value:null,configurable:!0})),l.alloc=function(t,e,o){return function(t,e,o,n){return u(e),e<=0?a(t,e):void 0!==o?"string"==typeof n?a(t,e).fill(o,n):a(t,e).fill(o):a(t,e)}(null,t,e,o)},l.allocUnsafe=function(t){return d(null,t)},l.allocUnsafeSlow=function(t){return d(null,t)},l.isBuffer=function(t){return!(null==t||!t._isBuffer)},l.compare=function(t,e){if(!l.isBuffer(t)||!l.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var o=t.length,n=e.length,s=0,i=Math.min(o,n);s<i;++s)if(t[s]!==e[s]){o=t[s],n=e[s];break}return o<n?-1:n<o?1:0},l.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(t,e){if(!i(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return l.alloc(0);var o;if(void 0===e)for(e=0,o=0;o<t.length;++o)e+=t[o].length;var n=l.allocUnsafe(e),s=0;for(o=0;o<t.length;++o){var r=t[o];if(!l.isBuffer(r))throw new TypeError('"list" argument must be an Array of Buffers');r.copy(n,s),s+=r.length}return n},l.byteLength=g,l.prototype._isBuffer=!0,l.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)f(this,e,e+1);return this},l.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)f(this,e,e+3),f(this,e+1,e+2);return this},l.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)f(this,e,e+7),f(this,e+1,e+6),f(this,e+2,e+5),f(this,e+3,e+4);return this},l.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?S(this,0,t):m.apply(this,arguments)},l.prototype.equals=function(t){if(!l.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===l.compare(this,t)},l.prototype.inspect=function(){var t="",o=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,o).match(/.{2}/g).join(" "),this.length>o&&(t+=" ... ")),"<Buffer "+t+">"},l.prototype.compare=function(t,e,o,n,s){if(!l.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===o&&(o=t?t.length:0),void 0===n&&(n=0),void 0===s&&(s=this.length),e<0||o>t.length||n<0||s>this.length)throw new RangeError("out of range index");if(n>=s&&e>=o)return 0;if(n>=s)return-1;if(e>=o)return 1;if(this===t)return 0;for(var i=(s>>>=0)-(n>>>=0),r=(o>>>=0)-(e>>>=0),a=Math.min(i,r),c=this.slice(n,s),u=t.slice(e,o),d=0;d<a;++d)if(c[d]!==u[d]){i=c[d],r=u[d];break}return i<r?-1:r<i?1:0},l.prototype.includes=function(t,e,o){return-1!==this.indexOf(t,e,o)},l.prototype.indexOf=function(t,e,o){return _(this,t,e,o,!0)},l.prototype.lastIndexOf=function(t,e,o){return _(this,t,e,o,!1)},l.prototype.write=function(t,e,o,n){if(void 0===e)n="utf8",o=this.length,e=0;else if(void 0===o&&"string"==typeof e)n=e,o=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(o)?(o|=0,void 0===n&&(n="utf8")):(n=o,o=void 0)}var s=this.length-e;if((void 0===o||o>s)&&(o=s),t.length>0&&(o<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return y(this,t,e,o);case"utf8":case"utf-8":return b(this,t,e,o);case"ascii":return w(this,t,e,o);case"latin1":case"binary":return k(this,t,e,o);case"base64":return x(this,t,e,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,t,e,o);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function T(t,e,o){var n="";o=Math.min(t.length,o);for(var s=e;s<o;++s)n+=String.fromCharCode(127&t[s]);return n}function z(t,e,o){var n="";o=Math.min(t.length,o);for(var s=e;s<o;++s)n+=String.fromCharCode(t[s]);return n}function A(t,e,o){var n=t.length;(!e||e<0)&&(e=0),(!o||o<0||o>n)&&(o=n);for(var s="",i=e;i<o;++i)s+=V(t[i]);return s}function O(t,e,o){for(var n=t.slice(e,o),s="",i=0;i<n.length;i+=2)s+=String.fromCharCode(n[i]+256*n[i+1]);return s}function M(t,e,o){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>o)throw new RangeError("Trying to access beyond buffer length")}function I(t,e,o,n,s,i){if(!l.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>s||e<i)throw new RangeError('"value" argument is out of bounds');if(o+n>t.length)throw new RangeError("Index out of range")}function P(t,e,o,n){e<0&&(e=65535+e+1);for(var s=0,i=Math.min(t.length-o,2);s<i;++s)t[o+s]=(e&255<<8*(n?s:1-s))>>>8*(n?s:1-s)}function L(t,e,o,n){e<0&&(e=4294967295+e+1);for(var s=0,i=Math.min(t.length-o,4);s<i;++s)t[o+s]=e>>>8*(n?s:3-s)&255}function N(t,e,o,n,s,i){if(o+n>t.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function D(t,e,o,n,i){return i||N(t,0,o,4),s.write(t,e,o,n,23,4),o+4}function H(t,e,o,n,i){return i||N(t,0,o,8),s.write(t,e,o,n,52,8),o+8}l.prototype.slice=function(t,e){var o,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),l.TYPED_ARRAY_SUPPORT)(o=this.subarray(t,e)).__proto__=l.prototype;else{var s=e-t;o=new l(s,void 0);for(var i=0;i<s;++i)o[i]=this[i+t]}return o},l.prototype.readUIntLE=function(t,e,o){t|=0,e|=0,o||M(t,e,this.length);for(var n=this[t],s=1,i=0;++i<e&&(s*=256);)n+=this[t+i]*s;return n},l.prototype.readUIntBE=function(t,e,o){t|=0,e|=0,o||M(t,e,this.length);for(var n=this[t+--e],s=1;e>0&&(s*=256);)n+=this[t+--e]*s;return n},l.prototype.readUInt8=function(t,e){return e||M(t,1,this.length),this[t]},l.prototype.readUInt16LE=function(t,e){return e||M(t,2,this.length),this[t]|this[t+1]<<8},l.prototype.readUInt16BE=function(t,e){return e||M(t,2,this.length),this[t]<<8|this[t+1]},l.prototype.readUInt32LE=function(t,e){return e||M(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},l.prototype.readUInt32BE=function(t,e){return e||M(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},l.prototype.readIntLE=function(t,e,o){t|=0,e|=0,o||M(t,e,this.length);for(var n=this[t],s=1,i=0;++i<e&&(s*=256);)n+=this[t+i]*s;return n>=(s*=128)&&(n-=Math.pow(2,8*e)),n},l.prototype.readIntBE=function(t,e,o){t|=0,e|=0,o||M(t,e,this.length);for(var n=e,s=1,i=this[t+--n];n>0&&(s*=256);)i+=this[t+--n]*s;return i>=(s*=128)&&(i-=Math.pow(2,8*e)),i},l.prototype.readInt8=function(t,e){return e||M(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},l.prototype.readInt16LE=function(t,e){e||M(t,2,this.length);var o=this[t]|this[t+1]<<8;return 32768&o?4294901760|o:o},l.prototype.readInt16BE=function(t,e){e||M(t,2,this.length);var o=this[t+1]|this[t]<<8;return 32768&o?4294901760|o:o},l.prototype.readInt32LE=function(t,e){return e||M(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},l.prototype.readInt32BE=function(t,e){return e||M(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},l.prototype.readFloatLE=function(t,e){return e||M(t,4,this.length),s.read(this,t,!0,23,4)},l.prototype.readFloatBE=function(t,e){return e||M(t,4,this.length),s.read(this,t,!1,23,4)},l.prototype.readDoubleLE=function(t,e){return e||M(t,8,this.length),s.read(this,t,!0,52,8)},l.prototype.readDoubleBE=function(t,e){return e||M(t,8,this.length),s.read(this,t,!1,52,8)},l.prototype.writeUIntLE=function(t,e,o,n){(t=+t,e|=0,o|=0,n)||I(this,t,e,o,Math.pow(2,8*o)-1,0);var s=1,i=0;for(this[e]=255&t;++i<o&&(s*=256);)this[e+i]=t/s&255;return e+o},l.prototype.writeUIntBE=function(t,e,o,n){(t=+t,e|=0,o|=0,n)||I(this,t,e,o,Math.pow(2,8*o)-1,0);var s=o-1,i=1;for(this[e+s]=255&t;--s>=0&&(i*=256);)this[e+s]=t/i&255;return e+o},l.prototype.writeUInt8=function(t,e,o){return t=+t,e|=0,o||I(this,t,e,1,255,0),l.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},l.prototype.writeUInt16LE=function(t,e,o){return t=+t,e|=0,o||I(this,t,e,2,65535,0),l.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):P(this,t,e,!0),e+2},l.prototype.writeUInt16BE=function(t,e,o){return t=+t,e|=0,o||I(this,t,e,2,65535,0),l.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):P(this,t,e,!1),e+2},l.prototype.writeUInt32LE=function(t,e,o){return t=+t,e|=0,o||I(this,t,e,4,4294967295,0),l.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):L(this,t,e,!0),e+4},l.prototype.writeUInt32BE=function(t,e,o){return t=+t,e|=0,o||I(this,t,e,4,4294967295,0),l.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):L(this,t,e,!1),e+4},l.prototype.writeIntLE=function(t,e,o,n){if(t=+t,e|=0,!n){var s=Math.pow(2,8*o-1);I(this,t,e,o,s-1,-s)}var i=0,r=1,a=0;for(this[e]=255&t;++i<o&&(r*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/r>>0)-a&255;return e+o},l.prototype.writeIntBE=function(t,e,o,n){if(t=+t,e|=0,!n){var s=Math.pow(2,8*o-1);I(this,t,e,o,s-1,-s)}var i=o-1,r=1,a=0;for(this[e+i]=255&t;--i>=0&&(r*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/r>>0)-a&255;return e+o},l.prototype.writeInt8=function(t,e,o){return t=+t,e|=0,o||I(this,t,e,1,127,-128),l.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},l.prototype.writeInt16LE=function(t,e,o){return t=+t,e|=0,o||I(this,t,e,2,32767,-32768),l.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):P(this,t,e,!0),e+2},l.prototype.writeInt16BE=function(t,e,o){return t=+t,e|=0,o||I(this,t,e,2,32767,-32768),l.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):P(this,t,e,!1),e+2},l.prototype.writeInt32LE=function(t,e,o){return t=+t,e|=0,o||I(this,t,e,4,2147483647,-2147483648),l.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):L(this,t,e,!0),e+4},l.prototype.writeInt32BE=function(t,e,o){return t=+t,e|=0,o||I(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),l.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):L(this,t,e,!1),e+4},l.prototype.writeFloatLE=function(t,e,o){return D(this,t,e,!0,o)},l.prototype.writeFloatBE=function(t,e,o){return D(this,t,e,!1,o)},l.prototype.writeDoubleLE=function(t,e,o){return H(this,t,e,!0,o)},l.prototype.writeDoubleBE=function(t,e,o){return H(this,t,e,!1,o)},l.prototype.copy=function(t,e,o,n){if(o||(o=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<o&&(n=o),n===o)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-o&&(n=t.length-e+o);var s,i=n-o;if(this===t&&o<e&&e<n)for(s=i-1;s>=0;--s)t[s+e]=this[s+o];else if(i<1e3||!l.TYPED_ARRAY_SUPPORT)for(s=0;s<i;++s)t[s+e]=this[s+o];else Uint8Array.prototype.set.call(t,this.subarray(o,o+i),e);return i},l.prototype.fill=function(t,e,o,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,o=this.length):"string"==typeof o&&(n=o,o=this.length),1===t.length){var s=t.charCodeAt(0);s<256&&(t=s)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<o)throw new RangeError("Out of range index");if(o<=e)return this;var i;if(e>>>=0,o=void 0===o?this.length:o>>>0,t||(t=0),"number"==typeof t)for(i=e;i<o;++i)this[i]=t;else{var r=l.isBuffer(t)?t:B(new l(t,n).toString()),a=r.length;for(i=0;i<o-e;++i)this[i+e]=r[i%a]}return this};var R=/[^+\/0-9A-Za-z-_]/g;function V(t){return t<16?"0"+t.toString(16):t.toString(16)}function B(t,e){var o;e=e||1/0;for(var n=t.length,s=null,i=[],r=0;r<n;++r){if((o=t.charCodeAt(r))>55295&&o<57344){if(!s){if(o>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(r+1===n){(e-=3)>-1&&i.push(239,191,189);continue}s=o;continue}if(o<56320){(e-=3)>-1&&i.push(239,191,189),s=o;continue}o=65536+(s-55296<<10|o-56320)}else s&&(e-=3)>-1&&i.push(239,191,189);if(s=null,o<128){if((e-=1)<0)break;i.push(o)}else if(o<2048){if((e-=2)<0)break;i.push(o>>6|192,63&o|128)}else if(o<65536){if((e-=3)<0)break;i.push(o>>12|224,o>>6&63|128,63&o|128)}else{if(!(o<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(o>>18|240,o>>12&63|128,o>>6&63|128,63&o|128)}}return i}function F(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(R,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function j(t,e,o,n){for(var s=0;s<n&&!(s+o>=e.length||s>=t.length);++s)e[s+o]=t[s];return s}}).call(this,o(4))},function(t,e,o){"use strict";var n,s="object"==typeof Reflect?Reflect:null,i=s&&"function"==typeof s.apply?s.apply:function(t,e,o){return Function.prototype.apply.call(t,e,o)};n=s&&"function"==typeof s.ownKeys?s.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var r=Number.isNaN||function(t){return t!=t};function a(){a.init.call(this)}t.exports=a,a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var l=10;function c(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function u(t){return void 0===t._maxListeners?a.defaultMaxListeners:t._maxListeners}function d(t,e,o,n){var s,i,r,a;if(c(o),void 0===(i=t._events)?(i=t._events=Object.create(null),t._eventsCount=0):(void 0!==i.newListener&&(t.emit("newListener",e,o.listener?o.listener:o),i=t._events),r=i[e]),void 0===r)r=i[e]=o,++t._eventsCount;else if("function"==typeof r?r=i[e]=n?[o,r]:[r,o]:n?r.unshift(o):r.push(o),(s=u(t))>0&&r.length>s&&!r.warned){r.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+r.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=t,l.type=e,l.count=r.length,a=l,console&&console.warn&&console.warn(a)}return t}function h(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function p(t,e,o){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:o},s=h.bind(n);return s.listener=o,n.wrapFn=s,s}function g(t,e,o){var n=t._events;if(void 0===n)return[];var s=n[e];return void 0===s?[]:"function"==typeof s?o?[s.listener||s]:[s]:o?function(t){for(var e=new Array(t.length),o=0;o<e.length;++o)e[o]=t[o].listener||t[o];return e}(s):f(s,s.length)}function m(t){var e=this._events;if(void 0!==e){var o=e[t];if("function"==typeof o)return 1;if(void 0!==o)return o.length}return 0}function f(t,e){for(var o=new Array(e),n=0;n<e;++n)o[n]=t[n];return o}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return l},set:function(t){if("number"!=typeof t||t<0||r(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");l=t}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||r(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},a.prototype.getMaxListeners=function(){return u(this)},a.prototype.emit=function(t){for(var e=[],o=1;o<arguments.length;o++)e.push(arguments[o]);var n="error"===t,s=this._events;if(void 0!==s)n=n&&void 0===s.error;else if(!n)return!1;if(n){var r;if(e.length>0&&(r=e[0]),r instanceof Error)throw r;var a=new Error("Unhandled error."+(r?" ("+r.message+")":""));throw a.context=r,a}var l=s[t];if(void 0===l)return!1;if("function"==typeof l)i(l,this,e);else{var c=l.length,u=f(l,c);for(o=0;o<c;++o)i(u[o],this,e)}return!0},a.prototype.addListener=function(t,e){return d(this,t,e,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(t,e){return d(this,t,e,!0)},a.prototype.once=function(t,e){return c(e),this.on(t,p(this,t,e)),this},a.prototype.prependOnceListener=function(t,e){return c(e),this.prependListener(t,p(this,t,e)),this},a.prototype.removeListener=function(t,e){var o,n,s,i,r;if(c(e),void 0===(n=this._events))return this;if(void 0===(o=n[t]))return this;if(o===e||o.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete n[t],n.removeListener&&this.emit("removeListener",t,o.listener||e));else if("function"!=typeof o){for(s=-1,i=o.length-1;i>=0;i--)if(o[i]===e||o[i].listener===e){r=o[i].listener,s=i;break}if(s<0)return this;0===s?o.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(o,s),1===o.length&&(n[t]=o[0]),void 0!==n.removeListener&&this.emit("removeListener",t,r||e)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(t){var e,o,n;if(void 0===(o=this._events))return this;if(void 0===o.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==o[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete o[t]),this;if(0===arguments.length){var s,i=Object.keys(o);for(n=0;n<i.length;++n)"removeListener"!==(s=i[n])&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=o[t]))this.removeListener(t,e);else if(void 0!==e)for(n=e.length-1;n>=0;n--)this.removeListener(t,e[n]);return this},a.prototype.listeners=function(t){return g(this,t,!0)},a.prototype.rawListeners=function(t){return g(this,t,!1)},a.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):m.call(t,e)},a.prototype.listenerCount=m,a.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]}},function(t,e){var o,n,s=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function a(t){if(o===setTimeout)return setTimeout(t,0);if((o===i||!o)&&setTimeout)return o=setTimeout,setTimeout(t,0);try{return o(t,0)}catch(e){try{return o.call(null,t,0)}catch(e){return o.call(this,t,0)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:i}catch(t){o=i}try{n="function"==typeof clearTimeout?clearTimeout:r}catch(t){n=r}}();var l,c=[],u=!1,d=-1;function h(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&p())}function p(){if(!u){var t=a(h);u=!0;for(var e=c.length;e;){for(l=c,c=[];++d<e;)l&&l[d].run();d=-1,e=c.length}l=null,u=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===r||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function m(){}s.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];c.push(new g(t,e)),1!==c.length||u||a(p)},g.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(t){return[]},s.binding=function(t){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(t){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},function(t,e,o){"use strict";(function(e){void 0===e||!e.version||0===e.version.indexOf("v0.")||0===e.version.indexOf("v1.")&&0!==e.version.indexOf("v1.8.")?t.exports={nextTick:function(t,o,n,s){if("function"!=typeof t)throw new TypeError('"callback" argument must be a function');var i,r,a=arguments.length;switch(a){case 0:case 1:return e.nextTick(t);case 2:return e.nextTick((function(){t.call(null,o)}));case 3:return e.nextTick((function(){t.call(null,o,n)}));case 4:return e.nextTick((function(){t.call(null,o,n,s)}));default:for(i=new Array(a-1),r=0;r<i.length;)i[r++]=arguments[r];return e.nextTick((function(){t.apply(null,i)}))}}}:t.exports=e}).call(this,o(11))},function(t,e){(function(){e.defaults={.1:{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},.2:{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:"\n"},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}}}).call(this)},function(t,e,o){(function(){var e,n,s,i,r,a,l,c,u={}.hasOwnProperty;c=o(2),l=c.isObject,a=c.isFunction,r=c.getValue,i=o(1),e=o(0),n=o(34),s=o(15),t.exports=function(t){function o(t,n,s){var i,r,a,l;if(o.__super__.constructor.call(this,t),null==n)throw new Error("Missing element name. "+this.debugInfo());if(this.name=this.stringify.name(n),this.type=e.Element,this.attribs={},this.schemaTypeInfo=null,null!=s&&this.attribute(s),t.type===e.Document&&(this.isRoot=!0,this.documentObject=t,t.rootObject=this,t.children))for(r=0,a=(l=t.children).length;r<a;r++)if((i=l[r]).type===e.DocType){i.name=this.name;break}}return function(t,e){for(var o in e)u.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(o,t),Object.defineProperty(o.prototype,"tagName",{get:function(){return this.name}}),Object.defineProperty(o.prototype,"namespaceURI",{get:function(){return""}}),Object.defineProperty(o.prototype,"prefix",{get:function(){return""}}),Object.defineProperty(o.prototype,"localName",{get:function(){return this.name}}),Object.defineProperty(o.prototype,"id",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(o.prototype,"className",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(o.prototype,"classList",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(o.prototype,"attributes",{get:function(){return this.attributeMap&&this.attributeMap.nodes||(this.attributeMap=new s(this.attribs)),this.attributeMap}}),o.prototype.clone=function(){var t,e,o,n;for(e in(o=Object.create(this)).isRoot&&(o.documentObject=null),o.attribs={},n=this.attribs)u.call(n,e)&&(t=n[e],o.attribs[e]=t.clone());return o.children=[],this.children.forEach((function(t){var e;return(e=t.clone()).parent=o,o.children.push(e)})),o},o.prototype.attribute=function(t,e){var o,s;if(null!=t&&(t=r(t)),l(t))for(o in t)u.call(t,o)&&(s=t[o],this.attribute(o,s));else a(e)&&(e=e.apply()),this.options.keepNullAttributes&&null==e?this.attribs[t]=new n(this,t,""):null!=e&&(this.attribs[t]=new n(this,t,e));return this},o.prototype.removeAttribute=function(t){var e,o,n;if(null==t)throw new Error("Missing attribute name. "+this.debugInfo());if(t=r(t),Array.isArray(t))for(o=0,n=t.length;o<n;o++)e=t[o],delete this.attribs[e];else delete this.attribs[t];return this},o.prototype.toString=function(t){return this.options.writer.element(this,this.options.writer.filterOptions(t))},o.prototype.att=function(t,e){return this.attribute(t,e)},o.prototype.a=function(t,e){return this.attribute(t,e)},o.prototype.getAttribute=function(t){return this.attribs.hasOwnProperty(t)?this.attribs[t].value:null},o.prototype.setAttribute=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.getAttributeNode=function(t){return this.attribs.hasOwnProperty(t)?this.attribs[t]:null},o.prototype.setAttributeNode=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.removeAttributeNode=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.getElementsByTagName=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.getAttributeNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.setAttributeNS=function(t,e,o){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.removeAttributeNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.getAttributeNodeNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.setAttributeNodeNS=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.getElementsByTagNameNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.hasAttribute=function(t){return this.attribs.hasOwnProperty(t)},o.prototype.hasAttributeNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.setIdAttribute=function(t,e){return this.attribs.hasOwnProperty(t)?this.attribs[t].isId:e},o.prototype.setIdAttributeNS=function(t,e,o){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.setIdAttributeNode=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.getElementsByTagName=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.getElementsByTagNameNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.getElementsByClassName=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.isEqualNode=function(t){var e,n,s;if(!o.__super__.isEqualNode.apply(this,arguments).isEqualNode(t))return!1;if(t.namespaceURI!==this.namespaceURI)return!1;if(t.prefix!==this.prefix)return!1;if(t.localName!==this.localName)return!1;if(t.attribs.length!==this.attribs.length)return!1;for(e=n=0,s=this.attribs.length-1;0<=s?n<=s:n>=s;e=0<=s?++n:--n)if(!this.attribs[e].isEqualNode(t.attribs[e]))return!1;return!0},o}(i)}).call(this)},function(t,e){(function(){t.exports=function(){function t(t){this.nodes=t}return Object.defineProperty(t.prototype,"length",{get:function(){return Object.keys(this.nodes).length||0}}),t.prototype.clone=function(){return this.nodes=null},t.prototype.getNamedItem=function(t){return this.nodes[t]},t.prototype.setNamedItem=function(t){var e;return e=this.nodes[t.nodeName],this.nodes[t.nodeName]=t,e||null},t.prototype.removeNamedItem=function(t){var e;return e=this.nodes[t],delete this.nodes[t],e||null},t.prototype.item=function(t){return this.nodes[Object.keys(this.nodes)[t]]||null},t.prototype.getNamedItemNS=function(t,e){throw new Error("This DOM method is not implemented.")},t.prototype.setNamedItemNS=function(t){throw new Error("This DOM method is not implemented.")},t.prototype.removeNamedItemNS=function(t,e){throw new Error("This DOM method is not implemented.")},t}()}).call(this)},function(t,e,o){(function(){var e,n,s={}.hasOwnProperty;e=o(0),n=o(7),t.exports=function(t){function o(t,n){if(o.__super__.constructor.call(this,t),null==n)throw new Error("Missing CDATA text. "+this.debugInfo());this.name="#cdata-section",this.type=e.CData,this.value=this.stringify.cdata(n)}return function(t,e){for(var o in e)s.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(o,t),o.prototype.clone=function(){return Object.create(this)},o.prototype.toString=function(t){return this.options.writer.cdata(this,this.options.writer.filterOptions(t))},o}(n)}).call(this)},function(t,e,o){(function(){var e,n,s={}.hasOwnProperty;e=o(0),n=o(7),t.exports=function(t){function o(t,n){if(o.__super__.constructor.call(this,t),null==n)throw new Error("Missing comment text. "+this.debugInfo());this.name="#comment",this.type=e.Comment,this.value=this.stringify.comment(n)}return function(t,e){for(var o in e)s.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(o,t),o.prototype.clone=function(){return Object.create(this)},o.prototype.toString=function(t){return this.options.writer.comment(this,this.options.writer.filterOptions(t))},o}(n)}).call(this)},function(t,e,o){(function(){var e,n,s,i={}.hasOwnProperty;s=o(2).isObject,n=o(1),e=o(0),t.exports=function(t){function o(t,n,i,r){var a;o.__super__.constructor.call(this,t),s(n)&&(n=(a=n).version,i=a.encoding,r=a.standalone),n||(n="1.0"),this.type=e.Declaration,this.version=this.stringify.xmlVersion(n),null!=i&&(this.encoding=this.stringify.xmlEncoding(i)),null!=r&&(this.standalone=this.stringify.xmlStandalone(r))}return function(t,e){for(var o in e)i.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(o,t),o.prototype.toString=function(t){return this.options.writer.declaration(this,this.options.writer.filterOptions(t))},o}(n)}).call(this)},function(t,e,o){(function(){var e,n,s,i,r,a,l,c,u={}.hasOwnProperty;c=o(2).isObject,l=o(1),e=o(0),n=o(20),i=o(21),s=o(22),r=o(23),a=o(15),t.exports=function(t){function o(t,n,s){var i,r,a,l,u,d;if(o.__super__.constructor.call(this,t),this.type=e.DocType,t.children)for(r=0,a=(l=t.children).length;r<a;r++)if((i=l[r]).type===e.Element){this.name=i.name;break}this.documentObject=t,c(n)&&(n=(u=n).pubID,s=u.sysID),null==s&&(s=(d=[n,s])[0],n=d[1]),null!=n&&(this.pubID=this.stringify.dtdPubID(n)),null!=s&&(this.sysID=this.stringify.dtdSysID(s))}return function(t,e){for(var o in e)u.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(o,t),Object.defineProperty(o.prototype,"entities",{get:function(){var t,o,n,s,i;for(s={},o=0,n=(i=this.children).length;o<n;o++)(t=i[o]).type!==e.EntityDeclaration||t.pe||(s[t.name]=t);return new a(s)}}),Object.defineProperty(o.prototype,"notations",{get:function(){var t,o,n,s,i;for(s={},o=0,n=(i=this.children).length;o<n;o++)(t=i[o]).type===e.NotationDeclaration&&(s[t.name]=t);return new a(s)}}),Object.defineProperty(o.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(o.prototype,"systemId",{get:function(){return this.sysID}}),Object.defineProperty(o.prototype,"internalSubset",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),o.prototype.element=function(t,e){var o;return o=new s(this,t,e),this.children.push(o),this},o.prototype.attList=function(t,e,o,s,i){var r;return r=new n(this,t,e,o,s,i),this.children.push(r),this},o.prototype.entity=function(t,e){var o;return o=new i(this,!1,t,e),this.children.push(o),this},o.prototype.pEntity=function(t,e){var o;return o=new i(this,!0,t,e),this.children.push(o),this},o.prototype.notation=function(t,e){var o;return o=new r(this,t,e),this.children.push(o),this},o.prototype.toString=function(t){return this.options.writer.docType(this,this.options.writer.filterOptions(t))},o.prototype.ele=function(t,e){return this.element(t,e)},o.prototype.att=function(t,e,o,n,s){return this.attList(t,e,o,n,s)},o.prototype.ent=function(t,e){return this.entity(t,e)},o.prototype.pent=function(t,e){return this.pEntity(t,e)},o.prototype.not=function(t,e){return this.notation(t,e)},o.prototype.up=function(){return this.root()||this.documentObject},o.prototype.isEqualNode=function(t){return!!o.__super__.isEqualNode.apply(this,arguments).isEqualNode(t)&&(t.name===this.name&&(t.publicId===this.publicId&&t.systemId===this.systemId))},o}(l)}).call(this)},function(t,e,o){(function(){var e,n,s={}.hasOwnProperty;n=o(1),e=o(0),t.exports=function(t){function o(t,n,s,i,r,a){if(o.__super__.constructor.call(this,t),null==n)throw new Error("Missing DTD element name. "+this.debugInfo());if(null==s)throw new Error("Missing DTD attribute name. "+this.debugInfo(n));if(!i)throw new Error("Missing DTD attribute type. "+this.debugInfo(n));if(!r)throw new Error("Missing DTD attribute default. "+this.debugInfo(n));if(0!==r.indexOf("#")&&(r="#"+r),!r.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. "+this.debugInfo(n));if(a&&!r.match(/^(#FIXED|#DEFAULT)$/))throw new Error("Default value only applies to #FIXED or #DEFAULT. "+this.debugInfo(n));this.elementName=this.stringify.name(n),this.type=e.AttributeDeclaration,this.attributeName=this.stringify.name(s),this.attributeType=this.stringify.dtdAttType(i),a&&(this.defaultValue=this.stringify.dtdAttDefault(a)),this.defaultValueType=r}return function(t,e){for(var o in e)s.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(o,t),o.prototype.toString=function(t){return this.options.writer.dtdAttList(this,this.options.writer.filterOptions(t))},o}(n)}).call(this)},function(t,e,o){(function(){var e,n,s,i={}.hasOwnProperty;s=o(2).isObject,n=o(1),e=o(0),t.exports=function(t){function o(t,n,i,r){if(o.__super__.constructor.call(this,t),null==i)throw new Error("Missing DTD entity name. "+this.debugInfo(i));if(null==r)throw new Error("Missing DTD entity value. "+this.debugInfo(i));if(this.pe=!!n,this.name=this.stringify.name(i),this.type=e.EntityDeclaration,s(r)){if(!r.pubID&&!r.sysID)throw new Error("Public and/or system identifiers are required for an external entity. "+this.debugInfo(i));if(r.pubID&&!r.sysID)throw new Error("System identifier is required for a public external entity. "+this.debugInfo(i));if(this.internal=!1,null!=r.pubID&&(this.pubID=this.stringify.dtdPubID(r.pubID)),null!=r.sysID&&(this.sysID=this.stringify.dtdSysID(r.sysID)),null!=r.nData&&(this.nData=this.stringify.dtdNData(r.nData)),this.pe&&this.nData)throw new Error("Notation declaration is not allowed in a parameter entity. "+this.debugInfo(i))}else this.value=this.stringify.dtdEntityValue(r),this.internal=!0}return function(t,e){for(var o in e)i.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(o,t),Object.defineProperty(o.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(o.prototype,"systemId",{get:function(){return this.sysID}}),Object.defineProperty(o.prototype,"notationName",{get:function(){return this.nData||null}}),Object.defineProperty(o.prototype,"inputEncoding",{get:function(){return null}}),Object.defineProperty(o.prototype,"xmlEncoding",{get:function(){return null}}),Object.defineProperty(o.prototype,"xmlVersion",{get:function(){return null}}),o.prototype.toString=function(t){return this.options.writer.dtdEntity(this,this.options.writer.filterOptions(t))},o}(n)}).call(this)},function(t,e,o){(function(){var e,n,s={}.hasOwnProperty;n=o(1),e=o(0),t.exports=function(t){function o(t,n,s){if(o.__super__.constructor.call(this,t),null==n)throw new Error("Missing DTD element name. "+this.debugInfo());s||(s="(#PCDATA)"),Array.isArray(s)&&(s="("+s.join(",")+")"),this.name=this.stringify.name(n),this.type=e.ElementDeclaration,this.value=this.stringify.dtdElementValue(s)}return function(t,e){for(var o in e)s.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(o,t),o.prototype.toString=function(t){return this.options.writer.dtdElement(this,this.options.writer.filterOptions(t))},o}(n)}).call(this)},function(t,e,o){(function(){var e,n,s={}.hasOwnProperty;n=o(1),e=o(0),t.exports=function(t){function o(t,n,s){if(o.__super__.constructor.call(this,t),null==n)throw new Error("Missing DTD notation name. "+this.debugInfo(n));if(!s.pubID&&!s.sysID)throw new Error("Public or system identifiers are required for an external entity. "+this.debugInfo(n));this.name=this.stringify.name(n),this.type=e.NotationDeclaration,null!=s.pubID&&(this.pubID=this.stringify.dtdPubID(s.pubID)),null!=s.sysID&&(this.sysID=this.stringify.dtdSysID(s.sysID))}return function(t,e){for(var o in e)s.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(o,t),Object.defineProperty(o.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(o.prototype,"systemId",{get:function(){return this.sysID}}),o.prototype.toString=function(t){return this.options.writer.dtdNotation(this,this.options.writer.filterOptions(t))},o}(n)}).call(this)},function(t,e,o){(function(){var e,n,s={}.hasOwnProperty;e=o(0),n=o(1),t.exports=function(t){function o(t,n){if(o.__super__.constructor.call(this,t),null==n)throw new Error("Missing raw text. "+this.debugInfo());this.type=e.Raw,this.value=this.stringify.raw(n)}return function(t,e){for(var o in e)s.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(o,t),o.prototype.clone=function(){return Object.create(this)},o.prototype.toString=function(t){return this.options.writer.raw(this,this.options.writer.filterOptions(t))},o}(n)}).call(this)},function(t,e,o){(function(){var e,n,s={}.hasOwnProperty;e=o(0),n=o(7),t.exports=function(t){function o(t,n){if(o.__super__.constructor.call(this,t),null==n)throw new Error("Missing element text. "+this.debugInfo());this.name="#text",this.type=e.Text,this.value=this.stringify.text(n)}return function(t,e){for(var o in e)s.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(o,t),Object.defineProperty(o.prototype,"isElementContentWhitespace",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(o.prototype,"wholeText",{get:function(){var t,e,o;for(o="",e=this.previousSibling;e;)o=e.data+o,e=e.previousSibling;for(o+=this.data,t=this.nextSibling;t;)o+=t.data,t=t.nextSibling;return o}}),o.prototype.clone=function(){return Object.create(this)},o.prototype.toString=function(t){return this.options.writer.text(this,this.options.writer.filterOptions(t))},o.prototype.splitText=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.replaceWholeText=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},o}(n)}).call(this)},function(t,e,o){(function(){var e,n,s={}.hasOwnProperty;e=o(0),n=o(7),t.exports=function(t){function o(t,n,s){if(o.__super__.constructor.call(this,t),null==n)throw new Error("Missing instruction target. "+this.debugInfo());this.type=e.ProcessingInstruction,this.target=this.stringify.insTarget(n),this.name=this.target,s&&(this.value=this.stringify.insValue(s))}return function(t,e){for(var o in e)s.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(o,t),o.prototype.clone=function(){return Object.create(this)},o.prototype.toString=function(t){return this.options.writer.processingInstruction(this,this.options.writer.filterOptions(t))},o.prototype.isEqualNode=function(t){return!!o.__super__.isEqualNode.apply(this,arguments).isEqualNode(t)&&t.target===this.target},o}(n)}).call(this)},function(t,e,o){(function(){var e,n={}.hasOwnProperty;e=o(37),t.exports=function(t){function e(t){e.__super__.constructor.call(this,t)}return function(t,e){for(var o in e)n.call(e,o)&&(t[o]=e[o]);function s(){this.constructor=t}s.prototype=e.prototype,t.prototype=new s,t.__super__=e.prototype}(e,t),e.prototype.document=function(t,e){var o,n,s,i,r;for(e=this.filterOptions(e),i="",n=0,s=(r=t.children).length;n<s;n++)o=r[n],i+=this.writeChildNode(o,e,0);return e.pretty&&i.slice(-e.newline.length)===e.newline&&(i=i.slice(0,-e.newline.length)),i},e}(e)}).call(this)},function(t,e,o){(e=t.exports=o(39)).Stream=e,e.Readable=e,e.Writable=o(30),e.Duplex=o(3),e.Transform=o(43),e.PassThrough=o(71)},function(t,e,o){var n=o(9),s=n.Buffer;function i(t,e){for(var o in t)e[o]=t[o]}function r(t,e,o){return s(t,e,o)}s.from&&s.alloc&&s.allocUnsafe&&s.allocUnsafeSlow?t.exports=n:(i(n,e),e.Buffer=r),i(s,r),r.from=function(t,e,o){if("number"==typeof t)throw new TypeError("Argument must not be a number");return s(t,e,o)},r.alloc=function(t,e,o){if("number"!=typeof t)throw new TypeError("Argument must be a number");var n=s(t);return void 0!==e?"string"==typeof o?n.fill(e,o):n.fill(e):n.fill(0),n},r.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return s(t)},r.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return n.SlowBuffer(t)}},function(t,e,o){"use strict";(function(e,n,s){var i=o(12);function r(t){var e=this;this.next=null,this.entry=null,this.finish=function(){!function(t,e,o){var n=t.entry;t.entry=null;for(;n;){var s=n.callback;e.pendingcb--,s(o),n=n.next}e.corkedRequestsFree?e.corkedRequestsFree.next=t:e.corkedRequestsFree=t}(e,t)}}t.exports=v;var a,l=!e.browser&&["v0.10","v0.9."].indexOf(e.version.slice(0,5))>-1?n:i.nextTick;v.WritableState=_;var c=Object.create(o(6));c.inherits=o(5);var u={deprecate:o(69)},d=o(40),h=o(29).Buffer,p=s.Uint8Array||function(){};var g,m=o(41);function f(){}function _(t,e){a=a||o(3),t=t||{};var n=e instanceof a;this.objectMode=!!t.objectMode,n&&(this.objectMode=this.objectMode||!!t.writableObjectMode);var s=t.highWaterMark,c=t.writableHighWaterMark,u=this.objectMode?16:16384;this.highWaterMark=s||0===s?s:n&&(c||0===c)?c:u,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var d=!1===t.decodeStrings;this.decodeStrings=!d,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){!function(t,e){var o=t._writableState,n=o.sync,s=o.writecb;if(function(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}(o),e)!function(t,e,o,n,s){--e.pendingcb,o?(i.nextTick(s,n),i.nextTick(C,t,e),t._writableState.errorEmitted=!0,t.emit("error",n)):(s(n),t._writableState.errorEmitted=!0,t.emit("error",n),C(t,e))}(t,o,n,e,s);else{var r=k(o);r||o.corked||o.bufferProcessing||!o.bufferedRequest||w(t,o),n?l(b,t,o,r,s):b(t,o,r,s)}}(e,t)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new r(this)}function v(t){if(a=a||o(3),!(g.call(v,this)||this instanceof a))return new v(t);this._writableState=new _(t,this),this.writable=!0,t&&("function"==typeof t.write&&(this._write=t.write),"function"==typeof t.writev&&(this._writev=t.writev),"function"==typeof t.destroy&&(this._destroy=t.destroy),"function"==typeof t.final&&(this._final=t.final)),d.call(this)}function y(t,e,o,n,s,i,r){e.writelen=n,e.writecb=r,e.writing=!0,e.sync=!0,o?t._writev(s,e.onwrite):t._write(s,i,e.onwrite),e.sync=!1}function b(t,e,o,n){o||function(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}(t,e),e.pendingcb--,n(),C(t,e)}function w(t,e){e.bufferProcessing=!0;var o=e.bufferedRequest;if(t._writev&&o&&o.next){var n=e.bufferedRequestCount,s=new Array(n),i=e.corkedRequestsFree;i.entry=o;for(var a=0,l=!0;o;)s[a]=o,o.isBuf||(l=!1),o=o.next,a+=1;s.allBuffers=l,y(t,e,!0,e.length,s,"",i.finish),e.pendingcb++,e.lastBufferedRequest=null,i.next?(e.corkedRequestsFree=i.next,i.next=null):e.corkedRequestsFree=new r(e),e.bufferedRequestCount=0}else{for(;o;){var c=o.chunk,u=o.encoding,d=o.callback;if(y(t,e,!1,e.objectMode?1:c.length,c,u,d),o=o.next,e.bufferedRequestCount--,e.writing)break}null===o&&(e.lastBufferedRequest=null)}e.bufferedRequest=o,e.bufferProcessing=!1}function k(t){return t.ending&&0===t.length&&null===t.bufferedRequest&&!t.finished&&!t.writing}function x(t,e){t._final((function(o){e.pendingcb--,o&&t.emit("error",o),e.prefinished=!0,t.emit("prefinish"),C(t,e)}))}function C(t,e){var o=k(e);return o&&(!function(t,e){e.prefinished||e.finalCalled||("function"==typeof t._final?(e.pendingcb++,e.finalCalled=!0,i.nextTick(x,t,e)):(e.prefinished=!0,t.emit("prefinish")))}(t,e),0===e.pendingcb&&(e.finished=!0,t.emit("finish"))),o}c.inherits(v,d),_.prototype.getBuffer=function(){for(var t=this.bufferedRequest,e=[];t;)e.push(t),t=t.next;return e},function(){try{Object.defineProperty(_.prototype,"buffer",{get:u.deprecate((function(){return this.getBuffer()}),"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(t){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(g=Function.prototype[Symbol.hasInstance],Object.defineProperty(v,Symbol.hasInstance,{value:function(t){return!!g.call(this,t)||this===v&&(t&&t._writableState instanceof _)}})):g=function(t){return t instanceof this},v.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},v.prototype.write=function(t,e,o){var n,s=this._writableState,r=!1,a=!s.objectMode&&(n=t,h.isBuffer(n)||n instanceof p);return a&&!h.isBuffer(t)&&(t=function(t){return h.from(t)}(t)),"function"==typeof e&&(o=e,e=null),a?e="buffer":e||(e=s.defaultEncoding),"function"!=typeof o&&(o=f),s.ended?function(t,e){var o=new Error("write after end");t.emit("error",o),i.nextTick(e,o)}(this,o):(a||function(t,e,o,n){var s=!0,r=!1;return null===o?r=new TypeError("May not write null values to stream"):"string"==typeof o||void 0===o||e.objectMode||(r=new TypeError("Invalid non-string/buffer chunk")),r&&(t.emit("error",r),i.nextTick(n,r),s=!1),s}(this,s,t,o))&&(s.pendingcb++,r=function(t,e,o,n,s,i){if(!o){var r=function(t,e,o){t.objectMode||!1===t.decodeStrings||"string"!=typeof e||(e=h.from(e,o));return e}(e,n,s);n!==r&&(o=!0,s="buffer",n=r)}var a=e.objectMode?1:n.length;e.length+=a;var l=e.length<e.highWaterMark;l||(e.needDrain=!0);if(e.writing||e.corked){var c=e.lastBufferedRequest;e.lastBufferedRequest={chunk:n,encoding:s,isBuf:o,callback:i,next:null},c?c.next=e.lastBufferedRequest:e.bufferedRequest=e.lastBufferedRequest,e.bufferedRequestCount+=1}else y(t,e,!1,a,n,s,i);return l}(this,s,a,t,e,o)),r},v.prototype.cork=function(){this._writableState.corked++},v.prototype.uncork=function(){var t=this._writableState;t.corked&&(t.corked--,t.writing||t.corked||t.finished||t.bufferProcessing||!t.bufferedRequest||w(this,t))},v.prototype.setDefaultEncoding=function(t){if("string"==typeof t&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+t);return this._writableState.defaultEncoding=t,this},Object.defineProperty(v.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),v.prototype._write=function(t,e,o){o(new Error("_write() is not implemented"))},v.prototype._writev=null,v.prototype.end=function(t,e,o){var n=this._writableState;"function"==typeof t?(o=t,t=null,e=null):"function"==typeof e&&(o=e,e=null),null!=t&&this.write(t,e),n.corked&&(n.corked=1,this.uncork()),n.ending||n.finished||function(t,e,o){e.ending=!0,C(t,e),o&&(e.finished?i.nextTick(o):t.once("finish",o));e.ended=!0,t.writable=!1}(this,n,o)},Object.defineProperty(v.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(t){this._writableState&&(this._writableState.destroyed=t)}}),v.prototype.destroy=m.destroy,v.prototype._undestroy=m.undestroy,v.prototype._destroy=function(t,e){this.end(),e(t)}}).call(this,o(11),o(42).setImmediate,o(4))},function(t,e,o){"use strict";var n=o(70).Buffer,s=n.isEncoding||function(t){switch((t=""+t)&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function i(t){var e;switch(this.encoding=function(t){var e=function(t){if(!t)return"utf8";for(var e;;)switch(t){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return t;default:if(e)return;t=(""+t).toLowerCase(),e=!0}}(t);if("string"!=typeof e&&(n.isEncoding===s||!s(t)))throw new Error("Unknown encoding: "+t);return e||t}(t),this.encoding){case"utf16le":this.text=l,this.end=c,e=4;break;case"utf8":this.fillLast=a,e=4;break;case"base64":this.text=u,this.end=d,e=3;break;default:return this.write=h,void(this.end=p)}this.lastNeed=0,this.lastTotal=0,this.lastChar=n.allocUnsafe(e)}function r(t){return t<=127?0:t>>5==6?2:t>>4==14?3:t>>3==30?4:t>>6==2?-1:-2}function a(t){var e=this.lastTotal-this.lastNeed,o=function(t,e,o){if(128!=(192&e[0]))return t.lastNeed=0,"�";if(t.lastNeed>1&&e.length>1){if(128!=(192&e[1]))return t.lastNeed=1,"�";if(t.lastNeed>2&&e.length>2&&128!=(192&e[2]))return t.lastNeed=2,"�"}}(this,t);return void 0!==o?o:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(t.copy(this.lastChar,e,0,t.length),void(this.lastNeed-=t.length))}function l(t,e){if((t.length-e)%2==0){var o=t.toString("utf16le",e);if(o){var n=o.charCodeAt(o.length-1);if(n>=55296&&n<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],o.slice(0,-1)}return o}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function c(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed){var o=this.lastTotal-this.lastNeed;return e+this.lastChar.toString("utf16le",0,o)}return e}function u(t,e){var o=(t.length-e)%3;return 0===o?t.toString("base64",e):(this.lastNeed=3-o,this.lastTotal=3,1===o?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-o))}function d(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function h(t){return t.toString(this.encoding)}function p(t){return t&&t.length?this.write(t):""}e.StringDecoder=i,i.prototype.write=function(t){if(0===t.length)return"";var e,o;if(this.lastNeed){if(void 0===(e=this.fillLast(t)))return"";o=this.lastNeed,this.lastNeed=0}else o=0;return o<t.length?e?e+this.text(t,o):this.text(t,o):e||""},i.prototype.end=function(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+"�":e},i.prototype.text=function(t,e){var o=function(t,e,o){var n=e.length-1;if(n<o)return 0;var s=r(e[n]);if(s>=0)return s>0&&(t.lastNeed=s-1),s;if(--n<o||-2===s)return 0;if((s=r(e[n]))>=0)return s>0&&(t.lastNeed=s-2),s;if(--n<o||-2===s)return 0;if((s=r(e[n]))>=0)return s>0&&(2===s?s=0:t.lastNeed=s-3),s;return 0}(this,t,e);if(!this.lastNeed)return t.toString("utf8",e);this.lastTotal=o;var n=t.length-(o-this.lastNeed);return t.copy(this.lastChar,0,n),t.toString("utf8",e,n)},i.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length}},function(t,e){(function(){t.exports=function(){function t(){}return t.prototype.hasFeature=function(t,e){return!0},t.prototype.createDocumentType=function(t,e,o){throw new Error("This DOM method is not implemented.")},t.prototype.createDocument=function(t,e,o){throw new Error("This DOM method is not implemented.")},t.prototype.createHTMLDocument=function(t){throw new Error("This DOM method is not implemented.")},t.prototype.getFeature=function(t,e){throw new Error("This DOM method is not implemented.")},t}()}).call(this)},function(t,e,o){(function(){var e,n,s,i,r,a,l,c={}.hasOwnProperty;l=o(2).isPlainObject,s=o(32),n=o(53),i=o(1),e=o(0),a=o(36),r=o(27),t.exports=function(t){function o(t){o.__super__.constructor.call(this,null),this.name="#document",this.type=e.Document,this.documentURI=null,this.domConfig=new n,t||(t={}),t.writer||(t.writer=new r),this.options=t,this.stringify=new a(t)}return function(t,e){for(var o in e)c.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(o,t),Object.defineProperty(o.prototype,"implementation",{value:new s}),Object.defineProperty(o.prototype,"doctype",{get:function(){var t,o,n,s;for(o=0,n=(s=this.children).length;o<n;o++)if((t=s[o]).type===e.DocType)return t;return null}}),Object.defineProperty(o.prototype,"documentElement",{get:function(){return this.rootObject||null}}),Object.defineProperty(o.prototype,"inputEncoding",{get:function(){return null}}),Object.defineProperty(o.prototype,"strictErrorChecking",{get:function(){return!1}}),Object.defineProperty(o.prototype,"xmlEncoding",{get:function(){return 0!==this.children.length&&this.children[0].type===e.Declaration?this.children[0].encoding:null}}),Object.defineProperty(o.prototype,"xmlStandalone",{get:function(){return 0!==this.children.length&&this.children[0].type===e.Declaration&&"yes"===this.children[0].standalone}}),Object.defineProperty(o.prototype,"xmlVersion",{get:function(){return 0!==this.children.length&&this.children[0].type===e.Declaration?this.children[0].version:"1.0"}}),Object.defineProperty(o.prototype,"URL",{get:function(){return this.documentURI}}),Object.defineProperty(o.prototype,"origin",{get:function(){return null}}),Object.defineProperty(o.prototype,"compatMode",{get:function(){return null}}),Object.defineProperty(o.prototype,"characterSet",{get:function(){return null}}),Object.defineProperty(o.prototype,"contentType",{get:function(){return null}}),o.prototype.end=function(t){var e;return e={},t?l(t)&&(e=t,t=this.options.writer):t=this.options.writer,t.document(this,t.filterOptions(e))},o.prototype.toString=function(t){return this.options.writer.document(this,this.options.writer.filterOptions(t))},o.prototype.createElement=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.createDocumentFragment=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.createTextNode=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.createComment=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.createCDATASection=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.createProcessingInstruction=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.createAttribute=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.createEntityReference=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.getElementsByTagName=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.importNode=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.createElementNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.createAttributeNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.getElementsByTagNameNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.getElementById=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.adoptNode=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.normalizeDocument=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.renameNode=function(t,e,o){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.getElementsByClassName=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.createEvent=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.createRange=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.createNodeIterator=function(t,e,o){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.createTreeWalker=function(t,e,o){throw new Error("This DOM method is not implemented."+this.debugInfo())},o}(i)}).call(this)},function(t,e,o){(function(){var e;e=o(0),o(1),t.exports=function(){function t(t,o,n){if(this.parent=t,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),null==o)throw new Error("Missing attribute name. "+this.debugInfo(o));this.name=this.stringify.name(o),this.value=this.stringify.attValue(n),this.type=e.Attribute,this.isId=!1,this.schemaTypeInfo=null}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return this.type}}),Object.defineProperty(t.prototype,"ownerElement",{get:function(){return this.parent}}),Object.defineProperty(t.prototype,"textContent",{get:function(){return this.value},set:function(t){return this.value=t||""}}),Object.defineProperty(t.prototype,"namespaceURI",{get:function(){return""}}),Object.defineProperty(t.prototype,"prefix",{get:function(){return""}}),Object.defineProperty(t.prototype,"localName",{get:function(){return this.name}}),Object.defineProperty(t.prototype,"specified",{get:function(){return!0}}),t.prototype.clone=function(){return Object.create(this)},t.prototype.toString=function(t){return this.options.writer.attribute(this,this.options.writer.filterOptions(t))},t.prototype.debugInfo=function(t){return null==(t=t||this.name)?"parent: <"+this.parent.name+">":"attribute: {"+t+"}, parent: <"+this.parent.name+">"},t.prototype.isEqualNode=function(t){return t.namespaceURI===this.namespaceURI&&(t.prefix===this.prefix&&(t.localName===this.localName&&t.value===this.value))},t}()}).call(this)},function(t,e,o){(function(){var e,n,s={}.hasOwnProperty;n=o(1),e=o(0),t.exports=function(t){function o(t){o.__super__.constructor.call(this,t),this.type=e.Dummy}return function(t,e){for(var o in e)s.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(o,t),o.prototype.clone=function(){return Object.create(this)},o.prototype.toString=function(t){return""},o}(n)}).call(this)},function(t,e){(function(){var e=function(t,e){return function(){return t.apply(e,arguments)}},o={}.hasOwnProperty;t.exports=function(){function t(t){var n,s,i;for(n in this.assertLegalName=e(this.assertLegalName,this),this.assertLegalChar=e(this.assertLegalChar,this),t||(t={}),this.options=t,this.options.version||(this.options.version="1.0"),s=t.stringify||{})o.call(s,n)&&(i=s[n],this[n]=i)}return t.prototype.name=function(t){return this.options.noValidation?t:this.assertLegalName(""+t||"")},t.prototype.text=function(t){return this.options.noValidation?t:this.assertLegalChar(this.textEscape(""+t||""))},t.prototype.cdata=function(t){return this.options.noValidation?t:(t=(t=""+t||"").replace("]]>","]]]]><![CDATA[>"),this.assertLegalChar(t))},t.prototype.comment=function(t){if(this.options.noValidation)return t;if((t=""+t||"").match(/--/))throw new Error("Comment text cannot contain double-hypen: "+t);return this.assertLegalChar(t)},t.prototype.raw=function(t){return this.options.noValidation?t:""+t||""},t.prototype.attValue=function(t){return this.options.noValidation?t:this.assertLegalChar(this.attEscape(t=""+t||""))},t.prototype.insTarget=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},t.prototype.insValue=function(t){if(this.options.noValidation)return t;if((t=""+t||"").match(/\?>/))throw new Error("Invalid processing instruction value: "+t);return this.assertLegalChar(t)},t.prototype.xmlVersion=function(t){if(this.options.noValidation)return t;if(!(t=""+t||"").match(/1\.[0-9]+/))throw new Error("Invalid version number: "+t);return t},t.prototype.xmlEncoding=function(t){if(this.options.noValidation)return t;if(!(t=""+t||"").match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/))throw new Error("Invalid encoding: "+t);return this.assertLegalChar(t)},t.prototype.xmlStandalone=function(t){return this.options.noValidation?t:t?"yes":"no"},t.prototype.dtdPubID=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},t.prototype.dtdSysID=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},t.prototype.dtdElementValue=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},t.prototype.dtdAttType=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},t.prototype.dtdAttDefault=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},t.prototype.dtdEntityValue=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},t.prototype.dtdNData=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},t.prototype.convertAttKey="@",t.prototype.convertPIKey="?",t.prototype.convertTextKey="#text",t.prototype.convertCDataKey="#cdata",t.prototype.convertCommentKey="#comment",t.prototype.convertRawKey="#raw",t.prototype.assertLegalChar=function(t){var e,o;if(this.options.noValidation)return t;if(e="","1.0"===this.options.version){if(e=/[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,o=t.match(e))throw new Error("Invalid character in string: "+t+" at index "+o.index)}else if("1.1"===this.options.version&&(e=/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,o=t.match(e)))throw new Error("Invalid character in string: "+t+" at index "+o.index);return t},t.prototype.assertLegalName=function(t){var e;if(this.options.noValidation)return t;if(this.assertLegalChar(t),e=/^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/,!t.match(e))throw new Error("Invalid character in name");return t},t.prototype.textEscape=function(t){var e;return this.options.noValidation?t:(e=this.options.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,t.replace(e,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r/g,"&#xD;"))},t.prototype.attEscape=function(t){var e;return this.options.noValidation?t:(e=this.options.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,t.replace(e,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/\t/g,"&#x9;").replace(/\n/g,"&#xA;").replace(/\r/g,"&#xD;"))},t}()}).call(this)},function(t,e,o){(function(){var e,n,s,i={}.hasOwnProperty;s=o(2).assign,e=o(0),o(18),o(19),o(16),o(17),o(14),o(24),o(25),o(26),o(35),o(20),o(22),o(21),o(23),n=o(8),t.exports=function(){function t(t){var e,o,n;for(e in t||(t={}),this.options=t,o=t.writer||{})i.call(o,e)&&(n=o[e],this["_"+e]=this[e],this[e]=n)}return t.prototype.filterOptions=function(t){var e,o,i,r,a,l,c,u;return t||(t={}),t=s({},this.options,t),(e={writer:this}).pretty=t.pretty||!1,e.allowEmpty=t.allowEmpty||!1,e.indent=null!=(o=t.indent)?o:"  ",e.newline=null!=(i=t.newline)?i:"\n",e.offset=null!=(r=t.offset)?r:0,e.dontPrettyTextNodes=null!=(a=null!=(l=t.dontPrettyTextNodes)?l:t.dontprettytextnodes)?a:0,e.spaceBeforeSlash=null!=(c=null!=(u=t.spaceBeforeSlash)?u:t.spacebeforeslash)?c:"",!0===e.spaceBeforeSlash&&(e.spaceBeforeSlash=" "),e.suppressPrettyCount=0,e.user={},e.state=n.None,e},t.prototype.indent=function(t,e,o){var n;return!e.pretty||e.suppressPrettyCount?"":e.pretty&&(n=(o||0)+e.offset+1)>0?new Array(n).join(e.indent):""},t.prototype.endline=function(t,e,o){return!e.pretty||e.suppressPrettyCount?"":e.newline},t.prototype.attribute=function(t,e,o){var n;return this.openAttribute(t,e,o),n=" "+t.name+'="'+t.value+'"',this.closeAttribute(t,e,o),n},t.prototype.cdata=function(t,e,o){var s;return this.openNode(t,e,o),e.state=n.OpenTag,s=this.indent(t,e,o)+"<![CDATA[",e.state=n.InsideTag,s+=t.value,e.state=n.CloseTag,s+="]]>"+this.endline(t,e,o),e.state=n.None,this.closeNode(t,e,o),s},t.prototype.comment=function(t,e,o){var s;return this.openNode(t,e,o),e.state=n.OpenTag,s=this.indent(t,e,o)+"\x3c!-- ",e.state=n.InsideTag,s+=t.value,e.state=n.CloseTag,s+=" --\x3e"+this.endline(t,e,o),e.state=n.None,this.closeNode(t,e,o),s},t.prototype.declaration=function(t,e,o){var s;return this.openNode(t,e,o),e.state=n.OpenTag,s=this.indent(t,e,o)+"<?xml",e.state=n.InsideTag,s+=' version="'+t.version+'"',null!=t.encoding&&(s+=' encoding="'+t.encoding+'"'),null!=t.standalone&&(s+=' standalone="'+t.standalone+'"'),e.state=n.CloseTag,s+=e.spaceBeforeSlash+"?>",s+=this.endline(t,e,o),e.state=n.None,this.closeNode(t,e,o),s},t.prototype.docType=function(t,e,o){var s,i,r,a,l;if(o||(o=0),this.openNode(t,e,o),e.state=n.OpenTag,a=this.indent(t,e,o),a+="<!DOCTYPE "+t.root().name,t.pubID&&t.sysID?a+=' PUBLIC "'+t.pubID+'" "'+t.sysID+'"':t.sysID&&(a+=' SYSTEM "'+t.sysID+'"'),t.children.length>0){for(a+=" [",a+=this.endline(t,e,o),e.state=n.InsideTag,i=0,r=(l=t.children).length;i<r;i++)s=l[i],a+=this.writeChildNode(s,e,o+1);e.state=n.CloseTag,a+="]"}return e.state=n.CloseTag,a+=e.spaceBeforeSlash+">",a+=this.endline(t,e,o),e.state=n.None,this.closeNode(t,e,o),a},t.prototype.element=function(t,o,s){var r,a,l,c,u,d,h,p,g,m,f,_,v,y;for(g in s||(s=0),m=!1,f="",this.openNode(t,o,s),o.state=n.OpenTag,f+=this.indent(t,o,s)+"<"+t.name,_=t.attribs)i.call(_,g)&&(r=_[g],f+=this.attribute(r,o,s));if(c=0===(l=t.children.length)?null:t.children[0],0===l||t.children.every((function(t){return(t.type===e.Text||t.type===e.Raw)&&""===t.value})))o.allowEmpty?(f+=">",o.state=n.CloseTag,f+="</"+t.name+">"+this.endline(t,o,s)):(o.state=n.CloseTag,f+=o.spaceBeforeSlash+"/>"+this.endline(t,o,s));else if(!o.pretty||1!==l||c.type!==e.Text&&c.type!==e.Raw||null==c.value){if(o.dontPrettyTextNodes)for(u=0,h=(v=t.children).length;u<h;u++)if(((a=v[u]).type===e.Text||a.type===e.Raw)&&null!=a.value){o.suppressPrettyCount++,m=!0;break}for(f+=">"+this.endline(t,o,s),o.state=n.InsideTag,d=0,p=(y=t.children).length;d<p;d++)a=y[d],f+=this.writeChildNode(a,o,s+1);o.state=n.CloseTag,f+=this.indent(t,o,s)+"</"+t.name+">",m&&o.suppressPrettyCount--,f+=this.endline(t,o,s),o.state=n.None}else f+=">",o.state=n.InsideTag,o.suppressPrettyCount++,m=!0,f+=this.writeChildNode(c,o,s+1),o.suppressPrettyCount--,m=!1,o.state=n.CloseTag,f+="</"+t.name+">"+this.endline(t,o,s);return this.closeNode(t,o,s),f},t.prototype.writeChildNode=function(t,o,n){switch(t.type){case e.CData:return this.cdata(t,o,n);case e.Comment:return this.comment(t,o,n);case e.Element:return this.element(t,o,n);case e.Raw:return this.raw(t,o,n);case e.Text:return this.text(t,o,n);case e.ProcessingInstruction:return this.processingInstruction(t,o,n);case e.Dummy:return"";case e.Declaration:return this.declaration(t,o,n);case e.DocType:return this.docType(t,o,n);case e.AttributeDeclaration:return this.dtdAttList(t,o,n);case e.ElementDeclaration:return this.dtdElement(t,o,n);case e.EntityDeclaration:return this.dtdEntity(t,o,n);case e.NotationDeclaration:return this.dtdNotation(t,o,n);default:throw new Error("Unknown XML node type: "+t.constructor.name)}},t.prototype.processingInstruction=function(t,e,o){var s;return this.openNode(t,e,o),e.state=n.OpenTag,s=this.indent(t,e,o)+"<?",e.state=n.InsideTag,s+=t.target,t.value&&(s+=" "+t.value),e.state=n.CloseTag,s+=e.spaceBeforeSlash+"?>",s+=this.endline(t,e,o),e.state=n.None,this.closeNode(t,e,o),s},t.prototype.raw=function(t,e,o){var s;return this.openNode(t,e,o),e.state=n.OpenTag,s=this.indent(t,e,o),e.state=n.InsideTag,s+=t.value,e.state=n.CloseTag,s+=this.endline(t,e,o),e.state=n.None,this.closeNode(t,e,o),s},t.prototype.text=function(t,e,o){var s;return this.openNode(t,e,o),e.state=n.OpenTag,s=this.indent(t,e,o),e.state=n.InsideTag,s+=t.value,e.state=n.CloseTag,s+=this.endline(t,e,o),e.state=n.None,this.closeNode(t,e,o),s},t.prototype.dtdAttList=function(t,e,o){var s;return this.openNode(t,e,o),e.state=n.OpenTag,s=this.indent(t,e,o)+"<!ATTLIST",e.state=n.InsideTag,s+=" "+t.elementName+" "+t.attributeName+" "+t.attributeType,"#DEFAULT"!==t.defaultValueType&&(s+=" "+t.defaultValueType),t.defaultValue&&(s+=' "'+t.defaultValue+'"'),e.state=n.CloseTag,s+=e.spaceBeforeSlash+">"+this.endline(t,e,o),e.state=n.None,this.closeNode(t,e,o),s},t.prototype.dtdElement=function(t,e,o){var s;return this.openNode(t,e,o),e.state=n.OpenTag,s=this.indent(t,e,o)+"<!ELEMENT",e.state=n.InsideTag,s+=" "+t.name+" "+t.value,e.state=n.CloseTag,s+=e.spaceBeforeSlash+">"+this.endline(t,e,o),e.state=n.None,this.closeNode(t,e,o),s},t.prototype.dtdEntity=function(t,e,o){var s;return this.openNode(t,e,o),e.state=n.OpenTag,s=this.indent(t,e,o)+"<!ENTITY",e.state=n.InsideTag,t.pe&&(s+=" %"),s+=" "+t.name,t.value?s+=' "'+t.value+'"':(t.pubID&&t.sysID?s+=' PUBLIC "'+t.pubID+'" "'+t.sysID+'"':t.sysID&&(s+=' SYSTEM "'+t.sysID+'"'),t.nData&&(s+=" NDATA "+t.nData)),e.state=n.CloseTag,s+=e.spaceBeforeSlash+">"+this.endline(t,e,o),e.state=n.None,this.closeNode(t,e,o),s},t.prototype.dtdNotation=function(t,e,o){var s;return this.openNode(t,e,o),e.state=n.OpenTag,s=this.indent(t,e,o)+"<!NOTATION",e.state=n.InsideTag,s+=" "+t.name,t.pubID&&t.sysID?s+=' PUBLIC "'+t.pubID+'" "'+t.sysID+'"':t.pubID?s+=' PUBLIC "'+t.pubID+'"':t.sysID&&(s+=' SYSTEM "'+t.sysID+'"'),e.state=n.CloseTag,s+=e.spaceBeforeSlash+">"+this.endline(t,e,o),e.state=n.None,this.closeNode(t,e,o),s},t.prototype.openNode=function(t,e,o){},t.prototype.closeNode=function(t,e,o){},t.prototype.openAttribute=function(t,e,o){},t.prototype.closeAttribute=function(t,e,o){},t}()}).call(this)},function(t,e){var o={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==o.call(t)}},function(t,e,o){"use strict";(function(e,n){var s=o(12);t.exports=y;var i,r=o(38);y.ReadableState=v;o(10).EventEmitter;var a=function(t,e){return t.listeners(e).length},l=o(40),c=o(29).Buffer,u=e.Uint8Array||function(){};var d=Object.create(o(6));d.inherits=o(5);var h=o(65),p=void 0;p=h&&h.debuglog?h.debuglog("stream"):function(){};var g,m=o(66),f=o(41);d.inherits(y,l);var _=["error","close","destroy","pause","resume"];function v(t,e){t=t||{};var n=e instanceof(i=i||o(3));this.objectMode=!!t.objectMode,n&&(this.objectMode=this.objectMode||!!t.readableObjectMode);var s=t.highWaterMark,r=t.readableHighWaterMark,a=this.objectMode?16:16384;this.highWaterMark=s||0===s?s:n&&(r||0===r)?r:a,this.highWaterMark=Math.floor(this.highWaterMark),this.buffer=new m,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.destroyed=!1,this.defaultEncoding=t.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(g||(g=o(31).StringDecoder),this.decoder=new g(t.encoding),this.encoding=t.encoding)}function y(t){if(i=i||o(3),!(this instanceof y))return new y(t);this._readableState=new v(t,this),this.readable=!0,t&&("function"==typeof t.read&&(this._read=t.read),"function"==typeof t.destroy&&(this._destroy=t.destroy)),l.call(this)}function b(t,e,o,n,s){var i,r=t._readableState;null===e?(r.reading=!1,function(t,e){if(e.ended)return;if(e.decoder){var o=e.decoder.end();o&&o.length&&(e.buffer.push(o),e.length+=e.objectMode?1:o.length)}e.ended=!0,x(t)}(t,r)):(s||(i=function(t,e){var o;n=e,c.isBuffer(n)||n instanceof u||"string"==typeof e||void 0===e||t.objectMode||(o=new TypeError("Invalid non-string/buffer chunk"));var n;return o}(r,e)),i?t.emit("error",i):r.objectMode||e&&e.length>0?("string"==typeof e||r.objectMode||Object.getPrototypeOf(e)===c.prototype||(e=function(t){return c.from(t)}(e)),n?r.endEmitted?t.emit("error",new Error("stream.unshift() after end event")):w(t,r,e,!0):r.ended?t.emit("error",new Error("stream.push() after EOF")):(r.reading=!1,r.decoder&&!o?(e=r.decoder.write(e),r.objectMode||0!==e.length?w(t,r,e,!1):E(t,r)):w(t,r,e,!1))):n||(r.reading=!1));return function(t){return!t.ended&&(t.needReadable||t.length<t.highWaterMark||0===t.length)}(r)}function w(t,e,o,n){e.flowing&&0===e.length&&!e.sync?(t.emit("data",o),t.read(0)):(e.length+=e.objectMode?1:o.length,n?e.buffer.unshift(o):e.buffer.push(o),e.needReadable&&x(t)),E(t,e)}Object.defineProperty(y.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(t){this._readableState&&(this._readableState.destroyed=t)}}),y.prototype.destroy=f.destroy,y.prototype._undestroy=f.undestroy,y.prototype._destroy=function(t,e){this.push(null),e(t)},y.prototype.push=function(t,e){var o,n=this._readableState;return n.objectMode?o=!0:"string"==typeof t&&((e=e||n.defaultEncoding)!==n.encoding&&(t=c.from(t,e),e=""),o=!0),b(this,t,e,!1,o)},y.prototype.unshift=function(t){return b(this,t,null,!0,!1)},y.prototype.isPaused=function(){return!1===this._readableState.flowing},y.prototype.setEncoding=function(t){return g||(g=o(31).StringDecoder),this._readableState.decoder=new g(t),this._readableState.encoding=t,this};function k(t,e){return t<=0||0===e.length&&e.ended?0:e.objectMode?1:t!=t?e.flowing&&e.length?e.buffer.head.data.length:e.length:(t>e.highWaterMark&&(e.highWaterMark=function(t){return t>=8388608?t=8388608:(t--,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t++),t}(t)),t<=e.length?t:e.ended?e.length:(e.needReadable=!0,0))}function x(t){var e=t._readableState;e.needReadable=!1,e.emittedReadable||(p("emitReadable",e.flowing),e.emittedReadable=!0,e.sync?s.nextTick(C,t):C(t))}function C(t){p("emit readable"),t.emit("readable"),A(t)}function E(t,e){e.readingMore||(e.readingMore=!0,s.nextTick(S,t,e))}function S(t,e){for(var o=e.length;!e.reading&&!e.flowing&&!e.ended&&e.length<e.highWaterMark&&(p("maybeReadMore read 0"),t.read(0),o!==e.length);)o=e.length;e.readingMore=!1}function T(t){p("readable nexttick read 0"),t.read(0)}function z(t,e){e.reading||(p("resume read 0"),t.read(0)),e.resumeScheduled=!1,e.awaitDrain=0,t.emit("resume"),A(t),e.flowing&&!e.reading&&t.read(0)}function A(t){var e=t._readableState;for(p("flow",e.flowing);e.flowing&&null!==t.read(););}function O(t,e){return 0===e.length?null:(e.objectMode?o=e.buffer.shift():!t||t>=e.length?(o=e.decoder?e.buffer.join(""):1===e.buffer.length?e.buffer.head.data:e.buffer.concat(e.length),e.buffer.clear()):o=function(t,e,o){var n;t<e.head.data.length?(n=e.head.data.slice(0,t),e.head.data=e.head.data.slice(t)):n=t===e.head.data.length?e.shift():o?function(t,e){var o=e.head,n=1,s=o.data;t-=s.length;for(;o=o.next;){var i=o.data,r=t>i.length?i.length:t;if(r===i.length?s+=i:s+=i.slice(0,t),0===(t-=r)){r===i.length?(++n,o.next?e.head=o.next:e.head=e.tail=null):(e.head=o,o.data=i.slice(r));break}++n}return e.length-=n,s}(t,e):function(t,e){var o=c.allocUnsafe(t),n=e.head,s=1;n.data.copy(o),t-=n.data.length;for(;n=n.next;){var i=n.data,r=t>i.length?i.length:t;if(i.copy(o,o.length-t,0,r),0===(t-=r)){r===i.length?(++s,n.next?e.head=n.next:e.head=e.tail=null):(e.head=n,n.data=i.slice(r));break}++s}return e.length-=s,o}(t,e);return n}(t,e.buffer,e.decoder),o);var o}function M(t){var e=t._readableState;if(e.length>0)throw new Error('"endReadable()" called on non-empty stream');e.endEmitted||(e.ended=!0,s.nextTick(I,e,t))}function I(t,e){t.endEmitted||0!==t.length||(t.endEmitted=!0,e.readable=!1,e.emit("end"))}function P(t,e){for(var o=0,n=t.length;o<n;o++)if(t[o]===e)return o;return-1}y.prototype.read=function(t){p("read",t),t=parseInt(t,10);var e=this._readableState,o=t;if(0!==t&&(e.emittedReadable=!1),0===t&&e.needReadable&&(e.length>=e.highWaterMark||e.ended))return p("read: emitReadable",e.length,e.ended),0===e.length&&e.ended?M(this):x(this),null;if(0===(t=k(t,e))&&e.ended)return 0===e.length&&M(this),null;var n,s=e.needReadable;return p("need readable",s),(0===e.length||e.length-t<e.highWaterMark)&&p("length less than watermark",s=!0),e.ended||e.reading?p("reading or ended",s=!1):s&&(p("do read"),e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1,e.reading||(t=k(o,e))),null===(n=t>0?O(t,e):null)?(e.needReadable=!0,t=0):e.length-=t,0===e.length&&(e.ended||(e.needReadable=!0),o!==t&&e.ended&&M(this)),null!==n&&this.emit("data",n),n},y.prototype._read=function(t){this.emit("error",new Error("_read() is not implemented"))},y.prototype.pipe=function(t,e){var o=this,i=this._readableState;switch(i.pipesCount){case 0:i.pipes=t;break;case 1:i.pipes=[i.pipes,t];break;default:i.pipes.push(t)}i.pipesCount+=1,p("pipe count=%d opts=%j",i.pipesCount,e);var l=(!e||!1!==e.end)&&t!==n.stdout&&t!==n.stderr?u:y;function c(e,n){p("onunpipe"),e===o&&n&&!1===n.hasUnpiped&&(n.hasUnpiped=!0,p("cleanup"),t.removeListener("close",_),t.removeListener("finish",v),t.removeListener("drain",d),t.removeListener("error",f),t.removeListener("unpipe",c),o.removeListener("end",u),o.removeListener("end",y),o.removeListener("data",m),h=!0,!i.awaitDrain||t._writableState&&!t._writableState.needDrain||d())}function u(){p("onend"),t.end()}i.endEmitted?s.nextTick(l):o.once("end",l),t.on("unpipe",c);var d=function(t){return function(){var e=t._readableState;p("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&a(t,"data")&&(e.flowing=!0,A(t))}}(o);t.on("drain",d);var h=!1;var g=!1;function m(e){p("ondata"),g=!1,!1!==t.write(e)||g||((1===i.pipesCount&&i.pipes===t||i.pipesCount>1&&-1!==P(i.pipes,t))&&!h&&(p("false write response, pause",o._readableState.awaitDrain),o._readableState.awaitDrain++,g=!0),o.pause())}function f(e){p("onerror",e),y(),t.removeListener("error",f),0===a(t,"error")&&t.emit("error",e)}function _(){t.removeListener("finish",v),y()}function v(){p("onfinish"),t.removeListener("close",_),y()}function y(){p("unpipe"),o.unpipe(t)}return o.on("data",m),function(t,e,o){if("function"==typeof t.prependListener)return t.prependListener(e,o);t._events&&t._events[e]?r(t._events[e])?t._events[e].unshift(o):t._events[e]=[o,t._events[e]]:t.on(e,o)}(t,"error",f),t.once("close",_),t.once("finish",v),t.emit("pipe",o),i.flowing||(p("pipe resume"),o.resume()),t},y.prototype.unpipe=function(t){var e=this._readableState,o={hasUnpiped:!1};if(0===e.pipesCount)return this;if(1===e.pipesCount)return t&&t!==e.pipes||(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,e.flowing=!1,t&&t.emit("unpipe",this,o)),this;if(!t){var n=e.pipes,s=e.pipesCount;e.pipes=null,e.pipesCount=0,e.flowing=!1;for(var i=0;i<s;i++)n[i].emit("unpipe",this,o);return this}var r=P(e.pipes,t);return-1===r||(e.pipes.splice(r,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this,o)),this},y.prototype.on=function(t,e){var o=l.prototype.on.call(this,t,e);if("data"===t)!1!==this._readableState.flowing&&this.resume();else if("readable"===t){var n=this._readableState;n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.emittedReadable=!1,n.reading?n.length&&x(this):s.nextTick(T,this))}return o},y.prototype.addListener=y.prototype.on,y.prototype.resume=function(){var t=this._readableState;return t.flowing||(p("resume"),t.flowing=!0,function(t,e){e.resumeScheduled||(e.resumeScheduled=!0,s.nextTick(z,t,e))}(this,t)),this},y.prototype.pause=function(){return p("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(p("pause"),this._readableState.flowing=!1,this.emit("pause")),this},y.prototype.wrap=function(t){var e=this,o=this._readableState,n=!1;for(var s in t.on("end",(function(){if(p("wrapped end"),o.decoder&&!o.ended){var t=o.decoder.end();t&&t.length&&e.push(t)}e.push(null)})),t.on("data",(function(s){(p("wrapped data"),o.decoder&&(s=o.decoder.write(s)),o.objectMode&&null==s)||(o.objectMode||s&&s.length)&&(e.push(s)||(n=!0,t.pause()))})),t)void 0===this[s]&&"function"==typeof t[s]&&(this[s]=function(e){return function(){return t[e].apply(t,arguments)}}(s));for(var i=0;i<_.length;i++)t.on(_[i],this.emit.bind(this,_[i]));return this._read=function(e){p("wrapped _read",e),n&&(n=!1,t.resume())},this},Object.defineProperty(y.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),y._fromList=O}).call(this,o(4),o(11))},function(t,e,o){t.exports=o(10).EventEmitter},function(t,e,o){"use strict";var n=o(12);function s(t,e){t.emit("error",e)}t.exports={destroy:function(t,e){var o=this,i=this._readableState&&this._readableState.destroyed,r=this._writableState&&this._writableState.destroyed;return i||r?(e?e(t):!t||this._writableState&&this._writableState.errorEmitted||n.nextTick(s,this,t),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(t||null,(function(t){!e&&t?(n.nextTick(s,o,t),o._writableState&&(o._writableState.errorEmitted=!0)):e&&e(t)})),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}}},function(t,e,o){(function(t){var n=void 0!==t&&t||"undefined"!=typeof self&&self||window,s=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(s.call(setTimeout,n,arguments),clearTimeout)},e.setInterval=function(){return new i(s.call(setInterval,n,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(n,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},o(68),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,o(4))},function(t,e,o){"use strict";t.exports=r;var n=o(3),s=Object.create(o(6));function i(t,e){var o=this._transformState;o.transforming=!1;var n=o.writecb;if(!n)return this.emit("error",new Error("write callback called multiple times"));o.writechunk=null,o.writecb=null,null!=e&&this.push(e),n(t);var s=this._readableState;s.reading=!1,(s.needReadable||s.length<s.highWaterMark)&&this._read(s.highWaterMark)}function r(t){if(!(this instanceof r))return new r(t);n.call(this,t),this._transformState={afterTransform:i.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,t&&("function"==typeof t.transform&&(this._transform=t.transform),"function"==typeof t.flush&&(this._flush=t.flush)),this.on("prefinish",a)}function a(){var t=this;"function"==typeof this._flush?this._flush((function(e,o){l(t,e,o)})):l(this,null,null)}function l(t,e,o){if(e)return t.emit("error",e);if(null!=o&&t.push(o),t._writableState.length)throw new Error("Calling transform done when ws.length != 0");if(t._transformState.transforming)throw new Error("Calling transform done when still transforming");return t.push(null)}s.inherits=o(5),s.inherits(r,n),r.prototype.push=function(t,e){return this._transformState.needTransform=!1,n.prototype.push.call(this,t,e)},r.prototype._transform=function(t,e,o){throw new Error("_transform() is not implemented")},r.prototype._write=function(t,e,o){var n=this._transformState;if(n.writecb=o,n.writechunk=t,n.writeencoding=e,!n.transforming){var s=this._readableState;(n.needTransform||s.needReadable||s.length<s.highWaterMark)&&this._read(s.highWaterMark)}},r.prototype._read=function(t){var e=this._transformState;null!==e.writechunk&&e.writecb&&!e.transforming?(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform)):e.needTransform=!0},r.prototype._destroy=function(t,e){var o=this;n.prototype._destroy.call(this,t,(function(t){e(t),o.emit("close")}))}},function(t,e){(function(){"use strict";var t;t=new RegExp(/(?!xmlns)^.*:/),e.normalize=function(t){return t.toLowerCase()},e.firstCharLowerCase=function(t){return t.charAt(0).toLowerCase()+t.slice(1)},e.stripPrefix=function(e){return e.replace(t,"")},e.parseNumbers=function(t){return isNaN(t)||(t=t%1==0?parseInt(t,10):parseFloat(t)),t},e.parseBooleans=function(t){return/^(?:true|false)$/i.test(t)&&(t="true"===t.toLowerCase()),t}}).call(this)},function(t,e,o){var n=o(46);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(48)(n,s);n.locals&&(t.exports=n.locals)},function(t,e,o){(t.exports=o(47)(!1)).push([t.i,'/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */html{font-family:"Roboto","Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{height:100%;margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}template,[hidden]{display:none}a{background-color:transparent;color:#039BE5;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}figure{margin:0}hr{box-sizing:content-box;height:0;overflow:visible}button,input,select,textarea{font:inherit;margin:0}optgroup{font-weight:bold}button,input{overflow:visible}button,select{text-transform:none}button,html [type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}table{border:none;border-collapse:collapse;border-spacing:0}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}ssml-timeline::part(audio-clip){background:#DCE8FC;box-shadow:0 2px 12px rgba(220,232,252,0.24);box-shadow:0 2px 2px rgba(0,0,0,0.24);border-radius:300px;cursor:grab;font-size:12px;font-weight:bold;transition:box-shadow .3s;line-height:32px;height:32px;display:inline-block;position:absolute;user-select:none;overflow:hidden}ssml-timeline::part(audio-clip):hover{box-shadow:0 4px 4px rgba(0,0,0,0.24)}ssml-timeline::part(audio-clip):active{cursor:grabbing}.library{background-color:#63A0EF;bottom:0;box-sizing:border-box;box-shadow:0 -2px 16px rgba(0,0,0,0.24);display:flex;height:122px;left:0;opacity:1;padding:16px 8px;position:fixed;right:0;transition:0.2s all;z-index:991}.library.hidden{bottom:-122px}.library .library-handle{background-color:#63A0EF;box-sizing:border-box;box-shadow:0 1px 1px rgba(0,0,0,0.24);border:1px solid #166ad6;display:none;height:10px;left:50%;margin-left:-26px;position:absolute;top:-8px;width:52px}.library .ssml-block{background:#fff;box-shadow:0 2px 0 rgba(0,0,0,0.12),0 2px 2px rgba(0,0,0,0.24);border-radius:8px;box-sizing:border-box;color:#1A73E8;cursor:grab;font-size:11px;flex:1;margin:0 8px;padding:64px 16px 16px 16px;text-align:center;user-select:none;transition:all .3s;position:relative}.library .ssml-block .material-icons{color:#1A73E8;display:block;top:24px;left:50%;margin-left:-12px;position:absolute;z-index:1}.library .ssml-block:hover,.library .ssml-block:active{box-shadow:0 0 4px rgba(0,0,0,0.12),0 4px 4px rgba(0,0,0,0.24);color:#1A73E8}.library .ssml-block:hover .material-icons,.library .ssml-block:active .material-icons{color:#1A73E8}.loading{align-items:center;background-color:#29b6f6;display:flex;justify-content:center;bottom:0;left:0;right:0;top:0;position:fixed;z-index:995}.loading.is-hidden{display:none}.loading h1{color:#fff;font-weight:700;font-size:40px;text-align:center;text-transform:uppercase}.loading .slash{color:#0086c3;font-weight:500;font-size:40px;margin:0 8px;text-align:center;text-transform:uppercase}.loading h2{color:#fff176;font-size:40px;font-weight:300;text-align:center;text-transform:uppercase}.modal{padding:16px;z-index:995;overflow:auto}ssml-timeline::part(status){background:#3267D6;box-sizing:border-box;border:1px solid #607D8B;border-radius:2px;font-size:11px;color:#fff;display:none;top:24px;left:300px;z-index:993;padding:0 16px;line-height:32px;height:32px;position:fixed;text-transform:uppercase}ssml-timeline::part(#blankstate){align-items:flex-end;background:url("/nightingale-ssml-editor/images/blankstate.png") center center no-repeat;box-sizing:border-box;border-radius:4px;justify-content:center;color:#37474F;display:flex;font-size:16px;font-weight:500;line-height:48px;margin-left:-300px;margin-top:-240px;height:480px;top:50%;left:50%;z-index:993;padding:48px;position:fixed;text-align:center;transition:all .3s;width:600px}ssml-timeline::part(#blankstate.hidden){display:none}ssml-timeline::part(ticker){background:#4285F4;box-sizing:border-box;box-shadow:0 1px 1px rgba(0,0,0,0.24);display:flex;height:48px;overflow-x:hidden;padding:16px 0 0 320px}ssml-timeline::part(ticker-tick){display:inline-block;width:40px;font-size:10px;line-height:8px;color:rgba(255,255,255,0.56);user-select:none;margin-top:16px}ssml-timeline::part(time-cursor){box-shadow:0 0 16px rgba(0,0,0,0.24);width:3px;height:100%;background:#F50057;position:absolute;z-index:1;opacity:87}ssml-timeline::part(time-cursor).play{width:3px;opacity:1}.timeline{background:#fff;overflow:scroll;position:absolute;top:56px;left:0;right:0;z-index:1}.timeline .zoom-controls{background:rgba(255,255,255,0.12);border-radius:4px;display:flex;position:absolute;top:4px;left:24px;z-index:1}.timeline paper-button{border-radius:0;height:40px;padding:0;font-size:10px;font-weight:500;text-transform:uppercase;color:#fff;width:80px}app-header{background:#3267D6;box-sizing:border-box;color:#fff;display:block;height:56px;margin:0;width:100%}app-toolbar{display:flex;justify-content:flex-end;align-items:center;height:56px;z-index:992}app-toolbar .toolbar-title{display:flex;flex:3}app-toolbar h1{align-self:flex-start;font-size:24px;font-weight:300;margin:0;line-height:56px;padding-left:40px;position:relative}app-toolbar h1 i{position:absolute;left:0;top:12px;z-index:1}app-toolbar h1 em{position:absolute;bottom:-20px;left:40px;z-index:1;font-size:10px;font-style:normal}app-toolbar .play-head{background:#3267D6;border-radius:2px;border:none;box-sizing:border-box;color:#fff;height:32px;margin:12px 32px;padding:0 32px 0 40px;position:relative}app-toolbar .play-head paper-button{border:none;margin:0;padding:0;width:24px;min-width:auto;position:absolute;left:8px;top:4px}app-toolbar .play-head .play-button.is-hidden{display:none}app-toolbar .play-head .close-button.is-hidden{display:none}app-toolbar .play-head .time-readout{font-size:14px;margin:0;line-height:32px}app-toolbar paper-dropdown-menu{margin-right:16px;color:#fff}app-toolbar #paper-input-label-1{color:#fff}app-toolbar .export-button{align-self:flex-end;border:none;border-radius:4px;color:#1A73E8;font-size:10pt;margin:8px;font-weight:bold;line-height:32px;text-transform:uppercase;background-color:#fff;padding:0 24px}ssml-timeline{display:block}ssml-timeline::part(track-list){height:calc(100vh - 140px - 24px);position:relative;overflow-x:scroll;width:100vw}ssml-timeline::part(settings-bar){box-shadow:2px 4px 4px rgba(0,0,0,0.24);height:calc(100vh - 140px - 24px);position:relative;width:320px;color:#455A64}ssml-timeline::part(track-setting){box-sizing:border-box;border-bottom:1px solid #F4F5F7;width:320px;min-height:152px;position:absolute;padding:8px;background:#fff}ssml-timeline::part(track-setting-row){display:flex;height:24px}ssml-timeline::part(track-setting-title){text-transform:uppercase;font-size:14px;width:64px;text-align:right}ssml-timeline::part(track-setting-label){color:#455A64;font-size:12px;font-weight:normal;line-height:24px;text-align:right;width:64px}ssml-timeline::part(track-setting-slider){flex:2;--paper-slider-knob-color: var(--paper-blue-700);--paper-slider-active-color: var(--paper-blue-700);--paper-slider-pin-color: var(--paper-blue-700)}\n',""])},function(t,e,o){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=function(t,e){var o=t[1]||"",n=t[3];if(!n)return o;if(e&&"function"==typeof btoa){var s=(r=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),i=n.sources.map((function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"}));return[o].concat(i).concat([s]).join("\n")}var r;return[o].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o})).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},s=0;s<this.length;s++){var i=this[s][0];null!=i&&(n[i]=!0)}for(s=0;s<t.length;s++){var r=t[s];null!=r[0]&&n[r[0]]||(o&&!r[2]?r[2]=o:o&&(r[2]="("+r[2]+") and ("+o+")"),e.push(r))}},e}},function(t,e,o){var n,s,i={},r=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===s&&(s=n.apply(this,arguments)),s}),a=function(t,e){return e?e.querySelector(t):document.querySelector(t)},l=function(t){var e={};return function(t,o){if("function"==typeof t)return t();if(void 0===e[t]){var n=a.call(this,t,o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,u=0,d=[],h=o(49);function p(t,e){for(var o=0;o<t.length;o++){var n=t[o],s=i[n.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](n.parts[r]);for(;r<n.parts.length;r++)s.parts.push(y(n.parts[r],e))}else{var a=[];for(r=0;r<n.parts.length;r++)a.push(y(n.parts[r],e));i[n.id]={id:n.id,refs:1,parts:a}}}}function g(t,e){for(var o=[],n={},s=0;s<t.length;s++){var i=t[s],r=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};n[r]?n[r].parts.push(a):o.push(n[r]={id:r,parts:[a]})}return o}function m(t,e){var o=l(t.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=d[d.length-1];if("top"===t.insertAt)n?n.nextSibling?o.insertBefore(e,n.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),d.push(e);else if("bottom"===t.insertAt)o.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var s=l(t.insertAt.before,o);o.insertBefore(e,s)}}function f(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function _(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return o.nc}();n&&(t.attrs.nonce=n)}return v(e,t.attrs),m(t,e),e}function v(t,e){Object.keys(e).forEach((function(o){t.setAttribute(o,e[o])}))}function y(t,e){var o,n,s,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var r=u++;o=c||(c=_(e)),n=k.bind(null,o,r,!1),s=k.bind(null,o,r,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),m(t,e),e}(e),n=C.bind(null,o,e),s=function(){f(o),o.href&&URL.revokeObjectURL(o.href)}):(o=_(e),n=x.bind(null,o),s=function(){f(o)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else s()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=g(t,e);return p(o,e),function(t){for(var n=[],s=0;s<o.length;s++){var r=o[s];(a=i[r.id]).refs--,n.push(a)}t&&p(g(t,e),e);for(s=0;s<n.length;s++){var a;if(0===(a=n[s]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete i[a.id]}}}};var b,w=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function k(t,e,o,n){var s=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=w(e,s);else{var i=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(i,r[e]):t.appendChild(i)}}function x(t,e){var o=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}function C(t,e,o){var n=o.css,s=o.sourceMap,i=void 0===e.convertToAbsoluteUrls&&s;(e.convertToAbsoluteUrls||i)&&(n=h(n)),s&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");var r=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=e.protocol+"//"+e.host,n=o+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var s,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(s=0===i.indexOf("//")?i:0===i.indexOf("/")?o+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(s)+")")}))}},function(t,e,o){(function(){"use strict";var t,n,s,i,r={}.hasOwnProperty;n=o(13),t=o(51),s=o(60),i=o(44),e.defaults=n.defaults,e.processors=i,e.ValidationError=function(t){function e(t){this.message=t}return function(t,e){for(var o in e)r.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(e,Error),e}(),e.Builder=t.Builder,e.Parser=s.Parser,e.parseString=s.parseString,e.parseStringPromise=s.parseStringPromise}).call(this)},function(t,e,o){(function(){"use strict";var t,n,s,i,r,a={}.hasOwnProperty;t=o(52),n=o(13).defaults,i=function(t){return"string"==typeof t&&(t.indexOf("&")>=0||t.indexOf(">")>=0||t.indexOf("<")>=0)},r=function(t){return"<![CDATA["+s(t)+"]]>"},s=function(t){return t.replace("]]>","]]]]><![CDATA[>")},e.Builder=function(){function e(t){var e,o,s;for(e in this.options={},o=n[.2])a.call(o,e)&&(s=o[e],this.options[e]=s);for(e in t)a.call(t,e)&&(s=t[e],this.options[e]=s)}return e.prototype.buildObject=function(e){var o,s,l,c,u,d;return o=this.options.attrkey,s=this.options.charkey,1===Object.keys(e).length&&this.options.rootName===n[.2].rootName?e=e[u=Object.keys(e)[0]]:u=this.options.rootName,d=this,l=function(t,e){var n,c,u,h,p,g;if("object"!=typeof e)d.options.cdata&&i(e)?t.raw(r(e)):t.txt(e);else if(Array.isArray(e)){for(h in e)if(a.call(e,h))for(p in c=e[h])u=c[p],t=l(t.ele(p),u).up()}else for(p in e)if(a.call(e,p))if(c=e[p],p===o){if("object"==typeof c)for(n in c)g=c[n],t=t.att(n,g)}else if(p===s)t=d.options.cdata&&i(c)?t.raw(r(c)):t.txt(c);else if(Array.isArray(c))for(h in c)a.call(c,h)&&(t="string"==typeof(u=c[h])?d.options.cdata&&i(u)?t.ele(p).raw(r(u)).up():t.ele(p,u).up():l(t.ele(p),u).up());else"object"==typeof c?t=l(t.ele(p),c).up():"string"==typeof c&&d.options.cdata&&i(c)?t=t.ele(p).raw(r(c)).up():(null==c&&(c=""),t=t.ele(p,c.toString()).up());return t},c=t.create(u,this.options.xmldec,this.options.doctype,{headless:this.options.headless,allowSurrogateChars:this.options.allowSurrogateChars}),l(c,e).end(this.options.renderOpts)},e}()}).call(this)},function(t,e,o){(function(){var e,n,s,i,r,a,l,c,u,d;d=o(2),c=d.assign,u=d.isFunction,s=o(32),i=o(33),r=o(58),l=o(27),a=o(59),e=o(0),n=o(8),t.exports.create=function(t,e,o,n){var s,r;if(null==t)throw new Error("Root element needs a name.");return n=c({},e,o,n),r=(s=new i(n)).element(t),n.headless||(s.declaration(n),null==n.pubID&&null==n.sysID||s.dtd(n)),r},t.exports.begin=function(t,e,o){var n;return u(t)&&(e=(n=[t,e])[0],o=n[1],t={}),e?new r(t,e,o):new i(t)},t.exports.stringWriter=function(t){return new l(t)},t.exports.streamWriter=function(t,e){return new a(t,e)},t.exports.implementation=new s,t.exports.nodeType=e,t.exports.writerState=n}).call(this)},function(t,e,o){(function(){var e,n;e=o(54),n=o(55),t.exports=function(){function t(){this.defaultParams={"canonical-form":!1,"cdata-sections":!1,comments:!1,"datatype-normalization":!1,"element-content-whitespace":!0,entities:!0,"error-handler":new e,infoset:!0,"validate-if-schema":!1,namespaces:!0,"namespace-declarations":!0,"normalize-characters":!1,"schema-location":"","schema-type":"","split-cdata-sections":!0,validate:!1,"well-formed":!0},this.params=Object.create(this.defaultParams)}return Object.defineProperty(t.prototype,"parameterNames",{get:function(){return new n(Object.keys(this.defaultParams))}}),t.prototype.getParameter=function(t){return this.params.hasOwnProperty(t)?this.params[t]:null},t.prototype.canSetParameter=function(t,e){return!0},t.prototype.setParameter=function(t,e){return null!=e?this.params[t]=e:delete this.params[t]},t}()}).call(this)},function(t,e){(function(){t.exports=function(){function t(){}return t.prototype.handleError=function(t){throw new Error(t)},t}()}).call(this)},function(t,e){(function(){t.exports=function(){function t(t){this.arr=t||[]}return Object.defineProperty(t.prototype,"length",{get:function(){return this.arr.length}}),t.prototype.item=function(t){return this.arr[t]||null},t.prototype.contains=function(t){return-1!==this.arr.indexOf(t)},t}()}).call(this)},function(t,e){(function(){t.exports=function(){function t(t){this.nodes=t}return Object.defineProperty(t.prototype,"length",{get:function(){return this.nodes.length||0}}),t.prototype.clone=function(){return this.nodes=null},t.prototype.item=function(t){return this.nodes[t]||null},t}()}).call(this)},function(t,e){(function(){t.exports={Disconnected:1,Preceding:2,Following:4,Contains:8,ContainedBy:16,ImplementationSpecific:32}}).call(this)},function(t,e,o){(function(){var e,n,s,i,r,a,l,c,u,d,h,p,g,m,f,_,v,y,b,w,k,x,C,E={}.hasOwnProperty;C=o(2),k=C.isObject,w=C.isFunction,x=C.isPlainObject,b=C.getValue,e=o(0),p=o(33),g=o(14),i=o(16),r=o(17),f=o(24),y=o(25),m=o(26),d=o(18),h=o(19),a=o(20),c=o(21),l=o(22),u=o(23),s=o(34),v=o(36),_=o(27),n=o(8),t.exports=function(){function t(t,o,n){var s;this.name="?xml",this.type=e.Document,t||(t={}),s={},t.writer?x(t.writer)&&(s=t.writer,t.writer=new _):t.writer=new _,this.options=t,this.writer=t.writer,this.writerOptions=this.writer.filterOptions(s),this.stringify=new v(t),this.onDataCallback=o||function(){},this.onEndCallback=n||function(){},this.currentNode=null,this.currentLevel=-1,this.openTags={},this.documentStarted=!1,this.documentCompleted=!1,this.root=null}return t.prototype.createChildNode=function(t){var o,n,s,i,r,a,l,c;switch(t.type){case e.CData:this.cdata(t.value);break;case e.Comment:this.comment(t.value);break;case e.Element:for(n in s={},l=t.attribs)E.call(l,n)&&(o=l[n],s[n]=o.value);this.node(t.name,s);break;case e.Dummy:this.dummy();break;case e.Raw:this.raw(t.value);break;case e.Text:this.text(t.value);break;case e.ProcessingInstruction:this.instruction(t.target,t.value);break;default:throw new Error("This XML node type is not supported in a JS object: "+t.constructor.name)}for(r=0,a=(c=t.children).length;r<a;r++)i=c[r],this.createChildNode(i),i.type===e.Element&&this.up();return this},t.prototype.dummy=function(){return this},t.prototype.node=function(t,e,o){var n;if(null==t)throw new Error("Missing node name.");if(this.root&&-1===this.currentLevel)throw new Error("Document can only have one root node. "+this.debugInfo(t));return this.openCurrent(),t=b(t),null==e&&(e={}),e=b(e),k(e)||(o=(n=[e,o])[0],e=n[1]),this.currentNode=new g(this,t,e),this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,null!=o&&this.text(o),this},t.prototype.element=function(t,o,n){var s,i,r,a,l,c;if(this.currentNode&&this.currentNode.type===e.DocType)this.dtdElement.apply(this,arguments);else if(Array.isArray(t)||k(t)||w(t))for(a=this.options.noValidation,this.options.noValidation=!0,(c=new p(this.options).element("TEMP_ROOT")).element(t),this.options.noValidation=a,i=0,r=(l=c.children).length;i<r;i++)s=l[i],this.createChildNode(s),s.type===e.Element&&this.up();else this.node(t,o,n);return this},t.prototype.attribute=function(t,e){var o,n;if(!this.currentNode||this.currentNode.children)throw new Error("att() can only be used immediately after an ele() call in callback mode. "+this.debugInfo(t));if(null!=t&&(t=b(t)),k(t))for(o in t)E.call(t,o)&&(n=t[o],this.attribute(o,n));else w(e)&&(e=e.apply()),this.options.keepNullAttributes&&null==e?this.currentNode.attribs[t]=new s(this,t,""):null!=e&&(this.currentNode.attribs[t]=new s(this,t,e));return this},t.prototype.text=function(t){var e;return this.openCurrent(),e=new y(this,t),this.onData(this.writer.text(e,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},t.prototype.cdata=function(t){var e;return this.openCurrent(),e=new i(this,t),this.onData(this.writer.cdata(e,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},t.prototype.comment=function(t){var e;return this.openCurrent(),e=new r(this,t),this.onData(this.writer.comment(e,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},t.prototype.raw=function(t){var e;return this.openCurrent(),e=new f(this,t),this.onData(this.writer.raw(e,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},t.prototype.instruction=function(t,e){var o,n,s,i,r;if(this.openCurrent(),null!=t&&(t=b(t)),null!=e&&(e=b(e)),Array.isArray(t))for(o=0,i=t.length;o<i;o++)n=t[o],this.instruction(n);else if(k(t))for(n in t)E.call(t,n)&&(s=t[n],this.instruction(n,s));else w(e)&&(e=e.apply()),r=new m(this,t,e),this.onData(this.writer.processingInstruction(r,this.writerOptions,this.currentLevel+1),this.currentLevel+1);return this},t.prototype.declaration=function(t,e,o){var n;if(this.openCurrent(),this.documentStarted)throw new Error("declaration() must be the first node.");return n=new d(this,t,e,o),this.onData(this.writer.declaration(n,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},t.prototype.doctype=function(t,e,o){if(this.openCurrent(),null==t)throw new Error("Missing root node name.");if(this.root)throw new Error("dtd() must come before the root node.");return this.currentNode=new h(this,e,o),this.currentNode.rootNodeName=t,this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,this},t.prototype.dtdElement=function(t,e){var o;return this.openCurrent(),o=new l(this,t,e),this.onData(this.writer.dtdElement(o,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},t.prototype.attList=function(t,e,o,n,s){var i;return this.openCurrent(),i=new a(this,t,e,o,n,s),this.onData(this.writer.dtdAttList(i,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},t.prototype.entity=function(t,e){var o;return this.openCurrent(),o=new c(this,!1,t,e),this.onData(this.writer.dtdEntity(o,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},t.prototype.pEntity=function(t,e){var o;return this.openCurrent(),o=new c(this,!0,t,e),this.onData(this.writer.dtdEntity(o,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},t.prototype.notation=function(t,e){var o;return this.openCurrent(),o=new u(this,t,e),this.onData(this.writer.dtdNotation(o,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},t.prototype.up=function(){if(this.currentLevel<0)throw new Error("The document node has no parent.");return this.currentNode?(this.currentNode.children?this.closeNode(this.currentNode):this.openNode(this.currentNode),this.currentNode=null):this.closeNode(this.openTags[this.currentLevel]),delete this.openTags[this.currentLevel],this.currentLevel--,this},t.prototype.end=function(){for(;this.currentLevel>=0;)this.up();return this.onEnd()},t.prototype.openCurrent=function(){if(this.currentNode)return this.currentNode.children=!0,this.openNode(this.currentNode)},t.prototype.openNode=function(t){var o,s,i,r;if(!t.isOpen){if(this.root||0!==this.currentLevel||t.type!==e.Element||(this.root=t),s="",t.type===e.Element){for(i in this.writerOptions.state=n.OpenTag,s=this.writer.indent(t,this.writerOptions,this.currentLevel)+"<"+t.name,r=t.attribs)E.call(r,i)&&(o=r[i],s+=this.writer.attribute(o,this.writerOptions,this.currentLevel));s+=(t.children?">":"/>")+this.writer.endline(t,this.writerOptions,this.currentLevel),this.writerOptions.state=n.InsideTag}else this.writerOptions.state=n.OpenTag,s=this.writer.indent(t,this.writerOptions,this.currentLevel)+"<!DOCTYPE "+t.rootNodeName,t.pubID&&t.sysID?s+=' PUBLIC "'+t.pubID+'" "'+t.sysID+'"':t.sysID&&(s+=' SYSTEM "'+t.sysID+'"'),t.children?(s+=" [",this.writerOptions.state=n.InsideTag):(this.writerOptions.state=n.CloseTag,s+=">"),s+=this.writer.endline(t,this.writerOptions,this.currentLevel);return this.onData(s,this.currentLevel),t.isOpen=!0}},t.prototype.closeNode=function(t){var o;if(!t.isClosed)return o="",this.writerOptions.state=n.CloseTag,o=t.type===e.Element?this.writer.indent(t,this.writerOptions,this.currentLevel)+"</"+t.name+">"+this.writer.endline(t,this.writerOptions,this.currentLevel):this.writer.indent(t,this.writerOptions,this.currentLevel)+"]>"+this.writer.endline(t,this.writerOptions,this.currentLevel),this.writerOptions.state=n.None,this.onData(o,this.currentLevel),t.isClosed=!0},t.prototype.onData=function(t,e){return this.documentStarted=!0,this.onDataCallback(t,e+1)},t.prototype.onEnd=function(){return this.documentCompleted=!0,this.onEndCallback()},t.prototype.debugInfo=function(t){return null==t?"":"node: <"+t+">"},t.prototype.ele=function(){return this.element.apply(this,arguments)},t.prototype.nod=function(t,e,o){return this.node(t,e,o)},t.prototype.txt=function(t){return this.text(t)},t.prototype.dat=function(t){return this.cdata(t)},t.prototype.com=function(t){return this.comment(t)},t.prototype.ins=function(t,e){return this.instruction(t,e)},t.prototype.dec=function(t,e,o){return this.declaration(t,e,o)},t.prototype.dtd=function(t,e,o){return this.doctype(t,e,o)},t.prototype.e=function(t,e,o){return this.element(t,e,o)},t.prototype.n=function(t,e,o){return this.node(t,e,o)},t.prototype.t=function(t){return this.text(t)},t.prototype.d=function(t){return this.cdata(t)},t.prototype.c=function(t){return this.comment(t)},t.prototype.r=function(t){return this.raw(t)},t.prototype.i=function(t,e){return this.instruction(t,e)},t.prototype.att=function(){return this.currentNode&&this.currentNode.type===e.DocType?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},t.prototype.a=function(){return this.currentNode&&this.currentNode.type===e.DocType?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},t.prototype.ent=function(t,e){return this.entity(t,e)},t.prototype.pent=function(t,e){return this.pEntity(t,e)},t.prototype.not=function(t,e){return this.notation(t,e)},t}()}).call(this)},function(t,e,o){(function(){var e,n,s,i={}.hasOwnProperty;e=o(0),s=o(37),n=o(8),t.exports=function(t){function o(t,e){this.stream=t,o.__super__.constructor.call(this,e)}return function(t,e){for(var o in e)i.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(o,t),o.prototype.endline=function(t,e,s){return t.isLastRootNode&&e.state===n.CloseTag?"":o.__super__.endline.call(this,t,e,s)},o.prototype.document=function(t,e){var o,n,s,i,r,a,l,c,u;for(n=s=0,r=(l=t.children).length;s<r;n=++s)(o=l[n]).isLastRootNode=n===t.children.length-1;for(e=this.filterOptions(e),u=[],i=0,a=(c=t.children).length;i<a;i++)o=c[i],u.push(this.writeChildNode(o,e,0));return u},o.prototype.attribute=function(t,e,n){return this.stream.write(o.__super__.attribute.call(this,t,e,n))},o.prototype.cdata=function(t,e,n){return this.stream.write(o.__super__.cdata.call(this,t,e,n))},o.prototype.comment=function(t,e,n){return this.stream.write(o.__super__.comment.call(this,t,e,n))},o.prototype.declaration=function(t,e,n){return this.stream.write(o.__super__.declaration.call(this,t,e,n))},o.prototype.docType=function(t,e,o){var s,i,r,a;if(o||(o=0),this.openNode(t,e,o),e.state=n.OpenTag,this.stream.write(this.indent(t,e,o)),this.stream.write("<!DOCTYPE "+t.root().name),t.pubID&&t.sysID?this.stream.write(' PUBLIC "'+t.pubID+'" "'+t.sysID+'"'):t.sysID&&this.stream.write(' SYSTEM "'+t.sysID+'"'),t.children.length>0){for(this.stream.write(" ["),this.stream.write(this.endline(t,e,o)),e.state=n.InsideTag,i=0,r=(a=t.children).length;i<r;i++)s=a[i],this.writeChildNode(s,e,o+1);e.state=n.CloseTag,this.stream.write("]")}return e.state=n.CloseTag,this.stream.write(e.spaceBeforeSlash+">"),this.stream.write(this.endline(t,e,o)),e.state=n.None,this.closeNode(t,e,o)},o.prototype.element=function(t,o,s){var r,a,l,c,u,d,h,p,g;for(h in s||(s=0),this.openNode(t,o,s),o.state=n.OpenTag,this.stream.write(this.indent(t,o,s)+"<"+t.name),p=t.attribs)i.call(p,h)&&(r=p[h],this.attribute(r,o,s));if(c=0===(l=t.children.length)?null:t.children[0],0===l||t.children.every((function(t){return(t.type===e.Text||t.type===e.Raw)&&""===t.value})))o.allowEmpty?(this.stream.write(">"),o.state=n.CloseTag,this.stream.write("</"+t.name+">")):(o.state=n.CloseTag,this.stream.write(o.spaceBeforeSlash+"/>"));else if(!o.pretty||1!==l||c.type!==e.Text&&c.type!==e.Raw||null==c.value){for(this.stream.write(">"+this.endline(t,o,s)),o.state=n.InsideTag,u=0,d=(g=t.children).length;u<d;u++)a=g[u],this.writeChildNode(a,o,s+1);o.state=n.CloseTag,this.stream.write(this.indent(t,o,s)+"</"+t.name+">")}else this.stream.write(">"),o.state=n.InsideTag,o.suppressPrettyCount++,!0,this.writeChildNode(c,o,s+1),o.suppressPrettyCount--,!1,o.state=n.CloseTag,this.stream.write("</"+t.name+">");return this.stream.write(this.endline(t,o,s)),o.state=n.None,this.closeNode(t,o,s)},o.prototype.processingInstruction=function(t,e,n){return this.stream.write(o.__super__.processingInstruction.call(this,t,e,n))},o.prototype.raw=function(t,e,n){return this.stream.write(o.__super__.raw.call(this,t,e,n))},o.prototype.text=function(t,e,n){return this.stream.write(o.__super__.text.call(this,t,e,n))},o.prototype.dtdAttList=function(t,e,n){return this.stream.write(o.__super__.dtdAttList.call(this,t,e,n))},o.prototype.dtdElement=function(t,e,n){return this.stream.write(o.__super__.dtdElement.call(this,t,e,n))},o.prototype.dtdEntity=function(t,e,n){return this.stream.write(o.__super__.dtdEntity.call(this,t,e,n))},o.prototype.dtdNotation=function(t,e,n){return this.stream.write(o.__super__.dtdNotation.call(this,t,e,n))},o}(s)}).call(this)},function(t,e,o){(function(){"use strict";var t,n,s,i,r,a,l,c,u=function(t,e){return function(){return t.apply(e,arguments)}},d={}.hasOwnProperty;l=o(61),s=o(10),t=o(76),a=o(44),c=o(42).setImmediate,n=o(13).defaults,i=function(t){return"object"==typeof t&&null!=t&&0===Object.keys(t).length},r=function(t,e,o){var n,s;for(n=0,s=t.length;n<s;n++)e=(0,t[n])(e,o);return e},e.Parser=function(o){function s(t){var o,s,i;if(this.parseStringPromise=u(this.parseStringPromise,this),this.parseString=u(this.parseString,this),this.reset=u(this.reset,this),this.assignOrPush=u(this.assignOrPush,this),this.processAsync=u(this.processAsync,this),!(this instanceof e.Parser))return new e.Parser(t);for(o in this.options={},s=n[.2])d.call(s,o)&&(i=s[o],this.options[o]=i);for(o in t)d.call(t,o)&&(i=t[o],this.options[o]=i);this.options.xmlns&&(this.options.xmlnskey=this.options.attrkey+"ns"),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(a.normalize)),this.reset()}return function(t,e){for(var o in e)d.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(s,o),s.prototype.processAsync=function(){var t,e;try{return this.remaining.length<=this.options.chunkSize?(t=this.remaining,this.remaining="",this.saxParser=this.saxParser.write(t),this.saxParser.close()):(t=this.remaining.substr(0,this.options.chunkSize),this.remaining=this.remaining.substr(this.options.chunkSize,this.remaining.length),this.saxParser=this.saxParser.write(t),c(this.processAsync))}catch(t){if(e=t,!this.saxParser.errThrown)return this.saxParser.errThrown=!0,this.emit(e)}},s.prototype.assignOrPush=function(t,e,o){return e in t?(t[e]instanceof Array||(t[e]=[t[e]]),t[e].push(o)):this.options.explicitArray?t[e]=[o]:t[e]=o},s.prototype.reset=function(){var t,e,o,n,s;return this.removeAllListeners(),this.saxParser=l.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.saxParser.errThrown=!1,this.saxParser.onerror=(s=this,function(t){if(s.saxParser.resume(),!s.saxParser.errThrown)return s.saxParser.errThrown=!0,s.emit("error",t)}),this.saxParser.onend=function(t){return function(){if(!t.saxParser.ended)return t.saxParser.ended=!0,t.emit("end",t.resultObject)}}(this),this.saxParser.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null,n=[],t=this.options.attrkey,e=this.options.charkey,this.saxParser.onopentag=function(o){return function(s){var i,a,l,c,u;if((l={})[e]="",!o.options.ignoreAttrs)for(i in u=s.attributes)d.call(u,i)&&(t in l||o.options.mergeAttrs||(l[t]={}),a=o.options.attrValueProcessors?r(o.options.attrValueProcessors,s.attributes[i],i):s.attributes[i],c=o.options.attrNameProcessors?r(o.options.attrNameProcessors,i):i,o.options.mergeAttrs?o.assignOrPush(l,c,a):l[t][c]=a);return l["#name"]=o.options.tagNameProcessors?r(o.options.tagNameProcessors,s.name):s.name,o.options.xmlns&&(l[o.options.xmlnskey]={uri:s.uri,local:s.local}),n.push(l)}}(this),this.saxParser.onclosetag=function(t){return function(){var o,s,a,l,c,u,h,p,g,m;if(u=n.pop(),c=u["#name"],t.options.explicitChildren&&t.options.preserveChildrenOrder||delete u["#name"],!0===u.cdata&&(o=u.cdata,delete u.cdata),g=n[n.length-1],u[e].match(/^\s*$/)&&!o?(s=u[e],delete u[e]):(t.options.trim&&(u[e]=u[e].trim()),t.options.normalize&&(u[e]=u[e].replace(/\s{2,}/g," ").trim()),u[e]=t.options.valueProcessors?r(t.options.valueProcessors,u[e],c):u[e],1===Object.keys(u).length&&e in u&&!t.EXPLICIT_CHARKEY&&(u=u[e])),i(u)&&(u=""!==t.options.emptyTag?t.options.emptyTag:s),null!=t.options.validator&&(m="/"+function(){var t,e,o;for(o=[],t=0,e=n.length;t<e;t++)l=n[t],o.push(l["#name"]);return o}().concat(c).join("/"),function(){var e;try{u=t.options.validator(m,g&&g[c],u)}catch(o){return e=o,t.emit("error",e)}}()),t.options.explicitChildren&&!t.options.mergeAttrs&&"object"==typeof u)if(t.options.preserveChildrenOrder){if(g){for(a in g[t.options.childkey]=g[t.options.childkey]||[],h={},u)d.call(u,a)&&(h[a]=u[a]);g[t.options.childkey].push(h),delete u["#name"],1===Object.keys(u).length&&e in u&&!t.EXPLICIT_CHARKEY&&(u=u[e])}}else l={},t.options.attrkey in u&&(l[t.options.attrkey]=u[t.options.attrkey],delete u[t.options.attrkey]),!t.options.charsAsChildren&&t.options.charkey in u&&(l[t.options.charkey]=u[t.options.charkey],delete u[t.options.charkey]),Object.getOwnPropertyNames(u).length>0&&(l[t.options.childkey]=u),u=l;return n.length>0?t.assignOrPush(g,c,u):(t.options.explicitRoot&&(p=u,(u={})[c]=p),t.resultObject=u,t.saxParser.ended=!0,t.emit("end",t.resultObject))}}(this),o=function(t){return function(o){var s,i;if(i=n[n.length-1])return i[e]+=o,t.options.explicitChildren&&t.options.preserveChildrenOrder&&t.options.charsAsChildren&&(t.options.includeWhiteChars||""!==o.replace(/\\n/g,"").trim())&&(i[t.options.childkey]=i[t.options.childkey]||[],(s={"#name":"__text__"})[e]=o,t.options.normalize&&(s[e]=s[e].replace(/\s{2,}/g," ").trim()),i[t.options.childkey].push(s)),i}}(this),this.saxParser.ontext=o,this.saxParser.oncdata=function(t){var e;if(e=o(t))return e.cdata=!0}},s.prototype.parseString=function(e,o){var n;null!=o&&"function"==typeof o&&(this.on("end",(function(t){return this.reset(),o(null,t)})),this.on("error",(function(t){return this.reset(),o(t)})));try{return""===(e=e.toString()).trim()?(this.emit("end",null),!0):(e=t.stripBOM(e),this.options.async?(this.remaining=e,c(this.processAsync),this.saxParser):this.saxParser.write(e).close())}catch(t){if(n=t,!this.saxParser.errThrown&&!this.saxParser.ended)return this.emit("error",n),this.saxParser.errThrown=!0;if(this.saxParser.ended)throw n}},s.prototype.parseStringPromise=function(t){return new Promise((e=this,function(o,n){return e.parseString(t,(function(t,e){return t?n(t):o(e)}))}));var e},s}(s),e.parseString=function(t,o,n){var s,i;return null!=n?("function"==typeof n&&(s=n),"object"==typeof o&&(i=o)):("function"==typeof o&&(s=o),i={}),new e.Parser(i).parseString(t,s)},e.parseStringPromise=function(t,o){var n;return"object"==typeof o&&(n=o),new e.Parser(n).parseStringPromise(t)}}).call(this)},function(t,e,o){(function(t){!function(e){e.parser=function(t,e){return new i(t,e)},e.SAXParser=i,e.SAXStream=a,e.createStream=function(t,e){return new a(t,e)},e.MAX_BUFFER_LENGTH=65536;var n,s=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];function i(t,o){if(!(this instanceof i))return new i(t,o);!function(t){for(var e=0,o=s.length;e<o;e++)t[s[e]]=""}(this),this.q=this.c="",this.bufferCheckPosition=e.MAX_BUFFER_LENGTH,this.opt=o||{},this.opt.lowercase=this.opt.lowercase||this.opt.lowercasetags,this.looseCase=this.opt.lowercase?"toLowerCase":"toUpperCase",this.tags=[],this.closed=this.closedRoot=this.sawRoot=!1,this.tag=this.error=null,this.strict=!!t,this.noscript=!(!t&&!this.opt.noscript),this.state=k.BEGIN,this.strictEntities=this.opt.strictEntities,this.ENTITIES=this.strictEntities?Object.create(e.XML_ENTITIES):Object.create(e.ENTITIES),this.attribList=[],this.opt.xmlns&&(this.ns=Object.create(c)),this.trackPosition=!1!==this.opt.position,this.trackPosition&&(this.position=this.line=this.column=0),C(this,"onready")}e.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"],Object.create||(Object.create=function(t){function e(){}return e.prototype=t,new e}),Object.keys||(Object.keys=function(t){var e=[];for(var o in t)t.hasOwnProperty(o)&&e.push(o);return e}),i.prototype={end:function(){A(this)},write:function(t){if(this.error)throw this.error;if(this.closed)return z(this,"Cannot write after close. Assign an onready handler.");if(null===t)return A(this);"object"==typeof t&&(t=t.toString());var o=0,n="";for(;n=R(t,o++),this.c=n,n;)switch(this.trackPosition&&(this.position++,"\n"===n?(this.line++,this.column=0):this.column++),this.state){case k.BEGIN:if(this.state=k.BEGIN_WHITESPACE,"\ufeff"===n)continue;H(this,n);continue;case k.BEGIN_WHITESPACE:H(this,n);continue;case k.TEXT:if(this.sawRoot&&!this.closedRoot){for(var i=o-1;n&&"<"!==n&&"&"!==n;)(n=R(t,o++))&&this.trackPosition&&(this.position++,"\n"===n?(this.line++,this.column=0):this.column++);this.textNode+=t.substring(i,o-1)}"<"!==n||this.sawRoot&&this.closedRoot&&!this.strict?(g(n)||this.sawRoot&&!this.closedRoot||O(this,"Text data outside of root node."),"&"===n?this.state=k.TEXT_ENTITY:this.textNode+=n):(this.state=k.OPEN_WAKA,this.startTagPosition=this.position);continue;case k.SCRIPT:"<"===n?this.state=k.SCRIPT_ENDING:this.script+=n;continue;case k.SCRIPT_ENDING:"/"===n?this.state=k.CLOSE_TAG:(this.script+="<"+n,this.state=k.SCRIPT);continue;case k.OPEN_WAKA:if("!"===n)this.state=k.SGML_DECL,this.sgmlDecl="";else if(g(n));else if(_(u,n))this.state=k.OPEN_TAG,this.tagName=n;else if("/"===n)this.state=k.CLOSE_TAG,this.tagName="";else if("?"===n)this.state=k.PROC_INST,this.procInstName=this.procInstBody="";else{if(O(this,"Unencoded <"),this.startTagPosition+1<this.position){var r=this.position-this.startTagPosition;n=new Array(r).join(" ")+n}this.textNode+="<"+n,this.state=k.TEXT}continue;case k.SGML_DECL:"[CDATA["===(this.sgmlDecl+n).toUpperCase()?(E(this,"onopencdata"),this.state=k.CDATA,this.sgmlDecl="",this.cdata=""):this.sgmlDecl+n==="--"?(this.state=k.COMMENT,this.comment="",this.sgmlDecl=""):"DOCTYPE"===(this.sgmlDecl+n).toUpperCase()?(this.state=k.DOCTYPE,(this.doctype||this.sawRoot)&&O(this,"Inappropriately located doctype declaration"),this.doctype="",this.sgmlDecl=""):">"===n?(E(this,"onsgmldeclaration",this.sgmlDecl),this.sgmlDecl="",this.state=k.TEXT):m(n)?(this.state=k.SGML_DECL_QUOTED,this.sgmlDecl+=n):this.sgmlDecl+=n;continue;case k.SGML_DECL_QUOTED:n===this.q&&(this.state=k.SGML_DECL,this.q=""),this.sgmlDecl+=n;continue;case k.DOCTYPE:">"===n?(this.state=k.TEXT,E(this,"ondoctype",this.doctype),this.doctype=!0):(this.doctype+=n,"["===n?this.state=k.DOCTYPE_DTD:m(n)&&(this.state=k.DOCTYPE_QUOTED,this.q=n));continue;case k.DOCTYPE_QUOTED:this.doctype+=n,n===this.q&&(this.q="",this.state=k.DOCTYPE);continue;case k.DOCTYPE_DTD:this.doctype+=n,"]"===n?this.state=k.DOCTYPE:m(n)&&(this.state=k.DOCTYPE_DTD_QUOTED,this.q=n);continue;case k.DOCTYPE_DTD_QUOTED:this.doctype+=n,n===this.q&&(this.state=k.DOCTYPE_DTD,this.q="");continue;case k.COMMENT:"-"===n?this.state=k.COMMENT_ENDING:this.comment+=n;continue;case k.COMMENT_ENDING:"-"===n?(this.state=k.COMMENT_ENDED,this.comment=T(this.opt,this.comment),this.comment&&E(this,"oncomment",this.comment),this.comment=""):(this.comment+="-"+n,this.state=k.COMMENT);continue;case k.COMMENT_ENDED:">"!==n?(O(this,"Malformed comment"),this.comment+="--"+n,this.state=k.COMMENT):this.state=k.TEXT;continue;case k.CDATA:"]"===n?this.state=k.CDATA_ENDING:this.cdata+=n;continue;case k.CDATA_ENDING:"]"===n?this.state=k.CDATA_ENDING_2:(this.cdata+="]"+n,this.state=k.CDATA);continue;case k.CDATA_ENDING_2:">"===n?(this.cdata&&E(this,"oncdata",this.cdata),E(this,"onclosecdata"),this.cdata="",this.state=k.TEXT):"]"===n?this.cdata+="]":(this.cdata+="]]"+n,this.state=k.CDATA);continue;case k.PROC_INST:"?"===n?this.state=k.PROC_INST_ENDING:g(n)?this.state=k.PROC_INST_BODY:this.procInstName+=n;continue;case k.PROC_INST_BODY:if(!this.procInstBody&&g(n))continue;"?"===n?this.state=k.PROC_INST_ENDING:this.procInstBody+=n;continue;case k.PROC_INST_ENDING:">"===n?(E(this,"onprocessinginstruction",{name:this.procInstName,body:this.procInstBody}),this.procInstName=this.procInstBody="",this.state=k.TEXT):(this.procInstBody+="?"+n,this.state=k.PROC_INST_BODY);continue;case k.OPEN_TAG:_(d,n)?this.tagName+=n:(M(this),">"===n?L(this):"/"===n?this.state=k.OPEN_TAG_SLASH:(g(n)||O(this,"Invalid character in tag name"),this.state=k.ATTRIB));continue;case k.OPEN_TAG_SLASH:">"===n?(L(this,!0),N(this)):(O(this,"Forward-slash in opening tag not followed by >"),this.state=k.ATTRIB);continue;case k.ATTRIB:if(g(n))continue;">"===n?L(this):"/"===n?this.state=k.OPEN_TAG_SLASH:_(u,n)?(this.attribName=n,this.attribValue="",this.state=k.ATTRIB_NAME):O(this,"Invalid attribute name");continue;case k.ATTRIB_NAME:"="===n?this.state=k.ATTRIB_VALUE:">"===n?(O(this,"Attribute without value"),this.attribValue=this.attribName,P(this),L(this)):g(n)?this.state=k.ATTRIB_NAME_SAW_WHITE:_(d,n)?this.attribName+=n:O(this,"Invalid attribute name");continue;case k.ATTRIB_NAME_SAW_WHITE:if("="===n)this.state=k.ATTRIB_VALUE;else{if(g(n))continue;O(this,"Attribute without value"),this.tag.attributes[this.attribName]="",this.attribValue="",E(this,"onattribute",{name:this.attribName,value:""}),this.attribName="",">"===n?L(this):_(u,n)?(this.attribName=n,this.state=k.ATTRIB_NAME):(O(this,"Invalid attribute name"),this.state=k.ATTRIB)}continue;case k.ATTRIB_VALUE:if(g(n))continue;m(n)?(this.q=n,this.state=k.ATTRIB_VALUE_QUOTED):(O(this,"Unquoted attribute value"),this.state=k.ATTRIB_VALUE_UNQUOTED,this.attribValue=n);continue;case k.ATTRIB_VALUE_QUOTED:if(n!==this.q){"&"===n?this.state=k.ATTRIB_VALUE_ENTITY_Q:this.attribValue+=n;continue}P(this),this.q="",this.state=k.ATTRIB_VALUE_CLOSED;continue;case k.ATTRIB_VALUE_CLOSED:g(n)?this.state=k.ATTRIB:">"===n?L(this):"/"===n?this.state=k.OPEN_TAG_SLASH:_(u,n)?(O(this,"No whitespace between attributes"),this.attribName=n,this.attribValue="",this.state=k.ATTRIB_NAME):O(this,"Invalid attribute name");continue;case k.ATTRIB_VALUE_UNQUOTED:if(!f(n)){"&"===n?this.state=k.ATTRIB_VALUE_ENTITY_U:this.attribValue+=n;continue}P(this),">"===n?L(this):this.state=k.ATTRIB;continue;case k.CLOSE_TAG:if(this.tagName)">"===n?N(this):_(d,n)?this.tagName+=n:this.script?(this.script+="</"+this.tagName,this.tagName="",this.state=k.SCRIPT):(g(n)||O(this,"Invalid tagname in closing tag"),this.state=k.CLOSE_TAG_SAW_WHITE);else{if(g(n))continue;v(u,n)?this.script?(this.script+="</"+n,this.state=k.SCRIPT):O(this,"Invalid tagname in closing tag."):this.tagName=n}continue;case k.CLOSE_TAG_SAW_WHITE:if(g(n))continue;">"===n?N(this):O(this,"Invalid characters in closing tag");continue;case k.TEXT_ENTITY:case k.ATTRIB_VALUE_ENTITY_Q:case k.ATTRIB_VALUE_ENTITY_U:var a,l;switch(this.state){case k.TEXT_ENTITY:a=k.TEXT,l="textNode";break;case k.ATTRIB_VALUE_ENTITY_Q:a=k.ATTRIB_VALUE_QUOTED,l="attribValue";break;case k.ATTRIB_VALUE_ENTITY_U:a=k.ATTRIB_VALUE_UNQUOTED,l="attribValue"}";"===n?(this[l]+=D(this),this.entity="",this.state=a):_(this.entity.length?p:h,n)?this.entity+=n:(O(this,"Invalid character in entity name"),this[l]+="&"+this.entity+n,this.entity="",this.state=a);continue;default:throw new Error(this,"Unknown state: "+this.state)}this.position>=this.bufferCheckPosition&&function(t){for(var o=Math.max(e.MAX_BUFFER_LENGTH,10),n=0,i=0,r=s.length;i<r;i++){var a=t[s[i]].length;if(a>o)switch(s[i]){case"textNode":S(t);break;case"cdata":E(t,"oncdata",t.cdata),t.cdata="";break;case"script":E(t,"onscript",t.script),t.script="";break;default:z(t,"Max buffer length exceeded: "+s[i])}n=Math.max(n,a)}var l=e.MAX_BUFFER_LENGTH-n;t.bufferCheckPosition=l+t.position}(this);return this}
/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){var t;S(t=this),""!==t.cdata&&(E(t,"oncdata",t.cdata),t.cdata=""),""!==t.script&&(E(t,"onscript",t.script),t.script="")}};try{n=o(64).Stream}catch(t){n=function(){}}var r=e.EVENTS.filter((function(t){return"error"!==t&&"end"!==t}));function a(t,e){if(!(this instanceof a))return new a(t,e);n.apply(this),this._parser=new i(t,e),this.writable=!0,this.readable=!0;var o=this;this._parser.onend=function(){o.emit("end")},this._parser.onerror=function(t){o.emit("error",t),o._parser.error=null},this._decoder=null,r.forEach((function(t){Object.defineProperty(o,"on"+t,{get:function(){return o._parser["on"+t]},set:function(e){if(!e)return o.removeAllListeners(t),o._parser["on"+t]=e,e;o.on(t,e)},enumerable:!0,configurable:!1})}))}a.prototype=Object.create(n.prototype,{constructor:{value:a}}),a.prototype.write=function(e){if("function"==typeof t&&"function"==typeof t.isBuffer&&t.isBuffer(e)){if(!this._decoder){var n=o(31).StringDecoder;this._decoder=new n("utf8")}e=this._decoder.write(e)}return this._parser.write(e.toString()),this.emit("data",e),!0},a.prototype.end=function(t){return t&&t.length&&this.write(t),this._parser.end(),!0},a.prototype.on=function(t,e){var o=this;return o._parser["on"+t]||-1===r.indexOf(t)||(o._parser["on"+t]=function(){var e=1===arguments.length?[arguments[0]]:Array.apply(null,arguments);e.splice(0,0,t),o.emit.apply(o,e)}),n.prototype.on.call(o,t,e)};var l="http://www.w3.org/XML/1998/namespace",c={xml:l,xmlns:"http://www.w3.org/2000/xmlns/"},u=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,d=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,h=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,p=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function g(t){return" "===t||"\n"===t||"\r"===t||"\t"===t}function m(t){return'"'===t||"'"===t}function f(t){return">"===t||g(t)}function _(t,e){return t.test(e)}function v(t,e){return!_(t,e)}var y,b,w,k=0;for(var x in e.STATE={BEGIN:k++,BEGIN_WHITESPACE:k++,TEXT:k++,TEXT_ENTITY:k++,OPEN_WAKA:k++,SGML_DECL:k++,SGML_DECL_QUOTED:k++,DOCTYPE:k++,DOCTYPE_QUOTED:k++,DOCTYPE_DTD:k++,DOCTYPE_DTD_QUOTED:k++,COMMENT_STARTING:k++,COMMENT:k++,COMMENT_ENDING:k++,COMMENT_ENDED:k++,CDATA:k++,CDATA_ENDING:k++,CDATA_ENDING_2:k++,PROC_INST:k++,PROC_INST_BODY:k++,PROC_INST_ENDING:k++,OPEN_TAG:k++,OPEN_TAG_SLASH:k++,ATTRIB:k++,ATTRIB_NAME:k++,ATTRIB_NAME_SAW_WHITE:k++,ATTRIB_VALUE:k++,ATTRIB_VALUE_QUOTED:k++,ATTRIB_VALUE_CLOSED:k++,ATTRIB_VALUE_UNQUOTED:k++,ATTRIB_VALUE_ENTITY_Q:k++,ATTRIB_VALUE_ENTITY_U:k++,CLOSE_TAG:k++,CLOSE_TAG_SAW_WHITE:k++,SCRIPT:k++,SCRIPT_ENDING:k++},e.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},e.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(e.ENTITIES).forEach((function(t){var o=e.ENTITIES[t],n="number"==typeof o?String.fromCharCode(o):o;e.ENTITIES[t]=n})),e.STATE)e.STATE[e.STATE[x]]=x;function C(t,e,o){t[e]&&t[e](o)}function E(t,e,o){t.textNode&&S(t),C(t,e,o)}function S(t){t.textNode=T(t.opt,t.textNode),t.textNode&&C(t,"ontext",t.textNode),t.textNode=""}function T(t,e){return t.trim&&(e=e.trim()),t.normalize&&(e=e.replace(/\s+/g," ")),e}function z(t,e){return S(t),t.trackPosition&&(e+="\nLine: "+t.line+"\nColumn: "+t.column+"\nChar: "+t.c),e=new Error(e),t.error=e,C(t,"onerror",e),t}function A(t){return t.sawRoot&&!t.closedRoot&&O(t,"Unclosed root tag"),t.state!==k.BEGIN&&t.state!==k.BEGIN_WHITESPACE&&t.state!==k.TEXT&&z(t,"Unexpected end"),S(t),t.c="",t.closed=!0,C(t,"onend"),i.call(t,t.strict,t.opt),t}function O(t,e){if("object"!=typeof t||!(t instanceof i))throw new Error("bad call to strictFail");t.strict&&z(t,e)}function M(t){t.strict||(t.tagName=t.tagName[t.looseCase]());var e=t.tags[t.tags.length-1]||t,o=t.tag={name:t.tagName,attributes:{}};t.opt.xmlns&&(o.ns=e.ns),t.attribList.length=0,E(t,"onopentagstart",o)}function I(t,e){var o=t.indexOf(":")<0?["",t]:t.split(":"),n=o[0],s=o[1];return e&&"xmlns"===t&&(n="xmlns",s=""),{prefix:n,local:s}}function P(t){if(t.strict||(t.attribName=t.attribName[t.looseCase]()),-1!==t.attribList.indexOf(t.attribName)||t.tag.attributes.hasOwnProperty(t.attribName))t.attribName=t.attribValue="";else{if(t.opt.xmlns){var e=I(t.attribName,!0),o=e.prefix,n=e.local;if("xmlns"===o)if("xml"===n&&t.attribValue!==l)O(t,"xml: prefix must be bound to "+l+"\nActual: "+t.attribValue);else if("xmlns"===n&&"http://www.w3.org/2000/xmlns/"!==t.attribValue)O(t,"xmlns: prefix must be bound to http://www.w3.org/2000/xmlns/\nActual: "+t.attribValue);else{var s=t.tag,i=t.tags[t.tags.length-1]||t;s.ns===i.ns&&(s.ns=Object.create(i.ns)),s.ns[n]=t.attribValue}t.attribList.push([t.attribName,t.attribValue])}else t.tag.attributes[t.attribName]=t.attribValue,E(t,"onattribute",{name:t.attribName,value:t.attribValue});t.attribName=t.attribValue=""}}function L(t,e){if(t.opt.xmlns){var o=t.tag,n=I(t.tagName);o.prefix=n.prefix,o.local=n.local,o.uri=o.ns[n.prefix]||"",o.prefix&&!o.uri&&(O(t,"Unbound namespace prefix: "+JSON.stringify(t.tagName)),o.uri=n.prefix);var s=t.tags[t.tags.length-1]||t;o.ns&&s.ns!==o.ns&&Object.keys(o.ns).forEach((function(e){E(t,"onopennamespace",{prefix:e,uri:o.ns[e]})}));for(var i=0,r=t.attribList.length;i<r;i++){var a=t.attribList[i],l=a[0],c=a[1],u=I(l,!0),d=u.prefix,h=u.local,p=""===d?"":o.ns[d]||"",g={name:l,value:c,prefix:d,local:h,uri:p};d&&"xmlns"!==d&&!p&&(O(t,"Unbound namespace prefix: "+JSON.stringify(d)),g.uri=d),t.tag.attributes[l]=g,E(t,"onattribute",g)}t.attribList.length=0}t.tag.isSelfClosing=!!e,t.sawRoot=!0,t.tags.push(t.tag),E(t,"onopentag",t.tag),e||(t.noscript||"script"!==t.tagName.toLowerCase()?t.state=k.TEXT:t.state=k.SCRIPT,t.tag=null,t.tagName=""),t.attribName=t.attribValue="",t.attribList.length=0}function N(t){if(!t.tagName)return O(t,"Weird empty close tag."),t.textNode+="</>",void(t.state=k.TEXT);if(t.script){if("script"!==t.tagName)return t.script+="</"+t.tagName+">",t.tagName="",void(t.state=k.SCRIPT);E(t,"onscript",t.script),t.script=""}var e=t.tags.length,o=t.tagName;t.strict||(o=o[t.looseCase]());for(var n=o;e--;){if(t.tags[e].name===n)break;O(t,"Unexpected close tag")}if(e<0)return O(t,"Unmatched closing tag: "+t.tagName),t.textNode+="</"+t.tagName+">",void(t.state=k.TEXT);t.tagName=o;for(var s=t.tags.length;s-- >e;){var i=t.tag=t.tags.pop();t.tagName=t.tag.name,E(t,"onclosetag",t.tagName);var r={};for(var a in i.ns)r[a]=i.ns[a];var l=t.tags[t.tags.length-1]||t;t.opt.xmlns&&i.ns!==l.ns&&Object.keys(i.ns).forEach((function(e){var o=i.ns[e];E(t,"onclosenamespace",{prefix:e,uri:o})}))}0===e&&(t.closedRoot=!0),t.tagName=t.attribValue=t.attribName="",t.attribList.length=0,t.state=k.TEXT}function D(t){var e,o=t.entity,n=o.toLowerCase(),s="";return t.ENTITIES[o]?t.ENTITIES[o]:t.ENTITIES[n]?t.ENTITIES[n]:("#"===(o=n).charAt(0)&&("x"===o.charAt(1)?(o=o.slice(2),s=(e=parseInt(o,16)).toString(16)):(o=o.slice(1),s=(e=parseInt(o,10)).toString(10))),o=o.replace(/^0+/,""),isNaN(e)||s.toLowerCase()!==o?(O(t,"Invalid character entity"),"&"+t.entity+";"):String.fromCodePoint(e))}function H(t,e){"<"===e?(t.state=k.OPEN_WAKA,t.startTagPosition=t.position):g(e)||(O(t,"Non-whitespace before first tag."),t.textNode=e,t.state=k.TEXT)}function R(t,e){var o="";return e<t.length&&(o=t.charAt(e)),o}k=e.STATE,String.fromCodePoint||(y=String.fromCharCode,b=Math.floor,w=function(){var t,e,o=16384,n=[],s=-1,i=arguments.length;if(!i)return"";for(var r="";++s<i;){var a=Number(arguments[s]);if(!isFinite(a)||a<0||a>1114111||b(a)!==a)throw RangeError("Invalid code point: "+a);a<=65535?n.push(a):(t=55296+((a-=65536)>>10),e=a%1024+56320,n.push(t,e)),(s+1===i||n.length>o)&&(r+=y.apply(null,n),n.length=0)}return r},Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:w,configurable:!0,writable:!0}):String.fromCodePoint=w)}(e)}).call(this,o(9).Buffer)},function(t,e,o){"use strict";e.byteLength=function(t){var e=c(t),o=e[0],n=e[1];return 3*(o+n)/4-n},e.toByteArray=function(t){var e,o,n=c(t),r=n[0],a=n[1],l=new i(function(t,e,o){return 3*(e+o)/4-o}(0,r,a)),u=0,d=a>0?r-4:r;for(o=0;o<d;o+=4)e=s[t.charCodeAt(o)]<<18|s[t.charCodeAt(o+1)]<<12|s[t.charCodeAt(o+2)]<<6|s[t.charCodeAt(o+3)],l[u++]=e>>16&255,l[u++]=e>>8&255,l[u++]=255&e;2===a&&(e=s[t.charCodeAt(o)]<<2|s[t.charCodeAt(o+1)]>>4,l[u++]=255&e);1===a&&(e=s[t.charCodeAt(o)]<<10|s[t.charCodeAt(o+1)]<<4|s[t.charCodeAt(o+2)]>>2,l[u++]=e>>8&255,l[u++]=255&e);return l},e.fromByteArray=function(t){for(var e,o=t.length,s=o%3,i=[],r=0,a=o-s;r<a;r+=16383)i.push(u(t,r,r+16383>a?a:r+16383));1===s?(e=t[o-1],i.push(n[e>>2]+n[e<<4&63]+"==")):2===s&&(e=(t[o-2]<<8)+t[o-1],i.push(n[e>>10]+n[e>>4&63]+n[e<<2&63]+"="));return i.join("")};for(var n=[],s=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,l=r.length;a<l;++a)n[a]=r[a],s[r.charCodeAt(a)]=a;function c(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=t.indexOf("=");return-1===o&&(o=e),[o,o===e?0:4-o%4]}function u(t,e,o){for(var s,i,r=[],a=e;a<o;a+=3)s=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),r.push(n[(i=s)>>18&63]+n[i>>12&63]+n[i>>6&63]+n[63&i]);return r.join("")}s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,o,n,s){var i,r,a=8*s-n-1,l=(1<<a)-1,c=l>>1,u=-7,d=o?s-1:0,h=o?-1:1,p=t[e+d];for(d+=h,i=p&(1<<-u)-1,p>>=-u,u+=a;u>0;i=256*i+t[e+d],d+=h,u-=8);for(r=i&(1<<-u)-1,i>>=-u,u+=n;u>0;r=256*r+t[e+d],d+=h,u-=8);if(0===i)i=1-c;else{if(i===l)return r?NaN:1/0*(p?-1:1);r+=Math.pow(2,n),i-=c}return(p?-1:1)*r*Math.pow(2,i-n)},e.write=function(t,e,o,n,s,i){var r,a,l,c=8*i-s-1,u=(1<<c)-1,d=u>>1,h=23===s?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,g=n?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,r=u):(r=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-r))<1&&(r--,l*=2),(e+=r+d>=1?h/l:h*Math.pow(2,1-d))*l>=2&&(r++,l/=2),r+d>=u?(a=0,r=u):r+d>=1?(a=(e*l-1)*Math.pow(2,s),r+=d):(a=e*Math.pow(2,d-1)*Math.pow(2,s),r=0));s>=8;t[o+p]=255&a,p+=g,a/=256,s-=8);for(r=r<<s|a,c+=s;c>0;t[o+p]=255&r,p+=g,r/=256,c-=8);t[o+p-g]|=128*m}},function(t,e,o){t.exports=s;var n=o(10).EventEmitter;function s(){n.call(this)}o(5)(s,n),s.Readable=o(28),s.Writable=o(72),s.Duplex=o(73),s.Transform=o(74),s.PassThrough=o(75),s.Stream=s,s.prototype.pipe=function(t,e){var o=this;function s(e){t.writable&&!1===t.write(e)&&o.pause&&o.pause()}function i(){o.readable&&o.resume&&o.resume()}o.on("data",s),t.on("drain",i),t._isStdio||e&&!1===e.end||(o.on("end",a),o.on("close",l));var r=!1;function a(){r||(r=!0,t.end())}function l(){r||(r=!0,"function"==typeof t.destroy&&t.destroy())}function c(t){if(u(),0===n.listenerCount(this,"error"))throw t}function u(){o.removeListener("data",s),t.removeListener("drain",i),o.removeListener("end",a),o.removeListener("close",l),o.removeListener("error",c),t.removeListener("error",c),o.removeListener("end",u),o.removeListener("close",u),t.removeListener("close",u)}return o.on("error",c),t.on("error",c),o.on("end",u),o.on("close",u),t.on("close",u),t.emit("pipe",o),t}},function(t,e){},function(t,e,o){"use strict";var n=o(29).Buffer,s=o(67);t.exports=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.head=null,this.tail=null,this.length=0}return t.prototype.push=function(t){var e={data:t,next:null};this.length>0?this.tail.next=e:this.head=e,this.tail=e,++this.length},t.prototype.unshift=function(t){var e={data:t,next:this.head};0===this.length&&(this.tail=e),this.head=e,++this.length},t.prototype.shift=function(){if(0!==this.length){var t=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,t}},t.prototype.clear=function(){this.head=this.tail=null,this.length=0},t.prototype.join=function(t){if(0===this.length)return"";for(var e=this.head,o=""+e.data;e=e.next;)o+=t+e.data;return o},t.prototype.concat=function(t){if(0===this.length)return n.alloc(0);if(1===this.length)return this.head.data;for(var e,o,s,i=n.allocUnsafe(t>>>0),r=this.head,a=0;r;)e=r.data,o=i,s=a,e.copy(o,s),a+=r.data.length,r=r.next;return i},t}(),s&&s.inspect&&s.inspect.custom&&(t.exports.prototype[s.inspect.custom]=function(){var t=s.inspect({length:this.length});return this.constructor.name+" "+t})},function(t,e){},function(t,e,o){(function(t,e){!function(t,o){"use strict";if(!t.setImmediate){var n,s,i,r,a,l=1,c={},u=!1,d=t.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(t);h=h&&h.setTimeout?h:t,"[object process]"==={}.toString.call(t.process)?n=function(t){e.nextTick((function(){g(t)}))}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,o=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=o,e}}()?t.MessageChannel?((i=new MessageChannel).port1.onmessage=function(t){g(t.data)},n=function(t){i.port2.postMessage(t)}):d&&"onreadystatechange"in d.createElement("script")?(s=d.documentElement,n=function(t){var e=d.createElement("script");e.onreadystatechange=function(){g(t),e.onreadystatechange=null,s.removeChild(e),e=null},s.appendChild(e)}):n=function(t){setTimeout(g,0,t)}:(r="setImmediate$"+Math.random()+"$",a=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(r)&&g(+e.data.slice(r.length))},t.addEventListener?t.addEventListener("message",a,!1):t.attachEvent("onmessage",a),n=function(e){t.postMessage(r+e,"*")}),h.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),o=0;o<e.length;o++)e[o]=arguments[o+1];var s={callback:t,args:e};return c[l]=s,n(l),l++},h.clearImmediate=p}function p(t){delete c[t]}function g(t){if(u)setTimeout(g,0,t);else{var e=c[t];if(e){u=!0;try{!function(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(void 0,o)}}(e)}finally{p(t),u=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,o(4),o(11))},function(t,e,o){(function(e){function o(t){try{if(!e.localStorage)return!1}catch(t){return!1}var o=e.localStorage[t];return null!=o&&"true"===String(o).toLowerCase()}t.exports=function(t,e){if(o("noDeprecation"))return t;var n=!1;return function(){if(!n){if(o("throwDeprecation"))throw new Error(e);o("traceDeprecation")?console.trace(e):console.warn(e),n=!0}return t.apply(this,arguments)}}}).call(this,o(4))},function(t,e,o){var n=o(9),s=n.Buffer;function i(t,e){for(var o in t)e[o]=t[o]}function r(t,e,o){return s(t,e,o)}s.from&&s.alloc&&s.allocUnsafe&&s.allocUnsafeSlow?t.exports=n:(i(n,e),e.Buffer=r),r.prototype=Object.create(s.prototype),i(s,r),r.from=function(t,e,o){if("number"==typeof t)throw new TypeError("Argument must not be a number");return s(t,e,o)},r.alloc=function(t,e,o){if("number"!=typeof t)throw new TypeError("Argument must be a number");var n=s(t);return void 0!==e?"string"==typeof o?n.fill(e,o):n.fill(e):n.fill(0),n},r.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return s(t)},r.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return n.SlowBuffer(t)}},function(t,e,o){"use strict";t.exports=i;var n=o(43),s=Object.create(o(6));function i(t){if(!(this instanceof i))return new i(t);n.call(this,t)}s.inherits=o(5),s.inherits(i,n),i.prototype._transform=function(t,e,o){o(null,t)}},function(t,e,o){t.exports=o(30)},function(t,e,o){t.exports=o(3)},function(t,e,o){t.exports=o(28).Transform},function(t,e,o){t.exports=o(28).PassThrough},function(t,e){(function(){"use strict";e.stripBOM=function(t){return"\ufeff"===t[0]?t.substring(1):t}}).call(this)},function(t,e,o){"use strict";o.r(e),o.d(e,"App",(function(){return tr})),o.d(e,"SsmlBlock",(function(){return Wi})),o.d(e,"SsmlTimeline",(function(){return Gi}));o(45);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const n=!(window.ShadyDOM&&window.ShadyDOM.inUse);let s,i;function r(t){s=(!t||!t.shimcssproperties)&&(n||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(i=window.ShadyCSS.cssBuild);const a=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?s=window.ShadyCSS.nativeCss:window.ShadyCSS?(r(window.ShadyCSS),window.ShadyCSS=void 0):r(window.WebComponents&&window.WebComponents.flags);const l=s;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class c{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function u(t){return function t(e,o){let n=o.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=n.trim(),e.parent){let t=e.previous?e.previous.end:e.parent.start;n=o.substring(t,e.start-1),n=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t}))}(n),n=n.replace(m.multipleSpaces," "),n=n.substring(n.lastIndexOf(";")+1);let s=e.parsedSelector=e.selector=n.trim();e.atRule=0===s.indexOf(v),e.atRule?0===s.indexOf(_)?e.type=h.MEDIA_RULE:s.match(m.keyframesRule)&&(e.type=h.KEYFRAMES_RULE,e.keyframesName=e.selector.split(m.multipleSpaces).pop()):0===s.indexOf(f)?e.type=h.MIXIN_RULE:e.type=h.STYLE_RULE}let s=e.rules;if(s)for(let e,n=0,i=s.length;n<i&&(e=s[n]);n++)t(e,o);return e}(function(t){let e=new c;e.start=0,e.end=t.length;let o=e;for(let n=0,s=t.length;n<s;n++)if(t[n]===p){o.rules||(o.rules=[]);let t=o,e=t.rules[t.rules.length-1]||null;o=new c,o.start=n+1,o.parent=t,o.previous=e,t.rules.push(o)}else t[n]===g&&(o.end=n+1,o=o.parent||e);return e}(t=t.replace(m.comments,"").replace(m.port,"")),t)}function d(t,e,o=""){let n="";if(t.cssText||t.rules){let o=t.rules;if(o&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(f)}(o))for(let t,s=0,i=o.length;s<i&&(t=o[s]);s++)n=d(t,e,n);else n=e?t.cssText:function(t){return function(t){return t.replace(m.mixinApply,"").replace(m.varApply,"")}(t=function(t){return t.replace(m.customProp,"").replace(m.mixinProp,"")}(t))}(t.cssText),n=n.trim(),n&&(n="  "+n+"\n")}return n&&(t.selector&&(o+=t.selector+" "+p+"\n"),o+=n,t.selector&&(o+=g+"\n\n")),o}const h={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},p="{",g="}",m={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},f="--",_="@media",v="@",y=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,b=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,w=/@media\s(.*)/,k=new Set;function x(t){const e=t.textContent;if(!k.has(e)){k.add(e);const t=document.createElement("style");t.setAttribute("shady-unscoped",""),t.textContent=e,document.head.appendChild(t)}}function C(t){return t.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function E(t,e){return t?("string"==typeof t&&(t=u(t)),e&&T(t,e),d(t,l)):""}function S(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=u(t.textContent)),t.__cssRules||null}function T(t,e,o,n){if(!t)return;let s=!1,i=t.type;if(n&&i===h.MEDIA_RULE){let e=t.selector.match(w);e&&(window.matchMedia(e[1]).matches||(s=!0))}i===h.STYLE_RULE?e(t):o&&i===h.KEYFRAMES_RULE?o(t):i===h.MIXIN_RULE&&(s=!0);let r=t.rules;if(r&&!s)for(let t,s=0,i=r.length;s<i&&(t=r[s]);s++)T(t,e,o,n)}function z(t,e){let o=0;for(let n=e,s=t.length;n<s;n++)if("("===t[n])o++;else if(")"===t[n]&&0==--o)return n;return-1}window.ShadyDOM&&window.ShadyDOM.wrap;function A(t){if(void 0!==i)return i;if(void 0===t.__cssBuild){const e=t.getAttribute("css-build");if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if("css-build"===t[0])return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),t.__cssBuild=e}}return t.__cssBuild||""}function O(t){return""!==A(t)}function M(t,e){for(let o in e)null===o?t.style.removeProperty(o):t.style.setProperty(o,e[o])}function I(t,e){const o=window.getComputedStyle(t).getPropertyValue(e);return o?o.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const P=/;\s*/m,L=/^\s*(initial)|(inherit)\s*$/,N=/\s*!important/;class D{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let H=null;class R{constructor(){this._currentElement=null,this._measureElement=null,this._map=new D}detectMixin(t){return function(t){const e=b.test(t)||y.test(t);return b.lastIndex=0,y.lastIndex=0,e}(t)}gatherStyles(t){const e=function(t){const e=[],o=t.querySelectorAll("style");for(let t=0;t<o.length;t++){const s=o[t];C(s)?n||(x(s),s.parentNode.removeChild(s)):(e.push(s.textContent),s.parentNode.removeChild(s))}return e.join("").trim()}(t.content);if(e){const o=document.createElement("style");return o.textContent=e,t.content.insertBefore(o,t.content.firstChild),o}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const o=t._gatheredStyle;return o?this.transformStyle(o,e):null}transformStyle(t,e=""){let o=S(t);return this.transformRules(o,e),t.textContent=E(o),o}transformCustomStyle(t){let e=S(t);return T(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=E(e),e}transformRules(t,e){this._currentElement=e,T(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(y,(t,o,n,s)=>this._produceCssProperties(t,o,n,s,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const o={};let n=!1;return T(e,e=>{n=n||e===t,n||e.selector===t.selector&&Object.assign(o,this._cssTextToMap(e.parsedCssText))}),o}_consumeCssProperties(t,e){let o=null;for(;o=b.exec(t);){let n=o[0],s=o[1],i=o.index,r=i+n.indexOf("@apply"),a=i+n.length,l=t.slice(0,r),c=t.slice(a),u=e?this._fallbacksFromPreviousRules(e):{};Object.assign(u,this._cssTextToMap(l));let d=this._atApplyToCssProperties(s,u);t=`${l}${d}${c}`,b.lastIndex=i+d.length}return t}_atApplyToCssProperties(t,e){t=t.replace(P,"");let o=[],n=this._map.get(t);if(n||(this._map.set(t,{}),n=this._map.get(t)),n){let s,i,r;this._currentElement&&(n.dependants[this._currentElement]=!0);const a=n.properties;for(s in a)r=e&&e[s],i=[s,": var(",t,"_-_",s],r&&i.push(",",r.replace(N,"")),i.push(")"),N.test(a[s])&&i.push(" !important"),o.push(i.join(""))}return o.join("; ")}_replaceInitialOrInherit(t,e){let o=L.exec(e);return o&&(e=o[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let o,n,s=t.split(";"),i={};for(let t,r,a=0;a<s.length;a++)t=s[a],t&&(r=t.split(":"),r.length>1&&(o=r[0].trim(),n=r.slice(1).join(":"),e&&(n=this._replaceInitialOrInherit(o,n)),i[o]=n));return i}_invalidateMixinEntry(t){if(H)for(let e in t.dependants)e!==this._currentElement&&H(e)}_produceCssProperties(t,e,o,n,s){if(o&&function t(e,o){let n=e.indexOf("var(");if(-1===n)return o(e,"","","");let s=z(e,n+3),i=e.substring(n+4,s),r=e.substring(0,n),a=t(e.substring(s+1),o),l=i.indexOf(",");return-1===l?o(r,i.trim(),"",a):o(r,i.substring(0,l).trim(),i.substring(l+1).trim(),a)}(o,(t,e)=>{e&&this._map.get(e)&&(n=`@apply ${e};`)}),!n)return t;let i=this._consumeCssProperties(""+n,s),r=t.slice(0,t.indexOf("--")),a=this._cssTextToMap(i,!0),l=a,c=this._map.get(e),u=c&&c.properties;u?l=Object.assign(Object.create(u),a):this._map.set(e,l);let d,h,p=[],g=!1;for(d in l)h=a[d],void 0===h&&(h="initial"),u&&!(d in u)&&(g=!0),p.push(`${e}_-_${d}: ${h}`);return g&&this._invalidateMixinEntry(c),c&&(c.properties=l),o&&(r=`${t};${r}`),`${r}${p.join("; ")};`}}R.prototype.detectMixin=R.prototype.detectMixin,R.prototype.transformStyle=R.prototype.transformStyle,R.prototype.transformCustomStyle=R.prototype.transformCustomStyle,R.prototype.transformRules=R.prototype.transformRules,R.prototype.transformRule=R.prototype.transformRule,R.prototype.transformTemplate=R.prototype.transformTemplate,R.prototype._separator="_-_",Object.defineProperty(R.prototype,"invalidCallback",{get:()=>H,set(t){H=t}});var V=R;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var B={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const F="_applyShimCurrentVersion",j="_applyShimNextVersion",$=Promise.resolve();function U(t){let e=B[t];e&&function(t){t[F]=t[F]||0,t._applyShimValidatingVersion=t._applyShimValidatingVersion||0,t[j]=(t[j]||0)+1}(e)}function q(t){return t[F]===t[j]}function K(t){return!q(t)&&t._applyShimValidatingVersion===t[j]}function W(t){t._applyShimValidatingVersion=t[j],t._validating||(t._validating=!0,$.then((function(){t[F]=t[j],t._validating=!1})))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Y,X=null,G=window.HTMLImports&&window.HTMLImports.whenReady||null;function J(t){requestAnimationFrame((function(){G?G(t):(X||(X=new Promise(t=>{Y=t}),"complete"===document.readyState?Y():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&Y()})),X.then((function(){t&&t()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Z="__shadyCSSCachedStyle";let Q=null,tt=null;class et{constructor(){this.customStyles=[],this.enqueued=!1,J(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&tt&&(this.enqueued=!0,J(tt))}addCustomStyle(t){t.__seenByShadyCSS||(t.__seenByShadyCSS=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[Z])return t[Z];let e;return e=t.getStyle?t.getStyle():t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const o=t[e];if(o[Z])continue;const n=this.getStyleForCustomStyle(o);if(n){const t=n.__appliedElement||n;Q&&Q(t),o[Z]=t}}return t}}et.prototype.addCustomStyle=et.prototype.addCustomStyle,et.prototype.getStyleForCustomStyle=et.prototype.getStyleForCustomStyle,et.prototype.processStyles=et.prototype.processStyles,Object.defineProperties(et.prototype,{transformCallback:{get:()=>Q,set(t){Q=t}},validateCallback:{get:()=>tt,set(t){let e=!1;tt||(e=!0),tt=t,e&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const ot=new V;class nt{constructor(){this.customStyleInterface=null,ot.invalidCallback=U}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{ot.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),O(t))return;B[e]=t;let o=ot.transformTemplate(t,e);t._styleAst=o}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let o=t[e],n=this.customStyleInterface.getStyleForCustomStyle(o);n&&ot.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&M(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,o="",n="";return e?e.indexOf("-")>-1?o=e:(n=e,o=t.getAttribute&&t.getAttribute("is")||""):(o=t.is,n=t.extends),{is:o,typeExtension:n}}(t),o=B[e];if((!o||!O(o))&&o&&!q(o)){K(o)||(this.prepareTemplate(o,e),W(o));let n=t.shadowRoot;if(n){let t=n.querySelector("style");t&&(t.__cssRules=o._styleAst,t.textContent=E(o._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new nt;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,o,n){t.flushCustomStyles(),t.prepareTemplate(e,o)},prepareTemplateStyles(t,e,o){window.ShadyCSS.prepareTemplate(t,e,o)},prepareTemplateDom(t,e){},styleSubtree(e,o){t.flushCustomStyles(),t.styleSubtree(e,o)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>I(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:l,nativeShadow:n,cssBuild:i,disableRuntime:a},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=ot,
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(t,e){return t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let st,it,rt=/(url\()([^)]*)(\))/g,at=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function lt(t,e){if(t&&at.test(t))return t;if("//"===t)return t;if(void 0===st){st=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",st="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),st)try{return new URL(t,e).href}catch(e){return t}return it||(it=document.implementation.createHTMLDocument("temp"),it.base=it.createElement("base"),it.head.appendChild(it.base),it.anchor=it.createElement("a"),it.body.appendChild(it.anchor)),it.base.href=e,it.anchor.href=t,it.anchor.href||t}function ct(t,e){return t.replace(rt,(function(t,o,n,s){return o+"'"+lt(n.replace(/["']/g,""),e)+"'"+s}))}function ut(t){return t.substring(0,t.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const dt=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let ht=ut(document.baseURI||window.location.href);let pt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let gt=!1;let mt=!1;let ft=!1;let _t=!1;let vt=!1;let yt=!0;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let bt=0;function wt(){}wt.prototype.__mixinApplications,wt.prototype.__mixinSet;const kt=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let o=bt++;return function(n){let s=n.__mixinSet;if(s&&s[o])return n;let i=e,r=i.get(n);r||(r=t(n),i.set(n,r));let a=Object.create(r.__mixinSet||s||null);return a[o]=!0,r.__mixinSet=a,r}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let xt={},Ct={};function Et(t,e){xt[t]=Ct[t.toLowerCase()]=e}function St(t){return xt[t]||Ct[t.toLowerCase()]}class Tt extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let o=St(t);return o&&e?o.querySelector(e):o}return null}attributeChangedCallback(t,e,o,n){e!==o&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=lt(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=ut(e)}return this.__assetpath}register(t){if(t=t||this.id){if(mt&&void 0!==St(t))throw Et(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Et(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}Tt.prototype.modules=xt,customElements.define("dom-module",Tt);function zt(t){return Tt.import(t)}function At(t){const e=ct((t.body?t.body:t).textContent,t.baseURI),o=document.createElement("style");return o.textContent=e,o}function Ot(t){const e=t.trim().split(/\s+/),o=[];for(let t=0;t<e.length;t++)o.push(...Mt(e[t]));return o}function Mt(t){const e=zt(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...Pt(e));const o=e.querySelector("template");o&&t.push(...It(o,e.assetpath)),e._styles=t}return e._styles}function It(t,e){if(!t._styles){const o=[],n=t.content.querySelectorAll("style");for(let t=0;t<n.length;t++){let s=n[t],i=s.getAttribute("include");i&&o.push(...Ot(i).filter((function(t,e,o){return o.indexOf(t)===e}))),e&&(s.textContent=ct(s.textContent,e)),o.push(s)}t._styles=o}return t._styles}function Pt(t){const e=[],o=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<o.length;t++){let n=o[t];if(n.import){const t=n.import,o=n.hasAttribute("shady-unscoped");if(o&&!t._unscopedStyle){const e=At(t);e.setAttribute("shady-unscoped",""),t._unscopedStyle=e}else t._style||(t._style=At(t));e.push(o?t._unscopedStyle:t._style)}}return e}function Lt(t){let e=zt(t);if(e&&void 0===e._cssText){let t=Nt(e),o=e.querySelector("template");o&&(t+=function(t,e){let o="";const n=It(t,e);for(let t=0;t<n.length;t++){let e=n[t];e.parentNode&&e.parentNode.removeChild(e),o+=e.textContent}return o}(o,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function Nt(t){let e="",o=Pt(t);for(let t=0;t<o.length;t++)e+=o[t].textContent;return e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Dt=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ht(t){return t.indexOf(".")>=0}function Rt(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function Vt(t,e){return 0===t.indexOf(e+".")}function Bt(t,e){return 0===e.indexOf(t+".")}function Ft(t,e,o){return e+o.slice(t.length)}function jt(t){if(Array.isArray(t)){let e=[];for(let o=0;o<t.length;o++){let n=t[o].toString().split(".");for(let t=0;t<n.length;t++)e.push(n[t])}return e.join(".")}return t}function $t(t){return Array.isArray(t)?jt(t).split("."):t.toString().split(".")}function Ut(t,e,o){let n=t,s=$t(e);for(let t=0;t<s.length;t++){if(!n)return;n=n[s[t]]}return o&&(o.path=s.join(".")),n}function qt(t,e,o){let n=t,s=$t(e),i=s[s.length-1];if(s.length>1){for(let t=0;t<s.length-1;t++){if(n=n[s[t]],!n)return}n[i]=o}else n[e]=o;return s.join(".")}const Kt={},Wt=/-[a-z]/g,Yt=/([A-Z])/g;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Xt(t){return Kt[t]||(Kt[t]=t.indexOf("-")<0?t:t.replace(Wt,t=>t[1].toUpperCase()))}function Gt(t){return Kt[t]||(Kt[t]=t.replace(Yt,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Jt=0,Zt=0,Qt=[],te=0,ee=document.createTextNode("");new window.MutationObserver((function(){const t=Qt.length;for(let e=0;e<t;e++){let t=Qt[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}Qt.splice(0,t),Zt+=t})).observe(ee,{characterData:!0});const oe={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},ne={run:t=>(ee.textContent=te++,Qt.push(t),Jt++),cancel(t){const e=t-Zt;if(e>=0){if(!Qt[e])throw new Error("invalid async handle: "+t);Qt[e]=null}}},se=ne,ie=kt(t=>class extends t{static createProperties(t){const e=this.prototype;for(let o in t)o in e||e._createPropertyAccessor(o)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){if(this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[t]){const e=this.constructor.attributeNameForProperty(t);this.__dataAttributes[e]=t}}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this._getProperty(t)},set:e?function(){}:function(e){this._setProperty(t,e)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,o){let n=this.__data[t],s=this._shouldPropertyChange(t,e,n);return s&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=n),this.__data[t]=e,this.__dataPending[t]=e),s}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,se.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const t=this.__data,e=this.__dataPending,o=this.__dataOld;this._shouldPropertiesChange(t,e,o)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,o))}_shouldPropertiesChange(t,e,o){return Boolean(e)}_propertiesChanged(t,e,o){}_shouldPropertyChange(t,e,o){return o!==e&&(o==o||e==e)}attributeChangedCallback(t,e,o,n){e!==o&&this._attributeToProperty(t,o),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,o,n)}_attributeToProperty(t,e,o){if(!this.__serializing){const n=this.__dataAttributes,s=n&&n[t]||t;this[s]=this._deserializeValue(e,o||this.constructor.typeForProperty(s))}}_propertyToAttribute(t,e,o){this.__serializing=!0,o=arguments.length<3?this[t]:o,this._valueToNodeAttribute(this,o,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,o){const n=this._serializeValue(e);"class"!==o&&"name"!==o&&"slot"!==o||(t=Dt(t)),void 0===n?t.removeAttribute(o):t.setAttribute(o,n)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}),re={};let ae=HTMLElement.prototype;for(;ae;){let t=Object.getOwnPropertyNames(ae);for(let e=0;e<t.length;e++)re[t[e]]=!0;ae=Object.getPrototypeOf(ae)}const le=kt(t=>{const e=ie(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Xt(t[e]))}static attributeNameForProperty(t){return Gt(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const o=this;o.hasAttribute(t)||this._valueToNodeAttribute(o,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let o;switch(e){case Object:try{o=JSON.parse(t)}catch(e){o=t}break;case Array:try{o=JSON.parse(t)}catch(e){o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:o=isNaN(t)?String(t):Number(t),o=new Date(o);break;default:o=super._deserializeValue(t,e)}return o}_definePropertyAccessor(t,e){!function(t,e){if(!re[e]){let o=t[e];void 0!==o&&(t.__data?t._setPendingProperty(e,o):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=o))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}}),ce={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ue=!1,de=!1;function he(t){(function(){if(!ue){ue=!0;const t=document.createElement("textarea");t.placeholder="a",de=t.placeholder===t.textContent}return de})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}function pe(t){let e=t.getAttribute("is");if(e&&ce[e]){let o=t;for(o.removeAttribute("is"),t=o.ownerDocument.createElement(e),o.parentNode.replaceChild(t,o),t.appendChild(o);o.attributes.length;)t.setAttribute(o.attributes[0].name,o.attributes[0].value),o.removeAttribute(o.attributes[0].name)}return t}function ge(t,e){let o=e.parentInfo&&ge(t,e.parentInfo);if(!o)return t;for(let t=o.firstChild,n=0;t;t=t.nextSibling)if(e.parentIndex===n++)return t}function me(t,e,o,n){n.id&&(e[n.id]=o)}function fe(t,e,o){if(o.events&&o.events.length)for(let n,s=0,i=o.events;s<i.length&&(n=i[s]);s++)t._addMethodEventListenerToNode(e,n.name,n.value,t)}function _e(t,e,o){o.templateInfo&&(e._templateInfo=o.templateInfo)}const ve=kt(t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let o=t._templateInfo={};o.nodeInfoList=[],o.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,o,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,o){return this._parseTemplateNode(t.content,e,o)}static _parseTemplateNode(t,e,o){let n=!1,s=t;return"template"!=s.localName||s.hasAttribute("preserve-content")?"slot"===s.localName&&(e.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(s,e,o)||n,he(s),s.firstChild&&this._parseTemplateChildNodes(s,e,o),s.hasAttributes&&s.hasAttributes()&&(n=this._parseTemplateNodeAttributes(s,e,o)||n),n}static _parseTemplateChildNodes(t,e,o){if("script"!==t.localName&&"style"!==t.localName)for(let n,s=t.firstChild,i=0;s;s=n){if("template"==s.localName&&(s=pe(s)),n=s.nextSibling,s.nodeType===Node.TEXT_NODE){let o=n;for(;o&&o.nodeType===Node.TEXT_NODE;)s.textContent+=o.textContent,n=o.nextSibling,t.removeChild(o),o=n;if(e.stripWhiteSpace&&!s.textContent.trim()){t.removeChild(s);continue}}let r={parentIndex:i,parentInfo:o};this._parseTemplateNode(s,e,r)&&(r.infoIndex=e.nodeInfoList.push(r)-1),s.parentNode&&i++}}static _parseTemplateNestedTemplate(t,e,o){let n=t,s=this._parseTemplate(n,e);return(s.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),o.templateInfo=s,!0}static _parseTemplateNodeAttributes(t,e,o){let n=!1,s=Array.from(t.attributes);for(let i,r=s.length-1;i=s[r];r--)n=this._parseTemplateNodeAttribute(t,e,o,i.name,i.value)||n;return n}static _parseTemplateNodeAttribute(t,e,o,n,s){return"on-"===n.slice(0,3)?(t.removeAttribute(n),o.events=o.events||[],o.events.push({name:n.slice(3),value:s}),!0):"id"===n&&(o.id=s,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let e=this.constructor._parseTemplate(t),o=e.nodeInfoList,n=e.content||t.content,s=document.importNode(n,!0);s.__noInsertionPoint=!e.hasInsertionPoint;let i=s.nodeList=new Array(o.length);s.$={};for(let t,e=0,n=o.length;e<n&&(t=o[e]);e++){let o=i[e]=ge(s,t);me(0,s.$,o,t),_e(0,o,t),fe(this,o,t)}return s=s,s}_addMethodEventListenerToNode(t,e,o,n){let s=function(t,e,o){return t=t._methodHost||t,function(e){t[o]?t[o](e,e.detail):console.warn("listener method `"+o+"` not defined")}}(n=n||t,0,o);return this._addEventListenerToNode(t,e,s),s}_addEventListenerToNode(t,e,o){t.addEventListener(e,o)}_removeEventListenerFromNode(t,e,o){t.removeEventListener(e,o)}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let ye=0;const be={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},we=/[A-Z]/;function ke(t,e){let o=t[e];if(o){if(!t.hasOwnProperty(e)){o=t[e]=Object.create(t[e]);for(let t in o){let e=o[t],n=o[t]=Array(e.length);for(let t=0;t<e.length;t++)n[t]=e[t]}}}else o=t[e]={};return o}function xe(t,e,o,n,s,i){if(e){let r=!1,a=ye++;for(let l in o)Ce(t,e,a,l,o,n,s,i)&&(r=!0);return r}return!1}function Ce(t,e,o,n,s,i,r,a){let l=!1,c=e[r?Rt(n):n];if(c)for(let e,u=0,d=c.length;u<d&&(e=c[u]);u++)e.info&&e.info.lastRun===o||r&&!Ee(n,e.trigger)||(e.info&&(e.info.lastRun=o),e.fn(t,n,s,i,e.info,r,a),l=!0);return l}function Ee(t,e){if(e){let o=e.name;return o==t||!(!e.structured||!Vt(o,t))||!(!e.wildcard||!Bt(o,t))}return!0}function Se(t,e,o,n,s){let i="string"==typeof s.method?t[s.method]:s.method,r=s.property;i?i.call(t,t.__data[r],n[r]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function Te(t,e,o){let n=Rt(e);if(n!==e){return ze(t,Gt(n)+"-changed",o[e],e),!0}return!1}function ze(t,e,o,n){let s={value:o,queueProperty:!0};n&&(s.path=n),Dt(t).dispatchEvent(new CustomEvent(e,{detail:s}))}function Ae(t,e,o,n,s,i){let r=(i?Rt(e):e)!=e?e:null,a=r?Ut(t,r):t.__data[e];r&&void 0===a&&(a=o[e]),ze(t,s.eventName,a,r)}function Oe(t,e,o,n,s){let i=t.__data[e];pt&&(i=pt(i,s.attrName,"attribute",t)),t._propertyToAttribute(e,s.attrName,i)}function Me(t,e,o,n,s){let i=Re(t,e,o,n,s),r=s.methodInfo;t.__dataHasAccessor&&t.__dataHasAccessor[r]?t._setPendingProperty(r,i,!0):t[r]=i}function Ie(t,e,o,n,s,i,r){o.bindings=o.bindings||[];let a={kind:n,target:s,parts:i,literal:r,isCompound:1!==i.length};if(o.bindings.push(a),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(a)){let{event:t,negate:e}=a.parts[0];a.listenerEvent=t||Gt(s)+"-changed",a.listenerNegate=e}let l=e.nodeInfoList.length;for(let o=0;o<a.parts.length;o++){let n=a.parts[o];n.compoundIndex=o,Pe(t,e,a,n,l)}}function Pe(t,e,o,n,s){if(!n.literal)if("attribute"===o.kind&&"-"===o.target[0])console.warn("Cannot set attribute "+o.target+' because "-" is not a valid attribute starting character');else{let i=n.dependencies,r={index:s,binding:o,part:n,evaluator:t};for(let o=0;o<i.length;o++){let n=i[o];"string"==typeof n&&(n=$e(n),n.wildcard=!0),t._addTemplatePropertyEffect(e,n.rootProperty,{fn:Le,info:r,trigger:n})}}}function Le(t,e,o,n,s,i,r){let a=r[s.index],l=s.binding,c=s.part;if(i&&c.source&&e.length>c.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let n=o[e];e=Ft(c.source,l.target,e),a._setPendingPropertyOrPath(e,n,!1,!0)&&t._enqueueClient(a)}else{!function(t,e,o,n,s){s=function(t,e,o,n){if(o.isCompound){let s=t.__dataCompoundStorage[o.target];s[n.compoundIndex]=e,e=s.join("")}"attribute"!==o.kind&&("textContent"!==o.target&&("value"!==o.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,s,o,n),pt&&(s=pt(s,o.target,o.kind,e));if("attribute"==o.kind)t._valueToNodeAttribute(e,s,o.target);else{let n=o.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[n]?e[be.READ_ONLY]&&e[be.READ_ONLY][n]||e._setPendingProperty(n,s)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,n,s)}}(t,a,l,c,s.evaluator._evaluateBinding(t,c,e,o,n,i))}}function Ne(t,e){if(e.isCompound){let o=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),n=e.parts,s=new Array(n.length);for(let t=0;t<n.length;t++)s[t]=n[t].literal;let i=e.target;o[i]=s,e.literal&&"property"==e.kind&&("className"===i&&(t=Dt(t)),t[i]=e.literal)}}function De(t,e,o){if(o.listenerEvent){let n=o.parts[0];t.addEventListener(o.listenerEvent,(function(t){!function(t,e,o,n,s){let i,r=t.detail,a=r&&r.path;a?(n=Ft(o,n,a),i=r&&r.value):i=t.currentTarget[o],i=s?!i:i,e[be.READ_ONLY]&&e[be.READ_ONLY][n]||!e._setPendingPropertyOrPath(n,i,!0,Boolean(a))||r&&r.queueProperty||e._invalidateProperties()}(t,e,o.target,n.source,n.negate)}))}}function He(t,e,o,n,s,i){i=e.static||i&&("object"!=typeof i||i[e.methodName]);let r={methodName:e.methodName,args:e.args,methodInfo:s,dynamicFn:i};for(let s,i=0;i<e.args.length&&(s=e.args[i]);i++)s.literal||t._addPropertyEffect(s.rootProperty,o,{fn:n,info:r,trigger:s});i&&t._addPropertyEffect(e.methodName,o,{fn:n,info:r})}function Re(t,e,o,n,s){let i=t._methodHost||t,r=i[s.methodName];if(r){let n=t._marshalArgs(s.args,e,o);return r.apply(i,n)}s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const Ve=[],Be=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function Fe(t){let e="";for(let o=0;o<t.length;o++){e+=t[o].literal||""}return e}function je(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:Ve};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let o=$e(t);return o.literal||(e.static=!1),o}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function $e(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),o={name:e,value:"",literal:!1},n=e[0];switch("-"===n&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':o.value=e.slice(1,-1),o.literal=!0;break;case"#":o.value=Number(e),o.literal=!0}return o.literal||(o.rootProperty=Rt(e),o.structured=Ht(e),o.structured&&(o.wildcard=".*"==e.slice(-2),o.wildcard&&(o.name=e.slice(0,-2)))),o}function Ue(t,e,o){let n=Ut(t,o);return void 0===n&&(n=e[o]),n}function qe(t,e,o,n){t.notifyPath(o+".splices",{indexSplices:n}),t.notifyPath(o+".length",e.length)}function Ke(t,e,o,n,s,i){qe(t,e,o,[{index:n,addedCount:s,removed:i,object:e,type:"splice"}])}const We=kt(t=>{const e=ve(le(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return be}_initializeProperties(){super._initializeProperties(),Ye.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[be.READ_ONLY];for(let o in t)e&&e[o]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=t[o])}_addPropertyEffect(t,e,o){this._createPropertyAccessor(t,e==be.READ_ONLY);let n=ke(this,e)[t];n||(n=this[e][t]=[]),n.push(o)}_removePropertyEffect(t,e,o){let n=ke(this,e)[t],s=n.indexOf(o);s>=0&&n.splice(s,1)}_hasPropertyEffect(t,e){let o=this[e];return Boolean(o&&o[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,be.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,be.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,be.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,be.COMPUTE)}_setPendingPropertyOrPath(t,e,o,n){if(n||Rt(Array.isArray(t)?t[0]:t)!==t){if(!n){let o=Ut(this,t);if(!(t=qt(this,t,e))||!super._shouldPropertyChange(t,e,o))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,o))return function(t,e,o){let n=t.__dataLinkedPaths;if(n){let s;for(let i in n){let r=n[i];Bt(i,e)?(s=Ft(i,r,e),t._setPendingPropertyOrPath(s,o,!0,!0)):Bt(r,e)&&(s=Ft(r,i,e),t._setPendingPropertyOrPath(s,o,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,o);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,o){o===t[e]&&"object"!=typeof o||("className"===e&&(t=Dt(t)),t[e]=o)}_setPendingProperty(t,e,o){let n=this.__dataHasPaths&&Ht(t),s=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,s[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),n?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(n||this[be.NOTIFY]&&this[be.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=o),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let o=t[e];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let o in t)!e&&this[be.READ_ONLY]&&this[be.READ_ONLY][o]||this._setPendingPropertyOrPath(o,t[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,o){let n=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,o,n){let s=t[be.COMPUTE];if(s){let i=e;for(;xe(t,s,i,o,n);)Object.assign(o,t.__dataOld),Object.assign(e,t.__dataPending),i=t.__dataPending,t.__dataPending=null}}(this,e,o,n);let s=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(e,o,n),this._flushClients(),xe(this,this[be.REFLECT],e,o,n),xe(this,this[be.OBSERVE],e,o,n),s&&function(t,e,o,n,s){let i,r,a=t[be.NOTIFY],l=ye++;for(let r in e)e[r]&&(a&&Ce(t,a,l,r,o,n,s)||s&&Te(t,r,o))&&(i=!0);i&&(r=t.__dataHost)&&r._invalidateProperties&&r._invalidateProperties()}(this,s,e,o,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,o){this[be.PROPAGATE]&&xe(this,this[be.PROPAGATE],t,e,o);let n=this.__templateInfo;for(;n;)xe(this,n.propertyEffects,t,e,o,n.nodeList),n=n.nextTemplateInfo}linkPaths(t,e){t=jt(t),e=jt(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=jt(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let o={path:""};qe(this,Ut(this,t,o),o.path,e)}get(t,e){return Ut(e||this,t)}set(t,e,o){o?qt(o,t,e):this[be.READ_ONLY]&&this[be.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let o={path:""},n=Ut(this,t,o),s=n.length,i=n.push(...e);return e.length&&Ke(this,n,o.path,s,e.length,[]),i}pop(t){let e={path:""},o=Ut(this,t,e),n=Boolean(o.length),s=o.pop();return n&&Ke(this,o,e.path,o.length,0,[s]),s}splice(t,e,o,...n){let s,i={path:""},r=Ut(this,t,i);return e<0?e=r.length-Math.floor(-e):e&&(e=Math.floor(e)),s=2===arguments.length?r.splice(e):r.splice(e,o,...n),(n.length||s.length)&&Ke(this,r,i.path,e,n.length,s),s}shift(t){let e={path:""},o=Ut(this,t,e),n=Boolean(o.length),s=o.shift();return n&&Ke(this,o,e.path,0,0,[s]),s}unshift(t,...e){let o={path:""},n=Ut(this,t,o),s=n.unshift(...e);return e.length&&Ke(this,n,o.path,0,e.length,[]),s}notifyPath(t,e){let o;if(1==arguments.length){let n={path:""};e=Ut(this,t,n),o=n.path}else o=Array.isArray(t)?jt(t):t;this._setPendingPropertyOrPath(o,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var o;this._addPropertyEffect(t,be.READ_ONLY),e&&(this["_set"+(o=t,o[0].toUpperCase()+o.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,o){let n={property:t,method:e,dynamicFn:Boolean(o)};this._addPropertyEffect(t,be.OBSERVE,{fn:Se,info:n,trigger:{name:t}}),o&&this._addPropertyEffect(e,be.OBSERVE,{fn:Se,info:n,trigger:{name:e}})}_createMethodObserver(t,e){let o=je(t);if(!o)throw new Error("Malformed observer expression '"+t+"'");He(this,o,be.OBSERVE,Re,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,be.NOTIFY,{fn:Ae,info:{eventName:Gt(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,be.REFLECT,{fn:Oe,info:{attrName:e}})}_createComputedProperty(t,e,o){let n=je(e);if(!n)throw new Error("Malformed computed expression '"+e+"'");He(this,n,be.COMPUTE,Me,t,o)}_marshalArgs(t,e,o){const n=this.__data,s=[];for(let i=0,r=t.length;i<r;i++){let{name:r,structured:a,wildcard:l,value:c,literal:u}=t[i];if(!u)if(l){const t=Bt(r,e),s=Ue(n,o,t?e:r);c={path:t?e:r,value:s,base:t?Ut(n,r):s}}else c=a?Ue(n,o,r):n[r];s[i]=c}return s}static addPropertyEffect(t,e,o){this.prototype._addPropertyEffect(t,e,o)}static createPropertyObserver(t,e,o){this.prototype._createPropertyObserver(t,e,o)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,o){this.prototype._createComputedProperty(t,e,o)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let o=this.constructor._parseTemplate(t),n=this.__templateInfo==o;if(!n)for(let t in o.propertyEffects)this._createPropertyAccessor(t);if(e&&(o=Object.create(o),o.wasPreBound=n,!n&&this.__templateInfo)){let t=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=t.nextTemplateInfo=o,o.previousTemplateInfo=t,o}return this.__templateInfo=o}static _addTemplatePropertyEffect(t,e,o){(t.hostProps=t.hostProps||{})[e]=!0;let n=t.propertyEffects=t.propertyEffects||{};(n[e]=n[e]||[]).push(o)}_stampTemplate(t){Ye.beginHosting(this);let e=super._stampTemplate(t);Ye.endHosting(this);let o=this._bindTemplate(t,!0);if(o.nodeList=e.nodeList,!o.wasPreBound){let t=o.childNodes=[];for(let o=e.firstChild;o;o=o.nextSibling)t.push(o)}return e.templateInfo=o,function(t,e){let{nodeList:o,nodeInfoList:n}=e;if(n.length)for(let e=0;e<n.length;e++){let s=n[e],i=o[e],r=s.bindings;if(r)for(let e=0;e<r.length;e++){let o=r[e];Ne(i,o),De(i,t,o)}i.__dataHost=t}}(this,o),this.__dataReady&&xe(this,o.propertyEffects,this.__data,null,!1,o.nodeList),e}_removeBoundDom(t){let e=t.templateInfo;e.previousTemplateInfo&&(e.previousTemplateInfo.nextTemplateInfo=e.nextTemplateInfo),e.nextTemplateInfo&&(e.nextTemplateInfo.previousTemplateInfo=e.previousTemplateInfo),this.__templateInfoLast==e&&(this.__templateInfoLast=e.previousTemplateInfo),e.previousTemplateInfo=e.nextTemplateInfo=null;let o=e.childNodes;for(let t=0;t<o.length;t++){let e=o[t];e.parentNode.removeChild(e)}}static _parseTemplateNode(t,o,n){let s=e._parseTemplateNode.call(this,t,o,n);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,o);e&&(t.textContent=Fe(e)||" ",Ie(this,o,n,"text","textContent",e),s=!0)}return s}static _parseTemplateNodeAttribute(t,o,n,s,i){let r=this._parseBindings(i,o);if(r){let e=s,i="property";we.test(s)?i="attribute":"$"==s[s.length-1]&&(s=s.slice(0,-1),i="attribute");let a=Fe(r);return a&&"attribute"==i&&("class"==s&&t.hasAttribute("class")&&(a+=" "+t.getAttribute(s)),t.setAttribute(s,a)),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===i&&(s=Xt(s)),Ie(this,o,n,i,s,r,a),!0}return e._parseTemplateNodeAttribute.call(this,t,o,n,s,i)}static _parseTemplateNestedTemplate(t,o,n){let s=e._parseTemplateNestedTemplate.call(this,t,o,n),i=n.templateInfo.hostProps;for(let t in i){Ie(this,o,n,"property","_host_"+t,[{mode:"{",source:t,dependencies:[t]}])}return s}static _parseBindings(t,e){let o,n=[],s=0;for(;null!==(o=Be.exec(t));){o.index>s&&n.push({literal:t.slice(s,o.index)});let i=o[1][0],r=Boolean(o[2]),a=o[3].trim(),l=!1,c="",u=-1;"{"==i&&(u=a.indexOf("::"))>0&&(c=a.substring(u+2),a=a.substring(0,u),l=!0);let d=je(a),h=[];if(d){let{args:t,methodName:o}=d;for(let e=0;e<t.length;e++){let o=t[e];o.literal||h.push(o)}let n=e.dynamicFns;(n&&n[o]||d.static)&&(h.push(o),d.dynamicFn=!0)}else h.push(a);n.push({source:a,mode:i,negate:r,customEvent:l,signature:d,dependencies:h,event:c}),s=Be.lastIndex}if(s&&s<t.length){let e=t.substring(s);e&&n.push({literal:e})}return n.length?n:null}static _evaluateBinding(t,e,o,n,s,i){let r;return r=e.signature?Re(t,o,n,0,e.signature):o!=e.source?Ut(t,e.source):i&&Ht(o)?Ut(t,o):t.__data[o],e.negate&&(r=!r),r}}});const Ye=new class{constructor(){this.stack=[]}registerHost(t){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(t)}}beginHosting(t){this.stack.push(t)}endHosting(t){let e=this.stack.length;e&&this.stack[e-1]==t&&this.stack.pop()}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Xe=[];const Ge=kt(t=>{const e=ie(t);function o(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof s?e:null}function n(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const o=t.properties;o&&(e=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(t){const e={};for(let o in t){const n=t[o];e[o]="function"==typeof n?{type:n}:n}return e}(o))}t.__ownProperties=e}return t.__ownProperties}class s extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){t=this.prototype,Xe.push(t);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(t=>this.attributeNameForProperty(t)):[]}var t;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=o(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=n(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=o(this);this.__properties=Object.assign({},t&&t._properties,n(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s}),Je=window.ShadyCSS&&window.ShadyCSS.cssBuild,Ze=kt(t=>{const e=Ge(We(t));function o(t,e,o,n){if(!Je){const s=e.content.querySelectorAll("style"),i=It(e),r=function(t){let e=zt(t);return e?Pt(e):[]}(o),a=e.content.firstElementChild;for(let o=0;o<r.length;o++){let s=r[o];s.textContent=t._processStyleText(s.textContent,n),e.content.insertBefore(s,a)}let l=0;for(let e=0;e<i.length;e++){let o=i[e],r=s[l];r!==o?(o=o.cloneNode(!0),r.parentNode.insertBefore(o,r)):l++,o.textContent=t._processStyleText(o.textContent,n)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,o)}return class extends e{static get polymerElementVersion(){return"3.3.1"}static _finalizeClass(){e._finalizeClass.call(this);const t=((o=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",o))||(o.__ownObservers=o.hasOwnProperty(JSCompiler_renameProperty("observers",o))?o.observers:null),o.__ownObservers);var o;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):_t||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let i in t)e=this.prototype,o=i,n=t[i],s=t,n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(o)?console.warn(`Cannot redefine computed property '${o}'.`):e._createComputedProperty(o,n.computed,s)),n.readOnly&&!e._hasReadOnlyEffect(o)?e._createReadOnlyProperty(o,!n.computed):!1===n.readOnly&&e._hasReadOnlyEffect(o)&&console.warn(`Cannot make readOnly property '${o}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(o)?e._createReflectedProperty(o):!1===n.reflectToAttribute&&e._hasReflectEffect(o)&&console.warn(`Cannot make reflected property '${o}' non-reflected.`),n.notify&&!e._hasNotifyEffect(o)?e._createNotifyingProperty(o):!1===n.notify&&e._hasNotifyEffect(o)&&console.warn(`Cannot make notify property '${o}' non-notify.`),n.observer&&e._createPropertyObserver(o,n.observer,s[n.observer]),e._addPropertyToAttributeMap(o);var e,o,n,s}static createObservers(t,e){const o=this.prototype;for(let n=0;n<t.length;n++)o._createMethodObserver(t[n],e)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(t){let e=null;if(t&&(!mt||ft)&&(e=Tt.import(t,"template"),mt&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=ut(t.url);else{const t=Tt.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=ht,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let o in e){let n=e[o];"value"in n&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[o]=n)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let o=t[e];if(!this.hasOwnProperty(e)){let t="function"==typeof o.value?o.value.call(this):o.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}static _processStyleText(t,e){return ct(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const n=this.importPath;o(this,e,t,n?lt(n):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=Dt(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t)),vt&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=lt(this.importPath)),lt(t,e)}static _parseTemplateContent(t,o,n){return o.dynamicFns=o.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,o,n)}static _addTemplatePropertyEffect(t,o,n){return _t&&!(o in this._properties)&&console.warn(`Property '${o}' used in template but not declared in 'properties'; `+"attribute will not be observed."),e._addTemplatePropertyEffect.call(this,t,o,n)}}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Qe{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,to.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),to.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,o){return t instanceof Qe?t._cancelAsync():t=new Qe,t.setConfig(e,o),t}}let to=new Set;const eo=function(t){to.add(t)},oo=function(){const t=Boolean(to.size);return to.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let no="string"==typeof document.head.style.touchAction,so="__polymerGesturesHandled",io="__polymerGesturesTouchAction",ro=["mousedown","mousemove","mouseup","click"],ao=[0,1,4,2],lo=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function co(t){return ro.indexOf(t)>-1}let uo=!1;function ho(t){if(!co(t)&&"touchend"!==t)return no&&uo&&gt?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){uo=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let po=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const go=[],mo={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},fo={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function _o(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let o=t.getRootNode();if(t.id){let n=o.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<n.length;t++)e.push(n[t])}}return e}let vo=function(t){let e=t.sourceCapabilities;var o;if((!e||e.firesTouchEvents)&&(t[so]={skip:!0},"click"===t.type)){let e=!1,n=Co(t);for(let t=0;t<n.length;t++){if(n[t].nodeType===Node.ELEMENT_NODE)if("label"===n[t].localName)go.push(n[t]);else if(o=n[t],mo[o.localName]){let o=_o(n[t]);for(let t=0;t<o.length;t++)e=e||go.indexOf(o[t])>-1}if(n[t]===wo.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function yo(t){let e=po?["click"]:ro;for(let o,n=0;n<e.length;n++)o=e[n],t?(go.length=0,document.addEventListener(o,vo,!0)):document.removeEventListener(o,vo,!0)}function bo(t){let e=t.type;if(!co(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!lo&&(e=ao[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let wo={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function ko(t,e,o){t.movefn=e,t.upfn=o,document.addEventListener("mousemove",e),document.addEventListener("mouseup",o)}function xo(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}yt&&document.addEventListener("touchend",(function(t){if(!yt)return;wo.mouse.mouseIgnoreJob||yo(!0),wo.mouse.target=Co(t)[0],wo.mouse.mouseIgnoreJob=Qe.debounce(wo.mouse.mouseIgnoreJob,oe.after(2500),(function(){yo(),wo.mouse.target=null,wo.mouse.mouseIgnoreJob=null}))}),!!uo&&{passive:!0});const Co=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],Eo={},So=[];function To(t){const e=Co(t);return e.length>0?e[0]:t.target}function zo(t){let e,o=t.type,n=t.currentTarget.__polymerGestures;if(!n)return;let s=n[o];if(s){if(!t[so]&&(t[so]={},"touch"===o.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===o&&1===t.touches.length&&(wo.touch.id=e.identifier),wo.touch.id!==e.identifier)return;no||"touchstart"!==o&&"touchmove"!==o||function(t){let e=t.changedTouches[0],o=t.type;if("touchstart"===o)wo.touch.x=e.clientX,wo.touch.y=e.clientY,wo.touch.scrollDecided=!1;else if("touchmove"===o){if(wo.touch.scrollDecided)return;wo.touch.scrollDecided=!0;let o=function(t){let e="auto",o=Co(t);for(let t,n=0;n<o.length;n++)if(t=o[n],t[io]){e=t[io];break}return e}(t),n=!1,s=Math.abs(wo.touch.x-e.clientX),i=Math.abs(wo.touch.y-e.clientY);t.cancelable&&("none"===o?n=!0:"pan-x"===o?n=i>s:"pan-y"===o&&(n=s>i)),n?t.preventDefault():Lo("track")}}(t)}if(e=t[so],!e.skip){for(let o,n=0;n<So.length;n++)o=So[n],s[o.name]&&!e[o.name]&&o.flow&&o.flow.start.indexOf(t.type)>-1&&o.reset&&o.reset();for(let n,i=0;i<So.length;i++)n=So[i],s[n.name]&&!e[n.name]&&(e[n.name]=!0,n[o](t))}}}function Ao(t,e,o){return!!Eo[e]&&(function(t,e,o){let n=Eo[e],s=n.deps,i=n.name,r=t.__polymerGestures;r||(t.__polymerGestures=r={});for(let e,o,n=0;n<s.length;n++)e=s[n],po&&co(e)&&"click"!==e||(o=r[e],o||(r[e]=o={_count:0}),0===o._count&&t.addEventListener(e,zo,ho(e)),o[i]=(o[i]||0)+1,o._count=(o._count||0)+1);t.addEventListener(e,o),n.touchAction&&Io(t,n.touchAction)}(t,e,o),!0)}function Oo(t,e,o){return!!Eo[e]&&(function(t,e,o){let n=Eo[e],s=n.deps,i=n.name,r=t.__polymerGestures;if(r)for(let e,o,n=0;n<s.length;n++)e=s[n],o=r[e],o&&o[i]&&(o[i]=(o[i]||1)-1,o._count=(o._count||1)-1,0===o._count&&t.removeEventListener(e,zo,ho(e)));t.removeEventListener(e,o)}(t,e,o),!0)}function Mo(t){So.push(t);for(let e=0;e<t.emits.length;e++)Eo[t.emits[e]]=t}function Io(t,e){no&&t instanceof HTMLElement&&ne.run(()=>{t.style.touchAction=e}),t[io]=e}function Po(t,e,o){let n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=o,Dt(t).dispatchEvent(n),n.defaultPrevented){let t=o.preventer||o.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function Lo(t){let e=function(t){for(let e,o=0;o<So.length;o++){e=So[o];for(let o,n=0;n<e.emits.length;n++)if(o=e.emits[n],o===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function No(t,e,o,n){e&&Po(e,t,{x:o.clientX,y:o.clientY,sourceEvent:o,preventer:n,prevent:function(t){return Lo(t)}})}function Do(t,e,o){if(t.prevent)return!1;if(t.started)return!0;let n=Math.abs(t.x-e),s=Math.abs(t.y-o);return n>=5||s>=5}function Ho(t,e,o){if(!e)return;let n,s=t.moves[t.moves.length-2],i=t.moves[t.moves.length-1],r=i.x-t.x,a=i.y-t.y,l=0;s&&(n=i.x-s.x,l=i.y-s.y),Po(e,"track",{state:t.state,x:o.clientX,y:o.clientY,dx:r,dy:a,ddx:n,ddy:l,sourceEvent:o,hover:function(){return function(t,e){let o=document.elementFromPoint(t,e),n=o;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let s=n;if(n=n.shadowRoot.elementFromPoint(t,e),s===n)break;n&&(o=n)}return o}(o.clientX,o.clientY)}})}function Ro(t,e,o){let n=Math.abs(e.clientX-t.x),s=Math.abs(e.clientY-t.y),i=To(o||e);!i||fo[i.localName]&&i.hasAttribute("disabled")||(isNaN(n)||isNaN(s)||n<=25&&s<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=To(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let o=e.getBoundingClientRect(),n=t.pageX,s=t.pageY;return!(n>=o.left&&n<=o.right&&s>=o.top&&s<=o.bottom)}return!1}(e))&&(t.prevent||Po(i,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:o}))}Mo({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){xo(this.info)},mousedown:function(t){if(!bo(t))return;let e=To(t),o=this;ko(this.info,(function(t){bo(t)||(No("up",e,t),xo(o.info))}),(function(t){bo(t)&&No("up",e,t),xo(o.info)})),No("down",e,t)},touchstart:function(t){No("down",To(t),t.changedTouches[0],t)},touchend:function(t){No("up",To(t),t.changedTouches[0],t)}}),Mo({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,xo(this.info)},mousedown:function(t){if(!bo(t))return;let e=To(t),o=this,n=function(t){let n=t.clientX,s=t.clientY;Do(o.info,n,s)&&(o.info.state=o.info.started?"mouseup"===t.type?"end":"track":"start","start"===o.info.state&&Lo("tap"),o.info.addMove({x:n,y:s}),bo(t)||(o.info.state="end",xo(o.info)),e&&Ho(o.info,e,t),o.info.started=!0)};ko(this.info,n,(function(t){o.info.started&&n(t),xo(o.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=To(t),o=t.changedTouches[0],n=o.clientX,s=o.clientY;Do(this.info,n,s)&&("start"===this.info.state&&Lo("tap"),this.info.addMove({x:n,y:s}),Ho(this.info,e,o),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=To(t),o=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:o.clientX,y:o.clientY}),Ho(this.info,e,o))}}),Mo({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){bo(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){bo(t)&&Ro(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){Ro(this.info,t.changedTouches[0],t)}});const Vo=To,Bo=kt(t=>class extends t{_addEventListenerToNode(t,e,o){Ao(t,e,o)||super._addEventListenerToNode(t,e,o)}_removeEventListenerFromNode(t,e,o){Oo(t,e,o)||super._removeEventListenerFromNode(t,e,o)}}),Fo=/:host\(:dir\((ltr|rtl)\)\)/g,jo=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,$o=/:dir\((?:ltr|rtl)\)/,Uo=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),qo=[];let Ko=null,Wo="";function Yo(){Wo=document.documentElement.getAttribute("dir")}function Xo(t){if(!t.__autoDirOptOut){t.setAttribute("dir",Wo)}}function Go(){Yo(),Wo=document.documentElement.getAttribute("dir");for(let t=0;t<qo.length;t++)Xo(qo[t])}const Jo=kt(t=>{Uo||Ko||(Yo(),Ko=new MutationObserver(Go),Ko.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=le(t);class o extends e{static _processStyleText(t,o){return t=e._processStyleText.call(this,t,o),!Uo&&$o.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){let e=t;return e=e.replace(Fo,':host([dir="$1"])'),e=e.replace(jo,':host([dir="$2"]) $1'),e}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Ko&&Ko.takeRecords().length&&Go(),qo.push(this),Xo(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=qo.indexOf(this);t>-1&&qo.splice(t,1)}}}return o.__activateDir=!1,o});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Zo(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Qo(t,e,o){return{index:t,removed:e,addedCount:o}}"interactive"===document.readyState||"complete"===document.readyState?Zo():window.addEventListener("DOMContentLoaded",Zo);function tn(t,e,o,n,s,i){let r,a=0,l=0,c=Math.min(o-e,i-s);if(0==e&&0==s&&(a=function(t,e,o){for(let n=0;n<o;n++)if(!on(t[n],e[n]))return n;return o}(t,n,c)),o==t.length&&i==n.length&&(l=function(t,e,o){let n=t.length,s=e.length,i=0;for(;i<o&&on(t[--n],e[--s]);)i++;return i}(t,n,c-a)),s+=a,i-=l,(o-=l)-(e+=a)==0&&i-s==0)return[];if(e==o){for(r=Qo(e,[],0);s<i;)r.removed.push(n[s++]);return[r]}if(s==i)return[Qo(e,[],o-e)];let u=function(t){let e=t.length-1,o=t[0].length-1,n=t[e][o],s=[];for(;e>0||o>0;){if(0==e){s.push(2),o--;continue}if(0==o){s.push(3),e--;continue}let i,r=t[e-1][o-1],a=t[e-1][o],l=t[e][o-1];i=a<l?a<r?a:r:l<r?l:r,i==r?(r==n?s.push(0):(s.push(1),n=r),e--,o--):i==a?(s.push(3),e--,n=a):(s.push(2),o--,n=l)}return s.reverse(),s}(function(t,e,o,n,s,i){let r=i-s+1,a=o-e+1,l=new Array(r);for(let t=0;t<r;t++)l[t]=new Array(a),l[t][0]=t;for(let t=0;t<a;t++)l[0][t]=t;for(let o=1;o<r;o++)for(let i=1;i<a;i++)if(on(t[e+i-1],n[s+o-1]))l[o][i]=l[o-1][i-1];else{let t=l[o-1][i]+1,e=l[o][i-1]+1;l[o][i]=t<e?t:e}return l}(t,e,o,n,s,i));r=void 0;let d=[],h=e,p=s;for(let t=0;t<u.length;t++)switch(u[t]){case 0:r&&(d.push(r),r=void 0),h++,p++;break;case 1:r||(r=Qo(h,[],0)),r.addedCount++,h++,r.removed.push(n[p]),p++;break;case 2:r||(r=Qo(h,[],0)),r.addedCount++,h++;break;case 3:r||(r=Qo(h,[],0)),r.removed.push(n[p]),p++}return r&&d.push(r),d}function en(t,e){return tn(t,0,t.length,e,0,e.length)}function on(t,e){return t===e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function nn(t){return"slot"===t.localName}let sn=class{static getFlattenedNodes(t){const e=Dt(t);return nn(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>nn(t)?Dt(t=t).assignedNodes({flatten:!0}):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){nn(this._target)?this._listenSlots([this._target]):Dt(this._target).children&&(this._listenSlots(Dt(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){nn(this._target)?this._unlistenSlots([this._target]):Dt(this._target).children&&(this._unlistenSlots(Dt(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,ne.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let o=t[e];o.addedNodes&&this._listenSlots(o.addedNodes),o.removedNodes&&this._unlistenSlots(o.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),o=en(e,this._effectiveNodes);for(let e,n=0;n<o.length&&(e=o[n]);n++)for(let o,n=0;n<e.removed.length&&(o=e.removed[n]);n++)t.removedNodes.push(o);for(let n,s=0;s<o.length&&(n=o[s]);s++)for(let o=n.index;o<n.index+n.addedCount;o++)t.addedNodes.push(e[o]);this._effectiveNodes=e;let n=!1;return(t.addedNodes.length||t.removedNodes.length)&&(n=!0,this.callback.call(this._target,t)),n}_listenSlots(t){for(let e=0;e<t.length;e++){let o=t[e];nn(o)&&o.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let o=t[e];nn(o)&&o.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const rn=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=oo()}while(t||e)},an=Element.prototype,ln=an.matches||an.matchesSelector||an.mozMatchesSelector||an.msMatchesSelector||an.oMatchesSelector||an.webkitMatchesSelector,cn=function(t,e){return ln.call(t,e)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class un{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new sn(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(Dt(this.node).contains(t))return!0;let e=t,o=t.ownerDocument;for(;e&&e!==o&&e!==this.node;)e=Dt(e).parentNode||Dt(e).host;return e===this.node}getOwnerRoot(){return Dt(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Dt(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=Dt(this.node).assignedSlot;for(;e;)t.push(e),e=Dt(e).assignedSlot;return t}importNode(t,e){let o=this.node instanceof Document?this.node:this.node.ownerDocument;return Dt(o).importNode(t,e)}getEffectiveChildNodes(){return sn.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),o=[];for(let n,s=0,i=e.length;s<i&&(n=e[s]);s++)n.nodeType===Node.ELEMENT_NODE&&cn(n,t)&&o.push(n);return o}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function dn(t,e){for(let o=0;o<e.length;o++){let n=e[o];Object.defineProperty(t,n,{get:function(){return this.node[n]},configurable:!0})}}class hn{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}un.prototype.cloneNode,un.prototype.appendChild,un.prototype.insertBefore,un.prototype.removeChild,un.prototype.replaceChild,un.prototype.setAttribute,un.prototype.removeAttribute,un.prototype.querySelector,un.prototype.querySelectorAll,un.prototype.parentNode,un.prototype.firstChild,un.prototype.lastChild,un.prototype.nextSibling,un.prototype.previousSibling,un.prototype.firstElementChild,un.prototype.lastElementChild,un.prototype.nextElementSibling,un.prototype.previousElementSibling,un.prototype.childNodes,un.prototype.children,un.prototype.classList,un.prototype.textContent,un.prototype.innerHTML;let pn=un;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(un.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=un.prototype[e])}),dn(t.prototype,["classList"]),pn=t,Object.defineProperties(hn.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&gn(t).getOwnerRoot(),o=this.path;for(let t=0;t<o.length;t++){const n=o[t];if(gn(n).getOwnerRoot()===e)return n}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let o=0;o<e.length;o++){let n=e[o];t[n]=function(){return this.node[n].apply(this.node,arguments)}}}(un.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),dn(un.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let o=0;o<e.length;o++){let n=e[o];Object.defineProperty(t,n,{get:function(){return this.node[n]},set:function(t){this.node[n]=t},configurable:!0})}}(un.prototype,["textContent","innerHTML","className"]);const gn=function(t){if((t=t||document)instanceof pn)return t;if(t instanceof hn)return t;let e=t.__domApi;return e||(e=t instanceof Event?new hn(t):new pn(t),t.__domApi=e),e},mn=window.ShadyDOM,fn=window.ShadyCSS;function _n(t,e){return Dt(t).getRootNode()===e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let vn=window.ShadyCSS;const yn=kt(t=>{const e=Jo(Bo(Ze(t))),o={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class n extends e{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(t,e,o,n){e!==o&&(super.attributeChangedCallback(t,e,o,n),this.attributeChanged(t,e,o))}attributeChanged(t,e,o){}_initializeProperties(){let t=Object.getPrototypeOf(this);t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,o){this._propertyToAttribute(t,e,o)}serializeValueToAttribute(t,e,o){this._valueToNodeAttribute(o||this,t,e)}extend(t,e){if(!t||!e)return t||e;let o=Object.getOwnPropertyNames(e);for(let n,s=0;s<o.length&&(n=o[s]);s++){let o=Object.getOwnPropertyDescriptor(e,n);o&&Object.defineProperty(t,n,o)}return t}mixin(t,e){for(let o in e)t[o]=e[o];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,o){o=o||{},e=null==e?{}:e;let n=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});n.detail=e;let s=o.node||this;return Dt(s).dispatchEvent(n),n}listen(t,e,o){t=t||this;let n=this.__boundListeners||(this.__boundListeners=new WeakMap),s=n.get(t);s||(s={},n.set(t,s));let i=e+o;s[i]||(s[i]=this._addMethodEventListenerToNode(t,e,o,this))}unlisten(t,e,o){t=t||this;let n=this.__boundListeners&&this.__boundListeners.get(t),s=e+o,i=n&&n[s];i&&(this._removeEventListenerFromNode(t,e,i),n[s]=null)}setScrollDirection(t,e){Io(e||this,o[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=Dt(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=gn(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return gn(this).getEffectiveChildNodes()}queryDistributedElements(t){return gn(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let o,n=0;o=t[n];n++)o.nodeType!==Node.COMMENT_NODE&&e.push(o.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?gn(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(t){return this!==t&&Dt(this).contains(t)&&Dt(this).getRootNode()===Dt(t).getRootNode()}isLocalDescendant(t){return this.root===Dt(t).getRootNode()}scopeSubtree(t,e=!1){return function(t,e=!1){if(!mn||!fn)return null;if(!mn.handlesDynamicScoping)return null;const o=fn.ScopingShim;if(!o)return null;const n=o.scopeForNode(t),s=Dt(t).getRootNode(),i=t=>{if(!_n(t,s))return;const e=Array.from(mn.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let t=0;t<e.length;t++){const i=e[t];if(!_n(i,s))continue;const r=o.currentScopeForNode(i);r!==n&&(""!==r&&o.unscopeNode(i,r),o.scopeNode(i,n))}};if(i(t),e){const e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){const o=t[e];for(let t=0;t<o.addedNodes.length;t++){const e=o.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&i(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}return null}(t,e)}getComputedStyleValue(t){return vn.getComputedStyleValue(this,t)}debounce(t,e,o){return this._debouncers=this._debouncers||{},this._debouncers[t]=Qe.debounce(this._debouncers[t],o>0?oe.after(o):ne,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?oe.run(t.bind(this),e):~ne.run(t.bind(this))}cancelAsync(t){t<0?ne.cancel(~t):oe.cancel(t)}create(t,e){let o=document.createElement(t);if(e)if(o.setProperties)o.setProperties(e);else for(let t in e)o[t]=e[t];return o}elementMatches(t,e){return cn(e||this,t)}toggleAttribute(t,e){let o=this;return 3===arguments.length&&(o=arguments[2]),1==arguments.length&&(e=!o.hasAttribute(t)),e?(Dt(o).setAttribute(t,""),!0):(Dt(o).removeAttribute(t),!1)}toggleClass(t,e,o){o=o||this,1==arguments.length&&(e=!o.classList.contains(t)),e?o.classList.add(t):o.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,o,n){n=n||this,this.transform("translate3d("+t+","+e+","+o+")",n)}arrayDelete(t,e){let o;if(Array.isArray(t)){if(o=t.indexOf(e),o>=0)return t.splice(o,1)}else{if(o=Ut(this,t).indexOf(e),o>=0)return this.splice(t,o,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return n.prototype.is="",n}),bn={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},wn={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},kn=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},wn);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function xn(t,e,o,n){!function(t,e,o){const n=t._noAccessors,s=Object.getOwnPropertyNames(t);for(let i=0;i<s.length;i++){let r=s[i];if(!(r in o))if(n)e[r]=t[r];else{let o=Object.getOwnPropertyDescriptor(t,r);o&&(o.configurable=!0,Object.defineProperty(e,r,o))}}}(e,t,n);for(let t in bn)e[t]&&(o[t]=o[t]||[],o[t].push(e[t]))}function Cn(t,e){for(const o in e){const n=t[o],s=e[o];t[o]=!("value"in s)&&n&&"value"in n?Object.assign({value:n.value},s):s}}function En(t,e,o){let n;const s={};class i extends e{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(n)for(let t,e=0;e<n.length;e++)t=n[e],t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}else e._finalizeClass.call(this)}static get properties(){const e={};if(n)for(let t=0;t<n.length;t++)Cn(e,n[t].properties);return Cn(e,t.properties),e}static get observers(){let e=[];if(n)for(let t,o=0;o<n.length;o++)t=n[o],t.observers&&(e=e.concat(t.observers));return t.observers&&(e=e.concat(t.observers)),e}created(){super.created();const t=s.created;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}_registered(){const t=i.prototype;if(!t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))){t.__hasRegisterFinished=!0,super._registered(),_t&&r(t);const e=Object.getPrototypeOf(this);let o=s.beforeRegister;if(o)for(let t=0;t<o.length;t++)o[t].call(e);if(o=s.registered,o)for(let t=0;t<o.length;t++)o[t].call(e)}}_applyListeners(){super._applyListeners();const t=s.listeners;if(t)for(let e=0;e<t.length;e++){const o=t[e];if(o)for(let t in o)this._addMethodEventListenerToNode(this,t,o[t])}}_ensureAttributes(){const t=s.hostAttributes;if(t)for(let e=t.length-1;e>=0;e--){const o=t[e];for(let t in o)this._ensureAttribute(t,o[t])}super._ensureAttributes()}ready(){super.ready();let t=s.ready;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attached(){super.attached();let t=s.attached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}detached(){super.detached();let t=s.detached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attributeChanged(t,e,o){super.attributeChanged();let n=s.attributeChanged;if(n)for(let s=0;s<n.length;s++)n[s].call(this,t,e,o)}}if(o){Array.isArray(o)||(o=[o]);let t=e.prototype.behaviors;n=function t(e,o,n){o=o||[];for(let s=e.length-1;s>=0;s--){let i=e[s];i?Array.isArray(i)?t(i,o):o.indexOf(i)<0&&(!n||n.indexOf(i)<0)&&o.unshift(i):console.warn("behavior is null, check for missing or 404 import")}return o}(o,null,t),i.prototype.behaviors=t?t.concat(o):n}const r=e=>{n&&function(t,e,o){for(let n=0;n<e.length;n++)xn(t,e[n],o,kn)}(e,n,s),xn(e,t,s,wn)};return _t||r(i.prototype),i.generatedFrom=t,i}const Sn=function(t){let e;return e="function"==typeof t?t:Sn.Class(t),customElements.define(e.is,e),e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Tn(t,e,o,n,s){let i;s&&(i="object"==typeof o&&null!==o,i&&(n=t.__dataTemp[e]));let r=n!==o&&(n==n||o==o);return i&&r&&(t.__dataTemp[e]=o),r}Sn.Class=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let o=e?e(yn(HTMLElement)):yn(HTMLElement);return o=En(t,o,t.behaviors),o.is=o.prototype.is=t.is,o};const zn=kt(t=>class extends t{_shouldPropertyChange(t,e,o){return Tn(this,t,e,o,!0)}}),An=kt(t=>class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,o){return Tn(this,t,e,o,this.mutableData)}});zn._mutablePropertyChange=Tn;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let On=null;function Mn(){return On}Mn.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Mn,writable:!0}});const In=We(Mn),Pn=zn(In);const Ln=We(class{});class Nn extends Ln{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let o=this.__templatizeOptions;(t&&o.instanceProps||!o.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,o){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,o(t)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(t,e,o)}}_showHideChildren(t){let e=this.children;for(let o=0;o<e.length;o++){let n=e[o];if(Boolean(t)!=Boolean(n.__hideTemplateChildren__))if(n.nodeType===Node.TEXT_NODE)t?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if("slot"===n.localName)if(t)n.__polymerReplaced__=document.createComment("hidden-slot"),Dt(Dt(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const t=n.__polymerReplaced__;t&&Dt(Dt(t).parentNode).replaceChild(n,t)}else n.style&&(t?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=t,n._showHideChildren&&n._showHideChildren(t)}}_setUnmanagedPropertyToNode(t,e,o){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=o:super._setUnmanagedPropertyToNode(t,e,o)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}Nn.prototype.__dataHost,Nn.prototype.__templatizeOptions,Nn.prototype._methodHost,Nn.prototype.__templatizeOwner,Nn.prototype.__hostProps;const Dn=zn(Nn);function Hn(t){let e=t.__dataHost;return e&&e._methodHost||e}function Rn(t,e,o){let n=o.mutableData?Dn:Nn;jn.mixin&&(n=jn.mixin(n));let s=class extends n{};return s.prototype.__templatizeOptions=o,s.prototype._bindTemplate(t),function(t,e,o,n){let s=o.hostProps||{};for(let e in n.instanceProps){delete s[e];let o=n.notifyInstanceProp;o&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Fn(e,o)})}if(n.forwardHostProp&&e.__dataHost)for(let e in s)o.hasHostProps||(o.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,o){t.__dataHost._setPendingPropertyOrPath("_host_"+e,o[e],!0,!0)}})}(s,t,e,o),s}function Vn(t,e,o){let n=o.forwardHostProp;if(n&&e.hasHostProps){let s=e.templatizeTemplateClass;if(!s){let t=o.mutableData?Pn:In;s=e.templatizeTemplateClass=class extends t{};let i=e.hostProps;for(let t in i)s.prototype._addPropertyEffect("_host_"+t,s.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Bn(t,n)}),s.prototype._createNotifyingProperty("_host_"+t)}!function(t,e){On=t,Object.setPrototypeOf(t,e.prototype),new e,On=null}(t,s),t.__dataProto&&Object.assign(t.__data,t.__dataProto),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties()}}function Bn(t,e){return function(t,o,n){e.call(t.__templatizeOwner,o.substring("_host_".length),n[o])}}function Fn(t,e){return function(t,o,n){e.call(t.__templatizeOwner,t,o,n[o])}}function jn(t,e,o){if(mt&&!Hn(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(o=o||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let n=(e?e.constructor:Nn)._parseTemplate(t),s=n.templatizeInstanceClass;s||(s=Rn(t,n,o),n.templatizeInstanceClass=s),Vn(t,n,o);let i=class extends s{};return i.prototype._methodHost=Hn(t),i.prototype.__dataHost=t,i.prototype.__templatizeOwner=e,i.prototype.__hostProps=n.hostProps,i=i,i}function $n(t,e){let o;for(;e;)if(o=e.__templatizeInstance){if(o.__dataHost==t)return o;e=o.__dataHost}else e=Dt(e).parentNode;return null}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Un=!1;function qn(){if(_t&&!dt){if(!Un){Un=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Kn=Bo(An(We(HTMLElement)));customElements.define("dom-bind",class extends Kn{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),mt)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,e,o,n){this.mutableData=!0}connectedCallback(){qn()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Dt(Dt(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let e=new MutationObserver(()=>{if(t=this.querySelector("template"),!t)throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Wn{constructor(t){this.value=t.toString()}toString(){return this.value}}function Yn(t){if(t instanceof Wn)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const Xn=function(t,...e){const o=document.createElement("template");return o.innerHTML=e.reduce((e,o,n)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof Wn)return Yn(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(o)+t[n+1],t[0]),o},Gn=Ze(HTMLElement),Jn=An(Gn);class Zn extends Jn{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),qn()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=Dt(Dt(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){let t=this.template=this.querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let e={};e[this.as]=!0,e[this.indexAs]=!0,e[this.itemsIndexAs]=!0,this.__ctor=jn(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:e,forwardHostProp:function(t,e){let o=this.__instances;for(let n,s=0;s<o.length&&(n=o[s]);s++)n.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,o){if((n=this.as)===(s=e)||Vt(n,s)||Bt(n,s)){let n=t[this.itemsIndexAs];e==this.as&&(this.items[n]=o);let s=Ft(this.as,`${JSCompiler_renameProperty("items",this)}.${n}`,e);this.notifyPath(s,o)}var n,s}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,o=this.__getMethodHost();return function(){return o[e].apply(o,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let t=performance.now(),e=this._targetFrameTime/(t-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*e)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=t,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let o=0;o<e.length;o++)0===t.indexOf(e[o])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(t,e=0){this.__renderDebouncer=Qe.debounce(this.__renderDebouncer,e>0?oe.after(e):ne,t.bind(this)),eo(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),rn()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let t=this.items||[],e=new Array(t.length);for(let o=0;o<t.length;o++)e[o]=o;this.__filterFn&&(e=e.filter((e,o,n)=>this.__filterFn(t[e],o,n))),this.__sortFn&&e.sort((e,o)=>this.__sortFn(t[e],t[o]));const o=this.__itemsIdxToInstIdx={};let n=0;const s=Math.min(e.length,this.__limit);for(;n<s;n++){let s=this.__instances[n],i=e[n],r=t[i];o[i]=n,s?(s._setPendingProperty(this.as,r),s._setPendingProperty(this.indexAs,n),s._setPendingProperty(this.itemsIndexAs,i),s._flushProperties()):this.__insertInstance(r,n,i)}for(let t=this.__instances.length-1;t>=n;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];const o=Dt(e.root);for(let t=0;t<e.children.length;t++){let n=e.children[t];o.appendChild(n)}return e}__attachInstance(t,e){let o=this.__instances[t];e.insertBefore(o.root,this)}__detachAndRemoveInstance(t){let e=this.__detachInstance(t);e&&this.__pool.push(e),this.__instances.splice(t,1)}__stampInstance(t,e,o){let n={};return n[this.as]=t,n[this.indexAs]=e,n[this.itemsIndexAs]=o,new this.__ctor(n)}__insertInstance(t,e,o){let n=this.__pool.pop();n?(n._setPendingProperty(this.as,t),n._setPendingProperty(this.indexAs,e),n._setPendingProperty(this.itemsIndexAs,o),n._flushProperties()):n=this.__stampInstance(t,e,o);let s=this.__instances[e+1],i=s?s.children[0]:this;return Dt(Dt(this).parentNode).insertBefore(n.root,i),this.__instances[e]=n,n}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let o=t.slice(6),n=o.indexOf("."),s=n<0?o:o.substring(0,n);if(s==parseInt(s,10)){let t=n<0?"":o.substring(n+1);this.__handleObservedPaths(t);let i=this.__itemsIdxToInstIdx[s],r=this.__instances[i];if(r){let o=this.as+(t?"."+t:"");r._setPendingPropertyOrPath(o,e,!1,!0),r._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return $n(this.template,t)}}customElements.define(Zn.is,Zn);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Qn extends Gn{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=Qe.debounce(this.__renderDebouncer,ne,()=>this.__render()),eo(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=Dt(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Dt(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),qn()||(this.style.display="none"),this.if&&this.__debounceRender()}render(){rn()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let t=Dt(this).parentNode;if(t){if(!this.__ctor){let t=Dt(this).querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!Dt(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__ctor=jn(t,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Rt(t)]=!0))}})}if(this.__instance){this.__syncHostProperties();let e=this.__instance.children;if(e&&e.length){if(Dt(this).previousSibling!==e[e.length-1])for(let o,n=0;n<e.length&&(o=e[n]);n++)Dt(t).insertBefore(o,this)}}else this.__instance=new this.__ctor,Dt(t).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let t=this.__invalidProps;if(t){for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=Dt(t[0]).parentNode;if(e){e=Dt(e);for(let o,n=0;n<t.length&&(o=t[n]);n++)e.removeChild(o)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let t=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(t)}}customElements.define(Qn.is,Qn);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let ts=kt(t=>{let e=Ze(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let o=e.path;if(o==JSCompiler_renameProperty("items",this)){let o=e.base||[],n=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),n){let t=en(o,n);this.__applySplices(t)}this.__lastItems=o,this.__lastMulti=t}else if(e.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(e.value.indexSplices);else{let t=o.slice(`${JSCompiler_renameProperty("items",this)}.`.length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let o=0;o<t.length;o++){let n=t[o];e.forEach((t,o)=>{t<n.index||(t>=n.index+n.removed.length?e.set(o,t+n.addedCount-n.removed.length):e.set(o,-1))});for(let t=0;t<n.addedCount;t++){let o=n.index+t;e.has(this.items[o])&&e.set(this.items[o],o)}}this.__updateLinks();let o=0;e.forEach((t,n)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null,e.delete(n)):o++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((o,n)=>{e==t++&&this.deselect(n)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let o;this.__selectedMap.delete(t),this.multi&&(o=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}})(Gn);class es extends ts{static get is(){return"array-selector"}static get template(){return null}}customElements.define(es.is,es);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const os=new et;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,o){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,o){},styleSubtree(t,e){os.processStyles(),M(t,e)},styleElement(t){os.processStyles()},styleDocument(t){os.processStyles(),M(document.body,t)},getComputedStyleValue:(t,e)=>I(t,e),flushCustomStyles(){},nativeCss:l,nativeShadow:n,cssBuild:i,disableRuntime:a}),window.ShadyCSS.CustomStyleInterface=os;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const ns=window.ShadyCSS.CustomStyleInterface;class ss extends HTMLElement{constructor(){super(),this._style=null,ns.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute("include");return e&&(t.removeAttribute("include"),t.textContent=function(t){let e=t.trim().split(/\s+/),o="";for(let t=0;t<e.length;t++)o+=Lt(e[t]);return o}(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let is;window.customElements.define("custom-style",ss),is=zn._mutablePropertyChange;Boolean;const rs=yn(HTMLElement).prototype,as=Xn`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;as.setAttribute("style","display: none;"),document.head.appendChild(as.content);var ls=document.createElement("style");ls.textContent="[hidden] { display: none !important; }",document.head.appendChild(ls);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const cs=Xn`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;cs.setAttribute("style","display: none;"),document.head.appendChild(cs.content);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const us=Xn`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;us.setAttribute("style","display: none;"),document.head.appendChild(us.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ds={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(t){this._setFocused("focus"===t.type)},_disabledChanged:function(t,e){this.setAttribute("aria-disabled",t?"true":"false"),this.style.pointerEvents=t?"none":"",t?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var hs={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},ps={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},gs={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},ms=/[a-z0-9*]/,fs=/U\+/,_s=/^arrow/,vs=/^space(bar)?/,ys=/^escape$/;function bs(t,e){var o="";if(t){var n=t.toLowerCase();" "===n||vs.test(n)?o="space":ys.test(n)?o="esc":1==n.length?e&&!ms.test(n)||(o=n):o=_s.test(n)?n.replace("arrow",""):"multiply"==n?"*":n}return o}function ws(t,e){return t.key?bs(t.key,e):t.detail&&t.detail.key?bs(t.detail.key,e):(o=t.keyIdentifier,n="",o&&(o in hs?n=hs[o]:fs.test(o)?(o=parseInt(o.replace("U+","0x"),16),n=String.fromCharCode(o).toLowerCase()):n=o.toLowerCase()),n||function(t){var e="";return Number(t)&&(e=t>=65&&t<=90?String.fromCharCode(32+t):t>=112&&t<=123?"f"+(t-112+1):t>=48&&t<=57?String(t-48):t>=96&&t<=105?String(t-96):ps[t]),e}(t.keyCode)||"");var o,n}function ks(t,e){return ws(e,t.hasModifiers)===t.key&&(!t.hasModifiers||!!e.shiftKey==!!t.shiftKey&&!!e.ctrlKey==!!t.ctrlKey&&!!e.altKey==!!t.altKey&&!!e.metaKey==!!t.metaKey)}function xs(t){return t.trim().split(" ").map((function(t){return function(t){return 1===t.length?{combo:t,key:t,event:"keydown"}:t.split("+").reduce((function(t,e){var o=e.split(":"),n=o[0],s=o[1];return n in gs?(t[gs[n]]=!0,t.hasModifiers=!0):(t.key=n,t.event=s||"keydown"),t}),{combo:t.split(":").shift()})}(t)}))}const Cs={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(t,e){this._imperativeKeyBindings[t]=e,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(t,e){for(var o=xs(e),n=0;n<o.length;++n)if(ks(o[n],t))return!0;return!1},_collectKeyBindings:function(){var t=this.behaviors.map((function(t){return t.keyBindings}));return-1===t.indexOf(this.keyBindings)&&t.push(this.keyBindings),t},_prepKeyBindings:function(){for(var t in this._keyBindings={},this._collectKeyBindings().forEach((function(t){for(var e in t)this._addKeyBinding(e,t[e])}),this),this._imperativeKeyBindings)this._addKeyBinding(t,this._imperativeKeyBindings[t]);for(var e in this._keyBindings)this._keyBindings[e].sort((function(t,e){var o=t[0].hasModifiers;return o===e[0].hasModifiers?0:o?-1:1}))},_addKeyBinding:function(t,e){xs(t).forEach((function(t){this._keyBindings[t.event]=this._keyBindings[t.event]||[],this._keyBindings[t.event].push([t,e])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(t){var e=this._keyBindings[t],o=this._onKeyBindingEvent.bind(this,e);this._boundKeyHandlers.push([this.keyEventTarget,t,o]),this.keyEventTarget.addEventListener(t,o)}),this)},_unlistenKeyEventListeners:function(){for(var t,e,o,n;this._boundKeyHandlers.length;)e=(t=this._boundKeyHandlers.pop())[0],o=t[1],n=t[2],e.removeEventListener(o,n)},_onKeyBindingEvent:function(t,e){if(this.stopKeyboardEventPropagation&&e.stopPropagation(),!e.defaultPrevented)for(var o=0;o<t.length;o++){var n=t[o][0],s=t[o][1];if(ks(n,e)&&(this._triggerKeyHandler(n,s,e),e.defaultPrevented))return}},_triggerKeyHandler:function(t,e,o){var n=Object.create(t);n.keyboardEvent=o;var s=new CustomEvent(t.event,{detail:n,cancelable:!0});this[e].call(this,s),s.defaultPrevented&&o.preventDefault()}},Es={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(t){this._detectKeyboardFocus(t),t||this._setPressed(!1)},_detectKeyboardFocus:function(t){this._setReceivedFocusFromKeyboard(!this.pointerDown&&t)},_userActivate:function(t){this.active!==t&&(this.active=t,this.fire("change"))},_downHandler:function(t){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(t){var e=t.detail.keyboardEvent,o=gn(e).localTarget;this.isLightDescendant(o)||(e.preventDefault(),e.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(t){var e=t.detail.keyboardEvent,o=gn(e).localTarget;this.isLightDescendant(o)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(t){this._changedButtonState()},_ariaActiveAttributeChanged:function(t,e){e&&e!=t&&this.hasAttribute(e)&&this.removeAttribute(e)},_activeChanged:function(t,e){this.toggles?this.setAttribute(this.ariaActiveAttribute,t?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},Ss=[Cs,Es];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var Ts={distance:function(t,e,o,n){var s=t-o,i=e-n;return Math.sqrt(s*s+i*i)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function zs(t){this.element=t,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function As(t){this.element=t,this.color=window.getComputedStyle(t).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),gn(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}zs.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(t,e){var o=Ts.distance(t,e,0,0),n=Ts.distance(t,e,this.width,0),s=Ts.distance(t,e,0,this.height),i=Ts.distance(t,e,this.width,this.height);return Math.max(o,n,s,i)}},As.MAX_RADIUS=300,As.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var t;return this.mouseDownStart?(t=Ts.now()-this.mouseDownStart,this.mouseUpStart&&(t-=this.mouseUpElapsed),t):0},get mouseUpElapsed(){return this.mouseUpStart?Ts.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var t=this.containerMetrics.width*this.containerMetrics.width,e=this.containerMetrics.height*this.containerMetrics.height,o=1.1*Math.min(Math.sqrt(t+e),As.MAX_RADIUS)+5,n=1.1-o/As.MAX_RADIUS*.2,s=this.mouseInteractionSeconds/n,i=o*(1-Math.pow(80,-s));return Math.abs(i)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var t=.3*this.mouseUpElapsedSeconds,e=this.opacity;return Math.max(0,Math.min(t,e))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,As.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,As.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new zs(this.element)},draw:function(){var t,e,o;this.wave.style.opacity=this.opacity,t=this.radius/(this.containerMetrics.size/2),e=this.xNow-this.containerMetrics.width/2,o=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+e+"px, "+o+"px)",this.waveContainer.style.transform="translate3d("+e+"px, "+o+"px, 0)",this.wave.style.webkitTransform="scale("+t+","+t+")",this.wave.style.transform="scale3d("+t+","+t+",1)"},downAction:function(t){var e=this.containerMetrics.width/2,o=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=Ts.now(),this.center?(this.xStart=e,this.yStart=o,this.slideDistance=Ts.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=t?t.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=t?t.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=e,this.yEnd=o,this.slideDistance=Ts.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(t){this.isMouseDown&&(this.mouseUpStart=Ts.now())},remove:function(){gn(gn(this.waveContainer).parentNode).removeChild(this.waveContainer)}},Sn({_template:Xn`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[Cs],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==gn(this).parentNode.nodeType?this.keyEventTarget=gn(this).getOwnerRoot().host:this.keyEventTarget=gn(this).parentNode;var t=this.keyEventTarget;this.listen(t,"up","uiUpAction"),this.listen(t,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var t=0;t<this.ripples.length;++t)if(!this.ripples[t].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async((function(){this.upAction()}),1)},uiDownAction:function(t){this.noink||this.downAction(t)},downAction:function(t){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(t),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(t){this.noink||this.upAction(t)},upAction:function(t){this.holdDown||(this.ripples.forEach((function(e){e.upAction(t)})),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor="",this.fire("transitionend")},addRipple:function(){var t=new As(this);return gn(this.$.waves).appendChild(t.waveContainer),this.$.background.style.backgroundColor=t.color,this.ripples.push(t),this._setAnimating(!0),t},removeRipple:function(t){var e=this.ripples.indexOf(t);e<0||(this.ripples.splice(e,1),t.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var t,e;for(t=0;t<this.ripples.length;++t)(e=this.ripples[t]).draw(),this.$.background.style.opacity=e.outerOpacity,e.isOpacityFullyDecayed&&!e.isRestingAtMaxRadius&&this.removeRipple(e);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(t,e){void 0!==e&&(t?this.downAction():this.upAction())}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Os={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(t){Es._downHandler.call(this,t),this.pressed&&this.ensureRipple(t)},ensureRipple:function(t){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var e=this._rippleContainer||this.root;if(e&&gn(e).appendChild(this._ripple),t){var o=gn(this._rippleContainer||this),n=gn(t).rootTarget;o.deepContains(n)&&this._ripple.uiDownAction(t)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(t){this.hasRipple()&&(this._ripple.noink=t)}},Ms={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var t=1;this.disabled?t=0:this.active||this.pressed?t=4:this.receivedFocusFromKeyboard&&(t=3),this._setElevation(t)},_computeKeyboardClass:function(t){this.toggleClass("keyboard-focus",t)},_spaceKeyDownHandler:function(t){Es._spaceKeyDownHandler.call(this,t),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(t){Es._spaceKeyUpHandler.call(this,t),this.hasRipple()&&this._ripple.uiUpAction()}},Is=[Ss,ds,Os,Ms],Ps=Xn`
  <style include="paper-material-styles">
    /* Need to specify the same specificity as the styles imported from paper-material. */
    :host {
      @apply --layout-inline;
      @apply --layout-center-center;
      position: relative;
      box-sizing: border-box;
      min-width: 5.14em;
      margin: 0 0.29em;
      background: transparent;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      font: inherit;
      text-transform: uppercase;
      outline-width: 0;
      border-radius: 3px;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;
      z-index: 0;
      padding: 0.7em 0.57em;

      @apply --paper-font-common-base;
      @apply --paper-button;
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([raised].keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-raised-keyboard-focus;
    }

    :host(:not([raised]).keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-flat-keyboard-focus;
    }

    :host([disabled]) {
      background: none;
      color: #a8a8a8;
      cursor: auto;
      pointer-events: none;

      @apply --paper-button-disabled;
    }

    :host([disabled][raised]) {
      background: #eaeaea;
    }


    :host([animated]) {
      @apply --shadow-transition;
    }

    paper-ripple {
      color: var(--paper-button-ink-color);
    }
  </style>

  <slot></slot>`;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Ps.setAttribute("strip-whitespace",""),Sn({_template:Ps,is:"paper-button",behaviors:[Is],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){this.raised?Ms._calculateElevation.apply(this):this._setElevation(0)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class Ls{constructor(t){Ls[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,e=this.key;if(t&&e)return Ls.types[t]&&Ls.types[t][e]}set value(t){var e=this.type,o=this.key;e&&o&&(e=Ls.types[e]=Ls.types[e]||{},null==t?delete e[o]:e[o]=t)}get list(){if(this.type){var t=Ls.types[this.type];return t?Object.keys(t).map((function(t){return Ns[this.type][t]}),this):[]}}byKey(t){return this.key=t,this.value}}Ls[" "]=function(){},Ls.types={};var Ns=Ls.types;Sn({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,o){var n=new Ls({type:t,key:e});return void 0!==o&&o!==n.value?n.value=o:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new Ls({type:this.type,key:t}).value}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Sn({_template:Xn`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:rs.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&gn(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,gn(this.root).appendChild(this._img))}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Ds=Sn({_template:Xn`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){Ds.instance||(Ds.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(t){this._text="",this.async((function(){this._text=t}),100)},_onIronAnnounce:function(t){t.detail&&t.detail.text&&this.announce(t.detail.text)}});Ds.instance=null,Ds.requestAvailability=function(){Ds.instance||(Ds.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(Ds.instance)};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
let Hs=null;const Rs={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){Hs=new Ls({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return Hs&&Hs.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(t){return void 0===t&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(t),!this.invalid},_getValidity:function(t){return!this.hasValidator()||this._validator.validate(t)}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
if(Sn({_template:Xn`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[Rs],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){Ds.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=gn(this).observeNodes(function(t){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(gn(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var t;if(this.allowedPattern)t=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":t=/[0-9.,e-]/}return t},_bindValueChanged:function(t,e){e&&(void 0===t?e.value=null:t!==e.value&&(this.inputElement.value=t),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:t}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(t){var e=8==t.keyCode||9==t.keyCode||13==t.keyCode||27==t.keyCode,o=19==t.keyCode||20==t.keyCode||45==t.keyCode||46==t.keyCode||144==t.keyCode||145==t.keyCode||t.keyCode>32&&t.keyCode<41||t.keyCode>111&&t.keyCode<124;return!(e||0==t.charCode&&o)},_onKeypress:function(t){if(this.allowedPattern||"number"===this.inputElement.type){var e=this._patternRegExp;if(e&&!(t.metaKey||t.ctrlKey||t.altKey)){this._patternAlreadyChecked=!0;var o=String.fromCharCode(t.charCode);this._isPrintable(t)&&!e.test(o)&&(t.preventDefault(),this._announceInvalidCharacter("Invalid character "+o+" not entered."))}}},_checkPatternValidity:function(){var t=this._patternRegExp;if(!t)return!0;for(var e=0;e<this.inputElement.value.length;e++)if(!t.test(this.inputElement.value[e]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var t=this.inputElement.checkValidity();return t&&(this.required&&""===this.bindValue?t=!1:this.hasValidator()&&(t=Rs.validate.call(this,this.bindValue))),this.invalid=!t,this.fire("iron-input-validate"),t},_announceInvalidCharacter:function(t){this.fire("iron-announce",{text:t})},_computeValue:function(t){return t}}),!window.polymerSkipLoadingFontRoboto){const t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.crossOrigin="anonymous",t.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(t)}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Vs=Xn`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;Vs.setAttribute("style","display: none;"),document.head.appendChild(Vs.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Bs={attached:function(){this.fire("addon-attached")},update:function(t){}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Sn({_template:Xn`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:"paper-input-char-counter",behaviors:[Bs],properties:{_charCounterStr:{type:String,value:"0"}},update:function(t){if(t.inputElement){t.value=t.value||"";var e=t.value.toString().length.toString();t.inputElement.hasAttribute("maxlength")&&(e+="/"+t.inputElement.getAttribute("maxlength")),this._charCounterStr=e}}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Fs=Xn`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;Fs.setAttribute("style","display: none;"),document.head.appendChild(Fs.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const js=Xn`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;js.setAttribute("style","display: none;"),document.head.appendChild(js.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const $s=Xn`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;$s.setAttribute("style","display: none;"),document.head.appendChild($s.content),Sn({_template:Xn`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }


      .input-content ::slotted(label):before,
      .input-content ::slotted(.paper-input-label):before {
        @apply --paper-input-container-label-before;
      }

      .input-content ::slotted(label):after,
      .input-content ::slotted(.paper-input-label):after {
        @apply --paper-input-container-label-after;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return Xt(this.attrForValue)},get _inputElement(){return gn(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&""!=this._inputElementValue?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(t){this._addons||(this._addons=[]);var e=t.target;-1===this._addons.indexOf(e)&&(this._addons.push(e),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(t){this._handleValueAndAutoValidate(t.target)},_onValueChanged:function(t){var e=t.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,void 0===e.value||""===e.value)||this._handleValueAndAutoValidate(t.target)},_handleValue:function(t){var e=this._inputElementValue;e||0===e||"number"===t.type&&!t.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:t,value:e,invalid:this.invalid})},_handleValueAndAutoValidate:function(t){var e;this.autoValidate&&t&&(e=t.validate?t.validate(this._inputElementValue):t.checkValidity(),this.invalid=!e);this._handleValue(t)},_onIronInputValidate:function(t){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(t){for(var e,o=0;e=this._addons[o];o++)e.update(t)},_computeInputContentClass:function(t,e,o,n,s){var i="input-content";if(t)s&&(i+=" label-is-hidden"),n&&(i+=" is-invalid");else{var r=this.querySelector("label");e||s?(i+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",n?i+=" is-invalid":o&&(i+=" label-is-highlighted")):(r&&(this.$.labelAndInputContainer.style.position="relative"),n&&(i+=" is-invalid"))}return o&&(i+=" focused"),i},_computeUnderlineClass:function(t,e){var o="underline";return e?o+=" is-invalid":t&&(o+=" is-highlighted"),o},_computeAddOnContentClass:function(t,e){var o="add-on-content";return e?o+=" is-invalid":t&&(o+=" is-highlighted"),o}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Sn({_template:Xn`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`,is:"paper-input-error",behaviors:[Bs],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(t){this._setInvalid(t.invalid)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Us={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}},qs={NextLabelID:1,NextAddonID:1,NextInputID:1},Ks={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!Gn&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(t,e){return t=t?t+" "+e:e},_onAddonAttached:function(t){var e=gn(t).rootTarget;if(e.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,e.id);else{var o="paper-input-add-on-"+qs.NextAddonID++;e.id=o,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,o)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(t){ds._focusBlurHandler.call(this,t),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(t){var e=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",e),this._shiftTabPressed=!1}),1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(t){try{var e=this.inputElement.selectionStart;this.value=t,this.inputElement.selectionStart=e,this.inputElement.selectionEnd=e}catch(e){this.value=t}},_computeAlwaysFloatLabel:function(t,e){return e||t},_updateAriaLabelledBy:function(){var t,e=gn(this.root).querySelector("label");e?(e.id?t=e.id:(t="paper-input-label-"+qs.NextLabelID++,e.id=t),this._ariaLabelledBy=t):this._ariaLabelledBy=""},_generateInputId:function(){this._inputId&&""!==this._inputId||(this._inputId="input-"+qs.NextInputID++)},_onChange:function(t){this.shadowRoot&&this.fire(t.type,{sourceEvent:t},{node:this,bubbles:t.bubbles,cancelable:t.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var t=document.activeElement;t instanceof HTMLElement&&t!==document.body&&t!==document.documentElement||this._focusableElement.focus()}}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Sn({is:"paper-input",_template:Xn`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]" role$="[[inputRole]]" aria-haspopup$="[[inputAriaHaspopup]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[[ds,Cs,Ks],Us],properties:{value:{type:String},inputRole:{type:String,value:void 0},inputAriaHaspopup:{type:String,value:void 0}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Ws={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){return this.fitInto===window?this.fitInto.innerWidth:this.fitInto.getBoundingClientRect().width},get _fitHeight(){return this.fitInto===window?this.fitInto.innerHeight:this.fitInto.getBoundingClientRect().height},get _fitLeft(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().left},get _fitTop(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().top},get _defaultPositionTarget(){var t=gn(this).parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(t=t.host),t},get _localeHorizontalAlign(){if(this._isRTL){if("right"===this.horizontalAlign)return"left";if("left"===this.horizontalAlign)return"right"}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},get _isRTL(){return void 0===this._memoizedIsRTL&&(this._memoizedIsRTL="rtl"==window.getComputedStyle(this).direction),this._memoizedIsRTL},attached:function(){this.positionTarget=this.positionTarget||this._defaultPositionTarget,this.autoFitOnAttach&&("none"===window.getComputedStyle(this).display?setTimeout(function(){this.fit()}.bind(this)):(window.ShadyDOM&&ShadyDOM.flush(),this.fit()))},detached:function(){this.__deferredFit&&(clearTimeout(this.__deferredFit),this.__deferredFit=null)},fit:function(){this.position(),this.constrain(),this.center()},_discoverInfo:function(){if(!this._fitInfo){var t=window.getComputedStyle(this),e=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:"auto"!==t.top?"top":"auto"!==t.bottom?"bottom":null,horizontally:"auto"!==t.left?"left":"auto"!==t.right?"right":null},sizedBy:{height:"none"!==e.maxHeight,width:"none"!==e.maxWidth,minWidth:parseInt(e.minWidth,10)||0,minHeight:parseInt(e.minHeight,10)||0},margin:{top:parseInt(t.marginTop,10)||0,right:parseInt(t.marginRight,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0}}}},resetFit:function(){var t=this._fitInfo||{};for(var e in t.sizerInlineStyle)this.sizingTarget.style[e]=t.sizerInlineStyle[e];for(var e in t.inlineStyle)this.style[e]=t.inlineStyle[e];this._fitInfo=null},refit:function(){var t=this.sizingTarget.scrollLeft,e=this.sizingTarget.scrollTop;this.resetFit(),this.fit(),this.sizingTarget.scrollLeft=t,this.sizingTarget.scrollTop=e},position:function(){if(this.__shouldPosition){this._discoverInfo(),this.style.position="fixed",this.sizingTarget.style.boxSizing="border-box",this.style.left="0px",this.style.top="0px";var t=this.getBoundingClientRect(),e=this.__getNormalizedRect(this.positionTarget),o=this.__getNormalizedRect(this.fitInto),n=this._fitInfo.margin,s={width:t.width+n.left+n.right,height:t.height+n.top+n.bottom},i=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,s,t,e,o),r=i.left+n.left,a=i.top+n.top,l=Math.min(o.right-n.right,r+t.width),c=Math.min(o.bottom-n.bottom,a+t.height);r=Math.max(o.left+n.left,Math.min(r,l-this._fitInfo.sizedBy.minWidth)),a=Math.max(o.top+n.top,Math.min(a,c-this._fitInfo.sizedBy.minHeight)),this.sizingTarget.style.maxWidth=Math.max(l-r,this._fitInfo.sizedBy.minWidth)+"px",this.sizingTarget.style.maxHeight=Math.max(c-a,this._fitInfo.sizedBy.minHeight)+"px",this.style.left=r-t.left+"px",this.style.top=a-t.top+"px"}},constrain:function(){if(!this.__shouldPosition){this._discoverInfo();var t=this._fitInfo;t.positionedBy.vertically||(this.style.position="fixed",this.style.top="0px"),t.positionedBy.horizontally||(this.style.position="fixed",this.style.left="0px"),this.sizingTarget.style.boxSizing="border-box";var e=this.getBoundingClientRect();t.sizedBy.height||this.__sizeDimension(e,t.positionedBy.vertically,"top","bottom","Height"),t.sizedBy.width||this.__sizeDimension(e,t.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(t,e,o,n,s){this.__sizeDimension(t,e,o,n,s)},__sizeDimension:function(t,e,o,n,s){var i=this._fitInfo,r=this.__getNormalizedRect(this.fitInto),a="Width"===s?r.width:r.height,l=e===n,c=l?a-t[n]:t[o],u=i.margin[l?o:n],d="offset"+s,h=this[d]-this.sizingTarget[d];this.sizingTarget.style["max"+s]=a-u-c-h+"px"},center:function(){if(!this.__shouldPosition){this._discoverInfo();var t=this._fitInfo.positionedBy;if(!t.vertically||!t.horizontally){this.style.position="fixed",t.vertically||(this.style.top="0px"),t.horizontally||(this.style.left="0px");var e=this.getBoundingClientRect(),o=this.__getNormalizedRect(this.fitInto);if(!t.vertically){var n=o.top-e.top+(o.height-e.height)/2;this.style.top=n+"px"}if(!t.horizontally){var s=o.left-e.left+(o.width-e.width)/2;this.style.left=s+"px"}}}},__getNormalizedRect:function(t){return t===document.documentElement||t===window?{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}:t.getBoundingClientRect()},__getOffscreenArea:function(t,e,o){var n=Math.min(0,t.top)+Math.min(0,o.bottom-(t.top+e.height)),s=Math.min(0,t.left)+Math.min(0,o.right-(t.left+e.width));return Math.abs(n)*e.width+Math.abs(s)*e.height},__getPosition:function(t,e,o,n,s,i){var r,a=[{verticalAlign:"top",horizontalAlign:"left",top:s.top+this.verticalOffset,left:s.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:s.top+this.verticalOffset,left:s.right-o.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:s.bottom-o.height-this.verticalOffset,left:s.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:s.bottom-o.height-this.verticalOffset,left:s.right-o.width-this.horizontalOffset}];if(this.noOverlap){for(var l=0,c=a.length;l<c;l++){var u={};for(var d in a[l])u[d]=a[l][d];a.push(u)}a[0].top=a[1].top+=s.height,a[2].top=a[3].top-=s.height,a[4].left=a[6].left+=s.width,a[5].left=a[7].left-=s.width}e="auto"===e?null:e,(t="auto"===t?null:t)&&"center"!==t||(a.push({verticalAlign:"top",horizontalAlign:"center",top:s.top+this.verticalOffset+(this.noOverlap?s.height:0),left:s.left-n.width/2+s.width/2+this.horizontalOffset}),a.push({verticalAlign:"bottom",horizontalAlign:"center",top:s.bottom-o.height-this.verticalOffset-(this.noOverlap?s.height:0),left:s.left-n.width/2+s.width/2+this.horizontalOffset})),e&&"middle"!==e||(a.push({verticalAlign:"middle",horizontalAlign:"left",top:s.top-n.height/2+s.height/2+this.verticalOffset,left:s.left+this.horizontalOffset+(this.noOverlap?s.width:0)}),a.push({verticalAlign:"middle",horizontalAlign:"right",top:s.top-n.height/2+s.height/2+this.verticalOffset,left:s.right-o.width-this.horizontalOffset-(this.noOverlap?s.width:0)})),"middle"===e&&"center"===t&&a.push({verticalAlign:"middle",horizontalAlign:"center",top:s.top-n.height/2+s.height/2+this.verticalOffset,left:s.left-n.width/2+s.width/2+this.horizontalOffset});for(l=0;l<a.length;l++){var h=a[l],p=h.verticalAlign===e,g=h.horizontalAlign===t;if(!this.dynamicAlign&&!this.noOverlap&&p&&g){r=h;break}var m=(!e||p)&&(!t||g);if(this.dynamicAlign||m){if(h.offscreenArea=this.__getOffscreenArea(h,o,i),0===h.offscreenArea&&m){r=h;break}r=r||h;var f=h.offscreenArea-r.offscreenArea;(f<0||0===f&&(p||g))&&(r=h)}}return r}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Ys=new Set;const Xs={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(Ys.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)}),this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&-1===t._interestedResizables.indexOf(this)&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){this._notifyingDescendant?t.stopPropagation():dt||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=gn(t).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function e(){document.removeEventListener("readystatechange",e),t()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(t){t!==this&&t._findParent()}),this):(Ys.forEach((function(t){t!==this&&t._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?Ys.delete(this):Ys.add(this)}};
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Gs=Element.prototype,Js=Gs.matches||Gs.matchesSelector||Gs.mozMatchesSelector||Gs.msMatchesSelector||Gs.oMatchesSelector||Gs.webkitMatchesSelector;const Zs=new class{getTabbableNodes(t){var e=[];return this._collectTabbableNodes(t,e)?this._sortByTabIndex(e):e}isFocusable(t){return Js.call(t,"input, select, textarea, button, object")?Js.call(t,":not([disabled])"):Js.call(t,"a[href], area[href], iframe, [tabindex], [contentEditable]")}isTabbable(t){return this.isFocusable(t)&&Js.call(t,':not([tabindex="-1"])')&&this._isVisible(t)}_normalizedTabIndex(t){if(this.isFocusable(t)){var e=t.getAttribute("tabindex")||0;return Number(e)}return-1}_collectTabbableNodes(t,e){if(t.nodeType!==Node.ELEMENT_NODE)return!1;var o=t;if(!this._isVisible(o))return!1;var n,s=this._normalizedTabIndex(o),i=s>0;s>=0&&e.push(o),n="content"===o.localName||"slot"===o.localName?gn(o).getDistributedNodes():gn(o.root||o).children;for(var r=0;r<n.length;r++)i=this._collectTabbableNodes(n[r],e)||i;return i}_isVisible(t){var e=t.style;return"hidden"!==e.visibility&&"none"!==e.display&&("hidden"!==(e=window.getComputedStyle(t)).visibility&&"none"!==e.display)}_sortByTabIndex(t){var e=t.length;if(e<2)return t;var o=Math.ceil(e/2),n=this._sortByTabIndex(t.slice(0,o)),s=this._sortByTabIndex(t.slice(o));return this._mergeSortByTabIndex(n,s)}_mergeSortByTabIndex(t,e){for(var o=[];t.length>0&&e.length>0;)this._hasLowerTabOrder(t[0],e[0])?o.push(e.shift()):o.push(t.shift());return o.concat(t,e)}_hasLowerTabOrder(t,e){var o=Math.max(t.tabIndex,0),n=Math.max(e.tabIndex,0);return 0===o||0===n?n>o:o>n}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Sn({_template:Xn`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--iron-overlay-backdrop-background-color, #000);
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
        @apply --iron-overlay-backdrop;
      }

      :host(.opened) {
        opacity: var(--iron-overlay-backdrop-opacity, 0.6);
        pointer-events: auto;
        @apply --iron-overlay-backdrop-opened;
      }
    </style>

    <slot></slot>
`,is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){this.opened&&!this.parentNode&&gn(document.body).appendChild(this)},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){this.opened||this.parentNode!==document.body||gn(this.parentNode).removeChild(this)},_onTransitionend:function(t){t&&t.target===this&&this.complete()},_openedChanged:function(t){if(t)this.prepare();else{var e=window.getComputedStyle(this);"0s"!==e.transitionDuration&&0!=e.opacity||this.complete()}this.isAttached&&(this.__openedRaf&&(window.cancelAnimationFrame(this.__openedRaf),this.__openedRaf=null),this.scrollTop=this.scrollTop,this.__openedRaf=window.requestAnimationFrame(function(){this.__openedRaf=null,this.toggleClass("opened",this.opened)}.bind(this)))}});const Qs=new
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class{constructor(){this._overlays=[],this._minimumZ=101,this._backdropElement=null,Ao(document.documentElement,"tap",(function(){})),document.addEventListener("tap",this._onCaptureClick.bind(this),!0),document.addEventListener("focus",this._onCaptureFocus.bind(this),!0),document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)}get backdropElement(){return this._backdropElement||(this._backdropElement=document.createElement("iron-overlay-backdrop")),this._backdropElement}get deepActiveElement(){var t=document.activeElement;for(t&&t instanceof Element!=!1||(t=document.body);t.root&&gn(t.root).activeElement;)t=gn(t.root).activeElement;return t}_bringOverlayAtIndexToFront(t){var e=this._overlays[t];if(e){var o=this._overlays.length-1,n=this._overlays[o];if(n&&this._shouldBeBehindOverlay(e,n)&&o--,!(t>=o)){var s=Math.max(this.currentOverlayZ(),this._minimumZ);for(this._getZ(e)<=s&&this._applyOverlayZ(e,s);t<o;)this._overlays[t]=this._overlays[t+1],t++;this._overlays[o]=e}}}addOrRemoveOverlay(t){t.opened?this.addOverlay(t):this.removeOverlay(t)}addOverlay(t){var e=this._overlays.indexOf(t);if(e>=0)return this._bringOverlayAtIndexToFront(e),void this.trackBackdrop();var o=this._overlays.length,n=this._overlays[o-1],s=Math.max(this._getZ(n),this._minimumZ),i=this._getZ(t);if(n&&this._shouldBeBehindOverlay(t,n)){this._applyOverlayZ(n,s),o--;var r=this._overlays[o-1];s=Math.max(this._getZ(r),this._minimumZ)}i<=s&&this._applyOverlayZ(t,s),this._overlays.splice(o,0,t),this.trackBackdrop()}removeOverlay(t){var e=this._overlays.indexOf(t);-1!==e&&(this._overlays.splice(e,1),this.trackBackdrop())}currentOverlay(){var t=this._overlays.length-1;return this._overlays[t]}currentOverlayZ(){return this._getZ(this.currentOverlay())}ensureMinimumZ(t){this._minimumZ=Math.max(this._minimumZ,t)}focusOverlay(){var t=this.currentOverlay();t&&t._applyFocus()}trackBackdrop(){var t=this._overlayWithBackdrop();(t||this._backdropElement)&&(this.backdropElement.style.zIndex=this._getZ(t)-1,this.backdropElement.opened=!!t,this.backdropElement.prepare())}getBackdrops(){for(var t=[],e=0;e<this._overlays.length;e++)this._overlays[e].withBackdrop&&t.push(this._overlays[e]);return t}backdropZ(){return this._getZ(this._overlayWithBackdrop())-1}_overlayWithBackdrop(){for(var t=this._overlays.length-1;t>=0;t--)if(this._overlays[t].withBackdrop)return this._overlays[t]}_getZ(t){var e=this._minimumZ;if(t){var o=Number(t.style.zIndex||window.getComputedStyle(t).zIndex);o==o&&(e=o)}return e}_setZ(t,e){t.style.zIndex=e}_applyOverlayZ(t,e){this._setZ(t,e+2)}_overlayInPath(t){t=t||[];for(var e=0;e<t.length;e++)if(t[e]._manager===this)return t[e]}_onCaptureClick(t){var e=this._overlays.length-1;if(-1!==e)for(var o,n=gn(t).path;(o=this._overlays[e])&&this._overlayInPath(n)!==o&&(o._onCaptureClick(t),o.allowClickThrough);)e--}_onCaptureFocus(t){var e=this.currentOverlay();e&&e._onCaptureFocus(t)}_onCaptureKeyDown(t){var e=this.currentOverlay();e&&(Cs.keyboardEventMatchesKeys(t,"esc")?e._onCaptureEsc(t):Cs.keyboardEventMatchesKeys(t,"tab")&&e._onCaptureTab(t))}_shouldBeBehindOverlay(t,e){return!t.alwaysOnTop&&e.alwaysOnTop}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var ti,ei,oi={pageX:0,pageY:0},ni=null,si=[],ii=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"];function ri(t){li.indexOf(t)>=0||(0===li.length&&function(){ti=ti||di.bind(void 0);for(var t=0,e=ii.length;t<e;t++)document.addEventListener(ii[t],ti,{capture:!0,passive:!1})}(),li.push(t),ei=li[li.length-1],ci=[],ui=[])}function ai(t){var e=li.indexOf(t);-1!==e&&(li.splice(e,1),ei=li[li.length-1],ci=[],ui=[],0===li.length&&function(){for(var t=0,e=ii.length;t<e;t++)document.removeEventListener(ii[t],ti,{capture:!0,passive:!1})}())}const li=[];let ci=null,ui=null;function di(t){if(t.cancelable&&function(t){var e=gn(t).rootTarget;"touchmove"!==t.type&&ni!==e&&(ni=e,si=function(t){for(var e=[],o=t.indexOf(ei),n=0;n<=o;n++)if(t[n].nodeType===Node.ELEMENT_NODE){var s=t[n],i=s.style;"scroll"!==i.overflow&&"auto"!==i.overflow&&(i=window.getComputedStyle(s)),"scroll"!==i.overflow&&"auto"!==i.overflow||e.push(s)}return e}(gn(t).path));if(!si.length)return!0;if("touchstart"===t.type)return!1;var o=function(t){var e={deltaX:t.deltaX,deltaY:t.deltaY};if("deltaX"in t);else if("wheelDeltaX"in t&&"wheelDeltaY"in t)e.deltaX=-t.wheelDeltaX,e.deltaY=-t.wheelDeltaY;else if("wheelDelta"in t)e.deltaX=0,e.deltaY=-t.wheelDelta;else if("axis"in t)e.deltaX=1===t.axis?t.detail:0,e.deltaY=2===t.axis?t.detail:0;else if(t.targetTouches){var o=t.targetTouches[0];e.deltaX=oi.pageX-o.pageX,e.deltaY=oi.pageY-o.pageY}return e}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/(t);return!function(t,e,o){if(!e&&!o)return;for(var n=Math.abs(o)>=Math.abs(e),s=0;s<t.length;s++){var i=t[s];if(n?o<0?i.scrollTop>0:i.scrollTop<i.scrollHeight-i.clientHeight:e<0?i.scrollLeft>0:i.scrollLeft<i.scrollWidth-i.clientWidth)return i}}(si,o.deltaX,o.deltaY)}(t)&&t.preventDefault(),t.targetTouches){var e=t.targetTouches[0];oi.pageX=e.pageX,oi.pageY=e.pageY}}const hi={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:Qs},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||gn(this).querySelector("[autofocus]")||this},get _focusableNodes(){return Zs.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1,this.__shouldRemoveTabIndex=!1,this.__firstFocusableNode=this.__lastFocusableNode=null,this.__rafs={},this.__restoreFocusNode=null,this.__scrollTop=this.__scrollLeft=null,this.__onCaptureScroll=this.__onCaptureScroll.bind(this),this.__rootNodes=null,this._ensureSetup()},attached:function(){this.opened&&this._openedChanged(this.opened),this._observer=gn(this).observeNodes(this._onNodesChange)},detached:function(){for(var t in this._observer&&gn(this).unobserveNodes(this._observer),this._observer=null,this.__rafs)null!==this.__rafs[t]&&cancelAnimationFrame(this.__rafs[t]);this.__rafs={},this._manager.removeOverlay(this),this.__isAnimating&&(this.opened?this._finishRenderOpened():(this._applyFocus(),this._finishRenderClosed()))},toggle:function(){this._setCanceled(!1),this.opened=!this.opened},open:function(){this._setCanceled(!1),this.opened=!0},close:function(){this._setCanceled(!1),this.opened=!1},cancel:function(t){this.fire("iron-overlay-canceled",t,{cancelable:!0}).defaultPrevented||(this._setCanceled(!0),this.opened=!1)},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){this._overlaySetup||(this._overlaySetup=!0,this.style.outline="none",this.style.display="none")},_openedChanged:function(t){t?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"),this.isAttached&&(this.__isAnimating=!0,this.__deraf("__openedChanged",this.__openedChanged))},_canceledChanged:function(){this.closingReason=this.closingReason||{},this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){this.withBackdrop&&!this.hasAttribute("tabindex")?(this.setAttribute("tabindex","-1"),this.__shouldRemoveTabIndex=!0):this.__shouldRemoveTabIndex&&(this.removeAttribute("tabindex"),this.__shouldRemoveTabIndex=!1),this.opened&&this.isAttached&&this._manager.trackBackdrop()},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement,this._preparePositioning(),this.refit(),this._finishPositioning(),this.noAutoFocus&&document.activeElement===this._focusNode&&(this._focusNode.blur(),this.__restoreFocusNode.focus())},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none",this.style.zIndex="",this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none",this.style.transform=this.style.webkitTransform="none",this.style.display=""},_finishPositioning:function(){this.style.display="none",this.scrollTop=this.scrollTop,this.style.transition=this.style.webkitTransition="",this.style.transform=this.style.webkitTransform="",this.style.display="",this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened)this.noAutoFocus||this._focusNode.focus();else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var t=this._manager.deepActiveElement;(t===document.body||pi(this,t))&&this.__restoreFocusNode.focus()}this.__restoreFocusNode=null,this._focusNode.blur(),this._focusedChild=null}},_onCaptureClick:function(t){this.noCancelOnOutsideClick||this.cancel(t)},_onCaptureFocus:function(t){if(this.withBackdrop){var e=gn(t).path;-1===e.indexOf(this)?(t.stopPropagation(),this._applyFocus()):this._focusedChild=e[0]}},_onCaptureEsc:function(t){this.noCancelOnEscKey||this.cancel(t)},_onCaptureTab:function(t){if(this.withBackdrop){this.__ensureFirstLastFocusables();var e=t.shiftKey,o=e?this.__firstFocusableNode:this.__lastFocusableNode,n=e?this.__lastFocusableNode:this.__firstFocusableNode,s=!1;if(o===n)s=!0;else{var i=this._manager.deepActiveElement;s=i===o||i===this}s&&(t.preventDefault(),this._focusedChild=n,this._applyFocus())}},_onIronResize:function(){this.opened&&!this.__isAnimating&&this.__deraf("refit",this.refit)},_onNodesChange:function(){this.opened&&!this.__isAnimating&&(this.invalidateTabbables(),this.notifyResize())},__ensureFirstLastFocusables:function(){var t=this._focusableNodes;this.__firstFocusableNode=t[0],this.__lastFocusableNode=t[t.length-1]},__openedChanged:function(){this.opened?(this._prepareRenderOpened(),this._manager.addOverlay(this),this._applyFocus(),this._renderOpened()):(this._manager.removeOverlay(this),this._applyFocus(),this._renderClosed())},__deraf:function(t,e){var o=this.__rafs;null!==o[t]&&cancelAnimationFrame(o[t]),o[t]=requestAnimationFrame(function(){o[t]=null,e.call(this)}.bind(this))},__updateScrollObservers:function(t,e,o){t&&e&&this.__isValidScrollAction(o)?("lock"===o&&(this.__saveScrollPosition(),ri(this)),this.__addScrollListeners()):(ai(this),this.__removeScrollListeners())},__addScrollListeners:function(){if(!this.__rootNodes){if(this.__rootNodes=[],dt)for(var t=this;t;)t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host&&this.__rootNodes.push(t),t=t.host||t.assignedSlot||t.parentNode;this.__rootNodes.push(document)}this.__rootNodes.forEach((function(t){t.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})}),this)},__removeScrollListeners:function(){this.__rootNodes&&this.__rootNodes.forEach((function(t){t.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})}),this),this.isAttached||(this.__rootNodes=null)},__isValidScrollAction:function(t){return"lock"===t||"refit"===t||"cancel"===t},__onCaptureScroll:function(t){if(!(this.__isAnimating||gn(t).path.indexOf(this)>=0))switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(t)}},__saveScrollPosition:function(){document.scrollingElement?(this.__scrollTop=document.scrollingElement.scrollTop,this.__scrollLeft=document.scrollingElement.scrollLeft):(this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))},__restoreScrollPosition:function(){document.scrollingElement?(document.scrollingElement.scrollTop=this.__scrollTop,document.scrollingElement.scrollLeft=this.__scrollLeft):(document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop,document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft)}},pi=(t,e)=>{for(let n=e;n;n=(o=n).assignedSlot||o.parentNode||o.host)if(n===t)return!0;var o;return!1},gi=[Ws,Xs,hi],mi=[{properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(t,e){for(var o in e)t[o]=e[o]},_cloneConfig:function(t){var e={isClone:!0};return this._copyProperties(e,t),e},_getAnimationConfigRecursive:function(t,e,o){var n;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(n=t?this.animationConfig[t]:this.animationConfig,Array.isArray(n)||(n=[n]),n)for(var s,i=0;s=n[i];i++)if(s.animatable)s.animatable._getAnimationConfigRecursive(s.type||t,e,o);else if(s.id){var r=e[s.id];r?(r.isClone||(e[s.id]=this._cloneConfig(r),r=e[s.id]),this._copyProperties(r,s)):e[s.id]=s}else o.push(s)},getAnimationConfig:function(t){var e={},o=[];for(var n in this._getAnimationConfigRecursive(t,e,o),e)o.push(e[n]);return o}},{_configureAnimations:function(t){var e=[],o=[];if(t.length>0)for(let e,n=0;e=t[n];n++){let t=document.createElement(e.name);if(t.isNeonAnimation){let n=null;t.configure||(t.configure=function(t){return null}),n=t.configure(e),o.push({result:n,config:e,neonAnimation:t})}else console.warn(this.is+":",e.name,"not found!")}for(var n=0;n<o.length;n++){let t=o[n].result,s=o[n].config,i=o[n].neonAnimation;try{"function"!=typeof t.cancel&&(t=document.timeline.play(t))}catch(e){t=null,console.warn("Couldnt play","(",s.name,").",e)}t&&e.push({neonAnimation:i,config:s,animation:t})}return e},_shouldComplete:function(t){for(var e=!0,o=0;o<t.length;o++)if("finished"!=t[o].animation.playState){e=!1;break}return e},_complete:function(t){for(var e=0;e<t.length;e++)t[e].neonAnimation.complete(t[e].config);for(e=0;e<t.length;e++)t[e].animation.cancel()},playAnimation:function(t,e){var o=this.getAnimationConfig(t);if(o){this._active=this._active||{},this._active[t]&&(this._complete(this._active[t]),delete this._active[t]);var n=this._configureAnimations(o);if(0!=n.length){this._active[t]=n;for(var s=0;s<n.length;s++)n[s].animation.onfinish=function(){this._shouldComplete(n)&&(this._complete(n),delete this._active[t],this.fire("neon-animation-finish",e,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",e,{bubbles:!1})}},cancelAnimation:function(){for(var t in this._active){var e=this._active[t];for(var o in e)e[o].animation.cancel()}this._active={}}}];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Sn({_template:Xn`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,is:"iron-dropdown",behaviors:[ds,Cs,gi,mi],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var t=gn(this.$.content).getDistributedNodes(),e=0,o=t.length;e<o;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),hi._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):hi._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):hi._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var t=this.containedElement,e=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),o=0;o<e.length;o++)e[o].node=t;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(t){this._readied&&(t?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var t=this.focusTarget||this.containedElement;t&&this.opened&&!this.noAutoFocus?t.focus():hi._applyFocus.apply(this,arguments)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const fi={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(t){if(t.timing)for(var e in t.timing)this.animationTiming[e]=t.timing[e];return this.animationTiming},setPrefixedProperty:function(t,e,o){for(var n,s={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[e],i=0;n=s[i];i++)t.style[n]=o;t.style[e]=o},complete:function(t){}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Sn({is:"fade-in-animation",behaviors:[fi],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(t)),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Sn({is:"fade-out-animation",behaviors:[fi],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(t)),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Sn({is:"paper-menu-grow-height-animation",behaviors:[fi],configure:function(t){var e=t.node,o=e.getBoundingClientRect().height;return this._effect=new KeyframeEffect(e,[{height:o/2+"px"},{height:o+"px"}],this.timingFromConfig(t)),this._effect}}),Sn({is:"paper-menu-grow-width-animation",behaviors:[fi],configure:function(t){var e=t.node,o=e.getBoundingClientRect().width;return this._effect=new KeyframeEffect(e,[{width:o/2+"px"},{width:o+"px"}],this.timingFromConfig(t)),this._effect}}),Sn({is:"paper-menu-shrink-width-animation",behaviors:[fi],configure:function(t){var e=t.node,o=e.getBoundingClientRect().width;return this._effect=new KeyframeEffect(e,[{width:o+"px"},{width:o-o/20+"px"}],this.timingFromConfig(t)),this._effect}}),Sn({is:"paper-menu-shrink-height-animation",behaviors:[fi],configure:function(t){var e=t.node,o=e.getBoundingClientRect().height;return this.setPrefixedProperty(e,"transformOrigin","0 0"),this._effect=new KeyframeEffect(e,[{height:o+"px",transform:"translateY(0)"},{height:o/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(t)),this._effect}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var _i={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const vi=Sn({_template:Xn`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;

        @apply --paper-menu-button;
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--disabled-text-color);

        @apply --paper-menu-button-disabled;
      }

      iron-dropdown {
        @apply --paper-menu-button-dropdown;
      }

      .dropdown-content {
        @apply --shadow-elevation-2dp;

        position: relative;
        border-radius: 2px;
        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));

        @apply --paper-menu-button-content;
      }

      :host([vertical-align="top"]) .dropdown-content {
        margin-bottom: 20px;
        margin-top: -10px;
        top: 10px;
      }

      :host([vertical-align="bottom"]) .dropdown-content {
        bottom: 10px;
        margin-bottom: -10px;
        margin-top: 20px;
      }

      #trigger {
        cursor: pointer;
      }
    </style>

    <div id="trigger" on-tap="toggle">
      <slot name="dropdown-trigger"></slot>
    </div>

    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled">
      <div slot="dropdown-content" class="dropdown-content">
        <slot id="content" name="dropdown-content"></slot>
      </div>
    </iron-dropdown>
`,is:"paper-menu-button",behaviors:[Cs,ds],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:_i.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:_i.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:_i.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var t=gn(this.$.content).getDistributedNodes(),e=0,o=t.length;e<o;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(t){this.ignoreSelect||this.close()},_onIronActivate:function(t){this.closeOnActivate&&this.close()},_openedChanged:function(t,e){t?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=e&&this.fire("paper-dropdown-close")},_disabledChanged:function(t){ds._disabledChanged.apply(this,arguments),t&&this.opened&&this.close()},__onIronOverlayCanceled:function(t){var e=t.detail,o=this.$.trigger;gn(e).path.indexOf(o)>-1&&t.preventDefault()}});Object.keys(_i).forEach((function(t){vi[t]=_i[t]})),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Sn({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new Ls({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(t){return this.name+":"+t}),this)},applyIcon:function(t,e){this.removeIcon(t);var o=this._cloneIcon(e,this.rtlMirroring&&this._targetIsRTL(t));if(o){var n=gn(t.root||t);return n.insertBefore(o,n.childNodes[0]),t._svgIcon=o}return null},removeIcon:function(t){t._svgIcon&&(gn(t.root||t).removeChild(t._svgIcon),t._svgIcon=null)},_targetIsRTL:function(t){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var e=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===e.getAttribute("dir")}else t&&t.nodeType!==Node.ELEMENT_NODE&&(t=t.host),this.__targetIsRTL=t&&"rtl"===window.getComputedStyle(t).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var t=Object.create(null);return gn(this).querySelectorAll("[id]").forEach((function(e){t[e.id]=e})),t},_cloneIcon:function(t,e){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[t],this.size,e)},_prepareSvgClone:function(t,e,o){if(t){var n=t.cloneNode(!0),s=document.createElementNS("http://www.w3.org/2000/svg","svg"),i=n.getAttribute("viewBox")||"0 0 "+e+" "+e,r="pointer-events: none; display: block; width: 100%; height: 100%;";return o&&n.hasAttribute("mirror-in-rtl")&&(r+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),s.setAttribute("viewBox",i),s.setAttribute("preserveAspectRatio","xMidYMid meet"),s.setAttribute("focusable","false"),s.style.cssText=r,s.appendChild(n).removeAttribute("id"),s}return null}});
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const yi=document.createElement("template");yi.setAttribute("style","display: none;"),yi.innerHTML='<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>',document.head.appendChild(yi.content);
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const bi=document.createElement("template");bi.setAttribute("style","display: none;"),bi.innerHTML='<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      /* paper-dropdown-menu and paper-dropdown-menu-light both delegate focus\n       * to other internal elements which manage focus styling. */\n      :host(:focus) {\n        outline: none;\n      }\n\n      :host(:dir(rtl)) {\n        text-align: right;\n\n        @apply(--paper-dropdown-menu);\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(bi.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const wi=yn(HTMLElement);Sn({_template:Xn`
    <style include="paper-dropdown-menu-shared-styles"></style>

    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <paper-ripple></paper-ripple>
        <!-- paper-input has type="text" for a11y, do not remove -->
        <paper-input id="input" type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]" input-role="button" input-aria-haspopup="listbox" autocomplete="off">
          <!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> -->
          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>
        </paper-input>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,is:"paper-dropdown-menu",behaviors:[Ss,ds,Us,Rs],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},observers:["_selectedItemChanged(selectedItem)"],_attachDom(t){const e=Dt(this);return e.attachShadow({mode:"open",delegatesFocus:!0,shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),wi.prototype._attachDom.call(this,t)},focus(){this.$.input._focusableElement.focus()},attached:function(){var t=this.contentElement;t&&t.selectedItem&&this._setSelectedItem(t.selectedItem)},get contentElement(){for(var t=gn(this.$.content).getDistributedNodes(),e=0,o=t.length;e<o;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(t){this._setSelectedItem(t.detail.item)},_onIronDeselect:function(t){this._setSelectedItem(null)},_onTap:function(t){Vo(t)===this&&this.open()},_selectedItemChanged:function(t){var e="";e=t?t.label||t.getAttribute("label")||t.textContent.trim():"",this.value=e,this._setSelectedItemLabel(e)},_computeMenuVerticalOffset:function(t,e){return e||(t?-4:8)},_getValidity:function(t){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var t=this.opened?"true":"false",e=this.contentElement;e&&e.setAttribute("aria-expanded",t)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ki=document.createElement("template");ki.setAttribute("style","display: none;"),ki.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(ki.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const xi={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(t,e){e&&(t?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(t){this.closingReason=this.closingReason||{},this.closingReason.confirmed=t},_onDialogClick:function(t){for(var e=gn(t).path,o=0,n=e.indexOf(this);o<n;o++){var s=e[o];if(s.hasAttribute&&(s.hasAttribute("dialog-dismiss")||s.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(s.hasAttribute("dialog-confirm")),this.close(),t.stopPropagation();break}}}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Sn({_template:Xn`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[[gi,xi],mi],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Ci=document.createElement("template");Ci.setAttribute("style","display: none;"),Ci.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(Ci.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Sn({_template:Xn`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[[Ss,ds,{hostAttributes:{role:"option",tabindex:"0"}}]]});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class Ei{constructor(t){this.selection=[],this.selectCallback=t}get(){return this.multi?this.selection.slice():this.selection[0]}clear(t){this.selection.slice().forEach((function(e){(!t||t.indexOf(e)<0)&&this.setItemSelected(e,!1)}),this)}isSelected(t){return this.selection.indexOf(t)>=0}setItemSelected(t,e){if(null!=t&&e!==this.isSelected(t)){if(e)this.selection.push(t);else{var o=this.selection.indexOf(t);o>=0&&this.selection.splice(o,1)}this.selectCallback&&this.selectCallback(t,e)}}select(t){this.multi?this.toggle(t):this.get()!==t&&(this.setItemSelected(this.get(),!1),this.setItemSelected(t,!0))}toggle(t){this.setItemSelected(t,!this.isSelected(t))}}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Si={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new Ei(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&gn(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(t){return this.items?this.items.indexOf(t):-1},select:function(t){this.selected=t},selectPrevious:function(){var t=this.items.length,e=t-1;void 0!==this.selected&&(e=(Number(this._valueToIndex(this.selected))-1+t)%t),this.selected=this._indexToValue(e)},selectNext:function(){var t=0;void 0!==this.selected&&(t=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(t)},selectIndex:function(t){this.select(this._indexToValue(t))},forceSynchronousItemUpdate:function(){this._observer&&"function"==typeof this._observer.flush?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(t){this.listen(this,t,"_activateHandler")},_removeListener:function(t){this.unlisten(this,t,"_activateHandler")},_activateEventChanged:function(t,e){this._removeListener(e),this._addListener(t)},_updateItems:function(){var t=gn(this).queryDistributedElements(this.selectable||"*");t=Array.prototype.filter.call(t,this._bindFilterItem),this._setItems(t)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(t){if(this.items){var e=this._valueToItem(this.selected);e?this._selection.select(e):this._selection.clear(),this.fallbackSelection&&this.items.length&&void 0===this._selection.get()&&(this.selected=this.fallbackSelection)}},_filterItem:function(t){return!this._excludedLocalNames[t.localName]},_valueToItem:function(t){return null==t?null:this.items[this._valueToIndex(t)]},_valueToIndex:function(t){if(!this.attrForSelected)return Number(t);for(var e,o=0;e=this.items[o];o++)if(this._valueForItem(e)==t)return o},_indexToValue:function(t){if(!this.attrForSelected)return t;var e=this.items[t];return e?this._valueForItem(e):void 0},_valueForItem:function(t){if(!t)return null;if(!this.attrForSelected){var e=this.indexOf(t);return-1===e?null:e}var o=t[Xt(this.attrForSelected)];return null!=o?o:t.getAttribute(this.attrForSelected)},_applySelection:function(t,e){this.selectedClass&&this.toggleClass(this.selectedClass,e,t),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,e,t),this._selectionChange(),this.fire("iron-"+(e?"select":"deselect"),{item:t})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(t){return gn(t).observeNodes((function(t){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",t,{bubbles:!1,cancelable:!1})}))},_activateHandler:function(t){for(var e=t.target,o=this.items;e&&e!=this;){var n=o.indexOf(e);if(n>=0){var s=this._indexToValue(n);return void this._itemActivate(s,e)}e=e.parentNode}},_itemActivate:function(t,e){this.fire("iron-activate",{selected:t,item:e},{cancelable:!0}).defaultPrevented||this.select(t)}},Ti={properties:{multi:{type:Boolean,value:!1,observer:"multiChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}},selectedItems:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}}},observers:["_updateSelected(selectedValues.splices)"],select:function(t){this.multi?this._toggleSelected(t):this.selected=t},multiChanged:function(t){this._selection.multi=t,this._updateSelected()},get _shouldUpdateSelection(){return null!=this.selected||null!=this.selectedValues&&this.selectedValues.length},_updateAttrForSelected:function(){this.multi?this.selectedItems&&this.selectedItems.length>0&&(this.selectedValues=this.selectedItems.map((function(t){return this._indexToValue(this.indexOf(t))}),this).filter((function(t){return null!=t}),this)):Si._updateAttrForSelected.apply(this)},_updateSelected:function(){this.multi?this._selectMulti(this.selectedValues):this._selectSelected(this.selected)},_selectMulti:function(t){t=t||[];var e=(this._valuesToItems(t)||[]).filter((function(t){return null!=t}));this._selection.clear(e);for(var o=0;o<e.length;o++)this._selection.setItemSelected(e[o],!0);this.fallbackSelection&&!this._selection.get().length&&(this._valueToItem(this.fallbackSelection)&&this.select(this.fallbackSelection))},_selectionChange:function(){var t=this._selection.get();this.multi?(this._setSelectedItems(t),this._setSelectedItem(t.length?t[0]:null)):null!=t?(this._setSelectedItems([t]),this._setSelectedItem(t)):(this._setSelectedItems([]),this._setSelectedItem(null))},_toggleSelected:function(t){var e=this.selectedValues.indexOf(t);e<0?this.push("selectedValues",t):this.splice("selectedValues",e,1)},_valuesToItems:function(t){return null==t?null:t.map((function(t){return this._valueToItem(t)}),this)}},zi={properties:{focusedItem:{observer:"_focusedItemChanged",readOnly:!0,type:Object},attrForItemTitle:{type:String},disabled:{type:Boolean,value:!1,observer:"_disabledChanged"}},_MODIFIER_KEYS:["Alt","AltGraph","CapsLock","Control","Fn","FnLock","Hyper","Meta","NumLock","OS","ScrollLock","Shift","Super","Symbol","SymbolLock"],_SEARCH_RESET_TIMEOUT_MS:1e3,_previousTabIndex:0,hostAttributes:{role:"menu"},observers:["_updateMultiselectable(multi)"],listeners:{focus:"_onFocus",keydown:"_onKeydown","iron-items-changed":"_onIronItemsChanged"},keyBindings:{up:"_onUpKey",down:"_onDownKey",esc:"_onEscKey","shift+tab:keydown":"_onShiftTabDown"},attached:function(){this._resetTabindices()},select:function(t){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null);var e=this._valueToItem(t);e&&e.hasAttribute("disabled")||(this._setFocusedItem(e),Ti.select.apply(this,arguments))},_resetTabindices:function(){var t=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this.items.forEach((function(e){e.setAttribute("tabindex",e===t?"0":"-1"),e.setAttribute("aria-selected",this._selection.isSelected(e))}),this)},_updateMultiselectable:function(t){t?this.setAttribute("aria-multiselectable","true"):this.removeAttribute("aria-multiselectable")},_focusWithKeyboardEvent:function(t){if(-1===this._MODIFIER_KEYS.indexOf(t.key)){this.cancelDebouncer("_clearSearchText");for(var e,o=this._searchText||"",n=(o+=(t.key&&1==t.key.length?t.key:String.fromCharCode(t.keyCode)).toLocaleLowerCase()).length,s=0;e=this.items[s];s++)if(!e.hasAttribute("disabled")){var i=this.attrForItemTitle||"textContent",r=(e[i]||e.getAttribute(i)||"").trim();if(!(r.length<n)&&r.slice(0,n).toLocaleLowerCase()==o){this._setFocusedItem(e);break}}this._searchText=o,this.debounce("_clearSearchText",this._clearSearchText,this._SEARCH_RESET_TIMEOUT_MS)}},_clearSearchText:function(){this._searchText=""},_focusPrevious:function(){for(var t=this.items.length,e=Number(this.indexOf(this.focusedItem)),o=1;o<t+1;o++){var n=this.items[(e-o+t)%t];if(!n.hasAttribute("disabled")){var s=gn(n).getOwnerRoot()||document;if(this._setFocusedItem(n),gn(s).activeElement==n)return}}},_focusNext:function(){for(var t=this.items.length,e=Number(this.indexOf(this.focusedItem)),o=1;o<t+1;o++){var n=this.items[(e+o)%t];if(!n.hasAttribute("disabled")){var s=gn(n).getOwnerRoot()||document;if(this._setFocusedItem(n),gn(s).activeElement==n)return}}},_applySelection:function(t,e){e?t.setAttribute("aria-selected","true"):t.setAttribute("aria-selected","false"),Si._applySelection.apply(this,arguments)},_focusedItemChanged:function(t,e){e&&e.setAttribute("tabindex","-1"),!t||t.hasAttribute("disabled")||this.disabled||(t.setAttribute("tabindex","0"),t.focus())},_onIronItemsChanged:function(t){t.detail.addedNodes.length&&this._resetTabindices()},_onShiftTabDown:function(t){var e=this.getAttribute("tabindex");zi._shiftTabPressed=!0,this._setFocusedItem(null),this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",e),zi._shiftTabPressed=!1}),1)},_onFocus:function(t){if(!zi._shiftTabPressed){var e=gn(t).rootTarget;(e===this||void 0===e.tabIndex||this.isLightDescendant(e))&&(this._defaultFocusAsync=this.async((function(){var t=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this._setFocusedItem(null),t?this._setFocusedItem(t):this.items[0]&&this._focusNext()})))}},_onUpKey:function(t){this._focusPrevious(),t.detail.keyboardEvent.preventDefault()},_onDownKey:function(t){this._focusNext(),t.detail.keyboardEvent.preventDefault()},_onEscKey:function(t){var e=this.focusedItem;e&&e.blur()},_onKeydown:function(t){this.keyboardEventMatchesKeys(t,"up down esc")||this._focusWithKeyboardEvent(t),t.stopPropagation()},_activateHandler:function(t){Si._activateHandler.call(this,t),t.stopPropagation()},_disabledChanged:function(t){t?(this._previousTabIndex=this.hasAttribute("tabindex")?this.tabIndex:0,this.removeAttribute("tabindex")):this.hasAttribute("tabindex")||this.setAttribute("tabindex",this._previousTabIndex)},_shiftTabPressed:!1};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Sn({_template:Xn`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,is:"paper-listbox",behaviors:[[[Si,Ti],Cs,zi]],hostAttributes:{role:"listbox"}});const Ai=t=>`<audio src="${t.src}" `+(t.clipBegin?`clipBegin="${t.clipBegin}s"`:"")+(t.clipEnd?`clipEnd="${t.clipEnd}s"`:"")+`>${t.alt}</audio>`;const Oi=t=>`<audio src="${t.src}" `+(t.clipBegin?`clipBegin="${t.clipBegin}s"`:"")+(t.clipEnd?`clipEnd="${t.clipEnd}s"`:"")+`>${t.alt}</audio>`;const Mi=t=>`<break time="${t.time}s" />`;const Ii=t=>`<emphasis level="${t.level}">`+`${t.text}</emphasis>`;const Pi=t=>`<p>${t.text}</p>`;const Li=t=>`<prosody rate="${t.rate}" pitch="${t.pitch}">`+`${t.text}</prosody>`;const Ni=t=>`<say-as interpret-as="${t["interpret-as"]}">`+`${t.text}</say-as>`;const Di=t=>'<say-as interpret-as="date" '+`format="${t.format}" `+`detail="${t.detail}">`+`${t.text}</say-as>`;const Hi=t=>`<say-as interpret-as="time" format="${t.format}" `+`detail="${t.detail}">${t.text}</say-as>`;const Ri=t=>`<sub alias="${t.alias}">`+`${t.text}</sub>`;var Vi={audio:{getTimelineHtml:t=>`<strong class="audio-description">\n            <img src="./images/audio.png" />\n            ${t.alt}\n            </strong>`,getSsml:Ai,getOuterSsml:t=>Ai(t),getEditor:t=>({html:`\n        <paper-input data-attr="src" always-float-label label="Audio URL"\n          value="${t.src}" auto-validate\n          error-message="Requires a valid URL" pattern="https://.*">\n        </paper-input>\n        <paper-input data-attr="alt" always-float-label\n          label="Description" value="${t.alt}">\n        </paper-input>\n        <paper-input data-attr="clipBegin" always-float-label\n          label="Clip start (s)" auto-validate\n          error-message="Requires a positive time"\n          pattern="[\\d.]*" value="${t.clipBegin||0}">\n        </paper-input>\n        <paper-input data-attr="clipEnd" always-float-label\n          label="Clip end (s)" auto-validate\n          error-message="Requires a positive time"\n          pattern="[\\d.]*" value="${t.clipEnd||0}">\n        </paper-input>\n      `,onOpen:()=>{}})},"audio-library":{getTimelineHtml:t=>`<strong class="audio-description">\n            <img src="./images/library.png" />\n            ${t.alt}\n            </strong>`,getSsml:Oi,getOuterSsml:t=>Oi(t),getEditor:(t,e)=>{const o=e.map(t=>`<option value="${t.sound}">\n`).join("\n");return{html:`\n      <input data-attr="alt" always-float-label\n        label="Search for a sound effect" value="${t.alt}"\n        type="search" list="sound-library"\n        style="border: none; border-bottom: solid 1px black;\n          font-size: 11pt;">\n      </input>\n      <paper-input data-attr="clipBegin" always-float-label\n        label="Clip start (s)" auto-validate\n        error-message="Requires a positive time"\n        pattern="[\\d.]*" value="${t.clipBegin||0}">\n      </paper-input>\n      <paper-input data-attr="clipEnd" always-float-label\n        label="Clip end (s)" auto-validate\n        error-message="Requires a positive time"\n        pattern="[\\d.]*" value="${t.clipEnd||0}">\n      </paper-input>\n      <datalist id="sound-library">\n        ${o}\n      </datalist>\n      `,onOpen:(t,e,o,n)=>{document.getElementById("block-editor-ui").querySelector('input[data-attr="alt"]').addEventListener("input",s=>{const i=s.target.value.toLowerCase(),r=n.filter(t=>t.sound.toLowerCase()===i)[0];r&&(t.data.alt=r.sound,t.data.src=r.url,e.updateTimeline(),e.genAudio(o,e.genSsml(t)))})}}}},break:{getTimelineHtml:()=>'<span class="audio-description">Break</span>',getSsml:Mi,getOuterSsml:t=>`<speak>${Mi(t)}</speak>`,getEditor:()=>({html:"",onOpen:()=>{}})},emphasis:{getTimelineHtml:t=>`<strong class="audio-description">\n            <img src="./images/speaker.png" />\n            ${t.text}\n            </strong>`,getSsml:Ii,getOuterSsml:t=>`<speak>${Ii(t)}</speak>`,getEditor:t=>({html:`\n      <paper-input data-attr="text" always-float-label\n        label="Say something" value="${t.text}">\n      </paper-input>\n      <strong>Emphasis Level</strong>\n      <paper-dropdown-menu data-attr="level" value="${t.level}">\n        <paper-listbox slot="dropdown-content" class="dropdown-content">\n          <paper-item data-value="reduced">Reduced</paper-item>\n          <paper-item data-value="none">None</paper-item>\n          <paper-item data-value="moderate">Moderate</paper-item>\n          <paper-item data-value="strong">Strong</paper-item>\n        </paper-listbox>\n      </paper-dropdown-menu>\n    `,onOpen:()=>{}})},p:{getTimelineHtml:t=>`<span class="audio-description">\n            <img src="./images/mic.png" />\n            ${t.text}\n            </span>`,getSsml:Pi,getOuterSsml:t=>`<speak>${Pi(t)}</speak>`,getEditor:t=>({html:`<paper-input data-attr="text" always-float-label\n        label="Say something" value="${t.text}"></paper-input>`,onOpen:()=>{}})},prosody:{getTimelineHtml:t=>`<span class="audio-description">\n            <img src="./images/dynamic.png" />\n            ${t.text}\n            </span>`,getSsml:Li,getOuterSsml:t=>`<speak>${Li(t)}</speak>`,getEditor:t=>({html:`\n        <paper-input data-attr="text" always-float-label\n          label="Say something" value="${t.text}">\n        </paper-input>\n        <strong>Speech Rate</strong>\n        <paper-dropdown-menu data-attr="rate" value="${t.rate}">\n          <paper-listbox slot="dropdown-content" class="dropdown-content">\n            <paper-item data-value="x-slow">Extra Slow</paper-item>\n            <paper-item data-value="slow">Slow</paper-item>\n            <paper-item data-value="medium">Medium</paper-item>\n            <paper-item data-value="fast">Fast</paper-item>\n            <paper-item data-value="x-fast">Extra Fast</paper-item>\n          </paper-listbox>\n        </paper-dropdown-menu><br>\n        <strong>Pitch</strong>\n        <paper-dropdown-menu data-attr="pitch" value="${t.pitch}">\n          <paper-listbox slot="dropdown-content" class="dropdown-content">\n            <paper-item data-value="x-low">Extra Low</paper-item>\n            <paper-item data-value="low">Low</paper-item>\n            <paper-item data-value="medium">Medium</paper-item>\n            <paper-item data-value="high">High</paper-item>\n            <paper-item data-value="x-high">Extra High</paper-item>\n          </paper-listbox>\n        </paper-dropdown-menu>\n      `,onOpen:()=>{}})},"say-as":{getTimelineHtml:t=>`<span class="audio-description">\n            <img src="./images/say.png"/>\n            ${t.text}\n            (say as ${t["interpret-as"]})\n            </span>`,getSsml:Ni,getOuterSsml:t=>`<speak>${Ni(t)}</speak>`,getEditor:t=>({html:`\n        <paper-input data-attr="text" always-float-label\n          label="Say something" value="${t.text}">\n        </paper-input>\n        <strong>Interpret As</strong>\n        <paper-dropdown-menu data-attr="interpret-as"\n            value="${t["interpret-as"]}">\n          <paper-listbox slot="dropdown-content" class="dropdown-content">\n            <paper-item data-value="cardinal">Cardinal</paper-item>\n            <paper-item data-value="ordinal">Ordinal</paper-item>\n            <paper-item data-value="characters">Characters</paper-item>\n            <paper-item data-value="fraction">Fraction</paper-item>\n            <paper-item data-value="expletive">Expletive</paper-item>\n            <paper-item data-value="unit">Unit</paper-item>\n            <paper-item data-value="verbtaim">Verbatim</paper-item>\n          </paper-listbox>\n        </paper-dropdown-menu>\n      `,onOpen:()=>{}})},"say-as-date":{getTimelineHtml:t=>`<span class="audio-description">\n            <img src="./images/date.png"/>\n            ${t.text}\n            </span>`,getSsml:Di,getOuterSsml:t=>`<speak>${Di(t)}</speak>`,getEditor:t=>({html:`\n        <paper-input data-attr="text" always-float-label\n          label="Date" value="${t.text}">\n        </paper-input>\n        <paper-input data-attr="format" always-float-label\n          label="Date format" value="${t.format}">\n        </paper-input>\n        <strong>Say As</strong>\n        <paper-dropdown-menu data-attr="detail" value="${t.detail}">\n          <paper-listbox slot="dropdown-content" class="dropdown-content">\n            <paper-item data-value="1">\n              The {ordinal day} of {month}, {year}\n            </paper-item>\n            <paper-item data-value="2">\n              {Month} {day}, {year}\n            </paper-item>\n          </paper-listbox>\n        </paper-dropdown-menu>\n\n        <p>Supported format characters are y, m, d for year, month, and day\n          (of the month) respectively\n        </p>\n      `,onOpen:()=>{}})},"say-as-time":{getTimelineHtml:t=>`<span class="audio-description">\n            <img src="./images/time.png" />\n            ${t.text}\n            </span>`,getSsml:Hi,getOuterSsml:t=>`<speak>${Hi(t)}</speak>`,getEditor:t=>({html:`\n        <paper-input data-attr="text" always-float-label\n          label="Time" value="${t.text}">\n        </paper-input>\n        <paper-input data-attr="format" always-float-label\n          label="Time format" value="${t.format}">\n        </paper-input>\n        <strong>Say As</strong>\n        <paper-dropdown-menu data-attr="detail" value="${t.detail}">\n          <paper-listbox slot="dropdown-content" class="dropdown-content">\n            <paper-item data-value="1">24-Hour Time</paper-item>\n            <paper-item data-value="2">12-Hour Time</paper-item>\n          </paper-listbox>\n        </paper-dropdown-menu>\n\n        <p>Supported format characters are h, m, s, Z, 12, 24 for hour,\n          minute, second, time zone, 12-hr, and 24-hr time respectively\n        </p>\n      `,onOpen:()=>{}})},sub:{getTimelineHtml:t=>`<span class="audio-description">\n            <img src="./images/speech.png" />\n            ${t.alias} (${t.text})\n            </span>`,getSsml:Ri,getOuterSsml:t=>`<speak>${Ri(t)}</speak>`,getEditor:t=>({html:`\n        <paper-input data-attr="alias" always-float-label\n          label="Say something" value="${t.alias}">\n        </paper-input>\n        <paper-input data-attr="text" always-float-label\n          label="Shortened" value="${t.text}">\n        </paper-input>`,onOpen:()=>{}})}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Sn({_template:Xn`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`,is:"app-toolbar"}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Sn({_template:Xn`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(t,e){var o=this._resolveSrc(t);o!==this._resolvedSrc&&(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===t||e?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this._resolvedSrc=o,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?'url("'+this.placeholder+'")':""},_transformChanged:function(){var t=this.$.sizedImgDiv.style,e=this.$.placeholder.style;t.backgroundSize=e.backgroundSize=this.sizing,t.backgroundPosition=e.backgroundPosition=this.sizing?this.position:"",t.backgroundRepeat=e.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(t){var e=lt(t,this.$.baseURIAnchor.href);return e.length>=2&&"/"===e[0]&&"/"!==e[1]&&(e=(location.origin||location.protocol+"//"+location.host)+e),e}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Sn({_template:Xn`
    <style include="paper-material-styles">
      :host {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        background-color: var(--paper-card-background-color, var(--primary-background-color));
        border-radius: 2px;

        @apply --paper-font-common-base;
        @apply --paper-card;
      }

      /* IE 10 support for HTML5 hidden attr */
      :host([hidden]), [hidden] {
        display: none !important;
      }

      .header {
        position: relative;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        overflow: hidden;

        @apply --paper-card-header;
      }

      .header iron-image {
        display: block;
        width: 100%;
        --iron-image-width: 100%;
        pointer-events: none;

        @apply --paper-card-header-image;
      }

      .header .title-text {
        padding: 16px;
        font-size: 24px;
        font-weight: 400;
        color: var(--paper-card-header-color, #000);

        @apply --paper-card-header-text;
      }

      .header .title-text.over-image {
        position: absolute;
        bottom: 0px;

        @apply --paper-card-header-image-text;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
        position:relative;

        @apply --paper-card-content;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
        position:relative;

        @apply --paper-card-actions;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>

    <div class="header">
      <iron-image hidden\$="[[!image]]" aria-hidden\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>
      <div hidden\$="[[!heading]]" class\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>
    </div>

    <slot></slot>
`,is:"paper-card",properties:{heading:{type:String,value:"",observer:"_headingChanged"},image:{type:String,value:""},alt:{type:String},preloadImage:{type:Boolean,value:!1},fadeImage:{type:Boolean,value:!1},placeholderImage:{type:String,value:null},elevation:{type:Number,value:1,reflectToAttribute:!0},animatedShadow:{type:Boolean,value:!1},animated:{type:Boolean,reflectToAttribute:!0,readOnly:!0,computed:"_computeAnimated(animatedShadow)"}},_isHidden:function(t){return t?"false":"true"},_headingChanged:function(t){var e=this.getAttribute("heading"),o=this.getAttribute("aria-label");"string"==typeof o&&o!==e||this.setAttribute("aria-label",t)},_computeHeadingClass:function(t){return t?" over-image":""},_computeAnimated:function(t){return t}});
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Bi=Xn`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(Bi.content),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Sn({_template:Xn`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:"paper-item-body"});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var Fi=null;Sn({_template:Xn`
    <style>
      :host {
        display: block;
        position: fixed;
        background-color: var(--paper-toast-background-color, #323232);
        color: var(--paper-toast-color, #f1f1f1);
        min-height: 48px;
        min-width: 288px;
        padding: 16px 24px;
        box-sizing: border-box;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        border-radius: 2px;
        margin: 12px;
        font-size: 14px;
        cursor: default;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
        transition: transform 0.3s, opacity 0.3s;
        opacity: 0;
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
        @apply --paper-font-common-base;
      }

      :host(.capsule) {
        border-radius: 24px;
      }

      :host(.fit-bottom) {
        width: 100%;
        min-width: 0;
        border-radius: 0;
        margin: 0;
      }

      :host(.paper-toast-open) {
        opacity: 1;
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
      }
    </style>

    <span id="label">{{text}}</span>
    <slot></slot>
`,is:"paper-toast",behaviors:[gi],properties:{fitInto:{type:Object,value:window,observer:"_onFitIntoChanged"},horizontalAlign:{type:String,value:"left"},verticalAlign:{type:String,value:"bottom"},duration:{type:Number,value:3e3},text:{type:String,value:""},noCancelOnOutsideClick:{type:Boolean,value:!0},noAutoFocus:{type:Boolean,value:!0}},listeners:{transitionend:"__onTransitionEnd"},get visible(){return rs._warn("`visible` is deprecated, use `opened` instead"),this.opened},get _canAutoClose(){return this.duration>0&&this.duration!==1/0},created:function(){this._autoClose=null,Ds.requestAvailability()},show:function(t){for(var e in"string"==typeof t&&(t={text:t}),t)0===e.indexOf("_")?rs._warn('The property "'+e+'" is private and was not set.'):e in this?this[e]=t[e]:rs._warn('The property "'+e+'" is not valid.');this.open()},hide:function(){this.close()},__onTransitionEnd:function(t){t&&t.target===this&&"opacity"===t.propertyName&&(this.opened?this._finishRenderOpened():this._finishRenderClosed())},_openedChanged:function(){null!==this._autoClose&&(this.cancelAsync(this._autoClose),this._autoClose=null),this.opened?(Fi&&Fi!==this&&Fi.close(),Fi=this,this.fire("iron-announce",{text:this.text}),this._canAutoClose&&(this._autoClose=this.async(this.close,this.duration))):Fi===this&&(Fi=null),hi._openedChanged.apply(this,arguments)},_renderOpened:function(){this.classList.add("paper-toast-open")},_renderClosed:function(){this.classList.remove("paper-toast-open")},_onFitIntoChanged:function(t){this.positionTarget=t}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Sn({_template:Xn`
    <style>
      :host {
        --calculated-paper-toolbar-height: var(--paper-toolbar-height, 64px);
        --calculated-paper-toolbar-sm-height: var(--paper-toolbar-sm-height, 56px);
        display: block;
        position: relative;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        height: var(--calculated-paper-toolbar-height);
        background: var(--paper-toolbar-background, var(--primary-color));
        color: var(--paper-toolbar-color, var(--dark-theme-text-color));
        @apply --paper-toolbar;
      }

      :host(.animate) {
        transition: var(--paper-toolbar-transition, height 0.18s ease-in);
      }

      :host(.medium-tall) {
        height: calc(var(--calculated-paper-toolbar-height) * 2);
        @apply --paper-toolbar-medium;
      }

      :host(.tall) {
        height: calc(var(--calculated-paper-toolbar-height) * 3);
        @apply --paper-toolbar-tall;
      }

      .toolbar-tools {
        position: relative;
        height: var(--calculated-paper-toolbar-height);
        padding: 0 16px;
        pointer-events: none;
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-toolbar-content;
      }

      /*
       * TODO: Where should media query breakpoints live so they can be shared between elements?
       */

      @media (max-width: 600px) {
        :host {
          height: var(--calculated-paper-toolbar-sm-height);
        }

        :host(.medium-tall) {
          height: calc(var(--calculated-paper-toolbar-sm-height) * 2);
        }

        :host(.tall) {
          height: calc(var(--calculated-paper-toolbar-sm-height) * 3);
        }

        .toolbar-tools {
          height: var(--calculated-paper-toolbar-sm-height);
        }
      }

      #topBar {
        position: relative;
      }

      /* middle bar */
      #middleBar {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host(.tall) #middleBar,
      :host(.medium-tall) #middleBar {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
      }

      /* bottom bar */
      #bottomBar {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      /*
       * make elements (e.g. buttons) respond to mouse/touch events
       *
       * \`.toolbar-tools\` disables touch events so multiple toolbars can stack and not
       * absorb events. All children must have pointer events re-enabled to work as
       * expected.
       */
      .toolbar-tools > ::slotted(*:not([disabled])) {
        pointer-events: auto;
      }

      .toolbar-tools > ::slotted(.title) {
        @apply --paper-font-common-base;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 20px;
        font-weight: 400;
        line-height: 1;
        pointer-events: none;
        @apply --layout-flex;
      }

      .toolbar-tools > ::slotted(.title) {
        margin-left: 56px;
      }

      .toolbar-tools > ::slotted(paper-icon-button + .title) {
        margin-left: 0;
      }

      /**
       * The --paper-toolbar-title mixin is applied here instead of above to
       * fix the issue with margin-left being ignored due to css ordering.
       */
      .toolbar-tools > ::slotted(.title) {
        @apply --paper-toolbar-title;
      }

      .toolbar-tools > ::slotted(paper-icon-button[icon=menu]) {
        margin-right: 24px;
      }

      .toolbar-tools > ::slotted(.fit) {
        position: absolute;
        top: auto;
        right: 0;
        bottom: 0;
        left: 0;
        width: auto;
        margin: 0;
      }

      /* TODO(noms): Until we have a better solution for classes that don't use
       * /deep/ create our own.
       */
      .start-justified {
        @apply --layout-start-justified;
      }

      .center-justified {
        @apply --layout-center-justified;
      }

      .end-justified {
        @apply --layout-end-justified;
      }

      .around-justified {
        @apply --layout-around-justified;
      }

      .justified {
        @apply --layout-justified;
      }
    </style>

    <div id="topBar" class\$="toolbar-tools [[_computeBarExtraClasses(justify)]]">
      <slot name="top"></slot>
    </div>

    <div id="middleBar" class\$="toolbar-tools [[_computeBarExtraClasses(middleJustify)]]">
      <slot name="middle"></slot>
    </div>

    <div id="bottomBar" class\$="toolbar-tools [[_computeBarExtraClasses(bottomJustify)]]">
      <slot name="bottom"></slot>
    </div>
`,is:"paper-toolbar",hostAttributes:{role:"toolbar"},properties:{bottomJustify:{type:String,value:""},justify:{type:String,value:""},middleJustify:{type:String,value:""}},ready:function(){console.warn(this.is,"is deprecated. Please use app-layout instead!")},attached:function(){this._observer=this._observe(this),this._updateAriaLabelledBy()},detached:function(){this._observer&&this._observer.disconnect()},_observe:function(t){var e=new MutationObserver(function(){this._updateAriaLabelledBy()}.bind(this));return e.observe(t,{childList:!0,subtree:!0}),e},_updateAriaLabelledBy:function(){rn();for(var t,e=[],o=Array.prototype.slice.call(gn(this.root).querySelectorAll("slot")).concat(Array.prototype.slice.call(gn(this.root).querySelectorAll("content"))),n=0;t=o[n];n++)for(var s,i=gn(t).getDistributedNodes(),r=0;s=i[r];r++)if(s.classList&&s.classList.contains("title"))if(s.id)e.push(s.id);else{var a="paper-toolbar-label-"+Math.floor(1e4*Math.random());s.id=a,e.push(a)}e.length>0&&this.setAttribute("aria-labelledby",e.join(" "))},_computeBarExtraClasses:function(t){return t?t+("justified"===t?"":"-justified"):""}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ji={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(t){t&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=t)},_createRipple:function(){var t=Os._createRipple();return t.id="ink",t.setAttribute("center",""),t.classList.add("circle"),t}},$i=[Ss,ds,Os,ji];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Sn({is:"paper-icon-button",_template:Xn`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /*
          NOTE: Both values are needed, since some phones require the value to
          be \`transparent\`.
        */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"
               alt$="[[alt]]"></iron-icon>
  `,hostAttributes:{role:"button",tabindex:"0"},behaviors:[$i],registered:function(){this._template.setAttribute("strip-whitespace","")},properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(t,e){var o=this.getAttribute("aria-label");o&&e!=o||this.setAttribute("aria-label",t)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Ui={properties:{value:{type:Number,value:0,notify:!0,reflectToAttribute:!0},min:{type:Number,value:0,notify:!0},max:{type:Number,value:100,notify:!0},step:{type:Number,value:1,notify:!0},ratio:{type:Number,value:0,readOnly:!0,notify:!0}},observers:["_update(value, min, max, step)"],_calcRatio:function(t){return(this._clampValue(t)-this.min)/(this.max-this.min)},_clampValue:function(t){return Math.min(this.max,Math.max(this.min,this._calcStep(t)))},_calcStep:function(t){if(t=parseFloat(t),!this.step)return t;var e=Math.round((t-this.min)/this.step);return this.step<1?e/(1/this.step)+this.min:e*this.step+this.min},_validateValue:function(){var t=this._clampValue(this.value);return this.value=this.oldValue=isNaN(t)?this.oldValue:t,this.value!==t},_update:function(){this._validateValue(),this._setRatio(100*this._calcRatio(this.value))}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Sn({_template:Xn`
    <style>
      :host {
        display: block;
        width: 200px;
        position: relative;
        overflow: hidden;
      }

      :host([hidden]), [hidden] {
        display: none !important;
      }

      #progressContainer {
        @apply --paper-progress-container;
        position: relative;
      }

      #progressContainer,
      /* the stripe for the indeterminate animation*/
      .indeterminate::after {
        height: var(--paper-progress-height, 4px);
      }

      #primaryProgress,
      #secondaryProgress,
      .indeterminate::after {
        @apply --layout-fit;
      }

      #progressContainer,
      .indeterminate::after {
        background: var(--paper-progress-container-color, var(--google-grey-300));
      }

      :host(.transiting) #primaryProgress,
      :host(.transiting) #secondaryProgress {
        -webkit-transition-property: -webkit-transform;
        transition-property: transform;

        /* Duration */
        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);
        transition-duration: var(--paper-progress-transition-duration, 0.08s);

        /* Timing function */
        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);
        transition-timing-function: var(--paper-progress-transition-timing-function, ease);

        /* Delay */
        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);
        transition-delay: var(--paper-progress-transition-delay, 0s);
      }

      #primaryProgress,
      #secondaryProgress {
        @apply --layout-fit;
        -webkit-transform-origin: left center;
        transform-origin: left center;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        will-change: transform;
      }

      #primaryProgress {
        background: var(--paper-progress-active-color, var(--google-green-500));
      }

      #secondaryProgress {
        background: var(--paper-progress-secondary-color, var(--google-green-100));
      }

      :host([disabled]) #primaryProgress {
        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));
      }

      :host([disabled]) #secondaryProgress {
        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));
      }

      :host(:not([disabled])) #primaryProgress.indeterminate {
        -webkit-transform-origin: right center;
        transform-origin: right center;
        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      :host(:not([disabled])) #primaryProgress.indeterminate::after {
        content: "";
        -webkit-transform-origin: center center;
        transform-origin: center center;

        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      @-webkit-keyframes indeterminate-bar {
        0% {
          -webkit-transform: scaleX(1) translateX(-100%);
        }
        50% {
          -webkit-transform: scaleX(1) translateX(0%);
        }
        75% {
          -webkit-transform: scaleX(1) translateX(0%);
          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          -webkit-transform: scaleX(0) translateX(0%);
        }
      }

      @-webkit-keyframes indeterminate-splitter {
        0% {
          -webkit-transform: scaleX(.75) translateX(-125%);
        }
        30% {
          -webkit-transform: scaleX(.75) translateX(-125%);
          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
        100% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
      }

      @keyframes indeterminate-bar {
        0% {
          transform: scaleX(1) translateX(-100%);
        }
        50% {
          transform: scaleX(1) translateX(0%);
        }
        75% {
          transform: scaleX(1) translateX(0%);
          animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          transform: scaleX(0) translateX(0%);
        }
      }

      @keyframes indeterminate-splitter {
        0% {
          transform: scaleX(.75) translateX(-125%);
        }
        30% {
          transform: scaleX(.75) translateX(-125%);
          animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          transform: scaleX(.75) translateX(125%);
        }
        100% {
          transform: scaleX(.75) translateX(125%);
        }
      }
    </style>

    <div id="progressContainer">
      <div id="secondaryProgress" hidden\$="[[_hideSecondaryProgress(secondaryRatio)]]"></div>
      <div id="primaryProgress"></div>
    </div>
`,is:"paper-progress",behaviors:[Ui],properties:{secondaryProgress:{type:Number,value:0},secondaryRatio:{type:Number,value:0,readOnly:!0},indeterminate:{type:Boolean,value:!1,observer:"_toggleIndeterminate"},disabled:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function(t){this.toggleClass("indeterminate",t,this.$.primaryProgress)},_transformProgress:function(t,e){var o="scaleX("+e/100+")";t.style.transform=t.style.webkitTransform=o},_mainRatioChanged:function(t){this._transformProgress(this.$.primaryProgress,t)},_progressChanged:function(t,e,o,n,s){t=this._clampValue(t),e=this._clampValue(e);var i=100*this._calcRatio(t),r=100*this._calcRatio(e);this._setSecondaryRatio(i),this._transformProgress(this.$.secondaryProgress,i),this._transformProgress(this.$.primaryProgress,r),this.secondaryProgress=t,s?this.removeAttribute("aria-valuenow"):this.setAttribute("aria-valuenow",e),this.setAttribute("aria-valuemin",o),this.setAttribute("aria-valuemax",n)},_disabledChanged:function(t){this.setAttribute("aria-disabled",t?"true":"false")},_hideSecondaryProgress:function(t){return 0===t}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const qi=Xn`
  <style>
    :host {
      @apply --layout;
      @apply --layout-justified;
      @apply --layout-center;
      width: 200px;
      cursor: default;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      --paper-progress-active-color: var(--paper-slider-active-color, var(--google-blue-700));
      --paper-progress-secondary-color: var(--paper-slider-secondary-color, var(--google-blue-300));
      --paper-progress-disabled-active-color: var(--paper-slider-disabled-active-color, var(--paper-grey-400));
      --paper-progress-disabled-secondary-color: var(--paper-slider-disabled-secondary-color, var(--paper-grey-400));
      --calculated-paper-slider-height: var(--paper-slider-height, 2px);
    }

    /* focus shows the ripple */
    :host(:focus) {
      outline: none;
    }

    /**
      * NOTE(keanulee): Though :host-context is not universally supported, some pages
      * still rely on paper-slider being flipped when dir="rtl" is set on body. For full
      * compatibility, dir="rtl" must be explicitly set on paper-slider.
      */
    :dir(rtl) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): This is separate from the rule above because :host-context may
      * not be recognized.
      */
    :host([dir="rtl"]) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): Needed to override the :host-context rule (where supported)
      * to support LTR sliders in RTL pages.
      */
    :host([dir="ltr"]) #sliderContainer {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }

    #sliderContainer {
      position: relative;
      width: 100%;
      height: calc(30px + var(--calculated-paper-slider-height));
      margin-left: calc(15px + var(--calculated-paper-slider-height)/2);
      margin-right: calc(15px + var(--calculated-paper-slider-height)/2);
    }

    #sliderContainer:focus {
      outline: 0;
    }

    #sliderContainer.editable {
      margin-top: 12px;
      margin-bottom: 12px;
    }

    .bar-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }

    .ring > .bar-container {
      left: calc(5px + var(--calculated-paper-slider-height)/2);
      transition: left 0.18s ease;
    }

    .ring.expand.dragging > .bar-container {
      transition: none;
    }

    .ring.expand:not(.pin) > .bar-container {
      left: calc(8px + var(--calculated-paper-slider-height)/2);
    }

    #sliderBar {
      padding: 15px 0;
      width: 100%;
      background-color: var(--paper-slider-bar-color, transparent);
      --paper-progress-container-color: var(--paper-slider-container-color, var(--paper-grey-400));
      --paper-progress-height: var(--calculated-paper-slider-height);
    }

    .slider-markers {
      position: absolute;
      /* slider-knob is 30px + the slider-height so that the markers should start at a offset of 15px*/
      top: 15px;
      height: var(--calculated-paper-slider-height);
      left: 0;
      right: -1px;
      box-sizing: border-box;
      pointer-events: none;
      @apply --layout-horizontal;
    }

    .slider-marker {
      @apply --layout-flex;
    }
    .slider-markers::after,
    .slider-marker::after {
      content: "";
      display: block;
      margin-left: -1px;
      width: 2px;
      height: var(--calculated-paper-slider-height);
      border-radius: 50%;
      background-color: var(--paper-slider-markers-color, #000);
    }

    .slider-knob {
      position: absolute;
      left: 0;
      top: 0;
      margin-left: calc(-15px - var(--calculated-paper-slider-height)/2);
      width: calc(30px + var(--calculated-paper-slider-height));
      height: calc(30px + var(--calculated-paper-slider-height));
    }

    .transiting > .slider-knob {
      transition: left 0.08s ease;
    }

    .slider-knob:focus {
      outline: none;
    }

    .slider-knob.dragging {
      transition: none;
    }

    .snaps > .slider-knob.dragging {
      transition: -webkit-transform 0.08s ease;
      transition: transform 0.08s ease;
    }

    .slider-knob-inner {
      margin: 10px;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      background-color: var(--paper-slider-knob-color, var(--google-blue-700));
      border: 2px solid var(--paper-slider-knob-color, var(--google-blue-700));
      border-radius: 50%;

      -moz-box-sizing: border-box;
      box-sizing: border-box;

      transition-property: -webkit-transform, background-color, border;
      transition-property: transform, background-color, border;
      transition-duration: 0.18s;
      transition-timing-function: ease;
    }

    .expand:not(.pin) > .slider-knob > .slider-knob-inner {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }

    .ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-color, var(--google-blue-700));
    }

    .pin > .slider-knob > .slider-knob-inner::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -13px;
      width: 26px;
      height: 26px;
      border-radius: 50% 50% 50% 0;

      -webkit-transform: rotate(-45deg) scale(0) translate(0);
      transform: rotate(-45deg) scale(0) translate(0);
    }

    .slider-knob-inner::before,
    .slider-knob-inner::after {
      transition: -webkit-transform .18s ease, background-color .18s ease;
      transition: transform .18s ease, background-color .18s ease;
    }

    .pin.ring > .slider-knob > .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-start-color, var(--paper-grey-400));
    }

    .pin.expand > .slider-knob > .slider-knob-inner::before {
      -webkit-transform: rotate(-45deg) scale(1) translate(17px, -17px);
      transform: rotate(-45deg) scale(1) translate(17px, -17px);
    }

    .pin > .slider-knob > .slider-knob-inner::after {
      content: attr(value);
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -16px;
      width: 32px;
      height: 26px;
      text-align: center;
      color: var(--paper-slider-font-color, #fff);
      font-size: 10px;

      -webkit-transform: scale(0) translate(0);
      transform: scale(0) translate(0);
    }

    .pin.expand > .slider-knob > .slider-knob-inner::after {
      -webkit-transform: scale(1) translate(0, -17px);
      transform: scale(1) translate(0, -17px);
    }

    /* paper-input */
    .slider-input {
      width: 50px;
      overflow: hidden;
      --paper-input-container-input: {
        text-align: center;
        @apply --paper-slider-input-container-input;
      };
      @apply --paper-slider-input;
    }

    /* disabled state */
    #sliderContainer.disabled {
      pointer-events: none;
    }

    .disabled > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      -webkit-transform: scale3d(0.75, 0.75, 1);
      transform: scale3d(0.75, 0.75, 1);
    }

    .disabled.ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    paper-ripple {
      color: var(--paper-slider-knob-color, var(--google-blue-700));
    }
  </style>

  <div id="sliderContainer" class\$="[[_getClassNames(disabled, pin, snaps, immediateValue, min, expand, dragging, transiting, editable)]]">
    <div class="bar-container">
      <paper-progress disabled\$="[[disabled]]" id="sliderBar" aria-hidden="true" min="[[min]]" max="[[max]]" step="[[step]]" value="[[immediateValue]]" secondary-progress="[[secondaryProgress]]" on-down="_bardown" on-up="_resetKnob" on-track="_bartrack" on-tap="_barclick">
      </paper-progress>
    </div>

    <template is="dom-if" if="[[snaps]]">
      <div class="slider-markers">
        <template is="dom-repeat" items="[[markers]]">
          <div class="slider-marker"></div>
        </template>
      </div>
    </template>

    <div id="sliderKnob" class="slider-knob" on-down="_knobdown" on-up="_resetKnob" on-track="_onTrack" on-transitionend="_knobTransitionEnd">
        <div class="slider-knob-inner" value\$="[[immediateValue]]"></div>
    </div>
  </div>

  <template is="dom-if" if="[[editable]]">
    <paper-input id="input" type="number" step="[[step]]" min="[[min]]" max="[[max]]" class="slider-input" disabled\$="[[disabled]]" value="[[immediateValue]]" on-change="_changeValue" on-keydown="_inputKeyDown" no-label-float>
    </paper-input>
  </template>
`;qi.setAttribute("strip-whitespace",""),Sn({_template:qi,is:"paper-slider",behaviors:[Cs,Us,$i,Ui],properties:{value:{type:Number,value:0},snaps:{type:Boolean,value:!1,notify:!0},pin:{type:Boolean,value:!1,notify:!0},secondaryProgress:{type:Number,value:0,notify:!0,observer:"_secondaryProgressChanged"},editable:{type:Boolean,value:!1},immediateValue:{type:Number,value:0,readOnly:!0,notify:!0},maxMarkers:{type:Number,value:0,notify:!0},expand:{type:Boolean,value:!1,readOnly:!0},ignoreBarTouch:{type:Boolean,value:!1},dragging:{type:Boolean,value:!1,readOnly:!0,notify:!0},transiting:{type:Boolean,value:!1,readOnly:!0},markers:{type:Array,readOnly:!0,value:function(){return[]}}},observers:["_updateKnob(value, min, max, snaps, step)","_valueChanged(value)","_immediateValueChanged(immediateValue)","_updateMarkers(maxMarkers, min, max, snaps)"],hostAttributes:{role:"slider",tabindex:0},keyBindings:{left:"_leftKey",right:"_rightKey","down pagedown home":"_decrementKey","up pageup end":"_incrementKey"},ready:function(){this.ignoreBarTouch&&Io(this.$.sliderBar,"auto")},increment:function(){this.value=this._clampValue(this.value+this.step)},decrement:function(){this.value=this._clampValue(this.value-this.step)},_updateKnob:function(t,e,o,n,s){this.setAttribute("aria-valuemin",e),this.setAttribute("aria-valuemax",o),this.setAttribute("aria-valuenow",t),this._positionKnob(100*this._calcRatio(t))},_valueChanged:function(){this.fire("value-change",{composed:!0})},_immediateValueChanged:function(){this.dragging?this.fire("immediate-value-change",{composed:!0}):this.value=this.immediateValue},_secondaryProgressChanged:function(){this.secondaryProgress=this._clampValue(this.secondaryProgress)},_expandKnob:function(){this._setExpand(!0)},_resetKnob:function(){this.cancelDebouncer("expandKnob"),this._setExpand(!1)},_positionKnob:function(t){this._setImmediateValue(this._calcStep(this._calcKnobPosition(t))),this._setRatio(100*this._calcRatio(this.immediateValue)),this.$.sliderKnob.style.left=this.ratio+"%",this.dragging&&(this._knobstartx=this.ratio*this._w/100,this.translate3d(0,0,0,this.$.sliderKnob))},_calcKnobPosition:function(t){return(this.max-this.min)*t/100+this.min},_onTrack:function(t){switch(t.stopPropagation(),t.detail.state){case"start":this._trackStart(t);break;case"track":this._trackX(t);break;case"end":this._trackEnd()}},_trackStart:function(t){this._setTransiting(!1),this._w=this.$.sliderBar.offsetWidth,this._x=this.ratio*this._w/100,this._startx=this._x,this._knobstartx=this._startx,this._minx=-this._startx,this._maxx=this._w-this._startx,this.$.sliderKnob.classList.add("dragging"),this._setDragging(!0)},_trackX:function(t){this.dragging||this._trackStart(t);var e=this._isRTL?-1:1,o=Math.min(this._maxx,Math.max(this._minx,t.detail.dx*e));this._x=this._startx+o;var n=this._calcStep(this._calcKnobPosition(this._x/this._w*100));this._setImmediateValue(n);var s=this._calcRatio(this.immediateValue)*this._w-this._knobstartx;this.translate3d(s+"px",0,0,this.$.sliderKnob)},_trackEnd:function(){var t=this.$.sliderKnob.style;this.$.sliderKnob.classList.remove("dragging"),this._setDragging(!1),this._resetKnob(),this.value=this.immediateValue,t.transform=t.webkitTransform="",this.fire("change",{composed:!0})},_knobdown:function(t){this._expandKnob(),t.preventDefault(),this.focus()},_bartrack:function(t){this._allowBarEvent(t)&&this._onTrack(t)},_barclick:function(t){this._w=this.$.sliderBar.offsetWidth;var e=this.$.sliderBar.getBoundingClientRect(),o=(t.detail.x-e.left)/this._w*100;this._isRTL&&(o=100-o);var n=this.ratio;this._setTransiting(!0),this._positionKnob(o),n===this.ratio&&this._setTransiting(!1),this.async((function(){this.fire("change",{composed:!0})})),t.preventDefault(),this.focus()},_bardown:function(t){this._allowBarEvent(t)&&(this.debounce("expandKnob",this._expandKnob,60),this._barclick(t))},_knobTransitionEnd:function(t){t.target===this.$.sliderKnob&&this._setTransiting(!1)},_updateMarkers:function(t,e,o,n){n||this._setMarkers([]);var s=Math.round((o-e)/this.step);s>t&&(s=t),(s<0||!isFinite(s))&&(s=0),this._setMarkers(new Array(s))},_mergeClasses:function(t){return Object.keys(t).filter((function(e){return t[e]})).join(" ")},_getClassNames:function(){return this._mergeClasses({disabled:this.disabled,pin:this.pin,snaps:this.snaps,ring:this.immediateValue<=this.min,expand:this.expand,dragging:this.dragging,transiting:this.transiting,editable:this.editable})},_allowBarEvent:function(t){return!this.ignoreBarTouch||t.detail.sourceEvent instanceof MouseEvent},get _isRTL(){return void 0===this.__isRTL&&(this.__isRTL="rtl"===window.getComputedStyle(this).direction),this.__isRTL},_leftKey:function(t){this._isRTL?this._incrementKey(t):this._decrementKey(t)},_rightKey:function(t){this._isRTL?this._decrementKey(t):this._incrementKey(t)},_incrementKey:function(t){this.disabled||("end"===t.detail.key?this.value=this.max:this.increment(),this.fire("change"),t.preventDefault())},_decrementKey:function(t){this.disabled||("home"===t.detail.key?this.value=this.min:this.decrement(),this.fire("change"),t.preventDefault())},_changeValue:function(t){this.value=t.target.value,this.fire("change",{composed:!0})},_inputKeyDown:function(t){t.stopPropagation()},_createRipple:function(){return this._rippleContainer=this.$.sliderKnob,ji._createRipple.call(this)},_focusedChanged:function(t){t&&this.ensureRipple(),this.hasRipple()&&(this._ripple.style.display=t?"":"none",this._ripple.holdDown=t)}});var Ki=[{sound:"alarm clock",url:"https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"},{sound:"assorted computer sounds",url:"https://actions.google.com/sounds/v1/alarms/assorted_computer_sounds.ogg"},{sound:"beep short",url:"https://actions.google.com/sounds/v1/alarms/beep_short.ogg"},{sound:"bugle tune",url:"https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg"},{sound:"digital watch alarm long",url:"https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg"},{sound:"dinner bell triangle",url:"https://actions.google.com/sounds/v1/alarms/dinner_bell_triangle.ogg"},{sound:"dosimeter alarm",url:"https://actions.google.com/sounds/v1/alarms/dosimeter_alarm.ogg"},{sound:"mechanical clock ring",url:"https://actions.google.com/sounds/v1/alarms/mechanical_clock_ring.ogg"},{sound:"medium bell ringing near",url:"https://actions.google.com/sounds/v1/alarms/medium_bell_ringing_near.ogg"},{sound:"phone alerts and rings",url:"https://actions.google.com/sounds/v1/alarms/phone_alerts_and_rings.ogg"},{sound:"radiation meter",url:"https://actions.google.com/sounds/v1/alarms/radiation_meter.ogg"},{sound:"setting alarm clock",url:"https://actions.google.com/sounds/v1/alarms/setting_alarm_clock.ogg"},{sound:"spaceship alarm",url:"https://actions.google.com/sounds/v1/alarms/spaceship_alarm.ogg"},{sound:"winding alarm clock",url:"https://actions.google.com/sounds/v1/alarms/winding_alarm_clock.ogg"},{sound:"ambient hum air conditioner",url:"https://actions.google.com/sounds/v1/ambiences/ambient_hum_air_conditioner.ogg"},{sound:"arcade room",url:"https://actions.google.com/sounds/v1/ambiences/arcade_room.ogg"},{sound:"barnyard with animals",url:"https://actions.google.com/sounds/v1/ambiences/barnyard_with_animals.ogg"},{sound:"carnival atmosphere",url:"https://actions.google.com/sounds/v1/ambiences/carnival_atmosphere.ogg"},{sound:"children group ambience",url:"https://actions.google.com/sounds/v1/ambiences/children_group_ambience.ogg"},{sound:"coffee shop",url:"https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg"},{sound:"convention hall ambience noise",url:"https://actions.google.com/sounds/v1/ambiences/convention_hall_ambience_noise.ogg"},{sound:"crickets with distant traffic",url:"https://actions.google.com/sounds/v1/ambiences/crickets_with_distant_traffic.ogg"},{sound:"dmv background noise",url:"https://actions.google.com/sounds/v1/ambiences/dmv_background_noise.ogg"},{sound:"daytime forrest bonfire",url:"https://actions.google.com/sounds/v1/ambiences/daytime_forrest_bonfire.ogg"},{sound:"distant highway",url:"https://actions.google.com/sounds/v1/ambiences/distant_highway.ogg"},{sound:"factory background",url:"https://actions.google.com/sounds/v1/ambiences/factory_background.ogg"},{sound:"factory manufacture background",url:"https://actions.google.com/sounds/v1/ambiences/factory_manufacture_background.ogg"},{sound:"factory morning start up",url:"https://actions.google.com/sounds/v1/ambiences/factory_morning_start_up.ogg"},{sound:"factory sounds",url:"https://actions.google.com/sounds/v1/ambiences/factory_sounds.ogg"},{sound:"farm morning with sheep",url:"https://actions.google.com/sounds/v1/ambiences/farm_morning_with_sheep.ogg"},{sound:"fire",url:"https://actions.google.com/sounds/v1/ambiences/fire.ogg"},{sound:"highway near waterfront",url:"https://actions.google.com/sounds/v1/ambiences/highway_near_waterfront.ogg"},{sound:"highway near waterfront distant",url:"https://actions.google.com/sounds/v1/ambiences/highway_near_waterfront_distant.ogg"},{sound:"inside barn with chickens",url:"https://actions.google.com/sounds/v1/ambiences/inside_barn_with_chickens.ogg"},{sound:"july night",url:"https://actions.google.com/sounds/v1/ambiences/july_night.ogg"},{sound:"jungle atmosphere afternoon",url:"https://actions.google.com/sounds/v1/ambiences/jungle_atmosphere_afternoon.ogg"},{sound:"jungle atmosphere late night",url:"https://actions.google.com/sounds/v1/ambiences/jungle_atmosphere_late_night.ogg"},{sound:"jungle atmosphere morning",url:"https://actions.google.com/sounds/v1/ambiences/jungle_atmosphere_morning.ogg"},{sound:"jungle atmosphere night",url:"https://actions.google.com/sounds/v1/ambiences/jungle_atmosphere_night.ogg"},{sound:"kids playing",url:"https://actions.google.com/sounds/v1/ambiences/kids_playing.ogg"},{sound:"kids playing at night",url:"https://actions.google.com/sounds/v1/ambiences/kids_playing_at_night.ogg"},{sound:"laundromat sounds",url:"https://actions.google.com/sounds/v1/ambiences/laundromat_sounds.ogg"},{sound:"morning farm",url:"https://actions.google.com/sounds/v1/ambiences/morning_farm.ogg"},{sound:"morning highway in distance",url:"https://actions.google.com/sounds/v1/ambiences/morning_highway_in_distance.ogg"},{sound:"outdoor ambience dog barking",url:"https://actions.google.com/sounds/v1/ambiences/outdoor_ambience_dog_barking.ogg"},{sound:"outdoor farm sounds",url:"https://actions.google.com/sounds/v1/ambiences/outdoor_farm_sounds.ogg"},{sound:"outdoor sounds farm traffic",url:"https://actions.google.com/sounds/v1/ambiences/outdoor_sounds_farm_traffic.ogg"},{sound:"outdoor sounds with dog",url:"https://actions.google.com/sounds/v1/ambiences/outdoor_sounds_with_dog.ogg"},{sound:"outdoor sounds with whirr",url:"https://actions.google.com/sounds/v1/ambiences/outdoor_sounds_with_whirr.ogg"},{sound:"outdoor suburb ambience",url:"https://actions.google.com/sounds/v1/ambiences/outdoor_suburb_ambience.ogg"},{sound:"outdoor summer ambience",url:"https://actions.google.com/sounds/v1/ambiences/outdoor_summer_ambience.ogg"},{sound:"outside night",url:"https://actions.google.com/sounds/v1/ambiences/outside_night.ogg"},{sound:"retail background noises",url:"https://actions.google.com/sounds/v1/ambiences/retail_background_noises.ogg"},{sound:"small outdoor marketplace",url:"https://actions.google.com/sounds/v1/ambiences/small_outdoor_marketplace.ogg"},{sound:"spring day forest",url:"https://actions.google.com/sounds/v1/ambiences/spring_day_forest.ogg"},{sound:"subway station nyc",url:"https://actions.google.com/sounds/v1/ambiences/subway_station_nyc.ogg"},{sound:"summer beach parking lot",url:"https://actions.google.com/sounds/v1/ambiences/summer_beach_parking_lot.ogg"},{sound:"summer forest",url:"https://actions.google.com/sounds/v1/ambiences/summer_forest.ogg"},{sound:"swoosh",url:"https://actions.google.com/sounds/v1/ambiences/swoosh.ogg"},{sound:"truck beeping",url:"https://actions.google.com/sounds/v1/ambiences/truck_beeping.ogg"},{sound:"warm afternoon outdoors",url:"https://actions.google.com/sounds/v1/ambiences/warm_afternoon_outdoors.ogg"},{sound:"warm evening outdoors",url:"https://actions.google.com/sounds/v1/ambiences/warm_evening_outdoors.ogg"},{sound:"outdoor event background noise",url:"https://actions.google.com/sounds/v1/ambiences/outdoor_event_background_noise.ogg"},{sound:"afternoon crickets long",url:"https://actions.google.com/sounds/v1/animals/afternoon_crickets_long.ogg"},{sound:"animal bark and growl",url:"https://actions.google.com/sounds/v1/animals/animal_bark_and_growl.ogg"},{sound:"animal hiss and rattle",url:"https://actions.google.com/sounds/v1/animals/animal_hiss_and_rattle.ogg"},{sound:"animal squealing",url:"https://actions.google.com/sounds/v1/animals/animal_squealing.ogg"},{sound:"bee buzz",url:"https://actions.google.com/sounds/v1/animals/bee_buzz.ogg"},{sound:"buzzing fly",url:"https://actions.google.com/sounds/v1/animals/buzzing_fly.ogg"},{sound:"cat purr",url:"https://actions.google.com/sounds/v1/animals/cat_purr.ogg"},{sound:"cat purr close",url:"https://actions.google.com/sounds/v1/animals/cat_purr_close.ogg"},{sound:"cicada chirp",url:"https://actions.google.com/sounds/v1/animals/cicada_chirp.ogg"},{sound:"crow call",url:"https://actions.google.com/sounds/v1/animals/crow_call.ogg"},{sound:"crows caw in field",url:"https://actions.google.com/sounds/v1/animals/crows_caw_in_field.ogg"},{sound:"crows picking and eating",url:"https://actions.google.com/sounds/v1/animals/crows_picking_and_eating.ogg"},{sound:"distant dog barking",url:"https://actions.google.com/sounds/v1/animals/distant_dog_barking.ogg"},{sound:"dog barking",url:"https://actions.google.com/sounds/v1/animals/dog_barking.ogg"},{sound:"dog drinking close up",url:"https://actions.google.com/sounds/v1/animals/dog_drinking_close_up.ogg"},{sound:"dog growling",url:"https://actions.google.com/sounds/v1/animals/dog_growling.ogg"},{sound:"dog snarling",url:"https://actions.google.com/sounds/v1/animals/dog_snarling.ogg"},{sound:"dog whining",url:"https://actions.google.com/sounds/v1/animals/dog_whining.ogg"},{sound:"flies buzzing and circling",url:"https://actions.google.com/sounds/v1/animals/flies_buzzing_and_circling.ogg"},{sound:"geese outside",url:"https://actions.google.com/sounds/v1/animals/geese_outside.ogg"},{sound:"horse eating grass",url:"https://actions.google.com/sounds/v1/animals/horse_eating_grass.ogg"},{sound:"june songbirds",url:"https://actions.google.com/sounds/v1/animals/june_songbirds.ogg"},{sound:"june songbirds with crows",url:"https://actions.google.com/sounds/v1/animals/june_songbirds_with_crows.ogg"},{sound:"mouse squeaking",url:"https://actions.google.com/sounds/v1/animals/mouse_squeaking.ogg"},{sound:"owl hooting",url:"https://actions.google.com/sounds/v1/animals/owl_hooting.ogg"},{sound:"small dog wimper series",url:"https://actions.google.com/sounds/v1/animals/small_dog_wimper_series.ogg"},{sound:"swarming bees",url:"https://actions.google.com/sounds/v1/animals/swarming_bees.ogg"},{sound:"tentacle flop down",url:"https://actions.google.com/sounds/v1/animals/tentacle_flop_down.ogg"},{sound:"trapped dragon fly",url:"https://actions.google.com/sounds/v1/animals/trapped_dragon_fly.ogg"},{sound:"wasp on window",url:"https://actions.google.com/sounds/v1/animals/wasp_on_window.ogg"},{sound:"wooden sticks",url:"https://actions.google.com/sounds/v1/animals/wooden_sticks.ogg"},{sound:"woodpecker eating distant",url:"https://actions.google.com/sounds/v1/animals/woodpecker_eating_distant.ogg"},{sound:"woodpecker pecking fast",url:"https://actions.google.com/sounds/v1/animals/woodpecker_pecking_fast.ogg"},{sound:"cartoon boing",url:"https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg"},{sound:"cartoon cowbell",url:"https://actions.google.com/sounds/v1/cartoon/cartoon_cowbell.ogg"},{sound:"cartoon metal thunk",url:"https://actions.google.com/sounds/v1/cartoon/cartoon_metal_thunk.ogg"},{sound:"cartoon ringing hit",url:"https://actions.google.com/sounds/v1/cartoon/cartoon_ringing_hit.ogg"},{sound:"clang and wobble",url:"https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg"},{sound:"clown horn",url:"https://actions.google.com/sounds/v1/cartoon/clown_horn.ogg"},{sound:"clown slide sound effects",url:"https://actions.google.com/sounds/v1/cartoon/clown_slide_sound_effects.ogg"},{sound:"concussive guitar hit",url:"https://actions.google.com/sounds/v1/cartoon/concussive_guitar_hit.ogg"},{sound:"concussive hit guitar boing",url:"https://actions.google.com/sounds/v1/cartoon/concussive_hit_guitar_boing.ogg"},{sound:"continuous slide whistle",url:"https://actions.google.com/sounds/v1/cartoon/continuous_slide_whistle.ogg"},{sound:"cowbell ringing",url:"https://actions.google.com/sounds/v1/cartoon/cowbell_ringing.ogg"},{sound:"crash layer cymbals",url:"https://actions.google.com/sounds/v1/cartoon/crash_layer_cymbals.ogg"},{sound:"crash layer drumset",url:"https://actions.google.com/sounds/v1/cartoon/crash_layer_drumset.ogg"},{sound:"crash layer kick drum",url:"https://actions.google.com/sounds/v1/cartoon/crash_layer_kick_drum.ogg"},{sound:"crash layer kick pedal",url:"https://actions.google.com/sounds/v1/cartoon/crash_layer_kick_pedal.ogg"},{sound:"crazy dinner bell",url:"https://actions.google.com/sounds/v1/cartoon/crazy_dinner_bell.ogg"},{sound:"cymbal kick",url:"https://actions.google.com/sounds/v1/cartoon/cymbal_kick.ogg"},{sound:"deflate",url:"https://actions.google.com/sounds/v1/cartoon/deflate.ogg"},{sound:"drum roll",url:"https://actions.google.com/sounds/v1/cartoon/drum_roll.ogg"},{sound:"drumset falling down stairs",url:"https://actions.google.com/sounds/v1/cartoon/drumset_falling_down_stairs.ogg"},{sound:"face stretch",url:"https://actions.google.com/sounds/v1/cartoon/face_stretch.ogg"},{sound:"falling whistle",url:"https://actions.google.com/sounds/v1/cartoon/falling_whistle.ogg"},{sound:"fart long through door",url:"https://actions.google.com/sounds/v1/cartoon/fart_long_through_door.ogg"},{sound:"fart toot",url:"https://actions.google.com/sounds/v1/cartoon/fart_toot.ogg"},{sound:"finger flick series",url:"https://actions.google.com/sounds/v1/cartoon/finger_flick_series.ogg"},{sound:"getting stuck",url:"https://actions.google.com/sounds/v1/cartoon/getting_stuck.ogg"},{sound:"goofy spring bounces",url:"https://actions.google.com/sounds/v1/cartoon/goofy_spring_bounces.ogg"},{sound:"hair ripping",url:"https://actions.google.com/sounds/v1/cartoon/hair_ripping.ogg"},{sound:"hitting a woodblock",url:"https://actions.google.com/sounds/v1/cartoon/hitting_a_woodblock.ogg"},{sound:"inflating big balloon",url:"https://actions.google.com/sounds/v1/cartoon/inflating_big_balloon.ogg"},{sound:"instrument strum",url:"https://actions.google.com/sounds/v1/cartoon/instrument_strum.ogg"},{sound:"jingle bells",url:"https://actions.google.com/sounds/v1/cartoon/jingle_bells.ogg"},{sound:"long fart",url:"https://actions.google.com/sounds/v1/cartoon/long_fart.ogg"},{sound:"mechanical clock ring",url:"https://actions.google.com/sounds/v1/cartoon/mechanical_clock_ring.ogg"},{sound:"metal strike",url:"https://actions.google.com/sounds/v1/cartoon/metal_strike.ogg"},{sound:"metal twang",url:"https://actions.google.com/sounds/v1/cartoon/metal_twang.ogg"},{sound:"metallic twang high",url:"https://actions.google.com/sounds/v1/cartoon/metallic_twang_high.ogg"},{sound:"motor running muffled",url:"https://actions.google.com/sounds/v1/cartoon/motor_running_muffled.ogg"},{sound:"pop",url:"https://actions.google.com/sounds/v1/cartoon/pop.ogg"},{sound:"punchline drum",url:"https://actions.google.com/sounds/v1/cartoon/punchline_drum.ogg"},{sound:"rainstick slow",url:"https://actions.google.com/sounds/v1/cartoon/rainstick_slow.ogg"},{sound:"rubber duck squeak series",url:"https://actions.google.com/sounds/v1/cartoon/rubber_duck_squeak_series.ogg"},{sound:"rubber glove pulling on series",url:"https://actions.google.com/sounds/v1/cartoon/rubber_glove_pulling_on_series.ogg"},{sound:"rubber glove snapping series",url:"https://actions.google.com/sounds/v1/cartoon/rubber_glove_snapping_series.ogg"},{sound:"rubber squeaking",url:"https://actions.google.com/sounds/v1/cartoon/rubber_squeaking.ogg"},{sound:"siren whistle",url:"https://actions.google.com/sounds/v1/cartoon/siren_whistle.ogg"},{sound:"slap with glove",url:"https://actions.google.com/sounds/v1/cartoon/slap_with_glove.ogg"},{sound:"slapping bare skin",url:"https://actions.google.com/sounds/v1/cartoon/slapping_bare_skin.ogg"},{sound:"slapping three faces",url:"https://actions.google.com/sounds/v1/cartoon/slapping_three_faces.ogg"},{sound:"slide whistle",url:"https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg"},{sound:"slide whistle crazy series",url:"https://actions.google.com/sounds/v1/cartoon/slide_whistle_crazy_series.ogg"},{sound:"slide whistle rise and fall",url:"https://actions.google.com/sounds/v1/cartoon/slide_whistle_rise_and_fall.ogg"},{sound:"slide whistle up",url:"https://actions.google.com/sounds/v1/cartoon/slide_whistle_up.ogg"},{sound:"slide whistle to drum",url:"https://actions.google.com/sounds/v1/cartoon/slide_whistle_to_drum.ogg"},{sound:"snare roll tumbling",url:"https://actions.google.com/sounds/v1/cartoon/snare_roll_tumbling.ogg"},{sound:"strike hollow wood",url:"https://actions.google.com/sounds/v1/cartoon/strike_hollow_wood.ogg"},{sound:"suction cup pull",url:"https://actions.google.com/sounds/v1/cartoon/suction_cup_pull.ogg"},{sound:"tympani bing",url:"https://actions.google.com/sounds/v1/cartoon/tympani_bing.ogg"},{sound:"ufo zip whistle",url:"https://actions.google.com/sounds/v1/cartoon/ufo_zip_whistle.ogg"},{sound:"vomit in bathroom",url:"https://actions.google.com/sounds/v1/cartoon/vomit_in_bathroom.ogg"},{sound:"vomiting close",url:"https://actions.google.com/sounds/v1/cartoon/vomiting_close.ogg"},{sound:"wet fart",url:"https://actions.google.com/sounds/v1/cartoon/wet_fart.ogg"},{sound:"whistle toy",url:"https://actions.google.com/sounds/v1/cartoon/whistle_toy.ogg"},{sound:"wind chimes",url:"https://actions.google.com/sounds/v1/cartoon/wind_chimes.ogg"},{sound:"wind up toy",url:"https://actions.google.com/sounds/v1/cartoon/wind_up_toy.ogg"},{sound:"wood plank flicks",url:"https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg"},{sound:"woodblock hit",url:"https://actions.google.com/sounds/v1/cartoon/woodblock_hit.ogg"},{sound:"wooden train whistle",url:"https://actions.google.com/sounds/v1/cartoon/wooden_train_whistle.ogg"},{sound:"woodpecker",url:"https://actions.google.com/sounds/v1/cartoon/woodpecker.ogg"},{sound:"xylophone tip toe scale up",url:"https://actions.google.com/sounds/v1/cartoon/xylophone_tip_toe_scale_up.ogg"},{sound:"battle agony moans",url:"https://actions.google.com/sounds/v1/crowds/battle_agony_moans.ogg"},{sound:"battle crowd celebrate stutter",url:"https://actions.google.com/sounds/v1/crowds/battle_crowd_celebrate_stutter.ogg"},{sound:"battle crowd celebration",url:"https://actions.google.com/sounds/v1/crowds/battle_crowd_celebration.ogg"},{sound:"battle cry high pitch",url:"https://actions.google.com/sounds/v1/crowds/battle_cry_high_pitch.ogg"},{sound:"battle intimidation forest",url:"https://actions.google.com/sounds/v1/crowds/battle_intimidation_forest.ogg"},{sound:"crowd talking",url:"https://actions.google.com/sounds/v1/crowds/crowd_talking.ogg"},{sound:"female crowd celebration",url:"https://actions.google.com/sounds/v1/crowds/female_crowd_celebration.ogg"},{sound:"human group cry out",url:"https://actions.google.com/sounds/v1/crowds/human_group_cry_out.ogg"},{sound:"murmuring and talking men",url:"https://actions.google.com/sounds/v1/crowds/murmuring_and_talking_men.ogg"},{sound:"quiet breathing",url:"https://actions.google.com/sounds/v1/crowds/quiet_breathing.ogg"},{sound:"team cheer",url:"https://actions.google.com/sounds/v1/crowds/team_cheer.ogg"},{sound:"voices angry",url:"https://actions.google.com/sounds/v1/crowds/voices_angry.ogg"},{sound:"voices moaning",url:"https://actions.google.com/sounds/v1/crowds/voices_moaning.ogg"},{sound:"voices murmur",url:"https://actions.google.com/sounds/v1/crowds/voices_murmur.ogg"},{sound:"voices on street accent",url:"https://actions.google.com/sounds/v1/crowds/voices_on_street_accent.ogg"},{sound:"wild battle crowd approach",url:"https://actions.google.com/sounds/v1/crowds/wild_battle_crowd_approach.ogg"},{sound:"creaking wooden door",url:"https://actions.google.com/sounds/v1/doors/creaking_wooden_door.ogg"},{sound:"cupboard door",url:"https://actions.google.com/sounds/v1/doors/cupboard_door.ogg"},{sound:"deadbolt lock",url:"https://actions.google.com/sounds/v1/doors/deadbolt_lock.ogg"},{sound:"door close",url:"https://actions.google.com/sounds/v1/doors/door_close.ogg"},{sound:"door close air suck",url:"https://actions.google.com/sounds/v1/doors/door_close_air_suck.ogg"},{sound:"door close far",url:"https://actions.google.com/sounds/v1/doors/door_close_far.ogg"},{sound:"door close and lock",url:"https://actions.google.com/sounds/v1/doors/door_close_and_lock.ogg"},{sound:"door hitting backstop close",url:"https://actions.google.com/sounds/v1/doors/door_hitting_backstop_close.ogg"},{sound:"door hitting backstop far",url:"https://actions.google.com/sounds/v1/doors/door_hitting_backstop_far.ogg"},{sound:"door knob",url:"https://actions.google.com/sounds/v1/doors/door_knob.ogg"},{sound:"door locking shut",url:"https://actions.google.com/sounds/v1/doors/door_locking_shut.ogg"},{sound:"door open close",url:"https://actions.google.com/sounds/v1/doors/door_open_close.ogg"},{sound:"door opening closing",url:"https://actions.google.com/sounds/v1/doors/door_opening_closing.ogg"},{sound:"door slams fast four times",url:"https://actions.google.com/sounds/v1/doors/door_slams_fast_four_times.ogg"},{sound:"door swinging salloon",url:"https://actions.google.com/sounds/v1/doors/door_swinging_salloon.ogg"},{sound:"doorknob opening",url:"https://actions.google.com/sounds/v1/doors/doorknob_opening.ogg"},{sound:"dragging over wood floor series",url:"https://actions.google.com/sounds/v1/doors/dragging_over_wood_floor_series.ogg"},{sound:"farm door creaks latch shuts",url:"https://actions.google.com/sounds/v1/doors/farm_door_creaks_latch_shuts.ogg"},{sound:"farm door latch",url:"https://actions.google.com/sounds/v1/doors/farm_door_latch.ogg"},{sound:"front door close",url:"https://actions.google.com/sounds/v1/doors/front_door_close.ogg"},{sound:"glass shower door",url:"https://actions.google.com/sounds/v1/doors/glass_shower_door.ogg"},{sound:"glass shower door shake",url:"https://actions.google.com/sounds/v1/doors/glass_shower_door_shake.ogg"},{sound:"heavy door close",url:"https://actions.google.com/sounds/v1/doors/heavy_door_close.ogg"},{sound:"hollow wood door",url:"https://actions.google.com/sounds/v1/doors/hollow_wood_door.ogg"},{sound:"key in lock",url:"https://actions.google.com/sounds/v1/doors/key_in_lock.ogg"},{sound:"knock on door",url:"https://actions.google.com/sounds/v1/doors/knock_on_door.ogg"},{sound:"knock on wooden door",url:"https://actions.google.com/sounds/v1/doors/knock_on_wooden_door.ogg"},{sound:"latch opening closing",url:"https://actions.google.com/sounds/v1/doors/latch_opening_closing.ogg"},{sound:"lid close wood",url:"https://actions.google.com/sounds/v1/doors/lid_close_wood.ogg"},{sound:"locked doorknob jiggle",url:"https://actions.google.com/sounds/v1/doors/locked_doorknob_jiggle.ogg"},{sound:"medicine cabinet latch",url:"https://actions.google.com/sounds/v1/doors/medicine_cabinet_latch.ogg"},{sound:"metal scrap rattling",url:"https://actions.google.com/sounds/v1/doors/metal_scrap_rattling.ogg"},{sound:"opening bathroom door",url:"https://actions.google.com/sounds/v1/doors/opening_bathroom_door.ogg"},{sound:"opening closing bathroom door",url:"https://actions.google.com/sounds/v1/doors/opening_closing_bathroom_door.ogg"},{sound:"opening closing heavy door",url:"https://actions.google.com/sounds/v1/doors/opening_closing_heavy_door.ogg"},{sound:"opening door with key",url:"https://actions.google.com/sounds/v1/doors/opening_door_with_key.ogg"},{sound:"push bar door series",url:"https://actions.google.com/sounds/v1/doors/push_bar_door_series.ogg"},{sound:"screen door close",url:"https://actions.google.com/sounds/v1/doors/screen_door_close.ogg"},{sound:"shutting refrigerator door",url:"https://actions.google.com/sounds/v1/doors/shutting_refrigerator_door.ogg"},{sound:"sliding closet door series",url:"https://actions.google.com/sounds/v1/doors/sliding_closet_door_series.ogg"},{sound:"sliding glass door",url:"https://actions.google.com/sounds/v1/doors/sliding_glass_door.ogg"},{sound:"sliding glass door aggressive",url:"https://actions.google.com/sounds/v1/doors/sliding_glass_door_aggressive.ogg"},{sound:"sliding glass door closing",url:"https://actions.google.com/sounds/v1/doors/sliding_glass_door_closing.ogg"},{sound:"sliding glass door latching",url:"https://actions.google.com/sounds/v1/doors/sliding_glass_door_latching.ogg"},{sound:"sliding glass door opening",url:"https://actions.google.com/sounds/v1/doors/sliding_glass_door_opening.ogg"},{sound:"sliding glass door series",url:"https://actions.google.com/sounds/v1/doors/sliding_glass_door_series.ogg"},{sound:"spring attic door",url:"https://actions.google.com/sounds/v1/doors/spring_attic_door.ogg"},{sound:"turning door knob",url:"https://actions.google.com/sounds/v1/doors/turning_door_knob.ogg"},{sound:"wood door open close",url:"https://actions.google.com/sounds/v1/doors/wood_door_open_close.ogg"},{sound:"wood door open close soft",url:"https://actions.google.com/sounds/v1/doors/wood_door_open_close_soft.ogg"},{sound:"wood door close hard",url:"https://actions.google.com/sounds/v1/doors/wood_door_close_hard.ogg"},{sound:"wood door close medium",url:"https://actions.google.com/sounds/v1/doors/wood_door_close_medium.ogg"},{sound:"wood door close soft",url:"https://actions.google.com/sounds/v1/doors/wood_door_close_soft.ogg"},{sound:"wood door close and rattle",url:"https://actions.google.com/sounds/v1/doors/wood_door_close_and_rattle.ogg"},{sound:"wood door open",url:"https://actions.google.com/sounds/v1/doors/wood_door_open.ogg"},{sound:"wood door open and close series",url:"https://actions.google.com/sounds/v1/doors/wood_door_open_and_close_series.ogg"},{sound:"wood rattle",url:"https://actions.google.com/sounds/v1/doors/wood_rattle.ogg"},{sound:"ambulance drive siren",url:"https://actions.google.com/sounds/v1/emergency/ambulance_drive_siren.ogg"},{sound:"ambulance siren",url:"https://actions.google.com/sounds/v1/emergency/ambulance_siren.ogg"},{sound:"ambulance siren distant",url:"https://actions.google.com/sounds/v1/emergency/ambulance_siren_distant.ogg"},{sound:"beeper emergency call",url:"https://actions.google.com/sounds/v1/emergency/beeper_emergency_call.ogg"},{sound:"emergency 911 dispatch call",url:"https://actions.google.com/sounds/v1/emergency/emergency_911_dispatch_call.ogg"},{sound:"emergency flare burns",url:"https://actions.google.com/sounds/v1/emergency/emergency_flare_burns.ogg"},{sound:"emergency flare movement",url:"https://actions.google.com/sounds/v1/emergency/emergency_flare_movement.ogg"},{sound:"emergency radio alert",url:"https://actions.google.com/sounds/v1/emergency/emergency_radio_alert.ogg"},{sound:"emergency siren approaching",url:"https://actions.google.com/sounds/v1/emergency/emergency_siren_approaching.ogg"},{sound:"emergency siren close long",url:"https://actions.google.com/sounds/v1/emergency/emergency_siren_close_long.ogg"},{sound:"emergency siren distant",url:"https://actions.google.com/sounds/v1/emergency/emergency_siren_distant.ogg"},{sound:"emergency siren short burst",url:"https://actions.google.com/sounds/v1/emergency/emergency_siren_short_burst.ogg"},{sound:"fire department dispatch pager",url:"https://actions.google.com/sounds/v1/emergency/fire_department_dispatch_pager.ogg"},{sound:"fuse ignite and burn",url:"https://actions.google.com/sounds/v1/emergency/fuse_ignite_and_burn.ogg"},{sound:"aluminum can open",url:"https://actions.google.com/sounds/v1/foley/aluminum_can_open.ogg"},{sound:"arm movement on desk",url:"https://actions.google.com/sounds/v1/foley/arm_movement_on_desk.ogg"},{sound:"bare feet scuff wood",url:"https://actions.google.com/sounds/v1/foley/bare_feet_scuff_wood.ogg"},{sound:"bare feet walk",url:"https://actions.google.com/sounds/v1/foley/bare_feet_walk.ogg"},{sound:"bare feet walk on wood",url:"https://actions.google.com/sounds/v1/foley/bare_feet_walk_on_wood.ogg"},{sound:"battle ground movement",url:"https://actions.google.com/sounds/v1/foley/battle_ground_movement.ogg"},{sound:"battle movement pass by",url:"https://actions.google.com/sounds/v1/foley/battle_movement_pass_by.ogg"},{sound:"body in car",url:"https://actions.google.com/sounds/v1/foley/body_in_car.ogg"},{sound:"bottle cap open",url:"https://actions.google.com/sounds/v1/foley/bottle_cap_open.ogg"},{sound:"bottle cork",url:"https://actions.google.com/sounds/v1/foley/bottle_cork.ogg"},{sound:"bottles clanking",url:"https://actions.google.com/sounds/v1/foley/bottles_clanking.ogg"},{sound:"branch and leaves",url:"https://actions.google.com/sounds/v1/foley/branch_and_leaves.ogg"},{sound:"buckle",url:"https://actions.google.com/sounds/v1/foley/buckle.ogg"},{sound:"cap covering uncovering",url:"https://actions.google.com/sounds/v1/foley/cap_covering_uncovering.ogg"},{sound:"cassette tape button",url:"https://actions.google.com/sounds/v1/foley/cassette_tape_button.ogg"},{sound:"cassette tape motor",url:"https://actions.google.com/sounds/v1/foley/cassette_tape_motor.ogg"},{sound:"cassette tape play",url:"https://actions.google.com/sounds/v1/foley/cassette_tape_play.ogg"},{sound:"cassette tape rewind",url:"https://actions.google.com/sounds/v1/foley/cassette_tape_rewind.ogg"},{sound:"chain on metal post",url:"https://actions.google.com/sounds/v1/foley/chain_on_metal_post.ogg"},{sound:"change drop on wood",url:"https://actions.google.com/sounds/v1/foley/change_drop_on_wood.ogg"},{sound:"child toy chime clinck and clanks",url:"https://actions.google.com/sounds/v1/foley/child_toy_chime_clinck_and_clanks.ogg"},{sound:"chopping in forest",url:"https://actions.google.com/sounds/v1/foley/chopping_in_forest.ogg"},{sound:"clean up spill",url:"https://actions.google.com/sounds/v1/foley/clean_up_spill.ogg"},{sound:"climbing stairs",url:"https://actions.google.com/sounds/v1/foley/climbing_stairs.ogg"},{sound:"clip",url:"https://actions.google.com/sounds/v1/foley/clip.ogg"},{sound:"coins shuffling",url:"https://actions.google.com/sounds/v1/foley/coins_shuffling.ogg"},{sound:"cork in out bottle squeek series",url:"https://actions.google.com/sounds/v1/foley/cork_in_out_bottle_squeek_series.ogg"},{sound:"cotton rip",url:"https://actions.google.com/sounds/v1/foley/cotton_rip.ogg"},{sound:"crushing pills",url:"https://actions.google.com/sounds/v1/foley/crushing_pills.ogg"},{sound:"cutting fruit",url:"https://actions.google.com/sounds/v1/foley/cutting_fruit.ogg"},{sound:"dancing shoes on tile",url:"https://actions.google.com/sounds/v1/foley/dancing_shoes_on_tile.ogg"},{sound:"dancing the charelston",url:"https://actions.google.com/sounds/v1/foley/dancing_the_charelston.ogg"},{sound:"deep cross on wood",url:"https://actions.google.com/sounds/v1/foley/deep_cross_on_wood.ogg"},{sound:"dial turning",url:"https://actions.google.com/sounds/v1/foley/dial_turning.ogg"},{sound:"dishes rattle",url:"https://actions.google.com/sounds/v1/foley/dishes_rattle.ogg"},{sound:"distant footsteps on wood",url:"https://actions.google.com/sounds/v1/foley/distant_footsteps_on_wood.ogg"},{sound:"dragging on gravel",url:"https://actions.google.com/sounds/v1/foley/dragging_on_gravel.ogg"},{sound:"drawing on paper with charcoal",url:"https://actions.google.com/sounds/v1/foley/drawing_on_paper_with_charcoal.ogg"},{sound:"dress shoe jog on gravel",url:"https://actions.google.com/sounds/v1/foley/dress_shoe_jog_on_gravel.ogg"},{sound:"dress shoe jog on wood",url:"https://actions.google.com/sounds/v1/foley/dress_shoe_jog_on_wood.ogg"},{sound:"dress shoe run on concrete",url:"https://actions.google.com/sounds/v1/foley/dress_shoe_run_on_concrete.ogg"},{sound:"dress shoe run on gravel",url:"https://actions.google.com/sounds/v1/foley/dress_shoe_run_on_gravel.ogg"},{sound:"dress shoe run on wood",url:"https://actions.google.com/sounds/v1/foley/dress_shoe_run_on_wood.ogg"},{sound:"dress shoe sidestep on gravel",url:"https://actions.google.com/sounds/v1/foley/dress_shoe_sidestep_on_gravel.ogg"},{sound:"dress shoe sidestep on light grit",url:"https://actions.google.com/sounds/v1/foley/dress_shoe_sidestep_on_light_grit.ogg"},{sound:"dress shoe sidestep on wood",url:"https://actions.google.com/sounds/v1/foley/dress_shoe_sidestep_on_wood.ogg"},{sound:"dress shoe stumble concrete",url:"https://actions.google.com/sounds/v1/foley/dress_shoe_stumble_concrete.ogg"},{sound:"dress shoe stumble gravel",url:"https://actions.google.com/sounds/v1/foley/dress_shoe_stumble_gravel.ogg"},{sound:"dress shoe stumble light grit",url:"https://actions.google.com/sounds/v1/foley/dress_shoe_stumble_light_grit.ogg"},{sound:"dress shoe stumble wood",url:"https://actions.google.com/sounds/v1/foley/dress_shoe_stumble_wood.ogg"},{sound:"dress shoe turn concrete",url:"https://actions.google.com/sounds/v1/foley/dress_shoe_turn_concrete.ogg"},{sound:"dress shoe turn gravel",url:"https://actions.google.com/sounds/v1/foley/dress_shoe_turn_gravel.ogg"},{sound:"dress shoe turn wood",url:"https://actions.google.com/sounds/v1/foley/dress_shoe_turn_wood.ogg"},{sound:"dress shoe walk light grit",url:"https://actions.google.com/sounds/v1/foley/dress_shoe_walk_light_grit.ogg"},{sound:"dress shoe walk solid wood",url:"https://actions.google.com/sounds/v1/foley/dress_shoe_walk_solid_wood.ogg"},{sound:"dress shoe walking down stairs",url:"https://actions.google.com/sounds/v1/foley/dress_shoe_walking_down_stairs.ogg"},{sound:"dress shoes walk stairs",url:"https://actions.google.com/sounds/v1/foley/dress_shoes_walk_stairs.ogg"},{sound:"dress shoes on concrete stairs",url:"https://actions.google.com/sounds/v1/foley/dress_shoes_on_concrete_stairs.ogg"},{sound:"dress shoes on stairs concrete",url:"https://actions.google.com/sounds/v1/foley/dress_shoes_on_stairs_concrete.ogg"},{sound:"dress shoes on stairs wood",url:"https://actions.google.com/sounds/v1/foley/dress_shoes_on_stairs_wood.ogg"},{sound:"dress shoes on wood stairs",url:"https://actions.google.com/sounds/v1/foley/dress_shoes_on_wood_stairs.ogg"},{sound:"dress shoes up stairs concrete",url:"https://actions.google.com/sounds/v1/foley/dress_shoes_up_stairs_concrete.ogg"},{sound:"dress shoes up stairs wood",url:"https://actions.google.com/sounds/v1/foley/dress_shoes_up_stairs_wood.ogg"},{sound:"dress shoe jog on concrete",url:"https://actions.google.com/sounds/v1/foley/dress_shoe_jog_on_concrete.ogg"},{sound:"drink and swallow",url:"https://actions.google.com/sounds/v1/foley/drink_and_swallow.ogg"},{sound:"drinking from water fountain",url:"https://actions.google.com/sounds/v1/foley/drinking_from_water_fountain.ogg"},{sound:"dropping object in bathroom",url:"https://actions.google.com/sounds/v1/foley/dropping_object_in_bathroom.ogg"},{sound:"dry off with towel",url:"https://actions.google.com/sounds/v1/foley/dry_off_with_towel.ogg"},{sound:"drying hands on towel",url:"https://actions.google.com/sounds/v1/foley/drying_hands_on_towel.ogg"},{sound:"dumping gravel",url:"https://actions.google.com/sounds/v1/foley/dumping_gravel.ogg"},{sound:"eating a juicy piece of fruit",url:"https://actions.google.com/sounds/v1/foley/eating_a_juicy_piece_of_fruit.ogg"},{sound:"feeling paper",url:"https://actions.google.com/sounds/v1/foley/feeling_paper.ogg"},{sound:"finger nails scratch wood",url:"https://actions.google.com/sounds/v1/foley/finger_nails_scratch_wood.ogg"},{sound:"flip flops on concrete",url:"https://actions.google.com/sounds/v1/foley/flip_flops_on_concrete.ogg"},{sound:"flip flops on wood",url:"https://actions.google.com/sounds/v1/foley/flip_flops_on_wood.ogg"},{sound:"flipping newspaper pages",url:"https://actions.google.com/sounds/v1/foley/flipping_newspaper_pages.ogg"},{sound:"foam board plased on easel",url:"https://actions.google.com/sounds/v1/foley/foam_board_plased_on_easel.ogg"},{sound:"footsteps concrete",url:"https://actions.google.com/sounds/v1/foley/footsteps_concrete.ogg"},{sound:"footsteps dirt",url:"https://actions.google.com/sounds/v1/foley/footsteps_dirt.ogg"},{sound:"footsteps gravel",url:"https://actions.google.com/sounds/v1/foley/footsteps_gravel.ogg"},{sound:"footsteps grit",url:"https://actions.google.com/sounds/v1/foley/footsteps_grit.ogg"},{sound:"footsteps on fallen leaves",url:"https://actions.google.com/sounds/v1/foley/footsteps_on_fallen_leaves.ogg"},{sound:"footsteps solid wood",url:"https://actions.google.com/sounds/v1/foley/footsteps_solid_wood.ogg"},{sound:"glass drop and roll",url:"https://actions.google.com/sounds/v1/foley/glass_drop_and_roll.ogg"},{sound:"glass fill at sink",url:"https://actions.google.com/sounds/v1/foley/glass_fill_at_sink.ogg"},{sound:"hand claps close",url:"https://actions.google.com/sounds/v1/foley/hand_claps_close.ogg"},{sound:"hand claps far",url:"https://actions.google.com/sounds/v1/foley/hand_claps_far.ogg"},{sound:"hand claps medium",url:"https://actions.google.com/sounds/v1/foley/hand_claps_medium.ogg"},{sound:"hand rub",url:"https://actions.google.com/sounds/v1/foley/hand_rub.ogg"},{sound:"hand wipe",url:"https://actions.google.com/sounds/v1/foley/hand_wipe.ogg"},{sound:"handle manilla folder",url:"https://actions.google.com/sounds/v1/foley/handle_manilla_folder.ogg"},{sound:"hanger on metal",url:"https://actions.google.com/sounds/v1/foley/hanger_on_metal.ogg"},{sound:"hard sole shoes on wood floor",url:"https://actions.google.com/sounds/v1/foley/hard_sole_shoes_on_wood_floor.ogg"},{sound:"high heels walking series",url:"https://actions.google.com/sounds/v1/foley/high_heels_walking_series.ogg"},{sound:"hiking in forest",url:"https://actions.google.com/sounds/v1/foley/hiking_in_forest.ogg"},{sound:"hit and rattle",url:"https://actions.google.com/sounds/v1/foley/hit_and_rattle.ogg"},{sound:"hollow hitting",url:"https://actions.google.com/sounds/v1/foley/hollow_hitting.ogg"},{sound:"hula hoop hulaing",url:"https://actions.google.com/sounds/v1/foley/hula_hoop_hulaing.ogg"},{sound:"inkwell and pen tap",url:"https://actions.google.com/sounds/v1/foley/inkwell_and_pen_tap.ogg"},{sound:"jog down concrete stairs",url:"https://actions.google.com/sounds/v1/foley/jog_down_concrete_stairs.ogg"},{sound:"jog down solid wood stairs",url:"https://actions.google.com/sounds/v1/foley/jog_down_solid_wood_stairs.ogg"},{sound:"jog on grit",url:"https://actions.google.com/sounds/v1/foley/jog_on_grit.ogg"},{sound:"jog on hollow wood",url:"https://actions.google.com/sounds/v1/foley/jog_on_hollow_wood.ogg"},{sound:"jog on solid wood",url:"https://actions.google.com/sounds/v1/foley/jog_on_solid_wood.ogg"},{sound:"jog up concrete stairs",url:"https://actions.google.com/sounds/v1/foley/jog_up_concrete_stairs.ogg"},{sound:"jog up solid wood stairs",url:"https://actions.google.com/sounds/v1/foley/jog_up_solid_wood_stairs.ogg"},{sound:"jog up stairs concrete",url:"https://actions.google.com/sounds/v1/foley/jog_up_stairs_concrete.ogg"},{sound:"jog up stairs wood",url:"https://actions.google.com/sounds/v1/foley/jog_up_stairs_wood.ogg"},{sound:"jog on concrete",url:"https://actions.google.com/sounds/v1/foley/jog_on_concrete.ogg"},{sound:"jog on rocks",url:"https://actions.google.com/sounds/v1/foley/jog_on_rocks.ogg"},{sound:"jog on wood",url:"https://actions.google.com/sounds/v1/foley/jog_on_wood.ogg"},{sound:"jump on concrete",url:"https://actions.google.com/sounds/v1/foley/jump_on_concrete.ogg"},{sound:"jump on dirt",url:"https://actions.google.com/sounds/v1/foley/jump_on_dirt.ogg"},{sound:"jump on grass",url:"https://actions.google.com/sounds/v1/foley/jump_on_grass.ogg"},{sound:"jump on hollow wood",url:"https://actions.google.com/sounds/v1/foley/jump_on_hollow_wood.ogg"},{sound:"jump on metal gate",url:"https://actions.google.com/sounds/v1/foley/jump_on_metal_gate.ogg"},{sound:"jump on rocks",url:"https://actions.google.com/sounds/v1/foley/jump_on_rocks.ogg"},{sound:"jump on soggy grass",url:"https://actions.google.com/sounds/v1/foley/jump_on_soggy_grass.ogg"},{sound:"jump on solid metal",url:"https://actions.google.com/sounds/v1/foley/jump_on_solid_metal.ogg"},{sound:"jump on tile",url:"https://actions.google.com/sounds/v1/foley/jump_on_tile.ogg"},{sound:"jump onto blanket",url:"https://actions.google.com/sounds/v1/foley/jump_onto_blanket.ogg"},{sound:"jumping on dirt",url:"https://actions.google.com/sounds/v1/foley/jumping_on_dirt.ogg"},{sound:"karate hit",url:"https://actions.google.com/sounds/v1/foley/karate_hit.ogg"},{sound:"knife chop on wood",url:"https://actions.google.com/sounds/v1/foley/knife_chop_on_wood.ogg"},{sound:"knife sharpen",url:"https://actions.google.com/sounds/v1/foley/knife_sharpen.ogg"},{sound:"knuckle crack",url:"https://actions.google.com/sounds/v1/foley/knuckle_crack.ogg"},{sound:"ladle food into carton",url:"https://actions.google.com/sounds/v1/foley/ladle_food_into_carton.ogg"},{sound:"latch opening closing",url:"https://actions.google.com/sounds/v1/foley/latch_opening_closing.ogg"},{sound:"leaves rustling series",url:"https://actions.google.com/sounds/v1/foley/leaves_rustling_series.ogg"},{sound:"lettuce peeling",url:"https://actions.google.com/sounds/v1/foley/lettuce_peeling.ogg"},{sound:"light splashing of water",url:"https://actions.google.com/sounds/v1/foley/light_splashing_of_water.ogg"},{sound:"lighter flick",url:"https://actions.google.com/sounds/v1/foley/lighter_flick.ogg"},{sound:"lindyhop",url:"https://actions.google.com/sounds/v1/foley/lindyhop.ogg"},{sound:"load dishwasher",url:"https://actions.google.com/sounds/v1/foley/load_dishwasher.ogg"},{sound:"machine sounds halt slowly",url:"https://actions.google.com/sounds/v1/foley/machine_sounds_halt_slowly.ogg"},{sound:"metal hand cuff",url:"https://actions.google.com/sounds/v1/foley/metal_hand_cuff.ogg"},{sound:"metal hits",url:"https://actions.google.com/sounds/v1/foley/metal_hits.ogg"},{sound:"metal hits and stop",url:"https://actions.google.com/sounds/v1/foley/metal_hits_and_stop.ogg"},{sound:"metal rattling rhythmically",url:"https://actions.google.com/sounds/v1/foley/metal_rattling_rhythmically.ogg"},{sound:"metal scrap kicking",url:"https://actions.google.com/sounds/v1/foley/metal_scrap_kicking.ogg"},{sound:"metal scrap rattling",url:"https://actions.google.com/sounds/v1/foley/metal_scrap_rattling.ogg"},{sound:"metal sheets sliding",url:"https://actions.google.com/sounds/v1/foley/metal_sheets_sliding.ogg"},{sound:"object grating metal",url:"https://actions.google.com/sounds/v1/foley/object_grating_metal.ogg"},{sound:"objects in plastic bottle",url:"https://actions.google.com/sounds/v1/foley/objects_in_plastic_bottle.ogg"},{sound:"pace quickly on wood",url:"https://actions.google.com/sounds/v1/foley/pace_quickly_on_wood.ogg"},{sound:"packing boxes",url:"https://actions.google.com/sounds/v1/foley/packing_boxes.ogg"},{sound:"pants whooshing",url:"https://actions.google.com/sounds/v1/foley/pants_whooshing.ogg"},{sound:"paper bag opening",url:"https://actions.google.com/sounds/v1/foley/paper_bag_opening.ogg"},{sound:"paper crunching",url:"https://actions.google.com/sounds/v1/foley/paper_crunching.ogg"},{sound:"paper folding",url:"https://actions.google.com/sounds/v1/foley/paper_folding.ogg"},{sound:"paper ripping",url:"https://actions.google.com/sounds/v1/foley/paper_ripping.ogg"},{sound:"paper scraps cut",url:"https://actions.google.com/sounds/v1/foley/paper_scraps_cut.ogg"},{sound:"paper stacking",url:"https://actions.google.com/sounds/v1/foley/paper_stacking.ogg"},{sound:"papers rustling in the wind",url:"https://actions.google.com/sounds/v1/foley/papers_rustling_in_the_wind.ogg"},{sound:"peeling food with peeler",url:"https://actions.google.com/sounds/v1/foley/peeling_food_with_peeler.ogg"},{sound:"pen drawing",url:"https://actions.google.com/sounds/v1/foley/pen_drawing.ogg"},{sound:"pen writing",url:"https://actions.google.com/sounds/v1/foley/pen_writing.ogg"},{sound:"pill bottles in cabinet",url:"https://actions.google.com/sounds/v1/foley/pill_bottles_in_cabinet.ogg"},{sound:"plastic crumpling",url:"https://actions.google.com/sounds/v1/foley/plastic_crumpling.ogg"},{sound:"plastic grovery bag movement",url:"https://actions.google.com/sounds/v1/foley/plastic_grovery_bag_movement.ogg"},{sound:"play in pile of leaves",url:"https://actions.google.com/sounds/v1/foley/play_in_pile_of_leaves.ogg"},{sound:"pull tissue from box",url:"https://actions.google.com/sounds/v1/foley/pull_tissue_from_box.ogg"},{sound:"punch cloth series",url:"https://actions.google.com/sounds/v1/foley/punch_cloth_series.ogg"},{sound:"punch swoosh series",url:"https://actions.google.com/sounds/v1/foley/punch_swoosh_series.ogg"},{sound:"put cap on pen",url:"https://actions.google.com/sounds/v1/foley/put_cap_on_pen.ogg"},{sound:"quill pen writing",url:"https://actions.google.com/sounds/v1/foley/quill_pen_writing.ogg"},{sound:"radiation suit on off",url:"https://actions.google.com/sounds/v1/foley/radiation_suit_on_off.ogg"},{sound:"radiation suit rustle",url:"https://actions.google.com/sounds/v1/foley/radiation_suit_rustle.ogg"},{sound:"radio static",url:"https://actions.google.com/sounds/v1/foley/radio_static.ogg"},{sound:"rake swing whoosh close",url:"https://actions.google.com/sounds/v1/foley/rake_swing_whoosh_close.ogg"},{sound:"rake swing whoosh hall",url:"https://actions.google.com/sounds/v1/foley/rake_swing_whoosh_hall.ogg"},{sound:"rope creaking holding weight",url:"https://actions.google.com/sounds/v1/foley/rope_creaking_holding_weight.ogg"},{sound:"rub head",url:"https://actions.google.com/sounds/v1/foley/rub_head.ogg"},{sound:"rubber shoe squeal exaggerated",url:"https://actions.google.com/sounds/v1/foley/rubber_shoe_squeal_exaggerated.ogg"},{sound:"rubber shoe walking squeal",url:"https://actions.google.com/sounds/v1/foley/rubber_shoe_walking_squeal.ogg"},{sound:"rubbing smooth object series",url:"https://actions.google.com/sounds/v1/foley/rubbing_smooth_object_series.ogg"},{sound:"rubble breaking",url:"https://actions.google.com/sounds/v1/foley/rubble_breaking.ogg"},{sound:"run in mud",url:"https://actions.google.com/sounds/v1/foley/run_in_mud.ogg"},{sound:"run on gravel",url:"https://actions.google.com/sounds/v1/foley/run_on_gravel.ogg"},{sound:"run on solid wood",url:"https://actions.google.com/sounds/v1/foley/run_on_solid_wood.ogg"},{sound:"run in dirt",url:"https://actions.google.com/sounds/v1/foley/run_in_dirt.ogg"},{sound:"run on concrete",url:"https://actions.google.com/sounds/v1/foley/run_on_concrete.ogg"},{sound:"run on grit",url:"https://actions.google.com/sounds/v1/foley/run_on_grit.ogg"},{sound:"run on wood",url:"https://actions.google.com/sounds/v1/foley/run_on_wood.ogg"},{sound:"running into the woods",url:"https://actions.google.com/sounds/v1/foley/running_into_the_woods.ogg"},{sound:"running on concrete",url:"https://actions.google.com/sounds/v1/foley/running_on_concrete.ogg"},{sound:"running on dirt",url:"https://actions.google.com/sounds/v1/foley/running_on_dirt.ogg"},{sound:"running on grass",url:"https://actions.google.com/sounds/v1/foley/running_on_grass.ogg"},{sound:"running on gravel",url:"https://actions.google.com/sounds/v1/foley/running_on_gravel.ogg"},{sound:"running on leaves",url:"https://actions.google.com/sounds/v1/foley/running_on_leaves.ogg"},{sound:"running on metal grate",url:"https://actions.google.com/sounds/v1/foley/running_on_metal_grate.ogg"},{sound:"running on rocks",url:"https://actions.google.com/sounds/v1/foley/running_on_rocks.ogg"},{sound:"running on tile",url:"https://actions.google.com/sounds/v1/foley/running_on_tile.ogg"},{sound:"running with recorder in pocket",url:"https://actions.google.com/sounds/v1/foley/running_with_recorder_in_pocket.ogg"},{sound:"running on wet surface",url:"https://actions.google.com/sounds/v1/foley/running_on_wet_surface.ogg"},{sound:"rustling leaves",url:"https://actions.google.com/sounds/v1/foley/rustling_leaves.ogg"},{sound:"scraping on paper",url:"https://actions.google.com/sounds/v1/foley/scraping_on_paper.ogg"},{sound:"screwing in light bulb",url:"https://actions.google.com/sounds/v1/foley/screwing_in_light_bulb.ogg"},{sound:"scuff concrete with heels",url:"https://actions.google.com/sounds/v1/foley/scuff_concrete_with_heels.ogg"},{sound:"scuff gravel with heels",url:"https://actions.google.com/sounds/v1/foley/scuff_gravel_with_heels.ogg"},{sound:"scuff gravel with soles",url:"https://actions.google.com/sounds/v1/foley/scuff_gravel_with_soles.ogg"},{sound:"scuff grit with heels",url:"https://actions.google.com/sounds/v1/foley/scuff_grit_with_heels.ogg"},{sound:"scuff hollow wood with heels",url:"https://actions.google.com/sounds/v1/foley/scuff_hollow_wood_with_heels.ogg"},{sound:"scuff solid wood with heels",url:"https://actions.google.com/sounds/v1/foley/scuff_solid_wood_with_heels.ogg"},{sound:"scuff turnaround on wood",url:"https://actions.google.com/sounds/v1/foley/scuff_turnaround_on_wood.ogg"},{sound:"scuff wood with soles",url:"https://actions.google.com/sounds/v1/foley/scuff_wood_with_soles.ogg"},{sound:"scuff on concrete series",url:"https://actions.google.com/sounds/v1/foley/scuff_on_concrete_series.ogg"},{sound:"scuff on metal grate",url:"https://actions.google.com/sounds/v1/foley/scuff_on_metal_grate.ogg"},{sound:"scuffing on dirt",url:"https://actions.google.com/sounds/v1/foley/scuffing_on_dirt.ogg"},{sound:"scuffing on gravel",url:"https://actions.google.com/sounds/v1/foley/scuffing_on_gravel.ogg"},{sound:"scuffing on stone",url:"https://actions.google.com/sounds/v1/foley/scuffing_on_stone.ogg"},{sound:"scuffing on tile",url:"https://actions.google.com/sounds/v1/foley/scuffing_on_tile.ogg"},{sound:"scuffing on cement",url:"https://actions.google.com/sounds/v1/foley/scuffing_on_cement.ogg"},{sound:"searching bathroom cupboard",url:"https://actions.google.com/sounds/v1/foley/searching_bathroom_cupboard.ogg"},{sound:"sheet rip thin series",url:"https://actions.google.com/sounds/v1/foley/sheet_rip_thin_series.ogg"},{sound:"sheet woosh thin",url:"https://actions.google.com/sounds/v1/foley/sheet_woosh_thin.ogg"},{sound:"shifting on couch series",url:"https://actions.google.com/sounds/v1/foley/shifting_on_couch_series.ogg"},{sound:"shoe scuffing on gravel",url:"https://actions.google.com/sounds/v1/foley/shoe_scuffing_on_gravel.ogg"},{sound:"shoe scuffing on wood",url:"https://actions.google.com/sounds/v1/foley/shoe_scuffing_on_wood.ogg"},{sound:"shoe scuff dirt",url:"https://actions.google.com/sounds/v1/foley/shoe_scuff_dirt.ogg"},{sound:"shoe scuff grit",url:"https://actions.google.com/sounds/v1/foley/shoe_scuff_grit.ogg"},{sound:"shoe scuff hollow wood",url:"https://actions.google.com/sounds/v1/foley/shoe_scuff_hollow_wood.ogg"},{sound:"shoe scuff solid wood",url:"https://actions.google.com/sounds/v1/foley/shoe_scuff_solid_wood.ogg"},{sound:"shuffling feet concrete",url:"https://actions.google.com/sounds/v1/foley/shuffling_feet_concrete.ogg"},{sound:"shuffling feet grass",url:"https://actions.google.com/sounds/v1/foley/shuffling_feet_grass.ogg"},{sound:"shuffling feet gravel",url:"https://actions.google.com/sounds/v1/foley/shuffling_feet_gravel.ogg"},{sound:"shuffling feet metal grate",url:"https://actions.google.com/sounds/v1/foley/shuffling_feet_metal_grate.ogg"},{sound:"shuffling feet metal plank",url:"https://actions.google.com/sounds/v1/foley/shuffling_feet_metal_plank.ogg"},{sound:"shuffling high heels",url:"https://actions.google.com/sounds/v1/foley/shuffling_high_heels.ogg"},{sound:"sidestep on concrete",url:"https://actions.google.com/sounds/v1/foley/sidestep_on_concrete.ogg"},{sound:"sidestep on gravel",url:"https://actions.google.com/sounds/v1/foley/sidestep_on_gravel.ogg"},{sound:"sidestep on grit",url:"https://actions.google.com/sounds/v1/foley/sidestep_on_grit.ogg"},{sound:"sidestep on hollow wood",url:"https://actions.google.com/sounds/v1/foley/sidestep_on_hollow_wood.ogg"},{sound:"sipping hot liquid",url:"https://actions.google.com/sounds/v1/foley/sipping_hot_liquid.ogg"},{sound:"slapping stone",url:"https://actions.google.com/sounds/v1/foley/slapping_stone.ogg"},{sound:"slicing produce on plate",url:"https://actions.google.com/sounds/v1/foley/slicing_produce_on_plate.ogg"},{sound:"slide",url:"https://actions.google.com/sounds/v1/foley/slide.ogg"},{sound:"slide on concrete series",url:"https://actions.google.com/sounds/v1/foley/slide_on_concrete_series.ogg"},{sound:"slide on dirt series",url:"https://actions.google.com/sounds/v1/foley/slide_on_dirt_series.ogg"},{sound:"slide on gravel series",url:"https://actions.google.com/sounds/v1/foley/slide_on_gravel_series.ogg"},{sound:"slide on leaves",url:"https://actions.google.com/sounds/v1/foley/slide_on_leaves.ogg"},{sound:"slide on metal plank series",url:"https://actions.google.com/sounds/v1/foley/slide_on_metal_plank_series.ogg"},{sound:"slide on rock series",url:"https://actions.google.com/sounds/v1/foley/slide_on_rock_series.ogg"},{sound:"slide on snow series",url:"https://actions.google.com/sounds/v1/foley/slide_on_snow_series.ogg"},{sound:"slide on tile series",url:"https://actions.google.com/sounds/v1/foley/slide_on_tile_series.ogg"},{sound:"sliding hangers",url:"https://actions.google.com/sounds/v1/foley/sliding_hangers.ogg"},{sound:"sliding on dirt",url:"https://actions.google.com/sounds/v1/foley/sliding_on_dirt.ogg"},{sound:"slippers shuffle on carpet",url:"https://actions.google.com/sounds/v1/foley/slippers_shuffle_on_carpet.ogg"},{sound:"slurping series",url:"https://actions.google.com/sounds/v1/foley/slurping_series.ogg"},{sound:"smoothing cloth on table",url:"https://actions.google.com/sounds/v1/foley/smoothing_cloth_on_table.ogg"},{sound:"sneaker fast walk concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_fast_walk_concrete.ogg"},{sound:"sneaker fast walk gravel",url:"https://actions.google.com/sounds/v1/foley/sneaker_fast_walk_gravel.ogg"},{sound:"sneaker fast walk hollow wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_fast_walk_hollow_wood.ogg"},{sound:"sneaker fast walk light grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_fast_walk_light_grit.ogg"},{sound:"sneaker fast walk solid wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_fast_walk_solid_wood.ogg"},{sound:"sneaker foot slides concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_foot_slides_concrete.ogg"},{sound:"sneaker foot slides hollow wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_foot_slides_hollow_wood.ogg"},{sound:"sneaker foot slides light grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_foot_slides_light_grit.ogg"},{sound:"sneaker foot slides solid wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_foot_slides_solid_wood.ogg"},{sound:"sneaker jog concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_jog_concrete.ogg"},{sound:"sneaker jog dirt",url:"https://actions.google.com/sounds/v1/foley/sneaker_jog_dirt.ogg"},{sound:"sneaker jog gravel",url:"https://actions.google.com/sounds/v1/foley/sneaker_jog_gravel.ogg"},{sound:"sneaker jog hollow wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_jog_hollow_wood.ogg"},{sound:"sneaker jog light grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_jog_light_grit.ogg"},{sound:"sneaker jog solid wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_jog_solid_wood.ogg"},{sound:"sneaker jump hollow wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_jump_hollow_wood.ogg"},{sound:"sneaker jump solid wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_jump_solid_wood.ogg"},{sound:"sneaker large hollow wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_large_hollow_wood.ogg"},{sound:"sneaker large jumps concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_large_jumps_concrete.ogg"},{sound:"sneaker large jumps dirt",url:"https://actions.google.com/sounds/v1/foley/sneaker_large_jumps_dirt.ogg"},{sound:"sneaker large jumps light grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_large_jumps_light_grit.ogg"},{sound:"sneaker large jumps rough grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_large_jumps_rough_grit.ogg"},{sound:"sneaker large jumps solid wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_large_jumps_solid_wood.ogg"},{sound:"sneaker long foot slides dirt",url:"https://actions.google.com/sounds/v1/foley/sneaker_long_foot_slides_dirt.ogg"},{sound:"sneaker medium jump concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_medium_jump_concrete.ogg"},{sound:"sneaker medium jump dirt",url:"https://actions.google.com/sounds/v1/foley/sneaker_medium_jump_dirt.ogg"},{sound:"sneaker medium jump grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_medium_jump_grit.ogg"},{sound:"sneaker medium jump light grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_medium_jump_light_grit.ogg"},{sound:"sneaker medium jumps grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_medium_jumps_grit.ogg"},{sound:"sneaker medium jumps wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_medium_jumps_wood.ogg"},{sound:"sneaker medium solid jumps dirt",url:"https://actions.google.com/sounds/v1/foley/sneaker_medium_solid_jumps_dirt.ogg"},{sound:"sneaker run hollow wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_run_hollow_wood.ogg"},{sound:"sneaker scuf concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_scuf_concrete.ogg"},{sound:"sneaker scuf dirt",url:"https://actions.google.com/sounds/v1/foley/sneaker_scuf_dirt.ogg"},{sound:"sneaker scuf hollow wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_scuf_hollow_wood.ogg"},{sound:"sneaker scuf light grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_scuf_light_grit.ogg"},{sound:"sneaker scuf sollid wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_scuf_sollid_wood.ogg"},{sound:"sneaker sidestep hollow wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_sidestep_hollow_wood.ogg"},{sound:"sneaker sidesteps concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_sidesteps_concrete.ogg"},{sound:"sneaker sidesteps dirt",url:"https://actions.google.com/sounds/v1/foley/sneaker_sidesteps_dirt.ogg"},{sound:"sneaker sidesteps light grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_sidesteps_light_grit.ogg"},{sound:"sneaker sidesteps rough grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_sidesteps_rough_grit.ogg"},{sound:"sneaker sidesteps solid wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_sidesteps_solid_wood.ogg"},{sound:"sneaker small jump concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_small_jump_concrete.ogg"},{sound:"sneaker small jump dirt",url:"https://actions.google.com/sounds/v1/foley/sneaker_small_jump_dirt.ogg"},{sound:"sneaker small jump light grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_small_jump_light_grit.ogg"},{sound:"sneaker small jump rough grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_small_jump_rough_grit.ogg"},{sound:"sneaker small jump solid wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_small_jump_solid_wood.ogg"},{sound:"sneaker small jumps concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_small_jumps_concrete.ogg"},{sound:"sneaker small jumps solid wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_small_jumps_solid_wood.ogg"},{sound:"sneaker small solid jumps dirt",url:"https://actions.google.com/sounds/v1/foley/sneaker_small_solid_jumps_dirt.ogg"},{sound:"sneaker small solid jumps grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_small_solid_jumps_grit.ogg"},{sound:"sneaker solid jump hollow wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_solid_jump_hollow_wood.ogg"},{sound:"sneaker solid jumps concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_solid_jumps_concrete.ogg"},{sound:"sneaker stairs jog concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_stairs_jog_concrete.ogg"},{sound:"sneaker stairs run concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_stairs_run_concrete.ogg"},{sound:"sneaker stairs run wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_stairs_run_wood.ogg"},{sound:"sneaker stairs up jog concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_stairs_up_jog_concrete.ogg"},{sound:"sneaker stairs up run concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_stairs_up_run_concrete.ogg"},{sound:"sneaker stairs up run solid wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_stairs_up_run_solid_wood.ogg"},{sound:"sneaker stairs up walk concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_stairs_up_walk_concrete.ogg"},{sound:"sneaker stairs walk concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_stairs_walk_concrete.ogg"},{sound:"sneaker stairs walk jog",url:"https://actions.google.com/sounds/v1/foley/sneaker_stairs_walk_jog.ogg"},{sound:"sneaker stairs walk solid wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_stairs_walk_solid_wood.ogg"},{sound:"sneaker stairs walk wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_stairs_walk_wood.ogg"},{sound:"sneaker stumble concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_stumble_concrete.ogg"},{sound:"sneaker stumble forward dirt",url:"https://actions.google.com/sounds/v1/foley/sneaker_stumble_forward_dirt.ogg"},{sound:"sneaker stumble forward grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_stumble_forward_grit.ogg"},{sound:"sneaker stumble forward wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_stumble_forward_wood.ogg"},{sound:"sneaker stumble side concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_stumble_side_concrete.ogg"},{sound:"sneaker stumble side dirt",url:"https://actions.google.com/sounds/v1/foley/sneaker_stumble_side_dirt.ogg"},{sound:"sneaker stumble side light grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_stumble_side_light_grit.ogg"},{sound:"sneaker stumble side rough grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_stumble_side_rough_grit.ogg"},{sound:"sneaker stumble side solid wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_stumble_side_solid_wood.ogg"},{sound:"sneaker toe slides concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_toe_slides_concrete.ogg"},{sound:"sneaker toe slides dirt",url:"https://actions.google.com/sounds/v1/foley/sneaker_toe_slides_dirt.ogg"},{sound:"sneaker toe slides hollow wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_toe_slides_hollow_wood.ogg"},{sound:"sneaker toe slides light grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_toe_slides_light_grit.ogg"},{sound:"sneaker toe slides solid wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_toe_slides_solid_wood.ogg"},{sound:"sneaker turnaround concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_turnaround_concrete.ogg"},{sound:"sneaker turnaround dirt",url:"https://actions.google.com/sounds/v1/foley/sneaker_turnaround_dirt.ogg"},{sound:"sneaker turnaround hollow wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_turnaround_hollow_wood.ogg"},{sound:"sneaker turnaround light grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_turnaround_light_grit.ogg"},{sound:"sneaker turnaround rough grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_turnaround_rough_grit.ogg"},{sound:"sneaker turnaround solid wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_turnaround_solid_wood.ogg"},{sound:"sneaker walk concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_walk_concrete.ogg"},{sound:"sneaker walk dirt",url:"https://actions.google.com/sounds/v1/foley/sneaker_walk_dirt.ogg"},{sound:"sneaker walk hollow wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_walk_hollow_wood.ogg"},{sound:"sneaker walk light grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_walk_light_grit.ogg"},{sound:"sneaker walk solid wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_walk_solid_wood.ogg"},{sound:"sneaker in soggy grass series",url:"https://actions.google.com/sounds/v1/foley/sneaker_in_soggy_grass_series.ogg"},{sound:"sneaker in shallow water series",url:"https://actions.google.com/sounds/v1/foley/sneaker_in_shallow_water_series.ogg"},{sound:"sneaker mount stumble concrete",url:"https://actions.google.com/sounds/v1/foley/sneaker_mount_stumble_concrete.ogg"},{sound:"sneaker mount stumble dirt",url:"https://actions.google.com/sounds/v1/foley/sneaker_mount_stumble_dirt.ogg"},{sound:"sneaker mount stumble hollow wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_mount_stumble_hollow_wood.ogg"},{sound:"sneaker mount stumble light grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_mount_stumble_light_grit.ogg"},{sound:"sneaker mount stumble rough grit",url:"https://actions.google.com/sounds/v1/foley/sneaker_mount_stumble_rough_grit.ogg"},{sound:"sneaker mount stumble solid wood",url:"https://actions.google.com/sounds/v1/foley/sneaker_mount_stumble_solid_wood.ogg"},{sound:"sneaker on concrete series fast",url:"https://actions.google.com/sounds/v1/foley/sneaker_on_concrete_series_fast.ogg"},{sound:"sneaker on concrete series slow",url:"https://actions.google.com/sounds/v1/foley/sneaker_on_concrete_series_slow.ogg"},{sound:"sneaker on dirt series slow",url:"https://actions.google.com/sounds/v1/foley/sneaker_on_dirt_series_slow.ogg"},{sound:"sneaker on grass series slow",url:"https://actions.google.com/sounds/v1/foley/sneaker_on_grass_series_slow.ogg"},{sound:"sneaker on metal grate series",url:"https://actions.google.com/sounds/v1/foley/sneaker_on_metal_grate_series.ogg"},{sound:"sneaker on rock debris series",url:"https://actions.google.com/sounds/v1/foley/sneaker_on_rock_debris_series.ogg"},{sound:"sneakers on plastic sheeting",url:"https://actions.google.com/sounds/v1/foley/sneakers_on_plastic_sheeting.ogg"},{sound:"sneakers on tile",url:"https://actions.google.com/sounds/v1/foley/sneakers_on_tile.ogg"},{sound:"sneakers run concrete",url:"https://actions.google.com/sounds/v1/foley/sneakers_run_concrete.ogg"},{sound:"sneakers run dirt",url:"https://actions.google.com/sounds/v1/foley/sneakers_run_dirt.ogg"},{sound:"sneakers run gravel",url:"https://actions.google.com/sounds/v1/foley/sneakers_run_gravel.ogg"},{sound:"sneakers run light grit",url:"https://actions.google.com/sounds/v1/foley/sneakers_run_light_grit.ogg"},{sound:"sneakers run wood",url:"https://actions.google.com/sounds/v1/foley/sneakers_run_wood.ogg"},{sound:"soap pickup",url:"https://actions.google.com/sounds/v1/foley/soap_pickup.ogg"},{sound:"socks on wood scuf",url:"https://actions.google.com/sounds/v1/foley/socks_on_wood_scuf.ogg"},{sound:"socks on wood start and stop",url:"https://actions.google.com/sounds/v1/foley/socks_on_wood_start_and_stop.ogg"},{sound:"socks on wood turns",url:"https://actions.google.com/sounds/v1/foley/socks_on_wood_turns.ogg"},{sound:"soft soles on wood porch",url:"https://actions.google.com/sounds/v1/foley/soft_soles_on_wood_porch.ogg"},{sound:"soft walk on wood and tile",url:"https://actions.google.com/sounds/v1/foley/soft_walk_on_wood_and_tile.ogg"},{sound:"soft walking on wood",url:"https://actions.google.com/sounds/v1/foley/soft_walking_on_wood.ogg"},{sound:"soggy steps",url:"https://actions.google.com/sounds/v1/foley/soggy_steps.ogg"},{sound:"splashing water",url:"https://actions.google.com/sounds/v1/foley/splashing_water.ogg"},{sound:"splashing water fast",url:"https://actions.google.com/sounds/v1/foley/splashing_water_fast.ogg"},{sound:"spring walking in snow",url:"https://actions.google.com/sounds/v1/foley/spring_walking_in_snow.ogg"},{sound:"stairs",url:"https://actions.google.com/sounds/v1/foley/stairs.ogg"},{sound:"stick break",url:"https://actions.google.com/sounds/v1/foley/stick_break.ogg"},{sound:"stirring liquid in glass",url:"https://actions.google.com/sounds/v1/foley/stirring_liquid_in_glass.ogg"},{sound:"stomp in gravel",url:"https://actions.google.com/sounds/v1/foley/stomp_in_gravel.ogg"},{sound:"stomping around room",url:"https://actions.google.com/sounds/v1/foley/stomping_around_room.ogg"},{sound:"stringing christmas tree lights",url:"https://actions.google.com/sounds/v1/foley/stringing_christmas_tree_lights.ogg"},{sound:"stumble concrete",url:"https://actions.google.com/sounds/v1/foley/stumble_concrete.ogg"},{sound:"stumble dirt",url:"https://actions.google.com/sounds/v1/foley/stumble_dirt.ogg"},{sound:"stumble grit",url:"https://actions.google.com/sounds/v1/foley/stumble_grit.ogg"},{sound:"stumble hollow wood",url:"https://actions.google.com/sounds/v1/foley/stumble_hollow_wood.ogg"},{sound:"stumble on gravel",url:"https://actions.google.com/sounds/v1/foley/stumble_on_gravel.ogg"},{sound:"stumble on solid wood",url:"https://actions.google.com/sounds/v1/foley/stumble_on_solid_wood.ogg"},{sound:"stumble solid wood",url:"https://actions.google.com/sounds/v1/foley/stumble_solid_wood.ogg"},{sound:"styrofoam carton",url:"https://actions.google.com/sounds/v1/foley/styrofoam_carton.ogg"},{sound:"swoosh",url:"https://actions.google.com/sounds/v1/foley/swoosh.ogg"},{sound:"tamping soil",url:"https://actions.google.com/sounds/v1/foley/tamping_soil.ogg"},{sound:"tap",url:"https://actions.google.com/sounds/v1/foley/tap.ogg"},{sound:"thumb suck series",url:"https://actions.google.com/sounds/v1/foley/thumb_suck_series.ogg"},{sound:"tools scraping",url:"https://actions.google.com/sounds/v1/foley/tools_scraping.ogg"},{sound:"tossing wood series",url:"https://actions.google.com/sounds/v1/foley/tossing_wood_series.ogg"},{sound:"turnaround on concrete",url:"https://actions.google.com/sounds/v1/foley/turnaround_on_concrete.ogg"},{sound:"turnaround on gravel",url:"https://actions.google.com/sounds/v1/foley/turnaround_on_gravel.ogg"},{sound:"turnaround on hollow wood",url:"https://actions.google.com/sounds/v1/foley/turnaround_on_hollow_wood.ogg"},{sound:"tweeter electric static",url:"https://actions.google.com/sounds/v1/foley/tweeter_electric_static.ogg"},{sound:"urination behind door",url:"https://actions.google.com/sounds/v1/foley/urination_behind_door.ogg"},{sound:"urination in bathroom",url:"https://actions.google.com/sounds/v1/foley/urination_in_bathroom.ogg"},{sound:"using cardboard",url:"https://actions.google.com/sounds/v1/foley/using_cardboard.ogg"},{sound:"using thick paper",url:"https://actions.google.com/sounds/v1/foley/using_thick_paper.ogg"},{sound:"walk",url:"https://actions.google.com/sounds/v1/foley/walk.ogg"},{sound:"walk barefoot on wood",url:"https://actions.google.com/sounds/v1/foley/walk_barefoot_on_wood.ogg"},{sound:"walk dirt",url:"https://actions.google.com/sounds/v1/foley/walk_dirt.ogg"},{sound:"walk down concrete stairs",url:"https://actions.google.com/sounds/v1/foley/walk_down_concrete_stairs.ogg"},{sound:"walk down solid wood stairs",url:"https://actions.google.com/sounds/v1/foley/walk_down_solid_wood_stairs.ogg"},{sound:"walk fast on concrete series",url:"https://actions.google.com/sounds/v1/foley/walk_fast_on_concrete_series.ogg"},{sound:"walk fast on gravel series",url:"https://actions.google.com/sounds/v1/foley/walk_fast_on_gravel_series.ogg"},{sound:"walk fast on hollow wood series",url:"https://actions.google.com/sounds/v1/foley/walk_fast_on_hollow_wood_series.ogg"},{sound:"walk gravel",url:"https://actions.google.com/sounds/v1/foley/walk_gravel.ogg"},{sound:"walk on dirt",url:"https://actions.google.com/sounds/v1/foley/walk_on_dirt.ogg"},{sound:"walk on gravel",url:"https://actions.google.com/sounds/v1/foley/walk_on_gravel.ogg"},{sound:"walk on hollow wood",url:"https://actions.google.com/sounds/v1/foley/walk_on_hollow_wood.ogg"},{sound:"walk on light grit",url:"https://actions.google.com/sounds/v1/foley/walk_on_light_grit.ogg"},{sound:"walk turn concrete",url:"https://actions.google.com/sounds/v1/foley/walk_turn_concrete.ogg"},{sound:"walk turn dirt",url:"https://actions.google.com/sounds/v1/foley/walk_turn_dirt.ogg"},{sound:"walk turn gravel",url:"https://actions.google.com/sounds/v1/foley/walk_turn_gravel.ogg"},{sound:"walk turn grit",url:"https://actions.google.com/sounds/v1/foley/walk_turn_grit.ogg"},{sound:"walk turn hollow wood",url:"https://actions.google.com/sounds/v1/foley/walk_turn_hollow_wood.ogg"},{sound:"walk up concrete stairs",url:"https://actions.google.com/sounds/v1/foley/walk_up_concrete_stairs.ogg"},{sound:"walk up hollow wood stairs",url:"https://actions.google.com/sounds/v1/foley/walk_up_hollow_wood_stairs.ogg"},{sound:"walk up stairs",url:"https://actions.google.com/sounds/v1/foley/walk_up_stairs.ogg"},{sound:"walk up stairs concrete",url:"https://actions.google.com/sounds/v1/foley/walk_up_stairs_concrete.ogg"},{sound:"walk up stairs wood",url:"https://actions.google.com/sounds/v1/foley/walk_up_stairs_wood.ogg"},{sound:"walk in shallow water series",url:"https://actions.google.com/sounds/v1/foley/walk_in_shallow_water_series.ogg"},{sound:"walk on dirt series",url:"https://actions.google.com/sounds/v1/foley/walk_on_dirt_series.ogg"},{sound:"walk on grass series",url:"https://actions.google.com/sounds/v1/foley/walk_on_grass_series.ogg"},{sound:"walk on hollow wood series",url:"https://actions.google.com/sounds/v1/foley/walk_on_hollow_wood_series.ogg"},{sound:"walk on muddy gravel series",url:"https://actions.google.com/sounds/v1/foley/walk_on_muddy_gravel_series.ogg"},{sound:"walk on rocks",url:"https://actions.google.com/sounds/v1/foley/walk_on_rocks.ogg"},{sound:"walk on snow series",url:"https://actions.google.com/sounds/v1/foley/walk_on_snow_series.ogg"},{sound:"walk on soggy grass series",url:"https://actions.google.com/sounds/v1/foley/walk_on_soggy_grass_series.ogg"},{sound:"walk on solid metal series",url:"https://actions.google.com/sounds/v1/foley/walk_on_solid_metal_series.ogg"},{sound:"walk on tile series",url:"https://actions.google.com/sounds/v1/foley/walk_on_tile_series.ogg"},{sound:"walking barefoot over grass",url:"https://actions.google.com/sounds/v1/foley/walking_barefoot_over_grass.ogg"},{sound:"walking fast on tile",url:"https://actions.google.com/sounds/v1/foley/walking_fast_on_tile.ogg"},{sound:"walking in a mud puddle",url:"https://actions.google.com/sounds/v1/foley/walking_in_a_mud_puddle.ogg"},{sound:"walking in forest",url:"https://actions.google.com/sounds/v1/foley/walking_in_forest.ogg"},{sound:"walking in shallow water",url:"https://actions.google.com/sounds/v1/foley/walking_in_shallow_water.ogg"},{sound:"walking on gravel path",url:"https://actions.google.com/sounds/v1/foley/walking_on_gravel_path.ogg"},{sound:"walking tile to carpet",url:"https://actions.google.com/sounds/v1/foley/walking_tile_to_carpet.ogg"},{sound:"walking wood floor house",url:"https://actions.google.com/sounds/v1/foley/walking_wood_floor_house.ogg"},{sound:"walking fast on concrete",url:"https://actions.google.com/sounds/v1/foley/walking_fast_on_concrete.ogg"},{sound:"walking fast on dirt",url:"https://actions.google.com/sounds/v1/foley/walking_fast_on_dirt.ogg"},{sound:"walking fast on grass",url:"https://actions.google.com/sounds/v1/foley/walking_fast_on_grass.ogg"},{sound:"walking fast on metal grate",url:"https://actions.google.com/sounds/v1/foley/walking_fast_on_metal_grate.ogg"},{sound:"walking fast on muddy grass",url:"https://actions.google.com/sounds/v1/foley/walking_fast_on_muddy_grass.ogg"},{sound:"walking fast on rock debris",url:"https://actions.google.com/sounds/v1/foley/walking_fast_on_rock_debris.ogg"},{sound:"walking fast over hollow metal",url:"https://actions.google.com/sounds/v1/foley/walking_fast_over_hollow_metal.ogg"},{sound:"walking in shallow snow",url:"https://actions.google.com/sounds/v1/foley/walking_in_shallow_snow.ogg"},{sound:"walking in shallow water",url:"https://actions.google.com/sounds/v1/foley/walking_in_shallow_water.ogg"},{sound:"walking in snow",url:"https://actions.google.com/sounds/v1/foley/walking_in_snow.ogg"},{sound:"walking on concrete series",url:"https://actions.google.com/sounds/v1/foley/walking_on_concrete_series.ogg"},{sound:"walking on grass",url:"https://actions.google.com/sounds/v1/foley/walking_on_grass.ogg"},{sound:"walking on gravel",url:"https://actions.google.com/sounds/v1/foley/walking_on_gravel.ogg"},{sound:"walking on muddy grass",url:"https://actions.google.com/sounds/v1/foley/walking_on_muddy_grass.ogg"},{sound:"walking on rock debris",url:"https://actions.google.com/sounds/v1/foley/walking_on_rock_debris.ogg"},{sound:"walking on wood",url:"https://actions.google.com/sounds/v1/foley/walking_on_wood.ogg"},{sound:"walking on wood floor",url:"https://actions.google.com/sounds/v1/foley/walking_on_wood_floor.ogg"},{sound:"walking over hollow metal",url:"https://actions.google.com/sounds/v1/foley/walking_over_hollow_metal.ogg"},{sound:"walking through woods",url:"https://actions.google.com/sounds/v1/foley/walking_through_woods.ogg"},{sound:"wash hands running water",url:"https://actions.google.com/sounds/v1/foley/wash_hands_running_water.ogg"},{sound:"washing hands no sink",url:"https://actions.google.com/sounds/v1/foley/washing_hands_no_sink.ogg"},{sound:"washing hands water off",url:"https://actions.google.com/sounds/v1/foley/washing_hands_water_off.ogg"},{sound:"water splashes series",url:"https://actions.google.com/sounds/v1/foley/water_splashes_series.ogg"},{sound:"water splashing",url:"https://actions.google.com/sounds/v1/foley/water_splashing.ogg"},{sound:"water walk series sweetener",url:"https://actions.google.com/sounds/v1/foley/water_walk_series_sweetener.ogg"},{sound:"wet shoes walking series",url:"https://actions.google.com/sounds/v1/foley/wet_shoes_walking_series.ogg"},{sound:"wind whip",url:"https://actions.google.com/sounds/v1/foley/wind_whip.ogg"},{sound:"wine glass sip",url:"https://actions.google.com/sounds/v1/foley/wine_glass_sip.ogg"},{sound:"wiping off counter",url:"https://actions.google.com/sounds/v1/foley/wiping_off_counter.ogg"},{sound:"wiping out sink with hand",url:"https://actions.google.com/sounds/v1/foley/wiping_out_sink_with_hand.ogg"},{sound:"wood pencil drop roll wobble",url:"https://actions.google.com/sounds/v1/foley/wood_pencil_drop_roll_wobble.ogg"},{sound:"wood scraps shuffling",url:"https://actions.google.com/sounds/v1/foley/wood_scraps_shuffling.ogg"},{sound:"wood tapping on board",url:"https://actions.google.com/sounds/v1/foley/wood_tapping_on_board.ogg"},{sound:"wooden bead hitting series",url:"https://actions.google.com/sounds/v1/foley/wooden_bead_hitting_series.ogg"},{sound:"zipper",url:"https://actions.google.com/sounds/v1/foley/zipper.ogg"},{sound:"drawing on paper with pencil",url:"https://actions.google.com/sounds/v1/foley/drawing_on_paper_with_pencil.ogg"},{sound:"aggressive zombie snarls",url:"https://actions.google.com/sounds/v1/horror/aggressive_zombie_snarls.ogg"},{sound:"alien squawk echo",url:"https://actions.google.com/sounds/v1/horror/alien_squawk_echo.ogg"},{sound:"ambient hum pitched",url:"https://actions.google.com/sounds/v1/horror/ambient_hum_pitched.ogg"},{sound:"carcass shake rib cage",url:"https://actions.google.com/sounds/v1/horror/carcass_shake_rib_cage.ogg"},{sound:"carving wet scrape",url:"https://actions.google.com/sounds/v1/horror/carving_wet_scrape.ogg"},{sound:"cut and handle meat",url:"https://actions.google.com/sounds/v1/horror/cut_and_handle_meat.ogg"},{sound:"cutting flesh",url:"https://actions.google.com/sounds/v1/horror/cutting_flesh.ogg"},{sound:"cutting fresh meat",url:"https://actions.google.com/sounds/v1/horror/cutting_fresh_meat.ogg"},{sound:"cutting and chopping faint",url:"https://actions.google.com/sounds/v1/horror/cutting_and_chopping_faint.ogg"},{sound:"dissecting a body",url:"https://actions.google.com/sounds/v1/horror/dissecting_a_body.ogg"},{sound:"drop meat",url:"https://actions.google.com/sounds/v1/horror/drop_meat.ogg"},{sound:"female monster attacking",url:"https://actions.google.com/sounds/v1/horror/female_monster_attacking.ogg"},{sound:"female monster growls",url:"https://actions.google.com/sounds/v1/horror/female_monster_growls.ogg"},{sound:"hallow wind",url:"https://actions.google.com/sounds/v1/horror/hallow_wind.ogg"},{sound:"hand digging through guts",url:"https://actions.google.com/sounds/v1/horror/hand_digging_through_guts.ogg"},{sound:"leg bone break",url:"https://actions.google.com/sounds/v1/horror/leg_bone_break.ogg"},{sound:"leg bone break and twist",url:"https://actions.google.com/sounds/v1/horror/leg_bone_break_and_twist.ogg"},{sound:"liquid spurt",url:"https://actions.google.com/sounds/v1/horror/liquid_spurt.ogg"},{sound:"meat punch",url:"https://actions.google.com/sounds/v1/horror/meat_punch.ogg"},{sound:"meat stick hit",url:"https://actions.google.com/sounds/v1/horror/meat_stick_hit.ogg"},{sound:"monster alien growl calm",url:"https://actions.google.com/sounds/v1/horror/monster_alien_growl_calm.ogg"},{sound:"monster alien growl pained",url:"https://actions.google.com/sounds/v1/horror/monster_alien_growl_pained.ogg"},{sound:"monster alien growl tense",url:"https://actions.google.com/sounds/v1/horror/monster_alien_growl_tense.ogg"},{sound:"monster alien grunt",url:"https://actions.google.com/sounds/v1/horror/monster_alien_grunt.ogg"},{sound:"monster alien grunt hiss",url:"https://actions.google.com/sounds/v1/horror/monster_alien_grunt_hiss.ogg"},{sound:"monster alien grunt sleepy",url:"https://actions.google.com/sounds/v1/horror/monster_alien_grunt_sleepy.ogg"},{sound:"peeling skin from bone",url:"https://actions.google.com/sounds/v1/horror/peeling_skin_from_bone.ogg"},{sound:"peeling skin off of game",url:"https://actions.google.com/sounds/v1/horror/peeling_skin_off_of_game.ogg"},{sound:"pulling bone cracks",url:"https://actions.google.com/sounds/v1/horror/pulling_bone_cracks.ogg"},{sound:"puncture pop",url:"https://actions.google.com/sounds/v1/horror/puncture_pop.ogg"},{sound:"ring high pitch",url:"https://actions.google.com/sounds/v1/horror/ring_high_pitch.ogg"},{sound:"ripping pulling meat",url:"https://actions.google.com/sounds/v1/horror/ripping_pulling_meat.ogg"},{sound:"sawing leg bone",url:"https://actions.google.com/sounds/v1/horror/sawing_leg_bone.ogg"},{sound:"sawing skin cut",url:"https://actions.google.com/sounds/v1/horror/sawing_skin_cut.ogg"},{sound:"scraping skin cut",url:"https://actions.google.com/sounds/v1/horror/scraping_skin_cut.ogg"},{sound:"shoulder move on dead body",url:"https://actions.google.com/sounds/v1/horror/shoulder_move_on_dead_body.ogg"},{sound:"skil saw hit on body",url:"https://actions.google.com/sounds/v1/horror/skil_saw_hit_on_body.ogg"},{sound:"swoosh",url:"https://actions.google.com/sounds/v1/horror/swoosh.ogg"},{sound:"synthetic insects",url:"https://actions.google.com/sounds/v1/horror/synthetic_insects.ogg"},{sound:"twist and break spine",url:"https://actions.google.com/sounds/v1/horror/twist_and_break_spine.ogg"},{sound:"water spray on body steady stream",url:"https://actions.google.com/sounds/v1/horror/water_spray_on_body_steady_stream.ogg"},{sound:"wet leg cut off",url:"https://actions.google.com/sounds/v1/horror/wet_leg_cut_off.ogg"},{sound:"wet meat cut and rip",url:"https://actions.google.com/sounds/v1/horror/wet_meat_cut_and_rip.ogg"},{sound:"wet meat cutting and peeling",url:"https://actions.google.com/sounds/v1/horror/wet_meat_cutting_and_peeling.ogg"},{sound:"wet meat twist",url:"https://actions.google.com/sounds/v1/horror/wet_meat_twist.ogg"},{sound:"wet meat twist and rip",url:"https://actions.google.com/sounds/v1/horror/wet_meat_twist_and_rip.ogg"},{sound:"wet tearing meat",url:"https://actions.google.com/sounds/v1/horror/wet_tearing_meat.ogg"},{sound:"aluminum can crunch series",url:"https://actions.google.com/sounds/v1/household/aluminum_can_crunch_series.ogg"},{sound:"bacon out of package",url:"https://actions.google.com/sounds/v1/household/bacon_out_of_package.ogg"},{sound:"bacon peel and flop",url:"https://actions.google.com/sounds/v1/household/bacon_peel_and_flop.ogg"},{sound:"baking",url:"https://actions.google.com/sounds/v1/household/baking.ogg"},{sound:"bottles empty close",url:"https://actions.google.com/sounds/v1/household/bottles_empty_close.ogg"},{sound:"bottles empty far",url:"https://actions.google.com/sounds/v1/household/bottles_empty_far.ogg"},{sound:"bowl spin",url:"https://actions.google.com/sounds/v1/household/bowl_spin.ogg"},{sound:"bowls on table",url:"https://actions.google.com/sounds/v1/household/bowls_on_table.ogg"},{sound:"button push",url:"https://actions.google.com/sounds/v1/household/button_push.ogg"},{sound:"cans into cabinet",url:"https://actions.google.com/sounds/v1/household/cans_into_cabinet.ogg"},{sound:"cell phone vibrate",url:"https://actions.google.com/sounds/v1/household/cell_phone_vibrate.ogg"},{sound:"chopping vegetables",url:"https://actions.google.com/sounds/v1/household/chopping_vegetables.ogg"},{sound:"clock ticking",url:"https://actions.google.com/sounds/v1/household/clock_ticking.ogg"},{sound:"creaky oven door open",url:"https://actions.google.com/sounds/v1/household/creaky_oven_door_open.ogg"},{sound:"cup on saucer",url:"https://actions.google.com/sounds/v1/household/cup_on_saucer.ogg"},{sound:"dish sliding on table",url:"https://actions.google.com/sounds/v1/household/dish_sliding_on_table.ogg"},{sound:"dishes laid on table",url:"https://actions.google.com/sounds/v1/household/dishes_laid_on_table.ogg"},{sound:"dishes shuffling",url:"https://actions.google.com/sounds/v1/household/dishes_shuffling.ogg"},{sound:"door cabinet",url:"https://actions.google.com/sounds/v1/household/door_cabinet.ogg"},{sound:"drawer open close",url:"https://actions.google.com/sounds/v1/household/drawer_open_close.ogg"},{sound:"drawer rolling in out",url:"https://actions.google.com/sounds/v1/household/drawer_rolling_in_out.ogg"},{sound:"electric tooth brush",url:"https://actions.google.com/sounds/v1/household/electric_tooth_brush.ogg"},{sound:"electric tooth brush switch",url:"https://actions.google.com/sounds/v1/household/electric_tooth_brush_switch.ogg"},{sound:"fireplace tools",url:"https://actions.google.com/sounds/v1/household/fireplace_tools.ogg"},{sound:"floating ice in a glass",url:"https://actions.google.com/sounds/v1/household/floating_ice_in_a_glass.ogg"},{sound:"freezer ice into plastic cup",url:"https://actions.google.com/sounds/v1/household/freezer_ice_into_plastic_cup.ogg"},{sound:"fridge door swing open",url:"https://actions.google.com/sounds/v1/household/fridge_door_swing_open.ogg"},{sound:"full glass on wood table",url:"https://actions.google.com/sounds/v1/household/full_glass_on_wood_table.ogg"},{sound:"gas lamp flickering",url:"https://actions.google.com/sounds/v1/household/gas_lamp_flickering.ogg"},{sound:"gas lamps",url:"https://actions.google.com/sounds/v1/household/gas_lamps.ogg"},{sound:"gas stove lighter",url:"https://actions.google.com/sounds/v1/household/gas_stove_lighter.ogg"},{sound:"glass sliding on table",url:"https://actions.google.com/sounds/v1/household/glass_sliding_on_table.ogg"},{sound:"glass on tablecloth",url:"https://actions.google.com/sounds/v1/household/glass_on_tablecloth.ogg"},{sound:"glosing old window",url:"https://actions.google.com/sounds/v1/household/glosing_old_window.ogg"},{sound:"hairdryer",url:"https://actions.google.com/sounds/v1/household/hairdryer.ogg"},{sound:"hairdryer in other room",url:"https://actions.google.com/sounds/v1/household/hairdryer_in_other_room.ogg"},{sound:"hands touching sink",url:"https://actions.google.com/sounds/v1/household/hands_touching_sink.ogg"},{sound:"hanger in closet",url:"https://actions.google.com/sounds/v1/household/hanger_in_closet.ogg"},{sound:"hanging wet sheet",url:"https://actions.google.com/sounds/v1/household/hanging_wet_sheet.ogg"},{sound:"ice cubes in glass",url:"https://actions.google.com/sounds/v1/household/ice_cubes_in_glass.ogg"},{sound:"ice in glass of water",url:"https://actions.google.com/sounds/v1/household/ice_in_glass_of_water.ogg"},{sound:"ice machine into cup",url:"https://actions.google.com/sounds/v1/household/ice_machine_into_cup.ogg"},{sound:"kettle boil",url:"https://actions.google.com/sounds/v1/household/kettle_boil.ogg"},{sound:"kitchen drawer",url:"https://actions.google.com/sounds/v1/household/kitchen_drawer.ogg"},{sound:"kitchen noises",url:"https://actions.google.com/sounds/v1/household/kitchen_noises.ogg"},{sound:"knife cuting food on plate",url:"https://actions.google.com/sounds/v1/household/knife_cuting_food_on_plate.ogg"},{sound:"knife cutting and rattle",url:"https://actions.google.com/sounds/v1/household/knife_cutting_and_rattle.ogg"},{sound:"knife on wood table",url:"https://actions.google.com/sounds/v1/household/knife_on_wood_table.ogg"},{sound:"lam switch far",url:"https://actions.google.com/sounds/v1/household/lam_switch_far.ogg"},{sound:"lamp switch near",url:"https://actions.google.com/sounds/v1/household/lamp_switch_near.ogg"},{sound:"lamp switch on off",url:"https://actions.google.com/sounds/v1/household/lamp_switch_on_off.ogg"},{sound:"latch opening closing",url:"https://actions.google.com/sounds/v1/household/latch_opening_closing.ogg"},{sound:"laundry basket actions",url:"https://actions.google.com/sounds/v1/household/laundry_basket_actions.ogg"},{sound:"long silence at top",url:"https://actions.google.com/sounds/v1/household/long_silence_at_top.ogg"},{sound:"meat preparation",url:"https://actions.google.com/sounds/v1/household/meat_preparation.ogg"},{sound:"metal cleaning",url:"https://actions.google.com/sounds/v1/household/metal_cleaning.ogg"},{sound:"metal container on wood table",url:"https://actions.google.com/sounds/v1/household/metal_container_on_wood_table.ogg"},{sound:"metal gear shifting",url:"https://actions.google.com/sounds/v1/household/metal_gear_shifting.ogg"},{sound:"metal scrap kicking",url:"https://actions.google.com/sounds/v1/household/metal_scrap_kicking.ogg"},{sound:"metal scrap rattling",url:"https://actions.google.com/sounds/v1/household/metal_scrap_rattling.ogg"},{sound:"metal shuffling",url:"https://actions.google.com/sounds/v1/household/metal_shuffling.ogg"},{sound:"metal spoon scrapes pot",url:"https://actions.google.com/sounds/v1/household/metal_spoon_scrapes_pot.ogg"},{sound:"open and close window",url:"https://actions.google.com/sounds/v1/household/open_and_close_window.ogg"},{sound:"opening plastic storage container",url:"https://actions.google.com/sounds/v1/household/opening_plastic_storage_container.ogg"},{sound:"oven pans",url:"https://actions.google.com/sounds/v1/household/oven_pans.ogg"},{sound:"pans clash",url:"https://actions.google.com/sounds/v1/household/pans_clash.ogg"},{sound:"paper towel rip",url:"https://actions.google.com/sounds/v1/household/paper_towel_rip.ogg"},{sound:"phone ringing",url:"https://actions.google.com/sounds/v1/household/phone_ringing.ogg"},{sound:"phone ringing untraditional",url:"https://actions.google.com/sounds/v1/household/phone_ringing_untraditional.ogg"},{sound:"plastic crumpling",url:"https://actions.google.com/sounds/v1/household/plastic_crumpling.ogg"},{sound:"plastic hanger swinging",url:"https://actions.google.com/sounds/v1/household/plastic_hanger_swinging.ogg"},{sound:"plate ceramic",url:"https://actions.google.com/sounds/v1/household/plate_ceramic.ogg"},{sound:"porcelain bowl counter series",url:"https://actions.google.com/sounds/v1/household/porcelain_bowl_counter_series.ogg"},{sound:"porcelain bowl drag series",url:"https://actions.google.com/sounds/v1/household/porcelain_bowl_drag_series.ogg"},{sound:"porcelain bowl drop short series",url:"https://actions.google.com/sounds/v1/household/porcelain_bowl_drop_short_series.ogg"},{sound:"porcelain bowl slide series",url:"https://actions.google.com/sounds/v1/household/porcelain_bowl_slide_series.ogg"},{sound:"pot on stove metal",url:"https://actions.google.com/sounds/v1/household/pot_on_stove_metal.ogg"},{sound:"pots bang",url:"https://actions.google.com/sounds/v1/household/pots_bang.ogg"},{sound:"pour boiling water into cup",url:"https://actions.google.com/sounds/v1/household/pour_boiling_water_into_cup.ogg"},{sound:"projector screen fast pull",url:"https://actions.google.com/sounds/v1/household/projector_screen_fast_pull.ogg"},{sound:"projector screen handle squeak",url:"https://actions.google.com/sounds/v1/household/projector_screen_handle_squeak.ogg"},{sound:"projector screen medium pull",url:"https://actions.google.com/sounds/v1/household/projector_screen_medium_pull.ogg"},{sound:"projector screen slow pull",url:"https://actions.google.com/sounds/v1/household/projector_screen_slow_pull.ogg"},{sound:"reaching for napkins",url:"https://actions.google.com/sounds/v1/household/reaching_for_napkins.ogg"},{sound:"refridgerator rumaging",url:"https://actions.google.com/sounds/v1/household/refridgerator_rumaging.ogg"},{sound:"scraping metal",url:"https://actions.google.com/sounds/v1/household/scraping_metal.ogg"},{sound:"scrubbing metal",url:"https://actions.google.com/sounds/v1/household/scrubbing_metal.ogg"},{sound:"sheet flap in large hall",url:"https://actions.google.com/sounds/v1/household/sheet_flap_in_large_hall.ogg"},{sound:"shower curtain pulled series",url:"https://actions.google.com/sounds/v1/household/shower_curtain_pulled_series.ogg"},{sound:"silverware on bowl",url:"https://actions.google.com/sounds/v1/household/silverware_on_bowl.ogg"},{sound:"silverware on plate",url:"https://actions.google.com/sounds/v1/household/silverware_on_plate.ogg"},{sound:"silverware on table",url:"https://actions.google.com/sounds/v1/household/silverware_on_table.ogg"},{sound:"skillet spins on burner",url:"https://actions.google.com/sounds/v1/household/skillet_spins_on_burner.ogg"},{sound:"sliding window aggressive",url:"https://actions.google.com/sounds/v1/household/sliding_window_aggressive.ogg"},{sound:"sliding window latching",url:"https://actions.google.com/sounds/v1/household/sliding_window_latching.ogg"},{sound:"sliding window series",url:"https://actions.google.com/sounds/v1/household/sliding_window_series.ogg"},{sound:"slotted blinds open and close",url:"https://actions.google.com/sounds/v1/household/slotted_blinds_open_and_close.ogg"},{sound:"slotted blinds opening",url:"https://actions.google.com/sounds/v1/household/slotted_blinds_opening.ogg"},{sound:"small drawer open close",url:"https://actions.google.com/sounds/v1/household/small_drawer_open_close.ogg"},{sound:"spatula down knife up",url:"https://actions.google.com/sounds/v1/household/spatula_down_knife_up.ogg"},{sound:"spice jar on tile floor",url:"https://actions.google.com/sounds/v1/household/spice_jar_on_tile_floor.ogg"},{sound:"spoon on bowl",url:"https://actions.google.com/sounds/v1/household/spoon_on_bowl.ogg"},{sound:"spray bottle",url:"https://actions.google.com/sounds/v1/household/spray_bottle.ogg"},{sound:"sweeping wooden porch",url:"https://actions.google.com/sounds/v1/household/sweeping_wooden_porch.ogg"},{sound:"telephone ring",url:"https://actions.google.com/sounds/v1/household/telephone_ring.ogg"},{sound:"toilet flush small bathroom",url:"https://actions.google.com/sounds/v1/household/toilet_flush_small_bathroom.ogg"},{sound:"toilet flush through closed door",url:"https://actions.google.com/sounds/v1/household/toilet_flush_through_closed_door.ogg"},{sound:"toliet flush",url:"https://actions.google.com/sounds/v1/household/toliet_flush.ogg"},{sound:"toliet flush far",url:"https://actions.google.com/sounds/v1/household/toliet_flush_far.ogg"},{sound:"toliet flush very close",url:"https://actions.google.com/sounds/v1/household/toliet_flush_very_close.ogg"},{sound:"toliet seat closing series",url:"https://actions.google.com/sounds/v1/household/toliet_seat_closing_series.ogg"},{sound:"typing keyboard",url:"https://actions.google.com/sounds/v1/household/typing_keyboard.ogg"},{sound:"vegetables down on counter series",url:"https://actions.google.com/sounds/v1/household/vegetables_down_on_counter_series.ogg"},{sound:"vegetables mixing in metal bowl",url:"https://actions.google.com/sounds/v1/household/vegetables_mixing_in_metal_bowl.ogg"},{sound:"vibrate on wood",url:"https://actions.google.com/sounds/v1/household/vibrate_on_wood.ogg"},{sound:"walking cleats",url:"https://actions.google.com/sounds/v1/household/walking_cleats.ogg"},{sound:"wall light switch close",url:"https://actions.google.com/sounds/v1/household/wall_light_switch_close.ogg"},{sound:"wall light switch far",url:"https://actions.google.com/sounds/v1/household/wall_light_switch_far.ogg"},{sound:"wall light switch medium",url:"https://actions.google.com/sounds/v1/household/wall_light_switch_medium.ogg"},{sound:"washing machine door",url:"https://actions.google.com/sounds/v1/household/washing_machine_door.ogg"},{sound:"water movement in bath",url:"https://actions.google.com/sounds/v1/household/water_movement_in_bath.ogg"},{sound:"wet squeak rub on bathtub",url:"https://actions.google.com/sounds/v1/household/wet_squeak_rub_on_bathtub.ogg"},{sound:"wet towel wring",url:"https://actions.google.com/sounds/v1/household/wet_towel_wring.ogg"},{sound:"wheeling a cart",url:"https://actions.google.com/sounds/v1/household/wheeling_a_cart.ogg"},{sound:"wind chimes of shells",url:"https://actions.google.com/sounds/v1/household/wind_chimes_of_shells.ogg"},{sound:"wind drawn into fire",url:"https://actions.google.com/sounds/v1/household/wind_drawn_into_fire.ogg"},{sound:"window close series",url:"https://actions.google.com/sounds/v1/household/window_close_series.ogg"},{sound:"window latch open series",url:"https://actions.google.com/sounds/v1/household/window_latch_open_series.ogg"},{sound:"wine bottle on wood table",url:"https://actions.google.com/sounds/v1/household/wine_bottle_on_wood_table.ogg"},{sound:"wine bottles clinking",url:"https://actions.google.com/sounds/v1/household/wine_bottles_clinking.ogg"},{sound:"wineglass on wood soft",url:"https://actions.google.com/sounds/v1/household/wineglass_on_wood_soft.ogg"},{sound:"wood scraps shuffling",url:"https://actions.google.com/sounds/v1/household/wood_scraps_shuffling.ogg"},{sound:"baby cry long",url:"https://actions.google.com/sounds/v1/human_sounds/baby_cry_long.ogg"},{sound:"babies coo",url:"https://actions.google.com/sounds/v1/human_voices/babies_coo.ogg"},{sound:"babies cry",url:"https://actions.google.com/sounds/v1/human_voices/babies_cry.ogg"},{sound:"baby cry cough",url:"https://actions.google.com/sounds/v1/human_voices/baby_cry_cough.ogg"},{sound:"baby cry long",url:"https://actions.google.com/sounds/v1/human_voices/baby_cry_long.ogg"},{sound:"baby sleep breaths",url:"https://actions.google.com/sounds/v1/human_voices/baby_sleep_breaths.ogg"},{sound:"baby whine",url:"https://actions.google.com/sounds/v1/human_voices/baby_whine.ogg"},{sound:"breathing echo space",url:"https://actions.google.com/sounds/v1/human_voices/breathing_echo_space.ogg"},{sound:"breathing running",url:"https://actions.google.com/sounds/v1/human_voices/breathing_running.ogg"},{sound:"breathing deep fast",url:"https://actions.google.com/sounds/v1/human_voices/breathing_deep_fast.ogg"},{sound:"death impact yell multiple",url:"https://actions.google.com/sounds/v1/human_voices/death_impact_yell_multiple.ogg"},{sound:"death impact yell single",url:"https://actions.google.com/sounds/v1/human_voices/death_impact_yell_single.ogg"},{sound:"death rattle breath",url:"https://actions.google.com/sounds/v1/human_voices/death_rattle_breath.ogg"},{sound:"eating and slurping",url:"https://actions.google.com/sounds/v1/human_voices/eating_and_slurping.ogg"},{sound:"human breathing",url:"https://actions.google.com/sounds/v1/human_voices/human_breathing.ogg"},{sound:"human breathing mouth",url:"https://actions.google.com/sounds/v1/human_voices/human_breathing_mouth.ogg"},{sound:"human breathing nose",url:"https://actions.google.com/sounds/v1/human_voices/human_breathing_nose.ogg"},{sound:"human burp",url:"https://actions.google.com/sounds/v1/human_voices/human_burp.ogg"},{sound:"human eating peach",url:"https://actions.google.com/sounds/v1/human_voices/human_eating_peach.ogg"},{sound:"human eating watermelon",url:"https://actions.google.com/sounds/v1/human_voices/human_eating_watermelon.ogg"},{sound:"human fart",url:"https://actions.google.com/sounds/v1/human_voices/human_fart.ogg"},{sound:"human nose sniffing",url:"https://actions.google.com/sounds/v1/human_voices/human_nose_sniffing.ogg"},{sound:"lip smacks",url:"https://actions.google.com/sounds/v1/human_voices/lip_smacks.ogg"},{sound:"male burps",url:"https://actions.google.com/sounds/v1/human_voices/male_burps.ogg"},{sound:"male chuckling",url:"https://actions.google.com/sounds/v1/human_voices/male_chuckling.ogg"},{sound:"male clearing throat",url:"https://actions.google.com/sounds/v1/human_voices/male_clearing_throat.ogg"},{sound:"male cough",url:"https://actions.google.com/sounds/v1/human_voices/male_cough.ogg"},{sound:"male crying",url:"https://actions.google.com/sounds/v1/human_voices/male_crying.ogg"},{sound:"male dramatic crying",url:"https://actions.google.com/sounds/v1/human_voices/male_dramatic_crying.ogg"},{sound:"male sick breathing",url:"https://actions.google.com/sounds/v1/human_voices/male_sick_breathing.ogg"},{sound:"male sneeze",url:"https://actions.google.com/sounds/v1/human_voices/male_sneeze.ogg"},{sound:"male sneezing into arm",url:"https://actions.google.com/sounds/v1/human_voices/male_sneezing_into_arm.ogg"},{sound:"male sniffles",url:"https://actions.google.com/sounds/v1/human_voices/male_sniffles.ogg"},{sound:"man laugh and knee slap",url:"https://actions.google.com/sounds/v1/human_voices/man_laugh_and_knee_slap.ogg"},{sound:"pa announcement close",url:"https://actions.google.com/sounds/v1/human_voices/pa_announcement_close.ogg"},{sound:"short breath series",url:"https://actions.google.com/sounds/v1/human_voices/short_breath_series.ogg"},{sound:"sniffle",url:"https://actions.google.com/sounds/v1/human_voices/sniffle.ogg"},{sound:"summer beach ambience",url:"https://actions.google.com/sounds/v1/human_voices/summer_beach_ambience.ogg"},{sound:"bamboo drop and tumble",url:"https://actions.google.com/sounds/v1/impacts/bamboo_drop_and_tumble.ogg"},{sound:"blinds pulling up",url:"https://actions.google.com/sounds/v1/impacts/blinds_pulling_up.ogg"},{sound:"body punch series",url:"https://actions.google.com/sounds/v1/impacts/body_punch_series.ogg"},{sound:"broken plates",url:"https://actions.google.com/sounds/v1/impacts/broken_plates.ogg"},{sound:"cans into bag",url:"https://actions.google.com/sounds/v1/impacts/cans_into_bag.ogg"},{sound:"car impact and scrape",url:"https://actions.google.com/sounds/v1/impacts/car_impact_and_scrape.ogg"},{sound:"chain jingle",url:"https://actions.google.com/sounds/v1/impacts/chain_jingle.ogg"},{sound:"chop",url:"https://actions.google.com/sounds/v1/impacts/chop.ogg"},{sound:"chopping hollow tree",url:"https://actions.google.com/sounds/v1/impacts/chopping_hollow_tree.ogg"},{sound:"chopping tree",url:"https://actions.google.com/sounds/v1/impacts/chopping_tree.ogg"},{sound:"closing dumpster door",url:"https://actions.google.com/sounds/v1/impacts/closing_dumpster_door.ogg"},{sound:"counting cans close",url:"https://actions.google.com/sounds/v1/impacts/counting_cans_close.ogg"},{sound:"counting cans far",url:"https://actions.google.com/sounds/v1/impacts/counting_cans_far.ogg"},{sound:"crash",url:"https://actions.google.com/sounds/v1/impacts/crash.ogg"},{sound:"crash impact sweetener",url:"https://actions.google.com/sounds/v1/impacts/crash_impact_sweetener.ogg"},{sound:"crash metal plate big room",url:"https://actions.google.com/sounds/v1/impacts/crash_metal_plate_big_room.ogg"},{sound:"crash metal sliding on metal",url:"https://actions.google.com/sounds/v1/impacts/crash_metal_sliding_on_metal.ogg"},{sound:"crash metal sweetener distant",url:"https://actions.google.com/sounds/v1/impacts/crash_metal_sweetener_distant.ogg"},{sound:"crash ribbon steel big crash",url:"https://actions.google.com/sounds/v1/impacts/crash_ribbon_steel_big_crash.ogg"},{sound:"crash ribbon steel sweetener",url:"https://actions.google.com/sounds/v1/impacts/crash_ribbon_steel_sweetener.ogg"},{sound:"crash spinning steel",url:"https://actions.google.com/sounds/v1/impacts/crash_spinning_steel.ogg"},{sound:"crash steel pipe distant",url:"https://actions.google.com/sounds/v1/impacts/crash_steel_pipe_distant.ogg"},{sound:"crash with hiss",url:"https://actions.google.com/sounds/v1/impacts/crash_with_hiss.ogg"},{sound:"crawl and rattle",url:"https://actions.google.com/sounds/v1/impacts/crawl_and_rattle.ogg"},{sound:"debris hits",url:"https://actions.google.com/sounds/v1/impacts/debris_hits.ogg"},{sound:"dirt on coffin lid",url:"https://actions.google.com/sounds/v1/impacts/dirt_on_coffin_lid.ogg"},{sound:"door barn",url:"https://actions.google.com/sounds/v1/impacts/door_barn.ogg"},{sound:"drop object on floor",url:"https://actions.google.com/sounds/v1/impacts/drop_object_on_floor.ogg"},{sound:"dumping bag of cans series",url:"https://actions.google.com/sounds/v1/impacts/dumping_bag_of_cans_series.ogg"},{sound:"dumping cans in cart close",url:"https://actions.google.com/sounds/v1/impacts/dumping_cans_in_cart_close.ogg"},{sound:"dumping cans in cart far",url:"https://actions.google.com/sounds/v1/impacts/dumping_cans_in_cart_far.ogg"},{sound:"dumpster",url:"https://actions.google.com/sounds/v1/impacts/dumpster.ogg"},{sound:"dumpster bottle smash",url:"https://actions.google.com/sounds/v1/impacts/dumpster_bottle_smash.ogg"},{sound:"dumpster door",url:"https://actions.google.com/sounds/v1/impacts/dumpster_door.ogg"},{sound:"dumpster door hit",url:"https://actions.google.com/sounds/v1/impacts/dumpster_door_hit.ogg"},{sound:"dumpster door latch",url:"https://actions.google.com/sounds/v1/impacts/dumpster_door_latch.ogg"},{sound:"dumpster rattle",url:"https://actions.google.com/sounds/v1/impacts/dumpster_rattle.ogg"},{sound:"face hit series",url:"https://actions.google.com/sounds/v1/impacts/face_hit_series.ogg"},{sound:"forest wood snapping",url:"https://actions.google.com/sounds/v1/impacts/forest_wood_snapping.ogg"},{sound:"fridge door fall open",url:"https://actions.google.com/sounds/v1/impacts/fridge_door_fall_open.ogg"},{sound:"fridge falls leaks",url:"https://actions.google.com/sounds/v1/impacts/fridge_falls_leaks.ogg"},{sound:"glass crunch",url:"https://actions.google.com/sounds/v1/impacts/glass_crunch.ogg"},{sound:"glass drop and roll",url:"https://actions.google.com/sounds/v1/impacts/glass_drop_and_roll.ogg"},{sound:"glass pieces on metal",url:"https://actions.google.com/sounds/v1/impacts/glass_pieces_on_metal.ogg"},{sound:"glass shards pouring onto metal",url:"https://actions.google.com/sounds/v1/impacts/glass_shards_pouring_onto_metal.ogg"},{sound:"glass shatters into debris",url:"https://actions.google.com/sounds/v1/impacts/glass_shatters_into_debris.ogg"},{sound:"glass windows breaking",url:"https://actions.google.com/sounds/v1/impacts/glass_windows_breaking.ogg"},{sound:"glass windows crashing",url:"https://actions.google.com/sounds/v1/impacts/glass_windows_crashing.ogg"},{sound:"hit with metal tray",url:"https://actions.google.com/sounds/v1/impacts/hit_with_metal_tray.ogg"},{sound:"hit with club",url:"https://actions.google.com/sounds/v1/impacts/hit_with_club.ogg"},{sound:"hits on roof series",url:"https://actions.google.com/sounds/v1/impacts/hits_on_roof_series.ogg"},{sound:"hooking up car to tow truck",url:"https://actions.google.com/sounds/v1/impacts/hooking_up_car_to_tow_truck.ogg"},{sound:"ice crash crumble",url:"https://actions.google.com/sounds/v1/impacts/ice_crash_crumble.ogg"},{sound:"junk crash",url:"https://actions.google.com/sounds/v1/impacts/junk_crash.ogg"},{sound:"junk rummage",url:"https://actions.google.com/sounds/v1/impacts/junk_rummage.ogg"},{sound:"keying car",url:"https://actions.google.com/sounds/v1/impacts/keying_car.ogg"},{sound:"knife drop",url:"https://actions.google.com/sounds/v1/impacts/knife_drop.ogg"},{sound:"log scrape on boulder",url:"https://actions.google.com/sounds/v1/impacts/log_scrape_on_boulder.ogg"},{sound:"loose change on wood",url:"https://actions.google.com/sounds/v1/impacts/loose_change_on_wood.ogg"},{sound:"marble drop and roll",url:"https://actions.google.com/sounds/v1/impacts/marble_drop_and_roll.ogg"},{sound:"metal banging against rocks",url:"https://actions.google.com/sounds/v1/impacts/metal_banging_against_rocks.ogg"},{sound:"metal breaking apart",url:"https://actions.google.com/sounds/v1/impacts/metal_breaking_apart.ogg"},{sound:"metal crash",url:"https://actions.google.com/sounds/v1/impacts/metal_crash.ogg"},{sound:"metal parts cling",url:"https://actions.google.com/sounds/v1/impacts/metal_parts_cling.ogg"},{sound:"metal scrap kicking",url:"https://actions.google.com/sounds/v1/impacts/metal_scrap_kicking.ogg"},{sound:"metal scrap rattling",url:"https://actions.google.com/sounds/v1/impacts/metal_scrap_rattling.ogg"},{sound:"metal sheets sliding",url:"https://actions.google.com/sounds/v1/impacts/metal_sheets_sliding.ogg"},{sound:"metal strike on wood",url:"https://actions.google.com/sounds/v1/impacts/metal_strike_on_wood.ogg"},{sound:"metal thud",url:"https://actions.google.com/sounds/v1/impacts/metal_thud.ogg"},{sound:"metal trash can filled",url:"https://actions.google.com/sounds/v1/impacts/metal_trash_can_filled.ogg"},{sound:"object grating metal",url:"https://actions.google.com/sounds/v1/impacts/object_grating_metal.ogg"},{sound:"object toss and smash",url:"https://actions.google.com/sounds/v1/impacts/object_toss_and_smash.ogg"},{sound:"object toss and smash glass",url:"https://actions.google.com/sounds/v1/impacts/object_toss_and_smash_glass.ogg"},{sound:"plastic board falling over",url:"https://actions.google.com/sounds/v1/impacts/plastic_board_falling_over.ogg"},{sound:"plastic object dropping",url:"https://actions.google.com/sounds/v1/impacts/plastic_object_dropping.ogg"},{sound:"pound on big tin bin",url:"https://actions.google.com/sounds/v1/impacts/pound_on_big_tin_bin.ogg"},{sound:"pounding on dinner table series",url:"https://actions.google.com/sounds/v1/impacts/pounding_on_dinner_table_series.ogg"},{sound:"reverberating slam",url:"https://actions.google.com/sounds/v1/impacts/reverberating_slam.ogg"},{sound:"rock hits metal debris",url:"https://actions.google.com/sounds/v1/impacts/rock_hits_metal_debris.ogg"},{sound:"rock scraping on boulder",url:"https://actions.google.com/sounds/v1/impacts/rock_scraping_on_boulder.ogg"},{sound:"rocks on concrete series",url:"https://actions.google.com/sounds/v1/impacts/rocks_on_concrete_series.ogg"},{sound:"rubble crash",url:"https://actions.google.com/sounds/v1/impacts/rubble_crash.ogg"},{sound:"scraping car with rock series",url:"https://actions.google.com/sounds/v1/impacts/scraping_car_with_rock_series.ogg"},{sound:"shattered glass hitting metal",url:"https://actions.google.com/sounds/v1/impacts/shattered_glass_hitting_metal.ogg"},{sound:"silverware on glass toast",url:"https://actions.google.com/sounds/v1/impacts/silverware_on_glass_toast.ogg"},{sound:"small crash series",url:"https://actions.google.com/sounds/v1/impacts/small_crash_series.ogg"},{sound:"small crashes",url:"https://actions.google.com/sounds/v1/impacts/small_crashes.ogg"},{sound:"small glass pane shatter",url:"https://actions.google.com/sounds/v1/impacts/small_glass_pane_shatter.ogg"},{sound:"smashing car sunroof series",url:"https://actions.google.com/sounds/v1/impacts/smashing_car_sunroof_series.ogg"},{sound:"smashing car window",url:"https://actions.google.com/sounds/v1/impacts/smashing_car_window.ogg"},{sound:"smashing car window series",url:"https://actions.google.com/sounds/v1/impacts/smashing_car_window_series.ogg"},{sound:"smashing car windshield series",url:"https://actions.google.com/sounds/v1/impacts/smashing_car_windshield_series.ogg"},{sound:"splitting fire wood",url:"https://actions.google.com/sounds/v1/impacts/splitting_fire_wood.ogg"},{sound:"stacking logs",url:"https://actions.google.com/sounds/v1/impacts/stacking_logs.ogg"},{sound:"stone drop",url:"https://actions.google.com/sounds/v1/impacts/stone_drop.ogg"},{sound:"stones and water on cement",url:"https://actions.google.com/sounds/v1/impacts/stones_and_water_on_cement.ogg"},{sound:"stress creak",url:"https://actions.google.com/sounds/v1/impacts/stress_creak.ogg"},{sound:"sweeping glass shards",url:"https://actions.google.com/sounds/v1/impacts/sweeping_glass_shards.ogg"},{sound:"taking down a dead tree",url:"https://actions.google.com/sounds/v1/impacts/taking_down_a_dead_tree.ogg"},{sound:"tearing crunch",url:"https://actions.google.com/sounds/v1/impacts/tearing_crunch.ogg"},{sound:"trash dropping in dumpster",url:"https://actions.google.com/sounds/v1/impacts/trash_dropping_in_dumpster.ogg"},{sound:"water can fall",url:"https://actions.google.com/sounds/v1/impacts/water_can_fall.ogg"},{sound:"windshield hit with bar",url:"https://actions.google.com/sounds/v1/impacts/windshield_hit_with_bar.ogg"},{sound:"wine glass shatter",url:"https://actions.google.com/sounds/v1/impacts/wine_glass_shatter.ogg"},{sound:"wood bowling pin drop series",url:"https://actions.google.com/sounds/v1/impacts/wood_bowling_pin_drop_series.ogg"},{sound:"wood rolling short",url:"https://actions.google.com/sounds/v1/impacts/wood_rolling_short.ogg"},{sound:"button push",url:"https://actions.google.com/sounds/v1/office/button_push.ogg"},{sound:"click continuous",url:"https://actions.google.com/sounds/v1/office/click_continuous.ogg"},{sound:"computer typing slow",url:"https://actions.google.com/sounds/v1/office/computer_typing_slow.ogg"},{sound:"desk organization",url:"https://actions.google.com/sounds/v1/office/desk_organization.ogg"},{sound:"keyboard typing fast",url:"https://actions.google.com/sounds/v1/office/keyboard_typing_fast.ogg"},{sound:"keyboard typing fast close",url:"https://actions.google.com/sounds/v1/office/keyboard_typing_fast_close.ogg"},{sound:"keyboard typing fast far",url:"https://actions.google.com/sounds/v1/office/keyboard_typing_fast_far.ogg"},{sound:"push computer keys",url:"https://actions.google.com/sounds/v1/office/push_computer_keys.ogg"},{sound:"scissor snips",url:"https://actions.google.com/sounds/v1/office/scissor_snips.ogg"},{sound:"slow typing",url:"https://actions.google.com/sounds/v1/office/slow_typing.ogg"},{sound:"typing on keyboard",url:"https://actions.google.com/sounds/v1/office/typing_on_keyboard.ogg"},{sound:"alien beam",url:"https://actions.google.com/sounds/v1/science_fiction/alien_beam.ogg"},{sound:"alien breath",url:"https://actions.google.com/sounds/v1/science_fiction/alien_breath.ogg"},{sound:"alien song",url:"https://actions.google.com/sounds/v1/science_fiction/alien_song.ogg"},{sound:"creature distortion white noise",url:"https://actions.google.com/sounds/v1/science_fiction/creature_distortion_white_noise.ogg"},{sound:"dream breath",url:"https://actions.google.com/sounds/v1/science_fiction/dream_breath.ogg"},{sound:"electric ring long",url:"https://actions.google.com/sounds/v1/science_fiction/electric_ring_long.ogg"},{sound:"forboding resonance",url:"https://actions.google.com/sounds/v1/science_fiction/forboding_resonance.ogg"},{sound:"high to low sweep",url:"https://actions.google.com/sounds/v1/science_fiction/high_to_low_sweep.ogg"},{sound:"outer space",url:"https://actions.google.com/sounds/v1/science_fiction/outer_space.ogg"},{sound:"ringing ambient background",url:"https://actions.google.com/sounds/v1/science_fiction/ringing_ambient_background.ogg"},{sound:"robot code",url:"https://actions.google.com/sounds/v1/science_fiction/robot_code.ogg"},{sound:"rubble breaking",url:"https://actions.google.com/sounds/v1/science_fiction/rubble_breaking.ogg"},{sound:"sci fi vortex",url:"https://actions.google.com/sounds/v1/science_fiction/sci_fi_vortex.ogg"},{sound:"suspense builder",url:"https://actions.google.com/sounds/v1/science_fiction/suspense_builder.ogg"},{sound:"windchime drone",url:"https://actions.google.com/sounds/v1/science_fiction/windchime_drone.ogg"},{sound:"baseball glove handling",url:"https://actions.google.com/sounds/v1/sports/baseball_glove_handling.ogg"},{sound:"baseball glove tag out",url:"https://actions.google.com/sounds/v1/sports/baseball_glove_tag_out.ogg"},{sound:"baseball glove tags",url:"https://actions.google.com/sounds/v1/sports/baseball_glove_tags.ogg"},{sound:"baseball into glove",url:"https://actions.google.com/sounds/v1/sports/baseball_into_glove.ogg"},{sound:"basketball bounce and roll",url:"https://actions.google.com/sounds/v1/sports/basketball_bounce_and_roll.ogg"},{sound:"basketball pass and handle",url:"https://actions.google.com/sounds/v1/sports/basketball_pass_and_handle.ogg"},{sound:"basketball shot rim short",url:"https://actions.google.com/sounds/v1/sports/basketball_shot_rim_short.ogg"},{sound:"basketball shot swish",url:"https://actions.google.com/sounds/v1/sports/basketball_shot_swish.ogg"},{sound:"bicycle front wheel land",url:"https://actions.google.com/sounds/v1/sports/bicycle_front_wheel_land.ogg"},{sound:"bicycle handle bar movement",url:"https://actions.google.com/sounds/v1/sports/bicycle_handle_bar_movement.ogg"},{sound:"bicycle pedaling",url:"https://actions.google.com/sounds/v1/sports/bicycle_pedaling.ogg"},{sound:"bicycle pedaling old chain",url:"https://actions.google.com/sounds/v1/sports/bicycle_pedaling_old_chain.ogg"},{sound:"bicycle trick land",url:"https://actions.google.com/sounds/v1/sports/bicycle_trick_land.ogg"},{sound:"billiard balls hit",url:"https://actions.google.com/sounds/v1/sports/billiard_balls_hit.ogg"},{sound:"bowling",url:"https://actions.google.com/sounds/v1/sports/bowling.ogg"},{sound:"bowling alley",url:"https://actions.google.com/sounds/v1/sports/bowling_alley.ogg"},{sound:"bowling alley arcade",url:"https://actions.google.com/sounds/v1/sports/bowling_alley_arcade.ogg"},{sound:"bowling alley room tone",url:"https://actions.google.com/sounds/v1/sports/bowling_alley_room_tone.ogg"},{sound:"bowling ball return",url:"https://actions.google.com/sounds/v1/sports/bowling_ball_return.ogg"},{sound:"bowling gutter ball",url:"https://actions.google.com/sounds/v1/sports/bowling_gutter_ball.ogg"},{sound:"bowling gutter ball return",url:"https://actions.google.com/sounds/v1/sports/bowling_gutter_ball_return.ogg"},{sound:"bowling pin machine",url:"https://actions.google.com/sounds/v1/sports/bowling_pin_machine.ogg"},{sound:"bowling shot",url:"https://actions.google.com/sounds/v1/sports/bowling_shot.ogg"},{sound:"bowling shot with ball return",url:"https://actions.google.com/sounds/v1/sports/bowling_shot_with_ball_return.ogg"},{sound:"bowling single",url:"https://actions.google.com/sounds/v1/sports/bowling_single.ogg"},{sound:"bowling slow roll",url:"https://actions.google.com/sounds/v1/sports/bowling_slow_roll.ogg"},{sound:"bowling strike",url:"https://actions.google.com/sounds/v1/sports/bowling_strike.ogg"},{sound:"bowling miss pins",url:"https://actions.google.com/sounds/v1/sports/bowling_miss_pins.ogg"},{sound:"bowling pin clear",url:"https://actions.google.com/sounds/v1/sports/bowling_pin_clear.ogg"},{sound:"bowling pin set",url:"https://actions.google.com/sounds/v1/sports/bowling_pin_set.ogg"},{sound:"card dealing",url:"https://actions.google.com/sounds/v1/sports/card_dealing.ogg"},{sound:"card game",url:"https://actions.google.com/sounds/v1/sports/card_game.ogg"},{sound:"croquet bag rummaging",url:"https://actions.google.com/sounds/v1/sports/croquet_bag_rummaging.ogg"},{sound:"croquet ball hits",url:"https://actions.google.com/sounds/v1/sports/croquet_ball_hits.ogg"},{sound:"deck of cards on table",url:"https://actions.google.com/sounds/v1/sports/deck_of_cards_on_table.ogg"},{sound:"dodge ball bounce",url:"https://actions.google.com/sounds/v1/sports/dodge_ball_bounce.ogg"},{sound:"dragging on asphalt",url:"https://actions.google.com/sounds/v1/sports/dragging_on_asphalt.ogg"},{sound:"drawing cards",url:"https://actions.google.com/sounds/v1/sports/drawing_cards.ogg"},{sound:"driver club hitting golf ball",url:"https://actions.google.com/sounds/v1/sports/driver_club_hitting_golf_ball.ogg"},{sound:"fist into glove",url:"https://actions.google.com/sounds/v1/sports/fist_into_glove.ogg"},{sound:"football catch and tuck",url:"https://actions.google.com/sounds/v1/sports/football_catch_and_tuck.ogg"},{sound:"football dropkick",url:"https://actions.google.com/sounds/v1/sports/football_dropkick.ogg"},{sound:"football kick in grass",url:"https://actions.google.com/sounds/v1/sports/football_kick_in_grass.ogg"},{sound:"football punts",url:"https://actions.google.com/sounds/v1/sports/football_punts.ogg"},{sound:"frisbee catch",url:"https://actions.google.com/sounds/v1/sports/frisbee_catch.ogg"},{sound:"frisbee throw",url:"https://actions.google.com/sounds/v1/sports/frisbee_throw.ogg"},{sound:"girls soccer game",url:"https://actions.google.com/sounds/v1/sports/girls_soccer_game.ogg"},{sound:"golf bag pocket shuffling",url:"https://actions.google.com/sounds/v1/sports/golf_bag_pocket_shuffling.ogg"},{sound:"golf bag with clubs moving",url:"https://actions.google.com/sounds/v1/sports/golf_bag_with_clubs_moving.ogg"},{sound:"golf ball on pavement",url:"https://actions.google.com/sounds/v1/sports/golf_ball_on_pavement.ogg"},{sound:"golf clubselection",url:"https://actions.google.com/sounds/v1/sports/golf_clubselection.ogg"},{sound:"golf swing practice",url:"https://actions.google.com/sounds/v1/sports/golf_swing_practice.ogg"},{sound:"iron club hits golf ball",url:"https://actions.google.com/sounds/v1/sports/iron_club_hits_golf_ball.ogg"},{sound:"kids playing in gym",url:"https://actions.google.com/sounds/v1/sports/kids_playing_in_gym.ogg"},{sound:"metal arrow handling",url:"https://actions.google.com/sounds/v1/sports/metal_arrow_handling.ogg"},{sound:"metal arrows handling",url:"https://actions.google.com/sounds/v1/sports/metal_arrows_handling.ogg"},{sound:"metal baseball bat taps",url:"https://actions.google.com/sounds/v1/sports/metal_baseball_bat_taps.ogg"},{sound:"metal bat hits baseball",url:"https://actions.google.com/sounds/v1/sports/metal_bat_hits_baseball.ogg"},{sound:"metal dropped lingering",url:"https://actions.google.com/sounds/v1/sports/metal_dropped_lingering.ogg"},{sound:"metal dropped rolling",url:"https://actions.google.com/sounds/v1/sports/metal_dropped_rolling.ogg"},{sound:"metal strike",url:"https://actions.google.com/sounds/v1/sports/metal_strike.ogg"},{sound:"ping pong ball bounce",url:"https://actions.google.com/sounds/v1/sports/ping_pong_ball_bounce.ogg"},{sound:"ping pong ball hit",url:"https://actions.google.com/sounds/v1/sports/ping_pong_ball_hit.ogg"},{sound:"ping pong paddle toss on table",url:"https://actions.google.com/sounds/v1/sports/ping_pong_paddle_toss_on_table.ogg"},{sound:"ping pong paddle on table",url:"https://actions.google.com/sounds/v1/sports/ping_pong_paddle_on_table.ogg"},{sound:"pool table ball clacks",url:"https://actions.google.com/sounds/v1/sports/pool_table_ball_clacks.ogg"},{sound:"pool table ball drops in pocket",url:"https://actions.google.com/sounds/v1/sports/pool_table_ball_drops_in_pocket.ogg"},{sound:"pool table ball release",url:"https://actions.google.com/sounds/v1/sports/pool_table_ball_release.ogg"},{sound:"pool table ball return",url:"https://actions.google.com/sounds/v1/sports/pool_table_ball_return.ogg"},{sound:"pool table balls rolling",url:"https://actions.google.com/sounds/v1/sports/pool_table_balls_rolling.ogg"},{sound:"pool table break",url:"https://actions.google.com/sounds/v1/sports/pool_table_break.ogg"},{sound:"pool table shot",url:"https://actions.google.com/sounds/v1/sports/pool_table_shot.ogg"},{sound:"pool table shot and sink",url:"https://actions.google.com/sounds/v1/sports/pool_table_shot_and_sink.ogg"},{sound:"practice shuffling cards",url:"https://actions.google.com/sounds/v1/sports/practice_shuffling_cards.ogg"},{sound:"running cleats",url:"https://actions.google.com/sounds/v1/sports/running_cleats.ogg"},{sound:"skateboard kick push",url:"https://actions.google.com/sounds/v1/sports/skateboard_kick_push.ogg"},{sound:"skateboard skid stop",url:"https://actions.google.com/sounds/v1/sports/skateboard_skid_stop.ogg"},{sound:"skateboard skid stop series",url:"https://actions.google.com/sounds/v1/sports/skateboard_skid_stop_series.ogg"},{sound:"skateboard trick and crash",url:"https://actions.google.com/sounds/v1/sports/skateboard_trick_and_crash.ogg"},{sound:"skateboard trick and land",url:"https://actions.google.com/sounds/v1/sports/skateboard_trick_and_land.ogg"},{sound:"skateboard turning on pavement",url:"https://actions.google.com/sounds/v1/sports/skateboard_turning_on_pavement.ogg"},{sound:"soccer ball bounce on pavement",url:"https://actions.google.com/sounds/v1/sports/soccer_ball_bounce_on_pavement.ogg"},{sound:"soccer ball bounce series",url:"https://actions.google.com/sounds/v1/sports/soccer_ball_bounce_series.ogg"},{sound:"soccer ball chests",url:"https://actions.google.com/sounds/v1/sports/soccer_ball_chests.ogg"},{sound:"soccer ball in net",url:"https://actions.google.com/sounds/v1/sports/soccer_ball_in_net.ogg"},{sound:"soccer ball knee series",url:"https://actions.google.com/sounds/v1/sports/soccer_ball_knee_series.ogg"},{sound:"soccer kicks series",url:"https://actions.google.com/sounds/v1/sports/soccer_kicks_series.ogg"},{sound:"tennis ball dribble",url:"https://actions.google.com/sounds/v1/sports/tennis_ball_dribble.ogg"},{sound:"trampoline jumps",url:"https://actions.google.com/sounds/v1/sports/trampoline_jumps.ogg"},{sound:"ultimate frisbee game",url:"https://actions.google.com/sounds/v1/sports/ultimate_frisbee_game.ogg"},{sound:"volleyball ball slow bounce",url:"https://actions.google.com/sounds/v1/sports/volleyball_ball_slow_bounce.ogg"},{sound:"volleyball slap on ball",url:"https://actions.google.com/sounds/v1/sports/volleyball_slap_on_ball.ogg"},{sound:"volleyball spikes",url:"https://actions.google.com/sounds/v1/sports/volleyball_spikes.ogg"},{sound:"walking cleats",url:"https://actions.google.com/sounds/v1/sports/walking_cleats.ogg"},{sound:"wood bat falling in dirt",url:"https://actions.google.com/sounds/v1/sports/wood_bat_falling_in_dirt.ogg"},{sound:"wood bat falling in grass",url:"https://actions.google.com/sounds/v1/sports/wood_bat_falling_in_grass.ogg"},{sound:"wood golf club hit ball",url:"https://actions.google.com/sounds/v1/sports/wood_golf_club_hit_ball.ogg"},{sound:"wooden bat dropped on asphalt",url:"https://actions.google.com/sounds/v1/sports/wooden_bat_dropped_on_asphalt.ogg"},{sound:"wooden bat hits",url:"https://actions.google.com/sounds/v1/sports/wooden_bat_hits.ogg"},{sound:"wooden bat hits baseball run",url:"https://actions.google.com/sounds/v1/sports/wooden_bat_hits_baseball_run.ogg"},{sound:"18v cordless drill high pitch",url:"https://actions.google.com/sounds/v1/tools/18v_cordless_drill_high_pitch.ogg"},{sound:"18v cordless drill switch",url:"https://actions.google.com/sounds/v1/tools/18v_cordless_drill_switch.ogg"},{sound:"air nailer aluminum",url:"https://actions.google.com/sounds/v1/tools/air_nailer_aluminum.ogg"},{sound:"air nailer wood",url:"https://actions.google.com/sounds/v1/tools/air_nailer_wood.ogg"},{sound:"baler startup and run",url:"https://actions.google.com/sounds/v1/tools/baler_startup_and_run.ogg"},{sound:"chopping log",url:"https://actions.google.com/sounds/v1/tools/chopping_log.ogg"},{sound:"cutting through foliage",url:"https://actions.google.com/sounds/v1/tools/cutting_through_foliage.ogg"},{sound:"digging with trowel",url:"https://actions.google.com/sounds/v1/tools/digging_with_trowel.ogg"},{sound:"drill gear",url:"https://actions.google.com/sounds/v1/tools/drill_gear.ogg"},{sound:"drill motor dopper",url:"https://actions.google.com/sounds/v1/tools/drill_motor_dopper.ogg"},{sound:"drill motor series",url:"https://actions.google.com/sounds/v1/tools/drill_motor_series.ogg"},{sound:"drill press",url:"https://actions.google.com/sounds/v1/tools/drill_press.ogg"},{sound:"drilling at construction site",url:"https://actions.google.com/sounds/v1/tools/drilling_at_construction_site.ogg"},{sound:"ejecting a cassette",url:"https://actions.google.com/sounds/v1/tools/ejecting_a_cassette.ogg"},{sound:"electric mud mixer",url:"https://actions.google.com/sounds/v1/tools/electric_mud_mixer.ogg"},{sound:"grass clippers",url:"https://actions.google.com/sounds/v1/tools/grass_clippers.ogg"},{sound:"hair clippers cutting",url:"https://actions.google.com/sounds/v1/tools/hair_clippers_cutting.ogg"},{sound:"hammer on cement",url:"https://actions.google.com/sounds/v1/tools/hammer_on_cement.ogg"},{sound:"hammering into wood",url:"https://actions.google.com/sounds/v1/tools/hammering_into_wood.ogg"},{sound:"handling a camera",url:"https://actions.google.com/sounds/v1/tools/handling_a_camera.ogg"},{sound:"hitting wedge with maul",url:"https://actions.google.com/sounds/v1/tools/hitting_wedge_with_maul.ogg"},{sound:"household drill",url:"https://actions.google.com/sounds/v1/tools/household_drill.ogg"},{sound:"industrial sewing machine",url:"https://actions.google.com/sounds/v1/tools/industrial_sewing_machine.ogg"},{sound:"inserting a cassette",url:"https://actions.google.com/sounds/v1/tools/inserting_a_cassette.ogg"},{sound:"jackhammer close",url:"https://actions.google.com/sounds/v1/tools/jackhammer_close.ogg"},{sound:"large drill press",url:"https://actions.google.com/sounds/v1/tools/large_drill_press.ogg"},{sound:"lens adjustment",url:"https://actions.google.com/sounds/v1/tools/lens_adjustment.ogg"},{sound:"machine rumble",url:"https://actions.google.com/sounds/v1/tools/machine_rumble.ogg"},{sound:"manual drill",url:"https://actions.google.com/sounds/v1/tools/manual_drill.ogg"},{sound:"manure spreader",url:"https://actions.google.com/sounds/v1/tools/manure_spreader.ogg"},{sound:"meat grinder",url:"https://actions.google.com/sounds/v1/tools/meat_grinder.ogg"},{sound:"medium drill burst",url:"https://actions.google.com/sounds/v1/tools/medium_drill_burst.ogg"},{sound:"medium drill burst low",url:"https://actions.google.com/sounds/v1/tools/medium_drill_burst_low.ogg"},{sound:"medium drill burst series",url:"https://actions.google.com/sounds/v1/tools/medium_drill_burst_series.ogg"},{sound:"medium drill long accelerating",url:"https://actions.google.com/sounds/v1/tools/medium_drill_long_accelerating.ogg"},{sound:"metal machine hum",url:"https://actions.google.com/sounds/v1/tools/metal_machine_hum.ogg"},{sound:"metal trash can filled",url:"https://actions.google.com/sounds/v1/tools/metal_trash_can_filled.ogg"},{sound:"play and stop on a camera",url:"https://actions.google.com/sounds/v1/tools/play_and_stop_on_a_camera.ogg"},{sound:"power tool electrical buzz",url:"https://actions.google.com/sounds/v1/tools/power_tool_electrical_buzz.ogg"},{sound:"ratchet wrench slow",url:"https://actions.google.com/sounds/v1/tools/ratchet_wrench_slow.ogg"},{sound:"ratcheting trailer wench",url:"https://actions.google.com/sounds/v1/tools/ratcheting_trailer_wench.ogg"},{sound:"record alert",url:"https://actions.google.com/sounds/v1/tools/record_alert.ogg"},{sound:"sewing machine series",url:"https://actions.google.com/sounds/v1/tools/sewing_machine_series.ogg"},{sound:"sewing machine squeal",url:"https://actions.google.com/sounds/v1/tools/sewing_machine_squeal.ogg"},{sound:"sewing machine treadle",url:"https://actions.google.com/sounds/v1/tools/sewing_machine_treadle.ogg"},{sound:"shovel digging dirt",url:"https://actions.google.com/sounds/v1/tools/shovel_digging_dirt.ogg"},{sound:"shovels digging in distance",url:"https://actions.google.com/sounds/v1/tools/shovels_digging_in_distance.ogg"},{sound:"skil saw motor run",url:"https://actions.google.com/sounds/v1/tools/skil_saw_motor_run.ogg"},{sound:"sledgehammer handle cement",url:"https://actions.google.com/sounds/v1/tools/sledgehammer_handle_cement.ogg"},{sound:"small drill",url:"https://actions.google.com/sounds/v1/tools/small_drill.ogg"},{sound:"small drill motor on metal plate",url:"https://actions.google.com/sounds/v1/tools/small_drill_motor_on_metal_plate.ogg"},{sound:"small drill on plate",url:"https://actions.google.com/sounds/v1/tools/small_drill_on_plate.ogg"},{sound:"small reciprocating saw burst",url:"https://actions.google.com/sounds/v1/tools/small_reciprocating_saw_burst.ogg"},{sound:"small reciprocating saw weak",url:"https://actions.google.com/sounds/v1/tools/small_reciprocating_saw_weak.ogg"},{sound:"splitting fire wood",url:"https://actions.google.com/sounds/v1/tools/splitting_fire_wood.ogg"},{sound:"transporting a camera",url:"https://actions.google.com/sounds/v1/tools/transporting_a_camera.ogg"},{sound:"wood chipper",url:"https://actions.google.com/sounds/v1/tools/wood_chipper.ogg"},{sound:"metal construction background",url:"https://actions.google.com/sounds/v1/tools/metal_construction_background.ogg"},{sound:"aggressive motorcycle",url:"https://actions.google.com/sounds/v1/transportation/aggressive_motorcycle.ogg"},{sound:"air horn in close hall series",url:"https://actions.google.com/sounds/v1/transportation/air_horn_in_close_hall_series.ogg"},{sound:"airplane in flight",url:"https://actions.google.com/sounds/v1/transportation/airplane_in_flight.ogg"},{sound:"airplane taxi long",url:"https://actions.google.com/sounds/v1/transportation/airplane_taxi_long.ogg"},{sound:"bicycle pedal grind",url:"https://actions.google.com/sounds/v1/transportation/bicycle_pedal_grind.ogg"},{sound:"bicycle pedaling",url:"https://actions.google.com/sounds/v1/transportation/bicycle_pedaling.ogg"},{sound:"bicycle riding on gravel",url:"https://actions.google.com/sounds/v1/transportation/bicycle_riding_on_gravel.ogg"},{sound:"car brake pedal",url:"https://actions.google.com/sounds/v1/transportation/car_brake_pedal.ogg"},{sound:"car cruise hand out window",url:"https://actions.google.com/sounds/v1/transportation/car_cruise_hand_out_window.ogg"},{sound:"car door",url:"https://actions.google.com/sounds/v1/transportation/car_door.ogg"},{sound:"car door open shut",url:"https://actions.google.com/sounds/v1/transportation/car_door_open_shut.ogg"},{sound:"car door closing",url:"https://actions.google.com/sounds/v1/transportation/car_door_closing.ogg"},{sound:"car door lock",url:"https://actions.google.com/sounds/v1/transportation/car_door_lock.ogg"},{sound:"car drive by",url:"https://actions.google.com/sounds/v1/transportation/car_drive_by.ogg"},{sound:"car drive off",url:"https://actions.google.com/sounds/v1/transportation/car_drive_off.ogg"},{sound:"car engine idling accelerating",url:"https://actions.google.com/sounds/v1/transportation/car_engine_idling_accelerating.ogg"},{sound:"car gear shift",url:"https://actions.google.com/sounds/v1/transportation/car_gear_shift.ogg"},{sound:"car gear shifting",url:"https://actions.google.com/sounds/v1/transportation/car_gear_shifting.ogg"},{sound:"car gears changing",url:"https://actions.google.com/sounds/v1/transportation/car_gears_changing.ogg"},{sound:"car horn",url:"https://actions.google.com/sounds/v1/transportation/car_horn.ogg"},{sound:"car horn distant with bird chirp",url:"https://actions.google.com/sounds/v1/transportation/car_horn_distant_with_bird_chirp.ogg"},{sound:"car pull in",url:"https://actions.google.com/sounds/v1/transportation/car_pull_in.ogg"},{sound:"car start garage opening",url:"https://actions.google.com/sounds/v1/transportation/car_start_garage_opening.ogg"},{sound:"car stop and go",url:"https://actions.google.com/sounds/v1/transportation/car_stop_and_go.ogg"},{sound:"car through icy puddle",url:"https://actions.google.com/sounds/v1/transportation/car_through_icy_puddle.ogg"},{sound:"car trunk",url:"https://actions.google.com/sounds/v1/transportation/car_trunk.ogg"},{sound:"car vent slider",url:"https://actions.google.com/sounds/v1/transportation/car_vent_slider.ogg"},{sound:"car on gravel",url:"https://actions.google.com/sounds/v1/transportation/car_on_gravel.ogg"},{sound:"city traffic",url:"https://actions.google.com/sounds/v1/transportation/city_traffic.ogg"},{sound:"credit card swipe",url:"https://actions.google.com/sounds/v1/transportation/credit_card_swipe.ogg"},{sound:"dock movement",url:"https://actions.google.com/sounds/v1/transportation/dock_movement.ogg"},{sound:"doppler passing by stationary",url:"https://actions.google.com/sounds/v1/transportation/doppler_passing_by_stationary.ogg"},{sound:"drive in reverse beep alert",url:"https://actions.google.com/sounds/v1/transportation/drive_in_reverse_beep_alert.ogg"},{sound:"driving in car interior",url:"https://actions.google.com/sounds/v1/transportation/driving_in_car_interior.ogg"},{sound:"driving on gravel",url:"https://actions.google.com/sounds/v1/transportation/driving_on_gravel.ogg"},{sound:"dumpster door slam",url:"https://actions.google.com/sounds/v1/transportation/dumpster_door_slam.ogg"},{sound:"engine and power windows",url:"https://actions.google.com/sounds/v1/transportation/engine_and_power_windows.ogg"},{sound:"engine bus",url:"https://actions.google.com/sounds/v1/transportation/engine_bus.ogg"},{sound:"engine rev continuous",url:"https://actions.google.com/sounds/v1/transportation/engine_rev_continuous.ogg"},{sound:"engine revving in parking garage",url:"https://actions.google.com/sounds/v1/transportation/engine_revving_in_parking_garage.ogg"},{sound:"engine start up",url:"https://actions.google.com/sounds/v1/transportation/engine_start_up.ogg"},{sound:"falling off bike on gravel",url:"https://actions.google.com/sounds/v1/transportation/falling_off_bike_on_gravel.ogg"},{sound:"fast windshield wipers",url:"https://actions.google.com/sounds/v1/transportation/fast_windshield_wipers.ogg"},{sound:"fast wipers in rain",url:"https://actions.google.com/sounds/v1/transportation/fast_wipers_in_rain.ogg"},{sound:"fuel rod handle",url:"https://actions.google.com/sounds/v1/transportation/fuel_rod_handle.ogg"},{sound:"fuel rod insert",url:"https://actions.google.com/sounds/v1/transportation/fuel_rod_insert.ogg"},{sound:"gas pedal",url:"https://actions.google.com/sounds/v1/transportation/gas_pedal.ogg"},{sound:"gas pump fill up",url:"https://actions.google.com/sounds/v1/transportation/gas_pump_fill_up.ogg"},{sound:"gear shift and motor start",url:"https://actions.google.com/sounds/v1/transportation/gear_shift_and_motor_start.ogg"},{sound:"gear shifter",url:"https://actions.google.com/sounds/v1/transportation/gear_shifter.ogg"},{sound:"getting into car with radio",url:"https://actions.google.com/sounds/v1/transportation/getting_into_car_with_radio.ogg"},{sound:"helicopter background noise",url:"https://actions.google.com/sounds/v1/transportation/helicopter_background_noise.ogg"},{sound:"helicopter by",url:"https://actions.google.com/sounds/v1/transportation/helicopter_by.ogg"},{sound:"helicopter landing",url:"https://actions.google.com/sounds/v1/transportation/helicopter_landing.ogg"},{sound:"helicopter start and take off",url:"https://actions.google.com/sounds/v1/transportation/helicopter_start_and_take_off.ogg"},{sound:"helicopter take off",url:"https://actions.google.com/sounds/v1/transportation/helicopter_take_off.ogg"},{sound:"hit and miss engine",url:"https://actions.google.com/sounds/v1/transportation/hit_and_miss_engine.ogg"},{sound:"horse farm actions",url:"https://actions.google.com/sounds/v1/transportation/horse_farm_actions.ogg"},{sound:"horse team",url:"https://actions.google.com/sounds/v1/transportation/horse_team.ogg"},{sound:"horse and carriage",url:"https://actions.google.com/sounds/v1/transportation/horse_and_carriage.ogg"},{sound:"hot rod twin engine",url:"https://actions.google.com/sounds/v1/transportation/hot_rod_twin_engine.ogg"},{sound:"interior driving sounds",url:"https://actions.google.com/sounds/v1/transportation/interior_driving_sounds.ogg"},{sound:"large truck driving",url:"https://actions.google.com/sounds/v1/transportation/large_truck_driving.ogg"},{sound:"large truck driving with straps",url:"https://actions.google.com/sounds/v1/transportation/large_truck_driving_with_straps.ogg"},{sound:"large truck passing on highway",url:"https://actions.google.com/sounds/v1/transportation/large_truck_passing_on_highway.ogg"},{sound:"long buzz",url:"https://actions.google.com/sounds/v1/transportation/long_buzz.ogg"},{sound:"low motorcycle",url:"https://actions.google.com/sounds/v1/transportation/low_motorcycle.ogg"},{sound:"low motorcyle drive",url:"https://actions.google.com/sounds/v1/transportation/low_motorcyle_drive.ogg"},{sound:"machine sewing",url:"https://actions.google.com/sounds/v1/transportation/machine_sewing.ogg"},{sound:"metal gear",url:"https://actions.google.com/sounds/v1/transportation/metal_gear.ogg"},{sound:"metal gear shifting",url:"https://actions.google.com/sounds/v1/transportation/metal_gear_shifting.ogg"},{sound:"metal shuffling",url:"https://actions.google.com/sounds/v1/transportation/metal_shuffling.ogg"},{sound:"motor approaching",url:"https://actions.google.com/sounds/v1/transportation/motor_approaching.ogg"},{sound:"motor false start",url:"https://actions.google.com/sounds/v1/transportation/motor_false_start.ogg"},{sound:"motor running",url:"https://actions.google.com/sounds/v1/transportation/motor_running.ogg"},{sound:"motor running aircraft",url:"https://actions.google.com/sounds/v1/transportation/motor_running_aircraft.ogg"},{sound:"motor running loudly",url:"https://actions.google.com/sounds/v1/transportation/motor_running_loudly.ogg"},{sound:"motorcycle drive by",url:"https://actions.google.com/sounds/v1/transportation/motorcycle_drive_by.ogg"},{sound:"motorcycle engine start idle kill",url:"https://actions.google.com/sounds/v1/transportation/motorcycle_engine_start_idle_kill.ogg"},{sound:"motorcycle horn",url:"https://actions.google.com/sounds/v1/transportation/motorcycle_horn.ogg"},{sound:"muscle car big room",url:"https://actions.google.com/sounds/v1/transportation/muscle_car_big_room.ogg"},{sound:"muscle car distant rev short",url:"https://actions.google.com/sounds/v1/transportation/muscle_car_distant_rev_short.ogg"},{sound:"muscle car driving skid out",url:"https://actions.google.com/sounds/v1/transportation/muscle_car_driving_skid_out.ogg"},{sound:"muscle car highway skid",url:"https://actions.google.com/sounds/v1/transportation/muscle_car_highway_skid.ogg"},{sound:"muscle car rev",url:"https://actions.google.com/sounds/v1/transportation/muscle_car_rev.ogg"},{sound:"muscle car speeding highway",url:"https://actions.google.com/sounds/v1/transportation/muscle_car_speeding_highway.ogg"},{sound:"muscle car start idle and drive away",url:"https://actions.google.com/sounds/v1/transportation/muscle_car_start_idle_and_drive_away.ogg"},{sound:"muscle car start idle and stall",url:"https://actions.google.com/sounds/v1/transportation/muscle_car_start_idle_and_stall.ogg"},{sound:"muscle car start rev and idle",url:"https://actions.google.com/sounds/v1/transportation/muscle_car_start_rev_and_idle.ogg"},{sound:"muscle car start up alleyway",url:"https://actions.google.com/sounds/v1/transportation/muscle_car_start_up_alleyway.ogg"},{sound:"muscle car start and drive away",url:"https://actions.google.com/sounds/v1/transportation/muscle_car_start_and_drive_away.ogg"},{sound:"old engine sputter",url:"https://actions.google.com/sounds/v1/transportation/old_engine_sputter.ogg"},{sound:"open car beeps",url:"https://actions.google.com/sounds/v1/transportation/open_car_beeps.ogg"},{sound:"opening closing car door",url:"https://actions.google.com/sounds/v1/transportation/opening_closing_car_door.ogg"},{sound:"opening closing car door far",url:"https://actions.google.com/sounds/v1/transportation/opening_closing_car_door_far.ogg"},{sound:"panhead motorcycle",url:"https://actions.google.com/sounds/v1/transportation/panhead_motorcycle.ogg"},{sound:"panhead motorcycle drive",url:"https://actions.google.com/sounds/v1/transportation/panhead_motorcycle_drive.ogg"},{sound:"pedal braking",url:"https://actions.google.com/sounds/v1/transportation/pedal_braking.ogg"},{sound:"plastic cap",url:"https://actions.google.com/sounds/v1/transportation/plastic_cap.ogg"},{sound:"prop plane start",url:"https://actions.google.com/sounds/v1/transportation/prop_plane_start.ogg"},{sound:"prop plane take off",url:"https://actions.google.com/sounds/v1/transportation/prop_plane_take_off.ogg"},{sound:"quiet whirring",url:"https://actions.google.com/sounds/v1/transportation/quiet_whirring.ogg"},{sound:"road rural",url:"https://actions.google.com/sounds/v1/transportation/road_rural.ogg"},{sound:"suv back out and return",url:"https://actions.google.com/sounds/v1/transportation/suv_back_out_and_return.ogg"},{sound:"suv door open and close",url:"https://actions.google.com/sounds/v1/transportation/suv_door_open_and_close.ogg"},{sound:"suv drive by",url:"https://actions.google.com/sounds/v1/transportation/suv_drive_by.ogg"},{sound:"suv windshield wiper",url:"https://actions.google.com/sounds/v1/transportation/suv_windshield_wiper.ogg"},{sound:"suv clutch",url:"https://actions.google.com/sounds/v1/transportation/suv_clutch.ogg"},{sound:"sail flapping series",url:"https://actions.google.com/sounds/v1/transportation/sail_flapping_series.ogg"},{sound:"ship bell",url:"https://actions.google.com/sounds/v1/transportation/ship_bell.ogg"},{sound:"slow windshield wipers",url:"https://actions.google.com/sounds/v1/transportation/slow_windshield_wipers.ogg"},{sound:"slow wipers in rain",url:"https://actions.google.com/sounds/v1/transportation/slow_wipers_in_rain.ogg"},{sound:"space craft passing pulse stutter",url:"https://actions.google.com/sounds/v1/transportation/space_craft_passing_pulse_stutter.ogg"},{sound:"sports car driving",url:"https://actions.google.com/sounds/v1/transportation/sports_car_driving.ogg"},{sound:"sports car driving low rumble",url:"https://actions.google.com/sounds/v1/transportation/sports_car_driving_low_rumble.ogg"},{sound:"sports car speeding",url:"https://actions.google.com/sounds/v1/transportation/sports_car_speeding.ogg"},{sound:"sports car tunnel passing",url:"https://actions.google.com/sounds/v1/transportation/sports_car_tunnel_passing.ogg"},{sound:"sportscar driving nearby",url:"https://actions.google.com/sounds/v1/transportation/sportscar_driving_nearby.ogg"},{sound:"start motor drive away",url:"https://actions.google.com/sounds/v1/transportation/start_motor_drive_away.ogg"},{sound:"suburban streets summer",url:"https://actions.google.com/sounds/v1/transportation/suburban_streets_summer.ogg"},{sound:"subway nyc announcement",url:"https://actions.google.com/sounds/v1/transportation/subway_nyc_announcement.ogg"},{sound:"subway nyc in motion",url:"https://actions.google.com/sounds/v1/transportation/subway_nyc_in_motion.ogg"},{sound:"supercar engine revving",url:"https://actions.google.com/sounds/v1/transportation/supercar_engine_revving.ogg"},{sound:"tires rolling on gravel no engine",url:"https://actions.google.com/sounds/v1/transportation/tires_rolling_on_gravel_no_engine.ogg"},{sound:"tires squeal continuous",url:"https://actions.google.com/sounds/v1/transportation/tires_squeal_continuous.ogg"},{sound:"tow truck engine pulling car",url:"https://actions.google.com/sounds/v1/transportation/tow_truck_engine_pulling_car.ogg"},{sound:"tractor background noise",url:"https://actions.google.com/sounds/v1/transportation/tractor_background_noise.ogg"},{sound:"truck drive",url:"https://actions.google.com/sounds/v1/transportation/truck_drive.ogg"},{sound:"truck driving indoors",url:"https://actions.google.com/sounds/v1/transportation/truck_driving_indoors.ogg"},{sound:"truck driving in parking structure",url:"https://actions.google.com/sounds/v1/transportation/truck_driving_in_parking_structure.ogg"},{sound:"truck idle drive slow interior",url:"https://actions.google.com/sounds/v1/transportation/truck_idle_drive_slow_interior.ogg"},{sound:"truck bumps",url:"https://actions.google.com/sounds/v1/transportation/truck_bumps.ogg"},{sound:"trunk open",url:"https://actions.google.com/sounds/v1/transportation/trunk_open.ogg"},{sound:"trunk window open hydraulic hiss",url:"https://actions.google.com/sounds/v1/transportation/trunk_window_open_hydraulic_hiss.ogg"},{sound:"twisting dial clicks",url:"https://actions.google.com/sounds/v1/transportation/twisting_dial_clicks.ogg"},{sound:"two stroke revving",url:"https://actions.google.com/sounds/v1/transportation/two_stroke_revving.ogg"},{sound:"voice on radio accent",url:"https://actions.google.com/sounds/v1/transportation/voice_on_radio_accent.ogg"},{sound:"wet tire drive by",url:"https://actions.google.com/sounds/v1/transportation/wet_tire_drive_by.ogg"},{sound:"windshield wipers no water",url:"https://actions.google.com/sounds/v1/transportation/windshield_wipers_no_water.ogg"},{sound:"wood creak on old ship series",url:"https://actions.google.com/sounds/v1/transportation/wood_creak_on_old_ship_series.ogg"},{sound:"off roading interior",url:"https://actions.google.com/sounds/v1/transportation/off_roading_interior.ogg"},{sound:"air woosh underwater",url:"https://actions.google.com/sounds/v1/water/air_woosh_underwater.ogg"},{sound:"cooking pot filling in sink slowly",url:"https://actions.google.com/sounds/v1/water/cooking_pot_filling_in_sink_slowly.ogg"},{sound:"fountain water bubbling",url:"https://actions.google.com/sounds/v1/water/fountain_water_bubbling.ogg"},{sound:"glass of ice pour into sink",url:"https://actions.google.com/sounds/v1/water/glass_of_ice_pour_into_sink.ogg"},{sound:"humidifier bubble",url:"https://actions.google.com/sounds/v1/water/humidifier_bubble.ogg"},{sound:"kitchen sink drain close",url:"https://actions.google.com/sounds/v1/water/kitchen_sink_drain_close.ogg"},{sound:"large bubbles surfacing",url:"https://actions.google.com/sounds/v1/water/large_bubbles_surfacing.ogg"},{sound:"pour into metal bucket",url:"https://actions.google.com/sounds/v1/water/pour_into_metal_bucket.ogg"},{sound:"rocks into water",url:"https://actions.google.com/sounds/v1/water/rocks_into_water.ogg"},{sound:"sink drain far",url:"https://actions.google.com/sounds/v1/water/sink_drain_far.ogg"},{sound:"sink leaking",url:"https://actions.google.com/sounds/v1/water/sink_leaking.ogg"},{sound:"sink use handwash",url:"https://actions.google.com/sounds/v1/water/sink_use_handwash.ogg"},{sound:"small stream flowing",url:"https://actions.google.com/sounds/v1/water/small_stream_flowing.ogg"},{sound:"soaking in water series",url:"https://actions.google.com/sounds/v1/water/soaking_in_water_series.ogg"},{sound:"spray dishes",url:"https://actions.google.com/sounds/v1/water/spray_dishes.ogg"},{sound:"storm drain",url:"https://actions.google.com/sounds/v1/water/storm_drain.ogg"},{sound:"washing hands in bathroom",url:"https://actions.google.com/sounds/v1/water/washing_hands_in_bathroom.ogg"},{sound:"water drains in pipe",url:"https://actions.google.com/sounds/v1/water/water_drains_in_pipe.ogg"},{sound:"water drains in pipe with pump",url:"https://actions.google.com/sounds/v1/water/water_drains_in_pipe_with_pump.ogg"},{sound:"water filling glass from faucet",url:"https://actions.google.com/sounds/v1/water/water_filling_glass_from_faucet.ogg"},{sound:"water hose on concrete",url:"https://actions.google.com/sounds/v1/water/water_hose_on_concrete.ogg"},{sound:"water into surgical tray",url:"https://actions.google.com/sounds/v1/water/water_into_surgical_tray.ogg"},{sound:"water lapping wind",url:"https://actions.google.com/sounds/v1/water/water_lapping_wind.ogg"},{sound:"water leak",url:"https://actions.google.com/sounds/v1/water/water_leak.ogg"},{sound:"water pour into half full sink",url:"https://actions.google.com/sounds/v1/water/water_pour_into_half_full_sink.ogg"},{sound:"water pour into surgical tray",url:"https://actions.google.com/sounds/v1/water/water_pour_into_surgical_tray.ogg"},{sound:"water pouring from jug",url:"https://actions.google.com/sounds/v1/water/water_pouring_from_jug.ogg"},{sound:"water running by",url:"https://actions.google.com/sounds/v1/water/water_running_by.ogg"},{sound:"water rushing stereo series",url:"https://actions.google.com/sounds/v1/water/water_rushing_stereo_series.ogg"},{sound:"water splash on cement series",url:"https://actions.google.com/sounds/v1/water/water_splash_on_cement_series.ogg"},{sound:"water spray into bucket",url:"https://actions.google.com/sounds/v1/water/water_spray_into_bucket.ogg"},{sound:"water sprayer",url:"https://actions.google.com/sounds/v1/water/water_sprayer.ogg"},{sound:"water on metal surface",url:"https://actions.google.com/sounds/v1/water/water_on_metal_surface.ogg"},{sound:"waves crashing on rock beach",url:"https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg"},{sound:"50 cal shells drop",url:"https://actions.google.com/sounds/v1/weapons/50_cal_shells_drop.ogg"},{sound:"50cal gun cock and dry fire",url:"https://actions.google.com/sounds/v1/weapons/50cal_gun_cock_and_dry_fire.ogg"},{sound:"a10 jet flyby fire",url:"https://actions.google.com/sounds/v1/weapons/a10_jet_flyby_fire.ogg"},{sound:"airplane rocket fire close",url:"https://actions.google.com/sounds/v1/weapons/airplane_rocket_fire_close.ogg"},{sound:"auto bullets flyby short",url:"https://actions.google.com/sounds/v1/weapons/auto_bullets_flyby_short.ogg"},{sound:"automatic gun",url:"https://actions.google.com/sounds/v1/weapons/automatic_gun.ogg"},{sound:"big explosion cut off",url:"https://actions.google.com/sounds/v1/weapons/big_explosion_cut_off.ogg"},{sound:"big explosion distant",url:"https://actions.google.com/sounds/v1/weapons/big_explosion_distant.ogg"},{sound:"big explosion sweeping in",url:"https://actions.google.com/sounds/v1/weapons/big_explosion_sweeping_in.ogg"},{sound:"big gun shots close",url:"https://actions.google.com/sounds/v1/weapons/big_gun_shots_close.ogg"},{sound:"bullet hit car",url:"https://actions.google.com/sounds/v1/weapons/bullet_hit_car.ogg"},{sound:"cocking a 50cal gun",url:"https://actions.google.com/sounds/v1/weapons/cocking_a_50cal_gun.ogg"},{sound:"explosion hiss bop bang",url:"https://actions.google.com/sounds/v1/weapons/explosion_hiss_bop_bang.ogg"},{sound:"gun drop on cement",url:"https://actions.google.com/sounds/v1/weapons/gun_drop_on_cement.ogg"},{sound:"gun drop on metal grate",url:"https://actions.google.com/sounds/v1/weapons/gun_drop_on_metal_grate.ogg"},{sound:"gun loading foam",url:"https://actions.google.com/sounds/v1/weapons/gun_loading_foam.ogg"},{sound:"gun parts handling",url:"https://actions.google.com/sounds/v1/weapons/gun_parts_handling.ogg"},{sound:"gun powder ignite",url:"https://actions.google.com/sounds/v1/weapons/gun_powder_ignite.ogg"},{sound:"gun reload",url:"https://actions.google.com/sounds/v1/weapons/gun_reload.ogg"},{sound:"gun shells dropping",url:"https://actions.google.com/sounds/v1/weapons/gun_shells_dropping.ogg"},{sound:"gun shooting cocking air",url:"https://actions.google.com/sounds/v1/weapons/gun_shooting_cocking_air.ogg"},{sound:"gun shooting cocking darts",url:"https://actions.google.com/sounds/v1/weapons/gun_shooting_cocking_darts.ogg"},{sound:"gun shooting cocking foam",url:"https://actions.google.com/sounds/v1/weapons/gun_shooting_cocking_foam.ogg"},{sound:"gun shot dry fire",url:"https://actions.google.com/sounds/v1/weapons/gun_shot_dry_fire.ogg"},{sound:"gun slide handling loud",url:"https://actions.google.com/sounds/v1/weapons/gun_slide_handling_loud.ogg"},{sound:"gun trigger release",url:"https://actions.google.com/sounds/v1/weapons/gun_trigger_release.ogg"},{sound:"gunfire",url:"https://actions.google.com/sounds/v1/weapons/gunfire.ogg"},{sound:"gunfire and voices",url:"https://actions.google.com/sounds/v1/weapons/gunfire_and_voices.ogg"},{sound:"gunfire long distance",url:"https://actions.google.com/sounds/v1/weapons/gunfire_long_distance.ogg"},{sound:"gunshot and echo long",url:"https://actions.google.com/sounds/v1/weapons/gunshot_and_echo_long.ogg"},{sound:"handgun hammer click",url:"https://actions.google.com/sounds/v1/weapons/handgun_hammer_click.ogg"},{sound:"handgun dry fire",url:"https://actions.google.com/sounds/v1/weapons/handgun_dry_fire.ogg"},{sound:"handgun mag load",url:"https://actions.google.com/sounds/v1/weapons/handgun_mag_load.ogg"},{sound:"handgun slide handling",url:"https://actions.google.com/sounds/v1/weapons/handgun_slide_handling.ogg"},{sound:"handgun trigger pulls",url:"https://actions.google.com/sounds/v1/weapons/handgun_trigger_pulls.ogg"},{sound:"handgun cocking",url:"https://actions.google.com/sounds/v1/weapons/handgun_cocking.ogg"},{sound:"handgun handling souds",url:"https://actions.google.com/sounds/v1/weapons/handgun_handling_souds.ogg"},{sound:"handgun magazine loading",url:"https://actions.google.com/sounds/v1/weapons/handgun_magazine_loading.ogg"},{sound:"handgun trigger pull empty",url:"https://actions.google.com/sounds/v1/weapons/handgun_trigger_pull_empty.ogg"},{sound:"handling bullets",url:"https://actions.google.com/sounds/v1/weapons/handling_bullets.ogg"},{sound:"howitzer cannon fire",url:"https://actions.google.com/sounds/v1/weapons/howitzer_cannon_fire.ogg"},{sound:"lit fuse",url:"https://actions.google.com/sounds/v1/weapons/lit_fuse.ogg"},{sound:"load magazine single bullets",url:"https://actions.google.com/sounds/v1/weapons/load_magazine_single_bullets.ogg"},{sound:"long rifle shots",url:"https://actions.google.com/sounds/v1/weapons/long_rifle_shots.ogg"},{sound:"m4 shots",url:"https://actions.google.com/sounds/v1/weapons/m4_shots.ogg"},{sound:"machine gun hit car",url:"https://actions.google.com/sounds/v1/weapons/machine_gun_hit_car.ogg"},{sound:"magazine handling",url:"https://actions.google.com/sounds/v1/weapons/magazine_handling.ogg"},{sound:"magnum shots",url:"https://actions.google.com/sounds/v1/weapons/magnum_shots.ogg"},{sound:"medium casings on cement",url:"https://actions.google.com/sounds/v1/weapons/medium_casings_on_cement.ogg"},{sound:"medium casings on metal",url:"https://actions.google.com/sounds/v1/weapons/medium_casings_on_metal.ogg"},{sound:"metallic drops and echo",url:"https://actions.google.com/sounds/v1/weapons/metallic_drops_and_echo.ogg"},{sound:"revolver cylinder click series",url:"https://actions.google.com/sounds/v1/weapons/revolver_cylinder_click_series.ogg"},{sound:"revolver trigger pull empty",url:"https://actions.google.com/sounds/v1/weapons/revolver_trigger_pull_empty.ogg"},{sound:"rifle charging handle",url:"https://actions.google.com/sounds/v1/weapons/rifle_charging_handle.ogg"},{sound:"rifle charging handle dry fire",url:"https://actions.google.com/sounds/v1/weapons/rifle_charging_handle_dry_fire.ogg"},{sound:"rifle cycle far",url:"https://actions.google.com/sounds/v1/weapons/rifle_cycle_far.ogg"},{sound:"rifle fire select",url:"https://actions.google.com/sounds/v1/weapons/rifle_fire_select.ogg"},{sound:"rifle handling mechanical series",url:"https://actions.google.com/sounds/v1/weapons/rifle_handling_mechanical_series.ogg"},{sound:"rifle mag load",url:"https://actions.google.com/sounds/v1/weapons/rifle_mag_load.ogg"},{sound:"rifle magazine handle",url:"https://actions.google.com/sounds/v1/weapons/rifle_magazine_handle.ogg"},{sound:"rifle musket fire random",url:"https://actions.google.com/sounds/v1/weapons/rifle_musket_fire_random.ogg"},{sound:"rifle musket fire volley",url:"https://actions.google.com/sounds/v1/weapons/rifle_musket_fire_volley.ogg"},{sound:"rifle shot echo",url:"https://actions.google.com/sounds/v1/weapons/rifle_shot_echo.ogg"},{sound:"rifle shot echo series",url:"https://actions.google.com/sounds/v1/weapons/rifle_shot_echo_series.ogg"},{sound:"shell casings handgun",url:"https://actions.google.com/sounds/v1/weapons/shell_casings_handgun.ogg"},{sound:"shell casings poured on cement",url:"https://actions.google.com/sounds/v1/weapons/shell_casings_poured_on_cement.ogg"},{sound:"shell casings poured on metal",url:"https://actions.google.com/sounds/v1/weapons/shell_casings_poured_on_metal.ogg"},{sound:"shell casings revolver",url:"https://actions.google.com/sounds/v1/weapons/shell_casings_revolver.ogg"},{sound:"shell casings rifle",url:"https://actions.google.com/sounds/v1/weapons/shell_casings_rifle.ogg"},{sound:"shot gun handling",url:"https://actions.google.com/sounds/v1/weapons/shot_gun_handling.ogg"},{sound:"smoke bomb",url:"https://actions.google.com/sounds/v1/weapons/smoke_bomb.ogg"},{sound:"spring steel rico hit",url:"https://actions.google.com/sounds/v1/weapons/spring_steel_rico_hit.ogg"},{sound:"stylized machine gun shots",url:"https://actions.google.com/sounds/v1/weapons/stylized_machine_gun_shots.ogg"},{sound:"unloading gun magazine series",url:"https://actions.google.com/sounds/v1/weapons/unloading_gun_magazine_series.ogg"},{sound:"unloading gun magazine singles",url:"https://actions.google.com/sounds/v1/weapons/unloading_gun_magazine_singles.ogg"},{sound:"vulcan machine gun series",url:"https://actions.google.com/sounds/v1/weapons/vulcan_machine_gun_series.ogg"},{sound:"handling 50cal gun",url:"https://actions.google.com/sounds/v1/weapons/handling_50cal_gun.ogg"},{sound:"metal drop",url:"https://actions.google.com/sounds/v1/weapons/metal_drop.ogg"},{sound:"afternoon storm long",url:"https://actions.google.com/sounds/v1/weather/afternoon_storm_long.ogg"},{sound:"desert howling wind",url:"https://actions.google.com/sounds/v1/weather/desert_howling_wind.ogg"},{sound:"distant thunder",url:"https://actions.google.com/sounds/v1/weather/distant_thunder.ogg"},{sound:"forest wind summer",url:"https://actions.google.com/sounds/v1/weather/forest_wind_summer.ogg"},{sound:"hail or sleet falling",url:"https://actions.google.com/sounds/v1/weather/hail_or_sleet_falling.ogg"},{sound:"house windy day",url:"https://actions.google.com/sounds/v1/weather/house_windy_day.ogg"},{sound:"ice or rain",url:"https://actions.google.com/sounds/v1/weather/ice_or_rain.ogg"},{sound:"leaves russle on tree",url:"https://actions.google.com/sounds/v1/weather/leaves_russle_on_tree.ogg"},{sound:"light breeze",url:"https://actions.google.com/sounds/v1/weather/light_breeze.ogg"},{sound:"light rain",url:"https://actions.google.com/sounds/v1/weather/light_rain.ogg"},{sound:"long silence at top",url:"https://actions.google.com/sounds/v1/weather/long_silence_at_top.ogg"},{sound:"low thunder rolls",url:"https://actions.google.com/sounds/v1/weather/low_thunder_rolls.ogg"},{sound:"rain heavy loud",url:"https://actions.google.com/sounds/v1/weather/rain_heavy_loud.ogg"},{sound:"rain heavy quiet interior",url:"https://actions.google.com/sounds/v1/weather/rain_heavy_quiet_interior.ogg"},{sound:"rain on roof",url:"https://actions.google.com/sounds/v1/weather/rain_on_roof.ogg"},{sound:"rain on rooftop",url:"https://actions.google.com/sounds/v1/weather/rain_on_rooftop.ogg"},{sound:"rain water dripping fast hard",url:"https://actions.google.com/sounds/v1/weather/rain_water_dripping_fast_hard.ogg"},{sound:"rain water dripping softly",url:"https://actions.google.com/sounds/v1/weather/rain_water_dripping_softly.ogg"},{sound:"rain on car heavy",url:"https://actions.google.com/sounds/v1/weather/rain_on_car_heavy.ogg"},{sound:"rolling thunder",url:"https://actions.google.com/sounds/v1/weather/rolling_thunder.ogg"},{sound:"room tone wind blowing long",url:"https://actions.google.com/sounds/v1/weather/room_tone_wind_blowing_long.ogg"},{sound:"rumbling wind",url:"https://actions.google.com/sounds/v1/weather/rumbling_wind.ogg"},{sound:"strong wind",url:"https://actions.google.com/sounds/v1/weather/strong_wind.ogg"},{sound:"summer thunder and rain",url:"https://actions.google.com/sounds/v1/weather/summer_thunder_and_rain.ogg"},{sound:"thunder crack",url:"https://actions.google.com/sounds/v1/weather/thunder_crack.ogg"},{sound:"thunderstorm",url:"https://actions.google.com/sounds/v1/weather/thunderstorm.ogg"},{sound:"thunderstorm long",url:"https://actions.google.com/sounds/v1/weather/thunderstorm_long.ogg"},{sound:"wind",url:"https://actions.google.com/sounds/v1/weather/wind.ogg"},{sound:"wind in leaves on porch",url:"https://actions.google.com/sounds/v1/weather/wind_in_leaves_on_porch.ogg"},{sound:"wind quiet creaks",url:"https://actions.google.com/sounds/v1/weather/wind_quiet_creaks.ogg"},{sound:"wind on video camera mic",url:"https://actions.google.com/sounds/v1/weather/wind_on_video_camera_mic.ogg"},{sound:"wind through window",url:"https://actions.google.com/sounds/v1/weather/wind_through_window.ogg"},{sound:"windy forrest",url:"https://actions.google.com/sounds/v1/weather/windy_forrest.ogg"},{sound:"windy weather driving",url:"https://actions.google.com/sounds/v1/weather/windy_weather_driving.ogg"}];class Wi extends Gn{constructor(){super(...arguments),this.data={},this.time=0,this.type="p",this.track=0,this.index=0,this.audioUpdated=0}static get template(){return Xn`
      <style>
        :host(.timeline-block) {
          color: #3268D6;
        }

        .audio-description {
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: block;
          line-height: 34px;
          align-items: center;
        }

        .audio-description img {
          margin: 8px 4px 0 8px;
          max-width: 16px;
          max-height: 16px;
          float: left;
        }


        :host(.pending) {
          opacity: .5;
          color: #FFF;
          background-color: #FF8F00 !important;
        }

        :host(.overlapping) {
          color: #FFF;
          background: #F50057 !important;
        }

        :host:hover {
          background: #F50057 !important;
        }

        .audio-options .audio-button {
          background: rgba(255, 255, 255, .24);
          border: none;
          font-size: 18px;
          border-radius: 200px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .3s;
          outline: none;
          position: absolute;
          height: 28px;
          width: 28px;
          padding: 0;
          text-align: center;
          top: 2px;
          z-index: 1;
        }

        .audio-options .close-button {
          right: 8px;
          top: 8px;
          background: #EEE;
          color: #3268D6;
          fill: #3268D6;
          height: 18px;
          width: 18px;
        }

        .audio-options .edit-button {
          left: 2px;
          background: #3268D6;
          color: #FFF;
        }

        .audio-options .edit-button svg {
          fill: #FFF;
          width: 18px;
        }

        .audio-options button:hover {
          background: #FFF:
          color:#00ACEA;
        }

        .audio-container .audio-options {
          display: none;
        }

        .audio-container:hover .audio-options {
          display: block;
        }
      </style>

      <div id='blockDiv' class="audio-container"></div>
    `}static get properties(){return{data:{type:Object,value:{},observer:"renderHtml"},time:{type:Number,reflectToAttribute:!0},type:{type:String,value:"p",observer:"renderHtml",reflectToAttribute:!0},track:{type:Number,reflectToAttribute:!0},index:{type:Number,reflectToAttribute:!0}}}ready(){super.ready(),this.soundLibrary=Ki,this.blockEditorUi=document.getElementById("block-editor-ui"),this.blockEditor=document.getElementById("block-editor")}copy(t){this.data=t.data,this.time=t.time,this.type=t.type,this.index=t.id,this.audioUpdated=t.audioUpdated,this.renderHtml()}getHtml(){return Vi[this.type].getTimelineHtml(this.data)+`<div class="audio-options" part="audio-options">\n        <button class="audio-button edit-button" id="btnEdit"\n            data-index="${this.index}">\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\n        </button>\n\n        <svg class="audio-button close-button" id="btnDelete" data-index="${this.index}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\n      </div>\n    `}renderHtml(){this.$&&this.$.blockDiv&&(this.$.blockDiv.innerHTML=this.getHtml())}getSsml(){return Vi[this.type].getSsml(this.data)}getWrappedSsml(){return Vi[this.type].getOuterSsml(this.data)}getAudioConfig(t){return{audioConfig:{audioEncoding:"LINEAR16",pitch:"0.00",speakingRate:"1.00"},input:{ssml:`<speak>${t||""}</speak>`},voice:{languageCode:"en-US",name:"en-US-Wavenet-D"}}}editBtn(){return this.$.blockDiv.querySelector("#btnEdit")}deleteBtn(){return this.$.blockDiv.querySelector("#btnDelete")}openEditor(t){const{html:e,onOpen:o}=Vi[this.type].getEditor(this.data,this.soundLibrary);this.blockEditorUi.innerHTML=e,this.blockEditor.open(),window.requestAnimationFrame(()=>{o(t.blocks[this.index],t,this.index,this.soundLibrary),this.blockEditorUi.querySelectorAll("paper-input").forEach(e=>{e.addEventListener("input",()=>{const o=e.dataset.attr;t.blocks[this.index].data[o]=e.value,t.updateTimeline(),t.genAudio(this.index)})}),this.blockEditorUi.querySelectorAll("paper-dropdown-menu").forEach(e=>{e.addEventListener("iron-select",()=>{const o=e.selectedItem.dataset.value,n=e.dataset.attr;t.blocks[this.index].data[n]=o,t.updateTimeline(),t.genAudio(this.index)})})})}}window.customElements.define("ssml-block",Wi);const Yi=async(t,e)=>{const o=firebase.functions().httpsCallable("synthesize"),n={audioConfig:{audioEncoding:"LINEAR16",pitch:"0.00",speakingRate:"1.00"},input:{ssml:`<speak>${t}</speak>`},voice:{languageCode:e.languageCode,name:e.name}};return(await o({body:n})).data.audioContent},Xi={"en-US":{title:"English (United States)",voices:["en-US-Wavenet-A","en-US-Wavenet-B","en-US-Wavenet-C","en-US-Wavenet-D","en-US-Wavenet-E","en-US-Wavenet-F","en-US-Standard-B","en-US-Standard-C","en-US-Standard-D","en-US-Standard-E"]},"en-GB":{title:"English (Great Britain)",voices:["en-GB-Wavenet-A","en-GB-Wavenet-B","en-GB-Wavenet-C","en-GB-Wavenet-D","en-GB-Standard-A","en-GB-Standard-B","en-GB-Standard-C","en-GB-Standard-D"]},"en-AU":{title:"English (Australia)",voices:["en-AU-Wavenet-A","en-AU-Wavenet-B","en-AU-Wavenet-C","en-AU-Wavenet-D","en-AU-Standard-A","en-AU-Standard-B","en-AU-Standard-C","en-AU-Standard-D"]},"nl-NL":{title:"Dutch (Netherlands)",voices:["nl-NL-Wavenet-A"]},"fr-FR":{title:"French (France)",voices:["fr-FR-Wavenet-A","fr-FR-Wavenet-B","fr-FR-Wavenet-C","fr-FR-Wavenet-D","fr-FR-Standard-A","fr-FR-Standard-B","fr-FR-Standard-C","fr-FR-Standard-D"]},"fr-CA":{title:"French (Canada)",voices:["fr-CA-Wavenet-A","fr-CA-Wavenet-B","fr-CA-Wavenet-C","fr-CA-Wavenet-D","fr-CA-Standard-A","fr-CA-Standard-B","fr-CA-Standard-C","fr-CA-Standard-D"]},"da-DK":{title:"Dansk (Denmark)",voices:["da-DK-Wavenet-A","da-DK-Standard-A"]},"de-DE":{title:"German",voices:["de-DE-Wavenet-A","de-DE-Wavenet-B","de-DE-Wavenet-C","de-DE-Wavenet-D","de-DE-Standard-A","de-DE-Standard-B"]},"it-IT":{title:"Italian",voices:["it-IT-Wavenet-A","it-IT-Standard-A"]},"ja-JP":{title:"Japanese",voices:["ja-JP-Wavenet-A","ja-JP-Standard-A"]},"ko-KR":{title:"Korean",voices:["ko-KR-Wavenet-A","ko-KR-Wavenet-B","ko-KR-Wavenet-C","ko-KR-Wavenet-D","ko-KR-Standard-A","ko-KR-Standard-B","ko-KR-Standard-C","ko-KR-Standard-D"]},"nb-NO":{title:"Norweigan",voices:["nb-NO-Wavenet-A","nb-NO-Wavenet-B","nb-NO-Wavenet-C","nb-NO-Wavenet-D","nb-NO-Wavenet-E","nb-NO-Standard-A","nb-NO-Standard-B","nb-NO-Standard-C","nb-NO-Standard-D","nb-NO-Standard-E"]},"pl-PL":{title:"Polish",voices:["pl-PL-Wavenet-A","pl-PL-Wavenet-B","pl-PL-Wavenet-C","pl-PL-Wavenet-D","pl-PL-Wavenet-E","pl-PL-Standard-A","pl-PL-Standard-B","pl-PL-Standard-C","pl-PL-Standard-D","pl-PL-Standard-E"]},"pt-BR":{title:"Portuguese (Brazil)",voices:["pt-BR-Wavenet-A","pt-BR-Standard-A"]},"pt-PT":{title:"Portuguese (Portugal)",voices:["pt-PT-Wavenet-A","pt-PT-Wavenet-B","pt-PT-Wavenet-C","pt-PT-Wavenet-D","pt-PT-Standard-A","pt-PT-Standard-B","pt-PT-Standard-C","pt-PT-Standard-D"]},"ru-RU":{title:"Russian",voices:["ru-RU-Wavenet-A","ru-RU-Wavenet-B","ru-RU-Wavenet-C","ru-RU-Wavenet-D","ru-RU-Standard-A","ru-RU-Standard-B","ru-RU-Standard-C","ru-RU-Standard-D"]},"es-ES":{title:"Spanish",voices:["es-ES-Standard-A"]},"sk-SK":{title:"Slovak",voices:["sk-SK-Wavenet-A","sk-SK-Standard-A"]},"sv-SE":{title:"Swedish",voices:["sv-SE-Wavenet-A","sv-SE-Standard-A"]},"tr-TR":{title:"Turkish",voices:["tr-TR-Wavenet-A","tr-TR-Wavenet-B","tr-TR-Wavenet-C","tr-TR-Wavenet-D","tr-TR-Wavenet-E","tr-TR-Standard-A","tr-TR-Standard-B","tr-TR-Standard-C","tr-TR-Standard-D","tr-TR-Standard-E"]},"uk-UA":{title:"Ukranian",voices:["uk-UA-Wavenet-A","uk-UA-Standard-A"]}};class Gi extends Gn{constructor(){super(),this.blocks=[],this.duration=0,this.pixelsPerSecond=100,this.trackHeight=152,this.locale="en-US",this.voice="en-US-Standard-D",this.snapPoints=[0],this.snapTracks=[-1],this.tracksMetadata=[],this.playTimers=[],this.blockIndex=0,this.sidebarWidth=320,this.btnPlay=document.getElementById("btn-play"),this.btnStop=document.getElementById("btn-stop"),this.blockTrackStart=this.blockTrackStart.bind(this),this.addBlock=this.addBlock.bind(this),this.updateTimeline=this.updateTimeline.bind(this),this.updateOverlappingBlocks=this.updateOverlappingBlocks.bind(this)}static get template(){return Xn`
      <div id='timeCursor' data-start="0" part="time-cursor"></div>
      <div id='tts'></div>
      <div id='ticker' part="ticker"></div>

      <table>
        <tr>
          <td>
            <div id='trackJawn' part="settings-bar"></div>
          </td>

          <td>
            <div id='tracks' part="track-list"></div>
          </td>
        </tr>
      </table>

      <div id='blankstate'>
        Drag and drop blocks here from the bottom drawer.
      </div>
      <div id='status' style='display:none'></div>
    `}addBlock(t,e,o){if(t&&t.dataset&&t.dataset.type){const n=t.dataset;this.blocks[this.blockIndex]={type:n.type,time:e/this.pixelsPerSecond,track:Math.max(Math.floor((o-128)/this.trackHeight),0),data:{text:n.text,alt:n.alt,src:n.src,rate:n.rate,pitch:n.pitch,clipBegin:n.clipBegin,clipEnd:n.clipEnd,alias:n.alias,"interpret-as":n.interpretAs,format:n.format,detail:n.detail,level:n.level},id:this.blockIndex,audioUpdated:0},this.updateTimeline(),window.requestAnimationFrame(()=>{this.genAudio(this.blockIndex),this.blockIndex++})}}updateTimeline(){let t="";this.snapPoints=[0],this.snapTracks=[0];const e=this.$.blankstate;this.blocks.length>0?e.classList.add("hidden"):e.classList.remove("hidden"),Object.values(this.blocks).forEach(e=>{t+=`\n        <ssml-block part="audio-clip" class="timeline-block"\n          style="margin-left: ${e.time*this.pixelsPerSecond}px;\n            margin-top: ${64+this.trackHeight*e.track}px;"\n          index="${e.id}" id="timeline-block-${e.id}">\n        </ssml-block>\n      `,this.snapPoints.push(e.time+(e.duration||0)),this.snapTracks.push(e.track)}),this.$.tracks.innerHTML=t,this.updateOverlappingBlocks(),this.$.tracks.querySelectorAll(".timeline-block").forEach(t=>{t.copy(this.blocks[t.index]),t.oncontextmenu=this.openEditor,t.onmousedown=this.blockTrackStart,t.editBtn().onclick=this.openEditor,t.deleteBtn().onclick=t=>{const e=t.target.dataset.index;delete this.blocks[parseInt(e)],this.updateTimeline()}}),this.onmousemove=this.blockTrackMove,this.onmouseup=this.blockTrackEnd;const o=this.getTrackCount();let n="";for(let t=0;t<o;t++)this.tracksMetadata[t]||(this.tracksMetadata[t]={soundLevel:0,fadeInDur:0,fadeOutDur:0}),n+=`\n        <div class='track-label' part="track-setting"\n            style="margin-top: ${this.trackHeight*t}px;\n              height: ${this.trackHeight-8}px">\n          <h3 part="track-setting-title">Track ${t}</h3>\n\n          <div part="track-setting-row">\n            <label part="track-setting-label">Volume</label>\n            <paper-slider part="track-setting-slider"\n              id="track-soundlevel-${t}" pin step="0.5"\n              value="${this.tracksMetadata[t].soundLevel}" max="10" min="-10">\n            </paper-slider>\n          </div>\n          <div part="track-setting-row">\n            <label part="track-setting-label">Fade In</label>\n            <paper-slider part="track-setting-slider"\n              id="track-fadein-${t}" pin max="10" step="0.2"\n              value="${this.tracksMetadata[t].fadeInDur}">\n            </paper-slider>\n          </div>\n          <div part="track-setting-row">\n            <label part="track-setting-label">Fade Out</label>\n            <paper-slider part="track-setting-slider"\n              id="track-fadeout-${t}" pin max="10" step="0.2"\n              value="${this.tracksMetadata[t].fadeOutDur}">\n            </paper-slider>\n          </div>\n        </div>`;this.$.trackJawn.innerHTML=n;const s=this.$.trackJawn;for(let t=0;t<o;t++)s.querySelector(`#track-soundlevel-${t}`).addEventListener("value-change",()=>{const e=s.querySelector(`#track-soundlevel-${t}`);this.tracksMetadata[t].soundLevel=e.value}),s.querySelector(`#track-fadein-${t}`).addEventListener("value-change",()=>{const e=s.querySelector(`#track-fadein-${t}`);this.tracksMetadata[t].fadeInDur=e.value}),s.querySelector(`#track-fadeout-${t}`).addEventListener("value-change",()=>{const e=s.querySelector(`#track-fadeout-${t}`);this.tracksMetadata[t].fadeOutDur=e.value});this.mix(),this.ticker()}updateOverlappingBlocks(){const t=this.blocksToTracks();for(let e=0;e<t.length;e++){const o=t[e];if(o)for(let t=0;t<o.length-1;t++){if("break"==o[t].type)continue;const e=o[t+1].time,n=o[t];if(n.time+n.duration>e){const e=n.id,s=o[t+1].id;this.$.tracks.querySelector(`#timeline-block-${e}`).classList.add("overlapping"),this.$.tracks.querySelector(`#timeline-block-${s}`).classList.add("overlapping")}}}}blocksToTracks(){const t=[];Object.values(this.blocks).forEach(e=>{t[e.track]||(t[e.track]=[]),t[e.track].push(e)});for(let e=0;e<t.length;e++)t[e]&&t[e].sort((t,e)=>t.time<e.time?-1:t.time>e.time?1:0);return t}getTrackCount(){return this.blocksToTracks().length}ticker(){let t="";const e=this.duration*this.pixelsPerSecond,o=Math.max(e,window.innerWidth-320)+320,n=this.$.ticker;n.style.width=`${o}px`,this.$.tracks.style.width=`${o}px`;for(let e=0;e<o;e+=40)t+="<div part='ticker-tick' class='ticker-tick'>",e%this.pixelsPerSecond==0?t+=`${e/this.pixelsPerSecond}s`:t+="|",t+="</div>";n.innerHTML=t,n.onclick=t=>{const e=t.layerX;if(e<this.sidebarWidth)return;const o=this.$.timeCursor;o.dataset.start=`${(e-this.sidebarWidth)/this.pixelsPerSecond}`,o.style.marginLeft=`${e}px`,this.stop((e-this.sidebarWidth)/this.pixelsPerSecond)}}updateStatus(t){this.$.status.innerText=t}blockTrackStart(t){let e,o;t.composedPath().forEach(t=>{t.classList&&t.classList.contains("timeline-block")&&(e=t),"timeline"===t.id&&(o=t)}),e&&o&&(o.trackingBlock={data:e.data,index:e.index,startX:t.offsetX,x:t.clientX-this.sidebarWidth,trackX:parseInt(e.style.marginLeft)})}blockTrackMove(t){if(!this.trackingBlock||!this.trackingBlock.data)return;const e=this.trackingBlock.index;if(isNaN(e)||!this.blocks[e])return;let o=t.offsetX-this.sidebarWidth-this.trackingBlock.startX;const n=o/this.pixelsPerSecond,s=t.offsetY;this.$.tracks.querySelector(`#timeline-block-${e}`).classList.remove("snap");for(const t of this.snapPoints)if(Math.abs(t-n)<.1){const n=this.pixelsPerSecond*t;o=n,this.$.tracks.querySelector(`#timeline-block-${e}`).classList.add("snap")}window.requestAnimationFrame(()=>{const t=this.$.tracks.querySelector(`#timeline-block-${e}`);t.style.marginLeft=`${o}px`;const n=64+Math.floor(s/this.trackHeight)*this.trackHeight;t.style.marginTop=`${n}px`})}blockTrackEnd(t){if(!this.trackingBlock)return;if(this.trackingBlock.x===t.clientX-this.sidebarWidth||!this.trackingBlock.data)return void(this.trackingBlock=void 0);let e=t.offsetX-this.sidebarWidth-this.trackingBlock.startX;const o=this.trackingBlock.index,n=e/this.pixelsPerSecond,s=t.offsetY;this.$.tracks.querySelector(`#timeline-block-${o}`).classList.remove("snap");for(const t of this.snapPoints)if(Math.abs(t-n)<.1){e=this.pixelsPerSecond*t,this.$.tracks.querySelector(`#timeline-block-${o}`).classList.add("snap")}this.blocks[o].time=e/this.pixelsPerSecond,this.blocks[o].track=Math.floor(s/this.trackHeight),this.updateTimeline(),this.trackingBlock=void 0}openEditor(t){let e,o;t.composedPath().forEach(t=>{t.classList&&t.classList.contains("timeline-block")&&(e=t),"timeline"===t.id&&(o=t)}),e&&o&&(o.trackingBlock=void 0,e.openEditor(o),t.preventDefault())}genSsml(t){let e=this.$.tracks.querySelector(`#timeline-block-${t.id}`);return e||(e=document.createElement("ssml-block"),e.copy(t)),e.getSsml()}genWrappedSsml(t){let e=this.$.tracks.querySelector(`#timeline-block-${t.id}`);return e||(e=document.createElement("ssml-block"),e.copy(t)),e.getWrappedSsml()}getSsml(){const t=this.blocksToTracks(),e=[];for(let o=0;o<t.length;o++){const n=t[o];if(n){e[o]=n[0].time;for(let e=0;e<n.length-1;e++){if("break"==n[e].type)continue;t[o][e+1].begin=void 0;const s=n[e+1].time,i=n[e],r=s-i.time-i.duration;i.time+i.duration<s&&(t[o][e+1].begin=r)}}}const o=[];for(let n=0;n<t.length;n++){const s=t[n];if(!s)continue;const i=e[n];let r=`${e[n]}s`;for(let t=1;t<this.snapPoints.length;t++)if(i.toFixed(2)===this.snapPoints[t].toFixed(2)&&this.snapTracks[t]!=n){r=`track-${this.snapTracks[t]}.end`;break}const a=this.$.trackJawn.querySelector(`#track-soundlevel-${n}`).value,l=a>=0?`+${a}dB`:`${a}dB`,c=this.$.trackJawn.querySelector(`#track-fadein-${n}`).value,u=this.$.trackJawn.querySelector(`#track-fadeout-${n}`).value;let d=`\t<media xml:id="track-${n}"`+`${r?` begin="${r}"`:""}`+`${l?` soundLevel="${l}"`:""}`+`${c?` fadeInDur="${c}s"`:""}`+`${u?` fadeOutDur="${u}s"`:""}>\n`;s.length>1&&(d+="\t\t<seq>\n");for(let t=0;t<s.length;t++)s.length>1?(d+="\t\t"+`<media${s[t].begin?` begin="${s[t].begin}s"`:""}>\n`,d+="\t\t\t"+`${this.genWrappedSsml(s[t])}\n`,d+="\t\t</media>\n"):d+=`\t\t${this.genWrappedSsml(s[t])}\n`;s.length>1&&(d+="\t\t</seq>\n"),d+="\t</media>",o.push(d)}let n;n=t.length<=1?"<speak><seq>\n":"<speak><par>\n";for(const t of o)n+=`${t}\n`;return t.length<=1?n+="</seq></speak>":n+="</par></speak>",n}genAudioConfig(t,e){const o=this.$.tracks.querySelector(`#timeline-block-${t}`).getAudioConfig(e);return o.voice={languageCode:this.locale,name:this.voice},o}resetAudio(){this.$.tracks.querySelectorAll(".timeline-block").forEach(t=>{this.genAudio(t.index)})}genAudio(t){const e=Date.now(),o=this.$.tracks.querySelector(`#timeline-block-${t}`);o.classList.add("pending"),Yi(o.getSsml(),{languageCode:this.locale,name:this.voice}).then(n=>{this.blocks[t].audioUpdated<=e&&(this.blocks[t].audioUpdated=e,this.blocks[t].audio=n,this.mix()),o.classList.remove("pending")}).catch(e=>{console.error(`Cannot sythesize audio for block ${t}`,e)})}mix(){this.$.tts.innerHTML="",Object.values(this.blocks).forEach(t=>{t.audio&&(this.$.tts.innerHTML+=`\n        <audio id='audio${t.id}' data-start='${t.time}'>\n          <source type='audio/wav' src='data:audio/wav;base64,${t.audio}'>\n        </audio>\n      `)}),this.duration=0,this.$.tts.querySelectorAll("audio").forEach(t=>{t.onloadeddata=()=>{const e=parseInt(t.id.substr(5));this.blocks[e].duration=t.duration,this.duration=Math.max(this.duration,parseFloat(t.dataset.start)+t.duration),this.$.tracks.querySelector(`#timeline-block-${e}`).style.width=`${t.duration*this.pixelsPerSecond}px`,this.ticker(),this.duration>240?this.updateStatus("Actions on Google has an SSML limit of 240s"):this.updateStatus(`Total time ${Math.ceil(this.duration)}s`)}})}play(t){const e=this.$.timeCursor,o=1e3*parseFloat(e.dataset.start),n=(new Date).getTime()-o;e.classList.add("play"),this.playTimers=[];const s=window.setTimeout(()=>{t(),e.classList.remove("play"),e.dataset.start="0"},1e3*this.duration+100-o);this.playTimers.push(s),this.$.tts.querySelectorAll("audio").forEach(t=>{const e=1e3*parseFloat(t.dataset.start)-o;if(e<0)return;const n=window.setTimeout(t=>{t.play()},e,t);this.playTimers.push(n)});const i=t=>{if(e.classList.contains("play")){const o=(new Date).getTime()-n;e.style.marginLeft=`${t*o/1e3+320}px`,document.getElementById("timeline-time").innerHTML=this.playTime(o),setTimeout(i,20,t)}};setTimeout(i,0,this.pixelsPerSecond)}playTime(t){const e=Math.floor(t/1e3/60);t-=1e3*e*60;const o=Math.floor(t/1e3);return t-=1e3*o,`${e}:${o>9?o:`0${o}`}.`+`${(t=Math.floor(t))>99?t:t>9?`0${t}`:`00${t}`}`}stop(t){const e=this.$.timeCursor;e.classList.remove("play"),e.dataset.start=`${t}`||"0",document.getElementById("timeline-time").innerHTML=this.playTime(1e3*t||0),this.$.tts.querySelectorAll("audio").forEach(e=>{e.currentTime=t||0,e.pause()}),t&&(this.btnPlay.disabled=!1,this.btnPlay.classList.remove("is-hidden"),this.btnStop.classList.add("is-hidden")),this.playTimers&&this.playTimers.forEach(t=>{clearTimeout(t)})}zoomIn(){this.pixelsPerSecond<=100&&(this.pixelsPerSecond*=2,this.updateTimeline())}zoomRefresh(){this.pixelsPerSecond=100,this.updateTimeline()}zoomOut(){this.pixelsPerSecond>=100&&(this.pixelsPerSecond/=2,this.updateTimeline())}}window.customElements.define("ssml-timeline",Gi);const Ji=new(o(50).Parser),Zi=["rate","pitch","clipBegin","clipEnd","alias","interpret-as","format","detail","level","alphabet","ph"];function Qi(t,e,o,n){o.forEach(o=>{if(o.media)return void Qi(t,e,o.media,o.$);if(o.speak)return void Qi(t,e,o.speak,n||o.$);const s=Object.entries(o)[0],i=s[1][0],r={type:s[0],data:{text:"string"==typeof i?i:i._},id:t.id++,track:e,time:0,audioUpdated:0};(null==n?void 0:n.begin)&&(r.time=parseFloat(n.begin)),Zi.forEach(t=>{i.$&&i.$[t]&&(r.data[t]=i.$[t])}),t.timeline.push(r)})}class tr{constructor(){this.activateEvents=this.activateEvents.bind(this),this.blockTrackStart=this.blockTrackStart.bind(this),this.blockTrackEnd=this.blockTrackEnd.bind(this),this.copySsml=this.copySsml.bind(this),this.downloadAudio=this.downloadAudio.bind(this),this.updateDropdowns=this.updateDropdowns.bind(this),this.blocks=document.getElementsByClassName("ssml-block"),this.blockLibrary=document.getElementById("block-library"),this.btnPlay=document.getElementById("btn-play"),this.btnSsml=document.getElementById("btn-ssml"),this.btnDownload=document.getElementById("btn-download"),this.btnCopy=document.getElementById("btn-copy"),this.btnStop=document.getElementById("btn-stop"),this.btnToolbox=document.getElementById("btn-toolbox"),this.exportModal=document.getElementById("ssml"),this.exportModalContent=document.getElementById("ssml-gen"),this.exportSsmlLink=document.getElementById("ssml-reimport"),this.loading=document.getElementById("loading"),this.timeline=document.querySelector("ssml-timeline"),this.timelineContainer=document.getElementById("timeline-container"),this.ttsLocale=document.getElementById("tts-locale"),this.ttsVoices=document.getElementById("tts-voices"),this.zoomIn=document.getElementById("btn-zoomi"),this.zoomOut=document.getElementById("btn-zoomo"),this.zoomRefresh=document.getElementById("btn-zoomr"),this.activateEvents(),this.updateDropdowns(),this.loading.className="loading is-hidden",window.addEventListener("load",()=>{this.populateDropdowns(),this.optionallyImportSsml()})}populateDropdowns(){const t=Object.keys(Xi),e=document.getElementById("tts-locale-lb");e.innerHTML=t.map(t=>`<paper-item data-value="${t}">\n        ${Xi[t].title}\n      </paper-item>`).join(""),e.selected=0}async optionallyImportSsml(){if(window.location.search){const t=decodeURIComponent(window.location.search.substr(1)),e=await async function(t,e){const o=await Ji.parseStringPromise(t);e&&console.log(JSON.stringify(o));const n={timeline:[],metadata:[],id:0},s=o.speak;return s.seq&&s.seq.forEach(t=>{if(t.media){let e;t.media.forEach(t=>{let o=0;t.$&&(o=parseInt(t.$["xml:id"].substr(6)),n.metadata[o]||(n.metadata[o]={fadeInDur:0,fadeOutDur:0,soundLevel:0}),n.metadata[o].soundLevel=parseFloat(t.$.soundLevel),e=t.$),Qi(n,o,t.speak||t.seq,e)})}}),s.par&&s.par.forEach(t=>{t.media&&t.media.forEach(t=>{let e=0;t.$&&(e=parseInt(t.$["xml:id"].substr(6)),n.metadata[e]||(n.metadata[e]={fadeInDur:0,fadeOutDur:0,soundLevel:0}),n.metadata[e].soundLevel=parseFloat(t.$.soundLevel),n.metadata[e].fadeInDur=parseFloat(t.$.fadeInDur)||0,n.metadata[e].fadeOutDur=parseFloat(t.$.fadeOutDur)||0),Qi(n,e,t.speak||t.seq,{})})}),n}(t);this.timeline.set("blocks",e.timeline),this.timeline.set("tracksMetadata",e.metadata),this.timeline.set("blockIndex",e.id),this.timeline.resetAudio(),this.timeline.updateTimeline()}}activateEvents(){this.btnToolbox.onclick=()=>{this.blockLibrary.classList.contains("hidden")?this.blockLibrary.classList.remove("hidden"):this.blockLibrary.classList.add("hidden")},this.btnDownload.onclick=()=>{this.downloadAudio()},this.btnCopy.onclick=()=>{this.copySsml()},this.btnSsml.onclick=()=>{this.exportModal.open();const t=this.timeline.getSsml();this.exportModalContent.innerText=t,this.exportSsmlLink.href=`?${encodeURIComponent(t)}`},this.zoomIn.onclick=()=>{this.timeline.zoomIn()},this.zoomOut.onclick=()=>{this.timeline.zoomOut()},this.zoomRefresh.onclick=()=>{this.timeline.zoomRefresh()},this.btnPlay.onclick=()=>{this.timeline.duration>0&&(this.btnPlay.disabled=!0,this.btnPlay.classList.add("is-hidden"),this.btnStop.classList.remove("is-hidden"),this.timeline.play(()=>{this.btnPlay.disabled=!1,this.btnPlay.classList.remove("is-hidden"),this.btnStop.classList.add("is-hidden")}))},window.addEventListener("beforeunload",(function(t){return(t||window.event).returnValue="If you leave this page your changes will be lost.","If you leave this page your changes will be lost."})),this.btnPlay.onclick=()=>{this.btnPlay.disabled=!0,this.btnPlay.classList.add("is-hidden"),this.btnStop.classList.remove("is-hidden"),this.timeline.play(()=>{this.btnPlay.disabled=!1,this.btnPlay.classList.remove("is-hidden"),this.btnStop.classList.add("is-hidden")})},this.btnStop.onclick=()=>{this.btnPlay.disabled=!1,this.btnPlay.classList.remove("is-hidden"),this.btnStop.classList.add("is-hidden"),this.timeline.stop(0)};for(let t=0;t<this.blocks.length;t++)this.blocks.item(t).ondrag=this.blockTrackStart,this.blocks.item(t).ondragend=this.blockTrackEnd;this.ttsLocale.addEventListener("iron-select",()=>{const t=document.getElementById("tts-voices-lb"),e=this.ttsLocale.selectedItem.dataset.value,o=Xi[e].voices.map(t=>`<paper-item data-value="${t}">${t}</paper-item>`).join("");t.innerHTML=o,this.ttsVoices.value=void 0,this.timeline.locale=e,window.requestAnimationFrame(()=>{t.selected=0})}),this.ttsVoices.addEventListener("iron-select",()=>{const t=this.ttsVoices.selectedItem.dataset.value;this.timeline.voice=t,this.timeline.resetAudio()})}blockTrackStart(t){const e=t.srcElement;this.trackingBlock={dataset:e.dataset,startX:t.x}}blockTrackEnd(t){this.trackingBlock&&this.trackingBlock.startX!==t.x&&(this.timeline.addBlock(this.trackingBlock,t.x-320,t.y),this.trackingBlock=void 0)}copySsml(){const t=this.exportModalContent.textContent,e=document.createElement("textarea");e.textContent=t,document.body.append(e),setTimeout(()=>{e.select(),document.execCommand("copy")},25)}downloadAudio(){const t=this.timeline.getSsml();Yi(t,{languageCode:this.timeline.locale,name:this.timeline.voice}).then(t=>{const e=document.createElement("a");e.setAttribute("href",`data:audio/wav;base64,${t}`),e.setAttribute("download",`nightingale-${(new Date).toISOString()}.wav`),e.click()}).catch(t=>{console.error("Cannot create synthezied audio",t)})}updateDropdowns(){const t=this.ttsLocale.$.menuButton.shadowRoot.querySelector("slot").assignedElements()[0].querySelector("paper-input");t.shadowRoot.querySelector("label"),t.shadowRoot.querySelector("label"),t.shadowRoot.querySelector("iron-input"),t.shadowRoot.querySelector("iron-input")}}}]);