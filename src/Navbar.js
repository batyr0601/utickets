import { Link }from 'react-router-dom'
import './Navbar.css';
import { Button } from '@mui/material'
const Navbar = () => {
    return (
        <nav className = 'navbar'>
            <img id="navbarIcon" src='/images/UTickets.png'></img>
            <Link to='/tickets' class="navLink"><h3 class="navText">BUY TICKETS</h3></Link>
            <Link to='/sellticket' class="navLink"><h3 class="navText">SELL TICKETS</h3></Link>
            <a><Button id='editProfile' class="navButton"><h3 class="navText">EDIT PROFILE</h3></Button></a>
            <a><Button id='signOutButton' class="navButton"><h3 class="navText">SIGN OUT</h3></Button></a>            
        </nav>
    )
}
export default Navbar;