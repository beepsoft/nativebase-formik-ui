"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Select", {
  enumerable: true,
  get: function () {
    return _nativeBase.Select;
  }
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function () {
    return _nativeBase.Icon;
  }
});
exports.default = exports.SelectFormik = void 0;

var _nativeBase = require("native-base");

var _formik = require("formik");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SelectFormik = props => {
  const {
    name,
    selectProps,
    children,
    ...rest
  } = props;
  const [field] = (0, _formik.useField)(name);
  const {
    handleChange,
    setFieldTouched,
    handleBlur
  } = (0, _formik.useFormikContext)();
  return (
    /*#__PURE__*/
    // <FormControl name={name} {...rest}>
    _react.default.createElement(_nativeBase.Select, _extends({
      selectedValue: field.value,
      onValueChange: handleChange(name),
      onFocus: () => {
        setFieldTouched(name);
        handleBlur(name);
      }
    }, selectProps, rest), children) // </FormControl>

  );
};

exports.SelectFormik = SelectFormik;
var _default = SelectFormik;
exports.default = _default;
//# sourceMappingURL=index.js.map