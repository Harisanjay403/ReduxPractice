import { createSlice } from '@reduxjs/toolkit'


const initialState=[
    {
        id:1,
        title:"This is a First post title",
        content: "This is a content of the first post"
    },
    {
        id:2,
        title:"This is a second post title",
        content: "This is a content of the second post"
    },
]

export const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{}
})

export default postSlice.reducer