function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { Button } from 'native-base';
import { useFormikContext } from 'formik';
import React from 'react';
export const SubmitButton = props => {
  const {
    children,
    ...rest
  } = props;
  const {
    isSubmitting,
    handleSubmit
  } = useFormikContext();
  return /*#__PURE__*/React.createElement(Button, _extends({
    isLoading: isSubmitting,
    onPress: handleSubmit
  }, rest), children);
};
export default SubmitButton;
//# sourceMappingURL=index.js.map