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
exports.default = exports.RadioGroupControl = void 0;

var _formik = require("formik");

var _react = _interopRequireDefault(require("react"));

var _formControl = require("../../form-control");

var _nativeBase = require("native-base");

var _utils = require("../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const RadioGroupControl = props => {
  const {
    name,
    label,
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

  const [layoutProps, remainingProps] = (0, _utils.getLayoutProps)(rest);
  const defaultProps = {
    mt: 2
  };
  return /*#__PURE__*/_react.default.createElement(_formControl.FormControl, _extends({
    name: name,
    label: label
  }, layoutProps), /*#__PURE__*/_react.default.createElement(_nativeBase.Radio.Group, _extends({
    value: field.value,
    onChange: handleChange
  }, defaultProps, radioGroupProps, remainingProps), children));
};

exports.RadioGroupControl = RadioGroupControl;
var _default = RadioGroupControl;
exports.default = _default;
//# sourceMappingURL=index.js.map