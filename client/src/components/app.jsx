import React from 'react'
import ReactDOM from 'react-dom';


class Visualizer extends React.Component {
  constructor (props) {
    super(props)


    this.state = {
      storage: [],
    };
    console.log(this.state)
    this.originalArray = this.originalArray.bind(this)
  };

  componentDidMount() {
    this.originalArray();
  }
  // when component mounts populate an array with random number from 0 to 10000
  //
  originalArray() {
    let storage = []
    // call random num generator and push result to storage
    for (let i = 0; i < 100; i++) {
      storage.push(randomIntFromInterval(0, 700))
    }
    // set state
    this.setState({
      storage,
    })
    console.log(this.state, 'state after this.setState')
    console.log('origionalArray function speaking')
    console.log(storage, 'storage from origional array function')
  };

  mergeSort(storageArray) {

  }

  render() {
    const { storage } = this.state;

    console.log('hello from render function')
    return (
      <div id='Visualizer'>
        {storage.map((value, id) => (
          <div
            className='randomArray'
            key={id}
            style={{height: `${value}px`}}></div>
        ))}
      <button onClick={() => this.originalArray} type='button' className='bubbelSort'>BubbleSort</button>
      <button onClick={() => this.mergeSort} type='button' className='bubbelSort'>BubbleSort</button>
      <button type='button' className='mergeSort'>MergeSort</button>
      <button type='button' className='heapSort'>HeapSort</button>
      <button type='button' className='quickSort'>QuickSort</button>
      <button type='button' className='selectSort'>SelectSort</button>
      <button type='button' className='insertionSort'>InsertionSort</button>
      <button type='button' className='randomQuickSort'>Random QuickSort</button>
      <button type='button' className='countSort'>CountingSort</button>
      <button type='button' className='radixSort'>RadixSort</button>
      </div>
    )
  };
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Visualizer;