import Navbar from "../Navbar/Navbar"
import CreateToken from "./CreateToken"
import { Hero } from "./Hero"



const SupportPage = ()=>{
    return (
        <>
        <Navbar/>
        <main>
            <Hero/>
            <CreateToken/>
        </main>
        </>
    )
}

export default SupportPage