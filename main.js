function getPromise(){
    return new Promise((resolve, reject)=>{
    const clock=new Date().getHours;
        if(clock<11){
            resolve("good morning")
        }
        reject("good afternun")
    });
}
getPromise()
.then((data)=>{document.body.innerHTML+=data;})
.catch((err)=>{document.body.innerHTML+=err;})

function ifNUmberDivisibleNumber(num1,num2){
    return new Promise((resolve, reject)=>{
        if(num2%num1==0){
            resolve("yes")
        }
        reject("no")
    });
}
function forButten(){
ifNUmberDivisibleNumber(3,6)
.then((data)=>{div_id.innerHTML=`<h1>${data}</h1>`;})
.catch((err)=>{div_id.innerHTML=`<h1>${err}</h1>`;})
}

// function ifNumberInArray(num, myArray) {
//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < myArray.Length; i++) {
//       if (num == myArray[i]) {
//         resolve("yes");
//       }
//     }
//     reject("no");
//   });
// }
// ifNumberInArray(3, [30, 40, 50, 3, 65, 95])
//   .then((data) => {
//     div_id.innerHTML = `<h1>${data}</h1>`;
//   })
//   .catch((err) => {
//     div_id.innerHTML = `<h1>${err}</h1>`;
//   });
