'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
const URL = 'https://api.github.com/users'

type UserType = {
    login: string
    location: string
    blog: string
    avatar_url: string
}

export default function FetchPage() {


    const [name, setName] = useState('wwarodom')
    const [data, setData] = useState({} as UserType)

    const fetchUser = async () => {
        const response = await fetch(`${URL}/${name}`)
        const data = await response.json()
        console.log("Response: ", data)
        setData(data)
    }

    useEffect(() => {
        console.log("Use effect")
        fetchUser()
    }, [])
 
    return (
        <div>
            <h1>Fetch</h1>
            <div>
                <input
                    className='rounded border p-2 mr-2'
                    type="text" name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <button
                    className='rounded border p-2 mb-2'
                    onClick={fetchUser}
                >Fetch</button>
            </div>

            {/* <div>{JSON.stringify(data)} </div> */}
            <div className="flex border bg-amber-100 p-4 rounded-lg justify-between items-center w-90">
                <div>
                    <div>
                        login:  {data.login}
                    </div>
                    <div>
                        location: {data.location}
                    </div>
                    <div>
                        blog: {data.blog}
                    </div>
                </div>
                <div>
                    <Image
                        loading="eager"
                        className='rounded-full w-auto h-auto'
                        src={data.avatar_url ?? '/cat.jpeg'} width={70} height={70} alt="github image" />

                </div>
            </div>


        </div>
    )
}