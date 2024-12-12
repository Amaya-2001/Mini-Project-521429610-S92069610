import React, { useState } from "react";
import MemoryBlockForm from "./MemoryBlockForm";
import AllocationResults from "./AllocationResults";
import "./App.css";

function App() {
  const [memoryBlocks, setMemoryBlocks] = useState([]);
  const [processes, setProcesses] = useState([]);
  const [allocationResults, setAllocationResults] = useState([]);

  const handleSimulate = () => {
    // Create a copy of memory blocks to avoid mutating the original array directly
    const blocks = memoryBlocks.map((size) => ({
      size, // Block size
      remaining: size, // Track the remaining space in the block
      processes: [], // Process ID allocated to this block
    }));

    const results = processes.map((processSize, index) => {
      const processId = index + 1;
      for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        if (block.remaining >= processSize) {
          block.remaining -= processSize;
          block.processes.push(processId);
          console.log("block.processes :", block.processes);

          return {
            process: `${processId} (${processSize})`,
            block: `Block ${i + 1} (${block.size})`,
          };
        }
      }

      // If the process could not be fully allocated, check if partial allocation is allowed
      // for (let i = 0; i < blocks.length; i++) {
      //   if (blocks[i].remaining >= processSize) {
      //     // Allocate partially in a block that can accommodate the process
      //     blocks[i].remaining -= processSize; // Decrease remaining size in the block

      //     return {
      //       process: `P${processId} (${processSize})`,
      //       block: `Block ${i + 1} (partially filled)`,
      //     };
      //   }
      // }

      // If the process could not be allocated to any block, return "Not Allocated"
      return {
        process: `P${processId} (${processSize})`,
        block: "Not Allocated",
      };
    });

    // Update the results state with the allocation results
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
