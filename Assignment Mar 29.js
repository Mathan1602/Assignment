
/*Assignment Details:
Write a JavaScript code that prints odd numbers between 1 and 25*/
// let a=5
//     if(a%2==1){
//         console.log(a + 'is odd number');
//     } else{
//         console.log(a+ "is even number");
//     }


/*Assignment Details:
Write a JavaScript code that takes an integer as input and prints `Odd` if the number is odd and `"Even"` if the
number is even.*/
// for(let i=1;i<=25;i++){
//     if(i%2==1){
//         console.log(i + 'is odd number');
//     } else{
//         console.log(i+ "is even number");
//     }
// }
/*Assignment Details:
Write a JavaScript code that evaluates a student's score and prints their grade using a switch statement to
assess score ranges*/

// let Score=85
// function grade(){
//     switch(Score){
//        case 86:
//        console.log("Grade A");
//         break
//         case 85:
//             console.log("Grade B");
//             break
//             default:
//                 console.log('Grade c');
//     }
// }
// grade()

/* Assignment Details:
Create two JavaScript code with `if-else` for browser launch messages, and with `switch` for test type
messages.*/

// let browserName="chrome"
// if(browserName=="chrome"){
//     console.log("Launch chrome browser");
// }else{
//     console.log("Incorrect data");
// }

// let testType = 'Sanity'
// switch(testType){
//     case 'Sanity':
//         console.log('Type is' + " "+testType );
//         break
//         case 'rgeression':
//             console.log('Type is'+ testType);
//             break
// default:
//     console.log("Type is" + testType);
// }

/*Assignment Details:
Create a JavaScript code that determines if a number is positive, negative, or zero and returns a
corresponding string indicating the type.*/

// let b=-2
// if(b>0){
//     console.log(b + " " +'is positive number');
// } else if(b<0){  
//      console.log(b + " " +'is Negative number');
// }else{
//     console.log(b + " is 0");
// }

/*Assignment Details:
Create a JavaScript code that have a string, reverses it, and checks if the reversed string is a palindrome,
print the results.*/

let c='MADAM'
let d= c.split(" ")
let f= ""
console.log('Original string is'+ d);
for(let i=d.length-1;i>=0;i--){
 f=f+d[i]
}
console.log('Reversed string is:'+ f);
if(c===f){
    console.log('The given String is a Palindrome');
}

