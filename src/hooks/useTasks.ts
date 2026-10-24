import type { TaskList } from "../types/Task";
import { useState, useEffect } from "react";

function useTasks() {
  const [tasks, setTasks] = useState<TaskList>(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return [tasks, setTasks] as const;
}

export default useTasks;