import close from '../../assets/close.svg';
import check from '../../assets/check.svg';

interface ToDoCardProps {
  title: string;
  date: string;
  description: string;
}

export default function ToDoCard({ title, date, description }: ToDoCardProps) {
  return (
    <article className=' flex mx-4 mb-5 justify-between bg-[#6E737B] rounded-lg min-h-20 p-1'>
      <div className='flex  items-start'>
        <div className='flex flex-col ml-2'>
          <div className='flex gap-4 items-center'>
            <p className='text-xl font-semibold text-white'>{title}</p>
            <p className='text-xs text-[#ffa255] font-medium'>{date}</p>
          </div>
          <div className='mt-2'>
            <p className='text-sm break-words max-w-[180px] text-black'>{description}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-5 mx-3'>
        <button><img src={check} alt="mark as checked" /></button>
        <button><img src={close} alt="mark as closed" /></button>
      </div>
    </article>
  );
}
