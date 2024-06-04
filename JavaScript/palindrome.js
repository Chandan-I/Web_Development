/*function palindrome(){
let s = "abccba"
for(var i = 0, k = s.length-1; i < s.length/2; i++, k--){
    if(s[i] != s[k]){
        console.log("Given String "+s+" is palindrome")
        return
    }
}
console.log("Given String "+s+" is palindrome")
return
}
palindrome()*/
function palindrome(){
    let s = document.getElementById("string").value
    var result = "Given string is palindrome"
    for(var i = 0, k = s.length-1; i < s.length/2; i++, k--){
        if(s[i] != s[k]){
            result = "Given string is not palindrome"; // Change result when not palindrome
            break;
        }
    }
    document.getElementById("answer").innerHTML = "Result: " + result; 
}