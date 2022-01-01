"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;

var _nativeBase = require("native-base");

var _formik = require("formik");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Checkbox = props => {
  const {
    name,
    children,
    checkBoxProps,
    ...rest
  } = props;
  const {
    setFieldValue,
    setFieldTouched,
    handleBlur
  } = (0, _formik.useFormikContext)();
  const [field, {
    error
  }] = (0, _formik.useField)(name);
  const isChecked = field.value;
  return /*#__PURE__*/_react.default.createElement(_nativeBase.Checkbox, _extends({
    isInvalid: !!error,
    isChecked: isChecked,
    value: field.value,
    onChange: () => {
      setFieldValue(name, !field.value);
    },
    onBlur: () => {
      setFieldTouched(name);
      handleBlur(name);
    }
  }, checkBoxProps, rest), children);
};

exports.Checkbox = Checkbox;
//# sourceMappingURL=index.js.map