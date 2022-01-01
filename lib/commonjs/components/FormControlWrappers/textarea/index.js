"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TextAreaControl = void 0;

var _nativeBase = require("native-base");

var _formik = require("formik");

var _react = _interopRequireDefault(require("react"));

var _formControl = require("../../form-control");

var _utils = require("../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const TextAreaControl = props => {
  const {
    name,
    TextAreaProps,
    label,
    ...rest
  } = props;
  const [field] = (0, _formik.useField)(name);
  const {
    handleChange,
    handleBlur,
    setFieldTouched
  } = (0, _formik.useFormikContext)();
  const [layoutProps, remainingProps] = (0, _utils.getLayoutProps)(rest);
  const defaultProps = {
    mt: 2
  };
  return /*#__PURE__*/_react.default.createElement(_formControl.FormControl, _extends({
    name: name,
    label: label
  }, layoutProps), /*#__PURE__*/_react.default.createElement(_nativeBase.TextArea, _extends({
    value: field.value
  }, TextAreaProps, defaultProps, remainingProps, {
    onChangeText: handleChange(name),
    onBlur: () => {
      setFieldTouched(name);
      handleBlur(name);
    }
  })));
};

exports.TextAreaControl = TextAreaControl;
var _default = TextAreaControl;
exports.default = _default;
//# sourceMappingURL=index.js.map