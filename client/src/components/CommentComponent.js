import React from "react";
import { useEffect, useState } from "react";
function CommentComponent(){
    const [data, setData] = React.useState([]);
    const [picCount, setPicCount] = React.useState(1);

    useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        // .then((data)=> data.forEach((element) => {
        //   setData(data.title += element.title)
        // }))
        .then((data) => setData(data))
    }, []);
    const countDown = ()=>{
        if(picCount > data.length)
        setPicCount(picCount-1)
    }
    const countUp = ()=>{
        if(picCount < data.length)
        setPicCount(picCount+1)
    }
    return(
        <div>
           
            <form method='post' action='/comment'>
                <textarea id='content' name='content'>
                </textarea>
                <input type='number' min={1} max={data.length} defaultValue={picCount} value={picCount}></input>
                <input type='submit' value='Comment'/>
            </form>
            <div className="countUpBTN" onClick={countUp}></div>
            <div className="countDownBTN" onClick={countDown}></div>
        </div>
    )
}

export default CommentComponent;