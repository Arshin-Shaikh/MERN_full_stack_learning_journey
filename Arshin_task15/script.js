
function maximumNumber(arr) {
    let maxi = 0;
    for (let val of arr) {
        if(val>maxi){
            maxi=val;
        }
    }
    console.log(`Maximum Number : ${maxi}`);
}

let arr = [4,8,2,11,6,7,10];
console.log(`Numbers in Array: ${arr}`);

maximumNumber(arr);

let sumbmission = arr.reduce((res,curr) => {
    return res+curr;
});
console.log(`Sum of all the elements: ${sumbmission}`);

let evenarr = arr.filter((val) => {
    return val%2!=0;
})
console.log(`Count of old Numbers: ${evenarr.length}`)