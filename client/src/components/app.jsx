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

  originalArray() {
    const storage = [];
    for (let i = 0; i < 299; i++) {
      storage.push(randomIntFromInterval(0, 900))
    };
    this.setState({storage: storage})
  };

  mergeSort() {
    // console.log(this.state.storage)
    const swapAnimation = getAnimations(this.state.storage);
    console.log(swapAnimation)
    for (var i = 0; i < swapAnimation.length; i++) {
      const randomArray = document.getElementsByClassName('randomArray')
      const newComparison = i % 3 !== 2;
      if (newComparison) {
        const [valueOne, valueTwo] = swapAnimation[i];
        const styleOne = randomArray[valueOne].style;
        const styleTwo = randomArray[valueTwo].style;
        const color = i % 3 === 0 ? '#171d1c' : '#97db4f';
        setTimeout(() => {
          styleOne.backgroundColor = color;
          styleTwo.backgroundColor = color;
        }, i * 5);
      } else {
        const [valueOne, newHeight] = swapAnimation[i];
        const styleOne = randomArray[valueOne].style;
        setTimeout(() => {
          styleOne.height = `${newHeight}px`;
        }, i * 5);
      };
    };
  };


  bubbleSort () {
    const arrayValue = document.getElementsByClassName('randomArray')
    const bubbleAnimation = bubbleSort(this.state.storage)
    console.log(bubbleAnimation)
    const [valueOne, valueTwo] = bubbleAnimation[i];
    for (var i = 0; i < bubbleAnimation.length; i++) {
      for (let j = 0; j < bubbleAnimation.length - i - 1; j += 1) {
        bubbleAnimation[j].style.backgroundColor = '#171d1c'
        bubbleAnimation[j + 1].style.backgroundColor = '#97db4f'
      }
      if (valueOne > valueTwo) {
        const styleOne = randomArray[i].style;
        const styleTwo = randomArray[i].style;
        console.log(styleOne)
        setTimeout(() => {
          const [valueOne, newHeight] = bubbleAnimation[i]
          styleOne.height = `${valueOne}px`;
          styleTwo.height = `${newHeight}px`
        }, i * 100);
      } else {
        setTimeout(() => {
          const [valueOne, newHeight] = bubbleAnimation[i]
          styleOne.height = `${newHeight}px`;
          styleTwo.height = `${valueOne}px`
        }, i * 100);
      };
    };
  }

  render() {
    const {storage} = this.state;
    return (
      <div>
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
      </div>
    )
  };
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Visualizer;

