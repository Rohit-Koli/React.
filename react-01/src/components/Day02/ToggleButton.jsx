import React, { useState } from 'react'
const ToggleButton = () => {
  const [isOn,setIsOn] = useState(false)
  return(
    <>
     {/* <button onClick={()=> setIsOn(prev =!prev)}> */}
     <button onClick={() => setIsOn((prev) => !prev)}>
      {isOn?"ON":"OFF"}
     </button>
    </>
  )
}

export default ToggleButton

// import { useState } from "react";
// import { Button } from "@/components/ui/button";

// export default function ToggleButton() {
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <Button
//         onClick={() => setIsOn((prev) => !prev)}
//         className={`px-4 py-2 text-white text-lg font-semibold rounded-lg transition-all duration-300 ${
//           isOn ? "bg-green-500" : "bg-red-500"
//         }`}
//       >
//         {isOn ? "ON" : "OFF"}
//       </Button>
//     </div>
//   );
// }
