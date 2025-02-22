import { useState } from "react";

const InputField = () => {
  const [text, setText] = useState("")

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p>Typed: {text}</p>
    </div>
  );
};

export default InputField