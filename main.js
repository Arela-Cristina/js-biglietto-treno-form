//Train Ticket Rate

//elemento form
const paxForm = document.getElementById('paxForm');

// //rate to travel (0.21 € by km)
// const kmRate = 0.21;
// let fullRate = kmNum * kmRate;

//evento 
paxForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('click')
    //per ottenere il valore, bisogna averli dopo che si e inviata la informazione, cioe dopo submit
    //elemento input
    let name = document.getElementById('name').value;

    //elemento km
    let kmNum = document.getElementById('kmNum').value;

    //elemento age dropdown
    let age = document.getElementById('age');
    let ageOption = age.value;

    console.log(`name: ${name} - kmNum: ${kmNum} - age: ${ageOption}`);

    //rate to travel (0.21 € by km)
    const kmRate = 0.21;
    let fullRate = kmNum * kmRate;

    //impose a 0% discount   as a fullRate
    let discount = fullRate.toFixed(2);
    console.log(`This is full rate $  ${fullRate}`);
    //impose a 20% discount for minor passenger  
    if (ageOption === 'Minor') {
        discount = fullRate * (20 / 100);
        discount = (fullRate - discount).toFixed(2);
        console.log(`Apply 20% discount for minor pax $ ${discount}`);
        //impose a 40% discount for passengers over 65 years old
    } else if (ageOption === 'Over65') {
        discount = fullRate * (40 / 100);
        discount = (fullRate - discount).toFixed(2);
        console.log(`Apply 40% discount for pax over 65 $ ${discount}`)
    }
});
