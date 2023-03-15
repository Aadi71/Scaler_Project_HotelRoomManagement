import { useEffect, useState } from "react";
import axios from "axios";
import MyForm from "../components/MyForm";

const View = () => {
	const [guests, setGuests] = useState([]);
	useEffect(() => {	
		const fetchData = async () => {
			const response = await axios.get("http://localhost:5000/guests");
			setGuests(response.data);
			console.log(response);
		};
		fetchData();
	}, []);

	async function handleDelete(id){
		const resp =await axios.delete(`http://localhost:5000/guests/${id}`);
		console.log(resp)
	}

	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Email</th>
						<th scope="col">Room Type</th>
						<th scope="col">Room Number</th>
						<th scope="col">Reservation</th>
						<th scope="col">Booking</th>
						<th scope="col">Edit/Delete</th>
					</tr>
				</thead>
			</table>
			<tbody>
				{guests.map((guest) => (
					<tr key={guest._id}>
						<td>{`${guest.user_email}`} &nbsp;</td>
						<td>{guest.room_type} &nbsp;</td>
						<td>{guest.room_number} &nbsp;</td>
						<td>
							{guest.start_time.slice(0,16)}&nbsp; - &nbsp;{guest.end_time.slice(0,16)}&nbsp;
						</td>
						<td>{guest.booking_time.slice(0,16)}&nbsp;</td>
						<td>
							<button>Edit</button>&nbsp;
							<button onClick={()=>handleDelete(guest._id)}>Delete&nbsp;</button>
						</td>
					</tr>
				))}
			</tbody>
		</>
	);
};

export default View;