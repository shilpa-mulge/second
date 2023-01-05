const formde=document.getElementById('formid');
console.log(formde)
formde.addEventListener('submit',(e)=>{
    e.preventDefault();
    const amt=e.target.amount.value;
    const dis=e.target.discription.value;
    const cat=e.target.category.value;

    const obj={
   amt,
   dis,
   cat
    }
localStorage.setItem(obj.cat,JSON.stringify(obj))
showONScreen(obj)
})

window.addEventListener('DOMContentLoaded',()=>{
    const obj=localStorage;
    const key=Object.keys(obj);
    for(let i=0;i<key.length;i++){
let k=key[i];
let ele=obj[k];
showONScreen(JSON.parse(ele))
    }
})

function showONScreen(user){
    const par=document.getElementById('users');
    const child=`<li id="${user.cat}">${user.amt}-${user.dis}-${user.cat}
    <button onclick=deleteUser('${user.cat}')>delete</button>
    <button onclick=EditUser('${user.cat}','${user.amt}','${user.dis}')>edit</button>
    </li>`
    par.innerHTML=par.innerHTML+child
}

function deleteUser(userid){
    const par=document.getElementById('users');
    const ch=document.getElementById(userid);
    console.log(ch)
    par.removeChild(ch)
    localStorage.removeItem(userid)
}
function EditUser(cat,amt,dis){
    console.log(cat)
    document.getElementById('num').value=amt;
    document.getElementById('des').value=dis;
    document.getElementById('ctg').value=cat;
    deleteUser(cat)
}