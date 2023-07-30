import {FC, HTMLProps} from "react";

export const Container: FC<HTMLProps<HTMLDivElement>> = ({className, ...props}) => <div className={`w-full max-w-[830px] mx-auto ${className || ''}`} {...props}/>
