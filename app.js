// let form = document.getElementById("myForm");
// let cuisine1 = document.getElementById('cuisine1')
// let cuisine2 = document.getElementById('cuisine2')
// let location1 = document.getElementById('location1')
// let location2 = document.getElementById('location1')

// let error = document.getElementById('error')

// let submit = document.getElementById("submitButton");


  
// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let cuisine1Value = cuisine1.value
//     let cuisine2Value = cuisine2.value
//     let location1Value = location1.value
//     let location2Value = location2.value

// //   console.log(cuisine1Value);

//   if (cuisine1Value == " " || cuisine2Value == " " || location1Value == "" || location2Value == "") {
//     error.innerHTML = "Please fill all input";
//   }else if(location1Value !== location2Value){
//     error.innerHTML = "location must be the same";

//   }else{

//     async function fetchData() {
//         const url = 'http://localhost/lighthall-tasks/task%203/process.php';
      
//         const data = `{
//           "cuisine": " cuisine1Value",
//           "cuisine2":"italian",
//           "location":"New york"
//         }`;
      
//         const response = await fetch(url, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: data,
//         });
      
//         const text = await response.text();
      
//         console.log(text);
//       }
      

//     fetchData();

//   }
  
//   });
  

let form = document.getElementById("myForm");
let cuisine1 = document.getElementById('cuisine1');
let cuisine2 = document.getElementById('cuisine2');
let location1 = document.getElementById('location1');
let location2 = document.getElementById('location2');
let error = document.getElementById('error');
let submit = document.getElementById("submitButton");

let result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let cuisine1Value = cuisine1.value;
  let cuisine2Value = cuisine2.value;
  let location1Value = location1.value;
  let location2Value = location2.value;

  if (cuisine1Value === "" || cuisine2Value === "" || location1Value === "" || location2Value === "") {
    error.innerHTML = "Please fill all input fields.";
  } else if (location1Value !== location2Value) {
    error.innerHTML = "Location must be the same.";
  } else {
    try {
      const url = 'http://localhost/lighthall-tasks/task3/process.php';

      const data = JSON.stringify({
        cuisine: cuisine1Value,
        cuisine2: cuisine2Value,
        location: location1Value
      });

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      });

      const text = await response.text();

      const responseObj = JSON.parse(text);
      
      console.log(responseObj.name);
      
      let restaurantName = responseObj.name;
      let restaurantStreet_addrs= responseObj.address['street_addr'];
      let restaurantCity= responseObj.address['city'];
      let country= responseObj.address['country'];
      
      let cuisines = responseObj.cuisines;

    // Iterate over each cuisine
    let cuisinesList = "";
    for (let i = 0; i < cuisines.length; i++) {
    console.log(cuisines[i]);
    cuisinesList += `<li>${cuisines[i]}</li>`;
    }

    result.innerHTML = `
    <div class='text-xl font-bold mb-4'>Restaurant Name: ${restaurantName}</div>
    <div class='mb-4'>
      <h5 class='text-lg font-bold'>Special title treatment</h5>
      <p class='mt-2'>Restaurant Address: ${restaurantStreet_addrs}, ${restaurantCity}, ${country}</p>
    </div>
    <p>Available cuisines:</p>
    <ul>${cuisinesList}</ul>
    <div class='mt-4 text-gray-500'></div>
  `;

    } catch (error) {
      console.error(error);
    }
  }
});
