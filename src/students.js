import React from "react"

function students (props){
    return(
        <div>
            <h2>First position : {props.firstStudent}</h2>
            <h2>Second Position : {props.secondStudent}</h2>
        </div>
    )
}
export default students;
