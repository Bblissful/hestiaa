let form = document.getElementById("myForm");
let cuisine1 = document.getElementById('cuisine1')
let cuisine2 = document.getElementById('cuisine2')
let location1 = document.getElementById('location1')
let location2 = document.getElementById('location1')

let submit = document.getElementById("submitButton");


let cuisine1Value = cuisine1.value

submit.addEventListener("submit", (e) => {
    e.preventDefault();
  
    
console.log(cuisine1Value);
console.log(cuisine2);
console.log(location1);
console.log(location2);


})
  