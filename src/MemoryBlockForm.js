import React, { useState } from "react";

function MemoryBlockForm({ setMemoryBlocks, setProcesses }) {
  const [memoryInput, setMemoryInput] = useState("");
  const [processInput, setProcessInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const memoryBlocks = memoryInput.split(",").map(Number);
    const processes = processInput.split(",").map(Number);

    setMemoryBlocks(memoryBlocks);
    setProcesses(processes);

    setMemoryInput("");
    setProcessInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Memory Blocks (comma-separated sizes): </label>
        <input
          type="text"
          value={memoryInput}
          onChange={(e) => setMemoryInput(e.target.value)}
          placeholder="e.g., 100, 500, 200, 300, 600"
          required
        />
      </div>
      <div>
        <label>Processes (comma-separated sizes): </label>
        <input
          type="text"
          value={processInput}
          onChange={(e) => setProcessInput(e.target.value)}
          placeholder="e.g., 212, 417, 112, 426"
          required
        />
      </div>
      <button type="submit">Set Memory and Processes</button>
    </form>
  );
}

export default MemoryBlockForm;
