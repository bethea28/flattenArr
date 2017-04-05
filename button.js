

const flatten = (arr) => {
    let finalArray = [];
    const flatFunction = (arr) => {
        if (Array.isArray(arr)) {
          for (let i = 0; i < arr.length; ++ i) {

            // do this recursively
            flatFunction(arr[i]);
          }

           // handles all object datatypes
        } else if(typeof arr == 'object') {
            for(let key in arr){
              flatFunction(arr[key])
            }
        }else if(arr !== null){
            // if element is not null put the finalArray
            finalArray.push(arr);

        }
    }
    flatFunction(arr);
    return finalArray;
}


module.exports = flatten
