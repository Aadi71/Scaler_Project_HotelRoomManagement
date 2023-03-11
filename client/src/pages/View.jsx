import { useEffect, useState } from "react";
import axios from "axios";
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

	return (
		<>
			<table>
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
					<tr key={guest.guest_id}>
						<td>{guest.user_email}</td>
						<td>{guest.room_type}</td>
						<td>{guest.room_number}</td>
						<td>
							{guest.start_time} - {guest.end_time}
						</td>
						<td>{guest.booking_time}</td>
						<td>
							<button>Edit</button>
							<button>Delete</button>
						</td>
					</tr>
				))}
			</tbody>
		</>
	);
};

export default View;