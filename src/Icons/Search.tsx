import React from 'react';
import { IIcon } from './set/interfaceIcon';
import { useRandomString } from '../hooks';

export default (props: IIcon) => {
  const iconCs = useRandomString();

  return (
    <svg
      id="_24_search"
      data-name="24_search"
      xmlns="http://www.w3.org/2000/svg"
      width={props?.size || 24}
      height={props?.size || 24}
      viewBox="0 0 24 24"
      style={{ strokeOpacity: 0.0 }}
      {...props}
    >
      <defs>
        <style>
          {`\n      .cls-1 {\n        fill: none;\n      }\n\n      .${iconCs} {\n        fill: ${
            props.color ? props.color : '#393942'
          };\n      }\n    `}
        </style>
      </defs>
      <rect
        id="bg"
        className="cls-1"
        width={24}
        height={24}
      />
      <path
        id="icon"
        className={iconCs}
        d="M2079.72-3566.28l-5.506-5.515a8.593,8.593,0,0,1-5.584,2.054,8.639,8.639,0,0,1-8.63-8.629,8.64,8.64,0,0,1,8.63-8.63,8.64,8.64,0,0,1,8.63,8.63,8.591,8.591,0,0,1-1.991,5.508l5.512,5.521a.751.751,0,0,1,0,1.061.75.75,0,0,1-.53.219A.745.745,0,0,1,2079.72-3566.28Zm-18.219-12.09a7.138,7.138,0,0,0,7.13,7.13,7.138,7.138,0,0,0,7.13-7.13,7.138,7.138,0,0,0-7.13-7.13A7.138,7.138,0,0,0,2061.5-3578.37Z"
        transform="translate(-2058.5 3588.53)"
      />
    </svg>
  );
};
