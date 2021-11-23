import React from 'react'
import {useState} from 'react'
import {ReactComponent as Delete} from '../assets/remove.svg'

const Task = (props) => {
    
    const name = props.name;
    const [completed, setCompleted] = useState(props.complete);
    const id = props.id; 
    const deleteFunction = props.delete;
    const toggleComplete = props.toggleComplete;
    const colors = ['transparent','#F88181','#F1AF89','#fffcab', '#a7f3d0', '#7FB685'];

    const stress = colors[props.stress];
   
    const importance = colors[props.importance];

    const check = () =>{
        console.log(completed)
        setCompleted(!completed)
        toggleComplete(id, completed)
    }
    return (
        <div class = "p-4 border-2 rounded-md mb-4" >
            <div class = "flex items-center justify-between">
                <div class = "flex items-baseline justify-items-stretch" > 
                    {completed ? <input type="checkbox" onClick = {check} defaultChecked></input> : <input type="checkbox" onClick = {check}></input> }
                    {completed ? <p class = "ml-4 text-lg float line-through">{name}</p> : <p class = "ml-4 text-lg float ">{name}</p>}
                </div>
                <div class = "flex items-center justify-items-stretch">
                    <div class = "w-4 h-4 float-right rounded-full mr-4" style={{backgroundColor:stress}}></div>
                    <div class = "w-4 h-4 float-right rounded-full mr-4" style={{backgroundColor:importance}}></div>
                    <Delete class = "float-right fill-current cursor-pointer" onClick = {() => deleteFunction(id)} style={{ height: 20, width: 20 }}/>
                </div>
                
            </div>
            
        </div>
    )
}

export default Task
