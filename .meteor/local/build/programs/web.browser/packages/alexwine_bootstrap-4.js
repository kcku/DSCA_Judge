//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/alexwine_bootstrap-4/dist/js/popper.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 1
 Copyright (C) Federico Zivolo 2017                                                                                    // 2
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).                          // 3
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=window.getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e||-1!==['HTML','BODY','#document'].indexOf(e.nodeName))return window.document.body;var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:window.document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return window.document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var f=a.commonAncestorContainer;if(e!==f&&t!==f||i.contains(n))return p(f)?f:r(f);var l=s(e);return l.host?d(l.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=window.document.documentElement,r=window.document.scrollingElement||n;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function l(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return+e['border'+o+'Width'].split('px')[0]+ +e['border'+i+'Width'].split('px')[0]}function m(e,t,o,i){return _(t['offset'+e],o['client'+e],o['offset'+e],ie()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function h(){var e=window.document.body,t=window.document.documentElement,o=ie()&&window.getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function c(e){return se({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ie())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?h():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,f=e.offsetWidth-s,m=e.offsetHeight-d;if(f||m){var g=t(e);f-=l(g,'x'),m-=l(g,'y'),r.width-=f,r.height-=m}return c(r)}function u(e,o){var i=ie(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),l=+a.borderTopWidth.split('px')[0],m=+a.borderLeftWidth.split('px')[0],h=c({top:p.top-s.top-l,left:p.left-s.left-m,width:p.width,height:p.height});if(h.marginTop=0,h.marginLeft=0,!i&&r){var u=+a.marginTop.split('px')[0],b=+a.marginLeft.split('px')[0];h.top-=l-u,h.bottom-=l-u,h.left-=m-b,h.right-=m-b,h.marginTop=u,h.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(h=f(h,o)),h}function b(e){var t=window.document.documentElement,o=u(e,t),i=_(t.clientWidth,window.innerWidth||0),n=_(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return c(s)}function y(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||y(o(e))}function w(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(e)),'BODY'===a.nodeName&&(a=window.document.documentElement)):'window'===r?a=window.document.documentElement:a=r;var f=u(a,s);if('HTML'===a.nodeName&&!y(s)){var l=h(),m=l.height,c=l.width;p.top+=f.top-f.marginTop,p.bottom=m+f.top,p.left+=f.left-f.marginLeft,p.right=c+f.left}else p=f}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function v(e){var t=e.width,o=e.height;return t*o}function E(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=w(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return se({key:e},s[e],{area:v(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),f=0<a.length?a[0].key:d[0].key,l=e.split('-')[1];return f+(l?'-'+l:'')}function x(e,t,o){var i=d(t,o);return u(o,i)}function O(e){var t=window.getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function L(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=O(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[L(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function C(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function N(t,o,i){var n=void 0===i?t:t.slice(0,C(t,'name',i));return n.forEach(function(t){t.function&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t.function||t.fn;t.enabled&&e(i)&&(o.offsets.popper=c(o.offsets.popper),o.offsets.reference=c(o.offsets.reference),o=i(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=x(this.state,this.popper,this.reference),e.placement=E(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=N(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof window.document.body.style[r])return r}return null}function D(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function H(e,t,o,i){var r='BODY'===e.nodeName,p=r?window:e;p.addEventListener(t,o,{passive:!0}),r||H(n(p.parentNode),t,o,i),i.push(p)}function P(e,t,o,i){o.updateBound=i,window.addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return H(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function A(){this.state.eventsEnabled||(this.state=P(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return window.removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function I(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function R(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function U(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&R(t[o])&&(i='px'),e.style[o]=t[o]+i})}function Y(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function j(e){return'end'===e?'start':'start'===e?'end':e}function K(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ae.indexOf(e),i=ae.slice(o+1).concat(ae.slice(0,o));return t?i.reverse():i}function q(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=c(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?_(document.documentElement.clientHeight,window.innerHeight||0):_(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function G(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return q(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){R(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}for(var z=Math.min,V=Math.floor,_=Math.max,X=['native code','[object MutationObserverConstructor]'],Q=function(e){return X.some(function(t){return-1<(e||'').toString().indexOf(t)})},J='undefined'!=typeof window,Z=['Edge','Trident','Firefox'],$=0,ee=0;ee<Z.length;ee+=1)if(J&&0<=navigator.userAgent.indexOf(Z[ee])){$=1;break}var i,te=J&&Q(window.MutationObserver),oe=te?function(e){var t=!1,o=0,i=document.createElement('span'),n=new MutationObserver(function(){e(),t=!1});return n.observe(i,{attributes:!0}),function(){t||(t=!0,i.setAttribute('x-index',o),++o)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},$))}},ie=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},ne=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},re=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),pe=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},se=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},de=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ae=de.slice(3),fe={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},le=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};ne(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=oe(this.update.bind(this)),this.options=se({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o.jquery?o[0]:o,this.popper=i.jquery?i[0]:i,this.options.modifiers={},Object.keys(se({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=se({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return se({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return re(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return D.call(this)}},{key:'enableEventListeners',value:function(){return A.call(this)}},{key:'disableEventListeners',value:function(){return I.call(this)}}]),t}();return le.Utils=('undefined'==typeof window?global:window).PopperUtils,le.placements=de,le.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',f={start:pe({},d,r[d]),end:pe({},d,r[d]+r[a]-p[a])};e.offsets.popper=se({},p,f[i])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=R(+i)?[+i,0]:G(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=w(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=_(p[e],i[e])),pe({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=z(p[o],i[e]-('right'===e?p.width:p.height))),pe({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=se({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=V,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var o=t.element;if('string'==typeof o){if(o=e.instance.popper.querySelector(o),!o)return e;}else if(!e.instance.popper.contains(o))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var i=e.placement.split('-')[0],n=e.offsets,r=n.popper,p=n.reference,s=-1!==['left','right'].indexOf(i),d=s?'height':'width',a=s?'top':'left',f=s?'left':'top',l=s?'bottom':'right',m=O(o)[d];p[l]-m<r[a]&&(e.offsets.popper[a]-=r[a]-(p[l]-m)),p[a]+m>r[l]&&(e.offsets.popper[a]+=p[a]+m-r[l]);var h=p[a]+p[d]/2-m/2,g=h-c(e.offsets.popper)[a];return g=_(z(r[d]-m,g),0),e.arrowElement=o,e.offsets.arrow={},e.offsets.arrow[a]=Math.round(g),e.offsets.arrow[f]='',e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=w(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=L(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case fe.FLIP:p=[i,n];break;case fe.CLOCKWISE:p=K(i);break;case fe.COUNTERCLOCKWISE:p=K(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=L(i);var a=e.offsets.popper,f=e.offsets.reference,l=V,m='left'===i&&l(a.right)>l(f.left)||'right'===i&&l(a.left)<l(f.right)||'top'===i&&l(a.bottom)>l(f.top)||'bottom'===i&&l(a.top)<l(f.bottom),h=l(a.left)<l(o.left),c=l(a.right)>l(o.right),g=l(a.top)<l(o.top),u=l(a.bottom)>l(o.bottom),b='left'===i&&h||'right'===i&&c||'top'===i&&g||'bottom'===i&&u,y=-1!==['top','bottom'].indexOf(i),w=!!t.flipVariations&&(y&&'start'===r&&h||y&&'end'===r&&c||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),w&&(r=j(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=se({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=N(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[t]-(s?n[p?'width':'height']:0),e.placement=L(t),e.offsets.popper=c(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,f=r(e.instance.popper),l=g(f),m={position:n.position},h={left:V(n.left),top:V(n.top),bottom:V(n.bottom),right:V(n.right)},c='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=B('transform');if(d='bottom'==c?-l.height+h.bottom:h.top,s='right'==u?-l.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[u]=0,m.willChange='transform';else{var y='bottom'==c?-1:1,w='right'==u?-1:1;m[c]=d*y,m[u]=s*w,m.willChange=c+', '+u}var v={"x-placement":e.placement};return e.attributes=se({},v,e.attributes),e.styles=se({},m,e.styles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return U(e.instance.popper,e.styles),Y(e.instance.popper,e.attributes),e.offsets.arrow&&U(e.arrowElement,e.offsets.arrow),e},onLoad:function(e,t,o,i,n){var r=x(n,t,e),p=E(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),U(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},le});
//# sourceMappingURL=popper.min.js.map                                                                                 // 5
                                                                                                                       // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/alexwine_bootstrap-4/dist/js/bootstrap.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!                                                                                                                    // 1
  * Bootstrap v4.0.0-beta.2 (https://getbootstrap.com)                                                                 // 2
  * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)                  // 3
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 4
  */                                                                                                                   // 5
var bootstrap = (function (exports,$,Popper) {                                                                         // 6
'use strict';                                                                                                          // 7
                                                                                                                       // 8
$ = $ && $.hasOwnProperty('default') ? $['default'] : $;                                                               // 9
Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;                                      // 10
                                                                                                                       // 11
/**                                                                                                                    // 12
 * --------------------------------------------------------------------------                                          // 13
 * Bootstrap (v4.0.0-beta.2): util.js                                                                                  // 14
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 15
 * --------------------------------------------------------------------------                                          // 16
 */                                                                                                                    // 17
                                                                                                                       // 18
var Util = function ($$$1) {                                                                                           // 19
  /**                                                                                                                  // 20
   * ------------------------------------------------------------------------                                          // 21
   * Private TransitionEnd Helpers                                                                                     // 22
   * ------------------------------------------------------------------------                                          // 23
   */                                                                                                                  // 24
  var transition = false;                                                                                              // 25
  var MAX_UID = 1000000;                                                                                               // 26
  var TransitionEndEvent = {                                                                                           // 27
    WebkitTransition: 'webkitTransitionEnd',                                                                           // 28
    transition: 'transitionend' // shoutout AngusCroll (https://goo.gl/pxwQGp)                                         // 29
                                                                                                                       // 30
  };                                                                                                                   // 31
                                                                                                                       // 32
  function toType(obj) {                                                                                               // 33
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();                                              // 34
  }                                                                                                                    // 35
                                                                                                                       // 36
  function getSpecialTransitionEndEvent() {                                                                            // 37
    return {                                                                                                           // 38
      bindType: transition.end,                                                                                        // 39
      delegateType: transition.end,                                                                                    // 40
      handle: function handle(event) {                                                                                 // 41
        if ($$$1(event.target).is(this)) {                                                                             // 42
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params             // 43
        }                                                                                                              // 44
                                                                                                                       // 45
        return undefined; // eslint-disable-line no-undefined                                                          // 46
      }                                                                                                                // 47
    };                                                                                                                 // 48
  }                                                                                                                    // 49
                                                                                                                       // 50
  function transitionEndTest() {                                                                                       // 51
    if (window.QUnit) {                                                                                                // 52
      return false;                                                                                                    // 53
    }                                                                                                                  // 54
                                                                                                                       // 55
    var el = document.createElement('bootstrap');                                                                      // 56
                                                                                                                       // 57
    for (var name in TransitionEndEvent) {                                                                             // 58
      if (typeof el.style[name] !== 'undefined') {                                                                     // 59
        return {                                                                                                       // 60
          end: TransitionEndEvent[name]                                                                                // 61
        };                                                                                                             // 62
      }                                                                                                                // 63
    }                                                                                                                  // 64
                                                                                                                       // 65
    return false;                                                                                                      // 66
  }                                                                                                                    // 67
                                                                                                                       // 68
  function transitionEndEmulator(duration) {                                                                           // 69
    var _this = this;                                                                                                  // 70
                                                                                                                       // 71
    var called = false;                                                                                                // 72
    $$$1(this).one(Util.TRANSITION_END, function () {                                                                  // 73
      called = true;                                                                                                   // 74
    });                                                                                                                // 75
    setTimeout(function () {                                                                                           // 76
      if (!called) {                                                                                                   // 77
        Util.triggerTransitionEnd(_this);                                                                              // 78
      }                                                                                                                // 79
    }, duration);                                                                                                      // 80
    return this;                                                                                                       // 81
  }                                                                                                                    // 82
                                                                                                                       // 83
  function setTransitionEndSupport() {                                                                                 // 84
    transition = transitionEndTest();                                                                                  // 85
    $$$1.fn.emulateTransitionEnd = transitionEndEmulator;                                                              // 86
                                                                                                                       // 87
    if (Util.supportsTransitionEnd()) {                                                                                // 88
      $$$1.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();                                        // 89
    }                                                                                                                  // 90
  }                                                                                                                    // 91
  /**                                                                                                                  // 92
   * --------------------------------------------------------------------------                                        // 93
   * Public Util Api                                                                                                   // 94
   * --------------------------------------------------------------------------                                        // 95
   */                                                                                                                  // 96
                                                                                                                       // 97
                                                                                                                       // 98
  var Util = {                                                                                                         // 99
    TRANSITION_END: 'bsTransitionEnd',                                                                                 // 100
    getUID: function getUID(prefix) {                                                                                  // 101
      do {                                                                                                             // 102
        // eslint-disable-next-line no-bitwise                                                                         // 103
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here                            // 104
      } while (document.getElementById(prefix));                                                                       // 105
                                                                                                                       // 106
      return prefix;                                                                                                   // 107
    },                                                                                                                 // 108
    getSelectorFromElement: function getSelectorFromElement(element) {                                                 // 109
      var selector = element.getAttribute('data-target');                                                              // 110
                                                                                                                       // 111
      if (!selector || selector === '#') {                                                                             // 112
        selector = element.getAttribute('href') || '';                                                                 // 113
      }                                                                                                                // 114
                                                                                                                       // 115
      try {                                                                                                            // 116
        var $selector = $$$1(document).find(selector);                                                                 // 117
        return $selector.length > 0 ? selector : null;                                                                 // 118
      } catch (error) {                                                                                                // 119
        return null;                                                                                                   // 120
      }                                                                                                                // 121
    },                                                                                                                 // 122
    reflow: function reflow(element) {                                                                                 // 123
      return element.offsetHeight;                                                                                     // 124
    },                                                                                                                 // 125
    triggerTransitionEnd: function triggerTransitionEnd(element) {                                                     // 126
      $$$1(element).trigger(transition.end);                                                                           // 127
    },                                                                                                                 // 128
    supportsTransitionEnd: function supportsTransitionEnd() {                                                          // 129
      return Boolean(transition);                                                                                      // 130
    },                                                                                                                 // 131
    isElement: function isElement(obj) {                                                                               // 132
      return (obj[0] || obj).nodeType;                                                                                 // 133
    },                                                                                                                 // 134
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {                                    // 135
      for (var property in configTypes) {                                                                              // 136
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {                                             // 137
          var expectedTypes = configTypes[property];                                                                   // 138
          var value = config[property];                                                                                // 139
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);                                  // 140
                                                                                                                       // 141
          if (!new RegExp(expectedTypes).test(valueType)) {                                                            // 142
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }                                                                                                            // 144
        }                                                                                                              // 145
      }                                                                                                                // 146
    }                                                                                                                  // 147
  };                                                                                                                   // 148
  setTransitionEndSupport();                                                                                           // 149
  return Util;                                                                                                         // 150
}($);                                                                                                                  // 151
                                                                                                                       // 152
function _defineProperties(target, props) {                                                                            // 153
  for (var i = 0; i < props.length; i++) {                                                                             // 154
    var descriptor = props[i];                                                                                         // 155
    descriptor.enumerable = descriptor.enumerable || false;                                                            // 156
    descriptor.configurable = true;                                                                                    // 157
    if ("value" in descriptor) descriptor.writable = true;                                                             // 158
    Object.defineProperty(target, descriptor.key, descriptor);                                                         // 159
  }                                                                                                                    // 160
}                                                                                                                      // 161
                                                                                                                       // 162
function _createClass(Constructor, protoProps, staticProps) {                                                          // 163
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);                                                // 164
  if (staticProps) _defineProperties(Constructor, staticProps);                                                        // 165
  return Constructor;                                                                                                  // 166
}                                                                                                                      // 167
                                                                                                                       // 168
var createClass = _createClass;                                                                                        // 169
                                                                                                                       // 170
function _inheritsLoose(subClass, superClass) {                                                                        // 171
  subClass.prototype = Object.create(superClass.prototype);                                                            // 172
  subClass.prototype.constructor = subClass;                                                                           // 173
  subClass.__proto__ = superClass;                                                                                     // 174
}                                                                                                                      // 175
                                                                                                                       // 176
var inheritsLoose = _inheritsLoose;                                                                                    // 177
                                                                                                                       // 178
/**                                                                                                                    // 179
 * --------------------------------------------------------------------------                                          // 180
 * Bootstrap (v4.0.0-beta.2): alert.js                                                                                 // 181
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 182
 * --------------------------------------------------------------------------                                          // 183
 */                                                                                                                    // 184
                                                                                                                       // 185
var Alert = function ($$$1) {                                                                                          // 186
  /**                                                                                                                  // 187
   * ------------------------------------------------------------------------                                          // 188
   * Constants                                                                                                         // 189
   * ------------------------------------------------------------------------                                          // 190
   */                                                                                                                  // 191
  var NAME = 'alert';                                                                                                  // 192
  var VERSION = '4.0.0-beta.2';                                                                                        // 193
  var DATA_KEY = 'bs.alert';                                                                                           // 194
  var EVENT_KEY = "." + DATA_KEY;                                                                                      // 195
  var DATA_API_KEY = '.data-api';                                                                                      // 196
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];                                                                              // 197
  var TRANSITION_DURATION = 150;                                                                                       // 198
  var Selector = {                                                                                                     // 199
    DISMISS: '[data-dismiss="alert"]'                                                                                  // 200
  };                                                                                                                   // 201
  var Event = {                                                                                                        // 202
    CLOSE: "close" + EVENT_KEY,                                                                                        // 203
    CLOSED: "closed" + EVENT_KEY,                                                                                      // 204
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY                                                                 // 205
  };                                                                                                                   // 206
  var ClassName = {                                                                                                    // 207
    ALERT: 'alert',                                                                                                    // 208
    FADE: 'fade',                                                                                                      // 209
    SHOW: 'show'                                                                                                       // 210
    /**                                                                                                                // 211
     * ------------------------------------------------------------------------                                        // 212
     * Class Definition                                                                                                // 213
     * ------------------------------------------------------------------------                                        // 214
     */                                                                                                                // 215
                                                                                                                       // 216
  };                                                                                                                   // 217
                                                                                                                       // 218
  var Alert =                                                                                                          // 219
  /*#__PURE__*/                                                                                                        // 220
  function () {                                                                                                        // 221
    function Alert(element) {                                                                                          // 222
      this._element = element;                                                                                         // 223
    } // getters                                                                                                       // 224
                                                                                                                       // 225
                                                                                                                       // 226
    var _proto = Alert.prototype;                                                                                      // 227
                                                                                                                       // 228
    // public                                                                                                          // 229
    _proto.close = function close(element) {                                                                           // 230
      element = element || this._element;                                                                              // 231
                                                                                                                       // 232
      var rootElement = this._getRootElement(element);                                                                 // 233
                                                                                                                       // 234
      var customEvent = this._triggerCloseEvent(rootElement);                                                          // 235
                                                                                                                       // 236
      if (customEvent.isDefaultPrevented()) {                                                                          // 237
        return;                                                                                                        // 238
      }                                                                                                                // 239
                                                                                                                       // 240
      this._removeElement(rootElement);                                                                                // 241
    };                                                                                                                 // 242
                                                                                                                       // 243
    _proto.dispose = function dispose() {                                                                              // 244
      $$$1.removeData(this._element, DATA_KEY);                                                                        // 245
      this._element = null;                                                                                            // 246
    }; // private                                                                                                      // 247
                                                                                                                       // 248
                                                                                                                       // 249
    _proto._getRootElement = function _getRootElement(element) {                                                       // 250
      var selector = Util.getSelectorFromElement(element);                                                             // 251
      var parent = false;                                                                                              // 252
                                                                                                                       // 253
      if (selector) {                                                                                                  // 254
        parent = $$$1(selector)[0];                                                                                    // 255
      }                                                                                                                // 256
                                                                                                                       // 257
      if (!parent) {                                                                                                   // 258
        parent = $$$1(element).closest("." + ClassName.ALERT)[0];                                                      // 259
      }                                                                                                                // 260
                                                                                                                       // 261
      return parent;                                                                                                   // 262
    };                                                                                                                 // 263
                                                                                                                       // 264
    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {                                                 // 265
      var closeEvent = $$$1.Event(Event.CLOSE);                                                                        // 266
      $$$1(element).trigger(closeEvent);                                                                               // 267
      return closeEvent;                                                                                               // 268
    };                                                                                                                 // 269
                                                                                                                       // 270
    _proto._removeElement = function _removeElement(element) {                                                         // 271
      var _this = this;                                                                                                // 272
                                                                                                                       // 273
      $$$1(element).removeClass(ClassName.SHOW);                                                                       // 274
                                                                                                                       // 275
      if (!Util.supportsTransitionEnd() || !$$$1(element).hasClass(ClassName.FADE)) {                                  // 276
        this._destroyElement(element);                                                                                 // 277
                                                                                                                       // 278
        return;                                                                                                        // 279
      }                                                                                                                // 280
                                                                                                                       // 281
      $$$1(element).one(Util.TRANSITION_END, function (event) {                                                        // 282
        return _this._destroyElement(element, event);                                                                  // 283
      }).emulateTransitionEnd(TRANSITION_DURATION);                                                                    // 284
    };                                                                                                                 // 285
                                                                                                                       // 286
    _proto._destroyElement = function _destroyElement(element) {                                                       // 287
      $$$1(element).detach().trigger(Event.CLOSED).remove();                                                           // 288
    }; // static                                                                                                       // 289
                                                                                                                       // 290
                                                                                                                       // 291
    Alert._jQueryInterface = function _jQueryInterface(config) {                                                       // 292
      return this.each(function () {                                                                                   // 293
        var $element = $$$1(this);                                                                                     // 294
        var data = $element.data(DATA_KEY);                                                                            // 295
                                                                                                                       // 296
        if (!data) {                                                                                                   // 297
          data = new Alert(this);                                                                                      // 298
          $element.data(DATA_KEY, data);                                                                               // 299
        }                                                                                                              // 300
                                                                                                                       // 301
        if (config === 'close') {                                                                                      // 302
          data[config](this);                                                                                          // 303
        }                                                                                                              // 304
      });                                                                                                              // 305
    };                                                                                                                 // 306
                                                                                                                       // 307
    Alert._handleDismiss = function _handleDismiss(alertInstance) {                                                    // 308
      return function (event) {                                                                                        // 309
        if (event) {                                                                                                   // 310
          event.preventDefault();                                                                                      // 311
        }                                                                                                              // 312
                                                                                                                       // 313
        alertInstance.close(this);                                                                                     // 314
      };                                                                                                               // 315
    };                                                                                                                 // 316
                                                                                                                       // 317
    createClass(Alert, null, [{                                                                                        // 318
      key: "VERSION",                                                                                                  // 319
      get: function get() {                                                                                            // 320
        return VERSION;                                                                                                // 321
      }                                                                                                                // 322
    }]);                                                                                                               // 323
    return Alert;                                                                                                      // 324
  }();                                                                                                                 // 325
  /**                                                                                                                  // 326
   * ------------------------------------------------------------------------                                          // 327
   * Data Api implementation                                                                                           // 328
   * ------------------------------------------------------------------------                                          // 329
   */                                                                                                                  // 330
                                                                                                                       // 331
                                                                                                                       // 332
  $$$1(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));                        // 333
  /**                                                                                                                  // 334
   * ------------------------------------------------------------------------                                          // 335
   * jQuery                                                                                                            // 336
   * ------------------------------------------------------------------------                                          // 337
   */                                                                                                                  // 338
                                                                                                                       // 339
  $$$1.fn[NAME] = Alert._jQueryInterface;                                                                              // 340
  $$$1.fn[NAME].Constructor = Alert;                                                                                   // 341
                                                                                                                       // 342
  $$$1.fn[NAME].noConflict = function () {                                                                             // 343
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;                                                                                // 344
    return Alert._jQueryInterface;                                                                                     // 345
  };                                                                                                                   // 346
                                                                                                                       // 347
  return Alert;                                                                                                        // 348
}($);                                                                                                                  // 349
                                                                                                                       // 350
/**                                                                                                                    // 351
 * --------------------------------------------------------------------------                                          // 352
 * Bootstrap (v4.0.0-beta.2): button.js                                                                                // 353
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 354
 * --------------------------------------------------------------------------                                          // 355
 */                                                                                                                    // 356
                                                                                                                       // 357
var Button = function ($$$1) {                                                                                         // 358
  /**                                                                                                                  // 359
   * ------------------------------------------------------------------------                                          // 360
   * Constants                                                                                                         // 361
   * ------------------------------------------------------------------------                                          // 362
   */                                                                                                                  // 363
  var NAME = 'button';                                                                                                 // 364
  var VERSION = '4.0.0-beta.2';                                                                                        // 365
  var DATA_KEY = 'bs.button';                                                                                          // 366
  var EVENT_KEY = "." + DATA_KEY;                                                                                      // 367
  var DATA_API_KEY = '.data-api';                                                                                      // 368
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];                                                                              // 369
  var ClassName = {                                                                                                    // 370
    ACTIVE: 'active',                                                                                                  // 371
    BUTTON: 'btn',                                                                                                     // 372
    FOCUS: 'focus'                                                                                                     // 373
  };                                                                                                                   // 374
  var Selector = {                                                                                                     // 375
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',                                                                     // 376
    DATA_TOGGLE: '[data-toggle="buttons"]',                                                                            // 377
    INPUT: 'input',                                                                                                    // 378
    ACTIVE: '.active',                                                                                                 // 379
    BUTTON: '.btn'                                                                                                     // 380
  };                                                                                                                   // 381
  var Event = {                                                                                                        // 382
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,                                                                // 383
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY + DATA_API_KEY + " " + ("blur" + EVENT_KEY + DATA_API_KEY)                // 384
    /**                                                                                                                // 385
     * ------------------------------------------------------------------------                                        // 386
     * Class Definition                                                                                                // 387
     * ------------------------------------------------------------------------                                        // 388
     */                                                                                                                // 389
                                                                                                                       // 390
  };                                                                                                                   // 391
                                                                                                                       // 392
  var Button =                                                                                                         // 393
  /*#__PURE__*/                                                                                                        // 394
  function () {                                                                                                        // 395
    function Button(element) {                                                                                         // 396
      this._element = element;                                                                                         // 397
    } // getters                                                                                                       // 398
                                                                                                                       // 399
                                                                                                                       // 400
    var _proto = Button.prototype;                                                                                     // 401
                                                                                                                       // 402
    // public                                                                                                          // 403
    _proto.toggle = function toggle() {                                                                                // 404
      var triggerChangeEvent = true;                                                                                   // 405
      var addAriaPressed = true;                                                                                       // 406
      var rootElement = $$$1(this._element).closest(Selector.DATA_TOGGLE)[0];                                          // 407
                                                                                                                       // 408
      if (rootElement) {                                                                                               // 409
        var input = $$$1(this._element).find(Selector.INPUT)[0];                                                       // 410
                                                                                                                       // 411
        if (input) {                                                                                                   // 412
          if (input.type === 'radio') {                                                                                // 413
            if (input.checked && $$$1(this._element).hasClass(ClassName.ACTIVE)) {                                     // 414
              triggerChangeEvent = false;                                                                              // 415
            } else {                                                                                                   // 416
              var activeElement = $$$1(rootElement).find(Selector.ACTIVE)[0];                                          // 417
                                                                                                                       // 418
              if (activeElement) {                                                                                     // 419
                $$$1(activeElement).removeClass(ClassName.ACTIVE);                                                     // 420
              }                                                                                                        // 421
            }                                                                                                          // 422
          }                                                                                                            // 423
                                                                                                                       // 424
          if (triggerChangeEvent) {                                                                                    // 425
            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
              return;                                                                                                  // 427
            }                                                                                                          // 428
                                                                                                                       // 429
            input.checked = !$$$1(this._element).hasClass(ClassName.ACTIVE);                                           // 430
            $$$1(input).trigger('change');                                                                             // 431
          }                                                                                                            // 432
                                                                                                                       // 433
          input.focus();                                                                                               // 434
          addAriaPressed = false;                                                                                      // 435
        }                                                                                                              // 436
      }                                                                                                                // 437
                                                                                                                       // 438
      if (addAriaPressed) {                                                                                            // 439
        this._element.setAttribute('aria-pressed', !$$$1(this._element).hasClass(ClassName.ACTIVE));                   // 440
      }                                                                                                                // 441
                                                                                                                       // 442
      if (triggerChangeEvent) {                                                                                        // 443
        $$$1(this._element).toggleClass(ClassName.ACTIVE);                                                             // 444
      }                                                                                                                // 445
    };                                                                                                                 // 446
                                                                                                                       // 447
    _proto.dispose = function dispose() {                                                                              // 448
      $$$1.removeData(this._element, DATA_KEY);                                                                        // 449
      this._element = null;                                                                                            // 450
    }; // static                                                                                                       // 451
                                                                                                                       // 452
                                                                                                                       // 453
    Button._jQueryInterface = function _jQueryInterface(config) {                                                      // 454
      return this.each(function () {                                                                                   // 455
        var data = $$$1(this).data(DATA_KEY);                                                                          // 456
                                                                                                                       // 457
        if (!data) {                                                                                                   // 458
          data = new Button(this);                                                                                     // 459
          $$$1(this).data(DATA_KEY, data);                                                                             // 460
        }                                                                                                              // 461
                                                                                                                       // 462
        if (config === 'toggle') {                                                                                     // 463
          data[config]();                                                                                              // 464
        }                                                                                                              // 465
      });                                                                                                              // 466
    };                                                                                                                 // 467
                                                                                                                       // 468
    createClass(Button, null, [{                                                                                       // 469
      key: "VERSION",                                                                                                  // 470
      get: function get() {                                                                                            // 471
        return VERSION;                                                                                                // 472
      }                                                                                                                // 473
    }]);                                                                                                               // 474
    return Button;                                                                                                     // 475
  }();                                                                                                                 // 476
  /**                                                                                                                  // 477
   * ------------------------------------------------------------------------                                          // 478
   * Data Api implementation                                                                                           // 479
   * ------------------------------------------------------------------------                                          // 480
   */                                                                                                                  // 481
                                                                                                                       // 482
                                                                                                                       // 483
  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {                              // 484
    event.preventDefault();                                                                                            // 485
    var button = event.target;                                                                                         // 486
                                                                                                                       // 487
    if (!$$$1(button).hasClass(ClassName.BUTTON)) {                                                                    // 488
      button = $$$1(button).closest(Selector.BUTTON);                                                                  // 489
    }                                                                                                                  // 490
                                                                                                                       // 491
    Button._jQueryInterface.call($$$1(button), 'toggle');                                                              // 492
  }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {                                     // 493
    var button = $$$1(event.target).closest(Selector.BUTTON)[0];                                                       // 494
    $$$1(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));                                        // 495
  });                                                                                                                  // 496
  /**                                                                                                                  // 497
   * ------------------------------------------------------------------------                                          // 498
   * jQuery                                                                                                            // 499
   * ------------------------------------------------------------------------                                          // 500
   */                                                                                                                  // 501
                                                                                                                       // 502
  $$$1.fn[NAME] = Button._jQueryInterface;                                                                             // 503
  $$$1.fn[NAME].Constructor = Button;                                                                                  // 504
                                                                                                                       // 505
  $$$1.fn[NAME].noConflict = function () {                                                                             // 506
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;                                                                                // 507
    return Button._jQueryInterface;                                                                                    // 508
  };                                                                                                                   // 509
                                                                                                                       // 510
  return Button;                                                                                                       // 511
}($);                                                                                                                  // 512
                                                                                                                       // 513
/**                                                                                                                    // 514
 * --------------------------------------------------------------------------                                          // 515
 * Bootstrap (v4.0.0-beta.2): carousel.js                                                                              // 516
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 517
 * --------------------------------------------------------------------------                                          // 518
 */                                                                                                                    // 519
                                                                                                                       // 520
var Carousel = function ($$$1) {                                                                                       // 521
  /**                                                                                                                  // 522
   * ------------------------------------------------------------------------                                          // 523
   * Constants                                                                                                         // 524
   * ------------------------------------------------------------------------                                          // 525
   */                                                                                                                  // 526
  var NAME = 'carousel';                                                                                               // 527
  var VERSION = '4.0.0-beta.2';                                                                                        // 528
  var DATA_KEY = 'bs.carousel';                                                                                        // 529
  var EVENT_KEY = "." + DATA_KEY;                                                                                      // 530
  var DATA_API_KEY = '.data-api';                                                                                      // 531
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];                                                                              // 532
  var TRANSITION_DURATION = 600;                                                                                       // 533
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key                                         // 534
                                                                                                                       // 535
  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key                                       // 536
                                                                                                                       // 537
  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch                                // 538
                                                                                                                       // 539
  var Default = {                                                                                                      // 540
    interval: 5000,                                                                                                    // 541
    keyboard: true,                                                                                                    // 542
    slide: false,                                                                                                      // 543
    pause: 'hover',                                                                                                    // 544
    wrap: true                                                                                                         // 545
  };                                                                                                                   // 546
  var DefaultType = {                                                                                                  // 547
    interval: '(number|boolean)',                                                                                      // 548
    keyboard: 'boolean',                                                                                               // 549
    slide: '(boolean|string)',                                                                                         // 550
    pause: '(string|boolean)',                                                                                         // 551
    wrap: 'boolean'                                                                                                    // 552
  };                                                                                                                   // 553
  var Direction = {                                                                                                    // 554
    NEXT: 'next',                                                                                                      // 555
    PREV: 'prev',                                                                                                      // 556
    LEFT: 'left',                                                                                                      // 557
    RIGHT: 'right'                                                                                                     // 558
  };                                                                                                                   // 559
  var Event = {                                                                                                        // 560
    SLIDE: "slide" + EVENT_KEY,                                                                                        // 561
    SLID: "slid" + EVENT_KEY,                                                                                          // 562
    KEYDOWN: "keydown" + EVENT_KEY,                                                                                    // 563
    MOUSEENTER: "mouseenter" + EVENT_KEY,                                                                              // 564
    MOUSELEAVE: "mouseleave" + EVENT_KEY,                                                                              // 565
    TOUCHEND: "touchend" + EVENT_KEY,                                                                                  // 566
    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,                                                                  // 567
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY                                                                 // 568
  };                                                                                                                   // 569
  var ClassName = {                                                                                                    // 570
    CAROUSEL: 'carousel',                                                                                              // 571
    ACTIVE: 'active',                                                                                                  // 572
    SLIDE: 'slide',                                                                                                    // 573
    RIGHT: 'carousel-item-right',                                                                                      // 574
    LEFT: 'carousel-item-left',                                                                                        // 575
    NEXT: 'carousel-item-next',                                                                                        // 576
    PREV: 'carousel-item-prev',                                                                                        // 577
    ITEM: 'carousel-item'                                                                                              // 578
  };                                                                                                                   // 579
  var Selector = {                                                                                                     // 580
    ACTIVE: '.active',                                                                                                 // 581
    ACTIVE_ITEM: '.active.carousel-item',                                                                              // 582
    ITEM: '.carousel-item',                                                                                            // 583
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',                                                             // 584
    INDICATORS: '.carousel-indicators',                                                                                // 585
    DATA_SLIDE: '[data-slide], [data-slide-to]',                                                                       // 586
    DATA_RIDE: '[data-ride="carousel"]'                                                                                // 587
    /**                                                                                                                // 588
     * ------------------------------------------------------------------------                                        // 589
     * Class Definition                                                                                                // 590
     * ------------------------------------------------------------------------                                        // 591
     */                                                                                                                // 592
                                                                                                                       // 593
  };                                                                                                                   // 594
                                                                                                                       // 595
  var Carousel =                                                                                                       // 596
  /*#__PURE__*/                                                                                                        // 597
  function () {                                                                                                        // 598
    function Carousel(element, config) {                                                                               // 599
      this._items = null;                                                                                              // 600
      this._interval = null;                                                                                           // 601
      this._activeElement = null;                                                                                      // 602
      this._isPaused = false;                                                                                          // 603
      this._isSliding = false;                                                                                         // 604
      this.touchTimeout = null;                                                                                        // 605
      this._config = this._getConfig(config);                                                                          // 606
      this._element = $$$1(element)[0];                                                                                // 607
      this._indicatorsElement = $$$1(this._element).find(Selector.INDICATORS)[0];                                      // 608
                                                                                                                       // 609
      this._addEventListeners();                                                                                       // 610
    } // getters                                                                                                       // 611
                                                                                                                       // 612
                                                                                                                       // 613
    var _proto = Carousel.prototype;                                                                                   // 614
                                                                                                                       // 615
    // public                                                                                                          // 616
    _proto.next = function next() {                                                                                    // 617
      if (!this._isSliding) {                                                                                          // 618
        this._slide(Direction.NEXT);                                                                                   // 619
      }                                                                                                                // 620
    };                                                                                                                 // 621
                                                                                                                       // 622
    _proto.nextWhenVisible = function nextWhenVisible() {                                                              // 623
      // Don't call next when the page isn't visible                                                                   // 624
      // or the carousel or its parent isn't visible                                                                   // 625
      if (!document.hidden && $$$1(this._element).is(':visible') && $$$1(this._element).css('visibility') !== 'hidden') {
        this.next();                                                                                                   // 627
      }                                                                                                                // 628
    };                                                                                                                 // 629
                                                                                                                       // 630
    _proto.prev = function prev() {                                                                                    // 631
      if (!this._isSliding) {                                                                                          // 632
        this._slide(Direction.PREV);                                                                                   // 633
      }                                                                                                                // 634
    };                                                                                                                 // 635
                                                                                                                       // 636
    _proto.pause = function pause(event) {                                                                             // 637
      if (!event) {                                                                                                    // 638
        this._isPaused = true;                                                                                         // 639
      }                                                                                                                // 640
                                                                                                                       // 641
      if ($$$1(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {                           // 642
        Util.triggerTransitionEnd(this._element);                                                                      // 643
        this.cycle(true);                                                                                              // 644
      }                                                                                                                // 645
                                                                                                                       // 646
      clearInterval(this._interval);                                                                                   // 647
      this._interval = null;                                                                                           // 648
    };                                                                                                                 // 649
                                                                                                                       // 650
    _proto.cycle = function cycle(event) {                                                                             // 651
      if (!event) {                                                                                                    // 652
        this._isPaused = false;                                                                                        // 653
      }                                                                                                                // 654
                                                                                                                       // 655
      if (this._interval) {                                                                                            // 656
        clearInterval(this._interval);                                                                                 // 657
        this._interval = null;                                                                                         // 658
      }                                                                                                                // 659
                                                                                                                       // 660
      if (this._config.interval && !this._isPaused) {                                                                  // 661
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }                                                                                                                // 663
    };                                                                                                                 // 664
                                                                                                                       // 665
    _proto.to = function to(index) {                                                                                   // 666
      var _this = this;                                                                                                // 667
                                                                                                                       // 668
      this._activeElement = $$$1(this._element).find(Selector.ACTIVE_ITEM)[0];                                         // 669
                                                                                                                       // 670
      var activeIndex = this._getItemIndex(this._activeElement);                                                       // 671
                                                                                                                       // 672
      if (index > this._items.length - 1 || index < 0) {                                                               // 673
        return;                                                                                                        // 674
      }                                                                                                                // 675
                                                                                                                       // 676
      if (this._isSliding) {                                                                                           // 677
        $$$1(this._element).one(Event.SLID, function () {                                                              // 678
          return _this.to(index);                                                                                      // 679
        });                                                                                                            // 680
        return;                                                                                                        // 681
      }                                                                                                                // 682
                                                                                                                       // 683
      if (activeIndex === index) {                                                                                     // 684
        this.pause();                                                                                                  // 685
        this.cycle();                                                                                                  // 686
        return;                                                                                                        // 687
      }                                                                                                                // 688
                                                                                                                       // 689
      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;                                           // 690
                                                                                                                       // 691
      this._slide(direction, this._items[index]);                                                                      // 692
    };                                                                                                                 // 693
                                                                                                                       // 694
    _proto.dispose = function dispose() {                                                                              // 695
      $$$1(this._element).off(EVENT_KEY);                                                                              // 696
      $$$1.removeData(this._element, DATA_KEY);                                                                        // 697
      this._items = null;                                                                                              // 698
      this._config = null;                                                                                             // 699
      this._element = null;                                                                                            // 700
      this._interval = null;                                                                                           // 701
      this._isPaused = null;                                                                                           // 702
      this._isSliding = null;                                                                                          // 703
      this._activeElement = null;                                                                                      // 704
      this._indicatorsElement = null;                                                                                  // 705
    }; // private                                                                                                      // 706
                                                                                                                       // 707
                                                                                                                       // 708
    _proto._getConfig = function _getConfig(config) {                                                                  // 709
      config = $$$1.extend({}, Default, config);                                                                       // 710
      Util.typeCheckConfig(NAME, config, DefaultType);                                                                 // 711
      return config;                                                                                                   // 712
    };                                                                                                                 // 713
                                                                                                                       // 714
    _proto._addEventListeners = function _addEventListeners() {                                                        // 715
      var _this2 = this;                                                                                               // 716
                                                                                                                       // 717
      if (this._config.keyboard) {                                                                                     // 718
        $$$1(this._element).on(Event.KEYDOWN, function (event) {                                                       // 719
          return _this2._keydown(event);                                                                               // 720
        });                                                                                                            // 721
      }                                                                                                                // 722
                                                                                                                       // 723
      if (this._config.pause === 'hover') {                                                                            // 724
        $$$1(this._element).on(Event.MOUSEENTER, function (event) {                                                    // 725
          return _this2.pause(event);                                                                                  // 726
        }).on(Event.MOUSELEAVE, function (event) {                                                                     // 727
          return _this2.cycle(event);                                                                                  // 728
        });                                                                                                            // 729
                                                                                                                       // 730
        if ('ontouchstart' in document.documentElement) {                                                              // 731
          // if it's a touch-enabled device, mouseenter/leave are fired as                                             // 732
          // part of the mouse compatibility events on first tap - the carousel                                        // 733
          // would stop cycling until user tapped out of it;                                                           // 734
          // here, we listen for touchend, explicitly pause the carousel                                               // 735
          // (as if it's the second time we tap on it, mouseenter compat event                                         // 736
          // is NOT fired) and after a timeout (to allow for mouse compatibility                                       // 737
          // events to fire) we explicitly restart cycling                                                             // 738
          $$$1(this._element).on(Event.TOUCHEND, function () {                                                         // 739
            _this2.pause();                                                                                            // 740
                                                                                                                       // 741
            if (_this2.touchTimeout) {                                                                                 // 742
              clearTimeout(_this2.touchTimeout);                                                                       // 743
            }                                                                                                          // 744
                                                                                                                       // 745
            _this2.touchTimeout = setTimeout(function (event) {                                                        // 746
              return _this2.cycle(event);                                                                              // 747
            }, TOUCHEVENT_COMPAT_WAIT + _this2._config.interval);                                                      // 748
          });                                                                                                          // 749
        }                                                                                                              // 750
      }                                                                                                                // 751
    };                                                                                                                 // 752
                                                                                                                       // 753
    _proto._keydown = function _keydown(event) {                                                                       // 754
      if (/input|textarea/i.test(event.target.tagName)) {                                                              // 755
        return;                                                                                                        // 756
      }                                                                                                                // 757
                                                                                                                       // 758
      switch (event.which) {                                                                                           // 759
        case ARROW_LEFT_KEYCODE:                                                                                       // 760
          event.preventDefault();                                                                                      // 761
          this.prev();                                                                                                 // 762
          break;                                                                                                       // 763
                                                                                                                       // 764
        case ARROW_RIGHT_KEYCODE:                                                                                      // 765
          event.preventDefault();                                                                                      // 766
          this.next();                                                                                                 // 767
          break;                                                                                                       // 768
                                                                                                                       // 769
        default:                                                                                                       // 770
          return;                                                                                                      // 771
      }                                                                                                                // 772
    };                                                                                                                 // 773
                                                                                                                       // 774
    _proto._getItemIndex = function _getItemIndex(element) {                                                           // 775
      this._items = $$$1.makeArray($$$1(element).parent().find(Selector.ITEM));                                        // 776
      return this._items.indexOf(element);                                                                             // 777
    };                                                                                                                 // 778
                                                                                                                       // 779
    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {                              // 780
      var isNextDirection = direction === Direction.NEXT;                                                              // 781
      var isPrevDirection = direction === Direction.PREV;                                                              // 782
                                                                                                                       // 783
      var activeIndex = this._getItemIndex(activeElement);                                                             // 784
                                                                                                                       // 785
      var lastItemIndex = this._items.length - 1;                                                                      // 786
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;    // 787
                                                                                                                       // 788
      if (isGoingToWrap && !this._config.wrap) {                                                                       // 789
        return activeElement;                                                                                          // 790
      }                                                                                                                // 791
                                                                                                                       // 792
      var delta = direction === Direction.PREV ? -1 : 1;                                                               // 793
      var itemIndex = (activeIndex + delta) % this._items.length;                                                      // 794
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];                          // 795
    };                                                                                                                 // 796
                                                                                                                       // 797
    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {                       // 798
      var targetIndex = this._getItemIndex(relatedTarget);                                                             // 799
                                                                                                                       // 800
      var fromIndex = this._getItemIndex($$$1(this._element).find(Selector.ACTIVE_ITEM)[0]);                           // 801
                                                                                                                       // 802
      var slideEvent = $$$1.Event(Event.SLIDE, {                                                                       // 803
        relatedTarget: relatedTarget,                                                                                  // 804
        direction: eventDirectionName,                                                                                 // 805
        from: fromIndex,                                                                                               // 806
        to: targetIndex                                                                                                // 807
      });                                                                                                              // 808
      $$$1(this._element).trigger(slideEvent);                                                                         // 809
      return slideEvent;                                                                                               // 810
    };                                                                                                                 // 811
                                                                                                                       // 812
    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {                                 // 813
      if (this._indicatorsElement) {                                                                                   // 814
        $$$1(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);                             // 815
                                                                                                                       // 816
        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];                             // 817
                                                                                                                       // 818
        if (nextIndicator) {                                                                                           // 819
          $$$1(nextIndicator).addClass(ClassName.ACTIVE);                                                              // 820
        }                                                                                                              // 821
      }                                                                                                                // 822
    };                                                                                                                 // 823
                                                                                                                       // 824
    _proto._slide = function _slide(direction, element) {                                                              // 825
      var _this3 = this;                                                                                               // 826
                                                                                                                       // 827
      var activeElement = $$$1(this._element).find(Selector.ACTIVE_ITEM)[0];                                           // 828
                                                                                                                       // 829
      var activeElementIndex = this._getItemIndex(activeElement);                                                      // 830
                                                                                                                       // 831
      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);                // 832
                                                                                                                       // 833
      var nextElementIndex = this._getItemIndex(nextElement);                                                          // 834
                                                                                                                       // 835
      var isCycling = Boolean(this._interval);                                                                         // 836
      var directionalClassName;                                                                                        // 837
      var orderClassName;                                                                                              // 838
      var eventDirectionName;                                                                                          // 839
                                                                                                                       // 840
      if (direction === Direction.NEXT) {                                                                              // 841
        directionalClassName = ClassName.LEFT;                                                                         // 842
        orderClassName = ClassName.NEXT;                                                                               // 843
        eventDirectionName = Direction.LEFT;                                                                           // 844
      } else {                                                                                                         // 845
        directionalClassName = ClassName.RIGHT;                                                                        // 846
        orderClassName = ClassName.PREV;                                                                               // 847
        eventDirectionName = Direction.RIGHT;                                                                          // 848
      }                                                                                                                // 849
                                                                                                                       // 850
      if (nextElement && $$$1(nextElement).hasClass(ClassName.ACTIVE)) {                                               // 851
        this._isSliding = false;                                                                                       // 852
        return;                                                                                                        // 853
      }                                                                                                                // 854
                                                                                                                       // 855
      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);                                       // 856
                                                                                                                       // 857
      if (slideEvent.isDefaultPrevented()) {                                                                           // 858
        return;                                                                                                        // 859
      }                                                                                                                // 860
                                                                                                                       // 861
      if (!activeElement || !nextElement) {                                                                            // 862
        // some weirdness is happening, so we bail                                                                     // 863
        return;                                                                                                        // 864
      }                                                                                                                // 865
                                                                                                                       // 866
      this._isSliding = true;                                                                                          // 867
                                                                                                                       // 868
      if (isCycling) {                                                                                                 // 869
        this.pause();                                                                                                  // 870
      }                                                                                                                // 871
                                                                                                                       // 872
      this._setActiveIndicatorElement(nextElement);                                                                    // 873
                                                                                                                       // 874
      var slidEvent = $$$1.Event(Event.SLID, {                                                                         // 875
        relatedTarget: nextElement,                                                                                    // 876
        direction: eventDirectionName,                                                                                 // 877
        from: activeElementIndex,                                                                                      // 878
        to: nextElementIndex                                                                                           // 879
      });                                                                                                              // 880
                                                                                                                       // 881
      if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.SLIDE)) {                             // 882
        $$$1(nextElement).addClass(orderClassName);                                                                    // 883
        Util.reflow(nextElement);                                                                                      // 884
        $$$1(activeElement).addClass(directionalClassName);                                                            // 885
        $$$1(nextElement).addClass(directionalClassName);                                                              // 886
        $$$1(activeElement).one(Util.TRANSITION_END, function () {                                                     // 887
          $$$1(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName.ACTIVE);       // 888
          $$$1(activeElement).removeClass(ClassName.ACTIVE + " " + orderClassName + " " + directionalClassName);       // 889
          _this3._isSliding = false;                                                                                   // 890
          setTimeout(function () {                                                                                     // 891
            return $$$1(_this3._element).trigger(slidEvent);                                                           // 892
          }, 0);                                                                                                       // 893
        }).emulateTransitionEnd(TRANSITION_DURATION);                                                                  // 894
      } else {                                                                                                         // 895
        $$$1(activeElement).removeClass(ClassName.ACTIVE);                                                             // 896
        $$$1(nextElement).addClass(ClassName.ACTIVE);                                                                  // 897
        this._isSliding = false;                                                                                       // 898
        $$$1(this._element).trigger(slidEvent);                                                                        // 899
      }                                                                                                                // 900
                                                                                                                       // 901
      if (isCycling) {                                                                                                 // 902
        this.cycle();                                                                                                  // 903
      }                                                                                                                // 904
    }; // static                                                                                                       // 905
                                                                                                                       // 906
                                                                                                                       // 907
    Carousel._jQueryInterface = function _jQueryInterface(config) {                                                    // 908
      return this.each(function () {                                                                                   // 909
        var data = $$$1(this).data(DATA_KEY);                                                                          // 910
                                                                                                                       // 911
        var _config = $$$1.extend({}, Default, $$$1(this).data());                                                     // 912
                                                                                                                       // 913
        if (typeof config === 'object') {                                                                              // 914
          $$$1.extend(_config, config);                                                                                // 915
        }                                                                                                              // 916
                                                                                                                       // 917
        var action = typeof config === 'string' ? config : _config.slide;                                              // 918
                                                                                                                       // 919
        if (!data) {                                                                                                   // 920
          data = new Carousel(this, _config);                                                                          // 921
          $$$1(this).data(DATA_KEY, data);                                                                             // 922
        }                                                                                                              // 923
                                                                                                                       // 924
        if (typeof config === 'number') {                                                                              // 925
          data.to(config);                                                                                             // 926
        } else if (typeof action === 'string') {                                                                       // 927
          if (typeof data[action] === 'undefined') {                                                                   // 928
            throw new Error("No method named \"" + action + "\"");                                                     // 929
          }                                                                                                            // 930
                                                                                                                       // 931
          data[action]();                                                                                              // 932
        } else if (_config.interval) {                                                                                 // 933
          data.pause();                                                                                                // 934
          data.cycle();                                                                                                // 935
        }                                                                                                              // 936
      });                                                                                                              // 937
    };                                                                                                                 // 938
                                                                                                                       // 939
    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {                                             // 940
      var selector = Util.getSelectorFromElement(this);                                                                // 941
                                                                                                                       // 942
      if (!selector) {                                                                                                 // 943
        return;                                                                                                        // 944
      }                                                                                                                // 945
                                                                                                                       // 946
      var target = $$$1(selector)[0];                                                                                  // 947
                                                                                                                       // 948
      if (!target || !$$$1(target).hasClass(ClassName.CAROUSEL)) {                                                     // 949
        return;                                                                                                        // 950
      }                                                                                                                // 951
                                                                                                                       // 952
      var config = $$$1.extend({}, $$$1(target).data(), $$$1(this).data());                                            // 953
      var slideIndex = this.getAttribute('data-slide-to');                                                             // 954
                                                                                                                       // 955
      if (slideIndex) {                                                                                                // 956
        config.interval = false;                                                                                       // 957
      }                                                                                                                // 958
                                                                                                                       // 959
      Carousel._jQueryInterface.call($$$1(target), config);                                                            // 960
                                                                                                                       // 961
      if (slideIndex) {                                                                                                // 962
        $$$1(target).data(DATA_KEY).to(slideIndex);                                                                    // 963
      }                                                                                                                // 964
                                                                                                                       // 965
      event.preventDefault();                                                                                          // 966
    };                                                                                                                 // 967
                                                                                                                       // 968
    createClass(Carousel, null, [{                                                                                     // 969
      key: "VERSION",                                                                                                  // 970
      get: function get() {                                                                                            // 971
        return VERSION;                                                                                                // 972
      }                                                                                                                // 973
    }, {                                                                                                               // 974
      key: "Default",                                                                                                  // 975
      get: function get() {                                                                                            // 976
        return Default;                                                                                                // 977
      }                                                                                                                // 978
    }]);                                                                                                               // 979
    return Carousel;                                                                                                   // 980
  }();                                                                                                                 // 981
  /**                                                                                                                  // 982
   * ------------------------------------------------------------------------                                          // 983
   * Data Api implementation                                                                                           // 984
   * ------------------------------------------------------------------------                                          // 985
   */                                                                                                                  // 986
                                                                                                                       // 987
                                                                                                                       // 988
  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);                         // 989
  $$$1(window).on(Event.LOAD_DATA_API, function () {                                                                   // 990
    $$$1(Selector.DATA_RIDE).each(function () {                                                                        // 991
      var $carousel = $$$1(this);                                                                                      // 992
                                                                                                                       // 993
      Carousel._jQueryInterface.call($carousel, $carousel.data());                                                     // 994
    });                                                                                                                // 995
  });                                                                                                                  // 996
  /**                                                                                                                  // 997
   * ------------------------------------------------------------------------                                          // 998
   * jQuery                                                                                                            // 999
   * ------------------------------------------------------------------------                                          // 1000
   */                                                                                                                  // 1001
                                                                                                                       // 1002
  $$$1.fn[NAME] = Carousel._jQueryInterface;                                                                           // 1003
  $$$1.fn[NAME].Constructor = Carousel;                                                                                // 1004
                                                                                                                       // 1005
  $$$1.fn[NAME].noConflict = function () {                                                                             // 1006
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;                                                                                // 1007
    return Carousel._jQueryInterface;                                                                                  // 1008
  };                                                                                                                   // 1009
                                                                                                                       // 1010
  return Carousel;                                                                                                     // 1011
}($);                                                                                                                  // 1012
                                                                                                                       // 1013
/**                                                                                                                    // 1014
 * --------------------------------------------------------------------------                                          // 1015
 * Bootstrap (v4.0.0-beta.2): collapse.js                                                                              // 1016
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 1017
 * --------------------------------------------------------------------------                                          // 1018
 */                                                                                                                    // 1019
                                                                                                                       // 1020
var Collapse = function ($$$1) {                                                                                       // 1021
  /**                                                                                                                  // 1022
   * ------------------------------------------------------------------------                                          // 1023
   * Constants                                                                                                         // 1024
   * ------------------------------------------------------------------------                                          // 1025
   */                                                                                                                  // 1026
  var NAME = 'collapse';                                                                                               // 1027
  var VERSION = '4.0.0-beta.2';                                                                                        // 1028
  var DATA_KEY = 'bs.collapse';                                                                                        // 1029
  var EVENT_KEY = "." + DATA_KEY;                                                                                      // 1030
  var DATA_API_KEY = '.data-api';                                                                                      // 1031
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];                                                                              // 1032
  var TRANSITION_DURATION = 600;                                                                                       // 1033
  var Default = {                                                                                                      // 1034
    toggle: true,                                                                                                      // 1035
    parent: ''                                                                                                         // 1036
  };                                                                                                                   // 1037
  var DefaultType = {                                                                                                  // 1038
    toggle: 'boolean',                                                                                                 // 1039
    parent: '(string|element)'                                                                                         // 1040
  };                                                                                                                   // 1041
  var Event = {                                                                                                        // 1042
    SHOW: "show" + EVENT_KEY,                                                                                          // 1043
    SHOWN: "shown" + EVENT_KEY,                                                                                        // 1044
    HIDE: "hide" + EVENT_KEY,                                                                                          // 1045
    HIDDEN: "hidden" + EVENT_KEY,                                                                                      // 1046
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY                                                                 // 1047
  };                                                                                                                   // 1048
  var ClassName = {                                                                                                    // 1049
    SHOW: 'show',                                                                                                      // 1050
    COLLAPSE: 'collapse',                                                                                              // 1051
    COLLAPSING: 'collapsing',                                                                                          // 1052
    COLLAPSED: 'collapsed'                                                                                             // 1053
  };                                                                                                                   // 1054
  var Dimension = {                                                                                                    // 1055
    WIDTH: 'width',                                                                                                    // 1056
    HEIGHT: 'height'                                                                                                   // 1057
  };                                                                                                                   // 1058
  var Selector = {                                                                                                     // 1059
    ACTIVES: '.show, .collapsing',                                                                                     // 1060
    DATA_TOGGLE: '[data-toggle="collapse"]'                                                                            // 1061
    /**                                                                                                                // 1062
     * ------------------------------------------------------------------------                                        // 1063
     * Class Definition                                                                                                // 1064
     * ------------------------------------------------------------------------                                        // 1065
     */                                                                                                                // 1066
                                                                                                                       // 1067
  };                                                                                                                   // 1068
                                                                                                                       // 1069
  var Collapse =                                                                                                       // 1070
  /*#__PURE__*/                                                                                                        // 1071
  function () {                                                                                                        // 1072
    function Collapse(element, config) {                                                                               // 1073
      this._isTransitioning = false;                                                                                   // 1074
      this._element = element;                                                                                         // 1075
      this._config = this._getConfig(config);                                                                          // 1076
      this._triggerArray = $$$1.makeArray($$$1("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var tabToggles = $$$1(Selector.DATA_TOGGLE);                                                                     // 1078
                                                                                                                       // 1079
      for (var i = 0; i < tabToggles.length; i++) {                                                                    // 1080
        var elem = tabToggles[i];                                                                                      // 1081
        var selector = Util.getSelectorFromElement(elem);                                                              // 1082
                                                                                                                       // 1083
        if (selector !== null && $$$1(selector).filter(element).length > 0) {                                          // 1084
          this._triggerArray.push(elem);                                                                               // 1085
        }                                                                                                              // 1086
      }                                                                                                                // 1087
                                                                                                                       // 1088
      this._parent = this._config.parent ? this._getParent() : null;                                                   // 1089
                                                                                                                       // 1090
      if (!this._config.parent) {                                                                                      // 1091
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);                                             // 1092
      }                                                                                                                // 1093
                                                                                                                       // 1094
      if (this._config.toggle) {                                                                                       // 1095
        this.toggle();                                                                                                 // 1096
      }                                                                                                                // 1097
    } // getters                                                                                                       // 1098
                                                                                                                       // 1099
                                                                                                                       // 1100
    var _proto = Collapse.prototype;                                                                                   // 1101
                                                                                                                       // 1102
    // public                                                                                                          // 1103
    _proto.toggle = function toggle() {                                                                                // 1104
      if ($$$1(this._element).hasClass(ClassName.SHOW)) {                                                              // 1105
        this.hide();                                                                                                   // 1106
      } else {                                                                                                         // 1107
        this.show();                                                                                                   // 1108
      }                                                                                                                // 1109
    };                                                                                                                 // 1110
                                                                                                                       // 1111
    _proto.show = function show() {                                                                                    // 1112
      var _this = this;                                                                                                // 1113
                                                                                                                       // 1114
      if (this._isTransitioning || $$$1(this._element).hasClass(ClassName.SHOW)) {                                     // 1115
        return;                                                                                                        // 1116
      }                                                                                                                // 1117
                                                                                                                       // 1118
      var actives;                                                                                                     // 1119
      var activesData;                                                                                                 // 1120
                                                                                                                       // 1121
      if (this._parent) {                                                                                              // 1122
        actives = $$$1.makeArray($$$1(this._parent).children().children(Selector.ACTIVES));                            // 1123
                                                                                                                       // 1124
        if (!actives.length) {                                                                                         // 1125
          actives = null;                                                                                              // 1126
        }                                                                                                              // 1127
      }                                                                                                                // 1128
                                                                                                                       // 1129
      if (actives) {                                                                                                   // 1130
        activesData = $$$1(actives).data(DATA_KEY);                                                                    // 1131
                                                                                                                       // 1132
        if (activesData && activesData._isTransitioning) {                                                             // 1133
          return;                                                                                                      // 1134
        }                                                                                                              // 1135
      }                                                                                                                // 1136
                                                                                                                       // 1137
      var startEvent = $$$1.Event(Event.SHOW);                                                                         // 1138
      $$$1(this._element).trigger(startEvent);                                                                         // 1139
                                                                                                                       // 1140
      if (startEvent.isDefaultPrevented()) {                                                                           // 1141
        return;                                                                                                        // 1142
      }                                                                                                                // 1143
                                                                                                                       // 1144
      if (actives) {                                                                                                   // 1145
        Collapse._jQueryInterface.call($$$1(actives), 'hide');                                                         // 1146
                                                                                                                       // 1147
        if (!activesData) {                                                                                            // 1148
          $$$1(actives).data(DATA_KEY, null);                                                                          // 1149
        }                                                                                                              // 1150
      }                                                                                                                // 1151
                                                                                                                       // 1152
      var dimension = this._getDimension();                                                                            // 1153
                                                                                                                       // 1154
      $$$1(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);                              // 1155
      this._element.style[dimension] = 0;                                                                              // 1156
                                                                                                                       // 1157
      if (this._triggerArray.length) {                                                                                 // 1158
        $$$1(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);                         // 1159
      }                                                                                                                // 1160
                                                                                                                       // 1161
      this.setTransitioning(true);                                                                                     // 1162
                                                                                                                       // 1163
      var complete = function complete() {                                                                             // 1164
        $$$1(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);  // 1165
        _this._element.style[dimension] = '';                                                                          // 1166
                                                                                                                       // 1167
        _this.setTransitioning(false);                                                                                 // 1168
                                                                                                                       // 1169
        $$$1(_this._element).trigger(Event.SHOWN);                                                                     // 1170
      };                                                                                                               // 1171
                                                                                                                       // 1172
      if (!Util.supportsTransitionEnd()) {                                                                             // 1173
        complete();                                                                                                    // 1174
        return;                                                                                                        // 1175
      }                                                                                                                // 1176
                                                                                                                       // 1177
      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);                                      // 1178
      var scrollSize = "scroll" + capitalizedDimension;                                                                // 1179
      $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);                // 1180
      this._element.style[dimension] = this._element[scrollSize] + "px";                                               // 1181
    };                                                                                                                 // 1182
                                                                                                                       // 1183
    _proto.hide = function hide() {                                                                                    // 1184
      var _this2 = this;                                                                                               // 1185
                                                                                                                       // 1186
      if (this._isTransitioning || !$$$1(this._element).hasClass(ClassName.SHOW)) {                                    // 1187
        return;                                                                                                        // 1188
      }                                                                                                                // 1189
                                                                                                                       // 1190
      var startEvent = $$$1.Event(Event.HIDE);                                                                         // 1191
      $$$1(this._element).trigger(startEvent);                                                                         // 1192
                                                                                                                       // 1193
      if (startEvent.isDefaultPrevented()) {                                                                           // 1194
        return;                                                                                                        // 1195
      }                                                                                                                // 1196
                                                                                                                       // 1197
      var dimension = this._getDimension();                                                                            // 1198
                                                                                                                       // 1199
      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";                        // 1200
      Util.reflow(this._element);                                                                                      // 1201
      $$$1(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);  // 1202
                                                                                                                       // 1203
      if (this._triggerArray.length) {                                                                                 // 1204
        for (var i = 0; i < this._triggerArray.length; i++) {                                                          // 1205
          var trigger = this._triggerArray[i];                                                                         // 1206
          var selector = Util.getSelectorFromElement(trigger);                                                         // 1207
                                                                                                                       // 1208
          if (selector !== null) {                                                                                     // 1209
            var $elem = $$$1(selector);                                                                                // 1210
                                                                                                                       // 1211
            if (!$elem.hasClass(ClassName.SHOW)) {                                                                     // 1212
              $$$1(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);                                // 1213
            }                                                                                                          // 1214
          }                                                                                                            // 1215
        }                                                                                                              // 1216
      }                                                                                                                // 1217
                                                                                                                       // 1218
      this.setTransitioning(true);                                                                                     // 1219
                                                                                                                       // 1220
      var complete = function complete() {                                                                             // 1221
        _this2.setTransitioning(false);                                                                                // 1222
                                                                                                                       // 1223
        $$$1(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);    // 1224
      };                                                                                                               // 1225
                                                                                                                       // 1226
      this._element.style[dimension] = '';                                                                             // 1227
                                                                                                                       // 1228
      if (!Util.supportsTransitionEnd()) {                                                                             // 1229
        complete();                                                                                                    // 1230
        return;                                                                                                        // 1231
      }                                                                                                                // 1232
                                                                                                                       // 1233
      $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);                // 1234
    };                                                                                                                 // 1235
                                                                                                                       // 1236
    _proto.setTransitioning = function setTransitioning(isTransitioning) {                                             // 1237
      this._isTransitioning = isTransitioning;                                                                         // 1238
    };                                                                                                                 // 1239
                                                                                                                       // 1240
    _proto.dispose = function dispose() {                                                                              // 1241
      $$$1.removeData(this._element, DATA_KEY);                                                                        // 1242
      this._config = null;                                                                                             // 1243
      this._parent = null;                                                                                             // 1244
      this._element = null;                                                                                            // 1245
      this._triggerArray = null;                                                                                       // 1246
      this._isTransitioning = null;                                                                                    // 1247
    }; // private                                                                                                      // 1248
                                                                                                                       // 1249
                                                                                                                       // 1250
    _proto._getConfig = function _getConfig(config) {                                                                  // 1251
      config = $$$1.extend({}, Default, config);                                                                       // 1252
      config.toggle = Boolean(config.toggle); // coerce string values                                                  // 1253
                                                                                                                       // 1254
      Util.typeCheckConfig(NAME, config, DefaultType);                                                                 // 1255
      return config;                                                                                                   // 1256
    };                                                                                                                 // 1257
                                                                                                                       // 1258
    _proto._getDimension = function _getDimension() {                                                                  // 1259
      var hasWidth = $$$1(this._element).hasClass(Dimension.WIDTH);                                                    // 1260
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;                                                            // 1261
    };                                                                                                                 // 1262
                                                                                                                       // 1263
    _proto._getParent = function _getParent() {                                                                        // 1264
      var _this3 = this;                                                                                               // 1265
                                                                                                                       // 1266
      var parent = null;                                                                                               // 1267
                                                                                                                       // 1268
      if (Util.isElement(this._config.parent)) {                                                                       // 1269
        parent = this._config.parent; // it's a jQuery object                                                          // 1270
                                                                                                                       // 1271
        if (typeof this._config.parent.jquery !== 'undefined') {                                                       // 1272
          parent = this._config.parent[0];                                                                             // 1273
        }                                                                                                              // 1274
      } else {                                                                                                         // 1275
        parent = $$$1(this._config.parent)[0];                                                                         // 1276
      }                                                                                                                // 1277
                                                                                                                       // 1278
      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";                        // 1279
      $$$1(parent).find(selector).each(function (i, element) {                                                         // 1280
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);                          // 1281
      });                                                                                                              // 1282
      return parent;                                                                                                   // 1283
    };                                                                                                                 // 1284
                                                                                                                       // 1285
    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {                     // 1286
      if (element) {                                                                                                   // 1287
        var isOpen = $$$1(element).hasClass(ClassName.SHOW);                                                           // 1288
                                                                                                                       // 1289
        if (triggerArray.length) {                                                                                     // 1290
          $$$1(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);                  // 1291
        }                                                                                                              // 1292
      }                                                                                                                // 1293
    }; // static                                                                                                       // 1294
                                                                                                                       // 1295
                                                                                                                       // 1296
    Collapse._getTargetFromElement = function _getTargetFromElement(element) {                                         // 1297
      var selector = Util.getSelectorFromElement(element);                                                             // 1298
      return selector ? $$$1(selector)[0] : null;                                                                      // 1299
    };                                                                                                                 // 1300
                                                                                                                       // 1301
    Collapse._jQueryInterface = function _jQueryInterface(config) {                                                    // 1302
      return this.each(function () {                                                                                   // 1303
        var $this = $$$1(this);                                                                                        // 1304
        var data = $this.data(DATA_KEY);                                                                               // 1305
                                                                                                                       // 1306
        var _config = $$$1.extend({}, Default, $this.data(), typeof config === 'object' && config);                    // 1307
                                                                                                                       // 1308
        if (!data && _config.toggle && /show|hide/.test(config)) {                                                     // 1309
          _config.toggle = false;                                                                                      // 1310
        }                                                                                                              // 1311
                                                                                                                       // 1312
        if (!data) {                                                                                                   // 1313
          data = new Collapse(this, _config);                                                                          // 1314
          $this.data(DATA_KEY, data);                                                                                  // 1315
        }                                                                                                              // 1316
                                                                                                                       // 1317
        if (typeof config === 'string') {                                                                              // 1318
          if (typeof data[config] === 'undefined') {                                                                   // 1319
            throw new Error("No method named \"" + config + "\"");                                                     // 1320
          }                                                                                                            // 1321
                                                                                                                       // 1322
          data[config]();                                                                                              // 1323
        }                                                                                                              // 1324
      });                                                                                                              // 1325
    };                                                                                                                 // 1326
                                                                                                                       // 1327
    createClass(Collapse, null, [{                                                                                     // 1328
      key: "VERSION",                                                                                                  // 1329
      get: function get() {                                                                                            // 1330
        return VERSION;                                                                                                // 1331
      }                                                                                                                // 1332
    }, {                                                                                                               // 1333
      key: "Default",                                                                                                  // 1334
      get: function get() {                                                                                            // 1335
        return Default;                                                                                                // 1336
      }                                                                                                                // 1337
    }]);                                                                                                               // 1338
    return Collapse;                                                                                                   // 1339
  }();                                                                                                                 // 1340
  /**                                                                                                                  // 1341
   * ------------------------------------------------------------------------                                          // 1342
   * Data Api implementation                                                                                           // 1343
   * ------------------------------------------------------------------------                                          // 1344
   */                                                                                                                  // 1345
                                                                                                                       // 1346
                                                                                                                       // 1347
  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {                                     // 1348
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element                  // 1349
    if (event.currentTarget.tagName === 'A') {                                                                         // 1350
      event.preventDefault();                                                                                          // 1351
    }                                                                                                                  // 1352
                                                                                                                       // 1353
    var $trigger = $$$1(this);                                                                                         // 1354
    var selector = Util.getSelectorFromElement(this);                                                                  // 1355
    $$$1(selector).each(function () {                                                                                  // 1356
      var $target = $$$1(this);                                                                                        // 1357
      var data = $target.data(DATA_KEY);                                                                               // 1358
      var config = data ? 'toggle' : $trigger.data();                                                                  // 1359
                                                                                                                       // 1360
      Collapse._jQueryInterface.call($target, config);                                                                 // 1361
    });                                                                                                                // 1362
  });                                                                                                                  // 1363
  /**                                                                                                                  // 1364
   * ------------------------------------------------------------------------                                          // 1365
   * jQuery                                                                                                            // 1366
   * ------------------------------------------------------------------------                                          // 1367
   */                                                                                                                  // 1368
                                                                                                                       // 1369
  $$$1.fn[NAME] = Collapse._jQueryInterface;                                                                           // 1370
  $$$1.fn[NAME].Constructor = Collapse;                                                                                // 1371
                                                                                                                       // 1372
  $$$1.fn[NAME].noConflict = function () {                                                                             // 1373
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;                                                                                // 1374
    return Collapse._jQueryInterface;                                                                                  // 1375
  };                                                                                                                   // 1376
                                                                                                                       // 1377
  return Collapse;                                                                                                     // 1378
}($);                                                                                                                  // 1379
                                                                                                                       // 1380
/**                                                                                                                    // 1381
 * --------------------------------------------------------------------------                                          // 1382
 * Bootstrap (v4.0.0-beta.2): dropdown.js                                                                              // 1383
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 1384
 * --------------------------------------------------------------------------                                          // 1385
 */                                                                                                                    // 1386
                                                                                                                       // 1387
var Dropdown = function ($$$1) {                                                                                       // 1388
  /**                                                                                                                  // 1389
   * ------------------------------------------------------------------------                                          // 1390
   * Constants                                                                                                         // 1391
   * ------------------------------------------------------------------------                                          // 1392
   */                                                                                                                  // 1393
  var NAME = 'dropdown';                                                                                               // 1394
  var VERSION = '4.0.0-beta.2';                                                                                        // 1395
  var DATA_KEY = 'bs.dropdown';                                                                                        // 1396
  var EVENT_KEY = "." + DATA_KEY;                                                                                      // 1397
  var DATA_API_KEY = '.data-api';                                                                                      // 1398
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];                                                                              // 1399
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key                                           // 1400
                                                                                                                       // 1401
  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key                                                   // 1402
                                                                                                                       // 1403
  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key                                                        // 1404
                                                                                                                       // 1405
  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key                                             // 1406
                                                                                                                       // 1407
  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key                                         // 1408
                                                                                                                       // 1409
  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)     // 1410
                                                                                                                       // 1411
  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);                 // 1412
  var Event = {                                                                                                        // 1413
    HIDE: "hide" + EVENT_KEY,                                                                                          // 1414
    HIDDEN: "hidden" + EVENT_KEY,                                                                                      // 1415
    SHOW: "show" + EVENT_KEY,                                                                                          // 1416
    SHOWN: "shown" + EVENT_KEY,                                                                                        // 1417
    CLICK: "click" + EVENT_KEY,                                                                                        // 1418
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,                                                                // 1419
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,                                                            // 1420
    KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY                                                                 // 1421
  };                                                                                                                   // 1422
  var ClassName = {                                                                                                    // 1423
    DISABLED: 'disabled',                                                                                              // 1424
    SHOW: 'show',                                                                                                      // 1425
    DROPUP: 'dropup',                                                                                                  // 1426
    DROPRIGHT: 'dropright',                                                                                            // 1427
    DROPLEFT: 'dropleft',                                                                                              // 1428
    MENURIGHT: 'dropdown-menu-right',                                                                                  // 1429
    MENULEFT: 'dropdown-menu-left'                                                                                     // 1430
  };                                                                                                                   // 1431
  var Selector = {                                                                                                     // 1432
    DATA_TOGGLE: '[data-toggle="dropdown"]',                                                                           // 1433
    FORM_CHILD: '.dropdown form',                                                                                      // 1434
    MENU: '.dropdown-menu',                                                                                            // 1435
    NAVBAR_NAV: '.navbar-nav',                                                                                         // 1436
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'                                                      // 1437
  };                                                                                                                   // 1438
  var AttachmentMap = {                                                                                                // 1439
    TOP: 'top-start',                                                                                                  // 1440
    TOPEND: 'top-end',                                                                                                 // 1441
    BOTTOM: 'bottom-start',                                                                                            // 1442
    BOTTOMEND: 'bottom-end',                                                                                           // 1443
    RIGHT: 'right-start',                                                                                              // 1444
    RIGHTEND: 'right-end',                                                                                             // 1445
    LEFT: 'left-start',                                                                                                // 1446
    LEFTEND: 'left-end'                                                                                                // 1447
  };                                                                                                                   // 1448
  var Default = {                                                                                                      // 1449
    offset: 0,                                                                                                         // 1450
    flip: true                                                                                                         // 1451
  };                                                                                                                   // 1452
  var DefaultType = {                                                                                                  // 1453
    offset: '(number|string|function)',                                                                                // 1454
    flip: 'boolean'                                                                                                    // 1455
    /**                                                                                                                // 1456
     * ------------------------------------------------------------------------                                        // 1457
     * Class Definition                                                                                                // 1458
     * ------------------------------------------------------------------------                                        // 1459
     */                                                                                                                // 1460
                                                                                                                       // 1461
  };                                                                                                                   // 1462
                                                                                                                       // 1463
  var Dropdown =                                                                                                       // 1464
  /*#__PURE__*/                                                                                                        // 1465
  function () {                                                                                                        // 1466
    function Dropdown(element, config) {                                                                               // 1467
      this._element = element;                                                                                         // 1468
      this._popper = null;                                                                                             // 1469
      this._config = this._getConfig(config);                                                                          // 1470
      this._menu = this._getMenuElement();                                                                             // 1471
      this._inNavbar = this._detectNavbar();                                                                           // 1472
                                                                                                                       // 1473
      this._addEventListeners();                                                                                       // 1474
    } // getters                                                                                                       // 1475
                                                                                                                       // 1476
                                                                                                                       // 1477
    var _proto = Dropdown.prototype;                                                                                   // 1478
                                                                                                                       // 1479
    // public                                                                                                          // 1480
    _proto.toggle = function toggle() {                                                                                // 1481
      if (this._element.disabled || $$$1(this._element).hasClass(ClassName.DISABLED)) {                                // 1482
        return;                                                                                                        // 1483
      }                                                                                                                // 1484
                                                                                                                       // 1485
      var parent = Dropdown._getParentFromElement(this._element);                                                      // 1486
                                                                                                                       // 1487
      var isActive = $$$1(this._menu).hasClass(ClassName.SHOW);                                                        // 1488
                                                                                                                       // 1489
      Dropdown._clearMenus();                                                                                          // 1490
                                                                                                                       // 1491
      if (isActive) {                                                                                                  // 1492
        return;                                                                                                        // 1493
      }                                                                                                                // 1494
                                                                                                                       // 1495
      var relatedTarget = {                                                                                            // 1496
        relatedTarget: this._element                                                                                   // 1497
      };                                                                                                               // 1498
      var showEvent = $$$1.Event(Event.SHOW, relatedTarget);                                                           // 1499
      $$$1(parent).trigger(showEvent);                                                                                 // 1500
                                                                                                                       // 1501
      if (showEvent.isDefaultPrevented()) {                                                                            // 1502
        return;                                                                                                        // 1503
      } // Disable totally Popper.js for Dropdown in Navbar                                                            // 1504
                                                                                                                       // 1505
                                                                                                                       // 1506
      if (!this._inNavbar) {                                                                                           // 1507
        /**                                                                                                            // 1508
         * Check for Popper dependency                                                                                 // 1509
         * Popper - https://popper.js.org                                                                              // 1510
         */                                                                                                            // 1511
        if (typeof Popper === 'undefined') {                                                                           // 1512
          throw new Error('Bootstrap dropdown require Popper.js (https://popper.js.org)');                             // 1513
        }                                                                                                              // 1514
                                                                                                                       // 1515
        var element = this._element; // for dropup with alignment we use the parent as popper container                // 1516
                                                                                                                       // 1517
        if ($$$1(parent).hasClass(ClassName.DROPUP)) {                                                                 // 1518
          if ($$$1(this._menu).hasClass(ClassName.MENULEFT) || $$$1(this._menu).hasClass(ClassName.MENURIGHT)) {       // 1519
            element = parent;                                                                                          // 1520
          }                                                                                                            // 1521
        }                                                                                                              // 1522
                                                                                                                       // 1523
        this._popper = new Popper(element, this._menu, this._getPopperConfig());                                       // 1524
      } // if this is a touch-enabled device we add extra                                                              // 1525
      // empty mouseover listeners to the body's immediate children;                                                   // 1526
      // only needed because of broken event delegation on iOS                                                         // 1527
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html                                         // 1528
                                                                                                                       // 1529
                                                                                                                       // 1530
      if ('ontouchstart' in document.documentElement && !$$$1(parent).closest(Selector.NAVBAR_NAV).length) {           // 1531
        $$$1('body').children().on('mouseover', null, $$$1.noop);                                                      // 1532
      }                                                                                                                // 1533
                                                                                                                       // 1534
      this._element.focus();                                                                                           // 1535
                                                                                                                       // 1536
      this._element.setAttribute('aria-expanded', true);                                                               // 1537
                                                                                                                       // 1538
      $$$1(this._menu).toggleClass(ClassName.SHOW);                                                                    // 1539
      $$$1(parent).toggleClass(ClassName.SHOW).trigger($$$1.Event(Event.SHOWN, relatedTarget));                        // 1540
    };                                                                                                                 // 1541
                                                                                                                       // 1542
    _proto.dispose = function dispose() {                                                                              // 1543
      $$$1.removeData(this._element, DATA_KEY);                                                                        // 1544
      $$$1(this._element).off(EVENT_KEY);                                                                              // 1545
      this._element = null;                                                                                            // 1546
      this._menu = null;                                                                                               // 1547
                                                                                                                       // 1548
      if (this._popper !== null) {                                                                                     // 1549
        this._popper.destroy();                                                                                        // 1550
                                                                                                                       // 1551
        this._popper = null;                                                                                           // 1552
      }                                                                                                                // 1553
    };                                                                                                                 // 1554
                                                                                                                       // 1555
    _proto.update = function update() {                                                                                // 1556
      this._inNavbar = this._detectNavbar();                                                                           // 1557
                                                                                                                       // 1558
      if (this._popper !== null) {                                                                                     // 1559
        this._popper.scheduleUpdate();                                                                                 // 1560
      }                                                                                                                // 1561
    }; // private                                                                                                      // 1562
                                                                                                                       // 1563
                                                                                                                       // 1564
    _proto._addEventListeners = function _addEventListeners() {                                                        // 1565
      var _this = this;                                                                                                // 1566
                                                                                                                       // 1567
      $$$1(this._element).on(Event.CLICK, function (event) {                                                           // 1568
        event.preventDefault();                                                                                        // 1569
        event.stopPropagation();                                                                                       // 1570
                                                                                                                       // 1571
        _this.toggle();                                                                                                // 1572
      });                                                                                                              // 1573
    };                                                                                                                 // 1574
                                                                                                                       // 1575
    _proto._getConfig = function _getConfig(config) {                                                                  // 1576
      config = $$$1.extend({}, this.constructor.Default, $$$1(this._element).data(), config);                          // 1577
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);                                                // 1578
      return config;                                                                                                   // 1579
    };                                                                                                                 // 1580
                                                                                                                       // 1581
    _proto._getMenuElement = function _getMenuElement() {                                                              // 1582
      if (!this._menu) {                                                                                               // 1583
        var parent = Dropdown._getParentFromElement(this._element);                                                    // 1584
                                                                                                                       // 1585
        this._menu = $$$1(parent).find(Selector.MENU)[0];                                                              // 1586
      }                                                                                                                // 1587
                                                                                                                       // 1588
      return this._menu;                                                                                               // 1589
    };                                                                                                                 // 1590
                                                                                                                       // 1591
    _proto._getPlacement = function _getPlacement() {                                                                  // 1592
      var $parentDropdown = $$$1(this._element).parent();                                                              // 1593
      var placement = AttachmentMap.BOTTOM; // Handle dropup                                                           // 1594
                                                                                                                       // 1595
      if ($parentDropdown.hasClass(ClassName.DROPUP)) {                                                                // 1596
        placement = AttachmentMap.TOP;                                                                                 // 1597
                                                                                                                       // 1598
        if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {                                                          // 1599
          placement = AttachmentMap.TOPEND;                                                                            // 1600
        }                                                                                                              // 1601
      } else if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {                                                      // 1602
        placement = AttachmentMap.RIGHT;                                                                               // 1603
      } else if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {                                                       // 1604
        placement = AttachmentMap.LEFT;                                                                                // 1605
      } else if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {                                                     // 1606
        placement = AttachmentMap.BOTTOMEND;                                                                           // 1607
      }                                                                                                                // 1608
                                                                                                                       // 1609
      return placement;                                                                                                // 1610
    };                                                                                                                 // 1611
                                                                                                                       // 1612
    _proto._detectNavbar = function _detectNavbar() {                                                                  // 1613
      return $$$1(this._element).closest('.navbar').length > 0;                                                        // 1614
    };                                                                                                                 // 1615
                                                                                                                       // 1616
    _proto._getPopperConfig = function _getPopperConfig() {                                                            // 1617
      var _this2 = this;                                                                                               // 1618
                                                                                                                       // 1619
      var offsetConf = {};                                                                                             // 1620
                                                                                                                       // 1621
      if (typeof this._config.offset === 'function') {                                                                 // 1622
        offsetConf.fn = function (data) {                                                                              // 1623
          data.offsets = $$$1.extend({}, data.offsets, _this2._config.offset(data.offsets) || {});                     // 1624
          return data;                                                                                                 // 1625
        };                                                                                                             // 1626
      } else {                                                                                                         // 1627
        offsetConf.offset = this._config.offset;                                                                       // 1628
      }                                                                                                                // 1629
                                                                                                                       // 1630
      var popperConfig = {                                                                                             // 1631
        placement: this._getPlacement(),                                                                               // 1632
        modifiers: {                                                                                                   // 1633
          offset: offsetConf,                                                                                          // 1634
          flip: {                                                                                                      // 1635
            enabled: this._config.flip                                                                                 // 1636
          }                                                                                                            // 1637
        }                                                                                                              // 1638
      };                                                                                                               // 1639
      return popperConfig;                                                                                             // 1640
    }; // static                                                                                                       // 1641
                                                                                                                       // 1642
                                                                                                                       // 1643
    Dropdown._jQueryInterface = function _jQueryInterface(config) {                                                    // 1644
      return this.each(function () {                                                                                   // 1645
        var data = $$$1(this).data(DATA_KEY);                                                                          // 1646
                                                                                                                       // 1647
        var _config = typeof config === 'object' ? config : null;                                                      // 1648
                                                                                                                       // 1649
        if (!data) {                                                                                                   // 1650
          data = new Dropdown(this, _config);                                                                          // 1651
          $$$1(this).data(DATA_KEY, data);                                                                             // 1652
        }                                                                                                              // 1653
                                                                                                                       // 1654
        if (typeof config === 'string') {                                                                              // 1655
          if (typeof data[config] === 'undefined') {                                                                   // 1656
            throw new Error("No method named \"" + config + "\"");                                                     // 1657
          }                                                                                                            // 1658
                                                                                                                       // 1659
          data[config]();                                                                                              // 1660
        }                                                                                                              // 1661
      });                                                                                                              // 1662
    };                                                                                                                 // 1663
                                                                                                                       // 1664
    Dropdown._clearMenus = function _clearMenus(event) {                                                               // 1665
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;                                                                                                        // 1667
      }                                                                                                                // 1668
                                                                                                                       // 1669
      var toggles = $$$1.makeArray($$$1(Selector.DATA_TOGGLE));                                                        // 1670
                                                                                                                       // 1671
      for (var i = 0; i < toggles.length; i++) {                                                                       // 1672
        var parent = Dropdown._getParentFromElement(toggles[i]);                                                       // 1673
                                                                                                                       // 1674
        var context = $$$1(toggles[i]).data(DATA_KEY);                                                                 // 1675
        var relatedTarget = {                                                                                          // 1676
          relatedTarget: toggles[i]                                                                                    // 1677
        };                                                                                                             // 1678
                                                                                                                       // 1679
        if (!context) {                                                                                                // 1680
          continue;                                                                                                    // 1681
        }                                                                                                              // 1682
                                                                                                                       // 1683
        var dropdownMenu = context._menu;                                                                              // 1684
                                                                                                                       // 1685
        if (!$$$1(parent).hasClass(ClassName.SHOW)) {                                                                  // 1686
          continue;                                                                                                    // 1687
        }                                                                                                              // 1688
                                                                                                                       // 1689
        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $$$1.contains(parent, event.target)) {
          continue;                                                                                                    // 1691
        }                                                                                                              // 1692
                                                                                                                       // 1693
        var hideEvent = $$$1.Event(Event.HIDE, relatedTarget);                                                         // 1694
        $$$1(parent).trigger(hideEvent);                                                                               // 1695
                                                                                                                       // 1696
        if (hideEvent.isDefaultPrevented()) {                                                                          // 1697
          continue;                                                                                                    // 1698
        } // if this is a touch-enabled device we remove the extra                                                     // 1699
        // empty mouseover listeners we added for iOS support                                                          // 1700
                                                                                                                       // 1701
                                                                                                                       // 1702
        if ('ontouchstart' in document.documentElement) {                                                              // 1703
          $$$1('body').children().off('mouseover', null, $$$1.noop);                                                   // 1704
        }                                                                                                              // 1705
                                                                                                                       // 1706
        toggles[i].setAttribute('aria-expanded', 'false');                                                             // 1707
        $$$1(dropdownMenu).removeClass(ClassName.SHOW);                                                                // 1708
        $$$1(parent).removeClass(ClassName.SHOW).trigger($$$1.Event(Event.HIDDEN, relatedTarget));                     // 1709
      }                                                                                                                // 1710
    };                                                                                                                 // 1711
                                                                                                                       // 1712
    Dropdown._getParentFromElement = function _getParentFromElement(element) {                                         // 1713
      var parent;                                                                                                      // 1714
      var selector = Util.getSelectorFromElement(element);                                                             // 1715
                                                                                                                       // 1716
      if (selector) {                                                                                                  // 1717
        parent = $$$1(selector)[0];                                                                                    // 1718
      }                                                                                                                // 1719
                                                                                                                       // 1720
      return parent || element.parentNode;                                                                             // 1721
    };                                                                                                                 // 1722
                                                                                                                       // 1723
    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {                                         // 1724
      // If not input/textarea:                                                                                        // 1725
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command                                                  // 1726
      // If input/textarea:                                                                                            // 1727
      //  - If space key => not a dropdown command                                                                     // 1728
      //  - If key is other than escape                                                                                // 1729
      //    - If key is not up or down => not a dropdown command                                                       // 1730
      //    - If trigger inside the menu => not a dropdown command                                                     // 1731
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $$$1(event.target).closest(Selector.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;                                                                                                        // 1733
      }                                                                                                                // 1734
                                                                                                                       // 1735
      event.preventDefault();                                                                                          // 1736
      event.stopPropagation();                                                                                         // 1737
                                                                                                                       // 1738
      if (this.disabled || $$$1(this).hasClass(ClassName.DISABLED)) {                                                  // 1739
        return;                                                                                                        // 1740
      }                                                                                                                // 1741
                                                                                                                       // 1742
      var parent = Dropdown._getParentFromElement(this);                                                               // 1743
                                                                                                                       // 1744
      var isActive = $$$1(parent).hasClass(ClassName.SHOW);                                                            // 1745
                                                                                                                       // 1746
      if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {                                                                          // 1748
          var toggle = $$$1(parent).find(Selector.DATA_TOGGLE)[0];                                                     // 1749
          $$$1(toggle).trigger('focus');                                                                               // 1750
        }                                                                                                              // 1751
                                                                                                                       // 1752
        $$$1(this).trigger('click');                                                                                   // 1753
        return;                                                                                                        // 1754
      }                                                                                                                // 1755
                                                                                                                       // 1756
      var items = $$$1(parent).find(Selector.VISIBLE_ITEMS).get();                                                     // 1757
                                                                                                                       // 1758
      if (!items.length) {                                                                                             // 1759
        return;                                                                                                        // 1760
      }                                                                                                                // 1761
                                                                                                                       // 1762
      var index = items.indexOf(event.target);                                                                         // 1763
                                                                                                                       // 1764
      if (event.which === ARROW_UP_KEYCODE && index > 0) {                                                             // 1765
        // up                                                                                                          // 1766
        index--;                                                                                                       // 1767
      }                                                                                                                // 1768
                                                                                                                       // 1769
      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {                                            // 1770
        // down                                                                                                        // 1771
        index++;                                                                                                       // 1772
      }                                                                                                                // 1773
                                                                                                                       // 1774
      if (index < 0) {                                                                                                 // 1775
        index = 0;                                                                                                     // 1776
      }                                                                                                                // 1777
                                                                                                                       // 1778
      items[index].focus();                                                                                            // 1779
    };                                                                                                                 // 1780
                                                                                                                       // 1781
    createClass(Dropdown, null, [{                                                                                     // 1782
      key: "VERSION",                                                                                                  // 1783
      get: function get() {                                                                                            // 1784
        return VERSION;                                                                                                // 1785
      }                                                                                                                // 1786
    }, {                                                                                                               // 1787
      key: "Default",                                                                                                  // 1788
      get: function get() {                                                                                            // 1789
        return Default;                                                                                                // 1790
      }                                                                                                                // 1791
    }, {                                                                                                               // 1792
      key: "DefaultType",                                                                                              // 1793
      get: function get() {                                                                                            // 1794
        return DefaultType;                                                                                            // 1795
      }                                                                                                                // 1796
    }]);                                                                                                               // 1797
    return Dropdown;                                                                                                   // 1798
  }();                                                                                                                 // 1799
  /**                                                                                                                  // 1800
   * ------------------------------------------------------------------------                                          // 1801
   * Data Api implementation                                                                                           // 1802
   * ------------------------------------------------------------------------                                          // 1803
   */                                                                                                                  // 1804
                                                                                                                       // 1805
                                                                                                                       // 1806
  $$$1(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();                                                                                            // 1808
    event.stopPropagation();                                                                                           // 1809
                                                                                                                       // 1810
    Dropdown._jQueryInterface.call($$$1(this), 'toggle');                                                              // 1811
  }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {                                                      // 1812
    e.stopPropagation();                                                                                               // 1813
  });                                                                                                                  // 1814
  /**                                                                                                                  // 1815
   * ------------------------------------------------------------------------                                          // 1816
   * jQuery                                                                                                            // 1817
   * ------------------------------------------------------------------------                                          // 1818
   */                                                                                                                  // 1819
                                                                                                                       // 1820
  $$$1.fn[NAME] = Dropdown._jQueryInterface;                                                                           // 1821
  $$$1.fn[NAME].Constructor = Dropdown;                                                                                // 1822
                                                                                                                       // 1823
  $$$1.fn[NAME].noConflict = function () {                                                                             // 1824
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;                                                                                // 1825
    return Dropdown._jQueryInterface;                                                                                  // 1826
  };                                                                                                                   // 1827
                                                                                                                       // 1828
  return Dropdown;                                                                                                     // 1829
}($, Popper);                                                                                                          // 1830
                                                                                                                       // 1831
/**                                                                                                                    // 1832
 * --------------------------------------------------------------------------                                          // 1833
 * Bootstrap (v4.0.0-beta.2): modal.js                                                                                 // 1834
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 1835
 * --------------------------------------------------------------------------                                          // 1836
 */                                                                                                                    // 1837
                                                                                                                       // 1838
var Modal = function ($$$1) {                                                                                          // 1839
  /**                                                                                                                  // 1840
   * ------------------------------------------------------------------------                                          // 1841
   * Constants                                                                                                         // 1842
   * ------------------------------------------------------------------------                                          // 1843
   */                                                                                                                  // 1844
  var NAME = 'modal';                                                                                                  // 1845
  var VERSION = '4.0.0-beta.2';                                                                                        // 1846
  var DATA_KEY = 'bs.modal';                                                                                           // 1847
  var EVENT_KEY = "." + DATA_KEY;                                                                                      // 1848
  var DATA_API_KEY = '.data-api';                                                                                      // 1849
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];                                                                              // 1850
  var TRANSITION_DURATION = 300;                                                                                       // 1851
  var BACKDROP_TRANSITION_DURATION = 150;                                                                              // 1852
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key                                           // 1853
                                                                                                                       // 1854
  var Default = {                                                                                                      // 1855
    backdrop: true,                                                                                                    // 1856
    keyboard: true,                                                                                                    // 1857
    focus: true,                                                                                                       // 1858
    show: true                                                                                                         // 1859
  };                                                                                                                   // 1860
  var DefaultType = {                                                                                                  // 1861
    backdrop: '(boolean|string)',                                                                                      // 1862
    keyboard: 'boolean',                                                                                               // 1863
    focus: 'boolean',                                                                                                  // 1864
    show: 'boolean'                                                                                                    // 1865
  };                                                                                                                   // 1866
  var Event = {                                                                                                        // 1867
    HIDE: "hide" + EVENT_KEY,                                                                                          // 1868
    HIDDEN: "hidden" + EVENT_KEY,                                                                                      // 1869
    SHOW: "show" + EVENT_KEY,                                                                                          // 1870
    SHOWN: "shown" + EVENT_KEY,                                                                                        // 1871
    FOCUSIN: "focusin" + EVENT_KEY,                                                                                    // 1872
    RESIZE: "resize" + EVENT_KEY,                                                                                      // 1873
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY,                                                                        // 1874
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,                                                                    // 1875
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,                                                                    // 1876
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,                                                                // 1877
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY                                                                 // 1878
  };                                                                                                                   // 1879
  var ClassName = {                                                                                                    // 1880
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',                                                                     // 1881
    BACKDROP: 'modal-backdrop',                                                                                        // 1882
    OPEN: 'modal-open',                                                                                                // 1883
    FADE: 'fade',                                                                                                      // 1884
    SHOW: 'show'                                                                                                       // 1885
  };                                                                                                                   // 1886
  var Selector = {                                                                                                     // 1887
    DIALOG: '.modal-dialog',                                                                                           // 1888
    DATA_TOGGLE: '[data-toggle="modal"]',                                                                              // 1889
    DATA_DISMISS: '[data-dismiss="modal"]',                                                                            // 1890
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',                                                // 1891
    STICKY_CONTENT: '.sticky-top',                                                                                     // 1892
    NAVBAR_TOGGLER: '.navbar-toggler'                                                                                  // 1893
    /**                                                                                                                // 1894
     * ------------------------------------------------------------------------                                        // 1895
     * Class Definition                                                                                                // 1896
     * ------------------------------------------------------------------------                                        // 1897
     */                                                                                                                // 1898
                                                                                                                       // 1899
  };                                                                                                                   // 1900
                                                                                                                       // 1901
  var Modal =                                                                                                          // 1902
  /*#__PURE__*/                                                                                                        // 1903
  function () {                                                                                                        // 1904
    function Modal(element, config) {                                                                                  // 1905
      this._config = this._getConfig(config);                                                                          // 1906
      this._element = element;                                                                                         // 1907
      this._dialog = $$$1(element).find(Selector.DIALOG)[0];                                                           // 1908
      this._backdrop = null;                                                                                           // 1909
      this._isShown = false;                                                                                           // 1910
      this._isBodyOverflowing = false;                                                                                 // 1911
      this._ignoreBackdropClick = false;                                                                               // 1912
      this._originalBodyPadding = 0;                                                                                   // 1913
      this._scrollbarWidth = 0;                                                                                        // 1914
    } // getters                                                                                                       // 1915
                                                                                                                       // 1916
                                                                                                                       // 1917
    var _proto = Modal.prototype;                                                                                      // 1918
                                                                                                                       // 1919
    // public                                                                                                          // 1920
    _proto.toggle = function toggle(relatedTarget) {                                                                   // 1921
      return this._isShown ? this.hide() : this.show(relatedTarget);                                                   // 1922
    };                                                                                                                 // 1923
                                                                                                                       // 1924
    _proto.show = function show(relatedTarget) {                                                                       // 1925
      var _this = this;                                                                                                // 1926
                                                                                                                       // 1927
      if (this._isTransitioning || this._isShown) {                                                                    // 1928
        return;                                                                                                        // 1929
      }                                                                                                                // 1930
                                                                                                                       // 1931
      if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE)) {                              // 1932
        this._isTransitioning = true;                                                                                  // 1933
      }                                                                                                                // 1934
                                                                                                                       // 1935
      var showEvent = $$$1.Event(Event.SHOW, {                                                                         // 1936
        relatedTarget: relatedTarget                                                                                   // 1937
      });                                                                                                              // 1938
      $$$1(this._element).trigger(showEvent);                                                                          // 1939
                                                                                                                       // 1940
      if (this._isShown || showEvent.isDefaultPrevented()) {                                                           // 1941
        return;                                                                                                        // 1942
      }                                                                                                                // 1943
                                                                                                                       // 1944
      this._isShown = true;                                                                                            // 1945
                                                                                                                       // 1946
      this._checkScrollbar();                                                                                          // 1947
                                                                                                                       // 1948
      this._setScrollbar();                                                                                            // 1949
                                                                                                                       // 1950
      this._adjustDialog();                                                                                            // 1951
                                                                                                                       // 1952
      $$$1(document.body).addClass(ClassName.OPEN);                                                                    // 1953
                                                                                                                       // 1954
      this._setEscapeEvent();                                                                                          // 1955
                                                                                                                       // 1956
      this._setResizeEvent();                                                                                          // 1957
                                                                                                                       // 1958
      $$$1(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {                            // 1959
        return _this.hide(event);                                                                                      // 1960
      });                                                                                                              // 1961
      $$$1(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {                                                     // 1962
        $$$1(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {                                             // 1963
          if ($$$1(event.target).is(_this._element)) {                                                                 // 1964
            _this._ignoreBackdropClick = true;                                                                         // 1965
          }                                                                                                            // 1966
        });                                                                                                            // 1967
      });                                                                                                              // 1968
                                                                                                                       // 1969
      this._showBackdrop(function () {                                                                                 // 1970
        return _this._showElement(relatedTarget);                                                                      // 1971
      });                                                                                                              // 1972
    };                                                                                                                 // 1973
                                                                                                                       // 1974
    _proto.hide = function hide(event) {                                                                               // 1975
      var _this2 = this;                                                                                               // 1976
                                                                                                                       // 1977
      if (event) {                                                                                                     // 1978
        event.preventDefault();                                                                                        // 1979
      }                                                                                                                // 1980
                                                                                                                       // 1981
      if (this._isTransitioning || !this._isShown) {                                                                   // 1982
        return;                                                                                                        // 1983
      }                                                                                                                // 1984
                                                                                                                       // 1985
      var hideEvent = $$$1.Event(Event.HIDE);                                                                          // 1986
      $$$1(this._element).trigger(hideEvent);                                                                          // 1987
                                                                                                                       // 1988
      if (!this._isShown || hideEvent.isDefaultPrevented()) {                                                          // 1989
        return;                                                                                                        // 1990
      }                                                                                                                // 1991
                                                                                                                       // 1992
      this._isShown = false;                                                                                           // 1993
      var transition = Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE);                   // 1994
                                                                                                                       // 1995
      if (transition) {                                                                                                // 1996
        this._isTransitioning = true;                                                                                  // 1997
      }                                                                                                                // 1998
                                                                                                                       // 1999
      this._setEscapeEvent();                                                                                          // 2000
                                                                                                                       // 2001
      this._setResizeEvent();                                                                                          // 2002
                                                                                                                       // 2003
      $$$1(document).off(Event.FOCUSIN);                                                                               // 2004
      $$$1(this._element).removeClass(ClassName.SHOW);                                                                 // 2005
      $$$1(this._element).off(Event.CLICK_DISMISS);                                                                    // 2006
      $$$1(this._dialog).off(Event.MOUSEDOWN_DISMISS);                                                                 // 2007
                                                                                                                       // 2008
      if (transition) {                                                                                                // 2009
        $$$1(this._element).one(Util.TRANSITION_END, function (event) {                                                // 2010
          return _this2._hideModal(event);                                                                             // 2011
        }).emulateTransitionEnd(TRANSITION_DURATION);                                                                  // 2012
      } else {                                                                                                         // 2013
        this._hideModal();                                                                                             // 2014
      }                                                                                                                // 2015
    };                                                                                                                 // 2016
                                                                                                                       // 2017
    _proto.dispose = function dispose() {                                                                              // 2018
      $$$1.removeData(this._element, DATA_KEY);                                                                        // 2019
      $$$1(window, document, this._element, this._backdrop).off(EVENT_KEY);                                            // 2020
      this._config = null;                                                                                             // 2021
      this._element = null;                                                                                            // 2022
      this._dialog = null;                                                                                             // 2023
      this._backdrop = null;                                                                                           // 2024
      this._isShown = null;                                                                                            // 2025
      this._isBodyOverflowing = null;                                                                                  // 2026
      this._ignoreBackdropClick = null;                                                                                // 2027
      this._scrollbarWidth = null;                                                                                     // 2028
    };                                                                                                                 // 2029
                                                                                                                       // 2030
    _proto.handleUpdate = function handleUpdate() {                                                                    // 2031
      this._adjustDialog();                                                                                            // 2032
    }; // private                                                                                                      // 2033
                                                                                                                       // 2034
                                                                                                                       // 2035
    _proto._getConfig = function _getConfig(config) {                                                                  // 2036
      config = $$$1.extend({}, Default, config);                                                                       // 2037
      Util.typeCheckConfig(NAME, config, DefaultType);                                                                 // 2038
      return config;                                                                                                   // 2039
    };                                                                                                                 // 2040
                                                                                                                       // 2041
    _proto._showElement = function _showElement(relatedTarget) {                                                       // 2042
      var _this3 = this;                                                                                               // 2043
                                                                                                                       // 2044
      var transition = Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE);                   // 2045
                                                                                                                       // 2046
      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {                      // 2047
        // don't move modals dom position                                                                              // 2048
        document.body.appendChild(this._element);                                                                      // 2049
      }                                                                                                                // 2050
                                                                                                                       // 2051
      this._element.style.display = 'block';                                                                           // 2052
                                                                                                                       // 2053
      this._element.removeAttribute('aria-hidden');                                                                    // 2054
                                                                                                                       // 2055
      this._element.scrollTop = 0;                                                                                     // 2056
                                                                                                                       // 2057
      if (transition) {                                                                                                // 2058
        Util.reflow(this._element);                                                                                    // 2059
      }                                                                                                                // 2060
                                                                                                                       // 2061
      $$$1(this._element).addClass(ClassName.SHOW);                                                                    // 2062
                                                                                                                       // 2063
      if (this._config.focus) {                                                                                        // 2064
        this._enforceFocus();                                                                                          // 2065
      }                                                                                                                // 2066
                                                                                                                       // 2067
      var shownEvent = $$$1.Event(Event.SHOWN, {                                                                       // 2068
        relatedTarget: relatedTarget                                                                                   // 2069
      });                                                                                                              // 2070
                                                                                                                       // 2071
      var transitionComplete = function transitionComplete() {                                                         // 2072
        if (_this3._config.focus) {                                                                                    // 2073
          _this3._element.focus();                                                                                     // 2074
        }                                                                                                              // 2075
                                                                                                                       // 2076
        _this3._isTransitioning = false;                                                                               // 2077
        $$$1(_this3._element).trigger(shownEvent);                                                                     // 2078
      };                                                                                                               // 2079
                                                                                                                       // 2080
      if (transition) {                                                                                                // 2081
        $$$1(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);     // 2082
      } else {                                                                                                         // 2083
        transitionComplete();                                                                                          // 2084
      }                                                                                                                // 2085
    };                                                                                                                 // 2086
                                                                                                                       // 2087
    _proto._enforceFocus = function _enforceFocus() {                                                                  // 2088
      var _this4 = this;                                                                                               // 2089
                                                                                                                       // 2090
      $$$1(document).off(Event.FOCUSIN) // guard against infinite focus loop                                           // 2091
      .on(Event.FOCUSIN, function (event) {                                                                            // 2092
        if (document !== event.target && _this4._element !== event.target && !$$$1(_this4._element).has(event.target).length) {
          _this4._element.focus();                                                                                     // 2094
        }                                                                                                              // 2095
      });                                                                                                              // 2096
    };                                                                                                                 // 2097
                                                                                                                       // 2098
    _proto._setEscapeEvent = function _setEscapeEvent() {                                                              // 2099
      var _this5 = this;                                                                                               // 2100
                                                                                                                       // 2101
      if (this._isShown && this._config.keyboard) {                                                                    // 2102
        $$$1(this._element).on(Event.KEYDOWN_DISMISS, function (event) {                                               // 2103
          if (event.which === ESCAPE_KEYCODE) {                                                                        // 2104
            event.preventDefault();                                                                                    // 2105
                                                                                                                       // 2106
            _this5.hide();                                                                                             // 2107
          }                                                                                                            // 2108
        });                                                                                                            // 2109
      } else if (!this._isShown) {                                                                                     // 2110
        $$$1(this._element).off(Event.KEYDOWN_DISMISS);                                                                // 2111
      }                                                                                                                // 2112
    };                                                                                                                 // 2113
                                                                                                                       // 2114
    _proto._setResizeEvent = function _setResizeEvent() {                                                              // 2115
      var _this6 = this;                                                                                               // 2116
                                                                                                                       // 2117
      if (this._isShown) {                                                                                             // 2118
        $$$1(window).on(Event.RESIZE, function (event) {                                                               // 2119
          return _this6.handleUpdate(event);                                                                           // 2120
        });                                                                                                            // 2121
      } else {                                                                                                         // 2122
        $$$1(window).off(Event.RESIZE);                                                                                // 2123
      }                                                                                                                // 2124
    };                                                                                                                 // 2125
                                                                                                                       // 2126
    _proto._hideModal = function _hideModal() {                                                                        // 2127
      var _this7 = this;                                                                                               // 2128
                                                                                                                       // 2129
      this._element.style.display = 'none';                                                                            // 2130
                                                                                                                       // 2131
      this._element.setAttribute('aria-hidden', true);                                                                 // 2132
                                                                                                                       // 2133
      this._isTransitioning = false;                                                                                   // 2134
                                                                                                                       // 2135
      this._showBackdrop(function () {                                                                                 // 2136
        $$$1(document.body).removeClass(ClassName.OPEN);                                                               // 2137
                                                                                                                       // 2138
        _this7._resetAdjustments();                                                                                    // 2139
                                                                                                                       // 2140
        _this7._resetScrollbar();                                                                                      // 2141
                                                                                                                       // 2142
        $$$1(_this7._element).trigger(Event.HIDDEN);                                                                   // 2143
      });                                                                                                              // 2144
    };                                                                                                                 // 2145
                                                                                                                       // 2146
    _proto._removeBackdrop = function _removeBackdrop() {                                                              // 2147
      if (this._backdrop) {                                                                                            // 2148
        $$$1(this._backdrop).remove();                                                                                 // 2149
        this._backdrop = null;                                                                                         // 2150
      }                                                                                                                // 2151
    };                                                                                                                 // 2152
                                                                                                                       // 2153
    _proto._showBackdrop = function _showBackdrop(callback) {                                                          // 2154
      var _this8 = this;                                                                                               // 2155
                                                                                                                       // 2156
      var animate = $$$1(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';                                // 2157
                                                                                                                       // 2158
      if (this._isShown && this._config.backdrop) {                                                                    // 2159
        var doAnimate = Util.supportsTransitionEnd() && animate;                                                       // 2160
        this._backdrop = document.createElement('div');                                                                // 2161
        this._backdrop.className = ClassName.BACKDROP;                                                                 // 2162
                                                                                                                       // 2163
        if (animate) {                                                                                                 // 2164
          $$$1(this._backdrop).addClass(animate);                                                                      // 2165
        }                                                                                                              // 2166
                                                                                                                       // 2167
        $$$1(this._backdrop).appendTo(document.body);                                                                  // 2168
        $$$1(this._element).on(Event.CLICK_DISMISS, function (event) {                                                 // 2169
          if (_this8._ignoreBackdropClick) {                                                                           // 2170
            _this8._ignoreBackdropClick = false;                                                                       // 2171
            return;                                                                                                    // 2172
          }                                                                                                            // 2173
                                                                                                                       // 2174
          if (event.target !== event.currentTarget) {                                                                  // 2175
            return;                                                                                                    // 2176
          }                                                                                                            // 2177
                                                                                                                       // 2178
          if (_this8._config.backdrop === 'static') {                                                                  // 2179
            _this8._element.focus();                                                                                   // 2180
          } else {                                                                                                     // 2181
            _this8.hide();                                                                                             // 2182
          }                                                                                                            // 2183
        });                                                                                                            // 2184
                                                                                                                       // 2185
        if (doAnimate) {                                                                                               // 2186
          Util.reflow(this._backdrop);                                                                                 // 2187
        }                                                                                                              // 2188
                                                                                                                       // 2189
        $$$1(this._backdrop).addClass(ClassName.SHOW);                                                                 // 2190
                                                                                                                       // 2191
        if (!callback) {                                                                                               // 2192
          return;                                                                                                      // 2193
        }                                                                                                              // 2194
                                                                                                                       // 2195
        if (!doAnimate) {                                                                                              // 2196
          callback();                                                                                                  // 2197
          return;                                                                                                      // 2198
        }                                                                                                              // 2199
                                                                                                                       // 2200
        $$$1(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);    // 2201
      } else if (!this._isShown && this._backdrop) {                                                                   // 2202
        $$$1(this._backdrop).removeClass(ClassName.SHOW);                                                              // 2203
                                                                                                                       // 2204
        var callbackRemove = function callbackRemove() {                                                               // 2205
          _this8._removeBackdrop();                                                                                    // 2206
                                                                                                                       // 2207
          if (callback) {                                                                                              // 2208
            callback();                                                                                                // 2209
          }                                                                                                            // 2210
        };                                                                                                             // 2211
                                                                                                                       // 2212
        if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE)) {                            // 2213
          $$$1(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else {                                                                                                       // 2215
          callbackRemove();                                                                                            // 2216
        }                                                                                                              // 2217
      } else if (callback) {                                                                                           // 2218
        callback();                                                                                                    // 2219
      }                                                                                                                // 2220
    }; // ----------------------------------------------------------------------                                       // 2221
    // the following methods are used to handle overflowing modals                                                     // 2222
    // todo (fat): these should probably be refactored out of modal.js                                                 // 2223
    // ----------------------------------------------------------------------                                          // 2224
                                                                                                                       // 2225
                                                                                                                       // 2226
    _proto._adjustDialog = function _adjustDialog() {                                                                  // 2227
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;                     // 2228
                                                                                                                       // 2229
      if (!this._isBodyOverflowing && isModalOverflowing) {                                                            // 2230
        this._element.style.paddingLeft = this._scrollbarWidth + "px";                                                 // 2231
      }                                                                                                                // 2232
                                                                                                                       // 2233
      if (this._isBodyOverflowing && !isModalOverflowing) {                                                            // 2234
        this._element.style.paddingRight = this._scrollbarWidth + "px";                                                // 2235
      }                                                                                                                // 2236
    };                                                                                                                 // 2237
                                                                                                                       // 2238
    _proto._resetAdjustments = function _resetAdjustments() {                                                          // 2239
      this._element.style.paddingLeft = '';                                                                            // 2240
      this._element.style.paddingRight = '';                                                                           // 2241
    };                                                                                                                 // 2242
                                                                                                                       // 2243
    _proto._checkScrollbar = function _checkScrollbar() {                                                              // 2244
      var rect = document.body.getBoundingClientRect();                                                                // 2245
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;                                            // 2246
      this._scrollbarWidth = this._getScrollbarWidth();                                                                // 2247
    };                                                                                                                 // 2248
                                                                                                                       // 2249
    _proto._setScrollbar = function _setScrollbar() {                                                                  // 2250
      var _this9 = this;                                                                                               // 2251
                                                                                                                       // 2252
      if (this._isBodyOverflowing) {                                                                                   // 2253
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set                                  // 2254
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set                        // 2255
        // Adjust fixed content padding                                                                                // 2256
        $$$1(Selector.FIXED_CONTENT).each(function (index, element) {                                                  // 2257
          var actualPadding = $$$1(element)[0].style.paddingRight;                                                     // 2258
          var calculatedPadding = $$$1(element).css('padding-right');                                                  // 2259
          $$$1(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
        }); // Adjust sticky content margin                                                                            // 2261
                                                                                                                       // 2262
        $$$1(Selector.STICKY_CONTENT).each(function (index, element) {                                                 // 2263
          var actualMargin = $$$1(element)[0].style.marginRight;                                                       // 2264
          var calculatedMargin = $$$1(element).css('margin-right');                                                    // 2265
          $$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
        }); // Adjust navbar-toggler margin                                                                            // 2267
                                                                                                                       // 2268
        $$$1(Selector.NAVBAR_TOGGLER).each(function (index, element) {                                                 // 2269
          var actualMargin = $$$1(element)[0].style.marginRight;                                                       // 2270
          var calculatedMargin = $$$1(element).css('margin-right');                                                    // 2271
          $$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this9._scrollbarWidth + "px");
        }); // Adjust body padding                                                                                     // 2273
                                                                                                                       // 2274
        var actualPadding = document.body.style.paddingRight;                                                          // 2275
        var calculatedPadding = $$$1('body').css('padding-right');                                                     // 2276
        $$$1('body').data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }                                                                                                                // 2278
    };                                                                                                                 // 2279
                                                                                                                       // 2280
    _proto._resetScrollbar = function _resetScrollbar() {                                                              // 2281
      // Restore fixed content padding                                                                                 // 2282
      $$$1(Selector.FIXED_CONTENT).each(function (index, element) {                                                    // 2283
        var padding = $$$1(element).data('padding-right');                                                             // 2284
                                                                                                                       // 2285
        if (typeof padding !== 'undefined') {                                                                          // 2286
          $$$1(element).css('padding-right', padding).removeData('padding-right');                                     // 2287
        }                                                                                                              // 2288
      }); // Restore sticky content and navbar-toggler margin                                                          // 2289
                                                                                                                       // 2290
      $$$1(Selector.STICKY_CONTENT + ", " + Selector.NAVBAR_TOGGLER).each(function (index, element) {                  // 2291
        var margin = $$$1(element).data('margin-right');                                                               // 2292
                                                                                                                       // 2293
        if (typeof margin !== 'undefined') {                                                                           // 2294
          $$$1(element).css('margin-right', margin).removeData('margin-right');                                        // 2295
        }                                                                                                              // 2296
      }); // Restore body padding                                                                                      // 2297
                                                                                                                       // 2298
      var padding = $$$1('body').data('padding-right');                                                                // 2299
                                                                                                                       // 2300
      if (typeof padding !== 'undefined') {                                                                            // 2301
        $$$1('body').css('padding-right', padding).removeData('padding-right');                                        // 2302
      }                                                                                                                // 2303
    };                                                                                                                 // 2304
                                                                                                                       // 2305
    _proto._getScrollbarWidth = function _getScrollbarWidth() {                                                        // 2306
      // thx d.walsh                                                                                                   // 2307
      var scrollDiv = document.createElement('div');                                                                   // 2308
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;                                                              // 2309
      document.body.appendChild(scrollDiv);                                                                            // 2310
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;                            // 2311
      document.body.removeChild(scrollDiv);                                                                            // 2312
      return scrollbarWidth;                                                                                           // 2313
    }; // static                                                                                                       // 2314
                                                                                                                       // 2315
                                                                                                                       // 2316
    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {                                        // 2317
      return this.each(function () {                                                                                   // 2318
        var data = $$$1(this).data(DATA_KEY);                                                                          // 2319
                                                                                                                       // 2320
        var _config = $$$1.extend({}, Modal.Default, $$$1(this).data(), typeof config === 'object' && config);         // 2321
                                                                                                                       // 2322
        if (!data) {                                                                                                   // 2323
          data = new Modal(this, _config);                                                                             // 2324
          $$$1(this).data(DATA_KEY, data);                                                                             // 2325
        }                                                                                                              // 2326
                                                                                                                       // 2327
        if (typeof config === 'string') {                                                                              // 2328
          if (typeof data[config] === 'undefined') {                                                                   // 2329
            throw new Error("No method named \"" + config + "\"");                                                     // 2330
          }                                                                                                            // 2331
                                                                                                                       // 2332
          data[config](relatedTarget);                                                                                 // 2333
        } else if (_config.show) {                                                                                     // 2334
          data.show(relatedTarget);                                                                                    // 2335
        }                                                                                                              // 2336
      });                                                                                                              // 2337
    };                                                                                                                 // 2338
                                                                                                                       // 2339
    createClass(Modal, null, [{                                                                                        // 2340
      key: "VERSION",                                                                                                  // 2341
      get: function get() {                                                                                            // 2342
        return VERSION;                                                                                                // 2343
      }                                                                                                                // 2344
    }, {                                                                                                               // 2345
      key: "Default",                                                                                                  // 2346
      get: function get() {                                                                                            // 2347
        return Default;                                                                                                // 2348
      }                                                                                                                // 2349
    }]);                                                                                                               // 2350
    return Modal;                                                                                                      // 2351
  }();                                                                                                                 // 2352
  /**                                                                                                                  // 2353
   * ------------------------------------------------------------------------                                          // 2354
   * Data Api implementation                                                                                           // 2355
   * ------------------------------------------------------------------------                                          // 2356
   */                                                                                                                  // 2357
                                                                                                                       // 2358
                                                                                                                       // 2359
  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {                                     // 2360
    var _this10 = this;                                                                                                // 2361
                                                                                                                       // 2362
    var target;                                                                                                        // 2363
    var selector = Util.getSelectorFromElement(this);                                                                  // 2364
                                                                                                                       // 2365
    if (selector) {                                                                                                    // 2366
      target = $$$1(selector)[0];                                                                                      // 2367
    }                                                                                                                  // 2368
                                                                                                                       // 2369
    var config = $$$1(target).data(DATA_KEY) ? 'toggle' : $$$1.extend({}, $$$1(target).data(), $$$1(this).data());     // 2370
                                                                                                                       // 2371
    if (this.tagName === 'A' || this.tagName === 'AREA') {                                                             // 2372
      event.preventDefault();                                                                                          // 2373
    }                                                                                                                  // 2374
                                                                                                                       // 2375
    var $target = $$$1(target).one(Event.SHOW, function (showEvent) {                                                  // 2376
      if (showEvent.isDefaultPrevented()) {                                                                            // 2377
        // only register focus restorer if modal will actually get shown                                               // 2378
        return;                                                                                                        // 2379
      }                                                                                                                // 2380
                                                                                                                       // 2381
      $target.one(Event.HIDDEN, function () {                                                                          // 2382
        if ($$$1(_this10).is(':visible')) {                                                                            // 2383
          _this10.focus();                                                                                             // 2384
        }                                                                                                              // 2385
      });                                                                                                              // 2386
    });                                                                                                                // 2387
                                                                                                                       // 2388
    Modal._jQueryInterface.call($$$1(target), config, this);                                                           // 2389
  });                                                                                                                  // 2390
  /**                                                                                                                  // 2391
   * ------------------------------------------------------------------------                                          // 2392
   * jQuery                                                                                                            // 2393
   * ------------------------------------------------------------------------                                          // 2394
   */                                                                                                                  // 2395
                                                                                                                       // 2396
  $$$1.fn[NAME] = Modal._jQueryInterface;                                                                              // 2397
  $$$1.fn[NAME].Constructor = Modal;                                                                                   // 2398
                                                                                                                       // 2399
  $$$1.fn[NAME].noConflict = function () {                                                                             // 2400
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;                                                                                // 2401
    return Modal._jQueryInterface;                                                                                     // 2402
  };                                                                                                                   // 2403
                                                                                                                       // 2404
  return Modal;                                                                                                        // 2405
}($);                                                                                                                  // 2406
                                                                                                                       // 2407
