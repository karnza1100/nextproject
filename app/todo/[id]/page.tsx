'use client'

import { useActionState, useEffect, useState } from "react"
import { TodoType, URL } from "../constant"
import { updateTodo } from "../action"

export default function EditTodo({ params }: { params: Promise<{ id: string }> }) {

    const [id, setId] = useState("")
    const [todo, setTodo] = useState<TodoType>({ id: "" })
    const [state, action] = useActionState(updateTodo, {
        errors: {
            task: { errors: [] },
            time: { errors: [] },
        }
    })

    useEffect(() => {
        const fetchTodo = async () => {
            // const id = (await params).id
            const { id } = (await params)  // destructuring
            setId(id)
            const todo = await (await fetch(`${URL}/${id}`)).json()
            console.log("Todo: ", todo)
            setTodo(todo)
        }
        fetchTodo()
    }, [])


    return <> ID: {id}
        <h1>Edit Todo</h1>
        <div>
            <form action={action}>
                <input
                    className="border p-2 my-2"
                    type="text" name="task" defaultValue={todo.task} />
                {(state?.errors && <p className="text-red-500">{state.errors.task?.errors[0]}</p>)}
                <input className="border p-2 my-2"
                    type="number" name="time" defaultValue={todo.time} />
                {(state?.errors && <p className="text-red-500">{state.errors.time?.errors[0]}</p>)}
                <input type="hidden" name="id" value={todo.id} />
                <button className="border p-2 my-2"
                    type="submit">Update</button>
            </form>
        </div>
    </>
}