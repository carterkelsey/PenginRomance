//  original sources: https://github.com/rfordatascience/tidytuesday/blob/main/data/2020/2020-07-28/readme.md
// https://allisonhorst.github.io/palmerpenguins/

var url= "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Animals/Palmer%20Penguins.csv"

var homes=getColumn(url,2);
var billLengths=getColumn(url,3);
var genderLovers=getColumn(url,7);
var contestents= getColumn(url,0);

// this loop will find how many possiboe "love" islands there are
var uniqueHomes= [];
for (var i = 0; i< homes.length; i++){
if(!uniqueHomes.includes(homes[i])){
    uniqueHomes.push(homes[i])
}
} 
console.log(uniqueHomes);


var numFemalesPerIsland= [];
for(var i= 0; i< uniqueHomes.length; i++){
    var count= 0;
    for(var j= 0; j< homes.length; j++){
        if(uniqueHomes[i]== homes[j] && genderLovers[j] == "female"){
            count++;
        }

    }
    
    numFemalesPerIsland.push(count);
}

console.log(numFemalesPerIsland)



var numMalesPerIsland= [];
for(var i= 0; i< uniqueHomes.length; i++){
    var count= 0;
    for(var j= 0; j< homes.length; j++){

        if(uniqueHomes[i]== homes[j] && genderLovers[j] == "male"){
            count++;
        }
    }
    numMalesPerIsland.push(count);
}
console.log(numMalesPerIsland);

var uniqueBillLengths= [];
for(var i= 0; i< billLengths.length; i++){
    if(!uniqueBillLengths.includes(billLengths[i])){

        uniqueBillLengths.push(billLengths[i]);
    }
    } 
    console.log(uniqueBillLengths);


var k = 0;
var uniqueBillLengthsFloat = [];

while(k < uniqueBillLengths.length){
    uniqueBillLengthsFloat.push(parseFloat(uniqueBillLengths[k]))
    k++;
}

uniqueBillLengthsFloat.sort();
console.log(uniqueBillLengthsFloat);




// function getMatch(desiredBillLength){

    // for(var i=0; i<billLengths.length; i++)
    //     if(billLengths[i] == desiredBillLength) {
    //         matches.push(desiredBillLength[i]);
          
    //     }
    // }
    
