import type { BaseProps } from 'src/components/props';
import type { IInputProps, IPinInputProps } from 'native-base';
import type { ReactNode } from 'react';
export declare type PinInputProps = BaseProps & {
    PinInputProps?: IPinInputProps;
    children?: ReactNode;
};
export declare type PinInputComponentType = ((props: PinInputProps) => JSX.Element) & {
    Field: React.MemoExoticComponent<(props: IInputProps) => JSX.Element>;
};
