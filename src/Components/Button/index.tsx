import React, { FC, InputHTMLAttributes, MouseEventHandler } from 'react';
import cn from './button.module.scss';
import { useClasses } from '../../hooks';

export interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  width?: string | number
  height?: string | number;
  disabled?: boolean;
  title?: string;
  color?: string;
  className?: string;
  sizeBt?:'small' | 'medium' | 'large';
  onClick?: MouseEventHandler<HTMLButtonElement> | any;
  type?:
  | 'main'
  | 'info'
  | 'warning'
  | 'success'
  | 'delete'
}

const Button: FC<IButton> = ({
  type = 'main',
  sizeBt = 'medium',
  ...props
}) => {
  const handelClick = (e: any): void => {
    e.currentTarget.blur();
    props.onClick(e);
  };
  const classes = `${props.className} `;
  return props.children ? (
    <div
      className={classes}
    >
      <button
        onClick={props.disabled ? undefined : handelClick}
        type="button"
        className={useClasses([cn.btn, cn[`btn-${type}`], cn[`btn-${sizeBt}`]])}
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
