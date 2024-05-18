import Link from "next/link"
const Header=()=>{
    
    return(
        <>
            <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems:"center", gap:"20px"}}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            </div>
        </>
    )
};

export default Header