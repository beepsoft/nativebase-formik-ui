import { IInputProps } from 'native-base';
import { FC } from 'react';
import type { BaseProps } from '../../props';
declare type TextAreaProps = BaseProps & {
    TextAreaProps?: IInputProps;
};
export declare const TextAreaControl: FC<TextAreaProps>;
export default TextAreaControl;
