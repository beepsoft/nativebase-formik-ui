import { IInputProps } from 'native-base';
import { FC } from 'react';
import type { BaseProps } from '../../props';
export declare type InputProps = BaseProps & {
    inputProps?: IInputProps;
};
export declare const Input: FC<InputProps>;
export default Input;
