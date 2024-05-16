'use client'
import henry from "./about.module.css"
import { usePathname } from 'next/navigation'

export default function Template({ children }) {
    const pathname = usePathname()
    console.log(pathname)
    return (
    <div>
        <h3 style={pathname == "/about/vision"? {color: "yellow"}: {color: "green"}}>This is the template</h3>
        {children}
        <p className={pathname == "/about/vision"? henry.theA: henry.theP}>{pathname}</p>
    </div>
    )
  }