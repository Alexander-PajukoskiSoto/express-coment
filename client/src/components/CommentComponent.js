import React from "react";
function CommentComponent({picCount}){
    return(
        <div>
            <form method='post' action='/comment'>
                <textarea id='content' name='content' className="commentField">
                </textarea>
                <input type='number' value={picCount} id="postId" name="postId" readOnly className="secretIput"></input>
                <input type='submit' value='Comment'/>
            </form>
        </div>
    )
}

export default CommentComponent;