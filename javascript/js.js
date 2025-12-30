console.log("javascript"); // show any output in consol
// window.alert("sazzad"); // popap output
// variable( var, let, const)
// data type( number, string, booleans)

let you = "Sazzad"; //string
let age = 20; // number
let student = true; // boolean
// age = age + 1;
age += 1;
// console.log("You are",age , "years old");
console.log("Hello!", you)
document.getElementById("p1").innerHTML = "Hello " + you; // output in web

// *************user input***********

// let username = window.prompt("Enter your name : "); // popap input in web
// console.log(username);

let username;
document.getElementById("mybtn").onclick = function(){
    username = document.getElementById("myname").value;
    // console.log(username);
    // username = Number(username); type costing
    document.getElementById("p2").innerHTML = username+2;
}

//*********** */ data type conversion************
let x,y,z;
// x = window.prompt("ender a number"); //user input always string
// console.log(x, typeof x);
// x = Number(x);
// console.log(x, typeof x);
// x += 2;
// console.log(x);

//************** math function************
// x = 2;
// y = 3.1416;
// z = 10;
// y = Math.round(y);
// y = Math.floor(y);
// y = Math.ceil(y);
// y = Math.pow(y,2);
// y = Math.sqrt(y);
// y = Math.abs(y);
// x = Math.PI;
// let mx = Math.max(x, y, z,5,50);
// let mn = Math.min(x, y, z,5,50);
// x = Math.random();
// console.log(x);
 /*
x = window.prompt("value x :");
x = Number(x);
y = window.prompt("value y :");
y = Number(y);
z = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));

console.log(z);
*/
document.getElementById("vlu_c").onclick = function(){
    x = document.getElementById("value_a").value;
    x = Number(x);
    y = document.getElementById("value_b").value;
    y = Number(y);
    z = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
    document.getElementById("output").innerHTML = username+z;
}

// increase decrease function
let cnt = 0;
document.getElementById("dicr").onclick = function(){
    if(cnt != 0){
        cnt -=1;
    }
    document.getElementById("num").innerHTML = cnt;
}
document.getElementById("incr").onclick = function(){
    cnt +=1;
    document.getElementById("num").innerHTML = cnt;
}
document.getElementById("rest").onclick = function(){
    cnt =0;
    document.getElementById("num").innerHTML = cnt;
}


// string properties and methods
let str = "Sazzad Hossain";
// console.log(str.length);
// console.log(str[2]); //console.log(str.charAt(0));
// console.log(str.indexOf("s"));
// console.log(str.lastIndexOf("s"));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim()); // fast and last space trim kore
// console.log(str.replaceAll("z","j"));
// console.log(str.slice(0,6)); //slice(start,end)
// console.log(str.slice(7)); 
// console.log(str.slice(0,str.indexOf(" ")));
// console.log(str.slice(str.indexOf(" ")+1));

// template literals - string r sathe object / variable add kora jay
// let lastNam = "Hossain"
// let fastNam = "Sazzad"
// let specialStr = `My name is ${fastNam}....${lastNam} `;
// console.log(specialStr);

// checked properties
document.getElementById("check_btn").onclick = function(){
    const subscribe = document.getElementById("check_sub");
    let out1,out2;
    if(subscribe.checked){
        // document.getElementById("output_check").innerHTML = "You are subscribed!"
        out1 = "You are subscribed!";
    }
    else{
        out1 = "You are not subscribed!";
    }
    const muslim = document.getElementById("muslim");
    const hidu = document.getElementById("hidu");
    const other = document.getElementById("others");
    if(muslim.checked){
        out2 = "You are Muslim!";
    }
    else if(hidu.checked){
        out2 = "You are Hidu!";
    }
    else if(other.checked){
        out2 = "You are others religion!";
    }
    else{
        out2 = "You are not select religion!";
    }
    document.getElementById("output_check").innerHTML = out1 +"..."+ out2;
}

// loop properties
document.getElementById('loop_btn').onclick = function(){
    let row = document.getElementById('row').value;
    let col = document.getElementById('col').value;
    for(let i=1; i<=row; i++){
        for(let j=1; j<=col; j++){
            document.getElementById("loop").innerHTML += j +" ";
        }
        document.getElementById("loop").innerHTML +="<br>";
    }
}

