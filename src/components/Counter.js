import { useState } from "react";

function Counter() {
  // let count = 0
  const [count, setCount] = useState(0); //hook
  // const useStateResult = useState("mareike")
  // console.log(useStateResult)

  function increment(oldCountValue) {
    console.log("im callbacck", oldCountValue);
    const newCountValue = oldCountValue + 1;
    return newCountValue;
  }

  return (
    <>
      {/* button.addEventListener("click", callback) */}
      <button
        onClick={() => {
          // count++;
          // setCount(count + 1) //setCount(21)
          //oh es ist zeit zum rerendern
          // setCount(count + 1) //setCount(21)
          setCount(increment); //setCount ist higher order function und increment ist unser callback
          setCount(increment);
          console.log(count);
        }}
      >
        +1
      </button>
      <output>Ich bin ein counter mit dem wert: {count}</output>
    </>
  );
}

export default Counter;
