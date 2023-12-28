import React, { CSSProperties, FC, ReactNode } from 'react';
import cn from './typography.module.scss';
import { useClasses } from '../../hooks';
import { useTheme } from '../../theme/Theme.context';

export interface ITypography {
  type?: 'header1' | 'header2' | 'header3' | 'font' | 'paragraph' | 'text',
  paragraph?: boolean,
  color?: string,
  style?:CSSProperties,
  className?: string;
  children:ReactNode,

}

const Typography:FC<ITypography> = ({
  children, type = 'font', className = '', paragraph = false, color, style,
}) => {
  const { theme } = useTheme();
  const classes = useClasses([
    className,
    cn[type],
    cn[theme],
  ]);

  return (
    <>

      {paragraph
        ? (
          <p style={{ ...style, color }} className={classes}>
            {children}
          </p>
        )
        : (
          <div style={{ ...style, color }} className={classes}>
            {children}
          </div>
        )}

    </>
  );
};

export default Typography;
