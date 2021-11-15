
function multiplyNumeric(obj){
    for(let key in obj){
        console.log(key);
    }
}


multiplyNumeric({width: 200, height: 300, title: "myMenu"});