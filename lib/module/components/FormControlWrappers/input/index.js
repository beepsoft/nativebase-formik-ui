function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { Input } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React from 'react';
import { getLayoutProps } from '../../../utils';
import { FormControl } from '../../form-control';
export const InputControl = props => {
  const {
    name,
    label,
    inputProps,
    ...rest
  } = props;
  const [field] = useField(name);
  const {
    handleChange,
    handleBlur,
    setFieldTouched
  } = useFormikContext();
  const [layoutProps, remainingProps] = getLayoutProps(rest);
  const defaultProps = {
    mt: 2
  };
  return /*#__PURE__*/React.createElement(FormControl, _extends({
    name: name,
    label: label
  }, layoutProps), /*#__PURE__*/React.createElement(Input, _extends({
    value: field.value
  }, inputProps, defaultProps, remainingProps, {
    onChangeText: handleChange(name),
    onBlur: () => {
      setFieldTouched(name);
      handleBlur(name);
    }
  })));
};
export default InputControl;
//# sourceMappingURL=index.js.map