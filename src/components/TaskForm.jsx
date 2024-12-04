import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const TaskForm = ({ onSave }) => {
  const [dueDate, setDueDate] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleDateChange = (newValue) => {
    setDueDate(newValue);
  };

  const handleSave = () => {
    if (title && description && dueDate) {
      // Ensure fields are filled
      const newTask = { title, description, dueDate };
      onSave(newTask); // Call the passed in onSave function
      // Reset fields after saving
      setTitle("");
      setDescription("");
      setDueDate(null);
    } else {
      alert("Please fill in all fields"); // Alert if fields are empty
    }
  };

  return (
    <div className="task-form">
      <TextField
        label="Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        variant="outlined"
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Due Date"
          value={dueDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save Task
      </Button>
    </div>
  );
};

export default TaskForm;
