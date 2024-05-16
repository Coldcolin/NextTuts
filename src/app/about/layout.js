import Header from "@/components/Header"

export default function Layout({children}){
    const state = "Chima"
    return(
        <div>
            <Header state={state} stay={5}/>
            {children}
            <h1>This is the Layout on all About Pages</h1>
            
        </div>
    )
}