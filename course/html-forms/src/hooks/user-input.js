import {useState} from 'react';

function useInput(validateValue) {
  const [inputVal, setInputVal] = useState('');
  const [inputTouch, setInputTouch] = useState(false);
  
  const validValue = validateValue(inputVal);
  console.log(validValue);
  let hasError = !validValue && inputTouch;

  const inputBlurHandler = event => {
    setInputTouch(true);
  }
  const inputChangeHandler = event => {
    setInputVal(event.target.value);
    console.log('Input value - '+event.target.value);
  }
  const reset = () => {setInputVal('')};

  return {
    value: inputVal, isTouch: inputTouch, error: hasError, inputBlurHandler, inputChangeHandler, reset
  }    
}
export default useInput;