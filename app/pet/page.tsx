import { URL } from "./constant_final";
import ListPet from "./ListPet_final";

export default async function Page() {
    const res = await fetch(URL, { cache: 'no-store' });
    const data = await res.json();

    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-8">
            <ListPet data={data} />
            <footer className="mt-8 text-2xl font-bold">Copyright reserved 2026</footer>
        </div>
    );
}