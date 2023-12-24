import React from 'react';
import { useRandomString } from '../hooks';
import { IIcon } from './set/interfaceIcon';

export default (props: IIcon) => {
  const iconCs = useRandomString();

  return (
    <svg
      id="_24_add"
      data-name="24_add"
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
        d="M1930.25-3297.5a2.252,2.252,0,0,1-2.25-2.25v-15a2.252,2.252,0,0,1,2.25-2.25h15a2.252,2.252,0,0,1,2.25,2.25v15a2.252,2.252,0,0,1-2.25,2.25Zm-.75-17.249v15a.751.751,0,0,0,.75.751h15a.751.751,0,0,0,.75-.751v-15a.751.751,0,0,0-.75-.751h-15A.751.751,0,0,0,1929.5-3314.75Zm7.5,12.9v-4.65h-4.65a.75.75,0,0,1-.75-.75.75.75,0,0,1,.75-.75H1937v-4.65a.75.75,0,0,1,.751-.75.75.75,0,0,1,.75.75v4.65h4.65a.75.75,0,0,1,.75.75.75.75,0,0,1-.75.75h-4.65v4.65a.75.75,0,0,1-.75.75A.75.75,0,0,1,1937-3301.85Z"
        transform="translate(-1925.75 3319.25)"
      />
    </svg>
  );
};
