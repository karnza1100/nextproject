'use client'

import { useActionState } from "react";
import { TodoType } from "./constant_final";
import { addTodo, deleteTodo } from "./action";
import Link from "next/link";

export default function ListTodo({ data }: { data: TodoType[] }) {
    const [state, action, isPending] = useActionState(addTodo, null)

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold my-4">Todo List</h1>
            <hr />
            <form action={action} className="my-4">
                <h2 className="text-lg my-2">Add New</h2>
                <div>
                    <input className="border p-2 rounded" type="text" name="task" placeholder="task" />
                    {state?.errors?.task && <p className="text-red-600">{state.errors.task[0]}</p>}
                </div>
                <div>
                    <input className="border p-2 my-2 rounded" type="number" name="time" placeholder="time" />
                    {state?.errors?.time && <p className="text-red-600">{state.errors.time[0]}</p>}
                </div>
                <button className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-400" disabled={isPending}>
                    {isPending ? "Adding..." : "Add Todo"}
                </button>
            </form>
            <hr />
            <div className="mt-4">
                {data.map((item) => (
                    <div key={item.id} className="flex items-center gap-2 mb-2">
                        <span>{item.task} ({item.time} mins)</span>
                        <button className="bg-red-500 text-white px-2 rounded" onClick={() => deleteTodo(item.id)}>x</button>
                        <Link className="bg-yellow-500 text-white px-2 rounded" href={`/todo_final/${item.id}`}>
                            Edit
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}