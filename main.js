//Train Ticket Rate

//elemento form
const paxForm = document.getElementById('paxForm');

//elemento input
let name = document.getElementById('name');
name = name.value;

//elemento km
let kmNum = document.getElementById('kmNum');
kmNum = kmNum.value;

//elemento age
let age = document.getElementById('age');
age = age.value


//rate to travel (0.21 € by km)
const kmRate = 0.21;
let fullRate = kmNum * kmRate;

//evento 
paxForm.addEventListener('submit', function () {

})
