import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"

function Notes() {
  const navigate = useNavigate()
  const [note, setNotes] = useState([]);

  const getAllNotes = async () => {
    try {
      const result = await axios.get("http://localhost:8000/api/notes");
      setNotes(result.data.viewAllnotes);
      await getAllNotes();
    } catch (error) {
      console.log("Error while fetching notes", error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/notes/${id}`);
      toast.success("Note deleted successfully");
      setNotes((prevNotes) => prevNotes.filter((item) => item._id !== id));
    } catch (error) {
      console.log("Error while deleting note", error);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Notes : {note.length}</h3>
      <div className="row">
        {note.map((item) => (
          <div key={item._id} className="col-md-4 mb-4">
            <div
              className="card h-100 border-0 rounded-4 shadow-sm"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="card-body">
                <h5 className="card-title text-primary fw-semibold mb-2">
                  Note
                </h5>
                <p
                  className="card-text text-secondary"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.content}
                </p>
              </div>
              <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center px-3 py-2">
                <small className="text-muted">
                  {new Date(item.createdAt).toLocaleDateString()}
                </small>
                <div>
                  <button onClick={()=> navigate("/view" , {state : item})}  className="btn btn-sm btn-outline-primary me-1">
                    View
                </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-sm btn-outline-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
