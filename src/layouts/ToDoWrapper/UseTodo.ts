import { useEffect, useState } from 'react';
import { ToDoListService, IToDo } from '../../service/ToDoListService';

export const useToDo = () => {
  const [toDos, setToDos] = useState<IToDo[]>([]);

  useEffect(() => {
    const fetchToDos = async () => {
      try {
        const data = await ToDoListService.getToDos();
        setToDos(data);
      } catch (error) {
        console.error('Error matching data from To-Dos:', error);
      }
    };

    fetchToDos();
  }, []);

  return toDos;
};