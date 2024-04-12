// The squirrels in Palo Alto spend most of the day playing. 
// In particular, they play if the temperature is between 60 and 90 (inclusive). 
// Unless it is summer, then the upper limit is 100 instead of 90. 
// Given an int temperature and a boolean isSummer, 
// return true if the squirrels play and false otherwise.

// Examples

// squirrelPlay(70, false) → true
// squirrelPlay(95, false) → false
// squirrelPlay(95, true) → true

function squirrelPlay(temperature, isSummer) {
    if (temperature >= 60 && temperature <= 90 && !isSummer){
        return true
    }
    if (temperature >= 60 && temperature  <= 100 && isSummer){
        return true
    }else return false
}
console.log(squirrelPlay(70, false));
console.log(squirrelPlay(95, false));
console.log(squirrelPlay(95, true));