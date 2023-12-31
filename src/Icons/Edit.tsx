import React from 'react';
import { IIcon } from './set/interfaceIcon';
import { useRandomString } from '../hooks';

export default (props: IIcon) => {
  const iconCs = useRandomString();

  return (
    <svg
      id="_24_edit"
      data-name="24_edit"
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
        d="M1406.32-3351.5h-4.78a1.532,1.532,0,0,1-1.091-.449,1.534,1.534,0,0,1-.449-1.091v-4.45a1.529,1.529,0,0,1,.118-.591,1.669,1.669,0,0,1,.3-.463.457.457,0,0,1,.034-.036l9.273-9.289c.015-.018.031-.035.047-.052s.033-.032.051-.046l2.555-2.559a1.438,1.438,0,0,1,.526-.36,1.553,1.553,0,0,1,.588-.113,1.555,1.555,0,0,1,.589.113,1.429,1.429,0,0,1,.526.36l4.413,4.412a1.436,1.436,0,0,1,.36.526,1.562,1.562,0,0,1,.113.589,1.554,1.554,0,0,1-.113.589,1.428,1.428,0,0,1-.36.526l-2.606,2.606-8.28,8.28h10.14a.75.75,0,0,1,.75.75.75.75,0,0,1-.75.75Zm-4.79-6.039a.284.284,0,0,0-.026.033l0,.008a.026.026,0,0,0,0,.008v4.45a.036.036,0,0,0,.011.03.033.033,0,0,0,.03.011h4.469l8.811-8.811-4.517-4.517Zm14.35-5.332,2.09-2.09.017-.016a.067.067,0,0,0,0-.023.07.07,0,0,0,0-.023l-.017-.016-4.441-4.44-.016-.017a.062.062,0,0,0-.046,0l-.016.016-2.088,2.092Z"
        transform="translate(-1397.74 3373.25)"
      />
    </svg>
  );
};
