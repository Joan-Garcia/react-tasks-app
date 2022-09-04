import { createContext, useEffect, useState } from "react"
import { TaskContextType } from "../models/context";
import { Task, tasks as data } from "../models/task";

export const TaskContext = createContext({} as TaskContextType);

export function TaskContextProvider(props: any) {
    const [tasks, setTasks] = useState([] as Task[]);

    useEffect(() => {
        setTasks(data);
    }, []);

    function createTask(task: Task): void {
        task.id = tasks.length + 1;
        setTasks([...tasks, task]);
    }

    function deleteTask(id: number): void {
        setTasks(tasks.filter((task: Task) => task.id !== id));
    }
    
    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}