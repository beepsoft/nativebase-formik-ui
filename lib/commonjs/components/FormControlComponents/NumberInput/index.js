"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "NumberInputStepper", {
  enumerable: true,
  get: function () {
    return _nativeBase.NumberInputStepper;
  }
});
Object.defineProperty(exports, "NumberIncrementStepper", {
  enumerable: true,
  get: function () {
    return _nativeBase.NumberIncrementStepper;
  }
});
Object.defineProperty(exports, "NumberDecrementStepper", {
  enumerable: true,
  get: function () {
    return _nativeBase.NumberDecrementStepper;
  }
});
exports.default = exports.NumberInput = void 0;

var _nativeBase = require("native-base");

var _formik = require("formik");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const NumberInput = props => {
  const {
    name,
    children,
    numberInputProps,
    numberInputFieldProps,
    ...rest
  } = props;
  const [field, {
    error
  }] = (0, _formik.useField)(name);
  const {
    handleChange
  } = (0, _formik.useFormikContext)();
  return /*#__PURE__*/_react.default.createElement(_nativeBase.NumberInput, _extends({
    value: field.value
  }, numberInputProps, rest), /*#__PURE__*/_react.default.createElement(_nativeBase.NumberInputField, _extends({
    isInvalid: !!error,
    onChange: handleChange(name)
  }, numberInputFieldProps)), children);
};

exports.NumberInput = NumberInput;
var _default = NumberInput;
exports.default = _default;
//# sourceMappingURL=index.js.map