import React from 'react'

export function getAnimations (storage) {
  const animations = [];
  if (storage.length <= 1) {
    return storage;
  }
  const storageArray = storage.slice();
  setMerge(storage, 0, storage.length - 1, storageArray, animations);
  return animations;
}

function setMerge(
  mainArray,
  startId,
  endId,
  storageArray,
  animations,
) {
  if (startId === endId) return;
  const middleId = Math.floor((startId + endId) / 2);
  setMerge(storageArray, startId, middleId, mainArray, animations);
  setMerge(storageArray, middleId + 1, endId, mainArray, animations);
  activeMerge(mainArray, startId, middleId, endId, storageArray, animations);
}

function activeMerge(
  mainArray,
  startId,
  middleId,
  endId,
  storageArray,
  animations,
) {
  let start = startId;
  let secondStart = startId;
  let middle = middleId + 1;
  while (secondStart <= middleId && middle <= endId) {
    animations.push([secondStart, middle]);
    animations.push([secondStart, middle]);
    if (storageArray[secondStart] <= storageArray[middle]) {
      animations.push([start, storageArray[secondStart]]);
      mainArray[start++] = storageArray[secondStart++];
    } else {
      animations.push([start, storageArray[middle]]);
      mainArray[start++] = storageArray[middle++];
    }
  }
  while (secondStart <= middleId) {
    animations.push([secondStart, secondStart]);
    animations.push([secondStart, secondStart]);
    animations.push([start, storageArray[secondStart]]);
    mainArray[start++] = storageArray[secondStart++];
  }
  while (middle <= endId) {
    animations.push([middle, middle]);
    animations.push([middle, middle]);
    animations.push([start, storageArray[middle]]);
    mainArray[start++] = storageArray[middle++];
  }
}

