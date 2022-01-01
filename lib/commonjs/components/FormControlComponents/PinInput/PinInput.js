"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PinInput = void 0;

var _nativeBase = require("native-base");

var _formik = require("formik");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const PinInput = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    name,
    children,
    pinInputProps,
    ...rest
  } = props;
  const [field, {
    error
  }] = (0, _formik.useField)(name);
  const {
    handleChange
  } = (0, _formik.useFormikContext)();
  return /*#__PURE__*/_react.default.createElement(_nativeBase.PinInput, _extends({
    isInvalid: !!error,
    onChange: handleChange(name),
    value: field.value
  }, pinInputProps, rest, {
    ref: ref
  }), children);
});

exports.PinInput = PinInput;

var _default = /*#__PURE__*/_react.default.memo(PinInput);

exports.default = _default;
//# sourceMappingURL=PinInput.js.map