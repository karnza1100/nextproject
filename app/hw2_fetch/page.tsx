'use client'

import { useEffect, useState } from 'react'

// กำหนด Interface ให้ตรงกับข้อมูลของ JSONPlaceholder
type PostType = {
    userId: number
    id: number
    title: string
    body: string
}

export default function FetchPostsPage() {
    // เก็บค่า ID เริ่มต้นที่ต้องการค้นหา (Default เป็น 1)
    const [startId, setStartId] = useState('1')
    // เก็บรายการโพสต์ 5 อัน
    const [posts, setPosts] = useState<PostType[]>([])
    const [loading, setLoading] = useState(false)

    const fetchPosts = async () => {
        setLoading(true)
        try {
            const id = parseInt(startId) || 1
            const postList: PostType[] = []

            // วนลูปดึงข้อมูล 5 โพสต์ต่อเนื่อง (id ถึง id + 4)
            for (let i = id; i < id + 5; i++) {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
                if (response.ok) {
                    const data = await response.json()
                    postList.push(data)
                }
            }
            setPosts(postList)
        } catch (error) {
            console.error("Error fetching posts:", error)
        } finally {
            setLoading(false)
        }
    }

    // เรียกครั้งแรกเมื่อโหลดหน้าเว็บ
    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="p-8 font-sans">
            <h1 className="text-2xl font-bold mb-4">Fetch Posts (5 Consecutive)</h1>
            
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">Start Post ID:</label>
                <input
                    className='rounded border p-2 mr-2 w-24'
                    type="number"
                    value={startId}
                    onChange={e => setStartId(e.target.value)}
                    min="1"
                />
                <button
                    className='rounded bg-blue-500 text-white p-2 hover:bg-blue-600 transition'
                    onClick={fetchPosts}
                    disabled={loading}
                >
                    {loading ? 'Fetching...' : 'Fetch Posts'}
                </button>
            </div>

            <div className="space-y-4">
                {posts.map((post) => (
                    <div 
                        key={post.id} 
                        className="flex flex-col border bg-amber-50 p-4 rounded-lg shadow-sm w-full max-w-2xl"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className="font-bold text-amber-800">Post ID: {post.id}</span>
                        </div>
                        <div className="mb-2">
                            <strong className="text-gray-700">Title:</strong> 
                            <p className="text-gray-900 capitalize">{post.title}</p>
                        </div>
                        <div>
                            <strong className="text-gray-700">Body:</strong>
                            <p className="text-gray-600 text-sm">{post.body}</p>
                        </div>
                    </div>
                ))}

                {posts.length === 0 && !loading && (
                    <p className="text-gray-500">No posts found or invalid ID.</p>
                )}
            </div>
        </div>
    )
}