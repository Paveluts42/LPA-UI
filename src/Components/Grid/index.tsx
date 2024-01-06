import React, { FC } from 'react';
import ST from './grid.module.scss';
import { IBox } from '../Box';
import { useTheme } from '../../theme/Theme.context';
import { useClasses } from '../../hooks';
import { GridAutoFlow, GridGap } from '../../Enums/gridEnums';

interface IGrid extends IBox {
  container?:boolean | undefined;
  wrap?:boolean;
  gtAreas?:string[] | undefined;
  gtColumns?:string | undefined;
  gtRows?:string | undefined;
  gaFlow?:keyof typeof GridAutoFlow | string | undefined;
  gArea?:string | undefined;
  gap?: keyof typeof GridGap | number;
}

const Grid :FC<IGrid> = ({
  elementType = 'div',
  container = false,
  gap = GridGap.none,
  gaFlow,
  gtAreas,
  gtColumns,
  gtRows,
  gArea,
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
  const cn = useClasses([className, container ? ST.grid : '', ST[theme]]);
  return React.createElement(
    elementType,
    {
      className: cn,
      style: {
        padding,
        margin,
        gridGap: gap,
        gridAutoFlow: gaFlow,
        width,
        height,
        border,
        borderColor,
        gridTemplateColumns: gtColumns,
        gridTemplateAreas: gtAreas?.map((i) => `"${i}"`).join(' ') || gtAreas,
        gridTemplateRows: gtRows,
        gridArea: gArea,
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

export default Grid;
