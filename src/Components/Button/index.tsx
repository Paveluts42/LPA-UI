import React, {FC} from 'react';
export interface IButton {
    color:string;


}
const Button:FC<IButton> = ({children,color,...props}) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
};

export default Button;