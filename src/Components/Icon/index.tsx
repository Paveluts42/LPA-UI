import React, { FC } from 'react';
import * as AllIcons from '../../Icons/set/IconsImport';

export interface IconI {
  component?: string;
  size?: string | number;
  color?: string;
}

const Icon: FC<IconI> = (props) => {
  // @ts-ignore
  const Component = AllIcons[props.component || 'ArrowDown'];

  return (
    <>
      {Component ? (
        <Component
          size={props.size}
          color={props.color}
        />
      ) : (
        'Такой иконки нет '
      )}
    </>
  );
};

export default Icon;
