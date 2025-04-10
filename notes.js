//JavaScript Notes

/**
 * Comments can be written two different ways.  The first way is a single line comment (//)
 * when you use the // to comment a line, everything to the right of the // will be commented
 * out and not processed by the Javascript interpreter.  this only works for a single line
 * of code.  
 * 
 * In order to comment out a whole block of code, use the syntax you see around this block of
 * text (foward-slach star start back-slash).   this will commetn out everything between the two slashes.
 * You do not need to add in the extra stars each line.  That is done automatically by VSCode.
 * 
 * Shortcut:  you can manually highlight a chunk of code and the press ctrl+/ to comment out
 * the highlighted block.  
 */

/**
 * The console
 * one of the greatest tools you will have as a developer is the console.
 * To open the console right click on your web page and click on the 'inspect' option. This 
 * will open up your inspection panel.  If it is not already, click on the 'console' tab near
 * the top of the inspection window.  
 * 
 * Shortcut: press ctrl+shift+j will open the console window directly
 * 
 * the console window allows you to log information out to the screen while debugging or
 * alerting.
 * 
 * Try it for yourself:  below in a uncomented line, enter the command console.log('hello');
 * This will print 'hello' to your console.
 * 
 * We can use this for any number of things.  such as logging out entire page elements.  uncomment
 * block of code below by highlighting it and pressing ctrl+/.  then save this script and load your page.
 */

// const img = document.querySelector('img');
// console.log(img)

/**
 * The above code will find the img element on the page, and log out all of its details to you.
 */

/**
 * The queryselector()
 * the querySelector function is used to select an element on the page.  If you look at the script.js
 * file, you will see that it is used a lot to get a reference to elements on the page.  Once
 * you have the reference to an element on the webpage you can begin to manipulate it in various ways.
 * 
 * the querySelector() takes 1 argument and that is the item you are looking for.
 * document.querySelector('img') - this will search for the first image element on the page
 * document.querySelector('.my-class') - this will search for the first instance of the my-class css class
 * document.querySelector('#my-id') - this will search for the my-id id on the page. 
 * 
 * a couple things to note
 * the querySelector() function will return the FIRST instance of an item that fits the argument.  That is
 * important to keep in mind.  as many times you will have multiple elements or classes on a page that fit 
 * the argument.  For this reason, we use IDs for many of our selectors.
 * 
 * However there are also many times were you don't want just a single instance of your selector.  Maybe
 * you want to target ALL of the images on the page.  for that, we use querySelectorall().  This function
 * is the same as querySelector()  except it will return an array of all of the items on the page
 * that fit the argument.
 * 
 * Try it for yourself:
 * below use the command document.querySelector('section') and then the command document.querySelectorAll('section)
 * note the difference
 */

/**
 * functions
 * functions are a named block of code that gets executed when called on.  to see this in action, uncomment the 
 * lines of code below and refresh your page.  You will notice that the first part runs automatically becuase 
 * it is free standing code.  So it gets run as soon as the interpreter sees it.  The second bit of code will
 * not run because it is a function and only runs when the function is called.
 */

// console.log("hello world")

// const myFunc = () =>{
//     console.log("foo bar")
// }

/**
 * All functions have the same parts.  the name, the parameters, the body.  In the function below, "myFunc" 
 * is the function name. everything between teh parenthesis () are the parameters, and everything between the 
 * curly braces {} is the body. 
 * 
 * it is important to note that javascript is a loosely typed language.  It will try to figure out what the types
 * of everything is, but it also really dones't care.  Look at the function below.  It looks like param1, param2,
 * and param3 should all be numbers because we are trying to add them together in the body of the function.
 * But javascript will not prevent you from passing in whatever you want.  You can pass in numbers, objects, 
 * arrays, or strings.  Javascript will try to add them all together and throw an error if it can't do it.
 */

// const myFunc = (param1, param2, param3) =>{
//     console.log(param1 + param2 + param3)
// }

/**
 * There are several ways to write our functions.  The classical function, the arrow function, and the anonymous function.
 * The classical function involves using the 'function' keyword before the function name. The arrow function uses the 
 * const key word and the arrow notation.  This is how I hvae been writing functions up to this point. The 
 * anonymous function is an arrow function used inside of other functions, and does not have a name.  These are meant to 
 * be one-time-use functions that do not need to exist outside of the place they are called.
 */

// //classical
// function myFunc(param1){
//     console.log(param1)
// }
// myFunc('alphabet');

// //arrow function
// const foobar = (num1, num2) =>{
//     console.log(num1 + num2)
// }
// foobar(4, 3);

// setTimeout(()=>{
//     console.log("Set timeout perfoms the function porvided as a callback, after X milliseconds.  X is the number provided as the second parameter")
// }, 1)

/**
 * Calling a function vs referencing a function
 * Notice that on this script, everytime I have called a funciton i use the function's name followed immediately by
 * parenthesis ().  But if you look at script.js you will notice at the top of the page I only use the function's name.
 * Why is that?
 * 
 * The differencce is in calling the funciton versus referencing the function.  Here I wam calling them, meaning I want them to 
 * run as soon as the interpreter sees that line of code.  In script.js, I am referencing the function, because they are 
 * being used as callbacks in an event listener and are not meant to be called until the event happens.  If I were to use
 * the paranthesis in the event listeners, the functions would have been called immediately instead of waiting until the
 * event happened.
 */
