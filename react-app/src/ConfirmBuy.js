import { Button } from "@mui/material"
import SingleTicket from "./SingleTicket"
import { Link, useParams} from 'react-router-dom'
function ConfirmBuy() {
    const {ticketId} = useParams()

    function buyTicket() {

    }
    return (
        <div className="App">
            <h3>Are you sure you would like to purchase this ticket?</h3>
            <Link to={{pathname: "complete", state: ticketId}}>YES</Link>
            {/* <Button variant="contained" color="primary" onClick={buyTicket}>YES</Button> */}
        </div>

    )
}

export default ConfirmBuy