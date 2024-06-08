import { useEffect, useState } from 'react';
import { ToDoService, IToDo } from '../../service/ToDoService';

export const useToDo = () => {
  const [toDos, setToDos] = useState<IToDo[]>([]);

  useEffect(() => {
    const fetchToDos = async () => {
      try {
        const data = await ToDoService.fetchToDos();
        setToDos(data);
      } catch (error) {
        console.error('Error matching data from To-Dos:', error);
      }
    };

    fetchToDos();
  }, []);

  return toDos;
};