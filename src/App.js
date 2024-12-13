import React, { useState } from "react";
import MemoryBlockForm from "./MemoryBlockForm";
import AllocationResults from "./AllocationResults";
import "./App.css";

function App() {
  const [blockSizes, setBlockSizes] = useState([]);
  const [processes, setProcesses] = useState([]);
  const [blocks, setBlocks] = useState([]);

  const handleSimulate = () => {
    const blocks = blockSizes.map((size, id) => ({
      size,
      remaining: size,
      processes: [],
      name: `Block ${id + 1}`,
    }));

    let processId = 1;
    for (const processSize of processes) {
      const process = {
        id: processId,
        size: processSize,
        name: `P${processId} (${processSize})`,
      };

      for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        if (block.remaining >= processSize) {
          block.remaining -= processSize;
          block.processes.push(process);
          break;
        }
      }
      setBlocks(blocks);
      processId += 1;
    }
  };

  return (
    <div className="app-container">
      <h1>First Fit Memory Allocation</h1>
      <MemoryBlockForm
        setMemoryBlocks={setBlockSizes}
        setProcesses={setProcesses}
      />
      <button onClick={handleSimulate} className="simulate-button">
        Simulate
      </button>
      <AllocationResults blocks={blocks} />
    </div>
  );
}

export default App;
