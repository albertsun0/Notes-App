import React, {useState}  from 'react'
import {ReactComponent as Light} from '../assets/LightMode.svg';
import {ReactComponent as Dark} from '../assets/DarkMode.svg'


const DarkThemeToggle = () => {
    
    const [theme, toggleTheme]  = useState(true)

    const changetheme = () => {
        toggleTheme(!theme)
        const className = 'dark';
        const bodyClass = window.document.body.classList;
        theme ? bodyClass.add(className) : bodyClass.remove(className);
        console.log(theme);
    }

    return (
        <div>
             <div onClick = {changetheme} class="cursor-pointer float-right">
                {theme ? <Dark class = "fill-current" /> :  <Light class = "fill-current" /> }
            </div>
        </div>
    )
}

export default DarkThemeToggle