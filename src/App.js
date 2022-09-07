import React, { useState } from "react";
import styled from "styled-components";

const MainBox = styled.div`
  border: 2px solid grey;
  background-color: orange;
  background-image: linear-gradient(40deg, #1aa53c73, transparent);
  width: 100%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 0;
`;
const Box = styled.div`
  border: 1px solid green;
  width: 40vw;
  height: 40vh;
  background-color: blue;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
`;
const Button = styled.button`
  height: 6vh;
  width: 10vw;
  background-color: light red;
  background-image: linear-gradient(45deg, #1f801fde, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: lightcyan;
  font-size: 1.5rem;
  font-weight: 900;
`;
const Output = styled.span`
   {
    height: 7vh;
    width: 40vw;
    border: 1px solid grey;
    background-color: black;
    font-size: 2.5rem;
    background-image: linear-gradient(15deg, #19e7b8e6, transparent 100px);
    z-index: 2;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-End;
  }
`;
const initial = {
  prevValue: null,
  currentValue: null,
  work: null,
};
const App = () => {
  const [value, setValue] = useState(initial);
  const handleFinish = (value) => {
    let answer = NaN;
    let { work, prevValue, currentValue } = value;
    prevValue = parseInt(prevValue);
    currentValue = parseInt(currentValue);
    switch (work) {
      case "+": {
        answer = prevValue + parseInt(currentValue);
        return answer;
      }
      case "*": {
        answer = prevValue * currentValue;
        return answer;
      }
      case "%": {
        answer = prevValue / currentValue;
        return answer;
      }
      case "-": {
        answer = prevValue - currentValue;
        return answer;
      }
      default: {
        console.log("enter number");
        answer = currentValue;
      }
    }
  };
  const handleTotal = (val, value) => {
    if (value.prevValue === null && value.work === null && value.currentValue) {
      setValue({ ...value, currentValue: value.currentValue });
    }
    if (val === "=" && value.prevValue !== null) {
      setValue({
        ...value,
        currentValue: handleFinish(value),
        prevValue: null,
        work: null,
      });
      console.log(value);
    }
  };
  const handleSubmit = (val, value) => {
    if (value.work) {
      setValue({
        ...value,
        prevValue: handleFinish(value),
        currentValue: null,
        work: val,
      });
    }
    if (value.work === null) {
      setValue({
        ...value,
        prevValue: value.currentValue,
        currentValue: null,
        work: val,
      });
      console.log("ans");
    }
  };
  const handleValue = (val) => {
    if (value.prevValue && value.work) {
      value.currentValue === null &&
        setValue({ ...value, currentValue: `${val}` });

      value.currentValue !== null &&
        setValue({ ...value, currentValue: `${value.currentValue}${val}` });
    }

    if (!value.prevValue && value.work === null) {
      value.currentValue === null &&
        setValue({ ...value, currentValue: `${val}` });

      value.currentValue !== null &&
        setValue({ ...value, currentValue: `${value.currentValue}${val}` });
    }
  };
  console.log(value);
  const handleDelete = (value) => {
    if (!value.currentValue) {
      setValue(initial);
    } else {
      console.log(value);

      setValue({ ...value, currentValue: value.currentValue.toString().slice(0, -1) });
    }
    console.log(value);
  };
  return (
    <>
      <h2>welcome to my calculator</h2>
      <MainBox>
        <Box>
          <Output>
            {value.prevValue}
            {value.work}
          </Output>
          <Output> {value.currentValue}</Output>

          <Button onClick={() => handleValue(1)}>1</Button>
          <Button onClick={() => handleValue(2)}>2</Button>
          <Button onClick={() => handleValue(3)}>3</Button>
          <Button onClick={() => handleSubmit("*", value)}>*</Button>
          <Button onClick={() => handleValue(4)}>4</Button>
          <Button onClick={() => handleValue(5)}>5</Button>
          <Button onClick={() => handleValue(6)}>6</Button>
          <Button onClick={() => handleSubmit("-", value)}>-</Button>
          <Button onClick={() => handleValue(7)}>7</Button>
          <Button onClick={() => handleValue(8)}>8</Button>
          <Button onClick={() => handleValue(9)}>9</Button>
          <Button onClick={() => handleSubmit("%", value)}>%</Button>
          <Button onClick={() => handleDelete(value)}>Del</Button>
          <Button onClick={() => handleValue(0)}>0</Button>
          <Button onClick={() => handleTotal("=", value)}>=</Button>
          <Button onClick={() => handleSubmit("+", value)}>+</Button>
        </Box>
      </MainBox>
    </>
  );
};

export default App;
