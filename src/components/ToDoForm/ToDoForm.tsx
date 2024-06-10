import ToDoInputForm from "../ToDoInputForm/ToDoInputForm";
import { useToDoForm } from "./useToDoForm";

export default function ToDoForm() {
  const { handleSubmit, errors, register } = useToDoForm();

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className=" flex flex-col gap-5 pb-7 pl-2"
    >
      <div>
        <ToDoInputForm
          errorMessage={errors.title?.message}
          register={register("title")}
          type="text"
          label="Title"
          placeholder="enter your title"
        />
        <ToDoInputForm
          errorMessage={errors.date?.message}
          register={register("date")}
          type="date"
          label="Date"
          placeholder="MM/DD/YY"
        />
        <ToDoInputForm
          errorMessage={errors.description?.message}
          register={register("description")}
          type="text"
          label="Description"
          placeholder="enter your description"
        />
      </div>
      <button
        type="submit"
        className="w-[90%] text-xs lg:text-xl text-white focus:outline-none py-[5.5px] px-2 border border-emerald-500 rounded-lg bg-emerald-500 hover:opacity-90 focus:opacity-100 "
      >
        Create
      </button>
    </form>
  );
}
