import { IPinInputProps } from 'native-base';
import { FC, ReactNode } from 'react';
import type { BaseProps } from '../../props';
export declare type PinInputControlProps = BaseProps & {
    pinInputProps?: IPinInputProps;
    showStepper?: boolean;
    children?: ReactNode;
};
export declare const PinInputControl: FC<PinInputControlProps>;
export default PinInputControl;
