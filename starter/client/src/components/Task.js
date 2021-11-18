import React from 'react'
import {useState, useEfect} from 'react'
import {ReactComponent as Delete} from '../assets/remove.svg'
import axios from 'axios'

const Task = (props) => {
    
    const [name, setName] = useState(props.name);
    const [completed, setCompleted] = useState(props.complete);
    const [id, setID] = useState(props.id);
    const deleteFunction = props.delete;
    const toggleComplete = props.toggleComplete;
    
    const check = () =>{
        console.log(completed)
        setCompleted(!completed)
        toggleComplete(id, completed)
    }
    return (
        <div class = "p-4 border-2 rounded-md mb-4" >
            <div class = "flex items-center justify-between">
                <div class = "flex items-baseline" > 
                    {completed ? <input type="checkbox" onClick = {check} checked></input> : <input type="checkbox" onClick = {check}></input> }
                    {completed ? <p class = "ml-4 text-lg float line-through">{name}</p> : <p class = "ml-4 text-lg float">{name}</p>}
                </div>
                
                <Delete class = "float-right fill-current" onClick = {() => deleteFunction(id)}/>
            </div>
            
        </div>
    )
}

export default Task
