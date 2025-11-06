import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addTodo } from "@/redux/features/todo/todoSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function AddModal() {
  const [task, setTask] = useState({
    id: "",
    name: "",
    description: "",
  });

  const dispatch = useDispatch();
  const handleTask = (e) => {
    e.preventDefault();
    const randomString = Math.random().toString(36).substring(2, 9);
    setTask((task.id = randomString));
    console.log(task);
    dispatch(addTodo(task));
    setTask({
      id: "",
      name: "",
      description: "",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className=" scale-100 hover:scale-105 active:scale-100 transition-transform duration-300 ease-in-out cursor-pointer"
        >
          Add Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <form onSubmit={handleTask}>
          <div>
            <p>Add Task</p>
          </div>
          <div className="grid gap-4 my-5">
            <div className="grid gap-3">
              <Label htmlFor="name">Task Name</Label>
              <Input
                id="name"
                name="name"
                defaultValue={task.name}
                onBlur={(e) =>
                  setTask((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                defaultValue={task.description}
                onBlur={(e) =>
                  setTask((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
