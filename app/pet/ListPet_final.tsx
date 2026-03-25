'use client'
import { useActionState } from "react";
import { addPet, deletePet } from "./action";
import Link from "next/link";
import Image from 'next/image'

export default function ListPet({ data }: { data: any[] }) {
    const [state, action, isPending] = useActionState(addPet, null);

    return (
        <div className="w-80 space-y-6">
            <div className="bg-amber-50 border border-gray-300 p-4 rounded-lg shadow-sm">
                <h2 className="font-bold mb-2 text-lg">Add Pet</h2>
                <form action={action} className="space-y-2">
                    <input className="bg-gray-50 border p-2 w-full rounded" name="group" placeholder="group" />
                    {state?.errors?.group && <p className="text-red-600 text-xs">{state.errors.group[0]}</p>}

                    <input className="bg-gray-50 border p-2 w-full rounded" name="gender" placeholder="gender" />
                    {state?.errors?.gender && <p className="text-red-600 text-xs">{state.errors.gender[0]}</p>}

                    <input className="bg-gray-50 border p-2 w-full rounded" type="number" name="age" placeholder="age" />
                    {state?.errors?.age && <p className="text-red-600 text-xs">{state.errors.age[0]}</p>}

                    <div className="flex justify-between items-center pt-2">
                        <button disabled={isPending} className="bg-green-600 text-white px-4 py-1 rounded text-m">
                            {isPending ? "Add..." : "Add"}
                        </button>
                        {/* <button disabled={isPending} className="bg-yellow-400 text-white px-4 py-1 rounded text-m">
                            {isPending ? "Clear..." : "Clear"}
                        </button> */}

                        <div>
                            <img src="/pet.jpg" className="w-8 h-8 rounded-full" alt="pet" />

                        </div>


                    </div>
                </form>
            </div>

            <div className=" space-y-4">
                <h2 className="font-bold">List Pet</h2>
            </div>
            <div className=" bg-amber-50 border border-gray-300 p-2 rounded-lg shadow-sm space-y-2">
                {/* <h2 className="font-bold">List Pet</h2> */}
                {data.map((pet, idx) => (
                    <div key={pet.id} className="bg-blue-50 border border-gray-300 p-3 rounded-lg relative">
                        <div className="flex justify-end gap-1 absolute top-2 right-2">
                            <button onClick={() => deletePet(pet.id)} className="bg-red-600 text-white px-2 rounded text-s">x</button>
                            <Link href={`/pet/${pet.id}`} className="bg-green-600 text-white px-2 rounded text-s">edit</Link>
                        </div>
                        <p className="text-sm"><b>Type:</b> {pet.group}</p>
                        <p className="text-sm"><b>Gender:</b> {pet.gender}</p>
                        <p className="text-sm"><b>Age:</b> {pet.age} years</p>
                        <span className="absolute bottom-2 right-2 bg-amber-100 border border-gray-400 px-1 text-s rounded">{idx + 1}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}