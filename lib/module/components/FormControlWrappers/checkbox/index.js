function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { Checkbox } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React from 'react';
import { FormControl } from '../../form-control';
import { getLayoutProps } from '../../../utils';
export const CheckboxControl = props => {
  const {
    name,
    label,
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
  const [layoutProps, remainingProps] = getLayoutProps(rest);
  const defaultProps = {
    mt: 2
  };
  return /*#__PURE__*/React.createElement(FormControl, _extends({
    name: name,
    label: label
  }, layoutProps), /*#__PURE__*/React.createElement(Checkbox, _extends({
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
  }, defaultProps, checkBoxProps, remainingProps), children));
};
//# sourceMappingURL=index.js.map