// Given a square matrix of size , calculate the absolute difference between the sums of its diagonals.


let arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];


const DiagonalDifference = (squareMatrix) => {

    let sumOfPrimaryDiagonal = 0;
    let sumOfSecondaryDiagonal = 0;
    let diagonalDifference;


    for(let i = 0; i < squareMatrix.length; i++){
        sumOfPrimaryDiagonal += squareMatrix[i][i];
        sumOfSecondaryDiagonal += squareMatrix[i][squareMatrix.length - 1-i];
   
    }
    
    diagonalDifference= Math.abs(sumOfPrimaryDiagonal - sumOfSecondaryDiagonal);
    return diagonalDifference;
}


//console.log(DiagonalDifference(arr));


