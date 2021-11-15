function selectionSort(arr){
    let min, temp
    for(i=0; i< arr.length -1; i++ ){

        min = i;

        for(j = i+1; j< arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }

        [arr[i], arr[min]] = [arr[min], arr[i]] // destructuring
    }
    return arr;
}


 var trialSort = selectionSort([9,8,4,6,1,3]);

console.log(trialSort);

