"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Box: true,
  Text: true
};
Object.defineProperty(exports, "Box", {
  enumerable: true,
  get: function () {
    return _nativeBase.Box;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function () {
    return _nativeBase.Text;
  }
});

var _FormControlWrappers = require("./FormControlWrappers");

Object.keys(_FormControlWrappers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _FormControlWrappers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _FormControlWrappers[key];
    }
  });
});

var _formControl = require("./form-control");

Object.keys(_formControl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _formControl[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _formControl[key];
    }
  });
});

var _FormControlComponents = require("./FormControlComponents");

Object.keys(_FormControlComponents).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _FormControlComponents[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _FormControlComponents[key];
    }
  });
});

var _nativeBase = require("native-base");
//# sourceMappingURL=index.js.map