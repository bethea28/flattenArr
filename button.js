//function flattens any nested array of any datatypes
//function recursively goes through each data structure unit is has the
//individual element by itself then pushes that single element to an empty array
// if it is not a null value

const flatten = (arr) => {
    let finalArray = []
    const flatFunction = (arr) => {
        //checks if datatype being passed is an array
        if (Array.isArray(arr)) {
          for (let i = 0; i < arr.length; ++ i) {

            // if is an Array it passes each index to flatFunction recursively
            flatFunction(arr[i])
          }

        // handles all object datatypes
        // if is an object it passes each keys values to flatFunction recursively

        } else if(typeof arr == 'object') {
            for(let key in arr){
              flatFunction(arr[key])
            }
        // if element is not null and is not an array or object put in finalArray
        }else if(arr !== null){
            finalArray.push(arr)

        }
    }
    flatFunction(arr);
    return finalArray;
}


module.exports = flatten
