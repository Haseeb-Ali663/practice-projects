import React from "react";
import Buttons from "./assets/components/Buttons";

const App = () => {
  const [color, setColor] = React.useState("red");
  return (
    <div
      className='flex flex-col items-center justify-end h-screen'
      style={{ backgroundColor: color }}>
      <div className='h-[50px] bg-stone-600 flex items-center justify-center mb-4 gap-3 rounded-xl px-4 py-4'>
        <Buttons label='Red' bgColor='red' onClick={() => setColor("red")} />
        <Buttons label='Blue' bgColor='blue' onClick={() => setColor("blue")} />
        <Buttons
          label='Green'
          bgColor='green'
          onClick={() => setColor("green")}
        />
        <Buttons
          label='Olive'
          bgColor='olive'
          onClick={() => setColor("olive")}
        />
        <Buttons
          label='Yellow'
          bgColor='yellow'
          textColor='black'
          onClick={() => setColor("yellow")}
        />
        <Buttons
          label='Black'
          bgColor='black'
          // textColor='black'
          onClick={() => setColor("black")}
        />
        <Buttons
          label='White'
          bgColor='white'
          textColor='black'
          onClick={() => setColor("white")}
        />
        <Buttons
          label='Purple'
          bgColor='Purple'
          // textColor='black'
          onClick={() => setColor("Purple")}
        />
      </div>
    </div>
  );
};

export default App;
