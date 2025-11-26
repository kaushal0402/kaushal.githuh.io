// que Prompt the user to enter their full name.
// Generate a username for them based on the input.
//  Start username with @, followed by their 
// full name and ending with the fullname length.
// let fullName=prompt("Enter your full name");
// let userName="@"+fullName+fullName.length;
// console.log(userName);
// Arrays
// let marks=[76,78,54,34,2,65];
// console.log("marks",marks);
// console.log(marks.length);
// let hero=["bhagat singh","chandrashekhar azad","sukhdev","shubhas chandra boss"];
// console.log("hero",hero);


// let heroes=["bhagat singh","chandrashekhar azad","sukhdev","shubhas chandra boss"];
// console.log("hero",hero);
//for(let i=0;i<hero.length;i++){
//    console.log(hero[i]);
// }
// for(let hero of heroes){
//     console.log("hero",hero);
// }
// let city=["delhi","mumbai","kolkata","chennai","banglore"];
// for(let k of city){
//     console.log("city",k.toUpperCase());
// }
// let k=[67,89,80,98,90,79,85];
// let add=0;
// for(let mark of k){
//     add=add+mark;
// }
// let mark=[85,97,44,37,76,60];
// let sum=0;
// for(let val of mark){
//     sum=sum+val;

// }
// let avg=sum/mark.length;
// console.log("average",avg);
// let item=[250,645,300,900,50];
// for(let i=0; i<item.length; i++){
//     let offer=item[i]/10;
//     item[i]=item[i]-offer;
//     console.log('value after offer=',item[i]);
// }
// let foodItem=["patato","apple","litchi","tomato","chili"];
// let mark=[89,67,89,97];
// let hero=["RAM","SHYAM","KRISHNA"]
// console.log(foodItem);
// console.log(foodItem.toString());
// console.log(foodItem);
// let str=foodItem.concat(mark,hero);
// console.log(str);
// let val=mark.shift();
// console.log("deleted",val);
// console.log(foodItem);
// console.log(foodItem.slice(1,3));
// foodItem.splice(1,1,"kaushal","karan");
// foodItem.push("chips");
// console.log(foodItem);
// let deletedItem=foodItem.pop();
// console.log("deletedItem",deletedItem);

// create an array to store companies  bloomberg microsoft uber google ibm netflix
// remove the first companay from the array
// remove uber and add ola in its place
//add amazon at end
// let kaushal=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// // kaushal.shift();
// // kaushal.splice(2,1,"ola");
// let k=kaushal.push("amazon");
// console.log(k);
function countVowels(str){
    let count=0;
    
    for (const char of str) {
        if(char==="a"|| char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
        
    }
    console.log(count);
}
const countvow=(str)=>{
    let count=0;
    
    for (const char of str) {
        if(char==="a"|| char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
        
    }
    console.log(count);

}
