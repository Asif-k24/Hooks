import axios from 'axios';
import { useState, useEffect } from 'react'

interface postType {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function DataFetching() {

    const [posts, setPosts] = useState<postType[]>([])

    // using axios
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log(res);
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    /* // using fetch
        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(res => {
                    console.log(res);
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setPosts(data);
                })
                .catch(err => {
                    console.log(err);
                })
        }, []) */

    return (
        <div>
            <ul>
                {
                    posts.map((post: postType) => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}