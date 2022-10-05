// //  Array of all even number in rage 1-20 with help of function

// function EvenNumbers() {
//   let even = [];
//   for (var i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//       even.push(i);
//     }
//   }
//   console.log(even);
// }

let Users = [
  {
    class: 1,
    name: "Mr.Vineet",
    username: "vineet@123",
    email: "vineet@gmail.com",
    designation: "Full stack Developer",
    address: { street: "12th cross", city: "Belagavi" },
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Voluptates corporis vero necessitatibus dolores placeat quia
ipsam quae ut impedit non in suscipit, autem eveniet! Quas
doloremque nam eos reprehenderit autem magnam accusantium
maiores eaque odio, explicabo tempore consequuntur error minima`,
  },

  {
    class: 2,
    name: "Ms.Vrinda",
    username: "Vrinda@123",
    email: "Vrinda@gmail.com",
    designation: "Fresher",
    address: { street: "12th cross", city: "Bengaluru" },
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Voluptates corporis vero necessitatibus dolores placeat quia
ipsam quae ut impedit non in suscipit, autem eveniet! Quas
doloremque nam eos reprehenderit autem magnam accusantium
maiores eaque odio, explicabo tempore consequuntur error minima`,
  },
  {
    class: 3,
    name: "Mr.Vaman",
    username: "Vaman@123",
    email: "Vaman@gmail.com",
    designation: "DCT",
    address: { street: "12th cross", city: "Gulbarga" },
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Voluptates corporis vero necessitatibus dolores placeat quia
ipsam quae ut impedit non in suscipit, autem eveniet! Quas
doloremque nam eos reprehenderit autem magnam accusantium
maiores eaque odio, explicabo tempore consequuntur error minima`,
  },
  {
    class: 4,
    name: "Mrs.Vasudha",
    username: "Vasudha@123",
    email: "Vasusha@gmail.com",
    designation: "Home Maker",
    address: { street: "12th cross", city: "Hubli" },
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Voluptates corporis vero necessitatibus dolores placeat quia
ipsam quae ut impedit non in suscipit, autem eveniet! Quas
doloremque nam eos reprehenderit autem magnam accusantium
maiores eaque odio, explicabo tempore consequuntur error minima`,
  },
  {
    class: 5,
    name: "Mr.Arvind",
    username: "Arvind@123",
    email: "Arvind@gmail.com",
    designation: "Manager",
    address: { street: "12th cross", city: "Bangalore" },
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Voluptates corporis vero necessitatibus dolores placeat quia
ipsam quae ut impedit non in suscipit, autem eveniet! Quas
doloremque nam eos reprehenderit autem magnam accusantium
maiores eaque odio, explicabo tempore consequuntur error minima`,
  },
];

function userDetails() {
  Users.forEach((user) => {
    document.querySelector(".userInfo").innerHTML += `
    <div class="userCard">
<div class="userDetails user_details">
<!-- User info -->
<img
  class="images userInformation"
  id="userPic"
  src="/images and svgs/user.png"
  alt="Profile picture"
/>

<div id="user_information" class="userInformation">
  <h1 id="name">${user.name}</h1>
  <h2 id="designation">${user.designation}</h2>
  <p id="description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
    tempore.
  </p>
</div>
</div>
<div class="userDetails userdetails_div">
<div class="userDetails contact_details">
  <div>
    <img
      class="images"
      src="./images and svgs/telephone.png"
      alt="Contact number"
    />
    <a id="telephone" href="tel:+917975640884"> +91-7975640884</a>
  </div>

  <div>
    <img
      class="images"
      src="./images and svgs/email.png"
      alt="Contact number"
    />

    <a id="email" href="mailto:${user.email}"
      >${user.email}
    </a>
  </div>

  <div>
    <img
      class="images"
      src="./images and svgs/pin.png"
      alt="Contact number"
    />
    <span id="location"
      >${user.address.city}</span
    >
  </div>
</div>
<div class="userDetails user_description">
  <p id="description">
   ${user.description}
  </p>
</div>
</div>
</div>`;
  });
}

userDetails();