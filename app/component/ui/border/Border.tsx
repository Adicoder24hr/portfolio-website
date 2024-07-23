import React from 'react';
import { ReactNode} from 'react';
import "./style.scss";

interface props {
    children: ReactNode;
}

const Border = ({children}: props)=>{
    return <span id='border'>{children}</span>
}

export default Border;