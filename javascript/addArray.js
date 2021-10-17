const arr = [1,2,3]

function add(...args){
    let sum = 0;
    for(let i of args){
       sum += i;
    }
    return sum;
}

console.log(add(...arr))