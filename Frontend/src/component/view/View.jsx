import React from "react";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";

function View() {
  const location = useLocation();
  const item = location.state;

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm rounded-4 border-0">
              <div className="card-body p-4">
                <h3 className="mb-3 text-primary fw-semibold">Note Details</h3>
                <p
                  className="text-secondary"
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {item.content}
                </p>
              </div>
              <div className="card-footer bg-white border-0 d-flex justify-content-end px-4 py-3">
                <small className="text-muted">
                  Created: {new Date(item.createdAt).toLocaleDateString()}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
