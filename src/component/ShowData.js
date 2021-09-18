import React from "react";
import DataTable from "./DataTable";
import { carData } from "../module/data";

export default function ShowData() {
  const [filter, setfilter] = React.useState("");
  const [selectedName, setSelectedName] = React.useState("");
  console.log({ selectedName });
  const searchFilter = (event) => {
    setfilter(event.target.value);
  };
  const lowercasedFilter = filter.toLowerCase();
  const filteredData = carData?.filter((item) => {
    return Object.keys(item).some(
      (key) =>
        typeof item[key] === "string" &&
        item[key].toLowerCase().includes(lowercasedFilter)
    );
  });

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-end">
        <input
          type="text"
          className="form-control"
          style={{ width: "200px" }}
          value={filter}
          onChange={searchFilter}
          placeholder="Search"
        />
      </div>
      <div className="mb-3">
        {filteredData && <DataTable carData={filteredData} />}
      </div>
      <div className="d-flex justify-content-end mt-3">
        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalToggleLabel">
                  Book a product
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div>
                  <select
                    name="name"
                    id="name"
                    className="form-select"
                    aria-label="Select Name"
                    onChange={(e) => {
                      setSelectedName(e.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    {carData &&
                      carData.map((item, index) => (
                        <option value={item.name} key={index}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    From <input type="date" className="form-control" />
                  </div>
                  <div className="col">
                    To <input type="date" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  No
                </button>

                <button
                  className="btn btn-primary"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModalToggle2"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalToggleLabel2">
                  Book a product
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center">
                Your estimated price is $400 <br />
                Do you want to proceed?
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  No
                </button>

                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
        <a
          className="btn btn-primary me-3"
          data-bs-toggle="modal"
          href="#exampleModalToggle"
          role="button"
        >
          Book
        </a>

        <div
          className="modal fade"
          id="exampleModalToggle3"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel3"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalToggleLabel3">
                  Return a product
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div>
                  <select
                    name="name"
                    id="name"
                    className="form-select"
                    aria-label="Select Name"
                    onChange={(e) => {
                      setSelectedName(e.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    {carData &&
                      carData.map((item, index) => (
                        <option value={item.name} key={index}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Used Mileage"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  No
                </button>

                <button
                  className="btn btn-primary"
                  data-bs-target="#exampleModalToggle4"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModalToggle4"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel4"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalToggleLabel4">
                  Book a product
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center">
                Your estimated price is $400 <br />
                Do you want to proceed?
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  data-bs-target="#exampleModalToggle3"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  No
                </button>

                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
        <a
          className="btn btn-warning me-3"
          data-bs-toggle="modal"
          href="#exampleModalToggle3"
          role="button"
        >
          Return
        </a>
      </div>
    </div>
  );
}
