import React from "react";

function AllocationResults({ results }) {
  if (results.length === 0) return null;

  return (
    <div>
      <h2>Allocation Results</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Process</th>
              <th>Allocated Block</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.process}</td>
                <td>{result.block}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllocationResults;
