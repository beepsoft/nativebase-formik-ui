function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { Select as NBSelect } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React from 'react';
import { FormControl } from '../../form-control';
import { getLayoutProps } from '../../../utils';
import { Select, Icon } from 'native-base';
export const SelectControl = props => {
  const {
    name,
    selectProps,
    children,
    label,
    ...rest
  } = props;
  const [field] = useField(name);
  const {
    handleChange,
    setFieldTouched,
    handleBlur
  } = useFormikContext();
  const [layoutProps, remainingProps] = getLayoutProps(rest);
  const defaultProps = {
    mt: 2
  };
  return /*#__PURE__*/React.createElement(FormControl, _extends({
    name: name,
    label: label
  }, layoutProps), /*#__PURE__*/React.createElement(NBSelect, _extends({
    selectedValue: field.value,
    onValueChange: handleChange(name),
    onFocus: () => {
      setFieldTouched(name);
      handleBlur(name);
    }
  }, defaultProps, selectProps, remainingProps), children));
};
export { Select, Icon };
export default SelectControl;
//# sourceMappingURL=index.js.map