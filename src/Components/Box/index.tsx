import React, { FC } from 'react';
import { useTheme } from '../../theme/Theme.context';
import { useClasses } from '../../hooks';
import ST from './box.module.scss';

export interface IBox {
  elementType?: keyof React.JSX.IntrinsicElements ;
  children?: React.ReactNode | React.ReactNode[];
  width?:string | number | undefined;
  display?:string | undefined;
  height?:string | number | undefined;
  border?: string | undefined;
  borderColor?:string | undefined;
  rounded?: string | number | undefined;
  shadow?: string | number | undefined;
  margin?:string | number | undefined;
  padding?: string | number | undefined;
  backgroundColor?: string | number | undefined;
  textColor?: string | number | undefined;
  style?:object | undefined;
  className?:string | undefined;
}

const Box: FC<IBox> = ({
  className,
  style,
  display = 'inline-block',
  width,
  height,
  elementType = 'div',
  children,
  border,
  borderColor,
  rounded,
  shadow,
  margin,
  padding,
  textColor,
  backgroundColor,
  ...props
}) => {
  const { theme } = useTheme();
  const cn = useClasses([className, ST[theme]]);
  return React.createElement(
    elementType,
    {
      className: cn,
      style: {
        borderRadius: rounded,
        boxShadow: shadow,
        width,
        height,
        display,
        border,
        borderColor,
        margin,
        padding,
        textColor,
        backgroundColor,
        ...style,
      },
      ...props,

    },
    children,
  );
};

export default Box;
