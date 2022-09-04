import { Task } from "./task";

export interface TaskContextType {
    tasks: Task[];
    createTask: (task: Task) => void;
    deleteTask: (id: number) => void;
}