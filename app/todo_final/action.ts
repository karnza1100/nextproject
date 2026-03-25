"use server"

import { revalidatePath } from "next/cache"
import { todoSchema, URL } from "./constant_final" // ตรวจสอบว่าไฟล์ชื่อนี้จริง
import { redirect } from "next/navigation"

export async function updateTodo(prevState: any, formData: FormData) {
    const id = formData.get("id") as string
    const task = formData.get("task") as string
    const time = Number(formData.get("time"))

    const data = { task, time } // ไม่ต้องส่ง id ไปใน body ของ PATCH ปกติ

    const result = todoSchema.safeParse(data)
    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors, // ใช้ flatten() จะง่ายกว่า treeify ในกรณีทั่วไป
        }
    }

    try {
        await fetch(`${URL}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
    } catch (e) {
        console.log("Error: " + e)
    }

    revalidatePath("/todo_final") // แก้ให้ตรงกับชื่อโฟลเดอร์
    redirect("/todo_final")
}

export async function deleteTodo(id: string) {
    await fetch(`${URL}/${id}`, {
        method: "DELETE"
    })
    revalidatePath("/todo_final")
}

export async function addTodo(prevState: any, formData: FormData) {
    const task = formData.get("task") as string
    const time = Number(formData.get("time"))

    const result = todoSchema.safeParse({ task, time })
    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        }
    }

    await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task, time })
    })

    revalidatePath("/todo_final")
}