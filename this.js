//this keyword:is inside global scope
this.table='window table'
/* this.garage={
    table:'garage table',
    cleanTable(){
        console.log('cleaning ${this.table}')
    }
};

//this inside an object
let johnroom={
    table:'johns table',
    cleanTable(){
        console.log('cleaning ${this.table}')
    }
}
johnroom.cleanTable();
//this inide method
const cleanTable=function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
}

cleanTable.call(this,'some soap');
this.garage1={
    table:'garage table'
};
let johnroom1={
    table:'johns table'
    
}
cleanTable.call(this.garage1,'santoor');
cleanTable.call(this.johnroom1,'lux');

//this inside an inner function
const cleanTable1=function(soap){
    let that=this;
   /*  const innerFunction=function(soap){
    console.log(`cleaning ${that.table} using ${soap}`);
    }
    innerFunction(some);
    innerFunction.call(this,soap)
    innerFunction.bind(this)(soap); 
    const innerFunction=(soap)=>{
        console.log(`cleaning ${that.table} using ${soap}`);
        }
        innerFunction(soap);

}
 */
//this inside cunstructor
let createRoom=function(name){
    this.table=`${name}s table`
}

createRoom.prototype.cleanTable=function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
}
const jill=new createRoom('jill');
const mick=new createRoom('mick');
jill.cleanTable('some soap')


//this inside class
class createR{
    constructor(name){
        this.table=`${name}s table`
    }
    cleanT(soap){
        console.log(`cleaning ${this.table} using ${soap}`);
    }
}
//uses
//this Alone
//When used alone, this refers to the global object.
//this in a Method
//When used in an object method, this refers to the object.
//In strict mode, when used alone, this also refers to the global object
//this in a Function (Default)
//In a function, the global object is the default binding for this.

