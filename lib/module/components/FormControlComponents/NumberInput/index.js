function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { NumberInput as NBNumberInput, NumberInputField } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React from 'react';
import { NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from 'native-base';
export const NumberInput = props => {
  const {
    name,
    children,
    numberInputProps,
    numberInputFieldProps,
    ...rest
  } = props;
  const [field, {
    error
  }] = useField(name);
  const {
    handleChange
  } = useFormikContext();
  return /*#__PURE__*/React.createElement(NBNumberInput, _extends({
    value: field.value
  }, numberInputProps, rest), /*#__PURE__*/React.createElement(NumberInputField, _extends({
    isInvalid: !!error,
    onChange: handleChange(name)
  }, numberInputFieldProps)), children);
};
export { NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper };
export default NumberInput;
//# sourceMappingURL=index.js.map