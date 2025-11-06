import React from "react";
import { Button } from "../ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "@/redux/features/todo/todoSlice";

const TodoList = ({ id, description, name, isCompleted }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center bg-muted p-3 rounded-md font-semibold">
      <Checkbox
        id={`todo-${id}`}
        className="bg-white"
        checked={isCompleted}
        onCheckedChange={() => {
          dispatch(toggleTodo(id));
        }}
      />
      <p>{name}</p>
      <p>{new Date().toLocaleDateString()}</p>
      <p>
        {isCompleted ? (
          <p className="text-green-400 bg-green-200 px-2 rounded-md py-1 text-sm">
            Yes
          </p>
        ) : (
          <p className="text-red-400 bg-red-200 px-2 rounded-md py-1 text-sm">
            No
          </p>
        )}
      </p>
      <p>{description}</p>
      <div className="flex gap-2">
        <Button
          onClick={() => dispatch(removeTodo(id))}
          variant="destructive"
          className=" scale-100 hover:scale-105 active:scale-100 transition-transform duration-300 ease-in-out cursor-pointer"
        >
          <Trash2 className="h-5 w-5" />{" "}
        </Button>
        <Button className="bg-blue-400 text-white hover:bg-blue-500 scale-100 hover:scale-105 active:scale-100 transition-transform ease-in-out cursor-pointer duration-300 ">
          <Pencil className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default TodoList;
