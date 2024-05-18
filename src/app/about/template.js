'use client'
import styles from "./about.module.css"
import { usePathname } from 'next/navigation'

export default function Template({ children }) {
    const pathname = usePathname()
   
    return (
    <div>
        <h3>This is the template for {pathname} in about page</h3>
        {children}
    </div>
    )
  }