
'use client'
import { useActionState, useEffect, useState, use } from "react";
import { URL } from "../constant_final";
import { updatePet } from "../action";

export default function EditPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [todo, setTodo] = useState<any>(null);
    const [state, action, isPending] = useActionState(updatePet, null);

    useEffect(() => {
        fetch(`${URL}/${id}`).then(res => res.json()).then(setTodo);
    }, [id]);

    if (!todo) return <div className="flex justify-center items-center h-screen bg-amber-50">Loading...</div>;

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-amber-50">
            <div className="w-64 space-y-4">
                <h2 className="font-bold text-center">Edit</h2>
                <form action={action} className="space-y-3">
                    <input type="hidden" name="id" value={id} />
                    <div>
                        <input className="border p-2 w-full bg-white" name="group" defaultValue={todo.group} />
                        {state?.errors?.group && <p className="text-red-600 text-xs mt-1">{state.errors.group[0]}</p>}
                    </div>
                    <div>
                        <input className="border p-2 w-full bg-white" name="gender" defaultValue={todo.gender} />
                        {state?.errors?.gender && <p className="text-red-600 text-xs mt-1">{state.errors.gender[0]}</p>}
                    </div>
                    <div>
                        <input className="border p-2 w-full bg-white" type="number" name="age" defaultValue={todo.age} />
                        {state?.errors?.age && <p className="text-red-600 text-xs mt-1">{state.errors.age[0]}</p>}
                    </div>
                    <button disabled={isPending} className="bg-green-600 text-white px-4 py-1 rounded text-sm">
                        {isPending ? "Update..." : "Update"}
                    </button>
                </form>
            </div>
        </div>
    );
}