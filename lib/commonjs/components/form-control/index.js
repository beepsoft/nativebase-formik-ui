"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormControl = void 0;

var _nativeBase = require("native-base");

var _formik = require("formik");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const FormControl = props => {
  const {
    children,
    name,
    label,
    helper,
    ...rest
  } = props;
  const [, {
    error
  }] = (0, _formik.useField)(name);
  const {
    isSubmitting
  } = (0, _formik.useFormikContext)();
  return /*#__PURE__*/_react.default.createElement(_nativeBase.FormControl, _extends({
    isInvalid: !!error,
    isDisable: isSubmitting
  }, rest), label && /*#__PURE__*/_react.default.createElement(_nativeBase.FormControl.Label, null, label), children, helper && /*#__PURE__*/_react.default.createElement(_nativeBase.FormControl.HelperText, null, helper), error && /*#__PURE__*/_react.default.createElement(_nativeBase.FormControl.ErrorMessage, null, error));
};

exports.FormControl = FormControl;
var _default = FormControl;
exports.default = _default;
//# sourceMappingURL=index.js.map