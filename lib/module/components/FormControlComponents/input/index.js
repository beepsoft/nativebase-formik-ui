function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { Input as NBInput } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React from 'react';
export const Input = props => {
  const {
    name,
    inputProps,
    ...rest
  } = props;
  const [field] = useField(name);
  const {
    handleChange,
    handleBlur,
    setFieldTouched
  } = useFormikContext();
  return /*#__PURE__*/React.createElement(NBInput, _extends({
    value: field.value
  }, inputProps, rest, {
    onChangeText: handleChange(name),
    onBlur: () => {
      setFieldTouched(name);
      handleBlur(name);
    }
  }));
};
export default Input;
//# sourceMappingURL=index.js.map