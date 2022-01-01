function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { PinInput } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React from 'react';
import { FormControl } from '../../form-control';
import { getLayoutProps } from '../../../utils';
export const PinInputControl = props => {
  const {
    name,
    children,
    label,
    pinInputProps,
    ...rest
  } = props;
  const [field] = useField(name);
  const {
    handleChange
  } = useFormikContext();
  const [layoutProps, remainingProps] = getLayoutProps(rest);
  const defaultProps = {
    mt: 2
  };
  return /*#__PURE__*/React.createElement(FormControl, _extends({
    name: name,
    label: label
  }, layoutProps), /*#__PURE__*/React.createElement(PinInput, _extends({
    value: field.value
  }, pinInputProps, defaultProps, {
    onChange: handleChange(name)
  }, remainingProps), children));
};
export default PinInputControl;
//# sourceMappingURL=index.js.map