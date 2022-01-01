"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Slider = void 0;

var _nativeBase = require("native-base");

var _formik = require("formik");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Slider = props => {
  const {
    name,
    children,
    sliderProps,
    ...rest
  } = props;
  const [field] = (0, _formik.useField)(name);
  const {
    setFieldValue
  } = (0, _formik.useFormikContext)();
  return /*#__PURE__*/_react.default.createElement(_nativeBase.Slider, _extends({
    defaultValue: field.value,
    onChange: v => {
      setFieldValue(name, v);
    }
  }, sliderProps, rest), children);
};

exports.Slider = Slider;
var _default = Slider;
exports.default = _default;
//# sourceMappingURL=Slider.js.map