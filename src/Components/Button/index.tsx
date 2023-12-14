import React, { FC, InputHTMLAttributes, MouseEventHandler } from 'react';
import cn from './button.module.scss';
import { useClasses } from '../../hooks';

export interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  width?: string | number
  height?: string | number;
  disabled?: boolean;
  title?: string;
  // size?:'small' | 'medium' | 'large'
  color?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | any;
  type?:
  | 'main'
  | 'info'
  | 'warning'
  | 'success'
  | 'submit'
  | 'delete'
  small?: boolean;
}

const Button: FC<IButton> = ({
  type = 'main',
  ...props
}) => {
  const handelClick = (e: any): void => {
    e.currentTarget.blur();
    props.onClick(e);
  };
  const classes = `${props.className} `;
  useClasses([cn.btn, cn.btn1]);
  return props.children ? (
    <div
      className={classes}
    >
      <button
        onClick={props.disabled ? undefined : handelClick}
        type="button"
        className={useClasses([cn.btn, cn[`btn-${type}`]])}
      >
        {props.children}
      </button>
    </div>
  ) : (
    <button
      onClick={props.disabled ? undefined : handelClick}
      type="button"
      className={
        `${cn.btn} ${cn[`btn-${type}`]} ${cn['icon-send']}`
}
    >
      {props.children || 'submit'}
    </button>
  );
};

export default Button;
