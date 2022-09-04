import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createTask({title, description});
        setTitle("");
        setDescription("");
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={(e) => handleSubmit(e)} className="bg-slate-800 p-10 mb-4 rounded-md">
                <h1 className="text-2xl text-white font-bold mb-3">Create new task</h1>
                <input
                    value={title}
                    className="bg-slate-300 p-3 w-full mb-2 rounded-md"
                    type="text"
                    placeholder="Type here..."
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                />
                <textarea
                    value={description}
                    className="bg-slate-300 p-3 w-full mb-2 rounded-md"
                    placeholder="Description here..."
                    onChange={(e) => setDescription(e.target.value)}>
                </textarea>
                <button
                    className="bg-indigo-500 text-white rounded-md hover:bg-indigo-400 py-1 mt-4 w-full"
                    disabled={!title || !description}
                >Save</button>
            </form>
        </div>
    )
}