import { Link }from 'react-router-dom'
import './App.css';
import { Button } from '@mui/material'
const Navbar = () => {
    return (
        <nav className = 'navbar'>
            <Link to='/tickets'>Buy Tickets</Link>
            <Link to='/sellticket'>Sell A Ticket</Link>
            <a><Button id='editProfile'>Edit profile</Button></a>
            <a><Button id='signOutButton'>Sign out</Button></a>            
        </nav>
    )
}
export default Navbar;