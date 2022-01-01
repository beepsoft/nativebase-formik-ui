function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { Button } from 'native-base';
import { useFormikContext } from 'formik';
import React from 'react';
import { ButtonGroup } from 'native-base';
export const ResetButton = props => {
  const {
    children,
    ...rest
  } = props;
  const {
    isSubmitting,
    dirty,
    resetForm
  } = useFormikContext();
  return /*#__PURE__*/React.createElement(Button, _extends({
    onPress: () => resetForm(),
    isDisabled: isSubmitting || !dirty
  }, rest), children);
};
export { ButtonGroup };
export default ResetButton;
//# sourceMappingURL=index.js.map