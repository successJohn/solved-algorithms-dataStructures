// write a code to square every digit and concatenate them e.g  9119 = 81119 ||  9*9 1*1 1*1 9*9


function squareDigits(num){

    return Number(
        num
        .toString()
        .split('')
        .map(function(x){
            return x*x
        })
    .join('')

    );

}


let trial = squareDigits([9119])
console.log(trial);



