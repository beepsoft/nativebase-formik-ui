function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { Select as NBSelect } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React from 'react';
// import { FormControl } from '../form-control';
import { Select, Icon } from 'native-base';
export const SelectFormik = props => {
  const {
    name,
    selectProps,
    children,
    ...rest
  } = props;
  const [field] = useField(name);
  const {
    handleChange,
    setFieldTouched,
    handleBlur
  } = useFormikContext();
  return (
    /*#__PURE__*/
    // <FormControl name={name} {...rest}>
    React.createElement(NBSelect, _extends({
      selectedValue: field.value,
      onValueChange: handleChange(name),
      onFocus: () => {
        setFieldTouched(name);
        handleBlur(name);
      }
    }, selectProps, rest), children) // </FormControl>

  );
};
export { Select, Icon };
export default SelectFormik;
//# sourceMappingURL=index.js.map