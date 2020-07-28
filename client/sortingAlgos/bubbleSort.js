// function getBubbleSortAnimations (storage) {
//   const animations = [];
//   if (storage.length <= 1) {
//     return storage;
//   }
//   const storageArray = storage.slice();
//   // setMerge(storage, 0, storage.length - 1, storageArray, animations);
//   return animations;
// }

// function bubbleSort(items) {
//   var length = items.length;
//   //Number of passes
//   for (var i = 0; i < length; i++) {
//       //Notice that j < (length - i)
//       for (var j = 0; j < (length - i - 1); j++) {
//           //Compare the adjacent positions
//           if(items[j] > items[j+1]) {
//               //Swap the numbers
//               var tmp = items[j];  //Temporary variable to hold the current number
//               items[j] = items[j+1]; //Replace current number with adjacent number
//               items[j+1] = tmp; //Replace adjacent number with current number
//           }
//       }
//   }
// }


var arr = [];  //create empty array
var n =25;
for(var i = 0; i< 121; i++){ //initialize the array
  arr.push(n);
  n+=1;
}

function draw(n, color) {
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
  var width = 5;
  var currX = 10;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < n.length; i++){
      if(i == color){
        ctx.fillStyle = 'red';
      }else{
        ctx.fillStyle = 'blue';
      }
    var h = n[i];
    ctx.fillRect(currX, canvas.height - h, width, h);
    currX += width + 1;
  }
  }
}

function* bubbleSort(array, b) { // * is magic
  var swapped;
  var step = 0;
  var pass = 1;
  if(b==1){
      do{
          swapped = false;
          for (var i = array.length; i >=0; i--) {//bobble sort in revarse
              if (array[i] < array[i + 1]) {
                  var temp = array[i];
                  array[i] = array[i + 1];
                  array[i + 1] = temp;
                  swapped = true;
                  step++;
                  draw(array, i);
                  yield swapped; // pause here
              }
          }
          pass++
      } while (swapped);
  }else{
      do{
          swapped = false;
          for (var i = 0; i < array.length - 1; i++) {
              if (array[i] > array[i + 1]) {
                  var temp = array[i];
                  array[i] = array[i + 1];
                  array[i + 1] = temp;
                  swapped = true;
                  step++;
                  draw(array, i);
                  yield swapped; // pause here
              }
          }
          pass++
      } while (swapped);
  }
}

function start(option){
  canvas = document.getElementById('myCanvas');
  var sort = bubbleSort(arr, option);
    // an anim function triggered every 60th of a second
    function anim(ar){
      requestAnimationFrame(anim);
      //draw(ar);
      sort.next(); // call next iteration of the bubbleSort function
    }
    setTimeout(anim(arr), 7000);
}

//function ref(){ //Refreshes the page
//	location.reload();
//}

function ref(){ //Refreshes the page
  shuffle(arr);
      draw(arr, 0);
}

function shuffle(array) {//shuffles the array
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

window.onload = function(){
  canvas = document.getElementById('myCanvas');
  draw(arr, 0);
}
document.getElementById("sort").onclick = function() {start(2);};
document.getElementById("ref").onclick = function() {ref();};
document.getElementById("rev").onclick = function() {start(1);};
























// function bubbleSort(array, tempArray, speed) {
//   let array = array.slice(0),
//       storage = [],
//       sorted = false,
//       round = 0;
//   while (!sorted) {
//     sorted = true;
//     for (let i = 0; i < array.length - 1 - round; i++) {
//       storage.push([i, i + 1]);
//       if (array[i] > array[i + 1]) {
//         storage.push([i, i + 1, true]);
//         let temp = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = temp;
//         sorted = false;
//         storage.push(array.slice(0));
//         storage.push([]);
//       }
//     }
//     storage.push([true, array.length - 1 - round]);
//     round++;
//   }
//   handleTempArray(storage, tempArray, array, speed);
//   return array;
// }

// function handleTempArray(storage, tempArray, array, speed) {
//   if (!storage.length) {
//     tempArray(setCurrentBubbleTwo(array.map((num, index) => index)));
//     setTimeout(() => {
//       tempArray(setCurrentBubbleTwo([]));
//       tempArray(setCurrentSorted(array.map((num, index) => index)));
//       tempArray(setRunning(false));
//     }, 900);
//     return;
//   }
//   let dispatchFunction = storage[0].length > 3 ?
//     setArray : storage[0].length === 3 || storage[0].length === 0 ?
//       setCurrentSwappers : storage[0].length === 2 && typeof storage[0][0] === "boolean" ?
//         setCurrentSorted : setCurrentBubbleTwo;
//   tempArray(dispatchFunction(storage.shift()));
//   setTimeout(() => {
//     handleTempArray(storage, dispatch, array, speed);
//   }, speed);
// }

// export default bubbleSort