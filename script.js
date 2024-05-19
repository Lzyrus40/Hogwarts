const group =['ture','ride','trek','trip'];
var i=0;
setInterval(()=>{
    document.getElementById("change").innerHTML=group[i];
    i++;
    if(i==group.length){
        i=0;
    }
},3000);