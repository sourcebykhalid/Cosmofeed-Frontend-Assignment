import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const Modal = ({ task, onSave, onClose }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");
  const [dueDate, setDueDate] = useState(task ? task.dueDate : null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: task ? task.id : Date.now(),
      title,
      description,
      dueDate,
      currentState: false, // Default to open
    };
    onSave(newTask);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="bg-white p-5 rounded shadow-md">
        <TextField
          label="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          fullWidth
          className="mb-3"
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={4}
          required
          fullWidth
          className="mb-3"
        />
        <DesktopDatePicker
          label="Due Date"
          className=" ml-36 "
          value={dueDate}
          onChange={(newValue) => setDueDate(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
        <div className="flex justify-end space-x-2 mt-4">
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Save Task
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
