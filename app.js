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
      const url = 'http://localhost/lighthall-tasks/task%203/process.php';

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

      console.log(text);


    } catch (error) {
      console.error(error);
    }
  }
});
