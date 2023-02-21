import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [firstNumber, setFirstNumber] = useState();
  const [sinal, setSinal] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [sun, setSun] = useState('');
  const [verification, setVerification] = useState(false)

  const sunNumbers = (a) => {
    const numberOne = Number(firstNumber);
    const numbertwo = Number(secondNumber);
   if(secondNumber.length > 0){
    switch (sinal) {
      case '+':
        setFirstNumber()
        setSecondNumber('')
        setSinal('')
        return setSun(numberOne + numbertwo);

      case '-':
        setFirstNumber()
        setSecondNumber('')
        setSinal('')
        return setSun(numberOne - numbertwo);

      case '*':
        setFirstNumber()
        setSecondNumber('')
        setSinal('')
        return setSun(numberOne * numbertwo);
      
      case '/':
        setFirstNumber()
        setSecondNumber('')
        setSinal('')
        return setSun(numberOne / numbertwo);
 
      default:
        break;
    }
   }
  }
  const sinais = (e) => {
    const value = e.target.value
    setSinal(value)
    if(value === sinal){
      setSinal('')
    }
  }

  const clean = () => {
    if(secondNumber > 0) {
      setSecondNumber(secondNumber.slice(0, secondNumber.length - 1))
      setSun('')
    }
    else if(secondNumber.length === 0 && sinal.length > 0){
      setSinal('')
    } 
    else{
      setSun('')
      setFirstNumber(firstNumber.slice(0, firstNumber.length - 1))
    }
  }

  const salveNumber = (e) => {
    if(sinal.length === 0 && firstNumber !== undefined){
      setFirstNumber(firstNumber + e.target.value);
      setSun('')
    }
    else if (sinal.length > 0){
      setSecondNumber(secondNumber + e.target.value);
      setSun('')
    }
    else if(firstNumber === undefined){
      setFirstNumber(e.target.value);
      setSun('')
    }
    
  };
  const check = () => {
    if(firstNumber === undefined || firstNumber === ''){
      setVerification(true)
    }else{
      setVerification(false)
    }
  }
  useEffect(() => {
    check()
  },[firstNumber]);

  return (
    <div className="box">
      <div className='box-result'>  
        {sinal.length > 0 && secondNumber.length > 0 ? <p className="num">{ secondNumber }</p> : <p className="num">{ firstNumber }</p>}
        {firstNumber === undefined && sun === '' ? <p className="num">0</p> : '' }
        {firstNumber === '' ? <p className="num">0</p> : ''}
        {sun === '' ? '': <p className="num">{ sun }</p>}
      </div>
      <div className="digits-box">
        <button className="btn" onClick={ salveNumber } value='7' type="button">7</button>
        <button className="btn" onClick={ salveNumber } value='8' type="button">8</button>
        <button className="btn" onClick={ salveNumber } value='9' type="button">9</button>
        <button disabled={verification} className={sinal === '*' ? 'selected': 'btn sinal'} onClick={ sinais } value='*' type="button">X</button>
        <button className="btn" onClick={ salveNumber } value='4' type="button">4</button>
        <button className="btn" onClick={ salveNumber } value='5' type="button">5</button>
        <button className="btn" onClick={ salveNumber } value='6' type="button">6</button>
        <button disabled={verification} className={sinal === '-' ? 'selected': 'btn sinal'} onClick={ sinais } value='-' type="button">-</button>
        <button className="btn" onClick={ salveNumber } value='1' type="button">1</button>
        <button className="btn" onClick={ salveNumber } value='2' type="button">2</button>
        <button className="btn" onClick={ salveNumber } value='3' type="button">3</button>
        <button disabled={verification} className={sinal === '+' ? 'selected': 'btn sinal'} onClick={ sinais } value='+' type="button">+</button>
        <button className="btn" onClick={ salveNumber } value='.' type="button">.</button>
        <button className="btn" onClick={ salveNumber } value='0' type="button">0</button>
        <button className="btn" onClick={ clean } type="button">C</button>
        <button disabled={verification} className={sinal === '/' ? 'selected': 'btn sinal'} onClick={ sinais } value='/' type="button">/</button>
        <button className="btn sinal result" onClick={ sunNumbers } value='=' type="button">=</button>
      </div>
    </div>
  );
}

export default App;
