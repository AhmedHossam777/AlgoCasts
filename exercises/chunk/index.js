// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// let nums = [1, 2, 3, 4, 5];
// console.log(nums.slice(0, 3)); // [ 1, 2, 3 ]
//
// function chunk(array, size) {
//   const chunked = [];
//
//   for (let i = 0; i < array.length; i += size) {
//     chunked.push(array.slice(i, size + i));
//   }
//
//   return chunked;
// }
//
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
// module.exports = chunk;

// function chunk(array, size) {
//   const chunked = [];
//   for (let element of array) {
//     const last = chunked[chunked.length - 1];
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return chunked;
// }

// const chunks = (arr, n) => {
//   let numberOfChunks = arr.length / n;
//   const chunked = [];
//   let end = n;
//   let start = 0;
//   for (let i = 0; i < numberOfChunks; i++) {
//     chunked.push(arr.slice(start, end));
//     start = end;
//     end += n;
//   }
//   return chunked;
// };

// console.log(chunks([1, 2, 3, 4, 5, 6, 7, 8], 3));
//

const chunks = (arr, n) => {
  let numberOfChunks = (arr.length - 1) / n;
  let chunked = [];
  let newArr = [];
  let end = n;
  let start = 0;

  for (let j = start; j <= numberOfChunks; j++) {
    for (let i = start; i < end; i++) {
      if (arr[i] === undefined) {
        continue;
      }
      newArr.push(arr[i]);
    }
    chunked.push(newArr);
    newArr = [];
    start = end;
    end += n;
  }

  console.log(chunked);
};

chunks([1, 2, 3, 4, 5, 6, 7, 8], 3);
