import Header from "@/components/Header"
import Link from "next/link"

export default function Layout({children}){
    const theStyle={width: "50%",
     display: "flex", 
     justifyContent: "center", 
     alignItems:"center", 
     gap:"20px"
    }
    
    return(
        <div>
            <h1>Layout for About Pages</h1>
            <div style={theStyle}>
            <Link href="/about/story">Story</Link>
            <Link href="/about/vision">Vision</Link>
            </div>
            {children}
        </div>
    )
}