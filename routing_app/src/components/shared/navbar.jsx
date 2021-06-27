import React from 'react';
// We can also use NavLink (Difference is we can use css)
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/products">Products</Link></li>
            <li><Link to = "/posts">Posts</Link></li>
            <li><Link to = "/admin">Admin</Link></li>
        </ul>
    );
}
 
export default Navbar;