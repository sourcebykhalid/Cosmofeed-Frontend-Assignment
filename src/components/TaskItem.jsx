import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-300 py-2">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className="flex space-x-2">
        <button onClick={() => onEdit(task)} className="text-blue-500">
          <FaEdit />
        </button>
        <button onClick={() => onDelete(task.id)} className="text-red-500">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
