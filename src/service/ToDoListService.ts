import { httpClient } from "../utils/httpClient";

export interface IToDo {
  id: string;  
  title: string;
  date: string;
  description: string;
}


export class ToDoListService {
  static async getToDos() {
    const response = await httpClient.get("/ToDos");
    return response.data;
  }
}