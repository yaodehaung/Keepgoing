//   Null
//      Null is used to represent an intentional absence of value. 
// It represents a variable whose value is undefined. 
// It accepts only one value, which is null. 
// The Null keyword is used to define the Null type in TypeScript, 
// but it is not useful because we can only assign a null value to it.


//Variable declared and assigned to null  
var a = null;   
console.log( a );   //output: null  
console.log( typeof(a) );   //output: object  


// Undefined
//   It represents uninitialized variables in TypeScript and JavaScript.
//   It has only one value, which is undefined. 
//  The undefined keyword defines the undefined type in TypeScript,
//  but it is not useful because we can only assign an undefined value to it.


//Variable declaration without assigning any value to it  
var a;        
console.log(a);  //undefined  
console.log(typeof(a));  //undefined  
console.log(undeclaredVar);  //Uncaught ReferenceError: undeclaredVar is not defined  


Null	Undefined
1.	It is an assignment value. It can be assigned to a variable which indicates that a variable does not point any object.	It is not an assignment value. It means a variable has been declared but has not yet been assigned a value.
2.	It is an object.	It is a type itself.
3.	The null value is a primitive value which represents the null, empty, or non-existent reference.	The undefined value is a primitive value, which is used when a variable has not been assigned a value.
4.	Null indicates the absence of a value for a variable.	Undefined indicates the absence of the variable itself.
5.	Null is converted to zero (0) while performing primitive operations.	Undefined is converted to NaN while performing primitive operations.