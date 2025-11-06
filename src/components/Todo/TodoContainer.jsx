import React from "react";
import TodoList from "./TodoList";
import { AddModal } from "./AddModal";
import { FilterButton } from "./FilterButton";
import { useSelector } from "react-redux";

const TodoContainer = () => {
  const tasks = useSelector((state) => state.todo.todos);
  return (
    <div className="bg-white p-6 rounded-sm">
      <div className="flex justify-end gap-5 mb-3">
        <AddModal />
        <FilterButton />
      </div>
      <div className="space-y-2">
        {tasks.length > 0 ? (
          tasks?.map((task, index) => (
            <TodoList {...task} key={task?.id || index} />
          ))
        ) : (
          <div className="text-center bg-muted p-4 rounded-md mt-5">
            No Todos On the Bucket
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
