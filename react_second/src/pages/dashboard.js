//(3rd class)

import { Link,Outlet } from "react-router-dom";

let Layout = () => {

    return(<>

    <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact/contact">Contact</Link></li>
                
            </ul>
        </nav>
        <Outlet/>        
    </>)
}
// without Outlet, child routes will not show on the screen.

export default Layout;


