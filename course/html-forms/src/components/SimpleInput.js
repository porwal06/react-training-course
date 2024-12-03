// import { useState } from "react";
import useInput from '../hooks/user-input';
// import useInput from '../hooks/user-input';
function inputValidator(value)
{
  return (value.trim() !== "");
}
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const emailValidator = (value) => (value.match(validRegex));

const SimpleInput = (props) => {

  const {value: inputVal, isTouch:inputTouch, error:isInputValid, inputChangeHandler, inputBlurHandler, reset:inputReset} = useInput(inputValidator);
  const {value: emailVal, isTouch:emailTouch, error:isEmailValid, inputChangeHandler:emailChangeHandler, inputBlurHandler:emailBlurHandler, reset:emailReset} = useInput(emailValidator);

  //const [inputVal, setInputVal] = useState('');
  // const [emailVal, setEmailVal] = useState('');
  // const [inputTouch, setInputTouch] = useState(false);
  // const [emailTouch, setEmailTouch] = useState(false);
  // const [isInputValid, setIsInputValid] = useState(false);
  // const [isEmailValid, setIsEmailValid] = useState(false);

  let formValid = false;
  if(!isInputValid && !isEmailValid)
  formValid = true;


  // const emailChangeHandler = event => {
  //   setEmailVal(event.target.value);
  // }
  // const emailBlurHandler = event => {    
  //   setEmailTouch(true);

  // let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // if(emailVal.match(validRegex)) {
  //   setIsEmailValid(true);
  // }
  // }
  

  const formSubmitHandler = (event) => {
    event.preventDefault(false);
    console.log("Form submitted");
    inputReset();
    emailReset();

    // setInputVal('');
    // setEmailVal('');
  }
  // const inputChangeHandler = event => {
  //   setInputVal(event.target.value);    
  // }
  // const inputBlurHandler = event => {
  //   setInputTouch(true);
  // }
  const inputFormClass = (!isInputValid && inputTouch) ? 'form-control' : 'form-control invalid';
  const emailFormClass = (!isEmailValid && !emailTouch) ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmitHandler}>

<div className={emailFormClass}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={emailVal}/>
        {isEmailValid && emailTouch && <p className='error-text'>Please enter valid email.</p>}
      </div>
      <div className={inputFormClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={inputChangeHandler} onBlur={inputBlurHandler} value={inputVal}/>
        {isInputValid && inputTouch && <p className='error-text'>Please enter valid name.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
