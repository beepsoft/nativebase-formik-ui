"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SubmitButton = void 0;

var _nativeBase = require("native-base");

var _formik = require("formik");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SubmitButton = props => {
  const {
    children,
    ...rest
  } = props;
  const {
    isSubmitting,
    handleSubmit
  } = (0, _formik.useFormikContext)();
  return /*#__PURE__*/_react.default.createElement(_nativeBase.Button, _extends({
    isLoading: isSubmitting,
    onPress: handleSubmit
  }, rest), children);
};

exports.SubmitButton = SubmitButton;
var _default = SubmitButton;
exports.default = _default;
//# sourceMappingURL=index.js.map