/**                                                                                                                    // 2408
 * --------------------------------------------------------------------------                                          // 2409
 * Bootstrap (v4.0.0-beta.2): tooltip.js                                                                               // 2410
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 2411
 * --------------------------------------------------------------------------                                          // 2412
 */                                                                                                                    // 2413
                                                                                                                       // 2414
var Tooltip = function ($$$1) {                                                                                        // 2415
  /**                                                                                                                  // 2416
   * ------------------------------------------------------------------------                                          // 2417
   * Constants                                                                                                         // 2418
   * ------------------------------------------------------------------------                                          // 2419
   */                                                                                                                  // 2420
  var NAME = 'tooltip';                                                                                                // 2421
  var VERSION = '4.0.0-beta.2';                                                                                        // 2422
  var DATA_KEY = 'bs.tooltip';                                                                                         // 2423
  var EVENT_KEY = "." + DATA_KEY;                                                                                      // 2424
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];                                                                              // 2425
  var TRANSITION_DURATION = 150;                                                                                       // 2426
  var CLASS_PREFIX = 'bs-tooltip';                                                                                     // 2427
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');                                         // 2428
  var DefaultType = {                                                                                                  // 2429
    animation: 'boolean',                                                                                              // 2430
    template: 'string',                                                                                                // 2431
    title: '(string|element|function)',                                                                                // 2432
    trigger: 'string',                                                                                                 // 2433
    delay: '(number|object)',                                                                                          // 2434
    html: 'boolean',                                                                                                   // 2435
    selector: '(string|boolean)',                                                                                      // 2436
    placement: '(string|function)',                                                                                    // 2437
    offset: '(number|string)',                                                                                         // 2438
    container: '(string|element|boolean)',                                                                             // 2439
    fallbackPlacement: '(string|array)'                                                                                // 2440
  };                                                                                                                   // 2441
  var AttachmentMap = {                                                                                                // 2442
    AUTO: 'auto',                                                                                                      // 2443
    TOP: 'top',                                                                                                        // 2444
    RIGHT: 'right',                                                                                                    // 2445
    BOTTOM: 'bottom',                                                                                                  // 2446
    LEFT: 'left'                                                                                                       // 2447
  };                                                                                                                   // 2448
  var Default = {                                                                                                      // 2449
    animation: true,                                                                                                   // 2450
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',                                                                                            // 2452
    title: '',                                                                                                         // 2453
    delay: 0,                                                                                                          // 2454
    html: false,                                                                                                       // 2455
    selector: false,                                                                                                   // 2456
    placement: 'top',                                                                                                  // 2457
    offset: 0,                                                                                                         // 2458
    container: false,                                                                                                  // 2459
    fallbackPlacement: 'flip'                                                                                          // 2460
  };                                                                                                                   // 2461
  var HoverState = {                                                                                                   // 2462
    SHOW: 'show',                                                                                                      // 2463
    OUT: 'out'                                                                                                         // 2464
  };                                                                                                                   // 2465
  var Event = {                                                                                                        // 2466
    HIDE: "hide" + EVENT_KEY,                                                                                          // 2467
    HIDDEN: "hidden" + EVENT_KEY,                                                                                      // 2468
    SHOW: "show" + EVENT_KEY,                                                                                          // 2469
    SHOWN: "shown" + EVENT_KEY,                                                                                        // 2470
    INSERTED: "inserted" + EVENT_KEY,                                                                                  // 2471
    CLICK: "click" + EVENT_KEY,                                                                                        // 2472
    FOCUSIN: "focusin" + EVENT_KEY,                                                                                    // 2473
    FOCUSOUT: "focusout" + EVENT_KEY,                                                                                  // 2474
    MOUSEENTER: "mouseenter" + EVENT_KEY,                                                                              // 2475
    MOUSELEAVE: "mouseleave" + EVENT_KEY                                                                               // 2476
  };                                                                                                                   // 2477
  var ClassName = {                                                                                                    // 2478
    FADE: 'fade',                                                                                                      // 2479
    SHOW: 'show'                                                                                                       // 2480
  };                                                                                                                   // 2481
  var Selector = {                                                                                                     // 2482
    TOOLTIP: '.tooltip',                                                                                               // 2483
    TOOLTIP_INNER: '.tooltip-inner',                                                                                   // 2484
    ARROW: '.arrow'                                                                                                    // 2485
  };                                                                                                                   // 2486
  var Trigger = {                                                                                                      // 2487
    HOVER: 'hover',                                                                                                    // 2488
    FOCUS: 'focus',                                                                                                    // 2489
    CLICK: 'click',                                                                                                    // 2490
    MANUAL: 'manual'                                                                                                   // 2491
    /**                                                                                                                // 2492
     * ------------------------------------------------------------------------                                        // 2493
     * Class Definition                                                                                                // 2494
     * ------------------------------------------------------------------------                                        // 2495
     */                                                                                                                // 2496
                                                                                                                       // 2497
  };                                                                                                                   // 2498
                                                                                                                       // 2499
  var Tooltip =                                                                                                        // 2500
  /*#__PURE__*/                                                                                                        // 2501
  function () {                                                                                                        // 2502
    function Tooltip(element, config) {                                                                                // 2503
      /**                                                                                                              // 2504
       * Check for Popper dependency                                                                                   // 2505
       * Popper - https://popper.js.org                                                                                // 2506
       */                                                                                                              // 2507
      if (typeof Popper === 'undefined') {                                                                             // 2508
        throw new Error('Bootstrap tooltips require Popper.js (https://popper.js.org)');                               // 2509
      } // private                                                                                                     // 2510
                                                                                                                       // 2511
                                                                                                                       // 2512
      this._isEnabled = true;                                                                                          // 2513
      this._timeout = 0;                                                                                               // 2514
      this._hoverState = '';                                                                                           // 2515
      this._activeTrigger = {};                                                                                        // 2516
      this._popper = null; // protected                                                                                // 2517
                                                                                                                       // 2518
      this.element = element;                                                                                          // 2519
      this.config = this._getConfig(config);                                                                           // 2520
      this.tip = null;                                                                                                 // 2521
                                                                                                                       // 2522
      this._setListeners();                                                                                            // 2523
    } // getters                                                                                                       // 2524
                                                                                                                       // 2525
                                                                                                                       // 2526
    var _proto = Tooltip.prototype;                                                                                    // 2527
                                                                                                                       // 2528
    // public                                                                                                          // 2529
    _proto.enable = function enable() {                                                                                // 2530
      this._isEnabled = true;                                                                                          // 2531
    };                                                                                                                 // 2532
                                                                                                                       // 2533
    _proto.disable = function disable() {                                                                              // 2534
      this._isEnabled = false;                                                                                         // 2535
    };                                                                                                                 // 2536
                                                                                                                       // 2537
    _proto.toggleEnabled = function toggleEnabled() {                                                                  // 2538
      this._isEnabled = !this._isEnabled;                                                                              // 2539
    };                                                                                                                 // 2540
                                                                                                                       // 2541
    _proto.toggle = function toggle(event) {                                                                           // 2542
      if (!this._isEnabled) {                                                                                          // 2543
        return;                                                                                                        // 2544
      }                                                                                                                // 2545
                                                                                                                       // 2546
      if (event) {                                                                                                     // 2547
        var dataKey = this.constructor.DATA_KEY;                                                                       // 2548
        var context = $$$1(event.currentTarget).data(dataKey);                                                         // 2549
                                                                                                                       // 2550
        if (!context) {                                                                                                // 2551
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());                              // 2552
          $$$1(event.currentTarget).data(dataKey, context);                                                            // 2553
        }                                                                                                              // 2554
                                                                                                                       // 2555
        context._activeTrigger.click = !context._activeTrigger.click;                                                  // 2556
                                                                                                                       // 2557
        if (context._isWithActiveTrigger()) {                                                                          // 2558
          context._enter(null, context);                                                                               // 2559
        } else {                                                                                                       // 2560
          context._leave(null, context);                                                                               // 2561
        }                                                                                                              // 2562
      } else {                                                                                                         // 2563
        if ($$$1(this.getTipElement()).hasClass(ClassName.SHOW)) {                                                     // 2564
          this._leave(null, this);                                                                                     // 2565
                                                                                                                       // 2566
          return;                                                                                                      // 2567
        }                                                                                                              // 2568
                                                                                                                       // 2569
        this._enter(null, this);                                                                                       // 2570
      }                                                                                                                // 2571
    };                                                                                                                 // 2572
                                                                                                                       // 2573
    _proto.dispose = function dispose() {                                                                              // 2574
      clearTimeout(this._timeout);                                                                                     // 2575
      $$$1.removeData(this.element, this.constructor.DATA_KEY);                                                        // 2576
      $$$1(this.element).off(this.constructor.EVENT_KEY);                                                              // 2577
      $$$1(this.element).closest('.modal').off('hide.bs.modal');                                                       // 2578
                                                                                                                       // 2579
      if (this.tip) {                                                                                                  // 2580
        $$$1(this.tip).remove();                                                                                       // 2581
      }                                                                                                                // 2582
                                                                                                                       // 2583
      this._isEnabled = null;                                                                                          // 2584
      this._timeout = null;                                                                                            // 2585
      this._hoverState = null;                                                                                         // 2586
      this._activeTrigger = null;                                                                                      // 2587
                                                                                                                       // 2588
      if (this._popper !== null) {                                                                                     // 2589
        this._popper.destroy();                                                                                        // 2590
      }                                                                                                                // 2591
                                                                                                                       // 2592
      this._popper = null;                                                                                             // 2593
      this.element = null;                                                                                             // 2594
      this.config = null;                                                                                              // 2595
      this.tip = null;                                                                                                 // 2596
    };                                                                                                                 // 2597
                                                                                                                       // 2598
    _proto.show = function show() {                                                                                    // 2599
      var _this = this;                                                                                                // 2600
                                                                                                                       // 2601
      if ($$$1(this.element).css('display') === 'none') {                                                              // 2602
        throw new Error('Please use show on visible elements');                                                        // 2603
      }                                                                                                                // 2604
                                                                                                                       // 2605
      var showEvent = $$$1.Event(this.constructor.Event.SHOW);                                                         // 2606
                                                                                                                       // 2607
      if (this.isWithContent() && this._isEnabled) {                                                                   // 2608
        $$$1(this.element).trigger(showEvent);                                                                         // 2609
        var isInTheDom = $$$1.contains(this.element.ownerDocument.documentElement, this.element);                      // 2610
                                                                                                                       // 2611
        if (showEvent.isDefaultPrevented() || !isInTheDom) {                                                           // 2612
          return;                                                                                                      // 2613
        }                                                                                                              // 2614
                                                                                                                       // 2615
        var tip = this.getTipElement();                                                                                // 2616
        var tipId = Util.getUID(this.constructor.NAME);                                                                // 2617
        tip.setAttribute('id', tipId);                                                                                 // 2618
        this.element.setAttribute('aria-describedby', tipId);                                                          // 2619
        this.setContent();                                                                                             // 2620
                                                                                                                       // 2621
        if (this.config.animation) {                                                                                   // 2622
          $$$1(tip).addClass(ClassName.FADE);                                                                          // 2623
        }                                                                                                              // 2624
                                                                                                                       // 2625
        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;
                                                                                                                       // 2627
        var attachment = this._getAttachment(placement);                                                               // 2628
                                                                                                                       // 2629
        this.addAttachmentClass(attachment);                                                                           // 2630
        var container = this.config.container === false ? document.body : $$$1(this.config.container);                 // 2631
        $$$1(tip).data(this.constructor.DATA_KEY, this);                                                               // 2632
                                                                                                                       // 2633
        if (!$$$1.contains(this.element.ownerDocument.documentElement, this.tip)) {                                    // 2634
          $$$1(tip).appendTo(container);                                                                               // 2635
        }                                                                                                              // 2636
                                                                                                                       // 2637
        $$$1(this.element).trigger(this.constructor.Event.INSERTED);                                                   // 2638
        this._popper = new Popper(this.element, tip, {                                                                 // 2639
          placement: attachment,                                                                                       // 2640
          modifiers: {                                                                                                 // 2641
            offset: {                                                                                                  // 2642
              offset: this.config.offset                                                                               // 2643
            },                                                                                                         // 2644
            flip: {                                                                                                    // 2645
              behavior: this.config.fallbackPlacement                                                                  // 2646
            },                                                                                                         // 2647
            arrow: {                                                                                                   // 2648
              element: Selector.ARROW                                                                                  // 2649
            }                                                                                                          // 2650
          },                                                                                                           // 2651
          onCreate: function onCreate(data) {                                                                          // 2652
            if (data.originalPlacement !== data.placement) {                                                           // 2653
              _this._handlePopperPlacementChange(data);                                                                // 2654
            }                                                                                                          // 2655
          },                                                                                                           // 2656
          onUpdate: function onUpdate(data) {                                                                          // 2657
            _this._handlePopperPlacementChange(data);                                                                  // 2658
          }                                                                                                            // 2659
        });                                                                                                            // 2660
        $$$1(tip).addClass(ClassName.SHOW); // if this is a touch-enabled device we add extra                          // 2661
        // empty mouseover listeners to the body's immediate children;                                                 // 2662
        // only needed because of broken event delegation on iOS                                                       // 2663
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html                                       // 2664
                                                                                                                       // 2665
        if ('ontouchstart' in document.documentElement) {                                                              // 2666
          $$$1('body').children().on('mouseover', null, $$$1.noop);                                                    // 2667
        }                                                                                                              // 2668
                                                                                                                       // 2669
        var complete = function complete() {                                                                           // 2670
          if (_this.config.animation) {                                                                                // 2671
            _this._fixTransition();                                                                                    // 2672
          }                                                                                                            // 2673
                                                                                                                       // 2674
          var prevHoverState = _this._hoverState;                                                                      // 2675
          _this._hoverState = null;                                                                                    // 2676
          $$$1(_this.element).trigger(_this.constructor.Event.SHOWN);                                                  // 2677
                                                                                                                       // 2678
          if (prevHoverState === HoverState.OUT) {                                                                     // 2679
            _this._leave(null, _this);                                                                                 // 2680
          }                                                                                                            // 2681
        };                                                                                                             // 2682
                                                                                                                       // 2683
        if (Util.supportsTransitionEnd() && $$$1(this.tip).hasClass(ClassName.FADE)) {                                 // 2684
          $$$1(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);        // 2685
        } else {                                                                                                       // 2686
          complete();                                                                                                  // 2687
        }                                                                                                              // 2688
      }                                                                                                                // 2689
    };                                                                                                                 // 2690
                                                                                                                       // 2691
    _proto.hide = function hide(callback) {                                                                            // 2692
      var _this2 = this;                                                                                               // 2693
                                                                                                                       // 2694
      var tip = this.getTipElement();                                                                                  // 2695
      var hideEvent = $$$1.Event(this.constructor.Event.HIDE);                                                         // 2696
                                                                                                                       // 2697
      var complete = function complete() {                                                                             // 2698
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {                                                // 2699
          tip.parentNode.removeChild(tip);                                                                             // 2700
        }                                                                                                              // 2701
                                                                                                                       // 2702
        _this2._cleanTipClass();                                                                                       // 2703
                                                                                                                       // 2704
        _this2.element.removeAttribute('aria-describedby');                                                            // 2705
                                                                                                                       // 2706
        $$$1(_this2.element).trigger(_this2.constructor.Event.HIDDEN);                                                 // 2707
                                                                                                                       // 2708
        if (_this2._popper !== null) {                                                                                 // 2709
          _this2._popper.destroy();                                                                                    // 2710
        }                                                                                                              // 2711
                                                                                                                       // 2712
        if (callback) {                                                                                                // 2713
          callback();                                                                                                  // 2714
        }                                                                                                              // 2715
      };                                                                                                               // 2716
                                                                                                                       // 2717
      $$$1(this.element).trigger(hideEvent);                                                                           // 2718
                                                                                                                       // 2719
      if (hideEvent.isDefaultPrevented()) {                                                                            // 2720
        return;                                                                                                        // 2721
      }                                                                                                                // 2722
                                                                                                                       // 2723
      $$$1(tip).removeClass(ClassName.SHOW); // if this is a touch-enabled device we remove the extra                  // 2724
      // empty mouseover listeners we added for iOS support                                                            // 2725
                                                                                                                       // 2726
      if ('ontouchstart' in document.documentElement) {                                                                // 2727
        $$$1('body').children().off('mouseover', null, $$$1.noop);                                                     // 2728
      }                                                                                                                // 2729
                                                                                                                       // 2730
      this._activeTrigger[Trigger.CLICK] = false;                                                                      // 2731
      this._activeTrigger[Trigger.FOCUS] = false;                                                                      // 2732
      this._activeTrigger[Trigger.HOVER] = false;                                                                      // 2733
                                                                                                                       // 2734
      if (Util.supportsTransitionEnd() && $$$1(this.tip).hasClass(ClassName.FADE)) {                                   // 2735
        $$$1(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);                        // 2736
      } else {                                                                                                         // 2737
        complete();                                                                                                    // 2738
      }                                                                                                                // 2739
                                                                                                                       // 2740
      this._hoverState = '';                                                                                           // 2741
    };                                                                                                                 // 2742
                                                                                                                       // 2743
    _proto.update = function update() {                                                                                // 2744
      if (this._popper !== null) {                                                                                     // 2745
        this._popper.scheduleUpdate();                                                                                 // 2746
      }                                                                                                                // 2747
    }; // protected                                                                                                    // 2748
                                                                                                                       // 2749
                                                                                                                       // 2750
    _proto.isWithContent = function isWithContent() {                                                                  // 2751
      return Boolean(this.getTitle());                                                                                 // 2752
    };                                                                                                                 // 2753
                                                                                                                       // 2754
    _proto.addAttachmentClass = function addAttachmentClass(attachment) {                                              // 2755
      $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);                                            // 2756
    };                                                                                                                 // 2757
                                                                                                                       // 2758
    _proto.getTipElement = function getTipElement() {                                                                  // 2759
      this.tip = this.tip || $$$1(this.config.template)[0];                                                            // 2760
      return this.tip;                                                                                                 // 2761
    };                                                                                                                 // 2762
                                                                                                                       // 2763
    _proto.setContent = function setContent() {                                                                        // 2764
      var $tip = $$$1(this.getTipElement());                                                                           // 2765
      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());                                      // 2766
      $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);                                                         // 2767
    };                                                                                                                 // 2768
                                                                                                                       // 2769
    _proto.setElementContent = function setElementContent($element, content) {                                         // 2770
      var html = this.config.html;                                                                                     // 2771
                                                                                                                       // 2772
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {                                       // 2773
        // content is a DOM node or a jQuery                                                                           // 2774
        if (html) {                                                                                                    // 2775
          if (!$$$1(content).parent().is($element)) {                                                                  // 2776
            $element.empty().append(content);                                                                          // 2777
          }                                                                                                            // 2778
        } else {                                                                                                       // 2779
          $element.text($$$1(content).text());                                                                         // 2780
        }                                                                                                              // 2781
      } else {                                                                                                         // 2782
        $element[html ? 'html' : 'text'](content);                                                                     // 2783
      }                                                                                                                // 2784
    };                                                                                                                 // 2785
                                                                                                                       // 2786
    _proto.getTitle = function getTitle() {                                                                            // 2787
      var title = this.element.getAttribute('data-original-title');                                                    // 2788
                                                                                                                       // 2789
      if (!title) {                                                                                                    // 2790
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;    // 2791
      }                                                                                                                // 2792
                                                                                                                       // 2793
      return title;                                                                                                    // 2794
    }; // private                                                                                                      // 2795
                                                                                                                       // 2796
                                                                                                                       // 2797
    _proto._getAttachment = function _getAttachment(placement) {                                                       // 2798
      return AttachmentMap[placement.toUpperCase()];                                                                   // 2799
    };                                                                                                                 // 2800
                                                                                                                       // 2801
    _proto._setListeners = function _setListeners() {                                                                  // 2802
      var _this3 = this;                                                                                               // 2803
                                                                                                                       // 2804
      var triggers = this.config.trigger.split(' ');                                                                   // 2805
      triggers.forEach(function (trigger) {                                                                            // 2806
        if (trigger === 'click') {                                                                                     // 2807
          $$$1(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, function (event) {           // 2808
            return _this3.toggle(event);                                                                               // 2809
          });                                                                                                          // 2810
        } else if (trigger !== Trigger.MANUAL) {                                                                       // 2811
          var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;
          $$$1(_this3.element).on(eventIn, _this3.config.selector, function (event) {                                  // 2814
            return _this3._enter(event);                                                                               // 2815
          }).on(eventOut, _this3.config.selector, function (event) {                                                   // 2816
            return _this3._leave(event);                                                                               // 2817
          });                                                                                                          // 2818
        }                                                                                                              // 2819
                                                                                                                       // 2820
        $$$1(_this3.element).closest('.modal').on('hide.bs.modal', function () {                                       // 2821
          return _this3.hide();                                                                                        // 2822
        });                                                                                                            // 2823
      });                                                                                                              // 2824
                                                                                                                       // 2825
      if (this.config.selector) {                                                                                      // 2826
        this.config = $$$1.extend({}, this.config, {                                                                   // 2827
          trigger: 'manual',                                                                                           // 2828
          selector: ''                                                                                                 // 2829
        });                                                                                                            // 2830
      } else {                                                                                                         // 2831
        this._fixTitle();                                                                                              // 2832
      }                                                                                                                // 2833
    };                                                                                                                 // 2834
                                                                                                                       // 2835
    _proto._fixTitle = function _fixTitle() {                                                                          // 2836
      var titleType = typeof this.element.getAttribute('data-original-title');                                         // 2837
                                                                                                                       // 2838
      if (this.element.getAttribute('title') || titleType !== 'string') {                                              // 2839
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');                    // 2840
        this.element.setAttribute('title', '');                                                                        // 2841
      }                                                                                                                // 2842
    };                                                                                                                 // 2843
                                                                                                                       // 2844
    _proto._enter = function _enter(event, context) {                                                                  // 2845
      var dataKey = this.constructor.DATA_KEY;                                                                         // 2846
      context = context || $$$1(event.currentTarget).data(dataKey);                                                    // 2847
                                                                                                                       // 2848
      if (!context) {                                                                                                  // 2849
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());                                // 2850
        $$$1(event.currentTarget).data(dataKey, context);                                                              // 2851
      }                                                                                                                // 2852
                                                                                                                       // 2853
      if (event) {                                                                                                     // 2854
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;                       // 2855
      }                                                                                                                // 2856
                                                                                                                       // 2857
      if ($$$1(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {         // 2858
        context._hoverState = HoverState.SHOW;                                                                         // 2859
        return;                                                                                                        // 2860
      }                                                                                                                // 2861
                                                                                                                       // 2862
      clearTimeout(context._timeout);                                                                                  // 2863
      context._hoverState = HoverState.SHOW;                                                                           // 2864
                                                                                                                       // 2865
      if (!context.config.delay || !context.config.delay.show) {                                                       // 2866
        context.show();                                                                                                // 2867
        return;                                                                                                        // 2868
      }                                                                                                                // 2869
                                                                                                                       // 2870
      context._timeout = setTimeout(function () {                                                                      // 2871
        if (context._hoverState === HoverState.SHOW) {                                                                 // 2872
          context.show();                                                                                              // 2873
        }                                                                                                              // 2874
      }, context.config.delay.show);                                                                                   // 2875
    };                                                                                                                 // 2876
                                                                                                                       // 2877
    _proto._leave = function _leave(event, context) {                                                                  // 2878
      var dataKey = this.constructor.DATA_KEY;                                                                         // 2879
      context = context || $$$1(event.currentTarget).data(dataKey);                                                    // 2880
                                                                                                                       // 2881
      if (!context) {                                                                                                  // 2882
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());                                // 2883
        $$$1(event.currentTarget).data(dataKey, context);                                                              // 2884
      }                                                                                                                // 2885
                                                                                                                       // 2886
      if (event) {                                                                                                     // 2887
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;                     // 2888
      }                                                                                                                // 2889
                                                                                                                       // 2890
      if (context._isWithActiveTrigger()) {                                                                            // 2891
        return;                                                                                                        // 2892
      }                                                                                                                // 2893
                                                                                                                       // 2894
      clearTimeout(context._timeout);                                                                                  // 2895
      context._hoverState = HoverState.OUT;                                                                            // 2896
                                                                                                                       // 2897
      if (!context.config.delay || !context.config.delay.hide) {                                                       // 2898
        context.hide();                                                                                                // 2899
        return;                                                                                                        // 2900
      }                                                                                                                // 2901
                                                                                                                       // 2902
      context._timeout = setTimeout(function () {                                                                      // 2903
        if (context._hoverState === HoverState.OUT) {                                                                  // 2904
          context.hide();                                                                                              // 2905
        }                                                                                                              // 2906
      }, context.config.delay.hide);                                                                                   // 2907
    };                                                                                                                 // 2908
                                                                                                                       // 2909
    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {                                                    // 2910
      for (var trigger in this._activeTrigger) {                                                                       // 2911
        if (this._activeTrigger[trigger]) {                                                                            // 2912
          return true;                                                                                                 // 2913
        }                                                                                                              // 2914
      }                                                                                                                // 2915
                                                                                                                       // 2916
      return false;                                                                                                    // 2917
    };                                                                                                                 // 2918
                                                                                                                       // 2919
    _proto._getConfig = function _getConfig(config) {                                                                  // 2920
      config = $$$1.extend({}, this.constructor.Default, $$$1(this.element).data(), config);                           // 2921
                                                                                                                       // 2922
      if (typeof config.delay === 'number') {                                                                          // 2923
        config.delay = {                                                                                               // 2924
          show: config.delay,                                                                                          // 2925
          hide: config.delay                                                                                           // 2926
        };                                                                                                             // 2927
      }                                                                                                                // 2928
                                                                                                                       // 2929
      if (typeof config.title === 'number') {                                                                          // 2930
        config.title = config.title.toString();                                                                        // 2931
      }                                                                                                                // 2932
                                                                                                                       // 2933
      if (typeof config.content === 'number') {                                                                        // 2934
        config.content = config.content.toString();                                                                    // 2935
      }                                                                                                                // 2936
                                                                                                                       // 2937
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);                                                // 2938
      return config;                                                                                                   // 2939
    };                                                                                                                 // 2940
                                                                                                                       // 2941
    _proto._getDelegateConfig = function _getDelegateConfig() {                                                        // 2942
      var config = {};                                                                                                 // 2943
                                                                                                                       // 2944
      if (this.config) {                                                                                               // 2945
        for (var key in this.config) {                                                                                 // 2946
          if (this.constructor.Default[key] !== this.config[key]) {                                                    // 2947
            config[key] = this.config[key];                                                                            // 2948
          }                                                                                                            // 2949
        }                                                                                                              // 2950
      }                                                                                                                // 2951
                                                                                                                       // 2952
      return config;                                                                                                   // 2953
    };                                                                                                                 // 2954
                                                                                                                       // 2955
    _proto._cleanTipClass = function _cleanTipClass() {                                                                // 2956
      var $tip = $$$1(this.getTipElement());                                                                           // 2957
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);                                                     // 2958
                                                                                                                       // 2959
      if (tabClass !== null && tabClass.length > 0) {                                                                  // 2960
        $tip.removeClass(tabClass.join(''));                                                                           // 2961
      }                                                                                                                // 2962
    };                                                                                                                 // 2963
                                                                                                                       // 2964
    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {                                // 2965
      this._cleanTipClass();                                                                                           // 2966
                                                                                                                       // 2967
      this.addAttachmentClass(this._getAttachment(data.placement));                                                    // 2968
    };                                                                                                                 // 2969
                                                                                                                       // 2970
    _proto._fixTransition = function _fixTransition() {                                                                // 2971
      var tip = this.getTipElement();                                                                                  // 2972
      var initConfigAnimation = this.config.animation;                                                                 // 2973
                                                                                                                       // 2974
      if (tip.getAttribute('x-placement') !== null) {                                                                  // 2975
        return;                                                                                                        // 2976
      }                                                                                                                // 2977
                                                                                                                       // 2978
      $$$1(tip).removeClass(ClassName.FADE);                                                                           // 2979
      this.config.animation = false;                                                                                   // 2980
      this.hide();                                                                                                     // 2981
      this.show();                                                                                                     // 2982
      this.config.animation = initConfigAnimation;                                                                     // 2983
    }; // static                                                                                                       // 2984
                                                                                                                       // 2985
                                                                                                                       // 2986
    Tooltip._jQueryInterface = function _jQueryInterface(config) {                                                     // 2987
      return this.each(function () {                                                                                   // 2988
        var data = $$$1(this).data(DATA_KEY);                                                                          // 2989
                                                                                                                       // 2990
        var _config = typeof config === 'object' && config;                                                            // 2991
                                                                                                                       // 2992
        if (!data && /dispose|hide/.test(config)) {                                                                    // 2993
          return;                                                                                                      // 2994
        }                                                                                                              // 2995
                                                                                                                       // 2996
        if (!data) {                                                                                                   // 2997
          data = new Tooltip(this, _config);                                                                           // 2998
          $$$1(this).data(DATA_KEY, data);                                                                             // 2999
        }                                                                                                              // 3000
                                                                                                                       // 3001
        if (typeof config === 'string') {                                                                              // 3002
          if (typeof data[config] === 'undefined') {                                                                   // 3003
            throw new Error("No method named \"" + config + "\"");                                                     // 3004
          }                                                                                                            // 3005
                                                                                                                       // 3006
          data[config]();                                                                                              // 3007
        }                                                                                                              // 3008
      });                                                                                                              // 3009
    };                                                                                                                 // 3010
                                                                                                                       // 3011
    createClass(Tooltip, null, [{                                                                                      // 3012
      key: "VERSION",                                                                                                  // 3013
      get: function get() {                                                                                            // 3014
        return VERSION;                                                                                                // 3015
      }                                                                                                                // 3016
    }, {                                                                                                               // 3017
      key: "Default",                                                                                                  // 3018
      get: function get() {                                                                                            // 3019
        return Default;                                                                                                // 3020
      }                                                                                                                // 3021
    }, {                                                                                                               // 3022
      key: "NAME",                                                                                                     // 3023
      get: function get() {                                                                                            // 3024
        return NAME;                                                                                                   // 3025
      }                                                                                                                // 3026
    }, {                                                                                                               // 3027
      key: "DATA_KEY",                                                                                                 // 3028
      get: function get() {                                                                                            // 3029
        return DATA_KEY;                                                                                               // 3030
      }                                                                                                                // 3031
    }, {                                                                                                               // 3032
      key: "Event",                                                                                                    // 3033
      get: function get() {                                                                                            // 3034
        return Event;                                                                                                  // 3035
      }                                                                                                                // 3036
    }, {                                                                                                               // 3037
      key: "EVENT_KEY",                                                                                                // 3038
      get: function get() {                                                                                            // 3039
        return EVENT_KEY;                                                                                              // 3040
      }                                                                                                                // 3041
    }, {                                                                                                               // 3042
      key: "DefaultType",                                                                                              // 3043
      get: function get() {                                                                                            // 3044
        return DefaultType;                                                                                            // 3045
      }                                                                                                                // 3046
    }]);                                                                                                               // 3047
    return Tooltip;                                                                                                    // 3048
  }();                                                                                                                 // 3049
  /**                                                                                                                  // 3050
   * ------------------------------------------------------------------------                                          // 3051
   * jQuery                                                                                                            // 3052
   * ------------------------------------------------------------------------                                          // 3053
   */                                                                                                                  // 3054
                                                                                                                       // 3055
                                                                                                                       // 3056
  $$$1.fn[NAME] = Tooltip._jQueryInterface;                                                                            // 3057
  $$$1.fn[NAME].Constructor = Tooltip;                                                                                 // 3058
                                                                                                                       // 3059
  $$$1.fn[NAME].noConflict = function () {                                                                             // 3060
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;                                                                                // 3061
    return Tooltip._jQueryInterface;                                                                                   // 3062
  };                                                                                                                   // 3063
                                                                                                                       // 3064
  return Tooltip;                                                                                                      // 3065
}($, Popper);                                                                                                          // 3066
                                                                                                                       // 3067
