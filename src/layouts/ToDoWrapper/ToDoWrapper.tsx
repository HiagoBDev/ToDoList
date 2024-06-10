import { useState } from "react";
import add from "../../assets/add.svg";
import ToDoCard from "../../components/ToDoCard/ToDoCard";
import { useToDo } from "./UseTodo";
import Modal from "../../components/Modal/Modal";
import ToDoForm from "../../components/ToDoForm/ToDoForm";

export default function ToDoWrapper() {
  const [openModal, setOpenModal] = useState(false);
  const { toDos, removeToDo } = useToDo();

  return (
    <main className="relative bg-[#202225] min-w-80 sm:max-w-[60%] lg:w-[50%] xl:w-[55%] flex flex-col rounded-xl min-h-60 mt-10 border border-[#2f9e44] shadow-md shadow-[#458550] mb-10">
      <div className="flex justify-end items-center">
        <button
          className="pt-3 pr-3 flex items-center gap-2"
          onClick={() => setOpenModal(true)}
        >
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl">
            Add
          </p>
          <img
            src={add}
            alt="add button"
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
          />
        </button>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        {toDos.map((todo) => (
          <ToDoCard
            key={todo.id}
            id={todo.id} // ID como string
            date={todo.date}
            description={todo.description}
            title={todo.title}
            onRemove={removeToDo}
          />
        ))}
      </div>
      {openModal && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-start pt-4">
          <Modal onClose={() => setOpenModal(false)} isOpen={openModal}>
            <ToDoForm />
          </Modal>
        </div>
      )}
    </main>
  );
}
