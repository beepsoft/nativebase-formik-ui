function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { Slider as NBSlider } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React from 'react';
export const Slider = props => {
  const {
    name,
    children,
    sliderProps,
    ...rest
  } = props;
  const [field] = useField(name);
  const {
    setFieldValue
  } = useFormikContext();
  return /*#__PURE__*/React.createElement(NBSlider, _extends({
    defaultValue: field.value,
    onChange: v => {
      setFieldValue(name, v);
    }
  }, sliderProps, rest), children);
};
export default Slider;
//# sourceMappingURL=Slider.js.map