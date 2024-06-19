import { nanoid } from "@reduxjs/toolkit"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addPost } from "../features/posts/postsSlice"


const AddPostForm:React.FC = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch()
    
    const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
    const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(addPost({id: nanoid(), title, content}))
            setTitle('')
            setContent('')
        }
    }

    return (
        <section>
            <h2>Add New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title</label>
                <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />
                <label htmlFor="postContent">Content</label>
                <textarea id="postContent" name="postContent" value={content} onChange={onContentChanged} />
                <button type="button" onClick={onSavePostClicked}>Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm;