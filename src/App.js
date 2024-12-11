import React, { useState } from "react";
import MemoryBlockForm from "./MemoryBlockForm";
import AllocationResults from "./AllocationResults";
import "./App.css"; // Import the CSS file for styling

function App() {
  const [memoryBlocks, setMemoryBlocks] = useState([]);
  const [processes, setProcesses] = useState([]);
  const [allocationResults, setAllocationResults] = useState([]);

  const handleSimulate = () => {
    const blocks = memoryBlocks.map((size) => ({
      size,
      allocated: false,
      processId: null,
    }));

    const results = processes.map((processSize, pid) => {
      for (let i = 0; i < blocks.length; i++) {
        if (!blocks[i].allocated && blocks[i].size >= processSize) {
          blocks[i].allocated = true;
          blocks[i].size -= processSize;
          blocks[i].processId = pid + 1;
          return {
            process: `P${pid + 1} (${processSize})`,
            block: `Block ${i + 1}`,
          };
        }
      }
      return {
        process: `P${pid + 1} (${processSize})`,
        block: "Not Allocated",
      };
    });

    setAllocationResults(results);
  };

  return (
    <div className="app-container">
      <h1>First Fit Memory Allocation</h1>
      <MemoryBlockForm
        setMemoryBlocks={setMemoryBlocks}
        setProcesses={setProcesses}
      />
      <button onClick={handleSimulate} className="simulate-button">
        Simulate
      </button>
      <AllocationResults results={allocationResults} />
    </div>
  );
}

export default App;
