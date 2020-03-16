`use strict`;

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var num = arr[4];
var greater = 0;

function greaterThan(greater){
    for(var i = 0 ; i < arr.length ; i++){
        if (num < arr[i]){
            greater++;
        }
    }
   return(greater);
}
console.log(greaterThan(greater ));