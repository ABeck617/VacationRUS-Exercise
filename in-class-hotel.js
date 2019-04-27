// START HERE
// 1. Create a hotel object assigned to a variable for Hotel Paradise.  This hotel needs the following attributes:
// -has 50 total rooms
// -keeps track of the number of booked rooms - set to 0
// -has a gym - NO
// -has a pool - YES
// -allows pets - NO

let hotel1 = {
	name: "hotel Paradise",
	rooms: 50,
	hasGym: false,
	hasPool: true,
	allowsPets: false,
	booked: 0,};


// 2. Create a second variable for Quay Hotel
// -has 75 total rooms
// -keeps track of the number of booked rooms - set to 0
// -has a gym - YES
// -has a pool - YES
// -allows pets - YES

let hotel2 = {
	name: "Quay Hotel",
	rooms: 75,
	hasGym: true,
	hasPool: true,
	allowsPets: true,
	booked: 0,};


// 3. Create a third variable for Parker Place
// -has 140 total rooms
// -keeps track of the number of booked rooms - set to 0
// -has a gym - YES
// -has a pool - YES
// -allows pets - YES


	

	let hotel3 = {
		name: "Parker Place",
		rooms: 140,
		hasGym: true,
		hasPool: true,
		allowsPets: false,
		booked: 0,};
	
	


// 4. Print the name of each hotel on a separate line


  let buildings = ["Hotel Paradise", "Quay Hotel", "Parker Place"];
for(let i=0; i < buildings.length; i++){
	console.log("This hotel is called " + buildings[i].name);
}
   

// 5. Use square bracket syntax to print the total number of rooms each hotel has


let rooms = [50, 75, 140];

for(let i = 0; i < rooms.length; i++) {
	console.log("    " + rooms[i].name);

}

console.log("\n");

// 6. Since the hotel has yet to accept bookings, confirm none of the rooms are booked by printing the
// number of rooms booked



// 7. Print the names of hotels that have gyms
//console.log("-------------\n");
//console.log("7. Hotels with Gyms");


// 8. Calculate and print the number of rooms available per hotel
//console.log("-------------\n");
//console.log("8. Rooms Available");


// 9. The Marketing Team believes the new site has 500 rooms, but the Construction Team says less than 300.
// To resolve this squabble, print the total number of rooms by adding this across all 3 hotels.
//console.log("-------------\n");
//console.log("9. Total Rooms Across All Hotels");
