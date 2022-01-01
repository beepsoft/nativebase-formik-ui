import type { IRadioGroupProps } from 'native-base';
import { FC, ReactNode } from 'react';
import type { BaseProps } from '../../props';
import { Radio, HStack, VStack, Stack } from 'native-base';
export declare type RadioGroupProps = BaseProps & {
    radioGroupProps?: IRadioGroupProps;
    children: ReactNode;
};
export declare const RadioGroupControl: FC<RadioGroupProps>;
export { Radio, HStack, VStack, Stack };
export default RadioGroupControl;
