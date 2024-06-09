import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToDoCreateService } from "../../service/ToDoCreateService";

const schema = z.object({
  title: z.string().min(5, 'Must have a title'),
  date: z.coerce.date().refine((data)=> data > new Date(), {
    message: 'Invalid date'
  }),
  description: z.string()
})

type ToDoForm = z.infer<typeof schema>

export function useToDoForm() {
  const {
    register,
    formState: { errors },
    handleSubmit: hookFormHandleSubmit,
  } = useForm<ToDoForm>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const response = await ToDoCreateService.createToDo({
        title: data.title,
        date: data.date,
        description: data.description,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  });

  return { register, handleSubmit, errors };
}