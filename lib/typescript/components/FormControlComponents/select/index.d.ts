import { ISelectProps } from 'native-base';
import { FC, ReactNode } from 'react';
import type { BaseProps } from '../../props';
import { Select, Icon } from 'native-base';
export declare type SelectProps = BaseProps & {
    selectProps?: ISelectProps;
    children: ReactNode;
};
export declare const SelectFormik: FC<SelectProps>;
export { Select, Icon };
export default SelectFormik;
