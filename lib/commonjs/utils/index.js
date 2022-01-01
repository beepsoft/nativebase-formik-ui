"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getLayoutProps = require("./getLayoutProps");

Object.keys(_getLayoutProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getLayoutProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getLayoutProps[key];
    }
  });
});
//# sourceMappingURL=index.js.map