// // function definition
// function saymyname()
// {
//     console.log("Mahesh Ahir");
// }
// // function call
// saymyname();

// function printcounting(){
//     for(let i = 1; i<=100; i++){
//         console.log(i);
//     }
// }

// printcounting();

// function printnumber(num){
//     console.log( num);
// }

// printnumber(5);

// function getaverage(num1, num2){
//     let avg = (num1+num2)/2;
//     console.log(avg);
// }
// getaverage(50,50);







// RETURN FUNCTION
// function getsum(a,b,c){
//     let sum = a+b+c;
//     return sum;
// }

// let ans = getsum(1,2,3);
// console.log("printing sum",ans);



// const getmultiplication = function (a,b) {
//     return a*b;

// }

// let ans = getmultiplication(2,20);
// console.log(ans);


// ARROW FUNCTION

let getexp = (x,y) => {
    let ans = x**y;
    return ans;
}

console.log(getexp(2,10));