// for of loop - string or array jonno use korte pari
let st = "Sazzad";
for(let s of st){
    // console.log(s);
}

// for in loop - object used
let obj = {
    nam : "sazzad",
    age : 21,
    id : 103,
};
for(let key in obj){
    // console.log(key, "=", obj[key]);
}

// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }


// *********Array*********
let marks = [10,20,74,60,45,25];
let nams = ["sazzad","sohan","ramim","tanjil"];
let info = ["sazzad",50, "ranmim", 20];
// console.log(marks[1]);
// marks[0]=55;
// console.log(marks);
// console.log(marks.length);
// for(let i in info){
//     console.log(i,"=", info[i]);
// }

// push(),pop(),toString(),slice(),
// unshift()-fast thika add kore
// shift()-fast thika delet kore
// concat()-maltiple array add kore
// splice(index,countrmv,add)-add,remove,replese
// let food =[];
// food.push("apple");
// food.push("tometo", "patato");
// console.log(food);
// let newary=nams.concat(marks);
// console.log(newary);
// info.splice(1,1,"sohan",10);
// console.log(info);



// ************************************************************************

const steps = Array.from(document.querySelectorAll("form .step"));
const steps2 = Array.from(document.querySelectorAll("form .steps2"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const securityBtn = document.querySelectorAll("form .security-btn");
const form = document.querySelector("form");

let currentStep = 0;

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
        if (validateStep(currentStep)) {
            changeStep("next");
        }
  });
});

prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});
securityBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (validateStep(currentStep)) {
      changeStep("security");
    }
  });
});

function changeStep(btn) {
    const active = document.querySelector(".active");
    currentStep = steps.indexOf(active);
    
    steps[currentStep].classList.remove("active");
    if (btn === "next") {
      currentStep++;
      // if(currentStep === 1){
      //     currentStep++;
      // }
    } 
    else if (btn === "security") {
      currentStep++;
    } 
    else if (btn === "prev") {
      currentStep--;
      // if(currentStep === 2){
      //     currentStep = 0;
      // }
    }
    steps[currentStep].classList.add("active");
  }

// ******************************************
  function nextStep(currentStep2) {
    if(validateStep(currentStep2-1)){
      steps2[currentStep2 - 1].classList.remove('active2');
      steps2[currentStep2].classList.add('active2');
      if(currentStep2==2){
        document.querySelector('.prev-btn').style.display='block';
      }
    }
  }

  function prevStep(currentStep2) {
    steps2[currentStep2].classList.remove('active2');
    steps2[currentStep2-2].classList.add('active2');
    document.querySelector('.prev-btn').style.display='none';
  }
// *********************************************

  function validateStep(step) {
    const inputs = Array.from(steps2[step].querySelectorAll('input'));
    const errorMessages = Array.from(steps2[step].querySelectorAll('.error-message'));
    let isValid = true;
  
    inputs.forEach((input, index) => {
      if (input.value.trim() === '' && input.required ) {
        isValid = false;
        errorMessages[index].style.display = 'block';
      } 
      else {
        errorMessages[index].style.display = 'none';
      }
    });
  
    return isValid;
  }

// **************************************************************************************************


// ************img and img name show **************
  let uploadBtn = document.getElementById("photo_file");
  let choseImg = document.getElementById("chosen-img");
  let choseImg2 = document.getElementById("chosen-img2");
  let filename = document.getElementById("file-name");
      
  uploadBtn.onchange = () => {
      let reader = new FileReader();
      reader.readAsDataURL(uploadBtn.files[0]);
      console.log(uploadBtn.files[0]);
      reader.onload = () => {
      choseImg.setAttribute("src",reader.result);
      choseImg2.setAttribute("src",reader.result);
      }
      let filename = uploadBtn.files[0].name;
      if(filename.length > 20){
        const fastNam = filename.slice(0,8);
        const lastNam = filename.slice(filename.length-8,filename.length);
        const specialStr = `${fastNam}...${lastNam} `;
        document.getElementById("file-name").innerHTML = specialStr;
        document.getElementById("file-name2").innerHTML = specialStr;
      }
      else{
        document.getElementById("file-name").innerHTML = uploadBtn.files[0].name;
        document.getElementById("file-name2").innerHTML = uploadBtn.files[0].name;
      } 
  }



