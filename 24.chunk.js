webpackJsonp([24],{104:/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/boilerplates/hyperapp/codepan.js ***!
  \************************************************************************//*! dynamic exports provided *//*! all exports used */function(a){a.exports="/* @jsx h */\nconst { h, app } = hyperapp\n\nconst state = {\n  count: 0\n}\n\nconst actions = {\n  down: () => state => ({ count: state.count - 1 }),\n  up: () => state => ({ count: state.count + 1 })\n}\n\nconst view = (state, actions) => (\n  <main>\n    <h1>{state.count}</h1>\n    <button onclick={actions.down}>-</button>\n    <button onclick={actions.up}>+</button>\n  </main>\n)\n\nconst main = app(state, actions, view, document.body)\n"}});