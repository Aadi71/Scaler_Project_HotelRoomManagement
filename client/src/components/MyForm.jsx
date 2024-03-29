import { useState,useEffect } from "react";
import axios from "axios";


function MyForm() {
	const [inputs, setInputs] = useState({});
	const [showRooms, setShowRooms] = useState(false);
	const [rooms, setRooms] = useState([]);
	const [roomTypes, setRoomTypes] = useState([]);
	const [price,setPrice] = useState(0)

	async function getRoomTypes(){
		const resp = await axios.get("http://localhost:5000/rooms/roomTypes")
		setRoomTypes(resp.data);
		
		console.log(resp.data)
		// return resp.data;
	}

	useEffect(()=>{
		getRoomTypes();
	},[])

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs)
	};
	
	function getRoom(arr,type){
		let temp;
		arr.map(room => {
			if(room.name===type){
				console.log(room,"Price Check Display")
				temp = room.price
			}
			// console.log(room,"huihuihui")
		})
		return temp;
	};

	const getTimeDiff =  () => {
		const t1 = new Date(inputs.start_time);
		const t2 = new Date(inputs.end_time);
		var diff = Math.abs(t2.getTime() - t1.getTime()) / 3600000;
		return (Math.floor(diff));
	};


	const handleSubmit = async (event, user) => {
		event.preventDefault();
		console.log(inputs);
		const response = await axios.post(
			"http://localhost:5000/guests/recommend",
			{
				room_type: inputs.room_type,
				start_time: inputs.start_time,
				end_time: inputs.end_time,
			}
		);
		

			
		const tempPrice = getRoom(roomTypes,inputs.room_type)
		console.log(tempPrice)

		if (response.status === 200) {
			const tempTimeDiff = getTimeDiff()
			// console.log(tempTimeDiff,typeof tempTimeDiff,"fenfnenf")
			const finalPrice = tempTimeDiff * tempPrice;
			console.log(finalPrice,"final")
			setShowRooms(true);
			setPrice(finalPrice); 	
			setRooms(response.data);
			
		}

		console.log(response);
		// alert(inputs);
	};

	// const toggleRoom = async

	const bookRoom = async (event) => {
		// console.log(event.target.innerText, typeof +event.target.innerText);
		const response = await axios.post("http://localhost:5000/guests", {
			room_type: inputs.room_type,
			room_number: +event.target.innerText,
			start_time: inputs.start_time,
			end_time: inputs.end_time,
			user_email: inputs.email,
			payment:price
		});
		console.log(response, "booked");
		setShowRooms(false);
		setRooms([]);
	};

	return (
		<>
			<form className="form" onSubmit={handleSubmit}>
				<label className="input">
					Enter your name:
					<input
						type="text"
						name="username"
						value={inputs.username || ""}
						onChange={handleChange}
					/>
					<br />
				</label>
				<label className="input">
					Enter your email:
					<input
						type="text"
						name="email"
						value={inputs.email || ""}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label className="input">
					Enter start time:
					<input
						type="datetime-local"
						name="start_time"
						value={inputs.start_time || ""}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label className="input">
					Enter end time:
					<input
						type="datetime-local"
						name="end_time"
						value={inputs.end_time || ""}
						onChange={handleChange}
					/>
				</label>
				<br />
        <label className="input" required>Enter Room Type:
        <select name="room_type" id="room_type" defaultValue="A" onChange={handleChange}>
          <option value=""  disabled>Please select an option...</option>

          <option value="A">A(100/hr)</option>
          <option value="B">B(80/hr)</option>
          <option value="C">C(50/hr)</option>
        </select>
      </label>
      <br /> 
				<input type="submit" className="submit" value="Get Recommendations" />
			</form>
			{showRooms && (
				<div>
					Price for this room type with respect to time duration will be: {price}
					<h2>Recommended Rooms</h2>
					{rooms.length === 0
						? "No room available for this time"
						: rooms.map((room) => (
								<div key={room.room_id}>
									<button onClick={(e) => bookRoom(e)}>
										{room.room_number}
									</button>
								</div>
						  ))}
				</div>
			)}
		</>
	);
}

export default MyForm;