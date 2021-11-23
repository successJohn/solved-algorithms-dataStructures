function getNum(x,n){
    if(x.length == 1){
        return x;
    }
    let repeated = x.repeat(n);
    let added = 0;
    for(let x of repeated){
        added+= Number.parseInt(x);
    }
    return added;
}

let trial = getNum("9875", 4);
console.log(trial);