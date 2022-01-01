function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { Switch } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React from 'react';
import { FormControl } from '../../form-control';
import { getLayoutProps } from '../../../utils';
export const SwitchControl = props => {
  const {
    name,
    label,
    switchProps,
    ...rest
  } = props;
  const {
    setFieldValue
  } = useFormikContext();
  const [field, {
    error
  }] = useField(name);
  const defaultProps = {
    mt: 2
  };
  const [layoutProps, remainingProps] = getLayoutProps(rest);
  return /*#__PURE__*/React.createElement(FormControl, _extends({
    name: name,
    label: label
  }, layoutProps), /*#__PURE__*/React.createElement(Switch, _extends({
    isInvalid: !!error,
    isChecked: field.value,
    value: field.value,
    onToggle: () => {
      setFieldValue(name, !field.value);
    }
  }, defaultProps, remainingProps, switchProps)));
};
export default SwitchControl;
//# sourceMappingURL=index.js.map