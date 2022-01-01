function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { useField, useFormikContext } from 'formik';
import React from 'react';
import { Radio, HStack, VStack, Stack } from 'native-base';
export const RadioGroup = props => {
  const {
    name,
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

  return /*#__PURE__*/React.createElement(Radio.Group, _extends({
    value: field.value,
    onChange: handleChange
  }, radioGroupProps, rest), children);
};
export { Radio, HStack, VStack, Stack };
export default RadioGroup;
//# sourceMappingURL=index.js.map