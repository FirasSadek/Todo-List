import { useRef } from "react";

import useTasks from "./hooks/useTasks";
import paperTasks from "./assets/paper-tasks.png";
import paperNothing from "./assets/paper-nothing.png";

function App() {
  const [tasks, setTasks] = useTasks();
  const newTaskRef = useRef<HTMLInputElement>(null);

  const handleAddTask = () => {
    if (!newTaskRef.current) return;
    const text = newTaskRef.current.value.trim();
    if (!text) return;

    setTasks((prev) => [...prev, { id: Date.now(), completed: false, text }]);
    newTaskRef.current.value = "";
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAddTask();
  };

  const handleTaskCompletion = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleTaskDeletion = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center gap-4 p-4">
      {}
      <div
        className="stage"
        style={{
          backgroundImage: `url(${tasks.length ? paperTasks : paperNothing})`,
        }}
      >
        <ul className="sheet">
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? "done" : ""}>
              <span onClick={() => handleTaskCompletion(task.id)}>
                - {task.text}
              </span>
              <button
                onClick={() => handleTaskDeletion(task.id)}
                aria-label="Delete task"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[min(94vw,640px)] flex gap-2">
        <input
          onKeyDown={handleKeyDown}
          ref={newTaskRef}
          className="flex-1 min-w-0 border-2 border-gray-700 rounded bg-white/80 py-2 px-3 text-xl"
          type="text"
          placeholder="What do you need to do?"
        />
        <button
          onClick={handleAddTask}
          className="bg-[#e8767a] border-2 border-gray-700 rounded px-4 text-xl cursor-pointer hover:brightness-110"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
