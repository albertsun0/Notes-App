import React from 'react'
import DarkThemeToggle from './DarkThemeToggle'

const Header = () => {
    return (
        <div class = "flex">
            <div class = "p-4 flex items-center w-screen justify-between rounded-m">
                <p class = "text-4xl block">Tasks</p>
                
                <DarkThemeToggle class="float-right"/>
            </div>
        </div>
    )
}

export default Header
