import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import exp from "constants";

interface Post {
    id: String,
    title: String,
    content: String
}

interface PostsState {
    posts: Post[]
}

const initialState: PostsState = {
    posts: []
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<Post>) => {
            state.posts.push(action.payload)
        },
        updatePost: (state, action: PayloadAction<Post>) => {
            const index = state.posts.findIndex(post => post.id === action.payload.id)
            if (index !== -1) {
                state.posts[index] = action.payload
            }
        },
        deletePost: (state, action: PayloadAction<string>) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        }
    }
})

export const { addPost, updatePost, deletePost } = postsSlice.actions
export default postsSlice.reducer