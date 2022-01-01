function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { FormControl as NBFormControl } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React from 'react';
export const FormControl = props => {
  const {
    children,
    name,
    label,
    helper,
    ...rest
  } = props;
  const [, {
    error
  }] = useField(name);
  const {
    isSubmitting
  } = useFormikContext();
  return /*#__PURE__*/React.createElement(NBFormControl, _extends({
    isInvalid: !!error,
    isDisable: isSubmitting
  }, rest), label && /*#__PURE__*/React.createElement(NBFormControl.Label, null, label), children, helper && /*#__PURE__*/React.createElement(NBFormControl.HelperText, null, helper), error && /*#__PURE__*/React.createElement(NBFormControl.ErrorMessage, null, error));
};
export default FormControl;
//# sourceMappingURL=index.js.map