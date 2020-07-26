export function Animations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let start = startIdx;
  let i = startIdx;
  let middle = middleIdx + 1;
  while (secondStart <= middleIdx && middle <= endIdx) {
    animations.push([secondStart, middle]);
    animations.push([secondStart, middle]);
    if (auxiliaryArray[secondStart] <= auxiliaryArray[middle]) {
      animations.push([start, auxiliaryArray[secondStart]]);
      mainArray[start++] = auxiliaryArray[secondStart++];
    } else {
      animations.push([start, auxiliaryArray[middle]]);
      mainArray[start++] = auxiliaryArray[middle++];
    }
  }
  while (i <= middleIdx) {
    animations.push([secondStart, secondStart]);
    animations.push([secondStart, secondStart]);
    animations.push([start, auxiliaryArray[secondStart]]);
    mainArray[start++] = auxiliaryArray[secondStart++];
  }
  while (middle <= endIdx) {
    animations.push([middle, middle]);
    animations.push([middle, middle]);
    animations.push([start, auxiliaryArray[middle]]);
    mainArray[start++] = auxiliaryArray[middle++];
  }
}