'use client'
import { useActionState, useEffect, useState, use } from "react" // เพิ่ม use สำหรับคลาย params
import { TodoType, URL } from "../constant_final"
import { updateTodo } from "../action"

export default function EditTodo({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params) // ใช้ use(params) แทนการ await ใน useEffect เพื่อความคลีน
    const [todo, setTodo] = useState<TodoType | null>(null)
    const [state, action] = useActionState(updateTodo, null)

    useEffect(() => {
        fetch(`${URL}/${id}`)
            .then(res => res.json())
            .then(data => setTodo(data))
    }, [id])

    if (!todo) return <p>Loading...</p>

    return (
        <div className="p-4">
            <h1>Edit Todo (ID: {id})</h1>
            <form action={action}>
                <input type="hidden" name="id" value={id} />
                <div>
                    <input className="border p-2 my-2" type="text" name="task" defaultValue={todo.task} />
                    {state?.errors?.task && <p className="text-red-500">{state.errors.task[0]}</p>}
                </div>
                <div>
                    <input className="border p-2 my-2" type="number" name="time" defaultValue={todo.time} />
                    {state?.errors?.time && <p className="text-red-500">{state.errors.time[0]}</p>}
                </div>
                <button className="bg-green-500 text-white p-2 rounded" type="submit">Update</button>
            </form>
        </div>
    )
}