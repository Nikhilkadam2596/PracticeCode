
import { useState, useEffect } from "react";
const Header = () => {

    const[theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "light")

  useEffect(()=>{
    localStorage.setItem("theme", JSON.stringify(theme))
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
    
  }, [theme]);
  return (
    <header >
        <div className="title">
            <span>Note-Mate</span>
        </div>

        <div className="themeSelector">
        <span className={theme === "light" ? "light activeTheme" : "light"} onClick={()=>setTheme("light")}></span>
        <span className={theme === "dark" ? "dark activeTheme" : "dark"} onClick={()=>setTheme("dark")}></span>

        </div>
    </header>
  )
}

export default Header
