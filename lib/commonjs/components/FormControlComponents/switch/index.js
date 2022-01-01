"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Switch = void 0;

var _nativeBase = require("native-base");

var _formik = require("formik");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Switch = props => {
  const {
    name,
    switchProps,
    ...rest
  } = props;
  const {
    setFieldValue
  } = (0, _formik.useFormikContext)();
  const [field, {
    error
  }] = (0, _formik.useField)(name);
  return /*#__PURE__*/_react.default.createElement(_nativeBase.Switch, _extends({
    isInvalid: !!error,
    isChecked: field.value,
    value: field.value,
    onToggle: () => {
      setFieldValue(name, !field.value);
    }
  }, rest, switchProps));
};

exports.Switch = Switch;
var _default = Switch;
exports.default = _default;
//# sourceMappingURL=index.js.map