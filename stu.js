class student{
    static count=0
    constructor(name,age,phNo,boardMarks,){
        this.name=name;
        this.age=age;
        this.phNo=phNo;
        this.boardMarks=boardMarks;
        student.count++;
    }
    userCount(){

        console.log("Number of user "+student.count)
    
       }
    isEligible(){
        if(this.boardMarks>40){
            console.log(this.name+" is eligible");
        }else{
            console.log(this.name+" is not eligible");
        }
    }
}
let s1=new student('shilpa',20,'234',50);
let s2=new student('sanu',15,'234',50);
let s3=new student('adhya',10,'234',50);
let s4=new student('suman',18,'234',50);
let s5=new student('sangeeta',13,'234',50);
s1.userCount();