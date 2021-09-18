import React from "react";

export default function DataTable({ carData }) {
  return (
    <div className="mt-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Code</th>
            <th scope="col">Available</th>
            <th scope="col">Need to Repair</th>
            <th scope="col">Durability</th>
            <th scope="col">Mileage</th>
          </tr>
        </thead>
        <tbody>
          {carData &&
            carData.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.code}</td>
                <td>{item.availability ? "True" : "False"}</td>
                <td>{item.needing_repair ? "True" : "False"}</td>
                <td>
                  <span>{item.durability}</span> {"/"}{" "}
                  <span>{item.max_durability}</span>
                </td>
                <td>{item.mileage ?? "N/A"}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
