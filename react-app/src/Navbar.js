import { Link }from 'react-router-dom'
import './App.css';

const Navbar = () => {
    return (
        <nav className = 'navbar'>
            <Link to='/tickets'>Buy Tickets</Link>
            <Link to='/sellticket'>Sell A Ticket</Link>
            {/* <div id="indicator"></div> */}
        </nav>
    )
}
export default Navbar;