
let rname;
let surname;
window.addEventListener('load', () => {

    // Via Query parameters - GET
    const params = new URLSearchParams(window.location.search);
     rname = params.get('name');
     surname = params.get('surname'); 

    // Via local Storage
    //  const name = localStorage.getItem('NAME');
    // const surname = localStorage.getItem('SURNAME');
    
    // const name = sessionStorage.getItem('NAME');
    // const surname = sessionStorage.getItem('SURNAME');
    
    document.getElementById('result-name').innerHTML = rname;
    document.getElementById('result-surname').innerHTML = surname;

});


// document.getElementById("mybtn").onclick = function(){
//     rname = document.getElementById("name").value;
//     surname = document.getElementById("surname").value;

//     document.getElementById("result-name").innerHTML = rname;
//     document.getElementById("result-surname").innerHTML = surname;
// }

// document.getElementById("print").onclick = function(){
//     document.getElementById("result-name").innerHTML = rname;
//     document.getElementById("result-surname").innerHTML = surname;
// }