/**                                                                                                                    // 3068
 * --------------------------------------------------------------------------                                          // 3069
 * Bootstrap (v4.0.0-beta.2): popover.js                                                                               // 3070
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 3071
 * --------------------------------------------------------------------------                                          // 3072
 */                                                                                                                    // 3073
                                                                                                                       // 3074
var Popover = function ($$$1) {                                                                                        // 3075
  /**                                                                                                                  // 3076
   * ------------------------------------------------------------------------                                          // 3077
   * Constants                                                                                                         // 3078
   * ------------------------------------------------------------------------                                          // 3079
   */                                                                                                                  // 3080
  var NAME = 'popover';                                                                                                // 3081
  var VERSION = '4.0.0-beta.2';                                                                                        // 3082
  var DATA_KEY = 'bs.popover';                                                                                         // 3083
  var EVENT_KEY = "." + DATA_KEY;                                                                                      // 3084
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];                                                                              // 3085
  var CLASS_PREFIX = 'bs-popover';                                                                                     // 3086
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');                                         // 3087
  var Default = $$$1.extend({}, Tooltip.Default, {                                                                     // 3088
    placement: 'right',                                                                                                // 3089
    trigger: 'click',                                                                                                  // 3090
    content: '',                                                                                                       // 3091
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });                                                                                                                  // 3093
  var DefaultType = $$$1.extend({}, Tooltip.DefaultType, {                                                             // 3094
    content: '(string|element|function)'                                                                               // 3095
  });                                                                                                                  // 3096
  var ClassName = {                                                                                                    // 3097
    FADE: 'fade',                                                                                                      // 3098
    SHOW: 'show'                                                                                                       // 3099
  };                                                                                                                   // 3100
  var Selector = {                                                                                                     // 3101
    TITLE: '.popover-header',                                                                                          // 3102
    CONTENT: '.popover-body'                                                                                           // 3103
  };                                                                                                                   // 3104
  var Event = {                                                                                                        // 3105
    HIDE: "hide" + EVENT_KEY,                                                                                          // 3106
    HIDDEN: "hidden" + EVENT_KEY,                                                                                      // 3107
    SHOW: "show" + EVENT_KEY,                                                                                          // 3108
    SHOWN: "shown" + EVENT_KEY,                                                                                        // 3109
    INSERTED: "inserted" + EVENT_KEY,                                                                                  // 3110
    CLICK: "click" + EVENT_KEY,                                                                                        // 3111
    FOCUSIN: "focusin" + EVENT_KEY,                                                                                    // 3112
    FOCUSOUT: "focusout" + EVENT_KEY,                                                                                  // 3113
    MOUSEENTER: "mouseenter" + EVENT_KEY,                                                                              // 3114
    MOUSELEAVE: "mouseleave" + EVENT_KEY                                                                               // 3115
    /**                                                                                                                // 3116
     * ------------------------------------------------------------------------                                        // 3117
     * Class Definition                                                                                                // 3118
     * ------------------------------------------------------------------------                                        // 3119
     */                                                                                                                // 3120
                                                                                                                       // 3121
  };                                                                                                                   // 3122
                                                                                                                       // 3123
  var Popover =                                                                                                        // 3124
  /*#__PURE__*/                                                                                                        // 3125
  function (_Tooltip) {                                                                                                // 3126
    inheritsLoose(Popover, _Tooltip);                                                                                  // 3127
                                                                                                                       // 3128
    function Popover() {                                                                                               // 3129
      return _Tooltip.apply(this, arguments) || this;                                                                  // 3130
    }                                                                                                                  // 3131
                                                                                                                       // 3132
    var _proto = Popover.prototype;                                                                                    // 3133
                                                                                                                       // 3134
    // overrides                                                                                                       // 3135
    _proto.isWithContent = function isWithContent() {                                                                  // 3136
      return this.getTitle() || this._getContent();                                                                    // 3137
    };                                                                                                                 // 3138
                                                                                                                       // 3139
    _proto.addAttachmentClass = function addAttachmentClass(attachment) {                                              // 3140
      $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);                                            // 3141
    };                                                                                                                 // 3142
                                                                                                                       // 3143
    _proto.getTipElement = function getTipElement() {                                                                  // 3144
      this.tip = this.tip || $$$1(this.config.template)[0];                                                            // 3145
      return this.tip;                                                                                                 // 3146
    };                                                                                                                 // 3147
                                                                                                                       // 3148
    _proto.setContent = function setContent() {                                                                        // 3149
      var $tip = $$$1(this.getTipElement()); // we use append for html objects to maintain js events                   // 3150
                                                                                                                       // 3151
      this.setElementContent($tip.find(Selector.TITLE), this.getTitle());                                              // 3152
      this.setElementContent($tip.find(Selector.CONTENT), this._getContent());                                         // 3153
      $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);                                                         // 3154
    }; // private                                                                                                      // 3155
                                                                                                                       // 3156
                                                                                                                       // 3157
    _proto._getContent = function _getContent() {                                                                      // 3158
      return this.element.getAttribute('data-content') || (typeof this.config.content === 'function' ? this.config.content.call(this.element) : this.config.content);
    };                                                                                                                 // 3160
                                                                                                                       // 3161
    _proto._cleanTipClass = function _cleanTipClass() {                                                                // 3162
      var $tip = $$$1(this.getTipElement());                                                                           // 3163
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);                                                     // 3164
                                                                                                                       // 3165
      if (tabClass !== null && tabClass.length > 0) {                                                                  // 3166
        $tip.removeClass(tabClass.join(''));                                                                           // 3167
      }                                                                                                                // 3168
    }; // static                                                                                                       // 3169
                                                                                                                       // 3170
                                                                                                                       // 3171
    Popover._jQueryInterface = function _jQueryInterface(config) {                                                     // 3172
      return this.each(function () {                                                                                   // 3173
        var data = $$$1(this).data(DATA_KEY);                                                                          // 3174
                                                                                                                       // 3175
        var _config = typeof config === 'object' ? config : null;                                                      // 3176
                                                                                                                       // 3177
        if (!data && /destroy|hide/.test(config)) {                                                                    // 3178
          return;                                                                                                      // 3179
        }                                                                                                              // 3180
                                                                                                                       // 3181
        if (!data) {                                                                                                   // 3182
          data = new Popover(this, _config);                                                                           // 3183
          $$$1(this).data(DATA_KEY, data);                                                                             // 3184
        }                                                                                                              // 3185
                                                                                                                       // 3186
        if (typeof config === 'string') {                                                                              // 3187
          if (typeof data[config] === 'undefined') {                                                                   // 3188
            throw new Error("No method named \"" + config + "\"");                                                     // 3189
          }                                                                                                            // 3190
                                                                                                                       // 3191
          data[config]();                                                                                              // 3192
        }                                                                                                              // 3193
      });                                                                                                              // 3194
    };                                                                                                                 // 3195
                                                                                                                       // 3196
    createClass(Popover, null, [{                                                                                      // 3197
      key: "VERSION",                                                                                                  // 3198
      // getters                                                                                                       // 3199
      get: function get() {                                                                                            // 3200
        return VERSION;                                                                                                // 3201
      }                                                                                                                // 3202
    }, {                                                                                                               // 3203
      key: "Default",                                                                                                  // 3204
      get: function get() {                                                                                            // 3205
        return Default;                                                                                                // 3206
      }                                                                                                                // 3207
    }, {                                                                                                               // 3208
      key: "NAME",                                                                                                     // 3209
      get: function get() {                                                                                            // 3210
        return NAME;                                                                                                   // 3211
      }                                                                                                                // 3212
    }, {                                                                                                               // 3213
      key: "DATA_KEY",                                                                                                 // 3214
      get: function get() {                                                                                            // 3215
        return DATA_KEY;                                                                                               // 3216
      }                                                                                                                // 3217
    }, {                                                                                                               // 3218
      key: "Event",                                                                                                    // 3219
      get: function get() {                                                                                            // 3220
        return Event;                                                                                                  // 3221
      }                                                                                                                // 3222
    }, {                                                                                                               // 3223
      key: "EVENT_KEY",                                                                                                // 3224
      get: function get() {                                                                                            // 3225
        return EVENT_KEY;                                                                                              // 3226
      }                                                                                                                // 3227
    }, {                                                                                                               // 3228
      key: "DefaultType",                                                                                              // 3229
      get: function get() {                                                                                            // 3230
        return DefaultType;                                                                                            // 3231
      }                                                                                                                // 3232
    }]);                                                                                                               // 3233
    return Popover;                                                                                                    // 3234
  }(Tooltip);                                                                                                          // 3235
  /**                                                                                                                  // 3236
   * ------------------------------------------------------------------------                                          // 3237
   * jQuery                                                                                                            // 3238
   * ------------------------------------------------------------------------                                          // 3239
   */                                                                                                                  // 3240
                                                                                                                       // 3241
                                                                                                                       // 3242
  $$$1.fn[NAME] = Popover._jQueryInterface;                                                                            // 3243
  $$$1.fn[NAME].Constructor = Popover;                                                                                 // 3244
                                                                                                                       // 3245
  $$$1.fn[NAME].noConflict = function () {                                                                             // 3246
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;                                                                                // 3247
    return Popover._jQueryInterface;                                                                                   // 3248
  };                                                                                                                   // 3249
                                                                                                                       // 3250
  return Popover;                                                                                                      // 3251
}($);                                                                                                                  // 3252
                                                                                                                       // 3253
