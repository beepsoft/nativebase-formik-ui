function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { NumberInput as NBNumberInput, NumberInputField } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React from 'react';
import { FormControl } from '../../form-control';
import { NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from 'native-base';
import { getLayoutProps } from '../../../utils';
export const NumberInputControl = props => {
  const {
    name,
    label,
    children,
    numberInputProps,
    numberInputFieldProps,
    ...rest
  } = props;
  const [field, {
    error
  }] = useField(name);
  const [layoutProps, remainingProps] = getLayoutProps(rest);
  const {
    handleChange
  } = useFormikContext();
  const defaultProps = {
    mt: 2
  };
  return /*#__PURE__*/React.createElement(FormControl, _extends({
    name: name,
    label: label
  }, layoutProps), /*#__PURE__*/React.createElement(NBNumberInput, _extends({
    value: field.value
  }, defaultProps, numberInputProps, remainingProps, {
    handleChange: () => handleChange(name)
  }), /*#__PURE__*/React.createElement(NumberInputField, _extends({
    isInvalid: !!error // onChange={}

  }, numberInputFieldProps)), children));
};
export { NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper };
export default NumberInputControl;
//# sourceMappingURL=index.js.map