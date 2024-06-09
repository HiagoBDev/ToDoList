import { useState } from 'react';
import add from '../../assets/add.svg'
import ToDoCard from '../../components/ToDoCard/ToDoCard'
import { useToDo } from './UseTodo';
import Modal from '../../components/Modal/Modal';
import ToDoForm from '../../components/ToDoForm/ToDoForm';

export default function ToDoWrapper() {
  const [openModal, setOpenModal] = useState(false)
  const toDos = useToDo()

  return (
    <main className=' bg-[#202225] w-[80%] max-w-72 flex flex-col gap-10 rounded-xl min-h-60 mt-10 border border-[#2f9e44] shadow-md shadow-[#458550] mb-10'>
      <div className=' flex justify-end items-center'>
        <button className=' pt-3 pr-3 flex items-center gap-2' onClick={ () => setOpenModal(true) }> 
          <p className=" text-white text-lg">Add</p>
          <img src={add} alt="add button" className=' w-8 h-8' />
        </button>
      </div>
      <div className=' flex flex-col gap-3'>
        {toDos.map(todo => (
          <ToDoCard
          key={todo.id}
          date={todo.date}
          description={todo.description}
          title={todo.title}
          />
        ))
        }
      </div>
      <Modal onClose={ () => setOpenModal(false)} isOpen={openModal}>
        <ToDoForm/>
      </Modal>
    </main>
  )
}
