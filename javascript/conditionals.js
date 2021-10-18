
//if else condition
const verifyAge =(n) =>{
    if(n>= 18){
        console.log("eligible to vote")
    }
    else{
        console.log("not eligible")
    }
}

//ternary operator

let message = '';
const checkEligibility = (n) =>{
  message =( n>= 18) ? 'eligible' : 'not eligible'
  console.log(`person is ${message}`)
}
checkEligibility(1);
verifyAge(43);
