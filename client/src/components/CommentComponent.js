import React from "react";
function CommentComponent({picCount,sessionData}){
    return(
        <div>
            <form method='post' action='/comment'>
                <textarea id='content' name='content' className={`commentField auth${String(sessionData.authenticated)}`} maxlength="255">
                </textarea>
                <input type='number' value={picCount} id="postId" name="postId" readOnly className="secretInput"></input> <br/>
                <input type='submit' value='Comment' className={'submitComment'}/>
            </form>
        </div>
    )
}

export default CommentComponent;