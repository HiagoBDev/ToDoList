import { ReactNode } from "react";
import close from "../../assets/close.svg";

interface modalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose, children }: modalProps) {
  return isOpen ? (
    <div className=" w-[90%] h-40 backdrop-blur-[2px] z-50">
      <div className=" bg-[#202225] border border-emerald-700 shadow-lg shadow-emerald-800 rounded-xl flex flex-col gap-1">
        <div className=" flex justify-end mt-2 mr-2 ">
          <img
            onClick={onClose}
            className="h-6 w-6 lg:h-10 lg:w-10 cursor-pointer transition-transform transform hover:scale-110"
            src={close}
            alt="close"
          />
        </div>
        <div className=" px-5">{children}</div>
      </div>
    </div>
  ) : null;
}
