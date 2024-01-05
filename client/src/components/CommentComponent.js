import React from "react";

function CommentComponent(){
    return(
        <form method='post' action='/comment'>
            <textarea id='content' name='content'>
            </textarea>
            <input type='number' min={1} max={data.length} defaultValue={1}></input>
            <input type='submit' value='Comment'/>
        </form>
    )
}

export default CommentComponent;