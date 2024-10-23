//Train Ticket Rate

//elemento form
const paxForm = document.getElementById('paxForm');




//rate to travel (0.21 € by km)
const kmRate = 0.21;
let fullRate = kmNum * kmRate;

//evento 
paxForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('click')
    //per ottenere il valore, bisogna averli dopo che si e inviata la informazione, cioe dopo submit
    //elemento input
    let name = document.getElementById('name').value;

    //elemento km
    let kmNum = document.getElementById('kmNum').value;

    //elemento age
    let age = document.getElementById('age').value;

    console.log(`name: ${name} - kmNum: ${kmNum} - age: ${age}`)
});
