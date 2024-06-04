
function calculate(operation) {
    var a = document.getElementById("x").value;
    var b = document.getElementById("y").value;
    
    if (a==null || b==null) {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
        return;
    }

    var a = parseFloat(a);
    var b = parseFloat(b);
    var result;

    switch (operation) {
        case 'add':
            result = a + b
            break;
        case 'subtract':
            result = a -b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            if(b==0){
                result = "Division by zero not possible"
            }
            else{
            result = a / b;
            }
            break;
        default:
            result = "Invalid operation";
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}
