// START HERE
// 1. Create a hotel object assigned to a variable for Hotel Paradise.  This hotel needs the following attributes:
// -has 50 total rooms
// -keeps track of the number of booked rooms - set to 0
// -has a gym - NO
// -has a pool - YES
// -allows pets - NO
// 2. Create a second variable for Quay Hotel
// -has 75 total rooms
// -keeps track of the number of booked rooms - set to 0
// -has a gym - YES
// -has a pool - YES
// -allows pets - YES
// 3. Create a third variable for Parker Place
// -has 140 total rooms
// -keeps track of the number of booked rooms - set to 0
// -has a gym - YES
// -has a pool - YES
// -allows pets - YES


let hotels = [{
	name: "Hotel Paradise",
	totalRms: 50,
	bookedRms: 0,
	gym: 'no',
	pool: 'yes',
	pets: 'no',
	numOfRoomsAvailable: function () {
		return this.totalRms - this.bookedRms;
	},
	roomTypes: ['single', 'double', 'triple', 'king', 'suite'],
}, {
	name: "Quay Hotel",
	totalRms: 75,
	bookedRms: 0,
	gym: 'yes',
	pool: 'yes',
	pets: 'yes',
	numOfRoomsAvailable: function () {
		return this.totalRms - this.bookedRms;
	},
	roomTypes: ['single', 'double', 'triple'],
}, {
	name: "Parker Place",
	totalRms: 140,
	bookedRms: 0,
	gym: 'no',
	pool: 'yes',
	pets: 'no',
	numOfRoomsAvailable: function () {
		return this.totalRms - this.bookedRms;
	},
	roomTypes: ['single', 'double', 'king', 'suite'],
}]



// 4. Print the name of each hotel on a separate line
console.log("-------------\n");
console.log("4. Hotel Names");


for (let i = 0; i < hotels.length; i++) {
	console.log(hotels[i].name);
}
// 5. Use square bracket syntax to print the total number of rooms each hotel has


console.log("-------------\n");
console.log("5. Total Rooms");

for (let i = 0; i < hotels.length; i++) {
	console.log(hotels[i].totalRms);
}



// 6. Since the hotel has yet to accept bookings, confirm none of the rooms are booked by printing the
// number of rooms booked

console.log("-------------\n");
console.log("6. Rooms Booked");

for (let i = 0; i < hotels.length; i++) {
	console.log(hotels[i].bookedRms);
}


// 7. Print the names of hotels that have gyms
//console.log("-------------\n");
//console.log("7. Hotels with Gyms");


console.log("-------------\n");
console.log("7. Hotels with Gyms");
for (let i = 0; i < hotels.length; i++) {
	if (hotels[i].gym === 'yes') {
		console.log(hotels[i].name + ' has a gym');
	}
}



// 8. Calculate and print the number of rooms available per hotel
//console.log("-------------\n");
//console.log("8. Rooms Available");


console.log("-------------\n");
console.log("8. Rooms Available");



let availableRooms = 0;
for (let i = 0; i < hotels.length; i++) {
	availableRooms = hotels[i].totalRms - hotels[i].bookedRms;
	console.log('There are ' + availableRooms + ' rooms available at ' + hotels[i].name);
}



// 9. The Marketing Team believes the new site has 500 rooms, but the Construction Team says less than 300.
// To resolve this squabble, print the total number of rooms by adding this across all 3 hotels.
//console.log("-------------\n");
//console.log("9. Total Rooms Across All Hotels");


console.log("-------------\n");
console.log("9. Total Rooms Across All Hotels");let roomArray;



let sumOfAllRooms = 0;
for (let i = 0; i < hotels.length; i++) {
	roomArray = hotels[i].totalRms;
	sumOfAllRooms += roomArray;
}




console.log('9. The total number of rooms is ' + sumOfAllRooms);

