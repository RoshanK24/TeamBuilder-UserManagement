import React from 'react' 
import Navbar from './Navbar'
import { Footer } from './Footer'


const Layout = ({children}) => {
    return (
        <div style={{maxWidth: "100vw"}}>  
            <Navbar/>
            <main style={{ minHeight: "80vh" }}>
                 
                {children}
            </main> 
            <Footer/>
        </div>
    )
} 
export default Layout