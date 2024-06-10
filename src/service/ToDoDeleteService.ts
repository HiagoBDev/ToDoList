// src/service/ToDoDeleteService.ts
import { httpClient } from "../utils/httpClient";

export class ToDoDeleteService {
  static async deleteToDo(id: string) {  // ID como string
    const response = await httpClient.delete(`/ToDos/${id}`);
    return response.data;
  }
}