/**                                                                                                                    // 3254
 * --------------------------------------------------------------------------                                          // 3255
 * Bootstrap (v4.0.0-beta.2): scrollspy.js                                                                             // 3256
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 3257
 * --------------------------------------------------------------------------                                          // 3258
 */                                                                                                                    // 3259
                                                                                                                       // 3260
var ScrollSpy = function ($$$1) {                                                                                      // 3261
  /**                                                                                                                  // 3262
   * ------------------------------------------------------------------------                                          // 3263
   * Constants                                                                                                         // 3264
   * ------------------------------------------------------------------------                                          // 3265
   */                                                                                                                  // 3266
  var NAME = 'scrollspy';                                                                                              // 3267
  var VERSION = '4.0.0-beta.2';                                                                                        // 3268
  var DATA_KEY = 'bs.scrollspy';                                                                                       // 3269
  var EVENT_KEY = "." + DATA_KEY;                                                                                      // 3270
  var DATA_API_KEY = '.data-api';                                                                                      // 3271
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];                                                                              // 3272
  var Default = {                                                                                                      // 3273
    offset: 10,                                                                                                        // 3274
    method: 'auto',                                                                                                    // 3275
    target: ''                                                                                                         // 3276
  };                                                                                                                   // 3277
  var DefaultType = {                                                                                                  // 3278
    offset: 'number',                                                                                                  // 3279
    method: 'string',                                                                                                  // 3280
    target: '(string|element)'                                                                                         // 3281
  };                                                                                                                   // 3282
  var Event = {                                                                                                        // 3283
    ACTIVATE: "activate" + EVENT_KEY,                                                                                  // 3284
    SCROLL: "scroll" + EVENT_KEY,                                                                                      // 3285
    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY                                                                   // 3286
  };                                                                                                                   // 3287
  var ClassName = {                                                                                                    // 3288
    DROPDOWN_ITEM: 'dropdown-item',                                                                                    // 3289
    DROPDOWN_MENU: 'dropdown-menu',                                                                                    // 3290
    ACTIVE: 'active'                                                                                                   // 3291
  };                                                                                                                   // 3292
  var Selector = {                                                                                                     // 3293
    DATA_SPY: '[data-spy="scroll"]',                                                                                   // 3294
    ACTIVE: '.active',                                                                                                 // 3295
    NAV_LIST_GROUP: '.nav, .list-group',                                                                               // 3296
    NAV_LINKS: '.nav-link',                                                                                            // 3297
    NAV_ITEMS: '.nav-item',                                                                                            // 3298
    LIST_ITEMS: '.list-group-item',                                                                                    // 3299
    DROPDOWN: '.dropdown',                                                                                             // 3300
    DROPDOWN_ITEMS: '.dropdown-item',                                                                                  // 3301
    DROPDOWN_TOGGLE: '.dropdown-toggle'                                                                                // 3302
  };                                                                                                                   // 3303
  var OffsetMethod = {                                                                                                 // 3304
    OFFSET: 'offset',                                                                                                  // 3305
    POSITION: 'position'                                                                                               // 3306
    /**                                                                                                                // 3307
     * ------------------------------------------------------------------------                                        // 3308
     * Class Definition                                                                                                // 3309
     * ------------------------------------------------------------------------                                        // 3310
     */                                                                                                                // 3311
                                                                                                                       // 3312
  };                                                                                                                   // 3313
                                                                                                                       // 3314
  var ScrollSpy =                                                                                                      // 3315
  /*#__PURE__*/                                                                                                        // 3316
  function () {                                                                                                        // 3317
    function ScrollSpy(element, config) {                                                                              // 3318
      var _this = this;                                                                                                // 3319
                                                                                                                       // 3320
      this._element = element;                                                                                         // 3321
      this._scrollElement = element.tagName === 'BODY' ? window : element;                                             // 3322
      this._config = this._getConfig(config);                                                                          // 3323
      this._selector = this._config.target + " " + Selector.NAV_LINKS + "," + (this._config.target + " " + Selector.LIST_ITEMS + ",") + (this._config.target + " " + Selector.DROPDOWN_ITEMS);
      this._offsets = [];                                                                                              // 3325
      this._targets = [];                                                                                              // 3326
      this._activeTarget = null;                                                                                       // 3327
      this._scrollHeight = 0;                                                                                          // 3328
      $$$1(this._scrollElement).on(Event.SCROLL, function (event) {                                                    // 3329
        return _this._process(event);                                                                                  // 3330
      });                                                                                                              // 3331
      this.refresh();                                                                                                  // 3332
                                                                                                                       // 3333
      this._process();                                                                                                 // 3334
    } // getters                                                                                                       // 3335
                                                                                                                       // 3336
                                                                                                                       // 3337
    var _proto = ScrollSpy.prototype;                                                                                  // 3338
                                                                                                                       // 3339
    // public                                                                                                          // 3340
    _proto.refresh = function refresh() {                                                                              // 3341
      var _this2 = this;                                                                                               // 3342
                                                                                                                       // 3343
      var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;                            // 3345
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;                              // 3346
      this._offsets = [];                                                                                              // 3347
      this._targets = [];                                                                                              // 3348
      this._scrollHeight = this._getScrollHeight();                                                                    // 3349
      var targets = $$$1.makeArray($$$1(this._selector));                                                              // 3350
      targets.map(function (element) {                                                                                 // 3351
        var target;                                                                                                    // 3352
        var targetSelector = Util.getSelectorFromElement(element);                                                     // 3353
                                                                                                                       // 3354
        if (targetSelector) {                                                                                          // 3355
          target = $$$1(targetSelector)[0];                                                                            // 3356
        }                                                                                                              // 3357
                                                                                                                       // 3358
        if (target) {                                                                                                  // 3359
          var targetBCR = target.getBoundingClientRect();                                                              // 3360
                                                                                                                       // 3361
          if (targetBCR.width || targetBCR.height) {                                                                   // 3362
            // todo (fat): remove sketch reliance on jQuery position/offset                                            // 3363
            return [$$$1(target)[offsetMethod]().top + offsetBase, targetSelector];                                    // 3364
          }                                                                                                            // 3365
        }                                                                                                              // 3366
                                                                                                                       // 3367
        return null;                                                                                                   // 3368
      }).filter(function (item) {                                                                                      // 3369
        return item;                                                                                                   // 3370
      }).sort(function (a, b) {                                                                                        // 3371
        return a[0] - b[0];                                                                                            // 3372
      }).forEach(function (item) {                                                                                     // 3373
        _this2._offsets.push(item[0]);                                                                                 // 3374
                                                                                                                       // 3375
        _this2._targets.push(item[1]);                                                                                 // 3376
      });                                                                                                              // 3377
    };                                                                                                                 // 3378
                                                                                                                       // 3379
    _proto.dispose = function dispose() {                                                                              // 3380
      $$$1.removeData(this._element, DATA_KEY);                                                                        // 3381
      $$$1(this._scrollElement).off(EVENT_KEY);                                                                        // 3382
      this._element = null;                                                                                            // 3383
      this._scrollElement = null;                                                                                      // 3384
      this._config = null;                                                                                             // 3385
      this._selector = null;                                                                                           // 3386
      this._offsets = null;                                                                                            // 3387
      this._targets = null;                                                                                            // 3388
      this._activeTarget = null;                                                                                       // 3389
      this._scrollHeight = null;                                                                                       // 3390
    }; // private                                                                                                      // 3391
                                                                                                                       // 3392
                                                                                                                       // 3393
    _proto._getConfig = function _getConfig(config) {                                                                  // 3394
      config = $$$1.extend({}, Default, config);                                                                       // 3395
                                                                                                                       // 3396
      if (typeof config.target !== 'string') {                                                                         // 3397
        var id = $$$1(config.target).attr('id');                                                                       // 3398
                                                                                                                       // 3399
        if (!id) {                                                                                                     // 3400
          id = Util.getUID(NAME);                                                                                      // 3401
          $$$1(config.target).attr('id', id);                                                                          // 3402
        }                                                                                                              // 3403
                                                                                                                       // 3404
        config.target = "#" + id;                                                                                      // 3405
      }                                                                                                                // 3406
                                                                                                                       // 3407
      Util.typeCheckConfig(NAME, config, DefaultType);                                                                 // 3408
      return config;                                                                                                   // 3409
    };                                                                                                                 // 3410
                                                                                                                       // 3411
    _proto._getScrollTop = function _getScrollTop() {                                                                  // 3412
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;         // 3413
    };                                                                                                                 // 3414
                                                                                                                       // 3415
    _proto._getScrollHeight = function _getScrollHeight() {                                                            // 3416
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };                                                                                                                 // 3418
                                                                                                                       // 3419
    _proto._getOffsetHeight = function _getOffsetHeight() {                                                            // 3420
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };                                                                                                                 // 3422
                                                                                                                       // 3423
    _proto._process = function _process() {                                                                            // 3424
      var scrollTop = this._getScrollTop() + this._config.offset;                                                      // 3425
                                                                                                                       // 3426
      var scrollHeight = this._getScrollHeight();                                                                      // 3427
                                                                                                                       // 3428
      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();                                    // 3429
                                                                                                                       // 3430
      if (this._scrollHeight !== scrollHeight) {                                                                       // 3431
        this.refresh();                                                                                                // 3432
      }                                                                                                                // 3433
                                                                                                                       // 3434
      if (scrollTop >= maxScroll) {                                                                                    // 3435
        var target = this._targets[this._targets.length - 1];                                                          // 3436
                                                                                                                       // 3437
        if (this._activeTarget !== target) {                                                                           // 3438
          this._activate(target);                                                                                      // 3439
        }                                                                                                              // 3440
                                                                                                                       // 3441
        return;                                                                                                        // 3442
      }                                                                                                                // 3443
                                                                                                                       // 3444
      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {                                // 3445
        this._activeTarget = null;                                                                                     // 3446
                                                                                                                       // 3447
        this._clear();                                                                                                 // 3448
                                                                                                                       // 3449
        return;                                                                                                        // 3450
      }                                                                                                                // 3451
                                                                                                                       // 3452
      for (var i = this._offsets.length; i--;) {                                                                       // 3453
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);
                                                                                                                       // 3455
        if (isActiveTarget) {                                                                                          // 3456
          this._activate(this._targets[i]);                                                                            // 3457
        }                                                                                                              // 3458
      }                                                                                                                // 3459
    };                                                                                                                 // 3460
                                                                                                                       // 3461
    _proto._activate = function _activate(target) {                                                                    // 3462
      this._activeTarget = target;                                                                                     // 3463
                                                                                                                       // 3464
      this._clear();                                                                                                   // 3465
                                                                                                                       // 3466
      var queries = this._selector.split(','); // eslint-disable-next-line arrow-body-style                            // 3467
                                                                                                                       // 3468
                                                                                                                       // 3469
      queries = queries.map(function (selector) {                                                                      // 3470
        return selector + "[data-target=\"" + target + "\"]," + (selector + "[href=\"" + target + "\"]");              // 3471
      });                                                                                                              // 3472
      var $link = $$$1(queries.join(','));                                                                             // 3473
                                                                                                                       // 3474
      if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {                                                                   // 3475
        $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);                    // 3476
        $link.addClass(ClassName.ACTIVE);                                                                              // 3477
      } else {                                                                                                         // 3478
        // Set triggered link as active                                                                                // 3479
        $link.addClass(ClassName.ACTIVE); // Set triggered links parents as active                                     // 3480
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor                        // 3481
                                                                                                                       // 3482
        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ", " + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE); // Handle special case when .nav-link is inside .nav-item
                                                                                                                       // 3484
        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
      }                                                                                                                // 3486
                                                                                                                       // 3487
      $$$1(this._scrollElement).trigger(Event.ACTIVATE, {                                                              // 3488
        relatedTarget: target                                                                                          // 3489
      });                                                                                                              // 3490
    };                                                                                                                 // 3491
                                                                                                                       // 3492
    _proto._clear = function _clear() {                                                                                // 3493
      $$$1(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);                                      // 3494
    }; // static                                                                                                       // 3495
                                                                                                                       // 3496
                                                                                                                       // 3497
    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {                                                   // 3498
      return this.each(function () {                                                                                   // 3499
        var data = $$$1(this).data(DATA_KEY);                                                                          // 3500
                                                                                                                       // 3501
        var _config = typeof config === 'object' && config;                                                            // 3502
                                                                                                                       // 3503
        if (!data) {                                                                                                   // 3504
          data = new ScrollSpy(this, _config);                                                                         // 3505
          $$$1(this).data(DATA_KEY, data);                                                                             // 3506
        }                                                                                                              // 3507
                                                                                                                       // 3508
        if (typeof config === 'string') {                                                                              // 3509
          if (typeof data[config] === 'undefined') {                                                                   // 3510
            throw new Error("No method named \"" + config + "\"");                                                     // 3511
          }                                                                                                            // 3512
                                                                                                                       // 3513
          data[config]();                                                                                              // 3514
        }                                                                                                              // 3515
      });                                                                                                              // 3516
    };                                                                                                                 // 3517
                                                                                                                       // 3518
    createClass(ScrollSpy, null, [{                                                                                    // 3519
      key: "VERSION",                                                                                                  // 3520
      get: function get() {                                                                                            // 3521
        return VERSION;                                                                                                // 3522
      }                                                                                                                // 3523
    }, {                                                                                                               // 3524
      key: "Default",                                                                                                  // 3525
      get: function get() {                                                                                            // 3526
        return Default;                                                                                                // 3527
      }                                                                                                                // 3528
    }]);                                                                                                               // 3529
    return ScrollSpy;                                                                                                  // 3530
  }();                                                                                                                 // 3531
  /**                                                                                                                  // 3532
   * ------------------------------------------------------------------------                                          // 3533
   * Data Api implementation                                                                                           // 3534
   * ------------------------------------------------------------------------                                          // 3535
   */                                                                                                                  // 3536
                                                                                                                       // 3537
                                                                                                                       // 3538
  $$$1(window).on(Event.LOAD_DATA_API, function () {                                                                   // 3539
    var scrollSpys = $$$1.makeArray($$$1(Selector.DATA_SPY));                                                          // 3540
                                                                                                                       // 3541
    for (var i = scrollSpys.length; i--;) {                                                                            // 3542
      var $spy = $$$1(scrollSpys[i]);                                                                                  // 3543
                                                                                                                       // 3544
      ScrollSpy._jQueryInterface.call($spy, $spy.data());                                                              // 3545
    }                                                                                                                  // 3546
  });                                                                                                                  // 3547
  /**                                                                                                                  // 3548
   * ------------------------------------------------------------------------                                          // 3549
   * jQuery                                                                                                            // 3550
   * ------------------------------------------------------------------------                                          // 3551
   */                                                                                                                  // 3552
                                                                                                                       // 3553
  $$$1.fn[NAME] = ScrollSpy._jQueryInterface;                                                                          // 3554
  $$$1.fn[NAME].Constructor = ScrollSpy;                                                                               // 3555
                                                                                                                       // 3556
  $$$1.fn[NAME].noConflict = function () {                                                                             // 3557
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;                                                                                // 3558
    return ScrollSpy._jQueryInterface;                                                                                 // 3559
  };                                                                                                                   // 3560
                                                                                                                       // 3561
  return ScrollSpy;                                                                                                    // 3562
}($);                                                                                                                  // 3563
                                                                                                                       // 3564
