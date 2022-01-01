function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { useField, useFormikContext } from 'formik';
import React from 'react';
import { FormControl } from '../../form-control';
import { Radio, HStack, VStack, Stack } from 'native-base';
import { getLayoutProps } from '../../../utils';
export const RadioGroupControl = props => {
  const {
    name,
    label,
    radioGroupProps,
    children,
    ...rest
  } = props;
  const [field] = useField(name);
  const {
    setFieldValue
  } = useFormikContext();

  const handleChange = value => {
    setFieldValue(name, value);
  };

  const [layoutProps, remainingProps] = getLayoutProps(rest);
  const defaultProps = {
    mt: 2
  };
  return /*#__PURE__*/React.createElement(FormControl, _extends({
    name: name,
    label: label
  }, layoutProps), /*#__PURE__*/React.createElement(Radio.Group, _extends({
    value: field.value,
    onChange: handleChange
  }, defaultProps, radioGroupProps, remainingProps), children));
};
export { Radio, HStack, VStack, Stack };
export default RadioGroupControl;
//# sourceMappingURL=index.js.map