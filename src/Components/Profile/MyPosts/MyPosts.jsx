import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Posts message={p.message} likes={p.likes}/>)

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}
export default MyPosts