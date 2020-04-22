function reverseString(s) {

    try {
        // split to return a new array
        // reverse to reverse the created array 
        // join to join all elements of the array into a string
        var reversedString = s.split("").reverse().join("");
        console.log(reversedString);
    }
    catch (err) {

        console.log(err.message);
        console.log(s);
    }
}