
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const concious = document.querySelector(".concious");
btn.addEventListener("click", function addBirth() {
  const date = new Date();
 let birthDay = new Date(input.value);
 let result = Math.floor(( birthDay - date ) / (1000 * 60 * 60 * 24));
let r = Number(result);
if (input.value === "") {
    concious.innerHTML ="Выберите дату";
    } else {
    concious.innerHTML = r;
    }
    });
   
//concious.innerHTML = r;



// // let td = input.value
//  switch (add) {
//    input.value "" : 
//    input.value Nan :
//    concious.textContent = "no"
    
// // }
   
// // console.log(result);
