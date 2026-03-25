import { URL } from "./constant_final"
import ListTodo from "./ListTodo_final"

export default async function Todo_final() {

    const data = await fetchTodo()
    if (!data) {
        return <p className="text-red-500 font-xl font-bold">Fetch Error!!</p>
    }

    return  <ListTodo data={data} />

}

async function fetchTodo() {
    try {
        return await (await fetch(URL)).json()
    }
    catch {
        return null
    }
}