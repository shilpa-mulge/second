
const name = (arr)=>{
    let c=0;

    return ()=>{console.log("hello "+arr[c]);
    c++;
 }

}

const fun = name(["Ram","Shyam"]);
fun()
fun()
    