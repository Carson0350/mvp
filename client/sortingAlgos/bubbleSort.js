// function getBubbleAnimations (storage) {
//   const animations = []
//   if (storage.length <= 1) {
//     return storage
//   }
//   const storageArray = storage.slice
//   return animations
//   console.log(animations)
// }

let bubbleSort = (inputArr) => {
  let animations = []
  let length = inputArr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < length; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        animations.push([inputArr[i], inputArr[i + 1]])
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  console.log(animations)
  console.log(inputArr)
  return animations;
};

// function bubbleSort(stateArray, management, speed) {
//   let array = stateArray.slice(0),
//       toManagement = [],
//       sorted = false,
//       round = 0;
//   while (!sorted) {
//     sorted = true;
//     for (let i = 0; i < array.length - 1 - round; i++) {
//       // console.log(toManagement)
//       // toManagement.push([i, i + 1]);
//       if (array[i] > array[i + 1]) {
//         // toManagement.push([i, i + 1, true]);
//         let temp = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = temp;
//         sorted = false;
//         toManagement.push(array.slice(0));
//         // toManagement.push([]);
//       }
//     }
//     // toManagement.push([true, array.length - 1 - round]);
//     // round++;
//   }
//   console.log('from management', toManagement)
//   console.log('from management', array)
//   return array;
// }

export default bubbleSort