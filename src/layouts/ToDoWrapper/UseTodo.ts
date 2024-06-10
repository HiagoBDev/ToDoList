import { useEffect, useState } from 'react';
import { ToDoListService, IToDo } from '../../service/ToDoListService';
import { ToDoDeleteService } from '../../service/ToDoDeleteService';

export const useToDo = () => {
  const [toDos, setToDos] = useState<IToDo[]>([]);

  useEffect(() => {
    const fetchToDos = async () => {
      try {
        const data = await ToDoListService.getToDos();
        setToDos(data);
      } catch (error) {
        console.error('Error fetching data from To-Dos:', error);
      }
    };

    fetchToDos();
  }, []);

  const removeToDo = async (id: string) => {  // ID como string
    try {
      await ToDoDeleteService.deleteToDo(id);
      setToDos(toDos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting To-Do:', error);
    }
  };

  return { toDos, removeToDo };
};
