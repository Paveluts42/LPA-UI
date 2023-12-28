import React, { FC } from 'react';
import cn from './switcher.module.scss';
import { useTheme } from '../../theme/Theme.context';
import { useClasses } from '../../hooks';
import { TypeEnums } from '../../Enums/typeEnums';

export interface ISwitch {
  type?:TypeEnums
  className?:string
}
const Switch:FC<ISwitch> = ({ className, type = 'main', ...props }) => {
  const { theme } = useTheme();
  const classes = useClasses([
    className,
    cn.toggle,
    cn[type],
    cn[theme],
  ]);
  return (
    <label>
      <input
        {...props}
        type="checkbox"
        className={classes}
      />
    </label>
  );
};

export default Switch;
