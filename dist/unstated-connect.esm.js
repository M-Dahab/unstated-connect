import React from 'react';
import { Subscribe } from 'unstated';
import { extends } from ' babelHelpers';

var connect = (function (_containers) {
  return function (component) {
    return function Connect(props) {
      return React.createElement(
        Subscribe,
        { to: _containers },
        function () {
          for (var _len = arguments.length, containers = Array(_len), _key = 0; _key < _len; _key++) {
            containers[_key] = arguments[_key];
          }

          return React.createElement(component, extends({ containers: containers }, props));
        }
      );
    };
  };
});

export default connect;
