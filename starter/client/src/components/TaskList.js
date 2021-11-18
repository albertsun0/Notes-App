import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Task from './Task'

const TaskList = () => {
    const [tasks, setTasks] = useState([])
  
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/tasks")
        .then(function(response){
            refresh(response.data.tasks)
        })
        .catch(function(error){
            console.log(error)
        })
    }, [])

    const refresh = (data) => {
        console.log(data)
        console.log(data.length)
        setTasks(data)
    } 

    return (
        <div className = "p-4">
            {tasks && (
                tasks.map((task) =>{
                    console.log(task)
                    return <Task key={task._id} name = {task.name} complete = {task.completed} id = {task._id}/>
                }) 
            )}
            
        </div>
    )
}

export default TaskList
