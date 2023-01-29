import Post from "./Post";
import classes from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";

function PostList(props) {
    const posts = useLoaderData();

    return (
        <>
            {posts?.length && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post key={post.id} id={post.id} author={post.author} body={post.body} />
                    ))}
                </ul>
            )}
            {!posts?.length && (
                <div style={{ textAlign: "center", color: "white" }}>
                    <h3>There is no post!</h3>
                    <p>Add some post!</p>
                </div>
            )}
        </>
    );
}

export default PostList;
