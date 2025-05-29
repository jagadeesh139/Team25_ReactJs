import { useState } from "react";

const Todofrm1 = ({ addtodo }) => {
  const [input, setInput] = useState('');

  const handleevent = (e) => {
    setInput(e.target.value);
  };

  const handleinput = (e) => {

    addtodo(input);
    setInput('');

  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleevent}

        placeholder="Enter todo and press Enter"
      />
      <button type="button" onClick={handleinput}>Add Todo</button>
    </div>
  );
};

export default Todofrm1;