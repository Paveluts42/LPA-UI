import React, { FC } from 'react';
import * as AllIcons from '../../Icons/set/index';
import { IconsEnums } from '../../Icons/set/IconsEnum';

export interface IconI {
  component?:IconsEnums
  size?: string | number;
  color?: string;
}

const Icon: FC<IconI> = (props) => {
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
