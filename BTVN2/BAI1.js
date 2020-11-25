const arr =[1,2,3,4,5,1,4,2,5]
const countElement = arr.reduce(function(count, value){
    count[value] = (value in count) ? count[value] + 1: 1;
    return count;
}, {});
console.log(countElement);