//שאלה 1
// function getPromise(){
//     return new Promise((resolve, reject)=>{
//     const clock=new Date().getHours();
//         if(clock<11){
//             resolve("good morning");
//         }
//         reject("good afternun");
//     });
// }
// //שאלה 2
// getPromise()
// .then((data)=>{document.body.innerHTML+=data;})
// .catch((err)=>{document.body.innerHTML+=err;})

//שאלה 3
// function ifNUmberDivisibleNumber(num1,num2){
//     return new Promise((resolve, reject)=>{
//         if(num2%num1==0){
//             resolve("yes")
//         }
//         reject("no")
//     });
// }

// //שאלה 4
// function forButten(){
// ifNUmberDivisibleNumber(3,6)
// .then((data)=>{div_id.innerHTML=`<h1>${data}</h1>`;})
// .catch((err)=>{div_id.innerHTML=`<h1>${err}</h1>`;})
// }


//שאלה 5

// function printNumberInArray(num,myArray){
//     return new Promise((resolve,reject) => {
//         myArray.forEach(element => {
//             if(element==num){
//                 resolve("yes")
//             }
//         });
//         reject("no")
        
//     })
// }
// //שאלה 6
// printNumberInArray(5,[7,4,8,5])
// .then((data)=>{div_id.innerHTML+=`<h1>${data}</h1>`})
// .catch((nodata)=>{div_id.innerHTML+=`<h1>${nodata}</h1>`})

//שאלה 8
// async function callSella(){
//     try{
//       return await printNumberInArray(5,[7,4,8,5])
//       .then((data)=>{div_id.innerHTML+=`<h1>${data}</h1>`})


//     }
//     catch(err){
//         console.log("errr");

//     }
// }
// callSella()





//fetch

//שאלה 1


const API="https://moviesmern.herokuapp.com/movies/all"
async function sonefunc(){
    document.getElementById("button_id").disabled = true
    try{
        await fetch(`${API}`).then((Response)=>{console.log(Response)})
    }
    catch(err){

    }
    finally{
        document.getElementById("button_id").disabled = false 
    }
}




