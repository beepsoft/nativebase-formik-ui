import { IInputProps } from 'native-base';
import { FC } from 'react';
import type { BaseProps, LayoutProps } from '../../props';
declare type InputProps = BaseProps & LayoutProps & {
    inputProps?: IInputProps;
};
export declare const InputControl: FC<InputProps>;
export default InputControl;
