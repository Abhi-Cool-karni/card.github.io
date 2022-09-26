//  Array of all even number in rage 1-20 with help of function

function EvenNumbers() {
  let even = [];
  for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
      even.push(i);
    }
  }
  console.log(even);
}

let Users = [
  {
    class: 1,
    name: "Mr.Vineet",
    username: "vineet@123",
    email: "vineet@gmail.com",
    address: { street: "12th cross", city: "Belagavi" },
    location: [10.223, 12.36],
  },

  {
    class: 2,
    name: "Ms.Vrinda",
    username: "Vrinda@123",
    email: "Vrinda@gmail.com",
    address: { street: "12th cross", city: "Bengaluru" },
    location: [10.223, 12.36],
  },
  {
    class: 3,
    name: "Mr.Vaman",
    username: "Vaman@123",
    email: "Vaman@gmail.com",
    address: { street: "12th cross", city: "Gulbarga" },
    location: [10.223, 12.36],
  },
  {
    class: 4,
    name: "Mrs.Vasudha",
    username: "Vasudha@123",
    email: "Vasusha@gmail.com",
    address: { street: "12th cross", city: "Hubli" },
    location: [10.223, 12.36],
  },
];

// console.log(namePara);
function userDetails() {
  Users.forEach((user) => {
    document.querySelector(".userDetails").innerHTML += `
    <div class="user">
      <span class="details">${user.name}</span>
      <p class="details"><b>Username: </b>${user.username}</p>
      <p class="details"><b>Email: </b>${user.email}</p>
      <address class="details"><b>Address: </b>${user.address.street}, ${
      user.address.city
    }</address>
      <p class="details"><b>Location: </b>${"Lat: " + user.location[0]} ${
      "Long: " + user.location[1]
    }</p>
    </div>`;
  });
}

userDetails();
