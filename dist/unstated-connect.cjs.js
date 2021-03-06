'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var unstated = require('unstated');
var babelHelpers = require(' babelHelpers');

var connect = (function (_containers) {
  return function (component) {
    return function Connect(props) {
      return React.createElement(
        unstated.Subscribe,
        { to: _containers },
        function () {
          for (var _len = arguments.length, containers = Array(_len), _key = 0; _key < _len; _key++) {
            containers[_key] = arguments[_key];
          }

          return React.createElement(component, babelHelpers.extends({ containers: containers }, props));
        }
      );
    };
  };
});

module.exports = connect;
