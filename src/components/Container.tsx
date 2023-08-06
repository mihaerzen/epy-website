import {FC, HTMLProps} from "react";

export const Container: FC<HTMLProps<HTMLDivElement>> = ({className, ...props}) => <div
  className={`box-border max-w-[830px] mx-auto px-2 md:px-0 ${className || ''}`} {...props}/>
