function factorial(){
    var a = document.getElementById("num").value
    var n=0;
    var result = 1
    for(var i = 1; i <= a ; i++){
        result = result*i
        n=1
    }
    if(n==1 || a==0){
        document.getElementById("answer").innerHTML = 'Factorial of '+a+ ' is ' + result;
    }
    else{
        document.getElementById("answer").innerHTML = 'Enter a valid number';
    }
}