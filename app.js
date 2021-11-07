//filter
//findIndex
//sort
//map
//foreach
//reduce

let array = [

    {   
        name: 'Mike',
        lastName: 'Smith',
        age: 22, 
        location: 'Arizona', 
    },
    {   
        name: 'Scott',
        lastName: "Smith"
        age: 28, 
        location: 'Seattle', 
    },
    {   
        name: 'Steve',
        lastName: 'Stevenson Jr.',
        age: 22, 
        location: 'New York', 
    }

]

/****************************************************************************
 * 1. FOR EACH
 * Foreach takes a callback function and runs 
 * that callback function on each element of array one by one.
 * 
 ******************************************************************************/


 var sample = [1, 2, 3];
 // es5
 sample.forEach(function (elem, index){
    console.log(elem + ' comes at ' + index);
 })
 // es6
 sample.forEach((elem, index) => `${elem} comes at ${index}`)
 
 
 /*
 output
 1 comes at 0
 2 comes at 1
 3 comes at 2
 */


/****************************************************************************
 * 2. Filter
 * The main difference between forEach and filter is that 
 * forEach just loop over the array and executes the callback 
 * but filter executes the callback and check its return value. 
 * 
 ******************************************************************************/

 var sample = [1, 2, 3] // yeah same array


 // es5
var result = sample.filter(function(elem){
    return elem !== 2;
})
console.log(result)

// es6
var result = sample.filter(elem => elem !== 2)

/* output */
[1, 3]

 

/****************************************************************************
 * 3. Map
 * One of my favourite and most used array method of all time. 
 * As a ReactJS developer I use map a lot inside my application UI.
 * Map like filter & foreach takes a callback and run it against every 
 * element on the array but whats makes it unique is it generate a new array based 
 * on your existing array. 
 *
 * Let’s understand map with an example.
 * 
 ******************************************************************************/

 var sample = [1, 2, 3] // i am never gonna change Boo! Yeah
 // es5
 var mapped = sample.map(function(elem) {
     return elem * 10;
 })

 // es6
 let mapped = sample.map(elem => elem * 10)
 console.log(mapped);
 
 /* output */
 [10, 20, 30]



/****************************************************************************
 * 4. Map
 * As the name already suggest reduce method of the array object is used 
 * to reduce the array to one single value.
 * For example if you have to add all the elements of an array you can 
 * do something like this.
 * 
 ******************************************************************************/


 var sample = [1, 2, 3] // here we meet again
 
 // es5
 var sum = sample.reduce(function(sum, elem){
     return sum + elem;
 })

 // es6
 var sum = sample.reduce((sum, elem) => sum + elem)
 console.log(sum)