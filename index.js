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
// We all are know CSS is only work for design our HTML Document. So, its has some limitations like-
// * Its cannot perform any logical operations
// * CSS can not read any files
// * CSS can not request a web page.
//  And we donot expect those from CSS.


// 6.------
// Using call by value, there is no changes in the main or original value but using the call by reference, there will be changes in the main value.
// On the other way, when pass data by Pass by value, Its means that we pass the actual value of the variable into the function. And Pass by reference means that we  pass the variable itself into the function.

// 7.-------
// Immediately Invoked Function (IIFE) known also self invoked function. This anonymous function call itself Immediately. Anonymous cause This type funciton hasn't name. And its wrapped between parantheses. We operate its Immediately using () after function body.
// Like: 
(function () {

})();

//  8.-------
// We know, JavaScript is an untyped language. So, using javascript we face some type relative bugs. For safe this type of bugs we ES5 introduce 'use strict'. And using strict we can obtain-
// Eliminates some JavaScript silent errors by changing them to throw errors.
// Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
// Prohibits some syntax likely to be defined in future versions of ECMAScript.


// 9.---------
// Higher-order function is, a function that can be pass as parameter, store in variable and can return from another function. 
// Like-
const sum = (num) => {
    return num + 2
};


// 10.------
// Some of WordPress Features---
// Easy to Manage and Simplicity.
// Flexible Post Scheduling. 
// Unlimited Pages, Posts, Products & More.
// Integrated News & Blog Posting.
// Restore Deleted Pages & Rollback Versioning.
// Easily Add Additional Website Editors.
// Managed Website Security etc.


// 11.-------
// In WordPress, a plugin is a small software application that extends the features and functions of a WordPress website.
// Some of wordpress plugins--
// * WooCommerce
// * Contact from 7
// * Elementor
// * WPForms
// * All in One SEO etc.


// 12.------
// There are two types of hooks: Actions and Filters. To use either, we need to write a custom function known as a Callback, and then register it with a WordPress hook for a specific action or filter.

// 13.-------
// First open the wp-config.php file. And here enable the WP_DEBUG true.
// Like: 
define('WP_DEBUG', true);


// 14.-------
// In php we can see output using two built in keyword or functions, those are echo and print.
// There are few differences between those.
// echo used for only see the output on the disply. Its does't return value. But we need to return something from a method or function we should use print, this has return value.


// 15.--------
// $message is used to store variable data. $$message can be used to store variable of a variable.


// 16.-------
// There are nine magical constants that change depending on where they are used. For example, the value of __LINE__ depends on the line that it's used on in your script. All these "magical" constants are resolved at compile time, unlike regular constants, which are resolved at runtime. These special constants are case-insensitive.
// -----according to PHP.NET official.


// 17.-------
// There are 3 different types of relations in the database: one-to-one. one-to-many, and. many-to-many


// 18.-------
// There explain some difference between Normalization and Denormalization

// * Normalization is used to remove redundant data from the database and to store non-redundant and consistent data into it. Denormalization is used to combine multiple table data into one so that it can be queried quickly.
// * Normalization mainly focuses on clearing the database from unused data and to reduce the data redundancy and inconsistency.Denormalization on the other hand focus on to achieve the faster execution of the queries through introducing redundancy.


// 19.-------
// Data Independence is defined as a property of DBMS that helps you to change the Database schema at one level of a database system without requiring to change the schema at the next higher level. Data independence helps you to keep data separated from all programs that make use of it.