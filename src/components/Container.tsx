import {FC, HTMLProps} from "react";

export const Container: FC<HTMLProps<HTMLDivElement>> = ({className, ...props}) => <div className={`w-[750px] max-w-[830px] mx-auto ${className || ''}`} {...props}/>
