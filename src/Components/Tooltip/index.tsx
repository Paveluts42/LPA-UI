import React, {
  FC, useState, useRef, MouseEvent,
} from 'react';
import Portal from '../Portal';
import { useTheme } from '../../theme/Theme.context';
import { useClasses } from '../../hooks';
import cn from './tooltip.module.scss';

enum EPos {
  bottom = 'bottom',
  top = 'top',
  left = 'left',
  right = 'right',
}
interface ITooltip {
  text: string
  children: any
  className?: string
  placement?: EPos
  disabled?: boolean
  space?: number
  arrow?: boolean
}

interface IPosRef {
  x: number
  y: number
  arrow_y: number
  arrow_x: number
  pos: EPos
}

const positionCount = (p:EPos) => ({
  current: p,
  negate() {
    if (this.current === EPos.left) return EPos.right;
    if (this.current === EPos.right) return EPos.left;
    if (this.current === EPos.top) return EPos.bottom;
    if (this.current === EPos.bottom) return EPos.top;
  },
  isHorizontal() {
    return this.current === 'left' || this.current === 'right';
  },
  isVertical() {
    return this.current === 'top' || this.current === 'bottom';
  },
});

const pointInit = () => ({
  x: 0,
  y: 0,
  arrow_x: 0,
  arrow_y: 0,
  pos: EPos.bottom,
  reset(p:IPosRef) {
    this.x = p.x;
    this.y = p.y;
  },
  restrictRect(bound:any) {
    if (this.x < bound.l) this.x = bound.l;
    else if (this.x > bound.r) this.x = bound.r;
    if (this.y < bound.t) this.y = bound.t;
    else if (this.y > bound.b) this.y = bound.b;
  },
});
const getPosition = (el:HTMLSpanElement, tol:HTMLSpanElement | any, space:number, area:HTMLElement, placement:EPos):IPosRef => {
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
    const pos:any = positionCount(placement);
    switch (pos.current) {
      case EPos.top:
        val.x = Math.round(elRef.left + (el.offsetWidth - tol.offsetWidth) / 2);
        val.y = Math.round(elRef.top - (tol.offsetHeight + space));
        val.arrow_x = Math.round(elRef.left + (el.offsetWidth - tol.offsetWidth) / 2 + tol.clientWidth / 2 - 8);
        val.arrow_y = Math.round(elRef.top - (tol.offsetHeight + space) + tol.clientHeight + 7);
        val.pos = EPos.top;
        break;
      case EPos.right:
        val.x = Math.round(elRef.right + space);
        val.y = Math.round(elRef.top + (el.offsetHeight - tol.offsetHeight) / 2);
        val.arrow_x = Math.round(elRef.right - 16 + space);
        val.arrow_y = Math.round(elRef.top + (el.offsetHeight - tol.offsetHeight) / 2 + tol.offsetHeight / 2);
        val.pos = EPos.right;
        break;
      case EPos.left:
        val.x = Math.round(elRef.left - (tol.offsetWidth + space));
        val.y = Math.round(elRef.top + (el.offsetHeight - tol.offsetHeight) / 2);
        val.arrow_x = Math.round(elRef.left - (tol.offsetWidth + space) + tol.offsetWidth - 1);
        val.arrow_y = Math.round(elRef.top + (el.offsetHeight - tol.offsetHeight) / 2 + tol.offsetHeight / 2);
        val.pos = EPos.left;
        break;
      default:
        val.x = Math.round(elRef.left + (el.offsetWidth - tol.offsetWidth) / 2);
        val.y = Math.round(elRef.bottom + space);
        val.arrow_x = Math.round(elRef.left + (el.offsetWidth - tol.offsetWidth) / 2 + tol.clientWidth / 2 - 8);
        val.arrow_y = Math.round(elRef.bottom + space - 7);
        val.pos = EPos.bottom;
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

const Tooltip: FC<ITooltip> = ({
  text, children, className = '',
  space = 15, placement = EPos.bottom,
  arrow = false,
  disabled = false,
}) => {
  const [show, setShow] = useState(false);
  const posRef = useRef<IPosRef>({
    x: 0, y: 0, arrow_y: 0, arrow_x: 0, pos: EPos.bottom,
  });
  const toolRef = useRef<HTMLSpanElement>(null);
  const handelMOver = (e:MouseEvent<HTMLSpanElement>) => {
    setShow(true);
    posRef.current = getPosition(e.currentTarget, toolRef.current, space, document.body, placement);
  };
  const handelMOut = () => {
    setShow(false);
  };
  const { theme } = useTheme();
  const classes = useClasses([
    className,
    cn.tooltip,
    show ? cn.tooltipShow : '',
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
          <>
            <span
              ref={toolRef}
              className={classes}
              style={{
                top: posRef.current.y,
                left: posRef.current.x,
              }}
            >
              {text}
              {
                  arrow ? (
                    <span
                      style={{
                        top: posRef.current?.arrow_y,
                        left: posRef.current?.arrow_x,
                      }}
                      className={useClasses([
                        cn.arrow,
                        cn[`${posRef?.current?.pos}-${theme}`],
                      ])}
                    />
                  ) : <></>
              }
            </span>

          </>

        </Portal>
      )}
    </>
  );
};

export default Tooltip;
