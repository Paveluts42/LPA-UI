import React from 'react';
import { IIcon } from './set/interfaceIcon';
import { useRandomString } from '../hooks';

export default (props: IIcon) => {
  const iconCs = useRandomString();

  return (
    <svg
      id="_24_arrow_up"
      data-name="24_arrow_up"
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
        d="M21,17.25a.748.748,0,0,1-.53-.22L12,8.561,3.53,17.03A.75.75,0,0,1,2.47,15.97l9-9a.75.75,0,0,1,1.061,0l9,9A.75.75,0,0,1,21,17.25Z"
      />
    </svg>
  );
};
