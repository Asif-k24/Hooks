import axios from 'axios';
import { useState, useEffect } from 'react'

interface postType {
    userId?: number;
    id?: number;
    title?: string;
    body?: string;
}

export default function DataFetching() {

    const [post, setPost] = useState<postType>({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id);
    }

    // using axios
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res);
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [idFromButtonClick])

    // using fetch
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then(res => {
    //             console.log(res);
    //             return res.json();
    //         })
    //         .then(data => {
    //             console.log(data);
    //             setPosts(data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }, [])

    return (
        <div>
            <input type="text" value={id} onChange={(e: any) => setId(e.target.value)} />
            <button type='button' onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</ div>
            {/* <ul>
                {
                    post.map((post: postType) => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul> */}
        </div>
    )
}