import { URL } from "./constant"
import ListTodo from "./ListTodo"

export default async function Todo() {

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