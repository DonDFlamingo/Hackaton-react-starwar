import {Link} from 'react-router'
import Login from "../../assets/74-746008_icon-for-user-user-icon-png-white-transparent-removebg-preview.png"
import'./Navbar.css'

<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap" rel="stylesheet"></link>

function Navbar(){
    return(
          <div className="navbar">
            <Link to="/" className='logo-nav'>
            <h1 className='logo-nav'>GALATIC  CONTRACT</h1>
            </Link>
            <nav>
                <ul className='ul-nav'>
                    <Link to="/mission" className='nav-link'>
                    <li className='nav-link'>MISSION</li>
                    </Link>
                    <Link to="/login">
                   <img src={Login} alt="" className="nav-login"/>
                   </Link>
                </ul>
            </nav>
          </div>

    )
}

export default Navbar;