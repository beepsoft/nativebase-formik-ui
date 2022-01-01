"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ButtonGroup", {
  enumerable: true,
  get: function () {
    return _nativeBase.ButtonGroup;
  }
});
exports.default = exports.ResetButton = void 0;

var _nativeBase = require("native-base");

var _formik = require("formik");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ResetButton = props => {
  const {
    children,
    ...rest
  } = props;
  const {
    isSubmitting,
    dirty,
    resetForm
  } = (0, _formik.useFormikContext)();
  return /*#__PURE__*/_react.default.createElement(_nativeBase.Button, _extends({
    onPress: () => resetForm(),
    isDisabled: isSubmitting || !dirty
  }, rest), children);
};

exports.ResetButton = ResetButton;
var _default = ResetButton;
exports.default = _default;
//# sourceMappingURL=index.js.map