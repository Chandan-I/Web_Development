function findVowels() {
    var a = document.getElementById("num").value.toLowerCase();
    var i;
    var count = 0;
    var vowels = 'aeiou';

    for (i = 0; i < a.length; i++) {
        if (vowels.includes(a[i])) {
            count++;
        }
    }

    var result = "Total number of vowels: " + count;
    document.getElementById("Result").innerHTML = result;
}