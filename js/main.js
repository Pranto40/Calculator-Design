
function Delete(){
    document.getElementById("result").value = "";
}

function add(new_value){
    document.getElementById("result").value += new_value;
}

function Answer(){
    let a = document.getElementById("result").value;
    let b = eval(a);
    document.getElementById("result").value = b;
}