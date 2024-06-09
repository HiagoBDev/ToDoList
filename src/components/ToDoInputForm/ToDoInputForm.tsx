import { UseFormRegisterReturn } from "react-hook-form";

interface ToDoInputProps{
  label: string;
  placeholder: string;
  errorMessage?: string | null;
  register?: UseFormRegisterReturn;
  type: string;
}

export default function ToDoInputForm({label, placeholder, register, type, errorMessage}:ToDoInputProps) {
  return (
    <label className=" text-base text-emerald-400 " htmlFor={label}>
      {label}
      <div className=" flex flex-col">
        <input 
        type={type} 
        id={label} 
        placeholder={placeholder}
        className=" w-[95%] text-xs text-white focus:outline-none py-[5.5px] px-2 border border-emerald-500 rounded-lg bg-[#202225] "
        {...register}
        />
        {errorMessage && <p className="text-red-500 text-sm pb-1">{errorMessage}</p>}
      </div>
    </label>
  )
}
