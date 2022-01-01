import { ICheckboxProps } from 'native-base';
import { FC, ReactNode } from 'react';
import type { BaseProps, LayoutProps } from '../../props';
export declare type CheckboxControlProps = BaseProps & {
    checkBoxProps?: ICheckboxProps;
    children: ReactNode;
    layoutProps?: LayoutProps;
};
export declare const CheckboxControl: FC<CheckboxControlProps>;
