var cars =["BMW","Volvo","Thar"];
console.log(cars.length)
console.log(cars[1]);
console.log("Beforepush " +cars)
cars.push("TATA")//adds to end index
console.log("After push " +cars);
console.log(cars.length)
console.log("at method "+ cars.at(2))
console.log("Pop= "+cars.pop())
console.log("After pop "+cars)
cars.shift();
console.log("After shift "+cars)
cars.unshift("xyz");
console.log("After unshift "+ cars)
var newCars = ["Lambo","mercedes","Fortuner"]
var merge=cars.concat(newCars)
console.log("Merged array="+merge)
var join = cars.join("@")
console.log("After join "+join)
console.log("Type of join is: "+typeof(join))
console.log("Before delete method "+ cars)
delete cars[1];
console.log("After delete "+cars);
for(var i = 1; i< cars.length-1; i++){
    cars[i]=cars[i+1]
}
console.log("After For loop=> "+cars)
cars.pop()
console.log("After removing value at index 1=>"+cars)