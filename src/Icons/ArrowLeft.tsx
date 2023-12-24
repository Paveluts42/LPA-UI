import React from 'react';
import { IIcon } from './set/interfaceIcon';
import { useRandomString } from '../hooks';

export default (props: IIcon) => {
  const iconCs = useRandomString();

  return (
    <svg
      id="_24_arrow_left"
      data-name="24_arrow_left"
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
        d="M16.5,21.75a.748.748,0,0,1-.53-.22l-9-9a.75.75,0,0,1,0-1.061l9-9A.75.75,0,0,1,17.03,3.53L8.561,12l8.47,8.47a.75.75,0,0,1-.53,1.28Z"
      />
    </svg>
  );
};
