import {Link} from 'react-router'
import Logo from "../../assets/ChatGPT_Image_2_avr._2026__14_09_52-removebg-preview.png"
import Login from "../../assets/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM-removebg-preview.png"
import'./Navbar.css'

<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap" rel="stylesheet"></link>

function Navbar(){
    return(
          <div className="navbar">
            <img src={Logo} alt="Logo" className='img-nav'/>
            <nav>
                <ul className='ul-nav'>
                    <li className='nav-link'>MISSION</li>
                   <img src={Login} alt="" className="nav-login"/>
                </ul>
            </nav>
          </div>

    )
}

export default Navbar;