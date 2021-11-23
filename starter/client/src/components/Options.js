import React from 'react'
import {useState} from 'react'

const Options = () => {
    const [selected, setSelection] = useState(-1)
    const colors = ['#F88181','#F1AF89','#fffcab', '#a7f3d0', '#7FB685']

    const select = (index) =>{
        setSelection(index)
    }

    return (
        <div class ="border-2 rounded-md p-4 mb-4">
            <p class = "mb-4">Options</p>
            <div class="flex items-center justify-left mb-2">
                <p class = "mr-4">Stress:</p>
                {colors.map ((color, index) => {
                    if(index == selected){
                        return <div key={index} class = "w-5 h-5 rounded-full mr-4" style={{backgroundColor:color}}></div>
                    }else{
                        return <div key={index} class = "w-4 h-4 rounded-full mr-4" style={{backgroundColor:color}} onClick = {()=> select(index)}></div>
                    }
                    
                }
                )}
            </div>
           
        </div>
    )
}

export default Options
