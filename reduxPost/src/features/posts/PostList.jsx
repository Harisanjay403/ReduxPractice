import {useSelector} from 'react-redux'
import '../posts/PostList.css'



export const PostList = () =>{
    
    const post = useSelector((state)=>state.post)
    
    
    return(
        <>

            <form >
                <div className="input-group">
                    <label htmlFor="title">Title : </label>
                    <input type="text" id="title"/>
                </div>

                <div className="input-group">
                    <label htmlFor="content">Content : </label>
                    <input type="text" id="content"/>
                </div>

                <button> Add Post</button>
            </form>

            {post.map((item)=>(
                <article key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                </article>
            ))}
        </>
    )
}