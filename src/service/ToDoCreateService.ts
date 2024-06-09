import { httpClient } from "../utils/httpClient";

export interface IToDo {
  title: string;
  date: Date;
  description: string;
}

export class ToDoCreateService {
  static async createToDo(data: IToDo) {
    const response = await httpClient.post("/ToDos", data);
    return response.data;
  }
}