// ****************************************************************

// ********form data show with action*******
// window.addEventListener('load',() =>{
//     const params = (new URL(document.location)).searchParams;
//     console.log(params);
//     const name = params.get(name);
//     const email = params.get(email);

//     document.getElementById('rname').innerHTML = name;
//     document.getElementById('remail').innerHTML = email;

// })

//  *********preview function***************

// const showInputs = document.querySelectorAll(".mydata");
// showInputs.forEach((button) => {
//   button.addEventListener("click", () => {
    // gets value 
//     const name = document.getElementById("name").value;
    // display value
//     document.getElementById('rname').innerHTML = name;
//   });
// });

//  *********preview function***************



// *****************************************

//***** */ Function to check if a section has all required fields filled
// function checkSection(sectionId) {
//   const secId = sectionId;
//   const sectionIds = `change_clg_${secId}`;
//   const sections = document.getElementById(sectionIds);
//   const section = document.getElementById(sectionId);
//   const inputs = section.querySelectorAll('input[required], textarea[required], select[required]');
//   let isSectionFilled = true;

//   inputs.forEach(input => {
//       if (!input.value.trim()) {
//           isSectionFilled = false;
//       }
//   });

//   if (isSectionFilled) {
//       sections.classList.add('section-filled');
//   } else {
//       sections.classList.remove('section-filled');
//   }
// }

// // Event listeners for input change
// document.getElementById('section1').addEventListener('input', function() {
//   checkSection('section1');
// });

// document.getElementById('section2').addEventListener('input', function() {
//   checkSection('section2');
// });
// document.getElementById('section3').addEventListener('input', function() {
//   checkSection('section3');
// });
// document.getElementById('section4').addEventListener('input', function() {
//   checkSection('section4');
// });
// document.getElementById('section5').addEventListener('input', function() {
//   checkSection('section5');
// });

/*********** */


// ************************/
  // document.addEventListener("DOMContentLoaded", function() {
  //   // Select the "Next" button
  //   const nextButton = document.querySelectorAll('.btn-next');
  //   const essential = document.querySelectorAll('.essential');

  //   // Select all required input fields
  //   const requiredInputs = document.querySelectorAll('input[required], textarea[required], select[required]');

  //   // Function to check if all required fields are filled
  //   function checkRequiredFields() {
  //     let allValid = true;
      
  //     // Iterate through each required input
  //     requiredInputs.forEach(input => {
  //       if (!input.validity.valid) {
  //         allValid = false;
  //       }
  //     });
      
  //     // Toggle the "Next" button class based on validity
  //     if (allValid) {
  //       nextButton.forEach((button) => {
  //         button.classList.add('green');
  //       });
  //       essential.forEach((span) => {
  //         span.style.display ='block';
  //       });
  //       // nextButton.classList.add('green');
  //       // // essential.classList.add('d-block');
  //       // essential.style.display ='block';
  //     } else {
  //       nextButton.forEach((button) =>{
  //         button.classList.remove('green');
  //       });
  //       essential.forEach((span) =>{
  //         span.style.display ='none';
  //       });
  //       // nextButton.classList.remove('green');
  //       // // essential.classList.remove('d-none');
  //       // essential.style.display ='none';
  //     }
  //   }

  //   // Add event listeners to required inputs for input/change events
  //   requiredInputs.forEach(input => {
  //     input.addEventListener('input', checkRequiredFields);
  //     input.addEventListener('change', checkRequiredFields);
  //   });
  // });
  // *********************************************





// const changeClr = document.querySelectorAll('.change_clr');
// changeClr.forEach((div)=>{
//   div.addEventListener("click", () => {
//     changeClr.forEach(d => d.classList.remove('section-filled'));
//         // Add 'selected' class to the clicked div
//         div.classList.add('section-filled');
//   })
// });
// const changeClr2 = document.querySelectorAll('.change_clr2');
// changeClr2.forEach((div)=>{
//   div.addEventListener("click", () => {
//     changeClr2.forEach(d => d.classList.remove('section-filled'));
//         // Add 'selected' class to the clicked div
//         div.classList.add('section-filled');
//   })
// });