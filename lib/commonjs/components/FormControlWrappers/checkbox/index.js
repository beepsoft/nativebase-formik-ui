"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxControl = void 0;

var _nativeBase = require("native-base");

var _formik = require("formik");

var _react = _interopRequireDefault(require("react"));

var _formControl = require("../../form-control");

var _utils = require("../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CheckboxControl = props => {
  const {
    name,
    label,
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
  const [layoutProps, remainingProps] = (0, _utils.getLayoutProps)(rest);
  const defaultProps = {
    mt: 2
  };
  return /*#__PURE__*/_react.default.createElement(_formControl.FormControl, _extends({
    name: name,
    label: label
  }, layoutProps), /*#__PURE__*/_react.default.createElement(_nativeBase.Checkbox, _extends({
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
  }, defaultProps, checkBoxProps, remainingProps), children));
};

exports.CheckboxControl = CheckboxControl;
//# sourceMappingURL=index.js.map