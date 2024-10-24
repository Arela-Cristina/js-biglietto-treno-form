//Train Ticket Rate

//elemento form
const paxForm = document.getElementById('paxForm');

//element bottone che cancella dati del form
const cleanForm = document.getElementById('cleanForm');

//elemento output display
const outputFormDisplay = document.querySelector('.outputFormDisplay');

//elenco elementi del DOM output mi serviranno dopo
//elemento outputName
let outputName = document.querySelector('.outputName');
//elemento outputAge
let outputAge = document.querySelector('.outputAge');
//elemento ticketRate
let rate = document.querySelector('.rate');
//elemento carriage
let carriage = document.querySelector('.carriage');
//elemento code
let code = document.querySelector('.code');

//evento 
paxForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('click')
    //per ottenere il valore, bisogna averli dopo che si e inviata la informazione, cioe dopo submit
    // aggiungo display quando invio il form
    outputFormDisplay.style.removeProperty('display');
    outputFormDisplay.style.display = 'flex';

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

    //elenco outputForm, cambiamo il InnerHTMl al click del evento
    //elemento outputName
    outputName.textContent = name;

    //elemento outputAge
    outputAge.textContent = ageOption;

    //elemento ticketRate
    rate.textContent = discount;

    //elemento carriage
    carriage.textContent = Math.floor(Math.random() * 5) + 1;

    //elemento code
    code.textContent = Math.floor(Math.random() * 9999) + 1;
});


//aggiungiamo un evento molto aparte per il bottone che cancella tutti i dati del form, non mischiare mai con il evento submit

cleanForm.addEventListener('click', function () {
    paxForm.reset();  // Resetta il form
    outputName.textContent = '';
    outputAge.textContent = '';
    rate.textContent = '';
    carriage.textContent = '';
    code.textContent = '';
    // tolgo display al aclick del bottone cancel
    outputFormDisplay.style.removeProperty('display');
    outputFormDisplay.style.display = 'none';
});