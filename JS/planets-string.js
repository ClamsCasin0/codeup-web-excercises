(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    //
    var planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */
    //
    var planetsBreakString = planetsArray.join('<br>');
    console.log(planetsBreakString);

    document.write(planetsBreakString);



     /**
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
     var planetsArray = planetsString.split('|');

     var unorderedPlanets = planetsArray.join('</li><li>');

     var listedPlanets = unorderedPlanets.split(' ');

     listedPlanets.push('</li></ul>');

     listedPlanets.unshift('<ul><li>');

     listedPlanets.join(' ');

     console.log(listedPlanets);

     document.write(listedPlanets);



    // var planetsUnorderedString = planetsArray.unshift('<ul>');
    // console.log(planetsUnorderedString);
    // var planetsUnorderedString = planetsArray.push('</ul>');
//
//
// function planetsUlString(stringer) {


================================= ARRAY MANIPULATION
    /** BONUS 1:
    Create a phone number parser that will convert a string of numbers into a human readable format. The output should depend on the number of digits (account for 7, 10, 11 digit numbers):
    Using multiple functions will be helpful.
        input = 5552324343, output = 555-232-4343
    input = 5553434, output = 555-3434
    input = 18005552323, output = 1-800-555-2323
    */

    output10 = input.

    /**
    Extra Challenge: account for invalid characters
    Extra Challenge: if the input is already formatted, output the unformatted version
    Extra Challenge: allow the parser to accept letters and convert them to the correct numbers
    BONUS 2:
    Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an application that will prompt the user to choose from a menu with the following actions:
        1) Add a student name
    2) Delete a student name
    3) View all student names in alphabetical order
    4) View all student names in reverse alphabetical order
    Store the student names in an array. Account for invalid user input.
    */


}
})();
