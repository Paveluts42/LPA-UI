import React from 'react';
import { IIcon } from './set/interfaceIcon';
import { useRandomString } from '../hooks';

export default (props: IIcon) => {
  const iconCs = useRandomString();

  return (
    <svg
      id="_24_done"
      data-name="24_done"
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
        d="M9.56,18.15a.748.748,0,0,1-.54-.23L2.46,11.11A.75.75,0,0,1,3.54,10.07l6.045,6.275,10.9-10.29a.75.75,0,0,1,1.03,1.091l-11.44,10.8A.748.748,0,0,1,9.56,18.15Z"
      />
    </svg>
  );
};
