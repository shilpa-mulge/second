//class back function 
/* setTimeout(function(){
    console.log("timer");
},5000);
function x(y){
   console.log("x");
   y();
}
x(function y(){
    console.log("y");
}); */

//closure demo with event listner
//scope with event listener
/* function attachEventListeners(){
let count=0;
document.getElementById("onclick").addEventListener
('click',function xyz(){
    console.log("clicked",++count);
}
    );
}
attachEventListeners();


addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM has loaded")
});
 */
//spread operator with objects
const obj={
    'k1':'v1',
    'k2':'v2'
}

const obj2={...obj,k1:'val',k3:"valv"};
//obj2.k1="values"
console.log(obj);
console.log(obj2)

//spread with arrays
const arr1=[1,3];
const arr2=[2,4];
const arr3=[...arr1,...arr2];
console.log(arr3)
const studentobj = {

	'yash': 26,

	'vaibhav': 24,

	'rajesh' : 25,

	};

    const arr4=[studentobj .yash,studentobj .vaibhav,
        studentobj .rajesh];

var sum=0;
for (let i = 0;i < arr4.length; i++)
{
    sum += arr4[i];
}
console.log(sum/arr4.length)


function findaverageage(studentObj){

	//write your code here.
    var sum1=0;
const val=Object.keys(studentObj);
val.forEach((element) => {
    sum1+=studentObj[element];
});
	const averageAge=sum/Object.keys(studentObj).length;

	return averageAge;

}
console.log(findaverageage(studentobj))