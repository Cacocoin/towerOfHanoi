function towerHanoi (a) {
    let seed = [0,1,3,7];

   for(let z in seed){
     if(a==z){
        return seed[z]
     }
     else{
        return (7 * (2**(a-3)) + (2**(a-3)-1) )
     }
   }
} 

towerHanoi(10)