/**                                                                                                                    // 3565
 * --------------------------------------------------------------------------                                          // 3566
 * Bootstrap (v4.0.0-beta.2): tab.js                                                                                   // 3567
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 3568
 * --------------------------------------------------------------------------                                          // 3569
 */                                                                                                                    // 3570
                                                                                                                       // 3571
var Tab = function ($$$1) {                                                                                            // 3572
  /**                                                                                                                  // 3573
   * ------------------------------------------------------------------------                                          // 3574
   * Constants                                                                                                         // 3575
   * ------------------------------------------------------------------------                                          // 3576
   */                                                                                                                  // 3577
  var NAME = 'tab';                                                                                                    // 3578
  var VERSION = '4.0.0-beta.2';                                                                                        // 3579
  var DATA_KEY = 'bs.tab';                                                                                             // 3580
  var EVENT_KEY = "." + DATA_KEY;                                                                                      // 3581
  var DATA_API_KEY = '.data-api';                                                                                      // 3582
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];                                                                              // 3583
  var TRANSITION_DURATION = 150;                                                                                       // 3584
  var Event = {                                                                                                        // 3585
    HIDE: "hide" + EVENT_KEY,                                                                                          // 3586
    HIDDEN: "hidden" + EVENT_KEY,                                                                                      // 3587
    SHOW: "show" + EVENT_KEY,                                                                                          // 3588
    SHOWN: "shown" + EVENT_KEY,                                                                                        // 3589
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY                                                                 // 3590
  };                                                                                                                   // 3591
  var ClassName = {                                                                                                    // 3592
    DROPDOWN_MENU: 'dropdown-menu',                                                                                    // 3593
    ACTIVE: 'active',                                                                                                  // 3594
    DISABLED: 'disabled',                                                                                              // 3595
    FADE: 'fade',                                                                                                      // 3596
    SHOW: 'show'                                                                                                       // 3597
  };                                                                                                                   // 3598
  var Selector = {                                                                                                     // 3599
    DROPDOWN: '.dropdown',                                                                                             // 3600
    NAV_LIST_GROUP: '.nav, .list-group',                                                                               // 3601
    ACTIVE: '.active',                                                                                                 // 3602
    ACTIVE_UL: '> li > .active',                                                                                       // 3603
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',                                    // 3604
    DROPDOWN_TOGGLE: '.dropdown-toggle',                                                                               // 3605
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'                                                                  // 3606
    /**                                                                                                                // 3607
     * ------------------------------------------------------------------------                                        // 3608
     * Class Definition                                                                                                // 3609
     * ------------------------------------------------------------------------                                        // 3610
     */                                                                                                                // 3611
                                                                                                                       // 3612
  };                                                                                                                   // 3613
                                                                                                                       // 3614
  var Tab =                                                                                                            // 3615
  /*#__PURE__*/                                                                                                        // 3616
  function () {                                                                                                        // 3617
    function Tab(element) {                                                                                            // 3618
      this._element = element;                                                                                         // 3619
    } // getters                                                                                                       // 3620
                                                                                                                       // 3621
                                                                                                                       // 3622
    var _proto = Tab.prototype;                                                                                        // 3623
                                                                                                                       // 3624
    // public                                                                                                          // 3625
    _proto.show = function show() {                                                                                    // 3626
      var _this = this;                                                                                                // 3627
                                                                                                                       // 3628
      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $$$1(this._element).hasClass(ClassName.ACTIVE) || $$$1(this._element).hasClass(ClassName.DISABLED)) {
        return;                                                                                                        // 3630
      }                                                                                                                // 3631
                                                                                                                       // 3632
      var target;                                                                                                      // 3633
      var previous;                                                                                                    // 3634
      var listElement = $$$1(this._element).closest(Selector.NAV_LIST_GROUP)[0];                                       // 3635
      var selector = Util.getSelectorFromElement(this._element);                                                       // 3636
                                                                                                                       // 3637
      if (listElement) {                                                                                               // 3638
        var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;                       // 3639
        previous = $$$1.makeArray($$$1(listElement).find(itemSelector));                                               // 3640
        previous = previous[previous.length - 1];                                                                      // 3641
      }                                                                                                                // 3642
                                                                                                                       // 3643
      var hideEvent = $$$1.Event(Event.HIDE, {                                                                         // 3644
        relatedTarget: this._element                                                                                   // 3645
      });                                                                                                              // 3646
      var showEvent = $$$1.Event(Event.SHOW, {                                                                         // 3647
        relatedTarget: previous                                                                                        // 3648
      });                                                                                                              // 3649
                                                                                                                       // 3650
      if (previous) {                                                                                                  // 3651
        $$$1(previous).trigger(hideEvent);                                                                             // 3652
      }                                                                                                                // 3653
                                                                                                                       // 3654
      $$$1(this._element).trigger(showEvent);                                                                          // 3655
                                                                                                                       // 3656
      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {                                          // 3657
        return;                                                                                                        // 3658
      }                                                                                                                // 3659
                                                                                                                       // 3660
      if (selector) {                                                                                                  // 3661
        target = $$$1(selector)[0];                                                                                    // 3662
      }                                                                                                                // 3663
                                                                                                                       // 3664
      this._activate(this._element, listElement);                                                                      // 3665
                                                                                                                       // 3666
      var complete = function complete() {                                                                             // 3667
        var hiddenEvent = $$$1.Event(Event.HIDDEN, {                                                                   // 3668
          relatedTarget: _this._element                                                                                // 3669
        });                                                                                                            // 3670
        var shownEvent = $$$1.Event(Event.SHOWN, {                                                                     // 3671
          relatedTarget: previous                                                                                      // 3672
        });                                                                                                            // 3673
        $$$1(previous).trigger(hiddenEvent);                                                                           // 3674
        $$$1(_this._element).trigger(shownEvent);                                                                      // 3675
      };                                                                                                               // 3676
                                                                                                                       // 3677
      if (target) {                                                                                                    // 3678
        this._activate(target, target.parentNode, complete);                                                           // 3679
      } else {                                                                                                         // 3680
        complete();                                                                                                    // 3681
      }                                                                                                                // 3682
    };                                                                                                                 // 3683
                                                                                                                       // 3684
    _proto.dispose = function dispose() {                                                                              // 3685
      $$$1.removeData(this._element, DATA_KEY);                                                                        // 3686
      this._element = null;                                                                                            // 3687
    }; // private                                                                                                      // 3688
                                                                                                                       // 3689
                                                                                                                       // 3690
    _proto._activate = function _activate(element, container, callback) {                                              // 3691
      var _this2 = this;                                                                                               // 3692
                                                                                                                       // 3693
      var activeElements;                                                                                              // 3694
                                                                                                                       // 3695
      if (container.nodeName === 'UL') {                                                                               // 3696
        activeElements = $$$1(container).find(Selector.ACTIVE_UL);                                                     // 3697
      } else {                                                                                                         // 3698
        activeElements = $$$1(container).children(Selector.ACTIVE);                                                    // 3699
      }                                                                                                                // 3700
                                                                                                                       // 3701
      var active = activeElements[0];                                                                                  // 3702
      var isTransitioning = callback && Util.supportsTransitionEnd() && active && $$$1(active).hasClass(ClassName.FADE);
                                                                                                                       // 3704
      var complete = function complete() {                                                                             // 3705
        return _this2._transitionComplete(element, active, isTransitioning, callback);                                 // 3706
      };                                                                                                               // 3707
                                                                                                                       // 3708
      if (active && isTransitioning) {                                                                                 // 3709
        $$$1(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);                     // 3710
      } else {                                                                                                         // 3711
        complete();                                                                                                    // 3712
      }                                                                                                                // 3713
                                                                                                                       // 3714
      if (active) {                                                                                                    // 3715
        $$$1(active).removeClass(ClassName.SHOW);                                                                      // 3716
      }                                                                                                                // 3717
    };                                                                                                                 // 3718
                                                                                                                       // 3719
    _proto._transitionComplete = function _transitionComplete(element, active, isTransitioning, callback) {            // 3720
      if (active) {                                                                                                    // 3721
        $$$1(active).removeClass(ClassName.ACTIVE);                                                                    // 3722
        var dropdownChild = $$$1(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];                           // 3723
                                                                                                                       // 3724
        if (dropdownChild) {                                                                                           // 3725
          $$$1(dropdownChild).removeClass(ClassName.ACTIVE);                                                           // 3726
        }                                                                                                              // 3727
                                                                                                                       // 3728
        if (active.getAttribute('role') === 'tab') {                                                                   // 3729
          active.setAttribute('aria-selected', false);                                                                 // 3730
        }                                                                                                              // 3731
      }                                                                                                                // 3732
                                                                                                                       // 3733
      $$$1(element).addClass(ClassName.ACTIVE);                                                                        // 3734
                                                                                                                       // 3735
      if (element.getAttribute('role') === 'tab') {                                                                    // 3736
        element.setAttribute('aria-selected', true);                                                                   // 3737
      }                                                                                                                // 3738
                                                                                                                       // 3739
      if (isTransitioning) {                                                                                           // 3740
        Util.reflow(element);                                                                                          // 3741
        $$$1(element).addClass(ClassName.SHOW);                                                                        // 3742
      } else {                                                                                                         // 3743
        $$$1(element).removeClass(ClassName.FADE);                                                                     // 3744
      }                                                                                                                // 3745
                                                                                                                       // 3746
      if (element.parentNode && $$$1(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {                          // 3747
        var dropdownElement = $$$1(element).closest(Selector.DROPDOWN)[0];                                             // 3748
                                                                                                                       // 3749
        if (dropdownElement) {                                                                                         // 3750
          $$$1(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);                             // 3751
        }                                                                                                              // 3752
                                                                                                                       // 3753
        element.setAttribute('aria-expanded', true);                                                                   // 3754
      }                                                                                                                // 3755
                                                                                                                       // 3756
      if (callback) {                                                                                                  // 3757
        callback();                                                                                                    // 3758
      }                                                                                                                // 3759
    }; // static                                                                                                       // 3760
                                                                                                                       // 3761
                                                                                                                       // 3762
    Tab._jQueryInterface = function _jQueryInterface(config) {                                                         // 3763
      return this.each(function () {                                                                                   // 3764
        var $this = $$$1(this);                                                                                        // 3765
        var data = $this.data(DATA_KEY);                                                                               // 3766
                                                                                                                       // 3767
        if (!data) {                                                                                                   // 3768
          data = new Tab(this);                                                                                        // 3769
          $this.data(DATA_KEY, data);                                                                                  // 3770
        }                                                                                                              // 3771
                                                                                                                       // 3772
        if (typeof config === 'string') {                                                                              // 3773
          if (typeof data[config] === 'undefined') {                                                                   // 3774
            throw new Error("No method named \"" + config + "\"");                                                     // 3775
          }                                                                                                            // 3776
                                                                                                                       // 3777
          data[config]();                                                                                              // 3778
        }                                                                                                              // 3779
      });                                                                                                              // 3780
    };                                                                                                                 // 3781
                                                                                                                       // 3782
    createClass(Tab, null, [{                                                                                          // 3783
      key: "VERSION",                                                                                                  // 3784
      get: function get() {                                                                                            // 3785
        return VERSION;                                                                                                // 3786
      }                                                                                                                // 3787
    }]);                                                                                                               // 3788
    return Tab;                                                                                                        // 3789
  }();                                                                                                                 // 3790
  /**                                                                                                                  // 3791
   * ------------------------------------------------------------------------                                          // 3792
   * Data Api implementation                                                                                           // 3793
   * ------------------------------------------------------------------------                                          // 3794
   */                                                                                                                  // 3795
                                                                                                                       // 3796
                                                                                                                       // 3797
  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {                                     // 3798
    event.preventDefault();                                                                                            // 3799
                                                                                                                       // 3800
    Tab._jQueryInterface.call($$$1(this), 'show');                                                                     // 3801
  });                                                                                                                  // 3802
  /**                                                                                                                  // 3803
   * ------------------------------------------------------------------------                                          // 3804
   * jQuery                                                                                                            // 3805
   * ------------------------------------------------------------------------                                          // 3806
   */                                                                                                                  // 3807
                                                                                                                       // 3808
  $$$1.fn[NAME] = Tab._jQueryInterface;                                                                                // 3809
  $$$1.fn[NAME].Constructor = Tab;                                                                                     // 3810
                                                                                                                       // 3811
  $$$1.fn[NAME].noConflict = function () {                                                                             // 3812
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;                                                                                // 3813
    return Tab._jQueryInterface;                                                                                       // 3814
  };                                                                                                                   // 3815
                                                                                                                       // 3816
  return Tab;                                                                                                          // 3817
}($);                                                                                                                  // 3818
                                                                                                                       // 3819
