"use client"
import React from 'react'
import { useTheme } from "next-themes";
import { LuSunMoon } from "react-icons/lu";


function ThemeToggle () {
    const { theme, setTheme } = useTheme();
    return (
        <button
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className='text-2xl text-primary-900 hover:text-primary-800'
            >
                <LuSunMoon/>
        </button>
    )
}

export default ThemeToggle