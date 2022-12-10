//function statment
/*function a(){
    console.log("a called");
}
a();
//function expression
var b=function(){
    console.log("b called")
}
b();
//if we call a() before its defination at line 1 it gives its defination
//if we call b() it gives not a function beacuase it is declared as
//is undefined

//Ananyms function are function without name-->are used when we used them as values
var c=function(){
return function(){
    console.log("returning");
}
}
console.log(c());
//named function are with name
var d= function name(){
    console.log("d is called")
}
d()//is valid
//xyz() gives error reference


//parameter and arguments
var de= function name1(par1,par2){
    console.log("d is called")
}
de(arg1,arg2)*/

//functions are first class citizens
//first class funcion
//functions can be used as values 
//functions can be passed as arguments to another function
//we can return function from funcion
//these abilitis all togather are first class function
function name(){
    console.log("d is called")
}
function n(f1){
  return f1;
}

n(name())
