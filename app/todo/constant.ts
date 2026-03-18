import z from "zod"

export const URL = 'http://localhost:4000/todos'

export type TodoType = {
    id: string
    task?: string
    time?: number
}

export const todoSchema = z.object({
    task: z.string().min(3, "minimum 3 characters").max(10, "max 10 characters"),
    time: z.number().min(10)
})