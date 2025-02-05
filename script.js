// First, we put in links to where the dataset (used to make our code) was found.

//  Original sources: https://github.com/rfordatascience/tidytuesday/blob/main/data/2020/2020-07-28/readme.md
// https://allisonhorst.github.io/palmerpenguins/

// A link to the URL was inserted so that in our code we are actually referencing something.
var url= "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Animals/Palmer%20Penguins.csv"

// This URL is signifigant because it allows variabls to be stored based on the function get Column (from the utils) and retrieved from the url.
// In these variables the numbers refer to  the column index in which values will be retrieced from.
var homes=getColumn(url,2);
var billLengths=getColumn(url,3);
var genderLovers=getColumn(url,7);
var contestents= getColumn(url,0);


// FIRST LOOP Overview: this loop wil find how many possible "love" islands there are by reducing the list of homes to unique locations (no repition of homes) !

// This list is emptu and will be filled with unique islands/ locations as we loop through the homes column.
// ** It is important when creating a new list to set equal to brackets so the computer knows what the variable will be
var uniqueHomes= [];
// Index starts at 0 and will loop through until the index is less than the number of homes in total ( the loop starts at index 0 so the last penguin will still be included in our data).
// the value of i will increase by 1 each time the loop runs until the condition is met
// The number of homes, contestants (penguins), beak sizes, etc. are the same, however this function is finding the number of UNIQUE homes with no repeition.
for (var i = 0; i< homes.length; i++){
// Above, the list homes (from the data set) is saved as column 2 this is how the code knows what values are saved at homes[i], 
    // If unique homes (which starts of empty) does not include the homes at indexes as we loop through each index if the home is not included then push it (add it) to the list.
if(!uniqueHomes.includes(homes[i])){
    uniqueHomes.push(homes[i])
    // Each time a new home appears it will add, with this loop, the number of times each home is listed is unknown. 
    }
} 

// Printing the new list to check our work...
console.log(uniqueHomes);

// A new loop! 

// A new list which will save the numner of females present in each island, we created a for loop so in one step we could match the index from our previous loop uniqueHomes, to the number of females at that island.
var numFemalesPerIsland= [];

// SECOND LOOP: Similar to the first loop, this one will start at index 0, and go through each index adding one each time (0,1,2, etc.) until a condition- how many times we want it to loop- is met
// However, this loop will go through our new list, unique homes.

for(var i= 0; i< uniqueHomes.length; i++){
    // A variable saved in order to keep count of the number of females, this variable is not set with brackets because we want the value saved to be a number/numbers
    var count= 0;

    // this inner portion of the for loop runs going through every single ID (from the data set)
//  for every iteration of outer loop (every time it repeats)the inner loop will run until i=334 (num penguins)
//EXAMPLE: the outer loop repeats three times. If the home the first time the loop runs (so at index 0/penguin 0 ) is the same as the unique home at index zero in the outer loop 
// AND, the inner loop is filtering through the genderLovers list ( var genderLovers=getColumn(url,7);) if the gender is female then add one to the count if not, ignore it
// this will run until we have found the count for every unique location
    for(var j= 0; j< homes.length; j++){
        // if the unique home at a specific index is equal to the home and the gender (which will end up being used as the desired gender of our user) is female
        if(uniqueHomes[i]== homes[j] && genderLovers[j] == "female"){
        //    then add one to the count
            count++;
        }
    }
    // add the count to the empty list of numFemalesPerIsland, because the outerloop runs three times 3 different index's will be in this new list corresponding with the index's of the unique locations
       numFemalesPerIsland.push(count);
}
console.log(numFemalesPerIsland)

// FUNCTION: this function was added for user convenience , as the user inputs its beak size using the slider the value thats being hovered on/ possible selected will be displayed.
function change_slider(){
    document.getElementById("sliding").innerHTML = parseFloat(document.getElementById('size').value)
// in order to connect the function changeslider to to the HTML we do this...
// document.getElememtByIDd("xyz") finds the html element with the id sliding
// document.getElementById('size').value gets the value for an input element with a size ID
// parse float converts a string into a number
// .innerHTML is like a connecting piece, allowing the function to change whats inside of the sliding element.
}


// This loop is an exact replicate of the numFemales one except it is keeping track of the number of males
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

// ANOTHER LOOP!!
// this loop will be used to help generate our slider on beak size based on the all of the possible lengths (no repition)- the slider will represent our users beak size but based on the sizes of these contestant penguins we found a reasonable range
// save new empty list to store all the bill lengths (no repititon)
var uniqueBillLengths= [];
//  similar to the other loops, this one initializatizes at zero traverses through the whole list of bill lengths and goes up by an increment of 1 
for(var i= 0; i< billLengths.length; i++){

    // if our new list does not include the bill length (og dataset list)...
    if(!uniqueBillLengths.includes(billLengths[i])){
// ...then add it
        uniqueBillLengths.push(billLengths[i]);
    }
} 
    console.log(uniqueBillLengths);

    // WHILE LOOP
// set variable 
// variable for position (K) in the list
var k = 0;
// list of unique bills in order numerically increasing and as numbers rather than ""s.
var uniqueBillLengthsFloat = [];


    // this while loop will go until k is the value of the length (goes through entire list of the bill lengths)
while(k < uniqueBillLengths.length){
    // adds each unique floated bill to our new list
    uniqueBillLengthsFloat.push(parseFloat(uniqueBillLengths[k]))
    k++;
        //incriments k and repeats list

}
uniqueBillLengthsFloat.sort();
// sort() sorts the numbers numerically
// printing our list!!
console.log(uniqueBillLengthsFloat);
// this while loop was used for to sort the previous loop finding the unique bill lengths


// this is where our function is defined. It takes 3 parameters which will affect the flow of logic 
function getMatch(yourBeak, desiredGender, desiredLocation){
    // variable used to keep track of the number of matches a penguin will have based on the following conditions
    var matches = 0;
    //  same control structure as many of our other loops going through every penguin in the dataset
    for(var i=0; i<billLengths.length; i++){
// if the absolute value of the  bill lengths number( in the OG dataset bill lengths is a string so parse float turns the number string into just numbers) minus the length of your beak (an element in the HTML manipulated by a slider) is less than five 
// @@@@@@@@@@@@@@@@@@@ AND your desired gender is equal to the gender of the same penguin (same index) (whichs beak is within 5mm of your beak length)
// AND that same pengiun lives in your desired location
        if(Math.abs(parseFloat(billLengths[i])- yourBeak) < 5  && desiredGender == (genderLovers[i]) && desiredLocation == homes[i])
            // this traversal method is filtering through the
            {
                // then they are a possible match for you
                // each time the loop runs and a penguin meets all of these conditions, they are considered a match
            matches++;
          
        }
     }
    //  finds and connects the INNER html element with the id output, the value of the matches is combined (concatenated) with a string "possible mates"
    // the new string (num matches and possible mates) will be displayed in the "output"
     document.getElementById("output").innerHTML = matches+ " possible mates";

    //  if the penguin gets zero matches then in the feedback (a paragraph id inside of the output box) the num matches (0) will be displaued as well as a nudge to be less picky, this would most likley mean exploring other locations
     if (matches==0 ){
        document.getElementById("feedback").innerHTML ="Please be less picky!";
        }
    //  if the penguin gets at least one match then in the feedback the number of matches will be displayed as well as a congratulation on finding a mate!
    else if(matches!=0){
            document.getElementById("feedback").innerHTML ="Please invite me to your wedding!";
            }
    
        }
    
