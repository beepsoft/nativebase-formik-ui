import { IFormControlProps as NBFormControlProps } from 'native-base';
import { FC } from 'react';
import type { BaseProps } from '../props';
export declare type FormControlProps = Omit<BaseProps, 'label'> & NBFormControlProps & {
    label?: string;
    isTouchedRequired?: boolean;
};
export declare const FormControl: FC<FormControlProps>;
export default FormControl;
