import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Task from '/Task'

const TaskList = () => {
    const [tasks, setTasks] = useState({});

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/tasks")
        .then(function(response){
            refresh(response.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }, [])

    const refresh =(data) => {
        console.log(data)
        setTasks(data)
    } 

    return (
        <div>
            <Task/>
        </div>
    )
}

export default TaskList
