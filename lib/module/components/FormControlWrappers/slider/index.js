function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { Slider as NBSlider } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React from 'react';
import { FormControl } from '../../form-control';
import { getLayoutProps } from '../../../utils';
export const SliderControl = props => {
  const {
    name,
    label,
    children,
    sliderProps,
    ...rest
  } = props;
  const [layoutProps, remainingProps] = getLayoutProps(rest);
  const [field] = useField(name);
  const {
    setFieldValue
  } = useFormikContext();
  const defaultProps = {
    mt: 2
  };
  return /*#__PURE__*/React.createElement(FormControl, _extends({
    name: name,
    label: label
  }, layoutProps), /*#__PURE__*/React.createElement(NBSlider, _extends({
    defaultValue: field.value,
    onChange: v => {
      setFieldValue(name, v);
    }
  }, defaultProps, sliderProps, remainingProps), children));
};
export default SliderControl;
//# sourceMappingURL=index.js.map