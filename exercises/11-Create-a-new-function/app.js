/* This exercise is almost identical to 15-Random numbers - consider merging them here and using another concept for 15? */

// Declare your function here
function generateRandom(){
    var random= Math.floor((Math.random() * 10) + 1)
    return random
}

console.log(generateRandom())