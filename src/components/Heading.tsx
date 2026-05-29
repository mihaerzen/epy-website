import {FC, HTMLProps} from "react";

export const Heading1: FC<HTMLProps<HTMLHeadingElement>> = ({className, children, ...props}) => <h1
  className={`pt-3 md:pt-4 text-2xl text-epj-red font-bold mb-4 ${className || ''}`}
  {...props}>{children}</h1>

export const Heading2: FC<HTMLProps<HTMLHeadingElement>> = ({className, children, ...props}) => <h2
  className={`text-xl text-epj-red font-bold mb-4 ${className || ''}`}
  {...props}>{children}</h2>

export const Heading3: FC<HTMLProps<HTMLHeadingElement>> = ({className, children, ...props}) => <h3
  className={`text-epj-red mb-4 ${className || ''}`}
  {...props}>{children}</h3>

export const Heading4: FC<HTMLProps<HTMLHeadingElement>> = ({className, children, ...props}) => <h4
  className={`text-epj-red mb-1 ${className || ''}`}
  {...props}>{children}</h4>

export const Paragraph: FC<HTMLProps<HTMLParagraphElement>> = ({className, ...props}) => <p
  className={`mb-4 ${className || ''}`}
  {...props}/>

export const UList: FC<HTMLProps<HTMLUListElement>> = ({className, ...props}) => <ul
  className={`mb-4 ml-[14px] ${className || ''}`}
  {...props}/>

export const ULitem: FC<HTMLProps<HTMLLIElement>> = ({className, ...props}) => <li
  className={`list-disc ${className || ''}`}
  {...props}/>

export const OList: FC<HTMLProps<HTMLOListElement>> = ({className, ...props}) => <ol
  className={`mb-4 ml-5 list-decimal ${className || ''}`} {...props}
  type="1"
/>

export const OLitem: FC<HTMLProps<HTMLLIElement>> = ({className, ...props}) => <li
  className={`${className || ''}`}
  {...props}/>
