import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Notes() {
  const [note, setNotes] = useState([]);

  const getAllNotes = async () => {
    try {
      const result = await axios.get("http://localhost:8000/api/notes");
      setNotes(result.data.viewAllnotes);
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
            <div className="card h-100">
              <div className="card-body">
                <p
                  className="card-text"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.content}
                </p>
              </div>
              <div className="card-footer bg-white border-top d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  {new Date(item.createdAt).toLocaleDateString()}
                </small>
                <div>
                  <button className="btn btn-sm btn-primary me-1">View</button>
                  <button className="btn btn-sm btn-warning me-1">Edit</button>
                  <button
                    onClick={()=>handleDelete(item._id)}
                    className="btn btn-sm btn-danger"
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
