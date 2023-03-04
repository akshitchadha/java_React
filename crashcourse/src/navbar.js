import { Link } from "react-router-dom";

function NavBar ()  {
    return (  
        <nav className="main-nav">
  <ul className="nav-ul">
   <li className ="nav-li"><Link  className="nav-anchortag" to="/" >Home</Link></li>
   <li className ="nav-li"><Link className="nav-anchortag"  to="/create" >Create</Link></li>
  </ul>
</nav>
    );
}
 
export default NavBar ;