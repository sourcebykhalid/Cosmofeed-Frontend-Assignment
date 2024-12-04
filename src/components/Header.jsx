import React from "react";
import { Button } from "@material-tailwind/react";
import { PlusCircle } from "lucide-react";

export const Header = ({ setModalOpen }) => {
  return (
    <header className="flex justify-between items-center w-full mb-4">
      <h1 className="text-3xl font-bold text-gray-800">Todo App</h1>
      <Button
        color="blue"
        onClick={() => setModalOpen(true)}
        className="flex items-center"
      >
        <PlusCircle className="mr-2" />
        Add Task
      </Button>
    </header>
  );
};
