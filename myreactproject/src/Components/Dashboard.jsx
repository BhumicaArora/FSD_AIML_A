import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Link,Outlet } from 'react-router-dom';
const Dashboard=({regdash})=>{
    if(!regdash){
        return(
            <div>
                <Header/>
                <h1>registration data available</h1>
                <Footer/>
            </div>
        );
    }
    return(
        <div>
            <Header/>
                <nav>
                    <ul>
                        <li>
                            <h2>{regdash.email}</h2>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet/>
                <Footer/>
        </div>
    )
}
export default Dashboard;