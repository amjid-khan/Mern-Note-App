import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Notes from "../Notes/Notes";

function Home() {
  const [note, setNotes] = useState("");

  const handleNotes = async () => {
    try {
      await axios.post("http://localhost:8000/api/notes", { content: note });
      toast.success("Saved Notes Successfully");
      setNotes("");
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };




  return (
    <>
      <ToastContainer />
      <div>
        <Navbar />
        <div className="container mt-5">
          <button
            className="btn btn-primary px-4 py-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="fa-solid fa-plus me-2"></i>Add Note
          </button>
        </div>
      </div>

      <div
        className="modal"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Create Your Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <textarea
                className="form-control w-100"
                rows="15"
                style={{ resize: "none" }}
                name="content"
                value={note}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleNotes}
                data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <Notes/>
    </>
  );
}

export default Home;
