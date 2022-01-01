import { INumberInputProps, INumberInputFieldProps } from 'native-base';
import { FC, ReactNode } from 'react';
import type { BaseProps } from '../../props';
import { NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from 'native-base';
export declare type NumberInputProps = BaseProps & {
    numberInputProps?: INumberInputProps;
    numberInputFieldProps?: INumberInputFieldProps;
    showStepper?: boolean;
    children?: ReactNode;
};
export declare const NumberInputControl: FC<NumberInputProps>;
export { NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper };
export default NumberInputControl;
