import { ICheckboxProps } from 'native-base';
import { FC, ReactNode } from 'react';
import type { BaseProps } from '../../props';
export declare type CheckboxSingleProps = BaseProps & {
    checkBoxProps?: ICheckboxProps;
    children: ReactNode;
};
export declare const Checkbox: FC<CheckboxSingleProps>;
