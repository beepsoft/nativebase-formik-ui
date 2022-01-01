import { ISliderProps } from 'native-base';
import { FC, ReactNode } from 'react';
import type { BaseProps } from '../../props';
export declare type SliderProps = BaseProps & {
    sliderProps?: ISliderProps;
    children: ReactNode;
};
export declare const SliderControl: FC<SliderProps>;
export default SliderControl;
