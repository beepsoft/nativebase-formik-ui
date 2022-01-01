import { ISwitchProps } from 'native-base';
import { FC } from 'react';
import type { BaseProps } from '../../props';
declare type SwitchControlProps = BaseProps & {
    switchProps?: ISwitchProps;
};
export declare const Switch: FC<SwitchControlProps>;
export default Switch;
