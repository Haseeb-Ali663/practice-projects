import React from "react";
import Card from "./components/Card.jsx";
import myImage from "./assets/Untitled design.gif";

const App = () => {
  return (
    <>
      <div className='flex  items-center justify-center min-h-screen bg-gray-100 gap-2'>
        <Card name='Haseeb' image={myImage} />
        <Card name='Qaisar' image={myImage} />
        <Card image={myImage} />
        <Card image={myImage} />
      </div>
    </>
  );
};

export default App;
