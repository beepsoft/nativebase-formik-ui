function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { TextArea as NBTextArea } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React from 'react';
export const TextArea = props => {
  const {
    name,
    TextAreaProps,
    ...rest
  } = props;
  const [field] = useField(name);
  const {
    handleChange,
    handleBlur,
    setFieldTouched
  } = useFormikContext();
  return /*#__PURE__*/React.createElement(NBTextArea, _extends({
    value: field.value
  }, TextAreaProps, rest, {
    onChangeText: handleChange(name),
    onBlur: () => {
      setFieldTouched(name);
      handleBlur(name);
    }
  }));
};
export default TextArea;
//# sourceMappingURL=index.js.map