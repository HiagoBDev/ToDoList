import { ReactNode } from "react";

interface modalProps{
  isOpen: boolean;
  children: ReactNode;
}

export default function Modal({isOpen, children}:modalProps) {
  return (
    isOpen ? (
      <div className=" fixed top-0 bottom-0 left-0 right-0 backdrop-blur-[2px] z-50">
        <div className=" fixed left-1/2 -translate-x-1/2 translate-y-1/2 bg-slate-600 min-h-80 w-[70%] rounded-xl p-5">
          {children}
        </div>
      </div>
    ) : null
  )
}