/**                                                                                                                    // 3820
 * --------------------------------------------------------------------------                                          // 3821
 * Bootstrap (v4.0.0-alpha.6): index.js                                                                                // 3822
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 3823
 * --------------------------------------------------------------------------                                          // 3824
 */                                                                                                                    // 3825
                                                                                                                       // 3826
(function ($$$1) {                                                                                                     // 3827
  if (typeof $$$1 === 'undefined') {                                                                                   // 3828
    throw new Error('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
  }                                                                                                                    // 3830
                                                                                                                       // 3831
  var version = $$$1.fn.jquery.split(' ')[0].split('.');                                                               // 3832
  var minMajor = 1;                                                                                                    // 3833
  var ltMajor = 2;                                                                                                     // 3834
  var minMinor = 9;                                                                                                    // 3835
  var minPatch = 1;                                                                                                    // 3836
  var maxMajor = 4;                                                                                                    // 3837
                                                                                                                       // 3838
  if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');                   // 3840
  }                                                                                                                    // 3841
})($);                                                                                                                 // 3842
                                                                                                                       // 3843
exports.Util = Util;                                                                                                   // 3844
exports.Alert = Alert;                                                                                                 // 3845
exports.Button = Button;                                                                                               // 3846
exports.Carousel = Carousel;                                                                                           // 3847
exports.Collapse = Collapse;                                                                                           // 3848
exports.Dropdown = Dropdown;                                                                                           // 3849
exports.Modal = Modal;                                                                                                 // 3850
exports.Popover = Popover;                                                                                             // 3851
exports.Scrollspy = ScrollSpy;                                                                                         // 3852
exports.Tab = Tab;                                                                                                     // 3853
exports.Tooltip = Tooltip;                                                                                             // 3854
                                                                                                                       // 3855
return exports;                                                                                                        // 3856
                                                                                                                       // 3857
}({},jQuery,Popper));                                                                                                  // 3858
//# sourceMappingURL=bootstrap.js.map                                                                                  // 3859
                                                                                                                       // 3860
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['alexwine:bootstrap-4'] = {};

})();
