//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
   
  ];
// Use moviesList array for displaing the Name in the dropdown menu
moviesList.forEach((key)=>{
    const list = document.querySelector('#selectMovie');
    const opt = document.createElement('option');
    opt.textContent = key.movieName+" "+"$"+key.price;
    list.appendChild(opt);
    
});
const selectedMovie = document.getElementById('selectMovie');
let selectedvalue = document.getElementById('movieName');
selectedMovie.addEventListener('change', (event)=>{
    selectedvalue.textContent = event.target.value;
});




//Add eventLister to each unoccupied seat
const unoccupied = document.querySelectorAll('.seat');
unoccupied.forEach((seat)=>{
    seat.addEventListener('click', function(event) {
        //alert('Seat selected!');
        seat.classList.add('selected');

    });
});

//Add eventLsiter to continue Button


const cont = document.querySelector('#proceedBtn');
cont.addEventListener('click',()=>{
    const sele = document.querySelectorAll('.selected');
    sele.forEach((sele)=>{
        sele.classList.remove('selected');
        sele.classList.add('occupied');
    })

});

//Add eventListerner to Cancel Button

const cancel = document.querySelector('#cancelBtn');

cancel.addEventListener('click', ()=>{
    const sele = document.querySelectorAll('.selected');
    sele.forEach((sele)=>{
        sele.classList.remove('selected');

    });
})


