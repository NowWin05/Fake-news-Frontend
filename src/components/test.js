import React from "react";

const RandomDisplay = () => {
  const randomThings = [
   "Banana", 
    "A cat wearing sunglasses", 
    "Quantum physics is weird", 
    "React makes life easier", 
    "Why is JavaScript so confusing?",
    "The answer is 42",
    "Pineapples do not belong on pizza",
    "Time travel paradoxes are mind-bending",
    "Coding at 3 AM is a superpower",
    "Does anyone actually read the terms and conditions?" 
    
  ];

  const randomItem = randomThings[Math.floor(Math.random() * randomThings.length)];

  return (
    <div className="flex justify-center items-center h-screen text-2xl font-bold">
      {randomItem}
    </div>
  );
};

export default RandomDisplay;
