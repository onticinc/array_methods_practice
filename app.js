//filter
//findIndex
//sort
//map
//foreach
//reduce

let array = [

    {   
        name: 'Mike',
        age: 22, 
        location: 'Arizona', 
    },
    {   
        name: 'Scott',
        age: 28, 
        location: 'Seattle', 
    },
    {   
        name: 'Steve',
        age: 22, 
        location: 'New York', 
    }

]

// For Each = a simple for loop. 

// array.forEach(function(value, index){ 
//     console.log('value', index);
// })
// console.log(array);


let mappedArray = array.map(function(value){
    console.log(value.age);
    if (value.age >= 25) {
        return 'old';
    } else {
        return 'young';
    }
});

console.log(mappedArray);