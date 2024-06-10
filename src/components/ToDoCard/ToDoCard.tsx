import close from "../../assets/close.svg";
import check from "../../assets/check.svg";
import { formatDate } from "../../utils/dateUtils";
import { useState } from "react";

interface ToDoCardProps {
  id: string; // ID como string
  title: string;
  date: string;
  description: string;
  onRemove: (id: string) => void;
}

export default function ToDoCard({
  id,
  title,
  date,
  description,
  onRemove,
}: ToDoCardProps) {
  const [checked, setChecked] = useState(false);
  let STYLE_CHECKED;
  let STYLE_CHECKED_BG;
  checked
    ? (STYLE_CHECKED = `line-through text-opacity-80 decoration-2 decoration-red-500`)
    : (STYLE_CHECKED = ``);
  checked ? (STYLE_CHECKED_BG = ` bg-opacity-50`) : (STYLE_CHECKED_BG = ``);

  return (
    <article
      className={`flex mx-4 mb-5 justify-between bg-[#6E737B] rounded-lg min-h-20 lg:min-h-36 p-1 ${STYLE_CHECKED_BG}`}
    >
      <div className="flex items-start">
        <div className="flex flex-col ml-2">
          <div className="flex gap-4 items-end">
            <p
              className={`text-base sm:text-xl lg:text-3xl font-semibold text-white ${STYLE_CHECKED}`}
            >
              {title}
            </p>
            <p
              className={`text-xs sm:text-base lg:text-lg text-[#ffa255] font-medium ${STYLE_CHECKED}`}
            >
              {formatDate(date)}
            </p>
          </div>
          <div className="mt-2">
            <p
              className={`text-sm sm:text-lg lg:text-xl break-words max-w-[180px] sm:max-w-[260px] lg:max-w-[360px] text-black ${STYLE_CHECKED}`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 mx-3">
        <button>
          <img
            className=" lg:w-11 sm:w-8"
            src={check}
            alt="mark as checked"
            onClick={() => {
              setChecked(!checked);
            }}
          />
        </button>
        <div className=" border lg:w-10  w-6"></div>
        <button onClick={() => onRemove(id)}>
          <img className=" lg:w-11 sm:w-8" src={close} alt="delete task" />
        </button>
      </div>
    </article>
  );
}
