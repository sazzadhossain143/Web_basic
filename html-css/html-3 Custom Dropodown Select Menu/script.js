const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    })
})


// const optionMenu = document.querySelector(".select-menu"),
//        selectBtn = optionMenu.querySelector(".select-btn"),
//        options = optionMenu.querySelectorAll(".option"),
//        sBtn_text = optionMenu.querySelector(".sBtn-text");

// selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       
// // selectBtn.addEventListener("click", () => {
// //   optionMenu.classList.toggle("active");
// //   selectBtn.style.border = '1px solid #C28654';
// // });       

// options.forEach(option =>{
//     option.addEventListener("click", ()=>{
//         let selectedOption = option.querySelector(".option-text").innerText;
//         sBtn_text.innerText = selectedOption;
//         // selectBtn.style.border = '1px solid #EDEDED';
//         optionMenu.classList.remove("active");
//     })
// });