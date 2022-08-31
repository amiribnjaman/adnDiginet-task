/**
 ------------------------
ADN Diginet Ans:
-------------------------
 */


// 1.------
// Using image map we can create a clickable areas on an image. For the crate a image map we have to use <map /> tag and this areas defines with one or more <area /> tag: 
// Like: 
{/* <img src="" alt="" usemap="#map">
<map name="map">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm">
</map> */}


// 2.-------
const romanSymbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

const romanToInteger = (romanInput) => {
    let result = 0;
    for (let i = 0; i < romanInput.length; i++) {
        if (romanInput[i] === "I" && romanInput[i + 1] === "V") {
            result += 4;
            i++;
        } else if (romanInput[i] === "I" && romanInput[i + 1] === "X") {
            result += 9;
            i++;
        } else if (romanInput[i] === "X" && romanInput[i + 1] === "L") {
            result += 40;
            i++;
        } else if (romanInput[i] === "X" && romanInput[i + 1] === "C") {
            result += 90;
            i++;
        } else if (romanInput[i] === "C" && romanInput[i + 1] === "D") {
            result += 400;
            i++;
        } else if (romanInput[i] === "C" && romanInput[i + 1] === "M") {
            result += 900;
            i++;
        } else {
            result += romanSymbols[romanInput[i]];
        }
    }
    return result;
}
//   console.log(romanToInteger('XXVII'))



// 3.------
// A simple recursive function to find n'th fibonacci number
function fibonacci(n) {
    if (n <= 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// Returns number of ways to reach n'th stair
function countWays(n) {
    return fibonacci(n + 1);
}


// 4.-------
// Image sprites is way to put multiple images into a single image. This used for optimized loading speed or decrease the loading time.

// 5.-------
