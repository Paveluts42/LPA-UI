// @ts-nocheck
import React, { FC, useState, useRef } from 'react';
import Portal from '../Portal';
import { useTheme } from '../../theme/Theme.context';
import { useClasses } from '../../hooks';
import cn from './tooltip.module.scss';

// Todo fix types
interface ITooltip {
  text:string
  children:React.ReactNode
  className?:string
  placement?:'bottom' | 'top' | 'left' | 'right',
  disabled?:boolean
  space?:number
}
const positionCount = (p) => ({
  current: p,
  negate() {
    if (this.current === 'left') return 'right';
    if (this.current === 'right') return 'left';
    if (this.current === 'top') return 'bottom';
    if (this.current === 'bottom') return 'top';
  },
  isHorizontal() {
    return this.current === 'left' || this.current === 'right';
  },
  isVertical() {
    return this.current === 'top' || this.current === 'bottom';
  },
});

const pointInit = () => ({
  x: null,
  y: null,
  reset(p) {
    this.x = p.x;
    this.y = p.y;
  },
  restrictRect(bound) {
    if (this.x < bound.l) this.x = bound.l;
    else if (this.x > bound.r) this.x = bound.r;
    if (this.y < bound.t) this.y = bound.t;
    else if (this.y > bound.b) this.y = bound.b;
  },
});
const getPosition = (el, tol, placement, space, area) => {
  let countRecur = 0;
  const val = pointInit();

  const boundRule = {
    l: space,
    t: space,
    r: area.clientWidth - (tol.clientWidth + space),
    b: window.innerHeight - (tol.clientHeight + space),
  };
  const elRef = el.getBoundingClientRect();

  // eslint-disable-next-line @typescript-eslint/no-shadow
  return (function recursive(placement) {
    countRecur++;
    const pos = positionCount(placement);
    switch (pos.current) {
      case 'top':
        val.x = elRef.left + (el.offsetWidth - tol.offsetWidth) / 2;
        val.y = elRef.top - (tol.offsetHeight + space);
        break;
      case 'right':
        val.x = elRef.right + space;
        val.y = elRef.top + (el.offsetHeight - tol.offsetHeight) / 2;
        break;
      case 'left':
        val.x = elRef.left - (tol.offsetWidth + space);
        val.y = elRef.top + (el.offsetHeight - tol.offsetHeight) / 2;
        break;
      default:
        val.x = elRef.left + (el.offsetWidth - tol.offsetWidth) / 2;
        val.y = elRef.bottom + space;
        break;
    }
    if (countRecur < 3) {
      if (
        ((pos.isHorizontal()) && (val.x < boundRule.l || val.x > boundRule.r)) || ((pos.isVertical()) && (val.y < boundRule.t || val.y > boundRule.b))
      ) {
        val.reset(recursive(pos.negate()));
      }
    }
    // Ограничение привязки
    val.restrictRect(boundRule);
    return val;
  }(placement));
};

const Tooltip :FC<ITooltip> = ({
  text, children, className = '', space = 15, placement = 'bottom',
  disabled = false,
}) => {
  const [show, setShow] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const toolRef = useRef();
  const handelMOver = (e:any) => {
    setShow(true);
    posRef.current = getPosition(e.currentTarget, toolRef.current, placement, space, document.body);
  };
  const handelMOut = () => {
    setShow(false);
  };
  const { theme } = useTheme();
  const classes = useClasses([
    className,
    cn.tooltip,
    cn[theme],
  ]);
  return (
    <>
      {disabled ? children : React.cloneElement(children, {
        onMouseOver: handelMOver,
        onMouseOut: handelMOut,
      })}
      {disabled || (
      <Portal anchor={document.body}>
        <span
          ref={toolRef}
          className={classes}
          style={{
            top: posRef.current.y,
            left: posRef.current.x,
            opacity: show ? 1 : 0,
          }}
        >
          {text}
        </span>
      </Portal>
      )}
    </>
  );
};

export default Tooltip;
