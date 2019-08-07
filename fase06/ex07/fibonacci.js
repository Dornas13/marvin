function fibonacci (x) {
    a = 1
    b = 0
    var t
    while (x>0){
        t = a;
        a= a+b;
        b= t
        x--
    }
return b
}
