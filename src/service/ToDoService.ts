import { httpClient } from "../utils/httpClient";

export interface IToDo {
  id: number;
  title: string;
  date: string;
  description: string;
}

export class ToDoService {
  static async fetchToDos() {
    const { data } = await httpClient.get("/ToDos");
    return data;
  }
}