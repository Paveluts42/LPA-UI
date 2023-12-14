import React, { FC, InputHTMLAttributes, MouseEventHandler } from 'react';
import cn from './button.module.scss';

export interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  width?: string | number;
  height?: string | number;
  disabled?: boolean;
  title?: string;

  color?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | any;
  type?:
  | 'primary'
  | 'secondary'
  small?: boolean;
}

// eslint-disable-next-line react/function-component-definition
const Button: FC<IButton> = ({
  width = 'min-content',
  height = '40px',
  title = 'Submit',
  type = 'primary',
  ...props
}) => {
  const handelClick = (e: any): void => {
    e.currentTarget.blur();
    props.onClick(e);
  };
  const classes = `${props.className} `;

  // @ts-ignore
  return props.children ? (
    <div
      style={{
        width,
      }}
      className={classes}
    >
      <button
        onClick={props.disabled ? undefined : handelClick}
        type="button"
        style={{
          backgroundColor: props?.disabled
            ? type === 'table'
              ? ' #11ffee00'
              : props.color
            : undefined,
          padding: props.small
            ? 4
            : type === 'outline' && !props.disabled
              ? 7
              : type === 'icon-small'
                ? 2
                : 8,
          lineHeight: 0,
          cursor: props.disabled ? undefined : 'pointer',
        }}
        className={
                    props.disabled ? cn['button--disabled'] : cn[`button--${type}`]
                }
      >
        {props.children}
      </button>
    </div>
  ) : (
    <div
      style={{
        width,
        height: props.small ? '32px' : height,
        minWidth: width,
      }}
      className={classes}
    >
      <button
        onClick={props.disabled ? undefined : handelClick}
        type="button"

        style={{
          cursor: props.disabled ? undefined : 'pointer',
          backgroundColor: !props.disabled ? props.color : undefined,
          padding: props.small ? '6px 16px' : '8px 24px',
        }}

        className={
                    props.disabled ? cn['button--disabled'] : cn[`button--${type}`]
                }
      >
        <div className={cn.title}>{title}</div>
      </button>
    </div>
  );
};

export default Button;
