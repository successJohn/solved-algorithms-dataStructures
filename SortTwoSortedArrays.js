/*
FISH REUNION You’re given a list of saltwater fish and
a list of freshwater fish, both in alphabetical order. How do
you create a list featuring all the fish in alphabetical order?
*/

function merge(sea, fresh){
    let mergedFishes = [...sea, ...fresh]; // merge both arrays using Spread Operator

    return mergedFishes.sort();
}

let Allfishes = merge(["Asp", "Carp","Ide","Trout"], ["Cod", "Herring", "Marlin"]);

console.log(Allfishes);

