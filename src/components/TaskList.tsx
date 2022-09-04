import { useContext } from "react"
import { TaskContext } from "../context/TaskContext";
import { Task } from "../models/task"
import { TaskCard } from "./TaskCard"

export function TaskList() {

    const { tasks } = useContext(TaskContext);

    if (tasks.length === 0) return <h1 className="text-white text-4xl font-bold text-center">No tasks yet...</h1>

    return (
        <div className="grid grid-cols-4 gap-2">
            {
                tasks.map((task: Task) => {
                    return (<TaskCard key={task.id} task={task}/>)
                })
            }
        </div>
    )
}