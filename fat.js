/*var getA=function(a){
    return a;
};*/
//one liner of above
/*let getA=a=>a;
console.log(getA(1));

//let sq=a=>a*a;

let sq=(a)=>{return a*a};
console.log(sq(2));

var k=2;
let m=()=>{return k*k};
console.log(m());
 
let mul=(a,b)=>{return a*b}
console.log(mul(2,3));

/* var x=function(){
    var that=this;
    this.val=1;
    setTimeout(function(){
        that.val++;
        console.log(that.val)
    },1)
}; */

/*var x=function(){
    this.val=1;
    setTimeout(()=>{
        this.val++;
        console.log(this.val)
    },1)
};

var xx=new x();

/* var y=function(){
    console.log(arguments[0]);
} */

/*var y=(...n)=>{
    console.log(n[0]);
};
x(1,2,3);
*/
//stu class

class stu{
    static count=0
    constructor(name,age,phNo,boardMarks,){
        this.name=name;
        this.age=age;
        this.phNo=phNo;
        this.boardMarks=boardMarks;
        stu.count++;
    }
    userCount(){

        console.log("Number of user "+stu.count)
    
       }
   isEligible(min){
  return (age)=>{
    if(this.boardMarks>min&&this.age>age){
        return true;
    }else{
        return false;
    }
  }
  }
 
}      
    

let s1=new stu('shilpa',20,'234',50);
let s2=new stu('sanu',15,'234',50);
let s3=new stu('adhya',30,'234',50);
let s4=new stu('suman',18,'234',50);
let s5=new stu('sangeeta',13,'234',50);
console.log(s1.isEligible(40)(18));
let arr=[];
arr.push(s1);
arr.push(s2);
arr.push(s3);
arr.push(s4);
arr.push(s5);
for(let i=0;i<arr.length;i++){
    if(arr[i].isEligible(40)(18)){
        console.log(arr[i].name);
    }
}
console.log(arr)