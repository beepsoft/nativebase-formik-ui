function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { Checkbox as NBCheckbox } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React from 'react';
export const Checkbox = props => {
  const {
    name,
    children,
    checkBoxProps,
    ...rest
  } = props;
  const {
    setFieldValue,
    setFieldTouched,
    handleBlur
  } = useFormikContext();
  const [field, {
    error
  }] = useField(name);
  const isChecked = field.value;
  return /*#__PURE__*/React.createElement(NBCheckbox, _extends({
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
  }, checkBoxProps, rest), children);
};
//# sourceMappingURL=index.js.map