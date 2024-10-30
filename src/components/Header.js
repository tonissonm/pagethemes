import React from "react"
import { useTheme } from "./ThemeContext"

const Header = ()=>{
    const{toggleTheme} = useTheme()
    return(
        <header>
            <h1>Demo Website</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </header>
    )
}
export default Header