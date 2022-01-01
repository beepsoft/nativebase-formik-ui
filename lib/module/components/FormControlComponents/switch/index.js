function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { Switch as NBSwitch } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React from 'react';
export const Switch = props => {
  const {
    name,
    switchProps,
    ...rest
  } = props;
  const {
    setFieldValue
  } = useFormikContext();
  const [field, {
    error
  }] = useField(name);
  return /*#__PURE__*/React.createElement(NBSwitch, _extends({
    isInvalid: !!error,
    isChecked: field.value,
    value: field.value,
    onToggle: () => {
      setFieldValue(name, !field.value);
    }
  }, rest, switchProps));
};
export default Switch;
//# sourceMappingURL=index.js.map