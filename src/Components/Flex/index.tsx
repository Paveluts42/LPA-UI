import React, { FC } from 'react';
import ST from './flex.module.scss';
import { IBox } from '../Box';
import { useTheme } from '../../theme/Theme.context';
import { useClasses } from '../../hooks';
import {
  FlexAlign, FlexAlignText, FlexDirection, FlexGap, FlexJustify,
} from '../../Enums/flexEnums';

interface IFlex extends IBox {
  direction?: keyof typeof FlexDirection;
  justify?: keyof typeof FlexJustify;
  align?: keyof typeof FlexAlign;
  alignText?: keyof typeof FlexAlignText;
  wrap?:boolean;
  gap?: keyof typeof FlexGap | number;
}

const Flex :FC<IFlex> = ({
  elementType = 'div',
  direction = FlexDirection.Row,
  justify = FlexJustify.Start,
  align = FlexAlign.Center,
  alignText = FlexAlignText.Center,
  wrap = false,
  gap = FlexGap.none,
  className,
  style,
  width,
  height,
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
  const cn = useClasses([className, ST.flex, ST[theme]]);
  return React.createElement(
    elementType,
    {
      className: cn,
      style: {
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        textAlign: alignText,
        padding,
        margin,
        gap,
        direction,
        width,
        height,
        border,
        borderColor,
        borderRadius: rounded,
        boxShadow: shadow,
        textColor,
        backgroundColor,
        ...style,
      },
      ...props,

    },
    children,
  );
};

export default Flex;
