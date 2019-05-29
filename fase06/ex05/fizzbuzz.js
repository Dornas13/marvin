function fizzbuzz (x,y) {
    
a = ""
 
    while(x<=y){
        if (x % 3===0 && x % 5===0)
            a= " FizzBuzz"
        else if (x % 3===0)
            a =  " Fizz"
        else if (x % 5===0 )
            a =  " Buzz"
            else 
            a = ""
        
    
console.log(x+a)
x++
}
}
