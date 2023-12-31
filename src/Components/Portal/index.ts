import ReactDOM from 'react-dom';
import React, { FC } from 'react';

interface IPortal {
  children:React.ReactNode
  anchor:DocumentFragment
}
const Portal:FC<IPortal> = ({ children, anchor = document.body }) => ReactDOM.createPortal(children, anchor);

export default Portal;
