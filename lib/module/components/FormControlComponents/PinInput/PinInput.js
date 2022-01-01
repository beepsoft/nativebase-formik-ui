function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { PinInput as NBPinInput } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React from 'react';
export const PinInput = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    name,
    children,
    pinInputProps,
    ...rest
  } = props;
  const [field, {
    error
  }] = useField(name);
  const {
    handleChange
  } = useFormikContext();
  return /*#__PURE__*/React.createElement(NBPinInput, _extends({
    isInvalid: !!error,
    onChange: handleChange(name),
    value: field.value
  }, pinInputProps, rest, {
    ref: ref
  }), children);
});
export default /*#__PURE__*/React.memo(PinInput);
//# sourceMappingURL=PinInput.js.map