import { useState } from 'react'
import Post from "./Post"
import classes from './PostList.module.css'
import NewPost from "./NewPost"

function PostList(props) {

    const [enteredBody, setEnteredBody] = useState('')
    const [enteredAuthor, setEnteredAuthor] = useState('')

    function changeBodyHandler(event) {
        setEnteredBody(event.target.value)
    }

    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value)
    }

    return (
        <>
            <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler} />
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Bipin" body="React.js is awesome" />
            </ul>
        </>
    )
}

export default PostList