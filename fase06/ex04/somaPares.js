function somaPares (x,y) {
    y = Math.floor(y)
    x = Math.ceil(x)
    var z = 0
    
    while (x<=y){
      
        if (x%2===0){
        z+= x
        }
    x++
    }  
    return z 
}
