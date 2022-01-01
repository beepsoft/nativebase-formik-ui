import { ISwitchProps } from 'native-base';
import { FC } from 'react';
import type { BaseProps } from '../../props';
export declare type SwitchControlProps = BaseProps & {
    switchProps?: ISwitchProps;
};
export declare const SwitchControl: FC<SwitchControlProps>;
export default SwitchControl;
