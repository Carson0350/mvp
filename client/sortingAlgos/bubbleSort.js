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
        // console.log('everySwap that happens', animations)
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  // console.log(animations)
  return animations;
};

export default bubbleSort