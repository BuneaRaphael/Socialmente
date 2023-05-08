import React, {useState,createContext,useEffect} from "react"
export const ThemeContext= createContext();
export const ThemeContextProvider=({children}) => {

    const[theme,setTheme]=useState(

        JSON.parse(localStorage.getItem("theme"))|| false 
        );

        const toggle = ()=> {
            setTheme(!theme)
        }

        useEffect(()=>{
            localStorage.setItem("theme", theme)
        })

        return(
            <ThemeContext.Provider value={{theme,toggle}}>
                {children}
            </ThemeContext.Provider>
        )
}
