import React from "react";

function AllocationResults({ blocks }) {
  if (blocks.length === 0) return null;

  return (
    <div>
      <h2>Allocation Results</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Block</th>
              <th>Processes</th>
            </tr>
          </thead>
          <tbody>
            {blocks.map((block, index) => (
              <tr key={index}>
                <td>{`${block.name} (${block.size})`}</td>
                <td>
                  {[
                    ...block.processes
                      .map((process) => process.name)
                      .join(", "),
                  ]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllocationResults;
