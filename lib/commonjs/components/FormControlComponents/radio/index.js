"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Radio", {
  enumerable: true,
  get: function () {
    return _nativeBase.Radio;
  }
});
Object.defineProperty(exports, "HStack", {
  enumerable: true,
  get: function () {
    return _nativeBase.HStack;
  }
});
Object.defineProperty(exports, "VStack", {
  enumerable: true,
  get: function () {
    return _nativeBase.VStack;
  }
});
Object.defineProperty(exports, "Stack", {
  enumerable: true,
  get: function () {
    return _nativeBase.Stack;
  }
});
exports.default = exports.RadioGroup = void 0;

var _formik = require("formik");

var _react = _interopRequireDefault(require("react"));

var _nativeBase = require("native-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const RadioGroup = props => {
  const {
    name,
    radioGroupProps,
    children,
    ...rest
  } = props;
  const [field] = (0, _formik.useField)(name);
  const {
    setFieldValue
  } = (0, _formik.useFormikContext)();

  const handleChange = value => {
    setFieldValue(name, value);
  };

  return /*#__PURE__*/_react.default.createElement(_nativeBase.Radio.Group, _extends({
    value: field.value,
    onChange: handleChange
  }, radioGroupProps, rest), children);
};

exports.RadioGroup = RadioGroup;
var _default = RadioGroup;
exports.default = _default;
//# sourceMappingURL=index.js.map