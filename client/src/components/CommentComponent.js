import React from "react";
function CommentComponent({picCount,countUp,countDown}){
    return(
        <div>
           
            <form method='post' action='/comment'>
                <textarea id='content' name='content'>
                </textarea>
                <input type='number' value={picCount} id="postId" name="postID"readOnly></input>
                <input type='submit' value='Comment'/>
            </form>
        </div>
    )
}

export default CommentComponent;