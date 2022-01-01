import type { IRadioGroupProps } from 'native-base';
import { FC, ReactNode } from 'react';
import type { BaseProps } from '../../props';
import { Radio, HStack, VStack, Stack } from 'native-base';
declare type RadioGroupProps = BaseProps & {
    radioGroupProps?: IRadioGroupProps;
    children: ReactNode;
};
export declare const RadioGroup: FC<RadioGroupProps>;
export { Radio, HStack, VStack, Stack };
export default RadioGroup;
