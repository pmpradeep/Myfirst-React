import { Link, Outlet } from "react-router-dom";


export default function Nav() {
  return (
    <>
     
      <nav className="navbar">
        
        <ul  >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Secondsec">Secondsec</Link>
          </li>
          <li>
            <Link to="/Thirdsec">Thirdsec</Link>
          </li>
          

        </ul>
      </nav>
    
      <Outlet />
    </>


  );
}

