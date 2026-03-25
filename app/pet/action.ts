"use server"

import { revalidatePath } from "next/cache";
import { petSchema, URL } from "./constant_final";
import { redirect } from "next/navigation";

export async function addPet(prevState: any, formData: FormData) {
    const data = {
        group: formData.get("group"),
        gender: formData.get("gender"),
        age: formData.get("age"),
    };

    const result = petSchema.safeParse(data);
    if (!result.success) {
        return { errors: result.error.flatten().fieldErrors };
    }

    await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data)
    });

    revalidatePath("/pet");
}

export async function updatePet(prevState: any, formData: FormData) {
    const id = formData.get("id");
    const data = {
        group: formData.get("group"),
        gender: formData.get("gender"),
        age: formData.get("age"),
    };

    const result = petSchema.safeParse(data);
    if (!result.success) {
        return { errors: result.error.flatten().fieldErrors };
    }

    try {
        await fetch(`${URL}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(result.data)
        });
    } catch (e) {
        console.log("Error: " + e);
    }

    revalidatePath("/pet");
    redirect("/pet");
}

export async function deletePet(id: string) {
    await fetch(`${URL}/${id}`, { method: "DELETE" });
    revalidatePath("/pet");
}

