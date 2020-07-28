import React from 'react'
import ReactDOM from 'react-dom';
import {getAnimations} from '../../sortingAlgos/mergeSort.js'
import bubbleSort from '../../sortingAlgos/bubbleSort.js'

class Visualizer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      storage: [],
    };
  };

  componentDidMount() {
    this.originalArray();
  }
  // when component mounts populate an array with random number from 0 to 100
  // resets random array
  // call random num generator and push result to storage
  originalArray() {
    const storage = [];
    for (let i = 0; i < 30; i++) {
      storage.push(randomIntFromInterval(0, 860))
    };
    this.setState({storage: storage})
  };

  // call merge sort on the state that is a random generated array
  // iterate through the animations
  // get random arrays
  // every new animation with new values happens every 3 vals
  // isolate the values being compared
  // i need to set the style during the comparison, isolate the style for
  mergeSort() {
    // console.log(this.state.storage)
    const swapAnimation = getAnimations(this.state.storage);
    for (var i = 0; i < swapAnimation.length; i++) {
      const randomArray = document.getElementsByClassName('randomArray')
      const newComparison = i % 3 !== 2;
      if (newComparison) {
        console.log('array in comparisson merge', swapAnimation[i])
        console.log(randomArray)
        const [valueOne, valueTwo] = swapAnimation[i];
        const styleOne = randomArray[valueOne].style;
        console.log('styleOne', styleOne)
        const styleTwo = randomArray[valueTwo].style;
        console.log('styleTwo', styleTwo)
        const color = i % 3 === 0 ? '#171d1c' : '#97db4f';
        setTimeout(() => {
          styleOne.backgroundColor = color;
          styleTwo.backgroundColor = color;
        }, i * 100);
      } else {
        const [valueOne, newHeight] = swapAnimation[i];
        const styleOne = randomArray[valueOne].style;
        setTimeout(() => {
          styleOne.height = `${newHeight}px`;
        }, i * 100);
      };
    };
  };

  bubbleSort() {
    const bubbleAnimation = bubbleSort(this.state.storage)
    for (var i = 0; i < bubbleAnimation.length; i++) {
      const randomArray = document.getElementsByClassName('randomArray')
      const [valueOne, newHeight] = randomArray[i];
      const styleOne = bubbleAnimation[valueOne].style;
      setTimeout(() => {
        styleOne.height = `${newHeight}px`;
      }, i * 100);
    }
  }



  render() {
    const {storage} = this.state;
    // console.log(this.state.storage)
    return (
      <div id='Visualizer'>
          <div className='header'>
          <h1 className='title'>Help has arrived!</h1>
          <ul className='types'>
            <li>Sorting Algorithms</li>
            <li>Tree Traversal</li>
            <li>Graph Traversal</li>
            <li>Matrix Traversal</li>
            <li>List Traversal</li>
          </ul>
        </div>
        <div className='lines'>
        {storage.map((value, id) => (
          <div
            className='randomArray'
            key={id}
            style={{
              // backgroundColor: 'red',
              height: `${value}px`
            }}></div>
        ))}
        </div>
        <br/>
      <div className='buttonBox'>
        <button onClick={() => this.originalArray()} type='button' className='newArray'>New Array</button>
        <button onClick={() => this.mergeSort()} type='button' className='newArray'>MergeSort</button>
        <button onClick={() => this.bubbleSort()} type='button' className='newArray'>BubbleSort</button>
        <button type='button' className='newArray'>HeapSort</button>
        <button type='button' className='newArray'>QuickSort</button>
        <button type='button' className='newArray'>SelectSort</button>
        <button type='button' className='newArray'>InsertionSort</button>
        <button type='button' className='newArray'>Random QuickSort</button>
        <button type='button' className='newArray'>CountingSort</button>
        <button type='button' className='newArray'>RadixSort</button>
      </div>
      </div>
    )
  };
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Visualizer;